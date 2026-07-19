(function attachForecastPolicy(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.KEIBA_FORECAST_POLICY = api;
}(typeof window !== "undefined" ? window : globalThis, () => {
  const BET_TYPES = ["単勝", "複勝", "馬連", "ワイド", "3連複", "3連単"];

  function buildForecastTickets(prediction, unitStakeYen = 100) {
    const marks = uniqueMarks(prediction?.marks ?? []);
    if (marks.length < 3) return [];
    const [first, second, third, fourth = third] = marks.map((row) => Number(row.horseNumber));
    const definitions = [
      ["単勝", [[first]]],
      ["複勝", [[first]]],
      ["馬連", [[first, second]]],
      ["ワイド", [[first, second], [first, third]]],
      ["3連複", uniqueKeys([[first, second, third], [first, second, fourth], [first, third, fourth]], false)],
      ["3連単", uniqueKeys([[first, second, third], [first, third, second], [second, first, third], [second, third, first], [third, first, second]], true)],
    ];
    return definitions.map(([betType, selections]) => ({
      betType,
      method: selections.length > 1 ? "フォーメーション" : "1点",
      selection: ticketKey(selections[0]),
      ticketKeys: selections.slice(0, 5).map(ticketKey),
      points: Math.min(5, selections.length),
      totalInvestmentYen: Math.min(5, selections.length) * unitStakeYen,
      status: "forecast",
      forecastOnly: true,
      recommendationEligible: false,
      calculationMode: "ability_forecast_without_market_ev",
      comment: "5人のAI合議順位から組み立てた予想買い目。オッズ未取得時は期待値判定に使用しません。",
    }));
  }

  function volatilityProfile({ race, prediction, consensus, candidates = [] }) {
    const probabilities = (prediction?.marks ?? []).map((row) => Number(row.probability)).filter((value) => value > 0 && value < 1);
    const favorite = probabilities[0] ?? 0.2;
    const favoriteRisk = 1 - clamp((favorite - 0.18) / 0.52);
    const residual = Math.max(0, 1 - probabilities.reduce((sum, value) => sum + value, 0));
    const buckets = residual > 0.001 ? [...probabilities, residual] : probabilities;
    const entropy = normalizedEntropy(buckets);
    const available = (prediction?.forecastPanel ?? []).filter((agent) => agent.persona === true && agent.status === "available" && agent.marks?.[0]);
    const uniqueTops = new Set(available.map((agent) => Number(agent.marks[0].horseNumber))).size;
    const voteSplit = available.length > 1 ? (uniqueTops - 1) / (available.length - 1) : 0.5;
    const missingAgents = Math.max(0, 5 - available.length) / 5;
    const disagreement = clamp(voteSplit * 0.7 + missingAgents * 0.3 + (consensus?.split ? 0.1 : 0));
    const fieldSize = Number(prediction?.fieldSize) || fieldSizeFromComment(prediction?.comment) || Number(race?.fieldSize) || 10;
    const fieldRisk = clamp((fieldSize - 7) / 11);
    const payoutLift = Math.max(1, ...candidates.map((row) => Number(row.payoutVolatilityPrior?.lift) || 1));
    const payoutRisk = clamp((payoutLift - 1) / 0.6);
    const missingOdds = candidates.length ? 0 : 1;
    const score = Math.round(100 * clamp(favoriteRisk * 0.38 + disagreement * 0.27 + entropy * 0.18
      + fieldRisk * 0.08 + payoutRisk * 0.05 + missingOdds * 0.04));
    const level = Math.max(1, Math.min(5, Math.ceil((score + 1) / 20)));
    const labels = ["堅め", "やや堅め", "混戦", "荒れ注意", "大荒れ警戒"];
    const factors = [
      favorite >= 0.5 ? "本命集中" : favorite < 0.3 ? "本命分散" : "本命拮抗",
      disagreement >= 0.55 ? "AI意見割れ" : "AI見解近め",
      fieldSize >= 14 ? `${fieldSize}頭立て` : null,
      payoutRisk >= 0.35 ? "高配当傾向" : null,
      missingOdds ? "オッズ未反映" : null,
    ].filter(Boolean).slice(0, 3);
    return { score, level, label: labels[level - 1], factors, favoriteProbability: favorite, disagreement, fieldSize };
  }

  function primaryForecastTicket(tickets, volatility) {
    const preferred = volatility.level <= 2 ? "単勝" : volatility.level === 3 ? "ワイド" : "3連複";
    return tickets.find((row) => row.betType === preferred) ?? tickets[0] ?? null;
  }

  function uniqueMarks(rows) {
    return [...new Map(rows.filter((row) => Number(row.horseNumber) > 0).map((row) => [Number(row.horseNumber), row])).values()];
  }
  function uniqueKeys(selections, ordered) {
    const seen = new Set();
    return selections.filter((selection) => {
      const normalized = ordered ? selection : [...selection].sort((a, b) => a - b);
      if (new Set(normalized).size !== normalized.length) return false;
      const key = ticketKey(normalized);
      if (seen.has(key)) return false;
      seen.add(key);
      selection.splice(0, selection.length, ...normalized);
      return true;
    });
  }
  function ticketKey(selection) { return selection.join("-"); }
  function fieldSizeFromComment(comment) { return Number(String(comment ?? "").match(/全(\d+)頭/)?.[1]) || 0; }
  function normalizedEntropy(values) {
    if (values.length < 2) return 0;
    const total = values.reduce((sum, value) => sum + value, 0);
    if (!(total > 0)) return 1;
    const entropy = values.reduce((sum, value) => { const p = value / total; return sum - p * Math.log(p); }, 0);
    return clamp(entropy / Math.log(values.length));
  }
  function clamp(value) { return Math.max(0, Math.min(1, Number(value) || 0)); }

  return { BET_TYPES, buildForecastTickets, volatilityProfile, primaryForecastTicket };
}));
