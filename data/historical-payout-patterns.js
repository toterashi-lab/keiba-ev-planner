window.KEIBA_HISTORICAL_PAYOUT_PATTERNS = {
  "status": "research_only",
  "generatedAt": "2026-07-16T09:18:52.420Z",
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
    "totalRows": 889387,
    "discoveryRows": 620197,
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
    "3連複": 47560,
    "ワイド": 4270,
    "馬単": 24730,
    "3連単": 303900
  },
  "baselines": {
    "単勝": {
      "discoveryCount": 52637,
      "validationCount": 22565,
      "discoveryRate": 0.10048065049299922,
      "validationRate": 0.09173498781298471
    },
    "枠連": {
      "discoveryCount": 51334,
      "validationCount": 21360,
      "discoveryRate": 0.10032337242373476,
      "validationRate": 0.09667602996254682
    },
    "複勝": {
      "discoveryCount": 157400,
      "validationCount": 67139,
      "discoveryRate": 0.10155654383735706,
      "validationRate": 0.09014134854555475
    },
    "馬連": {
      "discoveryCount": 52652,
      "validationCount": 22570,
      "discoveryRate": 0.10011015725898352,
      "validationRate": 0.09299955693398317
    },
    "3連複": {
      "discoveryCount": 52441,
      "validationCount": 22585,
      "discoveryRate": 0.10001716214412387,
      "validationRate": 0.08567633384990038
    },
    "ワイド": {
      "discoveryCount": 157172,
      "validationCount": 67697,
      "discoveryRate": 0.10029140050390654,
      "validationRate": 0.09247086281519122
    },
    "馬単": {
      "discoveryCount": 52468,
      "validationCount": 22608,
      "discoveryRate": 0.1000419303194328,
      "validationRate": 0.09138358103326256
    },
    "3連単": {
      "discoveryCount": 44093,
      "validationCount": 22666,
      "discoveryRate": 0.10003855487265552,
      "validationRate": 0.08325244860142945
    }
  },
  "patterns": [
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2651,
        "highPayoutCount": 438,
        "observedRate": 0.16522067144473784,
        "posteriorRate": 0.15487419266012756,
        "lift": 1.5484761748884175,
        "averagePayoutYen": 35439.34741606941,
        "medianPayoutYen": 9810
      },
      "validation": {
        "count": 1312,
        "highPayoutCount": 208,
        "observedRate": 0.15853658536585366,
        "posteriorRate": 0.13843165945085553,
        "lift": 1.6157514360194172,
        "averagePayoutYen": 34062.33993902439,
        "medianPayoutYen": 10740
      },
      "robustLift": 1.5484761748884175,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 2661,
        "highPayoutCount": 436,
        "observedRate": 0.16384817737692597,
        "posteriorRate": 0.15375491219118245,
        "lift": 1.536956550271097,
        "averagePayoutYen": 225090.52236001502,
        "medianPayoutYen": 55780
      },
      "validation": {
        "count": 1318,
        "highPayoutCount": 190,
        "observedRate": 0.1441578148710167,
        "posteriorRate": 0.12740716408180128,
        "lift": 1.5303713731203539,
        "averagePayoutYen": 205667.64036418818,
        "medianPayoutYen": 58900
      },
      "robustLift": 1.5303713731203539,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 3922,
        "highPayoutCount": 604,
        "observedRate": 0.15400305966343703,
        "posteriorRate": 0.14789881978110853,
        "lift": 1.4787344152795256,
        "averagePayoutYen": 32045.56093829679,
        "medianPayoutYen": 9450
      },
      "validation": {
        "count": 1781,
        "highPayoutCount": 272,
        "observedRate": 0.1527231892195396,
        "posteriorRate": 0.13802637743312152,
        "lift": 1.6110210513318084,
        "averagePayoutYen": 29142.223469960696,
        "medianPayoutYen": 9710
      },
      "robustLift": 1.4787344152795256,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 3937,
        "highPayoutCount": 597,
        "observedRate": 0.15163830327660655,
        "posteriorRate": 0.1458235919396727,
        "lift": 1.457673915075037,
        "averagePayoutYen": 196578.3972567945,
        "medianPayoutYen": 52260
      },
      "validation": {
        "count": 1790,
        "highPayoutCount": 254,
        "observedRate": 0.1418994413407821,
        "posteriorRate": 0.12909442109201516,
        "lift": 1.5506381284958217,
        "averagePayoutYen": 181122.50837988826,
        "medianPayoutYen": 54010
      },
      "robustLift": 1.457673915075037,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 12852,
        "highPayoutCount": 1860,
        "observedRate": 0.14472455648926238,
        "posteriorRate": 0.1430503730581233,
        "lift": 1.4302582675960045,
        "averagePayoutYen": 31250.35714285714,
        "medianPayoutYen": 8990
      },
      "validation": {
        "count": 5192,
        "highPayoutCount": 758,
        "observedRate": 0.14599383667180277,
        "posteriorRate": 0.14069539123769328,
        "lift": 1.6421733390714743,
        "averagePayoutYen": 30657.36710323575,
        "medianPayoutYen": 9480
      },
      "robustLift": 1.4302582675960045,
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
        "count": 2650,
        "highPayoutCount": 398,
        "observedRate": 0.150188679245283,
        "posteriorRate": 0.14223970750142595,
        "lift": 1.4208319255103545,
        "averagePayoutYen": 7651.335849056603,
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
      "robustLift": 1.4208319255103545,
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
        "count": 11749,
        "highPayoutCount": 1669,
        "observedRate": 0.14205464294833603,
        "posteriorRate": 0.1403498816435589,
        "lift": 1.3994208968902773,
        "averagePayoutYen": 2460.1327772576387,
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
      "robustLift": 1.3994208968902773,
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
        "count": 7939,
        "highPayoutCount": 1132,
        "observedRate": 0.1425872276105303,
        "posteriorRate": 0.1400812537329012,
        "lift": 1.396742422870491,
        "averagePayoutYen": 2501.986396271571,
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
      "robustLift": 1.396742422870491,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 2648,
        "highPayoutCount": 387,
        "observedRate": 0.14614803625377643,
        "posteriorRate": 0.1388249571663648,
        "lift": 1.3876677181567592,
        "averagePayoutYen": 15316.042296072508,
        "medianPayoutYen": 5400
      },
      "validation": {
        "count": 1311,
        "highPayoutCount": 184,
        "observedRate": 0.14035087719298245,
        "posteriorRate": 0.12683146908704102,
        "lift": 1.3879021554306985,
        "averagePayoutYen": 14953.23417238749,
        "medianPayoutYen": 5440
      },
      "robustLift": 1.3876677181567592,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 12900,
        "highPayoutCount": 1810,
        "observedRate": 0.14031007751937985,
        "posteriorRate": 0.13880740876390504,
        "lift": 1.3875391236968635,
        "averagePayoutYen": 194517.03953488372,
        "medianPayoutYen": 50090
      },
      "validation": {
        "count": 5218,
        "highPayoutCount": 706,
        "observedRate": 0.13530088156381756,
        "posteriorRate": 0.13074960201131772,
        "lift": 1.57051959681427,
        "averagePayoutYen": 188873.39593714065,
        "medianPayoutYen": 51580
      },
      "robustLift": 1.3875391236968635,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 6381,
        "highPayoutCount": 879,
        "observedRate": 0.1377527033380348,
        "posteriorRate": 0.13501069336899607,
        "lift": 1.3498752661512914,
        "averagePayoutYen": 29107.331139319856,
        "medianPayoutYen": 7950
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 330,
        "observedRate": 0.132,
        "posteriorRate": 0.1242793889749834,
        "lift": 1.4505684754521964,
        "averagePayoutYen": 27495.308,
        "medianPayoutYen": 8340
      },
      "robustLift": 1.3498752661512914,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 591,
        "highPayoutCount": 97,
        "observedRate": 0.16412859560067683,
        "posteriorRate": 0.13475644127986047,
        "lift": 1.3470450612906117,
        "averagePayoutYen": 209343.2994923858,
        "medianPayoutYen": 50610
      },
      "validation": {
        "count": 315,
        "highPayoutCount": 50,
        "observedRate": 0.15873015873015872,
        "posteriorRate": 0.1124248150929015,
        "lift": 1.3504085102785932,
        "averagePayoutYen": 220623.5873015873,
        "medianPayoutYen": 62120
      },
      "robustLift": 1.3470450612906117,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 5610,
        "highPayoutCount": 771,
        "observedRate": 0.1374331550802139,
        "posteriorRate": 0.13437304049694399,
        "lift": 1.3432125310885856,
        "averagePayoutYen": 184955.1550802139,
        "medianPayoutYen": 45530
      },
      "validation": {
        "count": 2512,
        "highPayoutCount": 314,
        "observedRate": 0.125,
        "posteriorRate": 0.11806979558456665,
        "lift": 1.4182140894116522,
        "averagePayoutYen": 167848.8694267516,
        "medianPayoutYen": 44450
      },
      "robustLift": 1.3432125310885856,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 4950,
        "highPayoutCount": 676,
        "observedRate": 0.13656565656565656,
        "posteriorRate": 0.13321454631859225,
        "lift": 1.3316320541432076,
        "averagePayoutYen": 180411.31313131313,
        "medianPayoutYen": 43450
      },
      "validation": {
        "count": 2164,
        "highPayoutCount": 261,
        "observedRate": 0.12060998151571165,
        "posteriorRate": 0.11359843254531334,
        "lift": 1.3645056025819142,
        "averagePayoutYen": 189909.3807763401,
        "medianPayoutYen": 39540
      },
      "robustLift": 1.3316320541432076,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 592,
        "highPayoutCount": 95,
        "observedRate": 0.16047297297297297,
        "posteriorRate": 0.13279174090848161,
        "lift": 1.3276895490908835,
        "averagePayoutYen": 33142.2972972973,
        "medianPayoutYen": 9520
      },
      "validation": {
        "count": 315,
        "highPayoutCount": 58,
        "observedRate": 0.18412698412698414,
        "posteriorRate": 0.12372781217785299,
        "lift": 1.4441305622929248,
        "averagePayoutYen": 34665.90476190476,
        "medianPayoutYen": 11490
      },
      "robustLift": 1.3276895490908835,
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
        "count": 12882,
        "highPayoutCount": 1724,
        "observedRate": 0.13383015059773326,
        "posteriorRate": 0.13257024948658586,
        "lift": 1.3242437442549266,
        "averagePayoutYen": 7160.03726129483,
        "medianPayoutYen": 2650
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
      "robustLift": 1.3242437442549266,
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
        "count": 38508,
        "highPayoutCount": 5121,
        "observedRate": 0.13298535369273917,
        "posteriorRate": 0.1325662864092482,
        "lift": 1.3218110998867194,
        "averagePayoutYen": 2378.5005713098576,
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
      "robustLift": 1.3218110998867194,
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
        "count": 1772,
        "highPayoutCount": 251,
        "observedRate": 0.14164785553047404,
        "posteriorRate": 0.13254652299821887,
        "lift": 1.3216140400099001,
        "averagePayoutYen": 2482.443566591422,
        "medianPayoutYen": 1200
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
      "robustLift": 1.3216140400099001,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 19493,
        "highPayoutCount": 2592,
        "observedRate": 0.1329708100343713,
        "posteriorRate": 0.1321466803917402,
        "lift": 1.3212400507956623,
        "averagePayoutYen": 29433.225773354538,
        "medianPayoutYen": 7570
      },
      "validation": {
        "count": 7060,
        "highPayoutCount": 873,
        "observedRate": 0.12365439093484419,
        "posteriorRate": 0.12114261467261246,
        "lift": 1.41395656453796,
        "averagePayoutYen": 28286.706798866857,
        "medianPayoutYen": 7370
      },
      "robustLift": 1.3212400507956623,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 3920,
        "highPayoutCount": 531,
        "observedRate": 0.13545918367346937,
        "posteriorRate": 0.1314527070497096,
        "lift": 1.3139761161143386,
        "averagePayoutYen": 14160.859693877552,
        "medianPayoutYen": 5240
      },
      "validation": {
        "count": 1776,
        "highPayoutCount": 234,
        "observedRate": 0.13175675675675674,
        "posteriorRate": 0.12288742992822112,
        "lift": 1.3447429892629346,
        "averagePayoutYen": 14495.033783783783,
        "medianPayoutYen": 5220
      },
      "robustLift": 1.3139761161143386,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 16752,
        "highPayoutCount": 2209,
        "observedRate": 0.13186485195797518,
        "posteriorRate": 0.13094245753746392,
        "lift": 1.3089199229651773,
        "averagePayoutYen": 189980.98495702006,
        "medianPayoutYen": 43630
      },
      "validation": {
        "count": 7092,
        "highPayoutCount": 841,
        "observedRate": 0.11858432036097011,
        "posteriorRate": 0.11625740572980964,
        "lift": 1.3964442810131772,
        "averagePayoutYen": 183604.28652002255,
        "medianPayoutYen": 40110
      },
      "robustLift": 1.3089199229651773,
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
        "count": 3932,
        "highPayoutCount": 530,
        "observedRate": 0.1347914547304171,
        "posteriorRate": 0.1308788534813835,
        "lift": 1.3073483956558156,
        "averagePayoutYen": 7191.012207527976,
        "medianPayoutYen": 2720
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
      "robustLift": 1.3073483956558156,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 2775,
        "highPayoutCount": 378,
        "observedRate": 0.1362162162162162,
        "posteriorRate": 0.13069290914086343,
        "lift": 1.3064254007590324,
        "averagePayoutYen": 191191.94594594595,
        "medianPayoutYen": 40420
      },
      "validation": {
        "count": 1251,
        "highPayoutCount": 154,
        "observedRate": 0.12310151878497202,
        "posteriorRate": 0.1117225724161706,
        "lift": 1.341973410908809,
        "averagePayoutYen": 174969.52038369305,
        "medianPayoutYen": 41550
      },
      "robustLift": 1.3064254007590324,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 18906,
        "highPayoutCount": 2482,
        "observedRate": 0.13128107479107162,
        "posteriorRate": 0.13047555297702063,
        "lift": 1.3045316441692925,
        "averagePayoutYen": 29671.78673437004,
        "medianPayoutYen": 7960
      },
      "validation": {
        "count": 6762,
        "highPayoutCount": 870,
        "observedRate": 0.12866015971606035,
        "posteriorRate": 0.12570065642040074,
        "lift": 1.4671572740334629,
        "averagePayoutYen": 28797.326234841763,
        "medianPayoutYen": 8100
      },
      "robustLift": 1.3045316441692925,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 12852,
        "highPayoutCount": 1692,
        "observedRate": 0.13165266106442577,
        "posteriorRate": 0.13046891590471213,
        "lift": 1.3041423280031312,
        "averagePayoutYen": 14143.369903516963,
        "medianPayoutYen": 5060
      },
      "validation": {
        "count": 5196,
        "highPayoutCount": 702,
        "observedRate": 0.1351039260969977,
        "posteriorRate": 0.13126611490811643,
        "lift": 1.436429973786397,
        "averagePayoutYen": 14442.167051578137,
        "medianPayoutYen": 5210
      },
      "robustLift": 1.3041423280031312,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2041,
        "highPayoutCount": 281,
        "observedRate": 0.13767760901518863,
        "posteriorRate": 0.1302670527635033,
        "lift": 1.3024469998037898,
        "averagePayoutYen": 29019.37775600196,
        "medianPayoutYen": 7990
      },
      "validation": {
        "count": 805,
        "highPayoutCount": 105,
        "observedRate": 0.13043478260869565,
        "posteriorRate": 0.11328595166662851,
        "lift": 1.322254893225222,
        "averagePayoutYen": 28850.63354037267,
        "medianPayoutYen": 7640
      },
      "robustLift": 1.3024469998037898,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 3264,
        "highPayoutCount": 440,
        "observedRate": 0.13480392156862744,
        "posteriorRate": 0.130182938648263,
        "lift": 1.3016060029844727,
        "averagePayoutYen": 27678.86948529412,
        "medianPayoutYen": 7340
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 183,
        "observedRate": 0.13646532438478748,
        "posteriorRate": 0.12267146492392732,
        "lift": 1.4318010518381903,
        "averagePayoutYen": 32706.935123042505,
        "medianPayoutYen": 8280
      },
      "robustLift": 1.3016060029844727,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2772,
        "highPayoutCount": 375,
        "observedRate": 0.13528138528138528,
        "posteriorRate": 0.12989259812715828,
        "lift": 1.2987030959745105,
        "averagePayoutYen": 29804.632034632035,
        "medianPayoutYen": 7280
      },
      "validation": {
        "count": 1245,
        "highPayoutCount": 160,
        "observedRate": 0.1285140562248996,
        "posteriorRate": 0.11623963720627518,
        "lift": 1.356729822379186,
        "averagePayoutYen": 28269.26907630522,
        "medianPayoutYen": 7580
      },
      "robustLift": 1.2987030959745105,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 5803,
        "highPayoutCount": 766,
        "observedRate": 0.13200068929863865,
        "posteriorRate": 0.12946352230240551,
        "lift": 1.2944130739867392,
        "averagePayoutYen": 27670.4549371015,
        "medianPayoutYen": 7260
      },
      "validation": {
        "count": 2155,
        "highPayoutCount": 278,
        "observedRate": 0.12900232018561486,
        "posteriorRate": 0.12084300072502832,
        "lift": 1.4104595200903176,
        "averagePayoutYen": 29020.032482598606,
        "medianPayoutYen": 6950
      },
      "robustLift": 1.2944130739867392,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 8841,
        "highPayoutCount": 1159,
        "observedRate": 0.13109376767334013,
        "posteriorRate": 0.12943146102519298,
        "lift": 1.2938157812250815,
        "averagePayoutYen": 178300.14138672096,
        "medianPayoutYen": 41620
      },
      "validation": {
        "count": 4000,
        "highPayoutCount": 478,
        "observedRate": 0.1195,
        "posteriorRate": 0.11547249428904773,
        "lift": 1.3870161926632516,
        "averagePayoutYen": 176543.5,
        "medianPayoutYen": 41830
      },
      "robustLift": 1.2938157812250815,
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
        "count": 19120,
        "highPayoutCount": 2483,
        "observedRate": 0.12986401673640166,
        "posteriorRate": 0.1291103822758386,
        "lift": 1.2873524711703423,
        "averagePayoutYen": 2335.0894351464435,
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
      "robustLift": 1.2873524711703423,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 3190,
        "highPayoutCount": 425,
        "observedRate": 0.13322884012539185,
        "posteriorRate": 0.12872861275665634,
        "lift": 1.2870652395751792,
        "averagePayoutYen": 28007.184952978056,
        "medianPayoutYen": 6750
      },
      "validation": {
        "count": 1398,
        "highPayoutCount": 177,
        "observedRate": 0.12660944206008584,
        "posteriorRate": 0.11582622071915184,
        "lift": 1.3519044935101003,
        "averagePayoutYen": 28814.334763948496,
        "medianPayoutYen": 7380
      },
      "robustLift": 1.2870652395751792,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 2857,
        "highPayoutCount": 381,
        "observedRate": 0.13335666783339167,
        "posteriorRate": 0.12839418452080065,
        "lift": 1.283447013846217,
        "averagePayoutYen": 186777.45537276863,
        "medianPayoutYen": 39960
      },
      "validation": {
        "count": 1310,
        "highPayoutCount": 154,
        "observedRate": 0.11755725190839694,
        "posteriorRate": 0.10808078690647223,
        "lift": 1.298229526243826,
        "averagePayoutYen": 165543.786259542,
        "medianPayoutYen": 42810
      },
      "robustLift": 1.283447013846217,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 10632,
        "highPayoutCount": 1378,
        "observedRate": 0.12960872836719337,
        "posteriorRate": 0.12827960663600987,
        "lift": 1.2825759488272628,
        "averagePayoutYen": 27932.240406320543,
        "medianPayoutYen": 7080
      },
      "validation": {
        "count": 3985,
        "highPayoutCount": 520,
        "observedRate": 0.13048933500627352,
        "posteriorRate": 0.1254934597380045,
        "lift": 1.4647389086216183,
        "averagePayoutYen": 27837.124215809286,
        "medianPayoutYen": 7730
      },
      "robustLift": 1.2825759488272628,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 1438,
        "highPayoutCount": 200,
        "observedRate": 0.13908205841446453,
        "posteriorRate": 0.12900891508582443,
        "lift": 1.2895919503240212,
        "averagePayoutYen": 179885.38247566065,
        "medianPayoutYen": 41020
      },
      "validation": {
        "count": 631,
        "highPayoutCount": 79,
        "observedRate": 0.12519809825673534,
        "posteriorRate": 0.10665448656119782,
        "lift": 1.2810972932676787,
        "averagePayoutYen": 156538.2884310618,
        "medianPayoutYen": 38250
      },
      "robustLift": 1.2810972932676787,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 3531,
        "highPayoutCount": 466,
        "observedRate": 0.1319739450580572,
        "posteriorRate": 0.1280127207730905,
        "lift": 1.279633846530918,
        "averagePayoutYen": 186113.35315774567,
        "medianPayoutYen": 41250
      },
      "validation": {
        "count": 1711,
        "highPayoutCount": 205,
        "observedRate": 0.11981297486849796,
        "posteriorRate": 0.11154510370905235,
        "lift": 1.3398417173658614,
        "averagePayoutYen": 172788.12390414963,
        "medianPayoutYen": 44690
      },
      "robustLift": 1.279633846530918,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 3558,
        "highPayoutCount": 469,
        "observedRate": 0.13181562675660483,
        "posteriorRate": 0.12790026550919856,
        "lift": 1.2785097272947388,
        "averagePayoutYen": 185448.51039910063,
        "medianPayoutYen": 40860
      },
      "validation": {
        "count": 1739,
        "highPayoutCount": 207,
        "observedRate": 0.11903392754456585,
        "posteriorRate": 0.1110434230909847,
        "lift": 1.3338157009964278,
        "averagePayoutYen": 171116.37147786084,
        "medianPayoutYen": 44340
      },
      "robustLift": 1.2785097272947388,
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
        "count": 8145,
        "highPayoutCount": 1058,
        "observedRate": 0.12989564149785143,
        "posteriorRate": 0.12818342397362098,
        "lift": 1.278109821276531,
        "averagePayoutYen": 2233.647636586863,
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
      "robustLift": 1.278109821276531,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 3516,
        "highPayoutCount": 463,
        "observedRate": 0.13168373151308305,
        "posteriorRate": 0.12774118054583217,
        "lift": 1.2771926118215413,
        "averagePayoutYen": 29079.832195676907,
        "medianPayoutYen": 7300
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 218,
        "observedRate": 0.12793427230046947,
        "posteriorRate": 0.11834762564652913,
        "lift": 1.3813339148459227,
        "averagePayoutYen": 28374.771126760563,
        "medianPayoutYen": 8150
      },
      "robustLift": 1.2771926118215413,
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
        "count": 9562,
        "highPayoutCount": 1238,
        "observedRate": 0.1294708220037649,
        "posteriorRate": 0.12802084081215995,
        "lift": 1.2764887135779233,
        "averagePayoutYen": 2294.9152896883497,
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
      "robustLift": 1.2764887135779233,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 2799,
        "highPayoutCount": 371,
        "observedRate": 0.1325473383351197,
        "posteriorRate": 0.12762027203283655,
        "lift": 1.2757108716263572,
        "averagePayoutYen": 185726.4987495534,
        "medianPayoutYen": 42140
      },
      "validation": {
        "count": 1347,
        "highPayoutCount": 185,
        "observedRate": 0.13734224201930215,
        "posteriorRate": 0.12269963416389537,
        "lift": 1.473826130343854,
        "averagePayoutYen": 224638.03266518188,
        "medianPayoutYen": 45100
      },
      "robustLift": 1.2757108716263572,
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
        "count": 8217,
        "highPayoutCount": 1077,
        "observedRate": 0.13106973347937204,
        "posteriorRate": 0.12937688102772496,
        "lift": 1.273939385283948,
        "averagePayoutYen": 388.08445904831444,
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
      "robustLift": 1.273939385283948,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 3554,
        "highPayoutCount": 466,
        "observedRate": 0.13111986494091166,
        "posteriorRate": 0.12728381378195905,
        "lift": 1.2726197289875527,
        "averagePayoutYen": 28983.21046707935,
        "medianPayoutYen": 7260
      },
      "validation": {
        "count": 1731,
        "highPayoutCount": 221,
        "observedRate": 0.12767186597342575,
        "posteriorRate": 0.11826004792691627,
        "lift": 1.3803117221857384,
        "averagePayoutYen": 28159.39919121895,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.2726197289875527,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 1753,
        "highPayoutCount": 243,
        "observedRate": 0.13861950941243584,
        "posteriorRate": 0.1300526325219982,
        "lift": 1.300303165316703,
        "averagePayoutYen": 30170.781517398744,
        "medianPayoutYen": 7110
      },
      "validation": {
        "count": 630,
        "highPayoutCount": 80,
        "observedRate": 0.12698412698412698,
        "posteriorRate": 0.10870634241146034,
        "lift": 1.2688024513503005,
        "averagePayoutYen": 25161.777777777777,
        "medianPayoutYen": 7500
      },
      "robustLift": 1.2688024513503005,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2854,
        "highPayoutCount": 375,
        "observedRate": 0.13139453398738613,
        "posteriorRate": 0.12671692935958911,
        "lift": 1.2669518574921284,
        "averagePayoutYen": 29315.364400840925,
        "medianPayoutYen": 7120
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 167,
        "observedRate": 0.12796934865900383,
        "posteriorRate": 0.11625383209138515,
        "lift": 1.356895502730715,
        "averagePayoutYen": 27229.946360153255,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.2669518574921284,
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
        "posteriorRate": 0.12685940889821107,
        "lift": 1.2649081402873583,
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
      "robustLift": 1.2649081402873583,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 420,
        "highPayoutCount": 75,
        "observedRate": 0.17857142857142858,
        "posteriorRate": 0.13587889246963253,
        "lift": 1.3585557673975213,
        "averagePayoutYen": 29650.261904761905,
        "medianPayoutYen": 7990
      },
      "validation": {
        "count": 164,
        "highPayoutCount": 29,
        "observedRate": 0.17682926829268292,
        "posteriorRate": 0.10819001042914185,
        "lift": 1.262775909840914,
        "averagePayoutYen": 39548.04878048781,
        "medianPayoutYen": 7770
      },
      "robustLift": 1.262775909840914,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 16742,
        "highPayoutCount": 2128,
        "observedRate": 0.1271054832158643,
        "posteriorRate": 0.12632057055076717,
        "lift": 1.2627188658569435,
        "averagePayoutYen": 186322.711742922,
        "medianPayoutYen": 44840
      },
      "validation": {
        "count": 6794,
        "highPayoutCount": 820,
        "observedRate": 0.12069473064468648,
        "posteriorRate": 0.11812808120382708,
        "lift": 1.418914196378349,
        "averagePayoutYen": 180178.90197232852,
        "medianPayoutYen": 43430
      },
      "robustLift": 1.2627188658569435,
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
        "count": 58413,
        "highPayoutCount": 7393,
        "observedRate": 0.12656429219523052,
        "posteriorRate": 0.12634131176908245,
        "lift": 1.259742222506517,
        "averagePayoutYen": 2296.6750552103126,
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
      "robustLift": 1.259742222506517,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 1182,
        "highPayoutCount": 170,
        "observedRate": 0.14382402707275804,
        "posteriorRate": 0.13080813165061103,
        "lift": 1.3075771817887991,
        "averagePayoutYen": 225609.59390862944,
        "medianPayoutYen": 40660
      },
      "validation": {
        "count": 565,
        "highPayoutCount": 70,
        "observedRate": 0.12389380530973451,
        "posteriorRate": 0.10481335615090584,
        "lift": 1.2589822631247651,
        "averagePayoutYen": 175022.10619469028,
        "medianPayoutYen": 46820
      },
      "robustLift": 1.2589822631247651,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2283,
        "highPayoutCount": 300,
        "observedRate": 0.1314060446780552,
        "posteriorRate": 0.12576664788791303,
        "lift": 1.257450673382278,
        "averagePayoutYen": 30025.532194480948,
        "medianPayoutYen": 7310
      },
      "validation": {
        "count": 1056,
        "highPayoutCount": 130,
        "observedRate": 0.12310606060606061,
        "posteriorRate": 0.11107851344791143,
        "lift": 1.2964900393907388,
        "averagePayoutYen": 27131.19318181818,
        "medianPayoutYen": 7610
      },
      "robustLift": 1.257450673382278,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 3287,
        "highPayoutCount": 426,
        "observedRate": 0.1296014602981442,
        "posteriorRate": 0.1256954267420285,
        "lift": 1.2567385841332157,
        "averagePayoutYen": 26817.696988135078,
        "medianPayoutYen": 7510
      },
      "validation": {
        "count": 1198,
        "highPayoutCount": 148,
        "observedRate": 0.12353923205342238,
        "posteriorRate": 0.11238996874260906,
        "lift": 1.3117971287089538,
        "averagePayoutYen": 27102.9632721202,
        "medianPayoutYen": 7270
      },
      "robustLift": 1.2567385841332157,
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
        "posteriorRate": 0.125909883671143,
        "lift": 1.2554404768356842,
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
      "robustLift": 1.2554404768356842,
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
        "count": 56660,
        "highPayoutCount": 7122,
        "observedRate": 0.12569714084009884,
        "posteriorRate": 0.12547490728222452,
        "lift": 1.2511033513520138,
        "averagePayoutYen": 2308.187080833039,
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
      "robustLift": 1.2511033513520138,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2716,
        "highPayoutCount": 352,
        "observedRate": 0.12960235640648013,
        "posteriorRate": 0.12500266824380035,
        "lift": 1.2498121878690438,
        "averagePayoutYen": 27438.976435935198,
        "medianPayoutYen": 6930
      },
      "validation": {
        "count": 1170,
        "highPayoutCount": 139,
        "observedRate": 0.1188034188034188,
        "posteriorRate": 0.10888512989517976,
        "lift": 1.2708892292933514,
        "averagePayoutYen": 26194.846153846152,
        "medianPayoutYen": 7260
      },
      "robustLift": 1.2498121878690438,
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
        "count": 31871,
        "highPayoutCount": 4007,
        "observedRate": 0.1257255812494117,
        "posteriorRate": 0.1253327268311746,
        "lift": 1.249685677948955,
        "averagePayoutYen": 2275.045652787801,
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
      "robustLift": 1.249685677948955,
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
        "count": 5257,
        "highPayoutCount": 670,
        "observedRate": 0.12744911546509416,
        "posteriorRate": 0.12509044645682704,
        "lift": 1.2472699137545151,
        "averagePayoutYen": 2346.3496290660073,
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
      "robustLift": 1.2472699137545151,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 1276,
        "highPayoutCount": 171,
        "observedRate": 0.13401253918495298,
        "posteriorRate": 0.1244417686216565,
        "lift": 1.2442041541064421,
        "averagePayoutYen": 27653.5736677116,
        "medianPayoutYen": 8060
      },
      "validation": {
        "count": 490,
        "highPayoutCount": 71,
        "observedRate": 0.14489795918367346,
        "posteriorRate": 0.11498804739893959,
        "lift": 1.342121473129225,
        "averagePayoutYen": 24709.755102040817,
        "medianPayoutYen": 8880
      },
      "robustLift": 1.2442041541064421,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 5787,
        "highPayoutCount": 734,
        "observedRate": 0.1268360117504752,
        "posteriorRate": 0.12470313043932908,
        "lift": 1.2468173238072175,
        "averagePayoutYen": 28933.945049248316,
        "medianPayoutYen": 6360
      },
      "validation": {
        "count": 1425,
        "highPayoutCount": 162,
        "observedRate": 0.11368421052631579,
        "posteriorRate": 0.1064094373636105,
        "lift": 1.2419933554817277,
        "averagePayoutYen": 25700.63859649123,
        "medianPayoutYen": 7000
      },
      "robustLift": 1.2419933554817277,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 2181,
        "highPayoutCount": 283,
        "observedRate": 0.12975699220541037,
        "posteriorRate": 0.12421457569426622,
        "lift": 1.2416670337989755,
        "averagePayoutYen": 187484.12196240257,
        "medianPayoutYen": 39740
      },
      "validation": {
        "count": 1170,
        "highPayoutCount": 138,
        "observedRate": 0.11794871794871795,
        "posteriorRate": 0.1075606133537214,
        "lift": 1.291981379054292,
        "averagePayoutYen": 177374.37606837606,
        "medianPayoutYen": 38960
      },
      "robustLift": 1.2416670337989755,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 1176,
        "highPayoutCount": 170,
        "observedRate": 0.1445578231292517,
        "posteriorRate": 0.13127003643917776,
        "lift": 1.3124751155208618,
        "averagePayoutYen": 34357.151360544216,
        "medianPayoutYen": 7280
      },
      "validation": {
        "count": 562,
        "highPayoutCount": 70,
        "observedRate": 0.12455516014234876,
        "posteriorRate": 0.10625062798959528,
        "lift": 1.240139758731271,
        "averagePayoutYen": 29295.195729537365,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.240139758731271,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 2688,
        "highPayoutCount": 345,
        "observedRate": 0.12834821428571427,
        "posteriorRate": 0.12390817987337759,
        "lift": 1.2386042564399995,
        "averagePayoutYen": 172123.88764880953,
        "medianPayoutYen": 44200
      },
      "validation": {
        "count": 1205,
        "highPayoutCount": 138,
        "observedRate": 0.11452282157676348,
        "posteriorRate": 0.1053526242232931,
        "lift": 1.2654597671675472,
        "averagePayoutYen": 173188.53112033196,
        "medianPayoutYen": 41880
      },
      "robustLift": 1.2386042564399995,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 590,
        "highPayoutCount": 85,
        "observedRate": 0.1440677966101695,
        "posteriorRate": 0.12387244510065726,
        "lift": 1.2382052675826414,
        "averagePayoutYen": 14582.033898305084,
        "medianPayoutYen": 4790
      },
      "validation": {
        "count": 311,
        "highPayoutCount": 47,
        "observedRate": 0.15112540192926044,
        "posteriorRate": 0.11429320655564892,
        "lift": 1.2506973929380982,
        "averagePayoutYen": 16829.581993569132,
        "medianPayoutYen": 5560
      },
      "robustLift": 1.2382052675826414,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 1100,
        "highPayoutCount": 148,
        "observedRate": 0.13454545454545455,
        "posteriorRate": 0.12375536317003871,
        "lift": 1.2373412774070545,
        "averagePayoutYen": 26692.727272727272,
        "medianPayoutYen": 7300
      },
      "validation": {
        "count": 617,
        "highPayoutCount": 79,
        "observedRate": 0.1280388978930308,
        "posteriorRate": 0.1090762461279769,
        "lift": 1.2731199063567742,
        "averagePayoutYen": 28062.090761750405,
        "medianPayoutYen": 7710
      },
      "robustLift": 1.2373412774070545,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 1280,
        "highPayoutCount": 170,
        "observedRate": 0.1328125,
        "posteriorRate": 0.12360633563838638,
        "lift": 1.2355869773981798,
        "averagePayoutYen": 167471.7265625,
        "medianPayoutYen": 45900
      },
      "validation": {
        "count": 494,
        "highPayoutCount": 63,
        "observedRate": 0.12753036437246965,
        "posteriorRate": 0.10525777092627236,
        "lift": 1.2643204217355004,
        "averagePayoutYen": 148910.26315789475,
        "medianPayoutYen": 50060
      },
      "robustLift": 1.2355869773981798,
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
        "posteriorRate": 0.1238718355290641,
        "lift": 1.2351192116839473,
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
      "robustLift": 1.2351192116839473,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2107,
        "highPayoutCount": 272,
        "observedRate": 0.129093497864262,
        "posteriorRate": 0.12351690873496814,
        "lift": 1.2349571422250647,
        "averagePayoutYen": 25382.216421452304,
        "medianPayoutYen": 7370
      },
      "validation": {
        "count": 909,
        "highPayoutCount": 109,
        "observedRate": 0.11991199119911991,
        "posteriorRate": 0.10776307091905621,
        "lift": 1.257792742484178,
        "averagePayoutYen": 25466.105610561055,
        "medianPayoutYen": 7470
      },
      "robustLift": 1.2349571422250647,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 3288,
        "highPayoutCount": 422,
        "observedRate": 0.128345498783455,
        "posteriorRate": 0.12460954729665163,
        "lift": 1.2455732001449262,
        "averagePayoutYen": 13968.09914841849,
        "medianPayoutYen": 4560
      },
      "validation": {
        "count": 1202,
        "highPayoutCount": 146,
        "observedRate": 0.12146422628951747,
        "posteriorRate": 0.1126273739815695,
        "lift": 1.2324683789812794,
        "averagePayoutYen": 14502.212978369384,
        "medianPayoutYen": 4800
      },
      "robustLift": 1.2324683789812794,
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
        "posteriorRate": 0.12346625660588004,
        "lift": 1.2310752067029993,
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
      "robustLift": 1.2310752067029993,
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
        "count": 9853,
        "highPayoutCount": 1228,
        "observedRate": 0.12463209174870597,
        "posteriorRate": 0.1234565536802814,
        "lift": 1.230978459369231,
        "averagePayoutYen": 2239.3981528468485,
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
      "robustLift": 1.230978459369231,
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
        "count": 18964,
        "highPayoutCount": 2348,
        "observedRate": 0.12381354144695211,
        "posteriorRate": 0.12320463823620487,
        "lift": 1.2306906872344259,
        "averagePayoutYen": 6935.785699219574,
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
      "robustLift": 1.2306906872344259,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 18912,
        "highPayoutCount": 2336,
        "observedRate": 0.12351945854483926,
        "posteriorRate": 0.12291474166287433,
        "lift": 1.2286322472028368,
        "averagePayoutYen": 13807.434961928933,
        "medianPayoutYen": 4800
      },
      "validation": {
        "count": 6776,
        "highPayoutCount": 844,
        "observedRate": 0.12455726092089728,
        "posteriorRate": 0.12227759627771183,
        "lift": 1.3380696498773035,
        "averagePayoutYen": 13701.15997638725,
        "medianPayoutYen": 4810
      },
      "robustLift": 1.2286322472028368,
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
        "count": 2784,
        "highPayoutCount": 355,
        "observedRate": 0.12751436781609196,
        "posteriorRate": 0.12334198496634949,
        "lift": 1.2320626432267563,
        "averagePayoutYen": 6348.523706896552,
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
      "betType": "3連単",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 1748,
        "highPayoutCount": 226,
        "observedRate": 0.12929061784897025,
        "posteriorRate": 0.12278437608377568,
        "lift": 1.2273705496853142,
        "averagePayoutYen": 182720.7837528604,
        "medianPayoutYen": 45100
      },
      "validation": {
        "count": 808,
        "highPayoutCount": 106,
        "observedRate": 0.1311881188118812,
        "posteriorRate": 0.11286408585681555,
        "lift": 1.3556848807793223,
        "averagePayoutYen": 176134.60396039605,
        "medianPayoutYen": 40600
      },
      "robustLift": 1.2273705496853142,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 19497,
        "highPayoutCount": 2405,
        "observedRate": 0.123352310611889,
        "posteriorRate": 0.12276946367753745,
        "lift": 1.2271800762493874,
        "averagePayoutYen": 13709.268605426476,
        "medianPayoutYen": 4560
      },
      "validation": {
        "count": 7066,
        "highPayoutCount": 875,
        "observedRate": 0.1238324370223606,
        "posteriorRate": 0.12168805055731315,
        "lift": 1.3316183189737345,
        "averagePayoutYen": 14042.431361449193,
        "medianPayoutYen": 4470
      },
      "robustLift": 1.2271800762493874,
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
        "count": 6406,
        "highPayoutCount": 798,
        "observedRate": 0.12457071495472995,
        "posteriorRate": 0.12279975074275871,
        "lift": 1.2266462675218615,
        "averagePayoutYen": 6794.628473306276,
        "medianPayoutYen": 2480
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
      "robustLift": 1.2266462675218615,
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
        "count": 17383,
        "highPayoutCount": 2148,
        "observedRate": 0.12356900419950527,
        "posteriorRate": 0.12291817369859381,
        "lift": 1.2256103023888465,
        "averagePayoutYen": 2230.6891790830123,
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
      "robustLift": 1.2256103023888465,
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
        "count": 19517,
        "highPayoutCount": 2404,
        "observedRate": 0.1231746682379464,
        "posteriorRate": 0.1225985451680817,
        "lift": 1.2246364257616842,
        "averagePayoutYen": 6793.975508531024,
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
      "robustLift": 1.2246364257616842,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 2287,
        "highPayoutCount": 306,
        "observedRate": 0.13379973764757325,
        "posteriorRate": 0.12774283366929592,
        "lift": 1.2769360156382374,
        "averagePayoutYen": 192158.78880629645,
        "medianPayoutYen": 41940
      },
      "validation": {
        "count": 1060,
        "highPayoutCount": 117,
        "observedRate": 0.11037735849056604,
        "posteriorRate": 0.10168347711584279,
        "lift": 1.221387224328401,
        "averagePayoutYen": 159163.84905660377,
        "medianPayoutYen": 41660
      },
      "robustLift": 1.221387224328401,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 25794,
        "highPayoutCount": 3162,
        "observedRate": 0.12258664805768783,
        "posteriorRate": 0.12215747246794181,
        "lift": 1.2213651122385771,
        "averagePayoutYen": 29130.9901527487,
        "medianPayoutYen": 6610
      },
      "validation": {
        "count": 9557,
        "highPayoutCount": 1038,
        "observedRate": 0.10861148896097102,
        "posteriorRate": 0.10747123067763252,
        "lift": 1.2543864314492663,
        "averagePayoutYen": 25387.523281364443,
        "medianPayoutYen": 6550
      },
      "robustLift": 1.2213651122385771,
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
        "count": 1185,
        "highPayoutCount": 159,
        "observedRate": 0.1341772151898734,
        "posteriorRate": 0.12406829592254703,
        "lift": 1.239317760750132,
        "averagePayoutYen": 7195.0970464135025,
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
        "posteriorRate": 0.12197288695101956,
        "lift": 1.2183867280867162,
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
      "robustLift": 1.2183867280867162,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2055,
        "highPayoutCount": 261,
        "observedRate": 0.12700729927007298,
        "posteriorRate": 0.12172547204385986,
        "lift": 1.2170458492758922,
        "averagePayoutYen": 26424.924574209246,
        "medianPayoutYen": 7400
      },
      "validation": {
        "count": 688,
        "highPayoutCount": 88,
        "observedRate": 0.12790697674418605,
        "posteriorRate": 0.11013313714221397,
        "lift": 1.2854557634919392,
        "averagePayoutYen": 24494.6511627907,
        "medianPayoutYen": 8580
      },
      "robustLift": 1.2170458492758922,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 21764,
        "highPayoutCount": 2660,
        "observedRate": 0.12222018011394964,
        "posteriorRate": 0.12172203006810671,
        "lift": 1.216751183811614,
        "averagePayoutYen": 189178.2971880169,
        "medianPayoutYen": 38250
      },
      "validation": {
        "count": 9588,
        "highPayoutCount": 991,
        "observedRate": 0.10335836462244473,
        "posteriorRate": 0.1023618382534412,
        "lift": 1.2295354668004759,
        "averagePayoutYen": 163234.94055068836,
        "medianPayoutYen": 34570
      },
      "robustLift": 1.216751183811614,
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
        "count": 7942,
        "highPayoutCount": 991,
        "observedRate": 0.1247796524804835,
        "posteriorRate": 0.12340420183827037,
        "lift": 1.2151280181009545,
        "averagePayoutYen": 401.1181062704608,
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
      "robustLift": 1.2151280181009545,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 40205,
        "highPayoutCount": 4891,
        "observedRate": 0.12165153587862206,
        "posteriorRate": 0.12138578997843169,
        "lift": 1.2136496114888344,
        "averagePayoutYen": 28082.70812088049,
        "medianPayoutYen": 6690
      },
      "validation": {
        "count": 15641,
        "highPayoutCount": 1776,
        "observedRate": 0.11354772712742152,
        "posteriorRate": 0.11268435455826468,
        "lift": 1.315233151265327,
        "averagePayoutYen": 26132.868103062465,
        "medianPayoutYen": 6760
      },
      "robustLift": 1.2136496114888344,
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
        "count": 3527,
        "highPayoutCount": 439,
        "observedRate": 0.1244683867309328,
        "posteriorRate": 0.12144402250546107,
        "lift": 1.2131039030463928,
        "averagePayoutYen": 6544.298270484831,
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
      "robustLift": 1.2131039030463928,
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
        "count": 2066,
        "highPayoutCount": 262,
        "observedRate": 0.12681510164569215,
        "posteriorRate": 0.12164680446295918,
        "lift": 1.2129335501523961,
        "averagePayoutYen": 2357.594385285576,
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
      "robustLift": 1.2129335501523961,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 1179,
        "highPayoutCount": 157,
        "observedRate": 0.13316369804919423,
        "posteriorRate": 0.1233001579271688,
        "lift": 1.23248479446041,
        "averagePayoutYen": 14372.502120441051,
        "medianPayoutYen": 4590
      },
      "validation": {
        "count": 564,
        "highPayoutCount": 72,
        "observedRate": 0.1276595744680851,
        "posteriorRate": 0.11061258507202187,
        "lift": 1.2104207760446615,
        "averagePayoutYen": 13231.77304964539,
        "medianPayoutYen": 4580
      },
      "robustLift": 1.2104207760446615,
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
        "count": 3199,
        "highPayoutCount": 398,
        "observedRate": 0.1244138793372929,
        "posteriorRate": 0.1211287046849126,
        "lift": 1.209954194473538,
        "averagePayoutYen": 6921.316036261332,
        "medianPayoutYen": 2160
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
      "robustLift": 1.209954194473538,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 2765,
        "highPayoutCount": 345,
        "observedRate": 0.12477396021699819,
        "posteriorRate": 0.12098599615201462,
        "lift": 1.209393681326407,
        "averagePayoutYen": 181450.8282097649,
        "medianPayoutYen": 39660
      },
      "validation": {
        "count": 1406,
        "highPayoutCount": 174,
        "observedRate": 0.12375533428165007,
        "posteriorRate": 0.1131302331063561,
        "lift": 1.3588817507094157,
        "averagePayoutYen": 175772.56756756757,
        "medianPayoutYen": 38130
      },
      "robustLift": 1.209393681326407,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 3565,
        "highPayoutCount": 442,
        "observedRate": 0.12398316970546984,
        "posteriorRate": 0.12104675981045307,
        "lift": 1.2091356474179424,
        "averagePayoutYen": 6504.863955119215,
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
      "robustLift": 1.2091356474179424,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 29132,
        "highPayoutCount": 3532,
        "observedRate": 0.12124124673898119,
        "posteriorRate": 0.12088311896166516,
        "lift": 1.2086237638643818,
        "averagePayoutYen": 28030.75449677331,
        "medianPayoutYen": 6690
      },
      "validation": {
        "count": 10872,
        "highPayoutCount": 1222,
        "observedRate": 0.11239882266372332,
        "posteriorRate": 0.11122389790054082,
        "lift": 1.298186942678922,
        "averagePayoutYen": 25991.545253863136,
        "medianPayoutYen": 6770
      },
      "robustLift": 1.2086237638643818,
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
        "count": 11769,
        "highPayoutCount": 1455,
        "observedRate": 0.1236298750955901,
        "posteriorRate": 0.12273031803070164,
        "lift": 1.2084924653132585,
        "averagePayoutYen": 397.3727589429858,
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
      "robustLift": 1.2084924653132585,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 10967,
        "highPayoutCount": 1336,
        "observedRate": 0.12182000547095832,
        "posteriorRate": 0.1208693277293156,
        "lift": 1.2084858752055367,
        "averagePayoutYen": 29430.175982492932,
        "medianPayoutYen": 6740
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 503,
        "observedRate": 0.10918168005209464,
        "posteriorRate": 0.10688039297531823,
        "lift": 1.247490271497448,
        "averagePayoutYen": 26173.911439114392,
        "medianPayoutYen": 6590
      },
      "robustLift": 1.2084858752055367,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 2776,
        "highPayoutCount": 346,
        "observedRate": 0.12463976945244956,
        "posteriorRate": 0.12088552050052394,
        "lift": 1.2083485406023033,
        "averagePayoutYen": 12946.646253602305,
        "medianPayoutYen": 4510
      },
      "validation": {
        "count": 1249,
        "highPayoutCount": 152,
        "observedRate": 0.12169735788630905,
        "posteriorRate": 0.11303132676765654,
        "lift": 1.2368887877846946,
        "averagePayoutYen": 13010.208166533226,
        "medianPayoutYen": 4620
      },
      "robustLift": 1.2083485406023033,
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
        "count": 18809,
        "highPayoutCount": 2287,
        "observedRate": 0.12159072784305386,
        "posteriorRate": 0.12103918899228097,
        "lift": 1.2068750499457455,
        "averagePayoutYen": 2213.422297836142,
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
      "robustLift": 1.2068750499457455,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 2045,
        "highPayoutCount": 263,
        "observedRate": 0.12860635696821515,
        "posteriorRate": 0.12299448532798288,
        "lift": 1.2294293496263298,
        "averagePayoutYen": 13487.20782396088,
        "medianPayoutYen": 4870
      },
      "validation": {
        "count": 803,
        "highPayoutCount": 98,
        "observedRate": 0.12204234122042341,
        "posteriorRate": 0.11027765964438317,
        "lift": 1.2067557256729016,
        "averagePayoutYen": 13967.260273972603,
        "medianPayoutYen": 4590
      },
      "robustLift": 1.2067557256729016,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 24422,
        "highPayoutCount": 2957,
        "observedRate": 0.12107935468020638,
        "posteriorRate": 0.12065722162893538,
        "lift": 1.2061072031930737,
        "averagePayoutYen": 181988.8588158218,
        "medianPayoutYen": 38400
      },
      "validation": {
        "count": 10908,
        "highPayoutCount": 1156,
        "observedRate": 0.10597726439310598,
        "posteriorRate": 0.1049812608959252,
        "lift": 1.2609990776189934,
        "averagePayoutYen": 166836.96828016135,
        "medianPayoutYen": 35570
      },
      "robustLift": 1.2061072031930737,
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
        "posteriorRate": 0.12089780017706497,
        "lift": 1.2054652698997435,
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
      "robustLift": 1.2054652698997435,
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
        "count": 17347,
        "highPayoutCount": 2107,
        "observedRate": 0.12146192425203205,
        "posteriorRate": 0.12086881269972283,
        "lift": 1.2051762373685744,
        "averagePayoutYen": 2252.554332161181,
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
      "robustLift": 1.2051762373685744,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 6385,
        "highPayoutCount": 780,
        "observedRate": 0.12216131558339859,
        "posteriorRate": 0.12055496952210841,
        "lift": 1.2050444162480443,
        "averagePayoutYen": 13462.42129992169,
        "medianPayoutYen": 4840
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 285,
        "observedRate": 0.114,
        "posteriorRate": 0.11023059683887709,
        "lift": 1.2062407228138108,
        "averagePayoutYen": 13115.088,
        "medianPayoutYen": 4710
      },
      "robustLift": 1.2050444162480443,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 33866,
        "highPayoutCount": 4088,
        "observedRate": 0.12071103761885077,
        "posteriorRate": 0.12041026821382551,
        "lift": 1.2036386208007728,
        "averagePayoutYen": 180167.30171853775,
        "medianPayoutYen": 38250
      },
      "validation": {
        "count": 15698,
        "highPayoutCount": 1694,
        "observedRate": 0.10791183590266276,
        "posteriorRate": 0.10715064972840566,
        "lift": 1.2870570359003934,
        "averagePayoutYen": 165716.67091349215,
        "medianPayoutYen": 35400
      },
      "robustLift": 1.2036386208007728,
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
        "count": 1103,
        "highPayoutCount": 143,
        "observedRate": 0.12964641885766093,
        "posteriorRate": 0.12043361112257751,
        "lift": 1.203010907384927,
        "averagePayoutYen": 6773.463281958296,
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
      "robustLift": 1.203010907384927,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 6276,
        "highPayoutCount": 764,
        "observedRate": 0.12173358827278521,
        "posteriorRate": 0.12013113652185094,
        "lift": 1.2011052298078904,
        "averagePayoutYen": 28139.2511153601,
        "medianPayoutYen": 6540
      },
      "validation": {
        "count": 2618,
        "highPayoutCount": 278,
        "observedRate": 0.10618792971734148,
        "posteriorRate": 0.1028987065185857,
        "lift": 1.2010166856445776,
        "averagePayoutYen": 25602.039724980903,
        "medianPayoutYen": 5470
      },
      "robustLift": 1.2010166856445776,
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
        "posteriorRate": 0.12891563105297493,
        "lift": 1.2854106175130482,
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
        "count": 2867,
        "highPayoutCount": 360,
        "observedRate": 0.12556679455877223,
        "posteriorRate": 0.12178648013943918,
        "lift": 1.2165247111177673,
        "averagePayoutYen": 6487.767701430066,
        "medianPayoutYen": 2260
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
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 10668,
        "highPayoutCount": 1291,
        "observedRate": 0.12101612298462693,
        "posteriorRate": 0.12008014672542011,
        "lift": 1.1994801527958299,
        "averagePayoutYen": 6592.130671166105,
        "medianPayoutYen": 2260
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
      "robustLift": 1.1994801527958299,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 1061,
        "highPayoutCount": 138,
        "observedRate": 0.13006597549481622,
        "posteriorRate": 0.12044111535686222,
        "lift": 1.2042044862591443,
        "averagePayoutYen": 25044.128180961357,
        "medianPayoutYen": 5690
      },
      "validation": {
        "count": 472,
        "highPayoutCount": 57,
        "observedRate": 0.12076271186440678,
        "posteriorRate": 0.10271416350303517,
        "lift": 1.1988627300858135,
        "averagePayoutYen": 22860.741525423728,
        "medianPayoutYen": 6990
      },
      "robustLift": 1.1988627300858135,
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
        "count": 32865,
        "highPayoutCount": 3961,
        "observedRate": 0.12052335311121254,
        "posteriorRate": 0.1202201618537975,
        "lift": 1.198708575707991,
        "averagePayoutYen": 2264.9277346721437,
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
      "robustLift": 1.198708575707991,
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
        "count": 4563,
        "highPayoutCount": 579,
        "observedRate": 0.12689020381328073,
        "posteriorRate": 0.12426342094646518,
        "lift": 1.2390236881937338,
        "averagePayoutYen": 2308.9590181897875,
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
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 2855,
        "highPayoutCount": 357,
        "observedRate": 0.12504378283712786,
        "posteriorRate": 0.12131772433970683,
        "lift": 1.2126687675091898,
        "averagePayoutYen": 13060.665499124343,
        "medianPayoutYen": 4400
      },
      "validation": {
        "count": 1306,
        "highPayoutCount": 152,
        "observedRate": 0.11638591117917305,
        "posteriorRate": 0.10946389286635176,
        "lift": 1.1978507695655762,
        "averagePayoutYen": 12803.392036753447,
        "medianPayoutYen": 4520
      },
      "robustLift": 1.1978507695655762,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 1397,
        "highPayoutCount": 177,
        "observedRate": 0.12670007158196134,
        "posteriorRate": 0.11966714869375958,
        "lift": 1.1964661476929355,
        "averagePayoutYen": 25748.962061560487,
        "medianPayoutYen": 7340
      },
      "validation": {
        "count": 648,
        "highPayoutCount": 75,
        "observedRate": 0.11574074074074074,
        "posteriorRate": 0.10264648686842351,
        "lift": 1.1980728195986279,
        "averagePayoutYen": 26166.6512345679,
        "medianPayoutYen": 7750
      },
      "robustLift": 1.1964661476929355,
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
        "count": 3824,
        "highPayoutCount": 468,
        "observedRate": 0.12238493723849372,
        "posteriorRate": 0.1198301804467977,
        "lift": 1.1948200926970811,
        "averagePayoutYen": 2211.4225941422596,
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
      "robustLift": 1.1948200926970811,
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
        "count": 1751,
        "highPayoutCount": 220,
        "observedRate": 0.125642490005711,
        "posteriorRate": 0.12005345412994206,
        "lift": 1.1947917687725016,
        "averagePayoutYen": 1139.0119931467732,
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
      "robustLift": 1.1947917687725016,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 3516,
        "highPayoutCount": 430,
        "observedRate": 0.1222980659840728,
        "posteriorRate": 0.11952713275889353,
        "lift": 1.1947703565619405,
        "averagePayoutYen": 13179.00739476678,
        "medianPayoutYen": 4520
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 207,
        "observedRate": 0.12147887323943662,
        "posteriorRate": 0.11465144760282725,
        "lift": 1.254617583448557,
        "averagePayoutYen": 13071.420187793427,
        "medianPayoutYen": 4690
      },
      "robustLift": 1.1947703565619405,
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
        "posteriorRate": 0.12133572810946106,
        "lift": 1.1947603130703266,
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
      "robustLift": 1.1947603130703266,
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
        "count": 2052,
        "highPayoutCount": 255,
        "observedRate": 0.12426900584795321,
        "posteriorRate": 0.11953568911813939,
        "lift": 1.1940415677192704,
        "averagePayoutYen": 6349.69298245614,
        "medianPayoutYen": 2340
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
      "robustLift": 1.1940415677192704,
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
        "count": 77317,
        "highPayoutCount": 9263,
        "observedRate": 0.11980547615660204,
        "posteriorRate": 0.11968009175696767,
        "lift": 1.1933235666831266,
        "averagePayoutYen": 2241.6778974869694,
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
      "robustLift": 1.1933235666831266,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 4597,
        "highPayoutCount": 558,
        "observedRate": 0.12138351098542528,
        "posteriorRate": 0.11928753797764605,
        "lift": 1.1926706919133911,
        "averagePayoutYen": 28676.151838155318,
        "medianPayoutYen": 7020
      },
      "validation": {
        "count": 2043,
        "highPayoutCount": 222,
        "observedRate": 0.10866372980910426,
        "posteriorRate": 0.10414399013957931,
        "lift": 1.2155514301304386,
        "averagePayoutYen": 25569.579050416054,
        "medianPayoutYen": 6600
      },
      "robustLift": 1.1926706919133911,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 4872,
        "highPayoutCount": 616,
        "observedRate": 0.12643678160919541,
        "posteriorRate": 0.12397976125024716,
        "lift": 1.2393197943339715,
        "averagePayoutYen": 191652.3132183908,
        "medianPayoutYen": 36310
      },
      "validation": {
        "count": 1430,
        "highPayoutCount": 150,
        "observedRate": 0.1048951048951049,
        "posteriorRate": 0.09928819911954131,
        "lift": 1.192615962503192,
        "averagePayoutYen": 157186.5104895105,
        "medianPayoutYen": 34830
      },
      "robustLift": 1.192615962503192,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=10",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 1923,
        "highPayoutCount": 239,
        "observedRate": 0.12428497139885596,
        "posteriorRate": 0.1192815837541592,
        "lift": 1.1923561261555524,
        "averagePayoutYen": 163125.70982839313,
        "medianPayoutYen": 41940
      },
      "validation": {
        "count": 912,
        "highPayoutCount": 113,
        "observedRate": 0.12390350877192982,
        "posteriorRate": 0.10950865743676681,
        "lift": 1.315380619746559,
        "averagePayoutYen": 155743.9802631579,
        "medianPayoutYen": 39360
      },
      "robustLift": 1.1923561261555524,
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
        "count": 590,
        "highPayoutCount": 80,
        "observedRate": 0.13559322033898305,
        "posteriorRate": 0.1193165858986163,
        "lift": 1.1918529464492402,
        "averagePayoutYen": 7283.186440677966,
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
      "robustLift": 1.1918529464492402,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 120514,
        "highPayoutCount": 14410,
        "observedRate": 0.11957117015450487,
        "posteriorRate": 0.11949151090164735,
        "lift": 1.1914432374188744,
        "averagePayoutYen": 2221.15779079609,
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
      "robustLift": 1.1914432374188744,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 3554,
        "highPayoutCount": 433,
        "observedRate": 0.12183455261676984,
        "posteriorRate": 0.11914676002953044,
        "lift": 1.1909682235148416,
        "averagePayoutYen": 13100.928531232414,
        "medianPayoutYen": 4480
      },
      "validation": {
        "count": 1732,
        "highPayoutCount": 207,
        "observedRate": 0.1195150115473441,
        "posteriorRate": 0.11321316779418963,
        "lift": 1.2388786531902416,
        "averagePayoutYen": 12955.098152424942,
        "medianPayoutYen": 4680
      },
      "robustLift": 1.1909682235148416,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 1792,
        "highPayoutCount": 223,
        "observedRate": 0.12444196428571429,
        "posteriorRate": 0.11911835839281315,
        "lift": 1.1907245016128567,
        "averagePayoutYen": 162105.10044642858,
        "medianPayoutYen": 43030
      },
      "validation": {
        "count": 694,
        "highPayoutCount": 82,
        "observedRate": 0.11815561959654179,
        "posteriorRate": 0.1035395513406321,
        "lift": 1.2436817544709948,
        "averagePayoutYen": 155058.530259366,
        "medianPayoutYen": 46790
      },
      "robustLift": 1.1907245016128567,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 901,
        "highPayoutCount": 117,
        "observedRate": 0.12985571587125416,
        "posteriorRate": 0.11921433078967007,
        "lift": 1.1916838557036777,
        "averagePayoutYen": 159353.0410654828,
        "medianPayoutYen": 31800
      },
      "validation": {
        "count": 475,
        "highPayoutCount": 55,
        "observedRate": 0.11578947368421053,
        "posteriorRate": 0.09910381979560484,
        "lift": 1.1904012609894963,
        "averagePayoutYen": 144528,
        "medianPayoutYen": 36290
      },
      "robustLift": 1.1904012609894963,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 3190,
        "highPayoutCount": 389,
        "observedRate": 0.1219435736677116,
        "posteriorRate": 0.11897587131699632,
        "lift": 1.1892600526310082,
        "averagePayoutYen": 14327.630094043887,
        "medianPayoutYen": 4230
      },
      "validation": {
        "count": 1401,
        "highPayoutCount": 176,
        "observedRate": 0.1256245538900785,
        "posteriorRate": 0.11661851158160509,
        "lift": 1.276142937965599,
        "averagePayoutYen": 13733.433261955746,
        "medianPayoutYen": 4410
      },
      "robustLift": 1.1892600526310082,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 2056,
        "highPayoutCount": 254,
        "observedRate": 0.12354085603112841,
        "posteriorRate": 0.11894403957735383,
        "lift": 1.188941868650143,
        "averagePayoutYen": 12655.442607003892,
        "medianPayoutYen": 4490
      },
      "validation": {
        "count": 692,
        "highPayoutCount": 94,
        "observedRate": 0.13583815028901733,
        "posteriorRate": 0.11719109942670408,
        "lift": 1.2824087007932845,
        "averagePayoutYen": 12772.182080924855,
        "medianPayoutYen": 5010
      },
      "robustLift": 1.188941868650143,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 690,
        "highPayoutCount": 101,
        "observedRate": 0.1463768115942029,
        "posteriorRate": 0.126897967287447,
        "lift": 1.2687619261241199,
        "averagePayoutYen": 33199.057971014496,
        "medianPayoutYen": 7650
      },
      "validation": {
        "count": 343,
        "highPayoutCount": 43,
        "observedRate": 0.12536443148688048,
        "posteriorRate": 0.10182463454916986,
        "lift": 1.1884802952418612,
        "averagePayoutYen": 28516.00583090379,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.1884802952418612,
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
        "count": 87320,
        "highPayoutCount": 10417,
        "observedRate": 0.11929683921209346,
        "posteriorRate": 0.11918863243283936,
        "lift": 1.1884232529806655,
        "averagePayoutYen": 2213.1103985341274,
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
      "robustLift": 1.1884232529806655,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 1099,
        "highPayoutCount": 140,
        "observedRate": 0.12738853503184713,
        "posteriorRate": 0.1188373765851885,
        "lift": 1.187875685782372,
        "averagePayoutYen": 13187.8889899909,
        "medianPayoutYen": 4560
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 76,
        "observedRate": 0.12357723577235773,
        "posteriorRate": 0.10914061929742715,
        "lift": 1.1943132241414487,
        "averagePayoutYen": 14065.447154471545,
        "medianPayoutYen": 4850
      },
      "robustLift": 1.187875685782372,
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
        "posteriorRate": 0.1221346413999022,
        "lift": 1.217797745232851,
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
        "posteriorRate": 0.11899167080017008,
        "lift": 1.1864593594496182,
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
      "robustLift": 1.1864593594496182,
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
        "count": 6160,
        "highPayoutCount": 742,
        "observedRate": 0.12045454545454545,
        "posteriorRate": 0.11894079583362661,
        "lift": 1.1859520879758145,
        "averagePayoutYen": 2170.4886363636365,
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
      "robustLift": 1.1859520879758145,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 692,
        "highPayoutCount": 99,
        "observedRate": 0.1430635838150289,
        "posteriorRate": 0.12501617234591256,
        "lift": 1.249679910960853,
        "averagePayoutYen": 216144.85549132948,
        "medianPayoutYen": 42830
      },
      "validation": {
        "count": 347,
        "highPayoutCount": 42,
        "observedRate": 0.12103746397694524,
        "posteriorRate": 0.09873226009529483,
        "lift": 1.1859382126761806,
        "averagePayoutYen": 172797.29106628243,
        "medianPayoutYen": 36870
      },
      "robustLift": 1.1859382126761806,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 6004,
        "highPayoutCount": 721,
        "observedRate": 0.12008660892738175,
        "posteriorRate": 0.11854375477737729,
        "lift": 1.1852341361831158,
        "averagePayoutYen": 28611.354097268486,
        "medianPayoutYen": 5950
      },
      "validation": {
        "count": 2671,
        "highPayoutCount": 302,
        "observedRate": 0.11306626731561213,
        "posteriorRate": 0.10874745093817414,
        "lift": 1.2692822632757947,
        "averagePayoutYen": 24576.91875701984,
        "medianPayoutYen": 6220
      },
      "robustLift": 1.1852341361831158,
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
        "count": 3524,
        "highPayoutCount": 428,
        "observedRate": 0.12145289443813848,
        "posteriorRate": 0.11882348415804007,
        "lift": 1.184782379755597,
        "averagePayoutYen": 2289.523269012486,
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
      "robustLift": 1.184782379755597,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 10977,
        "highPayoutCount": 1308,
        "observedRate": 0.1191582399562722,
        "posteriorRate": 0.11832543043998574,
        "lift": 1.1827583700371826,
        "averagePayoutYen": 13604.017491117791,
        "medianPayoutYen": 4160
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 523,
        "observedRate": 0.1135228999348817,
        "posteriorRate": 0.11135535353762116,
        "lift": 1.2185488057979377,
        "averagePayoutYen": 12930.573041024529,
        "medianPayoutYen": 4050
      },
      "robustLift": 1.1827583700371826,
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
        "posteriorRate": 0.11882052486042496,
        "lift": 1.1825214534086197,
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
      "robustLift": 1.1825214534086197,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=不良"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 1734,
        "highPayoutCount": 214,
        "observedRate": 0.12341407151095732,
        "posteriorRate": 0.11818230861071072,
        "lift": 1.1813676113289657,
        "averagePayoutYen": 161014.0426758939,
        "medianPayoutYen": 35330
      },
      "validation": {
        "count": 852,
        "highPayoutCount": 92,
        "observedRate": 0.107981220657277,
        "posteriorRate": 0.09883596471946357,
        "lift": 1.1871838772291263,
        "averagePayoutYen": 135259.10798122064,
        "medianPayoutYen": 31000
      },
      "robustLift": 1.1813676113289657,
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
        "posteriorRate": 0.1184509617248175,
        "lift": 1.181067979205292,
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
      "robustLift": 1.181067979205292,
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
        "count": 40241,
        "highPayoutCount": 4772,
        "observedRate": 0.11858552222857285,
        "posteriorRate": 0.11836100489069865,
        "lift": 1.1801710245943595,
        "averagePayoutYen": 2206.112174150742,
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
      "robustLift": 1.1801710245943595,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 9504,
        "highPayoutCount": 1131,
        "observedRate": 0.11900252525252525,
        "posteriorRate": 0.11805470586128826,
        "lift": 1.180092075615911,
        "averagePayoutYen": 194834.515993266,
        "medianPayoutYen": 37520
      },
      "validation": {
        "count": 4624,
        "highPayoutCount": 503,
        "observedRate": 0.108780276816609,
        "posteriorRate": 0.10628927094081084,
        "lift": 1.2767104478772753,
        "averagePayoutYen": 164609.39013840831,
        "medianPayoutYen": 34260
      },
      "robustLift": 1.180092075615911,
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
        "count": 2742,
        "highPayoutCount": 334,
        "observedRate": 0.12180889861415026,
        "posteriorRate": 0.11851953277189993,
        "lift": 1.1795259305189065,
        "averagePayoutYen": 1116.615609044493,
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
      "robustLift": 1.1795259305189065,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 526,
        "highPayoutCount": 72,
        "observedRate": 0.13688212927756654,
        "posteriorRate": 0.11891674568427088,
        "lift": 1.1889634052295233,
        "averagePayoutYen": 27456.083650190114,
        "medianPayoutYen": 7820
      },
      "validation": {
        "count": 211,
        "highPayoutCount": 29,
        "observedRate": 0.13744075829383887,
        "posteriorRate": 0.10103820945843908,
        "lift": 1.1793012716376468,
        "averagePayoutYen": 28423.6018957346,
        "medianPayoutYen": 10180
      },
      "robustLift": 1.1793012716376468,
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
        "count": 25892,
        "highPayoutCount": 3065,
        "observedRate": 0.11837633245790205,
        "posteriorRate": 0.11803027730484585,
        "lift": 1.1790040145427325,
        "averagePayoutYen": 6844.772902827128,
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
      "robustLift": 1.1790040145427325,
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
        "count": 2295,
        "highPayoutCount": 289,
        "observedRate": 0.1259259259259259,
        "posteriorRate": 0.1213077204398897,
        "lift": 1.2117423822047186,
        "averagePayoutYen": 6478.666666666667,
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
        "going=不良",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 823,
        "highPayoutCount": 106,
        "observedRate": 0.12879708383961117,
        "posteriorRate": 0.11792840320206181,
        "lift": 1.178829535794267,
        "averagePayoutYen": 165279.2588092345,
        "medianPayoutYen": 39000
      },
      "validation": {
        "count": 362,
        "highPayoutCount": 44,
        "observedRate": 0.12154696132596685,
        "posteriorRate": 0.09933436693818413,
        "lift": 1.1931705145844629,
        "averagePayoutYen": 145041.3535911602,
        "medianPayoutYen": 43640
      },
      "robustLift": 1.178829535794267,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=04",
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 3520,
        "highPayoutCount": 424,
        "observedRate": 0.12045454545454545,
        "posteriorRate": 0.11791524314336511,
        "lift": 1.1786979859261841,
        "averagePayoutYen": 179399.38920454544,
        "medianPayoutYen": 40400
      },
      "validation": {
        "count": 1645,
        "highPayoutCount": 179,
        "observedRate": 0.1088145896656535,
        "posteriorRate": 0.10285604862504184,
        "lift": 1.2354717531188122,
        "averagePayoutYen": 165617.60486322187,
        "medianPayoutYen": 37380
      },
      "robustLift": 1.1786979859261841,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 25810,
        "highPayoutCount": 3052,
        "observedRate": 0.11824874079814025,
        "posteriorRate": 0.11790273527783035,
        "lift": 1.1785331900470952,
        "averagePayoutYen": 13795.411855869817,
        "medianPayoutYen": 4140
      },
      "validation": {
        "count": 9558,
        "highPayoutCount": 1048,
        "observedRate": 0.10964636953337518,
        "posteriorRate": 0.10873849577616139,
        "lift": 1.1899128327722444,
        "averagePayoutYen": 12764.961288972589,
        "medianPayoutYen": 4040
      },
      "robustLift": 1.1785331900470952,
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
        "posteriorRate": 0.12806081001740227,
        "lift": 1.2768872443097856,
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
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 10645,
        "highPayoutCount": 1263,
        "observedRate": 0.11864725223109442,
        "posteriorRate": 0.11781255856076414,
        "lift": 1.1776318008318103,
        "averagePayoutYen": 13213.90136214185,
        "medianPayoutYen": 4380
      },
      "validation": {
        "count": 3980,
        "highPayoutCount": 448,
        "observedRate": 0.11256281407035176,
        "posteriorRate": 0.11019906038317662,
        "lift": 1.2058956230120315,
        "averagePayoutYen": 13320.062814070352,
        "medianPayoutYen": 4600
      },
      "robustLift": 1.1776318008318103,
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
        "count": 5806,
        "highPayoutCount": 693,
        "observedRate": 0.11935928349982776,
        "posteriorRate": 0.11783302864406783,
        "lift": 1.1770336983812293,
        "averagePayoutYen": 6432.166724078539,
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
      "robustLift": 1.1770336983812293,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 953,
        "highPayoutCount": 121,
        "observedRate": 0.12696747114375656,
        "posteriorRate": 0.11770081034847059,
        "lift": 1.176554484401522,
        "averagePayoutYen": 163045.67681007346,
        "medianPayoutYen": 37940
      },
      "validation": {
        "count": 532,
        "highPayoutCount": 71,
        "observedRate": 0.13345864661654136,
        "posteriorRate": 0.10913393827588636,
        "lift": 1.3108796210711395,
        "averagePayoutYen": 195847.03007518797,
        "medianPayoutYen": 48820
      },
      "robustLift": 1.176554484401522,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 1522,
        "highPayoutCount": 215,
        "observedRate": 0.14126149802890933,
        "posteriorRate": 0.13106260191496633,
        "lift": 1.3104011262197806,
        "averagePayoutYen": 28782.87779237845,
        "medianPayoutYen": 7180
      },
      "validation": {
        "count": 560,
        "highPayoutCount": 64,
        "observedRate": 0.11428571428571428,
        "posteriorRate": 0.10079072351410395,
        "lift": 1.1764126566232753,
        "averagePayoutYen": 22992.303571428572,
        "medianPayoutYen": 6450
      },
      "robustLift": 1.1764126566232753,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 954,
        "highPayoutCount": 121,
        "observedRate": 0.12683438155136267,
        "posteriorRate": 0.11761250417610862,
        "lift": 1.1759232281218899,
        "averagePayoutYen": 25371.236897274634,
        "medianPayoutYen": 7050
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 73,
        "observedRate": 0.13799621928166353,
        "posteriorRate": 0.11257353442657939,
        "lift": 1.3139396770151397,
        "averagePayoutYen": 30496.843100189035,
        "medianPayoutYen": 8860
      },
      "robustLift": 1.1759232281218899,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 5044,
        "highPayoutCount": 602,
        "observedRate": 0.11934972244250595,
        "posteriorRate": 0.1176080947756724,
        "lift": 1.1756276859994839,
        "averagePayoutYen": 176865.28350515463,
        "medianPayoutYen": 33990
      },
      "validation": {
        "count": 2677,
        "highPayoutCount": 288,
        "observedRate": 0.10758311542771759,
        "posteriorRate": 0.10375392644026274,
        "lift": 1.246256755005297,
        "averagePayoutYen": 158547.14979454613,
        "medianPayoutYen": 31350
      },
      "robustLift": 1.1756276859994839,
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
        "posteriorRate": 0.11788356212767102,
        "lift": 1.175410469246356,
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
      "robustLift": 1.175410469246356,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 612,
        "highPayoutCount": 95,
        "observedRate": 0.15522875816993464,
        "posteriorRate": 0.13041301927727317,
        "lift": 1.3036275808190447,
        "averagePayoutYen": 206278.75816993465,
        "medianPayoutYen": 41850
      },
      "validation": {
        "count": 304,
        "highPayoutCount": 37,
        "observedRate": 0.12171052631578948,
        "posteriorRate": 0.09779381131929692,
        "lift": 1.1746658862549995,
        "averagePayoutYen": 157384.44078947368,
        "medianPayoutYen": 32860
      },
      "robustLift": 1.1746658862549995,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 2284,
        "highPayoutCount": 277,
        "observedRate": 0.1212784588441331,
        "posteriorRate": 0.11746442714070274,
        "lift": 1.1741519457455498,
        "averagePayoutYen": 13152.513134851139,
        "medianPayoutYen": 4480
      },
      "validation": {
        "count": 1056,
        "highPayoutCount": 125,
        "observedRate": 0.11837121212121213,
        "posteriorRate": 0.10969909416235943,
        "lift": 1.2004245502529631,
        "averagePayoutYen": 11883.323863636364,
        "medianPayoutYen": 4370
      },
      "robustLift": 1.1741519457455498,
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
        "count": 38600,
        "highPayoutCount": 4608,
        "observedRate": 0.11937823834196891,
        "posteriorRate": 0.11915033943526034,
        "lift": 1.1732413779862356,
        "averagePayoutYen": 391.12720207253886,
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
      "robustLift": 1.1732413779862356,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 13425,
        "highPayoutCount": 1583,
        "observedRate": 0.11791433891992552,
        "posteriorRate": 0.11727171138758076,
        "lift": 1.172515885009747,
        "averagePayoutYen": 27319.866666666665,
        "medianPayoutYen": 6730
      },
      "validation": {
        "count": 4817,
        "highPayoutCount": 509,
        "observedRate": 0.1056674278596637,
        "posteriorRate": 0.10378750553412643,
        "lift": 1.211390600769119,
        "averagePayoutYen": 27027.288768943326,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.172515885009747,
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
        "posteriorRate": 0.11749231008735173,
        "lift": 1.1715093168209887,
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
      "robustLift": 1.1715093168209887,
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
        "posteriorRate": 0.11885921523501415,
        "lift": 1.170374756208397,
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
      "robustLift": 1.170374756208397,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2586,
        "highPayoutCount": 311,
        "observedRate": 0.12026295436968291,
        "posteriorRate": 0.11698268991317626,
        "lift": 1.1696261662034082,
        "averagePayoutYen": 26491.020881670534,
        "medianPayoutYen": 6670
      },
      "validation": {
        "count": 1175,
        "highPayoutCount": 126,
        "observedRate": 0.1072340425531915,
        "posteriorRate": 0.10079890562683594,
        "lift": 1.1765081568899687,
        "averagePayoutYen": 27280.025531914893,
        "medianPayoutYen": 5640
      },
      "robustLift": 1.1696261662034082,
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
        "count": 11023,
        "highPayoutCount": 1299,
        "observedRate": 0.11784450694003447,
        "posteriorRate": 0.11707498729753466,
        "lift": 1.1694616261031672,
        "averagePayoutYen": 6778.788895944843,
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
      "robustLift": 1.1694616261031672,
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
        "posteriorRate": 0.11705550294042054,
        "lift": 1.169266996930188,
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
      "robustLift": 1.169266996930188,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=10",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 1458,
        "highPayoutCount": 179,
        "observedRate": 0.12277091906721536,
        "posteriorRate": 0.1169659231033339,
        "lift": 1.1692084442065975,
        "averagePayoutYen": 152140.5281207133,
        "medianPayoutYen": 36120
      },
      "validation": {
        "count": 699,
        "highPayoutCount": 97,
        "observedRate": 0.13876967095851217,
        "posteriorRate": 0.115618202085667,
        "lift": 1.3887663849887273,
        "averagePayoutYen": 264158.9556509299,
        "medianPayoutYen": 42870
      },
      "robustLift": 1.1692084442065975,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 16032,
        "highPayoutCount": 1882,
        "observedRate": 0.11739021956087824,
        "posteriorRate": 0.11686478230535095,
        "lift": 1.1684472924451685,
        "averagePayoutYen": 27970.122255489023,
        "medianPayoutYen": 6410
      },
      "validation": {
        "count": 6288,
        "highPayoutCount": 690,
        "observedRate": 0.10973282442748092,
        "posteriorRate": 0.10796083779094728,
        "lift": 1.260101044707258,
        "averagePayoutYen": 25668.91062340967,
        "medianPayoutYen": 6410
      },
      "robustLift": 1.1684472924451685,
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
        "count": 9584,
        "highPayoutCount": 1161,
        "observedRate": 0.12113939899833055,
        "posteriorRate": 0.12016841252664404,
        "lift": 1.1832660701716466,
        "averagePayoutYen": 395.8576794657763,
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
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 365,
        "highPayoutCount": 51,
        "observedRate": 0.13972602739726028,
        "posteriorRate": 0.11678529183390493,
        "lift": 1.167402827665466,
        "averagePayoutYen": 171271.20547945207,
        "medianPayoutYen": 49460
      },
      "validation": {
        "count": 165,
        "highPayoutCount": 31,
        "observedRate": 0.18787878787878787,
        "posteriorRate": 0.10921236736949583,
        "lift": 1.3118216845771025,
        "averagePayoutYen": 269529.51515151514,
        "medianPayoutYen": 41550
      },
      "robustLift": 1.167402827665466,
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
        "posteriorRate": 0.11709414052787585,
        "lift": 1.167167108710287,
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
      "robustLift": 1.167167108710287,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=ダート",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 6038,
        "highPayoutCount": 713,
        "observedRate": 0.1180854587611792,
        "posteriorRate": 0.11670366795228845,
        "lift": 1.166836425373872,
        "averagePayoutYen": 25994.827757535608,
        "medianPayoutYen": 6720
      },
      "validation": {
        "count": 2887,
        "highPayoutCount": 331,
        "observedRate": 0.1146518877727745,
        "posteriorRate": 0.1103744218851344,
        "lift": 1.28827199910892,
        "averagePayoutYen": 25496.30758572913,
        "medianPayoutYen": 7760
      },
      "robustLift": 1.166836425373872,
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
        "count": 1752,
        "highPayoutCount": 213,
        "observedRate": 0.12157534246575342,
        "posteriorRate": 0.11680953757970325,
        "lift": 1.1668100498285972,
        "averagePayoutYen": 6575.502283105023,
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
      "robustLift": 1.1668100498285972,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 954,
        "highPayoutCount": 120,
        "observedRate": 0.12578616352201258,
        "posteriorRate": 0.11693326352112546,
        "lift": 1.1688425358023262,
        "averagePayoutYen": 12986.897274633124,
        "medianPayoutYen": 4220
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 64,
        "observedRate": 0.12098298676748583,
        "posteriorRate": 0.10660037951081756,
        "lift": 1.1665156727882688,
        "averagePayoutYen": 14935.973534971645,
        "medianPayoutYen": 5080
      },
      "robustLift": 1.1665156727882688,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 1103,
        "highPayoutCount": 137,
        "observedRate": 0.1242067089755213,
        "posteriorRate": 0.11666829534393498,
        "lift": 1.166233313670398,
        "averagePayoutYen": 166079.80054397098,
        "medianPayoutYen": 40040
      },
      "validation": {
        "count": 620,
        "highPayoutCount": 75,
        "observedRate": 0.12096774193548387,
        "posteriorRate": 0.10413055741135244,
        "lift": 1.2507807176924823,
        "averagePayoutYen": 176520,
        "medianPayoutYen": 42520
      },
      "robustLift": 1.166233313670398,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 5326,
        "highPayoutCount": 629,
        "observedRate": 0.1180998873450995,
        "posteriorRate": 0.11654982448272018,
        "lift": 1.1650490616451101,
        "averagePayoutYen": 185048.54299662035,
        "medianPayoutYen": 36120
      },
      "validation": {
        "count": 2626,
        "highPayoutCount": 277,
        "observedRate": 0.10548362528560548,
        "posteriorRate": 0.10192777488826447,
        "lift": 1.2243216457961859,
        "averagePayoutYen": 166719.45925361768,
        "medianPayoutYen": 28750
      },
      "robustLift": 1.1650490616451101,
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
        "posteriorRate": 0.11680749353577802,
        "lift": 1.1646810489123456,
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
      "robustLift": 1.1646810489123456,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 12430,
      "discovery": {
        "count": 40321,
        "highPayoutCount": 4708,
        "observedRate": 0.11676297710870266,
        "posteriorRate": 0.1165590034205309,
        "lift": 1.1643074650157073,
        "averagePayoutYen": 6666.356489174375,
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
      "robustLift": 1.1643074650157073,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=04",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 4053,
        "highPayoutCount": 480,
        "observedRate": 0.11843079200592153,
        "posteriorRate": 0.1164086494777206,
        "lift": 1.163886746856272,
        "averagePayoutYen": 26595.529237601775,
        "medianPayoutYen": 7050
      },
      "validation": {
        "count": 1635,
        "highPayoutCount": 197,
        "observedRate": 0.12048929663608562,
        "posteriorRate": 0.11233637795079635,
        "lift": 1.3111716258494757,
        "averagePayoutYen": 27959.070336391436,
        "medianPayoutYen": 7120
      },
      "robustLift": 1.163886746856272,
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
        "count": 4625,
        "highPayoutCount": 547,
        "observedRate": 0.11827027027027028,
        "posteriorRate": 0.11649855192770571,
        "lift": 1.1637036152717817,
        "averagePayoutYen": 6478.071351351351,
        "medianPayoutYen": 2240
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
      "robustLift": 1.1637036152717817,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 3824,
        "highPayoutCount": 453,
        "observedRate": 0.11846234309623431,
        "posteriorRate": 0.1163294590823455,
        "lift": 1.163094978786898,
        "averagePayoutYen": 24492.029288702928,
        "medianPayoutYen": 6700
      },
      "validation": {
        "count": 1467,
        "highPayoutCount": 154,
        "observedRate": 0.10497614178595774,
        "posteriorRate": 0.10007024246311652,
        "lift": 1.168003320945471,
        "averagePayoutYen": 23554.512610770278,
        "medianPayoutYen": 6000
      },
      "robustLift": 1.163094978786898,
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
        "count": 3926,
        "highPayoutCount": 467,
        "observedRate": 0.11895058583800305,
        "posteriorRate": 0.11686405902541791,
        "lift": 1.1630503828551566,
        "averagePayoutYen": 1155.3464085583291,
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
      "robustLift": 1.1630503828551566,
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
        "count": 2743,
        "highPayoutCount": 327,
        "observedRate": 0.11921254101348888,
        "posteriorRate": 0.11626736929679055,
        "lift": 1.1613943328048977,
        "averagePayoutYen": 6386.810061975939,
        "medianPayoutYen": 2160
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
      "robustLift": 1.1613943328048977,
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
        "count": 3283,
        "highPayoutCount": 423,
        "observedRate": 0.12884556807797745,
        "posteriorRate": 0.12504760206965151,
        "lift": 1.2491000463235233,
        "averagePayoutYen": 6818.336886993603,
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
      "betType": "複勝",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 58478,
        "highPayoutCount": 6905,
        "observedRate": 0.11807859365915387,
        "posteriorRate": 0.11793852405844008,
        "lift": 1.1613089575726285,
        "averagePayoutYen": 388.47737610725403,
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
      "robustLift": 1.1613089575726285,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 5226,
        "highPayoutCount": 615,
        "observedRate": 0.11768082663605052,
        "posteriorRate": 0.11613841793085258,
        "lift": 1.161184895083287,
        "averagePayoutYen": 28171.13279755071,
        "medianPayoutYen": 6320
      },
      "validation": {
        "count": 2031,
        "highPayoutCount": 214,
        "observedRate": 0.10536681437715412,
        "posteriorRate": 0.10147695255825769,
        "lift": 1.184422208541731,
        "averagePayoutYen": 23499.566715903497,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.161184895083287,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 4605,
        "highPayoutCount": 543,
        "observedRate": 0.11791530944625407,
        "posteriorRate": 0.11616473362580146,
        "lift": 1.1611604579688608,
        "averagePayoutYen": 12664.017372421282,
        "medianPayoutYen": 4370
      },
      "validation": {
        "count": 2041,
        "highPayoutCount": 230,
        "observedRate": 0.11268985791278785,
        "posteriorRate": 0.1084973595106774,
        "lift": 1.1872741063975774,
        "averagePayoutYen": 12530.161685448309,
        "medianPayoutYen": 4060
      },
      "robustLift": 1.1611604579688608,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 40229,
        "highPayoutCount": 4677,
        "observedRate": 0.11625941484998384,
        "posteriorRate": 0.1160603247111325,
        "lift": 1.160116806428596,
        "averagePayoutYen": 13450.27517462527,
        "medianPayoutYen": 4190
      },
      "validation": {
        "count": 15652,
        "highPayoutCount": 1763,
        "observedRate": 0.11263736263736264,
        "posteriorRate": 0.11197943230043532,
        "lift": 1.225378027806506,
        "averagePayoutYen": 13074.723358037312,
        "medianPayoutYen": 4160
      },
      "robustLift": 1.160116806428596,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 957,
        "highPayoutCount": 119,
        "observedRate": 0.12434691745036573,
        "posteriorRate": 0.1160049948087356,
        "lift": 1.159602864679569,
        "averagePayoutYen": 166011.46290491117,
        "medianPayoutYen": 45520
      },
      "validation": {
        "count": 362,
        "highPayoutCount": 46,
        "observedRate": 0.1270718232044199,
        "posteriorRate": 0.10165455255303332,
        "lift": 1.2210397923513796,
        "averagePayoutYen": 178791.29834254144,
        "medianPayoutYen": 39090
      },
      "robustLift": 1.159602864679569,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=06",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47560,
      "discovery": {
        "count": 2406,
        "highPayoutCount": 287,
        "observedRate": 0.11928512053200332,
        "posteriorRate": 0.11596991778116378,
        "lift": 1.1595001827191629,
        "averagePayoutYen": 25834.43059019119,
        "medianPayoutYen": 6500
      },
      "validation": {
        "count": 1113,
        "highPayoutCount": 131,
        "observedRate": 0.11769991015274034,
        "posteriorRate": 0.10777319710164303,
        "lift": 1.2579109336127172,
        "averagePayoutYen": 23036.33423180593,
        "medianPayoutYen": 7100
      },
      "robustLift": 1.1595001827191629,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 568,
        "highPayoutCount": 82,
        "observedRate": 0.1443661971830986,
        "posteriorRate": 0.1236135556519923,
        "lift": 1.2356591497082967,
        "averagePayoutYen": 198921.00352112675,
        "medianPayoutYen": 37610
      },
      "validation": {
        "count": 294,
        "highPayoutCount": 35,
        "observedRate": 0.11904761904761904,
        "posteriorRate": 0.09650657972382207,
        "lift": 1.1592040996397197,
        "averagePayoutYen": 177530.10204081633,
        "medianPayoutYen": 34150
      },
      "robustLift": 1.1592040996397197,
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
        "count": 48060,
        "highPayoutCount": 5595,
        "observedRate": 0.11641697877652935,
        "posteriorRate": 0.11625094110897763,
        "lift": 1.1591316954881832,
        "averagePayoutYen": 2186.7990012484393,
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
      "robustLift": 1.1591316954881832,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 8551,
        "highPayoutCount": 1002,
        "observedRate": 0.1171792772775114,
        "posteriorRate": 0.1162463484976194,
        "lift": 1.1590859028146823,
        "averagePayoutYen": 2146.354812302655,
        "medianPayoutYen": 1010
      },
      "validation": {
        "count": 3911,
        "highPayoutCount": 477,
        "observedRate": 0.12196369215034518,
        "posteriorRate": 0.11862059202167209,
        "lift": 1.2827888527302134,
        "averagePayoutYen": 2267.443109179238,
        "medianPayoutYen": 1030
      },
      "robustLift": 1.1590859028146823,
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
        "count": 6132,
        "highPayoutCount": 719,
        "observedRate": 0.11725375081539464,
        "posteriorRate": 0.11596126034823458,
        "lift": 1.1583366116211813,
        "averagePayoutYen": 6622.16079582518,
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
      "robustLift": 1.1583366116211813,
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
        "posteriorRate": 0.11595518076083254,
        "lift": 1.158275882644537,
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
      "robustLift": 1.158275882644537,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=06",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303900,
      "discovery": {
        "count": 620,
        "highPayoutCount": 82,
        "observedRate": 0.13225806451612904,
        "posteriorRate": 0.11787435485386408,
        "lift": 1.178289260614697,
        "averagePayoutYen": 174898.88709677418,
        "medianPayoutYen": 38020
      },
      "validation": {
        "count": 295,
        "highPayoutCount": 35,
        "observedRate": 0.11864406779661017,
        "posteriorRate": 0.09638518779964117,
        "lift": 1.1577459812753932,
        "averagePayoutYen": 177362.16949152542,
        "medianPayoutYen": 50150
      },
      "robustLift": 1.1577459812753932,
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
        "posteriorRate": 0.13356855773399873,
        "lift": 1.331804691757156,
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
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 24730,
      "discovery": {
        "count": 2722,
        "highPayoutCount": 323,
        "observedRate": 0.11866274797942689,
        "posteriorRate": 0.11577311147104792,
        "lift": 1.1572458778172876,
        "averagePayoutYen": 13278.313739897134,
        "medianPayoutYen": 4110
      },
      "validation": {
        "count": 1166,
        "highPayoutCount": 152,
        "observedRate": 0.13036020583190394,
        "posteriorRate": 0.11866253932570904,
        "lift": 1.2985104981004985,
        "averagePayoutYen": 14255.060034305317,
        "medianPayoutYen": 4260
      },
      "robustLift": 1.1572458778172876,
      "usePolicy": "volatility_prior_only"
    }
  ]
};
