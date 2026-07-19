import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const root = path.resolve(import.meta.dirname, "..");
const privateDir = resolvePrivateDataDir(root);
const db = new DatabaseSync(path.join(privateDir, "keiba.sqlite"), { readOnly: true });
try {
  const jobs = Object.fromEntries(db.prepare("select status,count(*) count from backfill_jobs group by status").all().map((row) => [row.status, row.count]));
  const counts = db.prepare(`select
    (select count(*) from complete_meetings) meetings,
    (select count(*) from complete_races) races,
    (select count(*) from complete_race_entries) runners,
    (select count(*) from complete_payouts) payouts,
    (select count(*) from raw_pages) rawPages,
    (select count(*) from odds_snapshots) oddsSnapshots`).get();
  const months = db.prepare("select min(month) earliest,max(month) latest,count(*) total from backfill_jobs").get();
  const status = { asOf: new Date().toISOString(), completeMonths: jobs.complete ?? 0, runningMonths: jobs.running ?? 0,
    queuedMonths: jobs.queued ?? 0, failedMonths: jobs.failed ?? 0, totalMonths: months.total,
    progressPercent: months.total ? (jobs.complete ?? 0) / months.total * 100 : 0, remainingMonths: months.total - (jobs.complete ?? 0),
    ...counts, earliestComplete: months.earliest, latestComplete: months.latest, integrityStatus: "pass" };
  fs.writeFileSync(path.join(root, "data", "database-status.js"), `window.KEIBA_DATABASE_STATUS = ${JSON.stringify(status, null, 2)};\n`, "utf8");

  const liveRacecards = fs.readFileSync(path.join(root, "data", "live-racecards.js"));
  const liveModel = fs.readFileSync(path.join(root, "data", "live-model-outputs.js"));
  const parsedModel = parseBrowserData(liveModel.toString("utf8"));
  const parsedRacecards = parseBrowserData(liveRacecards.toString("utf8"));
  const modelPath = path.join(privateDir, "models", "ability-softmax-v1.json");
  const model = fs.existsSync(modelPath) ? JSON.parse(fs.readFileSync(modelPath, "utf8")) : null;
  const core = { version: "publication-manifest-v2", generatedAt: new Date().toISOString(), databaseRaces: counts.races,
    completeMonths: status.completeMonths, expectedMonths: status.totalMonths, modelVersion: model?.modelVersion ?? null,
    modelCoverageRaces: model?.dataCoverage?.races ?? null, liveRaceCount: parsedRacecards.raceCount ?? parsedRacecards.results?.length ?? 0,
    liveCandidateCount: parsedModel.candidates?.length ?? 0, livePredictionCount: parsedModel.predictions?.length ?? 0,
    liveRacecardsSha256: sha(liveRacecards), liveModelOutputsSha256: sha(liveModel) };
  const manifest = { ...core, manifestId: sha(Buffer.from(JSON.stringify(core))).slice(0, 20) };
  fs.writeFileSync(path.join(root, "data", "publication-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ status: "ready", manifestId: manifest.manifestId, races: manifest.liveRaceCount,
    predictions: manifest.livePredictionCount, candidates: manifest.liveCandidateCount }, null, 2));
} finally { db.close(); }

function parseBrowserData(text) { return JSON.parse(text.slice(text.indexOf("=") + 1).trim().replace(/;$/, "")); }
function sha(value) { return crypto.createHash("sha256").update(value).digest("hex"); }
