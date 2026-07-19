import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { buildFeatureRows } from "./model-feature-pipeline.mjs";
import { FEATURE_KEYS, predictRace } from "./train-expectancy-model.mjs";
import { resolveLiveTargetDates, resolveStoredRacecardTargetDates } from "./generate-live-market-ev.mjs";
import { loadCompatibleModelArtifact } from "../model/model-artifact-compatibility.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const root = path.resolve(import.meta.dirname, "..");
const privateDir = resolvePrivateDataDir(root);
const databasePath = path.join(privateDir, "keiba.sqlite");
const artifactPaths = [
  path.join(privateDir, "models", "ability-softmax-v1.json"),
  path.join(privateDir, "models", "reference-asof-model.json"),
];
const outputPath = path.join(privateDir, "models", "live-ability-predictions.json");
const requestedDate = process.argv.includes("--date") ? process.argv[process.argv.indexOf("--date") + 1] : null;
const includeBatch = process.argv.includes("--include-batch");

const modelSelection = loadCompatibleModelArtifact(artifactPaths, FEATURE_KEYS);
if (!modelSelection.artifact) {
  const waiting = { status: "waiting_for_compatible_trained_model", generatedAt: new Date().toISOString(), rejected: modelSelection.rejected };
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(waiting, null, 2)}\n`, "utf8");
  console.error(JSON.stringify(waiting));
  process.exit(12);
}
const artifact = modelSelection.artifact;
const db = new DatabaseSync(databasePath);
try {
  const batch = requestedDate ? null : db.prepare("select * from live_racecard_batches where status='complete' and race_count>0 order by id desc limit 1").get();
  const racecardDates = resolveStoredRacecardTargetDates(db, batch);
  const dates = requestedDate ? [requestedDate]
    : includeBatch ? racecardDates
      : resolveLiveTargetDates({ racecardTargetDates: racecardDates, today: tokyoDate() });
  if (!dates.length) {
    console.log(JSON.stringify({ status: "no_upcoming_racecards" }));
    process.exit(0);
  }
  const rows = buildFeatureRows(db, { from: dates[0], to: dates.at(-1), completeOnly: true, includeLive: true, emitHistorical: false });
  const dateSet = new Set(dates);
  const races = groupRaces(rows).filter((race) => dateSet.has(race.date));
  if (!races.length) throw new Error(`ライブ特徴量がありません: ${dates.join(",")}`);
  initializeSchema(db);
  const generatedAt = new Date().toISOString();
  const predictions = [];
  db.exec("begin immediate");
  try {
    const insert = db.prepare(`insert into live_predictions(race_id,horse_id,model_version,as_of_time,win_probability,history_starts,features_json,created_at)
      values(?,?,?,?,?,?,?,?) on conflict(race_id,horse_id,model_version,as_of_time) do update set
      win_probability=excluded.win_probability,history_starts=excluded.history_starts,features_json=excluded.features_json,created_at=excluded.created_at`);
    for (const race of races) {
      const probabilities = predictRace(artifact, race, artifact.temperature);
      const sum = probabilities.reduce((total, value) => total + value, 0);
      if (Math.abs(1 - sum) > 1e-6) throw new Error(`${race.id}の勝率合計が1ではありません: ${sum}`);
      race.rows.forEach((row, index) => {
        const historyStarts = Math.max(0, Math.round(Number(row.features.careerStarts) || 0));
        insert.run(race.id, row.horseId, artifact.modelVersion, row.asOfTime, probabilities[index], historyStarts,
          JSON.stringify(row.features), generatedAt);
        predictions.push({ raceId: race.id, raceDate: race.date, horseId: row.horseId, horseNumber: row.features.horseNumber,
          probability: probabilities[index], historyStarts, asOfTime: row.asOfTime });
      });
    }
    db.exec("commit");
  } catch (error) { db.exec("rollback"); throw error; }
  const output = { status: "ready", generatedAt, targetDates: dates, modelVersion: artifact.modelVersion,
    modelArtifactPath: modelSelection.artifactPath, researchProbabilityStatus: artifact.researchProbabilityStatus,
    races: races.length, entries: predictions.length, predictions };
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ ...output, predictions: undefined }, null, 2));
} finally { db.close(); }

function groupRaces(rows) {
  const grouped = [];
  for (let start = 0; start < rows.length;) {
    let end = start + 1;
    while (end < rows.length && rows[end].raceId === rows[start].raceId) end += 1;
    const raceRows = rows.slice(start, end);
    grouped.push({ id: raceRows[0].raceId, date: raceRows[0].raceDate, rows: raceRows, winnerIndex: -1 });
    start = end;
  }
  return grouped;
}

function initializeSchema(db) {
  db.exec(`create table if not exists live_predictions(
    race_id text not null,horse_id text not null,model_version text not null,as_of_time text not null,
    win_probability real not null check(win_probability between 0 and 1),history_starts integer not null default 0 check(history_starts>=0),features_json text,created_at text not null,
    primary key(race_id,horse_id,model_version,as_of_time)
  )`);
  const columns = new Set(db.prepare("pragma table_info(live_predictions)").all().map((row) => row.name));
  if (!columns.has("history_starts")) db.exec("alter table live_predictions add column history_starts integer not null default 0 check(history_starts>=0)");
  if (!columns.has("features_json")) db.exec("alter table live_predictions add column features_json text");
}

function tokyoDate() { return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date()); }
