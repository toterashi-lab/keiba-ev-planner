export const FINISH_ORDER_TYPES = Object.freeze(["win", "place", "quinella", "wide", "exacta", "trio", "trifecta"]);

export function buildFinishOrderProbabilityBooks(horseProbabilities) {
  const normalized = normalizeHorseProbabilities(horseProbabilities);
  const horses = Object.keys(normalized).map(Number);
  const books = Object.fromEntries(FINISH_ORDER_TYPES.map((type) => [type, new Map()]));
  const add = (type, key, probability) => books[type].set(key, (books[type].get(key) ?? 0) + probability);
  const depth = placeDepth(horses.length);

  for (const first of horses) {
    const firstProbability = normalized[first];
    add("win", String(first), firstProbability);
    for (const second of horses) {
      if (second === first) continue;
      const secondDenominator = 1 - firstProbability;
      if (secondDenominator <= 1e-12) continue;
      const topTwoProbability = firstProbability * normalized[second] / secondDenominator;
      add("exacta", `${first}-${second}`, topTwoProbability);
      add("quinella", unorderedKey([first, second]), topTwoProbability);
      if (depth === 2) {
        add("place", String(first), topTwoProbability);
        add("place", String(second), topTwoProbability);
        add("wide", unorderedKey([first, second]), topTwoProbability);
      }
      for (const third of horses) {
        if (third === first || third === second) continue;
        const thirdDenominator = 1 - firstProbability - normalized[second];
        if (thirdDenominator <= 1e-12) continue;
        const topThreeProbability = topTwoProbability * normalized[third] / thirdDenominator;
        add("trifecta", `${first}-${second}-${third}`, topThreeProbability);
        add("trio", unorderedKey([first, second, third]), topThreeProbability);
        if (depth === 3) {
          for (const horse of [first, second, third]) add("place", String(horse), topThreeProbability);
          for (const pair of [[first, second], [first, third], [second, third]]) add("wide", unorderedKey(pair), topThreeProbability);
        }
      }
    }
  }
  return books;
}

export function ticketOutcomeMultiplicity(type, fieldSize) {
  const depth = placeDepth(fieldSize);
  if (type === "place") return depth;
  if (type === "wide") return depth * (depth - 1) / 2;
  return 1;
}

export function calibrateFinishOrderProbabilityBooks(books, temperatures, fieldSize) {
  return Object.fromEntries(FINISH_ORDER_TYPES.map((type) => [type,
    calibrateTicketProbabilityBook(books[type], ticketOutcomeMultiplicity(type, fieldSize), temperatures?.[type] ?? 1)]));
}

export function calibrateTicketProbabilityBook(book, targetMass, temperature = 1) {
  if (!(temperature >= 1) || !(targetMass >= 1)) throw new Error("Ticket calibration requires temperature >= 1 and target mass >= 1");
  const exponent = 1 / temperature;
  const powered = [...book].map(([key, probability]) => [key, Math.pow(Math.max(1e-15, probability), exponent)]);
  const total = powered.reduce((sum, [, value]) => sum + value, 0);
  return new Map(powered.map(([key, value]) => [key, targetMass * value / total]));
}

export function placeDepth(fieldSize) {
  return fieldSize >= 8 ? 3 : 2;
}

function normalizeHorseProbabilities(probabilities) {
  const entries = probabilities instanceof Map ? [...probabilities.entries()] : Object.entries(probabilities ?? {});
  const valid = entries.map(([key, value]) => [String(key), Number(value)])
    .filter(([, value]) => Number.isFinite(value) && value > 0);
  const total = valid.reduce((sum, [, value]) => sum + value, 0);
  if (valid.length < 2 || total <= 0) throw new Error("At least two positive horse probabilities are required");
  return Object.fromEntries(valid.map(([key, value]) => [key, value / total]));
}

function unorderedKey(values) {
  return [...values].sort((left, right) => left - right).join("-");
}
