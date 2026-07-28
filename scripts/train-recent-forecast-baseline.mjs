import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { FEATURE_KEYS, fitModel, fitTemperature, evaluate, loadTrainingRaces, predictRace } from "./train-expectancy-model.mjs";
import { captureModelDataSnapshot, captureModelImplementationSnapshot } from "./model-data-snapshot.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";
import { INDEPENDENT_PROBABILITY_ENGINE_VERSION, selectRacewiseCalibrator } from "../model/independent-probability-engine.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DATABASE_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const ARTIFACT_PATH = path.join(PRIVATE_DIR, "models", "ability-softmax-v1.json");
const WINDOW_MONTHS = 12;
const TRAIN_MONTHS = 6;
const CALIBRATION_MONTHS = 2;
const TEST_MONTHS = 2;
const EMBARGO_DAYS = 7;

export function trainRecentForecastBaseline(options = {}) {
  const db = new DatabaseSync(options.databasePath ?? DATABASE_PATH);
  db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
  try {
    const coverage = db.prepare("select min(race_date) minDate,max(race_date) maxDate,count(*) races from complete_races").get();
    if (!coverage.maxDate) throw new Error("確定済みレースがありません");
    const to = options.to ?? coverage.maxDate;
    const from = options.from ?? addMonths(monthStart(to), -(WINDOW_MONTHS - 1));
    // 直近モデルは古い履歴を全件展開せず、18か月の助走期間だけを特徴量に使う。
    const historyFrom = addMonths(monthStart(from), -18);
    const { races, featureTiming } = loadTrainingRaces(db, { from, to, historyFrom });
    const folds = buildRecentFolds(from, to);
    const evaluated = folds.map((spec) => evaluateFold(races, spec)).filter(Boolean);
    if (evaluated.length < 2) throw new Error(`直近モデルのwalk-forward分割が不足しています: ${evaluated.length}`);

    const finalTrainEnd = evaluated.at(-1).spec.calibrationEnd;
    const finalTraining = races.filter((race) => race.date >= from && race.date <= finalTrainEnd);
    const finalCalibration = races.filter((race) => race.date >= evaluated.at(-1).spec.calibrationStart && race.date <= evaluated.at(-1).spec.calibrationEnd);
    if (finalTraining.length < 1000 || finalCalibration.length < 100) throw new Error("直近モデルの学習・校正サンプルが不足しています");
    const model = fitModel(finalTraining);
    const { fitting, selection } = splitCalibration(finalCalibration);
    const temperature = fitTemperature(model, fitting);
    const racewiseCalibration = selectRacewiseCalibrator({ fittingRaces: fitting, selectionRaces: selection,
      minimumSamples: 500, predict: (race) => predictRace(model, race, temperature) });
    const aggregate = aggregateMetrics(evaluated);
    const trainingSnapshot = captureModelDataSnapshot(db);
    const trainingImplementation = captureModelImplementationSnapshot(ROOT);
    const versionHash = crypto.createHash("sha256").update(JSON.stringify({ from, to, folds: evaluated.map((fold) => fold.spec), aggregate })).digest("hex").slice(0, 12);
    const artifact = {
      status: "benchmark_only",
      modelName: "recent-window-ability-softmax",
      modelVersion: `recent-ability-v1-${to}-${versionHash}`,
      generatedAt: new Date().toISOString(),
      dataCoverage: { from, to, historyFrom, usableRaces: races.length, windowMonths: WINDOW_MONTHS },
      trainingSnapshot,
      trainingImplementation,
      policy: {
        split: "expanding-window-walk-forward",
        trainMonths: TRAIN_MONTHS,
        calibrationMonths: CALIBRATION_MONTHS,
        testMonths: TEST_MONTHS,
        embargoDays: EMBARGO_DAYS,
      },
      featureKeys: FEATURE_KEYS,
      activeFeatureIndexes: FEATURE_KEYS.map((_, index) => index),
      activeFeatureKeys: FEATURE_KEYS,
      means: model.means,
      scales: model.scales,
      weights: model.weights,
      temperature,
      racewiseCalibrator: racewiseCalibration.calibrator,
      calibrationEngine: { version: INDEPENDENT_PROBABILITY_ENGINE_VERSION, selection: racewiseCalibration },
      folds: evaluated,
      metrics: aggregate,
      featureTimePolicy: featureTiming,
      noTargetLeakage: featureTiming.violations === 0,
      researchProbabilityStatus: "recent_window_benchmark",
      ticketProbabilityStatus: "not_available",
      historicalMarketStatus: "not_available",
      deploymentStatus: "benchmark_only",
      deploymentReasons: [
        "直近12か月の能力予想ベースライン",
        "予想時点の歴史オッズと券種別検証が未充足",
        "購入推奨・回収率の根拠には使用しない",
      ],
    };
    fs.mkdirSync(path.dirname(options.outputPath ?? ARTIFACT_PATH), { recursive: true });
    fs.writeFileSync(options.outputPath ?? ARTIFACT_PATH, `${JSON.stringify(artifact, null, 2)}\n`, "utf8");
    console.log(JSON.stringify({ artifact: options.outputPath ?? ARTIFACT_PATH, modelVersion: artifact.modelVersion, coverage: artifact.dataCoverage, folds: evaluated.length, metrics: aggregate, deploymentStatus: artifact.deploymentStatus }, null, 2));
    return artifact;
  } finally {
    db.close();
  }
}

