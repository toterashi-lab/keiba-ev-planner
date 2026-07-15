window.KEIBA_DATABASE_STATUS = {
  "asOf": "2026-07-15T16:41:21.636Z",
  "completeMonths": 157,
  "runningMonths": 1,
  "queuedMonths": 209,
  "failedMonths": 0,
  "totalMonths": 367,
  "progressPercent": 42.77929155313351,
  "remainingMonths": 210,
  "medianMinutesPerMonth": 9.44024182856083,
  "estimatedHoursRemaining": 33.0408463999629,
  "estimatedCompletionAt": "2026-07-17T01:43:48.681Z",
  "workerHealth": "healthy",
  "workerHeartbeatAgeSeconds": 6.617,
  "liveEvValidation": {
    "status": "insufficient",
    "generatedAt": "2026-07-15T16:40:29.229Z",
    "storedCandidates": 0,
    "evaluatedCandidates": 0,
    "decisions": 0,
    "bets": 0,
    "raceDays": 0,
    "roi": null,
    "roiCi95Lower": null,
    "maximumDrawdown": null
  },
  "meetings": 3752,
  "races": 44996,
  "runners": 631805,
  "payouts": 536813,
  "rawPages": 49716,
  "oddsSnapshots": 222945,
  "earliestComplete": "1996-01",
  "latestComplete": "2026-07",
  "integrityStatus": "pass",
  "fieldAvailabilityAudit": {
    "checkedAt": "2026-07-15T16:41:14.177Z",
    "pass": true,
    "completeRunners": 631805,
    "currentRunners": 631805,
    "coverageCurrent": true,
    "rawRacePagesVerified": 4750,
    "officiallyUnavailableCells": 11762,
    "parserMissingCells": 0,
    "fields": [
      {
        "field": "body_weight",
        "missingRows": 1086,
        "officiallyUnavailableRows": 1086,
        "parserMissingRows": 0
      },
      {
        "field": "popularity",
        "missingRows": 5529,
        "officiallyUnavailableRows": 5529,
        "parserMissingRows": 0
      },
      {
        "field": "official_time",
        "missingRows": 5147,
        "officiallyUnavailableRows": 5147,
        "parserMissingRows": 0
      }
    ]
  },
  "evStatus": "insufficient",
  "trainingPreflight": {
    "checkedAt": "2026-07-15T16:39:54.994Z",
    "races": 44672,
    "rows": 622060,
    "totalMs": 464300,
    "heapUsedMb": 3023,
    "rssMb": 3263,
    "projectedFullRunMinutes": 50.9,
    "projectedFullRssMb": 7669,
    "logLoss": 2.157999310941065,
    "uniformLogLoss": 2.590706610132607,
    "ece": 0.003715072960280985,
    "maxCalibrationBinError": 0.014348564395883945,
    "calibrationMethod": "equal-frequency-deciles",
    "researchSignal": "research_pass_candidate",
    "ticketResearchPass": true,
    "ticketCalibrationTemperatures": {
      "win": 1.15,
      "place": 1.3,
      "quinella": 1.3,
      "wide": 1.3,
      "exacta": 1.3,
      "trio": 1.3,
      "trifecta": 1.3
    },
    "ticketTypesPassed": 7,
    "ticketTypesTotal": 7,
    "ticketMetrics": {
      "win": {
        "researchPass": true,
        "winnerLogLoss": 2.1607980772580446,
        "uniformWinnerLogLoss": 2.5904209844946,
        "ece": 0.003950089479752147,
        "supportedMaximumCalibrationBinError": 0.028300332501597136,
        "maximumMassError": 5.551115123125783e-16
      },
      "place": {
        "researchPass": true,
        "winnerLogLoss": 1.2461108083349763,
        "uniformWinnerLogLoss": 1.5072769356309863,
        "ece": 0.010575886795595272,
        "supportedMaximumCalibrationBinError": 0.01944152783779285,
        "maximumMassError": 1.7763568394002505e-15
      },
      "quinella": {
        "researchPass": true,
        "winnerLogLoss": 3.68040144545583,
        "uniformWinnerLogLoss": 4.406712253448008,
        "ece": 0.0001661384857799642,
        "supportedMaximumCalibrationBinError": 0.019352283655373642,
        "maximumMassError": 1.7763568394002505e-15
      },
      "wide": {
        "researchPass": true,
        "winnerLogLoss": 2.779899154057714,
        "uniformWinnerLogLoss": 3.350558533567839,
        "ece": 0.001004261081958141,
        "supportedMaximumCalibrationBinError": 0.019256851938206254,
        "maximumMassError": 4.884981308350689e-15
      },
      "exacta": {
        "researchPass": true,
        "winnerLogLoss": 4.362007751191369,
        "uniformWinnerLogLoss": 5.099859434007553,
        "ece": 0.000019321020816219533,
        "supportedMaximumCalibrationBinError": 0.011100282660819721,
        "maximumMassError": 2.6645352591003757e-15
      },
      "trio": {
        "researchPass": true,
        "winnerLogLoss": 4.796301206027284,
        "uniformWinnerLogLoss": 5.7285648615722335,
        "ece": 0.000019219292013800913,
        "supportedMaximumCalibrationBinError": 0.05203609411435198,
        "maximumMassError": 3.552713678800501e-15
      },
      "trifecta": {
        "researchPass": true,
        "winnerLogLoss": 6.547312637038851,
        "uniformWinnerLogLoss": 7.520324330800397,
        "ece": 4.406742238312857e-7,
        "supportedMaximumCalibrationBinError": 1.7545470858625848e-7,
        "maximumMassError": 8.548717289613705e-15
      }
    },
    "totalFeatures": 87,
    "selectedFeatures": 55,
    "selectedFeatureGroups": [
      "race_context",
      "weather_going",
      "body_load",
      "horse_form"
    ],
    "featureSelectionFallback": false
  }
};
