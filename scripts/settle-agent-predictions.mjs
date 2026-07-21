import crypto from "node:crypto";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { settlePrediction } from "./agent-result-settlement.mjs";
import { appendPredictionStatusEvent, initializeAgentSystemSchema } from "./agent-system-store.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const DATABASE_PATH = path.join(resolvePrivateDataDir(ROOT), "keiba.sqlite");

export function settlePublishedAgentPredictions(database, now = new Date().toISOString()) {
  initializeAgentSystemSchema(database);
  const locked = lockDuePredictions(database, now);
  const pending = database.prepare(`select state.prediction_id,state.race_id
    from current_agent_prediction_status state where state.status='locked' order by state.prediction_id`).all();
  const settled = [];
  const waiting = [];
  for (const row of pending) {
    const result = loadOfficialResult(database, row.race_id);
    if (!result) { waiting.push(row.race_id); continue; }
    settled.push(settlePrediction(database, row.prediction_id, result, now));
  }
  return { now, locked, settled: settled.length, waitingRaceIds: [...new Set(waiting)], payouts: settled.reduce((sum, row) => sum + row.payoutYen, 0) };
}

export function lockDuePredictions(database, now = new Date().toISOString()) {
  const due = database.prepare(`select state.prediction_id,snapshot.cutoff_at
    from current_agent_prediction_status state join data_snapshots snapshot on snapshot.data_snapshot_id=(
      select data_snapshot_id from agent_predictions where prediction_id=state.prediction_id)
    where state.status='published' and snapshot.cutoff_at<=?`).all(now);
  for (const row of due) appendPredictionStatusEvent(database, row.prediction_id, "locked", row.cutoff_at, "締切時刻を経過");
  return due.length;
}

function loadOfficialResult(database, raceId) {
  if (!tableExists(database, "complete_race_results") || !tableExists(database, "complete_race_entries") || !tableExists(database, "complete_payouts")) return null;
  const finishers = database.prepare(`select e.horse_number horseNumber,r.finish_position finishPosition
    from complete_race_results r join complete_race_entries e on e.race_id=r.race_id and e.horse_id=r.horse_id
    where r.race_id=? and r.finish_position is not null order by r.finish_position,e.horse_number`).all(raceId);
  if (!finishers.some((row) => Number(row.finishPosition) === 1)) return null;
  const payouts = database.prepare("select bet_type betType,selection_key selectionKey,payout_yen payoutYen from complete_payouts where race_id=?").all(raceId);
  if (!payouts.length) return null;
  return { raceId, finishers, payouts, payoutSourceHash: crypto.createHash("sha256").update(JSON.stringify({ finishers, payouts })).digest("hex") };
}

function tableExists(database, name) {
  return database.prepare("select count(*) count from sqlite_master where type in ('table','view') and name=?").get(name).count === 1;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const database = new DatabaseSync(DATABASE_PATH);
  database.exec("pragma foreign_keys=on; pragma busy_timeout=30000;");
  try { console.log(JSON.stringify(settlePublishedAgentPredictions(database), null, 2)); }
  finally { database.close(); }
}
