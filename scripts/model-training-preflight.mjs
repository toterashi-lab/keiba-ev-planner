import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { evaluate, fitModel, fitTemperature, loadTrainingRaces, runFeatureAblation } from "./train-expectancy-model.mjs";

const DATABASE = path.join("data", "jra-free-private", "keiba.sqlite");
const OUTPUT = path.join("data", "jra-free-private", "models", "training-preflight.json");
const started = Date.now();
const db = new DatabaseSync(DATABASE, { readOnly: true });
db.exec("PRAGMA busy_timeout=30000;");

try {
  const coverage = db.prepare(`select min(race_date) minDate,max(race_date) maxDate,count(*) races,
    (select count(*) from complete_race_entries) runners from complete_races`).get();
  if (!coverage.minDate || coverage.races < 5000) throw new Error(`実DBプリフライトに必要なレース数が不足しています: ${coverage.races}`);

  const featureStarted = Date.now();
  const { rows, races, featureTiming } = loadTrainingRaces(db, { from: coverage.minDate, to: coverage.maxDate });
  const featureMs = Date.now() - featureStarted;
  if (races.length < 5000 || rows.length < 50000) throw new Error(`有効な学習行が不足しています: races=${races.length}, rows=${rows.length}`);

  const trainCutDate = races[Math.floor(races.length * 0.64)].date;
  const calibrationCutDate = races[Math.floor(races.length * 0.82)].date;
  const calibrationStart = addDays(trainCutDate, 8);
  const testStart = addDays(calibrationCutDate, 8);
  const train = races.filter((race) => race.date <= trainCutDate);
  const calibration = races.filter((race) => race.date >= calibrationStart && race.date <= calibrationCutDate);
  const test = races.filter((race) => race.date >= testStart);
  if (train.length < 3000 || calibration.length < 500 || test.length < 500) {
    throw new Error(`時系列分割が不足しています: train=${train.length}, calibration=${calibration.length}, test=${test.length}`);
  }

  const fitStarted = Date.now();
  const ablation = runFeatureAblation(train, calibration);
  const model = fitModel(train, ablation.selectedFeatureIndexes);
  const fitMs = Date.now() - fitStarted;
  const calibrationStarted = Date.now();
  const temperature = fitTemperature(model, calibration);
  const calibrationMs = Date.now() - calibrationStarted;
  const metrics = evaluate(model, test, temperature);
  const elapsedMs = Date.now() - started;
  const finiteMetrics = ["logLoss", "uniformLogLoss", "brier", "ece", "maxCalibrationBinError", "maxProbabilitySumError"]
    .every((key) => Number.isFinite(metrics[key]));
  if (!finiteMetrics || metrics.maxProbabilitySumError > 1e-6) {
    throw new Error(`数値健全性検査に失敗しました: ${JSON.stringify(metrics)}`);
  }

  const researchPass = metrics.logLoss < metrics.uniformLogLoss && metrics.ece <= 0.025
    && metrics.maxCalibrationBinError <= 0.075 && metrics.maxProbabilitySumError <= 1e-6 && !ablation.fallback;
  const report = {
    status: "pass",
    checkedAt: new Date().toISOString(),
    readOnly: true,
    coverage,
    usable: { races: races.length, rows: rows.length },
    featureTiming,
    split: {
      train: train.length, trainEnd: trainCutDate,
      calibration: calibration.length, calibrationStart, calibrationEnd: calibrationCutDate,
      test: test.length, testStart, testEnd: coverage.maxDate,
      embargoDays: 7,
    },
    timingMs: { features: featureMs, fit: fitMs, calibration: calibrationMs, total: elapsedMs },
    memoryMb: {
      heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      rss: Math.round(process.memoryUsage().rss / 1024 / 1024),
    },
    temperature,
    features: { total: model.weights.length, selected: ablation.selectedFeatureIndexes.length },
    featureAdmission: {
      method: ablation.method,
      selectedGroups: ablation.selectedGroups,
      selectedFeatureIndexes: ablation.selectedFeatureIndexes,
      fallback: ablation.fallback,
      thresholds: ablation.thresholds,
      groups: ablation.groups,
    },
    metrics,
    researchSignal: researchPass ? "research_pass_candidate" : "research_gate_not_met_yet",
    projectedFullRunMinutes: Number(((elapsedMs * (105000 / races.length)) / 60000).toFixed(1)),
    projectedFullRssMb: Math.round((process.memoryUsage().rss / 1024 / 1024) * (105000 / races.length)),
  };
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(report, null, 2));
} finally {
  db.close();
}

function addDays(date, count) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + count);
  return value.toISOString().slice(0, 10);
}
