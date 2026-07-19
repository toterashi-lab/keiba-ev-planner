import fs from "node:fs";

const source = fs.readFileSync("scripts/jra-historical-win-place-odds.mjs", "utf8");
for (const token of [
  "complete_races", "historical_odds_jobs", "historical_win_place_odds",
  "Runner set mismatch", "Price coverage mismatch", "jra-historical-win-place-v1",
  "auditedWinOnlyRaces", "completeWinPlaceRaces", "unauditedMissingPlace",
  "let acquired = false", "if (acquired) fs.rmSync(lockPath", "isProcessAlive(owner.pid)",
]) {
  if (!source.includes(token)) throw new Error(`historical odds pipeline missing: ${token}`);
}
console.log("OK JRA過去単勝・複勝オッズを全出走馬単位で欠損停止付き取得");
