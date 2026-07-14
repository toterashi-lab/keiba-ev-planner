import fs from "node:fs";
import { DatabaseSync } from "node:sqlite";

const meetings = JSON.parse(fs.readFileSync("data/meet-2026-07-11-2026-07-12.json", "utf8")).meetings;
const results = JSON.parse(fs.readFileSync("data/results-2026-07-11-2026-07-12.json", "utf8")).results;
const db = new DatabaseSync("data/jra-free-private/keiba.sqlite", { readOnly: true });

try {
  const batch = db.prepare("select id from odds_ingestion_batches where status='complete' and source!='JRA official exotic odds' order by id desc limit 1").get();
  if (!batch) throw new Error("検査可能なオッズバッチがありません");
  const oddsRows = db.prepare(`select r.race_date,r.venue_code,r.race_number,o.selection_key,o.odds_low
    from odds_snapshots o join complete_races r on r.race_id=o.race_id
    where o.batch_id=? and o.bet_type='win'
    order by r.race_date,r.venue_code,r.race_number,o.odds_low,o.selection_key`).all(batch.id);
  const oddsByRace = new Map();
  for (const row of oddsRows) {
    const venueCode = ({ "02": "HAKODATE", "03": "FUKUSHIMA", "10": "KOKURA" })[row.venue_code] ?? row.venue_code;
    const key = `${row.race_date}|${venueCode}|${row.race_number}`;
    if (!oddsByRace.has(key)) oddsByRace.set(key, []);
    oddsByRace.get(key).push({ horseNumber: Number(row.selection_key), win: Number(row.odds_low) });
  }

  const definitions = [
    { id: "favorite", count: 1, expected: { trials: 72, hits: 24, investment: 7200, payout: 5750 } },
    { id: "top3", count: 3, expected: { trials: 72, hits: 52, investment: 21600, payout: 18810 } },
    { id: "all", count: Infinity, expected: { trials: 72, hits: 72, investment: 94400, payout: 40270 } },
  ];
  const reports = Object.fromEntries(definitions.map((definition) => [definition.id, { trials: 0, hits: 0, investment: 0, payout: 0 }]));

  for (const meeting of meetings) {
    for (const track of meeting.tracks) {
      for (const race of track.races) {
        const result = results.find((item) => item.meetingName === track.meetingName && item.raceNo === race.no);
        const prices = (oddsByRace.get(`${meeting.date}|${track.venueCode}|${race.no}`) ?? [])
          .filter((price) => price.win > 1).sort((a, b) => a.win - b.win || a.horseNumber - b.horseNumber);
        const winners = new Set((result?.runners ?? []).filter((runner) => runner.finishPosition === 1).map((runner) => runner.horseNumber));
        if (!result || !prices.length || !winners.size) continue;
        const winRefunds = result.refunds.filter((refund) => refund.betType === "単勝").map((refund) => ({
          horseNumber: Number(String(refund.selection).match(/\d+/)?.[0]), payout: Number(refund.payoutYen) || 0,
        }));
        for (const definition of definitions) {
          const selected = prices.slice(0, definition.count);
          const selectedNumbers = new Set(selected.map((price) => price.horseNumber));
          const payout = winRefunds.filter((refund) => selectedNumbers.has(refund.horseNumber)).reduce((sum, refund) => sum + refund.payout, 0);
          const report = reports[definition.id];
          report.trials += 1;
          report.hits += payout > 0 ? 1 : 0;
          report.investment += selected.length * 100;
          report.payout += payout;
        }
      }
    }
  }

  let failed = 0;
  for (const definition of definitions) {
    const actual = reports[definition.id];
    const passed = Object.entries(definition.expected).every(([key, value]) => actual[key] === value);
    if (!passed) failed += 1;
    console.log(`${passed ? "OK" : "NG"} ${definition.id}: ${JSON.stringify(actual)}`);
  }
  if (failed) process.exit(1);
} finally {
  db.close();
}
