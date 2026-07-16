window.KEIBA_DATABASE_STATUS = {
  "asOf": "2026-07-16T12:44:16.301Z",
  "completeMonths": 284,
  "runningMonths": 1,
  "queuedMonths": 82,
  "failedMonths": 0,
  "totalMonths": 367,
  "progressPercent": 77.3841961852861,
  "remainingMonths": 83,
  "medianMinutesPerMonth": 9.502624981105328,
  "estimatedHoursRemaining": 13.145297890529037,
  "estimatedCompletionAt": "2026-07-17T01:52:59.361Z",
  "workerHealth": "healthy",
  "workerHeartbeatAgeSeconds": 10.29,
  "historicalOddsCompleteRaces": 1,
  "historicalOddsPendingRaces": 76426,
  "historicalOddsTotalRaces": 76427,
  "liveEvValidation": {
    "status": "insufficient",
    "generatedAt": "2026-07-16T12:41:37.674Z",
    "storedCandidates": 0,
    "evaluatedCandidates": 0,
    "decisions": 0,
    "bets": 0,
    "raceDays": 0,
    "roi": null,
    "roiCi95Lower": null,
    "maximumDrawdown": null
  },
  "meetings": 6802,
  "races": 81557,
  "runners": 1155019,
  "payouts": 959780,
  "rawPages": 89334,
  "oddsSnapshots": 222945,
  "earliestComplete": "1996-01",
  "latestComplete": "2026-07",
  "integrityStatus": "pass",
  "fieldAvailabilityAudit": {
    "checkedAt": "2026-07-16T12:43:20.859Z",
    "pass": true,
    "completeRunners": 1155019,
    "currentRunners": 1155019,
    "coverageCurrent": true,
    "rawRacePagesVerified": 8865,
    "officiallyUnavailableCells": 20044,
    "parserMissingCells": 0,
    "fields": [
      {
        "field": "body_weight",
        "missingRows": 2415,
        "officiallyUnavailableRows": 2415,
        "parserMissingRows": 0
      },
      {
        "field": "popularity",
        "missingRows": 7675,
        "officiallyUnavailableRows": 7675,
        "parserMissingRows": 0
      },
      {
        "field": "official_time",
        "missingRows": 9954,
        "officiallyUnavailableRows": 9954,
        "parserMissingRows": 0
      }
    ]
  },
  "evStatus": "insufficient",
  "trainingPreflight": {
    "checkedAt": "2026-07-16T12:40:10.342Z",
    "races": 81077,
    "rows": 1137894,
    "totalMs": 992743,
    "heapUsedMb": 1458,
    "rssMb": 5893,
    "projectedFullRunMinutes": 61.1,
    "projectedFullRssMb": 7632,
    "logLoss": 2.125958402038556,
    "uniformLogLoss": 2.587024362863366,
    "ece": 0.0053269910975267416,
    "maxCalibrationBinError": 0.012829392555342725,
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
      "trifecta": 1.15
    },
    "ticketTypesPassed": 7,
    "ticketTypesTotal": 7,
    "ticketMetrics": {
      "win": {
        "researchPass": true,
        "winnerLogLoss": 2.1348520278801923,
        "uniformWinnerLogLoss": 2.586859878186151,
        "ece": 0.008112566927193343,
        "supportedMaximumCalibrationBinError": 0.02336713224144904,
        "maximumMassError": 5.551115123125783e-16
      },
      "place": {
        "researchPass": true,
        "winnerLogLoss": 1.2261010554668907,
        "uniformWinnerLogLoss": 1.5028349290982776,
        "ece": 0.01343664716264735,
        "supportedMaximumCalibrationBinError": 0.0444595300445676,
        "maximumMassError": 2.220446049250313e-15
      },
      "quinella": {
        "researchPass": true,
        "winnerLogLoss": 3.621951630077908,
        "uniformWinnerLogLoss": 4.399386347017333,
        "ece": 0.000022529414972294077,
        "supportedMaximumCalibrationBinError": 0.010450581838434614,
        "maximumMassError": 1.5543122344752192e-15
      },
      "wide": {
        "researchPass": true,
        "winnerLogLoss": 2.748194533702174,
        "uniformWinnerLogLoss": 3.3407188166811195,
        "ece": 0.0021663785049188954,
        "supportedMaximumCalibrationBinError": 0.059915663083787596,
        "maximumMassError": 5.329070518200751e-15
      },
      "exacta": {
        "researchPass": true,
        "winnerLogLoss": 4.302258865358008,
        "uniformWinnerLogLoss": 5.092533527576663,
        "ece": 0.000013177644377462573,
        "supportedMaximumCalibrationBinError": 0.005554695508098853,
        "maximumMassError": 2.886579864025407e-15
      },
      "trio": {
        "researchPass": true,
        "winnerLogLoss": 4.744411755387704,
        "uniformWinnerLogLoss": 5.717265968773944,
        "ece": 0.000003175630320755537,
        "supportedMaximumCalibrationBinError": 0.0006178805587640779,
        "maximumMassError": 3.774758283725532e-15
      },
      "trifecta": {
        "researchPass": true,
        "winnerLogLoss": 6.4783873562756815,
        "uniformWinnerLogLoss": 7.509025438001598,
        "ece": 1.1632271806183503e-7,
        "supportedMaximumCalibrationBinError": 0.010571502290503451,
        "maximumMassError": 1.0436096431476471e-14
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
