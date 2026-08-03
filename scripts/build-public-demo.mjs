import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import { auditFeatureRegistry } from "../model/feature-registry.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const sourceDir = path.resolve(import.meta.dirname, "..");
const outDir = sourceDir;
const privateDir = resolvePrivateDataDir(sourceDir);
const dataDir = path.join(outDir, "data");
const programmeRaw = fs.readFileSync("data/reference-archive/2026-07-11_2026-07-12/meet-2026-07-11-2026-07-12.json", "utf8");
const resultsRaw = fs.readFileSync("data/reference-archive/2026-07-11_2026-07-12/results-2026-07-11-2026-07-12.json", "utf8");
const resultLinksRaw = fs.readFileSync("data/reference-archive/2026-07-11_2026-07-12/result-links-2026-07-11-2026-07-12.json", "utf8");
const programmeData = JSON.parse(programmeRaw);
const resultsData = JSON.parse(resultsRaw);
const resultLinksData = JSON.parse(resultLinksRaw);
const modelOutputs = JSON.parse(fs.readFileSync("data/reference-archive/2026-07-11_2026-07-12/model-outputs-2026-07-11-2026-07-12.json", "utf8"));
const payoutPatterns = JSON.parse(fs.readFileSync("data/historical-payout-patterns.json", "utf8"));
const abilityArtifactPath = [path.join(privateDir, "models", "reference-asof-model.json"),
  path.join(privateDir, "models", "ability-softmax-v1.json")].find((candidate) => fs.existsSync(candidate));
const abilityArtifact = abilityArtifactPath ? JSON.parse(fs.readFileSync(abilityArtifactPath, "utf8")) : null;
const databaseExport = exportDatabaseStatus();
const liveExport = exportLiveEdition();
const liveRacecardsText = browserDataText("KEIBA_LIVE_RACECARDS", liveExport.racecards);
const liveModelOutputsText = browserDataText("KEIBA_LIVE_MODEL_OUTPUTS", liveExport.modelOutputs);
const featureCoverage = exportFeatureCoverage(databaseExport.status.asOf);
const quality = JSON.parse(fs.readFileSync("data/reference-archive/2026-07-11_2026-07-12/quality-report-2026-07-11-2026-07-12.json", "utf8"));
const currentHash = crypto.createHash("sha256").update(programmeRaw + resultsRaw).digest("hex");
const publicationCore = {
  version: "publication-manifest-v1",
  generatedAt: new Date().toISOString(),
  databaseRaces: databaseExport.status.races,
  completeMonths: databaseExport.status.completeMonths,
  expectedMonths: databaseExport.status.totalMonths,
  modelVersion: abilityArtifact?.modelVersion ?? null,
  modelCoverageRaces: abilityArtifact?.dataCoverage?.races
    ?? ((abilityArtifact?.counts?.trainRaces ?? 0) + (abilityArtifact?.counts?.calibrationRaces ?? 0) || null),
  expectancyCandidateCount: modelOutputs.candidates?.length ?? 0,
  expectancyPredictionCount: modelOutputs.predictions?.length ?? 0,
  liveRaceCount: liveExport.racecards.results?.length ?? 0,
  liveCandidateCount: liveExport.modelOutputs.candidates?.length ?? 0,
  livePredictionCount: liveExport.modelOutputs.predictions?.length ?? 0,
  liveRacecardsSha256: crypto.createHash("sha256").update(liveRacecardsText).digest("hex"),
  liveModelOutputsSha256: crypto.createHash("sha256").update(liveModelOutputsText).digest("hex"),
};
const publicationManifest = {
  ...publicationCore,
  manifestId: crypto.createHash("sha256").update(JSON.stringify(publicationCore)).digest("hex").slice(0, 20),
};
if (quality.status !== "pass" || !quality.gates.resultValidationReady || quality.inputHash !== currentHash) {
  throw new Error("公開停止: 品質検査が未合格または検査結果が古いため、前回正常版を保持します");
}
if (resultLinksData.raceCount !== resultsData.results.length || !sameSet(resultLinksData.raceLinks.map((race) => race.url), resultsData.results.map((race) => race.url))) {
  throw new Error("公開停止: 結果URL一覧と取得結果が一致しないため、前回正常版を保持します");
}

