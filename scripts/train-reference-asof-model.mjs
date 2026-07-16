import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { evaluate, evaluateTicketProbabilities, FEATURE_KEYS, fitModel, fitTemperature, fitTicketCalibrationTemperatures, loadTrainingRaces, MODEL_FEATURE_GROUPS, predictRace, runFeatureAblation } from "./train-expectancy-model.mjs";
import { captureModelImplementationSnapshot } from "./model-data-snapshot.mjs";

const DATABASE = path.join("data", "jra-free-private", "keiba.sqlite");
const PREFLIGHT = path.join("data", "jra-free-private", "models", "training-preflight.json");
const FULL_MODEL = path.join("data", "jra-free-private", "models", "ability-softmax-v1.json");
const OUTPUT = path.join("data", "jra-free-private", "models", "reference-asof-model.json");
const TARGET_DATES = ["2026-07-11", "2026-07-12"];
const TRAIN_END = "2025-06-30";
const CALIBRATION_START = "2025-07-08";
const CALIBRATION_END = "2026-07-03";

const preflight = JSON.parse(fs.readFileSync(PREFLIGHT, "utf8"));
const fullModel = fs.existsSync(FULL_MODEL) ? JSON.parse(fs.readFileSync(FULL_MODEL, "utf8")) : null;
const fullModelSelectionReady = fullModel?.researchProbabilityStatus === "research_pass"
  && !fullModel?.featureAdmission?.fallback && Array.isArray(fullModel?.featureAdmission?.activeFeatureIndexes);
if (!fullModelSelectionReady && (preflight.researchSignal !== "research_pass_candidate" || preflight.featureAdmission.fallback)) {
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

  const featureAblation = runFeatureAblation(train, calibration);
  if (featureAblation.fallback) throw new Error("Reference as-of feature ablation did not admit a stable feature group");
  const activeFeatureIndexes = featureAblation.selectedFeatureIndexes;
  const activeFeatureGroups = featureAblation.selectedGroups;
  const model = fitModel(train, activeFeatureIndexes);
  const temperature = fitTemperature(model, calibration);
  const ticketCalibrationTemperatures = fitTicketCalibrationTemperatures(model, calibration, temperature);
  const calibrationMetrics = evaluate(model, calibration, temperature);
  const ticketCalibrationMetrics = evaluateTicketProbabilities(model, calibration, temperature, ticketCalibrationTemperatures);
  const targetMetrics = evaluate(model, targetEvaluation, temperature);
  const targetTicketMetrics = evaluateTicketProbabilities(model, targetEvaluation, temperature, ticketCalibrationTemperatures);
  const calibrationPass = calibrationMetrics.logLoss < calibrationMetrics.uniformLogLoss
    && calibrationMetrics.ece <= 0.025 && calibrationMetrics.maxCalibrationBinError <= 0.075
    && Object.values(ticketCalibrationMetrics.byType).every((metric) => metric.researchPass);
  if (!calibrationPass) throw new Error(`Reference as-of calibration gate failed: ${JSON.stringify(calibrationMetrics)}`);
  const predictions = target.flatMap((race) => {
    const probabilities = predictRace(model, race, temperature);
    return race.rows.map((row, index) => ({ raceId: race.id, horseId: row.horseId, probability: probabilities[index],
      historyStarts: Math.max(0, Math.round(Math.expm1(Number(row.featureValues[FEATURE_KEYS.indexOf("careerStarts")]) || 0))),
      agentSignals: featureAgentSignals(model, row.featureValues, temperature),
      asOfTime: row.asOfTime }));
  });
  const probabilitySumsValid = target.every((race) => {
    const rows = predictions.filter((row) => row.raceId === race.id);
    return rows.length === race.rows.length && Math.abs(rows.reduce((sum, row) => sum + row.probability, 0) - 1) <= 1e-9;
  });
  if (!probabilitySumsValid || featureTiming.violations) throw new Error("as-of予測の確率合計または時系列監査に失敗しました");

  const ticketCalibrationErrors = Object.fromEntries(Object.entries(ticketCalibrationMetrics.byType)
    .map(([type, metric]) => [type, metric.supportedMaximumCalibrationBinError]));
  const ticketCalibrationUncertainty = Object.fromEntries(Object.entries(ticketCalibrationMetrics.byType)
    .map(([type, metric]) => [type, metric.logCalibrationBins.map((bin) => ({ ...bin,
      observedLower90: wilsonLower(bin.observed, bin.count, 1.645),
      downsideError90: Math.max(0, bin.predicted - wilsonLower(bin.observed, bin.count, 1.645)),
    }))]));
  const versionHash = crypto.createHash("sha256").update(JSON.stringify({
    activeFeatureIndexes, featureKeys: FEATURE_KEYS, trainEnd: TRAIN_END, calibrationEnd: CALIBRATION_END, temperature,
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
    featureKeys: FEATURE_KEYS,
    activeFeatureIndexes,
    activeFeatureGroups,
    featureSelectionSource: "reference-asof-group-ablation-v1",
    featureSelectionSplit: { trainEnd: TRAIN_END, calibrationStart: CALIBRATION_START, calibrationEnd: CALIBRATION_END },
    featureAblation: featureAblation.groups,
    trainingImplementation: captureModelImplementationSnapshot(),
    means: model.means,
    scales: model.scales,
    weights: model.weights,
    temperature,
    ticketCalibrationTemperatures,
    calibrationMetrics,
    ticketProbabilityStatus: "research_pass",
    ticketCalibrationPolicy: "calibration-only-one-standard-error-most-regularized-temperature",
    ticketCalibrationErrors,
    ticketCalibrationUncertainty,
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

function wilsonLower(rate, count, z) {
  if (!(count > 0)) return 0;
  const z2 = z * z;
  const denominator = 1 + z2 / count;
  const center = (rate + z2 / (2 * count)) / denominator;
  const margin = z * Math.sqrt(rate * (1 - rate) / count + z2 / (4 * count * count)) / denominator;
  return Math.max(0, center - margin);
}

function featureAgentSignals(model, featureValues, temperature) {
  const active = new Set(model.activeFeatureIndexes);
  return Object.fromEntries(MODEL_FEATURE_GROUPS.map((group) => {
    const contributions = group.indexes.filter((index) => active.has(index)).map((index) => {
      const standardized = (Number(featureValues[index]) - model.means[index]) / model.scales[index];
      return {
        feature: FEATURE_KEYS[index],
        contribution: model.weights[index] * standardized / temperature,
      };
    }).filter((row) => Number.isFinite(row.contribution));
    return [group.id, {
      status: contributions.length ? "available" : "not_admitted",
      contribution: contributions.reduce((sum, row) => sum + row.contribution, 0),
      topFactors: contributions.sort((left, right) => Math.abs(right.contribution) - Math.abs(left.contribution)).slice(0, 4),
    }];
  }));
}
