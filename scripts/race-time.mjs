export function raceStartTimestamp(raceDate, startTime) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(raceDate ?? "")) || !/^\d{2}:\d{2}$/.test(String(startTime ?? ""))) return NaN;
  return new Date(`${raceDate}T${startTime}:00+09:00`).getTime();
}

export function oddsAgeSeconds(raceDate, startTime, observedAt) {
  const start = raceStartTimestamp(raceDate, startTime);
  const observed = new Date(observedAt).getTime();
  return Number.isFinite(start) && Number.isFinite(observed) ? (start - observed) / 1000 : null;
}

export function isPreRaceObservation(raceDate, startTime, observedAt) {
  const age = oddsAgeSeconds(raceDate, startTime, observedAt);
  return age != null && age > 0;
}
