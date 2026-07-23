import fs from "node:fs";

const resultRunner = fs.readFileSync("scripts/run-jra-free-backfill.ps1", "utf8");
const oddsRunner = fs.readFileSync("scripts/run-historical-win-place-odds-backfill.ps1", "utf8");
const installer = fs.readFileSync("scripts/install-jra-free-backfill-task.ps1", "utf8");
const database = fs.readFileSync("scripts/jra-free-db.mjs", "utf8");
for (const [name, source] of Object.entries({ resultRunner, oddsRunner, installer })) {
  if (!source.includes("DelayMs = 1000") && !source.includes("-DelayMs 1000")) throw new Error(`${name} is not configured for the 1 second profile`);
}
if (!database.includes("runQueue(Number(options.limit ?? 1), Number(options.delay ?? 1000))")) {
  throw new Error("direct result backfill command does not use the 1 second profile");
}
console.log(JSON.stringify({ status: "pass", requestDelayMs: 1000, concurrency: 1, retries: 12 }));
