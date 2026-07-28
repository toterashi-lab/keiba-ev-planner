import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUTPUT_PATH = path.join(ROOT, "data", "live-racecards.js");
const DATABASE_PATH = path.join(resolvePrivateDataDir(ROOT), "keiba.sqlite");

const data = readPublishedRacecards();
const db = new DatabaseSync(DATABASE_PATH, { readOnly: true });
try {
  const raceIds = data.results.map((result) => result.raceId).filter(Boolean);
  if (!raceIds.length) throw new Error("公開レースカードにraceIdがありません");
  const placeholders = raceIds.map(() => "?").join(",");
  const races = db.prepare(`select * from complete_races where race_id in (${placeholders})`).all(...raceIds);
  const completedByRace = new Map(races.map((race) => [race.race_id, race]));
  const entries = db.prepare(`select e.race_id,e.horse_id,e.gate_number,e.horse_number,e.sex_age,e.carried_weight,
      e.jockey_id,j.name jockey_name,e.trainer_id,t.name trainer_name,e.body_weight,e.body_weight_delta,
      h.name horse_name,r.finish_position,r.finish_text,r.official_time,r.margin,r.corner_positions,r.final_sectional,r.popularity
    from complete_race_entries e
    join complete_race_results r on r.race_id=e.race_id and r.horse_id=e.horse_id
    join horses h on h.horse_id=e.horse_id
    left join jockeys j on j.jockey_id=e.jockey_id
    left join trainers t on t.trainer_id=e.trainer_id
    where e.race_id in (${placeholders})
    order by e.race_id,case when r.finish_position is null then 999 else r.finish_position end,e.horse_number`).all(...raceIds);
  const payouts = db.prepare(`select * from complete_payouts where race_id in (${placeholders})
    order by race_id,bet_type,selection_key`).all(...raceIds);
  const entriesByRace = group(entries, "race_id");
  const payoutsByRace = group(payouts, "race_id");
  let settled = 0;
  data.results = data.results.map((result) => {
    const race = completedByRace.get(result.raceId);
    const finishedEntries = entriesByRace.get(result.raceId) ?? [];
    const refunds = payoutsByRace.get(result.raceId) ?? [];
    if (!race || finishedEntries.length < 2 || !refunds.length) return result;
    settled += 1;
    const runners = finishedEntries.map((entry) => ({
      finishPosition: entry.finish_position,
      finishText: entry.finish_text,
      gateNumber: entry.gate_number,
      horseNumber: entry.horse_number,
      horseId: entry.horse_id,
      horseName: entry.horse_name,
      sexAge: entry.sex_age,
      carriedWeight: entry.carried_weight,
      jockeyId: entry.jockey_id,
      jockeyName: entry.jockey_name,
      officialTime: entry.official_time,
      margin: entry.margin,
      cornerPositions: parsePositions(entry.corner_positions),
      finalSectional: entry.final_sectional,
      bodyWeight: entry.body_weight,
      bodyWeightDelta: entry.body_weight_delta,
      trainerId: entry.trainer_id,
      trainerName: entry.trainer_name,
      popularity: entry.popularity,
    }));
    return {
      ...result,
      status: "complete",
      raceDate: race.race_date,
      weather: race.weather?.trim() || result.weather,
      turfGoing: race.surface === "芝" ? race.going?.trim() || result.turfGoing : null,
      dirtGoing: race.surface === "ダート" ? race.going?.trim() || result.dirtGoing : null,
      winner: runners.find((runner) => runner.finishPosition === 1)?.horseName ?? null,
      runners,
      refunds: refunds.map((payout) => ({ betClass: betClass(payout.bet_type), betType: payout.bet_type,
        selection: payout.selection_key, payoutYen: payout.payout_yen, popularity: payout.popularity })),
      url: race.source_cname
        ? `https://www.jra.go.jp/JRADB/accessS.html?CNAME=${encodeURIComponent(race.source_cname)}`
        : result.url,
    };
  });
  data.generatedAt = new Date().toISOString();
  data.resultSync = { status: "complete", settledRaces: settled, syncedAt: data.generatedAt, source: "JRA公式確定結果・払戻" };
  fs.writeFileSync(OUTPUT_PATH, `window.KEIBA_LIVE_RACECARDS = ${JSON.stringify(data, null, 2)};\n`, "utf8");
  console.log(JSON.stringify({ status: "complete", outputPath: OUTPUT_PATH, settledRaces: settled, totalRaces: data.results.length }, null, 2));
} finally {
  db.close();
}

function readPublishedRacecards() {
  const context = { window: {} };
  context.window = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(OUTPUT_PATH, "utf8"), context, { filename: OUTPUT_PATH });
  if (!context.KEIBA_LIVE_RACECARDS?.results) throw new Error("公開レースカードを読み込めません");
  return context.KEIBA_LIVE_RACECARDS;
}

function group(rows, key) {
  const grouped = new Map();
  for (const row of rows) {
    const value = row[key];
    if (!grouped.has(value)) grouped.set(value, []);
    grouped.get(value).push(row);
  }
  return grouped;
}

function parsePositions(value) {
  try { return JSON.parse(value || "[]"); } catch { return []; }
}

function betClass(betType) {
  return ({ "単勝": "win", "複勝": "place", "枠連": "wakuren", "馬連": "umaren", "ワイド": "wide",
    "馬単": "umatan", "3連複": "trio", "3連単": "tierce" })[betType] ?? betType;
}
