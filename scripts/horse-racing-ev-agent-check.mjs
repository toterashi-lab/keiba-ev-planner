import fs from "node:fs";

const agents = fs.readFileSync("AGENTS.md", "utf8");
const source = fs.readFileSync("scripts/horse-racing-ev-agent.mjs", "utf8");

for (const token of [
  "$horse-racing-ev-research",
  "AI推奨だけを集計",
  "高配当条件のリフトを確率や期待値へ直接加算しない",
  "外部投票サービス連携",
]) {
  if (!agents.includes(token)) throw new Error(`AGENTS.md contract missing: ${token}`);
}
for (const token of [
  "race_results_backfill",
  "historical_odds_backfill",
  "full_walk_forward_training",
  "external_ai_recommendation_validation",
  "ai_prediction_top_ticket_only",
  "externalBettingIntegration: \"out_of_scope\"",
]) {
  if (!source.includes(token)) throw new Error(`agent state machine missing: ${token}`);
}
console.log("OK 競馬期待値エージェント契約・状態機械・安全ゲート");
