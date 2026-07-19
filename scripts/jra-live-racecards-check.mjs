import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { buildFeatureRows } from "./model-feature-pipeline.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const root = path.resolve(import.meta.dirname, "..");
const db = new DatabaseSync(path.join(resolvePrivateDataDir(root), "keiba.sqlite"), { readOnly: true });
try {
  const batch = db.prepare("select * from live_racecard_batches where status='complete' order by id desc limit 1").get();
  if (!batch) throw new Error("合格済み出馬表バッチがありません");
  const races = db.prepare("select * from live_races where batch_id=?").all(batch.id);
  const entries = db.prepare("select * from live_entries where batch_id=?").all(batch.id);
  if (races.length !== batch.race_count || entries.length !== batch.entry_count) throw new Error("出馬表バッチ件数が一致しません");
  if (races.some((race) => !race.race_id || !race.race_date || !race.venue_code || !race.race_number || !race.start_time)) throw new Error("レース必須項目が欠損しています");
  if (entries.some((entry) => !entry.horse_id || !entry.horse_name || !entry.horse_number || !entry.jockey_name || !entry.trainer_name)) {
    throw new Error("出走馬の表示必須項目が欠損しています");
  }
  let comparableRaces = 0;
  for (const race of races) {
    const historical = db.prepare(`select e.horse_id,e.horse_number,r.finish_text
      from complete_race_entries e join complete_race_results r on r.race_id=e.race_id and r.horse_id=e.horse_id
      where e.race_id=? order by e.horse_number`).all(race.race_id);
    if (!historical.length) continue;
    comparableRaces += 1;
    const live = db.prepare("select horse_id,horse_number from live_entries where race_id=? order by horse_number").all(race.race_id);
    const historicalKeys = new Set(historical.map((entry) => `${entry.horse_id}:${entry.horse_number}`));
    if (live.some((entry) => !historicalKeys.has(`${entry.horse_id}:${entry.horse_number}`))) {
      throw new Error(`${race.race_id}の出馬表に結果DBと一致しない馬がいます`);
    }
    const liveKeys = new Set(live.map((entry) => `${entry.horse_id}:${entry.horse_number}`));
    const unexplainedMissing = historical.filter((entry) => !liveKeys.has(`${entry.horse_id}:${entry.horse_number}`)
      && !["取消", "除外"].includes(entry.finish_text));
    if (unexplainedMissing.length) throw new Error(`${race.race_id}の出馬表と結果DBの馬集合が一致しません`);
  }
  const dates = [...new Set(races.map((race) => race.race_date))];
  const featureRows = buildFeatureRows(db, { from: dates[0], to: dates.at(-1), completeOnly: true, includeLive: true, emitHistorical: false });
  if (featureRows.length !== entries.length || featureRows.some((row) => row.dataContext !== "live" || !row.sourceTimingVerified || row.target.won !== null)) {
    throw new Error("ライブ特徴量の件数・時刻・目的変数分離が不正です");
  }
  console.log(JSON.stringify({ status: "pass", batchId: batch.id, races: races.length, entries: entries.length, comparableRaces, featureRows: featureRows.length, resultLeakage: "pass" }, null, 2));
} finally { db.close(); }
