window.KEIBA_HISTORICAL_PAYOUT_PATTERNS = {
  "status": "research_only",
  "generatedAt": "2026-07-16T13:01:14.917Z",
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
    "totalRows": 965152,
    "discoveryRows": 695962,
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
    "馬連": 12330,
    "3連複": 47270,
    "ワイド": 4270,
    "馬単": 24600,
    "3連単": 303680
  },
  "baselines": {
    "単勝": {
      "discoveryCount": 59593,
      "validationCount": 22565,
      "discoveryRate": 0.10058228315406172,
      "validationRate": 0.09173498781298471
    },
    "枠連": {
      "discoveryCount": 58301,
      "validationCount": 21360,
      "discoveryRate": 0.10034133205262345,
      "validationRate": 0.09667602996254682
    },
    "複勝": {
      "discoveryCount": 178192,
      "validationCount": 67139,
      "discoveryRate": 0.10066669659692916,
      "validationRate": 0.09014134854555475
    },
    "馬連": {
      "discoveryCount": 59386,
      "validationCount": 22570,
      "discoveryRate": 0.10002357457986731,
      "validationRate": 0.09339831634913602
    },
    "3連複": {
      "discoveryCount": 59408,
      "validationCount": 22585,
      "discoveryRate": 0.10002019929975761,
      "validationRate": 0.08642904582687624
    },
    "ワイド": {
      "discoveryCount": 177355,
      "validationCount": 67697,
      "discoveryRate": 0.10010994897239998,
      "validationRate": 0.09247086281519122
    },
    "馬単": {
      "discoveryCount": 59441,
      "validationCount": 22608,
      "discoveryRate": 0.10001514106424858,
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
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 2937,
        "highPayoutCount": 477,
        "observedRate": 0.16241062308478038,
        "posteriorRate": 0.15333433216464323,
        "lift": 1.5330336595821483,
        "averagePayoutYen": 34639.417773238,
        "medianPayoutYen": 9710
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
      "robustLift": 1.5330336595821483,
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
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 4483,
        "highPayoutCount": 704,
        "observedRate": 0.1570376979701093,
        "posteriorRate": 0.15131649601643163,
        "lift": 1.5128593731646196,
        "averagePayoutYen": 32021.929511487844,
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
      "robustLift": 1.5128593731646196,
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
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 14526,
        "highPayoutCount": 2097,
        "observedRate": 0.14436183395291202,
        "posteriorRate": 0.14288633699253817,
        "lift": 1.4285748078176888,
        "averagePayoutYen": 30895.84744595897,
        "medianPayoutYen": 8930
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
      "robustLift": 1.4285748078176888,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 2936,
        "highPayoutCount": 440,
        "observedRate": 0.14986376021798364,
        "posteriorRate": 0.14261111387949174,
        "lift": 1.4257750183244944,
        "averagePayoutYen": 7531.774523160763,
        "medianPayoutYen": 2810
      },
      "validation": {
        "count": 1310,
        "highPayoutCount": 194,
        "observedRate": 0.1480916030534351,
        "posteriorRate": 0.1329829603174409,
        "lift": 1.4238260978959396,
        "averagePayoutYen": 7617.9312977099235,
        "medianPayoutYen": 2870
      },
      "robustLift": 1.4238260978959396,
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
        "count": 13419,
        "highPayoutCount": 1912,
        "observedRate": 0.14248453685073403,
        "posteriorRate": 0.14096235178433797,
        "lift": 1.4080753534616313,
        "averagePayoutYen": 2456.472166331321,
        "medianPayoutYen": 1180
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
      "robustLift": 1.4080753534616313,
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
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 2934,
        "highPayoutCount": 430,
        "observedRate": 0.1465576005453306,
        "posteriorRate": 0.13978088833201058,
        "lift": 1.3975972722191827,
        "averagePayoutYen": 15167.368779822767,
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
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 7367,
        "highPayoutCount": 1030,
        "observedRate": 0.1398126781593593,
        "posteriorRate": 0.13728360234522421,
        "lift": 1.3725587761906899,
        "averagePayoutYen": 29304.88258449844,
        "medianPayoutYen": 7970
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
      "robustLift": 1.3725587761906899,
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
        "count": 8796,
        "highPayoutCount": 1226,
        "observedRate": 0.13938153706230105,
        "posteriorRate": 0.13726925284920397,
        "lift": 1.3711849247575651,
        "averagePayoutYen": 2469.7885402455663,
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
      "robustLift": 1.3711849247575651,
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
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 14558,
        "highPayoutCount": 1950,
        "observedRate": 0.1339469707377387,
        "posteriorRate": 0.13282054637335194,
        "lift": 1.327892418674727,
        "averagePayoutYen": 7125.587992856162,
        "medianPayoutYen": 2620
      },
      "validation": {
        "count": 5186,
        "highPayoutCount": 729,
        "observedRate": 0.14057076745082916,
        "posteriorRate": 0.13642264477217164,
        "lift": 1.4606542184572646,
        "averagePayoutYen": 7289.20362514462,
        "medianPayoutYen": 2750
      },
      "robustLift": 1.327892418674727,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 21972,
        "highPayoutCount": 2926,
        "observedRate": 0.1331694884398325,
        "posteriorRate": 0.13243191970674076,
        "lift": 1.3240517478859062,
        "averagePayoutYen": 29261.92654287275,
        "medianPayoutYen": 7600
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
      "robustLift": 1.3240517478859062,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 2386,
        "highPayoutCount": 334,
        "observedRate": 0.1399832355406538,
        "posteriorRate": 0.13305963258831557,
        "lift": 1.3303276090216511,
        "averagePayoutYen": 29272.569153394805,
        "medianPayoutYen": 8270
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
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 43524,
        "highPayoutCount": 5779,
        "observedRate": 0.13277731826118924,
        "posteriorRate": 0.1324063005289433,
        "lift": 1.322608810493424,
        "averagePayoutYen": 2366.854608951383,
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
      "robustLift": 1.322608810493424,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 3536,
        "highPayoutCount": 482,
        "observedRate": 0.13631221719457012,
        "posteriorRate": 0.13181617929878067,
        "lift": 1.3178955873076341,
        "averagePayoutYen": 28217.06730769231,
        "medianPayoutYen": 6780
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
      "robustLift": 1.3178955873076341,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 4479,
        "highPayoutCount": 605,
        "observedRate": 0.13507479348068765,
        "posteriorRate": 0.1315540410789565,
        "lift": 1.3153412541251897,
        "averagePayoutYen": 14213.098906005805,
        "medianPayoutYen": 5190
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
      "robustLift": 1.3153412541251897,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 14529,
        "highPayoutCount": 1922,
        "observedRate": 0.13228714983825451,
        "posteriorRate": 0.13121349195103627,
        "lift": 1.3119362783955504,
        "averagePayoutYen": 14164.253561841833,
        "medianPayoutYen": 5030
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
      "robustLift": 1.3119362783955504,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 21596,
        "highPayoutCount": 2849,
        "observedRate": 0.13192257825523246,
        "posteriorRate": 0.13120067431435004,
        "lift": 1.3117417804892135,
        "averagePayoutYen": 29439.373958140397,
        "medianPayoutYen": 7900
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
      "robustLift": 1.3117417804892135,
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
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 22065,
        "highPayoutCount": 2903,
        "observedRate": 0.13156582823476093,
        "posteriorRate": 0.1308688222683891,
        "lift": 1.3072509137375472,
        "averagePayoutYen": 2341.0151824155905,
        "medianPayoutYen": 1090
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
      "robustLift": 1.3072509137375472,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 678,
        "highPayoutCount": 104,
        "observedRate": 0.15339233038348082,
        "posteriorRate": 0.13073862449055926,
        "lift": 1.3071222153711115,
        "averagePayoutYen": 30942.418879056047,
        "medianPayoutYen": 8870
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
      "robustLift": 1.3071222153711115,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 4488,
        "highPayoutCount": 598,
        "observedRate": 0.13324420677361853,
        "posteriorRate": 0.1299141514213981,
        "lift": 1.2988353192443007,
        "averagePayoutYen": 7194.086452762924,
        "medianPayoutYen": 2670
      },
      "validation": {
        "count": 1771,
        "highPayoutCount": 247,
        "observedRate": 0.13946922642574816,
        "posteriorRate": 0.12932591729395335,
        "lift": 1.3846707558465499,
        "averagePayoutYen": 7359.288537549407,
        "medianPayoutYen": 2790
      },
      "robustLift": 1.2988353192443007,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 12178,
        "highPayoutCount": 1596,
        "observedRate": 0.13105600262768927,
        "posteriorRate": 0.12983200028789074,
        "lift": 1.2980578042919915,
        "averagePayoutYen": 28096.478896370503,
        "medianPayoutYen": 7120
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
      "robustLift": 1.2980578042919915,
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
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1493,
        "highPayoutCount": 208,
        "observedRate": 0.13931681178834562,
        "posteriorRate": 0.12948066958665327,
        "lift": 1.293384632753641,
        "averagePayoutYen": 2454.675150703282,
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
      "robustLift": 1.293384632753641,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 6749,
        "highPayoutCount": 887,
        "observedRate": 0.1314268780560083,
        "posteriorRate": 0.12926060141397142,
        "lift": 1.2923449695054214,
        "averagePayoutYen": 27359.77329974811,
        "medianPayoutYen": 7140
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
      "robustLift": 1.2923449695054214,
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
        "count": 10598,
        "highPayoutCount": 1385,
        "observedRate": 0.1306850349122476,
        "posteriorRate": 0.12930753058985403,
        "lift": 1.2916551443403865,
        "averagePayoutYen": 2295.9218720513304,
        "medianPayoutYen": 990
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
      "robustLift": 1.2916551443403865,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 3684,
        "highPayoutCount": 489,
        "observedRate": 0.13273615635179153,
        "posteriorRate": 0.1288265056524567,
        "lift": 1.288004888556235,
        "averagePayoutYen": 27426.129207383277,
        "medianPayoutYen": 7410
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
      "robustLift": 1.288004888556235,
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
        "count": 7151,
        "highPayoutCount": 935,
        "observedRate": 0.13075094392392672,
        "posteriorRate": 0.128748526269272,
        "lift": 1.2860712405793713,
        "averagePayoutYen": 2361.549433645644,
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
      "robustLift": 1.2860712405793713,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 2033,
        "highPayoutCount": 279,
        "observedRate": 0.13723561239547466,
        "posteriorRate": 0.1298894984800153,
        "lift": 1.2986326700943704,
        "averagePayoutYen": 30452.89719626168,
        "medianPayoutYen": 7250
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
      "betType": "複勝",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 9132,
        "highPayoutCount": 1189,
        "observedRate": 0.13020148926850636,
        "posteriorRate": 0.12866832934992367,
        "lift": 1.2781618320616344,
        "averagePayoutYen": 387.0784056066579,
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
      "robustLift": 1.2781618320616344,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 3763,
        "highPayoutCount": 494,
        "observedRate": 0.13127823545043849,
        "posteriorRate": 0.12761203369689864,
        "lift": 1.2758626216535431,
        "averagePayoutYen": 26903.74701036407,
        "medianPayoutYen": 7580
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
      "robustLift": 1.2758626216535431,
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
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 9060,
        "highPayoutCount": 1170,
        "observedRate": 0.1291390728476821,
        "posteriorRate": 0.12762081323077407,
        "lift": 1.274806495665668,
        "averagePayoutYen": 2234.0706401766006,
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
      "robustLift": 1.274806495665668,
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
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 3135,
        "highPayoutCount": 411,
        "observedRate": 0.13110047846889952,
        "posteriorRate": 0.12682533690505607,
        "lift": 1.2679972424866326,
        "averagePayoutYen": 28681.454545454544,
        "medianPayoutYen": 6980
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
      "robustLift": 1.2679972424866326,
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
        "count": 36502,
        "highPayoutCount": 4635,
        "observedRate": 0.1269793435976111,
        "posteriorRate": 0.12661626329620562,
        "lift": 1.2647720291128441,
        "averagePayoutYen": 2282.319598926086,
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
      "robustLift": 1.2647720291128441,
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
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 1485,
        "highPayoutCount": 201,
        "observedRate": 0.13535353535353536,
        "posteriorRate": 0.12645345070522862,
        "lift": 1.2642791315207373,
        "averagePayoutYen": 27638.76767676768,
        "medianPayoutYen": 8100
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
      "robustLift": 1.2642791315207373,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 3021,
        "highPayoutCount": 397,
        "observedRate": 0.13141343925852367,
        "posteriorRate": 0.12695543869635864,
        "lift": 1.2692979976562224,
        "averagePayoutYen": 28044.028467394903,
        "medianPayoutYen": 6810
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
      "robustLift": 1.2624285240993423,
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
        "count": 65842,
        "highPayoutCount": 8319,
        "observedRate": 0.126347923817624,
        "posteriorRate": 0.1261501759742878,
        "lift": 1.260116274847638,
        "averagePayoutYen": 2287.946903192491,
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
      "robustLift": 1.260116274847638,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 503,
        "highPayoutCount": 84,
        "observedRate": 0.16699801192842942,
        "posteriorRate": 0.13360927183437568,
        "lift": 1.3358228914736772,
        "averagePayoutYen": 31311.153081510933,
        "medianPayoutYen": 8090
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
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 6097,
        "highPayoutCount": 780,
        "observedRate": 0.1279317697228145,
        "posteriorRate": 0.12582309754224646,
        "lift": 1.256849082771339,
        "averagePayoutYen": 2357.992455305888,
        "medianPayoutYen": 1000
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
      "robustLift": 1.256849082771339,
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
        "count": 64720,
        "highPayoutCount": 8154,
        "observedRate": 0.12598887515451174,
        "posteriorRate": 0.1257904779896688,
        "lift": 1.2565232455002935,
        "averagePayoutYen": 2299.220179233622,
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
      "robustLift": 1.2565232455002935,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 1233,
        "highPayoutCount": 167,
        "observedRate": 0.1354420113544201,
        "posteriorRate": 0.12522221560870098,
        "lift": 1.2519692670618827,
        "averagePayoutYen": 26820,
        "medianPayoutYen": 7550
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
      "robustLift": 1.2519692670618827,
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
        "count": 2024,
        "highPayoutCount": 265,
        "observedRate": 0.1309288537549407,
        "posteriorRate": 0.12482368244302693,
        "lift": 1.2468659081770228,
        "averagePayoutYen": 2366.2005928853755,
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
      "robustLift": 1.2468659081770228,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 2388,
        "highPayoutCount": 310,
        "observedRate": 0.12981574539363483,
        "posteriorRate": 0.12465782108377203,
        "lift": 1.2462844045254016,
        "averagePayoutYen": 6985.0544388609715,
        "medianPayoutYen": 2480
      },
      "validation": {
        "count": 801,
        "highPayoutCount": 106,
        "observedRate": 0.132334581772784,
        "posteriorRate": 0.11737060582211224,
        "lift": 1.256667254935993,
        "averagePayoutYen": 7052.259675405743,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.2462844045254016,
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
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 11278,
        "highPayoutCount": 1417,
        "observedRate": 0.1256428444759709,
        "posteriorRate": 0.12455892125031415,
        "lift": 1.2442212040748784,
        "averagePayoutYen": 2236.5011526866465,
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
      "robustLift": 1.2442212040748784,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 2396,
        "highPayoutCount": 310,
        "observedRate": 0.1293823038397329,
        "posteriorRate": 0.12431287971335593,
        "lift": 1.2428777445323207,
        "averagePayoutYen": 25411.844741235393,
        "medianPayoutYen": 7390
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
      "robustLift": 1.2428777445323207,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 3961,
        "highPayoutCount": 504,
        "observedRate": 0.1272405958091391,
        "posteriorRate": 0.12418966591568681,
        "lift": 1.2416458553886103,
        "averagePayoutYen": 27996.29891441555,
        "medianPayoutYen": 7070
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
      "robustLift": 1.2416458553886103,
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
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 6460,
        "highPayoutCount": 823,
        "observedRate": 0.12739938080495355,
        "posteriorRate": 0.12543248558187914,
        "lift": 1.2540715421488178,
        "averagePayoutYen": 28805.970588235294,
        "medianPayoutYen": 6440
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
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 21600,
        "highPayoutCount": 2685,
        "observedRate": 0.12430555555555556,
        "posteriorRate": 0.12375599866661195,
        "lift": 1.2373726352804173,
        "averagePayoutYen": 13816.525925925926,
        "medianPayoutYen": 4750
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
      "robustLift": 1.2373726352804173,
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
        "count": 20054,
        "highPayoutCount": 2495,
        "observedRate": 0.12441408197865762,
        "posteriorRate": 0.123822855623538,
        "lift": 1.236868631884685,
        "averagePayoutYen": 2227.4758152986933,
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
      "robustLift": 1.236868631884685,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 4005,
        "highPayoutCount": 507,
        "observedRate": 0.12659176029962546,
        "posteriorRate": 0.12364264143171562,
        "lift": 1.2361767152769036,
        "averagePayoutYen": 27884.34956304619,
        "medianPayoutYen": 6930
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
      "robustLift": 1.2361767152769036,
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
        "count": 11043,
        "highPayoutCount": 1378,
        "observedRate": 0.1247849316308974,
        "posteriorRate": 0.12371610278837392,
        "lift": 1.235802275980403,
        "averagePayoutYen": 2267.938965860726,
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
      "robustLift": 1.235802275980403,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 7384,
        "highPayoutCount": 924,
        "observedRate": 0.12513542795232935,
        "posteriorRate": 0.12354284465879423,
        "lift": 1.2351372681661874,
        "averagePayoutYen": 6812.0977789815815,
        "medianPayoutYen": 2460
      },
      "validation": {
        "count": 2495,
        "highPayoutCount": 306,
        "observedRate": 0.12264529058116233,
        "posteriorRate": 0.11776265715344508,
        "lift": 1.2608648823307664,
        "averagePayoutYen": 6760.112224448898,
        "medianPayoutYen": 2470
      },
      "robustLift": 1.2351372681661874,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 2447,
        "highPayoutCount": 314,
        "observedRate": 0.128320392317123,
        "posteriorRate": 0.12351886652523882,
        "lift": 1.234939216178288,
        "averagePayoutYen": 26321.0257458112,
        "medianPayoutYen": 7410
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
      "robustLift": 1.234939216178288,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 21651,
        "highPayoutCount": 2683,
        "observedRate": 0.12392037319292411,
        "posteriorRate": 0.12338096642544055,
        "lift": 1.2335188673638404,
        "averagePayoutYen": 6900.024941111265,
        "medianPayoutYen": 2440
      },
      "validation": {
        "count": 6761,
        "highPayoutCount": 859,
        "observedRate": 0.12705221121135926,
        "posteriorRate": 0.12473476906411898,
        "lift": 1.3355141071049172,
        "averagePayoutYen": 6929.587339151013,
        "medianPayoutYen": 2540
      },
      "robustLift": 1.2335188673638404,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 1300,
        "highPayoutCount": 180,
        "observedRate": 0.13846153846153847,
        "posteriorRate": 0.1277833886943771,
        "lift": 1.2775758255731329,
        "averagePayoutYen": 33022.123076923075,
        "medianPayoutYen": 7100
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
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 5231,
        "highPayoutCount": 657,
        "observedRate": 0.12559740011470083,
        "posteriorRate": 0.12337375230957948,
        "lift": 1.23238253116674,
        "averagePayoutYen": 2246.7539667367614,
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
      "robustLift": 1.23238253116674,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 3212,
        "highPayoutCount": 407,
        "observedRate": 0.1267123287671233,
        "posteriorRate": 0.123116944948782,
        "lift": 1.2309208121032045,
        "averagePayoutYen": 28007.758405977584,
        "medianPayoutYen": 6710
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
      "robustLift": 1.2309208121032045,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 21976,
        "highPayoutCount": 2716,
        "observedRate": 0.12358937022206043,
        "posteriorRate": 0.12306493906976883,
        "lift": 1.230463085491359,
        "averagePayoutYen": 13660.244812522753,
        "medianPayoutYen": 4560
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
      "robustLift": 1.230463085491359,
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
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 3763,
        "highPayoutCount": 478,
        "observedRate": 0.12702630879617327,
        "posteriorRate": 0.12385821499697966,
        "lift": 1.2383946438411215,
        "averagePayoutYen": 13970.794578793515,
        "medianPayoutYen": 4550
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
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1832,
        "highPayoutCount": 236,
        "observedRate": 0.12882096069868995,
        "posteriorRate": 0.12266508339888506,
        "lift": 1.225303625244115,
        "averagePayoutYen": 2264.759825327511,
        "medianPayoutYen": 1080
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
      "robustLift": 1.225303625244115,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 21996,
        "highPayoutCount": 2705,
        "observedRate": 0.12297690489179851,
        "posteriorRate": 0.12246674018891952,
        "lift": 1.2243787597406017,
        "averagePayoutYen": 6737.309056192035,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 7053,
        "highPayoutCount": 892,
        "observedRate": 0.1264710052459946,
        "posteriorRate": 0.12428163089826134,
        "lift": 1.3306624332892594,
        "averagePayoutYen": 7052.044520062384,
        "medianPayoutYen": 2370
      },
      "robustLift": 1.2243787597406017,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 3128,
        "highPayoutCount": 394,
        "observedRate": 0.12595907928388747,
        "posteriorRate": 0.12238472637539516,
        "lift": 1.2235588149039085,
        "averagePayoutYen": 6193.858695652174,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 1247,
        "highPayoutCount": 153,
        "observedRate": 0.1226944667201283,
        "posteriorRate": 0.11430976426706813,
        "lift": 1.2238953413224514,
        "averagePayoutYen": 6638.420208500401,
        "medianPayoutYen": 2430
      },
      "robustLift": 1.2235588149039085,
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
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 28723,
        "highPayoutCount": 3523,
        "observedRate": 0.12265431883856143,
        "posteriorRate": 0.12226705333640894,
        "lift": 1.2224236123543222,
        "averagePayoutYen": 28749.91505065627,
        "medianPayoutYen": 6600
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
      "robustLift": 1.2224236123543222,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 3543,
        "highPayoutCount": 444,
        "observedRate": 0.12531752751905165,
        "posteriorRate": 0.12218941065791086,
        "lift": 1.2216061180691404,
        "averagePayoutYen": 6911.532599491956,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 1399,
        "highPayoutCount": 185,
        "observedRate": 0.1322373123659757,
        "posteriorRate": 0.12201114174542814,
        "lift": 1.3063526893711164,
        "averagePayoutYen": 6875.039313795568,
        "medianPayoutYen": 2340
      },
      "robustLift": 1.2216061180691404,
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
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2252,
        "highPayoutCount": 286,
        "observedRate": 0.1269982238010657,
        "posteriorRate": 0.12211299944992732,
        "lift": 1.2197888491941347,
        "averagePayoutYen": 2364.347246891652,
        "medianPayoutYen": 1050
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
      "robustLift": 1.2197888491941347,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 45258,
        "highPayoutCount": 5523,
        "observedRate": 0.12203367360466658,
        "posteriorRate": 0.1217931312480851,
        "lift": 1.2176853485671895,
        "averagePayoutYen": 27844.421759688896,
        "medianPayoutYen": 6700
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
      "robustLift": 1.2176853485671895,
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
        "count": 3625,
        "highPayoutCount": 454,
        "observedRate": 0.12524137931034482,
        "posteriorRate": 0.12219514532998788,
        "lift": 1.2206094058011827,
        "averagePayoutYen": 2131.445517241379,
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
      "robustLift": 1.2173654370580294,
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
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 13443,
        "highPayoutCount": 1657,
        "observedRate": 0.12326117682065016,
        "posteriorRate": 0.12245093224546114,
        "lift": 1.2163996275327913,
        "averagePayoutYen": 395.37454437253587,
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
      "robustLift": 1.2163996275327913,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 1303,
        "highPayoutCount": 172,
        "observedRate": 0.13200306983883345,
        "posteriorRate": 0.12313465739874302,
        "lift": 1.2310563576231908,
        "averagePayoutYen": 6908.6185725249425,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 563,
        "highPayoutCount": 74,
        "observedRate": 0.13143872113676733,
        "posteriorRate": 0.11354577438811667,
        "lift": 1.2157154307114768,
        "averagePayoutYen": 6982.6998223801065,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.2157154307114768,
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
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 32844,
        "highPayoutCount": 3992,
        "observedRate": 0.12154426988186579,
        "posteriorRate": 0.12122151210562256,
        "lift": 1.2119703115400244,
        "averagePayoutYen": 27718.735233223724,
        "medianPayoutYen": 6670
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
      "robustLift": 1.2119703115400244,
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
        "count": 8798,
        "highPayoutCount": 1083,
        "observedRate": 0.12309615821777677,
        "posteriorRate": 0.12189001379850126,
        "lift": 1.21082759163689,
        "averagePayoutYen": 397.9688565583087,
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
      "robustLift": 1.21082759163689,
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
        "count": 4444,
        "highPayoutCount": 549,
        "observedRate": 0.12353735373537354,
        "posteriorRate": 0.12116807736371359,
        "lift": 1.2103500062428287,
        "averagePayoutYen": 2213.9311431143115,
        "medianPayoutYen": 1090
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
      "robustLift": 1.2103500062428287,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 1235,
        "highPayoutCount": 160,
        "observedRate": 0.12955465587044535,
        "posteriorRate": 0.12104425780399634,
        "lift": 1.2101572885434557,
        "averagePayoutYen": 6716.931174089069,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 82,
        "observedRate": 0.13333333333333333,
        "posteriorRate": 0.11542525396822245,
        "lift": 1.235838701168302,
        "averagePayoutYen": 6894.715447154472,
        "medianPayoutYen": 2520
      },
      "robustLift": 1.2101572885434557,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 2550,
        "highPayoutCount": 319,
        "observedRate": 0.12509803921568627,
        "posteriorRate": 0.12098691791799304,
        "lift": 1.209624843431863,
        "averagePayoutYen": 28660.4431372549,
        "medianPayoutYen": 6900
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
      "robustLift": 1.209624843431863,
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
        "count": 19365,
        "highPayoutCount": 2355,
        "observedRate": 0.12161115414407436,
        "posteriorRate": 0.1210699710287541,
        "lift": 1.2093700203776223,
        "averagePayoutYen": 2247.8404337722695,
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
      "robustLift": 1.2093700203776223,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 1303,
        "highPayoutCount": 171,
        "observedRate": 0.13123561013046814,
        "posteriorRate": 0.12257768748315269,
        "lift": 1.225591307264269,
        "averagePayoutYen": 13796.983883346124,
        "medianPayoutYen": 4530
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
      "betType": "馬単",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 3534,
        "highPayoutCount": 437,
        "observedRate": 0.12365591397849462,
        "posteriorRate": 0.1207257239792078,
        "lift": 1.2070744758701584,
        "averagePayoutYen": 14337.382569326543,
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
      "robustLift": 1.2070744758701584,
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
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 7366,
        "highPayoutCount": 913,
        "observedRate": 0.12394786858539235,
        "posteriorRate": 0.12242659172795885,
        "lift": 1.2240805784527506,
        "averagePayoutYen": 13568.692641868043,
        "medianPayoutYen": 4820
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
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 1213,
        "highPayoutCount": 157,
        "observedRate": 0.12943116240725475,
        "posteriorRate": 0.1208465263571972,
        "lift": 1.2082212113477568,
        "averagePayoutYen": 24470.527617477328,
        "medianPayoutYen": 5730
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
      "betType": "複勝",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 2499,
        "highPayoutCount": 321,
        "observedRate": 0.12845138055222088,
        "posteriorRate": 0.12381905578474976,
        "lift": 1.2299902546770056,
        "averagePayoutYen": 410.5202080832333,
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
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 2391,
        "highPayoutCount": 319,
        "observedRate": 0.13341698034295274,
        "posteriorRate": 0.12764011433141623,
        "lift": 1.2762079118542828,
        "averagePayoutYen": 13932.333751568382,
        "medianPayoutYen": 4940
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
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 20558,
        "highPayoutCount": 2485,
        "observedRate": 0.12087751726821676,
        "posteriorRate": 0.12038441326271251,
        "lift": 1.2025219720759437,
        "averagePayoutYen": 2207.1772545967506,
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
      "robustLift": 1.2025219720759437,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 6859,
        "highPayoutCount": 835,
        "observedRate": 0.12173786266219566,
        "posteriorRate": 0.12026227743577644,
        "lift": 1.2023799020371266,
        "averagePayoutYen": 28324.21927394664,
        "medianPayoutYen": 5950
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
      "robustLift": 1.2023799020371266,
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
        "count": 2495,
        "highPayoutCount": 333,
        "observedRate": 0.13346693386773548,
        "posteriorRate": 0.127898155087212,
        "lift": 1.277576868233877,
        "averagePayoutYen": 2515.755511022044,
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
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 1590,
        "highPayoutCount": 201,
        "observedRate": 0.12641509433962264,
        "posteriorRate": 0.12010052614826737,
        "lift": 1.200762715822327,
        "averagePayoutYen": 25598.081761006288,
        "medianPayoutYen": 7320
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
      "robustLift": 1.200762715822327,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 3141,
        "highPayoutCount": 387,
        "observedRate": 0.12320916905444126,
        "posteriorRate": 0.12002405123101464,
        "lift": 1.2000588106346075,
        "averagePayoutYen": 12639.643425660617,
        "medianPayoutYen": 4400
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
      "robustLift": 1.2000588106346075,
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
        "count": 7144,
        "highPayoutCount": 873,
        "observedRate": 0.12220044792833147,
        "posteriorRate": 0.12079190846395402,
        "lift": 1.199919263742273,
        "averagePayoutYen": 394.2609182530795,
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
      "robustLift": 1.199919263742273,
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
        "count": 5226,
        "highPayoutCount": 671,
        "observedRate": 0.1283964791427478,
        "posteriorRate": 0.12592647126898357,
        "lift": 1.2578816847034966,
        "averagePayoutYen": 2278.4825870646764,
        "medianPayoutYen": 1000
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
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 3949,
        "highPayoutCount": 483,
        "observedRate": 0.12230944542922259,
        "posteriorRate": 0.11980485216676413,
        "lift": 1.1977661533292012,
        "averagePayoutYen": 6382.972904532793,
        "medianPayoutYen": 2260
      },
      "validation": {
        "count": 1702,
        "highPayoutCount": 212,
        "observedRate": 0.1245593419506463,
        "posteriorRate": 0.11748372305838693,
        "lift": 1.2578783820814958,
        "averagePayoutYen": 6670.793184488836,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.1977661533292012,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 12055,
        "highPayoutCount": 1453,
        "observedRate": 0.12053090004147657,
        "posteriorRate": 0.11971406608123288,
        "lift": 1.1968988956166076,
        "averagePayoutYen": 28926.663625051846,
        "medianPayoutYen": 6730
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
      "robustLift": 1.1968988956166076,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 12209,
        "highPayoutCount": 1471,
        "observedRate": 0.12048488819723155,
        "posteriorRate": 0.11967989513651221,
        "lift": 1.1965168775382011,
        "averagePayoutYen": 6618.643623556392,
        "medianPayoutYen": 2250
      },
      "validation": {
        "count": 3974,
        "highPayoutCount": 478,
        "observedRate": 0.12028183190739809,
        "posteriorRate": 0.11727741577437818,
        "lift": 1.2556694848328822,
        "averagePayoutYen": 6807.108706592853,
        "medianPayoutYen": 2380
      },
      "robustLift": 1.1965168775382011,
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
        "count": 6095,
        "highPayoutCount": 744,
        "observedRate": 0.12206726825266612,
        "posteriorRate": 0.12044478366921373,
        "lift": 1.1964710052171106,
        "averagePayoutYen": 402.64315012305167,
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
      "robustLift": 1.1964710052171106,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 3207,
        "highPayoutCount": 396,
        "observedRate": 0.1234798877455566,
        "posteriorRate": 0.1203161012381801,
        "lift": 1.2028774390792194,
        "averagePayoutYen": 6303.161833489242,
        "medianPayoutYen": 2180
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 155,
        "observedRate": 0.11877394636015326,
        "posteriorRate": 0.11174468596928977,
        "lift": 1.1964314811797296,
        "averagePayoutYen": 6476.72030651341,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.1964314811797296,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 3215,
        "highPayoutCount": 395,
        "observedRate": 0.12286158631415241,
        "posteriorRate": 0.11978669462506711,
        "lift": 1.197685603903888,
        "averagePayoutYen": 12673.760497667185,
        "medianPayoutYen": 4220
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
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 6859,
        "highPayoutCount": 829,
        "observedRate": 0.12086309957719785,
        "posteriorRate": 0.11944694926618818,
        "lift": 1.1942282669144577,
        "averagePayoutYen": 27978.031783058756,
        "medianPayoutYen": 6550
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
      "robustLift": 1.1942282669144577,
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
        "count": 7326,
        "highPayoutCount": 885,
        "observedRate": 0.1208026208026208,
        "posteriorRate": 0.11948057430184002,
        "lift": 1.1934935091694079,
        "averagePayoutYen": 2163.3224133224135,
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
      "robustLift": 1.1934935091694079,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 12186,
        "highPayoutCount": 1464,
        "observedRate": 0.12013786312161497,
        "posteriorRate": 0.1193447556780801,
        "lift": 1.193266883475317,
        "averagePayoutYen": 13325.032824552765,
        "medianPayoutYen": 4350
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
      "robustLift": 1.193266883475317,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 3991,
        "highPayoutCount": 486,
        "observedRate": 0.12177399148083187,
        "posteriorRate": 0.11935243537963341,
        "lift": 1.1932430517600858,
        "averagePayoutYen": 6346.391881733901,
        "medianPayoutYen": 2240
      },
      "validation": {
        "count": 1730,
        "highPayoutCount": 215,
        "observedRate": 0.12427745664739884,
        "posteriorRate": 0.11735388258949239,
        "lift": 1.2564882021085595,
        "averagePayoutYen": 6619.225433526011,
        "medianPayoutYen": 2490
      },
      "robustLift": 1.1932430517600858,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 135661,
        "highPayoutCount": 16204,
        "observedRate": 0.1194447925343319,
        "posteriorRate": 0.11937379260203876,
        "lift": 1.1924268649357694,
        "averagePayoutYen": 2212.0584397874113,
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
      "robustLift": 1.1924268649357694,
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
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 1748,
        "highPayoutCount": 245,
        "observedRate": 0.14016018306636155,
        "posteriorRate": 0.13123225073393185,
        "lift": 1.3120574809157561,
        "averagePayoutYen": 27990.320366132724,
        "medianPayoutYen": 7070
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
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 1232,
        "highPayoutCount": 158,
        "observedRate": 0.12824675324675325,
        "posteriorRate": 0.12009674972986392,
        "lift": 1.2007856855664998,
        "averagePayoutYen": 13134.163961038961,
        "medianPayoutYen": 4530
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
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 36129,
        "highPayoutCount": 4314,
        "observedRate": 0.11940546375487836,
        "posteriorRate": 0.11914207252412569,
        "lift": 1.190112209096948,
        "averagePayoutYen": 2244.7737274765423,
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
      "robustLift": 1.190112209096948,
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
        "count": 1151,
        "highPayoutCount": 148,
        "observedRate": 0.12858384013900956,
        "posteriorRate": 0.11996061446771654,
        "lift": 1.198288638632603,
        "averagePayoutYen": 2261.5204170286706,
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
      "robustLift": 1.1895281999667584,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 15244,
        "highPayoutCount": 1823,
        "observedRate": 0.11958803463657833,
        "posteriorRate": 0.1189665967765421,
        "lift": 1.1894257121004397,
        "averagePayoutYen": 27363.93203883495,
        "medianPayoutYen": 6730
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
      "robustLift": 1.1894257121004397,
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
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 86095,
        "highPayoutCount": 10256,
        "observedRate": 0.11912422324176782,
        "posteriorRate": 0.11901443471893527,
        "lift": 1.1888372328683057,
        "averagePayoutYen": 2227.6341250943724,
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
      "robustLift": 1.1888372328683057,
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
        "count": 2302,
        "highPayoutCount": 292,
        "observedRate": 0.1268462206776716,
        "posteriorRate": 0.12207529424917915,
        "lift": 1.2194122112961514,
        "averagePayoutYen": 2227.0590790616857,
        "medianPayoutYen": 990
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
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 98448,
        "highPayoutCount": 11688,
        "observedRate": 0.11872257435397367,
        "posteriorRate": 0.11862852179413631,
        "lift": 1.1849823420331764,
        "averagePayoutYen": 2199.9794815537134,
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
      "robustLift": 1.1849823420331764,
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
        "count": 3319,
        "highPayoutCount": 410,
        "observedRate": 0.12353118409159386,
        "posteriorRate": 0.12046477467562189,
        "lift": 1.2033247036099646,
        "averagePayoutYen": 2171.367881892136,
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
      "betType": "単勝",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 2120,
      "discovery": {
        "count": 3047,
        "highPayoutCount": 372,
        "observedRate": 0.12208729898260584,
        "posteriorRate": 0.1190558617358418,
        "lift": 1.1836663277317352,
        "averagePayoutYen": 1105.595667870036,
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
      "robustLift": 1.1836663277317352,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 754,
        "highPayoutCount": 110,
        "observedRate": 0.14588859416445624,
        "posteriorRate": 0.12759976048634675,
        "lift": 1.2757399143340435,
        "averagePayoutYen": 32883.183023872676,
        "medianPayoutYen": 7610
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
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 3963,
        "highPayoutCount": 478,
        "observedRate": 0.12061569518041887,
        "posteriorRate": 0.11830776843650556,
        "lift": 1.1828985809309214,
        "averagePayoutYen": 12847.76684330053,
        "medianPayoutYen": 4370
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
      "robustLift": 1.1828985809309214,
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
        "count": 45693,
        "highPayoutCount": 5420,
        "observedRate": 0.11861773138117436,
        "posteriorRate": 0.11841740035256858,
        "lift": 1.1828734463266573,
        "averagePayoutYen": 2201.4750618256626,
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
      "robustLift": 1.1828734463266573,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 1741,
        "highPayoutCount": 215,
        "observedRate": 0.1234922458357266,
        "posteriorRate": 0.11825604073624883,
        "lift": 1.182281689421359,
        "averagePayoutYen": 6514.417001723147,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 662,
        "highPayoutCount": 83,
        "observedRate": 0.12537764350453173,
        "posteriorRate": 0.11161717570961104,
        "lift": 1.1950662503633402,
        "averagePayoutYen": 6341.027190332326,
        "medianPayoutYen": 2390
      },
      "robustLift": 1.182281689421359,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 12069,
        "highPayoutCount": 1435,
        "observedRate": 0.11889966028668489,
        "posteriorRate": 0.11814842632923257,
        "lift": 1.1813054010825759,
        "averagePayoutYen": 13495.211699395144,
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
      "robustLift": 1.1813054010825759,
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
        "count": 43610,
        "highPayoutCount": 5189,
        "observedRate": 0.11898647099289154,
        "posteriorRate": 0.11877881088865257,
        "lift": 1.179921611655189,
        "averagePayoutYen": 389.6514560880532,
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
      "robustLift": 1.179921611655189,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 678,
        "highPayoutCount": 89,
        "observedRate": 0.13126843657817108,
        "posteriorRate": 0.11800303101199007,
        "lift": 1.1798516680208078,
        "averagePayoutYen": 13458.097345132743,
        "medianPayoutYen": 4500
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
      "robustLift": 1.1798516680208078,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 1085,
        "highPayoutCount": 137,
        "observedRate": 0.12626728110599078,
        "posteriorRate": 0.11798744457405604,
        "lift": 1.1796361674950389,
        "averagePayoutYen": 25000.7465437788,
        "medianPayoutYen": 6890
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
      "robustLift": 1.1796361674950389,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 28739,
        "highPayoutCount": 3397,
        "observedRate": 0.11820174675528028,
        "posteriorRate": 0.11789074764978708,
        "lift": 1.1787290043820007,
        "averagePayoutYen": 13621.810431817392,
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
      "robustLift": 1.1787290043820007,
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
        "count": 12683,
        "highPayoutCount": 1649,
        "observedRate": 0.1300165575967831,
        "posteriorRate": 0.1288822706884776,
        "lift": 1.2874072158803123,
        "averagePayoutYen": 2390.966648269337,
        "medianPayoutYen": 1050
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
      "betType": "馬単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 4007,
        "highPayoutCount": 481,
        "observedRate": 0.120039930122286,
        "posteriorRate": 0.11781840925940189,
        "lift": 1.1780057299895892,
        "averagePayoutYen": 12771.060643873221,
        "medianPayoutYen": 4320
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
      "robustLift": 1.1780057299895892,
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
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 3704,
        "highPayoutCount": 445,
        "observedRate": 0.12014038876889849,
        "posteriorRate": 0.11774780858466546,
        "lift": 1.1772005657590814,
        "averagePayoutYen": 6570.847732181425,
        "medianPayoutYen": 2300
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 176,
        "observedRate": 0.13124533929903057,
        "posteriorRate": 0.12096640856847801,
        "lift": 1.295166907680526,
        "averagePayoutYen": 7348.337061894109,
        "medianPayoutYen": 2510
      },
      "robustLift": 1.1772005657590814,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 2442,
        "highPayoutCount": 296,
        "observedRate": 0.12121212121212122,
        "posteriorRate": 0.11761107657713583,
        "lift": 1.1758335679477758,
        "averagePayoutYen": 6320.655200655201,
        "medianPayoutYen": 2310
      },
      "validation": {
        "count": 690,
        "highPayoutCount": 89,
        "observedRate": 0.1289855072463768,
        "posteriorRate": 0.11403290602904877,
        "lift": 1.2209310669239235,
        "averagePayoutYen": 6596.724637681159,
        "medianPayoutYen": 2650
      },
      "robustLift": 1.1758335679477758,
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
        "count": 2031,
        "highPayoutCount": 249,
        "observedRate": 0.12259970457902511,
        "posteriorRate": 0.11825015471237886,
        "lift": 1.175655900863329,
        "averagePayoutYen": 1132.9443623830625,
        "medianPayoutYen": 520
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
      "robustLift": 1.175655900863329,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 28820,
        "highPayoutCount": 3397,
        "observedRate": 0.11786953504510757,
        "posteriorRate": 0.11756520420497728,
        "lift": 1.1753749523428922,
        "averagePayoutYen": 6746.5281054823035,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 9543,
        "highPayoutCount": 1081,
        "observedRate": 0.11327674735408153,
        "posteriorRate": 0.11228708136757623,
        "lift": 1.2022388171092009,
        "averagePayoutYen": 6450.436969506444,
        "medianPayoutYen": 2150
      },
      "robustLift": 1.1753749523428922,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 2548,
        "highPayoutCount": 312,
        "observedRate": 0.12244897959183673,
        "posteriorRate": 0.1187702714205819,
        "lift": 1.187422784273178,
        "averagePayoutYen": 6237.649136577708,
        "medianPayoutYen": 2210
      },
      "validation": {
        "count": 1055,
        "highPayoutCount": 124,
        "observedRate": 0.11753554502369669,
        "posteriorRate": 0.10977437824731062,
        "lift": 1.1753357291469644,
        "averagePayoutYen": 6091.563981042654,
        "medianPayoutYen": 2350
      },
      "robustLift": 1.1753357291469644,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 12115,
        "highPayoutCount": 1432,
        "observedRate": 0.11820057779612052,
        "posteriorRate": 0.11748012582559918,
        "lift": 1.1745243690705442,
        "averagePayoutYen": 6705.702022286422,
        "medianPayoutYen": 2120
      },
      "validation": {
        "count": 4600,
        "highPayoutCount": 547,
        "observedRate": 0.11891304347826087,
        "posteriorRate": 0.11641159964207215,
        "lift": 1.2463993377237041,
        "averagePayoutYen": 6561.210869565218,
        "medianPayoutYen": 2170
      },
      "robustLift": 1.1745243690705442,
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
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 617,
        "highPayoutCount": 81,
        "observedRate": 0.1312803889789303,
        "posteriorRate": 0.11728746611448417,
        "lift": 1.1726377965212513,
        "averagePayoutYen": 28306.41815235008,
        "medianPayoutYen": 7990
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
      "robustLift": 1.1726377965212513,
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
      "betType": "3連複",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 18133,
        "highPayoutCount": 2134,
        "observedRate": 0.11768598687475873,
        "posteriorRate": 0.11721194116083715,
        "lift": 1.17188269950909,
        "averagePayoutYen": 27575.342745271053,
        "medianPayoutYen": 6410
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
      "robustLift": 1.17188269950909,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 5110,
        "highPayoutCount": 607,
        "observedRate": 0.1187866927592955,
        "posteriorRate": 0.11711440058644093,
        "lift": 1.17086797865764,
        "averagePayoutYen": 6389.909980430529,
        "medianPayoutYen": 2230
      },
      "validation": {
        "count": 2037,
        "highPayoutCount": 238,
        "observedRate": 0.11683848797250859,
        "posteriorRate": 0.11221882466478834,
        "lift": 1.2015080041196742,
        "averagePayoutYen": 6363.151693667158,
        "medianPayoutYen": 2190
      },
      "robustLift": 1.17086797865764,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 1108,
        "highPayoutCount": 139,
        "observedRate": 0.12545126353790614,
        "posteriorRate": 0.11754464383702343,
        "lift": 1.1751693971221335,
        "averagePayoutYen": 6619.016245487364,
        "medianPayoutYen": 2600
      },
      "validation": {
        "count": 357,
        "highPayoutCount": 47,
        "observedRate": 0.13165266106442577,
        "posteriorRate": 0.10933390685480515,
        "lift": 1.1706196763344177,
        "averagePayoutYen": 7410.756302521008,
        "medianPayoutYen": 2550
      },
      "robustLift": 1.1706196763344177,
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
        "count": 36575,
        "highPayoutCount": 4313,
        "observedRate": 0.11792207792207793,
        "posteriorRate": 0.11768936880103747,
        "lift": 1.1690993424793439,
        "averagePayoutYen": 387.6161312371839,
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
      "robustLift": 1.1690993424793439,
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
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 5099,
        "highPayoutCount": 604,
        "observedRate": 0.11845459894096881,
        "posteriorRate": 0.11680792472443728,
        "lift": 1.1679024143894494,
        "averagePayoutYen": 12564.238085899196,
        "medianPayoutYen": 4350
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
      "robustLift": 1.1679024143894494,
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
        "count": 10618,
        "highPayoutCount": 1284,
        "observedRate": 0.12092672819740063,
        "posteriorRate": 0.12001559168002021,
        "lift": 1.1922075099033427,
        "averagePayoutYen": 395.2034281408928,
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
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3692,
        "highPayoutCount": 440,
        "observedRate": 0.11917659804983749,
        "posteriorRate": 0.1169024271197996,
        "lift": 1.1677403526799246,
        "averagePayoutYen": 2156.560130010834,
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
      "robustLift": 1.1677403526799246,
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
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 5088,
        "highPayoutCount": 602,
        "observedRate": 0.11831761006289308,
        "posteriorRate": 0.1166804043754257,
        "lift": 1.1665684051052323,
        "averagePayoutYen": 27864.97641509434,
        "medianPayoutYen": 7030
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
      "robustLift": 1.1665684051052323,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=不良"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 2483,
        "highPayoutCount": 298,
        "observedRate": 0.12001610954490535,
        "posteriorRate": 0.11666446518601367,
        "lift": 1.1664090454006564,
        "averagePayoutYen": 26992.118405155055,
        "medianPayoutYen": 5800
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
      "robustLift": 1.1664090454006564,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 2449,
        "highPayoutCount": 294,
        "observedRate": 0.12004899959167006,
        "posteriorRate": 0.11665227891899772,
        "lift": 1.166346191963691,
        "averagePayoutYen": 12643.115557370355,
        "medianPayoutYen": 4470
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
      "robustLift": 1.166346191963691,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 45375,
        "highPayoutCount": 5301,
        "observedRate": 0.11682644628099173,
        "posteriorRate": 0.11664330871476694,
        "lift": 1.1661581702584427,
        "averagePayoutYen": 6619.252231404958,
        "medianPayoutYen": 2160
      },
      "validation": {
        "count": 15627,
        "highPayoutCount": 1827,
        "observedRate": 0.11691303513150317,
        "posteriorRate": 0.11618398698918386,
        "lift": 1.2439623274885578,
        "averagePayoutYen": 6591.846803609138,
        "medianPayoutYen": 2210
      },
      "robustLift": 1.1661581702584427,
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
        "count": 65899,
        "highPayoutCount": 7744,
        "observedRate": 0.11751316408443224,
        "posteriorRate": 0.11738630624404682,
        "lift": 1.1660887881725492,
        "averagePayoutYen": 386.51754958345344,
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
      "robustLift": 1.1660887881725492,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 45284,
        "highPayoutCount": 5288,
        "observedRate": 0.11677413656037453,
        "posteriorRate": 0.11659111415630186,
        "lift": 1.1657346369326727,
        "averagePayoutYen": 13408.55158554898,
        "medianPayoutYen": 4180
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
      "robustLift": 1.1657346369326727,
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
        "count": 1123,
        "highPayoutCount": 140,
        "observedRate": 0.1246660730186999,
        "posteriorRate": 0.11724654440975407,
        "lift": 1.1656778980664788,
        "averagePayoutYen": 1120.5164737310774,
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
      "robustLift": 1.1656778980664788,
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
        "count": 17643,
        "highPayoutCount": 2067,
        "observedRate": 0.11715694609760245,
        "posteriorRate": 0.11668715066340737,
        "lift": 1.1655899524589477,
        "averagePayoutYen": 2223.4886357195487,
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
      "robustLift": 1.1655899524589477,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 4451,
        "highPayoutCount": 527,
        "observedRate": 0.11840035946978207,
        "posteriorRate": 0.1165441526257077,
        "lift": 1.1652061627714647,
        "averagePayoutYen": 24272.772410694226,
        "medianPayoutYen": 6610
      },
      "validation": {
        "count": 1467,
        "highPayoutCount": 156,
        "observedRate": 0.10633946830265849,
        "posteriorRate": 0.10127835430271384,
        "lift": 1.171809237667414,
        "averagePayoutYen": 23554.512610770278,
        "medianPayoutYen": 6000
      },
      "robustLift": 1.1652061627714647,
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
        "count": 19482,
        "highPayoutCount": 2293,
        "observedRate": 0.11769838825582589,
        "posteriorRate": 0.1172722124060887,
        "lift": 1.1649554060132543,
        "averagePayoutYen": 385.6405913150601,
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
      "robustLift": 1.1649554060132543,
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
        "count": 36939,
        "highPayoutCount": 4316,
        "observedRate": 0.11684127886515606,
        "posteriorRate": 0.11661783099137797,
        "lift": 1.1648975170642546,
        "averagePayoutYen": 2137.632583448388,
        "medianPayoutYen": 960
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
      "robustLift": 1.1648975170642546,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 2033,
        "highPayoutCount": 248,
        "observedRate": 0.1219872110181997,
        "posteriorRate": 0.1176517123134361,
        "lift": 1.176239829536316,
        "averagePayoutYen": 6671.121495327103,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 628,
        "highPayoutCount": 76,
        "observedRate": 0.12101910828025478,
        "posteriorRate": 0.10877584944553902,
        "lift": 1.1646446498983944,
        "averagePayoutYen": 6874.490445859873,
        "medianPayoutYen": 2530
      },
      "robustLift": 1.1646446498983944,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=稍重"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 6848,
        "highPayoutCount": 817,
        "observedRate": 0.11930490654205607,
        "posteriorRate": 0.11799289429639816,
        "lift": 1.1796508452333165,
        "averagePayoutYen": 6649.401285046729,
        "medianPayoutYen": 2180
      },
      "validation": {
        "count": 2743,
        "highPayoutCount": 306,
        "observedRate": 0.11155668975574189,
        "posteriorRate": 0.10875706388361642,
        "lift": 1.1644435160594035,
        "averagePayoutYen": 6368.7057965730955,
        "medianPayoutYen": 2020
      },
      "robustLift": 1.1644435160594035,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 6695,
        "highPayoutCount": 788,
        "observedRate": 0.11769977595220314,
        "posteriorRate": 0.11647140893536256,
        "lift": 1.1644395776153942,
        "averagePayoutYen": 6384.492905153099,
        "medianPayoutYen": 2310
      },
      "validation": {
        "count": 2149,
        "highPayoutCount": 264,
        "observedRate": 0.12284783620288506,
        "posteriorRate": 0.11728922543396302,
        "lift": 1.2557959288636362,
        "averagePayoutYen": 6895.579339227547,
        "medianPayoutYen": 2270
      },
      "robustLift": 1.1644395776153942,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24600,
      "discovery": {
        "count": 1085,
        "highPayoutCount": 136,
        "observedRate": 0.12534562211981568,
        "posteriorRate": 0.11735493408966834,
        "lift": 1.1733716799367495,
        "averagePayoutYen": 13044.267281105991,
        "medianPayoutYen": 4290
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
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 11085,
        "highPayoutCount": 1305,
        "observedRate": 0.11772665764546685,
        "posteriorRate": 0.11699036239089035,
        "lift": 1.162155572257639,
        "averagePayoutYen": 387.4506089309878,
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
      "robustLift": 1.162155572257639,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=04",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 4508,
        "highPayoutCount": 532,
        "observedRate": 0.11801242236024845,
        "posteriorRate": 0.1162160742112378,
        "lift": 1.1619260411883565,
        "averagePayoutYen": 26591.583850931678,
        "medianPayoutYen": 7020
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
      "robustLift": 1.1619260411883565,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=07",
        "field=large"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 4225,
        "highPayoutCount": 537,
        "observedRate": 0.12710059171597632,
        "posteriorRate": 0.12423529889734045,
        "lift": 1.2420601785046228,
        "averagePayoutYen": 6969.3514792899405,
        "medianPayoutYen": 2320
      },
      "validation": {
        "count": 1673,
        "highPayoutCount": 189,
        "observedRate": 0.11297071129707113,
        "posteriorRate": 0.10846716897126922,
        "lift": 1.1613396601904868,
        "averagePayoutYen": 6258.619246861925,
        "medianPayoutYen": 2290
      },
      "robustLift": 1.1613396601904868,
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
        "count": 3878,
        "highPayoutCount": 458,
        "observedRate": 0.1181021144920062,
        "posteriorRate": 0.11604727603613521,
        "lift": 1.1591982338151936,
        "averagePayoutYen": 2241.407942238267,
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
      "robustLift": 1.1591982338151936,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2415,
        "highPayoutCount": 288,
        "observedRate": 0.11925465838509317,
        "posteriorRate": 0.11597083172768438,
        "lift": 1.158434630304898,
        "averagePayoutYen": 2128.4844720496894,
        "medianPayoutYen": 940
      },
      "validation": {
        "count": 773,
        "highPayoutCount": 103,
        "observedRate": 0.1332470892626132,
        "posteriorRate": 0.11723128940109633,
        "lift": 1.2677646323619838,
        "averagePayoutYen": 2412.35446313066,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.158434630304898,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=ダート",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 6776,
        "highPayoutCount": 793,
        "observedRate": 0.11703069657615112,
        "posteriorRate": 0.11586175091394707,
        "lift": 1.1583835237791598,
        "averagePayoutYen": 25644.672373081463,
        "medianPayoutYen": 6720
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
      "robustLift": 1.1583835237791598,
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
      "betType": "馬連",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 1080,
        "highPayoutCount": 133,
        "observedRate": 0.12314814814814815,
        "posteriorRate": 0.11583024512021119,
        "lift": 1.1580294506243873,
        "averagePayoutYen": 6545.018518518518,
        "medianPayoutYen": 2190
      },
      "validation": {
        "count": 528,
        "highPayoutCount": 68,
        "observedRate": 0.12878787878787878,
        "posteriorRate": 0.1115750565900467,
        "lift": 1.194615288063261,
        "averagePayoutYen": 7466.420454545455,
        "medianPayoutYen": 2730
      },
      "robustLift": 1.1580294506243873,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 12330,
      "discovery": {
        "count": 3758,
        "highPayoutCount": 481,
        "observedRate": 0.12799361362426823,
        "posteriorRate": 0.12470920321510888,
        "lift": 1.2467981047361036,
        "averagePayoutYen": 6812.610431080362,
        "medianPayoutYen": 2340
      },
      "validation": {
        "count": 1199,
        "highPayoutCount": 137,
        "observedRate": 0.11426188490408674,
        "posteriorRate": 0.10812192947296528,
        "lift": 1.1576432391863503,
        "averagePayoutYen": 7202.577147623019,
        "medianPayoutYen": 2570
      },
      "robustLift": 1.1576432391863503,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 54358,
        "highPayoutCount": 6307,
        "observedRate": 0.11602707973067442,
        "posteriorRate": 0.11588200398275912,
        "lift": 1.1575473284349336,
        "averagePayoutYen": 2172.86747120939,
        "medianPayoutYen": 940
      },
      "validation": {
        "count": 18857,
        "highPayoutCount": 2135,
        "observedRate": 0.11322055470117198,
        "posteriorRate": 0.11268458084453147,
        "lift": 1.2185955382479627,
        "averagePayoutYen": 2222.691308267487,
        "medianPayoutYen": 940
      },
      "robustLift": 1.1575473284349336,
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
        "count": 3858,
        "highPayoutCount": 542,
        "observedRate": 0.14048729911871435,
        "posteriorRate": 0.13585474403079392,
        "lift": 1.3570553718716676,
        "averagePayoutYen": 2444.0150336962156,
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
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 47270,
      "discovery": {
        "count": 5886,
        "highPayoutCount": 689,
        "observedRate": 0.11705742439687394,
        "posteriorRate": 0.11572347316784824,
        "lift": 1.1570010255731282,
        "averagePayoutYen": 27472.930682976556,
        "medianPayoutYen": 6230
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
      "robustLift": 1.1570010255731282,
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
