import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import { auditFeatureRegistry } from "../model/feature-registry.mjs";

const outDir = "public";
const dataDir = path.join(outDir, "data");
const programmeRaw = fs.readFileSync("data/meet-2026-07-11-2026-07-12.json", "utf8");
const resultsRaw = fs.readFileSync("data/results-2026-07-11-2026-07-12.json", "utf8");
const resultLinksRaw = fs.readFileSync("data/result-links-2026-07-11-2026-07-12.json", "utf8");
const programmeData = JSON.parse(programmeRaw);
const resultsData = JSON.parse(resultsRaw);
const resultLinksData = JSON.parse(resultLinksRaw);
const modelOutputs = JSON.parse(fs.readFileSync("data/model-outputs-2026-07-11-2026-07-12.json", "utf8"));
const databaseExport = exportDatabaseStatus();
const featureCoverage = exportFeatureCoverage(databaseExport.status.asOf);
const quality = JSON.parse(fs.readFileSync("data/quality-report-2026-07-11-2026-07-12.json", "utf8"));
const currentHash = crypto.createHash("sha256").update(programmeRaw + resultsRaw).digest("hex");
if (quality.status !== "pass" || !quality.gates.resultValidationReady || quality.inputHash !== currentHash) {
  throw new Error("公開停止: 品質検査が未合格または検査結果が古いため、前回正常版を保持します");
}
if (resultLinksData.raceCount !== resultsData.results.length || !sameSet(resultLinksData.raceLinks.map((race) => race.url), resultsData.results.map((race) => race.url))) {
  throw new Error("公開停止: 結果URL一覧と取得結果が一致しないため、前回正常版を保持します");
}

const stageDir = fs.mkdtempSync(path.join(process.cwd(), ".public-stage-"));
const stageDataDir = path.join(stageDir, "data");
fs.mkdirSync(stageDataDir, { recursive: true });
for (const file of ["index.html", "styles.css", "ticket-engine.js", "app.js"]) copy(file, path.join(stageDir, file));
fs.mkdirSync(path.join(stageDir, "docs"), { recursive: true });
fs.mkdirSync(path.join(stageDir, "scripts"), { recursive: true });
fs.mkdirSync(path.join(stageDir, "model"), { recursive: true });
fs.mkdirSync(path.join(stageDir, "assets"), { recursive: true });
copy("assets/race-hero-v1.png", path.join(stageDir, "assets", "race-hero-v1.png"));
copy("schema.sql", path.join(stageDir, "schema.sql"));
copy("docs/free-data-pipeline.md", path.join(stageDir, "docs", "free-data-pipeline.md"));
copy("docs/expectancy-methodology.md", path.join(stageDir, "docs", "expectancy-methodology.md"));
copy("docs/expectancy-research-v2.md", path.join(stageDir, "docs", "expectancy-research-v2.md"));
copy("docs/reference-site-analysis.md", path.join(stageDir, "docs", "reference-site-analysis.md"));
copy("model/feature-registry.mjs", path.join(stageDir, "model", "feature-registry.mjs"));
copy("model/validation-policy.mjs", path.join(stageDir, "model", "validation-policy.mjs"));
copy("model/expectancy-engine-v2.mjs", path.join(stageDir, "model", "expectancy-engine-v2.mjs"));
copy("docs/model-feature-research.md", path.join(stageDir, "docs", "model-feature-research.md"));
for (const file of [
  "jra-free-db.mjs",
  "jra-free-odds.mjs",
  "jra-free-exotic-odds.mjs",
  "jra-free-exotic-odds-check.mjs",
  "generate-market-ev.mjs",
  "market-ev-check.mjs",
  "expectancy-engine-v2-check.mjs",
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
  "feature-registry-check.mjs",
  "model-feature-pipeline.mjs",
  "model-feature-pipeline-check.mjs",
  "model-validation-policy-check.mjs",
]) copy(path.join("scripts", file), path.join(stageDir, "scripts", file));
writeBrowserData(path.join(stageDataDir, "meet-2026-07-11-2026-07-12.js"), "KEIBA_REFERENCE_MEETINGS", programmeData);
writeBrowserData(path.join(stageDataDir, "result-links-2026-07-11-2026-07-12.js"), "KEIBA_RESULT_LINKS", resultLinksData);
writeBrowserData(path.join(stageDataDir, "results-2026-07-11-2026-07-12.js"), "KEIBA_RESULTS", resultsData);
writeBrowserData(path.join(stageDataDir, "database-status.js"), "KEIBA_DATABASE_STATUS", databaseExport.status);
writeBrowserData(path.join(stageDataDir, "model-feature-coverage.js"), "KEIBA_MODEL_FEATURE_COVERAGE", featureCoverage);
writeBrowserData(path.join(stageDataDir, "closing-odds-2026-07-11-2026-07-12.js"), "KEIBA_CLOSING_ODDS", databaseExport.odds);
writeBrowserData(path.join(stageDataDir, "model-outputs-2026-07-11-2026-07-12.js"), "KEIBA_MODEL_OUTPUTS", modelOutputs);

