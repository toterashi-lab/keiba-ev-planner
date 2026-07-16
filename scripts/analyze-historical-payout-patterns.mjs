import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

const DB_PATH = path.join("data", "jra-free-private", "keiba.sqlite");
const OUTPUT_PATH = path.join("data", "historical-payout-patterns.json");
const VALIDATION_FROM = "2020-01-01";
const TARGET_CUTOFF = "2026-07-11";
const MIN_DISCOVERY = 250;
const MIN_VALIDATION = 80;
const PRIOR_STRENGTH = 500;

const db = new DatabaseSync(DB_PATH, { readOnly: true });
try {
  const rows = db.prepare(`
    select r.race_date,r.venue_code,r.race_number,r.race_class,r.surface,r.distance_m,r.weather,r.going,
      p.bet_type,p.payout_yen,
      (select count(*) from complete_race_entries e where e.race_id=r.race_id) field_size
    from complete_payouts p
    join complete_races r on r.race_id=p.race_id
    where r.race_date<? and p.payout_yen>0
    order by r.race_date,r.race_id,p.bet_type,p.selection_key
  `).all(TARGET_CUTOFF).map(enrich);

  const discovery = rows.filter((row) => row.raceDate < VALIDATION_FROM);
  const validation = rows.filter((row) => row.raceDate >= VALIDATION_FROM);
  const thresholds = highPayoutThresholds(discovery);
  const baselines = baselineRates(discovery, validation, thresholds);
  const discoveryGroups = aggregate(discovery, thresholds);
  const validationGroups = aggregate(validation, thresholds);

  const patterns = [...discoveryGroups.entries()].flatMap(([key, group]) => {
    if (group.count < MIN_DISCOVERY) return [];
    const holdout = validationGroups.get(key);
    if (!holdout || holdout.count < MIN_VALIDATION) return [];
    const baseline = baselines[group.betType];
    const discoveryRate = shrink(group.highCount, group.count, baseline.discoveryRate);
    const validationRate = shrink(holdout.highCount, holdout.count, baseline.validationRate);
    const discoveryLift = discoveryRate / baseline.discoveryRate;
    const validationLift = validationRate / baseline.validationRate;
    if (!(discoveryLift > 1 && validationLift > 1)) return [];
    return [{
      betType: group.betType,
      conditions: group.conditions,
      highPayoutThresholdYen: thresholds[group.betType],
      discovery: summarize(group, discoveryRate, discoveryLift),
      validation: summarize(holdout, validationRate, validationLift),
      robustLift: Math.min(discoveryLift, validationLift),
      usePolicy: "volatility_prior_only",
    }];
  }).sort((left, right) =>
    right.robustLift - left.robustLift
    || right.validation.count - left.validation.count
    || left.betType.localeCompare(right.betType)
  );

  const result = {
    status: "research_only",
    generatedAt: new Date().toISOString(),
    source: "JRA official completed race results and payouts",
    leakagePolicy: {
      discovery: `race_date < ${VALIDATION_FROM}`,
      validation: `${VALIDATION_FROM} <= race_date < ${TARGET_CUTOFF}`,
      targetWeekExcluded: true,
    },
    interpretation: "高配当になりやすいレース条件の再現性を測る。的中確率や正の期待値を直接意味しない。",
    policy: {
      highPayoutDefinition: "券種別discovery期間の払戻上位10%",
      minimumDiscoveryRows: MIN_DISCOVERY,
      minimumValidationRows: MIN_VALIDATION,
      empiricalBayesPriorStrength: PRIOR_STRENGTH,
      acceptedOnlyWhenBothPeriodsLiftAboveOne: true,
    },
    coverage: {
      totalRows: rows.length,
      discoveryRows: discovery.length,
      validationRows: validation.length,
      earliestDate: rows[0]?.raceDate ?? null,
      latestDate: rows.at(-1)?.raceDate ?? null,
      betTypes: Object.keys(thresholds),
    },
    thresholds,
    baselines,
    patterns: patterns.slice(0, 200),
  };
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(result, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({
    output: OUTPUT_PATH,
    coverage: result.coverage,
    acceptedPatterns: result.patterns.length,
    topPatterns: result.patterns.slice(0, 10),
  }, null, 2));
} finally {
  db.close();
}

