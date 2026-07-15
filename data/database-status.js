window.KEIBA_DATABASE_STATUS = {
  "asOf": "2026-07-15T15:02:38.875Z",
  "completeMonths": 147,
  "runningMonths": 1,
  "queuedMonths": 219,
  "failedMonths": 0,
  "totalMonths": 367,
  "progressPercent": 40.05449591280654,
  "remainingMonths": 220,
  "medianMinutesPerMonth": 9.510383270680904,
  "estimatedHoursRemaining": 34.87140532582998,
  "estimatedCompletionAt": "2026-07-17T01:54:55.932Z",
  "workerHealth": "healthy",
  "workerHeartbeatAgeSeconds": 5.093,
  "liveEvValidation": {
    "status": "insufficient",
    "generatedAt": "2026-07-15T14:26:13.092Z",
    "storedCandidates": 0,
    "evaluatedCandidates": 0,
    "decisions": 0,
    "bets": 0,
    "raceDays": 0,
    "roi": null,
    "roiCi95Lower": null,
    "maximumDrawdown": null
  },
  "meetings": 3514,
  "races": 42145,
  "runners": 590098,
  "payouts": 502611,
  "rawPages": 46463,
  "oddsSnapshots": 222945,
  "earliestComplete": "1996-01",
  "latestComplete": "2026-07",
  "integrityStatus": "pass",
  "fieldAvailabilityAudit": {
    "checkedAt": "2026-07-15T15:02:32.071Z",
    "pass": true,
    "completeRunners": 590098,
    "currentRunners": 590098,
    "coverageCurrent": true,
    "rawRacePagesVerified": 4453,
    "officiallyUnavailableCells": 11227,
    "parserMissingCells": 0,
    "fields": [
      {
        "field": "body_weight",
        "missingRows": 1015,
        "officiallyUnavailableRows": 1015,
        "parserMissingRows": 0
      },
      {
        "field": "popularity",
        "missingRows": 5407,
        "officiallyUnavailableRows": 5407,
        "parserMissingRows": 0
      },
      {
        "field": "official_time",
        "missingRows": 4805,
        "officiallyUnavailableRows": 4805,
        "parserMissingRows": 0
      }
    ]
  },
  "evStatus": "insufficient",
  "trainingPreflight": {
    "checkedAt": "2026-07-15T14:25:46.640Z",
    "races": 40729,
    "rows": 565299,
    "totalMs": 344182,
    "heapUsedMb": 1702,
    "rssMb": 1754,
    "projectedFullRunMinutes": 40.9,
    "projectedFullRssMb": 4522,
    "logLoss": 2.241939721805174,
    "uniformLogLoss": 2.588937213352663,
    "ece": 0.0037568554053338666,
    "maxCalibrationBinError": 0.010988005094142383,
    "calibrationMethod": "equal-frequency-deciles",
    "researchSignal": "research_pass_candidate",
    "ticketResearchPass": true,
    "ticketCalibrationTemperatures": {
      "win": 1.15,
      "place": 1.3,
      "quinella": 1.3,
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
        "winnerLogLoss": 2.246235196376571,
        "uniformWinnerLogLoss": 2.5886572759435604,
        "ece": 0.005182853999946368,
        "supportedMaximumCalibrationBinError": 0.048436576285341426,
        "maximumMassError": 6.661338147750939e-16
      },
      "place": {
        "researchPass": true,
        "winnerLogLoss": 1.3024314842115539,
        "uniformWinnerLogLoss": 1.5063425854735553,
        "ece": 0.014735246392519675,
        "supportedMaximumCalibrationBinError": 0.024326033640792055,
        "maximumMassError": 1.7763568394002505e-15
      },
      "quinella": {
        "researchPass": true,
        "winnerLogLoss": 3.830306847279558,
        "uniformWinnerLogLoss": 4.402971175116436,
        "ece": 0.00023896983642446697,
        "supportedMaximumCalibrationBinError": 0.04199214670629889,
        "maximumMassError": 1.7763568394002505e-15
      },
      "wide": {
        "researchPass": true,
        "winnerLogLoss": 2.903596534798527,
        "uniformWinnerLogLoss": 3.3491331732762055,
        "ece": 0.001202537979833452,
        "supportedMaximumCalibrationBinError": 0.02162829351818124,
        "maximumMassError": 5.773159728050814e-15
      },
      "exacta": {
        "researchPass": true,
        "winnerLogLoss": 4.500467705464926,
        "uniformWinnerLogLoss": 5.09611835567603,
        "ece": 0.000013275421230257832,
        "supportedMaximumCalibrationBinError": 0.008047592807867876,
        "maximumMassError": 2.1094237467877974e-15
      },
      "trio": {
        "researchPass": true,
        "winnerLogLoss": 4.996403624998906,
        "uniformWinnerLogLoss": 5.722566271414008,
        "ece": 0.00001070633781860825,
        "supportedMaximumCalibrationBinError": 0.013493198363596137,
        "maximumMassError": 3.552713678800501e-15
      },
      "trifecta": {
        "researchPass": true,
        "winnerLogLoss": 6.756677210029894,
        "uniformWinnerLogLoss": 7.514325740642126,
        "ece": 6.685169168042276e-8,
        "supportedMaximumCalibrationBinError": 3.342591889626649e-8,
        "maximumMassError": 8.992806499463768e-15
      }
    },
    "totalFeatures": 61,
    "selectedFeatures": 50,
    "selectedFeatureGroups": [
      "race_context",
      "body_load",
      "horse_form",
      "horse_suitability"
    ],
    "featureSelectionFallback": false
  }
};
