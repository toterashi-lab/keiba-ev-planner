import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export const MODEL_IMPLEMENTATION_FILES = Object.freeze([
  "scripts/train-expectancy-model.mjs",
  "scripts/model-feature-pipeline.mjs",
  "model/feature-registry.mjs",
  "model/finish-order-probabilities.mjs",
  "model/validation-policy.mjs",
]);

export function captureModelDataSnapshot(database) {
  const coverage = database.prepare(`select min(race_date) minDate,max(race_date) maxDate,count(*) races,
    (select count(*) from complete_race_entries) runners,
    (select count(*) from complete_race_results) results,
    (select count(*) from complete_payouts) payouts,
    (select count(distinct source_page_id) from complete_races) sourcePages
    from complete_races`).get();
  const sourcePageSequence = database.prepare(`select group_concat(source_page_id, ',') value from
    (select source_page_id from complete_races order by race_id)`).get().value ?? "";
  const core = { version: "model-data-snapshot-v1", ...coverage, sourcePageSequence };
  return {
    version: core.version,
    minDate: core.minDate,
    maxDate: core.maxDate,
    races: core.races,
    runners: core.runners,
    results: core.results,
    payouts: core.payouts,
    sourcePages: core.sourcePages,
    fingerprint: crypto.createHash("sha256").update(JSON.stringify(core)).digest("hex"),
  };
}

export function captureModelImplementationSnapshot(root = process.cwd()) {
  const files = Object.fromEntries(MODEL_IMPLEMENTATION_FILES.map((file) => {
    const contents = fs.readFileSync(path.join(root, file));
    return [file, crypto.createHash("sha256").update(contents).digest("hex")];
  }));
  return { version: "model-implementation-snapshot-v1", files,
    fingerprint: crypto.createHash("sha256").update(JSON.stringify(files)).digest("hex") };
}
