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
assert.equal(season.totalRaces, audit.records.length, "全照合レースを節数に含める");
for (const [index, row] of season.standings.entries()) {
  assert.equal(row.rank, index + 1, "順位が連番であること");
  assert.equal(row.virtualFundsYen, league.STARTING_FUNDS_YEN + row.netYen, "仮想資金は元金と収支の合計");
  assert.ok(league.STATES.includes(row.state), "状態画像が定義済みであること");
}
const drama = league.raceDrama(audit.records.at(-1));
for (const role of ["mvp", "culprit", "awakened", "jinx"]) assert.ok(league.PERSONAS[drama[role].agentId], `${role}が5人のいずれかであること`);
assert.match(league.raceSlug("2026-07-19", "HAKODATE", 8), /^2026-07-19-HAKODATE-08$/);
console.log(`league-system-check: PASS (${season.totalRaces} races, 5 agents)`);
