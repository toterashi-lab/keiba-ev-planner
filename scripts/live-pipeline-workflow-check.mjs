import fs from "node:fs";

checkOrder("scripts/sync-jra-live-racecards.ps1", [
  '"scripts\\jra-live-racecards.mjs" capture',
  '"scripts\\predict-live-racecards.mjs"',
  '"scripts\\generate-live-market-ev.mjs"',
  '"publish-live-web.ps1"',
]);
checkOrder("scripts/capture-jra-live-odds.ps1", [
  '"scripts\\predict-live-racecards.mjs"',
  '"scripts\\generate-live-market-ev.mjs"',
  '"publish-live-web.ps1"',
]);
checkOrder("scripts/publish-live-web.ps1", [
  '"scripts\\generate-live-market-ev.mjs"',
  '"scripts\\live-market-ev-check.mjs"',
  '"scripts\\build-public-demo.mjs"',
  "git push origin main",
]);

const liveCheck = fs.readFileSync("scripts/live-market-ev-check.mjs", "utf8");
for (const token of ["fixtureOutputDirectory", "fixtureOutputPath", "outputPath: fixtureOutputPath"]) {
  if (!liveCheck.includes(token)) throw new Error(`Live fixture output isolation is missing: ${token}`);
}
console.log(JSON.stringify({ status: "pass", workflows: 3, fixtureOutputIsolation: true }, null, 2));

function checkOrder(file, tokens) {
  const source = fs.readFileSync(file, "utf8");
  let previous = -1;
  for (const token of tokens) {
    const position = source.indexOf(token, previous + 1);
    if (position < 0) throw new Error(`${file}: token is missing or out of order: ${token}`);
    previous = position;
  }
}
