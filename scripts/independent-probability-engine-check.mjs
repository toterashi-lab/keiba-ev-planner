import assert from "node:assert/strict";
import { applyRacewiseCalibrator, evaluateRacewiseCalibration, fitIsotonicCalibrator, INDEPENDENT_PROBABILITY_ENGINE_VERSION, selectRacewiseCalibrator } from "../model/independent-probability-engine.mjs";

const rows = Array.from({ length: 600 }, (_, index) => ({ probability: (index + 1) / 601, outcome: index > 420 ? 1 : 0 }));
const calibrator = fitIsotonicCalibrator(rows);
assert.equal(calibrator.status, "fitted");
assert.ok(calibrator.blocks.every((block, index, blocks) => index === 0 || blocks[index - 1].value <= block.value));
const race = { winnerIndex: 0, rows: [{}, {}, {}] };
const calibrated = applyRacewiseCalibrator([0.1, 0.3, 0.6], calibrator);
assert.ok(Math.abs(calibrated.reduce((sum, value) => sum + value, 0) - 1) < 1e-12);
const races = Array.from({ length: 100 }, (_, index) => ({ winnerIndex: index % 2, rows: [{}, {}] }));
const selection = selectRacewiseCalibrator({ fittingRaces: races.slice(0, 70), selectionRaces: races.slice(70), minimumSamples: 100, predict: () => [0.4, 0.6] });
const metrics = evaluateRacewiseCalibration(races, () => [0.4, 0.6], selection.calibrator);
assert.ok(Number.isFinite(metrics.logLoss) && metrics.probabilityMassError < 1e-12);
console.log(JSON.stringify({ status: "pass", engine: INDEPENDENT_PROBABILITY_ENGINE_VERSION, calibration: selection.method, metrics }, null, 2));
