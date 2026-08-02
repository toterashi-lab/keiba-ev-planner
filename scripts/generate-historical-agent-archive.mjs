import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { DatabaseSync } from "node:sqlite";
import { buildFeatureRows } from "./model-feature-pipeline.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DATABASE = path.join(PRIVATE_DIR, "keiba.sqlite");
const OUTPUT_DIR = path.join(ROOT, "data", "historical-agent-archive");
const require = createRequire(import.meta.url);
const forecastPolicy = require(path.join(ROOT, "forecast-policy.js"));
const UNIT_STAKE_YEN = 100;
const VERSION = "historical-agent-replay-v2";
const AGENT_IDS = ["safety", "sniper", "pace", "analyst", "contrarian"];
const VENUES = { "01": "札幌", "02": "函館", "03": "福島", "04": "新潟", "05": "東京", "06": "中山", "07": "中京", "08": "京都", "09": "阪神", "10": "小倉" };

const db = new DatabaseSync(DATABASE, { readOnly: true });
db.exec("PRAGMA busy_timeout=30000; begin;");

try {
  prepareOutputDirectory();
  const coverage = db.prepare("select min(race_date) minDate,max(race_date) maxDate,count(*) races from complete_races").get();
  const horseNames = new Map(db.prepare("select horse_id,name from horses").all().map((row) => [row.horse_id, row.name]));
  const raceStatement = db.prepare(`select r.race_id,r.race_date,r.venue_code,r.race_number,r.race_name,r.race_class,
    r.surface,r.distance_m,r.going,r.weather,m.display_name meeting_name
    from races r join meetings m on m.meeting_id=r.meeting_id where r.race_id=?`);
  const payoutStatement = db.prepare("select bet_type,selection_key,payout_yen from payouts where race_id=? and bet_type in ('単勝','馬連','3連複')");
  const oddsStatement = db.prepare("select horse_number,win_odds,time_basis from historical_win_place_odds where race_id=? and win_odds>=1 order by horse_number");

  const index = {
    version: VERSION,
    generatedAt: new Date().toISOString(),
    status: "reference_replay",
    label: "時系列再現・各100円",
    policy: {
      predictionTiming: "past-performance features are strictly before race start",
      marketReferenceTiming: "historical_closing_reference; research replay only and excluded from published pre-race audit",
      resultFeaturesUsedForPrediction: false,
      actualPurchase: false,
      ticketTypes: ["単勝1点", "馬連5点", "3連複5頭BOX"],
      agentCount: 5,
      agentOrder: AGENT_IDS,
      compactRaceSchema: ["venueCode", "raceNo", "raceName", "surface", "distanceM", "podium", "horseNames", "agents", "totals"],
      compactAgentSchema: ["markHorseNumbers", "ticketPayouts"],
      compactTotalsSchema: ["points", "payoutYen"],
    },
    coverage: { databaseRaces: Number(coverage.races), from: coverage.minDate, to: coverage.maxDate, archivedRaces: 0, archivedDays: 0, marketReferenceRaces: 0 },
    totals: emptyTotals(),
    months: [],
  };

  let currentRace = null;
  let currentMonth = null;
  let monthRecords = [];
  let processedRows = 0;

  const flushRace = () => {
    if (!currentRace?.rows?.length || currentRace.rows.length < 2) return;
    const record = buildRaceRecord(currentRace, raceStatement, payoutStatement, oddsStatement, horseNames);
    if (!record) return;
    const month = record.date.slice(0, 7);
    if (currentMonth && month !== currentMonth) flushMonth();
    currentMonth = month;
    monthRecords.push(record);
    index.coverage.archivedRaces += 1;
    if (record.marketReference) index.coverage.marketReferenceRaces += 1;
    addTotals(index.totals, record.totals);
    if (index.coverage.archivedRaces % 5000 === 0) console.log(`archive ${index.coverage.archivedRaces}/${coverage.races}`);
  };

  const flushMonth = () => {
    if (!currentMonth || !monthRecords.length) return;
    const days = groupMonthDays(monthRecords);
    const totals = days.reduce((sum, day) => addTotals(sum, day.totals), emptyTotals());
    finalizeTotals(totals);
    const file = `${currentMonth}.json`;
    fs.writeFileSync(path.join(OUTPUT_DIR, file), `${JSON.stringify({ version: VERSION, month: currentMonth, totals, days })}\n`, "utf8");
    index.months.push({ month: currentMonth, file, races: monthRecords.length, days: days.map((day) => ({ date: day.date, races: day.races.length, totals: day.totals })), totals });
    index.coverage.archivedDays += days.length;
    monthRecords = [];
  };

  buildFeatureRows(db, {
    from: coverage.minDate,
    to: coverage.maxDate,
    completeOnly: true,
    collect: false,
    onRow(row) {
      processedRows += 1;
      if (currentRace && row.raceId !== currentRace.id) flushRace();
      if (!currentRace || row.raceId !== currentRace.id) currentRace = { id: row.raceId, date: row.raceDate, rows: [] };
      const finishPosition = Number(row.target?.finishPosition);
      if (Number.isInteger(finishPosition) && finishPosition > 0) currentRace.rows.push({
        horseId: row.horseId,
        horseNumber: Number(row.features.horseNumber),
        finishPosition,
        features: row.features,
      });
    },
  });
  flushRace();
  flushMonth();

  index.months.sort((left, right) => right.month.localeCompare(left.month));
  for (const month of index.months) month.days.sort((left, right) => right.date.localeCompare(left.date));
  index.coverage.featureRows = processedRows;
  index.totals.netYen = index.totals.payoutYen - index.totals.investmentYen;
  index.totals.recoveryRate = index.totals.investmentYen ? index.totals.payoutYen / index.totals.investmentYen : 0;
  index.integrity = {
    allCompleteRacesArchived: index.coverage.archivedRaces === Number(coverage.races),
    investmentMatchesPolicy: index.totals.investmentYen === index.totals.points * UNIT_STAKE_YEN,
  };
  fs.writeFileSync(path.join(OUTPUT_DIR, "index.json"), `${JSON.stringify(index)}\n`, "utf8");
  if (!index.integrity.allCompleteRacesArchived || !index.integrity.investmentMatchesPolicy) {
    throw new Error(`Archive integrity failed: ${JSON.stringify(index.integrity)}`);
  }
  console.log(JSON.stringify({ output: OUTPUT_DIR, coverage: index.coverage, totals: index.totals, integrity: index.integrity }, null, 2));
} finally {
  db.exec("commit");
  db.close();
}

