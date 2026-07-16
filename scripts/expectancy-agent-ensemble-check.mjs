import { runExpectancyAgentEnsemble } from "../model/expectancy-agent-ensemble.mjs";

const base = {
  oddsObservedAt: "2026-01-01T00:00:00Z",
  points: 1,
  totalInvestmentYen: 100,
  modelVersion: "unit",
  betType: "単勝",
  method: "1点",
  abilityModelStatus: "research_pass",
  calibrationStatus: "pass",
  abilityExpectedReturn: 1.2,
  marketExpectedReturn: 0.9,
  conservativeExpectedReturn: 1.05,
  calibrationError: 0.02,
  externalValidationStatus: "fail",
  deploymentStatus: "benchmark_only",
  payoutVolatilityPrior: { status: "matched_historical_pattern", lift: 3, conditions: ["field=large"] },
};
const blocked = runExpectancyAgentEnsemble(base);
assert(blocked.chiefDecision.rankingExpectedReturn === 1.05, "chief must use conservative lower bound");
assert(blocked.chiefDecision.purchaseEligible === false, "external validation must block purchase");
assert(blocked.chiefDecision.authorityPolicy.volatilityMayIncreaseExpectedReturn === false, "volatility cannot inflate EV");
const eligible = runExpectancyAgentEnsemble({ ...base, externalValidationStatus: "pass", deploymentStatus: "eligible" });
assert(eligible.chiefDecision.purchaseEligible === true, "all gates should allow eligibility");
assert(Object.keys(eligible.assessments).length === 7, "seven specialist agents required");
console.log("OK 専門7エージェント＋期待値統合エージェント・権限制約");

function assert(condition, label) {
  if (!condition) throw new Error(`expectancy agent ensemble check failed: ${label}`);
}
