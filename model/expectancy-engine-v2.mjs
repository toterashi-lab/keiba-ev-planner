export const EXPECTANCY_ENGINE_VERSION = "expectancy-engine-v2";

export const JRA_RETURN_RATES = Object.freeze({
  win: 0.8,
  place: 0.8,
  quinella: 0.775,
  wide: 0.775,
  exacta: 0.75,
  trio: 0.75,
  trifecta: 0.725,
});

export function normalizeMarket(rows, betType, fieldSize) {
  if (!JRA_RETURN_RATES[betType]) throw new Error(`Unsupported bet type: ${betType}`);
  const multiplicity = outcomeMultiplicity(betType, fieldSize);
  const inverse = rows.map((row) => {
    const odds = Number(row.odds ?? row.odds_low);
    if (!(odds >= 1)) throw new Error(`Invalid odds: ${odds}`);
    return 1 / odds;
  });
  const total = inverse.reduce((sum, value) => sum + value, 0);
  if (!(total > 0)) throw new Error("Market probability total is zero");
  return rows.map((row, index) => ({
    ...row,
    marketProbability: Math.min(1, multiplicity * inverse[index] / total),
    marketOverround: total / multiplicity,
    statutoryReturnRate: JRA_RETURN_RATES[betType],
  }));
}

export function fitFavoriteLongshotExponent(races, options = {}) {
  const minimumRaces = options.minimumRaces ?? 1000;
  if (races.length < minimumRaces) return insufficient("favorite_longshot_exponent", races.length, minimumRaces);
  let best = { exponent: 1, logLoss: Infinity };
  for (let exponent = 0.5; exponent <= 1.5 + 1e-9; exponent += 0.01) {
    const logLoss = multiclassLogLoss(races, (probabilities) => powerNormalize(probabilities, exponent));
    if (logLoss < best.logLoss) best = { exponent: round(exponent, 4), logLoss };
  }
  return { status: "fitted", ...best, sampleRaces: races.length };
}

export function fitStackingWeight(races, options = {}) {
  const minimumRaces = options.minimumRaces ?? 1000;
  if (races.length < minimumRaces) return insufficient("stacking_weight", races.length, minimumRaces);
  let best = { marketWeight: 1, logLoss: Infinity };
  for (let marketWeight = 0; marketWeight <= 1 + 1e-9; marketWeight += 0.01) {
    const logLoss = multiclassLogLoss(races, (_, race) => logPoolDistribution(race.modelProbabilities, race.marketProbabilities, marketWeight));
    if (logLoss < best.logLoss) best = { marketWeight: round(marketWeight, 4), logLoss };
  }
  return { status: "fitted", ...best, sampleRaces: races.length };
}

export function selectProbability({ marketProbability, modelProbability, validationArtifact }) {
  const artifactReady = validationArtifact?.status === "pass"
    && validationArtifact?.noTargetLeakage === true
    && Number.isFinite(validationArtifact?.marketWeight)
    && validationArtifact.marketWeight >= 0 && validationArtifact.marketWeight <= 1;
  if (!artifactReady || !(modelProbability > 0 && modelProbability < 1)) {
    return { probability: marketProbability, mode: "market_baseline", marketWeight: 1 };
  }
  const probability = binaryLogPool(modelProbability, marketProbability, validationArtifact.marketWeight);
  return { probability, mode: "validated_stacking", marketWeight: validationArtifact.marketWeight };
}

export function conservativeExpectedValue({ probability, odds, calibrationError = 0, bootstrapStdError = 0, oddsDownsideRate = 0 }) {
  const uncertainty = Math.max(0, Number(calibrationError), 1.645 * Math.max(0, Number(bootstrapStdError)));
  const conservativeProbability = Math.max(0, probability - uncertainty);
  const conservativeOdds = Math.max(1, odds * (1 - Math.max(0, Math.min(1, oddsDownsideRate))));
  const expectedReturn = probability * odds;
  const conservativeExpectedReturn = conservativeProbability * conservativeOdds;
  return {
    probability,
    conservativeProbability,
    odds,
    conservativeOdds,
    expectedReturn,
    conservativeExpectedReturn,
    edge: expectedReturn - 1,
    conservativeEdge: conservativeExpectedReturn - 1,
    expectedProfitPer100Yen: 100 * (expectedReturn - 1),
    conservativeProfitPer100Yen: 100 * (conservativeExpectedReturn - 1),
    uncertainty,
  };
}

export function deploymentDecision({ validationArtifact, oddsAgeSeconds, candidate }) {
  const reasons = [];
  if (validationArtifact?.status !== "pass") reasons.push("validation_not_passed");
  if (validationArtifact?.noTargetLeakage !== true) reasons.push("leakage_gate_not_passed");
  if (!(oddsAgeSeconds <= 300)) reasons.push("odds_stale");
  if (!(candidate?.conservativeExpectedReturn > 1)) reasons.push("non_positive_conservative_ev");
  return { status: reasons.length ? "benchmark_only" : "eligible", reasons };
}

export function powerNormalize(probabilities, exponent) {
  const powered = probabilities.map((value) => Math.pow(Math.max(1e-12, value), exponent));
  const total = powered.reduce((sum, value) => sum + value, 0);
  return powered.map((value) => value / total);
}

export function logPoolDistribution(model, market, marketWeight) {
  const pooled = model.map((value, index) => Math.pow(Math.max(1e-12, value), 1 - marketWeight)
    * Math.pow(Math.max(1e-12, market[index]), marketWeight));
  const total = pooled.reduce((sum, value) => sum + value, 0);
  return pooled.map((value) => value / total);
}

function multiclassLogLoss(races, transform) {
  return races.reduce((sum, race) => {
    const probabilities = transform(race.marketProbabilities, race);
    return sum - Math.log(Math.max(1e-12, probabilities[race.winnerIndex]));
  }, 0) / races.length;
}

function binaryLogPool(model, market, marketWeight) {
  const positive = Math.pow(model, 1 - marketWeight) * Math.pow(market, marketWeight);
  const negative = Math.pow(1 - model, 1 - marketWeight) * Math.pow(1 - market, marketWeight);
  return positive / (positive + negative);
}

function outcomeMultiplicity(betType, fieldSize) {
  const placeDepth = fieldSize >= 8 ? 3 : 2;
  if (betType === "place") return placeDepth;
  if (betType === "wide") return placeDepth === 3 ? 3 : 1;
  return 1;
}

function insufficient(parameter, actual, required) {
  return { status: "insufficient", parameter, actual, required };
}

function round(value, digits) {
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}
