import fs from "node:fs";
import path from "node:path";

const file = path.join("data", "jra-free-private", "models", "reference-market-benchmark.json");
const report = JSON.parse(fs.readFileSync(file, "utf8"));
const failures = [];
if (report.races !== 72) failures.push(`races ${report.races}/72`);
if (!["pass", "fail"].includes(report.status)) failures.push("invalid status");
if (!["market", "pooled", "ability"].every((key) => Number.isFinite(report.logLoss?.[key]))) {
  failures.push("missing log loss");
}
if (report.policy !== "deployment_gate_only_no_target_retuning") failures.push("unsafe benchmark policy");
if (report.status === "fail" && report.abilityMaySetExpectedReturn !== false) failures.push("failed model may set EV");
if (failures.length) {
  failures.forEach((failure) => console.error(`NG ${failure}`));
  process.exit(1);
}
console.log(`OK 市場${report.logLoss.market.toFixed(4)}・統合${report.logLoss.pooled.toFixed(4)}・能力${report.logLoss.ability.toFixed(4)}・EVゲート${report.status}`);
