import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const root = path.resolve(import.meta.dirname, "..");
const privateDir = resolvePrivateDataDir(root);
const inputPath = path.join(privateDir, "models", "live-market-ev.json");
const outputPath = path.join(root, "data", "live-model-outputs.js");

if (!fs.existsSync(inputPath)) throw new Error("今週のAI予想成果物がありません");
const output = JSON.parse(fs.readFileSync(inputPath, "utf8"));
if (output.status !== "ready") throw new Error(`今週のAI予想が完成していません: ${output.status}`);
if (!Array.isArray(output.predictions) || output.predictions.length !== output.predictionCoverage?.targetRaces) {
  throw new Error(`全レース予想件数が一致しません: ${output.predictions?.length ?? 0}/${output.predictionCoverage?.targetRaces ?? 0}`);
}

const db = new DatabaseSync(path.join(privateDir, "keiba.sqlite"), { readOnly: true });
try {
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
} finally { db.close(); }

fs.writeFileSync(outputPath, `window.KEIBA_LIVE_MODEL_OUTPUTS = ${JSON.stringify(output, null, 2)};\n`, "utf8");
console.log(JSON.stringify({
  status: "ready",
  targetDates: output.targetDates,
  predictedRaces: output.predictions.length,
  candidates: output.candidates?.length ?? 0,
  outputPath,
}, null, 2));
