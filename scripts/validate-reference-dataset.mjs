import fs from "node:fs";
import crypto from "node:crypto";

const args = globalThis.process?.argv ?? [];
const programmePath = args[2] ?? "data/meet-2026-07-11-2026-07-12.json";
const resultsPath = args[3] ?? "data/results-2026-07-11-2026-07-12.json";
const outPath = args[4] ?? "data/quality-report-2026-07-11-2026-07-12.json";

const programmeRaw = fs.readFileSync(programmePath, "utf8");
const resultsRaw = fs.readFileSync(resultsPath, "utf8");
const programme = JSON.parse(programmeRaw);
const results = JSON.parse(resultsRaw);
const races = programme.meetings.flatMap((meeting) => meeting.tracks.flatMap((track) => track.races.map((race) => ({ meeting, track, race }))));
const resultRows = results.results;
const runners = resultRows.flatMap((race) => race.runners ?? []);
const checks = [];
const programmeKeys = new Set(races.map(programmeKey));
const resultKeys = new Set(resultRows.map(resultKey));

check("開催日数", programme.meetings.length === 2, 2, programme.meetings.length);
check("開催場日数", programme.meetings.reduce((sum, meeting) => sum + meeting.tracks.length, 0) === 6, 6, programme.meetings.reduce((sum, meeting) => sum + meeting.tracks.length, 0));
check("番組レース数", races.length === 72, 72, races.length);
check("結果レース数", resultRows.length === 72, 72, resultRows.length);
check("結果レース一意性", new Set(resultRows.map(resultKey)).size === 72, 72, new Set(resultRows.map(resultKey)).size);
check("番組と結果のレース一致", sameSet(programmeKeys, resultKeys), programmeKeys.size, [...programmeKeys].filter((key) => resultKeys.has(key)).length);
check("全場1Rから12R", completeRaceNumbers(resultRows), 72, countValidRaceNumbers(resultRows));
check("勝馬取得", resultRows.every((race) => race.winner), 72, resultRows.filter((race) => race.winner).length);
check("出走馬取得", resultRows.every((race) => race.runners?.length > 0), 72, resultRows.filter((race) => race.runners?.length > 0).length);
check("勝馬と1着一致", resultRows.every((race) => race.runners.some((runner) => runner.finishPosition === 1 && runner.horseName === race.winner)), 72, resultRows.filter((race) => race.runners.some((runner) => runner.finishPosition === 1 && runner.horseName === race.winner)).length);
check("馬ID取得", runners.every((runner) => runner.horseId), runners.length, runners.filter((runner) => runner.horseId).length);
check("騎手取得", runners.every((runner) => runner.jockeyId && runner.jockeyName), runners.length, runners.filter((runner) => runner.jockeyId && runner.jockeyName).length);
check("調教師取得", runners.every((runner) => runner.trainerId && runner.trainerName), runners.length, runners.filter((runner) => runner.trainerId && runner.trainerName).length);
check("レース内馬番一意性", resultRows.every((race) => new Set(race.runners.map((runner) => runner.horseNumber)).size === race.runners.length), 72, resultRows.filter((race) => new Set(race.runners.map((runner) => runner.horseNumber)).size === race.runners.length).length);
check("払戻取得", resultRows.every((race) => race.refunds.length > 0), 72, resultRows.filter((race) => race.refunds.length > 0).length);
check("JRA公式URL", resultRows.every((race) => race.url.startsWith("https://www.jra.go.jp/JRADB/")), 72, resultRows.filter((race) => race.url.startsWith("https://www.jra.go.jp/JRADB/")).length);
check("JRA公式URL一意性", new Set(resultRows.map((race) => race.url)).size === resultRows.length, resultRows.length, new Set(resultRows.map((race) => race.url)).size);
check("集計レース数一致", results.raceCount === resultRows.length, resultRows.length, results.raceCount);
check("集計出走馬数一致", results.runnerCount === runners.length, runners.length, results.runnerCount);
check("集計払戻数一致", results.refundLineCount === resultRows.reduce((sum, race) => sum + race.refunds.length, 0), resultRows.reduce((sum, race) => sum + race.refunds.length, 0), results.refundLineCount);

const failures = checks.filter((item) => item.status === "fail");
const report = {
  generatedAt: new Date().toISOString(),
  status: failures.length ? "fail" : "pass",
  scope: "result_validation_batch",
  inputHash: sha256(programmeRaw + resultsRaw),
  coverage: {
    races: resultRows.length,
    runners: runners.length,
    refunds: resultRows.reduce((sum, race) => sum + race.refunds.length, 0),
    nonFinishStatuses: runners.filter((runner) => runner.finishPosition === null).length,
  },
  gates: {
    resultValidationReady: failures.length === 0,
    predictionReady: false,
    predictionBlockers: ["30年過去走の蓄積未完了", "締切前オッズ未取込", "時系列モデル未学習"],
  },
  checks,
};

fs.writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
if (failures.length) throw new Error(`Dataset validation failed: ${failures.map((item) => item.name).join(", ")}`);
console.log(`Validated ${report.coverage.races} races, ${report.coverage.runners} runners, and ${report.coverage.refunds} refunds`);

function check(name, pass, expected, actual) {
  checks.push({ name, status: pass ? "pass" : "fail", expected, actual });
}

function resultKey(race) {
  return `${normalizeDate(race.date)}|${race.meetingName}|${race.raceNo}`;
}

function programmeKey({ meeting, track, race }) {
  return `${meeting.date}|${track.meetingName}|${race.no}`;
}

function normalizeDate(value) {
  const match = String(value).match(/^(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (!match) return String(value);
  return `${match[1]}-${match[2].padStart(2, "0")}-${match[3].padStart(2, "0")}`;
}

function sameSet(left, right) {
  return left.size === right.size && [...left].every((value) => right.has(value));
}

function completeRaceNumbers(rows) {
  return [...groupBy(rows, (row) => `${row.date}|${row.meetingName}`).values()].every((group) => group.length === 12 && group.every((row, index) => row.raceNo === index + 1));
}

function countValidRaceNumbers(rows) {
  return [...groupBy(rows, (row) => `${row.date}|${row.meetingName}`).values()].reduce((sum, group) => sum + group.filter((row, index) => row.raceNo === index + 1).length, 0);
}

function groupBy(values, key) {
  const groups = new Map();
  for (const value of values) {
    const group = groups.get(key(value)) ?? [];
    group.push(value);
    group.sort((a, b) => a.raceNo - b.raceNo);
    groups.set(key(value), group);
  }
  return groups;
}

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}
