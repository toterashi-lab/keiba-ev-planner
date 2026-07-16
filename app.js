const historicalMeetingData = window.KEIBA_REFERENCE_MEETINGS ?? window.KEIBA_MEETINGS ?? { meetings: [] };
const liveRacecardData = window.KEIBA_LIVE_RACECARDS ?? { meetings: [], results: [] };
const meetingData = { ...historicalMeetingData, meetings: [...(historicalMeetingData.meetings ?? []), ...(liveRacecardData.meetings ?? [])] };
const historicalResultData = window.KEIBA_RESULTS ?? { results: [] };
const resultData = { ...historicalResultData, results: [...(historicalResultData.results ?? []), ...(liveRacecardData.results ?? [])] };
const historicalModelData = window.KEIBA_MODEL_OUTPUTS ?? { status: "blocked", candidates: [], predictions: [] };
const liveModelData = window.KEIBA_LIVE_MODEL_OUTPUTS ?? { status: "waiting", candidates: [], predictions: [] };
const modelData = {
  ...historicalModelData,
  candidates: [...(historicalModelData.candidates ?? []), ...(liveModelData.candidates ?? [])],
  predictions: [...(historicalModelData.predictions ?? []), ...(liveModelData.predictions ?? [])],
  logic: liveModelData.status === "ready" ? {
    ...(historicalModelData.logic ?? {}), abilityModelStatus: liveModelData.abilityModelStatus,
    deploymentStatus: liveModelData.deploymentStatus, probabilityMode: liveModelData.abilityModelStatus === "research_pass" ? "ability_model" : "market_baseline",
  } : historicalModelData.logic,
};
const databaseData = window.KEIBA_DATABASE_STATUS ?? {};
const featureCoverageData = window.KEIBA_MODEL_FEATURE_COVERAGE ?? { groups: [] };
const payoutPatternData = window.KEIBA_HISTORICAL_PAYOUT_PATTERNS ?? { patterns: [], coverage: {} };
const closingOddsData = window.KEIBA_CLOSING_ODDS ?? { races: [], quality: [] };
const ticketEngine = window.KEIBA_TICKET_ENGINE;

const state = {
  date: meetingData.meetings.at(-1)?.date ?? "",
  venueCode: "",
  raceNo: 11,
  view: "summary",
  benchmark: "ai_all",
  rankingBetType: "",
  rankingMethod: "",
  appMode: location.hash === "#ranking" ? "ranking" : "newspaper",
};

const els = {
  dateTabs: document.querySelector("#date-tabs"),
  venueTabs: document.querySelector("#venue-tabs"),
  raceTabs: document.querySelector("#race-tabs"),
  raceList: document.querySelector("#race-list"),
  venueRankingContext: document.querySelector("#venue-ranking-context"),
  venueRankingStatus: document.querySelector("#venue-ranking-status"),
  venueRankingList: document.querySelector("#venue-ranking-list"),
  rankingBetTabs: document.querySelector("#ranking-bet-tabs"),
  rankingMethodTabs: document.querySelector("#ranking-method-tabs"),
  selectionRankingCount: document.querySelector("#selection-ranking-count"),
  selectionRankingBody: document.querySelector("#selection-ranking-body"),
  raceNumber: document.querySelector("#race-number"),
  raceTitle: document.querySelector("#race-title"),
  raceMeta: document.querySelector("#race-meta"),
  raceCondition: document.querySelector("#race-condition"),
  officialLink: document.querySelector("#official-link"),
  resultLinkSecondary: document.querySelector("#result-link-secondary"),
  resultBadge: document.querySelector("#result-badge"),
  winnerName: document.querySelector("#winner-name"),
  refundCount: document.querySelector("#refund-count"),
  payoutBody: document.querySelector("#payout-body"),
  runnerBody: document.querySelector("#runner-body"),
  runnerCount: document.querySelector("#runner-count"),
  sidebarVenue: document.querySelector("#sidebar-venue"),
  evaluatedCandidates: document.querySelector("#evaluated-candidates"),
  expectedReturn: document.querySelector("#expected-return"),
  edgeValue: document.querySelector("#edge-value"),
  unitExpectedProfit: document.querySelector("#unit-expected-profit"),
  edgeBadge: document.querySelector("#edge-badge"),
  strategyGrid: document.querySelector("#strategy-grid"),
  modelStatus: document.querySelector("#model-status"),
  logicVersion: document.querySelector("#logic-version"),
  logicProbabilityMode: document.querySelector("#logic-probability-mode"),
  logicDeploymentStatus: document.querySelector("#logic-deployment-status"),
  rationaleList: document.querySelector("#rationale-list"),
  qualityRefunds: document.querySelector("#quality-refunds"),
  qualityRunners: document.querySelector("#quality-runners"),
  batchRefunds: document.querySelector("#batch-refunds"),
  headerStatusText: document.querySelector("#header-status-text"),
  sourceDbCount: document.querySelector("#source-db-count"),
  qualityOdds: document.querySelector("#quality-odds"),
  qualityOddsNote: document.querySelector("#quality-odds-note"),
  warehouseStatus: document.querySelector("#warehouse-status"),
  dbMonths: document.querySelector("#db-months"),
  dbRaces: document.querySelector("#db-races"),
  dbRunners: document.querySelector("#db-runners"),
  dbPayouts: document.querySelector("#db-payouts"),
  dbRawPages: document.querySelector("#db-raw-pages"),
  dbProgressLabel: document.querySelector("#db-progress-label"),
  dbProgressBar: document.querySelector("#db-progress-bar"),
  dbUpdatedAt: document.querySelector("#db-updated-at"),
  progressTrack: document.querySelector(".progress-track"),
  performanceCards: document.querySelector("#performance-cards"),
  performanceBody: document.querySelector("#performance-body"),
  performanceRule: document.querySelector("#performance-rule"),
  heroFavoriteRoi: document.querySelector("#hero-favorite-roi"),
  heroDbMonths: document.querySelector("#hero-db-months"),
  heroDbRaces: document.querySelector("#hero-db-races"),
  topRecommendation: document.querySelector("#top-recommendation"),
  topRecommendationStatus: document.querySelector("#top-recommendation-status"),
  topTicketLabel: document.querySelector("#top-ticket-label"),
  topTicketSelection: document.querySelector("#top-ticket-selection"),
  topTicketMethod: document.querySelector("#top-ticket-method"),
  topTicketPoints: document.querySelector("#top-ticket-points"),
  topTicketReturn: document.querySelector("#top-ticket-return"),
  topTicketEdge: document.querySelector("#top-ticket-edge"),
  topTicketStake: document.querySelector("#top-ticket-stake"),
  topRecommendationComment: document.querySelector("#top-recommendation-comment"),
  aiPrediction: document.querySelector("#ai-prediction"),
  aiConfidence: document.querySelector("#ai-confidence"),
  aiMarks: document.querySelector("#ai-marks"),
  aiScenario: document.querySelector("#ai-scenario"),
  aiComment: document.querySelector("#ai-comment"),
  masterConsensus: document.querySelector("#master-consensus"),
  forecasterPanel: document.querySelector("#forecaster-panel"),
  ticketCoverage: document.querySelector("#ticket-coverage"),
  candidateCount: document.querySelector("#candidate-count"),
  featureReadinessStatus: document.querySelector("#feature-readiness-status"),
  featureReadinessGrid: document.querySelector("#feature-readiness-grid"),
  payoutPatternStatus: document.querySelector("#payout-pattern-status"),
  payoutPatternList: document.querySelector("#payout-pattern-list"),
};

