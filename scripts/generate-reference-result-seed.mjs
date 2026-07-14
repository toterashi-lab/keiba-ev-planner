import fs from "node:fs";
import crypto from "node:crypto";

const args = globalThis.process?.argv ?? [];
const resultPath = args[2] ?? "data/results-2026-07-11-2026-07-12.json";
const outPath = args[3] ?? "seeds/2026-07-11-2026-07-12-results.sql";
const data = JSON.parse(fs.readFileSync(resultPath, "utf8"));

const rows = data.results.map((result) => ({
  raceId: raceId(result),
  winner: result.winner || null,
  course: result.course || null,
  url: result.url,
  refundCount: result.refunds.length,
  payloadHash: hash(result),
  refunds: result.refunds,
  runners: result.runners,
}));
const runners = rows.flatMap((row) => row.runners);
const horses = uniqueBy(runners, (runner) => runner.horseId);
const jockeys = uniqueBy(runners, (runner) => runner.jockeyId);
const trainers = uniqueBy(runners, (runner) => runner.trainerId);

const sql = [];
sql.push("-- Generated from JRA official result pages.");
sql.push("-- Initial append-only validation batch from the JRA official public result pages.");
sql.push("");
sql.push("insert into data_sources (name, license_scope)");
sql.push("values ('JRA official race result pages', 'personal local validation; store source links and derived database rows')");
sql.push("on conflict (name) do nothing;");
sql.push("");
sql.push("insert into ingestion_batches (batch_id, source_id, period_start, period_end, status, expected_race_count, imported_race_count, imported_runner_count, imported_result_count, imported_payout_count, payload_hash, started_at, completed_at)");
sql.push(`select '2026-W28-JRA-WEB', id, '2026-07-11', '2026-07-12', 'complete', 72, 72, ${runners.length}, ${rows.length}, ${data.refundLineCount}, '${hash(data.results)}', '${data.fetchedAt}', '${data.fetchedAt}'`);
sql.push("from data_sources where name = 'JRA official race result pages'");
sql.push("on conflict (batch_id) do update set status = excluded.status, imported_runner_count = excluded.imported_runner_count, imported_result_count = excluded.imported_result_count, imported_payout_count = excluded.imported_payout_count, payload_hash = excluded.payload_hash, updated_at = now();");
sql.push("");

for (const runner of horses) {
  sql.push(`insert into horses (horse_id, name, sex) values (${q(runner.horseId)}, ${q(runner.horseName)}, ${q(parseSex(runner.sexAge))}) on conflict (horse_id) do update set name = excluded.name, sex = excluded.sex, updated_at = now();`);
}
for (const runner of jockeys) {
  sql.push(`insert into jockeys (jockey_id, name) values (${q(runner.jockeyId)}, ${q(runner.jockeyName)}) on conflict (jockey_id) do update set name = excluded.name, updated_at = now();`);
}
for (const runner of trainers) {
  sql.push(`insert into trainers (trainer_id, name) values (${q(runner.trainerId)}, ${q(runner.trainerName)}) on conflict (trainer_id) do update set name = excluded.name, updated_at = now();`);
}
sql.push("");

