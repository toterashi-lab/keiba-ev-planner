import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";

export function buildFeatureRows(database, options) {
  const rows = database.prepare(`select r.race_id,r.race_date,r.venue_code,r.race_number,r.race_class,r.surface,r.distance_m,r.direction,r.weather,r.going,r.start_time,
      e.horse_id,e.horse_number,e.gate_number,e.sex_age,e.carried_weight,e.body_weight,e.body_weight_delta,e.jockey_id,e.trainer_id,
      rr.finish_position,rr.final_sectional,rr.corner_positions,rr.popularity
    from races r join race_entries e on e.race_id=r.race_id
    left join race_results rr on rr.race_id=e.race_id and rr.horse_id=e.horse_id
    where r.race_date <= ? order by r.race_date,r.venue_code,r.race_number,e.horse_number`).all(options.to);
  const histories = new Map();
  const jockeys = new Map();
  const trainers = new Map();
  const output = [];

  for (let start = 0; start < rows.length;) {
    let end = start + 1;
    while (end < rows.length && rows[end].race_id === rows[start].race_id) end += 1;
    const raceRows = rows.slice(start, end);
    const emit = raceRows[0].race_date >= options.from && raceRows[0].race_date <= options.to;
    if (emit) {
      const fieldPriorRates = raceRows.map((row) => rate(getStats(histories, row.horse_id)));
      for (let index = 0; index < raceRows.length; index += 1) output.push(createFeatureRow(raceRows[index], histories, jockeys, trainers, fieldPriorRates));
    }
    for (const row of raceRows) updateHistories(row, raceRows.length, histories, jockeys, trainers);
    start = end;
  }
  return output;
}

function createFeatureRow(row, histories, jockeys, trainers, fieldPriorRates) {
  const horse = getStats(histories, row.horse_id);
  const surface = getStats(histories, `${row.horse_id}|surface|${row.surface}`);
  const venue = getStats(histories, `${row.horse_id}|venue|${row.venue_code}`);
  const distance = getStats(histories, `${row.horse_id}|distance|${distanceBand(row.distance_m)}`);
  const going = getStats(histories, `${row.horse_id}|going|${row.surface}|${row.going}`);
  const jockey = getStats(jockeys, row.jockey_id);
  const trainer = getStats(trainers, row.trainer_id);
  const horseRate = rate(horse);
  const fieldAverage = average(fieldPriorRates);
  const age = Number(String(row.sex_age ?? "").match(/\d+/)?.[0]) || null;
  return {
    raceId: row.race_id,
    horseId: row.horse_id,
    asOfTime: `${row.race_date}T${row.start_time || "00:00"}:00+09:00`,
    sourceTimingVerified: false,
    features: {
      venueCode: row.venue_code, raceNumber: row.race_number, raceClass: row.race_class, surface: row.surface,
      distanceM: row.distance_m, distanceBand: distanceBand(row.distance_m), direction: row.direction, weather: row.weather,
      going: row.going, fieldSize: fieldPriorRates.length, month: Number(row.race_date.slice(5, 7)), startHour: Number(String(row.start_time ?? "0").split(":")[0]),
      horseNumber: row.horse_number, gateNumber: row.gate_number, sex: String(row.sex_age ?? "").slice(0, 1), age,
      carriedWeight: row.carried_weight, bodyWeight: row.body_weight, bodyWeightDelta: row.body_weight_delta,
      carriedWeightBodyRatio: row.body_weight ? row.carried_weight / row.body_weight : null,
      daysSinceLastRace: horse.lastDate ? dateDiffDays(horse.lastDate, row.race_date) : null,
      careerStarts: horse.starts, priorWinRate: horseRate.win, priorPlaceRate: horseRate.place, priorAverageFinish: mean(horse.finishSum, horse.finishCount),
      priorAverageFinalSectional: mean(horse.sectionalSum, horse.sectionalCount), priorAveragePopularity: mean(horse.popularitySum, horse.popularityCount),
      surfaceStarts: surface.starts, surfaceWinRate: rate(surface).win, venueStarts: venue.starts, venueWinRate: rate(venue).win,
      distanceBandStarts: distance.starts, distanceBandWinRate: rate(distance).win, goingStarts: going.starts, goingWinRate: rate(going).win,
      jockeyStarts: jockey.starts, jockeyWinRate: rate(jockey).win, jockeyPlaceRate: rate(jockey).place,
      trainerStarts: trainer.starts, trainerWinRate: rate(trainer).win, trainerPlaceRate: rate(trainer).place,
      fieldRelativePriorWinRate: horseRate.win - fieldAverage,
    },
    target: { finishPosition: row.finish_position, won: row.finish_position === 1 ? 1 : 0, placed: row.finish_position && row.finish_position <= (racePlaceDepth(fieldPriorRates.length)) ? 1 : 0 },
    lineage: { historyCutoffExclusive: row.race_date, lastHistoricalRaceDate: horse.lastDate, targetResultExcludedFromFeatures: true },
  };
}

function updateHistories(row, fieldSize, histories, jockeys, trainers) {
  update(getStats(histories, row.horse_id), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|surface|${row.surface}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|venue|${row.venue_code}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|distance|${distanceBand(row.distance_m)}`), row, fieldSize);
  update(getStats(histories, `${row.horse_id}|going|${row.surface}|${row.going}`), row, fieldSize);
  update(getStats(jockeys, row.jockey_id), row, fieldSize);
  update(getStats(trainers, row.trainer_id), row, fieldSize);
}

function getStats(map, key) {
  const safeKey = key || "unknown";
  if (!map.has(safeKey)) map.set(safeKey, { starts: 0, wins: 0, places: 0, finishSum: 0, finishCount: 0, sectionalSum: 0, sectionalCount: 0, popularitySum: 0, popularityCount: 0, lastDate: null });
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
}

function rate(stats) { return { win: stats.starts ? stats.wins / stats.starts : 0, place: stats.starts ? stats.places / stats.starts : 0 }; }
function mean(sum, count) { return count ? sum / count : null; }
function average(values) { return values.length ? values.reduce((sum, value) => sum + value.win, 0) / values.length : 0; }
function distanceBand(distance) { return Math.round((Number(distance) || 0) / 200) * 200; }
function racePlaceDepth(fieldSize) { return fieldSize >= 8 ? 3 : 2; }
function dateDiffDays(left, right) { return Math.round((new Date(`${right}T00:00:00Z`) - new Date(`${left}T00:00:00Z`)) / 86400000); }

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
