import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import { AGENT_DEFINITIONS } from "../model/agent-system.mjs";
import { initializeAgentSystemSchema, registerAgents } from "./agent-system-store.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";
const root=path.resolve(import.meta.dirname,"..");const databasePath=path.join(resolvePrivateDataDir(root),"keiba.sqlite");const db=new DatabaseSync(databasePath);db.exec("pragma foreign_keys=on; pragma busy_timeout=30000;");try{initializeAgentSystemSchema(db);registerAgents(db,AGENT_DEFINITIONS);console.log(JSON.stringify({status:"ready",databasePath,agents:AGENT_DEFINITIONS.length},null,2));}finally{db.close();}
