import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { buildFeatureRows } from "./model-feature-pipeline.mjs";
import { predictRace } from "./train-expectancy-model.mjs";

const databasePath = path.join("data", "jra-free-private", "keiba.sqlite");
const artifactPath = path.join("data", "jra-free-private", "models", "ability-softmax-v1.json");
const outputPath = path.join("data", "jra-free-private", "models", "live-ability-predictions.json");
const requestedDate = process.argv.includes("--date") ? process.argv[process.argv.indexOf("--date") + 1] : null;

if (!fs.existsSync(artifactPath)) {
  console.log(JSON.stringify({ status: "waiting_for_trained_model" }));
  process.exit(0);
}
const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
const db = new DatabaseSync(databasePath);
try {
  const date = requestedDate ?? db.prepare("select min(race_date) date from live_races where race_date>=?").get(tokyoDate()).date;
  if (!date) {
    console.log(JSON.stringify({ status: "no_upcoming_racecards" }));
    process.exit(0);
  }
  const rows = buildFeatureRows(db, { from: date, to: date, completeOnly: true, includeLive: true, emitHistorical: false });
  const races = groupRaces(rows);
  if (!races.length) throw new Error(`ライブ特徴量がありません: ${date}`);
  initializeSchema(db);
  const generatedAt = new Date().toISOString();
  const predictions = [];
  db.exec("begin immediate");
  try {
    const insert = db.prepare(`insert into live_predictions(race_id,horse_id,model_version,as_of_time,win_probability,created_at)
      values(?,?,?,?,?,?) on conflict(race_id,horse_id,model_version,as_of_time) do update set win_probability=excluded.win_probability,created_at=excluded.created_at`);
    for (const race of races) {
      const probabilities = predictRace(artifact, race, artifact.temperature);
      const sum = probabilities.reduce((total, value) => total + value, 0);
      if (Math.abs(1 - sum) > 1e-6) throw new Error(`${race.id}の勝率合計が1ではありません: ${sum}`);
      race.rows.forEach((row, index) => {
        insert.run(race.id, row.horseId, artifact.modelVersion, row.asOfTime, probabilities[index], generatedAt);
        predictions.push({ raceId: race.id, raceDate: date, horseId: row.horseId, horseNumber: row.features.horseNumber, probability: probabilities[index], asOfTime: row.asOfTime });
      });
    }
    db.exec("commit");
  } catch (error) { db.exec("rollback"); throw error; }
  const output = { status: "ready", generatedAt, raceDate: date, modelVersion: artifact.modelVersion, researchProbabilityStatus: artifact.researchProbabilityStatus, races: races.length, entries: predictions.length, predictions };
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
    win_probability real not null check(win_probability between 0 and 1),created_at text not null,
    primary key(race_id,horse_id,model_version,as_of_time)
  )`);
}

function tokyoDate() { return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date()); }
