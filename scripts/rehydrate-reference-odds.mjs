import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const root = path.resolve(import.meta.dirname, "..");
const sourcePath = path.join(root, "data", "closing-odds-2026-07-11-2026-07-12.json");
const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const targetDates = [...(source.targetDates || [])].sort().join(",");
const db = new DatabaseSync(path.join(resolvePrivateDataDir(root), "keiba.sqlite"));
db.exec("PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");

try {
  const missing = (source.races || []).filter((race) => !db.prepare("select 1 from complete_races where race_id=?").get(race.raceId));
  if (missing.length) throw new Error(`参照オッズに対応するレースが不足しています: ${missing.length}`);

  const base = ensureBatch("JRA official odds", ["win", "place"]);
  const exotic = ensureBatch("JRA official exotic odds", ["quinella", "wide", "exacta", "trio", "trifecta"]);
  console.log(JSON.stringify({ status: "ready", targetDates, base, exotic }, null, 2));
} finally {
  db.close();
}

function ensureBatch(sourceName, betTypes) {
  const existing = db.prepare(`select id,race_count from odds_ingestion_batches
    where source=? and snapshot_kind='closing_final' and target_dates=? and status='complete'
    order by id desc limit 1`).get(sourceName, targetDates);
  if (existing) {
    db.exec("begin immediate");
    try {
      const checks = restoreQualityChecks(existing.id);
      db.exec("commit");
      return { batchId: existing.id, raceCount: existing.race_count, qualityChecks: checks, restored: false };
    } catch (error) {
      db.exec("rollback");
      throw error;
    }
  }

  const now = new Date().toISOString();
  db.exec("begin immediate");
  try {
    const batch = db.prepare(`insert into odds_ingestion_batches(
      source,snapshot_kind,target_dates,status,meeting_count,race_count,source_runner_count,priced_runner_count,started_at,completed_at
    ) values(?,'closing_final',?,'complete',?,?,?,?,?,?) returning id`).get(
      sourceName, targetDates, Number(source.meetingCount || 0), Number(source.raceCount || 0),
      Number(source.sourceRunnerCount || 0), Number(source.pricedRunnerCount || 0), now, now,
    );
    const insert = db.prepare(`insert into odds_snapshots(
      race_id,bet_type,selection_key,odds,odds_low,odds_high,snapshot_kind,batch_id,observed_at,source_page_id
    ) values(?,?,?,?,?,?,'closing_final',?,?,null)`);
    let prices = 0;
    for (const race of source.races || []) {
      for (const betType of betTypes) {
        for (const [selection, price] of Object.entries(race.oddsBooks?.[betType] || {})) {
          const low = Number(price?.low);
          const high = Number(price?.high);
          if (!(low >= 1) || !(high >= low)) throw new Error(`${race.raceId} ${betType} ${selection}: オッズ値が不正です`);
          insert.run(race.raceId, betType, selection, low, low, high, batch.id, race.observedAt);
          prices += 1;
        }
      }
    }
    if (!prices) throw new Error(`${sourceName}: 復元対象オッズがありません`);
    const qualityChecks = restoreQualityChecks(batch.id);
    db.exec("commit");
    return { batchId: batch.id, raceCount: Number(source.raceCount || 0), prices, qualityChecks, restored: true };
  } catch (error) {
    db.exec("rollback");
    throw error;
  }
}

function restoreQualityChecks(batchId) {
  const checks = source.quality ?? [];
  if (checks.length < 6 || checks.some((check) => check.status !== "pass")) {
    throw new Error("参照オッズの品質検査記録が不足または不合格です");
  }
  const checkedAt = new Date().toISOString();
  const insert = db.prepare(`insert or replace into odds_quality_checks(
    batch_id,check_name,status,actual_value,details,checked_at
  ) values(?,?,?,?,?,?)`);
  for (const check of checks) insert.run(batchId, check.check_name, check.status,
    Number.isFinite(Number(check.actual_value)) ? Number(check.actual_value) : null, String(check.details ?? ""), checkedAt);
  return checks.length;
}