const stageDir = fs.mkdtempSync(path.join(os.tmpdir(), "keiba-public-stage-"));
const stageDataDir = path.join(stageDir, "data");
fs.mkdirSync(stageDataDir, { recursive: true });
fs.mkdirSync(path.join(stageDataDir, "reference-archive", "2026-07-11_2026-07-12"), { recursive: true });
for (const file of ["AGENTS.md", "index.html", "styles.css", "ticket-engine.js", "app.js"]) copy(file, path.join(stageDir, file));
fs.mkdirSync(path.join(stageDir, "docs"), { recursive: true });
fs.mkdirSync(path.join(stageDir, "scripts"), { recursive: true });
fs.mkdirSync(path.join(stageDir, "model"), { recursive: true });
fs.mkdirSync(path.join(stageDir, "assets"), { recursive: true });
copy("assets/race-hero-v1.png", path.join(stageDir, "assets", "race-hero-v1.png"));
copy("schema.sql", path.join(stageDir, "schema.sql"));
copy("docs/free-data-pipeline.md", path.join(stageDir, "docs", "free-data-pipeline.md"));
copy("docs/expectancy-methodology.md", path.join(stageDir, "docs", "expectancy-methodology.md"));
copy("docs/expectancy-research-v2.md", path.join(stageDir, "docs", "expectancy-research-v2.md"));
copy("docs/expectancy-research-v3.md", path.join(stageDir, "docs", "expectancy-research-v3.md"));
copy("docs/expectancy-research-v4.md", path.join(stageDir, "docs", "expectancy-research-v4.md"));
copy("docs/expectancy-research-v5.md", path.join(stageDir, "docs", "expectancy-research-v5.md"));
copy("docs/pace-shape-v3.1.md", path.join(stageDir, "docs", "pace-shape-v3.1.md"));
copy("docs/reference-site-analysis.md", path.join(stageDir, "docs", "reference-site-analysis.md"));
copy("docs/ui-framework-v4.md", path.join(stageDir, "docs", "ui-framework-v4.md"));
copy("model/feature-registry.mjs", path.join(stageDir, "model", "feature-registry.mjs"));
copy("model/model-artifact-compatibility.mjs", path.join(stageDir, "model", "model-artifact-compatibility.mjs"));
copy("model/expectancy-agent-ensemble.mjs", path.join(stageDir, "model", "expectancy-agent-ensemble.mjs"));
copy("model/validation-policy.mjs", path.join(stageDir, "model", "validation-policy.mjs"));
copy("model/expectancy-engine-v2.mjs", path.join(stageDir, "model", "expectancy-engine-v2.mjs"));
  copy("model/structured-ticket-search.mjs", path.join(stageDir, "model", "structured-ticket-search.mjs"));
  copy("model/finish-order-probabilities.mjs", path.join(stageDir, "model", "finish-order-probabilities.mjs"));
