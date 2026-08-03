window.KEIBA_HISTORICAL_PAYOUT_PATTERNS = {
  "status": "research_only",
  "generatedAt": "2026-08-03T10:43:57.467Z",
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
    "totalRows": 1134926,
    "discoveryRows": 865736,
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
    "単勝": 2100,
    "枠連": 4590,
    "複勝": 670,
    "馬連": 11920,
    "ワイド": 4210,
    "3連複": 47210,
    "馬単": 24590,
    "3連単": 303680
  },
  "baselines": {
    "単勝": {
      "discoveryCount": 82874,
      "validationCount": 22565,
      "discoveryRate": 0.10011583850182204,
      "validationRate": 0.09248836693995126
    },
    "枠連": {
      "discoveryCount": 81593,
      "validationCount": 21360,
      "discoveryRate": 0.10021693037392913,
      "validationRate": 0.09995318352059925
    },
    "複勝": {
      "discoveryCount": 247492,
      "validationCount": 67139,
      "discoveryRate": 0.10010828632844698,
      "validationRate": 0.09437137878133425
    },
    "馬連": {
      "discoveryCount": 81336,
      "validationCount": 22570,
      "discoveryRate": 0.10002950722927118,
      "validationRate": 0.09680992467877714
    },
    "ワイド": {
      "discoveryCount": 206827,
      "validationCount": 67697,
      "discoveryRate": 0.10022869354581365,
      "validationRate": 0.09402189166432781
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
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 3809,
        "highPayoutCount": 581,
        "observedRate": 0.152533473352586,
        "posteriorRate": 0.14644111246568473,
        "lift": 1.4639791449740576,
        "averagePayoutYen": 7297.631924389603,
        "medianPayoutYen": 2680
      },
      "validation": {
        "count": 1310,
        "highPayoutCount": 206,
        "observedRate": 0.15725190839694655,
        "posteriorRate": 0.1405552278118169,
        "lift": 1.4518679595939163,
        "averagePayoutYen": 7617.9312977099235,
        "medianPayoutYen": 2870
      },
      "robustLift": 1.4518679595939163,
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
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 16062,
        "highPayoutCount": 2230,
        "observedRate": 0.13883700659942722,
        "posteriorRate": 0.1376714374334565,
        "lift": 1.3735731013048484,
        "averagePayoutYen": 2387.540779479517,
        "medianPayoutYen": 1160
      },
      "validation": {
        "count": 5329,
        "highPayoutCount": 748,
        "observedRate": 0.1403640457872021,
        "posteriorRate": 0.13638890818873972,
        "lift": 1.4506079996312824,
        "averagePayoutYen": 2451.8690185775945,
        "medianPayoutYen": 1190
      },
      "robustLift": 1.3735731013048484,
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
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 9995,
        "highPayoutCount": 1385,
        "observedRate": 0.13856928464232116,
        "posteriorRate": 0.1367426723937977,
        "lift": 1.3643066427010129,
        "averagePayoutYen": 2437.544772386193,
        "medianPayoutYen": 1230
      },
      "validation": {
        "count": 3929,
        "highPayoutCount": 589,
        "observedRate": 0.1499109188088572,
        "posteriorRate": 0.14360147794810654,
        "lift": 1.527319599788369,
        "averagePayoutYen": 2661.0384321710358,
        "medianPayoutYen": 1280
      },
      "robustLift": 1.3643066427010129,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 19625,
        "highPayoutCount": 2685,
        "observedRate": 0.1368152866242038,
        "posteriorRate": 0.1359013542168763,
        "lift": 1.3586126532182707,
        "averagePayoutYen": 6936.317961783439,
        "medianPayoutYen": 2580
      },
      "validation": {
        "count": 5186,
        "highPayoutCount": 755,
        "observedRate": 0.1455842653297339,
        "posteriorRate": 0.1412952800456188,
        "lift": 1.4595123435375819,
        "averagePayoutYen": 7289.20362514462,
        "medianPayoutYen": 2750
      },
      "robustLift": 1.3586126532182707,
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
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 50852,
        "highPayoutCount": 6742,
        "observedRate": 0.13258082277983166,
        "posteriorRate": 0.13226581918470376,
        "lift": 1.319640259745042,
        "averagePayoutYen": 2339.539447809329,
        "medianPayoutYen": 1150
      },
      "validation": {
        "count": 15554,
        "highPayoutCount": 2231,
        "observedRate": 0.14343577214864345,
        "posteriorRate": 0.14189678247366164,
        "lift": 1.5091887640407655,
        "averagePayoutYen": 2513.6325061077537,
        "medianPayoutYen": 1200
      },
      "robustLift": 1.319640259745042,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 8280,
        "highPayoutCount": 1109,
        "observedRate": 0.13393719806763285,
        "posteriorRate": 0.132017579359101,
        "lift": 1.3171635256201053,
        "averagePayoutYen": 2353.355072463768,
        "medianPayoutYen": 1070
      },
      "validation": {
        "count": 2410,
        "highPayoutCount": 318,
        "observedRate": 0.13195020746887967,
        "posteriorRate": 0.12543331471895666,
        "lift": 1.3340862696825153,
        "averagePayoutYen": 2482.5767634854774,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.3171635256201053,
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
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 6421,
        "highPayoutCount": 840,
        "observedRate": 0.1308207444323314,
        "posteriorRate": 0.128596265512879,
        "lift": 1.2855833151125278,
        "averagePayoutYen": 6657.990967139075,
        "medianPayoutYen": 2550
      },
      "validation": {
        "count": 1771,
        "highPayoutCount": 255,
        "observedRate": 0.14398644833427443,
        "posteriorRate": 0.13359971921593508,
        "lift": 1.3800208982625422,
        "averagePayoutYen": 7359.288537549407,
        "medianPayoutYen": 2790
      },
      "robustLift": 1.2855833151125278,
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
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 11593,
        "highPayoutCount": 1505,
        "observedRate": 0.12981971879582507,
        "posteriorRate": 0.12859624136053147,
        "lift": 1.2830282108960271,
        "averagePayoutYen": 2262.527387216424,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 4189,
        "highPayoutCount": 530,
        "observedRate": 0.1265218429219384,
        "posteriorRate": 0.12305629043125696,
        "lift": 1.3088046650942344,
        "averagePayoutYen": 2379.188350441633,
        "medianPayoutYen": 1030
      },
      "robustLift": 1.2830282108960271,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 26616,
        "highPayoutCount": 3435,
        "observedRate": 0.12905770964833183,
        "posteriorRate": 0.12852612283422726,
        "lift": 1.2823286255395427,
        "averagePayoutYen": 2284.9658100390743,
        "medianPayoutYen": 1070
      },
      "validation": {
        "count": 7488,
        "highPayoutCount": 953,
        "observedRate": 0.12727029914529914,
        "posteriorRate": 0.12518915195695593,
        "lift": 1.3314893982765195,
        "averagePayoutYen": 2340.571581196581,
        "medianPayoutYen": 1090
      },
      "robustLift": 1.2823286255395427,
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
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 76727,
        "highPayoutCount": 9814,
        "observedRate": 0.12790803758781133,
        "posteriorRate": 0.1277288299011085,
        "lift": 1.2743738881792845,
        "averagePayoutYen": 2274.7129432924526,
        "medianPayoutYen": 1050
      },
      "validation": {
        "count": 21154,
        "highPayoutCount": 2636,
        "observedRate": 0.124610002836343,
        "posteriorRate": 0.12390371043835614,
        "lift": 1.3178176725130237,
        "averagePayoutYen": 2369.367022785289,
        "medianPayoutYen": 1030
      },
      "robustLift": 1.2743738881792845,
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
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 6855,
        "highPayoutCount": 886,
        "observedRate": 0.12924872355944567,
        "posteriorRate": 0.12727591390522186,
        "lift": 1.2698550624831317,
        "averagePayoutYen": 2321.8322392414298,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 1888,
        "highPayoutCount": 240,
        "observedRate": 0.1271186440677966,
        "posteriorRate": 0.12018883828817584,
        "lift": 1.2783069576739419,
        "averagePayoutYen": 2280.169491525424,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.2698550624831317,
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
      "betType": "複勝",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 12381,
        "highPayoutCount": 1584,
        "observedRate": 0.12793796946934818,
        "posteriorRate": 0.1268577084981153,
        "lift": 1.2672048753477378,
        "averagePayoutYen": 374.98505774977787,
        "medianPayoutYen": 210
      },
      "validation": {
        "count": 3502,
        "highPayoutCount": 442,
        "observedRate": 0.1262135922330097,
        "posteriorRate": 0.12223530469531911,
        "lift": 1.2952582263161347,
        "averagePayoutYen": 372.4500285551114,
        "medianPayoutYen": 210
      },
      "robustLift": 1.2672048753477378,
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
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 29488,
        "highPayoutCount": 3734,
        "observedRate": 0.12662778079218664,
        "posteriorRate": 0.12618429884002386,
        "lift": 1.261470763329914,
        "averagePayoutYen": 6633.051071622355,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 7053,
        "highPayoutCount": 932,
        "observedRate": 0.13214235077272082,
        "posteriorRate": 0.12980338439552344,
        "lift": 1.3408065838933474,
        "averagePayoutYen": 7052.044520062384,
        "medianPayoutYen": 2370
      },
      "robustLift": 1.261470763329914,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 29099,
        "highPayoutCount": 3684,
        "observedRate": 0.12660228873844462,
        "posteriorRate": 0.12615340902106947,
        "lift": 1.26116195626078,
        "averagePayoutYen": 6741.174267156947,
        "medianPayoutYen": 2440
      },
      "validation": {
        "count": 6761,
        "highPayoutCount": 887,
        "observedRate": 0.13119361041266084,
        "posteriorRate": 0.12882591410816535,
        "lift": 1.330709785547502,
        "averagePayoutYen": 6929.587339151013,
        "medianPayoutYen": 2540
      },
      "robustLift": 1.26116195626078,
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
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 75806,
        "highPayoutCount": 9584,
        "observedRate": 0.12642798723056223,
        "posteriorRate": 0.1262563146642847,
        "lift": 1.2596823344462136,
        "averagePayoutYen": 2275.3982534364036,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 20268,
        "highPayoutCount": 2638,
        "observedRate": 0.13015591079534242,
        "posteriorRate": 0.12928596618991545,
        "lift": 1.3750623807005038,
        "averagePayoutYen": 2396.4135583185316,
        "medianPayoutYen": 1110
      },
      "robustLift": 1.2596823344462136,
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
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 2069,
        "highPayoutCount": 273,
        "observedRate": 0.1319478008699855,
        "posteriorRate": 0.12577436620198787,
        "lift": 1.254873846524773,
        "averagePayoutYen": 2281.3581440309326,
        "medianPayoutYen": 1090
      },
      "validation": {
        "count": 632,
        "highPayoutCount": 91,
        "observedRate": 0.1439873417721519,
        "posteriorRate": 0.12191779667152289,
        "lift": 1.296695849375033,
        "averagePayoutYen": 2351.4398734177216,
        "medianPayoutYen": 1330
      },
      "robustLift": 1.254873846524773,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 1714,
        "highPayoutCount": 228,
        "observedRate": 0.13302217036172695,
        "posteriorRate": 0.12561623612145748,
        "lift": 1.2532961538009013,
        "averagePayoutYen": 2350.810968494749,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 492,
        "highPayoutCount": 77,
        "observedRate": 0.1565040650406504,
        "posteriorRate": 0.12501103410500394,
        "lift": 1.329594968704863,
        "averagePayoutYen": 2819.918699186992,
        "medianPayoutYen": 1090
      },
      "robustLift": 1.2532961538009013,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 43624,
        "highPayoutCount": 5475,
        "observedRate": 0.12550430955437375,
        "posteriorRate": 0.12521789381680962,
        "lift": 1.2493218197997724,
        "averagePayoutYen": 2241.3753896937465,
        "medianPayoutYen": 990
      },
      "validation": {
        "count": 11935,
        "highPayoutCount": 1528,
        "observedRate": 0.12802681189777965,
        "posteriorRate": 0.126659505093057,
        "lift": 1.3471278108852602,
        "averagePayoutYen": 2362.4759111855888,
        "medianPayoutYen": 1060
      },
      "robustLift": 1.2493218197997724,
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
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 4510,
        "highPayoutCount": 574,
        "observedRate": 0.12727272727272726,
        "posteriorRate": 0.1245538430368534,
        "lift": 1.2451710149023487,
        "averagePayoutYen": 6676.7427937915745,
        "medianPayoutYen": 2130
      },
      "validation": {
        "count": 1399,
        "highPayoutCount": 187,
        "observedRate": 0.13366690493209435,
        "posteriorRate": 0.12396259206918829,
        "lift": 1.2804740059503796,
        "averagePayoutYen": 6875.039313795568,
        "medianPayoutYen": 2340
      },
      "robustLift": 1.2451710149023487,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 13024,
        "highPayoutCount": 1635,
        "observedRate": 0.12553746928746928,
        "posteriorRate": 0.12460177068714189,
        "lift": 1.2431746466912443,
        "averagePayoutYen": 2246.143273955774,
        "medianPayoutYen": 1010
      },
      "validation": {
        "count": 4019,
        "highPayoutCount": 559,
        "observedRate": 0.13908932570291116,
        "posteriorRate": 0.13410288688474528,
        "lift": 1.4262942864786492,
        "averagePayoutYen": 2605.260014929087,
        "medianPayoutYen": 1120
      },
      "robustLift": 1.2431746466912443,
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
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 10809,
        "highPayoutCount": 1356,
        "observedRate": 0.12545101304468498,
        "posteriorRate": 0.12433586937597549,
        "lift": 1.2405217006958458,
        "averagePayoutYen": 2168.0941807752797,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 3506,
        "highPayoutCount": 436,
        "observedRate": 0.12435824301197947,
        "posteriorRate": 0.12057187864008084,
        "lift": 1.2823809062525613,
        "averagePayoutYen": 2222.2960638904733,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2405217006958458,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 5871,
        "highPayoutCount": 742,
        "observedRate": 0.1263839209674672,
        "posteriorRate": 0.12433124262641765,
        "lift": 1.2404755387696134,
        "averagePayoutYen": 2279.005280190768,
        "medianPayoutYen": 1010
      },
      "validation": {
        "count": 1985,
        "highPayoutCount": 251,
        "observedRate": 0.12644836272040302,
        "posteriorRate": 0.11992392186404985,
        "lift": 1.2754893540346557,
        "averagePayoutYen": 2165.9798488664987,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2404755387696134,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 13392,
        "highPayoutCount": 1699,
        "observedRate": 0.12686678614097968,
        "posteriorRate": 0.12590802956902583,
        "lift": 1.2562074303749593,
        "averagePayoutYen": 2219.9955197132617,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 3591,
        "highPayoutCount": 430,
        "observedRate": 0.11974380395433026,
        "posteriorRate": 0.11660008453487263,
        "lift": 1.2401376155156751,
        "averagePayoutYen": 2291.1389585073794,
        "medianPayoutYen": 1060
      },
      "robustLift": 1.2401376155156751,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 4283,
        "highPayoutCount": 543,
        "observedRate": 0.126780294186318,
        "posteriorRate": 0.1239838498044398,
        "lift": 1.2394727639741783,
        "averagePayoutYen": 6040.957272939529,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 1247,
        "highPayoutCount": 163,
        "observedRate": 0.13071371291098638,
        "posteriorRate": 0.12101028181991332,
        "lift": 1.2499780598056949,
        "averagePayoutYen": 6638.420208500401,
        "medianPayoutYen": 2430
      },
      "robustLift": 1.2394727639741783,
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
      "betType": "複勝",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 9835,
        "highPayoutCount": 1242,
        "observedRate": 0.1262836807320793,
        "posteriorRate": 0.12501733363949913,
        "lift": 1.248821033948455,
        "averagePayoutYen": 391.55871886120997,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 2405,
        "highPayoutCount": 292,
        "observedRate": 0.12141372141372142,
        "posteriorRate": 0.1167592734563398,
        "lift": 1.2372318277438759,
        "averagePayoutYen": 386.08316008316007,
        "medianPayoutYen": 220
      },
      "robustLift": 1.2372318277438759,
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
      "betType": "複勝",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 11411,
        "highPayoutCount": 1420,
        "observedRate": 0.1244413285426343,
        "posteriorRate": 0.12341987601076512,
        "lift": 1.2328637372318485,
        "averagePayoutYen": 390.7238629392691,
        "medianPayoutYen": 250
      },
      "validation": {
        "count": 3922,
        "highPayoutCount": 488,
        "observedRate": 0.12442631310555839,
        "posteriorRate": 0.12102797136831006,
        "lift": 1.2824647995102538,
        "averagePayoutYen": 388.6409994900561,
        "medianPayoutYen": 250
      },
      "robustLift": 1.2328637372318485,
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
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 24202,
        "highPayoutCount": 2988,
        "observedRate": 0.1234608710023965,
        "posteriorRate": 0.12299062208618357,
        "lift": 1.2270999225383064,
        "averagePayoutYen": 2193.564168250558,
        "medianPayoutYen": 990
      },
      "validation": {
        "count": 6455,
        "highPayoutCount": 779,
        "observedRate": 0.12068164213787762,
        "posteriorRate": 0.11876505331878705,
        "lift": 1.263163835745786,
        "averagePayoutYen": 2316.5143299767624,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.2270999225383064,
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
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 3287,
        "highPayoutCount": 434,
        "observedRate": 0.13203529053848495,
        "posteriorRate": 0.12780954676911424,
        "lift": 1.277718448379139,
        "averagePayoutYen": 6868.393672041375,
        "medianPayoutYen": 2440
      },
      "validation": {
        "count": 801,
        "highPayoutCount": 106,
        "observedRate": 0.132334581772784,
        "posteriorRate": 0.11868175429622488,
        "lift": 1.22592548945803,
        "averagePayoutYen": 7052.259675405743,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.22592548945803,
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
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 2585,
        "highPayoutCount": 328,
        "observedRate": 0.12688588007736945,
        "posteriorRate": 0.12256542845150951,
        "lift": 1.2228576879083626,
        "averagePayoutYen": 2347.8104448742747,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 1028,
        "highPayoutCount": 129,
        "observedRate": 0.1254863813229572,
        "posteriorRate": 0.1151904095760235,
        "lift": 1.225144565132453,
        "averagePayoutYen": 2449.795719844358,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2228576879083626,
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
      "betType": "複勝",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 14112,
        "highPayoutCount": 1735,
        "observedRate": 0.12294501133786848,
        "posteriorRate": 0.12216357399152912,
        "lift": 1.2203143063574236,
        "averagePayoutYen": 382.78202947845807,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 4015,
        "highPayoutCount": 503,
        "observedRate": 0.12528019925280198,
        "posteriorRate": 0.12185729554610567,
        "lift": 1.2912526776625612,
        "averagePayoutYen": 394.7098381070984,
        "medianPayoutYen": 230
      },
      "robustLift": 1.2203143063574236,
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
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 1703,
        "highPayoutCount": 224,
        "observedRate": 0.1315325895478567,
        "posteriorRate": 0.1243825481682413,
        "lift": 1.2434585715108253,
        "averagePayoutYen": 6556.18320610687,
        "medianPayoutYen": 2240
      },
      "validation": {
        "count": 563,
        "highPayoutCount": 77,
        "observedRate": 0.13676731793960922,
        "posteriorRate": 0.11797268329199301,
        "lift": 1.2186011267278178,
        "averagePayoutYen": 6982.6998223801065,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.2186011267278178,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 21839,
        "highPayoutCount": 2678,
        "observedRate": 0.12262466230138742,
        "posteriorRate": 0.12212338720501843,
        "lift": 1.2184473615751252,
        "averagePayoutYen": 2234.507532396172,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 4271,
        "highPayoutCount": 514,
        "observedRate": 0.12034652306251463,
        "posteriorRate": 0.11758770610609177,
        "lift": 1.2506417816597164,
        "averagePayoutYen": 2249.20159213299,
        "medianPayoutYen": 980
      },
      "robustLift": 1.2184473615751252,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 1633,
        "highPayoutCount": 215,
        "observedRate": 0.1316595223515003,
        "posteriorRate": 0.12424507905046207,
        "lift": 1.2420842858466548,
        "averagePayoutYen": 6413.429271279853,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 83,
        "observedRate": 0.13495934959349593,
        "posteriorRate": 0.1178519841608866,
        "lift": 1.2173543627053596,
        "averagePayoutYen": 6894.715447154472,
        "medianPayoutYen": 2520
      },
      "robustLift": 1.2173543627053596,
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
      "betType": "複勝",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 8188,
        "highPayoutCount": 1007,
        "observedRate": 0.12298485588666341,
        "posteriorRate": 0.12166829456310123,
        "lift": 1.2153668694709012,
        "averagePayoutYen": 394.3600390815828,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 1886,
        "highPayoutCount": 236,
        "observedRate": 0.12513255567338283,
        "posteriorRate": 0.11868637443028797,
        "lift": 1.2576522242542776,
        "averagePayoutYen": 374.9893955461294,
        "medianPayoutYen": 220
      },
      "robustLift": 1.2153668694709012,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 58781,
        "highPayoutCount": 7156,
        "observedRate": 0.12174001803303788,
        "posteriorRate": 0.12155756723341751,
        "lift": 1.2142607939026868,
        "averagePayoutYen": 384.71904186727005,
        "medianPayoutYen": 240
      },
      "validation": {
        "count": 15532,
        "highPayoutCount": 1864,
        "observedRate": 0.12001030131341746,
        "posteriorRate": 0.11921068421847975,
        "lift": 1.2632080378384645,
        "averagePayoutYen": 383.801184651043,
        "medianPayoutYen": 240
      },
      "robustLift": 1.2142607939026868,
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
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 3665,
        "highPayoutCount": 464,
        "observedRate": 0.12660300136425648,
        "posteriorRate": 0.12342236330473552,
        "lift": 1.2328885832666936,
        "averagePayoutYen": 395.7162346521146,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 901,
        "highPayoutCount": 113,
        "observedRate": 0.12541620421753608,
        "posteriorRate": 0.11433668050725705,
        "lift": 1.211560983676883,
        "averagePayoutYen": 370.57713651498335,
        "medianPayoutYen": 220
      },
      "robustLift": 1.211560983676883,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 2344,
        "highPayoutCount": 295,
        "observedRate": 0.12585324232081913,
        "posteriorRate": 0.12134822319722463,
        "lift": 1.210713408548595,
        "averagePayoutYen": 2281.2627986348125,
        "medianPayoutYen": 1100
      },
      "validation": {
        "count": 941,
        "highPayoutCount": 150,
        "observedRate": 0.1594048884165781,
        "posteriorRate": 0.13671821362398606,
        "lift": 1.4541104332604846,
        "averagePayoutYen": 2603.5494155154092,
        "medianPayoutYen": 1310
      },
      "robustLift": 1.210713408548595,
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
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 4056,
        "highPayoutCount": 505,
        "observedRate": 0.1245069033530572,
        "posteriorRate": 0.1218424817324203,
        "lift": 1.2156447163179591,
        "averagePayoutYen": 2113.2790927021697,
        "medianPayoutYen": 890
      },
      "validation": {
        "count": 1412,
        "highPayoutCount": 170,
        "observedRate": 0.12039660056657224,
        "posteriorRate": 0.1134994486569895,
        "lift": 1.2071598076562793,
        "averagePayoutYen": 2177.096317280453,
        "medianPayoutYen": 980
      },
      "robustLift": 1.2071598076562793,
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
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 23907,
        "highPayoutCount": 2902,
        "observedRate": 0.1213870414522943,
        "posteriorRate": 0.12095359309923,
        "lift": 1.2067761119119365,
        "averagePayoutYen": 2185.966453340026,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 7847,
        "highPayoutCount": 905,
        "observedRate": 0.11533069963043201,
        "posteriorRate": 0.11405426450606972,
        "lift": 1.2130607296570937,
        "averagePayoutYen": 2202.441697463999,
        "medianPayoutYen": 880
      },
      "robustLift": 1.2067761119119365,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 5388,
        "highPayoutCount": 662,
        "observedRate": 0.1228656273199703,
        "posteriorRate": 0.12094333335137684,
        "lift": 1.2066737485318484,
        "averagePayoutYen": 2208.3667409057166,
        "medianPayoutYen": 1090
      },
      "validation": {
        "count": 1468,
        "highPayoutCount": 182,
        "observedRate": 0.12397820163487738,
        "posteriorRate": 0.11636735052447353,
        "lift": 1.2376622982647738,
        "averagePayoutYen": 2177.302452316076,
        "medianPayoutYen": 1150
      },
      "robustLift": 1.2066737485318484,
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
      "betType": "複勝",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 88333,
        "highPayoutCount": 10717,
        "observedRate": 0.12132498613202314,
        "posteriorRate": 0.1212055671109185,
        "lift": 1.2107446002347206,
        "averagePayoutYen": 382.5231793327522,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 21128,
        "highPayoutCount": 2415,
        "observedRate": 0.11430329420673987,
        "posteriorRate": 0.11384250459546269,
        "lift": 1.2063244816974068,
        "averagePayoutYen": 377.4233244982961,
        "medianPayoutYen": 220
      },
      "robustLift": 1.2063244816974068,
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
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 5315,
        "highPayoutCount": 651,
        "observedRate": 0.12248353715898401,
        "posteriorRate": 0.12055283811085736,
        "lift": 1.2051727680168012,
        "averagePayoutYen": 6136.220131702728,
        "medianPayoutYen": 2160
      },
      "validation": {
        "count": 1702,
        "highPayoutCount": 225,
        "observedRate": 0.13219741480611047,
        "posteriorRate": 0.12416210823768782,
        "lift": 1.282534912093645,
        "averagePayoutYen": 6670.793184488836,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.2051727680168012,
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
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 16737,
        "highPayoutCount": 2026,
        "observedRate": 0.12104917249208341,
        "posteriorRate": 0.12043944732927049,
        "lift": 1.2040391946870137,
        "averagePayoutYen": 6414.017446376292,
        "medianPayoutYen": 2200
      },
      "validation": {
        "count": 3974,
        "highPayoutCount": 492,
        "observedRate": 0.12380473074987418,
        "posteriorRate": 0.12078787714335909,
        "lift": 1.247680726373279,
        "averagePayoutYen": 6807.108706592853,
        "medianPayoutYen": 2380
      },
      "robustLift": 1.2040391946870137,
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
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 2118,
        "highPayoutCount": 281,
        "observedRate": 0.13267233238904627,
        "posteriorRate": 0.1264380265907699,
        "lift": 1.2640072923779326,
        "averagePayoutYen": 6745.368271954674,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 662,
        "highPayoutCount": 87,
        "observedRate": 0.13141993957703926,
        "posteriorRate": 0.11652750631616916,
        "lift": 1.203673143046196,
        "averagePayoutYen": 6341.027190332326,
        "medianPayoutYen": 2390
      },
      "robustLift": 1.203673143046196,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 738,
        "highPayoutCount": 99,
        "observedRate": 0.13414634146341464,
        "posteriorRate": 0.1203673292525328,
        "lift": 1.2033182266573264,
        "averagePayoutYen": 6309.132791327913,
        "medianPayoutYen": 2370
      },
      "validation": {
        "count": 164,
        "highPayoutCount": 29,
        "observedRate": 0.17682926829268292,
        "posteriorRate": 0.11657373846293458,
        "lift": 1.2041506989054616,
        "averagePayoutYen": 9076.280487804877,
        "medianPayoutYen": 2550
      },
      "robustLift": 1.2033182266573264,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 40787,
        "highPayoutCount": 4926,
        "observedRate": 0.12077377595802584,
        "posteriorRate": 0.12052496782941137,
        "lift": 1.2024996392307605,
        "averagePayoutYen": 2226.6884056194376,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 13804,
        "highPayoutCount": 1676,
        "observedRate": 0.12141408287452912,
        "posteriorRate": 0.12045658178356851,
        "lift": 1.2811546295368794,
        "averagePayoutYen": 2272.353665604173,
        "medianPayoutYen": 950
      },
      "robustLift": 1.2024996392307605,
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
      "betType": "単勝",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 2100,
      "discovery": {
        "count": 2730,
        "highPayoutCount": 338,
        "observedRate": 0.12380952380952381,
        "posteriorRate": 0.12014177066591673,
        "lift": 1.2000276126512213,
        "averagePayoutYen": 1156.5457875457876,
        "medianPayoutYen": 520
      },
      "validation": {
        "count": 629,
        "highPayoutCount": 88,
        "observedRate": 0.13990461049284578,
        "posteriorRate": 0.11890538837021757,
        "lift": 1.2856253419137322,
        "averagePayoutYen": 1155.7074721780605,
        "medianPayoutYen": 500
      },
      "robustLift": 1.2000276126512213,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 5378,
        "highPayoutCount": 655,
        "observedRate": 0.12179248791372257,
        "posteriorRate": 0.11994126465032928,
        "lift": 1.1990588374630262,
        "averagePayoutYen": 6103.01041279286,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 1730,
        "highPayoutCount": 228,
        "observedRate": 0.13179190751445086,
        "posteriorRate": 0.12394841360510699,
        "lift": 1.2803275492298694,
        "averagePayoutYen": 6619.225433526011,
        "medianPayoutYen": 2490
      },
      "robustLift": 1.1990588374630262,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 2100,
      "discovery": {
        "count": 4131,
        "highPayoutCount": 505,
        "observedRate": 0.12224642943597192,
        "posteriorRate": 0.11985703287646535,
        "lift": 1.1971835293002517,
        "averagePayoutYen": 1099.3149358508836,
        "medianPayoutYen": 480
      },
      "validation": {
        "count": 1166,
        "highPayoutCount": 152,
        "observedRate": 0.13036020583190394,
        "posteriorRate": 0.11899410772507542,
        "lift": 1.2865845907121833,
        "averagePayoutYen": 1226.114922813036,
        "medianPayoutYen": 510
      },
      "robustLift": 1.1971835293002517,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 156988,
        "highPayoutCount": 18837,
        "observedRate": 0.11999006293474661,
        "posteriorRate": 0.1199273236486139,
        "lift": 1.1965368339735585,
        "averagePayoutYen": 2188.7823273116414,
        "medianPayoutYen": 970
      },
      "validation": {
        "count": 46877,
        "highPayoutCount": 5596,
        "observedRate": 0.11937623994709559,
        "posteriorRate": 0.1191086591770725,
        "lift": 1.2668183661131622,
        "averagePayoutYen": 2259.286643769866,
        "medianPayoutYen": 970
      },
      "robustLift": 1.1965368339735585,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 37377,
        "highPayoutCount": 4479,
        "observedRate": 0.11983305241191107,
        "posteriorRate": 0.11957163327651704,
        "lift": 1.1953636140829387,
        "averagePayoutYen": 6568.967279342912,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 9543,
        "highPayoutCount": 1123,
        "observedRate": 0.11767787907366656,
        "posteriorRate": 0.11663894875429538,
        "lift": 1.2048242898784653,
        "averagePayoutYen": 6450.436969506444,
        "medianPayoutYen": 2150
      },
      "robustLift": 1.1953636140829387,
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
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 15554,
        "highPayoutCount": 1869,
        "observedRate": 0.12016201620162016,
        "posteriorRate": 0.11953499150458674,
        "lift": 1.1949973044514586,
        "averagePayoutYen": 6579.58595859586,
        "medianPayoutYen": 2120
      },
      "validation": {
        "count": 4600,
        "highPayoutCount": 568,
        "observedRate": 0.12347826086956522,
        "posteriorRate": 0.12086371810576246,
        "lift": 1.2484641270695922,
        "averagePayoutYen": 6561.210869565218,
        "medianPayoutYen": 2170
      },
      "robustLift": 1.1949973044514586,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 59589,
        "highPayoutCount": 7132,
        "observedRate": 0.11968651932403632,
        "posteriorRate": 0.11952295351253367,
        "lift": 1.1948769600412288,
        "averagePayoutYen": 6482.22893487053,
        "medianPayoutYen": 2160
      },
      "validation": {
        "count": 15627,
        "highPayoutCount": 1895,
        "observedRate": 0.12126447814679721,
        "posteriorRate": 0.12050629145776576,
        "lift": 1.2447720815568757,
        "averagePayoutYen": 6591.846803609138,
        "medianPayoutYen": 2210
      },
      "robustLift": 1.1948769600412288,
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
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 2774,
        "highPayoutCount": 383,
        "observedRate": 0.1380677721701514,
        "posteriorRate": 0.13228904910595812,
        "lift": 1.3198720289164496,
        "averagePayoutYen": 2512.984859408796,
        "medianPayoutYen": 1050
      },
      "validation": {
        "count": 907,
        "highPayoutCount": 111,
        "observedRate": 0.12238147739801543,
        "posteriorRate": 0.11230344408824727,
        "lift": 1.1944393172729106,
        "averagePayoutYen": 2205.6670341786107,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.1944393172729106,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 87180,
        "highPayoutCount": 10430,
        "observedRate": 0.1196375315439321,
        "posteriorRate": 0.11952616495397152,
        "lift": 1.193968744623358,
        "averagePayoutYen": 380.6390227116311,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 20250,
        "highPayoutCount": 2294,
        "observedRate": 0.11328395061728395,
        "posteriorRate": 0.11282822599473094,
        "lift": 1.195576746379457,
        "averagePayoutYen": 376.29382716049383,
        "medianPayoutYen": 230
      },
      "robustLift": 1.193968744623358,
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
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 52995,
        "highPayoutCount": 6342,
        "observedRate": 0.11967166713840928,
        "posteriorRate": 0.11948994012100023,
        "lift": 1.192172978553117,
        "averagePayoutYen": 2179.996037362015,
        "medianPayoutYen": 970
      },
      "validation": {
        "count": 14442,
        "highPayoutCount": 1629,
        "observedRate": 0.11279601163273785,
        "posteriorRate": 0.11216777846554438,
        "lift": 1.1929964020081631,
        "averagePayoutYen": 2252.7980889073538,
        "medianPayoutYen": 970
      },
      "robustLift": 1.192172978553117,
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
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 10721,
        "highPayoutCount": 1286,
        "observedRate": 0.11995149706184124,
        "posteriorRate": 0.11906378697216251,
        "lift": 1.1902866491110877,
        "averagePayoutYen": 6378.015110530734,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 2495,
        "highPayoutCount": 313,
        "observedRate": 0.1254509018036072,
        "posteriorRate": 0.12066943650730838,
        "lift": 1.246457291519428,
        "averagePayoutYen": 6760.112224448898,
        "medianPayoutYen": 2470
      },
      "robustLift": 1.1902866491110877,
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
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 115860,
        "highPayoutCount": 13821,
        "observedRate": 0.11929052304505437,
        "posteriorRate": 0.119208614186773,
        "lift": 1.1893661382734058,
        "averagePayoutYen": 2179.2147419299154,
        "medianPayoutYen": 970
      },
      "validation": {
        "count": 32583,
        "highPayoutCount": 3853,
        "observedRate": 0.1182518491237762,
        "posteriorRate": 0.1178856496034871,
        "lift": 1.2538106553349986,
        "averagePayoutYen": 2246.1584261731577,
        "medianPayoutYen": 970
      },
      "robustLift": 1.1893661382734058,
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
      "betType": "馬連",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 4360,
        "highPayoutCount": 528,
        "observedRate": 0.12110091743119267,
        "posteriorRate": 0.11893307687543941,
        "lift": 1.1889799337193634,
        "averagePayoutYen": 6046.325688073394,
        "medianPayoutYen": 2080
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 165,
        "observedRate": 0.12643678160919541,
        "posteriorRate": 0.11822989603290225,
        "lift": 1.2212580107380338,
        "averagePayoutYen": 6476.72030651341,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.1889799337193634,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 3385,
        "highPayoutCount": 412,
        "observedRate": 0.12171344165435746,
        "posteriorRate": 0.11892271650312371,
        "lift": 1.1888763605577766,
        "averagePayoutYen": 6054.23929098966,
        "medianPayoutYen": 2140
      },
      "validation": {
        "count": 1055,
        "highPayoutCount": 132,
        "observedRate": 0.12511848341232226,
        "posteriorRate": 0.11601605295137528,
        "lift": 1.1983900755663799,
        "averagePayoutYen": 6091.563981042654,
        "medianPayoutYen": 2350
      },
      "robustLift": 1.1888763605577766,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 98754,
        "highPayoutCount": 11771,
        "observedRate": 0.11919517184114062,
        "posteriorRate": 0.11909962668278264,
        "lift": 1.188278750020255,
        "averagePayoutYen": 2197.4475970593594,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 28641,
        "highPayoutCount": 3345,
        "observedRate": 0.11679061485283335,
        "posteriorRate": 0.11639995009890408,
        "lift": 1.2380090214996873,
        "averagePayoutYen": 2221.8763311336893,
        "medianPayoutYen": 950
      },
      "robustLift": 1.188278750020255,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 25286,
        "highPayoutCount": 3066,
        "observedRate": 0.12125286719924068,
        "posteriorRate": 0.12084286601893367,
        "lift": 1.2071215126234232,
        "averagePayoutYen": 380.84829549948586,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 4267,
        "highPayoutCount": 487,
        "observedRate": 0.11413170846027654,
        "posteriorRate": 0.11205909154408791,
        "lift": 1.1874266646430742,
        "averagePayoutYen": 368.5048043121631,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1874266646430742,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 6338,
        "highPayoutCount": 791,
        "observedRate": 0.12480277690123068,
        "posteriorRate": 0.12300590037626599,
        "lift": 1.2272523568317397,
        "averagePayoutYen": 2189.941621962764,
        "medianPayoutYen": 990
      },
      "validation": {
        "count": 1677,
        "highPayoutCount": 196,
        "observedRate": 0.11687537268932618,
        "posteriorRate": 0.11162652541670368,
        "lift": 1.187239731521538,
        "averagePayoutYen": 2027.9367918902803,
        "medianPayoutYen": 940
      },
      "robustLift": 1.187239731521538,
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
      "betType": "複勝",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 50129,
        "highPayoutCount": 5962,
        "observedRate": 0.11893315246663608,
        "posteriorRate": 0.11874724255198055,
        "lift": 1.186187946144445,
        "averagePayoutYen": 379.5790859582278,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 11915,
        "highPayoutCount": 1373,
        "observedRate": 0.11523289970625263,
        "posteriorRate": 0.11439272568591762,
        "lift": 1.2121548626620615,
        "averagePayoutYen": 380.68233319345364,
        "medianPayoutYen": 220
      },
      "robustLift": 1.186187946144445,
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
      "betType": "馬連",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 4713,
        "highPayoutCount": 568,
        "observedRate": 0.12051771695310842,
        "posteriorRate": 0.11855260955584798,
        "lift": 1.1851763828459256,
        "averagePayoutYen": 6495.775514534267,
        "medianPayoutYen": 2300
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 184,
        "observedRate": 0.1372110365398956,
        "posteriorRate": 0.1262384369035245,
        "lift": 1.3039823894336602,
        "averagePayoutYen": 7348.337061894109,
        "medianPayoutYen": 2510
      },
      "robustLift": 1.1851763828459256,
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
        "venue=10",
        "going=重"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 1285,
        "highPayoutCount": 165,
        "observedRate": 0.12840466926070038,
        "posteriorRate": 0.1205122390884632,
        "lift": 1.2023726422551655,
        "averagePayoutYen": 2275.7665369649803,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 884,
        "highPayoutCount": 107,
        "observedRate": 0.12104072398190045,
        "posteriorRate": 0.11127958513884675,
        "lift": 1.183549736864809,
        "averagePayoutYen": 2264.920814479638,
        "medianPayoutYen": 1020
      },
      "robustLift": 1.183549736864809,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 3926,
        "highPayoutCount": 497,
        "observedRate": 0.12659195109526236,
        "posteriorRate": 0.12361372498258176,
        "lift": 1.2333167340555928,
        "averagePayoutYen": 2190.929699439633,
        "medianPayoutYen": 1120
      },
      "validation": {
        "count": 1073,
        "highPayoutCount": 128,
        "observedRate": 0.11929170549860205,
        "posteriorRate": 0.11125934255064457,
        "lift": 1.1833344403222288,
        "averagePayoutYen": 2289.2637465051257,
        "medianPayoutYen": 1040
      },
      "robustLift": 1.1833344403222288,
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
        "distance=mile",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 2677,
        "highPayoutCount": 350,
        "observedRate": 0.1307433694434068,
        "posteriorRate": 0.1259409338284252,
        "lift": 1.256535722186768,
        "averagePayoutYen": 2220.2726933134104,
        "medianPayoutYen": 990
      },
      "validation": {
        "count": 877,
        "highPayoutCount": 106,
        "observedRate": 0.12086659064994298,
        "posteriorRate": 0.11111906015407691,
        "lift": 1.1818424218775405,
        "averagePayoutYen": 2336.374002280502,
        "medianPayoutYen": 910
      },
      "robustLift": 1.1818424218775405,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=07",
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 14616,
        "highPayoutCount": 1892,
        "observedRate": 0.1294471811713191,
        "posteriorRate": 0.12848070566108144,
        "lift": 1.2818754900995895,
        "averagePayoutYen": 2365.9161193212917,
        "medianPayoutYen": 1050
      },
      "validation": {
        "count": 5018,
        "highPayoutCount": 566,
        "observedRate": 0.11279394180948585,
        "posteriorRate": 0.11109295865026529,
        "lift": 1.1815648109578962,
        "averagePayoutYen": 2175.4025508170585,
        "medianPayoutYen": 970
      },
      "robustLift": 1.1815648109578962,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 19318,
        "highPayoutCount": 2292,
        "observedRate": 0.1186458225489181,
        "posteriorRate": 0.11817812812414087,
        "lift": 1.180502957931057,
        "averagePayoutYen": 379.35604099803294,
        "medianPayoutYen": 240
      },
      "validation": {
        "count": 5312,
        "highPayoutCount": 631,
        "observedRate": 0.11878765060240964,
        "posteriorRate": 0.11668714545606798,
        "lift": 1.236467528215743,
        "averagePayoutYen": 382.98381024096386,
        "medianPayoutYen": 250
      },
      "robustLift": 1.180502957931057,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 46586,
        "highPayoutCount": 5523,
        "observedRate": 0.11855493066586528,
        "posteriorRate": 0.11835904819190891,
        "lift": 1.1823102016109106,
        "averagePayoutYen": 379.2708109732538,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 13787,
        "highPayoutCount": 1544,
        "observedRate": 0.11198955537825488,
        "posteriorRate": 0.11137297468962463,
        "lift": 1.1801562733091395,
        "averagePayoutYen": 370.22122289112934,
        "medianPayoutYen": 210
      },
      "robustLift": 1.1801562733091395,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 2675,
        "highPayoutCount": 325,
        "observedRate": 0.12149532710280374,
        "posteriorRate": 0.1181272891855822,
        "lift": 1.1799951184661814,
        "averagePayoutYen": 380.1906542056075,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 631,
        "highPayoutCount": 86,
        "observedRate": 0.13629160063391443,
        "posteriorRate": 0.11775923023047492,
        "lift": 1.2478278027846994,
        "averagePayoutYen": 372.06022187004754,
        "medianPayoutYen": 250
      },
      "robustLift": 1.1799951184661814,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 43954,
        "highPayoutCount": 5195,
        "observedRate": 0.1181917459161851,
        "posteriorRate": 0.11798746465142926,
        "lift": 1.1795266008958518,
        "averagePayoutYen": 6446.921099331119,
        "medianPayoutYen": 2160
      },
      "validation": {
        "count": 10857,
        "highPayoutCount": 1311,
        "observedRate": 0.12075158883669522,
        "posteriorRate": 0.11969754004925495,
        "lift": 1.2364180681518007,
        "averagePayoutYen": 6595.382702403979,
        "medianPayoutYen": 2220
      },
      "robustLift": 1.1795266008958518,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 23754,
        "highPayoutCount": 2810,
        "observedRate": 0.11829586595941737,
        "posteriorRate": 0.11791930211984149,
        "lift": 1.1788451766493888,
        "averagePayoutYen": 6526.320619685106,
        "medianPayoutYen": 2140
      },
      "validation": {
        "count": 6293,
        "highPayoutCount": 756,
        "observedRate": 0.12013348164627363,
        "posteriorRate": 0.11841674699534648,
        "lift": 1.2231880913890023,
        "averagePayoutYen": 6574.978547592563,
        "medianPayoutYen": 2170
      },
      "robustLift": 1.1788451766493888,
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
      "betType": "馬連",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 7772,
        "highPayoutCount": 930,
        "observedRate": 0.11966031909418424,
        "posteriorRate": 0.11847373713910005,
        "lift": 1.1843878913404426,
        "averagePayoutYen": 6552.627380339681,
        "medianPayoutYen": 2160
      },
      "validation": {
        "count": 2030,
        "highPayoutCount": 240,
        "observedRate": 0.11822660098522167,
        "posteriorRate": 0.1139940562606279,
        "lift": 1.1775038214198499,
        "averagePayoutYen": 6395.152709359606,
        "medianPayoutYen": 2120
      },
      "robustLift": 1.1775038214198499,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 2100,
      "discovery": {
        "count": 29443,
        "highPayoutCount": 3477,
        "observedRate": 0.11809258567401419,
        "posteriorRate": 0.11779240287382396,
        "lift": 1.176561117966167,
        "averagePayoutYen": 1126.7459158373806,
        "medianPayoutYen": 540
      },
      "validation": {
        "count": 7047,
        "highPayoutCount": 802,
        "observedRate": 0.11380729388392223,
        "posteriorRate": 0.11239488319464365,
        "lift": 1.2152326493948893,
        "averagePayoutYen": 1138.6675180928055,
        "medianPayoutYen": 530
      },
      "robustLift": 1.176561117966167,
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
      "betType": "馬連",
      "conditions": [
        "venue=07",
        "field=large"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 5741,
        "highPayoutCount": 737,
        "observedRate": 0.12837484758752832,
        "posteriorRate": 0.12610395026672577,
        "lift": 1.2606675146133735,
        "averagePayoutYen": 6739.75265633165,
        "medianPayoutYen": 2340
      },
      "validation": {
        "count": 1673,
        "highPayoutCount": 199,
        "observedRate": 0.11894799760908548,
        "posteriorRate": 0.11385410139870619,
        "lift": 1.1760581549513953,
        "averagePayoutYen": 6258.619246861925,
        "medianPayoutYen": 2290
      },
      "robustLift": 1.1760581549513953,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 1498,
        "highPayoutCount": 185,
        "observedRate": 0.12349799732977303,
        "posteriorRate": 0.11762500180912693,
        "lift": 1.1759030416847527,
        "averagePayoutYen": 6134.913217623498,
        "medianPayoutYen": 2040
      },
      "validation": {
        "count": 528,
        "highPayoutCount": 73,
        "observedRate": 0.13825757575757575,
        "posteriorRate": 0.11809821239240133,
        "lift": 1.2198977820121273,
        "averagePayoutYen": 7466.420454545455,
        "medianPayoutYen": 2730
      },
      "robustLift": 1.1759030416847527,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=曇"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 43784,
        "highPayoutCount": 5169,
        "observedRate": 0.11805682441074365,
        "posteriorRate": 0.1178555312702761,
        "lift": 1.175866182635668,
        "averagePayoutYen": 2122.341723003837,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 13775,
        "highPayoutCount": 1671,
        "observedRate": 0.12130671506352086,
        "posteriorRate": 0.12035102948036175,
        "lift": 1.2800319941448624,
        "averagePayoutYen": 2308.7709618874774,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.175866182635668,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 2733,
        "highPayoutCount": 346,
        "observedRate": 0.12660080497621662,
        "posteriorRate": 0.12249141775893461,
        "lift": 1.224552845973538,
        "averagePayoutYen": 6432.7735089645075,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 628,
        "highPayoutCount": 80,
        "observedRate": 0.12738853503184713,
        "posteriorRate": 0.11383418647108914,
        "lift": 1.1758524433192137,
        "averagePayoutYen": 6874.490445859873,
        "medianPayoutYen": 2530
      },
      "robustLift": 1.1758524433192137,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 4048,
        "highPayoutCount": 485,
        "observedRate": 0.11981225296442688,
        "posteriorRate": 0.11765926710046325,
        "lift": 1.1739080191310907,
        "averagePayoutYen": 2158.223814229249,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 1846,
        "highPayoutCount": 231,
        "observedRate": 0.12513542795232935,
        "posteriorRate": 0.11850423948515085,
        "lift": 1.2603898665241566,
        "averagePayoutYen": 2276.5059588299023,
        "medianPayoutYen": 1100
      },
      "robustLift": 1.1739080191310907,
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
      "betType": "複勝",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 178530,
        "highPayoutCount": 20969,
        "observedRate": 0.11745364924662521,
        "posteriorRate": 0.11740520663109101,
        "lift": 1.1727821036302057,
        "averagePayoutYen": 376.6247689463956,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 46831,
        "highPayoutCount": 5219,
        "observedRate": 0.11144327475390232,
        "posteriorRate": 0.11126292893432775,
        "lift": 1.178990180827309,
        "averagePayoutYen": 368.6282590591702,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1727821036302057,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 6767,
        "highPayoutCount": 802,
        "observedRate": 0.11851632924486478,
        "posteriorRate": 0.11724435855437396,
        "lift": 1.1720977319786823,
        "averagePayoutYen": 6231.825033249594,
        "medianPayoutYen": 2180
      },
      "validation": {
        "count": 2037,
        "highPayoutCount": 247,
        "observedRate": 0.1212567501227295,
        "posteriorRate": 0.11643869228986543,
        "lift": 1.2027557368339876,
        "averagePayoutYen": 6363.151693667158,
        "medianPayoutYen": 2190
      },
      "robustLift": 1.1720977319786823,
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
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 9192,
        "highPayoutCount": 1092,
        "observedRate": 0.11879895561357702,
        "posteriorRate": 0.11783065967959508,
        "lift": 1.1779590137290492,
        "averagePayoutYen": 6459.363577023499,
        "medianPayoutYen": 2080
      },
      "validation": {
        "count": 2616,
        "highPayoutCount": 305,
        "observedRate": 0.11659021406727829,
        "posteriorRate": 0.11341622668144692,
        "lift": 1.1715351195424517,
        "averagePayoutYen": 6469.071100917431,
        "medianPayoutYen": 1920
      },
      "robustLift": 1.1715351195424517,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "venue=04",
        "distance=mile"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 4063,
        "highPayoutCount": 485,
        "observedRate": 0.11936992370169826,
        "posteriorRate": 0.11725929063428082,
        "lift": 1.1713245220237096,
        "averagePayoutYen": 380.09106571498893,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 945,
        "highPayoutCount": 116,
        "observedRate": 0.12275132275132275,
        "posteriorRate": 0.11293127293471775,
        "lift": 1.1966686763832093,
        "averagePayoutYen": 383.23809523809524,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1713245220237096,
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
      "betType": "ワイド",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 62819,
        "highPayoutCount": 7376,
        "observedRate": 0.11741670513698085,
        "posteriorRate": 0.11728097959179562,
        "lift": 1.1701337754960113,
        "averagePayoutYen": 2157.890765532721,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 18857,
        "highPayoutCount": 2168,
        "observedRate": 0.11497056795884818,
        "posteriorRate": 0.11442945424560438,
        "lift": 1.2170511805286222,
        "averagePayoutYen": 2222.691308267487,
        "medianPayoutYen": 940
      },
      "robustLift": 1.1701337754960113,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 131697,
        "highPayoutCount": 15426,
        "observedRate": 0.11713250871318254,
        "posteriorRate": 0.11706811911892269,
        "lift": 1.1694148747570396,
        "averagePayoutYen": 375.2840991062819,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 32550,
        "highPayoutCount": 3603,
        "observedRate": 0.11069124423963134,
        "posteriorRate": 0.11044434763663137,
        "lift": 1.1703161388850685,
        "averagePayoutYen": 367.5453149001536,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1694148747570396,
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
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 13509,
        "highPayoutCount": 1673,
        "observedRate": 0.12384336368347028,
        "posteriorRate": 0.12299622693727057,
        "lift": 1.2286318290748695,
        "averagePayoutYen": 386.48678658672,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 4184,
        "highPayoutCount": 469,
        "observedRate": 0.11209369024856597,
        "posteriorRate": 0.11020189782038153,
        "lift": 1.1677470356317228,
        "averagePayoutYen": 374.82074569789677,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1677470356317228,
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
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 2082,
        "highPayoutCount": 252,
        "observedRate": 0.12103746397694524,
        "posteriorRate": 0.11700788023737678,
        "lift": 1.1674090133070876,
        "averagePayoutYen": 2158.42939481268,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 620,
        "highPayoutCount": 83,
        "observedRate": 0.1338709677419355,
        "posteriorRate": 0.11608120163586064,
        "lift": 1.2346188699360343,
        "averagePayoutYen": 2325.2419354838707,
        "medianPayoutYen": 1080
      },
      "robustLift": 1.1674090133070876,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=07",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 4675,
        "highPayoutCount": 632,
        "observedRate": 0.13518716577540107,
        "posteriorRate": 0.13180953560829117,
        "lift": 1.315087835082298,
        "averagePayoutYen": 2392.273796791444,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 1268,
        "highPayoutCount": 147,
        "observedRate": 0.11593059936908517,
        "posteriorRate": 0.109734697868871,
        "lift": 1.1671185925575742,
        "averagePayoutYen": 2144.6214511041007,
        "medianPayoutYen": 960
      },
      "robustLift": 1.1671185925575742,
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
      "betType": "複勝",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 670,
      "discovery": {
        "count": 14743,
        "highPayoutCount": 1752,
        "observedRate": 0.11883605779013769,
        "posteriorRate": 0.11822175051920379,
        "lift": 1.180938710021746,
        "averagePayoutYen": 379.20029844672047,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 3588,
        "highPayoutCount": 403,
        "observedRate": 0.11231884057971014,
        "posteriorRate": 0.11012370092726691,
        "lift": 1.1669184274867066,
        "averagePayoutYen": 376.9035674470457,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1669184274867066,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 8600,
        "highPayoutCount": 1014,
        "observedRate": 0.11790697674418604,
        "posteriorRate": 0.11693564250251724,
        "lift": 1.1666882842193986,
        "averagePayoutYen": 2121.772093023256,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 2062,
        "highPayoutCount": 261,
        "observedRate": 0.12657613967022308,
        "posteriorRate": 0.12022285161286647,
        "lift": 1.2786687173034126,
        "averagePayoutYen": 2202.051406401552,
        "medianPayoutYen": 1110
      },
      "robustLift": 1.1666882842193986,
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
      "betType": "ワイド",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 20437,
        "highPayoutCount": 2397,
        "observedRate": 0.11728727308313354,
        "posteriorRate": 0.11687989429110697,
        "lift": 1.1661320741218901,
        "averagePayoutYen": 2178.0750599403045,
        "medianPayoutYen": 940
      },
      "validation": {
        "count": 6087,
        "highPayoutCount": 731,
        "observedRate": 0.12009199934286184,
        "posteriorRate": 0.11811309334024045,
        "lift": 1.2562297061829155,
        "averagePayoutYen": 2221.3799901429275,
        "medianPayoutYen": 940
      },
      "robustLift": 1.1661320741218901,
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
      "betType": "ワイド",
      "conditions": [
        "venue=04",
        "distance=mile"
      ],
      "highPayoutThresholdYen": 4210,
      "discovery": {
        "count": 3143,
        "highPayoutCount": 375,
        "observedRate": 0.11931275851097678,
        "posteriorRate": 0.11669347976198377,
        "lift": 1.1642721822832522,
        "averagePayoutYen": 2271.8962774419347,
        "medianPayoutYen": 1060
      },
      "validation": {
        "count": 953,
        "highPayoutCount": 126,
        "observedRate": 0.1322140608604407,
        "posteriorRate": 0.11907153876955534,
        "lift": 1.2664235601072409,
        "averagePayoutYen": 2356.988457502623,
        "medianPayoutYen": 990
      },
      "robustLift": 1.1642721822832522,
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
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=稍重"
      ],
      "highPayoutThresholdYen": 11920,
      "discovery": {
        "count": 8392,
        "highPayoutCount": 1017,
        "observedRate": 0.12118684461391802,
        "posteriorRate": 0.11999716077537512,
        "lift": 1.1996176338281601,
        "averagePayoutYen": 6578.728551000953,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 2743,
        "highPayoutCount": 317,
        "observedRate": 0.11556689755741889,
        "posteriorRate": 0.11267498067819567,
        "lift": 1.1638784045340396,
        "averagePayoutYen": 6368.7057965730955,
        "medianPayoutYen": 2020
      },
      "robustLift": 1.1638784045340396,
      "usePolicy": "volatility_prior_only"
    }
  ]
};
