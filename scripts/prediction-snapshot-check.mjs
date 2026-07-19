import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { initializePredictionSnapshotSchema, persistPredictionSnapshots } from "./prediction-snapshot.mjs";

const db = new DatabaseSync(":memory:");
db.exec(`create table live_races(race_id text primary key,race_date text,start_time text);
insert into live_races values('R1','2099-01-01','12:00');`);
initializePredictionSnapshotSchema(db);
const output = { generatedAt: "2099-01-01T01:00:00.000Z", predictions: [{ raceId: "R1", modelVersion: "unit-v1", predictionContext: "pre_race",
  marks: [{ mark: "◎", horseNumber: 1, horseName: "テスト" }], forecastPanel: [{ id: "agent_ability", status: "available", confidence: .8,
    marks: [{ mark: "◎", horseNumber: 1, horseName: "テスト" }], opinion: "能力上位。" }], masterConsensus: { topHorseNumber: 1 }, comment: "unit" }],
  candidates: [{ raceId: "R1", betType: "単勝", method: "1点", selection: "1 テスト", points: 1, componentSelectionKeys: ["1"],
    conservativeExpectedReturn: 1.08, recommendationEligible: true, oddsObservedAt: "2099-01-01T01:00:00.000Z" }] };
const first = persistPredictionSnapshots(db, output, output.generatedAt);
assert.deepEqual(first, { inserted: 1, skippedTiming: 0, total: 1 });
assert.equal(persistPredictionSnapshots(db, output, output.generatedAt).inserted, 0);
assert.equal(db.prepare("select count(*) count from prediction_agent_snapshots").get().count, 5);
assert.throws(() => db.exec("update prediction_publications set model_version='changed'"), /append-only/);
assert.throws(() => db.exec("delete from prediction_ticket_snapshots"), /append-only/);
console.log(JSON.stringify({ status: "pass", publications: 1, appendOnly: true, agentsPerRace: 5 }));
db.close();