copy("docs/model-feature-research.md", path.join(stageDir, "docs", "model-feature-research.md"));
fs.mkdirSync(path.join(stageDir, ".agents", "skills", "horse-racing-ev-research", "agents"), { recursive: true });
fs.mkdirSync(path.join(stageDir, ".agents", "skills", "horse-racing-ev-research", "references"), { recursive: true });
fs.mkdirSync(path.join(stageDir, ".agents", "roles"), { recursive: true });
copy(".agents/skills/horse-racing-ev-research/SKILL.md", path.join(stageDir, ".agents", "skills", "horse-racing-ev-research", "SKILL.md"));
copy(".agents/skills/horse-racing-ev-research/agents/openai.yaml", path.join(stageDir, ".agents", "skills", "horse-racing-ev-research", "agents", "openai.yaml"));
copy(".agents/skills/horse-racing-ev-research/references/research-method.md", path.join(stageDir, ".agents", "skills", "horse-racing-ev-research", "references", "research-method.md"));
copy(".agents/skills/horse-racing-ev-research/references/agent-hierarchy.md", path.join(stageDir, ".agents", "skills", "horse-racing-ev-research", "references", "agent-hierarchy.md"));
for (const role of fs.readdirSync(".agents/roles")) copy(path.join(".agents", "roles", role), path.join(stageDir, ".agents", "roles", role));
for (const file of [
  "jra-free-db.mjs",
  "horse-racing-ev-agent.mjs",
  "horse-racing-ev-agent-check.mjs",
  "expectancy-agent-ensemble-check.mjs",
  "audit-reference-market-benchmark.mjs",
  "reference-market-benchmark-check.mjs",
  "materialize-reference-json.mjs",
  "rehydrate-reference-odds.mjs",
  "sync-reference-browser-data.mjs",
  "jra-free-odds.mjs",
  "jra-free-exotic-odds.mjs",
  "jra-free-exotic-odds-check.mjs",
  "jra-historical-win-place-odds.mjs",
  "historical-win-place-odds-check.mjs",
  "run-historical-win-place-odds-backfill.ps1",
  "generate-market-ev.mjs",
  "train-reference-asof-model.mjs",
  "evaluate-reference-ev.mjs",
  "reference-asof-model-check.mjs",
  "reference-ev-scope-check.mjs",
  "analyze-historical-payout-patterns.mjs",
  "historical-payout-patterns-check.mjs",
  "market-ev-check.mjs",
  "expectancy-engine-v2-check.mjs",
  "finish-order-probabilities-check.mjs",
  "capture-jra-closing-odds.ps1",
  "publish-web-status.ps1",
  "run-jra-free-backfill.ps1",
  "sync-jra-current.ps1",
  "fetch-jra-results.mjs",
  "validate-reference-dataset.mjs",
  "generate-reference-result-seed.mjs",
  "build-public-demo.mjs",
  "ev-logic-check.mjs",
  "performance-benchmark-check.mjs",
  "ticket-engine-check.mjs",
  "structured-ticket-search-check.mjs",
  "feature-registry-check.mjs",
  "model-feature-pipeline.mjs",
  "model-feature-pipeline-check.mjs",
  "model-validation-policy-check.mjs",
  "train-expectancy-model.mjs",
  "train-expectancy-model-check.mjs",
  "train-expectancy-model-unit-check.mjs",
  "model-training-preflight.mjs",
  "model-training-preflight-freshness.mjs",
  "model-training-preflight-freshness-check.mjs",
  "model-training-resource-check.mjs",
  "model-data-snapshot.mjs",
  "model-data-snapshot-check.mjs",
  "model-artifact-compatibility-check.mjs",
  "model-freshness.mjs",
  "race-time.mjs",
  "race-time-check.mjs",
  "audit-field-availability.mjs",
  "backfill-readiness.mjs",
  "goal-completion-audit.mjs",
  "goal-completion-audit-check.mjs",
  "publish-workflow-check.mjs",
  "post-backfill-workflow-check.mjs",
  "audit-automation-tasks.ps1",
  "run-post-backfill-pipeline.ps1",
  "install-post-backfill-task.ps1",
  "jra-live-racecards.mjs",
  "jra-live-racecards-check.mjs",
  "sync-jra-live-racecards.ps1",
  "install-live-racecard-task.ps1",
  "predict-live-racecards.mjs",
  "jra-live-odds-check.mjs",
  "capture-jra-live-odds.ps1",
  "install-live-odds-task.ps1",
  "generate-live-market-ev.mjs",
  "live-market-ev-check.mjs",
  "live-pipeline-workflow-check.mjs",
  "evaluate-live-ev-ledger.mjs",
  "live-ev-ledger-check.mjs",
  "publish-live-web.ps1",
]) copy(path.join("scripts", file), path.join(stageDir, "scripts", file));
writeBrowserData(path.join(stageDataDir, "reference-archive/2026-07-11_2026-07-12/meet-2026-07-11-2026-07-12.js"), "KEIBA_REFERENCE_MEETINGS", programmeData);
writeBrowserData(path.join(stageDataDir, "reference-archive/2026-07-11_2026-07-12/result-links-2026-07-11-2026-07-12.js"), "KEIBA_RESULT_LINKS", resultLinksData);
writeBrowserData(path.join(stageDataDir, "reference-archive/2026-07-11_2026-07-12/results-2026-07-11-2026-07-12.js"), "KEIBA_RESULTS", resultsData);
writeBrowserData(path.join(stageDataDir, "database-status.js"), "KEIBA_DATABASE_STATUS", databaseExport.status);
writeBrowserData(path.join(stageDataDir, "model-feature-coverage.js"), "KEIBA_MODEL_FEATURE_COVERAGE", featureCoverage);
writeBrowserData(path.join(stageDataDir, "historical-payout-patterns.js"), "KEIBA_HISTORICAL_PAYOUT_PATTERNS", payoutPatterns);
writeBrowserData(path.join(stageDataDir, "reference-archive/2026-07-11_2026-07-12/closing-odds-2026-07-11-2026-07-12.js"), "KEIBA_CLOSING_ODDS", databaseExport.odds);
writeBrowserData(path.join(stageDataDir, "reference-archive/2026-07-11_2026-07-12/model-outputs-2026-07-11-2026-07-12.js"), "KEIBA_MODEL_OUTPUTS", modelOutputs, 0);
fs.writeFileSync(path.join(stageDataDir, "live-racecards.js"), liveRacecardsText, "utf8");
fs.writeFileSync(path.join(stageDataDir, "live-model-outputs.js"), liveModelOutputsText, "utf8");
fs.writeFileSync(path.join(stageDataDir, "publication-manifest.json"), `${JSON.stringify(publicationManifest, null, 2)}\n`, "utf8");

