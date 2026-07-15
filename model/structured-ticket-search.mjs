export function buildStructuredDefinitions({ legs, rows, marketHorse, abilityHorse, abilityBook }) {
  if (![2, 3].includes(legs)) return [];
  const rankings = [
    { scenario: "ability_probability", horses: probabilityRanking(abilityHorse) },
    { scenario: "market_probability", horses: probabilityRanking(marketHorse) },
    { scenario: "component_ev", horses: componentEvRanking(rows, abilityHorse, abilityBook) },
  ];
  const definitions = new Map();
  const add = (definition, scenario) => {
    const key = definition.horses
      ? `BOX:${definition.horses.join(",")}`
      : `FORMATION:${definition.groups.map((group) => group.join(",")).join("|")}`;
    const existing = definitions.get(key);
    if (existing) {
      if (!existing.optimizationScenarios.includes(scenario)) existing.optimizationScenarios.push(scenario);
      return;
    }
    definitions.set(key, { ...definition, optimizationScenarios: [scenario] });
  };

  for (const { scenario, horses } of rankings) {
    for (const size of [3, 4, 5]) {
      if (horses.length >= size) add({ method: "BOX", horses: horses.slice(0, size) }, scenario);
    }
    if (legs === 2 && horses.length >= 5) {
      add({ method: "formation", groups: [[horses[0]], horses.slice(1, 5)] }, scenario);
      add({ method: "formation", groups: [horses.slice(0, 2), horses.slice(2, 6)] }, scenario);
    }
    if (legs === 3 && horses.length >= 6) {
      add({ method: "formation", groups: [[horses[0]], horses.slice(1, 3), horses.slice(1, 6)] }, scenario);
      add({ method: "formation", groups: [horses.slice(0, 2), horses.slice(0, 4), horses.slice(1, 7)] }, scenario);
    }
  }
  return [...definitions.values()];
}

function probabilityRanking(probabilities) {
  return Object.entries(probabilities)
    .sort((left, right) => right[1] - left[1] || Number(left[0]) - Number(right[0]))
    .map(([horse]) => Number(horse));
}

function componentEvRanking(rows, abilityHorse, abilityBook) {
  const scores = new Map(Object.keys(abilityHorse).map((horse) => [Number(horse), Number.NEGATIVE_INFINITY]));
  for (const row of rows) {
    const expectedReturn = Number(row.odds_low) * (abilityBook.get(row.selection_key) ?? 0);
    for (const horse of row.selection_key.split("-").map(Number)) {
      scores.set(horse, Math.max(scores.get(horse) ?? Number.NEGATIVE_INFINITY, expectedReturn));
    }
  }
  return [...scores]
    .sort((left, right) => right[1] - left[1]
      || (abilityHorse[right[0]] ?? 0) - (abilityHorse[left[0]] ?? 0)
      || left[0] - right[0])
    .map(([horse]) => horse);
}