initialize();

function initialize() {
  const meeting = selectedMeeting();
  state.venueCode = meeting?.tracks?.[0]?.venueCode ?? "";
  if (state.date === "2026-07-12") state.venueCode = "FUKUSHIMA";
  bindEvents();
  renderCoverage();
  renderDatabaseStatus();
  renderFeatureReadiness();
  renderPayoutPatterns();
  renderPerformance();
  renderAll();
  renderStrategies();
}

function renderPayoutPatterns() {
  const patterns = payoutPatternData.patterns ?? [];
  const coverage = payoutPatternData.coverage ?? {};
  els.payoutPatternStatus.textContent = `${number(coverage.totalRows)}件・${patterns.length}条件`;
  els.payoutPatternStatus.className = "decision hold";
  els.payoutPatternList.innerHTML = patterns.slice(0, 12).map((pattern, index) => `<article class="payout-pattern-card">
    <header><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(pattern.betType)}</strong></header>
    <h3>${pattern.conditions.map(conditionLabel).join(" × ")}</h3>
    <div><span>再現リフト</span><strong>${pattern.robustLift.toFixed(2)}倍</strong></div>
    <p>旧期間 ${number(pattern.discovery.count)}件 / 検証期間 ${number(pattern.validation.count)}件</p>
    <small>上位10%基準 ${yen(pattern.highPayoutThresholdYen)}</small>
  </article>`).join("");
}

function conditionLabel(value) {
  const labels = {
    "field=large": "多頭数", "field=medium": "中頭数", "field=small": "少頭数",
    "class=open_graded": "重賞・OP", "class=maiden": "未勝利", "class=maiden_debut": "新馬",
    "distance=sprint": "短距離", "distance=mile": "マイル", "distance=middle": "中距離", "distance=long": "長距離",
    "raceBand=early": "前半R", "raceBand=middle": "中盤R", "raceBand=late": "後半R",
  };
  return escapeHtml(labels[value] ?? value.replace("=", " "));
}

function renderFeatureReadiness() {
  const groups = featureCoverageData.groups ?? [];
  const ready = groups.filter((group) => group.status === "ready").length;
  els.featureReadinessStatus.textContent = `${ready} / ${groups.length}群 利用可能`;
  els.featureReadinessStatus.className = `decision ${ready === groups.length ? "buy" : "hold"}`;
  els.featureReadinessGrid.innerHTML = groups.map((group) => `<article class="feature-readiness-card ${group.status}">
    <header><strong>${escapeHtml(group.label)}</strong><span>${group.status === "ready" ? "生成可能" : group.status === "partial" ? "一部不足" : "未取得"}</span></header>
    <p>${group.examples.slice(0, 4).map(escapeHtml).join("・")}</p>
    <footer><span>${featureAvailabilityLabel(group.availableAt)}</span><strong>${Math.round(group.coverage * 100)}%</strong></footer>
  </article>`).join("");
}

function featureAvailabilityLabel(value) {
  return ({ entry: "出馬表", race_day: "当日発表", static: "固定情報", prior_races: "過去走のみ", pre_race: "発走前" })[value] ?? escapeHtml(value);
}

function renderCoverage() {
  const runnerCount = resultData.runnerCount ?? resultData.results.reduce((sum, race) => sum + (race.runners?.length ?? 0), 0);
  const refundCount = resultData.refundLineCount ?? resultData.results.reduce((sum, race) => sum + (race.refunds?.length ?? 0), 0);
  els.qualityRunners.textContent = `${runnerCount.toLocaleString("ja-JP")}頭`;
  els.qualityRefunds.textContent = `${refundCount.toLocaleString("ja-JP")}件`;
  els.batchRefunds.textContent = refundCount.toLocaleString("ja-JP");
  els.qualityOdds.textContent = `${closingOddsData.raceCount ?? 0} / 72`;
  els.qualityOddsNote.textContent = closingOddsData.quality?.every((check) => check.status === "pass")
    ? `${(closingOddsData.snapshotCount ?? 0).toLocaleString("ja-JP")}件・検査合格`
    : "品質検査未合格";
}

function renderDatabaseStatus() {
  if (!databaseData.totalMonths) return;
  const percentValue = Math.max(0, Math.min(100, databaseData.progressPercent ?? 0));
  els.headerStatusText.textContent = `${databaseData.completeMonths}/${databaseData.totalMonths}か月・${number(databaseData.races)}レース`;
  els.sourceDbCount.textContent = `長期DB ${number(databaseData.runners)}頭`;
  els.warehouseStatus.textContent = databaseData.integrityStatus === "pass" ? "全監査合格" : "監査要確認";
  els.dbMonths.textContent = `${databaseData.completeMonths} / ${databaseData.totalMonths}`;
  els.dbRaces.textContent = number(databaseData.races);
  els.dbRunners.textContent = number(databaseData.runners);
  els.dbPayouts.textContent = number(databaseData.payouts);
  els.dbRawPages.textContent = number(databaseData.rawPages);
  const healthLabel = ({ healthy: "正常稼働", stalled: "自動復旧待ち", idle: "待機中" })[databaseData.workerHealth] ?? "確認中";
  const etaLabel = databaseData.estimatedCompletionAt ? `・完了見込 ${formatTimestamp(databaseData.estimatedCompletionAt)}` : "";
  const historicalOddsText = databaseData.historicalOddsTotalRaces
    ? `・過去単複オッズ ${number(databaseData.historicalOddsCompleteRaces)}/${number(databaseData.historicalOddsTotalRaces)}R`
    : "";
  els.dbProgressLabel.textContent = `${percentValue.toFixed(1)}%・${healthLabel}・処理中${databaseData.runningMonths}・待機${databaseData.queuedMonths}・再検査${databaseData.failedMonths}${historicalOddsText}${etaLabel}`;
  els.dbProgressBar.style.width = `${percentValue}%`;
  els.progressTrack.setAttribute("aria-valuenow", percentValue.toFixed(1));
  const preflight = databaseData.trainingPreflight;
  const selectedGroupText = preflight?.featureSelectionFallback
    ? "・特徴量選別未確定"
    : `・特徴量${number(preflight?.selectedFeatureGroups?.length ?? 0)}群/${number(preflight?.selectedFeatures ?? 0)}項目採用`;
  const preflightText = preflight
    ? ` / 学習試験 ${number(preflight.races)}R・${(preflight.totalMs / 1000).toFixed(1)}秒・ECE ${percent(preflight.ece)}・最大誤差 ${percent(preflight.maxCalibrationBinError)}・券種確率${number(preflight.ticketTypesPassed)}/${number(preflight.ticketTypesTotal)}合格${selectedGroupText}`
    : " / 学習試験 待機中";
  const validation = databaseData.liveEvValidation;
  const validationText = validation
    ? ` / ROI検証 ${number(validation.bets)}/1,000点・${number(validation.raceDays)}/180日`
    : " / ROI検証 蓄積待ち";
  const fieldAudit = databaseData.fieldAvailabilityAudit;
  const fieldAuditText = fieldAudit
    ? ` / 原本照合 ${number(fieldAudit.rawRacePagesVerified)}頁・公式空欄/計不${number(fieldAudit.officiallyUnavailableCells)}セル・パーサー欠落${number(fieldAudit.parserMissingCells)}セル`
    : " / 原本照合 未実施";
  els.dbUpdatedAt.textContent = `公開集計 ${formatTimestamp(databaseData.asOf)} / 完成月 ${databaseData.earliestComplete}〜${databaseData.latestComplete}${fieldAuditText}${preflightText}${validationText}`;
  els.heroDbMonths.textContent = `${databaseData.completeMonths} / ${databaseData.totalMonths}か月`;
  els.heroDbRaces.textContent = `${number(databaseData.races)}レース蓄積`;
}

