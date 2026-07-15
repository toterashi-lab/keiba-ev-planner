import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";

export function buildFeatureRows(database, options) {
  const raceTable = options.completeOnly ? "complete_races" : "races";
  const entryTable = options.completeOnly ? "complete_race_entries" : "race_entries";
  const resultTable = options.completeOnly ? "complete_race_results" : "race_results";
  const historyOperator = options.includeLive ? "<" : "<=";
  const rows = database.prepare(`select r.race_id,r.race_date,r.venue_code,r.race_number,r.race_name,r.race_class,r.surface,r.distance_m,r.direction,r.weather,r.going,r.start_time,
      e.horse_id,e.horse_number,e.gate_number,e.sex_age,e.carried_weight,e.body_weight,e.body_weight_delta,e.jockey_id,e.trainer_id,
      rr.finish_position,rr.final_sectional,rr.corner_positions,rr.popularity
    from ${raceTable} r join ${entryTable} e on e.race_id=r.race_id
    left join ${resultTable} rr on rr.race_id=e.race_id and rr.horse_id=e.horse_id
    where r.race_date ${historyOperator} ? order by r.race_date,r.venue_code,r.race_number,e.horse_number`).iterate(options.to);
  const histories = new Map();
  const jockeys = new Map();
  const trainers = new Map();
  const output = [];

  const processRace = (raceRows) => {
    if (!raceRows.length) return;
    const emit = options.emitHistorical !== false && raceRows[0].race_date >= options.from && raceRows[0].race_date <= options.to;
    if (emit) {
      const fieldPriorRates = raceRows.map((row) => rate(getStats(histories, row.horse_id)));
      for (let index = 0; index < raceRows.length; index += 1) {
        const featureRow = createFeatureRow(raceRows[index], histories, jockeys, trainers, fieldPriorRates, false, "historical");
        if (options.collect !== false) output.push(featureRow);
        options.onRow?.(featureRow);
      }
    }
    for (const row of raceRows) updateHistories(row, raceRows.length, histories, jockeys, trainers);
  };
  let raceRows = [];
  for (const row of rows) {
    if (raceRows.length && raceRows[0].race_id !== row.race_id) {
      processRace(raceRows);
      raceRows = [];
    }
    raceRows.push(row);
  }
  processRace(raceRows);
  if (options.includeLive && database.prepare("select count(*) count from sqlite_master where type='table' and name='live_races'").get().count) {
    const liveRows = database.prepare(`select r.race_id,r.race_date,r.venue_code,r.race_number,r.race_name,r.race_class,r.surface,r.distance_m,
        r.direction,r.weather,r.going,r.start_time,e.horse_id,e.horse_number,e.gate_number,e.sex_age,e.carried_weight,
        e.body_weight,e.body_weight_delta,e.jockey_id,e.trainer_id,null finish_position,null final_sectional,null corner_positions,null popularity,
        case when r.observed_at>e.observed_at then r.observed_at else e.observed_at end observed_at
      from live_races r join live_entries e on e.race_id=r.race_id
      where r.race_date between ? and ? order by r.race_date,r.venue_code,r.race_number,e.horse_number`).all(options.from, options.to);
    for (let start = 0; start < liveRows.length;) {
      let end = start + 1;
      while (end < liveRows.length && liveRows[end].race_id === liveRows[start].race_id) end += 1;
      const liveRaceRows = liveRows.slice(start, end);
      const fieldPriorRates = liveRaceRows.map((row) => rate(getStats(histories, row.horse_id)));
      for (const row of liveRaceRows) {
        const featureRow = createFeatureRow(row, histories, jockeys, trainers, fieldPriorRates, true, "live");
        if (options.collect !== false) output.push(featureRow);
        options.onRow?.(featureRow);
      }
      start = end;
    }
  }
  return output;
}

