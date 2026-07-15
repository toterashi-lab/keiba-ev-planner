window.KEIBA_DATABASE_STATUS = {
  "asOf": "2026-07-15T13:28:01.297Z",
  "completeMonths": 137,
  "runningMonths": 1,
  "queuedMonths": 229,
  "failedMonths": 0,
  "totalMonths": 367,
  "progressPercent": 37.32970027247956,
  "remainingMonths": 230,
  "medianMinutesPerMonth": 9.70148328691721,
  "estimatedHoursRemaining": 37.18901926651597,
  "estimatedCompletionAt": "2026-07-17T02:39:21.765Z",
  "workerHealth": "healthy",
  "workerHeartbeatAgeSeconds": 2.669,
  "liveEvValidation": {
    "status": "insufficient",
    "generatedAt": "2026-07-15T13:05:30.422Z",
    "storedCandidates": 0,
    "evaluatedCandidates": 0,
    "decisions": 0,
    "bets": 0,
    "raceDays": 0,
    "roi": null,
    "roiCi95Lower": null,
    "maximumDrawdown": null
  },
  "meetings": 3274,
  "races": 39267,
  "runners": 548430,
  "payouts": 468093,
  "rawPages": 43342,
  "oddsSnapshots": 222945,
  "earliestComplete": "1996-01",
  "latestComplete": "2026-07",
  "integrityStatus": "pass",
  "fieldAvailabilityAudit": {
    "checkedAt": "2026-07-15T13:27:54.248Z",
    "pass": true,
    "completeRunners": 548430,
    "currentRunners": 548430,
    "coverageCurrent": true,
    "rawRacePagesVerified": 4161,
    "officiallyUnavailableCells": 10710,
    "parserMissingCells": 0,
    "fields": [
      {
        "field": "body_weight",
        "missingRows": 949,
        "officiallyUnavailableRows": 949,
        "parserMissingRows": 0
      },
      {
        "field": "popularity",
        "missingRows": 5283,
        "officiallyUnavailableRows": 5283,
        "parserMissingRows": 0
      },
      {
        "field": "official_time",
        "missingRows": 4478,
        "officiallyUnavailableRows": 4478,
        "parserMissingRows": 0
      }
    ]
  },
  "evStatus": "insufficient",
  "trainingPreflight": {
    "checkedAt": "2026-07-15T13:04:59.002Z",
    "races": 38427,
    "rows": 531656,
    "totalMs": 347818,
    "heapUsedMb": 1524,
    "rssMb": 1694,
    "projectedFullRunMinutes": 15.8,
    "projectedFullRssMb": 4629,
    "logLoss": 2.1972309167668196,
    "uniformLogLoss": 2.592110246679532,
    "ece": 0.005710558994060721,
    "maxCalibrationBinError": 0.016682010004884562,
    "calibrationMethod": "equal-frequency-deciles",
    "researchSignal": "research_pass_candidate",
    "totalFeatures": 61,
    "selectedFeatures": 56,
    "selectedFeatureGroups": [
      "race_context",
      "body_load",
      "horse_form",
      "horse_suitability",
      "connections"
    ],
    "featureSelectionFallback": false
  }
};
