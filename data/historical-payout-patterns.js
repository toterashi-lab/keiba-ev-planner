window.KEIBA_HISTORICAL_PAYOUT_PATTERNS = {
  "status": "research_only",
  "generatedAt": "2026-07-16T10:01:19.225Z",
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
    "totalRows": 905626,
    "discoveryRows": 636436,
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
    "馬連": 12390,
    "3連複": 47280,
    "ワイド": 4260,
    "馬単": 24620,
    "3連単": 303680
  },
  "baselines": {
    "単勝": {
      "discoveryCount": 54125,
      "validationCount": 22565,
      "discoveryRate": 0.10012009237875288,
      "validationRate": 0.09173498781298471
    },
    "枠連": {
      "discoveryCount": 52826,
      "validationCount": 21360,
      "discoveryRate": 0.10021580282436679,
      "validationRate": 0.09667602996254682
    },
    "複勝": {
      "discoveryCount": 161841,
      "validationCount": 67139,
      "discoveryRate": 0.10107451140316731,
      "validationRate": 0.09014134854555475
    },
    "馬連": {
      "discoveryCount": 54064,
      "validationCount": 22570,
      "discoveryRate": 0.10002959455460195,
      "validationRate": 0.09317678334071777
    },
    "3連複": {
      "discoveryCount": 53932,
      "validationCount": 22585,
      "discoveryRate": 0.10003337536156642,
      "validationRate": 0.08642904582687624
    },
    "ワイド": {
      "discoveryCount": 161402,
      "validationCount": 67697,
      "discoveryRate": 0.10020941500105326,
      "validationRate": 0.0927219817717181
    },
    "馬単": {
      "discoveryCount": 53960,
      "validationCount": 22608,
      "discoveryRate": 0.10003706449221646,
      "validationRate": 0.09164897381457891
    },
    "3連単": {
      "discoveryCount": 44286,
      "validationCount": 22666,
      "discoveryRate": 0.10005419319875355,
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
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2694,
        "highPayoutCount": 444,
        "observedRate": 0.16481069042316257,
        "posteriorRate": 0.15467022156568042,
        "lift": 1.5461861704319324,
        "averagePayoutYen": 35188.34818114328,
        "medianPayoutYen": 9780
      },
      "validation": {
        "count": 1312,
        "highPayoutCount": 211,
        "observedRate": 0.16082317073170732,
        "posteriorRate": 0.1402949905703301,
        "lift": 1.623238914974849,
        "averagePayoutYen": 34062.33993902439,
        "medianPayoutYen": 10740
      },
      "robustLift": 1.5461861704319324,
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
        "count": 2680,
        "highPayoutCount": 437,
        "observedRate": 0.16305970149253732,
        "posteriorRate": 0.15315317503125056,
        "lift": 1.5307022138194453,
        "averagePayoutYen": 224411.23134328358,
        "medianPayoutYen": 55530
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
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 4049,
        "highPayoutCount": 624,
        "observedRate": 0.15411212645097555,
        "posteriorRate": 0.14816810017163842,
        "lift": 1.4811866503163675,
        "averagePayoutYen": 31836.658434181278,
        "medianPayoutYen": 9330
      },
      "validation": {
        "count": 1781,
        "highPayoutCount": 275,
        "observedRate": 0.154407636159461,
        "posteriorRate": 0.13950658610847794,
        "lift": 1.6141169299487572,
        "averagePayoutYen": 29142.223469960696,
        "medianPayoutYen": 9710
      },
      "robustLift": 1.4811866503163675,
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
        "count": 3981,
        "highPayoutCount": 602,
        "observedRate": 0.15121828686259733,
        "posteriorRate": 0.1455092828831459,
        "lift": 1.4543046945978333,
        "averagePayoutYen": 195651.15548857072,
        "medianPayoutYen": 51970
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
      "robustLift": 1.4543046945978333,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 13142,
        "highPayoutCount": 1901,
        "observedRate": 0.14465073809161466,
        "posteriorRate": 0.14301544404638494,
        "lift": 1.4296772805022488,
        "averagePayoutYen": 31121.205295997566,
        "medianPayoutYen": 8940
      },
      "validation": {
        "count": 5192,
        "highPayoutCount": 765,
        "observedRate": 0.14734206471494607,
        "posteriorRate": 0.14199130760952883,
        "lift": 1.6428656159637338,
        "averagePayoutYen": 30657.36710323575,
        "medianPayoutYen": 9480
      },
      "robustLift": 1.4296772805022488,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 2693,
        "highPayoutCount": 401,
        "observedRate": 0.14890456739695507,
        "posteriorRate": 0.14125111095436924,
        "lift": 1.4120932068485612,
        "averagePayoutYen": 7614.077237281842,
        "medianPayoutYen": 2830
      },
      "validation": {
        "count": 1310,
        "highPayoutCount": 194,
        "observedRate": 0.1480916030534351,
        "posteriorRate": 0.13292176335378944,
        "lift": 1.4265545406062898,
        "averagePayoutYen": 7617.9312977099235,
        "medianPayoutYen": 2870
      },
      "robustLift": 1.4120932068485612,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 8068,
        "highPayoutCount": 1150,
        "observedRate": 0.14253842340109074,
        "posteriorRate": 0.14006824317233038,
        "lift": 1.3977553224001775,
        "averagePayoutYen": 2492.312840852752,
        "medianPayoutYen": 1240
      },
      "validation": {
        "count": 3929,
        "highPayoutCount": 584,
        "observedRate": 0.1486383303639603,
        "posteriorRate": 0.14232580512211765,
        "lift": 1.5349737182335508,
        "averagePayoutYen": 2661.0384321710358,
        "medianPayoutYen": 1280
      },
      "robustLift": 1.3977553224001775,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 12124,
        "highPayoutCount": 1717,
        "observedRate": 0.14161992741669416,
        "posteriorRate": 0.13997977721011776,
        "lift": 1.3968725115164726,
        "averagePayoutYen": 2448.5103926097,
        "medianPayoutYen": 1180
      },
      "validation": {
        "count": 5329,
        "highPayoutCount": 741,
        "observedRate": 0.13905047851379246,
        "posteriorRate": 0.13507651241822938,
        "lift": 1.4567906103515809,
        "averagePayoutYen": 2451.8690185775945,
        "medianPayoutYen": 1190
      },
      "robustLift": 1.3968725115164726,
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
        "count": 13009,
        "highPayoutCount": 1826,
        "observedRate": 0.14036436313321546,
        "posteriorRate": 0.1388723885261216,
        "lift": 1.387971698999734,
        "averagePayoutYen": 194136.25720654932,
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
      "robustLift": 1.387971698999734,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 2691,
        "highPayoutCount": 394,
        "observedRate": 0.14641397250092902,
        "posteriorRate": 0.13914714266565598,
        "lift": 1.3909558759241936,
        "averagePayoutYen": 15257.071720549982,
        "medianPayoutYen": 5400
      },
      "validation": {
        "count": 1311,
        "highPayoutCount": 184,
        "observedRate": 0.14035087719298245,
        "posteriorRate": 0.12690474152804496,
        "lift": 1.3846826237770464,
        "averagePayoutYen": 14953.23417238749,
        "medianPayoutYen": 5440
      },
      "robustLift": 1.3846826237770464,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 6585,
        "highPayoutCount": 908,
        "observedRate": 0.13788914198936977,
        "posteriorRate": 0.13521759882579862,
        "lift": 1.3517248452035164,
        "averagePayoutYen": 28912.21564160972,
        "medianPayoutYen": 7850
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 333,
        "observedRate": 0.1332,
        "posteriorRate": 0.12540484097114604,
        "lift": 1.450957137978142,
        "averagePayoutYen": 27495.308,
        "medianPayoutYen": 8340
      },
      "robustLift": 1.3517248452035164,
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
        "count": 5648,
        "highPayoutCount": 776,
        "observedRate": 0.13739376770538245,
        "posteriorRate": 0.13435704238766702,
        "lift": 1.3428426944663105,
        "averagePayoutYen": 184547.75849858357,
        "medianPayoutYen": 45530
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
      "robustLift": 1.3428426944663105,
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
        "count": 597,
        "highPayoutCount": 97,
        "observedRate": 0.1624790619765494,
        "posteriorRate": 0.1340265237915923,
        "lift": 1.339539298721385,
        "averagePayoutYen": 207625.91289782245,
        "medianPayoutYen": 50290
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
      "robustLift": 1.339539298721385,
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
        "count": 4978,
        "highPayoutCount": 681,
        "observedRate": 0.13680192848533548,
        "posteriorRate": 0.13344780879871793,
        "lift": 1.3337552833355952,
        "averagePayoutYen": 180202.73001205304,
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
      "robustLift": 1.3337552833355952,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 13174,
        "highPayoutCount": 1766,
        "observedRate": 0.13405192044936998,
        "posteriorRate": 0.13280786874925413,
        "lift": 1.3276857648039342,
        "averagePayoutYen": 7144.277364505845,
        "medianPayoutYen": 2640
      },
      "validation": {
        "count": 5186,
        "highPayoutCount": 726,
        "observedRate": 0.13999228692634014,
        "posteriorRate": 0.13587555252732306,
        "lift": 1.458255454370747,
        "averagePayoutYen": 7289.20362514462,
        "medianPayoutYen": 2750
      },
      "robustLift": 1.3276857648039342,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 39378,
        "highPayoutCount": 5243,
        "observedRate": 0.13314541114327796,
        "posteriorRate": 0.13273245166509168,
        "lift": 1.3245507087701947,
        "averagePayoutYen": 2374.4369952765505,
        "medianPayoutYen": 1160
      },
      "validation": {
        "count": 15554,
        "highPayoutCount": 2202,
        "observedRate": 0.14157129998714157,
        "posteriorRate": 0.1400498935396698,
        "lift": 1.5104281731647324,
        "averagePayoutYen": 2513.6325061077537,
        "medianPayoutYen": 1200
      },
      "robustLift": 1.3245507087701947,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 20005,
        "highPayoutCount": 2665,
        "observedRate": 0.13321669582604348,
        "posteriorRate": 0.1324075439005503,
        "lift": 1.3236336714818309,
        "averagePayoutYen": 29267.826543364157,
        "medianPayoutYen": 7560
      },
      "validation": {
        "count": 7060,
        "highPayoutCount": 877,
        "observedRate": 0.12422096317280454,
        "posteriorRate": 0.12172149773987277,
        "lift": 1.4083401774872062,
        "averagePayoutYen": 28286.706798866857,
        "medianPayoutYen": 7370
      },
      "robustLift": 1.3236336714818309,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2105,
        "highPayoutCount": 296,
        "observedRate": 0.14061757719714965,
        "posteriorRate": 0.13282790314041582,
        "lift": 1.3278358613844126,
        "averagePayoutYen": 29061.890736342044,
        "medianPayoutYen": 8050
      },
      "validation": {
        "count": 805,
        "highPayoutCount": 106,
        "observedRate": 0.13167701863354037,
        "posteriorRate": 0.11434063058501005,
        "lift": 1.3229421832799446,
        "averagePayoutYen": 28850.63354037267,
        "medianPayoutYen": 7640
      },
      "robustLift": 1.3229421832799446,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 613,
        "highPayoutCount": 97,
        "observedRate": 0.15823817292006526,
        "posteriorRate": 0.13209046512199749,
        "lift": 1.3204639416051098,
        "averagePayoutYen": 32435.84013050571,
        "medianPayoutYen": 9400
      },
      "validation": {
        "count": 315,
        "highPayoutCount": 59,
        "observedRate": 0.1873015873015873,
        "posteriorRate": 0.1254165925318259,
        "lift": 1.4510931057025043,
        "averagePayoutYen": 34665.90476190476,
        "medianPayoutYen": 11490
      },
      "robustLift": 1.3204639416051098,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 1832,
        "highPayoutCount": 257,
        "observedRate": 0.14028384279475983,
        "posteriorRate": 0.13169155553195824,
        "lift": 1.3141634998126082,
        "averagePayoutYen": 2447.8329694323143,
        "medianPayoutYen": 1180
      },
      "validation": {
        "count": 941,
        "highPayoutCount": 148,
        "observedRate": 0.15727948990435706,
        "posteriorRate": 0.13487924419559963,
        "lift": 1.454663086555601,
        "averagePayoutYen": 2603.5494155154092,
        "medianPayoutYen": 1310
      },
      "robustLift": 1.3141634998126082,
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
        "count": 16821,
        "highPayoutCount": 2220,
        "observedRate": 0.13197788478687356,
        "posteriorRate": 0.13105635336293384,
        "lift": 1.3098536820200606,
        "averagePayoutYen": 189847.35211937458,
        "medianPayoutYen": 43630
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
      "robustLift": 1.3098536820200606,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 13144,
        "highPayoutCount": 1737,
        "observedRate": 0.13215155203895312,
        "posteriorRate": 0.13097467987731665,
        "lift": 1.3092615276361628,
        "averagePayoutYen": 14113.285149117468,
        "medianPayoutYen": 5060
      },
      "validation": {
        "count": 5196,
        "highPayoutCount": 704,
        "observedRate": 0.1354888375673595,
        "posteriorRate": 0.13164053492052133,
        "lift": 1.4363557980131014,
        "averagePayoutYen": 14442.167051578137,
        "medianPayoutYen": 5210
      },
      "robustLift": 1.3092615276361628,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 3250,
        "highPayoutCount": 441,
        "observedRate": 0.1356923076923077,
        "posteriorRate": 0.1309377833815422,
        "lift": 1.308940970033982,
        "averagePayoutYen": 27944.772307692307,
        "medianPayoutYen": 6750
      },
      "validation": {
        "count": 1398,
        "highPayoutCount": 179,
        "observedRate": 0.12804005722460657,
        "posteriorRate": 0.11707825232530986,
        "lift": 1.354616971704469,
        "averagePayoutYen": 28814.334763948496,
        "medianPayoutYen": 7380
      },
      "robustLift": 1.308940970033982,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 4047,
        "highPayoutCount": 545,
        "observedRate": 0.13466765505312578,
        "posteriorRate": 0.1308595848352998,
        "lift": 1.3081110036518668,
        "averagePayoutYen": 14072.095379293303,
        "medianPayoutYen": 5190
      },
      "validation": {
        "count": 1776,
        "highPayoutCount": 235,
        "observedRate": 0.13231981981981983,
        "posteriorRate": 0.12338509969564562,
        "lift": 1.3462791186868515,
        "averagePayoutYen": 14495.033783783783,
        "medianPayoutYen": 5220
      },
      "robustLift": 1.3081110036518668,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 19368,
        "highPayoutCount": 2546,
        "observedRate": 0.13145394465097068,
        "posteriorRate": 0.13066321158047028,
        "lift": 1.3061961681108292,
        "averagePayoutYen": 29489.922036348617,
        "medianPayoutYen": 7920
      },
      "validation": {
        "count": 6762,
        "highPayoutCount": 877,
        "observedRate": 0.12969535640343094,
        "posteriorRate": 0.1267164035959017,
        "lift": 1.4661321594331147,
        "averagePayoutYen": 28797.326234841763,
        "medianPayoutYen": 8100
      },
      "robustLift": 1.3061961681108292,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 4057,
        "highPayoutCount": 542,
        "observedRate": 0.13359625338920383,
        "posteriorRate": 0.12991327568077704,
        "lift": 1.2987483980039811,
        "averagePayoutYen": 7158.86122750801,
        "medianPayoutYen": 2700
      },
      "validation": {
        "count": 1771,
        "highPayoutCount": 247,
        "observedRate": 0.13946922642574816,
        "posteriorRate": 0.12927714296361026,
        "lift": 1.3874394278120226,
        "averagePayoutYen": 7359.288537549407,
        "medianPayoutYen": 2790
      },
      "robustLift": 1.2987483980039811,
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
        "count": 8876,
        "highPayoutCount": 1167,
        "observedRate": 0.1314781433077963,
        "posteriorRate": 0.12980237805027484,
        "lift": 1.2973207209059967,
        "averagePayoutYen": 178106.8465525011,
        "medianPayoutYen": 41620
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
      "robustLift": 1.2973207209059967,
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
        "count": 2809,
        "highPayoutCount": 379,
        "observedRate": 0.1349234603061588,
        "posteriorRate": 0.12965460761540548,
        "lift": 1.2958438169388056,
        "averagePayoutYen": 189842.01139195444,
        "medianPayoutYen": 40340
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
      "robustLift": 1.2958438169388056,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2839,
        "highPayoutCount": 382,
        "observedRate": 0.13455442057062345,
        "posteriorRate": 0.12938505171631723,
        "lift": 1.293418833950773,
        "averagePayoutYen": 29431.08136667841,
        "medianPayoutYen": 7270
      },
      "validation": {
        "count": 1245,
        "highPayoutCount": 161,
        "observedRate": 0.12931726907630522,
        "posteriorRate": 0.11702837989308774,
        "lift": 1.3540399384658743,
        "averagePayoutYen": 28269.26907630522,
        "medianPayoutYen": 7580
      },
      "robustLift": 1.293418833950773,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 3380,
        "highPayoutCount": 451,
        "observedRate": 0.1334319526627219,
        "posteriorRate": 0.12912801228886164,
        "lift": 1.2908492972683754,
        "averagePayoutYen": 27516.00295857988,
        "medianPayoutYen": 7340
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 185,
        "observedRate": 0.13795674869500374,
        "posteriorRate": 0.1239622612240294,
        "lift": 1.434266224254459,
        "averagePayoutYen": 32706.935123042505,
        "medianPayoutYen": 8280
      },
      "robustLift": 1.2908492972683754,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 6083,
        "highPayoutCount": 800,
        "observedRate": 0.13151405556468848,
        "posteriorRate": 0.12912299676147398,
        "lift": 1.290799158728418,
        "averagePayoutYen": 27316.919283248397,
        "medianPayoutYen": 7130
      },
      "validation": {
        "count": 2155,
        "highPayoutCount": 279,
        "observedRate": 0.1294663573085847,
        "posteriorRate": 0.12136140222728367,
        "lift": 1.4041738059954927,
        "averagePayoutYen": 29020.032482598606,
        "medianPayoutYen": 6950
      },
      "robustLift": 1.290799158728418,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 10915,
        "highPayoutCount": 1423,
        "observedRate": 0.1303710490151168,
        "posteriorRate": 0.12904219778193457,
        "lift": 1.2899914385125661,
        "averagePayoutYen": 27859.599633531838,
        "medianPayoutYen": 7090
      },
      "validation": {
        "count": 3985,
        "highPayoutCount": 525,
        "observedRate": 0.13174404015056462,
        "posteriorRate": 0.12669220131849235,
        "lift": 1.4658521346199538,
        "averagePayoutYen": 27837.124215809286,
        "medianPayoutYen": 7730
      },
      "robustLift": 1.2899914385125661,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 19728,
        "highPayoutCount": 2555,
        "observedRate": 0.12951135442011355,
        "posteriorRate": 0.12878706285844013,
        "lift": 1.285179270401753,
        "averagePayoutYen": 2324.961476074615,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 7488,
        "highPayoutCount": 944,
        "observedRate": 0.12606837606837606,
        "posteriorRate": 0.12398109550398836,
        "lift": 1.337127325527083,
        "averagePayoutYen": 2340.571581196581,
        "medianPayoutYen": 1090
      },
      "robustLift": 1.285179270401753,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 9742,
        "highPayoutCount": 1268,
        "observedRate": 0.1301580784233217,
        "posteriorRate": 0.1286960268990946,
        "lift": 1.2842708132538436,
        "averagePayoutYen": 2293.2046807637034,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 4189,
        "highPayoutCount": 522,
        "observedRate": 0.12461207925519217,
        "posteriorRate": 0.12121155702406891,
        "lift": 1.30725804936409,
        "averagePayoutYen": 2379.188350441633,
        "medianPayoutYen": 1030
      },
      "robustLift": 1.2842708132538436,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 8268,
        "highPayoutCount": 1077,
        "observedRate": 0.1302612481857765,
        "posteriorRate": 0.12854752594668417,
        "lift": 1.2827889070636034,
        "averagePayoutYen": 2228.8582486695695,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 3506,
        "highPayoutCount": 430,
        "observedRate": 0.1226468910439247,
        "posteriorRate": 0.11891187990161234,
        "lift": 1.2824561946311057,
        "averagePayoutYen": 2222.2960638904733,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2824561946311057,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 1794,
        "highPayoutCount": 254,
        "observedRate": 0.1415830546265329,
        "posteriorRate": 0.1325268908808994,
        "lift": 1.3248267430933578,
        "averagePayoutYen": 30275.20624303233,
        "medianPayoutYen": 7120
      },
      "validation": {
        "count": 630,
        "highPayoutCount": 82,
        "observedRate": 0.13015873015873017,
        "posteriorRate": 0.11080931231277709,
        "lift": 1.282084179602495,
        "averagePayoutYen": 25161.777777777777,
        "medianPayoutYen": 7500
      },
      "robustLift": 1.282084179602495,
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
        "count": 1441,
        "highPayoutCount": 202,
        "observedRate": 0.14018043025676613,
        "posteriorRate": 0.12984394466737598,
        "lift": 1.2977361619362249,
        "averagePayoutYen": 180673.893129771,
        "medianPayoutYen": 41030
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
        "posteriorRate": 0.12762264219441552,
        "lift": 1.2755351686350453,
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
      "robustLift": 1.2755351686350453,
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
        "count": 2890,
        "highPayoutCount": 382,
        "observedRate": 0.13217993079584775,
        "posteriorRate": 0.12744162141574536,
        "lift": 1.273725941326495,
        "averagePayoutYen": 185448.65397923876,
        "medianPayoutYen": 39780
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
      "robustLift": 1.273725941326495,
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
        "count": 8340,
        "highPayoutCount": 1087,
        "observedRate": 0.1303357314148681,
        "posteriorRate": 0.1286806850341158,
        "lift": 1.2731269560219058,
        "averagePayoutYen": 387.8021582733813,
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
      "robustLift": 1.2731269560219058,
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
        "count": 3570,
        "highPayoutCount": 467,
        "observedRate": 0.130812324929972,
        "posteriorRate": 0.12703368466815154,
        "lift": 1.2696487833928591,
        "averagePayoutYen": 184907.2100840336,
        "medianPayoutYen": 41010
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
      "robustLift": 1.2696487833928591,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 3597,
        "highPayoutCount": 470,
        "observedRate": 0.1306644425910481,
        "posteriorRate": 0.126928751915884,
        "lift": 1.2686000242263236,
        "averagePayoutYen": 184258.62941340005,
        "medianPayoutYen": 40730
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
      "robustLift": 1.2686000242263236,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 3599,
        "highPayoutCount": 470,
        "observedRate": 0.13059183106418448,
        "posteriorRate": 0.12686428096628036,
        "lift": 1.2682195368069382,
        "averagePayoutYen": 28689.702695193108,
        "medianPayoutYen": 7260
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 220,
        "observedRate": 0.12910798122065728,
        "posteriorRate": 0.1194258270932115,
        "lift": 1.3817788447234538,
        "averagePayoutYen": 28374.771126760563,
        "medianPayoutYen": 8150
      },
      "robustLift": 1.2682195368069382,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 6309,
        "highPayoutCount": 813,
        "observedRate": 0.1288635282929149,
        "posteriorRate": 0.12675939308276202,
        "lift": 1.2649449463548879,
        "averagePayoutYen": 2344.476145189412,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 2410,
        "highPayoutCount": 315,
        "observedRate": 0.13070539419087138,
        "posteriorRate": 0.12417903466868009,
        "lift": 1.3392620853856358,
        "averagePayoutYen": 2482.5767634854774,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.2649449463548879,
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
        "count": 16831,
        "highPayoutCount": 2143,
        "observedRate": 0.12732457964470323,
        "posteriorRate": 0.1265378279729604,
        "lift": 1.2646929021914972,
        "averagePayoutYen": 186148.5942605906,
        "medianPayoutYen": 44800
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
      "robustLift": 1.2646929021914972,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 3637,
        "highPayoutCount": 473,
        "observedRate": 0.1300522408578499,
        "posteriorRate": 0.1264241449554709,
        "lift": 1.2638196451785833,
        "averagePayoutYen": 28599.362111630464,
        "medianPayoutYen": 7200
      },
      "validation": {
        "count": 1731,
        "highPayoutCount": 224,
        "observedRate": 0.1294049682264587,
        "posteriorRate": 0.11977343026151419,
        "lift": 1.3858006774878575,
        "averagePayoutYen": 28159.39919121895,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.2638196451785833,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 59948,
        "highPayoutCount": 7595,
        "observedRate": 0.12669313404950958,
        "posteriorRate": 0.12647407205367467,
        "lift": 1.2620976986278718,
        "averagePayoutYen": 2291.8719556949354,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 21154,
        "highPayoutCount": 2601,
        "observedRate": 0.1229554694147679,
        "posteriorRate": 0.1222573654237489,
        "lift": 1.318537018813371,
        "averagePayoutYen": 2369.367022785289,
        "medianPayoutYen": 1030
      },
      "robustLift": 1.2620976986278718,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2757,
        "highPayoutCount": 361,
        "observedRate": 0.13093942691331156,
        "posteriorRate": 0.12619486879974923,
        "lift": 1.2615276485835172,
        "averagePayoutYen": 27304.258251722888,
        "medianPayoutYen": 6900
      },
      "validation": {
        "count": 1170,
        "highPayoutCount": 139,
        "observedRate": 0.1188034188034188,
        "posteriorRate": 0.1091104927625378,
        "lift": 1.2624285240993423,
        "averagePayoutYen": 26194.846153846152,
        "medianPayoutYen": 7260
      },
      "robustLift": 1.2615276485835172,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 1289,
        "highPayoutCount": 176,
        "observedRate": 0.1365399534522886,
        "posteriorRate": 0.12638608580241845,
        "lift": 1.2612196748288576,
        "averagePayoutYen": 2421.311093871218,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 492,
        "highPayoutCount": 75,
        "observedRate": 0.1524390243902439,
        "posteriorRate": 0.1223397085542934,
        "lift": 1.3194250836386807,
        "averagePayoutYen": 2819.918699186992,
        "medianPayoutYen": 1090
      },
      "robustLift": 1.2612196748288576,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 431,
        "highPayoutCount": 76,
        "observedRate": 0.17633410672853828,
        "posteriorRate": 0.13535627033381656,
        "lift": 1.3531110976169405,
        "averagePayoutYen": 30216.102088167052,
        "medianPayoutYen": 7990
      },
      "validation": {
        "count": 164,
        "highPayoutCount": 29,
        "observedRate": 0.17682926829268292,
        "posteriorRate": 0.10875681161662366,
        "lift": 1.2583363680130355,
        "averagePayoutYen": 39548.04878048781,
        "medianPayoutYen": 7770
      },
      "robustLift": 1.2583363680130355,
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
        "count": 1193,
        "highPayoutCount": 171,
        "observedRate": 0.14333612740989102,
        "posteriorRate": 0.13055351246271515,
        "lift": 1.3048279965975633,
        "averagePayoutYen": 224819.91617770327,
        "medianPayoutYen": 40660
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
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 32719,
        "highPayoutCount": 4133,
        "observedRate": 0.12631804150493597,
        "posteriorRate": 0.12592506419520536,
        "lift": 1.2566190930650758,
        "averagePayoutYen": 2274.571349980134,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 11935,
        "highPayoutCount": 1511,
        "observedRate": 0.12660242982823627,
        "posteriorRate": 0.12524012793613665,
        "lift": 1.3507059010502855,
        "averagePayoutYen": 2362.4759111855888,
        "medianPayoutYen": 1060
      },
      "robustLift": 1.2566190930650758,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2923,
        "highPayoutCount": 380,
        "observedRate": 0.13000342114266164,
        "posteriorRate": 0.12562567562979352,
        "lift": 1.2558376159529236,
        "averagePayoutYen": 28905.76462538488,
        "medianPayoutYen": 6990
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 170,
        "observedRate": 0.13026819923371646,
        "posteriorRate": 0.11812438942572749,
        "lift": 1.3667209708914219,
        "averagePayoutYen": 27229.946360153255,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.2558376159529236,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 58045,
        "highPayoutCount": 7291,
        "observedRate": 0.1256094409509863,
        "posteriorRate": 0.12539251357930697,
        "lift": 1.2513047160088602,
        "averagePayoutYen": 2302.1883021793437,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 20268,
        "highPayoutCount": 2601,
        "observedRate": 0.1283303730017762,
        "posteriorRate": 0.12747308315128364,
        "lift": 1.3747881647431015,
        "averagePayoutYen": 2396.4135583185316,
        "medianPayoutYen": 1110
      },
      "robustLift": 1.2513047160088602,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 3393,
        "highPayoutCount": 437,
        "observedRate": 0.12879457707043915,
        "posteriorRate": 0.12510061332668462,
        "lift": 1.2505887447515764,
        "averagePayoutYen": 26698.370173887415,
        "medianPayoutYen": 7510
      },
      "validation": {
        "count": 1198,
        "highPayoutCount": 150,
        "observedRate": 0.12520868113522537,
        "posteriorRate": 0.11378947168047003,
        "lift": 1.316565173106258,
        "averagePayoutYen": 27102.9632721202,
        "medianPayoutYen": 7270
      },
      "robustLift": 1.2505887447515764,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 5380,
        "highPayoutCount": 686,
        "observedRate": 0.1275092936802974,
        "posteriorRate": 0.12518787542525964,
        "lift": 1.2492626109427325,
        "averagePayoutYen": 2353.449814126394,
        "medianPayoutYen": 990
      },
      "validation": {
        "count": 1888,
        "highPayoutCount": 236,
        "observedRate": 0.125,
        "posteriorRate": 0.11824162097397783,
        "lift": 1.275227499613729,
        "averagePayoutYen": 2280.169491525424,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.2492626109427325,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2337,
        "highPayoutCount": 304,
        "observedRate": 0.13008130081300814,
        "posteriorRate": 0.12478557902036772,
        "lift": 1.2474394527759909,
        "averagePayoutYen": 29589.276850663242,
        "medianPayoutYen": 7210
      },
      "validation": {
        "count": 1056,
        "highPayoutCount": 132,
        "observedRate": 0.125,
        "posteriorRate": 0.11260573452020445,
        "lift": 1.302869115849804,
        "averagePayoutYen": 27131.19318181818,
        "medianPayoutYen": 7610
      },
      "robustLift": 1.2474394527759909,
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
        "posteriorRate": 0.12459048735523191,
        "lift": 1.2452300435598738,
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
      "robustLift": 1.2452300435598738,
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
        "count": 2698,
        "highPayoutCount": 347,
        "observedRate": 0.1286137879911045,
        "posteriorRate": 0.12414856053764127,
        "lift": 1.2408131690295603,
        "averagePayoutYen": 172026.10822831726,
        "medianPayoutYen": 44330
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
      "robustLift": 1.2408131690295603,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 5841,
        "highPayoutCount": 746,
        "observedRate": 0.12771785653141585,
        "posteriorRate": 0.12553488214489564,
        "lift": 1.254929984029381,
        "averagePayoutYen": 29001.41414141414,
        "medianPayoutYen": 6390
      },
      "validation": {
        "count": 1425,
        "highPayoutCount": 163,
        "observedRate": 0.1143859649122807,
        "posteriorRate": 0.10712442748750033,
        "lift": 1.2394493825846284,
        "averagePayoutYen": 25700.63859649123,
        "medianPayoutYen": 7000
      },
      "robustLift": 1.2394493825846284,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 1122,
        "highPayoutCount": 151,
        "observedRate": 0.13458110516934046,
        "posteriorRate": 0.12393137341601924,
        "lift": 1.2389002467234012,
        "averagePayoutYen": 26513.79679144385,
        "medianPayoutYen": 7320
      },
      "validation": {
        "count": 617,
        "highPayoutCount": 80,
        "observedRate": 0.12965964343598055,
        "posteriorRate": 0.11030843591176197,
        "lift": 1.2762889472680041,
        "averagePayoutYen": 28062.090761750405,
        "medianPayoutYen": 7710
      },
      "robustLift": 1.2389002467234012,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 1324,
        "highPayoutCount": 176,
        "observedRate": 0.13293051359516617,
        "posteriorRate": 0.12391265771972763,
        "lift": 1.2387131522039574,
        "averagePayoutYen": 27691.223564954682,
        "medianPayoutYen": 8030
      },
      "validation": {
        "count": 490,
        "highPayoutCount": 73,
        "observedRate": 0.1489795918367347,
        "posteriorRate": 0.11738840698327083,
        "lift": 1.3582055182977313,
        "averagePayoutYen": 24709.755102040817,
        "medianPayoutYen": 8880
      },
      "robustLift": 1.2387131522039574,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 19428,
        "highPayoutCount": 2411,
        "observedRate": 0.12409923821288861,
        "posteriorRate": 0.1234953230267614,
        "lift": 1.2345878594894284,
        "averagePayoutYen": 6920.876055178093,
        "medianPayoutYen": 2460
      },
      "validation": {
        "count": 6761,
        "highPayoutCount": 855,
        "observedRate": 0.12646058275403047,
        "posteriorRate": 0.12416862576371834,
        "lift": 1.3326133540119462,
        "averagePayoutYen": 6929.587339151013,
        "medianPayoutYen": 2540
      },
      "robustLift": 1.2345878594894284,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 19376,
        "highPayoutCount": 2403,
        "observedRate": 0.1240194054500413,
        "posteriorRate": 0.12341610647243452,
        "lift": 1.2337037986759107,
        "averagePayoutYen": 13779.92671345995,
        "medianPayoutYen": 4780
      },
      "validation": {
        "count": 6776,
        "highPayoutCount": 846,
        "observedRate": 0.12485242030696576,
        "posteriorRate": 0.12257071013019372,
        "lift": 1.3373931537757815,
        "averagePayoutYen": 13701.15997638725,
        "medianPayoutYen": 4810
      },
      "robustLift": 1.2337037986759107,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 1196,
        "highPayoutCount": 172,
        "observedRate": 0.14381270903010032,
        "posteriorRate": 0.1309060658495184,
        "lift": 1.308623900536835,
        "averagePayoutYen": 34015.11705685619,
        "medianPayoutYen": 7250
      },
      "validation": {
        "count": 562,
        "highPayoutCount": 70,
        "observedRate": 0.12455516014234876,
        "posteriorRate": 0.10660501215954625,
        "lift": 1.2334396514463895,
        "averagePayoutYen": 29295.195729537365,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.2334396514463895,
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
        "count": 1296,
        "highPayoutCount": 171,
        "observedRate": 0.13194444444444445,
        "posteriorRate": 0.12306631213773762,
        "lift": 1.2299965469040506,
        "averagePayoutYen": 166699.46759259258,
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
      "robustLift": 1.2299965469040506,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 3395,
        "highPayoutCount": 434,
        "observedRate": 0.12783505154639174,
        "posteriorRate": 0.12426663215561187,
        "lift": 1.2422059042454272,
        "averagePayoutYen": 13874.904270986744,
        "medianPayoutYen": 4530
      },
      "validation": {
        "count": 1202,
        "highPayoutCount": 146,
        "observedRate": 0.12146422628951747,
        "posteriorRate": 0.11270533895845443,
        "lift": 1.229750146318889,
        "averagePayoutYen": 14502.212978369384,
        "medianPayoutYen": 4800
      },
      "robustLift": 1.229750146318889,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 20011,
        "highPayoutCount": 2472,
        "observedRate": 0.12353205736844736,
        "posteriorRate": 0.12295931608630044,
        "lift": 1.2291375872576458,
        "averagePayoutYen": 13656.24006796262,
        "medianPayoutYen": 4560
      },
      "validation": {
        "count": 7066,
        "highPayoutCount": 877,
        "observedRate": 0.12411548259269742,
        "posteriorRate": 0.12196992954101103,
        "lift": 1.3308379184667845,
        "averagePayoutYen": 14042.431361449193,
        "medianPayoutYen": 4470
      },
      "robustLift": 1.2291375872576458,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 10171,
        "highPayoutCount": 1263,
        "observedRate": 0.12417658047389638,
        "posteriorRate": 0.12305357581300035,
        "lift": 1.2279642168523484,
        "averagePayoutYen": 2236.5509782715562,
        "medianPayoutYen": 1030
      },
      "validation": {
        "count": 3591,
        "highPayoutCount": 426,
        "observedRate": 0.11862990810359231,
        "posteriorRate": 0.11546345413978466,
        "lift": 1.2452651672615902,
        "averagePayoutYen": 2291.1389585073794,
        "medianPayoutYen": 1060
      },
      "robustLift": 1.2279642168523484,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 2106,
        "highPayoutCount": 270,
        "observedRate": 0.1282051282051282,
        "posteriorRate": 0.12279923149551074,
        "lift": 1.227629003619322,
        "averagePayoutYen": 6973.129154795822,
        "medianPayoutYen": 2480
      },
      "validation": {
        "count": 801,
        "highPayoutCount": 106,
        "observedRate": 0.132334581772784,
        "posteriorRate": 0.1172854663108062,
        "lift": 1.2587413098596747,
        "averagePayoutYen": 7052.259675405743,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.227629003619322,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 4527,
        "highPayoutCount": 568,
        "observedRate": 0.12546940578749724,
        "posteriorRate": 0.12295697384136196,
        "lift": 1.227000215898572,
        "averagePayoutYen": 2225.8206317649656,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 1985,
        "highPayoutCount": 244,
        "observedRate": 0.12292191435768261,
        "posteriorRate": 0.11684546916935978,
        "lift": 1.2601701013793452,
        "averagePayoutYen": 2165.9798488664987,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.227000215898572,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 18125,
        "highPayoutCount": 2239,
        "observedRate": 0.12353103448275862,
        "posteriorRate": 0.12290495073828331,
        "lift": 1.2264810720329173,
        "averagePayoutYen": 2220.9395862068964,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 6455,
        "highPayoutCount": 771,
        "observedRate": 0.11944229279628195,
        "posteriorRate": 0.1175213502352062,
        "lift": 1.2674594307587628,
        "averagePayoutYen": 2316.5143299767624,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.2264810720329173,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 6608,
        "highPayoutCount": 822,
        "observedRate": 0.12439467312348668,
        "posteriorRate": 0.12268075369686283,
        "lift": 1.2264445761588745,
        "averagePayoutYen": 6785.482748184019,
        "medianPayoutYen": 2460
      },
      "validation": {
        "count": 2495,
        "highPayoutCount": 305,
        "observedRate": 0.12224448897795591,
        "posteriorRate": 0.11739178352933519,
        "lift": 1.2598823367841632,
        "averagePayoutYen": 6760.112224448898,
        "medianPayoutYen": 2470
      },
      "robustLift": 1.2264445761588745,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 10134,
        "highPayoutCount": 1256,
        "observedRate": 0.12393921452536018,
        "posteriorRate": 0.12282346318417592,
        "lift": 1.2256678993973267,
        "averagePayoutYen": 2258.8859285573317,
        "medianPayoutYen": 1010
      },
      "validation": {
        "count": 4019,
        "highPayoutCount": 550,
        "observedRate": 0.13684996267728292,
        "posteriorRate": 0.13196746866250478,
        "lift": 1.423259793857828,
        "averagePayoutYen": 2605.260014929087,
        "medianPayoutYen": 1120
      },
      "robustLift": 1.2256678993973267,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 20031,
        "highPayoutCount": 2465,
        "observedRate": 0.1230592581498677,
        "posteriorRate": 0.12249840715392826,
        "lift": 1.224621650216342,
        "averagePayoutYen": 6768.676551345415,
        "medianPayoutYen": 2360
      },
      "validation": {
        "count": 7053,
        "highPayoutCount": 891,
        "observedRate": 0.12632922160782645,
        "posteriorRate": 0.1241345679425869,
        "lift": 1.3322478356938594,
        "averagePayoutYen": 7052.044520062384,
        "medianPayoutYen": 2370
      },
      "robustLift": 1.224621650216342,
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
        "count": 1756,
        "highPayoutCount": 226,
        "observedRate": 0.12870159453302962,
        "posteriorRate": 0.12235243643589395,
        "lift": 1.2228616565109456,
        "averagePayoutYen": 182475.3416856492,
        "medianPayoutYen": 45390
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
      "robustLift": 1.2228616565109456,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 26364,
        "highPayoutCount": 3235,
        "observedRate": 0.1227052040661508,
        "posteriorRate": 0.12228322988686656,
        "lift": 1.2224243103352153,
        "averagePayoutYen": 28946.622667273554,
        "medianPayoutYen": 6590
      },
      "validation": {
        "count": 9557,
        "highPayoutCount": 1048,
        "observedRate": 0.10965784241916919,
        "posteriorRate": 0.10850298527527474,
        "lift": 1.2553995504313935,
        "averagePayoutYen": 25387.523281364443,
        "medianPayoutYen": 6550
      },
      "robustLift": 1.2224243103352153,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2186,
        "highPayoutCount": 278,
        "observedRate": 0.12717291857273558,
        "posteriorRate": 0.12212088148949486,
        "lift": 1.2208013680243626,
        "averagePayoutYen": 25117.099725526074,
        "medianPayoutYen": 7280
      },
      "validation": {
        "count": 909,
        "highPayoutCount": 110,
        "observedRate": 0.12101210121012101,
        "posteriorRate": 0.10873990270648554,
        "lift": 1.258140728804291,
        "averagePayoutYen": 25466.105610561055,
        "medianPayoutYen": 7470
      },
      "robustLift": 1.2208013680243626,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 3259,
        "highPayoutCount": 409,
        "observedRate": 0.12549861920834612,
        "posteriorRate": 0.12211087982902394,
        "lift": 1.220747523497846,
        "averagePayoutYen": 6941.626265725683,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 1399,
        "highPayoutCount": 185,
        "observedRate": 0.1322373123659757,
        "posteriorRate": 0.12195281288591832,
        "lift": 1.3088326138065507,
        "averagePayoutYen": 6875.039313795568,
        "medianPayoutYen": 2340
      },
      "robustLift": 1.220747523497846,
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
        "count": 2311,
        "highPayoutCount": 307,
        "observedRate": 0.13284292514063176,
        "posteriorRate": 0.1270107067233642,
        "lift": 1.2694191284023713,
        "averagePayoutYen": 191036.46040675032,
        "medianPayoutYen": 41840
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
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 2846,
        "highPayoutCount": 358,
        "observedRate": 0.1257905832747716,
        "posteriorRate": 0.12194106314324596,
        "lift": 1.2190498590562961,
        "averagePayoutYen": 6308.664792691497,
        "medianPayoutYen": 2340
      },
      "validation": {
        "count": 1247,
        "highPayoutCount": 153,
        "observedRate": 0.1226944667201283,
        "posteriorRate": 0.1142463604295128,
        "lift": 1.2261247526838344,
        "averagePayoutYen": 6638.420208500401,
        "medianPayoutYen": 2430
      },
      "robustLift": 1.2190498590562961,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 1204,
        "highPayoutCount": 161,
        "observedRate": 0.13372093023255813,
        "posteriorRate": 0.12383497492799353,
        "lift": 1.2379833736144679,
        "averagePayoutYen": 7131.387043189368,
        "medianPayoutYen": 2380
      },
      "validation": {
        "count": 563,
        "highPayoutCount": 74,
        "observedRate": 0.13143872113676733,
        "posteriorRate": 0.11344157259676282,
        "lift": 1.2174875385206547,
        "averagePayoutYen": 6982.6998223801065,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.2174875385206547,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 41147,
        "highPayoutCount": 5020,
        "observedRate": 0.12200160400515225,
        "posteriorRate": 0.12173786077462442,
        "lift": 1.2169724387946328,
        "averagePayoutYen": 27923.339490120787,
        "medianPayoutYen": 6670
      },
      "validation": {
        "count": 15641,
        "highPayoutCount": 1792,
        "observedRate": 0.11457067962406496,
        "posteriorRate": 0.11369893581026194,
        "lift": 1.3155176563907613,
        "averagePayoutYen": 26132.868103062465,
        "medianPayoutYen": 6760
      },
      "robustLift": 1.2169724387946328,
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
        "count": 21821,
        "highPayoutCount": 2667,
        "observedRate": 0.12222171302873379,
        "posteriorRate": 0.12172515105055225,
        "lift": 1.2165922002764065,
        "averagePayoutYen": 188989.9349250722,
        "medianPayoutYen": 38240
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
      "robustLift": 1.2165922002764065,
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
        "count": 8071,
        "highPayoutCount": 1003,
        "observedRate": 0.12427208524346425,
        "posteriorRate": 0.12291882577314009,
        "lift": 1.2161208999847637,
        "averagePayoutYen": 400.2502787758642,
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
      "robustLift": 1.2161208999847637,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 611,
        "highPayoutCount": 85,
        "observedRate": 0.13911620294599017,
        "posteriorRate": 0.12152883190468788,
        "lift": 1.2148380454940642,
        "averagePayoutYen": 14257.61047463175,
        "medianPayoutYen": 4720
      },
      "validation": {
        "count": 311,
        "highPayoutCount": 47,
        "observedRate": 0.15112540192926044,
        "posteriorRate": 0.1144568272592965,
        "lift": 1.2488609800570343,
        "averagePayoutYen": 16829.581993569132,
        "medianPayoutYen": 5560
      },
      "robustLift": 1.2148380454940642,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 3236,
        "highPayoutCount": 405,
        "observedRate": 0.12515451174289247,
        "posteriorRate": 0.12181603519821377,
        "lift": 1.215614672502912,
        "averagePayoutYen": 2145.4388133498146,
        "medianPayoutYen": 900
      },
      "validation": {
        "count": 1412,
        "highPayoutCount": 169,
        "observedRate": 0.11968838526912182,
        "posteriorRate": 0.11263650150934051,
        "lift": 1.2147766835554923,
        "averagePayoutYen": 2177.096317280453,
        "medianPayoutYen": 980
      },
      "robustLift": 1.2147766835554923,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 17509,
        "highPayoutCount": 2141,
        "observedRate": 0.12227997030098807,
        "posteriorRate": 0.12166720570273346,
        "lift": 1.2141294877477795,
        "averagePayoutYen": 2255.5622822548403,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 4271,
        "highPayoutCount": 510,
        "observedRate": 0.11940997424490751,
        "posteriorRate": 0.1166130771087527,
        "lift": 1.2576637694808397,
        "averagePayoutYen": 2249.20159213299,
        "medianPayoutYen": 980
      },
      "robustLift": 1.2141294877477795,
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
        "count": 2770,
        "highPayoutCount": 347,
        "observedRate": 0.1252707581227437,
        "posteriorRate": 0.12141501425057394,
        "lift": 1.2134925120967992,
        "averagePayoutYen": 181652.79422382673,
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
      "robustLift": 1.2134925120967992,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 11143,
        "highPayoutCount": 1362,
        "observedRate": 0.12222920218971552,
        "posteriorRate": 0.12127601886805661,
        "lift": 1.2123555606287357,
        "averagePayoutYen": 29266.493762900474,
        "medianPayoutYen": 6720
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 504,
        "observedRate": 0.109398741046234,
        "posteriorRate": 0.10714989679135269,
        "lift": 1.239744067127408,
        "averagePayoutYen": 26173.911439114392,
        "medianPayoutYen": 6590
      },
      "robustLift": 1.2123555606287357,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 19100,
        "highPayoutCount": 2329,
        "observedRate": 0.12193717277486911,
        "posteriorRate": 0.12138289323982279,
        "lift": 1.2112923046057795,
        "averagePayoutYen": 2210.0732984293195,
        "medianPayoutYen": 940
      },
      "validation": {
        "count": 7847,
        "highPayoutCount": 898,
        "observedRate": 0.11443863897030712,
        "posteriorRate": 0.1131377729586509,
        "lift": 1.2201828605992975,
        "averagePayoutYen": 2202.441697463999,
        "medianPayoutYen": 880
      },
      "robustLift": 1.2112923046057795,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 2096,
        "highPayoutCount": 265,
        "observedRate": 0.12643129770992367,
        "posteriorRate": 0.12138085805105031,
        "lift": 1.2112719952488948,
        "averagePayoutYen": 2340.7251908396947,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 1028,
        "highPayoutCount": 129,
        "observedRate": 0.1254863813229572,
        "posteriorRate": 0.11476504639126901,
        "lift": 1.2377328892065855,
        "averagePayoutYen": 2449.795719844358,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2112719952488948,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 2843,
        "highPayoutCount": 355,
        "observedRate": 0.12486809708054872,
        "posteriorRate": 0.12115421245770512,
        "lift": 1.2110932390177414,
        "averagePayoutYen": 12860.488920154767,
        "medianPayoutYen": 4490
      },
      "validation": {
        "count": 1249,
        "highPayoutCount": 152,
        "observedRate": 0.12169735788630905,
        "posteriorRate": 0.11310719663081158,
        "lift": 1.234134894512253,
        "averagePayoutYen": 13010.208166533226,
        "medianPayoutYen": 4620
      },
      "robustLift": 1.2110932390177414,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2136,
        "highPayoutCount": 269,
        "observedRate": 0.12593632958801498,
        "posteriorRate": 0.12102302264066131,
        "lift": 1.2098264424571168,
        "averagePayoutYen": 26316.404494382023,
        "medianPayoutYen": 7360
      },
      "validation": {
        "count": 688,
        "highPayoutCount": 90,
        "observedRate": 0.1308139534883721,
        "posteriorRate": 0.11213343679582333,
        "lift": 1.297404544074626,
        "averagePayoutYen": 24494.6511627907,
        "medianPayoutYen": 8580
      },
      "robustLift": 1.2098264424571168,
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
        "count": 12149,
        "highPayoutCount": 1495,
        "observedRate": 0.12305539550580295,
        "posteriorRate": 0.12218651717144309,
        "lift": 1.2088756648455508,
        "averagePayoutYen": 395.5642439706972,
        "medianPayoutYen": 240
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
      "robustLift": 1.2088756648455508,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 29841,
        "highPayoutCount": 3619,
        "observedRate": 0.12127609664555478,
        "posteriorRate": 0.12092603037740297,
        "lift": 1.208856843431714,
        "averagePayoutYen": 27827.390838108644,
        "medianPayoutYen": 6650
      },
      "validation": {
        "count": 10872,
        "highPayoutCount": 1233,
        "observedRate": 0.11341059602649006,
        "posteriorRate": 0.11222428094560657,
        "lift": 1.2984556276416621,
        "averagePayoutYen": 25991.545253863136,
        "medianPayoutYen": 6770
      },
      "robustLift": 1.208856843431714,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 1199,
        "highPayoutCount": 161,
        "observedRate": 0.13427856547122602,
        "posteriorRate": 0.12420160814956341,
        "lift": 1.2415559051038239,
        "averagePayoutYen": 14260.283569641368,
        "medianPayoutYen": 4590
      },
      "validation": {
        "count": 564,
        "highPayoutCount": 72,
        "observedRate": 0.1276595744680851,
        "posteriorRate": 0.1107372997248961,
        "lift": 1.208276482712573,
        "averagePayoutYen": 13231.77304964539,
        "medianPayoutYen": 4580
      },
      "robustLift": 1.208276482712573,
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
        "count": 24507,
        "highPayoutCount": 2970,
        "observedRate": 0.12118986412045538,
        "posteriorRate": 0.12076726902864705,
        "lift": 1.2070185683147514,
        "averagePayoutYen": 181791.1910882605,
        "medianPayoutYen": 38370
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
      "robustLift": 1.2070185683147514,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 6588,
        "highPayoutCount": 809,
        "observedRate": 0.12279902853673345,
        "posteriorRate": 0.12119335951553445,
        "lift": 1.2114845645532122,
        "averagePayoutYen": 13430.50394656952,
        "medianPayoutYen": 4810
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 286,
        "observedRate": 0.1144,
        "posteriorRate": 0.11060816230242981,
        "lift": 1.2068674388674387,
        "averagePayoutYen": 13115.088,
        "medianPayoutYen": 4710
      },
      "robustLift": 1.2068674388674387,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 1125,
        "highPayoutCount": 146,
        "observedRate": 0.12977777777777777,
        "posteriorRate": 0.12062449063218521,
        "lift": 1.2058880291306326,
        "averagePayoutYen": 6757.262222222223,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 82,
        "observedRate": 0.13333333333333333,
        "posteriorRate": 0.11532591181198106,
        "lift": 1.2377108081770862,
        "averagePayoutYen": 6894.715447154472,
        "medianPayoutYen": 2520
      },
      "robustLift": 1.2058880291306326,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 33975,
        "highPayoutCount": 4107,
        "observedRate": 0.12088300220750552,
        "posteriorRate": 0.12058091650759614,
        "lift": 1.2051560524611606,
        "averagePayoutYen": 180067.5378955114,
        "medianPayoutYen": 38290
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
      "robustLift": 1.2051560524611606,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 1081,
        "highPayoutCount": 142,
        "observedRate": 0.13135985198889916,
        "posteriorRate": 0.12145268038000202,
        "lift": 1.2141215863307264,
        "averagePayoutYen": 24987.37280296022,
        "medianPayoutYen": 5690
      },
      "validation": {
        "count": 472,
        "highPayoutCount": 58,
        "observedRate": 0.1228813559322034,
        "posteriorRate": 0.10413016760641781,
        "lift": 1.204805243540444,
        "averagePayoutYen": 22860.741525423728,
        "medianPayoutYen": 6990
      },
      "robustLift": 1.204805243540444,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 2109,
        "highPayoutCount": 275,
        "observedRate": 0.13039355144618303,
        "posteriorRate": 0.12457590350559918,
        "lift": 1.2452974718714582,
        "averagePayoutYen": 13711.640587956377,
        "medianPayoutYen": 4880
      },
      "validation": {
        "count": 803,
        "highPayoutCount": 98,
        "observedRate": 0.12204234122042341,
        "posteriorRate": 0.11037949877765882,
        "lift": 1.204372446122254,
        "averagePayoutYen": 13967.260273972603,
        "medianPayoutYen": 4590
      },
      "robustLift": 1.204372446122254,
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
        "count": 2199,
        "highPayoutCount": 283,
        "observedRate": 0.12869486130059118,
        "posteriorRate": 0.1235780865882118,
        "lift": 1.2226434228831633,
        "averagePayoutYen": 413.7789904502046,
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
      "robustLift": 1.204157473205099,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 10950,
        "highPayoutCount": 1329,
        "observedRate": 0.12136986301369863,
        "posteriorRate": 0.12043797356133633,
        "lift": 1.2040234102477974,
        "averagePayoutYen": 6615.346118721462,
        "medianPayoutYen": 2260
      },
      "validation": {
        "count": 3974,
        "highPayoutCount": 477,
        "observedRate": 0.12003019627579266,
        "posteriorRate": 0.11702914431612849,
        "lift": 1.2559903885948738,
        "averagePayoutYen": 6807.108706592853,
        "medianPayoutYen": 2380
      },
      "robustLift": 1.2040234102477974,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 3250,
        "highPayoutCount": 401,
        "observedRate": 0.12338461538461538,
        "posteriorRate": 0.1202716085989622,
        "lift": 1.2022704705446463,
        "averagePayoutYen": 14386.403076923078,
        "medianPayoutYen": 4220
      },
      "validation": {
        "count": 1401,
        "highPayoutCount": 176,
        "observedRate": 0.1256245538900785,
        "posteriorRate": 0.11668831504854783,
        "lift": 1.2732091827304872,
        "averagePayoutYen": 13733.433261955746,
        "medianPayoutYen": 4410
      },
      "robustLift": 1.2022704705446463,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 33393,
        "highPayoutCount": 4029,
        "observedRate": 0.12065402928757524,
        "posteriorRate": 0.12035242402562554,
        "lift": 1.2010091469385442,
        "averagePayoutYen": 2259.706525319678,
        "medianPayoutYen": 970
      },
      "validation": {
        "count": 13804,
        "highPayoutCount": 1658,
        "observedRate": 0.12011011301072153,
        "posteriorRate": 0.11915275383709865,
        "lift": 1.2850540029488717,
        "averagePayoutYen": 2272.353665604173,
        "medianPayoutYen": 950
      },
      "robustLift": 1.2010091469385442,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 2932,
        "highPayoutCount": 363,
        "observedRate": 0.123806275579809,
        "posteriorRate": 0.12034230689898048,
        "lift": 1.2030670266617014,
        "averagePayoutYen": 6428.366302864939,
        "medianPayoutYen": 2240
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 155,
        "observedRate": 0.11877394636015326,
        "posteriorRate": 0.11168331948496336,
        "lift": 1.1986174611391456,
        "averagePayoutYen": 6476.72030651341,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.1986174611391456,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 2201,
        "highPayoutCount": 300,
        "observedRate": 0.13630168105406634,
        "posteriorRate": 0.12962040262885102,
        "lift": 1.2934952531904176,
        "averagePayoutYen": 2544.7114947751024,
        "medianPayoutYen": 1050
      },
      "validation": {
        "count": 907,
        "highPayoutCount": 110,
        "observedRate": 0.12127894156560089,
        "posteriorRate": 0.11113076822022676,
        "lift": 1.198537456779463,
        "averagePayoutYen": 2205.6670341786107,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.198537456779463,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 3604,
        "highPayoutCount": 442,
        "observedRate": 0.12264150943396226,
        "posteriorRate": 0.1198866465100636,
        "lift": 1.198511770880192,
        "averagePayoutYen": 6486.39012208657,
        "medianPayoutYen": 2320
      },
      "validation": {
        "count": 1702,
        "highPayoutCount": 212,
        "observedRate": 0.1245593419506463,
        "posteriorRate": 0.11743342037709303,
        "lift": 1.2603291953927673,
        "averagePayoutYen": 6670.793184488836,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.198511770880192,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 6070,
        "highPayoutCount": 737,
        "observedRate": 0.1214168039538715,
        "posteriorRate": 0.11978945017972348,
        "lift": 1.1974948335667925,
        "averagePayoutYen": 28563.149917627677,
        "medianPayoutYen": 5970
      },
      "validation": {
        "count": 2671,
        "highPayoutCount": 305,
        "observedRate": 0.1141894421564957,
        "posteriorRate": 0.10981221157787391,
        "lift": 1.2705475402081363,
        "averagePayoutYen": 24576.91875701984,
        "medianPayoutYen": 6220
      },
      "robustLift": 1.1974948335667925,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 4722,
        "highPayoutCount": 591,
        "observedRate": 0.12515883100381195,
        "posteriorRate": 0.12276995547692965,
        "lift": 1.2251339405148634,
        "averagePayoutYen": 2284.0300720033883,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 1677,
        "highPayoutCount": 195,
        "observedRate": 0.11627906976744186,
        "posteriorRate": 0.11086862236373865,
        "lift": 1.195710232301739,
        "averagePayoutYen": 2027.9367918902803,
        "medianPayoutYen": 940
      },
      "robustLift": 1.195710232301739,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 6373,
        "highPayoutCount": 780,
        "observedRate": 0.12239133845912444,
        "posteriorRate": 0.12076483161367427,
        "lift": 1.2072453936216274,
        "averagePayoutYen": 28005.32716146242,
        "medianPayoutYen": 6480
      },
      "validation": {
        "count": 2618,
        "highPayoutCount": 279,
        "observedRate": 0.10656990068754775,
        "posteriorRate": 0.10334012922175695,
        "lift": 1.1956643537261171,
        "averagePayoutYen": 25602.039724980903,
        "medianPayoutYen": 5470
      },
      "robustLift": 1.1956643537261171,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 2924,
        "highPayoutCount": 365,
        "observedRate": 0.12482900136798905,
        "posteriorRate": 0.12120868348309236,
        "lift": 1.2116377474523274,
        "averagePayoutYen": 12940.63611491108,
        "medianPayoutYen": 4340
      },
      "validation": {
        "count": 1306,
        "highPayoutCount": 152,
        "observedRate": 0.11638591117917305,
        "posteriorRate": 0.10953736816571952,
        "lift": 1.1951837931904377,
        "averagePayoutYen": 12803.392036753447,
        "medianPayoutYen": 4520
      },
      "robustLift": 1.1951837931904377,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 3642,
        "highPayoutCount": 445,
        "observedRate": 0.12218561230093355,
        "posteriorRate": 0.11951105680282496,
        "lift": 1.1947569850199573,
        "averagePayoutYen": 6448.39373970346,
        "medianPayoutYen": 2280
      },
      "validation": {
        "count": 1730,
        "highPayoutCount": 215,
        "observedRate": 0.12427745664739884,
        "posteriorRate": 0.11730421151137169,
        "lift": 1.258942488735929,
        "averagePayoutYen": 6619.225433526011,
        "medianPayoutYen": 2490
      },
      "robustLift": 1.1947569850199573,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 79026,
        "highPayoutCount": 9468,
        "observedRate": 0.11980867056411813,
        "posteriorRate": 0.11968544510600969,
        "lift": 1.194353296092505,
        "averagePayoutYen": 2235.7882215979553,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 28641,
        "highPayoutCount": 3300,
        "observedRate": 0.11521944066198805,
        "posteriorRate": 0.11483343024899141,
        "lift": 1.2384704042641344,
        "averagePayoutYen": 2221.8763311336893,
        "medianPayoutYen": 950
      },
      "robustLift": 1.194353296092505,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 3965,
        "highPayoutCount": 484,
        "observedRate": 0.12206809583858765,
        "posteriorRate": 0.11962031522968121,
        "lift": 1.1937033583962537,
        "averagePayoutYen": 2216.083228247163,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 1468,
        "highPayoutCount": 181,
        "observedRate": 0.12329700272479564,
        "posteriorRate": 0.11552895878346496,
        "lift": 1.2459716301998132,
        "averagePayoutYen": 2177.302452316076,
        "medianPayoutYen": 1150
      },
      "robustLift": 1.1937033583962537,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 1616,
        "highPayoutCount": 203,
        "observedRate": 0.12561881188118812,
        "posteriorRate": 0.1196147010872054,
        "lift": 1.1936473342943692,
        "averagePayoutYen": 2236.7945544554455,
        "medianPayoutYen": 1070
      },
      "validation": {
        "count": 632,
        "highPayoutCount": 88,
        "observedRate": 0.13924050632911392,
        "posteriorRate": 0.11869345484616524,
        "lift": 1.2801004958930775,
        "averagePayoutYen": 2351.4398734177216,
        "medianPayoutYen": 1330
      },
      "robustLift": 1.1936473342943692,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 123339,
        "highPayoutCount": 14759,
        "observedRate": 0.11966206958058684,
        "posteriorRate": 0.11958352948183146,
        "lift": 1.193336269656644,
        "averagePayoutYen": 2216.091017439739,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 46877,
        "highPayoutCount": 5526,
        "observedRate": 0.1178829703265994,
        "posteriorRate": 0.11761743020634187,
        "lift": 1.2684956464359924,
        "averagePayoutYen": 2259.286643769866,
        "medianPayoutYen": 970
      },
      "robustLift": 1.193336269656644,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 2113,
        "highPayoutCount": 270,
        "observedRate": 0.12778040700425936,
        "posteriorRate": 0.12250467183334351,
        "lift": 1.222486647906845,
        "averagePayoutYen": 2254.5149077141505,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 877,
        "highPayoutCount": 106,
        "observedRate": 0.12086659064994298,
        "posteriorRate": 0.11064705220469068,
        "lift": 1.1933206138443435,
        "averagePayoutYen": 2336.374002280502,
        "medianPayoutYen": 910
      },
      "robustLift": 1.1933206138443435,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 3599,
        "highPayoutCount": 439,
        "observedRate": 0.12197832731314254,
        "posteriorRate": 0.11930191076997029,
        "lift": 1.192577085058836,
        "averagePayoutYen": 13059.344262295082,
        "medianPayoutYen": 4480
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 207,
        "observedRate": 0.12147887323943662,
        "posteriorRate": 0.1147116546766286,
        "lift": 1.2516414521859167,
        "averagePayoutYen": 13071.420187793427,
        "medianPayoutYen": 4690
      },
      "robustLift": 1.192577085058836,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 2133,
        "highPayoutCount": 264,
        "observedRate": 0.12376933895921238,
        "posteriorRate": 0.11926122190554539,
        "lift": 1.1922593752036623,
        "averagePayoutYen": 6315.696202531645,
        "medianPayoutYen": 2330
      },
      "validation": {
        "count": 690,
        "highPayoutCount": 89,
        "observedRate": 0.1289855072463768,
        "posteriorRate": 0.11393982493307468,
        "lift": 1.222834925696384,
        "averagePayoutYen": 6596.724637681159,
        "medianPayoutYen": 2650
      },
      "robustLift": 1.1922593752036623,
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
        "posteriorRate": 0.11928481081278447,
        "lift": 1.1922020157199218,
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
      "robustLift": 1.1922020157199218,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 1121,
        "highPayoutCount": 144,
        "observedRate": 0.12845673505798394,
        "posteriorRate": 0.1196906429649033,
        "lift": 1.1964629667258582,
        "averagePayoutYen": 13196.672613737734,
        "medianPayoutYen": 4560
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 76,
        "observedRate": 0.12357723577235773,
        "posteriorRate": 0.10925962951326408,
        "lift": 1.192153332063646,
        "averagePayoutYen": 14065.447154471545,
        "medianPayoutYen": 4850
      },
      "robustLift": 1.192153332063646,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 1580,
        "highPayoutCount": 219,
        "observedRate": 0.13860759493670885,
        "posteriorRate": 0.12933494600037654,
        "lift": 1.2929179439652099,
        "averagePayoutYen": 28184.759493670885,
        "medianPayoutYen": 7030
      },
      "validation": {
        "count": 560,
        "highPayoutCount": 66,
        "observedRate": 0.11785714285714285,
        "posteriorRate": 0.10303256878626238,
        "lift": 1.1921058227652335,
        "averagePayoutYen": 22992.303571428572,
        "medianPayoutYen": 6450
      },
      "robustLift": 1.1921058227652335,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 541,
        "highPayoutCount": 75,
        "observedRate": 0.13863216266173753,
        "posteriorRate": 0.12009287961650644,
        "lift": 1.2005281155657879,
        "averagePayoutYen": 28255.17560073937,
        "medianPayoutYen": 7780
      },
      "validation": {
        "count": 211,
        "highPayoutCount": 30,
        "observedRate": 0.14218009478672985,
        "posteriorRate": 0.10297401253648118,
        "lift": 1.1914283161559567,
        "averagePayoutYen": 28423.6018957346,
        "medianPayoutYen": 10180
      },
      "robustLift": 1.1914283161559567,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 4694,
        "highPayoutCount": 569,
        "observedRate": 0.12121857690668938,
        "posteriorRate": 0.11917918515224937,
        "lift": 1.1913942193940894,
        "averagePayoutYen": 28430.3408606732,
        "medianPayoutYen": 7020
      },
      "validation": {
        "count": 2043,
        "highPayoutCount": 222,
        "observedRate": 0.10866372980910426,
        "posteriorRate": 0.10429198698916167,
        "lift": 1.206677523642529,
        "averagePayoutYen": 25569.579050416054,
        "medianPayoutYen": 6600
      },
      "robustLift": 1.1913942193940894,
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
        "count": 4890,
        "highPayoutCount": 620,
        "observedRate": 0.12678936605316973,
        "posteriorRate": 0.12430929435981017,
        "lift": 1.242419636655056,
        "averagePayoutYen": 192006.6646216769,
        "medianPayoutYen": 36390
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
      "betType": "単勝",
      "conditions": [
        "going=不良",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 2120,
      "discovery": {
        "count": 985,
        "highPayoutCount": 127,
        "observedRate": 0.12893401015228426,
        "posteriorRate": 0.11923235433628043,
        "lift": 1.1908933711849379,
        "averagePayoutYen": 1135.9289340101523,
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
      "robustLift": 1.1908933711849379,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 10927,
        "highPayoutCount": 1311,
        "observedRate": 0.11997803605747231,
        "posteriorRate": 0.11910549857758888,
        "lift": 1.190613690857113,
        "averagePayoutYen": 13238.079985357372,
        "medianPayoutYen": 4370
      },
      "validation": {
        "count": 3980,
        "highPayoutCount": 450,
        "observedRate": 0.11306532663316583,
        "posteriorRate": 0.11067510868466282,
        "lift": 1.2075979040264753,
        "averagePayoutYen": 13320.062814070352,
        "medianPayoutYen": 4600
      },
      "robustLift": 1.190613690857113,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 11154,
        "highPayoutCount": 1338,
        "observedRate": 0.11995696611081226,
        "posteriorRate": 0.1191023281487994,
        "lift": 1.1905819983158976,
        "averagePayoutYen": 13617.087143625606,
        "medianPayoutYen": 4160
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 523,
        "observedRate": 0.1135228999348817,
        "posteriorRate": 0.11138133677448395,
        "lift": 1.2153036977787322,
        "averagePayoutYen": 12930.573041024529,
        "medianPayoutYen": 4050
      },
      "robustLift": 1.1905819983158976,
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
        "count": 827,
        "highPayoutCount": 108,
        "observedRate": 0.13059250302297462,
        "posteriorRate": 0.11908598085861097,
        "lift": 1.1902147931176812,
        "averagePayoutYen": 166448.42805320435,
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
      "robustLift": 1.1902147931176812,
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
        "count": 1792,
        "highPayoutCount": 223,
        "observedRate": 0.12444196428571429,
        "posteriorRate": 0.11913614580688327,
        "lift": 1.189932439896209,
        "averagePayoutYen": 1139.8604910714287,
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
      "robustLift": 1.189932439896209,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 89446,
        "highPayoutCount": 10674,
        "observedRate": 0.11933457057889676,
        "posteriorRate": 0.11922825592578354,
        "lift": 1.189790958509541,
        "averagePayoutYen": 2206.0892605594436,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 32583,
        "highPayoutCount": 3811,
        "observedRate": 0.11696283337936961,
        "posteriorRate": 0.11659646921034546,
        "lift": 1.2574846544739136,
        "averagePayoutYen": 2246.1584261731577,
        "medianPayoutYen": 970
      },
      "robustLift": 1.189790958509541,
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
        "count": 902,
        "highPayoutCount": 117,
        "observedRate": 0.12971175166297116,
        "posteriorRate": 0.11913487631909897,
        "lift": 1.1907034828859437,
        "averagePayoutYen": 159211.67405764968,
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
      "betType": "馬単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 3637,
        "highPayoutCount": 442,
        "observedRate": 0.12152873247181743,
        "posteriorRate": 0.11893123815472764,
        "lift": 1.1888717322766031,
        "averagePayoutYen": 12984.297497937861,
        "medianPayoutYen": 4430
      },
      "validation": {
        "count": 1732,
        "highPayoutCount": 207,
        "observedRate": 0.1195150115473441,
        "posteriorRate": 0.11327261958211893,
        "lift": 1.2359398569075988,
        "averagePayoutYen": 12955.098152424942,
        "medianPayoutYen": 4680
      },
      "robustLift": 1.1888717322766031,
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
        "count": 1807,
        "highPayoutCount": 224,
        "observedRate": 0.12396236856668512,
        "posteriorRate": 0.11878070940588503,
        "lift": 1.187163732058006,
        "averagePayoutYen": 161660.04427227448,
        "medianPayoutYen": 42980
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
      "robustLift": 1.187163732058006,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 2138,
        "highPayoutCount": 263,
        "observedRate": 0.12301216089803554,
        "posteriorRate": 0.11865751790982117,
        "lift": 1.186135543981836,
        "averagePayoutYen": 12548.227315247896,
        "medianPayoutYen": 4470
      },
      "validation": {
        "count": 692,
        "highPayoutCount": 94,
        "observedRate": 0.13583815028901733,
        "posteriorRate": 0.11730242190208846,
        "lift": 1.2799098235339845,
        "averagePayoutYen": 12772.182080924855,
        "medianPayoutYen": 5010
      },
      "robustLift": 1.186135543981836,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=不良"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1740,
        "highPayoutCount": 216,
        "observedRate": 0.12413793103448276,
        "posteriorRate": 0.11876209669615034,
        "lift": 1.1869777057742528,
        "averagePayoutYen": 161464.1896551724,
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
      "robustLift": 1.1858864781941705,
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
        "count": 698,
        "highPayoutCount": 99,
        "observedRate": 0.14183381088825214,
        "posteriorRate": 0.12439657479079863,
        "lift": 1.2432919682205616,
        "averagePayoutYen": 214948.85386819486,
        "medianPayoutYen": 42830
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
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 9535,
        "highPayoutCount": 1139,
        "observedRate": 0.11945464079706344,
        "posteriorRate": 0.11848800165414816,
        "lift": 1.1842382399583853,
        "averagePayoutYen": 194892.6586261143,
        "medianPayoutYen": 37580
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
      "robustLift": 1.1842382399583853,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 700,
        "highPayoutCount": 102,
        "observedRate": 0.1457142857142857,
        "posteriorRate": 0.12668057306731934,
        "lift": 1.2663830707445165,
        "averagePayoutYen": 32868.75714285715,
        "medianPayoutYen": 7640
      },
      "validation": {
        "count": 343,
        "highPayoutCount": 43,
        "observedRate": 0.12536443148688048,
        "posteriorRate": 0.10227108293409029,
        "lift": 1.183295291017638,
        "averagePayoutYen": 28516.00583090379,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.183295291017638,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 26381,
        "highPayoutCount": 3130,
        "observedRate": 0.11864599522383533,
        "posteriorRate": 0.11829985983579883,
        "lift": 1.1825602883919424,
        "averagePayoutYen": 13733.214434630985,
        "medianPayoutYen": 4140
      },
      "validation": {
        "count": 9558,
        "highPayoutCount": 1051,
        "observedRate": 0.10996024272860432,
        "posteriorRate": 0.10904995892894108,
        "lift": 1.1898655750316118,
        "averagePayoutYen": 12764.961288972589,
        "medianPayoutYen": 4040
      },
      "robustLift": 1.1825602883919424,
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
        "count": 6303,
        "highPayoutCount": 762,
        "observedRate": 0.12089481199428843,
        "posteriorRate": 0.11943807962686809,
        "lift": 1.181683472606184,
        "averagePayoutYen": 391.35966999841344,
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
      "robustLift": 1.181683472606184,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 41287,
        "highPayoutCount": 4898,
        "observedRate": 0.11863298374791097,
        "posteriorRate": 0.11841253757150612,
        "lift": 1.1816508216344894,
        "averagePayoutYen": 2201.235255649478,
        "medianPayoutYen": 970
      },
      "validation": {
        "count": 14442,
        "highPayoutCount": 1606,
        "observedRate": 0.11120343442736463,
        "posteriorRate": 0.1105849947052509,
        "lift": 1.1926513281123738,
        "averagePayoutYen": 2252.7980889073538,
        "medianPayoutYen": 970
      },
      "robustLift": 1.1816508216344894,
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
        "count": 2783,
        "highPayoutCount": 338,
        "observedRate": 0.12145167085878548,
        "posteriorRate": 0.11820287730410492,
        "lift": 1.180610949268256,
        "averagePayoutYen": 1112.6266618756738,
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
      "robustLift": 1.180610949268256,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 26463,
        "highPayoutCount": 3133,
        "observedRate": 0.1183917167365756,
        "posteriorRate": 0.11805121081768724,
        "lift": 1.180162844239542,
        "averagePayoutYen": 6816.558213354495,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 9543,
        "highPayoutCount": 1076,
        "observedRate": 0.11275280310174997,
        "posteriorRate": 0.11177819293740505,
        "lift": 1.1996356702792355,
        "averagePayoutYen": 6450.436969506444,
        "medianPayoutYen": 2150
      },
      "robustLift": 1.180162844239542,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 13774,
        "highPayoutCount": 1635,
        "observedRate": 0.11870190213445622,
        "posteriorRate": 0.11804796747098104,
        "lift": 1.1800858168016588,
        "averagePayoutYen": 27136.734427181647,
        "medianPayoutYen": 6720
      },
      "validation": {
        "count": 4817,
        "highPayoutCount": 514,
        "observedRate": 0.10670541831015155,
        "posteriorRate": 0.10479866896999025,
        "lift": 1.2125399276061628,
        "averagePayoutYen": 27027.288768943326,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.1800858168016588,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=07",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 11231,
        "highPayoutCount": 1454,
        "observedRate": 0.12946309322411184,
        "posteriorRate": 0.12821623966418266,
        "lift": 1.2794829673722277,
        "averagePayoutYen": 2397.3564241830645,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 5018,
        "highPayoutCount": 557,
        "observedRate": 0.1110003985651654,
        "posteriorRate": 0.10934414477815496,
        "lift": 1.1792688496171349,
        "averagePayoutYen": 2175.4025508170585,
        "medianPayoutYen": 970
      },
      "robustLift": 1.1792688496171349,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 6400,
        "highPayoutCount": 765,
        "observedRate": 0.11953125,
        "posteriorRate": 0.11813111702906183,
        "lift": 1.1788424972625595,
        "averagePayoutYen": 2164.8234375,
        "medianPayoutYen": 1030
      },
      "validation": {
        "count": 2062,
        "highPayoutCount": 258,
        "observedRate": 0.1251212415130941,
        "posteriorRate": 0.11879820097028065,
        "lift": 1.281230175415818,
        "averagePayoutYen": 2202.051406401552,
        "medianPayoutYen": 1110
      },
      "robustLift": 1.1788424972625595,
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
        "posteriorRate": 0.11791718820880019,
        "lift": 1.1785331972500395,
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
      "robustLift": 1.1785331972500395,
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
        "count": 5059,
        "highPayoutCount": 605,
        "observedRate": 0.11958885155169005,
        "posteriorRate": 0.11783182165845958,
        "lift": 1.177679994124699,
        "averagePayoutYen": 176648.39098636093,
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
      "robustLift": 1.177679994124699,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 1461,
        "highPayoutCount": 181,
        "observedRate": 0.12388774811772758,
        "posteriorRate": 0.11780555210646772,
        "lift": 1.1776624719566295,
        "averagePayoutYen": 25385.119780971938,
        "medianPayoutYen": 7190
      },
      "validation": {
        "count": 648,
        "highPayoutCount": 76,
        "observedRate": 0.11728395061728394,
        "posteriorRate": 0.10384540323470219,
        "lift": 1.2015104672416748,
        "averagePayoutYen": 26166.6512345679,
        "medianPayoutYen": 7750
      },
      "robustLift": 1.1776624719566295,
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
        "count": 39470,
        "highPayoutCount": 4707,
        "observedRate": 0.11925513047884469,
        "posteriorRate": 0.11902770216916646,
        "lift": 1.1776233247805397,
        "averagePayoutYen": 390.6713959969597,
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
      "robustLift": 1.1776233247805397,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 2346,
        "highPayoutCount": 291,
        "observedRate": 0.12404092071611253,
        "posteriorRate": 0.11982248674536226,
        "lift": 1.1978703630549679,
        "averagePayoutYen": 6395.110826939472,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 1055,
        "highPayoutCount": 124,
        "observedRate": 0.11753554502369669,
        "posteriorRate": 0.10970314576871953,
        "lift": 1.1773656680932,
        "averagePayoutYen": 6091.563981042654,
        "medianPayoutYen": 2350
      },
      "robustLift": 1.1773656680932,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 11200,
        "highPayoutCount": 1327,
        "observedRate": 0.11848214285714286,
        "posteriorRate": 0.11769357241686332,
        "lift": 1.1765875183330805,
        "averagePayoutYen": 6776.966071428571,
        "medianPayoutYen": 2140
      },
      "validation": {
        "count": 4600,
        "highPayoutCount": 546,
        "observedRate": 0.11869565217391305,
        "posteriorRate": 0.11619380228830566,
        "lift": 1.24702525803474,
        "averagePayoutYen": 6561.210869565218,
        "medianPayoutYen": 2170
      },
      "robustLift": 1.1765875183330805,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "going=重"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 858,
        "highPayoutCount": 110,
        "observedRate": 0.1282051282051282,
        "posteriorRate": 0.11789742820362785,
        "lift": 1.176510492575859,
        "averagePayoutYen": 2354.7086247086245,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 308,
        "highPayoutCount": 44,
        "observedRate": 0.14285714285714285,
        "posteriorRate": 0.1118329095122018,
        "lift": 1.2061100008359926,
        "averagePayoutYen": 2502.8896103896104,
        "medianPayoutYen": 910
      },
      "robustLift": 1.176510492575859,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 3581,
        "highPayoutCount": 431,
        "observedRate": 0.12035744205529182,
        "posteriorRate": 0.11788892612117781,
        "lift": 1.1764256494256424,
        "averagePayoutYen": 2274.3730801452107,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 1685,
        "highPayoutCount": 219,
        "observedRate": 0.12997032640949555,
        "posteriorRate": 0.12144667775096524,
        "lift": 1.3097938097350794,
        "averagePayoutYen": 2396.528189910979,
        "medianPayoutYen": 1070
      },
      "robustLift": 1.1764256494256424,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 2938,
        "highPayoutCount": 355,
        "observedRate": 0.12083049693669162,
        "posteriorRate": 0.1178315030542544,
        "lift": 1.175852618768565,
        "averagePayoutYen": 2144.0231449965963,
        "medianPayoutYen": 1110
      },
      "validation": {
        "count": 1073,
        "highPayoutCount": 126,
        "observedRate": 0.11742777260018639,
        "posteriorRate": 0.10957469223512972,
        "lift": 1.1817552875962365,
        "averagePayoutYen": 2289.2637465051257,
        "medianPayoutYen": 1040
      },
      "robustLift": 1.175852618768565,
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
        "count": 724,
        "highPayoutCount": 94,
        "observedRate": 0.1298342541436464,
        "posteriorRate": 0.11773521357204526,
        "lift": 1.1748168477818026,
        "averagePayoutYen": 2598.756906077348,
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
      "robustLift": 1.1748168477818026,
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
        "count": 616,
        "highPayoutCount": 95,
        "observedRate": 0.15422077922077923,
        "posteriorRate": 0.1299525955191548,
        "lift": 1.298822081959217,
        "averagePayoutYen": 205236.7694805195,
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
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 4721,
        "highPayoutCount": 563,
        "observedRate": 0.11925439525524253,
        "posteriorRate": 0.11741329195121643,
        "lift": 1.1737855429087585,
        "averagePayoutYen": 6447.37131963567,
        "medianPayoutYen": 2240
      },
      "validation": {
        "count": 2037,
        "highPayoutCount": 238,
        "observedRate": 0.11683848797250859,
        "posteriorRate": 0.1121751642374296,
        "lift": 1.2038960802847294,
        "averagePayoutYen": 6363.151693667158,
        "medianPayoutYen": 2190
      },
      "robustLift": 1.1737855429087585,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 16033,
        "highPayoutCount": 1893,
        "observedRate": 0.11806898272313354,
        "posteriorRate": 0.11752886393882095,
        "lift": 1.1728325520869036,
        "averagePayoutYen": 2244.89178569201,
        "medianPayoutYen": 940
      },
      "validation": {
        "count": 6087,
        "highPayoutCount": 723,
        "observedRate": 0.11877772301626417,
        "posteriorRate": 0.11679990752783652,
        "lift": 1.2596787223055517,
        "averagePayoutYen": 2221.3799901429275,
        "medianPayoutYen": 940
      },
      "robustLift": 1.1728325520869036,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 975,
        "highPayoutCount": 123,
        "observedRate": 0.12615384615384614,
        "posteriorRate": 0.11729944927510726,
        "lift": 1.1726031322159562,
        "averagePayoutYen": 25132.605128205127,
        "medianPayoutYen": 6930
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 74,
        "observedRate": 0.13988657844990549,
        "posteriorRate": 0.1139111009848767,
        "lift": 1.3179724465898772,
        "averagePayoutYen": 30496.843100189035,
        "medianPayoutYen": 8860
      },
      "robustLift": 1.1726031322159562,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 4702,
        "highPayoutCount": 560,
        "observedRate": 0.11909825606125053,
        "posteriorRate": 0.1172661538343153,
        "lift": 1.1722270583363568,
        "averagePayoutYen": 12629.125903870694,
        "medianPayoutYen": 4370
      },
      "validation": {
        "count": 2041,
        "highPayoutCount": 230,
        "observedRate": 0.11268985791278785,
        "posteriorRate": 0.10854958162427762,
        "lift": 1.184405859730535,
        "averagePayoutYen": 12530.161685448309,
        "medianPayoutYen": 4060
      },
      "robustLift": 1.1722270583363568,
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
        "count": 1112,
        "highPayoutCount": 139,
        "observedRate": 0.125,
        "posteriorRate": 0.1172624668730625,
        "lift": 1.1719895301151988,
        "averagePayoutYen": 166136.79856115108,
        "medianPayoutYen": 39910
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
      "robustLift": 1.1719895301151988,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 610,
        "highPayoutCount": 80,
        "observedRate": 0.13114754098360656,
        "posteriorRate": 0.11713044799756844,
        "lift": 1.1709579401887094,
        "averagePayoutYen": 7139.934426229508,
        "medianPayoutYen": 2530
      },
      "validation": {
        "count": 311,
        "highPayoutCount": 49,
        "observedRate": 0.15755627009646303,
        "posteriorRate": 0.11786484792892588,
        "lift": 1.264959399788805,
        "averagePayoutYen": 8255.337620578779,
        "medianPayoutYen": 2800
      },
      "robustLift": 1.1709579401887094,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 2338,
        "highPayoutCount": 282,
        "observedRate": 0.12061591103507271,
        "posteriorRate": 0.11699032143978444,
        "lift": 1.1694697563710204,
        "averagePayoutYen": 12982.095808383234,
        "medianPayoutYen": 4420
      },
      "validation": {
        "count": 1056,
        "highPayoutCount": 125,
        "observedRate": 0.11837121212121213,
        "posteriorRate": 0.10978437461908061,
        "lift": 1.197878929241397,
        "averagePayoutYen": 11883.323863636364,
        "medianPayoutYen": 4370
      },
      "robustLift": 1.1694697563710204,
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
        "posteriorRate": 0.11696991654717914,
        "lift": 1.1690656114214344,
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
      "robustLift": 1.1690656114214344,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 5378,
        "highPayoutCount": 644,
        "observedRate": 0.11974711788769059,
        "posteriorRate": 0.11815877095977945,
        "lift": 1.1690263877553286,
        "averagePayoutYen": 402.64410561547044,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 1886,
        "highPayoutCount": 225,
        "observedRate": 0.11930010604453871,
        "posteriorRate": 0.113189720986076,
        "lift": 1.2556914536160206,
        "averagePayoutYen": 374.9893955461294,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1690263877553286,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 6052,
        "highPayoutCount": 716,
        "observedRate": 0.11830799735624586,
        "posteriorRate": 0.11691312534757341,
        "lift": 1.1687853566551791,
        "averagePayoutYen": 6398.106411103768,
        "medianPayoutYen": 2330
      },
      "validation": {
        "count": 2149,
        "highPayoutCount": 264,
        "observedRate": 0.12284783620288506,
        "posteriorRate": 0.1172474109740879,
        "lift": 1.2583328890561882,
        "averagePayoutYen": 6895.579339227547,
        "medianPayoutYen": 2270
      },
      "robustLift": 1.1687853566551791,
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
        "count": 963,
        "highPayoutCount": 121,
        "observedRate": 0.1256490134994808,
        "posteriorRate": 0.11690163814038056,
        "lift": 1.1683831971755572,
        "averagePayoutYen": 161818.41121495326,
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
      "robustLift": 1.1683831971755572,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 3402,
        "highPayoutCount": 406,
        "observedRate": 0.11934156378600823,
        "posteriorRate": 0.11686693933298334,
        "lift": 1.168323633154292,
        "averagePayoutYen": 6532.372134038801,
        "medianPayoutYen": 2310
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 175,
        "observedRate": 0.13049962714392244,
        "posteriorRate": 0.12036305902789728,
        "lift": 1.2917709188110515,
        "averagePayoutYen": 7348.337061894109,
        "medianPayoutYen": 2510
      },
      "robustLift": 1.168323633154292,
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
        "count": 9764,
        "highPayoutCount": 1185,
        "observedRate": 0.12136419500204834,
        "posteriorRate": 0.120375804335696,
        "lift": 1.190961031268699,
        "averagePayoutYen": 395.77632117984433,
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
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 5346,
        "highPayoutCount": 633,
        "observedRate": 0.11840628507295174,
        "posteriorRate": 0.11683665696191872,
        "lift": 1.1677337373539907,
        "averagePayoutYen": 184887.40179573512,
        "medianPayoutYen": 36250
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
      "robustLift": 1.1677337373539907,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=不良"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2179,
        "highPayoutCount": 273,
        "observedRate": 0.1252868288205599,
        "posteriorRate": 0.12057360495736588,
        "lift": 1.205333765071484,
        "averagePayoutYen": 27142.312987608995,
        "medianPayoutYen": 5830
      },
      "validation": {
        "count": 850,
        "highPayoutCount": 93,
        "observedRate": 0.10941176470588235,
        "posteriorRate": 0.10089964660254676,
        "lift": 1.1674275197328476,
        "averagePayoutYen": 21784.882352941175,
        "medianPayoutYen": 5970
      },
      "robustLift": 1.1674275197328476,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=10",
        "going=重"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 1014,
        "highPayoutCount": 127,
        "observedRate": 0.1252465483234714,
        "posteriorRate": 0.11697801023812854,
        "lift": 1.167335526675802,
        "averagePayoutYen": 2275.5522682445758,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 884,
        "highPayoutCount": 106,
        "observedRate": 0.11990950226244344,
        "posteriorRate": 0.11008742116030279,
        "lift": 1.1872850327049573,
        "averagePayoutYen": 2264.920814479638,
        "medianPayoutYen": 1020
      },
      "robustLift": 1.167335526675802,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 16467,
        "highPayoutCount": 1931,
        "observedRate": 0.11726483269569442,
        "posteriorRate": 0.11675703941066677,
        "lift": 1.167180843280089,
        "averagePayoutYen": 27711.58741725876,
        "medianPayoutYen": 6380
      },
      "validation": {
        "count": 6288,
        "highPayoutCount": 698,
        "observedRate": 0.11100508905852417,
        "posteriorRate": 0.10919483248577462,
        "lift": 1.2634043502516494,
        "averagePayoutYen": 25668.91062340967,
        "medianPayoutYen": 6410
      },
      "robustLift": 1.167180843280089,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 1793,
        "highPayoutCount": 219,
        "observedRate": 0.12214166201896264,
        "posteriorRate": 0.117320016257,
        "lift": 1.1728530619301865,
        "averagePayoutYen": 6646.6982710541,
        "medianPayoutYen": 2280
      },
      "validation": {
        "count": 628,
        "highPayoutCount": 76,
        "observedRate": 0.12101910828025478,
        "posteriorRate": 0.10867765219003447,
        "lift": 1.1663597764760238,
        "averagePayoutYen": 6874.490445859873,
        "medianPayoutYen": 2530
      },
      "robustLift": 1.1663597764760238,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 41266,
        "highPayoutCount": 4822,
        "observedRate": 0.11685164542238162,
        "posteriorRate": 0.1166502609126395,
        "lift": 1.1661574900112688,
        "averagePayoutYen": 6650.04458876557,
        "medianPayoutYen": 2170
      },
      "validation": {
        "count": 15627,
        "highPayoutCount": 1822,
        "observedRate": 0.11659307608626096,
        "posteriorRate": 0.11586707953558374,
        "lift": 1.2435187756148953,
        "averagePayoutYen": 6591.846803609138,
        "medianPayoutYen": 2210
      },
      "robustLift": 1.1661574900112688,
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
        "count": 32798,
        "highPayoutCount": 3873,
        "observedRate": 0.11808646868711507,
        "posteriorRate": 0.11783101855071126,
        "lift": 1.1657837066429675,
        "averagePayoutYen": 388.06756509543266,
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
      "robustLift": 1.1657837066429675,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 5349,
        "highPayoutCount": 632,
        "observedRate": 0.11815292578051972,
        "posteriorRate": 0.11660398148072888,
        "lift": 1.1656507746466487,
        "averagePayoutYen": 27925.83847448121,
        "medianPayoutYen": 6290
      },
      "validation": {
        "count": 2031,
        "highPayoutCount": 215,
        "observedRate": 0.10585918266863614,
        "posteriorRate": 0.10202075184252792,
        "lift": 1.180398914120642,
        "averagePayoutYen": 23499.566715903497,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.1656507746466487,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 975,
        "highPayoutCount": 123,
        "observedRate": 0.12615384615384614,
        "posteriorRate": 0.11730069982786999,
        "lift": 1.1725723902763736,
        "averagePayoutYen": 13011.671794871794,
        "medianPayoutYen": 4220
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 64,
        "observedRate": 0.12098298676748583,
        "posteriorRate": 0.10672933615868752,
        "lift": 1.164544803028768,
        "averagePayoutYen": 14935.973534971645,
        "medianPayoutYen": 5080
      },
      "robustLift": 1.164544803028768,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 17627,
        "highPayoutCount": 2083,
        "observedRate": 0.11817098768934022,
        "posteriorRate": 0.11769941279315846,
        "lift": 1.1644816399228242,
        "averagePayoutYen": 387.45504056277304,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 4267,
        "highPayoutCount": 474,
        "observedRate": 0.11108507147879072,
        "posteriorRate": 0.10888833108302443,
        "lift": 1.2079731759060106,
        "averagePayoutYen": 368.5048043121631,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1644816399228242,
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
        "count": 60012,
        "highPayoutCount": 7070,
        "observedRate": 0.11780977137905752,
        "posteriorRate": 0.11767149087291089,
        "lift": 1.1642053890672925,
        "averagePayoutYen": 387.95657535159637,
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
      "robustLift": 1.1642053890672925,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 24620,
      "discovery": {
        "count": 41174,
        "highPayoutCount": 4802,
        "observedRate": 0.11662699761985719,
        "posteriorRate": 0.11642795345409868,
        "lift": 1.163848160130264,
        "averagePayoutYen": 13414.369990770874,
        "medianPayoutYen": 4180
      },
      "validation": {
        "count": 15652,
        "highPayoutCount": 1768,
        "observedRate": 0.11295681063122924,
        "posteriorRate": 0.11229720696553303,
        "lift": 1.2252969377783642,
        "averagePayoutYen": 13074.723358037312,
        "medianPayoutYen": 4160
      },
      "robustLift": 1.163848160130264,
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
        "count": 368,
        "highPayoutCount": 51,
        "observedRate": 0.13858695652173914,
        "posteriorRate": 0.11639066428499628,
        "lift": 1.1632762262526168,
        "averagePayoutYen": 170213.39673913043,
        "medianPayoutYen": 48300
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
      "robustLift": 1.1632762262526168,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 2784,
        "highPayoutCount": 332,
        "observedRate": 0.11925287356321838,
        "posteriorRate": 0.11632606494436692,
        "lift": 1.1629164894882127,
        "averagePayoutYen": 6369.996408045977,
        "medianPayoutYen": 2160
      },
      "validation": {
        "count": 1166,
        "highPayoutCount": 157,
        "observedRate": 0.1346483704974271,
        "posteriorRate": 0.12220191576852274,
        "lift": 1.3115060574871888,
        "averagePayoutYen": 7020.265866209263,
        "medianPayoutYen": 2340
      },
      "robustLift": 1.1629164894882127,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 979,
        "highPayoutCount": 122,
        "observedRate": 0.12461695607763024,
        "posteriorRate": 0.11630479870000066,
        "lift": 1.1627038899624327,
        "averagePayoutYen": 6640.143003064351,
        "medianPayoutYen": 2620
      },
      "validation": {
        "count": 357,
        "highPayoutCount": 47,
        "observedRate": 0.13165266106442577,
        "posteriorRate": 0.10920465772503954,
        "lift": 1.1720157512382987,
        "averagePayoutYen": 7410.756302521008,
        "medianPayoutYen": 2550
      },
      "robustLift": 1.1627038899624327,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 2634,
        "highPayoutCount": 314,
        "observedRate": 0.11921032649962035,
        "posteriorRate": 0.11615082567989253,
        "lift": 1.1611207285575464,
        "averagePayoutYen": 26252.547456340166,
        "medianPayoutYen": 6630
      },
      "validation": {
        "count": 1175,
        "highPayoutCount": 126,
        "observedRate": 0.1072340425531915,
        "posteriorRate": 0.10102359576921678,
        "lift": 1.1688616344506972,
        "averagePayoutYen": 27280.025531914893,
        "medianPayoutYen": 5640
      },
      "robustLift": 1.1611207285575464,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=曇"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 33271,
        "highPayoutCount": 3878,
        "observedRate": 0.11655796339154219,
        "posteriorRate": 0.11631591328360211,
        "lift": 1.160728393458634,
        "averagePayoutYen": 2140.4358149740015,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 13775,
        "highPayoutCount": 1656,
        "observedRate": 0.12021778584392015,
        "posteriorRate": 0.11925471039480624,
        "lift": 1.2861535971956664,
        "averagePayoutYen": 2308.7709618874774,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.160728393458634,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 1507,
        "highPayoutCount": 183,
        "observedRate": 0.12143331121433311,
        "posteriorRate": 0.11610104498121623,
        "lift": 1.1606669555962417,
        "averagePayoutYen": 6402.44193762442,
        "medianPayoutYen": 2290
      },
      "validation": {
        "count": 662,
        "highPayoutCount": 83,
        "observedRate": 0.12537764350453173,
        "posteriorRate": 0.11152185169566169,
        "lift": 1.1968845424493981,
        "averagePayoutYen": 6341.027190332326,
        "medianPayoutYen": 2390
      },
      "robustLift": 1.1606669555962417,
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
        "count": 4053,
        "highPayoutCount": 479,
        "observedRate": 0.11818406118924253,
        "posteriorRate": 0.11620031763438972,
        "lift": 1.1606093729399047,
        "averagePayoutYen": 1145.8795953614606,
        "medianPayoutYen": 590
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
      "robustLift": 1.1606093729399047,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=稍重"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 6266,
        "highPayoutCount": 741,
        "observedRate": 0.11825726141078838,
        "posteriorRate": 0.11691025676578495,
        "lift": 1.168756679324223,
        "averagePayoutYen": 6665.839451005426,
        "medianPayoutYen": 2170
      },
      "validation": {
        "count": 2743,
        "highPayoutCount": 304,
        "observedRate": 0.11082756106452789,
        "posteriorRate": 0.1081061953963487,
        "lift": 1.160226738038797,
        "averagePayoutYen": 6368.7057965730955,
        "medianPayoutYen": 2020
      },
      "robustLift": 1.160226738038797,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 12390,
      "discovery": {
        "count": 3390,
        "highPayoutCount": 436,
        "observedRate": 0.12861356932153392,
        "posteriorRate": 0.12493953657514165,
        "lift": 1.2490257221520817,
        "averagePayoutYen": 6792.510324483776,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 1199,
        "highPayoutCount": 137,
        "observedRate": 0.11426188490408674,
        "posteriorRate": 0.10805673435571446,
        "lift": 1.1596959079450666,
        "averagePayoutYen": 7202.577147623019,
        "medianPayoutYen": 2570
      },
      "robustLift": 1.1596959079450666,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=ダート",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 6182,
        "highPayoutCount": 725,
        "observedRate": 0.117275962471692,
        "posteriorRate": 0.11598573595941084,
        "lift": 1.1594703821618062,
        "averagePayoutYen": 25811.66612746684,
        "medianPayoutYen": 6670
      },
      "validation": {
        "count": 2887,
        "highPayoutCount": 336,
        "observedRate": 0.11638378940076204,
        "posteriorRate": 0.11196177233936762,
        "lift": 1.295418354654005,
        "averagePayoutYen": 25496.30758572913,
        "medianPayoutYen": 7760
      },
      "robustLift": 1.1594703821618062,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 4260,
      "discovery": {
        "count": 18197,
        "highPayoutCount": 2121,
        "observedRate": 0.11655767434192449,
        "posteriorRate": 0.11612048497087911,
        "lift": 1.158778194340907,
        "averagePayoutYen": 2182.461394735396,
        "medianPayoutYen": 900
      },
      "validation": {
        "count": 8006,
        "highPayoutCount": 887,
        "observedRate": 0.11079190607044717,
        "posteriorRate": 0.10972971912601212,
        "lift": 1.1834272416239673,
        "averagePayoutYen": 2190.3959530352236,
        "medianPayoutYen": 910
      },
      "robustLift": 1.158778194340907,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 10179,
        "highPayoutCount": 1200,
        "observedRate": 0.11788977306218686,
        "posteriorRate": 0.1171024679934061,
        "lift": 1.158575652434334,
        "averagePayoutYen": 387.2629924354062,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 4015,
        "highPayoutCount": 477,
        "observedRate": 0.11880448318804483,
        "posteriorRate": 0.11563027115676133,
        "lift": 1.2827661558482812,
        "averagePayoutYen": 394.7098381070984,
        "medianPayoutYen": 230
      },
      "robustLift": 1.158575652434334,
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
        "count": 574,
        "highPayoutCount": 82,
        "observedRate": 0.14285714285714285,
        "posteriorRate": 0.12293025754131914,
        "lift": 1.2286367378638816,
        "averagePayoutYen": 197872.24738675958,
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
      "betType": "3連複",
      "conditions": [
        "venue=04",
        "field=large"
      ],
      "highPayoutThresholdYen": 47280,
      "discovery": {
        "count": 4195,
        "highPayoutCount": 494,
        "observedRate": 0.11775923718712754,
        "posteriorRate": 0.11587149897354275,
        "lift": 1.1583283934459883,
        "averagePayoutYen": 26287.537544696068,
        "medianPayoutYen": 7010
      },
      "validation": {
        "count": 1635,
        "highPayoutCount": 198,
        "observedRate": 0.12110091743119267,
        "posteriorRate": 0.11298104117725438,
        "lift": 1.3072114830882635,
        "averagePayoutYen": 27959.070336391436,
        "medianPayoutYen": 7120
      },
      "robustLift": 1.1583283934459883,
      "usePolicy": "volatility_prior_only"
    }
  ]
};
