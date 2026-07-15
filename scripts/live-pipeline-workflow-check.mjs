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
  '"scripts\\audit-field-availability.mjs"',
  '"scripts\\build-public-demo.mjs"',
  "git push origin main",
  "git fetch origin main --quiet",
  'if ($localCommit -ne $remoteCommit)',
  "$remoteLiveRacecardsSha256",
  "$remoteLiveModelOutputsSha256",
  '($candidate.manifestId -eq $manifest.manifestId)',
  '"models\\publication-receipt.json"',
]);

const liveCheck = fs.readFileSync("scripts/live-market-ev-check.mjs", "utf8");
for (const token of ["fixtureOutputDirectory", "fixtureOutputPath", "outputPath: fixtureOutputPath"]) {
  if (!liveCheck.includes(token)) throw new Error(`Live fixture output isolation is missing: ${token}`);
}
const racecardSource = fs.readFileSync("scripts/jra-live-racecards.mjs", "utf8");
for (const token of ["capturedDates", "set target_dates=?", "dates: capturedDates"]) {
  if (!racecardSource.includes(token)) throw new Error(`Captured race dates are not persisted: ${token}`);
}
const predictorSource = fs.readFileSync("scripts/predict-live-racecards.mjs", "utf8");
if (!predictorSource.includes("resolveStoredRacecardTargetDates")) throw new Error("Prediction target-date recovery is missing");
const liveTaskInstaller = fs.readFileSync("scripts/install-live-odds-task.ps1", "utf8");
for (const token of ["-WindowMinutes 7", "KeibaEV-JRA-Live-Odds-Offset", "$index -lt 48", "OffsetMinutes = 5", "AddMinutes(10)"]) {
  if (!liveTaskInstaller.includes(token)) throw new Error(`Five-minute odds capture schedule is missing: ${token}`);
}
console.log(JSON.stringify({
  status: "pass",
  workflows: 3,
  fixtureOutputIsolation: true,
  verifiedLivePublication: true,
  capturedTargetDatesPersisted: true,
  fiveMinuteOddsCadence: true,
}, null, 2));

function checkOrder(file, tokens) {
  const source = fs.readFileSync(file, "utf8");
  let previous = -1;
  for (const token of tokens) {
    const position = source.indexOf(token, previous + 1);
    if (position < 0) throw new Error(`${file}: token is missing or out of order: ${token}`);
    previous = position;
  }
}
