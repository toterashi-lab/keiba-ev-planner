import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { buildFeatureRows } from "./model-feature-pipeline.mjs";
import { MODEL_VALIDATION_POLICY } from "../model/validation-policy.mjs";

const DATABASE_PATH = path.join("data", "jra-free-private", "keiba.sqlite");
const ARTIFACT_PATH = path.join("data", "jra-free-private", "models", "ability-softmax-v1.json");
const MIN_TRAIN_MONTHS = 60;
const CALIBRATION_MONTHS = 12;
const TEST_MONTHS = 6;
const EMBARGO_DAYS = 7;
const FOLD_COUNT = 3;
const EPOCHS = 6;
export const FEATURE_KEYS = [
  "fieldSize", "horseNumber", "gateNumber", "age", "carriedWeight", "bodyWeight",
  "bodyWeightDelta", "carriedWeightBodyRatio", "daysSinceLastRace", "careerStarts",
  "priorWinRate", "priorPlaceRate", "priorAverageFinish", "priorAverageFinalSectional",
  "surfaceStarts", "surfaceWinRate", "venueStarts", "venueWinRate", "distanceBandStarts",
  "distanceBandWinRate", "goingStarts", "goingWinRate", "jockeyStarts", "jockeyWinRate",
  "jockeyPlaceRate", "trainerStarts", "trainerWinRate", "trainerPlaceRate",
  "fieldRelativePriorWinRate",
];
export const MODEL_FEATURE_GROUPS = [
  { id: "race_context", indexes: [0, 1, 2] },
  { id: "body_load", indexes: [3, 4, 5, 6, 7] },
  { id: "horse_form", indexes: [8, 9, 10, 11, 12, 13] },
  { id: "horse_suitability", indexes: [14, 15, 16, 17, 18, 19, 20, 21] },
  { id: "connections", indexes: [22, 23, 24, 25, 26, 27] },
  { id: "field_strength", indexes: [28] },
];
const LOG_FEATURES = new Set(["careerStarts", "surfaceStarts", "venueStarts", "distanceBandStarts", "goingStarts", "jockeyStarts", "trainerStarts", "daysSinceLastRace"]);

