import { DatabaseSync } from "node:sqlite";
import { buildFeatureRows } from "./model-feature-pipeline.mjs";

const database = new DatabaseSync(":memory:");
database.exec(`
  create table races(race_id text, race_date text, venue_code text, race_number integer, race_name text, race_class text, surface text, distance_m integer, direction text, weather text, going text, start_time text);
  create table race_entries(race_id text, horse_id text, horse_number integer, gate_number integer, sex_age text, carried_weight real, body_weight integer, body_weight_delta integer, jockey_id text, trainer_id text);
  create table race_results(race_id text, horse_id text, finish_position integer, final_sectional real, corner_positions text, popularity integer);
  insert into races values ('r1','2026-01-01','05',1,'テスト未勝利','未勝利','芝',1600,'芝・左','晴','良','10:00'),('r2','2026-02-01','05',2,'テスト(GII)','1勝クラス','芝',1600,'芝・左 外','雨','稍重','10:30');
  insert into race_entries values ('r1','h1',1,1,'牡3',56,470,0,'j1','t1'),('r1','h2',2,2,'牝3',54,450,0,'j2','t2'),('r2','h1',3,3,'牡3',57,474,4,'j1','t1'),('r2','h2',4,4,'牝3',55,452,2,'j2','t2');
  insert into race_results values ('r1','h1',1,34.1,'[1,1]',1),('r1','h2',2,34.0,'2-1',2),('r2','h1',2,35.0,'2-2',1),('r2','h2',1,34.8,'1-1',2);
`);
const rows = buildFeatureRows(database, { from: "2026-02-01", to: "2026-02-01" });
if (rows.length !== 2) throw new Error(`対象行数が不正です: ${rows.length}`);
const h1 = rows.find((row) => row.horseId === "h1");
const h2 = rows.find((row) => row.horseId === "h2");
if (h1.features.paceHistoryStarts !== 1 || h1.features.priorAverageEarlyPositionPercentile !== 1
  || h1.features.priorAverageLateCornerPositionPercentile !== 1 || h1.features.priorAveragePositionGain !== 0
  || h1.features.frontRunnerRate !== 1 || h1.features.recent3EarlyPositionPercentile !== 1) {
  throw new Error(`Prior corner-position pace features are invalid: ${JSON.stringify(h1.features)}`);
}
if (h2.features.priorAverageEarlyPositionPercentile !== 0
  || h2.features.priorAverageLateCornerPositionPercentile !== 1
  || h2.features.priorAveragePositionGain !== 1 || h2.features.recent3PositionGain !== 1) {
  throw new Error(`Corner-position gain features are invalid: ${JSON.stringify(h2.features)}`);
}
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

database.exec(`
  insert into races values
    ('late','2026-03-01','01',1,'late','test','芝',1600,'右','晴','良','11時00分'),
    ('early','2026-03-01','10',1,'early','test','芝',1600,'右','晴','良','9時50分'),
    ('same-a','2026-04-01','03',1,'same-a','test','芝',1600,'右','晴','良','12時00分'),
    ('same-b','2026-04-01','04',1,'same-b','test','芝',1600,'右','晴','良','12時00分');
  insert into race_entries values
    ('late','h3',1,1,'牡3',56,470,0,'j3','t3'),('late','h4',2,2,'牝3',54,450,0,'j4','t4'),
    ('early','h3',1,1,'牡3',56,470,0,'j3','t3'),('early','h4',2,2,'牝3',54,450,0,'j4','t4'),
    ('same-a','h5',1,1,'牡3',56,470,0,'j5','t5'),('same-a','h6',2,2,'牝3',54,450,0,'j6','t6'),
    ('same-b','h5',1,1,'牡3',56,470,0,'j5','t5'),('same-b','h6',2,2,'牝3',54,450,0,'j6','t6');
  insert into race_results values
    ('late','h3',1,34.0,'1-1',1),('late','h4',2,35.0,'2-2',2),
    ('early','h3',2,35.0,'2-2',2),('early','h4',1,34.0,'1-1',1),
    ('same-a','h5',1,34.0,'1-1',1),('same-a','h6',2,35.0,'2-2',2),
    ('same-b','h5',2,35.0,'2-2',2),('same-b','h6',1,34.0,'1-1',1);
`);
const chronologyRows = buildFeatureRows(database, { from: "2026-03-01", to: "2026-04-01" });
const earlyH3 = chronologyRows.find((row) => row.raceId === "early" && row.horseId === "h3");
const lateH3 = chronologyRows.find((row) => row.raceId === "late" && row.horseId === "h3");
if (earlyH3.features.careerStarts !== 0 || earlyH3.features.paceHistoryStarts !== 0
  || lateH3.features.careerStarts !== 1 || lateH3.features.paceHistoryStarts !== 1 || lateH3.features.priorWinRate !== 0) {
  throw new Error(`同日他場の発走時刻順が守られていません: ${JSON.stringify({ early: earlyH3.features, late: lateH3.features })}`);
}
if (earlyH3.lineage.historyCutoffExclusive !== "2026-03-01T09:50:00+09:00"
  || lateH3.lineage.lastHistoricalRaceTime !== "2026-03-01T09:50:00+09:00") {
  throw new Error(`発走時刻の正規化が不正です: ${JSON.stringify({ early: earlyH3.lineage, late: lateH3.lineage })}`);
}
const sameTimeRows = chronologyRows.filter((row) => ["same-a", "same-b"].includes(row.raceId) && row.horseId === "h5");
if (sameTimeRows.length !== 2 || sameTimeRows.some((row) => row.features.careerStarts !== 0 || row.features.paceHistoryStarts !== 0)) {
  throw new Error(`同時刻レース間で結果が混入しています: ${JSON.stringify(sameTimeRows.map((row) => row.features.careerStarts))}`);
}
database.close();
