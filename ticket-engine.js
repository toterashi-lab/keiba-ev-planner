(function attachTicketEngine(global) {
  "use strict";

  const SPECS = {
    "単勝": { legs: 1, ordered: true, finishDepth: 1 },
    "複勝": { legs: 1, ordered: true, finishDepth: "place" },
    "馬連": { legs: 2, ordered: false, finishDepth: 2 },
    "ワイド": { legs: 2, ordered: false, finishDepth: "place" },
    "馬単": { legs: 2, ordered: true, finishDepth: 2 },
    "3連複": { legs: 3, ordered: false, finishDepth: 3 },
    "3連単": { legs: 3, ordered: true, finishDepth: 3 },
  };
  const UNIT_STAKE = 100;

  function expandTicket(ticket) {
    const spec = requireSpec(ticket.betType);
    const method = ticket.method ?? "1点";
    let combinations;
    if (method === "BOX") {
      combinations = spec.ordered
        ? permutations(uniqueNumbers(ticket.horses), spec.legs)
        : combinationsOf(uniqueNumbers(ticket.horses), spec.legs);
    } else if (method === "フォーメーション") {
      if (!Array.isArray(ticket.groups) || ticket.groups.length !== spec.legs) throw new Error("フォーメーションの列数が券種と一致しません");
      combinations = cartesian(ticket.groups.map(uniqueNumbers)).filter(allDistinct);
    } else {
      combinations = [uniqueNumbers(ticket.selection ?? ticket.horses ?? [])];
    }
    return deduplicate(combinations.filter((selection) => selection.length === spec.legs && allDistinct(selection)), spec.ordered);
  }

  function ticketProbability(betType, selection, horseProbabilities) {
    const spec = requireSpec(betType);
    const probabilities = normalizeProbabilities(horseProbabilities);
    const fieldSize = probabilities.size;
    if (selection.some((horse) => !probabilities.has(Number(horse)))) return 0;
    if (betType === "単勝") return probabilities.get(Number(selection[0])) ?? 0;
    const depth = spec.finishDepth === "place" ? (fieldSize >= 8 ? 3 : 2) : spec.finishDepth;
    const outcomes = orderedFinishOutcomes([...probabilities.keys()], depth, probabilities);
    const selected = selection.map(Number);
    return outcomes.reduce((sum, outcome) => sum + (matches(betType, selected, outcome.order, depth) ? outcome.probability : 0), 0);
  }

  function evaluateTicket(ticket, horseProbabilities, oddsBySelection, options = {}) {
    const combinations = expandTicket(ticket);
    const unitStake = UNIT_STAKE;
    const uncertainty = Math.max(0, Number(options.uncertainty) || 0);
    const legsOrdered = requireSpec(ticket.betType).ordered;
    const rows = combinations.map((selection) => {
      const key = selectionKey(selection, legsOrdered);
      const odds = Number(oddsBySelection?.[key]);
      const probability = ticketProbability(ticket.betType, selection, horseProbabilities);
      const conservativeProbability = Math.max(0, probability - uncertainty);
      return { selection, key, odds, probability, conservativeProbability, expectedReturn: odds * conservativeProbability };
    });
    const missingOdds = rows.filter((row) => !(row.odds > 1)).map((row) => row.key);
    const investment = rows.length * unitStake;
    const expectedPayout = missingOdds.length ? null : rows.reduce((sum, row) => sum + unitStake * row.expectedReturn, 0);
    const expectedReturn = expectedPayout === null || !investment ? null : expectedPayout / investment;
    return {
      ...ticket,
      combinations,
      rows,
      points: rows.length,
      investment,
      expectedPayout,
      expectedReturn,
      edge: expectedReturn === null ? null : expectedReturn - 1,
      missingOdds,
      status: !rows.length ? "invalid" : missingOdds.length ? "missing_odds" : "ready",
    };
  }

  function rankTickets(tickets, horseProbabilities, oddsBook, options = {}) {
    return tickets.map((ticket) => evaluateTicket(ticket, horseProbabilities, oddsBook?.[ticket.betType], options))
      .sort((left, right) => {
        if (left.status !== right.status) return left.status === "ready" ? -1 : right.status === "ready" ? 1 : 0;
        return (right.expectedReturn ?? -Infinity) - (left.expectedReturn ?? -Infinity) || left.points - right.points;
      });
  }

  function candidateCounts(fieldSize) {
    return {
      "単勝": fieldSize,
      "複勝": fieldSize,
      "馬連": choose(fieldSize, 2),
      "ワイド": choose(fieldSize, 2),
      "馬単": fallingFactorial(fieldSize, 2),
      "3連複": choose(fieldSize, 3),
      "3連単": fallingFactorial(fieldSize, 3),
    };
  }

  function matches(betType, selected, order, depth) {
    if (betType === "複勝") return order.slice(0, depth).includes(selected[0]);
    if (betType === "ワイド") return selected.every((horse) => order.slice(0, depth).includes(horse));
    if (betType === "馬連" || betType === "3連複") return sameSet(selected, order.slice(0, selected.length));
    return selected.every((horse, index) => horse === order[index]);
  }

  function orderedFinishOutcomes(horses, depth, probabilities) {
    return permutations(horses, depth).map((order) => {
      let remaining = 1;
      let probability = 1;
      for (const horse of order) {
        const horseProbability = probabilities.get(horse) ?? 0;
        probability *= remaining > 0 ? horseProbability / remaining : 0;
        remaining -= horseProbability;
      }
      return { order, probability };
    });
  }

  function normalizeProbabilities(values) {
    const entries = values instanceof Map ? [...values.entries()] : Object.entries(values ?? {});
    const positive = entries.map(([horse, value]) => [Number(horse), Math.max(0, Number(value) || 0)]).filter(([, value]) => value > 0);
    const total = positive.reduce((sum, [, value]) => sum + value, 0);
    if (!(total > 0)) return new Map();
    return new Map(positive.map(([horse, value]) => [horse, value / total]));
  }

  function deduplicate(items, ordered) {
    const seen = new Set();
    return items.reduce((result, item) => {
      const normalized = item.map(Number);
      const key = selectionKey(normalized, ordered);
      if (!seen.has(key)) { seen.add(key); result.push(ordered ? normalized : [...normalized].sort((a, b) => a - b)); }
      return result;
    }, []);
  }

  function selectionKey(selection, ordered) {
    return (ordered ? selection : [...selection].sort((a, b) => a - b)).join("-");
  }

  function combinationsOf(items, size, start = 0, prefix = [], result = []) {
    if (prefix.length === size) { result.push(prefix); return result; }
    for (let index = start; index <= items.length - (size - prefix.length); index += 1) combinationsOf(items, size, index + 1, [...prefix, items[index]], result);
    return result;
  }

  function permutations(items, size, prefix = [], result = []) {
    if (prefix.length === size) { result.push(prefix); return result; }
    for (const item of items) if (!prefix.includes(item)) permutations(items, size, [...prefix, item], result);
    return result;
  }

  function cartesian(groups) {
    return groups.reduce((rows, group) => rows.flatMap((row) => group.map((value) => [...row, value])), [[]]);
  }

  function uniqueNumbers(values) { return [...new Set((values ?? []).map(Number).filter(Number.isFinite))]; }
  function allDistinct(values) { return new Set(values).size === values.length; }
  function sameSet(left, right) { return left.length === right.length && left.every((value) => right.includes(value)); }
  function choose(n, k) { return n < k ? 0 : fallingFactorial(n, k) / fallingFactorial(k, k); }
  function fallingFactorial(n, k) { let value = 1; for (let index = 0; index < k; index += 1) value *= n - index; return value; }
  function requireSpec(betType) { const spec = SPECS[betType]; if (!spec) throw new Error(`未対応券種: ${betType}`); return spec; }

  global.KEIBA_TICKET_ENGINE = { SPECS, UNIT_STAKE, expandTicket, ticketProbability, evaluateTicket, rankTickets, candidateCounts, selectionKey };
})(globalThis);