const cacheVersion = crypto.createHash("sha256")
  .update(fs.readFileSync("styles.css"))
  .update(fs.readFileSync("ticket-engine.js"))
  .update(fs.readFileSync("app.js"))
  .update(JSON.stringify(featureCoverage))
  .update(JSON.stringify(databaseExport.status))
  .update(JSON.stringify(modelOutputs))
  .update(JSON.stringify(liveExport))
  .digest("hex")
  .slice(0, 12);
const stagedIndexPath = path.join(stageDir, "index.html");
const stagedIndex = fs.readFileSync(stagedIndexPath, "utf8").replace(
  /(href|src)="(styles\.css|(?:app|ticket-engine)\.js|data\/[^\"]+\.js)"/g,
  `$1="$2?v=${cacheVersion}"`,
);
fs.writeFileSync(stagedIndexPath, stagedIndex, "utf8");

fs.writeFileSync(path.join(stageDir, ".nojekyll"), "", "utf8");

fs.mkdirSync(dataDir, { recursive: true });
fs.cpSync(stageDir, outDir, { recursive: true, force: true });
fs.rmSync(stageDir, { recursive: true, force: true });

console.log(`Built public real-data edition in ${outDir}`);

function copy(from, to) {
  fs.copyFileSync(from, to);
}

function writeBrowserData(file, globalName, value, indentation = 2) {
  fs.writeFileSync(file, browserDataText(globalName, value, indentation), "utf8");
}

function browserDataText(globalName, value, indentation = 2) {
  return `window.${globalName} = ${JSON.stringify(value, null, indentation)};\n`;
}

function sameSet(left, right) {
  const expected = new Set(left);
  const actual = new Set(right);
  return expected.size === actual.size && expected.size === left.length && actual.size === right.length && [...expected].every((value) => actual.has(value));
}

function exportFeatureCoverage(generatedAt) {
  const database = new DatabaseSync(path.join(privateDir, "keiba.sqlite"), { readOnly: true });
  try {
    const report = auditFeatureRegistry(database);
    report.generatedAt = generatedAt;
    return report;
  } finally { database.close(); }
}