function evaluateFold(races, spec) {
  const train = races.filter((race) => race.date >= spec.trainStart && race.date <= spec.trainEnd);
  const calibration = races.filter((race) => race.date >= spec.calibrationStart && race.date <= spec.calibrationEnd);
  const test = races.filter((race) => race.date >= spec.testStart && race.date <= spec.testEnd);
  if (train.length < 1000 || calibration.length < 100 || test.length < 100) return null;
  const model = fitModel(train);
  const { fitting, selection } = splitCalibration(calibration);
  if (fitting.length < 100 || selection.length < 50) return null;
  const temperature = fitTemperature(model, fitting);
  const racewiseCalibration = selectRacewiseCalibrator({ fittingRaces: fitting, selectionRaces: selection,
    minimumSamples: 500, predict: (race) => predictRace(model, race, temperature) });
  const metrics = evaluate(model, test, temperature);
  return { spec, trainRaces: train.length, calibrationRaces: calibration.length, testRaces: test.length, temperature,
    calibrationEngine: { version: INDEPENDENT_PROBABILITY_ENGINE_VERSION, selection: racewiseCalibration }, metrics };
}

function splitCalibration(races) {
  const boundary = Math.max(1, Math.floor(races.length * 0.7));
  return { fitting: races.slice(0, boundary), selection: races.slice(boundary) };
}

function buildRecentFolds(from, to) {
  const firstTestStart = addMonths(monthStart(from), TRAIN_MONTHS + CALIBRATION_MONTHS);
  const specs = [];
  for (let testStart = firstTestStart; testStart <= to; testStart = addMonths(testStart, TEST_MONTHS)) {
    const testEnd = minDate(addMonths(testStart, TEST_MONTHS, true), to);
    const calibrationEnd = addDays(testStart, -(EMBARGO_DAYS + 1));
    const calibrationStart = addMonths(monthStart(calibrationEnd), -(CALIBRATION_MONTHS - 1));
    const trainEnd = addDays(calibrationStart, -(EMBARGO_DAYS + 1));
    if (trainEnd < from || testEnd < testStart) continue;
    specs.push({ trainStart: from, trainEnd, calibrationStart, calibrationEnd, testStart, testEnd });
  }
  return specs;
}

function aggregateMetrics(folds) {
  const metrics = folds.map((fold) => fold.metrics);
  return {
    folds: folds.length,
    meanLogLoss: mean(metrics.map((row) => row.logLoss)),
    meanUniformLogLoss: mean(metrics.map((row) => row.uniformLogLoss)),
    meanBrier: mean(metrics.map((row) => row.brier)),
    meanEce: mean(metrics.map((row) => row.ece)),
    meanMaxCalibrationBinError: mean(metrics.map((row) => row.maxCalibrationBinError)),
    maxProbabilitySumError: Math.max(...metrics.map((row) => row.maxProbabilitySumError)),
  };
}

function mean(values) { return values.reduce((sum, value) => sum + value, 0) / values.length; }
function monthStart(date) { return `${date.slice(0, 7)}-01`; }
function addMonths(date, count, endOfMonth = false) { const value = new Date(`${date}T00:00:00Z`); value.setUTCMonth(value.getUTCMonth() + count); if (endOfMonth) { value.setUTCMonth(value.getUTCMonth() + 1); value.setUTCDate(0); } return value.toISOString().slice(0, 10); }
function addDays(date, count) { const value = new Date(`${date}T00:00:00Z`); value.setUTCDate(value.getUTCDate() + count); return value.toISOString().slice(0, 10); }
function minDate(left, right) { return left < right ? left : right; }

if (import.meta.url === pathToFileURL(process.argv[1]).href) trainRecentForecastBaseline();