export function trainExpectancyModel() {
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

  const { rows, races } = loadTrainingRaces(db, { from: coverage.minDate, to: coverage.maxDate });
  const foldSpecs = buildFoldSpecs(coverage.minDate, coverage.maxDate);
  const folds = [];
  let lastValidationModel;

  for (const spec of foldSpecs) {
    const train = races.filter((race) => race.date >= spec.trainStart && race.date <= spec.trainEnd);
    const calibration = races.filter((race) => race.date >= spec.calibrationStart && race.date <= spec.calibrationEnd);
    const test = races.filter((race) => race.date >= spec.testStart && race.date <= spec.testEnd);
    if (train.length < 1000 || calibration.length < 100 || test.length < 100) continue;
    const ablation = runFeatureAblation(train, calibration);
    const model = fitModel(train, ablation.selectedFeatureIndexes);
    const temperature = fitTemperature(model, calibration);
    const metrics = evaluate(model, test, temperature);
    folds.push({ ...spec, trainRaces: train.length, calibrationRaces: calibration.length, testRaces: test.length,
      temperature, selectedFeatureGroups: ablation.selectedGroups, selectedFeatureIndexes: ablation.selectedFeatureIndexes,
      featureSelectionFallback: ablation.fallback, featureAblation: ablation.groups, metrics });
    lastValidationModel = { ...model, temperature, test, spec };
  }
  if (!lastValidationModel || folds.length < 2) throw new Error(`有効なwalk-forward foldが不足しています: ${folds.length}`);

  const aggregate = aggregateMetrics(folds);
  const featureAdmission = aggregateFeatureAdmission(folds);
  const researchProbabilityPass = aggregate.maxProbabilitySumError <= 1e-6 && aggregate.meanEce <= 0.025
    && aggregate.meanMaxCalibrationBinError <= 0.075 && aggregate.meanLogLoss < aggregate.meanUniformLogLoss
    && folds.every((fold) => fold.metrics.logLoss < fold.metrics.uniformLogLoss && !fold.featureSelectionFallback)
    && featureAdmission.admittedGroups.length > 0;
  const deploymentModel = fitModel(races, featureAdmission.activeFeatureIndexes);
  deploymentModel.temperature = median(folds.map((fold) => fold.temperature));
  const versionHash = crypto.createHash("sha256").update(JSON.stringify({ folds, featureAdmission, keys: FEATURE_KEYS })).digest("hex").slice(0, 12);
  const modelVersion = `ability-softmax-v1-${coverage.maxDate}-${versionHash}`;
  const artifact = {
    status: "insufficient_betting_validation",
    probabilityStatus: "insufficient",
    researchProbabilityStatus: researchProbabilityPass ? "research_pass" : "fail",
    modelName: "race-conditional-ability-softmax",
    modelVersion,
    generatedAt: new Date().toISOString(),
    dataCoverage: { ...coverage, rows: rows.length, usableRaces: races.length },
    policy: { minimumTrainMonths: MIN_TRAIN_MONTHS, calibrationMonths: CALIBRATION_MONTHS, testMonths: TEST_MONTHS, embargoDays: EMBARGO_DAYS },
    featureKeys: FEATURE_KEYS,
    activeFeatureKeys: featureAdmission.activeFeatureIndexes.map((index) => FEATURE_KEYS[index]),
    activeFeatureIndexes: featureAdmission.activeFeatureIndexes,
    featureAdmission,
    means: deploymentModel.means,
    scales: deploymentModel.scales,
    weights: deploymentModel.weights,
    temperature: deploymentModel.temperature,
    folds,
    metrics: aggregate,
    noTargetLeakage: true,
    sourceTimingVerified: false,
    deploymentStatus: "benchmark_only",
    deploymentReasons: ["historical_source_timing_not_verified", "historical_pre_race_odds_coverage_insufficient", "roi_gate_not_passed"],
  };
  persistRun(db, artifact, lastValidationModel);
  fs.mkdirSync(path.dirname(ARTIFACT_PATH), { recursive: true });
  fs.writeFileSync(ARTIFACT_PATH, `${JSON.stringify(artifact, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ artifact: ARTIFACT_PATH, modelVersion, researchProbabilityPass, strictProbabilityStatus: artifact.probabilityStatus, folds: folds.length, races: races.length, predictions: lastValidationModel.test.length, metrics: aggregate }, null, 2));
} finally {
  db.close();
}
}

export function loadTrainingRaces(database, options) {
  const rows = [];
  buildFeatureRows(database, {
    from: options.from,
    to: options.to,
    completeOnly: options.completeOnly !== false,
    collect: false,
    onRow(row) {
      if (Number.isInteger(row.target.finishPosition) && row.target.finishPosition > 0) {
        rows.push({ raceId: row.raceId, horseId: row.horseId, raceDate: row.raceDate, asOfTime: row.asOfTime,
          target: row.target, featureValues: FEATURE_KEYS.map((key) => transform(key, row.features[key])) });
      }
    },
  });
  return { rows, races: groupRaces(rows).filter((race) => race.winnerIndex >= 0 && race.rows.length >= 2) };
}

export function groupRaces(rows) {
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

export function fitModel(races, activeFeatureIndexes = FEATURE_KEYS.map((_, index) => index)) {
  const active = new Set(activeFeatureIndexes);
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
          if (!active.has(feature)) continue;
          weights[feature] -= learningRate * (error * vectors[runner][feature] / vectors.length + 0.00005 * weights[feature]);
        }
      }
    }
  }
  return { means, scales, weights, activeFeatureIndexes: [...activeFeatureIndexes] };
}

export function runFeatureAblation(trainRaces, calibrationRaces) {
  const policy = MODEL_VALIDATION_POLICY.featureAdmission;
  const allIndexes = FEATURE_KEYS.map((_, index) => index);
  const fullModel = fitModel(trainRaces, allIndexes);
  const fullTemperature = fitTemperature(fullModel, calibrationRaces);
  const fullMetrics = evaluate(fullModel, calibrationRaces, fullTemperature);
  const groups = MODEL_FEATURE_GROUPS.map((group) => {
    const removed = new Set(group.indexes);
    const ablatedIndexes = allIndexes.filter((index) => !removed.has(index));
    const ablatedModel = fitModel(trainRaces, ablatedIndexes);
    const ablatedTemperature = fitTemperature(ablatedModel, calibrationRaces);
    const ablatedMetrics = evaluate(ablatedModel, calibrationRaces, ablatedTemperature);
    const logLossImprovement = ablatedMetrics.logLoss - fullMetrics.logLoss;
    const eceRegression = fullMetrics.ece - ablatedMetrics.ece;
    const pass = logLossImprovement >= policy.minimumLogLossImprovement
      && (!policy.rejectOnCalibrationRegression || eceRegression <= policy.maximumEceRegression)
      && fullMetrics.maxCalibrationBinError <= 0.075;
    return {
      id: group.id,
      indexes: group.indexes,
      featureKeys: group.indexes.map((index) => FEATURE_KEYS[index]),
      pass,
      logLossImprovement,
      eceRegression,
      full: summarizeMetrics(fullMetrics),
      ablated: summarizeMetrics(ablatedMetrics),
    };
  });
  const selectedGroups = groups.filter((group) => group.pass).map((group) => group.id);
  const selectedFeatureIndexes = MODEL_FEATURE_GROUPS
    .filter((group) => selectedGroups.includes(group.id))
    .flatMap((group) => group.indexes);
  return {
    method: policy.method,
    selectedGroups,
    selectedFeatureIndexes: selectedFeatureIndexes.length ? selectedFeatureIndexes : allIndexes,
    fallback: selectedFeatureIndexes.length === 0,
    thresholds: {
      minimumLogLossImprovement: policy.minimumLogLossImprovement,
      maximumEceRegression: policy.maximumEceRegression,
    },
    groups,
  };
}

export function aggregateFeatureAdmission(folds) {
  const policy = MODEL_VALIDATION_POLICY.featureAdmission;
  const groups = MODEL_FEATURE_GROUPS.map((group) => {
    const results = folds.map((fold) => fold.featureAblation.find((item) => item.id === group.id));
    const passedFolds = results.filter((result) => result?.pass).length;
    const foldPassRate = passedFolds / folds.length;
    return {
      id: group.id,
      indexes: group.indexes,
      featureKeys: group.indexes.map((index) => FEATURE_KEYS[index]),
      passedFolds,
      totalFolds: folds.length,
      foldPassRate,
      meanLogLossImprovement: mean(results.map((result) => result.logLossImprovement)),
      meanEceRegression: mean(results.map((result) => result.eceRegression)),
      admitted: foldPassRate >= policy.minimumFoldPassRate,
    };
  });
  const admittedGroups = groups.filter((group) => group.admitted).map((group) => group.id);
  const admittedIndexes = groups.filter((group) => group.admitted).flatMap((group) => group.indexes);
  const fallback = admittedIndexes.length === 0;
  return {
    method: policy.method,
    minimumFoldPassRate: policy.minimumFoldPassRate,
    admittedGroups,
    activeFeatureIndexes: fallback ? FEATURE_KEYS.map((_, index) => index) : admittedIndexes,
    fallback,
    groups,
  };
}

export function fitTemperature(model, races) {
  let best = { temperature: 1, loss: Infinity };
  for (let temperature = 0.5; temperature <= 2.5 + 1e-9; temperature += 0.02) {
    const loss = mean(races.map((race) => {
      const probabilities = predictRace(model, race, temperature);
      return -Math.log(Math.max(1e-12, probabilities[race.winnerIndex]));
    }));
    if (loss < best.loss) best = { temperature, loss };
  }
  return round(best.temperature, 4);
}

export function evaluate(model, races, temperature) {
  let logLoss = 0;
  let uniformLogLoss = 0;
  let brier = 0;
  let maxProbabilitySumError = 0;
  const calibrationRows = [];
  for (const race of races) {
    const probabilities = predictRace(model, race, temperature);
    logLoss -= Math.log(Math.max(1e-12, probabilities[race.winnerIndex]));
    uniformLogLoss += Math.log(race.rows.length);
    maxProbabilitySumError = Math.max(maxProbabilitySumError, Math.abs(1 - probabilities.reduce((sum, value) => sum + value, 0)));
    for (let index = 0; index < probabilities.length; index += 1) {
      const target = index === race.winnerIndex ? 1 : 0;
      brier += (probabilities[index] - target) ** 2 / probabilities.length;
      calibrationRows.push({ probability: probabilities[index], target });
    }
  }
  calibrationRows.sort((left, right) => left.probability - right.probability);
  const bins = [];
  for (let index = 0; index < 10; index += 1) {
    const start = Math.floor(index * calibrationRows.length / 10);
    const end = Math.floor((index + 1) * calibrationRows.length / 10);
    const rows = calibrationRows.slice(start, end);
    if (!rows.length) continue;
    const predicted = mean(rows.map((row) => row.probability));
    const observed = mean(rows.map((row) => row.target));
    bins.push({ index: index + 1, count: rows.length, predicted, observed, error: Math.abs(observed - predicted),
      minProbability: rows[0].probability, maxProbability: rows.at(-1).probability });
  }
  const entries = calibrationRows.length;
  return {
    logLoss: logLoss / races.length,
    uniformLogLoss: uniformLogLoss / races.length,
    brier: brier / races.length,
    ece: bins.reduce((sum, bin) => sum + bin.count * bin.error, 0) / entries,
    maxCalibrationBinError: Math.max(...bins.map((bin) => bin.error)),
    maxProbabilitySumError,
    calibrationMethod: "equal-frequency-deciles",
    calibrationBins: bins,
  };
}

export function predictRace(model, race, temperature = model.temperature ?? 1) {
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
    const researchStatus = artifact.researchProbabilityStatus === "research_pass" ? "pass" : "fail";
    gate.run(run.id, "no_target_leakage", "pass", 1, 1, JSON.stringify({ targetResultExcludedFromFeatures: true }), now);
    gate.run(run.id, "feature_observation_time_coverage", "insufficient", 0, 0.995, JSON.stringify({ reason: "historical result pages do not prove pre-race observation timestamps" }), now);
    gate.run(run.id, "prediction_probability_sum_error", artifact.metrics.maxProbabilitySumError <= 1e-6 ? "pass" : "fail", artifact.metrics.maxProbabilitySumError, 1e-6, JSON.stringify({ folds: artifact.folds.length }), now);
    gate.run(run.id, "log_loss_vs_market_delta", "insufficient", null, 0, JSON.stringify({ reason: "historical full-field closing win odds coverage is insufficient" }), now);
    gate.run(run.id, "brier_score_vs_market_delta", "insufficient", null, 0, JSON.stringify({ reason: "historical full-field closing win odds coverage is insufficient" }), now);
    gate.run(run.id, "expected_calibration_error", artifact.metrics.meanEce <= 0.025 ? "pass" : "fail", artifact.metrics.meanEce, 0.025, JSON.stringify({ folds: artifact.folds.length }), now);
    gate.run(run.id, "max_calibration_bin_error", artifact.metrics.meanMaxCalibrationBinError <= 0.075 ? "pass" : "fail", artifact.metrics.meanMaxCalibrationBinError, 0.075, JSON.stringify({ folds: artifact.folds.length }), now);
    gate.run(run.id, "favorite_longshot_adjustment_oos_delta", "insufficient", null, 0, JSON.stringify({ reason: "historical market odds coverage is insufficient" }), now);
    gate.run(run.id, "stacking_weight_fold_stddev", "insufficient", null, 0.15, JSON.stringify({ reason: "market stacking cannot be fitted without historical odds" }), now);
    gate.run(run.id, "calibration", artifact.metrics.meanEce <= 0.025 ? "pass" : "fail", artifact.metrics.meanEce, 0.025, JSON.stringify({ folds: artifact.folds.length }), now);
    gate.run(run.id, "walk_forward", researchStatus, artifact.metrics.meanLogLoss - artifact.metrics.meanUniformLogLoss, 0, JSON.stringify({ folds: artifact.folds.length, baseline: "uniform-within-race" }), now);
    gate.run(run.id, "odds_coverage", "insufficient", 0, 0.995, JSON.stringify({ reason: "30年無料結果データに全買い目の締切前オッズ履歴なし" }), now);
    gate.run(run.id, "odds_freshness", "insufficient", null, 300, JSON.stringify({ reason: "今後の締切前スナップショットを日次蓄積中" }), now);
    gate.run(run.id, "drawdown", "insufficient", null, -0.25, JSON.stringify({ reason: "ROI検証対象オッズが未充足" }), now);
    gate.run(run.id, "pre_race_odds_coverage", "insufficient", 0, 0.995, JSON.stringify({ reason: "future snapshots are accumulating daily" }), now);
    gate.run(run.id, "odds_freshness_p95_seconds", "insufficient", null, 300, JSON.stringify({ reason: "insufficient historical snapshots" }), now);
    gate.run(run.id, "positive_ev_roi_ci95_lower", "insufficient", null, 1, JSON.stringify({ reason: "minimum historical bets not reached" }), now);
    gate.run(run.id, "maximum_drawdown", "insufficient", null, -0.25, JSON.stringify({ reason: "ROI validation unavailable" }), now);
    gate.run(run.id, "minimum_bets", "insufficient", 0, 1000, JSON.stringify({ reason: "future snapshots are accumulating daily" }), now);
    gate.run(run.id, "minimum_race_days", "insufficient", 0, 180, JSON.stringify({ reason: "future snapshots are accumulating daily" }), now);
    gate.run(run.id, "late_odds_movement_coverage", "insufficient", 0, 0.995, JSON.stringify({ reason: "future snapshots are accumulating daily" }), now);
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

export function buildFoldSpecs(minDate, maxDate) {
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
function median(values) { const sorted = [...values].sort((left, right) => left - right); const middle = Math.floor(sorted.length / 2); return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2; }
function summarizeMetrics(metrics) { return { logLoss: metrics.logLoss, ece: metrics.ece, maxCalibrationBinError: metrics.maxCalibrationBinError }; }
function aggregateMetrics(folds) { const keys = ["logLoss", "uniformLogLoss", "brier", "ece", "maxCalibrationBinError"]; const result = Object.fromEntries(keys.map((key) => [`mean${key[0].toUpperCase()}${key.slice(1)}`, mean(folds.map((fold) => fold.metrics[key]))])); result.maxProbabilitySumError = Math.max(...folds.map((fold) => fold.metrics.maxProbabilitySumError)); result.calibrationMethod = "equal-frequency-deciles"; return result; }
function monthStart(date) { return `${date.slice(0, 7)}-01`; }
function addMonths(date, count, endOfMonth = false) { const value = new Date(`${date}T00:00:00Z`); value.setUTCMonth(value.getUTCMonth() + count); if (endOfMonth) { value.setUTCMonth(value.getUTCMonth() + 1); value.setUTCDate(0); } return value.toISOString().slice(0, 10); }
function addDays(date, count) { const value = new Date(`${date}T00:00:00Z`); value.setUTCDate(value.getUTCDate() + count); return value.toISOString().slice(0, 10); }
function monthsBetween(left, right) { return (Number(right.slice(0, 4)) - Number(left.slice(0, 4))) * 12 + Number(right.slice(5, 7)) - Number(left.slice(5, 7)); }
function round(value, digits) { const scale = 10 ** digits; return Math.round(value * scale) / scale; }

if (import.meta.url === pathToFileURL(process.argv[1]).href) trainExpectancyModel();
