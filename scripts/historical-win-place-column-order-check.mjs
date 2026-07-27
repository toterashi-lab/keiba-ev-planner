import fs from "node:fs";

const source = fs.readFileSync("scripts/jra-historical-win-place-odds.mjs", "utf8");
for (const token of [
  "race_id,horse_number,win_odds,place_odds_low,place_odds_high,observed_at,source_page_id,time_basis",
  'page.fetchedAt, page.id, "historical_closing_reference"',
  "repair-foreign-key",
]) {
  if (!source.includes(token)) throw new Error(`historical odds column-order protection missing: ${token}`);
}
console.log(JSON.stringify({ status: "pass", insertColumns: "explicit", repairCommand: true }));
