window.KEIBA_DATABASE_STATUS = {
  "asOf": "2026-07-15T14:14:35.524Z",
  "completeMonths": 142,
  "runningMonths": 1,
  "queuedMonths": 224,
  "failedMonths": 0,
  "totalMonths": 367,
  "progressPercent": 38.69209809264305,
  "remainingMonths": 225,
  "medianMinutesPerMonth": 9.754508212208748,
  "estimatedHoursRemaining": 36.579405795782804,
  "estimatedCompletionAt": "2026-07-17T02:49:21.382Z",
  "workerHealth": "healthy",
  "workerHeartbeatAgeSeconds": 14.451,
  "liveEvValidation": {
    "status": "insufficient",
    "generatedAt": "2026-07-15T13:34:44.739Z",
    "storedCandidates": 0,
    "evaluatedCandidates": 0,
    "decisions": 0,
    "bets": 0,
    "raceDays": 0,
    "roi": null,
    "roiCi95Lower": null,
    "maximumDrawdown": null
  },
  "meetings": 3396,
  "races": 40729,
  "runners": 569958,
  "payouts": 485627,
  "rawPages": 44877,
  "oddsSnapshots": 222945,
  "earliestComplete": "1996-01",
  "latestComplete": "2026-07",
  "integrityStatus": "pass",
  "fieldAvailabilityAudit": {
    "checkedAt": "2026-07-15T14:14:28.941Z",
    "pass": true,
    "completeRunners": 569958,
    "currentRunners": 569958,
    "coverageCurrent": true,
    "rawRacePagesVerified": 4317,
    "officiallyUnavailableCells": 11001,
    "parserMissingCells": 0,
    "fields": [
      {
        "field": "body_weight",
        "missingRows": 994,
        "officiallyUnavailableRows": 994,
        "parserMissingRows": 0
      },
      {
        "field": "popularity",
        "missingRows": 5350,
        "officiallyUnavailableRows": 5350,
        "parserMissingRows": 0
      },
      {
        "field": "official_time",
        "missingRows": 4657,
        "officiallyUnavailableRows": 4657,
        "parserMissingRows": 0
      }
    ]
  },
  "evStatus": "insufficient",
  "trainingPreflight": {
    "checkedAt": "2026-07-15T14:11:05.468Z",
    "races": 40394,
    "rows": 560466,
    "totalMs": 327822,
    "heapUsedMb": 1684,
    "rssMb": 1861,
    "projectedFullRunMinutes": 14.2,
    "projectedFullRssMb": 4838,
    "logLoss": 2.241981424102108,
    "uniformLogLoss": 2.588676483597823,
    "ece": 0.003919668294495806,
    "maxCalibrationBinError": 0.008222684733435418,
    "calibrationMethod": "equal-frequency-deciles",
    "researchSignal": "research_gate_not_met_yet",
    "ticketResearchPass": false,
    "ticketCalibrationTemperatures": {
      "win": 1.15,
      "place": 1.3,
      "quinella": 1.15,
      "wide": 1.3,
      "exacta": 1,
      "trio": 1.15,
      "trifecta": 1.15
    },
    "ticketTypesPassed": 6,
    "ticketTypesTotal": 7,
    "ticketMetrics": {
      "win": {
        "researchPass": true,
        "winnerLogLoss": 2.246746071472415,
        "uniformWinnerLogLoss": 2.58839263927822,
        "ece": 0.005591689032313302,
        "supportedMaximumCalibrationBinError": 0.04167703303211617,
        "maximumMassError": 5.551115123125783e-16
      },
      "place": {
        "researchPass": true,
        "winnerLogLoss": 1.301244560889665,
        "uniformWinnerLogLoss": 1.5061715804297007,
        "ece": 0.015732346296710432,
        "supportedMaximumCalibrationBinError": 0.038144730346408084,
        "maximumMassError": 2.220446049250313e-15
      },
      "quinella": {
        "researchPass": true,
        "winnerLogLoss": 3.814788973457461,
        "uniformWinnerLogLoss": 4.402411809481114,
        "ece": 0.000049268160118380485,
        "supportedMaximumCalibrationBinError": 0.009321662106936468,
        "maximumMassError": 1.7763568394002505e-15
      },
      "wide": {
        "researchPass": true,
        "winnerLogLoss": 2.901144833349864,
        "uniformWinnerLogLoss": 3.3488359330685893,
        "ece": 0.0013832236204987518,
        "supportedMaximumCalibrationBinError": 0.02470532509760265,
        "maximumMassError": 4.440892098500626e-15
      },
      "exacta": {
        "researchPass": false,
        "winnerLogLoss": 4.496752497315114,
        "uniformWinnerLogLoss": 5.095558990040714,
        "ece": 0.00005629680929207339,
        "supportedMaximumCalibrationBinError": 0.107369692344184,
        "maximumMassError": 1.1102230246251565e-15
      },
      "trio": {
        "researchPass": true,
        "winnerLogLoss": 4.984328111842087,
        "uniformWinnerLogLoss": 5.721673101567588,
        "ece": 0.000008955073697835542,
        "supportedMaximumCalibrationBinError": 0.03508878835653975,
        "maximumMassError": 4.218847493575595e-15
      },
      "trifecta": {
        "researchPass": true,
        "winnerLogLoss": 6.7427587499997435,
        "uniformWinnerLogLoss": 7.513432570795705,
        "ece": 6.75119380639296e-8,
        "supportedMaximumCalibrationBinError": 3.3756085940416045e-8,
        "maximumMassError": 9.325873406851315e-15
      }
    },
    "totalFeatures": 61,
    "selectedFeatures": 51,
    "selectedFeatureGroups": [
      "race_context",
      "body_load",
      "horse_form",
      "horse_suitability",
      "field_strength"
    ],
    "featureSelectionFallback": false
  }
};
