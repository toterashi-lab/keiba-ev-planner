import path from "node:path";
import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync(path.join("data", "jra-free-private", "keiba.sqlite"), { readOnly: true });
try {
  const base = db.prepare(`select * from odds_ingestion_batches where status='complete'
    and source in ('JRA official live odds','JRA official live odds fixture') order by id desc limit 1`).get();
  if (!base) throw new Error("ライブ単複オッズの完了バッチがありません");
  const exotic = db.prepare(`select * from odds_ingestion_batches where status='complete'
    and source in ('JRA official live exotic odds','JRA official live exotic odds fixture')
    and snapshot_kind=? and target_dates=? order by id desc limit 1`).get(base.snapshot_kind, base.target_dates);
  if (!exotic) throw new Error("同時点のライブ全券種オッズバッチがありません");
  const rows = db.prepare(`select race_id,bet_type,selection_key,odds_low,odds_high,snapshot_kind,observed_at,batch_id
    from live_odds_snapshots where batch_id in (?,?)`).all(base.id, exotic.id);
  const raceIds = [...new Set(rows.map((row) => row.race_id))];
  const required = ["win", "place", "quinella", "wide", "exacta", "trio", "trifecta"];
  for (const raceId of raceIds) for (const betType of required) {
    if (!rows.some((row) => row.race_id === raceId && row.bet_type === betType)) throw new Error(`${raceId} ${betType}が欠損しています`);
  }
  if (rows.some((row) => row.odds_low < 1 || row.odds_high < row.odds_low || row.snapshot_kind !== base.snapshot_kind)) throw new Error("ライブオッズ値域またはスナップショット種別が不正です");
  if (base.snapshot_kind === "pre_race") {
    for (const raceId of raceIds) {
      const race = db.prepare("select race_date,start_time from live_races where race_id=?").get(raceId);
      const start = new Date(`${race.race_date}T${race.start_time}:00+09:00`).getTime();
      const observed = Math.max(...rows.filter((row) => row.race_id === raceId).map((row) => new Date(row.observed_at).getTime()));
      if (!(observed < start && start - observed <= 20 * 60000)) throw new Error(`${raceId}の発走前時刻条件が不正です`);
    }
  }
  console.log(JSON.stringify({ status: "pass", snapshotKind: base.snapshot_kind, baseBatchId: base.id, exoticBatchId: exotic.id, races: raceIds.length, prices: rows.length, betTypes: required.length }, null, 2));
} finally { db.close(); }
