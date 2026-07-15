import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { evaluate, evaluateTicketProbabilities, FEATURE_KEYS, fitModel, fitTemperature, fitTicketCalibrationTemperatures, loadTrainingRaces, predictRace } from "./train-expectancy-model.mjs";

const DATABASE = path.join("data", "jra-free-private", "keiba.sqlite");
const PREFLIGHT = path.join("data", "jra-free-private", "models", "training-preflight.json");
const OUTPUT = path.join("data", "jra-free-private", "models", "reference-asof-model.json");
const TARGET_DATES = ["2026-07-11", "2026-07-12"];
const TRAIN_END = "2025-06-30";
const CALIBRATION_START = "2025-07-08";
const CALIBRATION_END = "2026-07-03";

const preflight = JSON.parse(fs.readFileSync(PREFLIGHT, "utf8"));
if (preflight.researchSignal !== "research_pass_candidate" || preflight.featureAdmission.fallback) {
  throw new Error("実DBプリフライトが研究合格していません");
}

const db = new DatabaseSync(DATABASE, { readOnly: true });
db.exec("PRAGMA busy_timeout=30000; begin;");
try {
  const coverage = db.prepare("select min(race_date) minDate,max(race_date) maxDate,count(*) races from complete_races").get();
  const { races, predictionRaces, featureTiming } = loadTrainingRaces(db, { from: coverage.minDate, to: TARGET_DATES.at(-1), includePredictionRows: true });
  const train = races.filter((race) => race.date <= TRAIN_END);
  const calibration = races.filter((race) => race.date >= CALIBRATION_START && race.date <= CALIBRATION_END);
  const targetEvaluation = races.filter((race) => TARGET_DATES.includes(race.date));
  const target = predictionRaces.filter((race) => TARGET_DATES.includes(race.date));
  if (train.length < 20000 || calibration.length < 2000 || target.length !== 72 || targetEvaluation.length !== 72) {
    throw new Error(`as-of分割不足: train=${train.length}, calibration=${calibration.length}, target=${target.length}, evaluation=${targetEvaluation.length}`);
  }

  const activeFeatureIndexes = preflight.featureAdmission.selectedFeatureIndexes;
  const model = fitModel(train, activeFeatureIndexes);
  const temperature = fitTemperature(model, calibration);
  const ticketCalibrationTemperatures = fitTicketCalibrationTemperatures(model, calibration, temperature);
  const calibrationMetrics = evaluate(model, calibration, temperature);
  const ticketCalibrationMetrics = evaluateTicketProbabilities(model, calibration, temperature, ticketCalibrationTemperatures);
  const targetMetrics = evaluate(model, targetEvaluation, temperature);
  const targetTicketMetrics = evaluateTicketProbabilities(model, targetEvaluation, temperature, ticketCalibrationTemperatures);
  const predictions = target.flatMap((race) => {
    const probabilities = predictRace(model, race, temperature);
    return race.rows.map((row, index) => ({ raceId: race.id, horseId: row.horseId, probability: probabilities[index],
      historyStarts: Math.max(0, Math.round(Math.expm1(Number(row.featureValues[FEATURE_KEYS.indexOf("careerStarts")]) || 0))), asOfTime: row.asOfTime }));
  });
  const probabilitySumsValid = target.every((race) => {
    const rows = predictions.filter((row) => row.raceId === race.id);
    return rows.length === race.rows.length && Math.abs(rows.reduce((sum, row) => sum + row.probability, 0) - 1) <= 1e-9;
  });
  if (!probabilitySumsValid || featureTiming.violations) throw new Error("as-of予測の確率合計または時系列監査に失敗しました");

  const ticketCalibrationErrors = Object.fromEntries(Object.entries(ticketCalibrationMetrics.byType)
    .map(([type, metric]) => [type, metric.supportedMaximumCalibrationBinError]));
  const versionHash = crypto.createHash("sha256").update(JSON.stringify({
    activeFeatureIndexes, trainEnd: TRAIN_END, calibrationEnd: CALIBRATION_END, temperature,
    ticketCalibrationTemperatures, calibrationMetrics, predictions,
  })).digest("hex").slice(0, 12);
  const artifact = {
    status: "pass",
    researchProbabilityStatus: "research_pass",
    deploymentStatus: "benchmark_only",
    deploymentReasons: ["historical_pre_race_odds_coverage_insufficient", "roi_gate_not_passed"],
    modelName: "race-conditional-ability-softmax-recency-bayes",
    modelVersion: `ability-softmax-v2-asof-${TARGET_DATES[0]}-${versionHash}`,
    generatedAt: new Date().toISOString(),
    targetDates: TARGET_DATES,
    split: { trainStart: coverage.minDate, trainEnd: TRAIN_END, calibrationStart: CALIBRATION_START, calibrationEnd: CALIBRATION_END, embargoDays: 7 },
    counts: { trainRaces: train.length, calibrationRaces: calibration.length, targetRaces: target.length, predictions: predictions.length },
    activeFeatureIndexes,
    activeFeatureGroups: preflight.featureAdmission.selectedGroups,
    temperature,
    ticketCalibrationTemperatures,
    calibrationMetrics,
    ticketCalibrationErrors,
    targetAudit: { evaluationOnlyAfterPrediction: true, metrics: targetMetrics, ticketMetrics: targetTicketMetrics },
    noTargetLeakage: true,
    featureTimePolicy: featureTiming,
    predictions,
  };
  fs.writeFileSync(OUTPUT, `${JSON.stringify(artifact, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ output: OUTPUT, modelVersion: artifact.modelVersion, split: artifact.split, counts: artifact.counts,
    calibration: { logLoss: calibrationMetrics.logLoss, uniformLogLoss: calibrationMetrics.uniformLogLoss, ece: calibrationMetrics.ece },
    targetAudit: { logLoss: targetMetrics.logLoss, uniformLogLoss: targetMetrics.uniformLogLoss, ece: targetMetrics.ece } }, null, 2));
} finally {
  db.exec("commit");
  db.close();
}