function enrich(row) {
  return {
    raceDate: row.race_date,
    betType: row.bet_type,
    payoutYen: Number(row.payout_yen),
    conditions: [
      ["venue", String(row.venue_code)],
      ["surface", clean(row.surface)],
      ["distance", distanceBucket(row.distance_m)],
      ["field", fieldBucket(row.field_size)],
      ["raceBand", raceBand(row.race_number)],
      ["going", clean(row.going)],
      ["weather", clean(row.weather)],
      ["class", classBucket(row.race_class)],
    ].filter(([, value]) => value),
  };
}

function highPayoutThresholds(rows) {
  const grouped = groupBy(rows, (row) => row.betType);
  return Object.fromEntries([...grouped].map(([betType, values]) =>
    [betType, percentile(values.map((row) => row.payoutYen), 0.9)]));
}

function baselineRates(discovery, validation, thresholds) {
  const result = {};
  for (const betType of Object.keys(thresholds)) {
    const left = discovery.filter((row) => row.betType === betType);
    const right = validation.filter((row) => row.betType === betType);
    result[betType] = {
      discoveryCount: left.length,
      validationCount: right.length,
      discoveryRate: rate(left, thresholds[betType]),
      validationRate: rate(right, thresholds[betType]),
    };
  }
  return result;
}

function aggregate(rows, thresholds) {
  const groups = new Map();
  for (const row of rows) {
    const conditions = row.conditions.map(([name, value]) => `${name}=${value}`);
    const combinations = [
      ...conditions.map((condition) => [condition]),
      ...pairs(conditions),
    ];
    for (const selected of combinations) {
      const key = `${row.betType}|${selected.join("&")}`;
      if (!groups.has(key)) groups.set(key, {
        betType: row.betType,
        conditions: selected,
        count: 0,
        highCount: 0,
        payoutTotal: 0,
        payouts: [],
      });
      const group = groups.get(key);
      group.count += 1;
      group.highCount += row.payoutYen >= thresholds[row.betType] ? 1 : 0;
      group.payoutTotal += row.payoutYen;
      group.payouts.push(row.payoutYen);
    }
  }
  return groups;
}

function summarize(group, posteriorRate, lift) {
  return {
    count: group.count,
    highPayoutCount: group.highCount,
    observedRate: group.highCount / group.count,
    posteriorRate,
    lift,
    averagePayoutYen: group.payoutTotal / group.count,
    medianPayoutYen: percentile(group.payouts, 0.5),
  };
}

function shrink(successes, count, baselineRate) {
  return (successes + PRIOR_STRENGTH * baselineRate) / (count + PRIOR_STRENGTH);
}

function rate(rows, threshold) {
  return rows.length ? rows.filter((row) => row.payoutYen >= threshold).length / rows.length : 0;
}

function pairs(values) {
  const result = [];
  for (let left = 0; left < values.length; left += 1) {
    for (let right = left + 1; right < values.length; right += 1) {
      result.push([values[left], values[right]]);
    }
  }
  return result;
}

function groupBy(values, key) {
  const result = new Map();
  for (const value of values) {
    const id = key(value);
    if (!result.has(id)) result.set(id, []);
    result.get(id).push(value);
  }
  return result;
}

function percentile(values, probability) {
  if (!values.length) return null;
  const sorted = [...values].sort((left, right) => left - right);
  const index = Math.min(sorted.length - 1, Math.floor((sorted.length - 1) * probability));
  return sorted[index];
}

function distanceBucket(value) {
  const distance = Number(value);
  if (!(distance > 0)) return null;
  if (distance <= 1200) return "sprint";
  if (distance <= 1600) return "mile";
  if (distance <= 2200) return "middle";
  return "long";
}

function fieldBucket(value) {
  const size = Number(value);
  if (!(size > 0)) return null;
  if (size <= 7) return "small";
  if (size <= 12) return "medium";
  return "large";
}

function raceBand(value) {
  const number = Number(value);
  if (!(number > 0)) return null;
  if (number <= 4) return "early";
  if (number <= 8) return "middle";
  return "late";
}

function classBucket(value) {
  const text = clean(value);
  if (!text) return null;
  if (/新馬/.test(text)) return "maiden_debut";
  if (/未勝利/.test(text)) return "maiden";
  if (/障害/.test(text)) return "jump";
  if (/G[ⅠI1]|重賞|オープン|OP/.test(text)) return "open_graded";
  return "conditions";
}

function clean(value) {
  const text = String(value ?? "").trim();
  return text && text !== "-" ? text : null;
}
