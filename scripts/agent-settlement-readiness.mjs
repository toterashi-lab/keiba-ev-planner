import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const DATABASE_PATH = path.join(resolvePrivateDataDir(ROOT), "keiba.sqlite");
const REQUIRED_AGENT_IDS = ["safety", "sniper", "pace", "analyst", "contrarian"];

export function inspectAgentSettlementReadiness(database) {
  const tables = new Set(database.prepare("select name from sqlite_master where type='table'").all().map((row) => row.name));
  if (!tables.has("agents") || !tables.has("agent_race_scores")) {
    return { status: "awaiting_settlement", reason: "agent_snapshot_schema_not_initialized", requiredAgentIds: REQUIRED_AGENT_IDS, settledAgentIds: [] };
  }
  const activeAgentIds = database.prepare("select agent_id from agents where active=1 order by agent_id").all().map((row) => row.agent_id);
  const settled = database.prepare(`select agent_id,count(*) settled_races,min(scored_at) first_settled_at,max(scored_at) last_settled_at
    from agent_race_scores group by agent_id order by agent_id`).all();
  const settledAgentIds = settled.map((row) => row.agent_id);
  const missingAgentIds = REQUIRED_AGENT_IDS.filter((agentId) => !activeAgentIds.includes(agentId) || !settledAgentIds.includes(agentId));
  return {
    status: missingAgentIds.length ? "awaiting_settlement" : "ready",
    requiredAgentIds: REQUIRED_AGENT_IDS,
    activeAgentIds,
    settledAgentIds,
    missingAgentIds,
    settlements: settled.map((row) => ({ agentId: row.agent_id, settledRaces: Number(row.settled_races), firstSettledAt: row.first_settled_at, lastSettledAt: row.last_settled_at })),
  };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const database = new DatabaseSync(DATABASE_PATH, { readOnly: true });
  database.exec("pragma busy_timeout=30000;");
  try { console.log(JSON.stringify(inspectAgentSettlementReadiness(database), null, 2)); }
  finally { database.close(); }
}
