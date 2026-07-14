import fs from "node:fs";

const meetings = JSON.parse(fs.readFileSync("data/meet-2026-07-11-2026-07-12.json", "utf8")).meetings;
const model = JSON.parse(fs.readFileSync("data/model-outputs-2026-07-11-2026-07-12.json", "utf8"));
const betTypes = ["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"];
const expectedRaces = meetings.flatMap((meeting) => meeting.tracks.flatMap((track) => track.races.map((race) => ({
  key: `${meeting.date}|${track.meetingName}|${race.no}`,
  date: meeting.date,
  meetingName: track.meetingName,
  raceNo: race.no,
}))));

const failures = [];
if (model.status !== "ready") failures.push("model status is not ready");
if (model.unitStakeYen !== 100) failures.push("unit stake is not 100 yen");
if (expectedRaces.length !== 72) failures.push(`reference races ${expectedRaces.length}/72`);
if (Object.values(model.coverageCounts ?? {}).some((count) => count !== 72)) failures.push("odds coverage is incomplete");
if (model.evaluatedTotal !== 195898) failures.push(`evaluated total changed: ${model.evaluatedTotal}`);

for (const race of expectedRaces) {
  const rows = model.candidates.filter((candidate) => candidate.date === race.date
    && candidate.meetingName === race.meetingName && candidate.raceNo === race.raceNo);
  if (!rows.length) failures.push(`${race.key}: no candidates`);
  for (const betType of betTypes) if (!rows.some((row) => row.betType === betType)) failures.push(`${race.key}: ${betType} missing`);
  if (rows.some((row) => row.status !== "ready" || row.points < 1 || !Number.isFinite(row.conservativeExpectedReturn))) {
    failures.push(`${race.key}: invalid candidate`);
  }
}

const source = fs.readFileSync("scripts/generate-market-ev.mjs", "utf8");
for (const forbidden of ["race_results", "payouts", "finish_position", "payout_yen"]) {
  if (source.includes(forbidden)) failures.push(`result leakage token: ${forbidden}`);
}

if (failures.length) {
  for (const failure of failures) console.error(`NG ${failure}`);
  process.exit(1);
}
console.log(`OK 72レース・7券種・${model.evaluatedTotal.toLocaleString("ja-JP")}通り・1点100円`);
console.log(`OK 公開候補 ${model.candidates.length.toLocaleString("ja-JP")}件・結果/払戻リークなし`);
