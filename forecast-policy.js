(function attachForecastPolicy(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.KEIBA_FORECAST_POLICY = api;
}(typeof window !== "undefined" ? window : globalThis, () => {
  const BET_TYPES = ["単勝", "馬連", "3連複"];

  function buildForecastTickets(prediction, unitStakeYen = 100) {
    const marks = uniqueMarks(prediction?.marks ?? []);
    if (!marks.length) return [];
    const numbers = marks.slice(0, 5).map((row) => Number(row.horseNumber));
    const [first] = numbers;
    const quinellaSelections = rankedQuinellaSelections(marks.slice(0, 5), 5);
    const definitions = [
      ["単勝", [first], [[first]]],
      ["馬連", numbers, quinellaSelections],
      ["3連複", numbers, combinations(numbers, 3)],
    ].filter(([, , selections]) => selections.length);
    return definitions.map(([betType, horses, selections]) => ({
      betType,
      method: betType === "単勝" ? "1点" : betType === "馬連" ? "期待順5点" : "5頭BOX",
      selection: betType === "単勝" ? ticketKey(selections[0]) : betType === "馬連"
        ? selections.map(ticketKey).join(" / ") : `${horses.join("-")} BOX`,
      ticketKeys: selections.map(ticketKey),
      points: selections.length,
      totalInvestmentYen: selections.length * unitStakeYen,
      status: "forecast",
      forecastOnly: true,
      recommendationEligible: false,
      calculationMode: "ability_forecast_without_market_ev",
      expectationStatus: betType === "馬連" ? "agent_score_without_quinella_odds" : "forecast_score",
      comment: betType === "単勝" ? "1番目の馬を100円で選びます。" : betType === "馬連"
        ? "発走前の馬連オッズがないため、エージェントの独立スコアで上位5組を選びます。金額期待値ではありません。"
        : `上位${horses.length}頭の3連複BOXです。各点100円で購入します。`,
    }));
  }

  function rankedQuinellaSelections(marks, limit = 5) {
    const maximum = Math.max(...marks.map((mark, index) => markStrength(mark, index)), 0);
    return combinations(marks.map((mark) => Number(mark.horseNumber)), 2).map((selection) => {
      const leftIndex = marks.findIndex((mark) => Number(mark.horseNumber) === selection[0]);
      const rightIndex = marks.findIndex((mark) => Number(mark.horseNumber) === selection[1]);
      const left = markStrength(marks[leftIndex], leftIndex) / (maximum || 1);
      const right = markStrength(marks[rightIndex], rightIndex) / (maximum || 1);
      return { selection, score: left * right + .08 * (left + right) };
    }).sort((left, right) => right.score - left.score || ticketKey(left.selection).localeCompare(ticketKey(right.selection)))
      .slice(0, limit).map((row) => row.selection);
  }

  function markStrength(mark, index) {
    const score = Number(mark?.score);
    if (Number.isFinite(score) && score > 0) return score;
    const probability = Number(mark?.probability);
    if (Number.isFinite(probability) && probability > 0) return probability;
    return Math.max(1, 5 - Number(index || 0));
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

  function primaryForecastTicket(tickets) {
    return tickets.find((row) => row.betType === "単勝") ?? tickets[0] ?? null;
  }

  function uniqueMarks(rows) {
    return [...new Map(rows.filter((row) => Number(row.horseNumber) > 0).map((row) => [Number(row.horseNumber), row])).values()];
  }
  function combinations(values, size) {
    if (values.length < size) return [];
    const output = [];
    const visit = (start, selected) => {
      if (selected.length === size) { output.push([...selected]); return; }
      for (let index = start; index <= values.length - (size - selected.length); index += 1) visit(index + 1, [...selected, values[index]]);
    };
    visit(0, []);
    return output;
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

  return { BET_TYPES, buildForecastTickets, rankedQuinellaSelections, volatilityProfile, primaryForecastTicket };
}));
