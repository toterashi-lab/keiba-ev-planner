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
