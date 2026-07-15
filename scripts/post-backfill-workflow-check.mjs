import fs from "node:fs";

const file = "scripts/run-post-backfill-pipeline.ps1";
const source = fs.readFileSync(file, "utf8");
const ordered = [
  '"scripts\\jra-free-db.mjs" status',
  "if ($pending -gt 0)",
  "exit 0",
  '"scripts\\jra-free-db.mjs" audit',
  '"scripts\\audit-field-availability.mjs"',
  '"scripts\\train-expectancy-model.mjs"',
  '"scripts\\model-freshness.mjs"',
  '"scripts\\finish-order-probabilities-check.mjs"',
  '"scripts\\train-reference-asof-model.mjs"',
  '"scripts\\generate-market-ev.mjs"',
  '"scripts\\evaluate-reference-ev.mjs"',
  '"scripts\\generate-market-ev.mjs"',
  '"scripts\\predict-live-racecards.mjs"',
  '"scripts\\generate-live-market-ev.mjs"',
  '"scripts\\train-expectancy-model-check.mjs"',
  '"scripts\\train-expectancy-model-unit-check.mjs"',
  '"scripts\\market-ev-check.mjs"',
  '"scripts\\reference-asof-model-check.mjs"',
  '"scripts\\live-market-ev-check.mjs"',
  '"scripts\\evaluate-live-ev-ledger.mjs"',
  '"scripts\\live-ev-ledger-check.mjs"',
  '"publish-web-status.ps1"',
  '"scripts\\goal-completion-audit.mjs" --require-complete',
];

let previous = -1;
for (const token of ordered) {
  const position = source.indexOf(token, previous + 1);
  if (position < 0) throw new Error(`${file}: token is missing or out of order: ${token}`);
  previous = position;
}
for (const token of ["$needsTraining", "if ($LASTEXITCODE -eq 10)", "New model is stale against the current database"]) {
  if (!source.includes(token)) throw new Error(`${file}: model freshness gate is missing: ${token}`);
}

console.log(JSON.stringify({ status: "pass", orderedSteps: ordered.length, modelFreshnessGate: true }, null, 2));
