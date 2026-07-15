import { DatabaseSync } from "node:sqlite";
import { captureModelDataSnapshot } from "./model-data-snapshot.mjs";
import { inspectModelFreshness } from "./model-freshness.mjs";

const db = new DatabaseSync(":memory:");
try {
  db.exec(`
    create table complete_races(race_id text,race_date text,source_page_id integer);
    create table complete_race_entries(race_id text,horse_id text);
    create table complete_race_results(race_id text,horse_id text);
    create table complete_payouts(race_id text);
    create table unrelated_odds(id integer);
    insert into complete_races values('r1','2026-01-01',10);
    insert into complete_race_entries values('r1','h1');
    insert into complete_race_results values('r1','h1');
    insert into complete_payouts values('r1');
  `);
  const initial = captureModelDataSnapshot(db);
  const implementation = { version: "model-implementation-snapshot-v1", fingerprint: "code-a", files: {} };
  const artifact = { modelVersion: "unit", trainingSnapshot: initial, trainingImplementation: implementation };
  if (inspectModelFreshness(db, artifact, implementation).status !== "fresh") {
    throw new Error("Matching model snapshot was not classified as fresh");
  }
  const changedImplementation = { ...implementation, fingerprint: "code-b" };
  if (inspectModelFreshness(db, artifact, changedImplementation).status !== "stale") {
    throw new Error("Changed implementation was not classified as stale");
  }
  db.exec("insert into unrelated_odds values(1)");
  const unrelated = captureModelDataSnapshot(db);
  if (initial.fingerprint !== unrelated.fingerprint) throw new Error("Unrelated odds changed the model-data fingerprint");
  db.exec("update complete_races set source_page_id=11 where race_id='r1'");
  const changedSource = captureModelDataSnapshot(db);
  if (initial.fingerprint === changedSource.fingerprint) throw new Error("Changed source page did not change the fingerprint");
  if (inspectModelFreshness(db, artifact, implementation).status !== "stale") {
    throw new Error("Changed source page was not classified as stale");
  }
  db.exec("insert into complete_race_entries values('r1','h2'); insert into complete_race_results values('r1','h2')");
  const changedRows = captureModelDataSnapshot(db);
  if (changedSource.fingerprint === changedRows.fingerprint) throw new Error("Changed normalized rows did not change the fingerprint");
  console.log(JSON.stringify({ status: "pass", fingerprintVersion: initial.version, unrelatedStable: true,
    sourceChangeDetected: true, rowChangeDetected: true, freshnessTransition: "fresh-to-stale" }, null, 2));
} finally {
  db.close();
}
