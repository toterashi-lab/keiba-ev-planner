import fs from "node:fs";

const file = "data/historical-payout-patterns.json";
const report = JSON.parse(fs.readFileSync(file, "utf8"));

assert(report.status === "research_only", "research-only status");
assert(report.leakagePolicy?.targetWeekExcluded === true, "target week exclusion");
assert(report.policy?.acceptedOnlyWhenBothPeriodsLiftAboveOne === true, "two-period replication policy");
assert(report.coverage?.discoveryRows > 0 && report.coverage?.validationRows > 0, "temporal coverage");
assert(Array.isArray(report.patterns), "patterns array");
for (const pattern of report.patterns) {
  assert(pattern.discovery.count >= report.policy.minimumDiscoveryRows, "discovery sample floor");
  assert(pattern.validation.count >= report.policy.minimumValidationRows, "validation sample floor");
  assert(pattern.discovery.lift > 1 && pattern.validation.lift > 1, "replicated lift");
  assert(pattern.usePolicy === "volatility_prior_only", "no direct EV inflation");
}
console.log(`OK 高配当条件 ${report.patterns.length}件・時系列再現性ゲート・期待値への直接加算なし`);

function assert(condition, label) {
  if (!condition) throw new Error(`historical payout pattern check failed: ${label}`);
}
