import fs from "node:fs";

const source = fs.readFileSync("scripts/model-training-preflight-freshness.mjs", "utf8");
for (const token of ["maxAgeHours = 24", "maxRaceLag = 3000", "complete_races", "process.exitCode = 10"]) {
  if (!source.includes(token)) throw new Error(`preflight freshness policy missing: ${token}`);
}
console.log("OK 実DBプリフライトは24時間・増分3,000R以内だけ再利用");
