window.KEIBA_DATABASE_STATUS = {
  "asOf": "2026-07-15T15:52:54.287Z",
  "completeMonths": 152,
  "runningMonths": 1,
  "queuedMonths": 214,
  "failedMonths": 0,
  "totalMonths": 367,
  "progressPercent": 41.41689373297003,
  "remainingMonths": 215,
  "medianMinutesPerMonth": 9.44024182856083,
  "estimatedHoursRemaining": 33.82753321900964,
  "estimatedCompletionAt": "2026-07-17T01:42:33.404Z",
  "workerHealth": "healthy",
  "workerHeartbeatAgeSeconds": 15.233,
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
  "meetings": 3634,
  "races": 43582,
  "runners": 611455,
  "payouts": 519871,
  "rawPages": 48119,
  "oddsSnapshots": 222945,
  "earliestComplete": "1996-01",
  "latestComplete": "2026-07",
  "integrityStatus": "pass",
  "fieldAvailabilityAudit": {
    "checkedAt": "2026-07-15T15:52:47.670Z",
    "pass": true,
    "completeRunners": 611455,
    "currentRunners": 611455,
    "coverageCurrent": true,
    "rawRacePagesVerified": 4616,
    "officiallyUnavailableCells": 11540,
    "parserMissingCells": 0,
    "fields": [
      {
        "field": "body_weight",
        "missingRows": 1062,
        "officiallyUnavailableRows": 1062,
        "parserMissingRows": 0
      },
      {
        "field": "popularity",
        "missingRows": 5480,
        "officiallyUnavailableRows": 5480,
        "parserMissingRows": 0
      },
      {
        "field": "official_time",
        "missingRows": 4998,
        "officiallyUnavailableRows": 4998,
        "parserMissingRows": 0
      }
    ]
  },
  "evStatus": "insufficient",
  "trainingPreflight": {
    "checkedAt": "2026-07-15T15:23:07.244Z",
    "races": 42457,
    "rows": 589893,
    "totalMs": 440995,
    "heapUsedMb": 2818,
    "rssMb": 3095,
    "projectedFullRunMinutes": 50.9,
    "projectedFullRssMb": 7653,
    "logLoss": 2.131361239974755,
    "uniformLogLoss": 2.590052419534603,
    "ece": 0.006291500715593554,
    "maxCalibrationBinError": 0.025500988152624915,
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
        "winnerLogLoss": 2.13319834144543,
        "uniformWinnerLogLoss": 2.58977274812309,
        "ece": 0.0064037855197337954,
        "supportedMaximumCalibrationBinError": 0.07377477509069191,
        "maximumMassError": 6.661338147750939e-16
      },
      "place": {
        "researchPass": true,
        "winnerLogLoss": 1.2277492723223136,
        "uniformWinnerLogLoss": 1.5070664458620733,
        "ece": 0.014016323085729301,
        "supportedMaximumCalibrationBinError": 0.02930030469575501,
        "maximumMassError": 1.7763568394002505e-15
      },
      "quinella": {
        "researchPass": true,
        "winnerLogLoss": 3.6259702766515107,
        "uniformWinnerLogLoss": 4.405327689593863,
        "ece": 0.00012318680951504992,
        "supportedMaximumCalibrationBinError": 0.043839152581122254,
        "maximumMassError": 2.1094237467877974e-15
      },
      "wide": {
        "researchPass": true,
        "winnerLogLoss": 2.7400459000554815,
        "uniformWinnerLogLoss": 3.350401670206503,
        "ece": 0.0011938018639271817,
        "supportedMaximumCalibrationBinError": 0.03387771542589546,
        "maximumMassError": 5.773159728050814e-15
      },
      "exacta": {
        "researchPass": true,
        "winnerLogLoss": 4.295465779610535,
        "uniformWinnerLogLoss": 5.098474870153449,
        "ece": 0.000036829949992263406,
        "supportedMaximumCalibrationBinError": 0.03257487828766953,
        "maximumMassError": 2.4424906541753444e-15
      },
      "trio": {
        "researchPass": true,
        "winnerLogLoss": 4.729681158087363,
        "uniformWinnerLogLoss": 5.726325905739989,
        "ece": 0.000025690544407080143,
        "supportedMaximumCalibrationBinError": 0.036861134440918125,
        "maximumMassError": 3.774758283725532e-15
      },
      "trifecta": {
        "researchPass": true,
        "winnerLogLoss": 6.4786239873764675,
        "uniformWinnerLogLoss": 7.518085374968133,
        "ece": 1.2962573926190127e-7,
        "supportedMaximumCalibrationBinError": 4.124605563614759e-9,
        "maximumMassError": 9.2148511043888e-15
      }
    },
    "totalFeatures": 87,
    "selectedFeatures": 81,
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
