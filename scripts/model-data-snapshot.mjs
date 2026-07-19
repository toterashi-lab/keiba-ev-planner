import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export const MODEL_IMPLEMENTATION_FILES = Object.freeze([
  "scripts/train-expectancy-model.mjs",
  "scripts/model-data-snapshot.mjs",
  "scripts/model-feature-pipeline.mjs",
  "model/feature-registry.mjs",
  "model/model-artifact-compatibility.mjs",
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
  const historicalWinPlace = tableExists(database, "historical_win_place_odds")
    ? database.prepare(`select count(distinct race_id) races,count(*) prices from historical_win_place_odds`).get()
    : { races: 0, prices: 0 };
  const historicalExotic = tableExists(database, "historical_exotic_odds")
    ? database.prepare(`select count(distinct race_id) races,count(*) prices from historical_exotic_odds`).get()
    : { races: 0, prices: 0 };
  const historicalOddsJobs = tableExists(database, "historical_odds_jobs")
    ? database.prepare(`select count(*) total,sum(case when status='complete' then 1 else 0 end) complete from historical_odds_jobs`).get()
    : { total: 0, complete: 0 };
  const historicalExoticJobs = tableExists(database, "historical_exotic_odds_jobs")
    ? database.prepare(`select count(*) total,sum(case when status='complete' then 1 else 0 end) complete from historical_exotic_odds_jobs`).get()
    : { total: 0, complete: 0 };
  const sourcePageSequence = database.prepare(`select group_concat(source_page_id, ',') value from
    (select source_page_id from complete_races order by race_id)`).get().value ?? "";
  const core = { version: "model-data-snapshot-v1", ...coverage,
    historicalWinPlaceRaces: historicalWinPlace.races,
    historicalWinPlacePrices: historicalWinPlace.prices,
    historicalOddsJobs: historicalOddsJobs.total,
    completeHistoricalOddsJobs: historicalOddsJobs.complete ?? 0,
    historicalExoticRaces: historicalExotic.races,
    historicalExoticPrices: historicalExotic.prices,
    historicalExoticJobs: historicalExoticJobs.total,
    completeHistoricalExoticJobs: historicalExoticJobs.complete ?? 0,
    sourcePageSequence };
  return {
    version: core.version,
    minDate: core.minDate,
    maxDate: core.maxDate,
    races: core.races,
    runners: core.runners,
    results: core.results,
    payouts: core.payouts,
    sourcePages: core.sourcePages,
    historicalWinPlaceRaces: core.historicalWinPlaceRaces,
    historicalWinPlacePrices: core.historicalWinPlacePrices,
    historicalOddsJobs: core.historicalOddsJobs,
    completeHistoricalOddsJobs: core.completeHistoricalOddsJobs,
    historicalExoticRaces: core.historicalExoticRaces,
    historicalExoticPrices: core.historicalExoticPrices,
    historicalExoticJobs: core.historicalExoticJobs,
    completeHistoricalExoticJobs: core.completeHistoricalExoticJobs,
    fingerprint: crypto.createHash("sha256").update(JSON.stringify(core)).digest("hex"),
  };
}

function tableExists(database, name) {
  return database.prepare("select count(*) count from sqlite_master where type='table' and name=?").get(name).count === 1;
}

export function captureModelImplementationSnapshot(root = process.cwd()) {
  const files = Object.fromEntries(MODEL_IMPLEMENTATION_FILES.map((file) => {
    const contents = fs.readFileSync(path.join(root, file));
    return [file, crypto.createHash("sha256").update(contents).digest("hex")];
  }));
  return { version: "model-implementation-snapshot-v1", files,
    fingerprint: crypto.createHash("sha256").update(JSON.stringify(files)).digest("hex") };
}
