import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const root = path.resolve(import.meta.dirname, "..");
const db = new DatabaseSync(path.join(resolvePrivateDataDir(root), "keiba.sqlite"), { readOnly: true });
try {
  const source = db.prepare(`select * from historical_odds_external_sources
    where source_name='takamotoki/JRA Horse Racing Dataset'`).get();
  if (!source || source.license !== "CC BY 4.0" || !/^[a-f0-9]{64}$/.test(source.payload_sha256)
    || source.rejected_races !== 0 || source.matched_races !== 13735 || source.matched_prices !== 175455) {
    throw new Error("Kaggle historical odds source metadata is incomplete");
  }
  const coverage = db.prepare(`select count(distinct o.race_id) races,count(*) prices
    from historical_win_place_odds o join complete_races r on r.race_id=o.race_id
    where r.race_date between '1996-01-01' and '1999-12-31' and o.win_odds is not null`).get();
  const mismatches = db.prepare(`select count(*) count from complete_races r
    where r.race_date between '1996-01-01' and '1999-12-31' and (
      (select count(*) from complete_race_entries e join complete_race_results x
        on x.race_id=e.race_id and x.horse_id=e.horse_id
        where e.race_id=r.race_id and coalesce(x.finish_text,'') not in ('取消','除外'))
      <> (select count(*) from historical_win_place_odds o where o.race_id=r.race_id and o.win_odds is not null)
    )`).get().count;
  if (coverage.races !== source.matched_races || coverage.prices !== source.matched_prices || mismatches !== 0) {
    throw new Error("Kaggle historical odds runner coverage does not match official results");
  }
  console.log(JSON.stringify({ status: "pass", races: coverage.races, prices: coverage.prices,
    runnerSetMismatches: mismatches, payloadSha256: source.payload_sha256, license: source.license }, null, 2));
} finally {
  db.close();
}
