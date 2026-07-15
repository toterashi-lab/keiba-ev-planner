import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { buildFeatureRows } from "./model-feature-pipeline.mjs";

const DATABASE_PATH = path.join("data", "jra-free-private", "keiba.sqlite");
const ARTIFACT_PATH = path.join("data", "jra-free-private", "models", "ability-softmax-v1.json");
const MIN_TRAIN_MONTHS = 60;
const CALIBRATION_MONTHS = 12;
const TEST_MONTHS = 6;
const EMBARGO_DAYS = 7;
const FOLD_COUNT = 3;
const EPOCHS = 6;
const FEATURE_KEYS = [
  "fieldSize", "horseNumber", "gateNumber", "age", "carriedWeight", "bodyWeight",
  "bodyWeightDelta", "carriedWeightBodyRatio", "daysSinceLastRace", "careerStarts",
  "priorWinRate", "priorPlaceRate", "priorAverageFinish", "priorAverageFinalSectional",
  "surfaceStarts", "surfaceWinRate", "venueStarts", "venueWinRate", "distanceBandStarts",
  "distanceBandWinRate", "goingStarts", "goingWinRate", "jockeyStarts", "jockeyWinRate",
  "jockeyPlaceRate", "trainerStarts", "trainerWinRate", "trainerPlaceRate",
  "fieldRelativePriorWinRate",
];
const LOG_FEATURES = new Set(["careerStarts", "surfaceStarts", "venueStarts", "distanceBandStarts", "goingStarts", "jockeyStarts", "trainerStarts", "daysSinceLastRace"]);