function bindEvents() {
  document.querySelectorAll("[data-app-mode], [data-mode-link]").forEach((button) => {
    button.addEventListener("click", () => {
      state.appMode = button.dataset.appMode ?? button.dataset.modeLink;
      renderAppMode();
    });
  });

  document.querySelectorAll(".view-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      document.querySelectorAll(".view-tabs button").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `view-${state.view}`));
    });
  });

  document.querySelectorAll("[data-benchmark]").forEach((button) => {
    button.addEventListener("click", () => {
      state.benchmark = button.dataset.benchmark;
      document.querySelectorAll("[data-benchmark]").forEach((item) => item.classList.toggle("active", item === button));
      renderPerformance();
    });
  });
}

function renderPerformance() {
  const reports = buildAiRecommendationReports();
  els.heroFavoriteRoi.textContent = percent(reports.ai_all.roi);
  els.performanceCards.innerHTML = [reports.ai_all, reports.ai_ev1, reports.ai_ev11].map((report) => {
    const roiClass = report.roi >= 1 ? "positive" : "negative";
    return `<article class="performance-card ${state.benchmark === report.id ? "active" : ""}">
      <header><strong>${report.name}</strong><span>${report.pointsLabel}</span></header>
      <div class="performance-primary"><span>回収率</span><strong class="${roiClass}">${percent(report.roi)}</strong><small>${signedYen(report.net)}</small></div>
      <dl><div><dt>対象</dt><dd>${report.trials}R</dd></div><div><dt>的中</dt><dd>${report.hits}R</dd></div><div><dt>的中率</dt><dd>${percent(report.hitRate)}</dd></div><div><dt>投資</dt><dd>${yen(report.investment)}</dd></div><div><dt>払戻</dt><dd>${yen(report.payout)}</dd></div></dl>
    </article>`;
  }).join("") + `<article class="performance-card blocked">
    <header><strong>新・選別運用</strong><span>市場ガードレール</span></header>
    <div class="performance-primary"><span>現在の状態</span><strong>全レース見送り</strong><small>能力モデルをEVから除外</small></div>
    <p>市場より確率性能が悪いモデルでは買いません。予想印だけを研究表示し、資金を減らす強制購入を停止します。</p>
  </article>`;

  const selected = reports[state.benchmark] ?? reports.ai_all;
  els.performanceRule.textContent = selected.rule;
  const rows = selected.details.slice(0, 30);
  els.performanceBody.innerHTML = rows.length ? rows.map((row) => `<tr>
    <td>${formatShortDate(row.date)}</td><td>${escapeHtml(row.venueName)} ${row.raceNo}R</td><td><strong>${escapeHtml(row.winnerName)}</strong></td>
    <td>${row.winnerOdds ? row.winnerOdds.toFixed(1) : "--"}</td><td class="selection-cell">${escapeHtml(row.selection)}</td><td>${row.points}</td>
    <td>${yen(row.investment)}</td><td>${yen(row.payout)}</td><td class="${row.net >= 0 ? "positive" : "negative"}">${signedYen(row.net)}</td>
    <td><span class="quality ${row.hit ? "complete" : "missing"}">${row.hit ? "的中" : "不的中"}</span></td>
  </tr>`).join("") : `<tr><td colspan="10" class="empty-row">検証可能なレースがありません</td></tr>`;
}

function buildAiRecommendationReports() {
  const audit = modelData.logic?.referenceWeekExternalAudit ?? {};
  const recommendations = audit.evaluationScope === "ai_prediction_top_ticket_only" ? (audit.recommendations ?? []) : [];
  const definitions = [
    { id: "ai_all", name: "旧・強制購入", strategy: "AI推奨・全レース", filter: () => true,
      rule: "改善前の比較用。各レースでAI最上位の1買い目を強制購入した結果" },
    { id: "ai_ev1", name: "旧・EV100%超", strategy: "AI推奨・期待回収率>1", filter: (row) => row.expectedReturn > 1,
      rule: "改善前の推定EV100%超を後から抽出した診断値。新運用には使用しない" },
    { id: "ai_ev11", name: "旧・EV110%超", strategy: "AI推奨・期待回収率>1.1", filter: (row) => row.expectedReturn > 1.1,
      rule: "改善前の推定EV110%超を後から抽出した診断値。新運用には使用しない" },
  ];
  return Object.fromEntries(definitions.map((definition) => {
    const strategy = (audit.strategies ?? []).find((row) => row.name === definition.strategy);
    const details = recommendations.filter(definition.filter).map((row) => {
      const result = resultData.results.find((item) => item.meetingName === row.meetingName && item.raceNo === row.raceNo);
      const track = meetingData.meetings.flatMap((meeting) => meeting.tracks.map((entry) => ({ meeting, entry })))
        .find(({ meeting, entry }) => meeting.date === row.date && entry.meetingName === row.meetingName);
      const oddsRace = closingOddsData.races?.find((item) => item.date === row.date
        && item.venueCode === track?.entry.venueCode && item.raceNo === row.raceNo);
      const winnerNumber = result?.runners?.find((runner) => runner.finishPosition === 1)?.horseNumber;
      const winnerOdds = oddsRace?.prices?.find((price) => price.horseNumber === winnerNumber)?.win;
      return {
        date: row.date,
        venueName: track?.entry.venueName ?? row.meetingName,
        raceNo: row.raceNo,
        winnerName: result?.winner ?? "--",
        winnerOdds,
        selection: `${row.betType} ${row.method} / ${row.selection}`,
        points: row.points,
        investment: row.investmentYen,
        payout: row.payoutYen,
        net: row.netYen,
        hit: row.hit,
      };
    }).sort((a, b) => b.date.localeCompare(a.date) || b.raceNo - a.raceNo || a.venueName.localeCompare(b.venueName, "ja"));
    const investment = strategy?.investmentYen ?? details.reduce((sum, row) => sum + row.investment, 0);
    const payout = strategy?.payoutYen ?? details.reduce((sum, row) => sum + row.payout, 0);
    const trials = strategy?.bets ?? details.length;
    const hits = strategy?.hits ?? details.filter((row) => row.hit).length;
    return [definition.id, {
      ...definition,
      details,
      pointsLabel: `${trials}件 / AI推奨のみ`,
      trials,
      hits,
      investment,
      payout,
      net: payout - investment,
      hitRate: trials ? hits / trials : 0,
      roi: investment ? payout / investment : 0,
    }];
  }));
}

