import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { evaluateLiveEvLedger } from "./evaluate-live-ev-ledger.mjs";

const database = new DatabaseSync(":memory:");
const outputPath = path.join(os.tmpdir(), `live-ev-ledger-${process.pid}.json`);
try {
  database.exec(`
    create table complete_races(race_id text primary key,race_date text not null);
    create table complete_payouts(race_id text,bet_type text,selection_key text,payout_yen integer);
    create table live_races(race_id text primary key,start_time text);
    create table model_runs(id integer primary key,model_version text);
    create table model_quality_gates(model_run_id integer,gate_name text,status text,metric_value real,threshold_value real,details_json text,checked_at text,primary key(model_run_id,gate_name));
    create table live_ev_candidates(
      id integer primary key,race_id text,snapshot_kind text,base_batch_id integer,exotic_batch_id integer,model_version text,
      calibration_status text,bet_type text,method text,selection_display text,ticket_key text,component_selection_keys_json text,
      component_odds_json text,component_market_probabilities_json text,component_ability_probabilities_json text,
      points integer,total_investment_yen integer,expected_return real,odds_observed_at text,generated_at text,
      unique(race_id,base_batch_id,exotic_batch_id,model_version,bet_type,method,ticket_key));
    insert into complete_races values('r1','2026-01-03'),('r2','2026-01-04');
    insert into live_races values('r1','12:00'),('r2','12:00');
    insert into complete_payouts values('r1','単勝','1',300),('r2','馬連','1-3',500);
    insert into model_runs values(1,'research-model');
  `);
  const insert = database.prepare(`insert into live_ev_candidates values(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
  insert.run('r1', 'pre_race', 1, 2, 'research-model', 'research_pass', '単勝', '1点', '1', '1', '["1"]', '[3]', '[0.3]', '[0.4]', 1, 100, 1.2, '2026-01-03T02:58:00Z', '2026-01-03T02:58:05Z');
  insert.run('r2', 'pre_race', 3, 4, 'research-model', 'research_pass', '馬連', 'BOX', '1-2-3 BOX', '1-2|1-3', '["1-2","1-3"]', '[4,5]', '[0.2,0.2]', '[0.25,0.25]', 2, 200, 1.3, '2026-01-04T02:58:00Z', '2026-01-04T02:58:05Z');
  insert.run('r1', 'pre_race', 1, 2, 'market-baseline', 'benchmark', '単勝', '1点', '2', '2', '["2"]', '[10]', '[0.1]', '[0.1]', 1, 100, 2.0, '2026-01-03T02:58:00Z', '2026-01-03T02:58:05Z');

  const report = evaluateLiveEvLedger({ database, outputPath });
  if (report.status !== 'evaluated' || report.recommendations !== 2) throw new Error(`recommendation selection failed: ${JSON.stringify(report)}`);
  if (report.metrics.bets !== 3 || report.metrics.investmentYen !== 300 || report.metrics.payoutYen !== 800) {
    throw new Error(`100-yen settlement failed: ${JSON.stringify(report.metrics)}`);
  }
  if (report.metrics.oddsFreshnessP95Seconds !== 120 || report.coverage.ratio !== 1) throw new Error('timing audit failed');
  const evaluations = database.prepare('select count(*) count from live_ev_evaluations').get().count;
  const gates = database.prepare('select count(*) count from model_quality_gates where model_run_id=1').get().count;
  if (evaluations !== 3 || gates !== 10) throw new Error(`ledger persistence failed: evaluations=${evaluations}, gates=${gates}`);
  const emptyDatabase = new DatabaseSync(":memory:");
  try {
    emptyDatabase.exec("create table complete_races(race_id text primary key,race_date text not null);");
    const emptyReport = evaluateLiveEvLedger({ database: emptyDatabase, outputPath });
    if (emptyReport.status !== "insufficient" || emptyReport.storedCandidates !== 0) throw new Error(`empty live data handling failed: ${JSON.stringify(emptyReport)}`);
  } finally { emptyDatabase.close(); }
  console.log(JSON.stringify({ status: 'pass', recommendations: report.recommendations, evaluations, gates, metrics: report.metrics }, null, 2));
} finally {
  database.close();
  fs.rmSync(outputPath, { force: true });
}
