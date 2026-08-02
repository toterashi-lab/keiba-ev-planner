(function attachAgentForecastEngine(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.KEIBA_AGENT_FORECAST_ENGINE = api;
}(typeof window !== "undefined" ? window : globalThis, () => {
  const DEFINITIONS = Object.freeze([
    { agentId: "safety", id: "agent_safety", personaTone: "safety", method: "能力を強め、一致している馬を加点" },
    { agentId: "sniper", id: "agent_sniper", personaTone: "sniper", method: "実力の下限を守り、総合順位が低い馬を加点" },
    { agentId: "pace", id: "agent_pace", personaTone: "pace", method: "展開評価を最優先。欠ける日はコース評価の順位差で補完" },
    { agentId: "analyst", id: "agent_analyst", personaTone: "analyst", method: "コース・距離・騎手などのデータ評価を最優先" },
    { agentId: "contrarian", id: "agent_contrarian", personaTone: "contrarian", method: "評価集中を減点し、根拠が残る別候補を加点" },
  ]);

  function buildAgents(prediction) {
    if (!prediction?.marks?.length) return {};
    const sources = sourceMaps(prediction);
    const horses = horseRows(prediction, sources);
    return Object.fromEntries(DEFINITIONS.map((definition) => {
      const scored = horses.map((horse) => ({ ...horse, score: agentScore(definition.agentId, horse, sources) }))
        .sort((left, right) => right.score - left.score || left.horseNumber - right.horseNumber)
        .slice(0, 5)
        .map((horse, index) => ({ mark: ["◎", "○", "▲", "△", "☆"][index], horseNumber: horse.horseNumber,
          horseName: horse.horseName, score: horse.score, probability: horse.probability || undefined }));
      const paceProxy = definition.agentId === "pace" && !sources.pace.available;
      return [definition.agentId, { ...definition, status: "available", confidence: paceProxy ? .62 : .78,
        derived: true, proxy: paceProxy, marks: scored, opinion: definition.method }];
    }));
  }

  function sourceMaps(prediction) {
    const panels = prediction.forecastPanel ?? [];
    return {
      base: rankedMap(prediction.allHorseProbabilities?.length ? prediction.allHorseProbabilities : (prediction.marks ?? []), "probability"),
      ability: panelMap(panels, "agent_ability"),
      pace: panelMap(panels, "agent_pace"),
      data: panelMap(panels, "agent_data"),
    };
  }

  function panelMap(panels, id) {
    const panel = panels.find((row) => row.id === id && row.status === "available" && row.marks?.length);
    return panel ? { available: true, values: rankedMap(panel.marks, "score") } : { available: false, values: new Map() };
  }

  function rankedMap(rows, valueKey) {
    const maximum = Math.max(...rows.map((row) => Number(row[valueKey]) || 0), 0);
    return new Map(rows.map((row, index) => {
      const numeric = maximum > 0 ? (Number(row[valueKey]) || 0) / maximum : 0;
      const rank = Math.max(0, 1 - index * .18);
      return [Number(row.horseNumber), { value: numeric * .65 + rank * .35, horseName: row.horseName,
        probability: Number(row.probability) || 0, rank: index + 1 }];
    }));
  }

  function horseRows(prediction, sources) {
    const rows = new Map();
    const add = (number, value) => {
      const key = Number(number);
      if (!(key > 0)) return;
      const current = rows.get(key) ?? { horseNumber: key, horseName: value?.horseName ?? "", probability: 0 };
      if (!current.horseName && value?.horseName) current.horseName = value.horseName;
      if (value?.probability) current.probability = value.probability;
      rows.set(key, current);
    };
    for (const horse of prediction.allHorseProbabilities ?? []) add(horse.horseNumber, horse);
    for (const mark of prediction.marks ?? []) add(mark.horseNumber, mark);
    for (const source of Object.values(sources)) {
      const map = source instanceof Map ? source : source.values;
      for (const [number, value] of map) add(number, value);
    }
    return [...rows.values()].map((horse) => {
      const base = valueOf(sources.base, horse.horseNumber);
      const ability = valueOf(sources.ability.values, horse.horseNumber) || base;
      const data = valueOf(sources.data.values, horse.horseNumber);
      const pace = valueOf(sources.pace.values, horse.horseNumber);
      const active = [ability, data, pace].filter((value) => value > 0);
      const support = active.length / 3;
      const disagreement = active.length > 1 ? Math.max(...active) - Math.min(...active) : .25;
      const competence = Math.max(ability, data, pace, base);
      return { ...horse, base, ability, data, pace, support, disagreement, competence, longshot: 1 - base };
    });
  }

  function agentScore(agentId, horse, sources) {
    if (agentId === "safety") return .45 * horse.base + .35 * horse.ability + .15 * horse.support + .05 * horse.data;
    if (agentId === "analyst") return sources.data.available
      ? .45 * horse.data + .35 * horse.base + .15 * horse.ability + .05 * horse.support
      : .72 * horse.base + .23 * horse.ability + .05 * horse.support;
    if (agentId === "pace") return sources.pace.available
      ? .45 * horse.pace + .32 * horse.base + .15 * horse.ability + .05 * horse.data + .03 * horse.competence * horse.longshot
      : sources.data.available
        ? .38 * horse.data + .32 * horse.base + .20 * horse.ability + .10 * horse.disagreement
        : .75 * horse.ability + .15 * horse.base + .10 * horse.disagreement;
    if (agentId === "sniper") return .42 * horse.base + .32 * horse.competence + .14 * horse.competence * horse.longshot
      + .12 * horse.disagreement;
    return .38 * horse.base + .34 * horse.competence + .16 * horse.disagreement
      + .12 * horse.competence * horse.longshot - .04 * horse.support;
  }

  function valueOf(map, horseNumber) { return Number(map?.get(Number(horseNumber))?.value) || 0; }

  return { DEFINITIONS, buildAgents };
}));
