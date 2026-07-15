import { buildFinishOrderProbabilityBooks, calibrateFinishOrderProbabilityBooks, FINISH_ORDER_TYPES, ticketOutcomeMultiplicity } from "../model/finish-order-probabilities.mjs";

for (const fieldSize of [5, 8, 18]) {
  const probabilities = Object.fromEntries(Array.from({ length: fieldSize }, (_, index) => [index + 1, index + 1]));
  const books = buildFinishOrderProbabilityBooks(probabilities);
  const calibrated = calibrateFinishOrderProbabilityBooks(books,
    Object.fromEntries(FINISH_ORDER_TYPES.map((type) => [type, 2])), fieldSize);
  for (const type of FINISH_ORDER_TYPES) {
    const sum = [...books[type].values()].reduce((total, value) => total + value, 0);
    const expected = ticketOutcomeMultiplicity(type, fieldSize);
    if (Math.abs(sum - expected) > 1e-9) throw new Error(`${fieldSize}頭 ${type}: probability sum ${sum} != ${expected}`);
    if ([...books[type].values()].some((value) => !Number.isFinite(value) || value < 0 || value > 1 + 1e-12)) {
      throw new Error(`${fieldSize}頭 ${type}: invalid probability`);
    }
    const calibratedSum = [...calibrated[type].values()].reduce((total, value) => total + value, 0);
    if (Math.abs(calibratedSum - expected) > 1e-9 || [...calibrated[type].values()].some((value) => value > 1 + 1e-12)) {
      throw new Error(`${fieldSize}頭 ${type}: invalid calibrated probability`);
    }
  }
}

const uniform = buildFinishOrderProbabilityBooks(Object.fromEntries(Array.from({ length: 8 }, (_, index) => [index + 1, 1])));
const expectedUniform = { win: 1 / 8, place: 3 / 8, quinella: 1 / 28, wide: 3 / 28,
  exacta: 1 / 56, trio: 1 / 56, trifecta: 1 / 336 };
for (const [type, expected] of Object.entries(expectedUniform)) {
  const maximumError = Math.max(...[...uniform[type].values()].map((value) => Math.abs(value - expected)));
  if (maximumError > 1e-12) throw new Error(`Uniform ${type}: maximum error ${maximumError}`);
}

console.log(JSON.stringify({ status: "pass", fieldSizes: [5, 8, 18], betTypes: FINISH_ORDER_TYPES.length }, null, 2));
