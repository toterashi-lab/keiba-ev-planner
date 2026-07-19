import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

const databasePath = path.join("data", "jra-free-private", "keiba.sqlite");
const outputPath = path.join("data", "live-racecards.js");
const db = new DatabaseSync(databasePath, { readOnly: true });

try {
  const batch = db.prepare(`select * from live_racecard_batches
    where status='complete' and race_count>0 order by id desc limit 1`).get();
  if (!batch) throw new Error("合格済みの今週出馬表バッチがありません");

  const races = db.prepare(`select * from live_races where batch_id=?
    order by race_date,venue_code,race_number`).all(batch.id);
  const entries = db.prepare(`select * from live_entries where batch_id=?
    order by race_id,horse_number`).all(batch.id);
  if (races.length !== batch.race_count || entries.length !== batch.entry_count) {
    throw new Error(`バッチ件数不一致: races=${races.length}/${batch.race_count} entries=${entries.length}/${batch.entry_count}`);
  }

  const venueNames = {
    "01": ["SAPPORO", "札幌"], "02": ["HAKODATE", "函館"], "03": ["FUKUSHIMA", "福島"],
    "04": ["NIIGATA", "新潟"], "05": ["TOKYO", "東京"], "06": ["NAKAYAMA", "中山"],
    "07": ["CHUKYO", "中京"], "08": ["KYOTO", "京都"], "09": ["HANSHIN", "阪神"], "10": ["KOKURA", "小倉"],
  };
  const entriesByRace = new Map();
  for (const entry of entries) {
    if (!entriesByRace.has(entry.race_id)) entriesByRace.set(entry.race_id, []);
    entriesByRace.get(entry.race_id).push(entry);
  }
  const completedRaces = new Map(db.prepare(`select c.* from complete_races c
    join live_races l on l.race_id=c.race_id where l.batch_id=?`).all(batch.id).map((race) => [race.race_id, race]));
  const completedEntries = db.prepare(`select e.race_id,e.horse_id,e.gate_number,e.horse_number,e.sex_age,e.carried_weight,
      e.jockey_id,j.name jockey_name,e.trainer_id,t.name trainer_name,e.body_weight,e.body_weight_delta,
      h.name horse_name,r.finish_position,r.finish_text,r.official_time,r.margin,r.corner_positions,r.final_sectional,r.popularity
    from complete_race_entries e
    join complete_race_results r on r.race_id=e.race_id and r.horse_id=e.horse_id
    join horses h on h.horse_id=e.horse_id
    left join jockeys j on j.jockey_id=e.jockey_id
    left join trainers t on t.trainer_id=e.trainer_id
    join live_races l on l.race_id=e.race_id where l.batch_id=?
    order by e.race_id,case when r.finish_position is null then 999 else r.finish_position end,e.horse_number`).all(batch.id);
  const completedEntriesByRace = new Map();
  for (const entry of completedEntries) {
    if (!completedEntriesByRace.has(entry.race_id)) completedEntriesByRace.set(entry.race_id, []);
    completedEntriesByRace.get(entry.race_id).push(entry);
  }
  const payouts = db.prepare(`select p.* from complete_payouts p
    join live_races l on l.race_id=p.race_id where l.batch_id=?
    order by p.race_id,p.bet_type,p.selection_key`).all(batch.id);
  const payoutsByRace = new Map();
  for (const payout of payouts) {
    if (!payoutsByRace.has(payout.race_id)) payoutsByRace.set(payout.race_id, []);
    payoutsByRace.get(payout.race_id).push(payout);
  }

  const meetings = [];
  const results = [];
  for (const race of races) {
    let meeting = meetings.find((item) => item.date === race.race_date);
    if (!meeting) {
      meeting = {
        date: race.race_date,
        weekday: new Intl.DateTimeFormat("ja-JP", { weekday: "short", timeZone: "Asia/Tokyo" })
          .format(new Date(`${race.race_date}T00:00:00+09:00`)),
        tracks: [],
      };
      meetings.push(meeting);
    }
    const [venueCode, venueName] = venueNames[race.venue_code] ?? [race.venue_code, race.venue_code];
    let track = meeting.tracks.find((item) => item.venueCode === venueCode);
    if (!track) {
      track = { venueCode, venueName, meetingName: race.meeting_name, races: [] };
      meeting.tracks.push(track);
    }
    track.races.push({
      no: race.race_number,
      name: race.race_name,
      condition: race.race_class,
      surface: race.surface,
      distanceM: race.distance_m,
      start: race.start_time,
    });

    const liveRunners = (entriesByRace.get(race.race_id) ?? []).map((entry) => ({
      finishPosition: null,
      finishText: "出走予定",
      gateNumber: entry.gate_number,
      horseNumber: entry.horse_number,
      horseName: entry.horse_name,
      sexAge: entry.sex_age,
      carriedWeight: entry.carried_weight,
      jockeyName: entry.jockey_name,
      officialTime: "",
      margin: "",
      cornerPositions: [],
      finalSectional: null,
      bodyWeight: entry.body_weight,
      bodyWeightDelta: entry.body_weight_delta,
      trainerName: entry.trainer_name,
      popularity: null,
    }));
    const completed = completedRaces.get(race.race_id);
    const runners = completed ? (completedEntriesByRace.get(race.race_id) ?? []).map((entry) => ({
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
      cornerPositions: JSON.parse(entry.corner_positions || "[]"),
      finalSectional: entry.final_sectional,
      bodyWeight: entry.body_weight,
      bodyWeightDelta: entry.body_weight_delta,
      trainerId: entry.trainer_id,
      trainerName: entry.trainer_name,
      popularity: entry.popularity,
    })) : liveRunners;
    const refunds = (payoutsByRace.get(race.race_id) ?? []).map((payout) => ({
      betClass: betClass(payout.bet_type),
      betType: payout.bet_type,
      selection: payout.selection_key,
      payoutYen: payout.payout_yen,
      popularity: payout.popularity,
    }));
    results.push({
      status: completed ? "complete" : "pre_race",
      raceId: race.race_id,
      raceDate: race.race_date,
      venueCode,
      meetingName: race.meeting_name,
      raceNo: race.race_number,
      raceTitle: race.race_name,
      startTime: race.start_time,
      course: `${race.surface}${race.distance_m}m ${race.direction ?? ""}`.trim(),
      weather: completed?.weather?.trim() || race.weather,
      turfGoing: race.surface === "芝" ? completed?.going?.trim() || race.going : null,
      dirtGoing: race.surface === "ダート" ? completed?.going?.trim() || race.going : null,
      winner: runners.find((runner) => runner.finishPosition === 1)?.horseName ?? null,
      runners,
      refunds,
      url: completed?.source_cname
        ? `https://www.jra.go.jp/JRADB/accessS.html?CNAME=${encodeURIComponent(completed.source_cname)}`
        : "https://www.jra.go.jp/JRADB/accessD.html",
    });
  }

  const data = {
    source: "JRA公式出馬表",
    batchId: batch.id,
    targetDates: batch.target_dates.split(","),
    meetings,
    results,
    raceCount: races.length,
    entryCount: entries.length,
    generatedAt: new Date().toISOString(),
  };
  const text = `window.KEIBA_LIVE_RACECARDS = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(outputPath, text, "utf8");
  console.log(JSON.stringify({ status: "complete", outputPath, dates: data.targetDates,
    races: races.length, entries: entries.length, meetings: meetings.length }, null, 2));
} finally {
  db.close();
}

function betClass(betType) {
  return ({ "単勝": "win", "複勝": "place", "枠連": "wakuren", "馬連": "umaren", "ワイド": "wide",
    "馬単": "umatan", "3連複": "trio", "3連単": "tierce" })[betType] ?? betType;
}
