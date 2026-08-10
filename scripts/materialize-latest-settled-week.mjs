import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { fileURLToPath } from "node:url";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const DATABASE = path.join(resolvePrivateDataDir(ROOT), "keiba.sqlite");
const SOURCE = "JRA official results replay";

export function materializeLatestSettledWeek(options = {}) {
  const database = new DatabaseSync(options.databasePath ?? DATABASE);
  database.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
  try {
    ensureSchema(database);
    const latest = database.prepare("select max(race_date) race_date from complete_races").get()?.race_date;
    if (!latest) throw new Error("確定済みレースがありません");
    const range = latestWeekRange(latest);
    const races = database.prepare(`select r.*,m.meeting_number,m.meeting_day,m.display_name meeting_name
      from complete_races r join complete_meetings m on m.meeting_id=r.meeting_id
      where r.race_date between ? and ? order by r.race_date,r.venue_code,r.race_number`).all(range.from, range.to);
    if (!races.length) throw new Error(`最新確定週にレースがありません: ${range.from}..${range.to}`);
    const dates = [...new Set(races.map((race) => race.race_date))];
    const latestBatch = database.prepare(`select * from live_racecard_batches
      where status='complete' and race_count>0 order by id desc limit 1`).get();
    const latestBatchRaces = latestBatch
      ? database.prepare("select race_id from live_races where batch_id=? order by race_id").all(latestBatch.id).map((row) => row.race_id)
      : [];
    const expectedIds = races.map((race) => race.race_id).sort();
    if (latestBatch?.target_dates === dates.join(",") && JSON.stringify(latestBatchRaces) === JSON.stringify(expectedIds)) {
      return { status: "current", batchId: latestBatch.id, dates, races: races.length, source: latestBatch.source };
    }

    const entries = database.prepare(`select e.race_id,e.horse_id,e.horse_number,e.gate_number,e.sex_age,e.carried_weight,
        e.jockey_id,j.name jockey_name,e.trainer_id,t.name trainer_name,e.body_weight,e.body_weight_delta,h.name horse_name
      from complete_race_entries e join complete_races r on r.race_id=e.race_id
      join horses h on h.horse_id=e.horse_id left join jockeys j on j.jockey_id=e.jockey_id
      left join trainers t on t.trainer_id=e.trainer_id
      where r.race_date between ? and ? order by e.race_id,e.horse_number`).all(range.from, range.to);
    const expectedEntries = database.prepare(`select count(*) count from complete_race_entries e
      join complete_races r on r.race_id=e.race_id where r.race_date between ? and ?`).get(range.from, range.to).count;
    if (entries.length !== expectedEntries || entries.length < races.length * 2) {
      throw new Error(`最新確定週の出走馬件数が不正です: ${entries.length}/${expectedEntries}`);
    }

    const now = new Date().toISOString();
    database.exec("begin immediate");
    try {
      const batch = database.prepare(`insert into live_racecard_batches(
        source,target_dates,status,race_count,entry_count,started_at,completed_at
      ) values(?,?,'complete',?,?,?,?) returning id`).get(SOURCE, dates.join(","), races.length, entries.length, now, now);
      const saveRace = database.prepare(`insert into live_races(
        race_id,batch_id,race_date,venue_code,meeting_number,meeting_day,race_number,meeting_name,race_name,race_class,
        surface,distance_m,start_time,source_page_id,observed_at,direction,weather,going,snapshot_context
      ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      on conflict(race_id) do update set batch_id=excluded.batch_id,race_date=excluded.race_date,venue_code=excluded.venue_code,
        meeting_number=excluded.meeting_number,meeting_day=excluded.meeting_day,race_number=excluded.race_number,
        meeting_name=excluded.meeting_name,race_name=excluded.race_name,race_class=excluded.race_class,surface=excluded.surface,
        distance_m=excluded.distance_m,start_time=excluded.start_time,source_page_id=excluded.source_page_id,
        observed_at=excluded.observed_at,direction=excluded.direction,weather=excluded.weather,going=excluded.going,
        snapshot_context=excluded.snapshot_context`);
      for (const race of races) saveRace.run(race.race_id, batch.id, race.race_date, race.venue_code,
        race.meeting_number, race.meeting_day, race.race_number, race.meeting_name, race.race_name, race.race_class,
        race.surface, race.distance_m, race.start_time, race.source_page_id, now, race.direction, race.weather, race.going,
        "as_of_replay");
      const raceIds = races.map((race) => race.race_id);
      const placeholders = raceIds.map(() => "?").join(",");
      database.prepare(`delete from live_entries where race_id in (${placeholders})`).run(...raceIds);
      const saveEntry = database.prepare(`insert into live_entries(
        race_id,horse_id,batch_id,horse_name,horse_number,gate_number,sex_age,carried_weight,jockey_id,jockey_name,
        trainer_id,trainer_name,body_weight,body_weight_delta,owner_name,breeder_name,sire_name,dam_name,damsire_name,observed_at
      ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
      for (const entry of entries) saveEntry.run(entry.race_id, entry.horse_id, batch.id, entry.horse_name,
        entry.horse_number, entry.gate_number, entry.sex_age, entry.carried_weight, entry.jockey_id, entry.jockey_name,
        entry.trainer_id, entry.trainer_name, entry.body_weight, entry.body_weight_delta, "", "", "", "", "", now);
      database.exec("commit");
      return { status: "materialized", batchId: batch.id, dates, races: races.length, entries: entries.length,
        source: SOURCE, snapshotContext: "as_of_replay" };
    } catch (error) {
      database.exec("rollback");
      throw error;
    }
  } finally {
    database.close();
  }
}

export function latestWeekRange(date) {
  const value = new Date(`${date}T00:00:00Z`);
  const day = value.getUTCDay();
  const daysFromMonday = day === 0 ? 6 : day - 1;
  const from = new Date(value);
  from.setUTCDate(from.getUTCDate() - daysFromMonday);
  const to = new Date(from);
  to.setUTCDate(to.getUTCDate() + 6);
  return { from: from.toISOString().slice(0, 10), to: to.toISOString().slice(0, 10) };
}

function ensureSchema(database) {
  const columns = new Set(database.prepare("pragma table_info(live_races)").all().map((row) => row.name));
  if (!columns.has("snapshot_context")) {
    database.exec("alter table live_races add column snapshot_context text not null default 'pre_race'");
  }
}

if (fs.realpathSync(path.resolve(process.argv[1])) === fs.realpathSync(fileURLToPath(import.meta.url))) {
  console.log(JSON.stringify(materializeLatestSettledWeek(), null, 2));
}
