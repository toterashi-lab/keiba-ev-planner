import { isPreRaceObservation, oddsAgeSeconds, raceStartTimestamp } from "./race-time.mjs";

const failures = [];
const date = "2026-07-18";
const time = "12:00";
if (raceStartTimestamp(date, time) !== Date.parse("2026-07-18T03:00:00Z")) failures.push("JST conversion");
if (oddsAgeSeconds(date, time, "2026-07-18T02:58:00Z") !== 120) failures.push("odds age");
if (!isPreRaceObservation(date, time, "2026-07-18T02:59:59Z")) failures.push("one second before");
if (isPreRaceObservation(date, time, "2026-07-18T03:00:00Z")) failures.push("exact start accepted");
if (isPreRaceObservation(date, time, "2026-07-18T03:00:01Z")) failures.push("post start accepted");
if (isPreRaceObservation("", time, "2026-07-18T02:59:00Z")) failures.push("invalid date accepted");
if (failures.length) throw new Error(`Race time validation failed: ${failures.join(", ")}`);
console.log(JSON.stringify({ status: "pass", jstStart: "2026-07-18T03:00:00Z", boundary: "strictly-before-start", oddsAgeSeconds: 120 }, null, 2));
