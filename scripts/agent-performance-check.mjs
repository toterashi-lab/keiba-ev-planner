import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { evaluateAgentPerformance, shouldWritePublicPerformance } from "./agent-performance.mjs";
import { persistPredictionSnapshots } from "./prediction-snapshot.mjs";

const db = new DatabaseSync(":memory:");
db.exec(`create table live_races(race_id text primary key,race_date text,start_time text);
create table races(race_id text primary key,race_date text);
create table complete_race_entries(race_id text,horse_id text,horse_number integer);
create table complete_race_results(race_id text,horse_id text,finish_position integer);
create table complete_payouts(race_id text,bet_type text,selection_key text,payout_yen integer);
insert into live_races values('R1','2099-01-01','12:00');
insert into complete_race_entries values('R1','H1',1),('R1','H2',2),('R1','H3',3);
insert into complete_race_results values('R1','H1',1),('R1','H2',2),('R1','H3',3);
insert into complete_payouts values('R1','win','1',250);`);
const forecastPanel = ["ability", "pace", "data", "value", "odds"].map((id) => ({ id: `agent_${id}`, status: "available", confidence: .8,
  marks: [{ mark: "◎", horseNumber: 1, horseName: "A" }, { mark: "○", horseNumber: 2, horseName: "B" }, { mark: "▲", horseNumber: 3, horseName: "C" }], opinion: "unit" }));
persistPredictionSnapshots(db, { generatedAt: "2099-01-01T01:00:00.000Z", predictions: [{ raceId: "R1", modelVersion: "unit", predictionContext: "pre_race",
  marks: forecastPanel[0].marks, forecastPanel, masterConsensus: {}, comment: "unit" }], candidates: [{ raceId: "R1", betType: "単勝", method: "1点",
  selection: "1 A", componentSelectionKeys: ["1"], points: 1, conservativeExpectedReturn: 1.2, recommendationEligible: true }] }, "2099-01-01T01:00:00.000Z");
const output = evaluateAgentPerformance(db);
assert.equal(output.records.length, 6);
assert.ok(output.records.every((row) => row.honmeiFinish === 1 && row.markFinish));
assert.ok(output.records.every((row) => row.investmentYen === 100 && row.payoutYen === 250 && row.roi === 2.5));
const unchangedPublic = `window.KEIBA_AGENT_PERFORMANCE = ${JSON.stringify({ ...output, generatedAt: "2099-01-02T00:00:00.000Z" })};\n`;
assert.equal(shouldWritePublicPerformance(unchangedPublic, output), false);
assert.equal(shouldWritePublicPerformance(unchangedPublic, { ...output, records: [...output.records, { agentId: "new" }] }), true);
console.log(JSON.stringify({ status: "pass", records: output.records.length, agentPolicies: 5, masterPolicies: 1 }));
db.close();
