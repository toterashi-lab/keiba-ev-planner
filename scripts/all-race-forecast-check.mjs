import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
global.window = {};
require("../data/live-racecards.js");
require("../data/live-model-outputs.js");
const policy = require("../forecast-policy.js");

const meetings = window.KEIBA_LIVE_RACECARDS?.meetings ?? [];
const predictions = window.KEIBA_LIVE_MODEL_OUTPUTS?.predictions ?? [];
const races = meetings.flatMap((meeting) => meeting.tracks.flatMap((track) => track.races.map((race) => ({
  date: meeting.date, meetingName: track.meetingName, race,
}))));
const predictionMap = new Map(predictions.map((row) => [`${row.date}|${row.meetingName}|${row.raceNo}`, row]));

assert.ok(races.length > 0, "開催レースがありません");
for (const row of races) {
  const prediction = predictionMap.get(`${row.date}|${row.meetingName}|${row.race.no}`);
  assert.ok(prediction, `${row.date} ${row.meetingName} ${row.race.no}R の予想がありません`);
  const tickets = policy.buildForecastTickets(prediction, 100);
  assert.deepEqual(tickets.map((ticket) => ticket.betType), policy.BET_TYPES);
  assert.ok(tickets.every((ticket) => ticket.points >= 1 && ticket.points <= 5 && ticket.totalInvestmentYen === ticket.points * 100));
  const volatility = policy.volatilityProfile({ race: row.race, prediction, consensus: { split: false }, candidates: [] });
  assert.ok(volatility.score >= 0 && volatility.score <= 100 && volatility.level >= 1 && volatility.level <= 5);
  assert.ok(policy.primaryForecastTicket(tickets, volatility));
}

console.log(JSON.stringify({ status: "pass", races: races.length, predictions: predictions.length,
  ticketTypesPerRace: policy.BET_TYPES.length, unitStakeYen: 100, volatilityScale: "0-100" }, null, 2));
