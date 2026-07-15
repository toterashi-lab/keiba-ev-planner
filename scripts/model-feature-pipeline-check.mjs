import { DatabaseSync } from "node:sqlite";
import { buildFeatureRows } from "./model-feature-pipeline.mjs";

const database = new DatabaseSync(":memory:");
database.exec(`
  create table races(race_id text, race_date text, venue_code text, race_number integer, race_name text, race_class text, surface text, distance_m integer, direction text, weather text, going text, start_time text);
  create table race_entries(race_id text, horse_id text, horse_number integer, gate_number integer, sex_age text, carried_weight real, body_weight integer, body_weight_delta integer, jockey_id text, trainer_id text);
  create table race_results(race_id text, horse_id text, finish_position integer, final_sectional real, corner_positions text, popularity integer);
  insert into races values ('r1','2026-01-01','05',1,'テスト未勝利','未勝利','芝',1600,'芝・左','晴','良','10:00'),('r2','2026-02-01','05',2,'テスト(GII)','1勝クラス','芝',1600,'芝・左 外','雨','稍重','10:30');
  insert into race_entries values ('r1','h1',1,1,'牡3',56,470,0,'j1','t1'),('r1','h2',2,2,'牝3',54,450,0,'j2','t2'),('r2','h1',3,3,'牡3',57,474,4,'j1','t1'),('r2','h2',4,4,'牝3',55,452,2,'j2','t2');
  insert into race_results values ('r1','h1',1,34.1,'1-1',1),('r1','h2',2,34.0,'2-2',2),('r2','h1',2,35.0,'2-2',1),('r2','h2',1,34.8,'1-1',2);
`);
const rows = buildFeatureRows(database, { from: "2026-02-01", to: "2026-02-01" });
if (rows.length !== 2) throw new Error(`対象行数が不正です: ${rows.length}`);
const h1 = rows.find((row) => row.horseId === "h1");
if (h1.features.careerStarts !== 1 || h1.features.priorWinRate !== 1) throw new Error("過去レース集計が不正です");
if (h1.features.daysSinceLastRace !== 31) throw new Error(`休養日数が不正です: ${h1.features.daysSinceLastRace}`);
if (h1.features.venue05 !== 1 || h1.features.distanceM !== 1600 || h1.features.startHour !== 10
  || h1.features.directionLeft !== 1 || h1.features.directionOuter !== 1 || h1.features.weatherRain !== 1
  || h1.features.goingYielding !== 1 || h1.features.raceClassLevel !== 6 || h1.features.sexMale !== 1) {
  throw new Error(`レース条件特徴量が不正です: ${JSON.stringify(h1.features)}`);
}
if (h1.lineage.lastHistoricalRaceDate !== "2026-01-01" || !h1.lineage.targetResultExcludedFromFeatures) throw new Error("時点整合性が不正です");
if ("finishPosition" in h1.features || "popularity" in h1.features) throw new Error("対象レース結果が特徴量へ混入しました");
console.log(JSON.stringify({ rows: rows.length, careerStarts: h1.features.careerStarts, priorWinRate: h1.features.priorWinRate,
  daysSinceLastRace: h1.features.daysSinceLastRace, venue05: h1.features.venue05, weatherRain: h1.features.weatherRain,
  goingYielding: h1.features.goingYielding, raceClassLevel: h1.features.raceClassLevel, leakage: "pass" }, null, 2));
database.close();
