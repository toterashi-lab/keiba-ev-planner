import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { isPreRaceObservation } from "./race-time.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DATABASE_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const INPUT_PATH = path.join(PRIVATE_DIR, "models", "live-market-ev.json");
const AGENT_NAMES = { agent_ability: "能力AI", agent_pace: "展開AI", agent_data: "データAI", agent_value: "穴馬AI", agent_odds: "オッズAI" };

export function initializePredictionSnapshotSchema(database) {
  database.exec(`create table if not exists prediction_publications(
    id integer primary key,race_id text not null,model_version text not null,prediction_context text not null,
    published_at text not null,odds_observed_at text,content_hash text not null unique,created_at text not null);
  create table if not exists prediction_agent_snapshots(
    publication_id integer not null references prediction_publications(id),agent_id text not null,agent_name text not null,status text not null,
    confidence real not null,marks_json text not null,opinion text not null,primary key(publication_id,agent_id));
  create table if not exists prediction_master_snapshots(
    publication_id integer primary key references prediction_publications(id),marks_json text not null,consensus_json text not null,comment text not null);
  create table if not exists prediction_ticket_snapshots(
    id integer primary key,publication_id integer not null references prediction_publications(id),rank integer not null,bet_type text not null,
    method text not null,selection_display text not null,ticket_keys_json text not null,points integer not null check(points between 1 and 5),
    unit_stake_yen integer not null check(unit_stake_yen=100),total_investment_yen integer not null,expected_return real,decision_status text not null,
    unique(publication_id,bet_type,rank));
  create trigger if not exists prediction_publications_no_update before update on prediction_publications begin select raise(abort,'prediction publications are append-only'); end;
  create trigger if not exists prediction_publications_no_delete before delete on prediction_publications begin select raise(abort,'prediction publications are append-only'); end;
  create trigger if not exists prediction_agents_no_update before update on prediction_agent_snapshots begin select raise(abort,'prediction snapshots are append-only'); end;
  create trigger if not exists prediction_agents_no_delete before delete on prediction_agent_snapshots begin select raise(abort,'prediction snapshots are append-only'); end;
  create trigger if not exists prediction_master_no_update before update on prediction_master_snapshots begin select raise(abort,'prediction snapshots are append-only'); end;
  create trigger if not exists prediction_master_no_delete before delete on prediction_master_snapshots begin select raise(abort,'prediction snapshots are append-only'); end;
  create trigger if not exists prediction_tickets_no_update before update on prediction_ticket_snapshots begin select raise(abort,'prediction snapshots are append-only'); end;
  create trigger if not exists prediction_tickets_no_delete before delete on prediction_ticket_snapshots begin select raise(abort,'prediction snapshots are append-only'); end;`);
}

