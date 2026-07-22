import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { inspectAgentSettlementReadiness } from "./agent-settlement-readiness.mjs";

const ids = ["safety", "sniper", "pace", "analyst", "contrarian"];
const database = new DatabaseSync(":memory:");
database.exec("create table agents(agent_id text primary key,active integer not null); create table agent_race_scores(agent_id text,scored_at text);");
for (const id of ids) database.prepare("insert into agents values(?,1)").run(id);
assert.equal(inspectAgentSettlementReadiness(database).status, "awaiting_settlement");
for (const id of ids) database.prepare("insert into agent_race_scores values(?,?)").run(id, "2026-07-20T12:00:00+09:00");
const ready = inspectAgentSettlementReadiness(database);
assert.equal(ready.status, "ready");
assert.equal(ready.settlements.length, 5);
database.close();
console.log(JSON.stringify({ status: "pass", requiredAgents: ids.length, readiness: ready.status }, null, 2));