function buildRaceRecord(race, raceStatement, payoutStatement, oddsStatement, horseNames) {
  const meta = raceStatement.get(race.id);
  if (!meta) return null;
  const payoutMap = new Map(payoutStatement.all(race.id).map((row) => [`${row.bet_type}|${canonical(row.selection_key, row.bet_type)}`, Number(row.payout_yen)]));
  const oddsRows = oddsStatement.all(race.id);
  const inverseTotal = oddsRows.reduce((sum, row) => sum + 1 / Number(row.win_odds), 0);
  const marketProbabilities = new Map(oddsRows.map((row) => [Number(row.horse_number), inverseTotal > 0 ? (1 / Number(row.win_odds)) / inverseTotal : 0]));
  const maximumMarket = Math.max(...marketProbabilities.values(), 0);
  const marketReference = marketProbabilities.size === race.rows.length && maximumMarket > 0;
  const baseScores = new Map(race.rows.map((row) => {
    const base = specialistScores(row.features);
    const market = marketReference ? (marketProbabilities.get(row.horseNumber) ?? 0) / maximumMarket : null;
    return [row.horseNumber, blendSpecialistScores(base, market)];
  }));
  const ranked = {};
  for (const agentId of AGENT_IDS.slice(0, 4)) ranked[agentId] = rankRows(race.rows, (row) => baseScores.get(row.horseNumber)[agentId]);
  const topVotes = new Map();
  for (const agentId of AGENT_IDS.slice(0, 4)) ranked[agentId].slice(0, 3).forEach((row, index) => topVotes.set(row.horseNumber, (topVotes.get(row.horseNumber) ?? 0) + [3, 2, 1][index]));
  ranked.contrarian = rankRows(race.rows, (row) => {
    const scores = baseScores.get(row.horseNumber);
    const base = (scores.safety + scores.sniper + scores.pace + scores.analyst) / 4;
    return base * .72 + scores.sniper * .22 - (topVotes.get(row.horseNumber) ?? 0) * .015 + scores.market * .18;
  });

  const agents = AGENT_IDS.map((agentId) => {
    const marks = ranked[agentId].slice(0, 5).map((row, index) => ({
      horseNumber: row.horseNumber,
      horseName: horseNames.get(row.horseId) ?? row.horseId,
      // Ticket selection must be reproducible from the compact, rank-only archive.
      score: 5 - index,
    }));
    const tickets = forecastPolicy.buildForecastTickets({ marks }, UNIT_STAKE_YEN).map((ticket) => {
      const payoutYen = ticket.ticketKeys.reduce((sum, key) => sum + (payoutMap.get(`${ticket.betType}|${canonical(key, ticket.betType)}`) ?? 0), 0);
      return { betType: ticket.betType, selection: ticket.selection, points: ticket.points, investmentYen: ticket.totalInvestmentYen,
        payoutYen, netYen: payoutYen - ticket.totalInvestmentYen, hit: payoutYen > 0 };
    });
    const totals = tickets.reduce((sum, ticket) => addTotals(sum, { tickets: 1, points: ticket.points, hits: ticket.hit ? 1 : 0,
      investmentYen: ticket.investmentYen, payoutYen: ticket.payoutYen }), emptyTotals());
    finalizeTotals(totals);
    return { agentId, marks, tickets, totals };
  });
  const totals = agents.reduce((sum, agent) => addTotals(sum, agent.totals), emptyTotals());
  finalizeTotals(totals);
  const podium = race.rows.filter((row) => row.finishPosition <= 3).sort((left, right) => left.finishPosition - right.finishPosition)
    .map((row) => ({ finish: row.finishPosition, horseNumber: row.horseNumber, horseName: horseNames.get(row.horseId) ?? row.horseId }));
  return { raceId: race.id, date: meta.race_date, venueCode: meta.venue_code, venueName: VENUES[meta.venue_code] ?? meta.venue_code,
    meetingName: meta.meeting_name, raceNo: Number(meta.race_number), raceName: meta.race_name ?? meta.race_class ?? "レース",
    surface: meta.surface, distanceM: Number(meta.distance_m), going: meta.going, weather: meta.weather,
    marketReference, marketTimeBasis: marketReference ? oddsRows[0]?.time_basis : null, podium, agents, totals };
}

