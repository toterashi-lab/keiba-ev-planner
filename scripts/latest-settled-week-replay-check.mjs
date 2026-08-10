import assert from "node:assert/strict";
import fs from "node:fs";
import { latestWeekRange } from "./materialize-latest-settled-week.mjs";

assert.deepEqual(latestWeekRange("2026-08-09"), { from: "2026-08-03", to: "2026-08-09" });
assert.deepEqual(latestWeekRange("2026-08-10"), { from: "2026-08-10", to: "2026-08-16" });
assert.deepEqual(latestWeekRange("2026-01-01"), { from: "2025-12-29", to: "2026-01-04" });

const materializer = fs.readFileSync("scripts/materialize-latest-settled-week.mjs", "utf8");
for (const token of ["JRA official results replay", "as_of_replay", "complete_races", "complete_race_entries", "begin immediate"]) {
  assert.ok(materializer.includes(token), `最新確定週フォールバックに必要です: ${token}`);
}
const featurePipeline = fs.readFileSync("scripts/model-feature-pipeline.mjs", "utf8");
assert.ok(featurePipeline.includes('row.snapshot_context === "as_of_replay"'), "後日再現を発走前観測と区別すること");
assert.ok(featurePipeline.includes('replay ? "replay" : "live"'), "特徴量のデータ文脈を分けること");
assert.ok(featurePipeline.includes('target: dataContext === "historical"'), "目的変数は履歴学習行だけに付与すること");

console.log("latest-settled-week-replay-check: PASS");
