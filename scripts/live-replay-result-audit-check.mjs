import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
global.window = {};
require("../data/live-racecards.js");
require("../data/live-replay-audit.js");

const results = (window.KEIBA_LIVE_RACECARDS?.results ?? []).filter((result) => result.status === "complete");
const audit = window.KEIBA_LIVE_REPLAY_AUDIT;
const records = audit?.records ?? [];

assert.equal(audit?.status, "replay_only");
assert.equal(records.length, results.length, "確定レースすべてに照合記録が必要です");
assert.ok(records.every((record) => record.tickets?.length === 3));
assert.ok(records.every((record) => record.tickets.map((ticket) => ticket.betType).join("|") === "単勝|馬連|3連複"));
assert.ok(records.every((record) => record.tickets.every((ticket) => ticket.unitStakeYen === 100)));
assert.ok(records.every((record) => record.tickets.every((ticket) => ticket.investmentYen === ticket.points * 100)));
assert.ok(records.every((record) => Number.isFinite(record.payoutYen) && record.payoutYen >= 0));
assert.ok(records.filter((record) => record.sourceClassification === "as_of_replay").every((record) => record.predictionContext === "as_of_replay"));
assert.equal(audit.coverage.immutableSnapshots, 0, "不変スナップショットなしの公開データを本番成績に混ぜてはいけません");
assert.equal(audit.coverage.evaluatedTickets, results.length);

console.log(JSON.stringify({ status: "pass", confirmedResults: results.length, replayOnly: audit.coverage.replayOnly,
  preRaceTimestamped: audit.coverage.preRaceTimestamped, recoveryRate: audit.summary.recoveryRate }, null, 2));