function renderAll() {
  renderDateTabs();
  renderVenueTabs();
  renderVenueRanking();
  renderRaceTabs();
  renderRaceList();
  renderRaceHeader();
  renderAiPrediction();
  renderTopRecommendation();
  renderRunners();
  renderPayouts();
  renderStrategies();
  renderAppMode();
}

function renderAppMode() {
  document.querySelectorAll("[data-app-mode]").forEach((button) =>
    button.classList.toggle("active", button.dataset.appMode === state.appMode));
  document.querySelectorAll("[data-mode-link]").forEach((link) =>
    link.classList.toggle("active", link.dataset.modeLink === state.appMode));
  document.querySelectorAll(".app-mode-panel").forEach((panel) =>
    panel.classList.toggle("active", panel.id === `${state.appMode}-mode`));
}

function renderDateTabs() {
  els.dateTabs.innerHTML = meetingData.meetings.map((meeting) => {
    const active = meeting.date === state.date ? "active" : "";
    return `<button type="button" class="${active}" data-date="${meeting.date}">
      ${formatDate(meeting.date)}<span>${meeting.weekday}曜・中央競馬</span>
    </button>`;
  }).join("");

  els.dateTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.date = button.dataset.date;
      state.venueCode = selectedMeeting()?.tracks?.[0]?.venueCode ?? "";
      state.raceNo = 11;
      renderAll();
    });
  });
}

function renderVenueTabs() {
  const meeting = selectedMeeting();
  els.venueTabs.innerHTML = (meeting?.tracks ?? []).map((track) => {
    const active = track.venueCode === state.venueCode ? "active" : "";
    return `<button type="button" class="${active}" data-venue="${track.venueCode}">${track.venueName}<small> ${track.meetingName}</small></button>`;
  }).join("");

  els.venueTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.venueCode = button.dataset.venue;
      state.raceNo = 11;
      renderAll();
    });
  });
}

function renderRaceTabs() {
  const track = selectedTrack();
  els.raceTabs.innerHTML = (track?.races ?? []).map((race) => {
    const active = race.no === state.raceNo ? "active" : "";
    return `<button type="button" class="${active}" data-race="${race.no}"><strong>${race.no}R</strong><small>${race.start}</small></button>`;
  }).join("");
  bindRaceButtons(els.raceTabs);
}

function renderRaceList() {
  const track = selectedTrack();
  els.sidebarVenue.textContent = track?.venueName ?? "競馬場";
  els.raceList.innerHTML = (track?.races ?? []).map((race) => {
    const active = race.no === state.raceNo ? "active" : "";
    return `<button type="button" class="${active}" data-race="${race.no}">
      <span class="side-r">${race.no}R</span>
      <span class="side-name"><strong>${escapeHtml(race.name)}</strong><small>${escapeHtml(race.surface)} ${race.distanceM}m</small></span>
      <span class="side-time">${race.start}</span>
    </button>`;
  }).join("");
  bindRaceButtons(els.raceList);
}

function bindRaceButtons(container) {
  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.raceNo = Number(button.dataset.race);
      renderRaceTabs();
      renderRaceList();
      renderRaceHeader();
      renderAiPrediction();
      renderTopRecommendation();
      renderVenueRanking();
      renderRunners();
      renderPayouts();
      renderStrategies();
    });
  });
}

function renderRaceHeader() {
  const race = selectedRace();
  const track = selectedTrack();
  const result = selectedResult();
  if (!race || !track) return;

  els.raceNumber.textContent = race.no;
  els.raceTitle.textContent = result?.raceTitle || race.name;
  const weather = [result?.weather, result?.turfGoing || result?.dirtGoing].filter(Boolean).join(" / ");
  els.raceMeta.textContent = `${result?.startTime || race.start}発走 / ${result?.course || `${race.surface}${race.distanceM}m`} / ${weather || track.meetingName}`;
  els.raceCondition.textContent = race.condition;
  const preRace = result?.status === "pre_race";
  els.resultBadge.textContent = preRace ? "出馬表取得" : result ? "結果確定" : "結果未取得";
  els.resultBadge.classList.toggle("missing", !result || preRace);
  els.winnerName.textContent = preRace ? "発走前" : result?.winner || "未取得";
  els.refundCount.textContent = `${result?.refunds?.length ?? 0}件`;
  const url = result?.url || meetingData.sourceUrls?.find((item) => item.includes(state.date.replaceAll("-", "").slice(4))) || "#";
  [els.officialLink, els.resultLinkSecondary].forEach((link) => { link.href = url; });
}

