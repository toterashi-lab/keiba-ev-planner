import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const privateDir = resolvePrivateDataDir(process.cwd());
const databasePath = path.join(privateDir, "keiba.sqlite");
const db = new DatabaseSync(databasePath, { readOnly: true });
try {
  const resultJobs = counts("backfill_jobs");
  const hasOddsJobs = tableExists("historical_odds_jobs");
  const oddsJobs = hasOddsJobs ? counts("historical_odds_jobs") : {};
  const hasExoticOddsJobs = tableExists("historical_exotic_odds_jobs");
  const exoticOddsJobs = hasExoticOddsJobs ? counts("historical_exotic_odds_jobs") : {};
  const resultPending = pending(resultJobs);
  const oddsPending = hasOddsJobs ? pending(oddsJobs) : null;
  const exoticOddsPending = hasExoticOddsJobs ? pending(exoticOddsJobs) : null;
  const completeRaces = db.prepare("select count(*) count from complete_races").get().count;
  const pricedRaces = tableExists("historical_win_place_odds")
    ? db.prepare("select count(distinct race_id) count from historical_win_place_odds").get().count
    : 0;
  const modelPath = path.join(privateDir, "models", "ability-softmax-v1.json");
  const model = fs.existsSync(modelPath) ? JSON.parse(fs.readFileSync(modelPath, "utf8")) : null;
  const receiptPath = path.join(privateDir, "models", "publication-receipt.json");
  const receipt = fs.existsSync(receiptPath) ? JSON.parse(fs.readFileSync(receiptPath, "utf8")) : null;

  let phase;
  let nextAction;
  if (resultPending > 0) {
    phase = "race_results_backfill";
    nextAction = "continue_jra_free_backfill";
  } else if (!hasOddsJobs || oddsPending > 0 || pricedRaces !== completeRaces
    || !hasExoticOddsJobs || exoticOddsPending > 0) {
    phase = "historical_market_odds_backfill";
    nextAction = "continue_win_place_and_exotic_odds";
  } else if (model?.dataCoverage?.races !== completeRaces) {
    phase = "full_walk_forward_training";
    nextAction = "run_post_backfill_model_pipeline";
  } else if (model?.deploymentStatus !== "eligible") {
    phase = "external_ai_recommendation_validation";
    nextAction = "accumulate_ai_only_live_ledger";
  } else if (receipt?.status !== "verified" || receipt?.modelVersion !== model.modelVersion) {
    phase = "verified_publication";
    nextAction = "publish_and_verify_remote_manifest";
  } else {
    phase = "complete";
    nextAction = "monitor_data_and_model_drift";
  }

  console.log(JSON.stringify({
    agent: "horse-racing-ev-agent-v1",
    phase,
    nextAction,
    rules: {
      skill: "horse-racing-ev-research",
      allQualityGatedDataRequired: true,
      targetLeakageForbidden: true,
      purchaseEvaluationScope: "ai_prediction_top_ticket_only",
      unitStakeYen: 100,
      roiGuarantee: false,
      externalBettingIntegration: "out_of_scope",
    },
    progress: {
      resultJobs,
      resultPending,
      completeRaces,
      oddsJobs,
      oddsPending,
      exoticOddsJobs,
      exoticOddsPending,
      pricedRaces,
      modelCoverageRaces: model?.dataCoverage?.races ?? null,
      modelDeploymentStatus: model?.deploymentStatus ?? "not_trained",
      publicationStatus: receipt?.status ?? "not_published",
    },
  }, null, 2));
} finally {
  db.close();
}

function tableExists(name) {
  return db.prepare("select count(*) count from sqlite_master where type='table' and name=?").get(name).count === 1;
}

function counts(table) {
  return Object.fromEntries(db.prepare(`select status,count(*) count from ${table} group by status`)
    .all().map((row) => [row.status, row.count]));
}

function pending(values) {
  return (values.queued ?? 0) + (values.running ?? 0) + (values.failed ?? 0);
}
