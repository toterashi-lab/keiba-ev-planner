import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
global.window = {};
require("../data/live-model-outputs.js");
const engine = require("../agent-forecast-engine.js");
const policy = require("../forecast-policy.js");

const predictions = window.KEIBA_LIVE_MODEL_OUTPUTS?.predictions ?? [];
let racesWithDifferentTopPicks = 0;
let racesWithDifferentRankings = 0;

assert.ok(predictions.length > 0, "予想データがありません");
for (const prediction of predictions) {
  const agents = Object.values(engine.buildAgents(prediction));
  assert.equal(agents.length, 5, `${prediction.raceId}: 5人分の予想がありません`);
  assert.ok(agents.every((agent) => agent.status === "available" && agent.marks.length === 5));
  const topPicks = new Set(agents.map((agent) => agent.marks[0].horseNumber));
  const rankings = new Set(agents.map((agent) => agent.marks.map((mark) => mark.horseNumber).join("-")));
  if (topPicks.size > 1) racesWithDifferentTopPicks += 1;
  if (rankings.size > 1) racesWithDifferentRankings += 1;
  for (const agent of agents) {
    const tickets = policy.buildForecastTickets({ marks: agent.marks }, 100);
    assert.deepEqual(tickets.map((ticket) => ticket.points), [1, 5, 10]);
    assert.deepEqual(tickets.map((ticket) => ticket.method), ["1点", "期待順5点", "5頭BOX"]);
  }
}

// 個性は順位全体で検査する。同じ本命が合理的なレースまで別本命を強制すると的中率を損なう。
assert.ok(racesWithDifferentRankings >= Math.floor(predictions.length * .9), "5人の順位差が少なすぎます");
assert.ok(racesWithDifferentTopPicks >= Math.floor(predictions.length * .25), "本命の違いが少なすぎます");

console.log(JSON.stringify({ status: "pass", races: predictions.length,
  racesWithDifferentTopPicks, racesWithDifferentRankings }, null, 2));
