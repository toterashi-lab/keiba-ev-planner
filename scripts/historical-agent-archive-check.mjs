import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRECTORY = path.join(ROOT, "data", "historical-agent-archive");
const index = JSON.parse(fs.readFileSync(path.join(DIRECTORY, "index.json"), "utf8"));
const require = createRequire(import.meta.url);
const forecastPolicy = require(path.join(ROOT, "forecast-policy.js"));
const database = new DatabaseSync(path.join(resolvePrivateDataDir(ROOT), "keiba.sqlite"), { readOnly: true });
const raceIdStatement = database.prepare("select race_id from complete_races where race_date=? and venue_code=? and cast(race_number as integer)=?");
const payoutStatement = database.prepare("select bet_type,selection_key,payout_yen from complete_payouts where race_id=? and bet_type in ('単勝','馬連','3連複')");

assert.equal(index.integrity.allCompleteRacesArchived, true);
assert.equal(index.integrity.investmentMatchesPolicy, true);
assert.equal(index.version, "historical-agent-replay-v2");
assert.equal(index.months.length, inclusiveMonthCount(index.coverage.from, index.coverage.to));
assert.ok(index.coverage.marketReferenceRaces > 0);

let races = 0;
let days = 0;
let points = 0;
let investmentYen = 0;
let payoutYen = 0;
let verifiedTickets = 0;
try {
for (const monthMeta of index.months) {
  const month = JSON.parse(fs.readFileSync(path.join(DIRECTORY, monthMeta.file), "utf8"));
  assert.equal(month.month, monthMeta.month);
  assert.equal(month.days.length, monthMeta.days.length);
  for (const day of month.days) {
    days += 1;
    for (const race of day.races) {
      races += 1;
      assert.equal(race.length, 9);
      const raceId = raceIdStatement.get(day.date, race[0], Number(race[1]))?.race_id;
      assert.ok(raceId, `race not found: ${day.date}/${race[0]}/${race[1]}`);
      const payoutMap = new Map(payoutStatement.all(raceId).map((row) => [`${row.bet_type}|${canonical(row.selection_key, row.bet_type)}`, Number(row.payout_yen)]));
      const agents = race[7];
      assert.equal(agents.length, 5);
      let racePoints = 0;
      let racePayout = 0;
      for (const [markNumbers, ticketPayouts] of agents) {
        assert.ok(markNumbers.length >= 2 && markNumbers.length <= 5);
        const tickets = forecastPolicy.buildForecastTickets({ marks: markNumbers.map((horseNumber, rank) => ({ horseNumber, score: 5 - rank })) }, 100);
        assert.equal(tickets.length, 3);
        assert.equal(ticketPayouts.length, 3);
        tickets.forEach((ticket, ticketIndex) => {
          const expectedPayout = ticket.ticketKeys.reduce((sum, key) => sum + (payoutMap.get(`${ticket.betType}|${canonical(key, ticket.betType)}`) ?? 0), 0);
          assert.equal(ticketPayouts[ticketIndex], expectedPayout, `${raceId}/${ticket.betType}/${ticket.selection}`);
          verifiedTickets += 1;
        });
        racePoints += tickets.reduce((sum, ticket) => sum + ticket.points, 0);
        racePayout += ticketPayouts.reduce((sum, value) => sum + Number(value || 0), 0);
      }
      assert.equal(race[8][0], racePoints);
      assert.equal(race[8][1], racePayout);
      points += racePoints;
      investmentYen += racePoints * 100;
      payoutYen += racePayout;
    }
  }
}
} finally {
  database.close();
}

assert.equal(races, index.coverage.databaseRaces);
assert.equal(races, index.coverage.archivedRaces);
assert.equal(days, index.coverage.archivedDays);
assert.equal(points, index.totals.points);
assert.equal(investmentYen, index.totals.investmentYen);
assert.equal(payoutYen, index.totals.payoutYen);
console.log(`OK historical archive: ${races.toLocaleString("ja-JP")} races / ${days.toLocaleString("ja-JP")} days / ${verifiedTickets.toLocaleString("ja-JP")} tickets / ${points.toLocaleString("ja-JP")} points`);

function canonical(value, betType) {
  const numbers = String(value).match(/\d+/g)?.map(Number) ?? [];
  if (["馬連", "3連複"].includes(betType)) numbers.sort((left, right) => left - right);
  return numbers.join("-");
}

function inclusiveMonthCount(from, to) {
  const [fromYear, fromMonth] = from.slice(0, 7).split("-").map(Number);
  const [toYear, toMonth] = to.slice(0, 7).split("-").map(Number);
  return (toYear - fromYear) * 12 + toMonth - fromMonth + 1;
}
