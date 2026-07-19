import fs from "node:fs";
import path from "node:path";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const source = fs.readFileSync("scripts/evaluate-reference-ev.mjs", "utf8");
const root = path.resolve(import.meta.dirname, "..");
const report = JSON.parse(fs.readFileSync(path.join(resolvePrivateDataDir(root), "models", "reference-ev-audit.json"), "utf8"));
const failures = [];
if (report.evaluationScope !== "ai_prediction_top_ticket_only") failures.push("evaluation scope");
if (report.recommendationCoverage?.predictions !== 72
  || report.recommendationCoverage?.auditedRecommendations !== 72
  || report.recommendations?.length !== 72) failures.push("AI recommendation coverage");
if (!(report.recommendationCoverage?.excludedCandidateRows > 0)) failures.push("non-recommended candidates were not excluded");
if (report.recommendations.some((row) => row.recommendationSource !== "ai_prediction_top_ticket"
  || row.investmentYen !== row.points * 100 || row.ticketKeys.length !== row.points)) failures.push("recommendation integrity");
if (report.strategies.some((row) => !row.name.startsWith("AI推奨・"))) failures.push("non-AI strategy included");
const primary = report.strategies.find((row) => row.name === "AI推奨・全レース");
if (primary?.bets !== 72) failures.push("primary AI recommendation strategy");
for (const forbidden of ["byRaceType", "topCandidate(", "単勝1番人気", "単勝全頭"]) {
  if (source.includes(forbidden)) failures.push(`legacy candidate strategy token: ${forbidden}`);
}
if (failures.length) {
  for (const failure of failures) console.error(`NG ${failure}`);
  process.exit(1);
}
console.log(JSON.stringify({
  status: "pass",
  evaluationScope: report.evaluationScope,
  recommendations: report.recommendations.length,
  excludedCandidateRows: report.recommendationCoverage.excludedCandidateRows,
  primary: { bets: primary.bets, hits: primary.hits, roi: primary.roi },
}, null, 2));