function createFeatureRow(row, histories, jockeys, trainers, fieldPriorRates, sourceTimingVerified, dataContext) {
  const horse = getStats(histories, row.horse_id);
  const surface = getStats(histories, `${row.horse_id}|surface|${row.surface}`);
  const venue = getStats(histories, `${row.horse_id}|venue|${row.venue_code}`);
  const distance = getStats(histories, `${row.horse_id}|distance|${distanceBand(row.distance_m)}`);
  const going = getStats(histories, `${row.horse_id}|going|${row.surface}|${row.going}`);
  const weather = getStats(histories, `${row.horse_id}|weather|${weatherBand(row.weather)}`);
  const direction = getStats(histories, `${row.horse_id}|direction|${directionBand(row.direction)}`);
  const classStats = getStats(histories, `${row.horse_id}|class|${raceClassLevel(`${row.race_name ?? ""} ${row.race_class ?? ""}`)}`);
  const season = getStats(histories, `${row.horse_id}|season|${seasonBand(row.race_date)}`);
  const jockey = getStats(jockeys, row.jockey_id);
  const trainer = getStats(trainers, row.trainer_id);
  const horseRate = rate(horse);
  const fieldAverage = average(fieldPriorRates);
  const age = Number(String(row.sex_age ?? "").match(/\d+/)?.[0]) || null;
  const month = Number(row.race_date.slice(5, 7));
  const classText = `${row.race_name ?? ""} ${row.race_class ?? ""}`;
  const sex = String(row.sex_age ?? "").trim().slice(0, 1);
  const cleanWeather = clean(row.weather);
  const cleanGoing = clean(row.going);
  const cleanDirection = clean(row.direction);
  return {
    raceId: row.race_id,
    horseId: row.horse_id,
    raceDate: row.race_date,
    asOfTime: sourceTimingVerified ? row.observed_at : `${row.race_date}T${row.start_time || "00:00"}:00+09:00`,
    sourceTimingVerified,
    dataContext,
    features: {
      venueCode: row.venue_code, raceNumber: row.race_number, raceClass: row.race_class, surface: row.surface,
      distanceM: row.distance_m, distanceBand: distanceBand(row.distance_m), direction: row.direction, weather: row.weather,
      going: row.going, fieldSize: fieldPriorRates.length, month, startHour: parseStartHour(row.start_time),
      monthSin: Math.sin(2 * Math.PI * (month - 1) / 12), monthCos: Math.cos(2 * Math.PI * (month - 1) / 12),
      raceClassLevel: raceClassLevel(classText), handicapRace: /ハンデ/.test(classText) ? 1 : 0,
      horseNumberFieldRatio: row.horse_number / fieldPriorRates.length, gateNumberFieldRatio: row.gate_number / fieldPriorRates.length,
      ...Object.fromEntries(Array.from({ length: 10 }, (_, index) => [`venue${String(index + 1).padStart(2, "0")}`, row.venue_code === String(index + 1).padStart(2, "0") ? 1 : 0])),
      ...Object.fromEntries(Array.from({ length: 10 }, (_, index) => {
        const venueCode = String(index + 1).padStart(2, "0");
        return [`gateVenue${venueCode}`, row.venue_code === venueCode ? row.gate_number / fieldPriorRates.length : 0];
      })),
      surfaceTurf: indicator(row.surface, (value) => value.includes("芝")),
      surfaceDirt: indicator(row.surface, (value) => value.includes("ダート")),
      surfaceJump: indicator(row.surface, (value) => value.includes("障害")),
      directionRight: indicator(cleanDirection, (value) => value.includes("右")),
      directionLeft: indicator(cleanDirection, (value) => value.includes("左")),
      directionStraight: indicator(cleanDirection, (value) => value.includes("直線")),
      directionOuter: indicator(cleanDirection, (value) => /外|outer/i.test(value)),
      gateSurfaceTurf: row.surface?.includes("芝") ? row.gate_number / fieldPriorRates.length : 0,
      gateSurfaceDirt: row.surface?.includes("ダート") ? row.gate_number / fieldPriorRates.length : 0,
      gateSurfaceJump: row.surface?.includes("障害") ? row.gate_number / fieldPriorRates.length : 0,
      gateDirectionRight: cleanDirection?.includes("右") ? row.gate_number / fieldPriorRates.length : 0,
      gateDirectionLeft: cleanDirection?.includes("左") ? row.gate_number / fieldPriorRates.length : 0,
      gateDirectionStraight: cleanDirection?.includes("直線") ? row.gate_number / fieldPriorRates.length : 0,
      gateDirectionOuter: /外|outer/i.test(cleanDirection ?? "") ? row.gate_number / fieldPriorRates.length : 0,
      weatherSunny: indicator(cleanWeather, (value) => value.includes("晴")),
      weatherCloudy: indicator(cleanWeather, (value) => value.includes("曇")),
      weatherRain: indicator(cleanWeather, (value) => value.includes("雨")),
      weatherSnow: indicator(cleanWeather, (value) => value.includes("雪")),
      goingFirm: indicator(cleanGoing, (value) => value === "良"),
      goingYielding: indicator(cleanGoing, (value) => value === "稍重"),
      goingSoft: indicator(cleanGoing, (value) => value === "重"),
      goingHeavy: indicator(cleanGoing, (value) => value === "不良"),
      horseNumber: row.horse_number, gateNumber: row.gate_number, sex: String(row.sex_age ?? "").slice(0, 1), age,
      sexMale: sex ? (sex === "牡" ? 1 : 0) : null, sexFemale: sex ? (sex === "牝" ? 1 : 0) : null, sexGelding: sex ? (sex === "セ" ? 1 : 0) : null,
      carriedWeight: row.carried_weight, bodyWeight: row.body_weight, bodyWeightDelta: row.body_weight_delta,
      carriedWeightBodyRatio: row.body_weight ? row.carried_weight / row.body_weight : null,
      daysSinceLastRace: horse.lastDate ? dateDiffDays(horse.lastDate, row.race_date) : null,
      classChange: horse.lastClassLevel == null ? null : raceClassLevel(classText) - horse.lastClassLevel,
      distanceChangeHundreds: horse.lastDistanceM == null ? null : (row.distance_m - horse.lastDistanceM) / 100,
      surfaceChanged: horse.lastSurface == null ? null : (horse.lastSurface === row.surface ? 0 : 1),
      careerStarts: horse.starts, priorWinRate: horseRate.win, priorPlaceRate: horseRate.place, priorAverageFinish: mean(horse.finishSum, horse.finishCount),
      priorAverageFinalSectional: mean(horse.sectionalSum, horse.sectionalCount), priorAveragePopularity: mean(horse.popularitySum, horse.popularityCount),
      surfaceStarts: surface.starts, surfaceWinRate: rate(surface).win, venueStarts: venue.starts, venueWinRate: rate(venue).win,
      distanceBandStarts: distance.starts, distanceBandWinRate: rate(distance).win, goingStarts: going.starts, goingWinRate: rate(going).win,
      weatherStarts: weather.starts, weatherWinRate: rate(weather).win,
      directionStarts: direction.starts, directionWinRate: rate(direction).win,
      classStarts: classStats.starts, classWinRate: rate(classStats).win,
      seasonStarts: season.starts, seasonWinRate: rate(season).win,
      jockeyStarts: jockey.starts, jockeyWinRate: rate(jockey).win, jockeyPlaceRate: rate(jockey).place,
      trainerStarts: trainer.starts, trainerWinRate: rate(trainer).win, trainerPlaceRate: rate(trainer).place,
      fieldRelativePriorWinRate: horseRate.win - fieldAverage,
    },
    target: dataContext === "live"
      ? { finishPosition: null, won: null, placed: null }
      : { finishPosition: row.finish_position, won: row.finish_position === 1 ? 1 : 0, placed: row.finish_position && row.finish_position <= (racePlaceDepth(fieldPriorRates.length)) ? 1 : 0 },
    lineage: { historyCutoffExclusive: row.race_date, lastHistoricalRaceDate: horse.lastDate, targetResultExcludedFromFeatures: true },
  };
}