function blendSpecialistScores(base, market) {
  if (!Number.isFinite(market)) return { ...base, market: 0 };
  const underpriced = clamp(.5 + (base.sniper - market) * .5);
  return {
    safety: .62 * market + .38 * base.safety,
    sniper: .34 * market + .52 * base.sniper + .14 * underpriced,
    pace: .32 * market + .68 * base.pace,
    analyst: .68 * market + .32 * base.analyst,
    market,
  };
}

function specialistScores(f) {
  const confidence = clamp(Number(f.careerStarts) / 8);
  const safety = 0.27 * rate(f.recent5PlaceRate) + 0.20 * rate(f.priorPlaceRateSmoothed) + 0.12 * rate(f.recent5MeanFinishPercentile)
    + 0.10 * rate(f.jockeyPlaceRateSmoothed) + 0.09 * rate(f.trainerPlaceRateSmoothed) + 0.08 * rate(f.surfaceWinRateSmoothed)
    + 0.07 * rate(f.distanceBandWinRateSmoothed) + 0.04 * rate(f.venueWinRateSmoothed) + 0.03 * confidence;
  const popularityGap = clamp((Number(f.priorAveragePopularity) - 1) / 14);
  const improvement = clamp(rate(f.recent3MeanFinishPercentile) - rate(f.lastFinishPercentile) + 0.5);
  const sniper = 0.24 * rate(f.fieldRelativeSmoothedWinRate) + 0.18 * rate(f.recent3MeanFinishPercentile) + 0.15 * improvement
    + 0.13 * popularityGap + 0.11 * rate(f.recent3PlaceRate) + 0.08 * rate(f.recent3PositionGain)
    + 0.07 * rate(f.distanceBandWinRateSmoothed) + 0.04 * (1 - confidence);
  const pace = 0.24 * rate(f.frontRunnerRateSmoothed) + 0.19 * rate(f.recent3EarlyPositionPercentile) + 0.17 * rate(f.recent3PositionGain)
    + 0.12 * rate(f.pacePressureFrontInteraction) + 0.10 * rate(f.fieldRelativeFrontRunnerRate) + 0.08 * rate(f.directionWinRateSmoothed)
    + 0.06 * rate(f.goingWinRateSmoothed) + 0.04 * rate(f.recent3MeanFinishPercentile);
  const analyst = 0.19 * rate(f.surfaceWinRateSmoothed) + 0.17 * rate(f.venueWinRateSmoothed) + 0.17 * rate(f.distanceBandWinRateSmoothed)
    + 0.13 * rate(f.classWinRateSmoothed) + 0.11 * rate(f.jockeyWinRateSmoothed) + 0.09 * rate(f.trainerWinRateSmoothed)
    + 0.07 * rate(f.goingWinRateSmoothed) + 0.04 * rate(f.weatherWinRateSmoothed) + 0.03 * confidence;
  return { safety, sniper, pace, analyst };
}

