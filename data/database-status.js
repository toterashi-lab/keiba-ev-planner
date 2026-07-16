window.KEIBA_DATABASE_STATUS = {
  "asOf": "2026-07-16T09:50:41.455Z",
  "completeMonths": 266,
  "runningMonths": 1,
  "queuedMonths": 100,
  "failedMonths": 0,
  "totalMonths": 367,
  "progressPercent": 72.47956403269755,
  "remainingMonths": 101,
  "medianMinutesPerMonth": 9.498924873769283,
  "estimatedHoursRemaining": 15.98985687084496,
  "estimatedCompletionAt": "2026-07-17T01:50:04.929Z",
  "workerHealth": "healthy",
  "workerHeartbeatAgeSeconds": 5.524,
  "historicalOddsCompleteRaces": 1,
  "historicalOddsPendingRaces": 75490,
  "historicalOddsTotalRaces": 75491,
  "liveEvValidation": {
    "status": "insufficient",
    "generatedAt": "2026-07-16T09:48:35.032Z",
    "storedCandidates": 0,
    "evaluatedCandidates": 0,
    "decisions": 0,
    "bets": 0,
    "raceDays": 0,
    "roi": null,
    "roiCi95Lower": null,
    "maximumDrawdown": null
  },
  "meetings": 6374,
  "races": 76427,
  "runners": 1082028,
  "payouts": 903896,
  "rawPages": 83637,
  "oddsSnapshots": 222945,
  "earliestComplete": "1996-01",
  "latestComplete": "2026-07",
  "integrityStatus": "fail",
  "fieldAvailabilityAudit": {
    "checkedAt": "2026-07-16T09:49:51.268Z",
    "pass": true,
    "completeRunners": 1077813,
    "currentRunners": 1082028,
    "coverageCurrent": false,
    "rawRacePagesVerified": 8236,
    "officiallyUnavailableCells": 18706,
    "parserMissingCells": 0,
    "fields": [
      {
        "field": "body_weight",
        "missingRows": 2171,
        "officiallyUnavailableRows": 2171,
        "parserMissingRows": 0
      },
      {
        "field": "popularity",
        "missingRows": 7316,
        "officiallyUnavailableRows": 7316,
        "parserMissingRows": 0
      },
      {
        "field": "official_time",
        "missingRows": 9219,
        "officiallyUnavailableRows": 9219,
        "parserMissingRows": 0
      }
    ]
  },
  "evStatus": "insufficient",
  "trainingPreflight": {
    "checkedAt": "2026-07-16T08:58:30.619Z",
    "races": 74366,
    "rows": 1044830,
    "totalMs": 872411,
    "heapUsedMb": 5358,
    "rssMb": 5656,
    "projectedFullRunMinutes": 58.2,
    "projectedFullRssMb": 7986,
    "logLoss": 2.1264775336557387,
    "uniformLogLoss": 2.5894397717708837,
    "ece": 0.006398197241247412,
    "maxCalibrationBinError": 0.015297684165438225,
    "calibrationMethod": "equal-frequency-deciles",
    "researchSignal": "research_pass_candidate",
    "ticketResearchPass": true,
    "ticketCalibrationTemperatures": {
      "win": 1.15,
      "place": 1.15,
      "quinella": 1.5,
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
        "winnerLogLoss": 2.134409843839447,
        "uniformWinnerLogLoss": 2.5892809445009526,
        "ece": 0.00818777005179474,
        "supportedMaximumCalibrationBinError": 0.069265307875023,
        "maximumMassError": 6.661338147750939e-16
      },
      "place": {
        "researchPass": true,
        "winnerLogLoss": 1.2281651031572156,
        "uniformWinnerLogLoss": 1.5051056277039323,
        "ece": 0.014067348938733553,
        "supportedMaximumCalibrationBinError": 0.05159427183334264,
        "maximumMassError": 1.7763568394002505e-15
      },
      "quinella": {
        "researchPass": true,
        "winnerLogLoss": 3.6794959977602133,
        "uniformWinnerLogLoss": 4.404438259168549,
        "ece": 0.00034078719565714115,
        "supportedMaximumCalibrationBinError": 0.06452902256335438,
        "maximumMassError": 1.5543122344752192e-15
      },
      "wide": {
        "researchPass": true,
        "winnerLogLoss": 2.7524760597613946,
        "uniformWinnerLogLoss": 3.3453886612347357,
        "ece": 0.001954301552017395,
        "supportedMaximumCalibrationBinError": 0.05147413545079493,
        "maximumMassError": 5.329070518200751e-15
      },
      "exacta": {
        "researchPass": true,
        "winnerLogLoss": 4.30455673437763,
        "uniformWinnerLogLoss": 5.0975854397278635,
        "ece": 0.00002760988102217026,
        "supportedMaximumCalibrationBinError": 0.04726314800403025,
        "maximumMassError": 2.55351295663786e-15
      },
      "trio": {
        "researchPass": true,
        "winnerLogLoss": 4.753783784360411,
        "uniformWinnerLogLoss": 5.725201070532101,
        "ece": 0.00000401153698414116,
        "supportedMaximumCalibrationBinError": 0.009280850689494552,
        "maximumMassError": 3.3306690738754696e-15
      },
      "trifecta": {
        "researchPass": true,
        "winnerLogLoss": 6.502496878750955,
        "uniformWinnerLogLoss": 7.5169605397598325,
        "ece": 1.1424319176447367e-7,
        "supportedMaximumCalibrationBinError": 1.8120756713126563e-8,
        "maximumMassError": 8.326672684688674e-15
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