function renderVenueRanking() {
  const track = selectedTrack();
  const meeting = selectedMeeting();
  if (!track || !meeting) return;
  const marketGuardrail = modelData.logic?.marketBenchmark?.abilityMaySetExpectedReturn === false;
  renderRankingBetTabs();
  renderRankingMethodTabs();
  const rows = track.races.map((race) => {
    const candidates = matchingAutomaticCandidates(race.no).filter(isRecommendationReady)
      .filter((candidate) => !state.rankingBetType || candidate.betType === state.rankingBetType)
      .filter((candidate) => !state.rankingMethod || (candidate.method ?? "1点") === state.rankingMethod)
      .sort((left, right) => candidateExpectedReturn(right) - candidateExpectedReturn(left));
    const top = candidates[0] ?? null;
    return { race, top, prediction: matchingAiPrediction(race.no), expectedReturn: top ? candidateExpectedReturn(top) : null };
  }).sort((left, right) => {
    if (left.expectedReturn !== null && right.expectedReturn === null) return -1;
    if (left.expectedReturn === null && right.expectedReturn !== null) return 1;
    return (right.expectedReturn ?? 0) - (left.expectedReturn ?? 0) || left.race.no - right.race.no;
  });
  const ranked = rows.filter((row) => row.expectedReturn !== null);
  const betLabel = state.rankingBetType || "全券種";
  const methodLabel = state.rankingMethod || "全方式";
  els.venueRankingContext.textContent = `${formatDate(meeting.date)}・${track.venueName} ${track.meetingName}・${betLabel}・${methodLabel}`;
  els.venueRankingStatus.textContent = `ランキング ${ranked.length} / ${rows.length}R`;
  els.venueRankingStatus.className = `decision ${ranked.length ? "hold" : "reject"}`;
  els.venueRankingList.innerHTML = rows.map((row) => {
    const rank = row.expectedReturn === null ? "--" : `${ranked.indexOf(row) + 1}位`;
    const edge = row.expectedReturn === null ? null : row.expectedReturn - 1;
    const purchaseEligible = row.top && isPurchaseEligible(row.top) && edge >= 0.08;
    const status = row.expectedReturn === null ? "データ待ち" : purchaseEligible ? "購入候補" : edge >= 0.08 ? "研究上位・購入不可" : "見送り";
    return `<button type="button" class="${row.race.no === state.raceNo ? "active" : ""} ${row.expectedReturn === null ? "blocked" : ""}" data-ranking-race="${row.race.no}">
      <span class="ranking-place">${rank}</span><strong>${row.race.no}R ${escapeHtml(row.race.name)}</strong>
      <small>${row.prediction?.marks?.[0] ? `◎ ${escapeHtml(row.prediction.marks[0].horseName)}・${percent(row.expectedReturn)}` : status}</small>
      <em>${marketGuardrail ? `${signedPercent(edge)}・参考1位・見送り` : row.expectedReturn === null ? "計算準備中" : `${signedPercent(edge)}・${status}`}</em>
    </button>`;
  }).join("");
  els.venueRankingList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.raceNo = Number(button.dataset.rankingRace);
      state.appMode = "newspaper";
      renderRaceTabs();
      renderRaceList();
      renderRaceHeader();
      renderAiPrediction();
      renderTopRecommendation();
      renderVenueRanking();
      renderRunners();
      renderPayouts();
      renderStrategies();
      renderAppMode();
      document.querySelector(".race-heading").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  renderSelectionRanking(track);
}

function renderRankingBetTabs() {
  const betTypes = ["", ...Object.keys(ticketEngine?.SPECS ?? {})];
  els.rankingBetTabs.innerHTML = betTypes.map((betType) => `<button type="button" class="${state.rankingBetType === betType ? "active" : ""}" data-ranking-bet="${escapeHtml(betType)}">
    ${betType || "総合"}
  </button>`).join("");
  els.rankingBetTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.rankingBetType = button.dataset.rankingBet;
      renderVenueRanking();
    });
  });
}

function renderRankingMethodTabs() {
  const methods = ["", "1点", "BOX", "フォーメーション"];
  els.rankingMethodTabs.innerHTML = methods.map((method) => `<button type="button" class="${state.rankingMethod === method ? "active" : ""}" data-ranking-method="${escapeHtml(method)}">
    ${method || "全方式"}
  </button>`).join("");
  els.rankingMethodTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.rankingMethod = button.dataset.rankingMethod;
      renderVenueRanking();
    });
  });
}