function rankRows(rows, score) {
  return rows.map((row) => ({ ...row, score: Number(score(row)) || 0 }))
    .sort((left, right) => right.score - left.score || left.horseNumber - right.horseNumber);
}

function groupMonthDays(records) {
  const grouped = new Map();
  for (const record of records) {
    if (!grouped.has(record.date)) grouped.set(record.date, []);
    grouped.get(record.date).push(record);
  }
  return [...grouped.entries()].map(([date, races]) => {
    races.sort((left, right) => left.venueCode.localeCompare(right.venueCode) || left.raceNo - right.raceNo);
    const totals = races.reduce((sum, race) => addTotals(sum, race.totals), emptyTotals());
    finalizeTotals(totals);
    return { date, totals, races: races.map(compactRace) };
  });
}

function compactRace(race) {
  const names = new Map();
  for (const row of race.podium) names.set(row.horseNumber, row.horseName);
  for (const agent of race.agents) for (const mark of agent.marks) names.set(mark.horseNumber, mark.horseName);
  return [race.venueCode, race.raceNo, race.raceName, race.surface, race.distanceM,
    race.podium.map((row) => [row.horseNumber, row.horseName]), [...names.entries()],
    race.agents.map((agent) => [agent.marks.map((mark) => mark.horseNumber), agent.tickets.map((ticket) => ticket.payoutYen)]),
    [race.totals.points, race.totals.payoutYen]];
}

function emptyTotals() { return { tickets: 0, points: 0, hits: 0, investmentYen: 0, payoutYen: 0, netYen: 0, recoveryRate: 0 }; }
function addTotals(target, source) {
  target.tickets += Number(source.tickets || 0); target.points += Number(source.points || 0); target.hits += Number(source.hits || 0);
  target.investmentYen += Number(source.investmentYen || 0); target.payoutYen += Number(source.payoutYen || 0);
  return target;
}
function finalizeTotals(totals) { totals.netYen = totals.payoutYen - totals.investmentYen; totals.recoveryRate = totals.investmentYen ? totals.payoutYen / totals.investmentYen : 0; }
function rate(value) { return Number.isFinite(Number(value)) ? clamp(Number(value)) : 0.5; }
function clamp(value) { return Math.max(0, Math.min(1, Number(value) || 0)); }
function round(value) { return Math.round(Number(value) * 10000) / 10000; }
function canonical(value, betType) {
  const numbers = String(value).match(/\d+/g)?.map(Number) ?? [];
  if (["馬連", "3連複"].includes(betType)) numbers.sort((left, right) => left - right);
  return numbers.join("-");
}
function prepareOutputDirectory() {
  const resolved = path.resolve(OUTPUT_DIR);
  if (!resolved.startsWith(path.resolve(ROOT, "data") + path.sep)) throw new Error(`Unsafe output directory: ${resolved}`);
  fs.mkdirSync(resolved, { recursive: true });
  for (const file of fs.readdirSync(resolved)) if (file.endsWith(".json")) fs.rmSync(path.join(resolved, file));
}