for (const row of rows) {
  sql.push("insert into race_result_summaries (race_id, winner_name, official_course, source_url, refund_line_count, observed_at, payload_hash)");
  sql.push(`values (${q(row.raceId)}, ${q(row.winner)}, ${q(row.course)}, ${q(row.url)}, ${row.refundCount}, ${q(data.fetchedAt)}, ${q(row.payloadHash)})`);
  sql.push("on conflict (race_id) do update set winner_name = excluded.winner_name, official_course = excluded.official_course, source_url = excluded.source_url, refund_line_count = excluded.refund_line_count, observed_at = excluded.observed_at, payload_hash = excluded.payload_hash, ingested_at = now();");
  for (const runner of row.runners) {
    sql.push("insert into race_entries (race_id, horse_id, gate_number, horse_number, jockey_id, trainer_id, carried_weight, body_weight, body_weight_delta, scratch_status)");
    sql.push(`values (${q(row.raceId)}, ${q(runner.horseId)}, ${runner.gateNumber ?? "null"}, ${runner.horseNumber}, ${q(runner.jockeyId)}, ${q(runner.trainerId)}, ${runner.carriedWeight ?? "null"}, ${runner.bodyWeight ?? "null"}, ${runner.bodyWeightDelta ?? "null"}, ${q(runnerStatus(runner))})`);
    sql.push("on conflict (race_id, horse_id) do update set gate_number = excluded.gate_number, horse_number = excluded.horse_number, jockey_id = excluded.jockey_id, trainer_id = excluded.trainer_id, carried_weight = excluded.carried_weight, body_weight = excluded.body_weight, body_weight_delta = excluded.body_weight_delta, scratch_status = excluded.scratch_status, updated_at = now();");
    sql.push("insert into race_results (race_id, horse_id, finish_position, official_time_ms, margin_code, corner_positions, final_sectional_ms, popularity, confirmed_at)");
    sql.push(`values (${q(row.raceId)}, ${q(runner.horseId)}, ${runner.finishPosition ?? "null"}, ${timeMs(runner.officialTime) ?? "null"}, ${q(runner.finishPosition === null ? runner.finishText : runner.margin)}, ${pgIntArray(runner.cornerPositions)}, ${runner.finalSectional === null ? "null" : Math.round(runner.finalSectional * 1000)}, ${runner.popularity ?? "null"}, ${q(data.fetchedAt)})`);
    sql.push("on conflict (race_id, horse_id) do update set finish_position = excluded.finish_position, official_time_ms = excluded.official_time_ms, margin_code = excluded.margin_code, corner_positions = excluded.corner_positions, final_sectional_ms = excluded.final_sectional_ms, popularity = excluded.popularity, confirmed_at = excluded.confirmed_at;");
  }
  for (const refund of row.refunds) {
    sql.push("insert into payouts (race_id, bet_type, selection_key, payout_yen, popularity, confirmed_at)");
    sql.push(`values (${q(row.raceId)}, ${q(refund.betType)}, ${q(refund.selection)}, ${refund.payoutYen}, ${refund.popularity ?? "null"}, ${q(data.fetchedAt)})`);
    sql.push("on conflict (race_id, bet_type, selection_key) do update set payout_yen = excluded.payout_yen, popularity = excluded.popularity, confirmed_at = excluded.confirmed_at;");
  }
}

sql.push("");
for (const [name, expected, actual] of [["race_count", 72, rows.length], ["winner_count", 72, rows.filter((row) => row.winner).length], ["runner_count", data.runnerCount, runners.length], ["payout_count", data.refundLineCount, rows.reduce((sum, row) => sum + row.refundCount, 0)]]) {
  const status = expected === actual ? "pass" : "fail";
  sql.push("insert into data_quality_checks (batch_id, check_name, status, expected_count, actual_count)");
  sql.push(`values ('2026-W28-JRA-WEB', ${q(name)}, ${q(status)}, ${expected}, ${actual})`);
  sql.push("on conflict (batch_id, check_name) do update set status = excluded.status, expected_count = excluded.expected_count, actual_count = excluded.actual_count, checked_at = now();");
}

fs.writeFileSync(outPath, `${sql.join("\n")}\n`, "utf8");
console.log(`Wrote ${rows.length} result summaries and ${data.refundLineCount} payouts to ${outPath}`);

function raceId(result) {
  const date = result.date.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  const venue = result.meetingName.includes("福島") ? "FUKUSHIMA" : result.meetingName.includes("小倉") ? "KOKURA" : result.meetingName.includes("函館") ? "HAKODATE" : "UNKNOWN";
  if (!date || venue === "UNKNOWN") throw new Error(`Cannot derive race id: ${result.meetingName} ${result.date}`);
  return `${date[1]}${date[2].padStart(2, "0")}${date[3].padStart(2, "0")}-${venue}-${String(result.raceNo).padStart(2, "0")}`;
}

function hash(value) {
  return crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

function uniqueBy(values, key) {
  const map = new Map();
  for (const value of values) if (key(value)) map.set(key(value), value);
  return [...map.values()];
}

function parseSex(sexAge) {
  if (sexAge.startsWith("牡")) return "male";
  if (sexAge.startsWith("牝")) return "female";
  if (sexAge.startsWith("せん")) return "gelding";
  return null;
}

function runnerStatus(runner) {
  if (runner.finishText === "取消") return "scratched";
  if (runner.finishText === "除外") return "excluded";
  if (runner.finishText === "中止") return "did_not_finish";
  return "active";
}

function timeMs(value) {
  if (!value) return null;
  const match = value.match(/(?:(\d+):)?(\d+)\.(\d)/);
  if (!match) return null;
  return ((Number(match[1] ?? 0) * 60 + Number(match[2])) * 1000) + Number(match[3]) * 100;
}

function pgIntArray(values) {
  return values.length ? `array[${values.join(",")}]::integer[]` : "'{}'::integer[]";
}

function q(value) {
  if (value === null || value === undefined || value === "") return "null";
  return `'${String(value).replaceAll("'", "''")}'`;
}
