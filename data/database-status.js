window.KEIBA_DATABASE_STATUS = {
  "asOf": "2026-07-15T16:25:28.635Z",
  "completeMonths": 156,
  "runningMonths": 1,
  "queuedMonths": 210,
  "failedMonths": 0,
  "totalMonths": 367,
  "progressPercent": 42.50681198910082,
  "remainingMonths": 211,
  "medianMinutesPerMonth": 9.44024182856083,
  "estimatedHoursRemaining": 33.19818376377225,
  "estimatedCompletionAt": "2026-07-17T01:37:22.094Z",
  "workerHealth": "healthy",
  "workerHeartbeatAgeSeconds": 10.314,
  "liveEvValidation": {
    "status": "insufficient",
    "generatedAt": "2026-07-15T16:24:36.495Z",
    "storedCandidates": 0,
    "evaluatedCandidates": 0,
    "decisions": 0,
    "bets": 0,
    "raceDays": 0,
    "roi": null,
    "roiCi95Lower": null,
    "maximumDrawdown": null
  },
  "meetings": 3725,
  "races": 44672,
  "runners": 627180,
  "payouts": 532948,
  "rawPages": 49195,
  "oddsSnapshots": 222945,
  "earliestComplete": "1996-01",
  "latestComplete": "2026-07",
  "integrityStatus": "pass",
  "fieldAvailabilityAudit": {
    "checkedAt": "2026-07-15T16:25:21.371Z",
    "pass": true,
    "completeRunners": 627180,
    "currentRunners": 627180,
    "coverageCurrent": true,
    "rawRacePagesVerified": 4723,
    "officiallyUnavailableCells": 11718,
    "parserMissingCells": 0,
    "fields": [
      {
        "field": "body_weight",
        "missingRows": 1082,
        "officiallyUnavailableRows": 1082,
        "parserMissingRows": 0
      },
      {
        "field": "popularity",
        "missingRows": 5518,
        "officiallyUnavailableRows": 5518,
        "parserMissingRows": 0
      },
      {
        "field": "official_time",
        "missingRows": 5118,
        "officiallyUnavailableRows": 5118,
        "parserMissingRows": 0
      }
    ]
  },
  "evStatus": "insufficient",
  "trainingPreflight": {
    "checkedAt": "2026-07-15T16:24:02.270Z",
    "races": 44420,
    "rows": 618434,
    "totalMs": 475251,
    "heapUsedMb": 3020,
    "rssMb": 3255,
    "projectedFullRunMinutes": 52.6,
    "projectedFullRssMb": 7695,
    "logLoss": 2.162371952718496,
    "uniformLogLoss": 2.5905577085985043,
    "ece": 0.004247996785736055,
    "maxCalibrationBinError": 0.017064010103635063,
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
        "winnerLogLoss": 2.1653544312095,
        "uniformWinnerLogLoss": 2.5902701540097994,
        "ece": 0.00452543106145332,
        "supportedMaximumCalibrationBinError": 0.03290644328940007,
        "maximumMassError": 5.551115123125783e-16
      },
      "place": {
        "researchPass": true,
        "winnerLogLoss": 1.2503969498150074,
        "uniformWinnerLogLoss": 1.507133117053744,
        "ece": 0.012247888340998374,
        "supportedMaximumCalibrationBinError": 0.02866787095322476,
        "maximumMassError": 1.7763568394002505e-15
      },
      "quinella": {
        "researchPass": true,
        "winnerLogLoss": 3.6879124738835976,
        "uniformWinnerLogLoss": 4.406395355819441,
        "ece": 0.0001488942954018167,
        "supportedMaximumCalibrationBinError": 0.020445316479798414,
        "maximumMassError": 1.9984014443252818e-15
      },
      "wide": {
        "researchPass": true,
        "winnerLogLoss": 2.7895287538009437,
        "uniformWinnerLogLoss": 3.35026443365496,
        "ece": 0.001178232120668292,
        "supportedMaximumCalibrationBinError": 0.01923161472861512,
        "maximumMassError": 5.329070518200751e-15
      },
      "exacta": {
        "researchPass": true,
        "winnerLogLoss": 4.369821037700072,
        "uniformWinnerLogLoss": 5.09954253637899,
        "ece": 0.000016535226500084893,
        "supportedMaximumCalibrationBinError": 0.00868802391709858,
        "maximumMassError": 2.55351295663786e-15
      },
      "trio": {
        "researchPass": true,
        "winnerLogLoss": 4.813117819951279,
        "uniformWinnerLogLoss": 5.728062791582559,
        "ece": 0.00002811573075299659,
        "supportedMaximumCalibrationBinError": 0.05580037319819042,
        "maximumMassError": 3.219646771412954e-15
      },
      "trifecta": {
        "researchPass": true,
        "winnerLogLoss": 6.5641463652514656,
        "uniformWinnerLogLoss": 7.519822260810719,
        "ece": 2.335071686491008e-7,
        "supportedMaximumCalibrationBinError": 6.224676735649493e-8,
        "maximumMassError": 8.659739592076221e-15
      }
    },
    "totalFeatures": 87,
    "selectedFeatures": 71,
    "selectedFeatureGroups": [
      "race_context",
      "body_load",
      "horse_form",
      "horse_suitability"
    ],
    "featureSelectionFallback": false
  }
};
