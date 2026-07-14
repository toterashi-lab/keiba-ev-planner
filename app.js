const meetingData = window.KEIBA_REFERENCE_MEETINGS ?? window.KEIBA_MEETINGS ?? { meetings: [] };
const resultData = window.KEIBA_RESULTS ?? { results: [] };
const modelData = window.KEIBA_MODEL_OUTPUTS ?? { status: "blocked", candidates: [] };
const databaseData = window.KEIBA_DATABASE_STATUS ?? {};
const closingOddsData = window.KEIBA_CLOSING_ODDS ?? { races: [], quality: [] };
const ticketEngine = window.KEIBA_TICKET_ENGINE;

const state = {
  date: meetingData.meetings.at(-1)?.date ?? "",
  venueCode: "",
  raceNo: 11,
  view: "summary",
  evMode: "auto",
  kellyFraction: 0.25,
  benchmark: "favorite",
};

const els = {
  dateTabs: document.querySelector("#date-tabs"),
  venueTabs: document.querySelector("#venue-tabs"),
  raceTabs: document.querySelector("#race-tabs"),
  raceList: document.querySelector("#race-list"),
  venueRankingContext: document.querySelector("#venue-ranking-context"),
  venueRankingStatus: document.querySelector("#venue-ranking-status"),
  venueRankingList: document.querySelector("#venue-ranking-list"),
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
  betType: document.querySelector("#bet-type"),
  selection: document.querySelector("#selection"),
  odds: document.querySelector("#odds"),
  probability: document.querySelector("#probability"),
  bankroll: document.querySelector("#bankroll"),
  maxStake: document.querySelector("#max-stake"),
  breakEven: document.querySelector("#break-even"),
  expectedReturn: document.querySelector("#expected-return"),
  edgeValue: document.querySelector("#edge-value"),
  kellyValue: document.querySelector("#kelly-value"),
  edgeBadge: document.querySelector("#edge-badge"),
  strategyGrid: document.querySelector("#strategy-grid"),
  modelStatus: document.querySelector("#model-status"),
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
  marketWeight: document.querySelector("#market-weight"),
  marketWeightOutput: document.querySelector("#market-weight-output"),
  uncertainty: document.querySelector("#uncertainty"),
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
  ticketCoverage: document.querySelector("#ticket-coverage"),
  candidateCount: document.querySelector("#candidate-count"),
};

initialize();

function initialize() {
  const meeting = selectedMeeting();
  state.venueCode = meeting?.tracks?.[0]?.venueCode ?? "";
  if (state.date === "2026-07-12") state.venueCode = "FUKUSHIMA";
  bindEvents();
  setEvInputMode();
  renderCoverage();
  renderDatabaseStatus();
  renderPerformance();
  renderAll();
  renderStrategies();
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
  els.dbProgressLabel.textContent = `${percentValue.toFixed(1)}%・処理中${databaseData.runningMonths}・待機${databaseData.queuedMonths}・再検査${databaseData.failedMonths}`;
  els.dbProgressBar.style.width = `${percentValue}%`;
  els.progressTrack.setAttribute("aria-valuenow", percentValue.toFixed(1));
  els.dbUpdatedAt.textContent = `公開集計 ${formatTimestamp(databaseData.asOf)} / 完成月 ${databaseData.earliestComplete}〜${databaseData.latestComplete}`;
  els.heroDbMonths.textContent = `${databaseData.completeMonths} / ${databaseData.totalMonths}か月`;
  els.heroDbRaces.textContent = `${number(databaseData.races)}レース蓄積`;
}