const db = new DatabaseSync(DATABASE_PATH);
try {
  const coverage = db.prepare(`select min(race_date) minDate,max(race_date) maxDate,count(distinct race_id) races
    from complete_races`).get();
  const queue = db.prepare(`select status,count(*) count from backfill_jobs group by status`).all();
  const pending = queue.filter((row) => row.status !== "complete").reduce((sum, row) => sum + row.count, 0);
  if (pending) throw new Error(`30年バックフィル未完了: 残り${pending}か月`);
  if (!coverage.minDate || monthsBetween(coverage.minDate, coverage.maxDate) < MIN_TRAIN_MONTHS + CALIBRATION_MONTHS + TEST_MONTHS) {
    throw new Error("学習・校正・テスト期間が不足しています");
  }

  const rows = [];
  buildFeatureRows(db, {
    from: coverage.minDate,
    to: coverage.maxDate,
    completeOnly: true,
    collect: false,
    onRow(row) {
      if (Number.isInteger(row.target.finishPosition) && row.target.finishPosition > 0) {
        rows.push({ raceId: row.raceId, horseId: row.horseId, raceDate: row.raceDate, asOfTime: row.asOfTime,
          target: row.target, featureValues: FEATURE_KEYS.map((key) => transform(key, row.features[key])) });
      }
    },
  });
  const races = groupRaces(rows).filter((race) => race.winnerIndex >= 0 && race.rows.length >= 2);
  const foldSpecs = buildFoldSpecs(coverage.minDate, coverage.maxDate);
  const folds = [];
  let finalModel;

  for (const spec of foldSpecs) {
    const train = races.filter((race) => race.date >= spec.trainStart && race.date <= spec.trainEnd);
    const calibration = races.filter((race) => race.date >= spec.calibrationStart && race.date <= spec.calibrationEnd);
    const test = races.filter((race) => race.date >= spec.testStart && race.date <= spec.testEnd);
    if (train.length < 1000 || calibration.length < 100 || test.length < 100) continue;
    const model = fitModel(train);
    const temperature = fitTemperature(model, calibration);
    const metrics = evaluate(model, test, temperature);
    folds.push({ ...spec, trainRaces: train.length, calibrationRaces: calibration.length, testRaces: test.length, temperature, metrics });
    finalModel = { ...model, temperature, test, spec };
  }
  if (!finalModel || folds.length < 2) throw new Error(`有効なwalk-forward foldが不足しています: ${folds.length}`);

  const aggregate = aggregateMetrics(folds);
  const probabilityPass = aggregate.maxProbabilitySumError <= 1e-6 && aggregate.meanEce <= 0.05
    && aggregate.meanLogLoss < aggregate.meanUniformLogLoss;
  const versionHash = crypto.createHash("sha256").update(JSON.stringify({ folds, keys: FEATURE_KEYS })).digest("hex").slice(0, 12);
  const modelVersion = `ability-softmax-v1-${coverage.maxDate}-${versionHash}`;
  const artifact = {
    status: "insufficient_betting_validation",
    probabilityStatus: probabilityPass ? "pass" : "fail",
    modelName: "race-conditional-ability-softmax",
    modelVersion,
    generatedAt: new Date().toISOString(),
    dataCoverage: { ...coverage, rows: rows.length, usableRaces: races.length },
    policy: { minimumTrainMonths: MIN_TRAIN_MONTHS, calibrationMonths: CALIBRATION_MONTHS, testMonths: TEST_MONTHS, embargoDays: EMBARGO_DAYS },
    featureKeys: FEATURE_KEYS,
    means: finalModel.means,
    scales: finalModel.scales,
    weights: finalModel.weights,
    temperature: finalModel.temperature,
    folds,
    metrics: aggregate,
    noTargetLeakage: true,
    sourceTimingVerified: false,
    deploymentStatus: "benchmark_only",
    deploymentReasons: ["historical_source_timing_not_verified", "historical_pre_race_odds_coverage_insufficient", "roi_gate_not_passed"],
  };
  persistRun(db, artifact, finalModel);
  fs.mkdirSync(path.dirname(ARTIFACT_PATH), { recursive: true });
  fs.writeFileSync(ARTIFACT_PATH, `${JSON.stringify(artifact, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ artifact: ARTIFACT_PATH, modelVersion, probabilityPass, folds: folds.length, races: races.length, predictions: finalModel.test.length, metrics: aggregate }, null, 2));
} finally {
  db.close();
}

function groupRaces(rows) {
  const grouped = [];
  for (let start = 0; start < rows.length;) {
    let end = start + 1;
    while (end < rows.length && rows[end].raceId === rows[start].raceId) end += 1;
    const raceRows = rows.slice(start, end);
    grouped.push({ id: raceRows[0].raceId, date: raceRows[0].raceDate, rows: raceRows, winnerIndex: raceRows.findIndex((row) => row.target.won === 1) });
    start = end;
  }
  return grouped;
}

function fitModel(races) {
  const sums = FEATURE_KEYS.map(() => 0);
  const squares = FEATURE_KEYS.map(() => 0);
  const counts = FEATURE_KEYS.map(() => 0);
  for (const race of races) for (const row of race.rows) vector(row).forEach((value, index) => {
    if (!Number.isFinite(value)) return;
    sums[index] += value; squares[index] += value * value; counts[index] += 1;
  });
  const means = sums.map((sum, index) => counts[index] ? sum / counts[index] : 0);
  const scales = squares.map((sum, index) => counts[index]
    ? Math.max(1e-6, Math.sqrt(Math.max(0, sum / counts[index] - means[index] ** 2))) : 1);
  const weights = FEATURE_KEYS.map(() => 0);
  for (let epoch = 0; epoch < EPOCHS; epoch += 1) {
    const learningRate = 0.035 / Math.sqrt(epoch + 1);
    for (const race of races) {
      const vectors = race.rows.map((row) => standardizedVector(row, means, scales));
      const probabilities = softmax(vectors.map((row) => dot(weights, row)));
      for (let runner = 0; runner < vectors.length; runner += 1) {
        const error = probabilities[runner] - (runner === race.winnerIndex ? 1 : 0);
        for (let feature = 0; feature < weights.length; feature += 1) {
          weights[feature] -= learningRate * (error * vectors[runner][feature] / vectors.length + 0.00005 * weights[feature]);
        }
      }
    }
  }
  return { means, scales, weights };
}

function fitTemperature(model, races) {
  let best = { temperature: 1, loss: Infinity };
  for (let temperature = 0.5; temperature <= 2.5 + 1e-9; temperature += 0.02) {
    const metrics = evaluate(model, races, temperature);
    if (metrics.logLoss < best.loss) best = { temperature, loss: metrics.logLoss };
  }
  return round(best.temperature, 4);
}

function evaluate(model, races, temperature) {
  let logLoss = 0;
  let uniformLogLoss = 0;
  let brier = 0;
  let maxProbabilitySumError = 0;
  const bins = Array.from({ length: 10 }, () => ({ count: 0, confidence: 0, wins: 0 }));
  for (const race of races) {
    const probabilities = predictRace(model, race, temperature);
    logLoss -= Math.log(Math.max(1e-12, probabilities[race.winnerIndex]));
    uniformLogLoss += Math.log(race.rows.length);
    maxProbabilitySumError = Math.max(maxProbabilitySumError, Math.abs(1 - probabilities.reduce((sum, value) => sum + value, 0)));
    for (let index = 0; index < probabilities.length; index += 1) {
      const target = index === race.winnerIndex ? 1 : 0;
      brier += (probabilities[index] - target) ** 2 / probabilities.length;
      const bin = bins[Math.min(9, Math.floor(probabilities[index] * 10))];
      bin.count += 1; bin.confidence += probabilities[index]; bin.wins += target;
    }
  }
  const entries = bins.reduce((sum, bin) => sum + bin.count, 0);
  const errors = bins.filter((bin) => bin.count).map((bin) => ({ count: bin.count, error: Math.abs(bin.wins / bin.count - bin.confidence / bin.count) }));
  return {
    logLoss: logLoss / races.length,
    uniformLogLoss: uniformLogLoss / races.length,
    brier: brier / races.length,
    ece: errors.reduce((sum, bin) => sum + bin.count * bin.error, 0) / entries,
    maxCalibrationBinError: Math.max(...errors.map((bin) => bin.error)),
    maxProbabilitySumError,
  };
}

function predictRace(model, race, temperature = model.temperature ?? 1) {
  return softmax(race.rows.map((row) => dot(model.weights, standardizedVector(row, model.means, model.scales)) / temperature));
}

function persistRun(database, artifact, finalModel) {
  const now = artifact.generatedAt;
  database.exec("begin immediate");
  try {
    let run = database.prepare("select id from model_runs where model_name=? and model_version=?").get(artifact.modelName, artifact.modelVersion);
    if (!run) {
      const result = database.prepare(`insert into model_runs(model_name,model_version,train_start,train_end,validation_start,validation_end,metrics_json,created_at)
        values(?,?,?,?,?,?,?,?)`).run(artifact.modelName, artifact.modelVersion, finalModel.spec.trainStart, finalModel.spec.trainEnd, finalModel.spec.testStart, finalModel.spec.testEnd, JSON.stringify(artifact.metrics), now);
      run = { id: Number(result.lastInsertRowid) };
    } else {
      database.prepare("delete from model_quality_gates where model_run_id=?").run(run.id);
      database.prepare("delete from predictions where model_run_id=?").run(run.id);
    }
    const gate = database.prepare(`insert into model_quality_gates(model_run_id,gate_name,status,metric_value,threshold_value,details_json,checked_at)
      values(?,?,?,?,?,?,?)`);
    gate.run(run.id, "calibration", artifact.metrics.meanEce <= 0.05 ? "pass" : "fail", artifact.metrics.meanEce, 0.05, JSON.stringify({ folds: artifact.folds.length }), now);
    gate.run(run.id, "walk_forward", artifact.probabilityStatus, artifact.metrics.meanLogLoss - artifact.metrics.meanUniformLogLoss, 0, JSON.stringify({ folds: artifact.folds.length }), now);
    gate.run(run.id, "odds_coverage", "insufficient", 0, 0.995, JSON.stringify({ reason: "30年無料結果データに全買い目の締切前オッズ履歴なし" }), now);
    gate.run(run.id, "odds_freshness", "insufficient", null, 300, JSON.stringify({ reason: "今後の締切前スナップショットを日次蓄積中" }), now);
    gate.run(run.id, "drawdown", "insufficient", null, -0.25, JSON.stringify({ reason: "ROI検証対象オッズが未充足" }), now);
    const insertPrediction = database.prepare(`insert into predictions(race_id,horse_id,model_run_id,as_of_time,win_probability) values(?,?,?,?,?)`);
    for (const race of finalModel.test) {
      const probabilities = predictRace(finalModel, race, finalModel.temperature);
      race.rows.forEach((row, index) => insertPrediction.run(race.id, row.horseId, run.id, row.asOfTime, probabilities[index]));
    }
    database.exec("commit");
  } catch (error) {
    database.exec("rollback");
    throw error;
  }
}

function buildFoldSpecs(minDate, maxDate) {
  const specs = [];
  for (let offset = FOLD_COUNT - 1; offset >= 0; offset -= 1) {
    const testEnd = addMonths(monthStart(maxDate), -offset * TEST_MONTHS, true);
    const testStart = addMonths(monthStart(testEnd), -(TEST_MONTHS - 1));
    const calibrationEnd = addDays(testStart, -(EMBARGO_DAYS + 1));
    const calibrationStart = addMonths(monthStart(calibrationEnd), -(CALIBRATION_MONTHS - 1));
    const trainEnd = addDays(calibrationStart, -(EMBARGO_DAYS + 1));
    if (monthsBetween(minDate, trainEnd) < MIN_TRAIN_MONTHS) continue;
    specs.push({ trainStart: minDate, trainEnd, calibrationStart, calibrationEnd, testStart, testEnd: offset === 0 ? maxDate : testEnd });
  }
  return specs;
}

function vector(row) { return row.featureValues ?? FEATURE_KEYS.map((key) => transform(key, row.features[key])); }
function standardizedVector(row, means, scales) { return vector(row).map((value, index) => Number.isFinite(value) ? (value - means[index]) / scales[index] : 0); }
function transform(key, value) { const number = Number(value); return Number.isFinite(number) ? (LOG_FEATURES.has(key) ? Math.log1p(Math.max(0, number)) : number) : NaN; }
function softmax(scores) { const max = Math.max(...scores); const values = scores.map((score) => Math.exp(Math.max(-40, Math.min(40, score - max)))); const total = values.reduce((sum, value) => sum + value, 0); return values.map((value) => value / total); }
function dot(left, right) { return left.reduce((sum, value, index) => sum + value * right[index], 0); }
function mean(values) { return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0; }
function aggregateMetrics(folds) { const keys = ["logLoss", "uniformLogLoss", "brier", "ece", "maxCalibrationBinError"]; const result = Object.fromEntries(keys.map((key) => [`mean${key[0].toUpperCase()}${key.slice(1)}`, mean(folds.map((fold) => fold.metrics[key]))])); result.maxProbabilitySumError = Math.max(...folds.map((fold) => fold.metrics.maxProbabilitySumError)); return result; }
function monthStart(date) { return `${date.slice(0, 7)}-01`; }
function addMonths(date, count, endOfMonth = false) { const value = new Date(`${date}T00:00:00Z`); value.setUTCMonth(value.getUTCMonth() + count); if (endOfMonth) { value.setUTCMonth(value.getUTCMonth() + 1); value.setUTCDate(0); } return value.toISOString().slice(0, 10); }
function addDays(date, count) { const value = new Date(`${date}T00:00:00Z`); value.setUTCDate(value.getUTCDate() + count); return value.toISOString().slice(0, 10); }
function monthsBetween(left, right) { return (Number(right.slice(0, 4)) - Number(left.slice(0, 4))) * 12 + Number(right.slice(5, 7)) - Number(left.slice(5, 7)); }
function round(value, digits) { const scale = 10 ** digits; return Math.round(value * scale) / scale; }
