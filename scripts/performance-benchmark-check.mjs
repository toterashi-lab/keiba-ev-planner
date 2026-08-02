import fs from "node:fs";

const meetings = JSON.parse(fs.readFileSync("data/meet-2026-07-11-2026-07-12.json", "utf8")).meetings;
const results = JSON.parse(fs.readFileSync("data/results-2026-07-11-2026-07-12.json", "utf8")).results;
const closingOdds = JSON.parse(fs.readFileSync("data/closing-odds-2026-07-11-2026-07-12.json", "utf8"));

{
  const oddsByRace = new Map();
  for (const race of closingOdds.races || []) {
    oddsByRace.set(`${race.date}|${race.venueCode}|${race.raceNo}`, (race.prices || [])
      .filter((price) => Number.isFinite(price.horseNumber) && Number(price.win) > 1)
      .map((price) => ({ horseNumber: Number(price.horseNumber), win: Number(price.win) })));
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
}
