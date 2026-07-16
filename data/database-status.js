window.KEIBA_DATABASE_STATUS = {
  "asOf": "2026-07-16T14:42:01.046Z",
  "completeMonths": 296,
  "runningMonths": 1,
  "queuedMonths": 70,
  "failedMonths": 0,
  "totalMonths": 367,
  "progressPercent": 80.65395095367847,
  "remainingMonths": 71,
  "medianMinutesPerMonth": 9.443583190441132,
  "estimatedHoursRemaining": 11.174906775355339,
  "estimatedCompletionAt": "2026-07-17T01:52:30.698Z",
  "workerHealth": "healthy",
  "workerHeartbeatAgeSeconds": 10.272,
  "historicalOddsCompleteRaces": 1,
  "historicalOddsPendingRaces": 76426,
  "historicalOddsTotalRaces": 76427,
  "liveEvValidation": {
    "status": "insufficient",
    "generatedAt": "2026-07-16T14:39:18.051Z",
    "storedCandidates": 0,
    "evaluatedCandidates": 0,
    "decisions": 0,
    "bets": 0,
    "raceDays": 0,
    "roi": null,
    "roiCi95Lower": null,
    "maximumDrawdown": null
  },
  "meetings": 7090,
  "races": 85009,
  "runners": 1204154,
  "payouts": 994158,
  "rawPages": 93181,
  "oddsSnapshots": 222945,
  "earliestComplete": "1996-01",
  "latestComplete": "2026-07",
  "integrityStatus": "pass",
  "fieldAvailabilityAudit": {
    "checkedAt": "2026-07-16T14:40:57.464Z",
    "pass": true,
    "completeRunners": 1204154,
    "currentRunners": 1204154,
    "coverageCurrent": true,
    "rawRacePagesVerified": 9269,
    "officiallyUnavailableCells": 20861,
    "parserMissingCells": 0,
    "fields": [
      {
        "field": "body_weight",
        "missingRows": 2561,
        "officiallyUnavailableRows": 2561,
        "parserMissingRows": 0
      },
      {
        "field": "popularity",
        "missingRows": 7890,
        "officiallyUnavailableRows": 7890,
        "parserMissingRows": 0
      },
      {
        "field": "official_time",
        "missingRows": 10410,
        "officiallyUnavailableRows": 10410,
        "parserMissingRows": 0
      }
    ]
  },
  "evStatus": "insufficient",
  "trainingPreflight": {
    "checkedAt": "2026-07-16T14:37:59.138Z",
    "races": 84481,
    "rows": 1186099,
    "totalMs": 1075388,
    "heapUsedMb": 1386,
    "rssMb": 5178,
    "projectedFullRunMinutes": 63.7,
    "projectedFullRssMb": 6436,
    "logLoss": 2.1249746516775616,
    "uniformLogLoss": 2.5883240907064637,
    "ece": 0.00515599708068699,
    "maxCalibrationBinError": 0.013251060984186033,
    "calibrationMethod": "equal-frequency-deciles",
    "researchSignal": "research_pass_candidate",
    "ticketResearchPass": true,
    "ticketCalibrationTemperatures": {
      "win": 1.15,
      "place": 1.15,
      "quinella": 1.15,
      "wide": 1.3,
      "exacta": 1.15,
      "trio": 1.3,
      "trifecta": 1.3
    },
    "ticketTypesPassed": 7,
    "ticketTypesTotal": 7,
    "ticketMetrics": {
      "win": {
        "researchPass": true,
        "winnerLogLoss": 2.132695195032225,
        "uniformWinnerLogLoss": 2.5881705089937412,
        "ece": 0.00783634915212584,
        "supportedMaximumCalibrationBinError": 0.04734311578548611,
        "maximumMassError": 6.661338147750939e-16
      },
      "place": {
        "researchPass": true,
        "winnerLogLoss": 1.2265984004815569,
        "uniformWinnerLogLoss": 1.5039597706091368,
        "ece": 0.012658722799912063,
        "supportedMaximumCalibrationBinError": 0.04807491509296802,
        "maximumMassError": 1.7763568394002505e-15
      },
      "quinella": {
        "researchPass": true,
        "winnerLogLoss": 3.6223643598268507,
        "uniformWinnerLogLoss": 4.402133081977914,
        "ece": 0.0000754288057817256,
        "supportedMaximumCalibrationBinError": 0.029714413414982183,
        "maximumMassError": 1.5543122344752192e-15
      },
      "wide": {
        "researchPass": true,
        "winnerLogLoss": 2.74727806404619,
        "uniformWinnerLogLoss": 3.342946923322083,
        "ece": 0.0017428231215919506,
        "supportedMaximumCalibrationBinError": 0.018064583667168232,
        "maximumMassError": 6.217248937900877e-15
      },
      "exacta": {
        "researchPass": true,
        "winnerLogLoss": 4.302451550888949,
        "uniformWinnerLogLoss": 5.09528026253724,
        "ece": 0.000028326922489959698,
        "supportedMaximumCalibrationBinError": 0.014108804069809244,
        "maximumMassError": 2.3314683517128287e-15
      },
      "trio": {
        "researchPass": true,
        "winnerLogLoss": 4.7454031308105895,
        "uniformWinnerLogLoss": 5.721604911516752,
        "ece": 0.0000020801152695538312,
        "supportedMaximumCalibrationBinError": 0.010653067844712927,
        "maximumMassError": 4.440892098500626e-15
      },
      "trifecta": {
        "researchPass": true,
        "winnerLogLoss": 6.494992906359166,
        "uniformWinnerLogLoss": 7.513364380744336,
        "ece": 4.023623860653902e-7,
        "supportedMaximumCalibrationBinError": 1.4794681357994163e-7,
        "maximumMassError": 1.0880185641326534e-14
      }
    },
    "totalFeatures": 99,
    "selectedFeatures": 72,
    "selectedFeatureGroups": [
      "body_load",
      "horse_form",
      "pace_shape",
      "horse_suitability",
      "connections"
    ],
    "featureSelectionFallback": false
  }
};