function updateHistories(row, fieldSize, histories, jockeys, trainers) {
  update(getStats(histories, row.horse_id), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|surface|${row.surface}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|venue|${row.venue_code}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|distance|${distanceBand(row.distance_m)}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|going|${row.surface}|${row.going}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|weather|${weatherBand(row.weather)}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|direction|${directionBand(row.direction)}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|class|${raceClassLevel(`${row.race_name ?? ""} ${row.race_class ?? ""}`)}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|season|${seasonBand(row.race_date)}`), row, fieldSize);
  update(getStats(jockeys, row.jockey_id), row, fieldSize);
  update(getStats(trainers, row.trainer_id), row, fieldSize);
}

function getStats(map, key) {
  const safeKey = key || "unknown";
  if (!map.has(safeKey)) map.set(safeKey, { starts: 0, wins: 0, places: 0, finishSum: 0, finishCount: 0, sectionalSum: 0, sectionalCount: 0, popularitySum: 0, popularityCount: 0, lastDate: null, lastClassLevel: null, lastDistanceM: null, lastSurface: null });
  return map.get(safeKey);
}

function update(stats, row, fieldSize) {
  stats.starts += 1;
  if (row.finish_position === 1) stats.wins += 1;
  if (row.finish_position && row.finish_position <= racePlaceDepth(fieldSize)) stats.places += 1;
  if (row.finish_position) { stats.finishSum += row.finish_position; stats.finishCount += 1; }
  if (Number.isFinite(row.final_sectional)) { stats.sectionalSum += row.final_sectional; stats.sectionalCount += 1; }
  if (row.popularity) { stats.popularitySum += row.popularity; stats.popularityCount += 1; }
  stats.lastDate = row.race_date;
  stats.lastClassLevel = raceClassLevel(`${row.race_name ?? ""} ${row.race_class ?? ""}`);
  stats.lastDistanceM = row.distance_m;
  stats.lastSurface = row.surface;
}

function rate(stats) { return { win: stats.starts ? stats.wins / stats.starts : 0, place: stats.starts ? stats.places / stats.starts : 0 }; }
function mean(sum, count) { return count ? sum / count : null; }
function average(values) { return values.length ? values.reduce((sum, value) => sum + value.win, 0) / values.length : 0; }
function distanceBand(distance) { return Math.round((Number(distance) || 0) / 200) * 200; }
function racePlaceDepth(fieldSize) { return fieldSize >= 8 ? 3 : 2; }
function dateDiffDays(left, right) { return Math.round((new Date(`${right}T00:00:00Z`) - new Date(`${left}T00:00:00Z`)) / 86400000); }
function clean(value) { const result = String(value ?? "").trim(); return result || null; }
function indicator(value, predicate) { return value == null || value === "" ? null : (predicate(String(value)) ? 1 : 0); }
function parseStartHour(value) { const match = String(value ?? "").match(/(\d{1,2})(?::|時)/); return match ? Number(match[1]) : null; }
function raceClassLevel(value) {
  if (/G(?:Ⅰ|I|1)(?!I)|Ｇ１/i.test(value)) return 7;
  if (/G(?:Ⅱ|II|2)|Ｇ２/i.test(value)) return 6;
  if (/G(?:Ⅲ|III|3)|Ｇ３/i.test(value)) return 5;
  if (/オープン|リステッド|Listed|\bL\b/i.test(value)) return 4;
  if (/3勝クラス|1600万/.test(value)) return 3;
  if (/2勝クラス|1000万/.test(value)) return 2;
  if (/1勝クラス|500万/.test(value)) return 1;
  return 0;
}
function weatherBand(value) { const text = clean(value); return text?.includes("雨") ? "rain" : text?.includes("雪") ? "snow" : text?.includes("曇") ? "cloudy" : text?.includes("晴") ? "sunny" : "unknown"; }
function directionBand(value) { const text = clean(value); return text?.includes("直線") ? "straight" : text?.includes("右") ? "right" : text?.includes("左") ? "left" : "unknown"; }
function seasonBand(date) { return Math.ceil(Number(String(date).slice(5, 7)) / 3) || 0; }

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const options = parseArgs(process.argv.slice(2));
  const database = new DatabaseSync(options.database, { readOnly: true });
  try {
    const rows = buildFeatureRows(database, options);
    fs.mkdirSync(path.dirname(options.output), { recursive: true });
    fs.writeFileSync(options.output, rows.map((row) => JSON.stringify(row)).join("\n") + (rows.length ? "\n" : ""), "utf8");
    console.log(JSON.stringify({ output: options.output, rows: rows.length, from: options.from, to: options.to, sourceTimingVerified: false }, null, 2));
  } finally { database.close(); }
}

function parseArgs(args) {
  const value = (name, fallback) => { const index = args.indexOf(name); return index >= 0 ? args[index + 1] : fallback; };
  const from = value("--from", "2026-07-11");
  const to = value("--to", "2026-07-12");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to) || from > to) throw new Error("--from/--to は有効な日付範囲が必要です");
  return { from, to, database: value("--database", "data/jra-free-private/keiba.sqlite"), output: value("--output", `data/jra-free-private/features/features-${from}-${to}.jsonl`) };
}
