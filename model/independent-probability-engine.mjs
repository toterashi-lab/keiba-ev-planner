export const INDEPENDENT_PROBABILITY_ENGINE_VERSION = "racewise-calibration-v1";

// Fit a monotone mapping with the pool-adjacent-violators algorithm.
export function fitIsotonicCalibrator(rows, { minimumSamples = 500 } = {}) {
  const points = rows
    .map((row) => ({ probability: clamp(Number(row.probability), 1e-9, 1 - 1e-9), outcome: Number(row.outcome) ? 1 : 0 }))
    .sort((left, right) => left.probability - right.probability);
  if (points.length < minimumSamples) return { status: "insufficient", method: "identity", sampleSize: points.length };
  const blocks = [];
  for (const point of points) {
    blocks.push({ lower: point.probability, upper: point.probability, count: 1, total: point.outcome, value: point.outcome });
    while (blocks.length > 1 && blocks.at(-2).value > blocks.at(-1).value) {
      const right = blocks.pop();
      const left = blocks.pop();
      const count = left.count + right.count;
      const total = left.total + right.total;
      blocks.push({ lower: left.lower, upper: right.upper, count, total, value: total / count });
    }
  }
  return { status: "fitted", method: "isotonic", sampleSize: points.length,
    blocks: blocks.map((block) => ({ lower: block.lower, upper: block.upper, value: block.value, count: block.count })) };
}

export function applyProbabilityCalibrator(probability, calibrator) {
  const value = clamp(Number(probability), 1e-9, 1 - 1e-9);
  if (calibrator?.status !== "fitted" || calibrator.method !== "isotonic" || !calibrator.blocks?.length) return value;
  const block = calibrator.blocks.find((row) => value <= row.upper) ?? calibrator.blocks.at(-1);
  return clamp(Number(block.value), 1e-9, 1 - 1e-9);
}

export function applyRacewiseCalibrator(probabilities, calibrator) {
  const transformed = probabilities.map((probability) => applyProbabilityCalibrator(probability, calibrator));
  const total = transformed.reduce((sum, probability) => sum + probability, 0);
  if (!(total > 0)) return normalize(probabilities);
  return transformed.map((probability) => probability / total);
}

export function selectRacewiseCalibrator({ fittingRaces, selectionRaces, predict, minimumSamples = 500, minimumLogLossGain = 0.001, maximumEceRegression = 0.001 }) {
  const fittingRows = flattenPredictions(fittingRaces, predict);
  const calibrator = fitIsotonicCalibrator(fittingRows, { minimumSamples });
  if (calibrator.status !== "fitted") return { status: "fallback", method: "identity", calibrator, reason: "insufficient_calibration_samples" };
  const baseline = evaluateRacewiseCalibration(selectionRaces, predict, { method: "identity" });
  const candidate = evaluateRacewiseCalibration(selectionRaces, predict, calibrator);
  const selected = candidate.logLoss <= baseline.logLoss - minimumLogLossGain && candidate.ece <= baseline.ece + maximumEceRegression;
  return {
    status: selected ? "selected" : "fallback",
    method: selected ? "isotonic" : "identity",
    calibrator: selected ? calibrator : { status: "fallback", method: "identity", sampleSize: calibrator.sampleSize },
    baseline,
    candidate,
    reason: selected ? "chronological_selection_pass" : "selection_metrics_not_improved",
  };
}

export function evaluateRacewiseCalibration(races, predict, calibrator = { method: "identity" }) {
  const rows = flattenPredictions(races, (race) => applyRacewiseCalibrator(predict(race), calibrator));
  const logLoss = -mean(rows.map((row) => row.outcome ? Math.log(row.probability) : 0));
  const brier = mean(rows.map((row) => (row.probability - row.outcome) ** 2));
  return { sampleSize: rows.length, races: races.length, logLoss, brier, ece: expectedCalibrationError(rows), probabilityMassError: maximumMassError(races, predict, calibrator) };
}

function flattenPredictions(races, predict) {
  return races.flatMap((race) => {
    const probabilities = normalize(predict(race));
    return race.rows.map((row, index) => ({ probability: probabilities[index], outcome: index === race.winnerIndex ? 1 : 0 }));
  });
}

function maximumMassError(races, predict, calibrator) {
  return Math.max(0, ...races.map((race) => Math.abs(1 - applyRacewiseCalibrator(predict(race), calibrator).reduce((sum, value) => sum + value, 0))));
}

function expectedCalibrationError(rows) {
  const sorted = [...rows].sort((left, right) => left.probability - right.probability);
  const bins = Array.from({ length: 10 }, (_, index) => sorted.slice(Math.floor(index * sorted.length / 10), Math.floor((index + 1) * sorted.length / 10))).filter((bin) => bin.length);
  return bins.reduce((sum, bin) => sum + bin.length * Math.abs(mean(bin.map((row) => row.probability)) - mean(bin.map((row) => row.outcome))), 0) / Math.max(1, rows.length);
}

function normalize(values) {
  const safe = values.map((value) => Math.max(0, Number(value) || 0));
  const total = safe.reduce((sum, value) => sum + value, 0);
  return total > 0 ? safe.map((value) => value / total) : safe.map(() => 1 / Math.max(1, safe.length));
}

function clamp(value, lower, upper) { return Math.max(lower, Math.min(upper, value)); }
function mean(values) { return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0; }
