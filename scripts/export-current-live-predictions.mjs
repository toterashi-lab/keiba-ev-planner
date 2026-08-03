import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const root = path.resolve(import.meta.dirname, "..");
const privateDir = resolvePrivateDataDir(root);
const inputPath = path.join(privateDir, "models", "live-market-ev.json");
const outputPath = path.join(root, "data", "live-model-outputs.js");

if (!fs.existsSync(inputPath)) throw new Error("今週のAI予想成果物がありません");
const db = new DatabaseSync(path.join(privateDir, "keiba.sqlite"), { readOnly: true });
try {
  let output = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  if (output.status !== "ready") output = loadSettledWeekFallback(db, outputPath, output.status);
  if (!Array.isArray(output.predictions) || output.predictions.length !== output.predictionCoverage?.targetRaces) {
    throw new Error(`全レース予想件数が一致しません: ${output.predictions?.length ?? 0}/${output.predictionCoverage?.targetRaces ?? 0}`);
  }
  const hasPublications = db.prepare("select count(*) count from sqlite_master where type='table' and name='prediction_publications'").get().count === 1;
  if (hasPublications) {
    const rows = db.prepare(`select race_id,model_version,min(published_at) published_at from prediction_publications
      group by race_id,model_version`).all();
    const saved = new Map(rows.map((row) => [`${row.race_id}|${row.model_version}`, row.published_at]));
    output.predictions = output.predictions.map((prediction) => {
      const publishedAt = saved.get(`${prediction.raceId}|${prediction.modelVersion}`);
      return publishedAt ? { ...prediction, predictionContext: "pre_race", publishedAt } : prediction;
    });
  }
  fs.writeFileSync(outputPath, `window.KEIBA_LIVE_MODEL_OUTPUTS = ${JSON.stringify(output, null, 2)};\n`, "utf8");
  console.log(JSON.stringify({
    status: "ready",
    targetDates: output.targetDates,
    predictedRaces: output.predictions.length,
    candidates: output.candidates?.length ?? 0,
    settledWeekFallback: output.settledWeekFallback === true,
    outputPath,
  }, null, 2));
} finally { db.close(); }

function loadSettledWeekFallback(database, publicOutputPath, waitingStatus) {
  if (!fs.existsSync(publicOutputPath)) throw new Error(`今週のAI予想が完成していません: ${waitingStatus}`);
  const batch = database.prepare("select id from live_racecard_batches where status='complete' order by id desc limit 1").get();
  const races = batch ? database.prepare(`select r.race_id,r.race_date,
    exists(select 1 from complete_races c where c.race_id=r.race_id) settled
    from live_races r where r.batch_id=? order by r.race_id`).all(batch.id) : [];
  if (!races.length || races.some((race) => !race.settled)) {
    throw new Error(`今週のAI予想が完成していません: ${waitingStatus}`);
  }
  const existing = parseWindowAssignment(fs.readFileSync(publicOutputPath, "utf8"));
  const expectedRaceIds = new Set(races.map((race) => race.race_id));
  const existingRaceIds = new Set((existing.predictions ?? []).map((prediction) => prediction.raceId));
  if (existing.status !== "ready" || existingRaceIds.size !== expectedRaceIds.size
    || [...expectedRaceIds].some((raceId) => !existingRaceIds.has(raceId))) {
    throw new Error("確定週の保存済みAI予想と最新出馬表が一致しません");
  }
  return {
    ...existing,
    settledWeekFallback: true,
    settledWeekFallbackAt: new Date().toISOString(),
    settledWeekFallbackReason: "全対象レース確定済みのため保存済み予想を維持",
    targetDates: [...new Set(races.map((race) => race.race_date))],
  };
}

function parseWindowAssignment(source) {
  const start = source.indexOf("=");
  const end = source.lastIndexOf(";");
  if (start < 0 || end <= start) throw new Error("保存済みAI予想の形式が不正です");
  return JSON.parse(source.slice(start + 1, end).trim());
}
