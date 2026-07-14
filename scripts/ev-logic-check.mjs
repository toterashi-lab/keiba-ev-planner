const tests = [
  {
    name: "positive edge",
    odds: 6,
    probability: 0.2,
    bankroll: 30000,
    maxStake: 1000,
    kellyFraction: 0.25,
    edge: 0.2,
    stake: 300,
  },
  {
    name: "break even",
    odds: 4,
    probability: 0.25,
    bankroll: 30000,
    maxStake: 1000,
    kellyFraction: 0.25,
    edge: 0,
    stake: 0,
  },
  {
    name: "negative edge",
    odds: 5,
    probability: 0.1,
    bankroll: 30000,
    maxStake: 1000,
    kellyFraction: 0.25,
    edge: -0.5,
    stake: 0,
  },
];

let failed = 0;

for (const test of tests) {
  const result = enrichBet(test);
  const edgeOk = nearlyEqual(result.edge, test.edge);
  const stakeOk = result.stake === test.stake;
  if (!edgeOk || !stakeOk) failed += 1;
  console.log(
    `${edgeOk && stakeOk ? "OK" : "NG"} ${test.name}: edge=${result.edge.toFixed(6)} stake=${result.stake}`,
  );
}

const normalizedMarket = normalizeInverseOdds([5, 13.2, 73.5]);
const normalizationOk = nearlyEqual(normalizedMarket.reduce((sum, value) => sum + value, 0), 1);
console.log(`${normalizationOk ? "OK" : "NG"} market normalization: sum=${normalizedMarket.reduce((sum, value) => sum + value, 0).toFixed(6)}`);
if (!normalizationOk) failed += 1;

const pooled = logitPool(0.28, 0.159, 0.5);
const poolingOk = pooled > 0.159 && pooled < 0.28 && nearlyEqual(logitPool(0.28, 0.159, 0), 0.28)
  && nearlyEqual(logitPool(0.28, 0.159, 1), 0.159);
console.log(`${poolingOk ? "OK" : "NG"} logit pooling: probability=${pooled.toFixed(6)}`);
if (!poolingOk) failed += 1;

const conservative = Math.max(0.0001, pooled - 0.02);
const lowerBoundOk = conservative < pooled && conservative > 0;
console.log(`${lowerBoundOk ? "OK" : "NG"} conservative scenario: probability=${conservative.toFixed(6)}`);
if (!lowerBoundOk) failed += 1;

if (failed) process.exit(1);

function enrichBet(row) {
  const decimalProfit = row.odds - 1;
  const expectedReturnRate = row.odds * row.probability;
  const edge = expectedReturnRate - 1;
  const kelly = Math.max(0, (row.odds * row.probability - 1) / decimalProfit);
  const rawStake = row.bankroll * kelly * row.kellyFraction;
  const stake = Math.min(row.maxStake, Math.floor(rawStake / 100) * 100);

  return {
    expectedReturnRate,
    edge,
    stake,
    expectedProfit: stake * edge,
  };
}

function nearlyEqual(a, b) {
  return Math.abs(a - b) < 0.000001;
}

function normalizeInverseOdds(values) {
  const inverse = values.map((odds) => 1 / odds);
  const total = inverse.reduce((sum, value) => sum + value, 0);
  return inverse.map((value) => value / total);
}

function logitPool(modelProbability, marketProbability, marketWeight) {
  const logit = (value) => Math.log(value / (1 - value));
  return 1 / (1 + Math.exp(-((1 - marketWeight) * logit(modelProbability) + marketWeight * logit(marketProbability))));
}
