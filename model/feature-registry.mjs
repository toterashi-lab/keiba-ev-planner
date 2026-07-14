export const FEATURE_GROUPS = [
  group("race_context", "レース条件", "race", "entry", ["races.venue_code", "races.surface", "races.distance_m", "races.direction", "races.race_class", "races.start_time"],
    ["競馬場", "芝・ダート・障害", "距離", "回り", "クラス", "頭数", "季節", "発走時間"]),
  group("weather_going", "天候・馬場状態", "condition", "race_day", ["races.weather", "races.going"],
    ["天候", "良・稍重・重・不良", "馬場変化", "同日内バイアス"]),
  group("course_geometry", "コース形状", "course", "static", [],
    ["直線長", "高低差", "コーナー数", "坂", "スタート位置", "最初のコーナーまで"], "planned"),
  group("track_measurements", "馬場計測", "condition", "race_day", [],
    ["含水率", "クッション値", "芝丈", "使用コース", "散水・凍結防止剤"], "planned"),
  group("horse_form", "馬の近走能力", "horse", "prior_races", ["race_results.finish_position", "race_results.official_time", "race_results.final_sectional", "race_results.corner_positions", "races.race_date"],
    ["休養日数", "近走着順", "走破時計", "上がり", "位置取り", "成長・衰退", "安定度"]),
  group("horse_suitability", "条件適性", "horse", "prior_races", ["races.venue_code", "races.surface", "races.distance_m", "races.going", "race_results.finish_position"],
    ["競馬場適性", "距離適性", "芝ダ適性", "道悪適性", "右左回り適性"]),
  group("pace_shape", "展開・脚質", "competition", "prior_races", ["race_results.corner_positions", "race_results.final_sectional", "race_entries.horse_number"],
    ["逃げ先行差し追込", "先行馬密度", "想定ペース", "位置取り変化", "末脚持続性"]),
  group("body_load", "馬体・負担重量", "horse", "race_day", ["race_entries.sex_age", "race_entries.carried_weight", "race_entries.body_weight", "race_entries.body_weight_delta"],
    ["性齢", "斤量", "馬体重", "増減", "斤量体重比", "前走比"]),
  group("connections", "騎手・調教師", "people", "prior_races", ["race_entries.jockey_id", "race_entries.trainer_id", "race_results.finish_position"],
    ["騎手成績", "調教師成績", "コンビ成績", "競馬場別", "距離別", "馬場別", "直近調子"]),
  group("pedigree", "血統", "horse", "entry", [],
    ["父", "母父", "系統", "産駒距離適性", "馬場適性", "初コース補完"], "planned"),
  group("training", "調教・ローテーション", "horse", "pre_race", [],
    ["追切時計", "調教コース", "併せ内容", "間隔", "輸送", "連闘", "放牧明け"], "planned"),
  group("market", "市場オッズ", "market", "pre_race", ["odds_snapshots.bet_type", "odds_snapshots.odds", "odds_snapshots.observed_at", "odds_snapshots.selection_key"],
    ["単複", "馬連", "ワイド", "馬単", "3連複", "3連単", "時系列変動", "市場確率", "過剰人気"]),
  group("field_strength", "相手関係", "competition", "pre_race", ["race_entries.race_id", "race_results.finish_position", "race_results.popularity"],
    ["出走馬能力分布", "上位差", "混戦度", "クラス変動", "メンバー強度"]),
  group("external_weather", "気象実測", "condition", "pre_race", [],
    ["気温", "降水量", "風向", "風速", "湿度", "日照"], "planned"),
  group("changes", "直前変更", "operations", "pre_race", [],
    ["取消・除外", "騎手変更", "馬体重発表", "発走時刻変更", "発売停止"], "planned"),
];

export const FORBIDDEN_TARGET_FIELDS = [
  "target.finish_position", "target.official_time", "target.final_sectional", "target.corner_positions",
  "target.popularity", "target.payout", "target.closing_odds_observed_after_cutoff",
];

export function auditFeatureRegistry(database) {
  const tableColumns = new Map(database.prepare("select name from sqlite_master where type='table'").all().map(({ name }) => [
    name, new Set(database.prepare(`pragma table_info(${name})`).all().map(({ name: column }) => column)),
  ]));
  const groups = FEATURE_GROUPS.map((feature) => {
    const checks = feature.requirements.map((requirement) => {
      const [table, column] = requirement.split(".");
      return { requirement, available: tableColumns.get(table)?.has(column) ?? false };
    });
    const available = checks.filter((check) => check.available).length;
    const status = feature.defaultStatus === "planned" ? "missing" : available === checks.length ? "ready" : available ? "partial" : "missing";
    return { ...feature, checks, availableRequirements: available, totalRequirements: checks.length, coverage: checks.length ? available / checks.length : 0, status };
  });
  return {
    version: "feature-registry-v1",
    generatedAt: new Date().toISOString(),
    groups,
    readyGroups: groups.filter((group) => group.status === "ready").length,
    partialGroups: groups.filter((group) => group.status === "partial").length,
    missingGroups: groups.filter((group) => group.status === "missing").length,
    forbiddenTargetFields: FORBIDDEN_TARGET_FIELDS,
  };
}

function group(id, label, category, availableAt, requirements, examples, defaultStatus = "derived") {
  return { id, label, category, availableAt, requirements, examples, defaultStatus };
}
