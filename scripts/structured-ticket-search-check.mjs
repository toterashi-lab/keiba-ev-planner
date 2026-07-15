import { buildStructuredDefinitions } from "../model/structured-ticket-search.mjs";

const marketHorse = { 1: 0.5, 2: 0.25, 3: 0.12, 4: 0.08, 5: 0.04, 6: 0.01 };
const abilityHorse = { 1: 0.12, 2: 0.14, 3: 0.13, 4: 0.38, 5: 0.15, 6: 0.08 };
const rows = [
  { selection_key: "1-2", odds_low: 2 },
  { selection_key: "4-5", odds_low: 8 },
  { selection_key: "5-6", odds_low: 30 },
  { selection_key: "2-3", odds_low: 5 },
];
const abilityBook = new Map([["1-2", 0.1], ["4-5", 0.2], ["5-6", 0.15], ["2-3", 0.08]]);
const definitions = buildStructuredDefinitions({ legs: 2, rows, marketHorse, abilityHorse, abilityBook });
const abilityBox = definitions.find((row) => row.method === "BOX" && row.optimizationScenarios.includes("ability_probability") && row.horses.length === 3);
const valueBox = definitions.find((row) => row.method === "BOX" && row.optimizationScenarios.includes("component_ev") && row.horses.length === 3);
if (!abilityBox || abilityBox.horses[0] !== 4) throw new Error(`Ability-ranked BOX is invalid: ${JSON.stringify(abilityBox)}`);
if (!valueBox || valueBox.horses[0] !== 5 || !valueBox.horses.includes(6)) throw new Error(`Component-EV BOX is invalid: ${JSON.stringify(valueBox)}`);
if (!definitions.some((row) => row.method === "formation" && row.optimizationScenarios.length > 0)) throw new Error("Formation candidate is missing");
console.log(JSON.stringify({ status: "pass", definitions: definitions.length, abilityBox, valueBox }, null, 2));
