import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const context = { window: {} };
vm.createContext(context);
for (const file of ["league-system.js", "data/live-replay-audit.js"]) vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
const league = context.window.UMAYOMI_LEAGUE;
const audit = context.window.KEIBA_LIVE_REPLAY_AUDIT;
const season = league.derive(audit);
const secondPass = league.derive(audit);

assert.equal(Object.keys(league.PERSONAS).length, 5, "5人の予想家が必要");
assert.equal(season.standings.length, 5, "順位表は5人分");
assert.deepEqual(JSON.parse(JSON.stringify(season)), JSON.parse(JSON.stringify(secondPass)), "リーグ計算は決定的であること");
assert.equal(season.totalRaces, audit.records.length, "全照合レースを集計に含める");
assert.ok(season.weeklyHistory.length >= 1, "週履歴が1件以上あること");
assert.equal(season.weeklyHistory.reduce((sum, week) => sum + week.raceCount, 0), audit.records.length, "全照合レースを週履歴へ重複なく格納すること");
assert.equal(season.latestWeek.key, season.weeklyHistory.at(-1).key, "最新週が最後の週履歴と一致すること");
assert.equal(league.weekStart("2026-07-19"), "2026-07-13", "日曜は同じ週の月曜へ正規化すること");
assert.equal(league.weekStart("2026-07-20"), "2026-07-20", "月曜は新しい週になること");
assert.equal(season.rivalry.length, 2, "首位対決は2人であること");
assert.ok(season.winningStreak?.agentId, "好調AIを判定すること");
assert.ok(season.losingStreak?.agentId, "不調AIを判定すること");
for (const [index, row] of season.standings.entries()) {
  assert.equal(row.rank, index + 1, "順位が連番であること");
  assert.equal("virtualFundsYen" in row, false, "開始資金や仮想残高を持たないこと");
  assert.ok(league.STATES.includes(row.state), "状態画像が定義済みであること");
}
const drama = league.raceDrama(audit.records.at(-1));
for (const role of ["mvp", "culprit", "awakened", "jinx"]) assert.ok(league.PERSONAS[drama[role].agentId], `${role}が5人のいずれかであること`);
assert.match(league.raceSlug("2026-07-19", "HAKODATE", 8), /^2026-07-19-HAKODATE-08$/);
console.log(`league-system-check: PASS (${season.totalRaces} races, 5 agents)`);
