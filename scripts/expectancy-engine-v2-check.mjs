import {
  JRA_RETURN_RATES,
  conservativeExpectedValue,
  deploymentDecision,
  fitFavoriteLongshotExponent,
  fitStackingWeight,
  normalizeMarket,
  selectProbability,
} from "../model/expectancy-engine-v2.mjs";

const failures = [];
const market = normalizeMarket([{ odds_low: 2 }, { odds_low: 4 }, { odds_low: 8 }], "win", 3);
assert(nearly(sum(market.map((row) => row.marketProbability)), 1), "win market normalization");
assert(JRA_RETURN_RATES.trifecta === 0.725 && JRA_RETURN_RATES.win === 0.8, "JRA return rates");

const fallback = selectProbability({ marketProbability: 0.2, modelProbability: 0.4, validationArtifact: null });
assert(fallback.mode === "market_baseline" && fallback.probability === 0.2, "unvalidated model fallback");
const stacked = selectProbability({ marketProbability: 0.2, modelProbability: 0.4, validationArtifact: { status: "pass", noTargetLeakage: true, marketWeight: 0.5 } });
assert(stacked.probability > 0.2 && stacked.probability < 0.4, "validated log pooling");

const insufficient = fitFavoriteLongshotExponent([], { minimumRaces: 10 });
assert(insufficient.status === "insufficient", "bias fit minimum sample gate");
const races = Array.from({ length: 20 }, (_, index) => ({
  marketProbabilities: [0.6, 0.3, 0.1],
  modelProbabilities: [0.8, 0.15, 0.05],
  winnerIndex: index % 10 < 8 ? 0 : index % 10 === 8 ? 1 : 2,
}));
assert(fitFavoriteLongshotExponent(races, { minimumRaces: 20 }).status === "fitted", "bias exponent fit");
assert(fitStackingWeight(races, { minimumRaces: 20 }).marketWeight < 1, "stacking fit favors skilled model");

const conservative = conservativeExpectedValue({ probability: 0.25, odds: 5, calibrationError: 0.02, bootstrapStdError: 0.01, oddsDownsideRate: 0.05 });
assert(conservative.expectedReturn === 1.25 && conservative.conservativeExpectedReturn < conservative.expectedReturn, "uncertainty and odds downside");
assert(deploymentDecision({ validationArtifact: null, oddsAgeSeconds: 60, candidate: conservative }).status === "benchmark_only", "deployment gate blocks unvalidated model");
assert(deploymentDecision({ validationArtifact: { status: "pass", noTargetLeakage: true }, oddsAgeSeconds: 60, candidate: conservative }).status === "eligible", "deployment gate passes validated positive EV");

if (failures.length) {
  failures.forEach((failure) => console.error(`NG ${failure}`));
  process.exit(1);
}
console.log("OK 期待値v2: 払戻率・市場正規化・人気薄補正・自動スタッキング");
console.log("OK 期待値v2: 不確実性控除・オッズ下落・検証未合格時の市場縮退");

function assert(value, name) { if (!value) failures.push(name); }
function sum(values) { return values.reduce((total, value) => total + value, 0); }
function nearly(left, right) { return Math.abs(left - right) < 1e-9; }
