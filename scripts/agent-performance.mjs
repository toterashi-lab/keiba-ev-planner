import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { initializePredictionSnapshotSchema } from "./prediction-snapshot.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DATABASE_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const OUTPUT_JSON = path.join(PRIVATE_DIR, "models", "agent-performance.json");
const OUTPUT_JS = path.join(ROOT, "data", "agent-performance.js");

export function evaluateAgentPerformance(database) {
  initializePredictionSnapshotSchema(database);
  const publications = database.prepare(`select p.*,coalesce(l.race_date,r.race_date) race_date
    from prediction_publications p left join live_races l on l.race_id=p.race_id left join races r on r.race_id=p.race_id
    order by p.race_id,p.published_at`).all();
  const latest = [...new Map(publications.map((row) => [row.race_id, row])).values()];
  const records = [];
  for (const publication of latest) {
    const finishRows = database.prepare("select horse_id,finish_position from complete_race_results where race_id=?").all(publication.race_id);
    if (!finishRows.length) continue;
    const entries = database.prepare("select horse_id,horse_number from complete_race_entries where race_id=?").all(publication.race_id);
    const numberByHorse = new Map(entries.map((row) => [row.horse_id, Number(row.horse_number)]));
    const finishByNumber = new Map(finishRows.map((row) => [numberByHorse.get(row.horse_id), Number(row.finish_position) || null]));
    const podium = new Set([...finishByNumber].filter(([, finish]) => finish >= 1 && finish <= 3).map(([horseNumber]) => horseNumber));
    const winPayouts = new Map(database.prepare("select selection_key,payout_yen from complete_payouts where race_id=? and bet_type='win'").all(publication.race_id)
      .map((row) => [String(row.selection_key), Number(row.payout_yen)]));
    const agents = database.prepare("select * from prediction_agent_snapshots where publication_id=?").all(publication.id);
    for (const agent of agents) {
      const marks = JSON.parse(agent.marks_json);
      if (!marks.length || agent.status !== "available") continue;
      const honmei = Number(marks[0].horseNumber);
      const marked = new Set(marks.slice(0, 5).map((row) => Number(row.horseNumber)));
      records.push(record(publication, agent.agent_id.replace("agent_", ""), marks, finishByNumber, podium,
        100, winPayouts.get(String(honmei)) ?? 0, `${honmei} 単勝`));
    }
    const master = database.prepare("select * from prediction_master_snapshots where publication_id=?").get(publication.id);
    if (!master) continue;
    const masterMarks = JSON.parse(master.marks_json);
    const tickets = database.prepare("select * from prediction_ticket_snapshots where publication_id=? order by expected_return desc,bet_type,rank").all(publication.id);
    const ticket = tickets[0] ?? null;
    const payout = ticket ? ticketPayout(database, publication.race_id, ticket) : 0;
    records.push(record(publication, "master", masterMarks, finishByNumber, podium, ticket?.total_investment_yen ?? 0, payout,
      ticket ? `${ticket.bet_type} ${ticket.selection_display}` : "見送り"));
  }
  return { generatedAt: new Date().toISOString(), policy: { agentTicket: "each_agent_honmei_win_100_yen", masterTicket: "published_top_ticket_only",
    postPublicationMutation: "forbidden" }, records };
}

function record(publication, agentId, marks, finishByNumber, podium, investmentYen, payoutYen, recommendation) {
  const honmei = Number(marks[0]?.horseNumber);
  const marked = new Set(marks.slice(0, 5).map((row) => Number(row.horseNumber)));
  return { publicationId: publication.id, raceId: publication.race_id, raceDate: publication.race_date, publishedAt: publication.published_at,
    agentId, honmeiHorseNumber: honmei || null, honmeiFinish: finishByNumber.get(honmei) ?? null,
    markFinish: podium.size > 0 && [...podium].every((horseNumber) => marked.has(horseNumber)), recommendation,
    recommendationHit: payoutYen > 0, investmentYen, payoutYen, netYen: payoutYen - investmentYen,
    roi: investmentYen ? payoutYen / investmentYen : null };
}

function ticketPayout(database, raceId, ticket) {
  const keys = JSON.parse(ticket.ticket_keys_json);
  if (!keys.length) return 0;
  const rows = database.prepare(`select selection_key,payout_yen from complete_payouts where race_id=? and bet_type=?`).all(raceId, typeKey(ticket.bet_type));
  const payouts = new Map(rows.map((row) => [canonical(row.selection_key, ticket.bet_type), Number(row.payout_yen)]));
  return keys.reduce((sum, key) => sum + (payouts.get(canonical(key, ticket.bet_type)) ?? 0), 0);
}

function typeKey(label) { return ({ "単勝": "win", "複勝": "place", "馬連": "quinella", "ワイド": "wide", "馬単": "exacta", "3連複": "trio", "3連単": "trifecta" })[label] ?? label; }
function canonical(value, betType) { const parts = String(value).match(/\d+/g)?.map(Number) ?? []; if (["馬連", "ワイド", "3連複"].includes(betType)) parts.sort((a, b) => a - b); return parts.join("-"); }

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const db = new DatabaseSync(DATABASE_PATH);
  db.exec("pragma foreign_keys=on; pragma busy_timeout=30000;");
  try {
    const output = evaluateAgentPerformance(db);
    fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
    fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`, "utf8");
    fs.writeFileSync(OUTPUT_JS, `window.KEIBA_AGENT_PERFORMANCE = ${JSON.stringify(output, null, 2)};\n`, "utf8");
    console.log(JSON.stringify({ status: "ready", records: output.records.length, output: OUTPUT_JS }, null, 2));
  } finally { db.close(); }
}
