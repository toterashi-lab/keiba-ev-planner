import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const indexPath = path.join(root, "index.html");
const inputs = ["styles.css", "league.css", "app.js", "ticket-engine.js", "forecast-policy.js",
  "agent-forecast-engine.js", "league-system.js", "data/live-racecards.js", "data/live-model-outputs.js",
  "data/live-replay-audit.js", "data/agent-performance.js", "data/database-status.js",
  "data/model-feature-coverage.js", "data/historical-payout-patterns.js"];
const hash = crypto.createHash("sha256");
for (const input of inputs) hash.update(fs.readFileSync(path.join(root, input)));
const version = hash.digest("hex").slice(0, 12);
const source = fs.readFileSync(indexPath, "utf8");
const output = source.replace(/((?:href|src)="(?:styles|league)\.css)(?:\?v=[^"]*)?"/g, `$1?v=${version}"`)
  .replace(/((?:href|src)="(?:app|ticket-engine|forecast-policy|agent-forecast-engine|league-system)\.js)(?:\?v=[^"]*)?"/g,
    `$1?v=${version}"`)
  .replace(/(src="data\/(?:database-status|model-feature-coverage|historical-payout-patterns|live-racecards|live-model-outputs|live-replay-audit|agent-performance)\.js)(?:\?v=[^"]*)?"/g,
    `$1?v=${version}"`);
if (output !== source) fs.writeFileSync(indexPath, output, "utf8");
console.log(JSON.stringify({ status: output === source ? "current" : "updated", version, files: inputs.length }, null, 2));
