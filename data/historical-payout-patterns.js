window.KEIBA_HISTORICAL_PAYOUT_PATTERNS = {
  "status": "research_only",
  "generatedAt": "2026-07-16T14:41:51.798Z",
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
    "totalRows": 993292,
    "discoveryRows": 724102,
    "validationRows": 269190,
    "earliestDate": "1996-01-05",
    "latestDate": "2026-07-05",
    "betTypes": [
      "単勝",
      "枠連",
      "複勝",
      "馬連",
      "ワイド",
      "3連複",
      "馬単",
      "3連単"
    ]
  },
  "thresholds": {
    "単勝": 2130,
    "枠連": 4690,
    "複勝": 690,
    "馬連": 12350,
    "ワイド": 4270,
    "3連複": 47210,
    "馬単": 24590,
    "3連単": 303680
  },
  "baselines": {
    "単勝": {
      "discoveryCount": 62476,
      "validationCount": 22565,
      "discoveryRate": 0.10067866060567258,
      "validationRate": 0.09089297584755152
    },
    "枠連": {
      "discoveryCount": 61183,
      "validationCount": 21360,
      "discoveryRate": 0.10033832927447167,
      "validationRate": 0.09667602996254682
    },
    "複勝": {
      "discoveryCount": 186816,
      "validationCount": 67139,
      "discoveryRate": 0.10074083590270641,
      "validationRate": 0.09014134854555475
    },
    "馬連": {
      "discoveryCount": 62204,
      "validationCount": 22570,
      "discoveryRate": 0.100090026364864,
      "validationRate": 0.09322108994240141
    },
    "ワイド": {
      "discoveryCount": 185809,
      "validationCount": 67697,
      "discoveryRate": 0.10018890365913384,
      "validationRate": 0.09247086281519122
    },
    "3連複": {
      "discoveryCount": 60658,
      "validationCount": 22585,
      "discoveryRate": 0.10001978304592964,
      "validationRate": 0.08647332300199247
    },
    "馬単": {
      "discoveryCount": 60670,
      "validationCount": 22608,
      "discoveryRate": 0.10001648261084556,
      "validationRate": 0.0916932059447983
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
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 2975,
        "highPayoutCount": 484,
        "observedRate": 0.1626890756302521,
        "posteriorRate": 0.15367191122963017,
        "lift": 1.5364151625790188,
        "averagePayoutYen": 34840.92100840336,
        "medianPayoutYen": 9710
      },
      "validation": {
        "count": 1312,
        "highPayoutCount": 211,
        "observedRate": 0.16082317073170732,
        "posteriorRate": 0.14030720833388313,
        "lift": 1.622549052852407,
        "averagePayoutYen": 34062.33993902439,
        "medianPayoutYen": 10740
      },
      "robustLift": 1.5364151625790188,
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
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 4609,
        "highPayoutCount": 720,
        "observedRate": 0.15621609893686267,
        "posteriorRate": 0.1507163616212497,
        "lift": 1.5068655123160977,
        "averagePayoutYen": 31821.855066174874,
        "medianPayoutYen": 9150
      },
      "validation": {
        "count": 1781,
        "highPayoutCount": 276,
        "observedRate": 0.15496911847276812,
        "posteriorRate": 0.13995469596711801,
        "lift": 1.6184725081502103,
        "averagePayoutYen": 29142.223469960696,
        "medianPayoutYen": 9710
      },
      "robustLift": 1.5068655123160977,
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
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 14828,
        "highPayoutCount": 2143,
        "observedRate": 0.1445238737523604,
        "posteriorRate": 0.14307214845530825,
        "lift": 1.4304385002475832,
        "averagePayoutYen": 30888.881845157808,
        "medianPayoutYen": 8910
      },
      "validation": {
        "count": 5192,
        "highPayoutCount": 766,
        "observedRate": 0.1475346687211094,
        "posteriorRate": 0.14217088220326707,
        "lift": 1.6441010622431065,
        "averagePayoutYen": 30657.36710323575,
        "medianPayoutYen": 9480
      },
      "robustLift": 1.4304385002475832,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 3050,
        "highPayoutCount": 456,
        "observedRate": 0.14950819672131146,
        "posteriorRate": 0.14254789103730478,
        "lift": 1.4241967578034864,
        "averagePayoutYen": 7537.354098360655,
        "medianPayoutYen": 2820
      },
      "validation": {
        "count": 1310,
        "highPayoutCount": 194,
        "observedRate": 0.1480916030534351,
        "posteriorRate": 0.13293400274651973,
        "lift": 1.4260078146335315,
        "averagePayoutYen": 7617.9312977099235,
        "medianPayoutYen": 2870
      },
      "robustLift": 1.4241967578034864,
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
        "count": 14157,
        "highPayoutCount": 2003,
        "observedRate": 0.1414847778484142,
        "posteriorRate": 0.14007603546630054,
        "lift": 1.3981192562289342,
        "averagePayoutYen": 2443.875114784206,
        "medianPayoutYen": 1170
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
      "robustLift": 1.3981192562289342,
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
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 2972,
        "highPayoutCount": 436,
        "observedRate": 0.14670255720053835,
        "posteriorRate": 0.13997933217322084,
        "lift": 1.3995626372691674,
        "averagePayoutYen": 15187.35195154778,
        "medianPayoutYen": 5360
      },
      "validation": {
        "count": 1311,
        "highPayoutCount": 184,
        "observedRate": 0.14035087719298245,
        "posteriorRate": 0.12691695360154565,
        "lift": 1.3841478470929784,
        "averagePayoutYen": 14953.23417238749,
        "medianPayoutYen": 5440
      },
      "robustLift": 1.3841478470929784,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 7558,
        "highPayoutCount": 1057,
        "observedRate": 0.1398518126488489,
        "posteriorRate": 0.13738022977450545,
        "lift": 1.373530571561225,
        "averagePayoutYen": 29222.140777983594,
        "medianPayoutYen": 7870
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 334,
        "observedRate": 0.1336,
        "posteriorRate": 0.1257455538336654,
        "lift": 1.4541542925413893,
        "averagePayoutYen": 27495.308,
        "medianPayoutYen": 8340
      },
      "robustLift": 1.373530571561225,
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
        "count": 9138,
        "highPayoutCount": 1261,
        "observedRate": 0.13799518494200044,
        "posteriorRate": 0.13603387132491876,
        "lift": 1.3577738288038155,
        "averagePayoutYen": 2458.977894506457,
        "medianPayoutYen": 1240
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
      "robustLift": 1.3577738288038155,
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
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 22476,
        "highPayoutCount": 2994,
        "observedRate": 0.13320875600640683,
        "posteriorRate": 0.1324865029388477,
        "lift": 1.3246029825720493,
        "averagePayoutYen": 29183.00142374088,
        "medianPayoutYen": 7590
      },
      "validation": {
        "count": 7060,
        "highPayoutCount": 878,
        "observedRate": 0.12436260623229461,
        "posteriorRate": 0.12185670125674553,
        "lift": 1.4091825898021495,
        "averagePayoutYen": 28286.706798866857,
        "medianPayoutYen": 7370
      },
      "robustLift": 1.3246029825720493,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 2418,
        "highPayoutCount": 342,
        "observedRate": 0.141439205955335,
        "posteriorRate": 0.13434197790368912,
        "lift": 1.3431540622518503,
        "averagePayoutYen": 29776.20347394541,
        "medianPayoutYen": 8290
      },
      "validation": {
        "count": 805,
        "highPayoutCount": 106,
        "observedRate": 0.13167701863354037,
        "posteriorRate": 0.11435759501992049,
        "lift": 1.3224609746671299,
        "averagePayoutYen": 28850.63354037267,
        "medianPayoutYen": 7640
      },
      "robustLift": 1.3224609746671299,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 3570,
        "highPayoutCount": 486,
        "observedRate": 0.1361344537815126,
        "posteriorRate": 0.1316977620449545,
        "lift": 1.316717133694223,
        "averagePayoutYen": 28274.680672268907,
        "medianPayoutYen": 6770
      },
      "validation": {
        "count": 1398,
        "highPayoutCount": 179,
        "observedRate": 0.12804005722460657,
        "posteriorRate": 0.1170899164915681,
        "lift": 1.3540582508766337,
        "averagePayoutYen": 28814.334763948496,
        "medianPayoutYen": 7380
      },
      "robustLift": 1.316717133694223,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 15300,
        "highPayoutCount": 2028,
        "observedRate": 0.13254901960784313,
        "posteriorRate": 0.1315218362773691,
        "lift": 1.3140353844840134,
        "averagePayoutYen": 7086.830718954248,
        "medianPayoutYen": 2590
      },
      "validation": {
        "count": 5186,
        "highPayoutCount": 727,
        "observedRate": 0.1401851137678365,
        "posteriorRate": 0.13605531920000014,
        "lift": 1.4594907577680623,
        "averagePayoutYen": 7289.20362514462,
        "medianPayoutYen": 2750
      },
      "robustLift": 1.3140353844840134,
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
        "count": 45746,
        "highPayoutCount": 6037,
        "observedRate": 0.13196782232326323,
        "posteriorRate": 0.13162423673030246,
        "lift": 1.3137606254093668,
        "averagePayoutYen": 2357.890088750929,
        "medianPayoutYen": 1150
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
      "robustLift": 1.3137606254093668,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 22003,
        "highPayoutCount": 2901,
        "observedRate": 0.13184565741035315,
        "posteriorRate": 0.13113851004412588,
        "lift": 1.311125719837908,
        "averagePayoutYen": 29367.074944325774,
        "medianPayoutYen": 7890
      },
      "validation": {
        "count": 6762,
        "highPayoutCount": 878,
        "observedRate": 0.12984324164448388,
        "posteriorRate": 0.12685715526039607,
        "lift": 1.4670091405816925,
        "averagePayoutYen": 28797.326234841763,
        "medianPayoutYen": 8100
      },
      "robustLift": 1.311125719837908,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 4606,
        "highPayoutCount": 619,
        "observedRate": 0.13438992618323925,
        "posteriorRate": 0.1310239407178658,
        "lift": 1.3100234811062819,
        "averagePayoutYen": 14083.484585323491,
        "medianPayoutYen": 5080
      },
      "validation": {
        "count": 1776,
        "highPayoutCount": 235,
        "observedRate": 0.13231981981981983,
        "posteriorRate": 0.12339481677170436,
        "lift": 1.3457356572960406,
        "averagePayoutYen": 14495.033783783783,
        "medianPayoutYen": 5220
      },
      "robustLift": 1.3100234811062819,
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
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 14833,
        "highPayoutCount": 1953,
        "observedRate": 0.1316658801321378,
        "posteriorRate": 0.1306338121245303,
        "lift": 1.3061228381007337,
        "averagePayoutYen": 14096.134969325154,
        "medianPayoutYen": 5000
      },
      "validation": {
        "count": 5196,
        "highPayoutCount": 704,
        "observedRate": 0.1354888375673595,
        "posteriorRate": 0.1316444176566712,
        "lift": 1.4357052553700063,
        "averagePayoutYen": 14442.167051578137,
        "medianPayoutYen": 5210
      },
      "robustLift": 1.3061228381007337,
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
        "count": 23370,
        "highPayoutCount": 3069,
        "observedRate": 0.1313222079589217,
        "posteriorRate": 0.13067006501171205,
        "lift": 1.304236898891341,
        "averagePayoutYen": 2335.2434745400087,
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
      "robustLift": 1.304236898891341,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 4736,
        "highPayoutCount": 632,
        "observedRate": 0.13344594594594594,
        "posteriorRate": 0.13026069770481896,
        "lift": 1.3014353421186249,
        "averagePayoutYen": 7145.523648648648,
        "medianPayoutYen": 2640
      },
      "validation": {
        "count": 1771,
        "highPayoutCount": 247,
        "observedRate": 0.13946922642574816,
        "posteriorRate": 0.1292868978296789,
        "lift": 1.3868846406919453,
        "averagePayoutYen": 7359.288537549407,
        "medianPayoutYen": 2790
      },
      "robustLift": 1.3014353421186249,
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
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 696,
        "highPayoutCount": 105,
        "observedRate": 0.15086206896551724,
        "posteriorRate": 0.12960693271150905,
        "lift": 1.295812975838918,
        "averagePayoutYen": 30340.258620689656,
        "medianPayoutYen": 8640
      },
      "validation": {
        "count": 315,
        "highPayoutCount": 59,
        "observedRate": 0.1873015873015873,
        "posteriorRate": 0.12544375644294017,
        "lift": 1.4506642290137246,
        "averagePayoutYen": 34665.90476190476,
        "medianPayoutYen": 11490
      },
      "robustLift": 1.295812975838918,
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
        "count": 7466,
        "highPayoutCount": 982,
        "observedRate": 0.1315296008572194,
        "posteriorRate": 0.12956244687792706,
        "lift": 1.2931816014149522,
        "averagePayoutYen": 2376.225555853201,
        "medianPayoutYen": 1070
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
      "robustLift": 1.2931816014149522,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 12511,
        "highPayoutCount": 1631,
        "observedRate": 0.1303652785548717,
        "posteriorRate": 0.12919913085258358,
        "lift": 1.2917357638463847,
        "averagePayoutYen": 27916.37998561266,
        "medianPayoutYen": 7070
      },
      "validation": {
        "count": 3985,
        "highPayoutCount": 526,
        "observedRate": 0.13199498117942285,
        "posteriorRate": 0.12692010289877284,
        "lift": 1.4677370834453582,
        "averagePayoutYen": 27837.124215809286,
        "medianPayoutYen": 7730
      },
      "robustLift": 1.2917357638463847,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 1549,
        "highPayoutCount": 213,
        "observedRate": 0.13750806972240154,
        "posteriorRate": 0.12836012275400918,
        "lift": 1.2833473423459187,
        "averagePayoutYen": 27951.4590058102,
        "medianPayoutYen": 8160
      },
      "validation": {
        "count": 490,
        "highPayoutCount": 73,
        "observedRate": 0.1489795918367347,
        "posteriorRate": 0.1174107691929255,
        "lift": 1.3577686749729763,
        "averagePayoutYen": 24709.755102040817,
        "medianPayoutYen": 8880
      },
      "robustLift": 1.2833473423459187,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 2054,
        "highPayoutCount": 283,
        "observedRate": 0.13777994157740994,
        "posteriorRate": 0.13038758477798154,
        "lift": 1.303617952441537,
        "averagePayoutYen": 30421.197663096398,
        "medianPayoutYen": 7250
      },
      "validation": {
        "count": 630,
        "highPayoutCount": 82,
        "observedRate": 0.13015873015873017,
        "posteriorRate": 0.11082890398318251,
        "lift": 1.2816542736611252,
        "averagePayoutYen": 25161.777777777777,
        "medianPayoutYen": 7500
      },
      "robustLift": 1.2816542736611252,
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
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 7021,
        "highPayoutCount": 912,
        "observedRate": 0.129896026207093,
        "posteriorRate": 0.12790983799002326,
        "lift": 1.2788453853302837,
        "averagePayoutYen": 27074.58196838057,
        "medianPayoutYen": 7050
      },
      "validation": {
        "count": 2155,
        "highPayoutCount": 280,
        "observedRate": 0.12993039443155452,
        "posteriorRate": 0.12174638851261628,
        "lift": 1.407906904535299,
        "averagePayoutYen": 29020.032482598606,
        "medianPayoutYen": 6950
      },
      "robustLift": 1.2788453853302837,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 3914,
        "highPayoutCount": 514,
        "observedRate": 0.1313234542667348,
        "posteriorRate": 0.12777750147778996,
        "lift": 1.2775222819580985,
        "averagePayoutYen": 26855.477772100152,
        "medianPayoutYen": 7520
      },
      "validation": {
        "count": 1198,
        "highPayoutCount": 150,
        "observedRate": 0.12520868113522537,
        "posteriorRate": 0.11380250971790119,
        "lift": 1.3160418238498712,
        "averagePayoutYen": 27102.9632721202,
        "medianPayoutYen": 7270
      },
      "robustLift": 1.2775222819580985,
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
        "count": 10826,
        "highPayoutCount": 1399,
        "observedRate": 0.12922593755773137,
        "posteriorRate": 0.1279440624959886,
        "lift": 1.2770282718262327,
        "averagePayoutYen": 2281.9536301496396,
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
      "robustLift": 1.2770282718262327,
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
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 3821,
        "highPayoutCount": 501,
        "observedRate": 0.1311175085056268,
        "posteriorRate": 0.12751906769797844,
        "lift": 1.274938455319594,
        "averagePayoutYen": 27262.138183721538,
        "medianPayoutYen": 7380
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 185,
        "observedRate": 0.13795674869500374,
        "posteriorRate": 0.12397428652960144,
        "lift": 1.4336708967081662,
        "averagePayoutYen": 32706.935123042505,
        "medianPayoutYen": 8280
      },
      "robustLift": 1.274938455319594,
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
        "count": 1568,
        "highPayoutCount": 214,
        "observedRate": 0.1364795918367347,
        "posteriorRate": 0.1277052474997906,
        "lift": 1.2746446246609686,
        "averagePayoutYen": 2418.7755102040815,
        "medianPayoutYen": 1070
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
      "robustLift": 1.2746446246609686,
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
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 3194,
        "highPayoutCount": 417,
        "observedRate": 0.13055729492798998,
        "posteriorRate": 0.12642390133269216,
        "lift": 1.2639889578108523,
        "averagePayoutYen": 28697.798998121478,
        "medianPayoutYen": 6890
      },
      "validation": {
        "count": 1245,
        "highPayoutCount": 161,
        "observedRate": 0.12931726907630522,
        "posteriorRate": 0.11704106676274856,
        "lift": 1.3534933399061322,
        "averagePayoutYen": 28269.26907630522,
        "medianPayoutYen": 7580
      },
      "robustLift": 1.2639889578108523,
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
        "count": 69197,
        "highPayoutCount": 8775,
        "observedRate": 0.12681185600531816,
        "posteriorRate": 0.1266208653432654,
        "lift": 1.2638212488486678,
        "averagePayoutYen": 2289.6056187406966,
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
      "robustLift": 1.2638212488486678,
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
        "count": 9678,
        "highPayoutCount": 1242,
        "observedRate": 0.12833230006199628,
        "posteriorRate": 0.12697685379753912,
        "lift": 1.2604308139766773,
        "averagePayoutYen": 385.0733622649308,
        "medianPayoutYen": 210
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
      "robustLift": 1.2604308139766773,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 3094,
        "highPayoutCount": 403,
        "observedRate": 0.13025210084033614,
        "posteriorRate": 0.12604615790844875,
        "lift": 1.2602122707121617,
        "averagePayoutYen": 27671.1861667744,
        "medianPayoutYen": 6750
      },
      "validation": {
        "count": 1170,
        "highPayoutCount": 139,
        "observedRate": 0.1188034188034188,
        "posteriorRate": 0.10912374940179415,
        "lift": 1.261935422549678,
        "averagePayoutYen": 26194.846153846152,
        "medianPayoutYen": 7260
      },
      "robustLift": 1.2602122707121617,
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
        "count": 9606,
        "highPayoutCount": 1224,
        "observedRate": 0.127420362273579,
        "posteriorRate": 0.1260730706342338,
        "lift": 1.258353630289877,
        "averagePayoutYen": 2205.4809494066208,
        "medianPayoutYen": 970
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
      "robustLift": 1.258353630289877,
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
        "count": 6346,
        "highPayoutCount": 813,
        "observedRate": 0.12811219665931295,
        "posteriorRate": 0.12607280920677283,
        "lift": 1.2583510209444162,
        "averagePayoutYen": 2355.6586826347307,
        "medianPayoutYen": 1010
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
      "robustLift": 1.2583510209444162,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 505,
        "highPayoutCount": 85,
        "observedRate": 0.16831683168316833,
        "posteriorRate": 0.13433820052036302,
        "lift": 1.3431162958899259,
        "averagePayoutYen": 31393.445544554455,
        "medianPayoutYen": 8090
      },
      "validation": {
        "count": 164,
        "highPayoutCount": 29,
        "observedRate": 0.17682926829268292,
        "posteriorRate": 0.10879015286294613,
        "lift": 1.2580776254017607,
        "averagePayoutYen": 39548.04878048781,
        "medianPayoutYen": 7770
      },
      "robustLift": 1.2580776254017607,
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
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 1241,
        "highPayoutCount": 169,
        "observedRate": 0.1361804995970991,
        "posteriorRate": 0.12579545750888274,
        "lift": 1.2577057625801564,
        "averagePayoutYen": 27429.129734085414,
        "medianPayoutYen": 7620
      },
      "validation": {
        "count": 617,
        "highPayoutCount": 80,
        "observedRate": 0.12965964343598055,
        "posteriorRate": 0.11032825559623656,
        "lift": 1.2758646454895048,
        "averagePayoutYen": 28062.090761750405,
        "medianPayoutYen": 7710
      },
      "robustLift": 1.2577057625801564,
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
        "count": 38787,
        "highPayoutCount": 4889,
        "observedRate": 0.12604738701111198,
        "posteriorRate": 0.12571828981163152,
        "lift": 1.2548125113670736,
        "averagePayoutYen": 2271.802923659989,
        "medianPayoutYen": 990
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
      "robustLift": 1.2548125113670736,
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
        "count": 68097,
        "highPayoutCount": 8555,
        "observedRate": 0.12562961657635432,
        "posteriorRate": 0.1254441805301918,
        "lift": 1.2520765868142678,
        "averagePayoutYen": 2294.6220832048402,
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
      "robustLift": 1.2520765868142678,
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
        "count": 11731,
        "highPayoutCount": 1478,
        "observedRate": 0.1259909641121814,
        "posteriorRate": 0.12493618280022623,
        "lift": 1.2470061876841017,
        "averagePayoutYen": 2230.7015599693123,
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
      "robustLift": 1.2470061876841017,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 2493,
        "highPayoutCount": 323,
        "observedRate": 0.12956277577216205,
        "posteriorRate": 0.12463916243983696,
        "lift": 1.2452705525871535,
        "averagePayoutYen": 7088.812675491376,
        "medianPayoutYen": 2460
      },
      "validation": {
        "count": 801,
        "highPayoutCount": 106,
        "observedRate": 0.132334581772784,
        "posteriorRate": 0.11730249421306742,
        "lift": 1.2583257102608991,
        "averagePayoutYen": 7052.259675405743,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.2452705525871535,
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
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 7821,
        "highPayoutCount": 983,
        "observedRate": 0.12568725226953076,
        "posteriorRate": 0.12414914231251437,
        "lift": 1.2403747588190883,
        "averagePayoutYen": 6797.451732515024,
        "medianPayoutYen": 2450
      },
      "validation": {
        "count": 2495,
        "highPayoutCount": 305,
        "observedRate": 0.12224448897795591,
        "posteriorRate": 0.11739918029088506,
        "lift": 1.259362879831405,
        "averagePayoutYen": 6760.112224448898,
        "medianPayoutYen": 2470
      },
      "robustLift": 1.2403747588190883,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 6519,
        "highPayoutCount": 834,
        "observedRate": 0.12793373216751036,
        "posteriorRate": 0.1259452758972738,
        "lift": 1.259203650136284,
        "averagePayoutYen": 28827.169811320753,
        "medianPayoutYen": 6460
      },
      "validation": {
        "count": 1425,
        "highPayoutCount": 163,
        "observedRate": 0.1143859649122807,
        "posteriorRate": 0.10713592805246558,
        "lift": 1.238947739408569,
        "averagePayoutYen": 25700.63859649123,
        "medianPayoutYen": 7000
      },
      "robustLift": 1.238947739408569,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 4029,
        "highPayoutCount": 511,
        "observedRate": 0.12683047902705386,
        "posteriorRate": 0.12387058766239012,
        "lift": 1.2384608713409033,
        "averagePayoutYen": 28029.659965251925,
        "medianPayoutYen": 6990
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 220,
        "observedRate": 0.12910798122065728,
        "posteriorRate": 0.11943587182440844,
        "lift": 1.3811874885582514,
        "averagePayoutYen": 28374.771126760563,
        "medianPayoutYen": 8150
      },
      "robustLift": 1.2384608713409033,
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
        "count": 21292,
        "highPayoutCount": 2648,
        "observedRate": 0.12436595904565095,
        "posteriorRate": 0.12381123585855208,
        "lift": 1.2357779288591375,
        "averagePayoutYen": 2227.419218485816,
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
      "robustLift": 1.2357779288591375,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 22009,
        "highPayoutCount": 2728,
        "observedRate": 0.12394929347085283,
        "posteriorRate": 0.12341766588055546,
        "lift": 1.233973267793886,
        "averagePayoutYen": 13766.8262983325,
        "medianPayoutYen": 4730
      },
      "validation": {
        "count": 6776,
        "highPayoutCount": 847,
        "observedRate": 0.125,
        "posteriorRate": 0.12271118787416152,
        "lift": 1.3382800460487427,
        "averagePayoutYen": 13701.15997638725,
        "medianPayoutYen": 4810
      },
      "robustLift": 1.233973267793886,
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
        "count": 1895,
        "highPayoutCount": 246,
        "observedRate": 0.12981530343007916,
        "posteriorRate": 0.1236302512858317,
        "lift": 1.2339714955505534,
        "averagePayoutYen": 2288.833773087071,
        "medianPayoutYen": 1090
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
      "robustLift": 1.2339714955505534,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 1316,
        "highPayoutCount": 181,
        "observedRate": 0.13753799392097266,
        "posteriorRate": 0.12720809004568548,
        "lift": 1.2718292938834992,
        "averagePayoutYen": 32718.647416413372,
        "medianPayoutYen": 6990
      },
      "validation": {
        "count": 562,
        "highPayoutCount": 70,
        "observedRate": 0.12455516014234876,
        "posteriorRate": 0.10662585828719043,
        "lift": 1.2330491599673303,
        "averagePayoutYen": 29295.195729537365,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.2330491599673303,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 4074,
        "highPayoutCount": 514,
        "observedRate": 0.12616593028964163,
        "posteriorRate": 0.12330780313138716,
        "lift": 1.2328341391698834,
        "averagePayoutYen": 27913.676975945018,
        "medianPayoutYen": 6890
      },
      "validation": {
        "count": 1731,
        "highPayoutCount": 224,
        "observedRate": 0.1294049682264587,
        "posteriorRate": 0.11978335342940215,
        "lift": 1.3852058562227587,
        "averagePayoutYen": 28159.39919121895,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.2328341391698834,
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
        "count": 2108,
        "highPayoutCount": 272,
        "observedRate": 0.12903225806451613,
        "posteriorRate": 0.12350247386103026,
        "lift": 1.232696130513761,
        "averagePayoutYen": 2341.0199240986717,
        "medianPayoutYen": 1140
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
      "robustLift": 1.232696130513761,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 22474,
        "highPayoutCount": 2778,
        "observedRate": 0.1236095043160986,
        "posteriorRate": 0.1230960320930366,
        "lift": 1.2307574599677868,
        "averagePayoutYen": 13649.329892320015,
        "medianPayoutYen": 4550
      },
      "validation": {
        "count": 7066,
        "highPayoutCount": 877,
        "observedRate": 0.12411548259269742,
        "posteriorRate": 0.12197285262653967,
        "lift": 1.3302278109892953,
        "averagePayoutYen": 14042.431361449193,
        "medianPayoutYen": 4470
      },
      "robustLift": 1.2307574599677868,
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
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 3898,
        "highPayoutCount": 494,
        "observedRate": 0.1267316572601334,
        "posteriorRate": 0.12369446141551223,
        "lift": 1.2367407669873314,
        "averagePayoutYen": 13882.896357106209,
        "medianPayoutYen": 4530
      },
      "validation": {
        "count": 1202,
        "highPayoutCount": 146,
        "observedRate": 0.12146422628951747,
        "posteriorRate": 0.1127183331212686,
        "lift": 1.2292986373399135,
        "averagePayoutYen": 14502.212978369384,
        "medianPayoutYen": 4800
      },
      "robustLift": 1.2292986373399135,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 3269,
        "highPayoutCount": 413,
        "observedRate": 0.12633832976445397,
        "posteriorRate": 0.12284688021304453,
        "lift": 1.2282258216520283,
        "averagePayoutYen": 28050.917711838483,
        "medianPayoutYen": 6670
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 170,
        "observedRate": 0.13026819923371646,
        "posteriorRate": 0.11813665457118905,
        "lift": 1.3661630022991833,
        "averagePayoutYen": 27229.946360153255,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.2282258216520283,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 2505,
        "highPayoutCount": 319,
        "observedRate": 0.12734530938123753,
        "posteriorRate": 0.12279863278634437,
        "lift": 1.2277434428142537,
        "averagePayoutYen": 26119.35728542914,
        "medianPayoutYen": 7410
      },
      "validation": {
        "count": 688,
        "highPayoutCount": 90,
        "observedRate": 0.1308139534883721,
        "posteriorRate": 0.11215207197053555,
        "lift": 1.2969557324396035,
        "averagePayoutYen": 24494.6511627907,
        "medianPayoutYen": 8580
      },
      "robustLift": 1.2277434428142537,
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
        "count": 11721,
        "highPayoutCount": 1452,
        "observedRate": 0.12388021499872025,
        "posteriorRate": 0.12291092806067973,
        "lift": 1.2267918259576085,
        "averagePayoutYen": 2256.9848988994113,
        "medianPayoutYen": 1020
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
      "robustLift": 1.2267918259576085,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 2475,
        "highPayoutCount": 315,
        "observedRate": 0.12727272727272726,
        "posteriorRate": 0.12269240051192096,
        "lift": 1.2266813301882482,
        "averagePayoutYen": 25449.753535353535,
        "medianPayoutYen": 7310
      },
      "validation": {
        "count": 909,
        "highPayoutCount": 110,
        "observedRate": 0.12101210121012101,
        "posteriorRate": 0.10875561497586674,
        "lift": 1.2576782202918333,
        "averagePayoutYen": 25466.105610561055,
        "medianPayoutYen": 7470
      },
      "robustLift": 1.2266813301882482,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 23115,
        "highPayoutCount": 2847,
        "observedRate": 0.12316677482154445,
        "posteriorRate": 0.122678171212468,
        "lift": 1.2256782785255957,
        "averagePayoutYen": 6742.508760545101,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 7053,
        "highPayoutCount": 892,
        "observedRate": 0.1264710052459946,
        "posteriorRate": 0.12426989871192913,
        "lift": 1.3330663564297722,
        "averagePayoutYen": 7052.044520062384,
        "medianPayoutYen": 2370
      },
      "robustLift": 1.2256782785255957,
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
        "count": 5408,
        "highPayoutCount": 675,
        "observedRate": 0.12481508875739646,
        "posteriorRate": 0.12273094986959493,
        "lift": 1.2249954374903076,
        "averagePayoutYen": 2239.0625,
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
      "robustLift": 1.2249954374903076,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 22778,
        "highPayoutCount": 2804,
        "observedRate": 0.12310123803670209,
        "posteriorRate": 0.12260696851887756,
        "lift": 1.224966892025098,
        "averagePayoutYen": 6864.488980595312,
        "medianPayoutYen": 2420
      },
      "validation": {
        "count": 6761,
        "highPayoutCount": 856,
        "observedRate": 0.12660848986836268,
        "posteriorRate": 0.12430939883916826,
        "lift": 1.3334900816540056,
        "averagePayoutYen": 6929.587339151013,
        "medianPayoutYen": 2540
      },
      "robustLift": 1.224966892025098,
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
        "count": 4636,
        "highPayoutCount": 580,
        "observedRate": 0.12510785159620363,
        "posteriorRate": 0.12268194155560103,
        "lift": 1.2245062783898084,
        "averagePayoutYen": 2229.3226919758413,
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
      "robustLift": 1.2245062783898084,
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
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 3263,
        "highPayoutCount": 410,
        "observedRate": 0.1256512411890898,
        "posteriorRate": 0.12225485335701089,
        "lift": 1.2214489075199977,
        "averagePayoutYen": 6204.79619981612,
        "medianPayoutYen": 2290
      },
      "validation": {
        "count": 1247,
        "highPayoutCount": 153,
        "observedRate": 0.1226944667201283,
        "posteriorRate": 0.11425904119702388,
        "lift": 1.2256780227266297,
        "averagePayoutYen": 6638.420208500401,
        "medianPayoutYen": 2430
      },
      "robustLift": 1.2214489075199977,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 29194,
        "highPayoutCount": 3577,
        "observedRate": 0.12252517640611084,
        "posteriorRate": 0.12214622117340085,
        "lift": 1.2212206170984257,
        "averagePayoutYen": 28631.411591422897,
        "medianPayoutYen": 6600
      },
      "validation": {
        "count": 9557,
        "highPayoutCount": 1049,
        "observedRate": 0.10976247776498901,
        "posteriorRate": 0.10860461981714191,
        "lift": 1.255932073000589,
        "averagePayoutYen": 25387.523281364443,
        "medianPayoutYen": 6550
      },
      "robustLift": 1.2212206170984257,
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
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 1352,
        "highPayoutCount": 177,
        "observedRate": 0.1309171597633136,
        "posteriorRate": 0.12259449955854859,
        "lift": 1.2248423145743585,
        "averagePayoutYen": 6864.2307692307695,
        "medianPayoutYen": 2360
      },
      "validation": {
        "count": 563,
        "highPayoutCount": 74,
        "observedRate": 0.13143872113676733,
        "posteriorRate": 0.11346241295503359,
        "lift": 1.2171324431535686,
        "averagePayoutYen": 6982.6998223801065,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.2171324431535686,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 46136,
        "highPayoutCount": 5627,
        "observedRate": 0.12196549332408531,
        "posteriorRate": 0.12173020609664131,
        "lift": 1.2170612891725843,
        "averagePayoutYen": 27773.16607421536,
        "medianPayoutYen": 6690
      },
      "validation": {
        "count": 15641,
        "highPayoutCount": 1793,
        "observedRate": 0.11463461415510517,
        "posteriorRate": 0.11376226141509177,
        "lift": 1.3155763820070905,
        "averagePayoutYen": 26132.868103062465,
        "medianPayoutYen": 6760
      },
      "robustLift": 1.2170612891725843,
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
      "betType": "ワイド",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 20174,
        "highPayoutCount": 2467,
        "observedRate": 0.12228611083572916,
        "posteriorRate": 0.1217516906176631,
        "lift": 1.215221308658002,
        "averagePayoutYen": 2250.2220680083274,
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
      "robustLift": 1.215221308658002,
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
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 33565,
        "highPayoutCount": 4081,
        "observedRate": 0.12158498435870699,
        "posteriorRate": 0.12126845417651444,
        "lift": 1.2124446832765803,
        "averagePayoutYen": 27629.429465216745,
        "medianPayoutYen": 6670
      },
      "validation": {
        "count": 10872,
        "highPayoutCount": 1234,
        "observedRate": 0.11350257542310523,
        "posteriorRate": 0.11231416298812841,
        "lift": 1.298830195128971,
        "averagePayoutYen": 25991.545253863136,
        "medianPayoutYen": 6770
      },
      "robustLift": 1.2124446832765803,
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
        "count": 14191,
        "highPayoutCount": 1744,
        "observedRate": 0.1228947924741033,
        "posteriorRate": 0.122140794905136,
        "lift": 1.2124258629648186,
        "averagePayoutYen": 394.403495172997,
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
      "robustLift": 1.2124258629648186,
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
        "count": 9140,
        "highPayoutCount": 1127,
        "observedRate": 0.12330415754923414,
        "posteriorRate": 0.1221338607833354,
        "lift": 1.2123570316737293,
        "averagePayoutYen": 397.19365426695845,
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
      "robustLift": 1.2123570316737293,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 3619,
        "highPayoutCount": 449,
        "observedRate": 0.12406742193976236,
        "posteriorRate": 0.12115683738345036,
        "lift": 1.2104786239319218,
        "averagePayoutYen": 6844.819010776458,
        "medianPayoutYen": 2140
      },
      "validation": {
        "count": 1399,
        "highPayoutCount": 185,
        "observedRate": 0.1322373123659757,
        "posteriorRate": 0.12196447865782029,
        "lift": 1.3083356859824162,
        "averagePayoutYen": 6875.039313795568,
        "medianPayoutYen": 2340
      },
      "robustLift": 1.2104786239319218,
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
        "count": 3724,
        "highPayoutCount": 462,
        "observedRate": 0.12406015037593984,
        "posteriorRate": 0.12123448196722701,
        "lift": 1.2100589739927206,
        "averagePayoutYen": 2117.3711063372716,
        "medianPayoutYen": 900
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
      "robustLift": 1.2100589739927206,
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
        "count": 7459,
        "highPayoutCount": 919,
        "observedRate": 0.12320686419091031,
        "posteriorRate": 0.12179550420295931,
        "lift": 1.208998348202978,
        "averagePayoutYen": 395.2594181525674,
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
      "robustLift": 1.208998348202978,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 1318,
        "highPayoutCount": 172,
        "observedRate": 0.13050075872534142,
        "posteriorRate": 0.12211674439242177,
        "lift": 1.2209661968174406,
        "averagePayoutYen": 13721.60091047041,
        "medianPayoutYen": 4520
      },
      "validation": {
        "count": 564,
        "highPayoutCount": 72,
        "observedRate": 0.1276595744680851,
        "posteriorRate": 0.11075808550037515,
        "lift": 1.2079203072805025,
        "averagePayoutYen": 13231.77304964539,
        "medianPayoutYen": 4580
      },
      "robustLift": 1.2079203072805025,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 1263,
        "highPayoutCount": 163,
        "observedRate": 0.1290577988915281,
        "posteriorRate": 0.12084232171436869,
        "lift": 1.2073362961645664,
        "averagePayoutYen": 6702.414885193983,
        "medianPayoutYen": 2380
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 82,
        "observedRate": 0.13333333333333333,
        "posteriorRate": 0.11534578024322933,
        "lift": 1.2373356749475695,
        "averagePayoutYen": 6894.715447154472,
        "medianPayoutYen": 2520
      },
      "robustLift": 1.2073362961645664,
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
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 7558,
        "highPayoutCount": 938,
        "observedRate": 0.12410690658904472,
        "posteriorRate": 0.12261209249260645,
        "lift": 1.2259188614908427,
        "averagePayoutYen": 13545.222281026727,
        "medianPayoutYen": 4770
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 286,
        "observedRate": 0.1144,
        "posteriorRate": 0.11061553432413304,
        "lift": 1.2063656536420646,
        "averagePayoutYen": 13115.088,
        "medianPayoutYen": 4710
      },
      "robustLift": 1.2063656536420646,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 2584,
        "highPayoutCount": 322,
        "observedRate": 0.12461300309597523,
        "posteriorRate": 0.12062577546140235,
        "lift": 1.2060191672882388,
        "averagePayoutYen": 28677.1439628483,
        "medianPayoutYen": 6830
      },
      "validation": {
        "count": 1056,
        "highPayoutCount": 132,
        "observedRate": 0.125,
        "posteriorRate": 0.11261996240423923,
        "lift": 1.302366539119172,
        "averagePayoutYen": 27131.19318181818,
        "medianPayoutYen": 7610
      },
      "robustLift": 1.2060191672882388,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 6916,
        "highPayoutCount": 844,
        "observedRate": 0.12203585887796414,
        "posteriorRate": 0.12055149562068027,
        "lift": 1.2052765158001029,
        "averagePayoutYen": 28239.47946790052,
        "medianPayoutYen": 5950
      },
      "validation": {
        "count": 2671,
        "highPayoutCount": 305,
        "observedRate": 0.1141894421564957,
        "posteriorRate": 0.10981919315704705,
        "lift": 1.2699777150291387,
        "averagePayoutYen": 24576.91875701984,
        "medianPayoutYen": 6220
      },
      "robustLift": 1.2052765158001029,
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
      "betType": "複勝",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 2559,
        "highPayoutCount": 334,
        "observedRate": 0.1305197342711997,
        "posteriorRate": 0.12565231054310336,
        "lift": 1.247282786738597,
        "averagePayoutYen": 413.56389214536927,
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
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 2424,
        "highPayoutCount": 325,
        "observedRate": 0.13407590759075907,
        "posteriorRate": 0.1282517925121145,
        "lift": 1.2823065675197736,
        "averagePayoutYen": 13958.28795379538,
        "medianPayoutYen": 4950
      },
      "validation": {
        "count": 803,
        "highPayoutCount": 98,
        "observedRate": 0.12204234122042341,
        "posteriorRate": 0.11039647196653811,
        "lift": 1.2039765741531567,
        "averagePayoutYen": 13967.260273972603,
        "medianPayoutYen": 4590
      },
      "robustLift": 1.2039765741531567,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 1236,
        "highPayoutCount": 159,
        "observedRate": 0.12864077669902912,
        "posteriorRate": 0.12039740295101661,
        "lift": 1.2037358938854072,
        "averagePayoutYen": 24284.05339805825,
        "medianPayoutYen": 5720
      },
      "validation": {
        "count": 472,
        "highPayoutCount": 58,
        "observedRate": 0.1228813559322034,
        "posteriorRate": 0.10415294393106608,
        "lift": 1.204451735116809,
        "averagePayoutYen": 22860.741525423728,
        "medianPayoutYen": 6990
      },
      "robustLift": 1.2037358938854072,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 3568,
        "highPayoutCount": 439,
        "observedRate": 0.12303811659192825,
        "posteriorRate": 0.12020851556180501,
        "lift": 1.2018870532522594,
        "averagePayoutYen": 14268.315582959642,
        "medianPayoutYen": 4210
      },
      "validation": {
        "count": 1401,
        "highPayoutCount": 176,
        "observedRate": 0.1256245538900785,
        "posteriorRate": 0.11669994895970498,
        "lift": 1.2727218746169853,
        "averagePayoutYen": 13733.433261955746,
        "medianPayoutYen": 4410
      },
      "robustLift": 1.2018870532522594,
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
        "count": 2555,
        "highPayoutCount": 348,
        "observedRate": 0.13620352250489237,
        "posteriorRate": 0.13030914953504646,
        "lift": 1.3006345490952647,
        "averagePayoutYen": 2542.5479452054797,
        "medianPayoutYen": 1060
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
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 12153,
        "highPayoutCount": 1469,
        "observedRate": 0.12087550399078417,
        "posteriorRate": 0.12005136264308582,
        "lift": 1.2002761752438271,
        "averagePayoutYen": 28973.671521435037,
        "medianPayoutYen": 6750
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 504,
        "observedRate": 0.109398741046234,
        "posteriorRate": 0.10715423174094306,
        "lift": 1.2391594080231434,
        "averagePayoutYen": 26173.911439114392,
        "medianPayoutYen": 6590
      },
      "robustLift": 1.2002761752438271,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 3199,
        "highPayoutCount": 394,
        "observedRate": 0.12316348859018443,
        "posteriorRate": 0.12003466918232569,
        "lift": 1.200148875954466,
        "averagePayoutYen": 12634.673335417318,
        "medianPayoutYen": 4360
      },
      "validation": {
        "count": 1249,
        "highPayoutCount": 152,
        "observedRate": 0.12169735788630905,
        "posteriorRate": 0.11311984160800409,
        "lift": 1.2336774621677553,
        "averagePayoutYen": 13010.208166533226,
        "medianPayoutYen": 4620
      },
      "robustLift": 1.200148875954466,
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
        "count": 6344,
        "highPayoutCount": 776,
        "observedRate": 0.1223203026481715,
        "posteriorRate": 0.12074377819277515,
        "lift": 1.1985584307577832,
        "averagePayoutYen": 402.8814627994956,
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
      "robustLift": 1.1985584307577832,
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
        "count": 5460,
        "highPayoutCount": 687,
        "observedRate": 0.12582417582417582,
        "posteriorRate": 0.12367356574321592,
        "lift": 1.2344038234411907,
        "averagePayoutYen": 2246.2948717948716,
        "medianPayoutYen": 990
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
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 21630,
        "highPayoutCount": 2604,
        "observedRate": 0.1203883495145631,
        "posteriorRate": 0.11993196799952856,
        "lift": 1.1970583928891492,
        "averagePayoutYen": 2199.3892741562645,
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
      "robustLift": 1.1970583928891492,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 4114,
        "highPayoutCount": 502,
        "observedRate": 0.12202236266407389,
        "posteriorRate": 0.11964564655015866,
        "lift": 1.1953803080639367,
        "averagePayoutYen": 6382.824501701507,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 1702,
        "highPayoutCount": 212,
        "observedRate": 0.1245593419506463,
        "posteriorRate": 0.11744348091335183,
        "lift": 1.259838100862334,
        "averagePayoutYen": 6670.793184488836,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.1953803080639367,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 12974,
        "highPayoutCount": 1562,
        "observedRate": 0.12039463542469554,
        "posteriorRate": 0.11964116173240552,
        "lift": 1.1953355002252735,
        "averagePayoutYen": 6581.3866193926315,
        "medianPayoutYen": 2240
      },
      "validation": {
        "count": 3974,
        "highPayoutCount": 477,
        "observedRate": 0.12003019627579266,
        "posteriorRate": 0.1170340958809121,
        "lift": 1.2554465513460962,
        "averagePayoutYen": 6807.108706592853,
        "medianPayoutYen": 2380
      },
      "robustLift": 1.1953355002252735,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 6859,
        "highPayoutCount": 830,
        "observedRate": 0.12100889342469748,
        "posteriorRate": 0.11958280901249692,
        "lift": 1.1955915656963967,
        "averagePayoutYen": 27978.031783058756,
        "medianPayoutYen": 6550
      },
      "validation": {
        "count": 2618,
        "highPayoutCount": 279,
        "observedRate": 0.10656990068754775,
        "posteriorRate": 0.10334722947434132,
        "lift": 1.1951342435627235,
        "averagePayoutYen": 25602.039724980903,
        "medianPayoutYen": 5470
      },
      "robustLift": 1.1951342435627235,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 3347,
        "highPayoutCount": 410,
        "observedRate": 0.12249775918733194,
        "posteriorRate": 0.11958539464061138,
        "lift": 1.1947783309066158,
        "averagePayoutYen": 6288.264117119808,
        "medianPayoutYen": 2200
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 155,
        "observedRate": 0.11877394636015326,
        "posteriorRate": 0.11169559278182865,
        "lift": 1.1981794339761753,
        "averagePayoutYen": 6476.72030651341,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.1947783309066158,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 3272,
        "highPayoutCount": 401,
        "observedRate": 0.12255501222493888,
        "posteriorRate": 0.11956740225488408,
        "lift": 1.1954769767310178,
        "averagePayoutYen": 12665.458435207824,
        "medianPayoutYen": 4180
      },
      "validation": {
        "count": 1306,
        "highPayoutCount": 152,
        "observedRate": 0.11638591117917305,
        "posteriorRate": 0.10954961404894749,
        "lift": 1.1947407980794043,
        "averagePayoutYen": 12803.392036753447,
        "medianPayoutYen": 4520
      },
      "robustLift": 1.1947407980794043,
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
        "count": 37539,
        "highPayoutCount": 4503,
        "observedRate": 0.11995524654359466,
        "posteriorRate": 0.11969542973867786,
        "lift": 1.1946974701500856,
        "averagePayoutYen": 2245.5832600761873,
        "medianPayoutYen": 970
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
      "robustLift": 1.1946974701500856,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 2130,
      "discovery": {
        "count": 2114,
        "highPayoutCount": 264,
        "observedRate": 0.12488174077578051,
        "posteriorRate": 0.12025223041424495,
        "lift": 1.1944162714404398,
        "averagePayoutYen": 1163.8457899716177,
        "medianPayoutYen": 530
      },
      "validation": {
        "count": 629,
        "highPayoutCount": 88,
        "observedRate": 0.13990461049284578,
        "posteriorRate": 0.11819883784213972,
        "lift": 1.3004177356937507,
        "averagePayoutYen": 1155.7074721780605,
        "medianPayoutYen": 500
      },
      "robustLift": 1.1944162714404398,
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
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 1240,
        "highPayoutCount": 159,
        "observedRate": 0.1282258064516129,
        "posteriorRate": 0.12011967891116251,
        "lift": 1.2009988331476977,
        "averagePayoutYen": 13121.443548387097,
        "medianPayoutYen": 4540
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 76,
        "observedRate": 0.12357723577235773,
        "posteriorRate": 0.10927946454923691,
        "lift": 1.1917945656194637,
        "averagePayoutYen": 14065.447154471545,
        "medianPayoutYen": 4850
      },
      "robustLift": 1.1917945656194637,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 1827,
        "highPayoutCount": 250,
        "observedRate": 0.13683634373289547,
        "posteriorRate": 0.12892560873354741,
        "lift": 1.2890010836590604,
        "averagePayoutYen": 27368.85604816639,
        "medianPayoutYen": 6980
      },
      "validation": {
        "count": 560,
        "highPayoutCount": 66,
        "observedRate": 0.11785714285714285,
        "posteriorRate": 0.10305345424622286,
        "lift": 1.1917369504101094,
        "averagePayoutYen": 22992.303571428572,
        "medianPayoutYen": 6450
      },
      "robustLift": 1.1917369504101094,
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
        "count": 7500,
        "highPayoutCount": 905,
        "observedRate": 0.12066666666666667,
        "posteriorRate": 0.11938680647869586,
        "lift": 1.1916170565642457,
        "averagePayoutYen": 2161.6946666666668,
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
      "robustLift": 1.1916170565642457,
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
      "betType": "馬連",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 4158,
        "highPayoutCount": 505,
        "observedRate": 0.12145262145262145,
        "posteriorRate": 0.11915951334959898,
        "lift": 1.1905233486023858,
        "averagePayoutYen": 6348.258778258778,
        "medianPayoutYen": 2260
      },
      "validation": {
        "count": 1730,
        "highPayoutCount": 215,
        "observedRate": 0.12427745664739884,
        "posteriorRate": 0.11731414572699585,
        "lift": 1.2584506982216237,
        "averagePayoutYen": 6619.225433526011,
        "medianPayoutYen": 2490
      },
      "robustLift": 1.1905233486023858,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 12518,
        "highPayoutCount": 1500,
        "observedRate": 0.11982744847419716,
        "posteriorRate": 0.11906654181175472,
        "lift": 1.190469197712452,
        "averagePayoutYen": 13267.332640996965,
        "medianPayoutYen": 4330
      },
      "validation": {
        "count": 3980,
        "highPayoutCount": 450,
        "observedRate": 0.11306532663316583,
        "posteriorRate": 0.11068004530633908,
        "lift": 1.2070692061194954,
        "averagePayoutYen": 13320.062814070352,
        "medianPayoutYen": 4600
      },
      "robustLift": 1.190469197712452,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 1800,
        "highPayoutCount": 224,
        "observedRate": 0.12444444444444444,
        "posteriorRate": 0.11915000573149218,
        "lift": 1.19042835793796,
        "averagePayoutYen": 6522.783333333334,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 662,
        "highPayoutCount": 83,
        "observedRate": 0.12537764350453173,
        "posteriorRate": 0.11154091649845156,
        "lift": 1.1965201926663744,
        "averagePayoutYen": 6341.027190332326,
        "medianPayoutYen": 2390
      },
      "robustLift": 1.19042835793796,
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
      "betType": "ワイド",
      "conditions": [
        "venue=10",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1172,
        "highPayoutCount": 150,
        "observedRate": 0.12798634812286688,
        "posteriorRate": 0.11967371520907114,
        "lift": 1.194480734276015,
        "averagePayoutYen": 2289.726962457338,
        "medianPayoutYen": 940
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
      "robustLift": 1.1895281999667584,
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
      "betType": "ワイド",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 142401,
        "highPayoutCount": 16971,
        "observedRate": 0.11917753386563297,
        "posteriorRate": 0.11911109405693147,
        "lift": 1.1888651308350011,
        "averagePayoutYen": 2206.513648078314,
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
      "robustLift": 1.1888651308350011,
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
        "count": 2348,
        "highPayoutCount": 289,
        "observedRate": 0.12308347529812606,
        "posteriorRate": 0.11906406314240411,
        "lift": 1.1883957084457974,
        "averagePayoutYen": 2331.5289608177172,
        "medianPayoutYen": 1060
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
      "robustLift": 1.1883957084457974,
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
        "count": 2398,
        "highPayoutCount": 308,
        "observedRate": 0.12844036697247707,
        "posteriorRate": 0.12356606343325291,
        "lift": 1.2333308272705892,
        "averagePayoutYen": 2241.930775646372,
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
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 15545,
        "highPayoutCount": 1855,
        "observedRate": 0.11933097458990029,
        "posteriorRate": 0.1187291923666541,
        "lift": 1.1870570876176865,
        "averagePayoutYen": 27224.301061434544,
        "medianPayoutYen": 6720
      },
      "validation": {
        "count": 4817,
        "highPayoutCount": 514,
        "observedRate": 0.10670541831015155,
        "posteriorRate": 0.10480283270660075,
        "lift": 1.2119672179613814,
        "averagePayoutYen": 27027.288768943326,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.1870570876176865,
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
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 622,
        "highPayoutCount": 83,
        "observedRate": 0.13344051446945338,
        "posteriorRate": 0.11854714039479931,
        "lift": 1.1852369279821555,
        "averagePayoutYen": 28607.379421221864,
        "medianPayoutYen": 7990
      },
      "validation": {
        "count": 211,
        "highPayoutCount": 30,
        "observedRate": 0.14218009478672985,
        "posteriorRate": 0.10300514979043071,
        "lift": 1.191178345118729,
        "averagePayoutYen": 28423.6018957346,
        "medianPayoutYen": 10180
      },
      "robustLift": 1.1852369279821555,
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
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3451,
        "highPayoutCount": 429,
        "observedRate": 0.12431179368299043,
        "posteriorRate": 0.12125903615023208,
        "lift": 1.2103040528598235,
        "averagePayoutYen": 2203.3265720081135,
        "medianPayoutYen": 1120
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
      "robustLift": 1.1841013183737554,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 1654,
        "highPayoutCount": 205,
        "observedRate": 0.12394195888754535,
        "posteriorRate": 0.11838899327899946,
        "lift": 1.1836557696254408,
        "averagePayoutYen": 25493.88754534462,
        "medianPayoutYen": 7120
      },
      "validation": {
        "count": 648,
        "highPayoutCount": 76,
        "observedRate": 0.11728395061728394,
        "posteriorRate": 0.10386468771863784,
        "lift": 1.2011182652972021,
        "averagePayoutYen": 26166.6512345679,
        "medianPayoutYen": 7750
      },
      "robustLift": 1.1836557696254408,
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
        "count": 104012,
        "highPayoutCount": 12342,
        "observedRate": 0.11865938545552436,
        "posteriorRate": 0.11857102009175566,
        "lift": 1.1834745741420836,
        "averagePayoutYen": 2195.4291812483175,
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
      "robustLift": 1.1834745741420836,
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
        "count": 90090,
        "highPayoutCount": 10690,
        "observedRate": 0.11865911865911866,
        "posteriorRate": 0.11855717465315782,
        "lift": 1.1833363808083692,
        "averagePayoutYen": 2218.2546342546343,
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
      "robustLift": 1.1833363808083692,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 4030,
        "highPayoutCount": 486,
        "observedRate": 0.1205955334987593,
        "posteriorRate": 0.11832411507845977,
        "lift": 1.1830461538909285,
        "averagePayoutYen": 12833.7841191067,
        "medianPayoutYen": 4350
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 207,
        "observedRate": 0.12147887323943662,
        "posteriorRate": 0.11472168918892883,
        "lift": 1.2511471052500256,
        "averagePayoutYen": 13071.420187793427,
        "medianPayoutYen": 4690
      },
      "robustLift": 1.1830461538909285,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 754,
        "highPayoutCount": 110,
        "observedRate": 0.14588859416445624,
        "posteriorRate": 0.12759959451592093,
        "lift": 1.2757435642239545,
        "averagePayoutYen": 32883.183023872676,
        "medianPayoutYen": 7610
      },
      "validation": {
        "count": 343,
        "highPayoutCount": 43,
        "observedRate": 0.12536443148688048,
        "posteriorRate": 0.1022973446037915,
        "lift": 1.1829931018313524,
        "averagePayoutYen": 28516.00583090379,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.1829931018313524,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 12168,
        "highPayoutCount": 1448,
        "observedRate": 0.11900065746219593,
        "posteriorRate": 0.11825136101242681,
        "lift": 1.1823187331285323,
        "averagePayoutYen": 13485.044378698225,
        "medianPayoutYen": 4140
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 523,
        "observedRate": 0.1135228999348817,
        "posteriorRate": 0.11138566731396107,
        "lift": 1.2147646727612311,
        "averagePayoutYen": 12930.573041024529,
        "medianPayoutYen": 4050
      },
      "robustLift": 1.1823187331285323,
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
        "count": 48039,
        "highPayoutCount": 5698,
        "observedRate": 0.11861196111492746,
        "posteriorRate": 0.11842218529078817,
        "lift": 1.1819890323751643,
        "averagePayoutYen": 2194.0644060034556,
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
      "robustLift": 1.1819890323751643,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 696,
        "highPayoutCount": 91,
        "observedRate": 0.1307471264367816,
        "posteriorRate": 0.1178998673122264,
        "lift": 1.178804375384439,
        "averagePayoutYen": 13360,
        "medianPayoutYen": 4450
      },
      "validation": {
        "count": 311,
        "highPayoutCount": 47,
        "observedRate": 0.15112540192926044,
        "posteriorRate": 0.11448409737657109,
        "lift": 1.2485559447609837,
        "averagePayoutYen": 16829.581993569132,
        "medianPayoutYen": 5560
      },
      "robustLift": 1.178804375384439,
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
      "betType": "ワイド",
      "conditions": [
        "venue=07",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 13202,
        "highPayoutCount": 1704,
        "observedRate": 0.1290713528253295,
        "posteriorRate": 0.12801740270249357,
        "lift": 1.277760291080126,
        "averagePayoutYen": 2383.322223905469,
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
      "betType": "単勝",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 2130,
      "discovery": {
        "count": 3229,
        "highPayoutCount": 392,
        "observedRate": 0.12139981418395789,
        "posteriorRate": 0.11862143478220336,
        "lift": 1.1782182447460947,
        "averagePayoutYen": 1113.2610715391763,
        "medianPayoutYen": 500
      },
      "validation": {
        "count": 1166,
        "highPayoutCount": 149,
        "observedRate": 0.12778730703259006,
        "posteriorRate": 0.11671457858569972,
        "lift": 1.284087989169339,
        "averagePayoutYen": 1226.114922813036,
        "medianPayoutYen": 510
      },
      "robustLift": 1.1782182447460947,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 4075,
        "highPayoutCount": 489,
        "observedRate": 0.12,
        "posteriorRate": 0.11781600902850771,
        "lift": 1.1779659307448191,
        "averagePayoutYen": 12757.818404907975,
        "medianPayoutYen": 4300
      },
      "validation": {
        "count": 1732,
        "highPayoutCount": 207,
        "observedRate": 0.1195150115473441,
        "posteriorRate": 0.11328252821344048,
        "lift": 1.2354517114565666,
        "averagePayoutYen": 12955.098152424942,
        "medianPayoutYen": 4680
      },
      "robustLift": 1.1779659307448191,
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
      "betType": "複勝",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 45831,
        "highPayoutCount": 5443,
        "observedRate": 0.11876240972267679,
        "posteriorRate": 0.11856792251303347,
        "lift": 1.1769598837510553,
        "averagePayoutYen": 388.9391459928869,
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
      "robustLift": 1.1769598837510553,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 12583,
        "highPayoutCount": 1491,
        "observedRate": 0.11849320511801636,
        "posteriorRate": 0.1177898810045427,
        "lift": 1.1768393443634073,
        "averagePayoutYen": 6683.688309624096,
        "medianPayoutYen": 2120
      },
      "validation": {
        "count": 4600,
        "highPayoutCount": 546,
        "observedRate": 0.11869565217391305,
        "posteriorRate": 0.11619814607278446,
        "lift": 1.2464791620070084,
        "averagePayoutYen": 6561.210869565218,
        "medianPayoutYen": 2170
      },
      "robustLift": 1.1768393443634073,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 7109,
        "highPayoutCount": 846,
        "observedRate": 0.11900407933605289,
        "posteriorRate": 0.1177612055700397,
        "lift": 1.1765528479406921,
        "averagePayoutYen": 6379.94935996624,
        "medianPayoutYen": 2300
      },
      "validation": {
        "count": 2149,
        "highPayoutCount": 264,
        "observedRate": 0.12284783620288506,
        "posteriorRate": 0.11725577386606294,
        "lift": 1.2578245323940307,
        "averagePayoutYen": 6895.579339227547,
        "medianPayoutYen": 2270
      },
      "robustLift": 1.1765528479406921,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 29205,
        "highPayoutCount": 3445,
        "observedRate": 0.11795925355247389,
        "posteriorRate": 0.11765723754605026,
        "lift": 1.1763784775739732,
        "averagePayoutYen": 13592.87724704674,
        "medianPayoutYen": 4120
      },
      "validation": {
        "count": 9558,
        "highPayoutCount": 1051,
        "observedRate": 0.10996024272860432,
        "posteriorRate": 0.10905215778210371,
        "lift": 1.1893155731489633,
        "averagePayoutYen": 12764.961288972589,
        "medianPayoutYen": 4040
      },
      "robustLift": 1.1763784775739732,
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
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 3930,
        "highPayoutCount": 470,
        "observedRate": 0.11959287531806616,
        "posteriorRate": 0.11739165083124878,
        "lift": 1.1728606245273046,
        "averagePayoutYen": 6538.684478371501,
        "medianPayoutYen": 2320
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 175,
        "observedRate": 0.13049962714392244,
        "posteriorRate": 0.12037509232547568,
        "lift": 1.2912860426739479,
        "averagePayoutYen": 7348.337061894109,
        "medianPayoutYen": 2510
      },
      "robustLift": 1.1728606245273046,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 1136,
        "highPayoutCount": 142,
        "observedRate": 0.125,
        "posteriorRate": 0.1173869273731247,
        "lift": 1.1728134324313924,
        "averagePayoutYen": 6521.091549295775,
        "medianPayoutYen": 2230
      },
      "validation": {
        "count": 528,
        "highPayoutCount": 68,
        "observedRate": 0.12878787878787878,
        "posteriorRate": 0.11148885697587618,
        "lift": 1.1959617404684058,
        "averagePayoutYen": 7466.420454545455,
        "medianPayoutYen": 2730
      },
      "robustLift": 1.1728134324313924,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 1907,
        "highPayoutCount": 234,
        "observedRate": 0.12270582066072365,
        "posteriorRate": 0.11814309013350777,
        "lift": 1.1727428016143138,
        "averagePayoutYen": 384.7456738332459,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 631,
        "highPayoutCount": 77,
        "observedRate": 0.12202852614896989,
        "posteriorRate": 0.10793163065674392,
        "lift": 1.1973598398319778,
        "averagePayoutYen": 372.06022187004754,
        "medianPayoutYen": 250
      },
      "robustLift": 1.1727428016143138,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 2645,
        "highPayoutCount": 319,
        "observedRate": 0.12060491493383743,
        "posteriorRate": 0.11734340641730748,
        "lift": 1.172378614324156,
        "averagePayoutYen": 6211.111531190926,
        "medianPayoutYen": 2230
      },
      "validation": {
        "count": 1055,
        "highPayoutCount": 124,
        "observedRate": 0.11753554502369669,
        "posteriorRate": 0.10971739226443776,
        "lift": 1.1769589084640495,
        "averagePayoutYen": 6091.563981042654,
        "medianPayoutYen": 2350
      },
      "robustLift": 1.172378614324156,
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
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 1152,
        "highPayoutCount": 145,
        "observedRate": 0.12586805555555555,
        "posteriorRate": 0.11806598860922034,
        "lift": 1.179597936949557,
        "averagePayoutYen": 6742.395833333333,
        "medianPayoutYen": 2580
      },
      "validation": {
        "count": 357,
        "highPayoutCount": 47,
        "observedRate": 0.13165266106442577,
        "posteriorRate": 0.10923050755099266,
        "lift": 1.171736005430563,
        "averagePayoutYen": 7410.756302521008,
        "medianPayoutYen": 2550
      },
      "robustLift": 1.171736005430563,
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
        "count": 69252,
        "highPayoutCount": 8183,
        "observedRate": 0.11816265234217062,
        "posteriorRate": 0.11803776835003087,
        "lift": 1.1716973290159067,
        "averagePayoutYen": 387.005429446081,
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
      "robustLift": 1.1716973290159067,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "going=不良",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 2130,
      "discovery": {
        "count": 1173,
        "highPayoutCount": 147,
        "observedRate": 0.12531969309462915,
        "posteriorRate": 0.1179553677841221,
        "lift": 1.1716024733991752,
        "averagePayoutYen": 1148.4484228473998,
        "medianPayoutYen": 540
      },
      "validation": {
        "count": 361,
        "highPayoutCount": 50,
        "observedRate": 0.13850415512465375,
        "posteriorRate": 0.11085538667105198,
        "lift": 1.2196254511127684,
        "averagePayoutYen": 1110.8033240997229,
        "medianPayoutYen": 550
      },
      "robustLift": 1.1716024733991752,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 18551,
        "highPayoutCount": 2181,
        "observedRate": 0.11756778610317503,
        "posteriorRate": 0.11710723277113877,
        "lift": 1.1708406997579917,
        "averagePayoutYen": 27484.425098377447,
        "medianPayoutYen": 6410
      },
      "validation": {
        "count": 6288,
        "highPayoutCount": 698,
        "observedRate": 0.11100508905852417,
        "posteriorRate": 0.10919809391588041,
        "lift": 1.2627951618485198,
        "averagePayoutYen": 25668.91062340967,
        "medianPayoutYen": 6410
      },
      "robustLift": 1.1708406997579917,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 30152,
        "highPayoutCount": 3538,
        "observedRate": 0.11733881666224463,
        "posteriorRate": 0.11705745181986271,
        "lift": 1.1695216403794957,
        "averagePayoutYen": 6710.0109445476255,
        "medianPayoutYen": 2140
      },
      "validation": {
        "count": 9543,
        "highPayoutCount": 1077,
        "observedRate": 0.11285759195221629,
        "posteriorRate": 0.11187997062343927,
        "lift": 1.2001572894348975,
        "averagePayoutYen": 6450.436969506444,
        "medianPayoutYen": 2150
      },
      "robustLift": 1.1695216403794957,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 5143,
        "highPayoutCount": 610,
        "observedRate": 0.11860781644954307,
        "posteriorRate": 0.11696081721122893,
        "lift": 1.1693768337561767,
        "averagePayoutYen": 27744.141551623565,
        "medianPayoutYen": 7000
      },
      "validation": {
        "count": 2043,
        "highPayoutCount": 222,
        "observedRate": 0.10866372980910426,
        "posteriorRate": 0.1043006926861959,
        "lift": 1.2061603401524499,
        "averagePayoutYen": 25569.579050416054,
        "medianPayoutYen": 6600
      },
      "robustLift": 1.1693768337561767,
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
      "betType": "ワイド",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 18543,
        "highPayoutCount": 2180,
        "observedRate": 0.11756457962573477,
        "posteriorRate": 0.11710835749774547,
        "lift": 1.1688755263374833,
        "averagePayoutYen": 2217.7366121986734,
        "medianPayoutYen": 940
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
      "robustLift": 1.1688755263374833,
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
      "betType": "複勝",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 11763,
        "highPayoutCount": 1393,
        "observedRate": 0.11842217121482615,
        "posteriorRate": 0.11770124911941231,
        "lift": 1.1683568839262555,
        "averagePayoutYen": 386.93445549604695,
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
      "robustLift": 1.1683568839262555,
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
        "count": 10846,
        "highPayoutCount": 1301,
        "observedRate": 0.11995205605753273,
        "posteriorRate": 0.11910544843569126,
        "lift": 1.1822956139724814,
        "averagePayoutYen": 393.2961460446247,
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
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 2510,
        "highPayoutCount": 303,
        "observedRate": 0.12071713147410358,
        "posteriorRate": 0.11727903372855975,
        "lift": 1.1725583695248025,
        "averagePayoutYen": 26966.585657370517,
        "medianPayoutYen": 5810
      },
      "validation": {
        "count": 850,
        "highPayoutCount": 93,
        "observedRate": 0.10941176470588235,
        "posteriorRate": 0.10091604555629351,
        "lift": 1.1670194003527337,
        "averagePayoutYen": 21784.882352941175,
        "medianPayoutYen": 5970
      },
      "robustLift": 1.1670194003527337,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 4643,
        "highPayoutCount": 550,
        "observedRate": 0.11845789360327375,
        "posteriorRate": 0.11666534931420666,
        "lift": 1.1664227391958377,
        "averagePayoutYen": 24220.941201809175,
        "medianPayoutYen": 6610
      },
      "validation": {
        "count": 1467,
        "highPayoutCount": 156,
        "observedRate": 0.10633946830265849,
        "posteriorRate": 0.10128960930401436,
        "lift": 1.171339388700033,
        "averagePayoutYen": 23554.512610770278,
        "medianPayoutYen": 6000
      },
      "robustLift": 1.1664227391958377,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 5308,
        "highPayoutCount": 628,
        "observedRate": 0.11831198191409194,
        "posteriorRate": 0.11674328739366943,
        "lift": 1.166382821881756,
        "averagePayoutYen": 6386.060663149962,
        "medianPayoutYen": 2210
      },
      "validation": {
        "count": 2037,
        "highPayoutCount": 238,
        "observedRate": 0.11683848797250859,
        "posteriorRate": 0.11218389632290135,
        "lift": 1.2034175570379675,
        "averagePayoutYen": 6363.151693667158,
        "medianPayoutYen": 2190
      },
      "robustLift": 1.166382821881756,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 2116,
        "highPayoutCount": 259,
        "observedRate": 0.1224007561436673,
        "posteriorRate": 0.11813647292906422,
        "lift": 1.18030214617403,
        "averagePayoutYen": 6715.349716446125,
        "medianPayoutYen": 2280
      },
      "validation": {
        "count": 628,
        "highPayoutCount": 76,
        "observedRate": 0.12101910828025478,
        "posteriorRate": 0.10869729164113538,
        "lift": 1.1660160990211148,
        "averagePayoutYen": 6874.490445859873,
        "medianPayoutYen": 2530
      },
      "robustLift": 1.1660160990211148,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=曇"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 39186,
        "highPayoutCount": 4584,
        "observedRate": 0.11698055427958964,
        "posteriorRate": 0.11676899792948564,
        "lift": 1.1654883291942306,
        "averagePayoutYen": 2138.8421885367225,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 13775,
        "highPayoutCount": 1652,
        "observedRate": 0.11992740471869329,
        "posteriorRate": 0.11896570447688935,
        "lift": 1.2865209737974406,
        "averagePayoutYen": 2308.7709618874774,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.1654883291942306,
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
        "count": 844,
        "highPayoutCount": 107,
        "observedRate": 0.12677725118483413,
        "posteriorRate": 0.11694134273603857,
        "lift": 1.1654703001497064,
        "averagePayoutYen": 2585.5924170616113,
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
      "robustLift": 1.1654703001497064,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 1113,
        "highPayoutCount": 138,
        "observedRate": 0.12398921832884097,
        "posteriorRate": 0.11655913919588644,
        "lift": 1.1653608480870414,
        "averagePayoutYen": 24633.629829290207,
        "medianPayoutYen": 6830
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 74,
        "observedRate": 0.13988657844990549,
        "posteriorRate": 0.11393261564722666,
        "lift": 1.3175464026587886,
        "averagePayoutYen": 30496.843100189035,
        "medianPayoutYen": 8860
      },
      "robustLift": 1.1653608480870414,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 46149,
        "highPayoutCount": 5384,
        "observedRate": 0.11666558321957139,
        "posteriorRate": 0.11648713244239796,
        "lift": 1.1646793548583196,
        "averagePayoutYen": 13381.566447810354,
        "medianPayoutYen": 4170
      },
      "validation": {
        "count": 15652,
        "highPayoutCount": 1769,
        "observedRate": 0.11302070023000256,
        "posteriorRate": 0.11236048804930653,
        "lift": 1.2253960028069089,
        "averagePayoutYen": 13074.723358037312,
        "medianPayoutYen": 4160
      },
      "robustLift": 1.1646793548583196,
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
        "count": 38859,
        "highPayoutCount": 4567,
        "observedRate": 0.11752747111351296,
        "posteriorRate": 0.11731422083770811,
        "lift": 1.1645150627001741,
        "averagePayoutYen": 386.91551506729456,
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
      "robustLift": 1.1645150627001741,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 1112,
        "highPayoutCount": 140,
        "observedRate": 0.12589928057553956,
        "posteriorRate": 0.1178711174351258,
        "lift": 1.1785169239929272,
        "averagePayoutYen": 12952.634892086331,
        "medianPayoutYen": 4260
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 64,
        "observedRate": 0.12098298676748583,
        "posteriorRate": 0.10675082893333251,
        "lift": 1.164217433924159,
        "averagePayoutYen": 14935.973534971645,
        "medianPayoutYen": 5080
      },
      "robustLift": 1.164217433924159,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 5154,
        "highPayoutCount": 608,
        "observedRate": 0.11796662786185487,
        "posteriorRate": 0.11637924324468037,
        "lift": 1.1636006406814037,
        "averagePayoutYen": 12522.041133100505,
        "medianPayoutYen": 4320
      },
      "validation": {
        "count": 2041,
        "highPayoutCount": 230,
        "observedRate": 0.11268985791278785,
        "posteriorRate": 0.10855828530987766,
        "lift": 1.1839294328440493,
        "averagePayoutYen": 12530.161685448309,
        "medianPayoutYen": 4060
      },
      "robustLift": 1.1636006406814037,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 47623,
        "highPayoutCount": 5554,
        "observedRate": 0.11662432018142495,
        "posteriorRate": 0.11645252817119531,
        "lift": 1.1634778449021896,
        "averagePayoutYen": 6593.982949415198,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 15627,
        "highPayoutCount": 1823,
        "observedRate": 0.1166570678953094,
        "posteriorRate": 0.11593046102630375,
        "lift": 1.2436076546405304,
        "averagePayoutYen": 6591.846803609138,
        "medianPayoutYen": 2210
      },
      "robustLift": 1.1634778449021896,
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
      "betType": "複勝",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 20290,
        "highPayoutCount": 2384,
        "observedRate": 0.11749630359783145,
        "posteriorRate": 0.1170933341967943,
        "lift": 1.1623224400270098,
        "averagePayoutYen": 385.5120749137506,
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
      "robustLift": 1.1623224400270098,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 5961,
        "highPayoutCount": 700,
        "observedRate": 0.11742996141586982,
        "posteriorRate": 0.11608237754301544,
        "lift": 1.1606324728962998,
        "averagePayoutYen": 13455.46552591847,
        "medianPayoutYen": 4200
      },
      "validation": {
        "count": 2032,
        "highPayoutCount": 225,
        "observedRate": 0.11072834645669291,
        "posteriorRate": 0.10696943245355416,
        "lift": 1.1666015093632187,
        "averagePayoutYen": 12489.817913385827,
        "medianPayoutYen": 4020
      },
      "robustLift": 1.1606324728962998,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24590,
      "discovery": {
        "count": 2507,
        "highPayoutCount": 299,
        "observedRate": 0.11926605504587157,
        "posteriorRate": 0.11606526149166038,
        "lift": 1.1604613405898212,
        "averagePayoutYen": 12538.603909054647,
        "medianPayoutYen": 4440
      },
      "validation": {
        "count": 692,
        "highPayoutCount": 94,
        "observedRate": 0.13583815028901733,
        "posteriorRate": 0.11732097564798587,
        "lift": 1.2794947503375131,
        "averagePayoutYen": 12772.182080924855,
        "medianPayoutYen": 5010
      },
      "robustLift": 1.1604613405898212,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3776,
        "highPayoutCount": 447,
        "observedRate": 0.1183792372881356,
        "posteriorRate": 0.11625221043722332,
        "lift": 1.1603301981698555,
        "averagePayoutYen": 2160.423728813559,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 1846,
        "highPayoutCount": 224,
        "observedRate": 0.12134344528710726,
        "posteriorRate": 0.1151898684601857,
        "lift": 1.2456882628033852,
        "averagePayoutYen": 2276.5059588299023,
        "medianPayoutYen": 1100
      },
      "robustLift": 1.1603301981698555,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=稍重"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 7081,
        "highPayoutCount": 839,
        "observedRate": 0.11848608953537636,
        "posteriorRate": 0.11727278897011371,
        "lift": 1.171673075023603,
        "averagePayoutYen": 6642.666290072024,
        "medianPayoutYen": 2170
      },
      "validation": {
        "count": 2743,
        "highPayoutCount": 304,
        "observedRate": 0.11082756106452789,
        "posteriorRate": 0.10811302650977513,
        "lift": 1.1597485781015326,
        "averagePayoutYen": 6368.7057965730955,
        "medianPayoutYen": 2020
      },
      "robustLift": 1.1597485781015326,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 3910,
        "highPayoutCount": 494,
        "observedRate": 0.12634271099744246,
        "posteriorRate": 0.12336621614114106,
        "lift": 1.2325525391653611,
        "averagePayoutYen": 6753.780051150895,
        "medianPayoutYen": 2330
      },
      "validation": {
        "count": 1199,
        "highPayoutCount": 137,
        "observedRate": 0.11426188490408674,
        "posteriorRate": 0.10806977337916464,
        "lift": 1.159284593710906,
        "averagePayoutYen": 7202.577147623019,
        "medianPayoutYen": 2570
      },
      "robustLift": 1.159284593710906,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12350,
      "discovery": {
        "count": 2500,
        "highPayoutCount": 298,
        "observedRate": 0.1192,
        "posteriorRate": 0.116015004394144,
        "lift": 1.1591065424563658,
        "averagePayoutYen": 6266.884,
        "medianPayoutYen": 2290
      },
      "validation": {
        "count": 690,
        "highPayoutCount": 89,
        "observedRate": 0.1289855072463768,
        "posteriorRate": 0.11395844115226951,
        "lift": 1.2224534300412182,
        "averagePayoutYen": 6596.724637681159,
        "medianPayoutYen": 2650
      },
      "robustLift": 1.1591065424563658,
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
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 4741,
        "highPayoutCount": 557,
        "observedRate": 0.11748576249736342,
        "posteriorRate": 0.11581947939762732,
        "lift": 1.1579657130874037,
        "averagePayoutYen": 26437.6777051255,
        "medianPayoutYen": 6930
      },
      "validation": {
        "count": 1635,
        "highPayoutCount": 198,
        "observedRate": 0.12110091743119267,
        "posteriorRate": 0.1129914105391083,
        "lift": 1.3066620619691558,
        "averagePayoutYen": 27959.070336391436,
        "medianPayoutYen": 7120
      },
      "robustLift": 1.1579657130874037,
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
        "count": 4062,
        "highPayoutCount": 565,
        "observedRate": 0.13909404234367306,
        "posteriorRate": 0.13482999820902386,
        "lift": 1.345757796369817,
        "averagePayoutYen": 2451.4598719842443,
        "medianPayoutYen": 1080
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
      "betType": "3連複",
      "conditions": [
        "surface=ダート",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 6886,
        "highPayoutCount": 805,
        "observedRate": 0.11690386291025269,
        "posteriorRate": 0.11576088431125979,
        "lift": 1.157379878119729,
        "averagePayoutYen": 25630.657856520476,
        "medianPayoutYen": 6720
      },
      "validation": {
        "count": 2887,
        "highPayoutCount": 336,
        "observedRate": 0.11638378940076204,
        "posteriorRate": 0.11196830868054214,
        "lift": 1.2948306459549639,
        "averagePayoutYen": 25496.30758572913,
        "medianPayoutYen": 7760
      },
      "robustLift": 1.157379878119729,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1864,
        "highPayoutCount": 224,
        "observedRate": 0.12017167381974249,
        "posteriorRate": 0.11594519958949533,
        "lift": 1.1572658783049279,
        "averagePayoutYen": 2192.516094420601,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 620,
        "highPayoutCount": 80,
        "observedRate": 0.12903225806451613,
        "posteriorRate": 0.11271020661392465,
        "lift": 1.2188726608854406,
        "averagePayoutYen": 2325.2419354838707,
        "medianPayoutYen": 1080
      },
      "robustLift": 1.1572658783049279,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 47210,
      "discovery": {
        "count": 5955,
        "highPayoutCount": 697,
        "observedRate": 0.11704450041981528,
        "posteriorRate": 0.1157257771530542,
        "lift": 1.1570288759765883,
        "averagePayoutYen": 27474.073887489503,
        "medianPayoutYen": 6260
      },
      "validation": {
        "count": 2031,
        "highPayoutCount": 215,
        "observedRate": 0.10585918266863614,
        "posteriorRate": 0.10202949881509135,
        "lift": 1.1798956634607467,
        "averagePayoutYen": 23499.566715903497,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.1570288759765883,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=06",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 628,
        "highPayoutCount": 82,
        "observedRate": 0.1305732484076433,
        "posteriorRate": 0.1170452984037028,
        "lift": 1.169819021689547,
        "averagePayoutYen": 173216.00318471337,
        "medianPayoutYen": 37650
      },
      "validation": {
        "count": 295,
        "highPayoutCount": 35,
        "observedRate": 0.11864406779661017,
        "posteriorRate": 0.0964684310914805,
        "lift": 1.1569065921267179,
        "averagePayoutYen": 177362.16949152542,
        "medianPayoutYen": 50150
      },
      "robustLift": 1.1569065921267179,
      "usePolicy": "volatility_prior_only"
    }
  ]
};
