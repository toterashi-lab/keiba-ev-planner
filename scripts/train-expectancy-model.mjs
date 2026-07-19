import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { buildFeatureRows } from "./model-feature-pipeline.mjs";
import { captureModelDataSnapshot, captureModelImplementationSnapshot } from "./model-data-snapshot.mjs";
import { MODEL_VALIDATION_POLICY } from "../model/validation-policy.mjs";
import { buildFinishOrderProbabilityBooks, calibrateFinishOrderProbabilityBooks, FINISH_ORDER_TYPES, placeDepth, ticketOutcomeMultiplicity } from "../model/finish-order-probabilities.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DATABASE_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const ARTIFACT_PATH = path.join(PRIVATE_DIR, "models", "ability-softmax-v1.json");
const MIN_TRAIN_MONTHS = 60;
const CALIBRATION_MONTHS = 12;
const TEST_MONTHS = 6;
const EMBARGO_DAYS = 7;
const FOLD_COUNT = 3;
const EPOCHS = 6;
const FEATURE_GROUP_KEYS = {
  race_context: ["horseNumber", "gateNumber", "horseNumberFieldRatio", "gateNumberFieldRatio",
    "gateVenue01", "gateVenue02", "gateVenue03", "gateVenue04", "gateVenue05", "gateVenue06", "gateVenue07", "gateVenue08", "gateVenue09", "gateVenue10",
    "gateSurfaceTurf", "gateSurfaceDirt", "gateSurfaceJump", "gateDirectionRight", "gateDirectionLeft", "gateDirectionStraight", "gateDirectionOuter"],
  weather_going: ["goingStarts", "goingWinRate", "weatherStarts", "weatherWinRate"],
  body_load: ["age", "sexMale", "sexFemale", "sexGelding", "carriedWeight", "bodyWeight", "bodyWeightDelta", "carriedWeightBodyRatio"],
  horse_form: ["daysSinceLastRace", "careerStarts", "priorWinRate", "priorPlaceRate", "priorAverageFinish", "priorAverageFinalSectional",
    "priorWinRateSmoothed", "priorPlaceRateSmoothed", "priorAveragePopularity", "lastFinishPercentile",
    "recent3WinRate", "recent3PlaceRate", "recent5WinRate", "recent5PlaceRate", "recent3MeanFinishPercentile", "recent5MeanFinishPercentile",
    "recent3MeanFinalSectional", "recent5MeanPopularity", "lastPopularity", "classChange", "distanceChangeHundreds", "surfaceChanged"],
  pace_shape: ["paceHistoryStarts", "priorAverageEarlyPositionPercentile", "priorAverageLateCornerPositionPercentile", "priorAveragePositionGain",
    "frontRunnerRate", "frontRunnerRateSmoothed", "recent3EarlyPositionPercentile", "recent3LateCornerPositionPercentile",
    "recent3PositionGain", "fieldRelativeFrontRunnerRate", "pacePressureFrontInteraction", "pacePressureGainInteraction"],
  horse_suitability: ["surfaceStarts", "surfaceWinRate", "venueStarts", "venueWinRate", "distanceBandStarts", "distanceBandWinRate",
    "directionStarts", "directionWinRate", "classStarts", "classWinRate", "seasonStarts", "seasonWinRate",
    "surfaceWinRateSmoothed", "venueWinRateSmoothed", "distanceBandWinRateSmoothed", "goingWinRateSmoothed",
    "weatherWinRateSmoothed", "directionWinRateSmoothed", "classWinRateSmoothed", "seasonWinRateSmoothed"],
  connections: ["jockeyStarts", "jockeyWinRate", "jockeyPlaceRate", "trainerStarts", "trainerWinRate", "trainerPlaceRate",
    "jockeyWinRateSmoothed", "jockeyPlaceRateSmoothed", "trainerWinRateSmoothed", "trainerPlaceRateSmoothed"],
  field_strength: ["fieldRelativePriorWinRate", "fieldRelativeSmoothedWinRate"],
};
export const FEATURE_KEYS = Object.values(FEATURE_GROUP_KEYS).flat();
export const MODEL_FEATURE_GROUPS = Object.entries(FEATURE_GROUP_KEYS).map(([id, keys]) => ({
  id, keys, indexes: keys.map((key) => FEATURE_KEYS.indexOf(key)),
}));
const GROUPED_FEATURE_INDEXES = MODEL_FEATURE_GROUPS.flatMap((group) => group.indexes);
if (GROUPED_FEATURE_INDEXES.some((index) => index < 0) || new Set(GROUPED_FEATURE_INDEXES).size !== FEATURE_KEYS.length
  || GROUPED_FEATURE_INDEXES.length !== FEATURE_KEYS.length) throw new Error("Feature groups must cover every model feature exactly once");
