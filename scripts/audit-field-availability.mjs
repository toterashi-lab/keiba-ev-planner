import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DATABASE = path.join(PRIVATE_DIR, "keiba.sqlite");
const OUTPUT = path.join(PRIVATE_DIR, "models", "field-availability-audit.json");

const db = new DatabaseSync(DATABASE, { readOnly: true });
db.exec("PRAGMA busy_timeout=30000;");
db.exec("BEGIN");

try {
  const rawRaceCache = {
    rows: new Map(),
    verified: new Set(),
    maxEntries: 256,
  };
  const fields = [
    {
      field: "body_weight",
      condition: "e.body_weight is null",
      sourceClass: "h_weight",
    },
    {
      field: "popularity",
      condition: "x.popularity is null",
      sourceClass: "pop",
    },
    {
      field: "official_time",
      condition: "x.official_time is null or trim(x.official_time)=''",
      sourceClass: "time",
    },
  ].map(({ field, condition, sourceClass }) => {
    const rows = db.prepare(`select coalesce(nullif(trim(x.finish_text),''),'(blank)') finishText,
      count(*) rows, count(distinct e.race_id) races,
      min(r.race_date) firstDate, max(r.race_date) lastDate
      from complete_race_entries e
      join complete_race_results x on x.race_id=e.race_id and x.horse_id=e.horse_id
      join complete_races r on r.race_id=e.race_id
      where ${condition}
      group by coalesce(nullif(trim(x.finish_text),''),'(blank)')
      order by rows desc, finishText`).all();
    const missing = db.prepare(`select r.race_date raceDate, e.race_id raceId, e.horse_id horseId,
      e.horse_number horseNumber, h.name horseName, x.finish_text finishText,
      p.raw_path rawPath, p.source_url sourceUrl
      from complete_race_entries e
      join horses h on h.horse_id=e.horse_id
      join complete_race_results x on x.race_id=e.race_id and x.horse_id=e.horse_id
      join complete_races r on r.race_id=e.race_id
      join raw_pages p on p.id=r.source_page_id
      where ${condition}
      order by r.race_date,e.race_id,e.horse_number`).all();
    const parserMissing = [];
    const unavailableSourceValues = new Map();
    for (const row of missing) {
      const sourceRows = loadRawRaceRows(row.rawPath, rawRaceCache);
      const sourceRow = sourceRows.byHorseId.get(row.horseId)
        ?? sourceRows.byHorseNumber.get(row.horseNumber);
      const sourceHorseName = sourceRow ? stripHtml(cell(sourceRow, "horse")) : null;
      const sourceIdentityMatches = sourceRow
        && normalizeName(sourceHorseName) === normalizeName(row.horseName);
      const verifiedSourceRow = sourceIdentityMatches ? sourceRow : null;
      const sourceValue = verifiedSourceRow ? stripHtml(cell(verifiedSourceRow, sourceClass)) : null;
      if (isUsableSourceValue(sourceClass, sourceValue)) {
        parserMissing.push({ ...row, sourceValue, sourceRowFound: Boolean(verifiedSourceRow) });
      } else {
        const label = verifiedSourceRow ? (sourceValue || "(blank)") : "(source row missing)";
        unavailableSourceValues.set(label, (unavailableSourceValues.get(label) ?? 0) + 1);
      }
    }
    return {
      field,
      missingRows: rows.reduce((sum, row) => sum + row.rows, 0),
      officiallyUnavailableRows: missing.length - parserMissing.length,
      parserMissingRows: parserMissing.length,
      unavailableSourceValues: Object.fromEntries([...unavailableSourceValues.entries()].sort((left, right) => right[1] - left[1])),
      byFinishText: rows,
      parserMissingSamples: parserMissing.slice(0, 10),
    };
  });
  const report = {
    version: "field-availability-audit-v1",
    checkedAt: new Date().toISOString(),
    pass: fields.every((field) => field.parserMissingRows === 0),
    completeRunners: db.prepare("select count(*) rows from complete_race_entries").get().rows,
    rawRacePagesVerified: rawRaceCache.verified.size,
    fields,
  };
  db.exec("COMMIT");
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(report, null, 2));
  if (!report.pass) process.exitCode = 2;
} finally {
  db.close();
}

function loadRawRaceRows(relativePath, cache) {
  if (cache.rows.has(relativePath)) {
    const cached = cache.rows.get(relativePath);
    cache.rows.delete(relativePath);
    cache.rows.set(relativePath, cached);
    return cached;
  }
  const absolutePath = path.join(PRIVATE_DIR, relativePath);
  const html = zlib.gunzipSync(fs.readFileSync(absolutePath)).toString("utf8");
  const byHorseId = new Map();
  const byHorseNumber = new Map();
  for (const match of html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const row = match[1];
    const horseId = cell(row, "horse").match(/pw01dud([^/'"]+)/)?.[1];
    const horseNumber = Number(stripHtml(cell(row, "num")));
    if (horseId) byHorseId.set(horseId, row);
    if (Number.isInteger(horseNumber) && horseNumber > 0) byHorseNumber.set(horseNumber, row);
  }
  const rows = { byHorseId, byHorseNumber };
  cache.verified.add(relativePath);
  cache.rows.set(relativePath, rows);
  while (cache.rows.size > cache.maxEntries) {
    cache.rows.delete(cache.rows.keys().next().value);
  }
  return rows;
}

function normalizeName(value) {
  return String(value ?? "").normalize("NFKC").replace(/\s+/g, "").trim();
}

function cell(row, className) {
  return row.match(new RegExp(`<td[^>]*class="${className}"[^>]*>([\\s\\S]*?)<\\/td>`))?.[1] ?? "";
}

function stripHtml(value) {
  return String(value ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

function isUsableSourceValue(sourceClass, value) {
  if (value === null) return true;
  if (sourceClass === "time") return value !== "";
  const numeric = String(value).replaceAll(",", "").replace(/[^\d.+-]/g, "").trim();
  return numeric !== "" && Number.isFinite(Number(numeric));
}
