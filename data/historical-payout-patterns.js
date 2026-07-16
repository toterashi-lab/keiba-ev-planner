window.KEIBA_HISTORICAL_PAYOUT_PATTERNS = {
  "status": "research_only",
  "generatedAt": "2026-07-16T09:06:53.773Z",
  "source": "JRA official completed race results and payouts",
  "leakagePolicy": {
    "discovery": "race_date < 2020-01-01",
    "validation": "2020-01-01 <= race_date < 2026-07-11",
    "targetWeekExcluded": true
  },
  "interpretation": "高配当になりやすいレース条件の再現性を測る。的中確率や正の期待値を直接意味しない。",
  "policy": {
    "highPayoutDefinition": "券種別discovery期間の払戻上位10%",
    "minimumDiscoveryRows": 250,
    "minimumValidationRows": 80,
    "empiricalBayesPriorStrength": 500,
    "acceptedOnlyWhenBothPeriodsLiftAboveOne": true
  },
  "coverage": {
    "totalRows": 886691,
    "discoveryRows": 617501,
    "validationRows": 269190,
    "earliestDate": "1996-01-05",
    "latestDate": "2026-07-05",
    "betTypes": [
      "単勝",
      "枠連",
      "複勝",
      "馬連",
      "3連複",
      "ワイド",
      "馬単",
      "3連単"
    ]
  },
  "thresholds": {
    "単勝": 2120,
    "枠連": 4690,
    "複勝": 690,
    "馬連": 12430,
    "3連複": 47570,
    "ワイド": 4270,
    "馬単": 24720,
    "3連単": 303680
  },
  "baselines": {
    "単勝": {
      "discoveryCount": 52398,
      "validationCount": 22565,
      "discoveryRate": 0.10044276499103019,
      "validationRate": 0.09173498781298471
    },
    "枠連": {
      "discoveryCount": 51095,
      "validationCount": 21360,
      "discoveryRate": 0.10018592817301106,
      "validationRate": 0.09667602996254682
    },
    "複勝": {
      "discoveryCount": 156684,
      "validationCount": 67139,
      "discoveryRate": 0.10166322023946286,
      "validationRate": 0.09014134854555475
    },
    "馬連": {
      "discoveryCount": 52417,
      "validationCount": 22570,
      "discoveryRate": 0.10010111223458039,
      "validationRate": 0.09299955693398317
    },
    "3連複": {
      "discoveryCount": 52201,
      "validationCount": 22585,
      "discoveryRate": 0.10001724104902204,
      "validationRate": 0.08563205667478414
    },
    "ワイド": {
      "discoveryCount": 156465,
      "validationCount": 67697,
      "discoveryRate": 0.10030997347649634,
      "validationRate": 0.09247086281519122
    },
    "馬単": {
      "discoveryCount": 52229,
      "validationCount": 22608,
      "discoveryRate": 0.1000210610963258,
      "validationRate": 0.09142781316348195
    },
    "3連単": {
      "discoveryCount": 44012,
      "validationCount": 22666,
      "discoveryRate": 0.10006361901299646,
      "validationRate": 0.08338480543545398
    }
  },
  "patterns": [
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2635,
        "highPayoutCount": 435,
        "observedRate": 0.1650853889943074,
        "posteriorRate": 0.15470769394721245,
        "lift": 1.5468102531580996,
        "averagePayoutYen": 35370.34155597723,
        "medianPayoutYen": 9860
      },
      "validation": {
        "count": 1312,
        "highPayoutCount": 208,
        "observedRate": 0.15853658536585366,
        "posteriorRate": 0.13841944168730247,
        "lift": 1.6164442039853808,
        "averagePayoutYen": 34062.33993902439,
        "medianPayoutYen": 10740
      },
      "robustLift": 1.5468102531580996,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2645,
        "highPayoutCount": 433,
        "observedRate": 0.16370510396975424,
        "posteriorRate": 0.15358722082877527,
        "lift": 1.5348957227783961,
        "averagePayoutYen": 224977.61814744803,
        "medianPayoutYen": 55840
      },
      "validation": {
        "count": 1318,
        "highPayoutCount": 190,
        "observedRate": 0.1441578148710167,
        "posteriorRate": 0.12744356585133498,
        "lift": 1.528378763802306,
        "averagePayoutYen": 205667.64036418818,
        "medianPayoutYen": 58900
      },
      "robustLift": 1.528378763802306,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 3910,
        "highPayoutCount": 603,
        "observedRate": 0.15421994884910487,
        "posteriorRate": 0.14807451712573946,
        "lift": 1.480489919264648,
        "averagePayoutYen": 32067.02557544757,
        "medianPayoutYen": 9410
      },
      "validation": {
        "count": 1781,
        "highPayoutCount": 272,
        "observedRate": 0.1527231892195396,
        "posteriorRate": 0.13801667178316182,
        "lift": 1.6117407095257033,
        "averagePayoutYen": 29142.223469960696,
        "medianPayoutYen": 9710
      },
      "robustLift": 1.480489919264648,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 3925,
        "highPayoutCount": 597,
        "observedRate": 0.1521019108280255,
        "posteriorRate": 0.14622187785457588,
        "lift": 1.461289120830062,
        "averagePayoutYen": 196714.21401273884,
        "medianPayoutYen": 52220
      },
      "validation": {
        "count": 1790,
        "highPayoutCount": 254,
        "observedRate": 0.1418994413407821,
        "posteriorRate": 0.12912331996407292,
        "lift": 1.5485233705321042,
        "averagePayoutYen": 181122.50837988826,
        "medianPayoutYen": 54010
      },
      "robustLift": 1.461289120830062,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 12793,
        "highPayoutCount": 1852,
        "observedRate": 0.14476666927225826,
        "posteriorRate": 0.14308347404833455,
        "lift": 1.4305880920890848,
        "averagePayoutYen": 31233.213476119752,
        "medianPayoutYen": 8970
      },
      "validation": {
        "count": 5192,
        "highPayoutCount": 758,
        "observedRate": 0.14599383667180277,
        "posteriorRate": 0.1406915018161265,
        "lift": 1.642977026120588,
        "averagePayoutYen": 30657.36710323575,
        "medianPayoutYen": 9480
      },
      "robustLift": 1.4305880920890848,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 2634,
        "highPayoutCount": 396,
        "observedRate": 0.15034168564920272,
        "posteriorRate": 0.1423262782760977,
        "lift": 1.4218251435864708,
        "averagePayoutYen": 7647.243735763098,
        "medianPayoutYen": 2830
      },
      "validation": {
        "count": 1310,
        "highPayoutCount": 194,
        "observedRate": 0.1480916030534351,
        "posteriorRate": 0.13287280578286828,
        "lift": 1.4287466538920137,
        "averagePayoutYen": 7617.9312977099235,
        "medianPayoutYen": 2870
      },
      "robustLift": 1.4218251435864708,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 11713,
        "highPayoutCount": 1665,
        "observedRate": 0.14214974814308887,
        "posteriorRate": 0.1404368285219232,
        "lift": 1.400028567995076,
        "averagePayoutYen": 2460.480662511739,
        "medianPayoutYen": 1190
      },
      "validation": {
        "count": 5329,
        "highPayoutCount": 740,
        "observedRate": 0.1388628260461625,
        "posteriorRate": 0.13488341592170108,
        "lift": 1.4586585635225875,
        "averagePayoutYen": 2451.8690185775945,
        "medianPayoutYen": 1190
      },
      "robustLift": 1.400028567995076,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 7891,
        "highPayoutCount": 1125,
        "observedRate": 0.1425674819414523,
        "posteriorRate": 0.1400494561718804,
        "lift": 1.3961668149049549,
        "averagePayoutYen": 2502.7588391838804,
        "medianPayoutYen": 1250
      },
      "validation": {
        "count": 3929,
        "highPayoutCount": 583,
        "observedRate": 0.1483838126749809,
        "posteriorRate": 0.14207167112386443,
        "lift": 1.536393916944449,
        "averagePayoutYen": 2661.0384321710358,
        "medianPayoutYen": 1280
      },
      "robustLift": 1.3961668149049549,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 2632,
        "highPayoutCount": 385,
        "observedRate": 0.14627659574468085,
        "posteriorRate": 0.1388922511328745,
        "lift": 1.3886300506161757,
        "averagePayoutYen": 15314.099544072948,
        "medianPayoutYen": 5380
      },
      "validation": {
        "count": 1311,
        "highPayoutCount": 184,
        "observedRate": 0.14035087719298245,
        "posteriorRate": 0.12684368116054168,
        "lift": 1.3873642688328622,
        "averagePayoutYen": 14953.23417238749,
        "medianPayoutYen": 5440
      },
      "robustLift": 1.3873642688328622,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 12841,
        "highPayoutCount": 1800,
        "observedRate": 0.14017599875399112,
        "posteriorRate": 0.13867264893984696,
        "lift": 1.3858448285968539,
        "averagePayoutYen": 194363.42574565843,
        "medianPayoutYen": 50060
      },
      "validation": {
        "count": 5218,
        "highPayoutCount": 706,
        "observedRate": 0.13530088156381756,
        "posteriorRate": 0.13076117571138982,
        "lift": 1.568165507235112,
        "averagePayoutYen": 188873.39593714065,
        "medianPayoutYen": 51580
      },
      "robustLift": 1.3858448285968539,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 6355,
        "highPayoutCount": 877,
        "observedRate": 0.13800157356412274,
        "posteriorRate": 0.13523101685259095,
        "lift": 1.3520770562578244,
        "averagePayoutYen": 29148.926829268294,
        "medianPayoutYen": 7940
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 330,
        "observedRate": 0.132,
        "posteriorRate": 0.12427200944579736,
        "lift": 1.4512323336780422,
        "averagePayoutYen": 27495.308,
        "medianPayoutYen": 8340
      },
      "robustLift": 1.3520770562578244,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 5600,
        "highPayoutCount": 772,
        "observedRate": 0.13785714285714284,
        "posteriorRate": 0.13475931303385216,
        "lift": 1.3467363499650093,
        "averagePayoutYen": 185042.99464285714,
        "medianPayoutYen": 45490
      },
      "validation": {
        "count": 2512,
        "highPayoutCount": 314,
        "observedRate": 0.125,
        "posteriorRate": 0.11809176717056008,
        "lift": 1.4162264522158279,
        "averagePayoutYen": 167848.8694267516,
        "medianPayoutYen": 44450
      },
      "robustLift": 1.3467363499650093,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 589,
        "highPayoutCount": 96,
        "observedRate": 0.16298811544991512,
        "posteriorRate": 0.1340971620812656,
        "lift": 1.3401190502998777,
        "averagePayoutYen": 209259.21901528013,
        "medianPayoutYen": 50610
      },
      "validation": {
        "count": 315,
        "highPayoutCount": 50,
        "observedRate": 0.15873015873015872,
        "posteriorRate": 0.11250601560457299,
        "lift": 1.3492388093615086,
        "averagePayoutYen": 220623.5873015873,
        "medianPayoutYen": 62120
      },
      "robustLift": 1.3401190502998777,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 4941,
        "highPayoutCount": 676,
        "observedRate": 0.13681441003845377,
        "posteriorRate": 0.1334372007914902,
        "lift": 1.3335236333412959,
        "averagePayoutYen": 180453.6308439587,
        "medianPayoutYen": 43430
      },
      "validation": {
        "count": 2164,
        "highPayoutCount": 261,
        "observedRate": 0.12060998151571165,
        "posteriorRate": 0.11362327429344105,
        "lift": 1.3626376376376375,
        "averagePayoutYen": 189909.3807763401,
        "medianPayoutYen": 39540
      },
      "robustLift": 1.3335236333412959,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 12824,
        "highPayoutCount": 1714,
        "observedRate": 0.1336556456643793,
        "posteriorRate": 0.13239646923726284,
        "lift": 1.3226273542995246,
        "averagePayoutYen": 7151.783374922021,
        "medianPayoutYen": 2640
      },
      "validation": {
        "count": 5186,
        "highPayoutCount": 725,
        "observedRate": 0.1397994600848438,
        "posteriorRate": 0.1356840975144199,
        "lift": 1.4589757412579596,
        "averagePayoutYen": 7289.20362514462,
        "medianPayoutYen": 2750
      },
      "robustLift": 1.3226273542995246,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 590,
        "highPayoutCount": 94,
        "observedRate": 0.15932203389830507,
        "posteriorRate": 0.13211800048120279,
        "lift": 1.320952258785533,
        "averagePayoutYen": 33057.4406779661,
        "medianPayoutYen": 9520
      },
      "validation": {
        "count": 315,
        "highPayoutCount": 58,
        "observedRate": 0.18412698412698414,
        "posteriorRate": 0.12370064826673874,
        "lift": 1.4445600522772981,
        "averagePayoutYen": 34665.90476190476,
        "medianPayoutYen": 11490
      },
      "robustLift": 1.320952258785533,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 38332,
        "highPayoutCount": 5094,
        "observedRate": 0.13289157883752478,
        "posteriorRate": 0.13247205878497756,
        "lift": 1.3206269944435498,
        "averagePayoutYen": 2378.464468329333,
        "medianPayoutYen": 1160
      },
      "validation": {
        "count": 15554,
        "highPayoutCount": 2199,
        "observedRate": 0.14137842355664137,
        "posteriorRate": 0.1398552031523356,
        "lift": 1.5124245507673584,
        "averagePayoutYen": 2513.6325061077537,
        "medianPayoutYen": 1200
      },
      "robustLift": 1.3206269944435498,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 19394,
        "highPayoutCount": 2576,
        "observedRate": 0.13282458492317212,
        "posteriorRate": 0.13200003119154072,
        "lift": 1.319772769245282,
        "averagePayoutYen": 29375.975559451377,
        "medianPayoutYen": 7580
      },
      "validation": {
        "count": 7060,
        "highPayoutCount": 872,
        "observedRate": 0.1235127478753541,
        "posteriorRate": 0.12100741115573968,
        "lift": 1.4131087802235682,
        "averagePayoutYen": 28286.706798866857,
        "medianPayoutYen": 7370
      },
      "robustLift": 1.319772769245282,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1766,
        "highPayoutCount": 249,
        "observedRate": 0.14099660249150622,
        "posteriorRate": 0.1320189703169674,
        "lift": 1.316110110904384,
        "averagePayoutYen": 2479.3997734994336,
        "medianPayoutYen": 1190
      },
      "validation": {
        "count": 941,
        "highPayoutCount": 148,
        "observedRate": 0.15727948990435706,
        "posteriorRate": 0.13479211062289773,
        "lift": 1.4576711681850332,
        "averagePayoutYen": 2603.5494155154092,
        "medianPayoutYen": 1310
      },
      "robustLift": 1.316110110904384,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 3908,
        "highPayoutCount": 530,
        "observedRate": 0.13561924257932445,
        "posteriorRate": 0.13158133633125293,
        "lift": 1.3155362969458286,
        "averagePayoutYen": 14155.78045035824,
        "medianPayoutYen": 5210
      },
      "validation": {
        "count": 1776,
        "highPayoutCount": 234,
        "observedRate": 0.13175675675675674,
        "posteriorRate": 0.12289714700427985,
        "lift": 1.3441986935039958,
        "averagePayoutYen": 14495.033783783783,
        "medianPayoutYen": 5220
      },
      "robustLift": 1.3155362969458286,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 3920,
        "highPayoutCount": 528,
        "observedRate": 0.1346938775510204,
        "posteriorRate": 0.13078066880481679,
        "lift": 1.3064856711915536,
        "averagePayoutYen": 7190.181122448979,
        "medianPayoutYen": 2710
      },
      "validation": {
        "count": 1771,
        "highPayoutCount": 246,
        "observedRate": 0.13890457368718237,
        "posteriorRate": 0.12879778884499848,
        "lift": 1.3849290587096788,
        "averagePayoutYen": 7359.288537549407,
        "medianPayoutYen": 2790
      },
      "robustLift": 1.3064856711915536,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 16712,
        "highPayoutCount": 2200,
        "observedRate": 0.13164193393968407,
        "posteriorRate": 0.13072459966921324,
        "lift": 1.3064148684471872,
        "averagePayoutYen": 189750.32192436574,
        "medianPayoutYen": 43560
      },
      "validation": {
        "count": 7092,
        "highPayoutCount": 842,
        "observedRate": 0.11872532430908066,
        "posteriorRate": 0.11639784018937394,
        "lift": 1.3959118760488622,
        "averagePayoutYen": 183604.28652002255,
        "medianPayoutYen": 40110
      },
      "robustLift": 1.3064148684471872,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 18806,
        "highPayoutCount": 2471,
        "observedRate": 0.13139423588216526,
        "posteriorRate": 0.13058161299722942,
        "lift": 1.3055910323823738,
        "averagePayoutYen": 29698.925874720833,
        "medianPayoutYen": 7960
      },
      "validation": {
        "count": 6762,
        "highPayoutCount": 870,
        "observedRate": 0.12866015971606035,
        "posteriorRate": 0.1256976078679967,
        "lift": 1.467880286297159,
        "averagePayoutYen": 28797.326234841763,
        "medianPayoutYen": 8100
      },
      "robustLift": 1.3055910323823738,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 12794,
        "highPayoutCount": 1683,
        "observedRate": 0.13154603720493982,
        "posteriorRate": 0.1303603528319665,
        "lift": 1.303329032936596,
        "averagePayoutYen": 14124.06049710802,
        "medianPayoutYen": 5050
      },
      "validation": {
        "count": 5196,
        "highPayoutCount": 703,
        "observedRate": 0.1352963818321786,
        "posteriorRate": 0.13144555944201913,
        "lift": 1.437697729978311,
        "averagePayoutYen": 14442.167051578137,
        "medianPayoutYen": 5210
      },
      "robustLift": 1.303329032936596,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2760,
        "highPayoutCount": 375,
        "observedRate": 0.1358695652173913,
        "posteriorRate": 0.13037785567683996,
        "lift": 1.3029496330719983,
        "averagePayoutYen": 190876.20289855072,
        "medianPayoutYen": 40420
      },
      "validation": {
        "count": 1251,
        "highPayoutCount": 154,
        "observedRate": 0.12310151878497202,
        "posteriorRate": 0.11176036705752541,
        "lift": 1.3402965501195085,
        "averagePayoutYen": 174969.52038369305,
        "medianPayoutYen": 41550
      },
      "robustLift": 1.3029496330719983,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 3264,
        "highPayoutCount": 440,
        "observedRate": 0.13480392156862744,
        "posteriorRate": 0.13018294912978506,
        "lift": 1.3016050809277744,
        "averagePayoutYen": 27678.86948529412,
        "medianPayoutYen": 7340
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 183,
        "observedRate": 0.13646532438478748,
        "posteriorRate": 0.12265943961835529,
        "lift": 1.4324009533508555,
        "averagePayoutYen": 32706.935123042505,
        "medianPayoutYen": 8280
      },
      "robustLift": 1.3016050809277744,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2041,
        "highPayoutCount": 280,
        "observedRate": 0.13718765311122,
        "posteriorRate": 0.12987352244175954,
        "lift": 1.2985113474396266,
        "averagePayoutYen": 29019.37775600196,
        "medianPayoutYen": 7990
      },
      "validation": {
        "count": 805,
        "highPayoutCount": 105,
        "observedRate": 0.13043478260869565,
        "posteriorRate": 0.11326898723171808,
        "lift": 1.3227404739546809,
        "averagePayoutYen": 28850.63354037267,
        "medianPayoutYen": 7640
      },
      "robustLift": 1.2985113474396266,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 8829,
        "highPayoutCount": 1162,
        "observedRate": 0.13161173405821724,
        "posteriorRate": 0.12992087142314268,
        "lift": 1.2983826959753304,
        "averagePayoutYen": 178335.6767470835,
        "medianPayoutYen": 41590
      },
      "validation": {
        "count": 4000,
        "highPayoutCount": 478,
        "observedRate": 0.1195,
        "posteriorRate": 0.11548720060393933,
        "lift": 1.3849909465020576,
        "averagePayoutYen": 176543.5,
        "medianPayoutYen": 41830
      },
      "robustLift": 1.2983826959753304,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 5779,
        "highPayoutCount": 765,
        "observedRate": 0.13237584357155216,
        "posteriorRate": 0.12979911140699332,
        "lift": 1.297767365362279,
        "averagePayoutYen": 27724.72919190171,
        "medianPayoutYen": 7260
      },
      "validation": {
        "count": 2155,
        "highPayoutCount": 278,
        "observedRate": 0.12900232018561486,
        "posteriorRate": 0.12083466227397065,
        "lift": 1.4110914412914308,
        "averagePayoutYen": 29020.032482598606,
        "medianPayoutYen": 6950
      },
      "robustLift": 1.297767365362279,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2757,
        "highPayoutCount": 372,
        "observedRate": 0.13492927094668117,
        "posteriorRate": 0.12956973304406233,
        "lift": 1.2954739771371573,
        "averagePayoutYen": 29703.075807036636,
        "medianPayoutYen": 7280
      },
      "validation": {
        "count": 1245,
        "highPayoutCount": 160,
        "observedRate": 0.1285140562248996,
        "posteriorRate": 0.11622695033661437,
        "lift": 1.357283181671373,
        "averagePayoutYen": 28269.26907630522,
        "medianPayoutYen": 7580
      },
      "robustLift": 1.2954739771371573,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 19045,
        "highPayoutCount": 2477,
        "observedRate": 0.1300603833027041,
        "posteriorRate": 0.12929930860773847,
        "lift": 1.28899753560432,
        "averagePayoutYen": 2336.4799159884483,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 7488,
        "highPayoutCount": 941,
        "observedRate": 0.12566773504273504,
        "posteriorRate": 0.12358981364641908,
        "lift": 1.3365270949555323,
        "averagePayoutYen": 2340.571581196581,
        "medianPayoutYen": 1090
      },
      "robustLift": 1.28899753560432,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 3180,
        "highPayoutCount": 424,
        "observedRate": 0.13333333333333333,
        "posteriorRate": 0.12880669035992146,
        "lift": 1.2878448656346027,
        "averagePayoutYen": 28060.122641509435,
        "medianPayoutYen": 6780
      },
      "validation": {
        "count": 1398,
        "highPayoutCount": 177,
        "observedRate": 0.12660944206008584,
        "posteriorRate": 0.11581455655289362,
        "lift": 1.3524673007999497,
        "averagePayoutYen": 28814.334763948496,
        "medianPayoutYen": 7380
      },
      "robustLift": 1.2878448656346027,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 10593,
        "highPayoutCount": 1375,
        "observedRate": 0.12980269989615784,
        "posteriorRate": 0.12846016591765178,
        "lift": 1.2843802185534074,
        "averagePayoutYen": 27970.899650712734,
        "medianPayoutYen": 7080
      },
      "validation": {
        "count": 3985,
        "highPayoutCount": 520,
        "observedRate": 0.13048933500627352,
        "posteriorRate": 0.12548852359808071,
        "lift": 1.465438627436739,
        "averagePayoutYen": 27837.124215809286,
        "medianPayoutYen": 7730
      },
      "robustLift": 1.2843802185534074,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 8088,
        "highPayoutCount": 1054,
        "observedRate": 0.13031651829871416,
        "posteriorRate": 0.12856951405894831,
        "lift": 1.28172214190719,
        "averagePayoutYen": 2235.8803165182985,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 3506,
        "highPayoutCount": 429,
        "observedRate": 0.12236166571591557,
        "posteriorRate": 0.1186309114846719,
        "lift": 1.2829004496450214,
        "averagePayoutYen": 2222.2960638904733,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.28172214190719,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2842,
        "highPayoutCount": 378,
        "observedRate": 0.1330049261083744,
        "posteriorRate": 0.12807654383797074,
        "lift": 1.2799511460937256,
        "averagePayoutYen": 186451.27023223083,
        "medianPayoutYen": 39950
      },
      "validation": {
        "count": 1310,
        "highPayoutCount": 154,
        "observedRate": 0.11755725190839694,
        "posteriorRate": 0.10811734956780497,
        "lift": 1.2966073255576018,
        "averagePayoutYen": 165543.786259542,
        "medianPayoutYen": 42810
      },
      "robustLift": 1.2799511460937256,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1438,
        "highPayoutCount": 201,
        "observedRate": 0.13977746870653684,
        "posteriorRate": 0.12953137745433346,
        "lift": 1.2944902326339973,
        "averagePayoutYen": 179885.38247566065,
        "medianPayoutYen": 41020
      },
      "validation": {
        "count": 631,
        "highPayoutCount": 79,
        "observedRate": 0.12519809825673534,
        "posteriorRate": 0.10671299975042174,
        "lift": 1.2797655303402429,
        "averagePayoutYen": 156538.2884310618,
        "medianPayoutYen": 38250
      },
      "robustLift": 1.2797655303402429,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 9532,
        "highPayoutCount": 1236,
        "observedRate": 0.1296684851028116,
        "posteriorRate": 0.12820524189974564,
        "lift": 1.2780906768935139,
        "averagePayoutYen": 2295.145824590852,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 4189,
        "highPayoutCount": 522,
        "observedRate": 0.12461207925519217,
        "posteriorRate": 0.1211847795708244,
        "lift": 1.3105185339626355,
        "averagePayoutYen": 2379.188350441633,
        "medianPayoutYen": 1030
      },
      "robustLift": 1.2780906768935139,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 3513,
        "highPayoutCount": 463,
        "observedRate": 0.1317961855963564,
        "posteriorRate": 0.1278424643674304,
        "lift": 1.2776118396320044,
        "averagePayoutYen": 185952.81810418447,
        "medianPayoutYen": 41250
      },
      "validation": {
        "count": 1711,
        "highPayoutCount": 205,
        "observedRate": 0.11981297486849796,
        "posteriorRate": 0.11157503515048711,
        "lift": 1.3380739400639898,
        "averagePayoutYen": 172788.12390414963,
        "medianPayoutYen": 44690
      },
      "robustLift": 1.2776118396320044,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 3540,
        "highPayoutCount": 466,
        "observedRate": 0.13163841807909604,
        "posteriorRate": 0.12773064591745006,
        "lift": 1.2764943660578592,
        "averagePayoutYen": 185285.81920903956,
        "medianPayoutYen": 40860
      },
      "validation": {
        "count": 1739,
        "highPayoutCount": 207,
        "observedRate": 0.11903392754456585,
        "posteriorRate": 0.11107298022229879,
        "lift": 1.3320529998511241,
        "averagePayoutYen": 171116.37147786084,
        "medianPayoutYen": 44340
      },
      "robustLift": 1.2764943660578592,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 3498,
        "highPayoutCount": 460,
        "observedRate": 0.13150371640937678,
        "posteriorRate": 0.12756593810017783,
        "lift": 1.275439481855465,
        "averagePayoutYen": 29014.325328759292,
        "medianPayoutYen": 7300
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 218,
        "observedRate": 0.12793427230046947,
        "posteriorRate": 0.11833758091533216,
        "lift": 1.3819308505546932,
        "averagePayoutYen": 28374.771126760563,
        "medianPayoutYen": 8150
      },
      "robustLift": 1.275439481855465,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2799,
        "highPayoutCount": 371,
        "observedRate": 0.1325473383351197,
        "posteriorRate": 0.1276240707809937,
        "lift": 1.275429292282719,
        "averagePayoutYen": 185726.4987495534,
        "medianPayoutYen": 42140
      },
      "validation": {
        "count": 1347,
        "highPayoutCount": 185,
        "observedRate": 0.13734224201930215,
        "posteriorRate": 0.12273546438425934,
        "lift": 1.4719164210230804,
        "averagePayoutYen": 224638.03266518188,
        "medianPayoutYen": 45100
      },
      "robustLift": 1.275429292282719,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 8160,
        "highPayoutCount": 1072,
        "observedRate": 0.13137254901960785,
        "posteriorRate": 0.1296572298059736,
        "lift": 1.2753602482842092,
        "averagePayoutYen": 388.3468137254902,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 3502,
        "highPayoutCount": 424,
        "observedRate": 0.12107367218732153,
        "posteriorRate": 0.11720906403617624,
        "lift": 1.3002807915275671,
        "averagePayoutYen": 372.4500285551114,
        "medianPayoutYen": 210
      },
      "robustLift": 1.2753602482842092,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 3536,
        "highPayoutCount": 463,
        "observedRate": 0.13093891402714933,
        "posteriorRate": 0.1271081814976489,
        "lift": 1.270862704914532,
        "averagePayoutYen": 28917.9157239819,
        "medianPayoutYen": 7260
      },
      "validation": {
        "count": 1731,
        "highPayoutCount": 221,
        "observedRate": 0.12767186597342575,
        "posteriorRate": 0.11825012475902827,
        "lift": 1.3809095489569048,
        "averagePayoutYen": 28159.39919121895,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.270862704914532,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 1752,
        "highPayoutCount": 243,
        "observedRate": 0.1386986301369863,
        "posteriorRate": 0.13011039987766918,
        "lift": 1.300879713467575,
        "averagePayoutYen": 30186.75799086758,
        "medianPayoutYen": 7110
      },
      "validation": {
        "count": 630,
        "highPayoutCount": 80,
        "observedRate": 0.12698412698412698,
        "posteriorRate": 0.10868675074105492,
        "lift": 1.2692297132816575,
        "averagePayoutYen": 25161.777777777777,
        "medianPayoutYen": 7500
      },
      "robustLift": 1.2692297132816575,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1259,
        "highPayoutCount": 173,
        "observedRate": 0.1374106433677522,
        "posteriorRate": 0.12686468831054473,
        "lift": 1.2647265662000244,
        "averagePayoutYen": 2394.289118347895,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 492,
        "highPayoutCount": 75,
        "observedRate": 0.1524390243902439,
        "posteriorRate": 0.12221313649959235,
        "lift": 1.3216394092033392,
        "averagePayoutYen": 2819.918699186992,
        "medianPayoutYen": 1090
      },
      "robustLift": 1.2647265662000244,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2839,
        "highPayoutCount": 372,
        "observedRate": 0.13103205353997888,
        "posteriorRate": 0.1263877270214169,
        "lift": 1.2636594020771852,
        "averagePayoutYen": 29214.466361394858,
        "medianPayoutYen": 7120
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 167,
        "observedRate": 0.12796934865900383,
        "posteriorRate": 0.1162415669459236,
        "lift": 1.3574538725303436,
        "averagePayoutYen": 27229.946360153255,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.2636594020771852,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 420,
        "highPayoutCount": 75,
        "observedRate": 0.17857142857142858,
        "posteriorRate": 0.13587893535272938,
        "lift": 1.3585551243723093,
        "averagePayoutYen": 29650.261904761905,
        "medianPayoutYen": 7990
      },
      "validation": {
        "count": 164,
        "highPayoutCount": 29,
        "observedRate": 0.17682926829268292,
        "posteriorRate": 0.10815666918281938,
        "lift": 1.263039489914155,
        "averagePayoutYen": 39548.04878048781,
        "medianPayoutYen": 7770
      },
      "robustLift": 1.263039489914155,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 16699,
        "highPayoutCount": 2121,
        "observedRate": 0.12701359362836098,
        "posteriorRate": 0.12623011858285355,
        "lift": 1.261498632849353,
        "averagePayoutYen": 186230.66411162345,
        "medianPayoutYen": 44760
      },
      "validation": {
        "count": 6794,
        "highPayoutCount": 821,
        "observedRate": 0.12084191934059464,
        "posteriorRate": 0.11827425318312682,
        "lift": 1.4184149326183875,
        "averagePayoutYen": 180178.90197232852,
        "medianPayoutYen": 43430
      },
      "robustLift": 1.261498632849353,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 58117,
        "highPayoutCount": 7352,
        "observedRate": 0.12650343273052636,
        "posteriorRate": 0.12628000386813124,
        "lift": 1.2588977894378564,
        "averagePayoutYen": 2296.20747801848,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 21154,
        "highPayoutCount": 2594,
        "observedRate": 0.12262456273045287,
        "posteriorRate": 0.12192830107174636,
        "lift": 1.3185591370054335,
        "averagePayoutYen": 2369.367022785289,
        "medianPayoutYen": 1030
      },
      "robustLift": 1.2588977894378564,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 3249,
        "highPayoutCount": 422,
        "observedRate": 0.1298861188057864,
        "posteriorRate": 0.12590253948373192,
        "lift": 1.2588083630703486,
        "averagePayoutYen": 26787.25453985842,
        "medianPayoutYen": 7520
      },
      "validation": {
        "count": 1198,
        "highPayoutCount": 148,
        "observedRate": 0.12353923205342238,
        "posteriorRate": 0.1123769307051779,
        "lift": 1.312323154072618,
        "averagePayoutYen": 27102.9632721202,
        "medianPayoutYen": 7270
      },
      "robustLift": 1.2588083630703486,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1176,
        "highPayoutCount": 169,
        "observedRate": 0.14370748299319727,
        "posteriorRate": 0.13068723717571493,
        "lift": 1.3060414810575762,
        "averagePayoutYen": 224827.72959183675,
        "medianPayoutYen": 40290
      },
      "validation": {
        "count": 565,
        "highPayoutCount": 70,
        "observedRate": 0.12389380530973451,
        "posteriorRate": 0.1048754955096028,
        "lift": 1.2577290905929404,
        "averagePayoutYen": 175022.10619469028,
        "medianPayoutYen": 46820
      },
      "robustLift": 1.2577290905929404,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2269,
        "highPayoutCount": 298,
        "observedRate": 0.13133539003966505,
        "posteriorRate": 0.12568025298826688,
        "lift": 1.2565858812948707,
        "averagePayoutYen": 30047.346848832083,
        "medianPayoutYen": 7350
      },
      "validation": {
        "count": 1056,
        "highPayoutCount": 130,
        "observedRate": 0.12310606060606061,
        "posteriorRate": 0.11106428556387667,
        "lift": 1.2969942551500282,
        "averagePayoutYen": 27131.19318181818,
        "medianPayoutYen": 7610
      },
      "robustLift": 1.2565858812948707,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 6117,
        "highPayoutCount": 783,
        "observedRate": 0.1280039234919078,
        "posteriorRate": 0.12591128709962948,
        "lift": 1.2552220156765548,
        "averagePayoutYen": 2331.767206146804,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 2410,
        "highPayoutCount": 314,
        "observedRate": 0.13029045643153528,
        "posteriorRate": 0.12379224446996413,
        "lift": 1.3387162258599299,
        "averagePayoutYen": 2482.5767634854774,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.2552220156765548,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 56361,
        "highPayoutCount": 7088,
        "observedRate": 0.12576072106598535,
        "posteriorRate": 0.12553692314131387,
        "lift": 1.2514899445240952,
        "averagePayoutYen": 2309.366938130977,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 20268,
        "highPayoutCount": 2595,
        "observedRate": 0.12803433984606277,
        "posteriorRate": 0.12717813132740732,
        "lift": 1.3753319419283536,
        "averagePayoutYen": 2396.4135583185316,
        "medianPayoutYen": 1110
      },
      "robustLift": 1.2514899445240952,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 31754,
        "highPayoutCount": 3998,
        "observedRate": 0.12590539774516596,
        "posteriorRate": 0.12550861867483873,
        "lift": 1.2512077745115413,
        "averagePayoutYen": 2277.053599546514,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 11935,
        "highPayoutCount": 1508,
        "observedRate": 0.12635106828655215,
        "posteriorRate": 0.12498877614858027,
        "lift": 1.351655779381859,
        "averagePayoutYen": 2362.4759111855888,
        "medianPayoutYen": 1060
      },
      "robustLift": 1.2512077745115413,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2697,
        "highPayoutCount": 349,
        "observedRate": 0.12940304041527623,
        "posteriorRate": 0.12480720066453269,
        "lift": 1.2478568630318465,
        "averagePayoutYen": 27428.283277715982,
        "medianPayoutYen": 6960
      },
      "validation": {
        "count": 1170,
        "highPayoutCount": 138,
        "observedRate": 0.11794871794871795,
        "posteriorRate": 0.10827307086071382,
        "lift": 1.2643988135414796,
        "averagePayoutYen": 26194.846153846152,
        "medianPayoutYen": 7260
      },
      "robustLift": 1.2478568630318465,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 5254,
        "highPayoutCount": 670,
        "observedRate": 0.12752188808526838,
        "posteriorRate": 0.12515727958607026,
        "lift": 1.2477052405501423,
        "averagePayoutYen": 2347.381043014846,
        "medianPayoutYen": 990
      },
      "validation": {
        "count": 1888,
        "highPayoutCount": 235,
        "observedRate": 0.12447033898305085,
        "posteriorRate": 0.11777028115895964,
        "lift": 1.2735934063287684,
        "averagePayoutYen": 2280.169491525424,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.2477052405501423,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2181,
        "highPayoutCount": 284,
        "observedRate": 0.130215497478221,
        "posteriorRate": 0.12459224524673564,
        "lift": 1.2451303128518003,
        "averagePayoutYen": 187484.12196240257,
        "medianPayoutYen": 39740
      },
      "validation": {
        "count": 1170,
        "highPayoutCount": 138,
        "observedRate": 0.11794871794871795,
        "posteriorRate": 0.10760024114833952,
        "lift": 1.2904058549567532,
        "averagePayoutYen": 177374.37606837606,
        "medianPayoutYen": 38960
      },
      "robustLift": 1.2451303128518003,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 1260,
        "highPayoutCount": 169,
        "observedRate": 0.13412698412698412,
        "posteriorRate": 0.12443671620710854,
        "lift": 1.2441526571015655,
        "averagePayoutYen": 27495.65873015873,
        "medianPayoutYen": 8030
      },
      "validation": {
        "count": 490,
        "highPayoutCount": 71,
        "observedRate": 0.14489795918367346,
        "posteriorRate": 0.11496568518928492,
        "lift": 1.3425542916235782,
        "averagePayoutYen": 24709.755102040817,
        "medianPayoutYen": 8880
      },
      "robustLift": 1.2441526571015655,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 5723,
        "highPayoutCount": 727,
        "observedRate": 0.12703127730211428,
        "posteriorRate": 0.12486077784420874,
        "lift": 1.2483925424718523,
        "averagePayoutYen": 29035.935698060457,
        "medianPayoutYen": 6360
      },
      "validation": {
        "count": 1425,
        "highPayoutCount": 162,
        "observedRate": 0.11368421052631579,
        "posteriorRate": 0.10639793679864523,
        "lift": 1.242501242294417,
        "averagePayoutYen": 25700.63859649123,
        "medianPayoutYen": 7000
      },
      "robustLift": 1.242501242294417,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 588,
        "highPayoutCount": 85,
        "observedRate": 0.1445578231292517,
        "posteriorRate": 0.1240905611655909,
        "lift": 1.2406443183609583,
        "averagePayoutYen": 14614.489795918367,
        "medianPayoutYen": 4790
      },
      "validation": {
        "count": 311,
        "highPayoutCount": 47,
        "observedRate": 0.15112540192926044,
        "posteriorRate": 0.11432047667292351,
        "lift": 1.2503905837549372,
        "averagePayoutYen": 16829.581993569132,
        "medianPayoutYen": 5560
      },
      "robustLift": 1.2406443183609583,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 1170,
        "highPayoutCount": 169,
        "observedRate": 0.14444444444444443,
        "posteriorRate": 0.13114288654162337,
        "lift": 1.3112028002986558,
        "averagePayoutYen": 34323.717948717946,
        "medianPayoutYen": 7270
      },
      "validation": {
        "count": 562,
        "highPayoutCount": 70,
        "observedRate": 0.12455516014234876,
        "posteriorRate": 0.1062297818619511,
        "lift": 1.240537550854274,
        "averagePayoutYen": 29295.195729537365,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.240537550854274,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 1098,
        "highPayoutCount": 148,
        "observedRate": 0.13479052823315119,
        "posteriorRate": 0.1239102756724099,
        "lift": 1.2388891592368263,
        "averagePayoutYen": 26738.378870673954,
        "medianPayoutYen": 7320
      },
      "validation": {
        "count": 617,
        "highPayoutCount": 79,
        "observedRate": 0.1280388978930308,
        "posteriorRate": 0.1090564264435023,
        "lift": 1.2735467379661323,
        "averagePayoutYen": 28062.090761750405,
        "medianPayoutYen": 7710
      },
      "robustLift": 1.2388891592368263,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2107,
        "highPayoutCount": 272,
        "observedRate": 0.129093497864262,
        "posteriorRate": 0.12351692386824357,
        "lift": 1.2349563192580317,
        "averagePayoutYen": 25382.216421452304,
        "medianPayoutYen": 7370
      },
      "validation": {
        "count": 909,
        "highPayoutCount": 109,
        "observedRate": 0.11991199119911991,
        "posteriorRate": 0.10774735864967501,
        "lift": 1.2582596148412153,
        "averagePayoutYen": 25466.105610561055,
        "medianPayoutYen": 7470
      },
      "robustLift": 1.2349563192580317,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 9786,
        "highPayoutCount": 1224,
        "observedRate": 0.12507664009809932,
        "posteriorRate": 0.12387273835681978,
        "lift": 1.2348995225867987,
        "averagePayoutYen": 2268.6664622930716,
        "medianPayoutYen": 1010
      },
      "validation": {
        "count": 4019,
        "highPayoutCount": 549,
        "observedRate": 0.1366011445633242,
        "posteriorRate": 0.13171839597424112,
        "lift": 1.424431350202588,
        "averagePayoutYen": 2605.260014929087,
        "medianPayoutYen": 1120
      },
      "robustLift": 1.2348995225867987,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2676,
        "highPayoutCount": 342,
        "observedRate": 0.12780269058295965,
        "posteriorRate": 0.12343570828290247,
        "lift": 1.2335722963095148,
        "averagePayoutYen": 171874.98131539611,
        "medianPayoutYen": 44110
      },
      "validation": {
        "count": 1205,
        "highPayoutCount": 138,
        "observedRate": 0.11452282157676348,
        "posteriorRate": 0.1053914385441214,
        "lift": 1.2639165852069079,
        "averagePayoutYen": 173188.53112033196,
        "medianPayoutYen": 41880
      },
      "robustLift": 1.2335722963095148,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 3250,
        "highPayoutCount": 415,
        "observedRate": 0.1276923076923077,
        "posteriorRate": 0.12400280814617679,
        "lift": 1.2397669729453804,
        "averagePayoutYen": 13970.433846153846,
        "medianPayoutYen": 4530
      },
      "validation": {
        "count": 1202,
        "highPayoutCount": 146,
        "observedRate": 0.12146422628951747,
        "posteriorRate": 0.11264036814438363,
        "lift": 1.2320142443194124,
        "averagePayoutYen": 14502.212978369384,
        "medianPayoutYen": 4800
      },
      "robustLift": 1.2320142443194124,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 4458,
        "highPayoutCount": 562,
        "observedRate": 0.12606550022431584,
        "posteriorRate": 0.12346812963659706,
        "lift": 1.2308659384256235,
        "averagePayoutYen": 2238.4140870345445,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 1985,
        "highPayoutCount": 244,
        "observedRate": 0.12292191435768261,
        "posteriorRate": 0.11679494221633627,
        "lift": 1.263045879108517,
        "averagePayoutYen": 2165.9798488664987,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2308659384256235,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 18865,
        "highPayoutCount": 2334,
        "observedRate": 0.12372117678240127,
        "posteriorRate": 0.12311131196061402,
        "lift": 1.2298695710004774,
        "averagePayoutYen": 6926.508348794063,
        "medianPayoutYen": 2470
      },
      "validation": {
        "count": 6761,
        "highPayoutCount": 854,
        "observedRate": 0.12631267563969828,
        "posteriorRate": 0.12401869969246544,
        "lift": 1.3335407584844903,
        "averagePayoutYen": 6929.587339151013,
        "medianPayoutYen": 2540
      },
      "robustLift": 1.2298695710004774,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 9739,
        "highPayoutCount": 1212,
        "observedRate": 0.12444809528699045,
        "posteriorRate": 0.12326936094718705,
        "lift": 1.2288843937943053,
        "averagePayoutYen": 2240.9210391210595,
        "medianPayoutYen": 1030
      },
      "validation": {
        "count": 3591,
        "highPayoutCount": 426,
        "observedRate": 0.11862990810359231,
        "posteriorRate": 0.11543276250491216,
        "lift": 1.2483149717723703,
        "averagePayoutYen": 2291.1389585073794,
        "medianPayoutYen": 1060
      },
      "robustLift": 1.2288843937943053,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 6381,
        "highPayoutCount": 796,
        "observedRate": 0.12474533772136029,
        "posteriorRate": 0.12295459324477404,
        "lift": 1.2283039668594093,
        "averagePayoutYen": 6799.485973985269,
        "medianPayoutYen": 2470
      },
      "validation": {
        "count": 2495,
        "highPayoutCount": 304,
        "observedRate": 0.1218436873747495,
        "posteriorRate": 0.11702830666677515,
        "lift": 1.2583748839776632,
        "averagePayoutYen": 6760.112224448898,
        "medianPayoutYen": 2470
      },
      "robustLift": 1.2283039668594093,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 18813,
        "highPayoutCount": 2322,
        "observedRate": 0.12342529102216553,
        "posteriorRate": 0.12281937195402905,
        "lift": 1.2279351029454408,
        "averagePayoutYen": 13778.327752086323,
        "medianPayoutYen": 4800
      },
      "validation": {
        "count": 6776,
        "highPayoutCount": 845,
        "observedRate": 0.12470484061393153,
        "posteriorRate": 0.12241807402167963,
        "lift": 1.3389587892995323,
        "averagePayoutYen": 13701.15997638725,
        "medianPayoutYen": 4810
      },
      "robustLift": 1.2279351029454408,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 2769,
        "highPayoutCount": 353,
        "observedRate": 0.12748284579270494,
        "posteriorRate": 0.12329475561862654,
        "lift": 1.23170215461436,
        "averagePayoutYen": 6336.197183098591,
        "medianPayoutYen": 2340
      },
      "validation": {
        "count": 1247,
        "highPayoutCount": 153,
        "observedRate": 0.1226944667201283,
        "posteriorRate": 0.11419563735946857,
        "lift": 1.2279159291106267,
        "averagePayoutYen": 6638.420208500401,
        "medianPayoutYen": 2430
      },
      "robustLift": 1.2279159291106267,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 17314,
        "highPayoutCount": 2144,
        "observedRate": 0.1238304262446575,
        "posteriorRate": 0.12317025860212463,
        "lift": 1.227896432760843,
        "averagePayoutYen": 2233.24246274691,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 6455,
        "highPayoutCount": 769,
        "observedRate": 0.11913245546088304,
        "posteriorRate": 0.11721573420669958,
        "lift": 1.267596415110374,
        "averagePayoutYen": 2316.5143299767624,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.227896432760843,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1748,
        "highPayoutCount": 226,
        "observedRate": 0.12929061784897025,
        "posteriorRate": 0.1227899508480864,
        "lift": 1.2271188275944547,
        "averagePayoutYen": 182720.7837528604,
        "medianPayoutYen": 45100
      },
      "validation": {
        "count": 808,
        "highPayoutCount": 106,
        "observedRate": 0.1311881188118812,
        "posteriorRate": 0.1129146809768555,
        "lift": 1.354139766677993,
        "averagePayoutYen": 176134.60396039605,
        "medianPayoutYen": 40600
      },
      "robustLift": 1.2271188275944547,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 19399,
        "highPayoutCount": 2391,
        "observedRate": 0.12325377596783339,
        "posteriorRate": 0.12267001007830358,
        "lift": 1.226441798694433,
        "averagePayoutYen": 13704.75797721532,
        "medianPayoutYen": 4560
      },
      "validation": {
        "count": 7066,
        "highPayoutCount": 875,
        "observedRate": 0.1238324370223606,
        "posteriorRate": 0.12169097364284179,
        "lift": 1.3310060629498632,
        "averagePayoutYen": 14042.431361449193,
        "medianPayoutYen": 4470
      },
      "robustLift": 1.226441798694433,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 19419,
        "highPayoutCount": 2391,
        "observedRate": 0.12312683454348834,
        "posteriorRate": 0.12254885065100107,
        "lift": 1.2242506393317176,
        "averagePayoutYen": 6792.3224676862865,
        "medianPayoutYen": 2360
      },
      "validation": {
        "count": 7053,
        "highPayoutCount": 890,
        "observedRate": 0.1261874379696583,
        "posteriorRate": 0.1239904380334955,
        "lift": 1.3332368682305829,
        "averagePayoutYen": 7052.044520062384,
        "medianPayoutYen": 2370
      },
      "robustLift": 1.2242506393317176,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2016,
        "highPayoutCount": 258,
        "observedRate": 0.12797619047619047,
        "posteriorRate": 0.12241996046284222,
        "lift": 1.2239885761579825,
        "averagePayoutYen": 26540.35714285714,
        "medianPayoutYen": 7410
      },
      "validation": {
        "count": 688,
        "highPayoutCount": 88,
        "observedRate": 0.12790697674418605,
        "posteriorRate": 0.11011450196750175,
        "lift": 1.2859028060682665,
        "averagePayoutYen": 24494.6511627907,
        "medianPayoutYen": 8580
      },
      "robustLift": 1.2239885761579825,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1264,
        "highPayoutCount": 166,
        "observedRate": 0.13132911392405064,
        "posteriorRate": 0.12246701219189242,
        "lift": 1.2238914942301473,
        "averagePayoutYen": 167176.36075949366,
        "medianPayoutYen": 45840
      },
      "validation": {
        "count": 494,
        "highPayoutCount": 63,
        "observedRate": 0.12753036437246965,
        "posteriorRate": 0.10532434881059054,
        "lift": 1.2631120053655265,
        "averagePayoutYen": 148910.26315789475,
        "medianPayoutYen": 50060
      },
      "robustLift": 1.2238914942301473,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 25661,
        "highPayoutCount": 3144,
        "observedRate": 0.12252055648649701,
        "posteriorRate": 0.12209046368734036,
        "lift": 1.2206941763920427,
        "averagePayoutYen": 29110.22407544523,
        "medianPayoutYen": 6620
      },
      "validation": {
        "count": 9557,
        "highPayoutCount": 1038,
        "observedRate": 0.10861148896097102,
        "posteriorRate": 0.107469029366351,
        "lift": 1.2550093217368343,
        "averagePayoutYen": 25387.523281364443,
        "medianPayoutYen": 6550
      },
      "robustLift": 1.2206941763920427,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2273,
        "highPayoutCount": 304,
        "observedRate": 0.13374395072591289,
        "posteriorRate": 0.12767104562080717,
        "lift": 1.2758987420215633,
        "averagePayoutYen": 192132.77606687197,
        "medianPayoutYen": 41990
      },
      "validation": {
        "count": 1060,
        "highPayoutCount": 117,
        "observedRate": 0.11037735849056604,
        "posteriorRate": 0.10172589917803013,
        "lift": 1.219957264957265,
        "averagePayoutYen": 159163.84905660377,
        "medianPayoutYen": 41660
      },
      "robustLift": 1.219957264957265,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 1179,
        "highPayoutCount": 158,
        "observedRate": 0.13401187446988974,
        "posteriorRate": 0.1239133746976118,
        "lift": 1.237882096726647,
        "averagePayoutYen": 7153.748939779474,
        "medianPayoutYen": 2390
      },
      "validation": {
        "count": 563,
        "highPayoutCount": 74,
        "observedRate": 0.13143872113676733,
        "posteriorRate": 0.11335821116367976,
        "lift": 1.2189113034608157,
        "averagePayoutYen": 6982.6998223801065,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.2189113034608157,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 2042,
        "highPayoutCount": 260,
        "observedRate": 0.12732615083251714,
        "posteriorRate": 0.12197110783528331,
        "lift": 1.2184790469605575,
        "averagePayoutYen": 6851.6013712047015,
        "medianPayoutYen": 2470
      },
      "validation": {
        "count": 801,
        "highPayoutCount": 106,
        "observedRate": 0.132334581772784,
        "posteriorRate": 0.11721735470176141,
        "lift": 1.2604076682318985,
        "averagePayoutYen": 7052.259675405743,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.2184790469605575,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2042,
        "highPayoutCount": 260,
        "observedRate": 0.12732615083251714,
        "posteriorRate": 0.122012189904897,
        "lift": 1.2163515319190639,
        "averagePayoutYen": 2358.437806072478,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 1028,
        "highPayoutCount": 129,
        "observedRate": 0.1254863813229572,
        "posteriorRate": 0.11468287395785054,
        "lift": 1.2402055141093622,
        "averagePayoutYen": 2449.795719844358,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2163515319190639,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 7894,
        "highPayoutCount": 986,
        "observedRate": 0.1249049911325057,
        "posteriorRate": 0.12352056351200041,
        "lift": 1.21499754996009,
        "averagePayoutYen": 401.2351152774259,
        "medianPayoutYen": 250
      },
      "validation": {
        "count": 3922,
        "highPayoutCount": 467,
        "observedRate": 0.11907190209077001,
        "posteriorRate": 0.11580069522224727,
        "lift": 1.2846567872647818,
        "averagePayoutYen": 388.6409994900561,
        "medianPayoutYen": 250
      },
      "robustLift": 1.21499754996009,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 21719,
        "highPayoutCount": 2651,
        "observedRate": 0.12205902665868594,
        "posteriorRate": 0.12156405821623377,
        "lift": 1.214867695325359,
        "averagePayoutYen": 189064.05911874396,
        "medianPayoutYen": 38210
      },
      "validation": {
        "count": 9588,
        "highPayoutCount": 992,
        "observedRate": 0.10346266166040885,
        "posteriorRate": 0.10246752604259783,
        "lift": 1.2288512937997473,
        "averagePayoutYen": 163234.94055068836,
        "medianPayoutYen": 34570
      },
      "robustLift": 1.214867695325359,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 3509,
        "highPayoutCount": 437,
        "observedRate": 0.12453690510116842,
        "posteriorRate": 0.12148928813102773,
        "lift": 1.2136657167837013,
        "averagePayoutYen": 6539.643773154745,
        "medianPayoutYen": 2340
      },
      "validation": {
        "count": 1702,
        "highPayoutCount": 212,
        "observedRate": 0.1245593419506463,
        "posteriorRate": 0.11739317823205794,
        "lift": 1.262298252833515,
        "averagePayoutYen": 6670.793184488836,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.2136657167837013,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 40028,
        "highPayoutCount": 4867,
        "observedRate": 0.12158988707904467,
        "posteriorRate": 0.12132374211716618,
        "lift": 1.213028282370847,
        "averagePayoutYen": 28067.725092435296,
        "medianPayoutYen": 6690
      },
      "validation": {
        "count": 15641,
        "highPayoutCount": 1775,
        "observedRate": 0.1134837925963813,
        "posteriorRate": 0.11262102895343486,
        "lift": 1.3151737016097862,
        "averagePayoutYen": 26132.868103062465,
        "medianPayoutYen": 6760
      },
      "robustLift": 1.213028282370847,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 3189,
        "highPayoutCount": 397,
        "observedRate": 0.12449043587331451,
        "posteriorRate": 0.12118475362355385,
        "lift": 1.2106234478150986,
        "averagePayoutYen": 6894.8040137974285,
        "medianPayoutYen": 2170
      },
      "validation": {
        "count": 1399,
        "highPayoutCount": 185,
        "observedRate": 0.1322373123659757,
        "posteriorRate": 0.12190614979831048,
        "lift": 1.310825060003748,
        "averagePayoutYen": 6875.039313795568,
        "medianPayoutYen": 2340
      },
      "robustLift": 1.2106234478150986,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 1173,
        "highPayoutCount": 156,
        "observedRate": 0.1329923273657289,
        "posteriorRate": 0.12313839243763473,
        "lift": 1.231124636030862,
        "averagePayoutYen": 14303.017902813299,
        "medianPayoutYen": 4590
      },
      "validation": {
        "count": 564,
        "highPayoutCount": 72,
        "observedRate": 0.1276595744680851,
        "posteriorRate": 0.11063337084750091,
        "lift": 1.2100625293276734,
        "averagePayoutYen": 13231.77304964539,
        "medianPayoutYen": 4580
      },
      "robustLift": 1.2100625293276734,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2763,
        "highPayoutCount": 345,
        "observedRate": 0.1248642779587405,
        "posteriorRate": 0.12106399310649654,
        "lift": 1.2098702235701921,
        "averagePayoutYen": 181576.49294245386,
        "medianPayoutYen": 39660
      },
      "validation": {
        "count": 1406,
        "highPayoutCount": 174,
        "observedRate": 0.12375533428165007,
        "posteriorRate": 0.1131649542065724,
        "lift": 1.35714119155882,
        "averagePayoutYen": 175772.56756756757,
        "medianPayoutYen": 38130
      },
      "robustLift": 1.2098702235701921,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 3547,
        "highPayoutCount": 440,
        "observedRate": 0.1240484916831125,
        "posteriorRate": 0.12108983348586365,
        "lift": 1.2096752052274662,
        "averagePayoutYen": 6500.05920496194,
        "medianPayoutYen": 2310
      },
      "validation": {
        "count": 1730,
        "highPayoutCount": 215,
        "observedRate": 0.12427745664739884,
        "posteriorRate": 0.11726447464887516,
        "lift": 1.260914336743741,
        "averagePayoutYen": 6619.225433526011,
        "medianPayoutYen": 2490
      },
      "robustLift": 1.2096752052274662,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 10883,
        "highPayoutCount": 1326,
        "observedRate": 0.12184140402462557,
        "posteriorRate": 0.12088277435864984,
        "lift": 1.208619364929301,
        "averagePayoutYen": 29477.06790407057,
        "medianPayoutYen": 6750
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 503,
        "observedRate": 0.10918168005209464,
        "posteriorRate": 0.10687605802572783,
        "lift": 1.2480846796851413,
        "averagePayoutYen": 26173.911439114392,
        "medianPayoutYen": 6590
      },
      "robustLift": 1.208619364929301,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 28998,
        "highPayoutCount": 3515,
        "observedRate": 0.1212152562245672,
        "posteriorRate": 0.12085594347157472,
        "lift": 1.2083511023098394,
        "averagePayoutYen": 28038.14780329678,
        "medianPayoutYen": 6690
      },
      "validation": {
        "count": 10872,
        "highPayoutCount": 1221,
        "observedRate": 0.11230684326710817,
        "posteriorRate": 0.11113401585801899,
        "lift": 1.2978085564391721,
        "averagePayoutYen": 25991.545253863136,
        "medianPayoutYen": 6770
      },
      "robustLift": 1.2083511023098394,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 2761,
        "highPayoutCount": 344,
        "observedRate": 0.12459253893516842,
        "posteriorRate": 0.12082506303224867,
        "lift": 1.2079962130764386,
        "averagePayoutYen": 12930.213690691779,
        "medianPayoutYen": 4510
      },
      "validation": {
        "count": 1249,
        "highPayoutCount": 152,
        "observedRate": 0.12169735788630905,
        "posteriorRate": 0.11304397174484904,
        "lift": 1.2364286953108599,
        "averagePayoutYen": 13010.208166533226,
        "medianPayoutYen": 4620
      },
      "robustLift": 1.2079962130764386,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 17155,
        "highPayoutCount": 2089,
        "observedRate": 0.1217720781113378,
        "posteriorRate": 0.12116425866543462,
        "lift": 1.207898421923366,
        "averagePayoutYen": 2254.5741766248907,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 4271,
        "highPayoutCount": 509,
        "observedRate": 0.11917583704050573,
        "posteriorRate": 0.11637716021957568,
        "lift": 1.2585278938314082,
        "averagePayoutYen": 2249.20159213299,
        "medianPayoutYen": 980
      },
      "robustLift": 1.207898421923366,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 11733,
        "highPayoutCount": 1450,
        "observedRate": 0.12358305633682776,
        "posteriorRate": 0.12268712581703028,
        "lift": 1.2067995242335094,
        "averagePayoutYen": 397.40475581692664,
        "medianPayoutYen": 250
      },
      "validation": {
        "count": 5312,
        "highPayoutCount": 596,
        "observedRate": 0.11219879518072289,
        "posteriorRate": 0.1103012171838915,
        "lift": 1.223647293540861,
        "averagePayoutYen": 382.98381024096386,
        "medianPayoutYen": 250
      },
      "robustLift": 1.2067995242335094,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 2045,
        "highPayoutCount": 263,
        "observedRate": 0.12860635696821515,
        "posteriorRate": 0.12299038528415046,
        "lift": 1.2296448761496734,
        "averagePayoutYen": 13487.20782396088,
        "medianPayoutYen": 4870
      },
      "validation": {
        "count": 803,
        "highPayoutCount": 98,
        "observedRate": 0.12204234122042341,
        "posteriorRate": 0.11029463283326243,
        "lift": 1.2063575515696165,
        "averagePayoutYen": 13967.260273972603,
        "medianPayoutYen": 4590
      },
      "robustLift": 1.2063575515696165,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 6359,
        "highPayoutCount": 778,
        "observedRate": 0.12234628086177071,
        "posteriorRate": 0.12071884101883117,
        "lift": 1.2069342166103623,
        "averagePayoutYen": 13469.619437018398,
        "medianPayoutYen": 4830
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 285,
        "observedRate": 0.114,
        "posteriorRate": 0.11023796886058032,
        "lift": 1.2057377842283503,
        "averagePayoutYen": 13115.088,
        "medianPayoutYen": 4710
      },
      "robustLift": 1.2057377842283503,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 24374,
        "highPayoutCount": 2951,
        "observedRate": 0.12107163370804956,
        "posteriorRate": 0.1206493450794604,
        "lift": 1.2057263795724822,
        "averagePayoutYen": 181944.13965701158,
        "medianPayoutYen": 38330
      },
      "validation": {
        "count": 10908,
        "highPayoutCount": 1158,
        "observedRate": 0.10616061606160616,
        "posteriorRate": 0.1051623775173323,
        "lift": 1.2611695496337851,
        "averagePayoutYen": 166836.96828016135,
        "medianPayoutYen": 35570
      },
      "robustLift": 1.2057263795724822,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3182,
        "highPayoutCount": 395,
        "observedRate": 0.1241357636706474,
        "posteriorRate": 0.12090032230805219,
        "lift": 1.2052672143949912,
        "averagePayoutYen": 2143.686360779384,
        "medianPayoutYen": 890
      },
      "validation": {
        "count": 1412,
        "highPayoutCount": 169,
        "observedRate": 0.11968838526912182,
        "posteriorRate": 0.11257083232614834,
        "lift": 1.2173654370580294,
        "averagePayoutYen": 2177.096317280453,
        "medianPayoutYen": 980
      },
      "robustLift": 1.2052672143949912,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 18585,
        "highPayoutCount": 2257,
        "observedRate": 0.12144202313693839,
        "posteriorRate": 0.12088839333184428,
        "lift": 1.2051482932568982,
        "averagePayoutYen": 2212.4040893193437,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 7847,
        "highPayoutCount": 893,
        "observedRate": 0.11380145278450363,
        "posteriorRate": 0.11252371287978861,
        "lift": 1.2168558771282827,
        "averagePayoutYen": 2202.441697463999,
        "medianPayoutYen": 880
      },
      "robustLift": 1.2051482932568982,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 1101,
        "highPayoutCount": 143,
        "observedRate": 0.1298819255222525,
        "posteriorRate": 0.1205812343018677,
        "lift": 1.2045943507530015,
        "averagePayoutYen": 6784.368755676657,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 82,
        "observedRate": 0.13333333333333333,
        "posteriorRate": 0.11524643808698797,
        "lift": 1.2392149154946728,
        "averagePayoutYen": 6894.715447154472,
        "medianPayoutYen": 2520
      },
      "robustLift": 1.2045943507530015,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 33807,
        "highPayoutCount": 4081,
        "observedRate": 0.12071464489602746,
        "posteriorRate": 0.12041367095655402,
        "lift": 1.203371136725671,
        "averagePayoutYen": 180083.91102434407,
        "medianPayoutYen": 38200
      },
      "validation": {
        "count": 15698,
        "highPayoutCount": 1696,
        "observedRate": 0.10803924066760097,
        "posteriorRate": 0.10727820735385399,
        "lift": 1.2865438348584415,
        "averagePayoutYen": 165716.67091349215,
        "medianPayoutYen": 35400
      },
      "robustLift": 1.203371136725671,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 10629,
        "highPayoutCount": 1289,
        "observedRate": 0.12127199172076394,
        "posteriorRate": 0.12032083350860726,
        "lift": 1.20199297313144,
        "averagePayoutYen": 6600.647285727726,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 3974,
        "highPayoutCount": 475,
        "observedRate": 0.11952692501258178,
        "posteriorRate": 0.1165623107883307,
        "lift": 1.253364151735409,
        "averagePayoutYen": 6807.108706592853,
        "medianPayoutYen": 2380
      },
      "robustLift": 1.20199297313144,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2123,
        "highPayoutCount": 288,
        "observedRate": 0.13565708902496468,
        "posteriorRate": 0.12891917145949225,
        "lift": 1.2852079109531351,
        "averagePayoutYen": 2522.5859632595384,
        "medianPayoutYen": 1050
      },
      "validation": {
        "count": 907,
        "highPayoutCount": 110,
        "observedRate": 0.12127894156560089,
        "posteriorRate": 0.11104152907433947,
        "lift": 1.2008272194481724,
        "averagePayoutYen": 2205.6670341786107,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.2008272194481724,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 2852,
        "highPayoutCount": 358,
        "observedRate": 0.12552594670406733,
        "posteriorRate": 0.12173345946219874,
        "lift": 1.2161049637183288,
        "averagePayoutYen": 6477.307152875175,
        "medianPayoutYen": 2250
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 155,
        "observedRate": 0.11877394636015326,
        "posteriorRate": 0.11163422629750226,
        "lift": 1.200373743465758,
        "averagePayoutYen": 6476.72030651341,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.200373743465758,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 32614,
        "highPayoutCount": 3934,
        "observedRate": 0.12062304531796161,
        "posteriorRate": 0.12031633106052571,
        "lift": 1.199445348160889,
        "averagePayoutYen": 2267.268044398111,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 13804,
        "highPayoutCount": 1652,
        "observedRate": 0.11967545638945233,
        "posteriorRate": 0.11872451282211938,
        "lift": 1.2839126748432932,
        "averagePayoutYen": 2272.353665604173,
        "medianPayoutYen": 950
      },
      "robustLift": 1.199445348160889,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 1061,
        "highPayoutCount": 138,
        "observedRate": 0.13006597549481622,
        "posteriorRate": 0.12044114063069253,
        "lift": 1.2042037889413486,
        "averagePayoutYen": 25044.128180961357,
        "medianPayoutYen": 5690
      },
      "validation": {
        "count": 472,
        "highPayoutCount": 57,
        "observedRate": 0.12076271186440678,
        "posteriorRate": 0.1026913871783869,
        "lift": 1.1992166387920724,
        "averagePayoutYen": 22860.741525423728,
        "medianPayoutYen": 6990
      },
      "robustLift": 1.1992166387920724,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 4497,
        "highPayoutCount": 576,
        "observedRate": 0.12808539026017346,
        "posteriorRate": 0.1253061810562834,
        "lift": 1.249189653964408,
        "averagePayoutYen": 2322.0613742494997,
        "medianPayoutYen": 1010
      },
      "validation": {
        "count": 1677,
        "highPayoutCount": 195,
        "observedRate": 0.11627906976744186,
        "posteriorRate": 0.11081094690289188,
        "lift": 1.198333653751609,
        "averagePayoutYen": 2027.9367918902803,
        "medianPayoutYen": 940
      },
      "robustLift": 1.198333653751609,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 2840,
        "highPayoutCount": 355,
        "observedRate": 0.125,
        "posteriorRate": 0.12126063788867154,
        "lift": 1.2123510444654337,
        "averagePayoutYen": 13047.112676056338,
        "medianPayoutYen": 4400
      },
      "validation": {
        "count": 1306,
        "highPayoutCount": 152,
        "observedRate": 0.11638591117917305,
        "posteriorRate": 0.1094761387495797,
        "lift": 1.197405198282776,
        "averagePayoutYen": 12803.392036753447,
        "medianPayoutYen": 4520
      },
      "robustLift": 1.197405198282776,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 6201,
        "highPayoutCount": 752,
        "observedRate": 0.12127076278019674,
        "posteriorRate": 0.11968491576249977,
        "lift": 1.1966428438456715,
        "averagePayoutYen": 27966.07321399774,
        "medianPayoutYen": 6540
      },
      "validation": {
        "count": 2618,
        "highPayoutCount": 278,
        "observedRate": 0.10618792971734148,
        "posteriorRate": 0.10289160626600131,
        "lift": 1.2015547712087074,
        "averagePayoutYen": 25602.039724980903,
        "medianPayoutYen": 5470
      },
      "robustLift": 1.1966428438456715,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 1397,
        "highPayoutCount": 177,
        "observedRate": 0.12670007158196134,
        "posteriorRate": 0.11966716949104429,
        "lift": 1.1964654117222762,
        "averagePayoutYen": 25748.962061560487,
        "medianPayoutYen": 7340
      },
      "validation": {
        "count": 648,
        "highPayoutCount": 75,
        "observedRate": 0.11574074074074074,
        "posteriorRate": 0.10262720238448786,
        "lift": 1.1984670971321916,
        "averagePayoutYen": 26166.6512345679,
        "medianPayoutYen": 7750
      },
      "robustLift": 1.1964654117222762,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 2120,
      "discovery": {
        "count": 1750,
        "highPayoutCount": 220,
        "observedRate": 0.12571428571428572,
        "posteriorRate": 0.12009839222022894,
        "lift": 1.1956898262503433,
        "averagePayoutYen": 1139.4971428571428,
        "medianPayoutYen": 530
      },
      "validation": {
        "count": 629,
        "highPayoutCount": 88,
        "observedRate": 0.13990461049284578,
        "posteriorRate": 0.11857173950973637,
        "lift": 1.2925465227232857,
        "averagePayoutYen": 1155.7074721780605,
        "medianPayoutYen": 500
      },
      "robustLift": 1.1956898262503433,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 3498,
        "highPayoutCount": 428,
        "observedRate": 0.12235563178959405,
        "posteriorRate": 0.11956241384396271,
        "lift": 1.195372379911242,
        "averagePayoutYen": 13174.748427672956,
        "medianPayoutYen": 4510
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 207,
        "observedRate": 0.12147887323943662,
        "posteriorRate": 0.11466148211512747,
        "lift": 1.2541203617120475,
        "averagePayoutYen": 13071.420187793427,
        "medianPayoutYen": 4690
      },
      "robustLift": 1.195372379911242,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 588,
        "highPayoutCount": 80,
        "observedRate": 0.1360544217687075,
        "posteriorRate": 0.11953176113721525,
        "lift": 1.194110219845514,
        "averagePayoutYen": 7298.316326530612,
        "medianPayoutYen": 2540
      },
      "validation": {
        "count": 311,
        "highPayoutCount": 49,
        "observedRate": 0.15755627009646303,
        "posteriorRate": 0.11775558380640146,
        "lift": 1.2661951055314344,
        "averagePayoutYen": 8255.337620578779,
        "medianPayoutYen": 2800
      },
      "robustLift": 1.194110219845514,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 2119,
        "highPayoutCount": 267,
        "observedRate": 0.12600283152430392,
        "posteriorRate": 0.12135609397469699,
        "lift": 1.1937069639231228,
        "averagePayoutYen": 413.5960358659745,
        "medianPayoutYen": 240
      },
      "validation": {
        "count": 901,
        "highPayoutCount": 107,
        "observedRate": 0.11875693673695893,
        "posteriorRate": 0.10854437849591533,
        "lift": 1.204157473205099,
        "averagePayoutYen": 370.57713651498335,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1937069639231228,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 76919,
        "highPayoutCount": 9215,
        "observedRate": 0.11980134947152199,
        "posteriorRate": 0.11967546709125987,
        "lift": 1.193056512165274,
        "averagePayoutYen": 2242.1769653791653,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 28641,
        "highPayoutCount": 3292,
        "observedRate": 0.11494012080583778,
        "posteriorRate": 0.11455459426264011,
        "lift": 1.2388182696162855,
        "averagePayoutYen": 2221.8763311336893,
        "medianPayoutYen": 950
      },
      "robustLift": 1.193056512165274,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=10",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1923,
        "highPayoutCount": 239,
        "observedRate": 0.12428497139885596,
        "posteriorRate": 0.11928675588382098,
        "lift": 1.1921091507626542,
        "averagePayoutYen": 163125.70982839313,
        "medianPayoutYen": 41940
      },
      "validation": {
        "count": 912,
        "highPayoutCount": 113,
        "observedRate": 0.12390350877192982,
        "posteriorRate": 0.10955552600405594,
        "lift": 1.3138547896338264,
        "averagePayoutYen": 155743.9802631579,
        "medianPayoutYen": 39360
      },
      "robustLift": 1.1921091507626542,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 3536,
        "highPayoutCount": 431,
        "observedRate": 0.12188914027149321,
        "posteriorRate": 0.11918001252432184,
        "lift": 1.19154917192435,
        "averagePayoutYen": 13096.317873303167,
        "medianPayoutYen": 4480
      },
      "validation": {
        "count": 1732,
        "highPayoutCount": 207,
        "observedRate": 0.1195150115473441,
        "posteriorRate": 0.11322307642551119,
        "lift": 1.2383876690023983,
        "averagePayoutYen": 12955.098152424942,
        "medianPayoutYen": 4680
      },
      "robustLift": 1.19154917192435,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 119984,
        "highPayoutCount": 14346,
        "observedRate": 0.11956594212561675,
        "posteriorRate": 0.11948603123019029,
        "lift": 1.191168007418396,
        "averagePayoutYen": 2221.359347913055,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 46877,
        "highPayoutCount": 5513,
        "observedRate": 0.11760564882565011,
        "posteriorRate": 0.11734038523772285,
        "lift": 1.2689444184405947,
        "averagePayoutYen": 2259.286643769866,
        "medianPayoutYen": 970
      },
      "robustLift": 1.191168007418396,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 4851,
        "highPayoutCount": 614,
        "observedRate": 0.12657184085755516,
        "posteriorRate": 0.12409489992646201,
        "lift": 1.2401600216992383,
        "averagePayoutYen": 192024.10636982066,
        "medianPayoutYen": 36300
      },
      "validation": {
        "count": 1430,
        "highPayoutCount": 150,
        "observedRate": 0.1048951048951049,
        "posteriorRate": 0.09932248845478082,
        "lift": 1.1911341393206678,
        "averagePayoutYen": 157186.5104895105,
        "medianPayoutYen": 34830
      },
      "robustLift": 1.1911341393206678,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 3180,
        "highPayoutCount": 388,
        "observedRate": 0.1220125786163522,
        "posteriorRate": 0.11902460069243558,
        "lift": 1.189995380850922,
        "averagePayoutYen": 14244.66037735849,
        "medianPayoutYen": 4260
      },
      "validation": {
        "count": 1401,
        "highPayoutCount": 176,
        "observedRate": 0.1256245538900785,
        "posteriorRate": 0.11663014549276221,
        "lift": 1.2756527959846968,
        "averagePayoutYen": 13733.433261955746,
        "medianPayoutYen": 4410
      },
      "robustLift": 1.189995380850922,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 4567,
        "highPayoutCount": 553,
        "observedRate": 0.12108605211298445,
        "posteriorRate": 0.1190070299041861,
        "lift": 1.1898651538073968,
        "averagePayoutYen": 28606.70462010072,
        "medianPayoutYen": 7000
      },
      "validation": {
        "count": 2043,
        "highPayoutCount": 222,
        "observedRate": 0.10866372980910426,
        "posteriorRate": 0.10413528444254506,
        "lift": 1.2160782829032475,
        "averagePayoutYen": 25569.579050416054,
        "medianPayoutYen": 6600
      },
      "robustLift": 1.1898651538073968,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 1097,
        "highPayoutCount": 140,
        "observedRate": 0.1276207839562443,
        "posteriorRate": 0.11897966847098491,
        "lift": 1.1895461532486735,
        "averagePayoutYen": 13208.997265268916,
        "medianPayoutYen": 4560
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 76,
        "observedRate": 0.12357723577235773,
        "posteriorRate": 0.10916045433339998,
        "lift": 1.1939523713447058,
        "averagePayoutYen": 14065.447154471545,
        "medianPayoutYen": 4850
      },
      "robustLift": 1.1895461532486735,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3776,
        "highPayoutCount": 460,
        "observedRate": 0.12182203389830508,
        "posteriorRate": 0.11930659184711136,
        "lift": 1.1893791585446498,
        "averagePayoutYen": 2209.126059322034,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 1468,
        "highPayoutCount": 181,
        "observedRate": 0.12329700272479564,
        "posteriorRate": 0.11546515823556688,
        "lift": 1.2486653062417206,
        "averagePayoutYen": 2177.302452316076,
        "medianPayoutYen": 1150
      },
      "robustLift": 1.1893791585446498,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 901,
        "highPayoutCount": 117,
        "observedRate": 0.12985571587125416,
        "posteriorRate": 0.11922327587901373,
        "lift": 1.1914747543113424,
        "averagePayoutYen": 159353.0410654828,
        "medianPayoutYen": 31800
      },
      "validation": {
        "count": 475,
        "highPayoutCount": 55,
        "observedRate": 0.11578947368421053,
        "posteriorRate": 0.09917169509510461,
        "lift": 1.1893257359924028,
        "averagePayoutYen": 144528,
        "medianPayoutYen": 36290
      },
      "robustLift": 1.1893257359924028,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 2013,
        "highPayoutCount": 249,
        "observedRate": 0.12369597615499255,
        "posteriorRate": 0.1190014150884561,
        "lift": 1.188812116388718,
        "averagePayoutYen": 6352.568306010929,
        "medianPayoutYen": 2330
      },
      "validation": {
        "count": 690,
        "highPayoutCount": 89,
        "observedRate": 0.1289855072463768,
        "posteriorRate": 0.11386536005629545,
        "lift": 1.224364543339966,
        "averagePayoutYen": 6596.724637681159,
        "medianPayoutYen": 2650
      },
      "robustLift": 1.188812116388718,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 682,
        "highPayoutCount": 100,
        "observedRate": 0.1466275659824047,
        "posteriorRate": 0.12691084646743742,
        "lift": 1.2688896947800614,
        "averagePayoutYen": 33209.76539589443,
        "medianPayoutYen": 7640
      },
      "validation": {
        "count": 343,
        "highPayoutCount": 43,
        "observedRate": 0.12536443148688048,
        "posteriorRate": 0.10179837287946865,
        "lift": 1.188788134168976,
        "averagePayoutYen": 28516.00583090379,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.188788134168976,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 6043,
        "highPayoutCount": 730,
        "observedRate": 0.12080092669204037,
        "posteriorRate": 0.11923505834299988,
        "lift": 1.1886660340004764,
        "averagePayoutYen": 2176.9170941585307,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 2062,
        "highPayoutCount": 258,
        "observedRate": 0.1251212415130941,
        "posteriorRate": 0.11874919258688355,
        "lift": 1.2841795671811909,
        "averagePayoutYen": 2202.051406401552,
        "medianPayoutYen": 1110
      },
      "robustLift": 1.1886660340004764,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 86918,
        "highPayoutCount": 10369,
        "observedRate": 0.11929634828228905,
        "posteriorRate": 0.11918775294262335,
        "lift": 1.1881944418074268,
        "averagePayoutYen": 2213.5740583078305,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 32583,
        "highPayoutCount": 3803,
        "observedRate": 0.11671730657091121,
        "posteriorRate": 0.1163508578849438,
        "lift": 1.2582434546704537,
        "averagePayoutYen": 2246.1584261731577,
        "medianPayoutYen": 970
      },
      "robustLift": 1.1881944418074268,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2023,
        "highPayoutCount": 258,
        "observedRate": 0.12753336628769155,
        "posteriorRate": 0.12213832213168774,
        "lift": 1.2176089565042703,
        "averagePayoutYen": 2250.647553138903,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 877,
        "highPayoutCount": 105,
        "observedRate": 0.11972633979475485,
        "posteriorRate": 0.10982965243834104,
        "lift": 1.1877217222233825,
        "averagePayoutYen": 2336.374002280502,
        "medianPayoutYen": 910
      },
      "robustLift": 1.1877217222233825,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1577,
        "highPayoutCount": 197,
        "observedRate": 0.12492073557387444,
        "posteriorRate": 0.11899614190575261,
        "lift": 1.1862842525188648,
        "averagePayoutYen": 2195.0792644261255,
        "medianPayoutYen": 1070
      },
      "validation": {
        "count": 632,
        "highPayoutCount": 88,
        "observedRate": 0.13924050632911392,
        "posteriorRate": 0.11858253657914808,
        "lift": 1.2823773129071225,
        "averagePayoutYen": 2351.4398734177216,
        "medianPayoutYen": 1330
      },
      "robustLift": 1.1862842525188648,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=不良",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 823,
        "highPayoutCount": 107,
        "observedRate": 0.13001215066828675,
        "posteriorRate": 0.11869373356500244,
        "lift": 1.1861826979252696,
        "averagePayoutYen": 165279.2588092345,
        "medianPayoutYen": 39000
      },
      "validation": {
        "count": 362,
        "highPayoutCount": 44,
        "observedRate": 0.12154696132596685,
        "posteriorRate": 0.09941114004376682,
        "lift": 1.1921973017100629,
        "averagePayoutYen": 145041.3535911602,
        "medianPayoutYen": 43640
      },
      "robustLift": 1.1861826979252696,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=不良"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1734,
        "highPayoutCount": 215,
        "observedRate": 0.12399077277970011,
        "posteriorRate": 0.11863554588473511,
        "lift": 1.1856011910715172,
        "averagePayoutYen": 161014.0426758939,
        "medianPayoutYen": 35330
      },
      "validation": {
        "count": 852,
        "highPayoutCount": 92,
        "observedRate": 0.107981220657277,
        "posteriorRate": 0.09888491325275665,
        "lift": 1.1858864781941705,
        "averagePayoutYen": 135259.10798122064,
        "medianPayoutYen": 31000
      },
      "robustLift": 1.1856011910715172,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 6004,
        "highPayoutCount": 721,
        "observedRate": 0.12008660892738175,
        "posteriorRate": 0.118543760843252,
        "lift": 1.18523326178483,
        "averagePayoutYen": 28611.354097268486,
        "medianPayoutYen": 5950
      },
      "validation": {
        "count": 2671,
        "highPayoutCount": 302,
        "observedRate": 0.11306626731561213,
        "posteriorRate": 0.10874046935900097,
        "lift": 1.2698570323025011,
        "averagePayoutYen": 24576.91875701984,
        "medianPayoutYen": 6220
      },
      "robustLift": 1.18523326178483,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 684,
        "highPayoutCount": 98,
        "observedRate": 0.14327485380116958,
        "posteriorRate": 0.12502686613724512,
        "lift": 1.249473758499644,
        "averagePayoutYen": 215196.34502923978,
        "medianPayoutYen": 42270
      },
      "validation": {
        "count": 347,
        "highPayoutCount": 42,
        "observedRate": 0.12103746397694524,
        "posteriorRate": 0.09881039281904014,
        "lift": 1.184992784992785,
        "averagePayoutYen": 172797.29106628243,
        "medianPayoutYen": 36870
      },
      "robustLift": 1.184992784992785,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3506,
        "highPayoutCount": 426,
        "observedRate": 0.1215059897318882,
        "posteriorRate": 0.11886045600056121,
        "lift": 1.1849315863732277,
        "averagePayoutYen": 2287.81802624073,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 1685,
        "highPayoutCount": 219,
        "observedRate": 0.12997032640949555,
        "posteriorRate": 0.12138921345885384,
        "lift": 1.312729326441538,
        "averagePayoutYen": 2396.528189910979,
        "medianPayoutYen": 1070
      },
      "robustLift": 1.1849315863732277,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1778,
        "highPayoutCount": 220,
        "observedRate": 0.12373453318335208,
        "posteriorRate": 0.11853898573595181,
        "lift": 1.1846362034992532,
        "averagePayoutYen": 162157.11473565805,
        "medianPayoutYen": 42680
      },
      "validation": {
        "count": 694,
        "highPayoutCount": 82,
        "observedRate": 0.11815561959654179,
        "posteriorRate": 0.10359497715052512,
        "lift": 1.2423723556051864,
        "averagePayoutYen": 155058.530259366,
        "medianPayoutYen": 46790
      },
      "robustLift": 1.1846362034992532,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 2017,
        "highPayoutCount": 248,
        "observedRate": 0.12295488349033218,
        "posteriorRate": 0.1183990983504819,
        "lift": 1.1837416745304974,
        "averagePayoutYen": 12644.090233019335,
        "medianPayoutYen": 4480
      },
      "validation": {
        "count": 692,
        "highPayoutCount": 94,
        "observedRate": 0.13583815028901733,
        "posteriorRate": 0.11720965317260147,
        "lift": 1.2819912138007616,
        "averagePayoutYen": 12772.182080924855,
        "medianPayoutYen": 5010
      },
      "robustLift": 1.1837416745304974,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 10894,
        "highPayoutCount": 1299,
        "observedRate": 0.11923994859555719,
        "posteriorRate": 0.1183965710503917,
        "lift": 1.1837164068512458,
        "averagePayoutYen": 13569.845786671562,
        "medianPayoutYen": 4160
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 523,
        "observedRate": 0.1135228999348817,
        "posteriorRate": 0.11135968407709829,
        "lift": 1.2180066461611216,
        "averagePayoutYen": 12930.573041024529,
        "medianPayoutYen": 4050
      },
      "robustLift": 1.1837164068512458,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "going=不良",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 2120,
      "discovery": {
        "count": 958,
        "highPayoutCount": 123,
        "observedRate": 0.12839248434237996,
        "posteriorRate": 0.1188075325757991,
        "lift": 1.1828381326062551,
        "averagePayoutYen": 1119.5511482254697,
        "medianPayoutYen": 540
      },
      "validation": {
        "count": 361,
        "highPayoutCount": 50,
        "observedRate": 0.13850415512465375,
        "posteriorRate": 0.11134435993785408,
        "lift": 1.2137611024143369,
        "averagePayoutYen": 1110.8033240997229,
        "medianPayoutYen": 550
      },
      "robustLift": 1.1828381326062551,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 40052,
        "highPayoutCount": 4759,
        "observedRate": 0.11882053330670128,
        "posteriorRate": 0.11859230091581792,
        "lift": 1.1822583219365053,
        "averagePayoutYen": 2207.367422350944,
        "medianPayoutYen": 970
      },
      "validation": {
        "count": 14442,
        "highPayoutCount": 1600,
        "observedRate": 0.1107879795042238,
        "posteriorRate": 0.11017503891096209,
        "lift": 1.1914568065743452,
        "averagePayoutYen": 2252.7980889073538,
        "medianPayoutYen": 970
      },
      "robustLift": 1.1822583219365053,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 852,
        "highPayoutCount": 110,
        "observedRate": 0.12910798122065728,
        "posteriorRate": 0.11845783042769835,
        "lift": 1.1809177724033018,
        "averagePayoutYen": 2359.1666666666665,
        "medianPayoutYen": 990
      },
      "validation": {
        "count": 308,
        "highPayoutCount": 44,
        "observedRate": 0.14285714285714285,
        "posteriorRate": 0.11167751411831141,
        "lift": 1.2077048998829596,
        "averagePayoutYen": 2502.8896103896104,
        "medianPayoutYen": 910
      },
      "robustLift": 1.1809177724033018,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 2120,
      "discovery": {
        "count": 2723,
        "highPayoutCount": 332,
        "observedRate": 0.12192434814542784,
        "posteriorRate": 0.11859180344260475,
        "lift": 1.1806903508997917,
        "averagePayoutYen": 1112.9489533602643,
        "medianPayoutYen": 500
      },
      "validation": {
        "count": 1166,
        "highPayoutCount": 150,
        "observedRate": 0.12864493996569468,
        "posteriorRate": 0.11756752335323671,
        "lift": 1.2815995963602833,
        "averagePayoutYen": 1226.114922813036,
        "medianPayoutYen": 510
      },
      "robustLift": 1.1806903508997917,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 10606,
        "highPayoutCount": 1261,
        "observedRate": 0.11889496511408637,
        "posteriorRate": 0.11804524856367396,
        "lift": 1.1802039217519384,
        "averagePayoutYen": 13228.940222515557,
        "medianPayoutYen": 4380
      },
      "validation": {
        "count": 3980,
        "highPayoutCount": 448,
        "observedRate": 0.11256281407035176,
        "posteriorRate": 0.1102039970048529,
        "lift": 1.2053662139747046,
        "averagePayoutYen": 13320.062814070352,
        "medianPayoutYen": 4600
      },
      "robustLift": 1.1802039217519384,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 5783,
        "highPayoutCount": 692,
        "observedRate": 0.11966107556631506,
        "posteriorRate": 0.11810449723337421,
        "lift": 1.179851997614213,
        "averagePayoutYen": 6440.091647933598,
        "medianPayoutYen": 2340
      },
      "validation": {
        "count": 2149,
        "highPayoutCount": 263,
        "observedRate": 0.12238250348999535,
        "posteriorRate": 0.11683645846243548,
        "lift": 1.2563119902320956,
        "averagePayoutYen": 6895.579339227547,
        "medianPayoutYen": 2270
      },
      "robustLift": 1.179851997614213,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 526,
        "highPayoutCount": 72,
        "observedRate": 0.13688212927756654,
        "posteriorRate": 0.11891678413695032,
        "lift": 1.1889628517013875,
        "averagePayoutYen": 27456.083650190114,
        "medianPayoutYen": 7820
      },
      "validation": {
        "count": 211,
        "highPayoutCount": 29,
        "observedRate": 0.13744075829383887,
        "posteriorRate": 0.10100707220448955,
        "lift": 1.1795474279929663,
        "averagePayoutYen": 28423.6018957346,
        "medianPayoutYen": 10180
      },
      "robustLift": 1.1795474279929663,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 2281,
        "highPayoutCount": 288,
        "observedRate": 0.12626041209995617,
        "posteriorRate": 0.12155719385734993,
        "lift": 1.2143440881304957,
        "averagePayoutYen": 6474.511179307321,
        "medianPayoutYen": 2320
      },
      "validation": {
        "count": 1055,
        "highPayoutCount": 124,
        "observedRate": 0.11753554502369669,
        "posteriorRate": 0.10964615978584667,
        "lift": 1.1789965823566266,
        "averagePayoutYen": 6091.563981042654,
        "medianPayoutYen": 2350
      },
      "robustLift": 1.1789965823566266,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 5044,
        "highPayoutCount": 604,
        "observedRate": 0.11974623314829501,
        "posteriorRate": 0.11797110561084023,
        "lift": 1.1789610127484786,
        "averagePayoutYen": 176865.28350515463,
        "medianPayoutYen": 33990
      },
      "validation": {
        "count": 2677,
        "highPayoutCount": 288,
        "observedRate": 0.10758311542771759,
        "posteriorRate": 0.10377475691461346,
        "lift": 1.2445283810722902,
        "averagePayoutYen": 158547.14979454613,
        "medianPayoutYen": 31350
      },
      "robustLift": 1.1789610127484786,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=04",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 3520,
        "highPayoutCount": 424,
        "observedRate": 0.12045454545454545,
        "posteriorRate": 0.11791836057375578,
        "lift": 1.1784338977230107,
        "averagePayoutYen": 179399.38920454544,
        "medianPayoutYen": 40400
      },
      "validation": {
        "count": 1645,
        "highPayoutCount": 179,
        "observedRate": 0.1088145896656535,
        "posteriorRate": 0.10288690103390535,
        "lift": 1.2338806872140204,
        "averagePayoutYen": 165617.60486322187,
        "medianPayoutYen": 37380
      },
      "robustLift": 1.1784338977230107,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=07",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 11105,
        "highPayoutCount": 1436,
        "observedRate": 0.12931112111661414,
        "posteriorRate": 0.1280616102316457,
        "lift": 1.2766587986552689,
        "averagePayoutYen": 2397.0733903647006,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 5018,
        "highPayoutCount": 555,
        "observedRate": 0.11060183339976086,
        "posteriorRate": 0.10895894008836454,
        "lift": 1.178305649706392,
        "averagePayoutYen": 2175.4025508170585,
        "medianPayoutYen": 970
      },
      "robustLift": 1.178305649706392,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 25760,
        "highPayoutCount": 3047,
        "observedRate": 0.11828416149068323,
        "posteriorRate": 0.11793794958557846,
        "lift": 1.1781882034357283,
        "averagePayoutYen": 6842.8540372670805,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 9543,
        "highPayoutCount": 1074,
        "observedRate": 0.11254322540081735,
        "posteriorRate": 0.11157022587543479,
        "lift": 1.1996855636057948,
        "averagePayoutYen": 6450.436969506444,
        "medianPayoutYen": 2150
      },
      "robustLift": 1.1781882034357283,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 25678,
        "highPayoutCount": 3034,
        "observedRate": 0.11815561959654179,
        "posteriorRate": 0.11780924939063958,
        "lift": 1.1778444269570663,
        "averagePayoutYen": 13788.834800218085,
        "medianPayoutYen": 4140
      },
      "validation": {
        "count": 9558,
        "highPayoutCount": 1048,
        "observedRate": 0.10964636953337518,
        "posteriorRate": 0.10874069462932402,
        "lift": 1.1893612115044787,
        "averagePayoutYen": 12764.961288972589,
        "medianPayoutYen": 4040
      },
      "robustLift": 1.1778444269570663,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 1500,
        "highPayoutCount": 214,
        "observedRate": 0.14266666666666666,
        "posteriorRate": 0.1320043102622555,
        "lift": 1.3198155525761348,
        "averagePayoutYen": 29033.306666666667,
        "medianPayoutYen": 7240
      },
      "validation": {
        "count": 560,
        "highPayoutCount": 64,
        "observedRate": 0.11428571428571428,
        "posteriorRate": 0.10076983805414347,
        "lift": 1.17677703849681,
        "averagePayoutYen": 22992.303571428572,
        "medianPayoutYen": 6450
      },
      "robustLift": 1.17677703849681,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 2270,
        "highPayoutCount": 276,
        "observedRate": 0.12158590308370044,
        "posteriorRate": 0.11769333232785666,
        "lift": 1.176685500411873,
        "averagePayoutYen": 13152.123348017622,
        "medianPayoutYen": 4490
      },
      "validation": {
        "count": 1056,
        "highPayoutCount": 125,
        "observedRate": 0.11837121212121213,
        "posteriorRate": 0.10971330757181295,
        "lift": 1.199999253789815,
        "averagePayoutYen": 11883.323863636364,
        "medianPayoutYen": 4370
      },
      "robustLift": 1.176685500411873,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 9478,
        "highPayoutCount": 1124,
        "observedRate": 0.11859041991981431,
        "posteriorRate": 0.11766203743300242,
        "lift": 1.1758722959812222,
        "averagePayoutYen": 194427.4045157206,
        "medianPayoutYen": 37480
      },
      "validation": {
        "count": 4624,
        "highPayoutCount": 504,
        "observedRate": 0.10899653979238755,
        "posteriorRate": 0.10649734635396702,
        "lift": 1.2771792870153527,
        "averagePayoutYen": 164609.39013840831,
        "medianPayoutYen": 34260
      },
      "robustLift": 1.1758722959812222,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2852,
        "highPayoutCount": 345,
        "observedRate": 0.12096774193548387,
        "posteriorRate": 0.11788633255914324,
        "lift": 1.1752204538940012,
        "averagePayoutYen": 2134.7755960729314,
        "medianPayoutYen": 1110
      },
      "validation": {
        "count": 1073,
        "highPayoutCount": 126,
        "observedRate": 0.11742777260018639,
        "posteriorRate": 0.1094948705706266,
        "lift": 1.1841013183737554,
        "averagePayoutYen": 2289.2637465051257,
        "medianPayoutYen": 1040
      },
      "robustLift": 1.1752204538940012,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 612,
        "highPayoutCount": 95,
        "observedRate": 0.15522875816993464,
        "posteriorRate": 0.13042428912454876,
        "lift": 1.3034136723318892,
        "averagePayoutYen": 206278.75816993465,
        "medianPayoutYen": 41850
      },
      "validation": {
        "count": 304,
        "highPayoutCount": 37,
        "observedRate": 0.12171052631578948,
        "posteriorRate": 0.09787612278324252,
        "lift": 1.1737884650819974,
        "averagePayoutYen": 157384.44078947368,
        "medianPayoutYen": 32860
      },
      "robustLift": 1.1737884650819974,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 949,
        "highPayoutCount": 120,
        "observedRate": 0.12644889357218125,
        "posteriorRate": 0.11734424396583729,
        "lift": 1.1726963817948297,
        "averagePayoutYen": 162505.66912539516,
        "medianPayoutYen": 37480
      },
      "validation": {
        "count": 532,
        "highPayoutCount": 71,
        "observedRate": 0.13345864661654136,
        "posteriorRate": 0.10919806464896026,
        "lift": 1.3095679012345678,
        "averagePayoutYen": 195847.03007518797,
        "medianPayoutYen": 48820
      },
      "robustLift": 1.1726963817948297,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 38425,
        "highPayoutCount": 4589,
        "observedRate": 0.11942745608327912,
        "posteriorRate": 0.11919927065175932,
        "lift": 1.1724915891016547,
        "averagePayoutYen": 391.1854261548471,
        "medianPayoutYen": 240
      },
      "validation": {
        "count": 15532,
        "highPayoutCount": 1771,
        "observedRate": 0.11402266288951841,
        "posteriorRate": 0.11327786141921016,
        "lift": 1.256669256084658,
        "averagePayoutYen": 383.801184651043,
        "medianPayoutYen": 240
      },
      "robustLift": 1.1724915891016547,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 950,
        "highPayoutCount": 120,
        "observedRate": 0.12631578947368421,
        "posteriorRate": 0.11724732449966278,
        "lift": 1.1722711331558893,
        "averagePayoutYen": 25076.252631578947,
        "medianPayoutYen": 6930
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 73,
        "observedRate": 0.13799621928166353,
        "posteriorRate": 0.11255201976422942,
        "lift": 1.3143678212901353,
        "averagePayoutYen": 30496.843100189035,
        "medianPayoutYen": 8860
      },
      "robustLift": 1.1722711331558893,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 13362,
        "highPayoutCount": 1575,
        "observedRate": 0.11787157611136058,
        "posteriorRate": 0.11722757325959537,
        "lift": 1.1720736548025548,
        "averagePayoutYen": 27344.539739559947,
        "medianPayoutYen": 6750
      },
      "validation": {
        "count": 4817,
        "highPayoutCount": 508,
        "observedRate": 0.10545982976956612,
        "posteriorRate": 0.10359526581481888,
        "lift": 1.2097720157330325,
        "averagePayoutYen": 27027.288768943326,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.1720736548025548,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 15664,
        "highPayoutCount": 1849,
        "observedRate": 0.11804136874361594,
        "posteriorRate": 0.11749288460395002,
        "lift": 1.1712981324980594,
        "averagePayoutYen": 2254.7663432073546,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 6087,
        "highPayoutCount": 723,
        "observedRate": 0.11877772301626417,
        "posteriorRate": 0.11678084581867247,
        "lift": 1.2628934376017045,
        "averagePayoutYen": 2221.3799901429275,
        "medianPayoutYen": 940
      },
      "robustLift": 1.1712981324980594,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 10940,
        "highPayoutCount": 1290,
        "observedRate": 0.11791590493601463,
        "posteriorRate": 0.117137286373889,
        "lift": 1.1701896588260223,
        "averagePayoutYen": 6767.32084095064,
        "medianPayoutYen": 2140
      },
      "validation": {
        "count": 4600,
        "highPayoutCount": 546,
        "observedRate": 0.11869565217391305,
        "posteriorRate": 0.11617642715039049,
        "lift": 1.2492148455380245,
        "averagePayoutYen": 6561.210869565218,
        "medianPayoutYen": 2170
      },
      "robustLift": 1.1701896588260223,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=ダート",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 6015,
        "highPayoutCount": 712,
        "observedRate": 0.11837073981712386,
        "posteriorRate": 0.11696218273591881,
        "lift": 1.1694202070480173,
        "averagePayoutYen": 26040.279301745635,
        "medianPayoutYen": 6720
      },
      "validation": {
        "count": 2887,
        "highPayoutCount": 331,
        "observedRate": 0.1146518877727745,
        "posteriorRate": 0.11036788554395988,
        "lift": 1.2888617864582905,
        "averagePayoutYen": 25496.30758572913,
        "medianPayoutYen": 7760
      },
      "robustLift": 1.1694202070480173,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 3285,
        "highPayoutCount": 393,
        "observedRate": 0.11963470319634703,
        "posteriorRate": 0.11705430808911232,
        "lift": 1.1693607141427482,
        "averagePayoutYen": 6564.331811263318,
        "medianPayoutYen": 2330
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 175,
        "observedRate": 0.13049962714392244,
        "posteriorRate": 0.1203149258375837,
        "lift": 1.2937150434274722,
        "averagePayoutYen": 7348.337061894109,
        "medianPayoutYen": 2510
      },
      "robustLift": 1.1693607141427482,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 6111,
        "highPayoutCount": 735,
        "observedRate": 0.12027491408934708,
        "posteriorRate": 0.11886728333379691,
        "lift": 1.1692260293723797,
        "averagePayoutYen": 391.2911143838979,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 2405,
        "highPayoutCount": 277,
        "observedRate": 0.11517671517671518,
        "posteriorRate": 0.11086770198718669,
        "lift": 1.2299316992263263,
        "averagePayoutYen": 386.08316008316007,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1692260293723797,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=10",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1458,
        "highPayoutCount": 179,
        "observedRate": 0.12277091906721536,
        "posteriorRate": 0.1169723235477519,
        "lift": 1.1689795422306215,
        "averagePayoutYen": 152140.5281207133,
        "medianPayoutYen": 36120
      },
      "validation": {
        "count": 699,
        "highPayoutCount": 97,
        "observedRate": 0.13876967095851217,
        "posteriorRate": 0.11567339676207422,
        "lift": 1.3872239211688753,
        "averagePayoutYen": 264158.9556509299,
        "medianPayoutYen": 42870
      },
      "robustLift": 1.1689795422306215,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "枠連",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4690,
      "discovery": {
        "count": 697,
        "highPayoutCount": 90,
        "observedRate": 0.1291248206599713,
        "posteriorRate": 0.117036728560155,
        "lift": 1.1681952814575347,
        "averagePayoutYen": 2597.560975609756,
        "medianPayoutYen": 1320
      },
      "validation": {
        "count": 291,
        "highPayoutCount": 43,
        "observedRate": 0.14776632302405499,
        "posteriorRate": 0.11547157393334186,
        "lift": 1.1944178301289017,
        "averagePayoutYen": 2637.6975945017184,
        "medianPayoutYen": 1400
      },
      "robustLift": 1.1681952814575347,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 9554,
        "highPayoutCount": 1159,
        "observedRate": 0.12131044588653966,
        "posteriorRate": 0.12033336086331127,
        "lift": 1.1836469529478977,
        "averagePayoutYen": 396.0414486079129,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 4184,
        "highPayoutCount": 448,
        "observedRate": 0.10707456978967496,
        "posteriorRate": 0.10526700987890208,
        "lift": 1.1677993681856587,
        "averagePayoutYen": 374.82074569789677,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1677993681856587,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1101,
        "highPayoutCount": 137,
        "observedRate": 0.12443233424159855,
        "posteriorRate": 0.11682186727451482,
        "lift": 1.1674759360776445,
        "averagePayoutYen": 166367.23887375114,
        "medianPayoutYen": 40280
      },
      "validation": {
        "count": 620,
        "highPayoutCount": 75,
        "observedRate": 0.12096774193548387,
        "posteriorRate": 0.10418964528368481,
        "lift": 1.2495039682539681,
        "averagePayoutYen": 176520,
        "medianPayoutYen": 42520
      },
      "robustLift": 1.1674759360776445,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 1751,
        "highPayoutCount": 213,
        "observedRate": 0.12164477441462021,
        "posteriorRate": 0.11685942075401606,
        "lift": 1.167413809350726,
        "averagePayoutYen": 6578.537978298115,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 628,
        "highPayoutCount": 76,
        "observedRate": 0.12101910828025478,
        "posteriorRate": 0.10859909438563084,
        "lift": 1.1677377609736483,
        "averagePayoutYen": 6874.490445859873,
        "medianPayoutYen": 2530
      },
      "robustLift": 1.167413809350726,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 365,
        "highPayoutCount": 51,
        "observedRate": 0.13972602739726028,
        "posteriorRate": 0.11679977977629853,
        "lift": 1.1672552015246256,
        "averagePayoutYen": 171271.20547945207,
        "medianPayoutYen": 49460
      },
      "validation": {
        "count": 165,
        "highPayoutCount": 31,
        "observedRate": 0.18787878787878787,
        "posteriorRate": 0.10931188378605562,
        "lift": 1.310932887774993,
        "averagePayoutYen": 269529.51515151514,
        "medianPayoutYen": 41550
      },
      "robustLift": 1.1672552015246256,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 3776,
        "highPayoutCount": 449,
        "observedRate": 0.11890889830508475,
        "posteriorRate": 0.11669986448187816,
        "lift": 1.166797476693837,
        "averagePayoutYen": 24485.225105932204,
        "medianPayoutYen": 6700
      },
      "validation": {
        "count": 1467,
        "highPayoutCount": 154,
        "observedRate": 0.10497614178595774,
        "posteriorRate": 0.100058987461816,
        "lift": 1.1684758179033685,
        "averagePayoutYen": 23554.512610770278,
        "medianPayoutYen": 6000
      },
      "robustLift": 1.166797476693837,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 15989,
        "highPayoutCount": 1874,
        "observedRate": 0.11720557883544937,
        "posteriorRate": 0.11668437264385416,
        "lift": 1.1666425850185465,
        "averagePayoutYen": 27888.880480330226,
        "medianPayoutYen": 6410
      },
      "validation": {
        "count": 6288,
        "highPayoutCount": 689,
        "observedRate": 0.10957379134860051,
        "posteriorRate": 0.10781025756296288,
        "lift": 1.258994140154869,
        "averagePayoutYen": 25668.91062340967,
        "medianPayoutYen": 6410
      },
      "robustLift": 1.1666425850185465,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2554,
        "highPayoutCount": 306,
        "observedRate": 0.11981205951448708,
        "posteriorRate": 0.11657125753913261,
        "lift": 1.1655116289600196,
        "averagePayoutYen": 26368.617854346125,
        "medianPayoutYen": 6640
      },
      "validation": {
        "count": 1175,
        "highPayoutCount": 126,
        "observedRate": 0.1072340425531915,
        "posteriorRate": 0.10078568855963707,
        "lift": 1.176962138634645,
        "averagePayoutYen": 27280.025531914893,
        "medianPayoutYen": 5640
      },
      "robustLift": 1.1655116289600196,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 950,
        "highPayoutCount": 119,
        "observedRate": 0.12526315789473685,
        "posteriorRate": 0.11655898658493993,
        "lift": 1.165344431536146,
        "averagePayoutYen": 12970.947368421053,
        "medianPayoutYen": 4200
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 64,
        "observedRate": 0.12098298676748583,
        "posteriorRate": 0.10662187228546256,
        "lift": 1.1661863999176283,
        "averagePayoutYen": 14935.973534971645,
        "medianPayoutYen": 5080
      },
      "robustLift": 1.165344431536146,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=10",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1008,
        "highPayoutCount": 126,
        "observedRate": 0.125,
        "posteriorRate": 0.11681365168318844,
        "lift": 1.164526792647982,
        "averagePayoutYen": 2275.7341269841268,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 884,
        "highPayoutCount": 106,
        "observedRate": 0.11990950226244344,
        "posteriorRate": 0.10999669899392747,
        "lift": 1.1895281999667584,
        "averagePayoutYen": 2264.920814479638,
        "medianPayoutYen": 1020
      },
      "robustLift": 1.164526792647982,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 2120,
      "discovery": {
        "count": 3914,
        "highPayoutCount": 466,
        "observedRate": 0.11905978538579458,
        "posteriorRate": 0.11695092489703558,
        "lift": 1.1643538975403516,
        "averagePayoutYen": 1154.9054675523762,
        "medianPayoutYen": 600
      },
      "validation": {
        "count": 1772,
        "highPayoutCount": 218,
        "observedRate": 0.12302483069977427,
        "posteriorRate": 0.11613886175461811,
        "lift": 1.26602580458597,
        "averagePayoutYen": 1159.627539503386,
        "medianPayoutYen": 590
      },
      "robustLift": 1.1643538975403516,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 40145,
        "highPayoutCount": 4686,
        "observedRate": 0.1167268651139619,
        "posteriorRate": 0.11652234115185854,
        "lift": 1.164046418173617,
        "averagePayoutYen": 6663.417611159547,
        "medianPayoutYen": 2170
      },
      "validation": {
        "count": 15627,
        "highPayoutCount": 1820,
        "observedRate": 0.11646509246816407,
        "posteriorRate": 0.11573756919867251,
        "lift": 1.2444959203497086,
        "averagePayoutYen": 6591.846803609138,
        "medianPayoutYen": 2210
      },
      "robustLift": 1.164046418173617,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 2724,
        "highPayoutCount": 325,
        "observedRate": 0.11930983847283406,
        "posteriorRate": 0.11633081765424633,
        "lift": 1.162133117778279,
        "averagePayoutYen": 6394.73201174743,
        "medianPayoutYen": 2170
      },
      "validation": {
        "count": 1166,
        "highPayoutCount": 157,
        "observedRate": 0.1346483704974271,
        "posteriorRate": 0.12214872657082328,
        "lift": 1.313433424823002,
        "averagePayoutYen": 7020.265866209263,
        "medianPayoutYen": 2340
      },
      "robustLift": 1.162133117778279,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=04",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 4053,
        "highPayoutCount": 479,
        "observedRate": 0.11818406118924253,
        "posteriorRate": 0.11618902273764793,
        "lift": 1.1616899398444667,
        "averagePayoutYen": 26595.529237601775,
        "medianPayoutYen": 7050
      },
      "validation": {
        "count": 1635,
        "highPayoutCount": 196,
        "observedRate": 0.1198776758409786,
        "posteriorRate": 0.11185762451400097,
        "lift": 1.3062587640375967,
        "averagePayoutYen": 27959.070336391436,
        "medianPayoutYen": 7120
      },
      "robustLift": 1.1616899398444667,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 3245,
        "highPayoutCount": 416,
        "observedRate": 0.12819722650231125,
        "posteriorRate": 0.12444607639981047,
        "lift": 1.243203732923359,
        "averagePayoutYen": 6821.972265023112,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 1199,
        "highPayoutCount": 137,
        "observedRate": 0.11426188490408674,
        "posteriorRate": 0.10800457826191383,
        "lift": 1.1613450840263913,
        "averagePayoutYen": 7202.577147623019,
        "medianPayoutYen": 2570
      },
      "robustLift": 1.1613450840263913,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 5226,
        "highPayoutCount": 615,
        "observedRate": 0.11768082663605052,
        "posteriorRate": 0.11613842482090657,
        "lift": 1.1611840478981315,
        "averagePayoutYen": 28171.13279755071,
        "medianPayoutYen": 6320
      },
      "validation": {
        "count": 2031,
        "highPayoutCount": 214,
        "observedRate": 0.10536681437715412,
        "posteriorRate": 0.10146820558569422,
        "lift": 1.1849324835330424,
        "averagePayoutYen": 23499.566715903497,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.1611840478981315,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 58183,
        "highPayoutCount": 6874,
        "observedRate": 0.1181444751903477,
        "posteriorRate": 0.11800404904520442,
        "lift": 1.1607349124614734,
        "averagePayoutYen": 388.4449065878349,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 21128,
        "highPayoutCount": 2326,
        "observedRate": 0.1100908746686861,
        "posteriorRate": 0.10962967793012657,
        "lift": 1.2161974465549847,
        "averagePayoutYen": 377.4233244982961,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1607349124614734,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 4596,
        "highPayoutCount": 542,
        "observedRate": 0.11792863359442994,
        "posteriorRate": 0.11617946548612444,
        "lift": 1.160621124906839,
        "averagePayoutYen": 6448.1853785900785,
        "medianPayoutYen": 2230
      },
      "validation": {
        "count": 2037,
        "highPayoutCount": 238,
        "observedRate": 0.11683848797250859,
        "posteriorRate": 0.1121402358955426,
        "lift": 1.20581473280724,
        "averagePayoutYen": 6363.151693667158,
        "medianPayoutYen": 2190
      },
      "robustLift": 1.160621124906839,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 40053,
        "highPayoutCount": 4654,
        "observedRate": 0.11619604024667315,
        "posteriorRate": 0.11599661012867514,
        "lift": 1.1597218511505691,
        "averagePayoutYen": 13439.879659451228,
        "medianPayoutYen": 4190
      },
      "validation": {
        "count": 15652,
        "highPayoutCount": 1764,
        "observedRate": 0.11270125223613596,
        "posteriorRate": 0.11204271338420882,
        "lift": 1.2254773411660345,
        "averagePayoutYen": 13074.723358037312,
        "medianPayoutYen": 4160
      },
      "robustLift": 1.1597218511505691,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 5300,
        "highPayoutCount": 623,
        "observedRate": 0.11754716981132075,
        "posteriorRate": 0.1160399671562928,
        "lift": 1.1596619061041686,
        "averagePayoutYen": 184353.2396226415,
        "medianPayoutYen": 36050
      },
      "validation": {
        "count": 2626,
        "highPayoutCount": 278,
        "observedRate": 0.10586443259710586,
        "posteriorRate": 0.10226884283996383,
        "lift": 1.2264685670955662,
        "averagePayoutYen": 166719.45925361768,
        "medianPayoutYen": 28750
      },
      "robustLift": 1.1596619061041686,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=06",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2406,
        "highPayoutCount": 287,
        "observedRate": 0.11928512053200332,
        "posteriorRate": 0.11596993135736786,
        "lift": 1.1594994037130741,
        "averagePayoutYen": 25834.43059019119,
        "medianPayoutYen": 6500
      },
      "validation": {
        "count": 1113,
        "highPayoutCount": 131,
        "observedRate": 0.11769991015274034,
        "posteriorRate": 0.10775947200086304,
        "lift": 1.2584010729780206,
        "averagePayoutYen": 23036.33423180593,
        "medianPayoutYen": 7100
      },
      "robustLift": 1.1594994037130741,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 957,
        "highPayoutCount": 119,
        "observedRate": 0.12434691745036573,
        "posteriorRate": 0.11601359609231177,
        "lift": 1.1593983631277986,
        "averagePayoutYen": 166011.46290491117,
        "medianPayoutYen": 45520
      },
      "validation": {
        "count": 362,
        "highPayoutCount": 46,
        "observedRate": 0.1270718232044199,
        "posteriorRate": 0.101731325658616,
        "lift": 1.2200223425281431,
        "averagePayoutYen": 178791.29834254144,
        "medianPayoutYen": 39090
      },
      "robustLift": 1.1593983631277986,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 568,
        "highPayoutCount": 82,
        "observedRate": 0.1443661971830986,
        "posteriorRate": 0.12362528980009198,
        "lift": 1.2354669061493297,
        "averagePayoutYen": 198921.00352112675,
        "medianPayoutYen": 37610
      },
      "validation": {
        "count": 294,
        "highPayoutCount": 35,
        "observedRate": 0.11904761904761904,
        "posteriorRate": 0.09658992785607934,
        "lift": 1.1583636533258699,
        "averagePayoutYen": 177530.10204081633,
        "medianPayoutYen": 34150
      },
      "robustLift": 1.1583636533258699,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 1484,
        "highPayoutCount": 180,
        "observedRate": 0.12129380053908356,
        "posteriorRate": 0.11595290126879547,
        "lift": 1.1583577712609971,
        "averagePayoutYen": 6425.774932614555,
        "medianPayoutYen": 2290
      },
      "validation": {
        "count": 662,
        "highPayoutCount": 83,
        "observedRate": 0.12537764350453173,
        "posteriorRate": 0.11144559248450223,
        "lift": 1.1983454132325941,
        "averagePayoutYen": 6341.027190332326,
        "medianPayoutYen": 2390
      },
      "robustLift": 1.1583577712609971,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 5784,
        "highPayoutCount": 678,
        "observedRate": 0.11721991701244813,
        "posteriorRate": 0.11585145298347596,
        "lift": 1.1582705853510653,
        "averagePayoutYen": 12905.542876901798,
        "medianPayoutYen": 4490
      },
      "validation": {
        "count": 2154,
        "highPayoutCount": 253,
        "observedRate": 0.11745589600742803,
        "posteriorRate": 0.11255233857639071,
        "lift": 1.2310514129342243,
        "averagePayoutYen": 13570.598885793872,
        "medianPayoutYen": 4490
      },
      "robustLift": 1.1582705853510653,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 4576,
        "highPayoutCount": 538,
        "observedRate": 0.11756993006993006,
        "posteriorRate": 0.1158413180748942,
        "lift": 1.1581692576059819,
        "averagePayoutYen": 12609.96284965035,
        "medianPayoutYen": 4370
      },
      "validation": {
        "count": 2041,
        "highPayoutCount": 230,
        "observedRate": 0.11268985791278785,
        "posteriorRate": 0.10850606319627744,
        "lift": 1.1867949089218386,
        "averagePayoutYen": 12530.161685448309,
        "medianPayoutYen": 4060
      },
      "robustLift": 1.1581692576059819,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 24720,
      "discovery": {
        "count": 2703,
        "highPayoutCount": 321,
        "observedRate": 0.11875693673695893,
        "posteriorRate": 0.11583219811057226,
        "lift": 1.1580780771663626,
        "averagePayoutYen": 13276.337402885683,
        "medianPayoutYen": 4110
      },
      "validation": {
        "count": 1166,
        "highPayoutCount": 152,
        "observedRate": 0.13036020583190394,
        "posteriorRate": 0.11867581427475447,
        "lift": 1.2980274838527572,
        "averagePayoutYen": 14255.060034305317,
        "medianPayoutYen": 4260
      },
      "robustLift": 1.1580780771663626,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=稍重"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 6101,
        "highPayoutCount": 715,
        "observedRate": 0.11719390263891165,
        "posteriorRate": 0.11589919044346163,
        "lift": 1.157821205541248,
        "averagePayoutYen": 6611.271922635634,
        "medianPayoutYen": 2160
      },
      "validation": {
        "count": 2743,
        "highPayoutCount": 304,
        "observedRate": 0.11082756106452789,
        "posteriorRate": 0.10807887094264311,
        "lift": 1.1621439338615793,
        "averagePayoutYen": 6368.7057965730955,
        "medianPayoutYen": 2020
      },
      "robustLift": 1.157821205541248,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=不良"
      ],
      "highPayoutThresholdYen": 47570,
      "discovery": {
        "count": 2118,
        "highPayoutCount": 261,
        "observedRate": 0.12322946175637393,
        "posteriorRate": 0.11879626452425936,
        "lift": 1.1877578633271142,
        "averagePayoutYen": 27140.160528800756,
        "medianPayoutYen": 5870
      },
      "validation": {
        "count": 850,
        "highPayoutCount": 91,
        "observedRate": 0.10705882352941176,
        "posteriorRate": 0.09912298395362376,
        "lift": 1.1575452908958597,
        "averagePayoutYen": 21784.882352941175,
        "medianPayoutYen": 5970
      },
      "robustLift": 1.1575452908958597,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=07",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3237,
        "highPayoutCount": 449,
        "observedRate": 0.13870868087735558,
        "posteriorRate": 0.13357104274504902,
        "lift": 1.331582873724377,
        "averagePayoutYen": 2445.2641334569043,
        "medianPayoutYen": 1050
      },
      "validation": {
        "count": 1268,
        "highPayoutCount": 143,
        "observedRate": 0.11277602523659307,
        "posteriorRate": 0.10703361504954503,
        "lift": 1.1574847664551198,
        "averagePayoutYen": 2144.6214511041007,
        "medianPayoutYen": 960
      },
      "robustLift": 1.1574847664551198,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 31834,
        "highPayoutCount": 3754,
        "observedRate": 0.11792423195325752,
        "posteriorRate": 0.11767277819384336,
        "lift": 1.1574764001835742,
        "averagePayoutYen": 388.46327825595273,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 11915,
        "highPayoutCount": 1307,
        "observedRate": 0.10969366344943349,
        "posteriorRate": 0.10890621621206421,
        "lift": 1.2081715879480797,
        "averagePayoutYen": 380.68233319345364,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1574764001835742,
      "usePolicy": "volatility_prior_only"
    }
  ]
};