const LOG_FEATURES = new Set(["careerStarts", "surfaceStarts", "venueStarts", "distanceBandStarts", "goingStarts", "weatherStarts",
  "directionStarts", "classStarts", "seasonStarts", "jockeyStarts", "trainerStarts", "daysSinceLastRace", "paceHistoryStarts"]);

export function trainExpectancyModel() {
const db = new DatabaseSync(DATABASE_PATH);
db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
let transactionOpen = false;
try {
  db.exec("begin");
  transactionOpen = true;
  const trainingSnapshot = captureModelDataSnapshot(db);
  const trainingImplementation = captureModelImplementationSnapshot();
  const coverage = db.prepare(`select min(race_date) minDate,max(race_date) maxDate,count(distinct race_id) races
    from complete_races`).get();
  const queue = db.prepare(`select status,count(*) count from backfill_jobs group by status`).all();
  const pending = queue.filter((row) => row.status !== "complete").reduce((sum, row) => sum + row.count, 0);
  const historicalOddsCoverage = db.prepare(`select count(*) total,
    sum(case when status='complete' then 1 else 0 end) complete,
    sum(case when status<>'complete' then 1 else 0 end) pending from historical_odds_jobs`).get();
  const historicalExoticCoverage = db.prepare(`select count(*) total,
    sum(case when status='complete' then 1 else 0 end) complete,
    sum(case when status<>'complete' then 1 else 0 end) pending from historical_exotic_odds_jobs`).get();
  if (historicalOddsCoverage.total !== coverage.races || historicalOddsCoverage.pending !== 0
    || historicalExoticCoverage.total <= 0 || historicalExoticCoverage.pending !== 0) {
    throw new Error(`Historical market odds are incomplete: winPlace=${JSON.stringify(historicalOddsCoverage)}, exotic=${JSON.stringify(historicalExoticCoverage)}`);
  }
  if (pending) throw new Error(`30年バックフィル未完了: 残り${pending}か月`);
  if (!coverage.minDate || monthsBetween(coverage.minDate, coverage.maxDate) < MIN_TRAIN_MONTHS + CALIBRATION_MONTHS + TEST_MONTHS) {
    throw new Error("学習・校正・テスト期間が不足しています");
  }

  const { rows, races, featureTiming } = loadTrainingRaces(db, { from: coverage.minDate, to: coverage.maxDate });
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
    const ticketCalibrationTemperatures = fitTicketCalibrationTemperatures(model, calibration, temperature);
    const ticketMetrics = evaluateTicketProbabilities(model, test, temperature, ticketCalibrationTemperatures);
    folds.push({ ...spec, trainRaces: train.length, calibrationRaces: calibration.length, testRaces: test.length,
      temperature, selectedFeatureGroups: ablation.selectedGroups, selectedFeatureIndexes: ablation.selectedFeatureIndexes,
      featureSelectionFallback: ablation.fallback, featureAblation: ablation.groups, metrics,
      ticketCalibrationTemperatures, ticketMetrics });
    lastValidationModel = { ...model, temperature, test, spec };
  }
  if (!lastValidationModel || folds.length < 2) throw new Error(`有効なwalk-forward foldが不足しています: ${folds.length}`);

  const aggregate = aggregateMetrics(folds);
  const ticketMetrics = aggregateTicketMetrics(folds);
  const ticketCalibrationUncertainty = buildTicketCalibrationUncertainty(ticketMetrics);
  const ticketResearchPass = Object.values(ticketMetrics.byType).every((metric) => metric.researchPass);
  const featureAdmission = aggregateFeatureAdmission(folds);
  const researchProbabilityPass = aggregate.maxProbabilitySumError <= 1e-6 && aggregate.meanEce <= 0.025
    && aggregate.meanMaxCalibrationBinError <= 0.075 && aggregate.meanLogLoss < aggregate.meanUniformLogLoss
    && folds.every((fold) => fold.metrics.logLoss < fold.metrics.uniformLogLoss && !fold.featureSelectionFallback)
    && featureAdmission.admittedGroups.length > 0 && ticketResearchPass;
  const deploymentModel = fitModel(races, featureAdmission.activeFeatureIndexes);
  deploymentModel.temperature = median(folds.map((fold) => fold.temperature));
  const ticketCalibrationTemperatures = Object.fromEntries(FINISH_ORDER_TYPES.map((type) => [type,
    median(folds.map((fold) => fold.ticketCalibrationTemperatures[type]))]));
  const versionHash = crypto.createHash("sha256").update(JSON.stringify({ folds, featureAdmission, keys: FEATURE_KEYS })).digest("hex").slice(0, 12);
  const modelVersion = `ability-softmax-v3-${coverage.maxDate}-${versionHash}`;
  const artifact = {
    status: "insufficient_betting_validation",
    probabilityStatus: "insufficient",
    researchProbabilityStatus: researchProbabilityPass ? "research_pass" : "fail",
    modelName: "race-conditional-ability-softmax-recency-bayes",
    modelVersion,
    generatedAt: new Date().toISOString(),
    dataCoverage: { ...coverage, rows: rows.length, usableRaces: races.length,
      historicalOdds: historicalOddsCoverage, historicalExoticOdds: historicalExoticCoverage },
    trainingSnapshot,
    trainingImplementation,
    policy: { minimumTrainMonths: MIN_TRAIN_MONTHS, calibrationMonths: CALIBRATION_MONTHS, testMonths: TEST_MONTHS, embargoDays: EMBARGO_DAYS },
    featureKeys: FEATURE_KEYS,
    activeFeatureKeys: featureAdmission.activeFeatureIndexes.map((index) => FEATURE_KEYS[index]),
    activeFeatureIndexes: featureAdmission.activeFeatureIndexes,
    featureAdmission,
    means: deploymentModel.means,
    scales: deploymentModel.scales,
    weights: deploymentModel.weights,
    temperature: deploymentModel.temperature,
    ticketCalibrationTemperatures,
    folds,
    metrics: aggregate,
    ticketProbabilityStatus: ticketResearchPass ? "research_pass" : "fail",
    ticketCalibrationPolicy: "calibration-only-one-standard-error-most-regularized-temperature",
    ticketMetrics,
    ticketCalibrationUncertainty,
    noTargetLeakage: true,
    featureTimePolicy: featureTiming,
    sourceTimingVerified: false,
    deploymentStatus: "benchmark_only",
    deploymentReasons: ["historical_source_timing_not_verified", "historical_pre_race_odds_coverage_insufficient", "roi_gate_not_passed"],
  };
  db.exec("commit");
  transactionOpen = false;
  db.exec("begin");
  transactionOpen = true;
  const finalSnapshot = captureModelDataSnapshot(db);
  const finalImplementation = captureModelImplementationSnapshot();
  const finalPending = db.prepare(`select
    (select count(*) from backfill_jobs where status<>'complete')
    +(select count(*) from historical_odds_jobs where status<>'complete')
    +(select count(*) from historical_exotic_odds_jobs where status<>'complete') count`).get().count;
  db.exec("commit");
  transactionOpen = false;
  if (finalPending || finalSnapshot.fingerprint !== trainingSnapshot.fingerprint
    || finalImplementation.fingerprint !== trainingImplementation.fingerprint) {
    throw new Error(`学習中にDBまたは実装スナップショットが変更されました: pending=${finalPending}, dataBefore=${trainingSnapshot.fingerprint}, dataAfter=${finalSnapshot.fingerprint}, codeBefore=${trainingImplementation.fingerprint}, codeAfter=${finalImplementation.fingerprint}`);
  }
  persistRun(db, artifact, lastValidationModel);
  fs.mkdirSync(path.dirname(ARTIFACT_PATH), { recursive: true });
  fs.writeFileSync(ARTIFACT_PATH, `${JSON.stringify(artifact, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ artifact: ARTIFACT_PATH, modelVersion, researchProbabilityPass, strictProbabilityStatus: artifact.probabilityStatus, folds: folds.length, races: races.length, predictions: lastValidationModel.test.length, metrics: aggregate }, null, 2));
} finally {
  if (transactionOpen) db.exec("rollback");
  db.close();
}
}

export function loadTrainingRaces(database, options) {
  const rows = [];
  const predictionRows = [];
  const featureTiming = {
    policy: "strictly-before-race-start; same-start races update together",
    rows: 0,
    rowsWithPriorHistory: 0,
    violations: 0,
  };
  buildFeatureRows(database, {
    from: options.from,
    to: options.to,
    completeOnly: options.completeOnly !== false,
    collect: false,
    onRow(row) {
      const featureRow = { raceId: row.raceId, horseId: row.horseId, raceDate: row.raceDate, asOfTime: row.asOfTime,
        target: row.target, featureValues: FEATURE_KEYS.map((key) => transform(key, row.features[key])) };
      if (options.includePredictionRows) predictionRows.push(featureRow);
      if (Number.isInteger(row.target.finishPosition) && row.target.finishPosition > 0) {
        featureTiming.rows += 1;
        if (row.lineage.lastHistoricalRaceTime) {
          featureTiming.rowsWithPriorHistory += 1;
          if (row.lineage.lastHistoricalRaceTime >= row.asOfTime) featureTiming.violations += 1;
        }
        rows.push(featureRow);
      }
    },
  });
  if (featureTiming.violations) throw new Error(`Historical feature time violations: ${featureTiming.violations}`);
  featureTiming.coverage = featureTiming.rows ? (featureTiming.rows - featureTiming.violations) / featureTiming.rows : 0;
  return { rows, races: groupRaces(rows).filter((race) => race.winnerIndex >= 0 && race.rows.length >= 2),
    predictionRaces: options.includePredictionRows ? groupRaces(predictionRows).filter((race) => race.rows.length >= 2) : [], featureTiming };
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
    const calibrationSafeHarbor = fullMetrics.ece <= policy.absoluteEceSafeHarbor
      && fullMetrics.maxCalibrationBinError <= policy.absoluteMaxCalibrationBinSafeHarbor;
    const pass = logLossImprovement >= policy.minimumLogLossImprovement
      && (!policy.rejectOnCalibrationRegression || eceRegression <= policy.maximumEceRegression || calibrationSafeHarbor)
      && fullMetrics.maxCalibrationBinError <= 0.075;
    return {
      id: group.id,
      indexes: group.indexes,
      featureKeys: group.indexes.map((index) => FEATURE_KEYS[index]),
      pass,
      logLossImprovement,
      eceRegression,
      calibrationSafeHarbor,
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
      absoluteEceSafeHarbor: policy.absoluteEceSafeHarbor,
      absoluteMaxCalibrationBinSafeHarbor: policy.absoluteMaxCalibrationBinSafeHarbor,
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

export function fitTicketCalibrationTemperatures(model, races, temperature) {
  const candidates = [1, 1.15, 1.3, 1.5, 1.75, 2, 2.4, 3];
  const losses = Object.fromEntries(FINISH_ORDER_TYPES.map((type) => [type,
    candidates.map((candidate) => ({ temperature: candidate, loss: 0, squaredLoss: 0, winners: 0, observations: 0,
      bins: Array.from({ length: 10 }, (_, index) => ({ index: index + 1, count: 0, predicted: 0, observed: 0 })) }))]));
  for (const race of races) {
    const winningKeys = raceWinningKeys(race);
    if (!winningKeys) continue;
    const probabilities = predictRace(model, race, temperature);
    const books = buildFinishOrderProbabilityBooks(Object.fromEntries(probabilities.map((probability, index) => [index + 1, probability])));
    for (const type of FINISH_ORDER_TYPES) {
      const book = books[type];
      const targetMass = ticketOutcomeMultiplicity(type, race.rows.length);
      const winners = new Set(winningKeys[type]);
      for (const candidate of losses[type]) {
        const exponent = 1 / candidate.temperature;
        let poweredTotal = 0;
        for (const probability of book.values()) poweredTotal += Math.pow(Math.max(1e-15, probability), exponent);
        for (const [key, probability] of book) {
          const calibrated = targetMass * Math.pow(Math.max(1e-15, probability), exponent) / poweredTotal;
          const target = winners.has(key) ? 1 : 0;
          const bin = candidate.bins[Math.min(9, Math.floor(calibrated * 10))];
          bin.count += 1; bin.predicted += calibrated; bin.observed += target;
          candidate.observations += 1;
          if (target) {
            const loss = -Math.log(Math.max(1e-12, calibrated));
            candidate.loss += loss;
            candidate.squaredLoss += loss * loss;
            candidate.winners += 1;
          }
        }
      }
    }
  }
  return Object.fromEntries(FINISH_ORDER_TYPES.map((type) => {
    const evaluated = losses[type].map((candidate) => {
      const bins = candidate.bins.filter((bin) => bin.count).map((bin) => {
        const observed = bin.observed / bin.count;
        const error = Math.abs(observed - bin.predicted / bin.count);
        const standardError = Math.sqrt(Math.max(0, observed * (1 - observed) / bin.count));
        return { count: bin.count, error, upper95Error: error + 1.645 * standardError };
      });
      const ece = bins.reduce((sum, bin) => sum + bin.count * bin.error, 0) / candidate.observations;
      const supported = bins.filter((bin) => bin.count >= 100);
      const supportedMaximumCalibrationBinError = supported.length ? Math.max(...supported.map((bin) => bin.error)) : Infinity;
      const supportedMaximumCalibrationUpper95 = supported.length ? Math.max(...supported.map((bin) => bin.upper95Error)) : Infinity;
      const meanLoss = candidate.loss / candidate.winners;
      const lossVariance = Math.max(0, candidate.squaredLoss / candidate.winners - meanLoss ** 2);
      return { ...candidate, meanLoss, lossStandardError: Math.sqrt(lossVariance / candidate.winners),
        ece, supportedMaximumCalibrationBinError,
        supportedMaximumCalibrationUpper95,
        calibrationPass: ece <= 0.025 && supportedMaximumCalibrationUpper95 <= 0.1 };
    });
    const eligible = evaluated.filter((candidate) => candidate.calibrationPass);
    const pool = eligible.length ? eligible : evaluated;
    const minimum = [...pool].sort((left, right) => left.meanLoss - right.meanLoss || left.temperature - right.temperature)[0];
    const oneStandardErrorCandidates = pool.filter((candidate) => candidate.meanLoss <= minimum.meanLoss + minimum.lossStandardError);
    const best = oneStandardErrorCandidates.sort((left, right) => right.temperature - left.temperature)[0];
    return [type, best.temperature];
  }));
}

export function evaluateTicketProbabilities(model, races, temperature, ticketCalibrationTemperatures = {}) {
  const logThresholds = [0.00001, 0.00003, 0.0001, 0.0003, 0.001, 0.003, 0.01, 0.03, 0.1, 1];
  const accumulators = Object.fromEntries(FINISH_ORDER_TYPES.map((type) => [type, {
    races: 0, candidateObservations: 0, winnerObservations: 0, winnerLogLoss: 0, uniformWinnerLogLoss: 0,
    brier: 0, maximumMassError: 0,
    bins: Array.from({ length: 10 }, (_, index) => ({ index: index + 1, count: 0, predicted: 0, observed: 0 })),
    logBins: logThresholds.map((upper, index) => ({ index: index + 1, lower: index ? logThresholds[index - 1] : 0, upper, count: 0, predicted: 0, observed: 0 })),
  }]));
  let skippedDeadHeatOrShortField = 0;

  for (const race of races) {
    const winningKeys = raceWinningKeys(race);
    if (!winningKeys) { skippedDeadHeatOrShortField += 1; continue; }
    const probabilities = predictRace(model, race, temperature);
    const rawBooks = buildFinishOrderProbabilityBooks(Object.fromEntries(probabilities.map((probability, index) => [index + 1, probability])));
    const books = calibrateFinishOrderProbabilityBooks(rawBooks, ticketCalibrationTemperatures, race.rows.length);

    for (const type of FINISH_ORDER_TYPES) {
      const accumulator = accumulators[type];
      const book = books[type];
      const winners = new Set(winningKeys[type]);
      const uniformProbability = ticketOutcomeMultiplicity(type, race.rows.length) / book.size;
      accumulator.races += 1;
      accumulator.winnerObservations += winners.size;
      for (const key of winners) {
        accumulator.winnerLogLoss -= Math.log(Math.max(1e-12, book.get(key) ?? 0));
        accumulator.uniformWinnerLogLoss -= Math.log(Math.max(1e-12, uniformProbability));
      }
      let mass = 0;
      for (const [key, probability] of book) {
        const target = winners.has(key) ? 1 : 0;
        mass += probability;
        accumulator.brier += (probability - target) ** 2;
        accumulator.candidateObservations += 1;
        const bin = accumulator.bins[Math.min(9, Math.floor(probability * 10))];
        bin.count += 1; bin.predicted += probability; bin.observed += target;
        const logBin = accumulator.logBins.find((candidate) => probability <= candidate.upper) ?? accumulator.logBins.at(-1);
        logBin.count += 1; logBin.predicted += probability; logBin.observed += target;
      }
      accumulator.maximumMassError = Math.max(accumulator.maximumMassError,
        Math.abs(mass - ticketOutcomeMultiplicity(type, race.rows.length)));
    }
  }

  const byType = Object.fromEntries(FINISH_ORDER_TYPES.map((type) => {
    const value = accumulators[type];
    const bins = value.bins.filter((bin) => bin.count).map((bin) => ({
      index: bin.index, count: bin.count, predicted: bin.predicted / bin.count, observed: bin.observed / bin.count,
      error: Math.abs(bin.observed / bin.count - bin.predicted / bin.count),
    }));
    const winnerLogLoss = value.winnerLogLoss / value.winnerObservations;
    const uniformWinnerLogLoss = value.uniformWinnerLogLoss / value.winnerObservations;
    const ece = bins.reduce((sum, bin) => sum + bin.count * bin.error, 0) / value.candidateObservations;
    const maximumCalibrationBinError = Math.max(...bins.map((bin) => bin.error));
    const supportedBins = bins.filter((bin) => bin.count >= 100);
    const supportedMaximumCalibrationBinError = supportedBins.length ? Math.max(...supportedBins.map((bin) => bin.error)) : Infinity;
    const logCalibrationBins = value.logBins.filter((bin) => bin.count).map((bin) => ({
      index: bin.index, lower: bin.lower, upper: bin.upper, count: bin.count,
      predicted: bin.predicted / bin.count, observed: bin.observed / bin.count,
      error: Math.abs(bin.observed / bin.count - bin.predicted / bin.count),
    }));
    return [type, {
      races: value.races,
      candidateObservations: value.candidateObservations,
      winnerObservations: value.winnerObservations,
      winnerLogLoss,
      uniformWinnerLogLoss,
      brier: value.brier / value.candidateObservations,
      ece,
      maximumCalibrationBinError,
      supportedMaximumCalibrationBinError,
      minimumSupportedBinCount: 100,
      maximumMassError: value.maximumMassError,
      calibrationMethod: "equal-width-deciles-all-ticket-candidates",
      calibrationBins: bins,
      logCalibrationMethod: "log-spaced-all-ticket-candidates",
      logCalibrationBins,
      researchPass: winnerLogLoss < uniformWinnerLogLoss && ece <= 0.025
        && supportedMaximumCalibrationBinError <= 0.1 && value.maximumMassError <= 1e-8,
    }];
  }));
  return { byType, skippedDeadHeatOrShortField };
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
    gate.run(run.id, "historical_feature_time_order", artifact.featureTimePolicy.violations === 0 ? "pass" : "fail",
      artifact.featureTimePolicy.coverage, 1, JSON.stringify(artifact.featureTimePolicy), now);
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
    for (const type of FINISH_ORDER_TYPES) {
      const metric = artifact.ticketMetrics.byType[type];
      gate.run(run.id, `ticket_probability_${type}`, metric.researchPass ? "pass" : "fail",
        metric.meanWinnerLogLoss - metric.meanUniformWinnerLogLoss, 0,
        JSON.stringify({ ...metric, temperature: artifact.ticketCalibrationTemperatures[type] }), now);
    }
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
export function aggregateTicketMetrics(folds) {
  const byType = Object.fromEntries(FINISH_ORDER_TYPES.map((type) => {
    const rows = folds.map((fold) => fold.ticketMetrics.byType[type]);
    const metric = {
      meanWinnerLogLoss: mean(rows.map((row) => row.winnerLogLoss)),
      meanUniformWinnerLogLoss: mean(rows.map((row) => row.uniformWinnerLogLoss)),
      meanBrier: mean(rows.map((row) => row.brier)),
      meanEce: mean(rows.map((row) => row.ece)),
      meanMaximumCalibrationBinError: mean(rows.map((row) => row.maximumCalibrationBinError)),
      meanSupportedMaximumCalibrationBinError: mean(rows.map((row) => row.supportedMaximumCalibrationBinError)),
      maximumMassError: Math.max(...rows.map((row) => row.maximumMassError)),
      races: rows.reduce((sum, row) => sum + row.races, 0),
      candidateObservations: rows.reduce((sum, row) => sum + row.candidateObservations, 0),
      logCalibrationBins: aggregateLogCalibrationBins(rows),
    };
    metric.researchPass = metric.meanWinnerLogLoss < metric.meanUniformWinnerLogLoss && metric.meanEce <= 0.025
      && metric.meanSupportedMaximumCalibrationBinError <= 0.1 && metric.maximumMassError <= 1e-8
      && rows.every((row) => row.researchPass);
    return [type, metric];
  }));
  return { method: "walk-forward-Plackett-Luce-all-ticket-candidate-calibration", byType,
    skippedDeadHeatOrShortField: folds.reduce((sum, fold) => sum + fold.ticketMetrics.skippedDeadHeatOrShortField, 0) };
}
function aggregateLogCalibrationBins(rows) {
  const bins = new Map();
  for (const row of rows) for (const bin of row.logCalibrationBins ?? []) {
    const aggregate = bins.get(bin.index) ?? { index: bin.index, lower: bin.lower, upper: bin.upper, count: 0, predictedTotal: 0, observedTotal: 0 };
    aggregate.count += bin.count;
    aggregate.predictedTotal += bin.predicted * bin.count;
    aggregate.observedTotal += bin.observed * bin.count;
    bins.set(bin.index, aggregate);
  }
  return [...bins.values()].sort((left, right) => left.index - right.index).map((bin) => ({
    index: bin.index, lower: bin.lower, upper: bin.upper, count: bin.count,
    predicted: bin.predictedTotal / bin.count, observed: bin.observedTotal / bin.count,
    error: Math.abs(bin.observedTotal / bin.count - bin.predictedTotal / bin.count),
  }));
}
export function buildTicketCalibrationUncertainty(ticketMetrics) {
  return Object.fromEntries(Object.entries(ticketMetrics.byType).map(([type, metric]) => [type,
    metric.logCalibrationBins.map((bin) => {
      const observedLower90 = wilsonLower(bin.observed, bin.count, 1.645);
      return { ...bin, observedLower90, downsideError90: Math.max(0, bin.predicted - observedLower90) };
    })]));
}
function wilsonLower(rate, count, z) {
  if (!(count > 0)) return 0;
  const z2 = z * z;
  const denominator = 1 + z2 / count;
  const center = (rate + z2 / (2 * count)) / denominator;
  const margin = z * Math.sqrt(rate * (1 - rate) / count + z2 / (4 * count * count)) / denominator;
  return Math.max(0, center - margin);
}
function pairs(values) { const result = []; for (let left = 0; left < values.length; left += 1) for (let right = left + 1; right < values.length; right += 1) result.push([values[left], values[right]]); return result; }
function unorderedKey(values) { return [...values].sort((left, right) => left - right).join("-"); }
function raceWinningKeys(race) {
  if (race.rows.length < 3) return null;
  const ordered = race.rows.map((row, index) => ({ index, finishPosition: row.target.finishPosition }))
    .sort((left, right) => left.finishPosition - right.finishPosition || left.index - right.index);
  if (ordered.length < 3 || ordered[0].finishPosition !== 1 || ordered[1].finishPosition !== 2 || ordered[2].finishPosition !== 3) return null;
  const top = ordered.slice(0, 3).map((row) => row.index + 1);
  const depth = placeDepth(race.rows.length);
  return { win: [String(top[0])], place: top.slice(0, depth).map(String), quinella: [unorderedKey(top.slice(0, 2))],
    wide: pairs(top.slice(0, depth)).map(unorderedKey), exacta: [`${top[0]}-${top[1]}`], trio: [unorderedKey(top)],
    trifecta: [`${top[0]}-${top[1]}-${top[2]}`] };
}
function monthStart(date) { return `${date.slice(0, 7)}-01`; }
function addMonths(date, count, endOfMonth = false) { const value = new Date(`${date}T00:00:00Z`); value.setUTCMonth(value.getUTCMonth() + count); if (endOfMonth) { value.setUTCMonth(value.getUTCMonth() + 1); value.setUTCDate(0); } return value.toISOString().slice(0, 10); }
function addDays(date, count) { const value = new Date(`${date}T00:00:00Z`); value.setUTCDate(value.getUTCDate() + count); return value.toISOString().slice(0, 10); }
function monthsBetween(left, right) { return (Number(right.slice(0, 4)) - Number(left.slice(0, 4))) * 12 + Number(right.slice(5, 7)) - Number(left.slice(5, 7)); }
function round(value, digits) { const scale = 10 ** digits; return Math.round(value * scale) / scale; }

if (import.meta.url === pathToFileURL(process.argv[1]).href) trainExpectancyModel();