export function persistPredictionSnapshots(database, output, publishedAt = output.generatedAt) {
  initializePredictionSnapshotSchema(database);
  const races = new Map(database.prepare("select race_id,race_date,start_time from live_races").all().map((row) => [row.race_id, row]));
  const candidatesByRace = group(output.candidates ?? [], "raceId");
  let inserted = 0;
  let skippedTiming = 0;
  for (const prediction of output.predictions ?? []) {
    const race = races.get(prediction.raceId);
    if (!race || !isPreRaceObservation(race.race_date, race.start_time, publishedAt)) { skippedTiming += 1; continue; }
    const payload = snapshotPayload(prediction, candidatesByRace.get(prediction.raceId) ?? [], publishedAt);
    const { publishedAt: _publishedAt, ...hashPayload } = payload;
    const hash = crypto.createHash("sha256").update(stableJson(hashPayload)).digest("hex");
    if (database.prepare("select count(*) count from prediction_publications where content_hash=?").get(hash).count) continue;
    database.exec("begin immediate");
    try {
      const publication = database.prepare(`insert into prediction_publications(race_id,model_version,prediction_context,published_at,odds_observed_at,content_hash,created_at)
        values(?,?,?,?,?,?,?) returning id`).get(prediction.raceId, prediction.modelVersion, prediction.predictionContext ?? "pre_race",
        publishedAt, payload.oddsObservedAt, hash, new Date().toISOString());
      const insertAgent = database.prepare(`insert into prediction_agent_snapshots(publication_id,agent_id,agent_name,status,confidence,marks_json,opinion)
        values(?,?,?,?,?,?,?)`);
      for (const agent of payload.agents) insertAgent.run(publication.id, agent.id, agent.name, agent.status, agent.confidence,
        JSON.stringify(agent.marks), agent.opinion);
      database.prepare("insert into prediction_master_snapshots(publication_id,marks_json,consensus_json,comment) values(?,?,?,?)")
        .run(publication.id, JSON.stringify(payload.marks), JSON.stringify(payload.consensus), payload.comment);
      const insertTicket = database.prepare(`insert into prediction_ticket_snapshots(publication_id,rank,bet_type,method,selection_display,ticket_keys_json,
        points,unit_stake_yen,total_investment_yen,expected_return,decision_status) values(?,?,?,?,?,?,?,?,?,?,?)`);
      for (const ticket of payload.tickets) insertTicket.run(publication.id, ticket.rank, ticket.betType, ticket.method, ticket.selection,
        JSON.stringify(ticket.ticketKeys), ticket.points, 100, ticket.points * 100, ticket.expectedReturn, ticket.decisionStatus);
      database.exec("commit");
      inserted += 1;
    } catch (error) { database.exec("rollback"); throw error; }
  }
  return { inserted, skippedTiming, total: output.predictions?.length ?? 0 };
}

function snapshotPayload(prediction, candidates, publishedAt) {
  const agents = Object.entries(AGENT_NAMES).map(([id, name]) => {
    const row = prediction.forecastPanel?.find((agent) => agent.id === id);
    return { id, name, status: row?.status ?? "unavailable", confidence: Number(row?.confidence ?? 0),
      marks: row?.marks ?? [], opinion: row?.opinion ?? "必要データ待ち" };
  });
  const tickets = [];
  for (const betType of ["単勝", "複勝", "馬連", "ワイド", "3連複", "3連単"]) {
    const rows = candidates.filter((row) => row.betType === betType).sort((a, b) => adoptedReturn(b) - adoptedReturn(a)).slice(0, 5);
    rows.forEach((row, index) => tickets.push({ rank: index + 1, betType, method: row.method ?? "1点", selection: row.selection,
      ticketKeys: (row.componentSelectionKeys ?? row.ticketKeys ?? [row.selection]).slice(0, 5), points: Math.min(5, row.points ?? 1),
      expectedReturn: adoptedReturn(row), decisionStatus: row.recommendationEligible ? "buy" : adoptedReturn(row) >= 1 ? "candidate" : "skip" }));
  }
  return { publishedAt, oddsObservedAt: candidates.map((row) => row.oddsObservedAt).filter(Boolean).sort().at(-1) ?? null,
    raceId: prediction.raceId, modelVersion: prediction.modelVersion, marks: prediction.marks ?? [],
    consensus: prediction.masterConsensus ?? {}, comment: prediction.comment ?? "", agents, tickets };
}

function adoptedReturn(row) { return Number(row.conservativeExpectedReturn ?? row.adoptedExpectedReturn ?? row.abilityExpectedReturn ?? row.marketExpectedReturn ?? 0); }
function group(rows, key) { const map = new Map(); for (const row of rows) { if (!map.has(row[key])) map.set(row[key], []); map.get(row[key]).push(row); } return map; }
function stableJson(value) { if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`; if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`; return JSON.stringify(value); }

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (!fs.existsSync(INPUT_PATH)) throw new Error("ライブ予想成果物がありません");
  const db = new DatabaseSync(DATABASE_PATH);
  db.exec("pragma foreign_keys=on; pragma busy_timeout=30000;");
  try { console.log(JSON.stringify(persistPredictionSnapshots(db, JSON.parse(fs.readFileSync(INPUT_PATH, "utf8"))), null, 2)); }
  finally { db.close(); }
}