function bindEvents() {
  document.querySelectorAll(".view-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      document.querySelectorAll(".view-tabs button").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `view-${state.view}`));
    });
  });

  document.querySelectorAll("[data-ev-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.evMode = button.dataset.evMode;
      document.querySelectorAll("[data-ev-mode]").forEach((item) => item.classList.toggle("active", item === button));
      setEvInputMode();
      renderStrategies();
    });
  });

  [els.odds, els.probability, els.bankroll, els.maxStake, els.betType, els.selection, els.marketWeight, els.uncertainty].forEach((input) => {
    input.addEventListener("input", renderStrategies);
    input.addEventListener("change", renderStrategies);
  });

  document.querySelectorAll("[data-kelly-fraction]").forEach((button) => {
    button.addEventListener("click", () => {
      state.kellyFraction = Number(button.dataset.kellyFraction);
      document.querySelectorAll("[data-kelly-fraction]").forEach((item) => item.classList.toggle("active", item === button));
      renderStrategies();
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
  const reports = buildBenchmarkReports();
  els.heroFavoriteRoi.textContent = percent(reports.favorite.roi);
  els.performanceCards.innerHTML = [reports.favorite, reports.top3, reports.all].map((report) => {
    const roiClass = report.roi >= 1 ? "positive" : "negative";
    return `<article class="performance-card ${state.benchmark === report.id ? "active" : ""}">
      <header><strong>${report.name}</strong><span>${report.pointsLabel}</span></header>
      <div class="performance-primary"><span>回収率</span><strong class="${roiClass}">${percent(report.roi)}</strong><small>${signedYen(report.net)}</small></div>
      <dl><div><dt>対象</dt><dd>${report.trials}R</dd></div><div><dt>的中</dt><dd>${report.hits}R</dd></div><div><dt>的中率</dt><dd>${percent(report.hitRate)}</dd></div><div><dt>投資</dt><dd>${yen(report.investment)}</dd></div><div><dt>払戻</dt><dd>${yen(report.payout)}</dd></div></dl>
    </article>`;
  }).join("") + `<article class="performance-card blocked">
    <header><strong>期待値モデル</strong><span>自動推奨</span></header>
    <div class="performance-primary"><span>検証済み</span><strong>0 / 72</strong><small>学習・校正前</small></div>
    <p>発走前オッズとwalk-forward検証が揃うまで、的中率・回収率・買い目を公開しません。</p>
  </article>`;

  const selected = reports[state.benchmark] ?? reports.favorite;
  els.performanceRule.textContent = selected.rule;
  const rows = selected.details.slice(0, 30);
  els.performanceBody.innerHTML = rows.length ? rows.map((row) => `<tr>
    <td>${formatShortDate(row.date)}</td><td>${escapeHtml(row.venueName)} ${row.raceNo}R</td><td><strong>${escapeHtml(row.winnerName)}</strong></td>
    <td>${row.winnerOdds ? row.winnerOdds.toFixed(1) : "--"}</td><td class="selection-cell">${escapeHtml(row.selection)}</td><td>${row.points}</td>
    <td>${yen(row.investment)}</td><td>${yen(row.payout)}</td><td class="${row.net >= 0 ? "positive" : "negative"}">${signedYen(row.net)}</td>
    <td><span class="quality ${row.hit ? "complete" : "missing"}">${row.hit ? "的中" : "不的中"}</span></td>
  </tr>`).join("") : `<tr><td colspan="10" class="empty-row">検証可能なレースがありません</td></tr>`;
}

function buildBenchmarkReports() {
  const definitions = {
    favorite: { id: "favorite", name: "単勝1番人気", count: 1, pointsLabel: "1点 / レース", rule: "各レースの単勝最低オッズ1頭を100円購入" },
    top3: { id: "top3", name: "単勝オッズ上位3頭", count: 3, pointsLabel: "3点 / レース", rule: "各レースの単勝オッズ上位3頭を各100円購入" },
    all: { id: "all", name: "単勝全頭", count: Infinity, pointsLabel: "発売全頭", rule: "単勝オッズを取得できた全馬を各100円購入する対照基準" },
  };
  const reports = Object.fromEntries(Object.values(definitions).map((definition) => [definition.id, { ...definition, details: [] }]));

  for (const meeting of meetingData.meetings ?? []) {
    for (const track of meeting.tracks ?? []) {
      for (const race of track.races ?? []) {
        const result = resultData.results.find((item) => item.meetingName === track.meetingName && item.raceNo === race.no);
        const oddsRace = closingOddsData.races?.find((item) => item.date === meeting.date && item.venueCode === track.venueCode && item.raceNo === race.no);
        const prices = (oddsRace?.prices ?? []).filter((price) => Number(price.win) > 1).sort((a, b) => a.win - b.win || a.horseNumber - b.horseNumber);
        const winners = new Set((result?.runners ?? []).filter((runner) => runner.finishPosition === 1).map((runner) => runner.horseNumber));
        if (!result || !prices.length || !winners.size) continue;
        const runnerNames = new Map(result.runners.map((runner) => [runner.horseNumber, runner.horseName]));
        const winRefunds = (result.refunds ?? []).filter((refund) => refund.betType === "単勝").map((refund) => ({
          horseNumber: Number(String(refund.selection).match(/\d+/)?.[0]), payout: Number(refund.payoutYen) || 0,
        }));
        const winnerPrice = prices.find((price) => winners.has(price.horseNumber));

        for (const report of Object.values(reports)) {
          const selected = prices.slice(0, report.count);
          const selectedNumbers = new Set(selected.map((price) => price.horseNumber));
          const payout = winRefunds.filter((refund) => selectedNumbers.has(refund.horseNumber)).reduce((sum, refund) => sum + refund.payout, 0);
          const investment = selected.length * 100;
          report.details.push({
            date: meeting.date, venueName: track.venueName, raceNo: race.no, winnerName: result.winner,
            winnerOdds: winnerPrice?.win, selection: selected.map((price) => `${price.horseNumber} ${runnerNames.get(price.horseNumber) ?? ""}`).join(" / "),
            points: selected.length, investment, payout, net: payout - investment, hit: payout > 0,
          });
        }
      }
    }
  }

  for (const report of Object.values(reports)) {
    report.details.sort((a, b) => b.date.localeCompare(a.date) || b.raceNo - a.raceNo || a.venueName.localeCompare(b.venueName, "ja"));
    report.trials = report.details.length;
    report.hits = report.details.filter((detail) => detail.hit).length;
    report.investment = report.details.reduce((sum, detail) => sum + detail.investment, 0);
    report.payout = report.details.reduce((sum, detail) => sum + detail.payout, 0);
    report.net = report.payout - report.investment;
    report.hitRate = report.trials ? report.hits / report.trials : 0;
    report.roi = report.investment ? report.payout / report.investment : 0;
  }
  return reports;
}

function renderAll() {
  renderDateTabs();
  renderVenueTabs();
  renderVenueRanking();
  renderRaceTabs();
  renderRaceList();
  renderRaceHeader();
  renderTopRecommendation();
  renderRunners();
  renderPayouts();
  renderStrategies();
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
  els.resultBadge.textContent = result ? "結果確定" : "結果未取得";
  els.resultBadge.classList.toggle("missing", !result);
  els.winnerName.textContent = result?.winner || "未取得";
  els.refundCount.textContent = `${result?.refunds?.length ?? 0}件`;
  const url = result?.url || meetingData.sourceUrls?.find((item) => item.includes(state.date.replaceAll("-", "").slice(4))) || "#";
  [els.officialLink, els.resultLinkSecondary].forEach((link) => { link.href = url; });
}

function renderVenueRanking() {
  const track = selectedTrack();
  const meeting = selectedMeeting();
  if (!track || !meeting) return;
  const rows = track.races.map((race) => {
    const candidates = matchingAutomaticCandidates(race.no).filter(isRecommendationReady)
      .sort((left, right) => candidateExpectedReturn(right) - candidateExpectedReturn(left));
    const top = candidates[0] ?? null;
    return { race, top, expectedReturn: top ? candidateExpectedReturn(top) : null };
  }).sort((left, right) => {
    if (left.expectedReturn !== null && right.expectedReturn === null) return -1;
    if (left.expectedReturn === null && right.expectedReturn !== null) return 1;
    return (right.expectedReturn ?? 0) - (left.expectedReturn ?? 0) || left.race.no - right.race.no;
  });
  const ranked = rows.filter((row) => row.expectedReturn !== null);
  els.venueRankingContext.textContent = `${formatDate(meeting.date)}・${track.venueName} ${track.meetingName}`;
  els.venueRankingStatus.textContent = `算出 ${ranked.length} / ${rows.length}R`;
  els.venueRankingStatus.className = `decision ${ranked.length ? "buy" : "reject"}`;
  els.venueRankingList.innerHTML = rows.map((row) => {
    const rank = row.expectedReturn === null ? "--" : `${ranked.indexOf(row) + 1}位`;
    const edge = row.expectedReturn === null ? null : row.expectedReturn - 1;
    const status = row.expectedReturn === null ? "データ待ち" : edge >= 0.08 ? "購入候補" : "見送り";
    return `<button type="button" class="${row.race.no === state.raceNo ? "active" : ""} ${row.expectedReturn === null ? "blocked" : ""}" data-ranking-race="${row.race.no}">
      <span class="ranking-place">${rank}</span><strong>${row.race.no}R ${escapeHtml(row.race.name)}</strong>
      <small>${row.top ? `${escapeHtml(row.top.betType)} ${escapeHtml(row.top.method ?? "1点")}・${percent(row.expectedReturn)}` : status}</small>
      <em>${row.expectedReturn === null ? "EV未算出" : `${signedPercent(edge)}・${status}`}</em>
    </button>`;
  }).join("");
  els.venueRankingList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.raceNo = Number(button.dataset.rankingRace);
      renderRaceTabs();
      renderRaceList();
      renderRaceHeader();
      renderTopRecommendation();
      renderVenueRanking();
      renderRunners();
      renderPayouts();
      renderStrategies();
      document.querySelector(".race-heading").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderTopRecommendation() {
  const runners = selectedResult()?.runners?.filter((runner) => runner.finishPosition !== null) ?? [];
  const counts = ticketEngine?.candidateCounts(runners.length) ?? {};
  const candidates = matchingAutomaticCandidates().filter(isRecommendationReady).sort((left, right) => candidateExpectedReturn(right) - candidateExpectedReturn(left));
  const top = candidates[0] ?? null;
  const expectedReturn = top ? candidateExpectedReturn(top) : null;
  const edge = expectedReturn === null ? null : expectedReturn - 1;
  const passes = edge !== null && edge >= 0.08;

  els.topRecommendation.classList.toggle("blocked", !top);
  els.topRecommendation.classList.toggle("available", Boolean(top));
  els.topRecommendationStatus.textContent = !top ? "算出停止" : passes ? "購入候補" : "基準未達・見送り";
  els.topRecommendationStatus.className = `decision ${!top ? "reject" : passes ? "buy" : "hold"}`;
  els.topTicketLabel.textContent = top ? `${top.betType}・${top.method ?? "1点"}` : "推奨買い目なし";
  els.topTicketSelection.textContent = top?.selection ?? "見送り";
  els.topTicketMethod.textContent = top
    ? `${top.points ?? 1}点を全券種候補から安全側EV順に比較`
    : "発走前の全組み合わせオッズとモデル確率が未完成";
  els.topTicketPoints.textContent = top ? `${top.points ?? 1}点` : "--";
  els.topTicketReturn.textContent = expectedReturn === null ? "--" : percent(expectedReturn);
  els.topTicketEdge.textContent = edge === null ? "--" : signedPercent(edge);
  els.topTicketEdge.className = edge === null ? "" : edge >= 0 ? "positive" : "negative";
  els.topTicketStake.textContent = passes ? yen(top.recommendedStake ?? 0) : "0円";
  els.topRecommendationComment.textContent = top
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
  return candidate.status === "ready" && candidate.predictionContext === "pre_race"
    && candidate.oddsObservedAt && candidate.modelVersion && candidate.calibrationStatus === "pass"
    && ticketEngine?.SPECS?.[candidate.betType] && candidate.selection && candidateExpectedReturn(candidate) !== null;
}

function candidateExpectedReturn(candidate) {
  if (candidate.conservativeExpectedReturn !== null && candidate.conservativeExpectedReturn !== undefined
    && Number.isFinite(Number(candidate.conservativeExpectedReturn))) return Number(candidate.conservativeExpectedReturn);
  if (Number(candidate.odds) > 1 && Number(candidate.conservativeProbability) > 0) return Number(candidate.odds) * Number(candidate.conservativeProbability);
  return null;
}

function renderRunners() {
  const runners = selectedResult()?.runners ?? [];
  const oddsRace = selectedOddsRace();
  const prices = new Map((oddsRace?.prices ?? []).map((price) => [price.horseNumber, price]));
  els.runnerCount.textContent = `${runners.length}頭取得`;
  if (!runners.length) {
    els.runnerBody.innerHTML = `<tr><td colspan="16" class="empty-row">出走馬結果を取得中です</td></tr>`;
    return;
  }
  els.runnerBody.innerHTML = runners.map((runner) => {
    const winner = runner.finishPosition === 1 ? "winner-row" : "";
    const nonFinish = runner.finishPosition === null ? "non-finish" : "";
    const bodyWeight = runner.bodyWeight ? `${runner.bodyWeight}${runner.bodyWeightDelta === null ? "" : `(${runner.bodyWeightDelta >= 0 ? "+" : ""}${runner.bodyWeightDelta})`}` : "--";
    const price = prices.get(runner.horseNumber);
    const winOdds = price?.win ? `<button type="button" class="odds-pick" data-horse-number="${runner.horseNumber}" data-horse-name="${escapeHtml(runner.horseName)}" data-odds="${price.win}">${price.win.toFixed(1)}</button>` : "--";
    const placeOdds = price?.placeLow ? `${price.placeLow.toFixed(1)}–${price.placeHigh.toFixed(1)}` : "--";
    return `<tr class="${winner} ${nonFinish}">
      <td>${escapeHtml(runner.finishText)}</td><td><span class="gate-badge gate-${runner.gateNumber}">${runner.gateNumber ?? "-"}</span></td>
      <td>${runner.horseNumber}</td><td>${escapeHtml(runner.horseName)}</td><td class="market-price">${winOdds}</td><td class="market-price">${placeOdds}</td><td>${escapeHtml(runner.sexAge)}</td>
      <td>${runner.carriedWeight ?? "--"}</td><td>${escapeHtml(runner.jockeyName)}</td><td>${escapeHtml(runner.officialTime || "--")}</td>
      <td>${escapeHtml(runner.margin || "--")}</td><td>${runner.cornerPositions.join("-") || "--"}</td><td>${runner.finalSectional ?? "--"}</td>
      <td>${bodyWeight}</td><td>${escapeHtml(runner.trainerName)}</td><td>${runner.popularity ? `${runner.popularity}人気` : "--"}</td>
    </tr>`;
  }).join("");
  els.runnerBody.querySelectorAll(".odds-pick").forEach((button) => {
    button.addEventListener("click", () => {
      state.evMode = "manual";
      document.querySelectorAll("[data-ev-mode]").forEach((item) => item.classList.toggle("active", item.dataset.evMode === "manual"));
      setEvInputMode();
      els.betType.value = "単勝";
      els.selection.value = `${button.dataset.horseNumber} ${button.dataset.horseName}`;
      els.odds.value = button.dataset.odds;
      state.view = "expectancy";
      document.querySelectorAll(".view-tabs button").forEach((item) => item.classList.toggle("active", item.dataset.view === "expectancy"));
      document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.toggle("active", panel.id === "view-expectancy"));
      renderStrategies();
      document.querySelector("#expectancy").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
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
  const automaticCandidate = state.evMode === "auto" ? selectedAutomaticCandidate() : null;
  els.marketWeightOutput.textContent = `${els.marketWeight.value}%`;
  if (state.evMode === "auto") {
    applyAutomaticCandidate(automaticCandidate);
    if (!automaticCandidate) {
      renderBlockedAutomaticState();
      return;
    }
  }

  const odds = Number(els.odds.value);
  const probability = Number(els.probability.value) / 100;
  const bankroll = Number(els.bankroll.value) || 0;
  const maxStake = Number(els.maxStake.value) || 0;
  const valid = odds > 1 && probability > 0 && probability < 1;

  if (!valid) {
    els.breakEven.textContent = "--";
    els.expectedReturn.textContent = "--";
    els.edgeValue.textContent = "--";
    els.kellyValue.textContent = "--";
    els.edgeBadge.textContent = "入力待ち";
    els.edgeBadge.className = "decision hold";
    els.strategyGrid.innerHTML = scenarioDefinitions().map((scenario) => scenarioCard(scenario, null)).join("");
    renderRationale(null, automaticCandidate);
    return;
  }

  const marketProbability = selectedMarketProbability(odds);
  const marketWeight = Number(els.marketWeight.value) / 100;
  const uncertainty = Number(els.uncertainty.value) / 100;
  const blendedProbability = logitPool(probability, marketProbability, marketWeight);
  const conservativeProbability = Math.max(0.0001, blendedProbability - uncertainty);
  const scenarios = [
    calculateScenario("market", "市場基準", marketProbability, odds, bankroll, maxStake, false),
    calculateScenario("model", "モデル単独", probability, odds, bankroll, maxStake, true),
    calculateScenario("blend", "市場融合", blendedProbability, odds, bankroll, maxStake, true),
    calculateScenario("lower", "安全側下限", conservativeProbability, odds, bankroll, maxStake, true),
  ];
  const primary = scenarios.at(-1);

  els.breakEven.textContent = percent(1 / odds);
  els.expectedReturn.textContent = percent(primary.expectedReturn);
  els.edgeValue.textContent = signedPercent(primary.edge);
  els.edgeValue.className = primary.edge >= 0 ? "positive" : "negative";
  els.kellyValue.textContent = percent(primary.fullKelly);
  els.edgeBadge.textContent = primary.passes ? "安全側でも基準通過" : "安全側では見送り";
  els.edgeBadge.className = `decision ${primary.passes ? "buy" : "reject"}`;

  els.strategyGrid.innerHTML = scenarios.map((scenario) => scenarioCard(scenario, { odds })).join("");
  renderRationale({
    odds, modelProbability: probability, marketProbability, blendedProbability, conservativeProbability,
    marketWeight, uncertainty, ...primary,
  }, automaticCandidate);
}

function calculateScenario(id, name, probability, odds, bankroll, maxStake, eligible) {
  const expectedReturn = odds * probability;
  const edge = expectedReturn - 1;
  const fullKelly = Math.max(0, edge / (odds - 1));
  const passes = eligible && edge >= 0.08;
  const rawStake = bankroll * fullKelly * state.kellyFraction;
  const stake = passes ? Math.min(maxStake, roundHundred(rawStake)) : 0;
  return { id, name, probability, expectedReturn, edge, fullKelly, passes, stake, expectedProfit: stake * edge };
}

function setEvInputMode() {
  const automatic = state.evMode === "auto";
  [els.selection, els.odds, els.probability].forEach((input) => { input.readOnly = automatic; });
  els.betType.disabled = automatic;
  els.modelStatus.textContent = automatic
    ? modelData.status === "ready" ? `自動モデル稼働中 ${modelData.modelVersion ?? ""}` : "30年モデル未学習・自動推奨停止中"
    : "検証専用・入力値は実購入に使用しません";
}

function selectedAutomaticCandidate() {
  return matchingAutomaticCandidates().filter(isRecommendationReady)
    .sort((left, right) => candidateExpectedReturn(right) - candidateExpectedReturn(left))[0] ?? null;
}

function applyAutomaticCandidate(candidate) {
  els.betType.value = candidate?.betType ?? "単勝";
  els.selection.value = candidate?.selection ?? "";
  els.odds.value = candidate?.odds ?? "";
  els.probability.value = candidate ? (candidate.probability * 100).toFixed(2) : "";
}

function renderBlockedAutomaticState() {
  els.breakEven.textContent = "--";
  els.expectedReturn.textContent = "--";
  els.edgeValue.textContent = "--";
  els.kellyValue.textContent = "--";
  els.edgeBadge.textContent = "自動判定停止";
  els.edgeBadge.className = "decision reject";
  els.strategyGrid.innerHTML = scenarioDefinitions().map((scenario) => scenarioCard(scenario, null, "未取得データがあるため生成停止")).join("");
  els.rationaleList.innerHTML = [
    ["取得品質", "先週72レースの結果検査は合格。予測用30年データは蓄積中です。"],
    ["オッズ", "先週の締切後オッズは取得済みですが、予測時点のオッズではないため自動EVには使いません。"],
    ["モデル確率", "時系列検証と確率校正が未完了のため、勝率を推測で補完しません。"],
    ["結論", "欠損を成功扱いせず、推奨・買い目・購入候補をすべて停止しています。"],
  ].map(([title, body]) => `<li class="blocked"><strong>${title}</strong><br>${body}</li>`).join("");
}

function renderRationale(calculation, candidate) {
  if (!calculation) return;
  const probabilityGap = calculation.conservativeProbability - calculation.marketProbability;
  const comments = [
    ["期待値", `安全側確率${percent(calculation.conservativeProbability)}は市場基準${percent(calculation.marketProbability)}に対して${signedPercent(probabilityGap)}、期待回収率は${percent(calculation.expectedReturn)}です。`],
    ["確率品質", candidate ? `モデル${escapeHtml(candidate.modelVersion)}、校正検査${escapeHtml(candidate.calibrationStatus)}。校正不合格の候補は自動除外します。` : "入力確率は感度分析専用です。Platt・isotonicを独立期間で比較するまでは自動確率として扱いません。"],
    ["市場融合", `モデル${percent(calculation.modelProbability)}と市場${percent(calculation.marketProbability)}をlogit空間で市場${Math.round(calculation.marketWeight * 100)}%に融合し、${percent(calculation.blendedProbability)}としました。`],
    ["安全側", `融合確率から指定誤差幅${(calculation.uncertainty * 100).toFixed(1)}ptを控除。人気薄補正は固定せず、時期・オッズ帯ごとに再推定します。`],
    ["資金管理", `完全Kellyは${percent(calculation.fullKelly)}、選択中は${fractionLabel(state.kellyFraction)}、推奨額は${yen(calculation.stake)}です。`],
    ["時点整合", candidate ? `オッズ観測時刻${escapeHtml(candidate.oddsObservedAt)}以前の特徴量だけで計算します。` : "検証入力モードのため、予測時点の整合性は保証されません。"],
    ["判定", calculation.passes ? "安全側EV差8%以上を通過。上限額と100円単位を適用しました。" : "安全側EV差8%未満のため見送りです。閾値8%も将来のwalk-forward検証で更新します。"],
  ];
  els.rationaleList.innerHTML = comments.map(([title, body]) => `<li><strong>${title}</strong><br>${body}</li>`).join("");
}

function scenarioDefinitions() {
  return [
    { name: "市場基準", note: "控除前ベンチマーク" },
    { name: "モデル単独", note: "校正確率" },
    { name: "市場融合", note: "Benter型感度分析" },
    { name: "安全側下限", note: "誤差幅控除" },
  ];
}

function scenarioCard(scenario, calculation, emptyReason = "オッズ・確率入力待ち") {
  if (!calculation) {
    return `<article class="strategy-card"><header><strong>${scenario.name}</strong><span>${scenario.note}</span></header>
      <dl><div><dt>採用確率</dt><dd>--</dd></div><div><dt>期待回収率</dt><dd>--</dd></div><div><dt>推奨額</dt><dd>--</dd></div></dl>
      <footer class="reject">${emptyReason}</footer></article>`;
  }
  const selection = els.selection.value.trim() || "買い目未入力";
  const status = scenario.stake >= 100 ? `${els.betType.value} ${escapeHtml(selection)}・候補` : scenario.id === "market" ? "比較基準・購入対象外" : "見送り";
  return `<article class="strategy-card"><header><strong>${scenario.name}</strong><span>${scenarioDefinitions().find((item) => item.name === scenario.name)?.note ?? ""}</span></header>
    <dl><div><dt>採用確率</dt><dd>${percent(scenario.probability)}</dd></div><div><dt>期待回収率</dt><dd>${percent(scenario.expectedReturn)}</dd></div><div><dt>EV差</dt><dd class="${scenario.edge >= 0 ? "positive" : "negative"}">${signedPercent(scenario.edge)}</dd></div><div><dt>推奨額</dt><dd>${yen(scenario.stake)}</dd></div><div><dt>期待利益</dt><dd>${yen(Math.round(scenario.expectedProfit))}</dd></div></dl>
    <footer class="${scenario.stake >= 100 ? "" : "reject"}">${status}</footer></article>`;
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

function selectedMarketProbability(odds) {
  if (els.betType.value !== "単勝") return 1 / odds;
  const horseNumber = Number(els.selection.value.trim().match(/^\d+/)?.[0]);
  const prices = selectedOddsRace()?.prices?.filter((price) => price.win > 1) ?? [];
  const selected = prices.find((price) => price.horseNumber === horseNumber);
  const inverseTotal = prices.reduce((sum, price) => sum + (1 / price.win), 0);
  return selected && inverseTotal > 0 ? (1 / selected.win) / inverseTotal : 1 / odds;
}

function logitPool(modelProbability, marketProbability, marketWeight) {
  const clamp = (value) => Math.min(0.9999, Math.max(0.0001, value));
  const logit = (value) => Math.log(clamp(value) / (1 - clamp(value)));
  const pooledLogit = (1 - marketWeight) * logit(modelProbability) + marketWeight * logit(marketProbability);
  return 1 / (1 + Math.exp(-pooledLogit));
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00+09:00`);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatShortDate(value) {
  const date = new Date(`${value}T00:00:00+09:00`);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function roundHundred(value) {
  return Math.floor(Math.max(0, value) / 100) * 100;
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

function fractionLabel(value) {
  return ({ 0.125: "1/8 Kelly", 0.25: "1/4 Kelly", 0.5: "1/2 Kelly" })[value] ?? `${value} Kelly`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}