function exportDatabaseStatus() {
  const databasePath = path.join(privateDir, "keiba.sqlite");
  if (!fs.existsSync(databasePath)) throw new Error("公開停止: 検証済みSQLiteがありません");
  const db = new DatabaseSync(databasePath, { readOnly: true });
  try {
    db.exec("begin");
    const jobs = Object.fromEntries(db.prepare(`select status,count(*) count from backfill_jobs
      group by status`).all().map((row) => [row.status, row.count]));
    const totals = db.prepare(`select
      (select count(*) from complete_meetings) meetings,
      (select count(*) from complete_races) races,
      (select count(*) from complete_race_entries) runners,
      (select count(*) from complete_payouts) payouts,
      (select count(*) from raw_pages) rawPages,
      (select count(*) from odds_snapshots) oddsSnapshots,
      (select min(month) from backfill_jobs where status='complete') earliestComplete,
      (select max(month) from backfill_jobs where status='complete') latestComplete`).get();
    const latestBatch = db.prepare(`select * from odds_ingestion_batches
      where status='complete' and source='JRA official odds' order by id desc limit 1`).get();
    const exoticBatch = db.prepare(`select * from odds_ingestion_batches
      where status='complete' and source='JRA official exotic odds' order by id desc limit 1`).get();
    if (!latestBatch) throw new Error("合格済みオッズバッチがありません");
    if (!exoticBatch) throw new Error("全券種オッズの完了バッチがありません");
    const quality = db.prepare(`select check_name,status,actual_value,details from odds_quality_checks
      where batch_id=? order by check_name`).all(latestBatch.id);
    if (quality.length < 6 || quality.some((check) => check.status !== "pass")) {
      throw new Error("最新オッズバッチの品質検査が未合格です");
    }
    const rows = db.prepare(`select r.race_id,r.race_date,r.venue_code,r.race_number,
      o.bet_type,o.selection_key,o.odds_low,o.odds_high,o.observed_at
      from odds_snapshots o join complete_races r on r.race_id=o.race_id
      where o.batch_id in (?,?) order by r.race_date,r.venue_code,r.race_number,o.selection_key,o.bet_type`).all(latestBatch.id, exoticBatch.id);
    db.exec("commit");

    const totalMonths = Object.values(jobs).reduce((sum, count) => sum + count, 0);
    const remainingMonths = (jobs.queued ?? 0) + (jobs.running ?? 0) + (jobs.failed ?? 0);
    const durations = db.prepare(`select (julianday(completed_at)-julianday(started_at))*1440 minutes
      from backfill_jobs where status='complete' and started_at is not null and completed_at is not null
      and (julianday(completed_at)-julianday(started_at))*1440 between 0.5 and 60
      order by completed_at desc limit 24`).all().map((row) => row.minutes).sort((left, right) => left - right);
    const durationMiddle = Math.floor(durations.length / 2);
    const medianMinutesPerMonth = !durations.length ? null : durations.length % 2
      ? durations[durationMiddle] : (durations[durationMiddle - 1] + durations[durationMiddle]) / 2;
    const estimatedHoursRemaining = medianMinutesPerMonth == null ? null : remainingMonths * medianMinutesPerMonth / 60;
    const estimatedCompletionAt = estimatedHoursRemaining == null ? null
      : new Date(Date.now() + estimatedHoursRemaining * 60 * 60 * 1000).toISOString();
    const activeJob = db.prepare("select updated_at from backfill_jobs where status='running' order by updated_at desc limit 1").get();
    const historicalOddsJobs = db.prepare(`select count(*) count from sqlite_master
      where type='table' and name='historical_odds_jobs'`).get().count
      ? Object.fromEntries(db.prepare("select status,count(*) count from historical_odds_jobs group by status")
        .all().map((row) => [row.status, row.count]))
      : {};
    const workerHeartbeatAgeSeconds = activeJob ? (Date.now() - new Date(activeJob.updated_at).getTime()) / 1000 : null;
    const preflightPath = path.join(privateDir, "models", "training-preflight.json");
    const preflight = fs.existsSync(preflightPath) ? JSON.parse(fs.readFileSync(preflightPath, "utf8")) : null;
    const liveValidationPath = path.join(privateDir, "models", "live-ev-validation.json");
    const liveValidation = fs.existsSync(liveValidationPath) ? JSON.parse(fs.readFileSync(liveValidationPath, "utf8")) : null;
    const fieldAuditPath = path.join(privateDir, "models", "field-availability-audit.json");
    const fieldAudit = fs.existsSync(fieldAuditPath) ? JSON.parse(fs.readFileSync(fieldAuditPath, "utf8")) : null;
    const status = {
      asOf: new Date().toISOString(),
      completeMonths: jobs.complete ?? 0,
      runningMonths: jobs.running ?? 0,
      queuedMonths: jobs.queued ?? 0,
      failedMonths: jobs.failed ?? 0,
      totalMonths,
      progressPercent: totalMonths ? ((jobs.complete ?? 0) / totalMonths) * 100 : 0,
      remainingMonths,
      medianMinutesPerMonth,
      estimatedHoursRemaining,
      estimatedCompletionAt,
      workerHealth: !activeJob ? "idle" : workerHeartbeatAgeSeconds <= 30 * 60 ? "healthy" : "stalled",
      workerHeartbeatAgeSeconds,
      historicalOddsCompleteRaces: historicalOddsJobs.complete ?? 0,
      historicalOddsPendingRaces: (historicalOddsJobs.queued ?? 0) + (historicalOddsJobs.running ?? 0) + (historicalOddsJobs.failed ?? 0),
      historicalOddsTotalRaces: Object.values(historicalOddsJobs).reduce((sum, count) => sum + count, 0),
      liveEvValidation: liveValidation ? {
        status: liveValidation.status,
        generatedAt: liveValidation.generatedAt,
        storedCandidates: liveValidation.storedCandidates,
        evaluatedCandidates: liveValidation.evaluatedCandidates,
        decisions: liveValidation.metrics?.decisions ?? 0,
        bets: liveValidation.metrics?.bets ?? 0,
        raceDays: liveValidation.metrics?.raceDays ?? 0,
        roi: liveValidation.metrics?.roi ?? null,
        roiCi95Lower: liveValidation.metrics?.roiCi95Lower ?? null,
        maximumDrawdown: liveValidation.metrics?.maximumDrawdown ?? null,
      } : null,
      ...totals,
      integrityStatus: fieldAudit?.pass === true && fieldAudit.completeRunners === totals.runners ? "pass" : "fail",
      fieldAvailabilityAudit: fieldAudit ? {
        checkedAt: fieldAudit.checkedAt,
        pass: fieldAudit.pass,
        completeRunners: fieldAudit.completeRunners,
        currentRunners: totals.runners,
        coverageCurrent: fieldAudit.completeRunners === totals.runners,
        rawRacePagesVerified: fieldAudit.rawRacePagesVerified,
        officiallyUnavailableCells: fieldAudit.fields.reduce((sum, field) => sum + field.officiallyUnavailableRows, 0),
        parserMissingCells: fieldAudit.fields.reduce((sum, field) => sum + field.parserMissingRows, 0),
        fields: fieldAudit.fields.map((field) => ({
          field: field.field,
          missingRows: field.missingRows,
          officiallyUnavailableRows: field.officiallyUnavailableRows,
          parserMissingRows: field.parserMissingRows,
        })),
      } : null,
      evStatus: "insufficient",
      trainingPreflight: preflight?.status === "pass" ? {
        checkedAt: preflight.checkedAt,
        races: preflight.usable.races,
        rows: preflight.usable.rows,
        totalMs: preflight.timingMs.total,
        heapUsedMb: preflight.memoryMb.heapUsed,
        rssMb: preflight.memoryMb.rss,
        projectedFullRunMinutes: preflight.projectedFullRunMinutes,
        projectedFullRssMb: preflight.projectedFullRssMb,
        logLoss: preflight.metrics.logLoss,
        uniformLogLoss: preflight.metrics.uniformLogLoss,
        ece: preflight.metrics.ece,
        maxCalibrationBinError: preflight.metrics.maxCalibrationBinError,
        calibrationMethod: preflight.metrics.calibrationMethod,
        researchSignal: preflight.researchSignal,
        ticketResearchPass: preflight.ticketResearchPass,
        ticketCalibrationTemperatures: preflight.ticketCalibrationTemperatures,
        ticketTypesPassed: Object.values(preflight.ticketMetrics?.byType ?? {}).filter((metric) => metric.researchPass).length,
        ticketTypesTotal: Object.keys(preflight.ticketMetrics?.byType ?? {}).length,
        ticketMetrics: Object.fromEntries(Object.entries(preflight.ticketMetrics?.byType ?? {}).map(([type, metric]) => [type, {
          researchPass: metric.researchPass,
          winnerLogLoss: metric.winnerLogLoss,
          uniformWinnerLogLoss: metric.uniformWinnerLogLoss,
          ece: metric.ece,
          supportedMaximumCalibrationBinError: metric.supportedMaximumCalibrationBinError,
          maximumMassError: metric.maximumMassError,
        }])),
        totalFeatures: preflight.features?.total ?? null,
        selectedFeatures: preflight.features?.selected ?? null,
        selectedFeatureGroups: preflight.featureAdmission?.selectedGroups ?? [],
        featureSelectionFallback: preflight.featureAdmission?.fallback ?? true,
      } : null,
    };

    const raceMap = new Map();
    for (const row of rows) {
      const venueCode = ({ "02": "HAKODATE", "03": "FUKUSHIMA", "10": "KOKURA" })[row.venue_code] ?? row.venue_code;
      const key = `${row.race_date}|${venueCode}|${row.race_number}`;
      if (!raceMap.has(key)) raceMap.set(key, {
        key, raceId: row.race_id, date: row.race_date, venueCode, raceNo: row.race_number,
        observedAt: row.observed_at, prices: {}, oddsBooks: {},
      });
      raceMap.get(key).oddsBooks[row.bet_type] ??= {};
      raceMap.get(key).oddsBooks[row.bet_type][row.selection_key] = { low: row.odds_low, high: row.odds_high };
      const price = raceMap.get(key).prices[row.selection_key] ?? { horseNumber: Number(row.selection_key) };
      if (row.bet_type === "win") price.win = row.odds_low;
      if (row.bet_type === "place") {
        price.placeLow = row.odds_low;
        price.placeHigh = row.odds_high;
      }
      raceMap.get(key).prices[row.selection_key] = price;
    }
    const odds = {
      batchId: latestBatch.id,
      exoticBatchId: exoticBatch.id,
      snapshotKind: latestBatch.snapshot_kind,
      targetDates: latestBatch.target_dates.split(","),
      meetingCount: latestBatch.meeting_count,
      raceCount: latestBatch.race_count,
      sourceRunnerCount: latestBatch.source_runner_count,
      pricedRunnerCount: latestBatch.priced_runner_count,
      snapshotCount: rows.length,
      quality,
      races: [...raceMap.values()].map((race) => ({ ...race, prices: Object.values(race.prices) })),
    };
    return { status, odds };
  } catch (error) {
    try { db.exec("rollback"); } catch {}
    throw error;
  } finally {
    db.close();
  }
}

function exportLiveEdition() {
  const racecards = readBrowserData(path.join(sourceDir, "data", "live-racecards.js"), "KEIBA_LIVE_RACECARDS");
  const modelOutputs = readBrowserData(path.join(sourceDir, "data", "live-model-outputs.js"), "KEIBA_LIVE_MODEL_OUTPUTS");
  const raceCount = racecards.results?.length ?? 0;
  const predictionCount = modelOutputs.predictions?.length ?? 0;
  if (raceCount < 1 || predictionCount !== raceCount) {
    throw new Error(`公開停止: 現在の合格済み週データが不完全です races=${raceCount} predictions=${predictionCount}`);
  }
  return { racecards, modelOutputs };
}

function readBrowserData(file, globalName) {
  if (!fs.existsSync(file)) throw new Error(`公開停止: ${path.basename(file)}がありません`);
  const text = fs.readFileSync(file, "utf8");
  const assignment = text.indexOf("=");
  if (assignment < 0 || !text.slice(0, assignment).includes(globalName)) {
    throw new Error(`公開停止: ${path.basename(file)}の形式が不正です`);
  }
  return JSON.parse(text.slice(assignment + 1).trim().replace(/;\s*$/, ""));
}