const cacheVersion = crypto.createHash("sha256")
  .update(fs.readFileSync("styles.css"))
  .update(fs.readFileSync("ticket-engine.js"))
  .update(fs.readFileSync("app.js"))
  .update(JSON.stringify(featureCoverage))
  .update(JSON.stringify(databaseExport.status))
  .update(JSON.stringify(modelOutputs))
  .digest("hex")
  .slice(0, 12);
const stagedIndexPath = path.join(stageDir, "index.html");
const stagedIndex = fs.readFileSync(stagedIndexPath, "utf8").replace(
  /(href|src)="(styles\.css|(?:app|ticket-engine)\.js|data\/[^\"]+\.js)"/g,
  `$1="$2?v=${cacheVersion}"`,
);
fs.writeFileSync(stagedIndexPath, stagedIndex, "utf8");

fs.writeFileSync(path.join(stageDir, ".nojekyll"), "", "utf8");
fs.writeFileSync(path.join(stageDir, ".gitignore"), ".DS_Store\nThumbs.db\n", "utf8");
fs.writeFileSync(path.join(stageDir, "README.md"), `# 競馬期待値ラボ

先週のJRA中央競馬72レースを使った、過去データ蓄積・期待値検証画面です。

## 収録範囲

- 2026年7月11日・12日
- 福島・小倉・函館
- 開催番組 72レース
- 勝馬 72レース
- 出走馬 ${resultsData.runnerCount}頭
- 払戻 ${resultsData.refundLineCount}件
- 締切後単勝・複勝オッズ ${databaseExport.odds.snapshotCount}件
- 長期DB ${databaseExport.status.completeMonths} / ${databaseExport.status.totalMonths}か月完了

出典はJRA公式番組・結果ページです。JRAおよびnetkeibaの公式サービスではありません。
無課金の長期蓄積コードは \`scripts/jra-free-db.mjs\`、公式単勝・複勝オッズ収集は \`scripts/jra-free-odds.mjs\`、検査仕様は \`docs/free-data-pipeline.md\` に収録しています。
期待値の研究根拠、4シナリオ、校正・時系列検証ゲートは \`docs/expectancy-methodology.md\` に収録しています。
原本HTMLとSQLite本体は個人利用のローカルDBにのみ保存し、この公開リポジトリには収録しません。

期待値候補は、全馬オッズ履歴、確率校正、時系列検証、オッズ鮮度、ドローダウンの全ゲートが合格するまで生成を停止します。

GitHub Pagesは \`main\` ブランチ直下を公開します。
`, "utf8");

if (fs.existsSync(outDir)) {
  for (const entry of fs.readdirSync(outDir)) {
    if (entry === ".git") continue;
    fs.rmSync(path.join(outDir, entry), { recursive: true, force: true });
  }
}

fs.mkdirSync(dataDir, { recursive: true });
fs.cpSync(stageDir, outDir, { recursive: true });
fs.rmSync(stageDir, { recursive: true, force: true });

console.log(`Built public real-data edition in ${outDir}`);

function copy(from, to) {
  fs.copyFileSync(from, to);
}

function writeBrowserData(file, globalName, value) {
  fs.writeFileSync(file, `window.${globalName} = ${JSON.stringify(value, null, 2)};\n`, "utf8");
}

function sameSet(left, right) {
  const expected = new Set(left);
  const actual = new Set(right);
  return expected.size === actual.size && expected.size === left.length && actual.size === right.length && [...expected].every((value) => actual.has(value));
}

function exportFeatureCoverage(generatedAt) {
  const database = new DatabaseSync(path.join("data", "jra-free-private", "keiba.sqlite"), { readOnly: true });
  try {
    const report = auditFeatureRegistry(database);
    report.generatedAt = generatedAt;
    return report;
  } finally { database.close(); }
}

function exportDatabaseStatus() {
  const databasePath = path.join("data", "jra-free-private", "keiba.sqlite");
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
      where status='complete' and source!='JRA official exotic odds' order by id desc limit 1`).get();
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
    const status = {
      asOf: new Date().toISOString(),
      completeMonths: jobs.complete ?? 0,
      runningMonths: jobs.running ?? 0,
      queuedMonths: jobs.queued ?? 0,
      failedMonths: jobs.failed ?? 0,
      totalMonths,
      progressPercent: totalMonths ? ((jobs.complete ?? 0) / totalMonths) * 100 : 0,
      ...totals,
      integrityStatus: "pass",
      evStatus: "insufficient",
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