function renderSelectionRanking(track) {
  const rows = track.races.flatMap((race) => matchingAutomaticCandidates(race.no)
    .filter(isRecommendationReady)
    .filter((candidate) => !state.rankingBetType || candidate.betType === state.rankingBetType)
    .filter((candidate) => !state.rankingMethod || (candidate.method ?? "1点") === state.rankingMethod)
    .map((candidate) => ({ race, candidate, expectedReturn: candidateExpectedReturn(candidate) })))
    .sort((left, right) => right.expectedReturn - left.expectedReturn || left.race.no - right.race.no || left.candidate.points - right.candidate.points);
  const visibleRows = rows.slice(0, 50);
  els.selectionRankingCount.textContent = `上位${visibleRows.length} / ${number(rows.length)}件`;
  els.selectionRankingBody.innerHTML = visibleRows.length ? visibleRows.map((row, index) => {
    const edge = row.expectedReturn - 1;
    return `<tr>
      <td><strong>${index + 1}</strong></td>
      <td><button type="button" class="ranking-race-link" data-selection-race="${row.race.no}">${row.race.no}R ${escapeHtml(row.race.name)}</button></td>
      <td>${escapeHtml(row.candidate.betType)}</td><td>${escapeHtml(row.candidate.method ?? "1点")}</td>
      <td>${escapeHtml(optimizationScenarioText(row.candidate))}</td>
      <td class="selection-cell">${escapeHtml(row.candidate.selection)}</td><td>${number(row.candidate.points ?? 1)}</td><td>${yen((row.candidate.points ?? 1) * ticketEngine.UNIT_STAKE)}</td>
      <td><strong>${percent(row.expectedReturn)}</strong></td><td class="${edge >= 0 ? "positive" : "negative"}">${signedPercent(edge)}</td>
      <td><span class="quality ${edge > 0 ? "complete" : "missing"}">${isPurchaseEligible(row.candidate) && edge >= 0.08 ? "購入候補" : edge > 0 ? "研究上位" : "見送り"}</span></td>
    </tr>`;
  }).join("") : `<tr><td colspan="11" class="empty-row">該当する計算済み買い目がありません</td></tr>`;
  els.selectionRankingBody.querySelectorAll("button[data-selection-race]").forEach((button) => {
    button.addEventListener("click", () => {
      state.raceNo = Number(button.dataset.selectionRace);
      renderRaceTabs();
      renderRaceList();
      renderRaceHeader();
      renderAiPrediction();
      renderTopRecommendation();
      renderVenueRanking();
      renderRunners();
      renderPayouts();
      renderStrategies();
      document.querySelector(".race-heading").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderAiPrediction() {
  const prediction = matchingAiPrediction();
  if (!prediction?.marks?.length) {
    els.aiConfidence.textContent = "計算準備中";
    els.aiConfidence.className = "decision hold";
    els.aiMarks.innerHTML = "";
    els.aiScenario.textContent = "シナリオ計算中";
    els.aiComment.textContent = "公式オッズから各馬の勝率分布を計算しています。";
    els.masterConsensus.textContent = "マスター集計中";
    els.forecasterPanel.innerHTML = "";
    return;
  }
  els.aiConfidence.textContent = `信頼度 ${prediction.confidence}・${Math.round(prediction.confidenceScore * 100)}`;
  els.aiConfidence.className = `decision ${prediction.confidence === "高" ? "buy" : "hold"}`;
  els.aiMarks.innerHTML = prediction.marks.map((row) => `<div class="ai-mark ai-mark-${markClass(row.mark)}">
    <span>${row.mark}</span><strong>${row.horseNumber} ${escapeHtml(row.horseName)}</strong><small>推定勝率 ${percent(row.probability)}</small>
  </div>`).join("");
  els.aiScenario.textContent = prediction.scenario;
  els.aiComment.textContent = prediction.comment;
  const panel = (prediction.forecastPanel ?? []).filter((agent) => agent.persona === true).slice(0, 5);
  const available = panel.filter((agent) => agent.status === "available");
  const runners = [...(selectedResult()?.runners ?? [])].sort((left, right) => left.horseNumber - right.horseNumber);
  els.masterConsensus.textContent = `${available.length}人の印`;
  els.forecasterPanel.innerHTML = `<div class="newspaper-scroll"><table class="newspaper-marks-table">
    <thead><tr><th>馬番</th><th>馬名</th>${panel.map((agent) => `<th title="${escapeHtml(agent.label)}">${escapeHtml(agent.label.split("・")[0])}</th>`).join("")}<th>総合</th></tr></thead>
    <tbody>${runners.map((runner) => {
      const master = prediction.marks.find((row) => row.horseNumber === runner.horseNumber)?.mark ?? "";
      return `<tr><td><strong>${runner.horseNumber}</strong></td><td>${escapeHtml(runner.horseName)}</td>${panel.map((agent) => {
        const mark = agent.marks?.find((row) => row.horseNumber === runner.horseNumber)?.mark ?? "";
        return `<td class="paper-mark paper-mark-${markClass(mark)}">${escapeHtml(mark)}</td>`;
      }).join("")}<td class="paper-mark paper-mark-${markClass(master)}">${escapeHtml(master)}</td></tr>`;
    }).join("")}</tbody>
  </table></div>`;
}

function matchingAiPrediction(raceNo = state.raceNo) {
  const track = selectedTrack();
  return (modelData.predictions ?? []).find((prediction) => prediction.date === state.date
    && prediction.meetingName === track?.meetingName && prediction.raceNo === raceNo) ?? null;
}

function markClass(mark) {
  return ({ "◎": "honmei", "○": "taikou", "▲": "tanana", "△": "renka", "☆": "ana" })[mark] ?? "other";
}

function renderTopRecommendation() {
  const selected = selectedResult();
  const runners = selected?.status === "pre_race" ? selected.runners ?? [] : selected?.runners?.filter((runner) => runner.finishPosition !== null) ?? [];
  const counts = ticketEngine?.candidateCounts(runners.length) ?? {};
  const candidates = matchingAutomaticCandidates().filter(isRecommendationReady).sort((left, right) => candidateExpectedReturn(right) - candidateExpectedReturn(left));
  const marketGuardrail = modelData.logic?.marketBenchmark?.abilityMaySetExpectedReturn === false;
  const top = candidates[0] ?? null;
  const expectedReturn = top ? candidateExpectedReturn(top) : null;
  const edge = expectedReturn === null ? null : expectedReturn - 1;
  const passes = edge !== null && edge >= 0.08 && isPurchaseEligible(top);

  els.topRecommendation.classList.toggle("blocked", !top);
  els.topRecommendation.classList.toggle("available", Boolean(top));
  const retrospective = top?.calculationMode === "closing_market_validation";
  els.topRecommendationStatus.textContent = marketGuardrail ? "参考買い目・購入は見送り" : !top ? "計算準備中" : retrospective ? "検証計算済み"
    : modelData.logic?.deploymentStatus === "benchmark_only" ? "研究検証中・購入対象外" : passes ? "購入候補" : "基準未達・見送り";
  els.topRecommendationStatus.className = `decision ${!top ? "reject" : passes ? "buy" : "hold"}`;
  els.topTicketLabel.textContent = top ? `${top.betType}・${top.method ?? "1点"}` : "推奨買い目なし";
  els.topTicketSelection.textContent = top?.selection ?? "見送り";
  els.topTicketMethod.textContent = marketGuardrail
    ? `${top?.points ?? 1}点・候補中の期待値1位`
    : top
    ? `${top.points ?? 1}点を全券種候補から安全側EV順に比較`
    : "発走前の全組み合わせオッズとモデル確率が未完成";
  els.topTicketPoints.textContent = top ? `${top.points ?? 1}点` : "--";
  els.topTicketReturn.textContent = expectedReturn === null ? "--" : percent(expectedReturn);
  els.topTicketEdge.textContent = edge === null ? "--" : signedPercent(edge);
  els.topTicketEdge.className = edge === null ? "" : edge >= 0 ? "positive" : "negative";
  els.topTicketStake.textContent = top ? yen((Math.max(1, Number(top.points) || 1)) * ticketEngine.UNIT_STAKE) : "0円";
  els.topRecommendationComment.textContent = marketGuardrail
    ? `このレースの参考買い目1位です。購入基準は未達のため、推奨判断は見送りです。`
    : top
    ? top.comment ?? `${top.betType}${top.method ? ` ${top.method}` : ""}の構成点を合算し、安全側期待回収率${percent(expectedReturn)}。${passes ? "採用閾値8%を通過しました。" : "採用閾値8%を下回るため購入しません。"}`
    : "単勝・複勝は締切後オッズのみのため事前推奨に不使用。馬連・ワイド・馬単・3連複・3連単は全組み合わせオッズ未取得、30年モデルは校正前です。結果・払戻は順位付けに使用しません。";

  const coverage = modelData.oddsCoverage ?? {};
  const methods = {
    "単勝": "1点・複数選択", "複勝": "1点・複数選択", "馬連": "1点・BOX・フォーメーション",
    "ワイド": "1点・BOX・フォーメーション", "馬単": "1点・BOX・フォーメーション",
    "3連複": "1点・BOX・フォーメーション", "3連単": "1点・BOX・フォーメーション",
  };
  els.ticketCoverage.innerHTML = Object.keys(methods).map((betType) => {
    const ready = coverage[betType] === "pass";
    const closingOnly = (betType === "単勝" || betType === "複勝") && Boolean(selectedOddsRace()?.prices?.length);
    const status = ready ? "算出可能" : closingOnly ? "締切後のみ" : "オッズ未取得";
    return `<div class="${ready ? "ready" : "blocked"}"><strong>${betType}</strong><span>${methods[betType]}</span><small>${number(counts[betType] ?? 0)}候補・${status}</small></div>`;
  }).join("");
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  els.candidateCount.textContent = `${runners.length}頭立て・基本組み合わせ${number(total)}候補。BOXとフォーメーションは構成点へ展開し、重複を除いて総投資ベースで比較します。`;
}

function matchingAutomaticCandidates(raceNo = state.raceNo) {
  const track = selectedTrack();
  return (modelData.candidates ?? []).filter((candidate) => candidate.date === state.date
    && candidate.meetingName === track?.meetingName && candidate.raceNo === raceNo);
}

function isRecommendationReady(candidate) {
  const validatedContext = candidate.predictionContext === "pre_race"
    ? candidate.calibrationStatus === "pass"
    : candidate.predictionContext === "closing_final_validation"
      && candidate.calculationMode === "closing_market_validation" && candidate.calibrationStatus === "benchmark"
      || candidate.predictionContext === "out_of_sample_ability_model_with_market_benchmark"
        && candidate.calculationMode === "ability_and_market_scenarios"
        && candidate.abilityModelStatus === "research_pass";
  return candidate.status === "ready" && validatedContext
    && candidate.oddsObservedAt && candidate.modelVersion
    && ticketEngine?.SPECS?.[candidate.betType] && candidate.selection && candidateExpectedReturn(candidate) !== null;
}

function candidateExpectedReturn(candidate) {
  if (candidate.conservativeExpectedReturn !== null && candidate.conservativeExpectedReturn !== undefined
    && Number.isFinite(Number(candidate.conservativeExpectedReturn))) return Number(candidate.conservativeExpectedReturn);
  if (modelData.logic?.abilityModelStatus === "research_pass"
    && candidate.abilityExpectedReturn !== null && candidate.abilityExpectedReturn !== undefined
    && Number.isFinite(Number(candidate.abilityExpectedReturn))) return Number(candidate.abilityExpectedReturn);
  if (Number(candidate.odds) > 1 && Number(candidate.conservativeProbability) > 0) return Number(candidate.odds) * Number(candidate.conservativeProbability);
  return null;
}

function isPurchaseEligible(candidate) {
  return candidate?.recommendationEligible === true
    && candidate.externalValidationStatus === "pass"
    && modelData.logic?.deploymentStatus !== "benchmark_only";
}

function renderRunners() {
  const runners = selectedResult()?.runners ?? [];
  const aiMarkByHorse = new Map((matchingAiPrediction()?.marks ?? []).map((row) => [row.horseNumber, row.mark]));
  const oddsRace = selectedOddsRace();
  const prices = new Map((oddsRace?.prices ?? []).map((price) => [price.horseNumber, price]));
  els.runnerCount.textContent = `${runners.length}頭取得`;
  if (!runners.length) {
    els.runnerBody.innerHTML = `<tr><td colspan="17" class="empty-row">出走馬結果を取得中です</td></tr>`;
    return;
  }
  els.runnerBody.innerHTML = runners.map((runner) => {
    const winner = runner.finishPosition === 1 ? "winner-row" : "";
    const nonFinish = runner.finishPosition === null ? "non-finish" : "";
    const bodyWeight = runner.bodyWeight ? `${runner.bodyWeight}${runner.bodyWeightDelta === null ? "" : `(${runner.bodyWeightDelta >= 0 ? "+" : ""}${runner.bodyWeightDelta})`}` : "--";
    const price = prices.get(runner.horseNumber);
    const winOdds = price?.win ? `<span class="odds-value">${price.win.toFixed(1)}</span>` : "--";
    const placeOdds = price?.placeLow ? `${price.placeLow.toFixed(1)}–${price.placeHigh.toFixed(1)}` : "--";
    return `<tr class="${winner} ${nonFinish}">
      <td>${escapeHtml(runner.finishText)}</td><td><span class="gate-badge gate-${runner.gateNumber}">${runner.gateNumber ?? "-"}</span></td>
      <td>${runner.horseNumber}</td><td>${escapeHtml(runner.horseName)}</td><td><span class="runner-ai-mark">${aiMarkByHorse.get(runner.horseNumber) ?? ""}</span></td><td class="market-price">${winOdds}</td><td class="market-price">${placeOdds}</td><td>${escapeHtml(runner.sexAge)}</td>
      <td>${runner.carriedWeight ?? "--"}</td><td>${escapeHtml(runner.jockeyName)}</td><td>${escapeHtml(runner.officialTime || "--")}</td>
      <td>${escapeHtml(runner.margin || "--")}</td><td>${runner.cornerPositions.join("-") || "--"}</td><td>${runner.finalSectional ?? "--"}</td>
      <td>${bodyWeight}</td><td>${escapeHtml(runner.trainerName)}</td><td>${runner.popularity ? `${runner.popularity}人気` : "--"}</td>
    </tr>`;
  }).join("");
}

function renderPayouts() {
  const refunds = selectedResult()?.refunds ?? [];
  if (!refunds.length) {
    els.payoutBody.innerHTML = `<tr><td colspan="4" class="empty-row">払戻データは未取得です</td></tr>`;
    return;
  }
  els.payoutBody.innerHTML = refunds.map((refund) => `<tr>
    <td>${escapeHtml(refund.betType)}</td>
    <td>${escapeHtml(refund.selection)}</td>
    <td>${yen(refund.payoutYen)}</td>
    <td>${refund.popularity ? `${refund.popularity}番人気` : "--"}</td>
  </tr>`).join("");
}

function renderStrategies() {
  const candidates = matchingAutomaticCandidates().filter(isRecommendationReady)
    .sort((left, right) => candidateExpectedReturn(right) - candidateExpectedReturn(left));
  const logic = modelData.logic ?? {};
  els.modelStatus.textContent = modelData.status === "ready"
    ? `${logic.abilityModelStatus === "research_pass" ? "30年能力モデルEV（研究）" : "期待値v2 市場基準検証"} ${modelData.modelVersion ?? ""}` : "期待値モデル準備中";
  els.logicVersion.textContent = logic.engineVersion ?? "未設定";
  els.logicProbabilityMode.textContent = logic.probabilityMode === "market_baseline" ? "市場確率へ自動縮退" : "検証済み統合確率";
  els.logicDeploymentStatus.textContent = logic.deploymentStatus === "benchmark_only" ? "検証専用・購入対象外" : "検証ゲート合格";
  if (!candidates.length) { renderBlockedAutomaticState(); return; }

  const top = candidates[0];
  const expectedReturn = candidateExpectedReturn(top);
  const edge = expectedReturn - 1;
  const points = Math.max(1, Number(top.points) || 1);
  const investment = points * ticketEngine.UNIT_STAKE;
  const expectedProfit = investment * edge;
  const passes = edge >= 0.08 && isPurchaseEligible(top);
  els.evaluatedCandidates.textContent = `${number(candidates.length)}件`;
  els.expectedReturn.textContent = percent(expectedReturn);
  els.edgeValue.textContent = signedPercent(edge);
  els.edgeValue.className = edge >= 0 ? "positive" : "negative";
  els.unitExpectedProfit.textContent = signedYen(Math.round(expectedProfit));
  els.unitExpectedProfit.className = expectedProfit >= 0 ? "positive" : "negative";
  els.edgeBadge.textContent = passes ? "安全側EV基準通過" : logic.deploymentStatus === "benchmark_only" ? "研究検証中・購入対象外" : "最上位も基準未達";
  els.edgeBadge.className = `decision ${passes ? "buy" : "reject"}`;
  els.strategyGrid.innerHTML = candidates.slice(0, 8).map((candidate, index) => automaticCandidateCard(candidate, index + 1)).join("");
  renderAutomaticRationale(top, candidates.length);
}

function selectedAutomaticCandidate() {
  return matchingAutomaticCandidates().filter(isRecommendationReady)
    .sort((left, right) => candidateExpectedReturn(right) - candidateExpectedReturn(left))[0] ?? null;
}

function renderBlockedAutomaticState() {
  els.evaluatedCandidates.textContent = "0件";
  els.expectedReturn.textContent = "--";
  els.edgeValue.textContent = "--";
  els.unitExpectedProfit.textContent = "--";
  els.edgeBadge.textContent = "計算準備中";
  els.edgeBadge.className = "decision reject";
  els.strategyGrid.innerHTML = `<article class="strategy-card blocked"><header><strong>計算準備中</strong><span>入力操作なし</span></header>
    <dl><div><dt>購入単位</dt><dd>1点100円固定</dd></div><div><dt>比較対象</dt><dd>全券種・全買い目</dd></div><div><dt>BOX・フォーメーション</dt><dd>構成点へ自動展開</dd></div></dl>
    <footer class="reject">必要データ未取得のため全候補を停止</footer></article>`;
  els.rationaleList.innerHTML = [
    ["取得品質", "先週72レースの結果検査は合格。予測用30年データは蓄積中です。"],
    ["オッズ", "先週の締切後オッズは取得済みですが、予測時点のオッズではないため自動EVには使いません。"],
    ["モデル確率", "時系列検証と確率校正が未完了のため、勝率を推測で補完しません。"],
    ["100円固定", "各構成点100円、総投資は点数×100円で自動計算します。資金額や配分率の入力は使用しません。"],
    ["結論", "欠損を成功扱いせず、推奨・買い目・購入候補をすべて停止しています。入力による代替計算は行いません。"],
  ].map(([title, body]) => `<li class="blocked"><strong>${title}</strong><br>${body}</li>`).join("");
}

function renderAutomaticRationale(candidate, candidateCount) {
  const expectedReturn = candidateExpectedReturn(candidate);
  const edge = expectedReturn - 1;
  const points = Math.max(1, Number(candidate.points) || 1);
  const investment = points * ticketEngine.UNIT_STAKE;
  const comments = [
    ["全自動比較", `${candidateCount}候補を安全側期待回収率で比較し、${escapeHtml(candidate.betType)} ${escapeHtml(candidate.method ?? "1点")}を最上位としました。`],
    ["買い目探索", `${escapeHtml(optimizationScenarioText(candidate))}から生成した候補です。同一買い目の重複は統合しています。`],
    ["100円固定", `${points}点を各100円、総投資${yen(investment)}として期待利益${signedYen(Math.round(investment * edge))}を計算します。`],
    ["確率品質", `モデル${escapeHtml(candidate.modelVersion)}、校正検査${escapeHtml(candidate.calibrationStatus)}。校正不合格候補は自動除外します。`],
    ["時点整合", `オッズ観測時刻${escapeHtml(candidate.oddsObservedAt)}以前の特徴量だけで計算し、結果と払戻は使用しません。`],
    ["判定", isPurchaseEligible(candidate) && edge >= 0.08
      ? `安全側期待回収率${percent(expectedReturn)}でEV差8%以上と外部検証を通過しました。`
      : edge >= 0.08 ? `安全側期待回収率${percent(expectedReturn)}ですが、外部ROI検証不合格のため購入対象外です。`
        : `最上位でも安全側期待回収率${percent(expectedReturn)}のため見送ります。`],
  ];
  els.rationaleList.innerHTML = comments.map(([title, body]) => `<li><strong>${title}</strong><br>${body}</li>`).join("");
}

function automaticCandidateCard(candidate, rank) {
  const expectedReturn = candidateExpectedReturn(candidate);
  const edge = expectedReturn - 1;
  const points = Math.max(1, Number(candidate.points) || 1);
  const investment = points * ticketEngine.UNIT_STAKE;
  return `<article class="strategy-card"><header><strong>${rank}位 ${escapeHtml(candidate.betType)}・${escapeHtml(candidate.method ?? "1点")}</strong><span>${points}点</span></header>
    <dl><div><dt>買い目</dt><dd>${escapeHtml(candidate.selection)}</dd></div><div><dt>探索根拠</dt><dd>${escapeHtml(optimizationScenarioText(candidate))}</dd></div><div><dt>総投資</dt><dd>${yen(investment)}</dd></div><div><dt>期待回収率</dt><dd>${percent(expectedReturn)}</dd></div><div><dt>安全側EV</dt><dd class="${edge >= 0 ? "positive" : "negative"}">${signedPercent(edge)}</dd></div><div><dt>期待利益</dt><dd>${signedYen(Math.round(investment * edge))}</dd></div></dl>
    <footer class="${isPurchaseEligible(candidate) && edge >= 0.08 ? "" : "reject"}">${isPurchaseEligible(candidate) && edge >= 0.08 ? "購入候補" : edge >= 0.08 ? "研究上位・購入不可" : "見送り"}</footer></article>`;
}

function optimizationScenarioText(candidate) {
  const labels = {
    single_point: "1点全通り",
    ability_probability: "能力確率上位",
    market_probability: "市場確率上位",
    component_ev: "構成点EV上位",
  };
  const scenarios = candidate.optimizationScenarios?.length ? candidate.optimizationScenarios : ["single_point"];
  return scenarios.map((scenario) => labels[scenario] ?? scenario).join("・");
}

function selectedMeeting() {
  return meetingData.meetings.find((meeting) => meeting.date === state.date);
}

function selectedTrack() {
  return selectedMeeting()?.tracks?.find((track) => track.venueCode === state.venueCode);
}

function selectedRace() {
  return selectedTrack()?.races?.find((race) => race.no === state.raceNo);
}

function selectedResult() {
  const meetingName = selectedTrack()?.meetingName;
  return resultData.results.find((result) => result.meetingName === meetingName && result.raceNo === state.raceNo);
}

function selectedOddsRace() {
  return closingOddsData.races?.find((race) => race.date === state.date
    && race.venueCode === state.venueCode && race.raceNo === state.raceNo);
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00+09:00`);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatShortDate(value) {
  const date = new Date(`${value}T00:00:00+09:00`);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function percent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function signedPercent(value) {
  return `${value >= 0 ? "+" : ""}${(value * 100).toFixed(1)}%`;
}

function yen(value) {
  return `${Number(value || 0).toLocaleString("ja-JP")}円`;
}

function signedYen(value) {
  const amount = Number(value || 0);
  return `${amount >= 0 ? "+" : "-"}${Math.abs(amount).toLocaleString("ja-JP")}円`;
}

function number(value) {
  return Number(value ?? 0).toLocaleString("ja-JP");
}

function formatTimestamp(value) {
  if (!value) return "--";
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit",
  }).format(new Date(value));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}
