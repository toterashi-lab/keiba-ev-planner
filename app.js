const liveEdition = window.KEIBA_LIVE_RACECARDS ?? { meetings: [], results: [] };
const referenceMeetings = window.KEIBA_REFERENCE_MEETINGS ?? { meetings: [] };
const referenceResults = window.KEIBA_RESULTS ?? { results: [] };
const referenceModel = window.KEIBA_MODEL_OUTPUTS ?? { predictions: [], candidates: [] };
const liveModel = window.KEIBA_LIVE_MODEL_OUTPUTS ?? { predictions: [], candidates: [] };
const dbStatus = window.KEIBA_DATABASE_STATUS ?? {};
const featureStatus = window.KEIBA_MODEL_FEATURE_COVERAGE ?? { groups: [] };
const ticketEngine = window.KEIBA_TICKET_ENGINE;
const forecastPolicy = window.KEIBA_FORECAST_POLICY;
const savedPerformance = window.KEIBA_AGENT_PERFORMANCE ?? { records: [] };

const currentEdition = liveEdition.meetings?.length ? liveEdition : referenceMeetings;
const results = [...(referenceResults.results ?? []), ...(liveEdition.results ?? [])];
const predictions = dedupeBy([...referenceModel.predictions ?? [], ...liveModel.predictions ?? []], predictionKey);
const candidates = dedupeBy([...referenceModel.candidates ?? [], ...liveModel.candidates ?? []], candidateKey);
const auditRows = referenceModel.logic?.referenceWeekExternalAudit?.recommendations ?? [];
const unitStake = Number(liveModel.unitStakeYen ?? referenceModel.unitStakeYen ?? ticketEngine?.UNIT_STAKE ?? 100);

const AGENTS = [
  { id: "safety", name: "堅実派 セーフティ", short: "堅", description: "安定性と複勝圏への入りやすさを重視", aliases: ["safety", "agent_safety", "agent_ability", "persona_orthodox", "ability"] },
  { id: "sniper", name: "穴狙い スナイパー", short: "穴", description: "市場より過小評価された人気薄を重視", aliases: ["sniper", "agent_sniper", "agent_value", "persona_value", "value"] },
  { id: "pace", name: "展開派 ペースメーカー", short: "展", description: "隊列、ペース、脚質と位置取りを重視", aliases: ["pace", "agent_pace", "pace_shape", "persona_pace"] },
  { id: "analyst", name: "数理派 アナリスト", short: "数", description: "校正確率、誤差、期待値を重視", aliases: ["analyst", "agent_analyst", "agent_data", "persona_trackside", "data"] },
  { id: "contrarian", name: "逆張り派 コントラリアン", short: "逆", description: "評価集中と過剰人気のリスクを検証", aliases: ["contrarian", "agent_contrarian", "agent_odds", "persona_market", "odds"] },
];
const AGENT_PERSONAS = Object.freeze({
  safety: { name: "堅実派 セーフティ", symbol: "堅", role: "安定担当", focus: "安定感・複勝圏", voice: "大きな上振れより、崩れにくさを評価します。" },
  sniper: { name: "穴狙い スナイパー", symbol: "穴", role: "妙味担当", focus: "人気薄・過小評価", voice: "人気はありませんが、市場評価ほど弱くないと見ます。" },
  pace: { name: "展開派 ペースメーカー", symbol: "展", role: "流れ担当", focus: "ペース・位置取り", voice: "隊列とペースから、走りやすい位置を探します。" },
  analyst: { name: "数理派 アナリスト", symbol: "数", role: "確率担当", focus: "確率・オッズ・誤差", voice: "推定勝率、誤差、オッズの3点で判断します。" },
  contrarian: { name: "逆張り派 コントラリアン", symbol: "逆", role: "過熱監視", focus: "過剰人気・評価集中", voice: "評価が集中しても、オッズの妙味は別に確認します。" },
});
const PERIODS = [{ id: "today", label: "今日", days: 0 }, { id: "7d", label: "直近7日", days: 7 }, { id: "30d", label: "直近30日", days: 30 }, { id: "all", label: "全期間", days: null }];
const BET_TYPES = ["単勝", "複勝", "馬連", "ワイド", "3連複", "3連単"];

const state = {
  route: routeFromHash(),
  date: currentEdition.meetings?.at(-1)?.date ?? "",
  venueCode: currentEdition.meetings?.at(-1)?.tracks?.[0]?.venueCode ?? "",
  raceNo: 1,
  detailTab: "conclusion",
  resultPeriod: "all",
  performancePeriod: "all",
};

initialize();

function initialize() {
  const track = selectedMeeting()?.tracks?.[0];
  state.venueCode = track?.venueCode ?? "";
  state.raceNo = nextRaceNumber(track) ?? track?.races?.[0]?.no ?? 1;
  bindGlobalEvents();
  renderAll();
}

function bindGlobalEvents() {
  window.addEventListener("hashchange", () => { state.route = routeFromHash(); renderRoute(); });
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("keiba-theme", theme); } catch {}
  });
  try { document.documentElement.dataset.theme = localStorage.getItem("keiba-theme") || "dark"; } catch {}
}

function renderAll() {
  renderRoute();
  renderHome();
  renderRaceWorkspace();
  renderResultsPage();
  renderPerformancePage();
  renderResearchPage();
}

function renderRoute() {
  const route = ["home", "races", "results", "performance", "research"].includes(state.route) ? state.route : "home";
  document.querySelectorAll("[data-page]").forEach((page) => page.classList.toggle("active", page.dataset.page === route));
  document.querySelectorAll("[data-route]").forEach((link) => link.classList.toggle("active", link.dataset.route === route));
  document.title = `${routeLabel(route)}｜AIデジタル競馬新聞`;
}

function renderHome() {
  const meeting = selectedMeeting();
  const track = selectedTrack();
  document.querySelector("#home-summary").textContent = meeting
    ? `${formatDate(meeting.date)} ${meeting.tracks.map((row) => row.venueName).join("・")}、全${meeting.tracks.reduce((sum, row) => sum + row.races.length, 0)}レース。`
    : "開催データがありません。";
  renderDateTabs("#home-date-tabs");
  renderVenueTabs("#home-venue-tabs");
  renderRaceCards(track);
  renderNextRace(track);
}

function renderDateTabs(selector) {
  const root = document.querySelector(selector);
  root.innerHTML = (currentEdition.meetings ?? []).map((meeting) => `<button type="button" class="${meeting.date === state.date ? "active" : ""}" data-date="${meeting.date}">${formatDate(meeting.date)}（${escapeHtml(meeting.weekday ?? weekday(meeting.date))}）</button>`).join("");
  root.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => selectDate(button.dataset.date)));
}

function renderVenueTabs(selector) {
  const root = document.querySelector(selector);
  root.innerHTML = (selectedMeeting()?.tracks ?? []).map((track) => `<button type="button" class="${track.venueCode === state.venueCode ? "active" : ""}" data-venue="${escapeHtml(track.venueCode)}">${escapeHtml(track.venueName)} <small>${escapeHtml(track.meetingName)}</small></button>`).join("");
  root.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => selectVenue(button.dataset.venue)));
}

function renderRaceCards(track) {
  const root = document.querySelector("#home-race-list");
  document.querySelector("#race-list-count").textContent = `${track?.races?.length ?? 0}レース`;
  root.innerHTML = (track?.races ?? []).map((race) => raceCardHtml(race, track)).join("") || empty("対象レースがありません");
  root.querySelectorAll("button[data-race]").forEach((button) => button.addEventListener("click", () => openRace(Number(button.dataset.race))));
}

function raceCardHtml(race, track) {
  const prediction = findPrediction(race.no, track);
  const consensus = buildConsensus(prediction);
  const realCandidates = readyCandidates(race.no, track);
  const volatility = forecastPolicy.volatilityProfile({ race, prediction, consensus, candidates: realCandidates });
  const top = displayedTopTicket(race, track, prediction, consensus, volatility);
  const result = findResult(race.no, track);
  const status = raceStatus(result, prediction, top, race);
  return `<button type="button" class="race-card" data-race="${race.no}" aria-label="${escapeHtml(track.venueName)}${race.no}レース ${escapeHtml(race.name)}を見る">
    <div class="race-card-top"><span class="race-card-no">${race.no}R</span><span class="race-card-title"><strong>${escapeHtml(race.name)}</strong><small>${escapeHtml(race.surface)}${number(race.distanceM)}m・${escapeHtml(race.condition)}</small></span><span class="race-card-time">${escapeHtml(race.start)}<br>${statusBadge(status)}</span></div>
    <div class="race-card-body"><span class="race-card-pick"><span>総合本命</span><strong>${consensus.top ? `${consensus.top.horseNumber}番 ${escapeHtml(consensus.top.horseName)}` : "発走前記録なし"}</strong></span><span class="agreement">一致度 ${consensus.agreement}/5</span>
      <span class="race-card-ticket"><span>AI予想買い目</span><strong>${top ? `${escapeHtml(top.betType)} ${escapeHtml(displayTicket(top.betType, top.ticketKeys?.[0] ?? top.selection, top))}・${unitStake}円` : "購入条件未達"}</strong></span>
      ${volatilityMeterHtml(volatility, true)}</div>
  </button>`;
}

function renderNextRace(track) {
  const root = document.querySelector("#next-race-card");
  const raceNo = nextRaceNumber(track);
  const race = track?.races?.find((row) => row.no === raceNo);
  if (!race) { root.innerHTML = `<span class="time">本日の開催</span><strong>${escapeHtml(track?.venueName ?? "")} 全レース発走済み</strong><small>結果確定後に予想との比較を表示します。</small>`; return; }
  const prediction = findPrediction(race.no, track);
  const consensus = buildConsensus(prediction);
  root.innerHTML = `<span class="time">次の発走 ${escapeHtml(race.start)}</span><strong>${escapeHtml(track.venueName)}${race.no}R ${escapeHtml(race.name)}</strong><small>${consensus.top ? `総合本命 ${consensus.top.horseNumber}番 ${escapeHtml(consensus.top.horseName)}・一致度 ${consensus.agreement}/5` : "発走前記録なし"}</small>`;
}

function renderRaceWorkspace() {
  renderDateTabs("#race-date-tabs");
  renderVenueTabs("#race-venue-tabs");
  const track = selectedTrack();
  const race = selectedRace();
  const strip = document.querySelector("#race-number-tabs");
  strip.innerHTML = (track?.races ?? []).map((row) => `<button type="button" class="${row.no === state.raceNo ? "active" : ""}" data-race="${row.no}"><strong>${row.no}R</strong><small>${escapeHtml(row.start)}</small></button>`).join("");
  strip.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { state.raceNo = Number(button.dataset.race); state.detailTab = "conclusion"; renderRaceWorkspace(); }));
  document.querySelector("#race-detail").innerHTML = race ? raceDetailHtml(race, track) : empty("レースを選択してください");
  bindRaceDetailEvents();
}

function raceDetailHtml(race, track) {
  const prediction = findPrediction(race.no, track);
  const result = findResult(race.no, track);
  const consensus = buildConsensus(prediction);
  const realCandidates = readyCandidates(race.no, track);
  const volatility = forecastPolicy.volatilityProfile({ race, prediction, consensus, candidates: realCandidates });
  const top = displayedTopTicket(race, track, prediction, consensus, volatility);
  const status = raceStatus(result, prediction, top, race);
  return `<article class="detail-shell">
    <header class="detail-head"><span class="race-card-no">${race.no}R</span><div class="detail-title"><h2>${escapeHtml(race.name)}</h2><p>${escapeHtml(track.venueName)}・${escapeHtml(race.start)}発走・${escapeHtml(race.surface)}${number(race.distanceM)}m・${escapeHtml(race.condition)}</p></div>${statusBadge(status)}</header>
    <nav class="detail-tabs" aria-label="レース詳細"><button type="button" data-tab="conclusion">結論</button><button type="button" data-tab="agents">5人の予想</button><button type="button" data-tab="bets">買い目</button><button type="button" data-tab="runners">出馬表</button><button type="button" data-tab="result">結果</button></nav>
    ${detailPanel("conclusion", conclusionHtml(consensus, top, prediction, volatility))}
    ${detailPanel("agents", agentsHtml(prediction, result, consensus))}
    ${detailPanel("bets", betsHtml(race.no, track, top))}
    ${detailPanel("runners", runnersHtml(result, prediction))}
    ${detailPanel("result", comparisonHtml(race, track, prediction, result))}
  </article>`;
}

function detailPanel(id, html) { return `<section class="detail-panel ${state.detailTab === id ? "active" : ""}" data-panel="${id}">${html}</section>`; }

function conclusionHtml(consensus, top, prediction, volatility) {
  const topMark = consensus.top;
  const expected = expectedReturn(top);
  const ticket = top ? `${top.betType} ${displayTicket(top.betType, top.ticketKeys?.[0] ?? top.selection, top)}` : "";
  const decision = top ? `今回の結論：${ticket} を${unitStake}円で検討` : "今回の結論：購入見送り";
  const decisionReason = top
    ? `総合本命は${topMark ? `${topMark.horseNumber}番 ${topMark.horseName}` : "未確定"}。5人中${consensus.agreement}人が上位評価しています。`
    : "発走前のオッズ・データ品質・確率校正のいずれかが購入条件を満たしていません。";
  return `<section class="decision-banner ${top ? "has-ticket" : "no-ticket"}"><span>まず見る結論</span><strong>${escapeHtml(decision)}</strong><p>${escapeHtml(decisionReason)}</p></section><div class="conclusion-grid"><section class="consensus-card"><div class="consensus-top"><div><span class="eyebrow">5人の合議結果</span><h3>${topMark ? `<span class="horse-number">${topMark.horseNumber}</span>${escapeHtml(topMark.horseName)}` : "発走前スナップショットなし"}</h3></div><span class="agreement">${consensus.split ? "意見割れ" : `一致 ${consensus.agreement}/5`}</span></div>
    <div class="consensus-picks"><div><span>総合本命</span><strong>${markLabel(consensus.ranked[0], "◎")}</strong></div><div><span>対抗</span><strong>${markLabel(consensus.ranked[1], "○")}</strong></div><div><span>穴候補</span><strong>${markLabel(consensus.value, "☆")}</strong></div></div>
    <p class="plain-explanation">${prediction ? escapeHtml(prediction.comment ?? "各AIの評価点と信頼度を加重して総合判断しています。") : "保存済みのAI予想がありません。予測生成後に5人の評価を統合します。"}</p></section>
    <section class="recommend-card"><span>AI予想買い目</span><h3>${top ? `${escapeHtml(top.betType)} ${escapeHtml(displayTicket(top.betType, top.ticketKeys?.[0] ?? top.selection, top))}` : "購入条件未達"}</h3><p>${top ? `${escapeHtml(top.method ?? "1点")}・1点${unitStake}円。${escapeHtml(top.comment ?? "5人のAI合議から組み立てた予想買い目です。")}` : "発走前オッズ、品質ゲート、確率校正の条件を満たす保存済み買い目はありません。"}</p>
    ${volatilityMeterHtml(volatility)}<div class="recommend-metrics"><div class="metric"><span>${unitStake}円あたり期待払戻</span><strong>${expected == null ? "推定対象外" : yen(Math.round(unitStake * expected))}</strong></div><div class="metric"><span>AI推定的中率</span><strong>${top?.abilityProbability == null ? "推定対象外" : percent(top.abilityProbability)}</strong></div><div class="metric"><span>買い目区分</span><strong>${top?.referenceEstimate ? "参考推定" : recommendationDecision(top)}</strong></div><div class="metric"><span>1点金額</span><strong>${yen(unitStake)}</strong></div></div></section></div>
    <p class="plain-explanation">同じ条件で${unitStake}円を何度も購入した場合に、平均でいくら戻るとAIが推定しているかを表示しています。</p>`;
}

function agentsHtml(prediction, result, consensus) {
  const agents = normalizedAgents(prediction);
  const cards = AGENTS.map((definition) => agentCardHtml(definition, agents.get(definition.id), result, prediction?.predictionContext)).join("");
  const runnerRows = consensus.ranked.slice(0, 8).map((horse) => `<tr><td><span class="horse-number">${horse.horseNumber}</span></td><td><strong>${escapeHtml(horse.horseName)}</strong></td>${AGENTS.map((agent) => `<td>${escapeHtml(agentMarkFor(agents.get(agent.id), horse.horseNumber))}</td>`).join("")}<td><strong>${horse.recommendedBy}/5</strong></td><td>${horse.score.toFixed(2)}</td></tr>`).join("");
  return `<div class="agent-grid">${cards}</div><div class="table-scroll"><table class="consensus-table"><thead><tr><th>馬番</th><th>馬名</th>${AGENTS.map((agent) => `<th>${escapeHtml(agent.name)}</th>`).join("")}<th>推奨</th><th>総合点</th></tr></thead><tbody>${runnerRows || `<tr><td colspan="9">発走前5エージェント保存なし</td></tr>`}</tbody></table></div>`;
}

function agentCardHtml(definition, agent, result, predictionContext = "pre_race") {
  const persona = agentPersona(definition);
  const heading = `<span class="agent-name"><span class="agent-icon ${definition.id}">${persona.symbol}</span><span><h3>${persona.name}</h3><small>${persona.role}・${persona.focus}</small></span></span>`;
  if (!agent || agent.status !== "available") return `<article class="agent-card unavailable"><header>${heading}<span class="status-badge waiting">データ不足</span></header><p>${persona.voice} ただし、発走前オッズまたは担当データが不足しているため、推測で印は出しません。</p></article>`;
  const marks = (agent.marks ?? []).slice(0, 3);
  const top = marks[0];
  const positions = resultPositionMap(result);
  const hit = marks.some((mark) => positions.get(Number(mark.horseNumber)) === 1);
  const verified = predictionContext === "pre_race";
  return `<article class="agent-card"><header>${heading}${isFinalResult(result) && verified ? `<span class="hit-badge ${hit ? "hit" : "miss"}">${hit ? "✓ ◎的中" : "× ◎不的中"}</span>` : `<span class="status-badge ${verified ? "ready" : "waiting"}">${verified ? "発走前保存" : "後日再現"}</span>`}</header>
    <div class="agent-marks">${marks.map((mark) => `<div class="agent-mark"><span>${escapeHtml(mark.mark)}</span><strong>${number(mark.horseNumber)} ${escapeHtml(mark.horseName)}</strong>${isFinalResult(result) ? `<small>${positions.get(Number(mark.horseNumber)) ?? "--"}着</small>` : ""}</div>`).join("")}</div>
    ${top ? `<div class="agent-ev"><span>勝率 ${percent(top.probability)}</span><span>適正 ${Number(top.fairOdds).toFixed(1)}倍</span><span>現オッズ ${Number(top.currentOdds).toFixed(1)}倍</span><span>EV ${Number(top.expectedValue).toFixed(2)}</span></div>` : ""}
    <p><b>${escapeHtml(persona.voice)}</b> ${escapeHtml(agent.opinion ?? agent.reason ?? `${marks[0]?.horseName ?? "上位馬"}を中心に評価。`)}</p>${agent.skipReasons?.length ? `<small class="agent-skip">見送り理由: ${escapeHtml(agent.skipReasons.join("、"))}</small>` : ""}</article>`;
}

function agentPersona(definition) {
  return AGENT_PERSONAS[definition.id] ?? { name: definition.name, symbol: definition.short, role: "予想担当", focus: definition.description, voice: "根拠をもとに評価します。" };
}

function betsHtml(raceNo, track, top) {
  const prediction = findPrediction(raceNo, track);
  const agentRows = agentRecommendationRows(prediction);
  const realRows = readyCandidates(raceNo, track).filter((row) => row.recommendationEligible === true);
  const raceCandidates = [...agentRows, ...realRows];
  if (!raceCandidates.length) {
    const failures = prediction?.agentSystemQuality?.failures ?? [];
    return empty(failures.length ? `買い目なし：${failures.join("、")}` : "購入基準を満たす保存済み買い目はありません。");
  }
  const cards = BET_TYPES.map((type) => betCardHtml(type, raceCandidates.filter((row) => row.betType === type))).filter(Boolean).join("");
  return `<div class="bet-section-head"><div><h3>AI推奨買い目</h3><p>すべて1点${unitStake}円。3連系・フォーメーションは最大5点です。</p></div><span class="status-badge ready">発走前保存</span></div><div class="bet-card-list">${cards}</div>`;
}

function betCardHtml(type, rows) {
  if (!rows.length) return "";
  const tickets = [];
  for (const row of [...rows].sort((a, b) => (expectedReturn(b) ?? 0) - (expectedReturn(a) ?? 0))) {
    const keys = row.ticketKeys?.length ? row.ticketKeys : [row.selection];
    for (const key of keys) {
      const display = displayTicket(type, key, row);
      if (!tickets.some((ticket) => ticket.display === display)) tickets.push({ display, row });
      if (tickets.length === 5) break;
    }
    if (tickets.length === 5) break;
  }
  const copyText = `${type}\n${tickets.map((ticket, index) => `${index + 1}. ${ticket.display} ${unitStake}円`).join("\n")}\n合計${tickets.length * unitStake}円`;
  const referenceEstimate = rows.some((row) => row.referenceEstimate);
  return `<article class="bet-card"><header><h4>${escapeHtml(type)}</h4><span class="status-badge ready">${tickets.length}点${referenceEstimate ? "・参考推定" : ""}</span></header><ol>${tickets.map((ticket) => `<li><span class="bet-line"><strong>${escapeHtml(ticket.display)}</strong><span>${unitStake}円</span></span><small>期待回収 ${yen(Math.round(unitStake * (expectedReturn(ticket.row) ?? 0)))}・${escapeHtml(ticket.row.agentName ?? "総合")}</small></li>`).join("")}</ol><footer><strong>合計 ${yen(tickets.length * unitStake)}</strong><button type="button" class="copy-button" data-copy="${escapeHtml(copyText)}">買い目をコピー</button></footer></article>`;
}

function runnersHtml(result, prediction) {
  const marks = new Map((prediction?.marks ?? []).map((row) => [Number(row.horseNumber), row.mark]));
  const rows = result?.runners ?? [];
  if (!rows.length) return empty("出馬表データがありません");
  return `<div class="table-scroll"><table class="runner-table"><thead><tr><th>着順</th><th>枠</th><th>馬番</th><th>AI印</th><th>馬名</th><th>性齢</th><th>斤量</th><th>騎手</th><th>調教師</th><th>人気</th></tr></thead><tbody>${rows.map((row) => `<tr class="${Number(row.finishPosition) <= 3 ? "top-finish" : ""}"><td>${escapeHtml(row.finishText ?? "出走予定")}</td><td>${row.gateNumber ?? "--"}</td><td><strong>${row.horseNumber}</strong></td><td>${escapeHtml(marks.get(Number(row.horseNumber)) ?? "")}</td><td><strong>${escapeHtml(row.horseName)}</strong></td><td>${escapeHtml(row.sexAge)}</td><td>${row.carriedWeight ?? "--"}</td><td>${escapeHtml(row.jockeyName)}</td><td>${escapeHtml(row.trainerName)}</td><td>${row.popularity ? `${row.popularity}人気` : "--"}</td></tr>`).join("")}</tbody></table></div>`;
}

function comparisonHtml(race, track, prediction, result) {
  const snapshotTime = prediction?.publishedAt ?? prediction?.generatedAt ?? prediction?.oddsObservedAt ?? null;
  const published = prediction?.predictionContext === "pre_race";
  const podium = [...(result?.runners ?? [])].filter((row) => Number(row.finishPosition) >= 1 && Number(row.finishPosition) <= 3).sort((a, b) => a.finishPosition - b.finishPosition);
  const audit = findAudit(race.no, track);
  if (!prediction && !isFinalResult(result)) return empty("予想と結果は、予想公開後にここへ固定保存されます。");
  return `<div class="snapshot-band"><div><strong>${published ? "予想時点の保存情報" : "発走時点データによる再現予想"}</strong><small>${snapshotTime ? formatDateTime(snapshotTime) : "公開日時のスナップショットなし"}</small></div><span class="status-badge ${published ? "ready" : "waiting"}">${published ? "発走前保存済み" : prediction ? "成績対象外" : "履歴なし"}</span></div>
    <div class="finish-podium">${[0, 1, 2].map((index) => `<div><span>${index + 1}着</span><strong>${podium[index] ? `${podium[index].horseNumber}番 ${escapeHtml(podium[index].horseName)}` : "結果待ち"}</strong></div>`).join("")}</div>
    <div class="result-finance"><div class="metric"><span>購入額</span><strong>${audit ? yen(audit.investmentYen) : "対象なし"}</strong></div><div class="metric"><span>払戻額</span><strong>${audit ? yen(audit.payoutYen) : "対象なし"}</strong></div><div class="metric"><span>収支</span><strong class="${audit?.netYen >= 0 ? "positive" : "negative"}">${audit ? signedYen(audit.netYen) : "対象なし"}</strong></div><div class="metric"><span>回収率</span><strong>${audit ? percent(audit.payoutYen / audit.investmentYen) : "対象なし"}</strong></div></div>
    ${isFinalResult(result) ? `<div class="agent-grid" style="margin-top:10px">${AGENTS.map((agent) => agentCardHtml(agent, normalizedAgents(prediction).get(agent.id), result, prediction?.predictionContext)).join("")}</div>` : `<p class="plain-explanation">結果確定後に、各AIの印と推奨買い目を照合します。</p>`}`;
}

function bindRaceDetailEvents() {
  document.querySelectorAll(".detail-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.detailTab);
    button.addEventListener("click", () => { state.detailTab = button.dataset.tab; renderRaceWorkspace(); });
  });
  document.querySelectorAll("button[data-copy]").forEach((button) => button.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(button.dataset.copy); showToast("買い目をコピーしました"); }
    catch { showToast("コピーできませんでした"); }
  }));
}

function renderResultsPage() {
  renderPeriodTabs("#result-filter", state.resultPeriod, (value) => { state.resultPeriod = value; renderResultsPage(); });
  const completed = results.filter(isFinalResult).filter((result) => inPeriod(resultDate(result), state.resultPeriod));
  document.querySelector("#result-list").innerHTML = completed.length ? completed.sort((a, b) => resultDate(b).localeCompare(resultDate(a)) || b.raceNo - a.raceNo).map(resultListCard).join("") : empty("指定期間の確定結果がありません");
  document.querySelectorAll("button[data-result-race]").forEach((button) => button.addEventListener("click", () => {
    const result = completed.find((row) => resultIdentity(row) === button.dataset.resultRace);
    if (!result) return;
    selectRaceByResult(result); state.detailTab = "result"; location.hash = "#races"; renderRaceWorkspace();
  }));
}

function resultListCard(result) {
  const track = trackForResult(result);
  const prediction = findPrediction(result.raceNo, track, resultDate(result));
  const audit = findAudit(result.raceNo, track, resultDate(result));
  const consensus = buildConsensus(prediction);
  const verified = prediction?.predictionContext === "pre_race";
  return `<button type="button" class="result-card" data-result-race="${escapeHtml(resultIdentity(result))}"><div><h3>${escapeHtml(result.meetingName)} ${result.raceNo}R ${escapeHtml(result.raceTitle)}</h3><p>${formatDate(resultDate(result))}・${prediction ? `総合本命 ${consensus.top?.horseNumber ?? "--"}番${verified ? "" : "（後日再現）"}` : "予想スナップショットなし"}</p></div><div class="result-stat"><span>AI買い目</span><strong>${audit ? `${escapeHtml(audit.betType)} ${escapeHtml(audit.selection)}` : "対象なし"}</strong></div><div class="result-stat"><span>購入</span><strong>${audit ? yen(audit.investmentYen) : "--"}</strong></div><div class="result-stat"><span>払戻</span><strong>${audit ? yen(audit.payoutYen) : "--"}</strong></div>${audit ? `<span class="hit-badge ${audit.hit ? "hit" : "miss"}">${audit.hit ? "✓ 的中" : "× 不的中"}</span>` : `<span class="status-badge ${verified ? "closed" : "waiting"}">${verified ? "履歴なし" : "成績対象外"}</span>`}</button>`;
}

function renderPerformancePage() {
  renderPeriodTabs("#performance-filter", state.performancePeriod, (value) => { state.performancePeriod = value; renderPerformancePage(); });
  const rows = performanceReports(state.performancePeriod);
  document.querySelector("#performance-summary").innerHTML = rows.map((row) => `<article class="performance-card"><header><h2>${escapeHtml(row.name)}</h2><span class="status-badge ${row.races ? "ready" : "waiting"}">${row.races}R</span></header><div class="performance-main"><span>◎の1着率</span><strong>${row.races ? percent(row.winHits / row.races) : "--"}</strong></div><div class="performance-metrics"><div class="metric"><span>◎の複勝率</span><strong>${row.races ? percent(row.placeHits / row.races) : "--"}</strong></div><div class="metric"><span>印内決着率</span><strong>${row.races ? percent(row.markFinish / row.races) : "--"}</strong></div><div class="metric"><span>購入額</span><strong>${row.investment == null ? "対象外" : yen(row.investment)}</strong></div><div class="metric"><span>回収率</span><strong>${row.investment ? percent(row.payout / row.investment) : "--"}</strong></div></div></article>`).join("");
}

function performanceReports(period) {
  return aggregateSavedPerformance(period);
}

function aggregateSavedPerformance(period) {
  return [...AGENTS.map((agent) => ({ id: agent.id, name: agent.name })), { id: "master", name: "総合予想" }].map((definition) => {
    const rows = savedPerformance.records.filter((row) => row.agentId === definition.id && inPeriod(row.raceDate, period));
    return { ...definition, races: rows.length, winHits: rows.filter((row) => row.honmeiFinish === 1).length,
      placeHits: rows.filter((row) => row.honmeiFinish > 0 && row.honmeiFinish <= 3).length,
      markFinish: rows.filter((row) => row.markFinish === true).length,
      investment: rows.reduce((sum, row) => sum + (row.investmentYen ?? 0), 0),
      payout: rows.reduce((sum, row) => sum + (row.payoutYen ?? 0), 0) };
  });
}

function renderResearchPage() {
  const months = Number(dbStatus.completeMonths ?? 0);
  const totalMonths = Number(dbStatus.totalMonths ?? 0);
  const cards = [["収録月", `${number(months)} / ${number(totalMonths)}`, "1996年以降"], ["レース", number(dbStatus.races), "品質検査済み"], ["出走馬", number(dbStatus.runners), "正規化済み"], ["払戻", number(dbStatus.payouts), "JRA公式結果"]];
  document.querySelector("#research-overview").innerHTML = cards.map(([label, value, note]) => `<article class="research-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`).join("");
  document.querySelector("#model-methodology").innerHTML = `<p>勝率モデルはレース時点より前の履歴だけで特徴量を作り、walk-forward検証と確率校正を行います。買い目の期待払戻は、発走前オッズ×安全補正後の的中確率×${unitStake}円で計算します。</p><p>BOX・フォーメーションは構成点に展開し、各点${unitStake}円として総投資を集計します。回収率100%を保証するものではありません。</p>`;
  const groups = featureStatus.groups ?? [];
  const missing = groups.filter((group) => group.status !== "ready");
  document.querySelector("#data-quality").innerHTML = `<p>利用可能 ${groups.length - missing.length}/${groups.length}特徴量群。未完成項目は予測根拠として使用しません。</p><p>${missing.map((group) => `${escapeHtml(group.label)}：${group.status === "partial" ? "一部利用" : "未収録"}`).join("<br>") || "全項目利用可能"}</p>`;
}

function normalizedAgents(prediction) {
  const map = new Map();
  const panel = prediction?.forecastPanel ?? [];
  for (const definition of AGENTS) {
    const row = panel.find((agent) => definition.aliases.includes(agent.id) || definition.aliases.includes(agent.personaTone));
    if (row) map.set(definition.id, row);
  }
  return map;
}

function buildConsensus(prediction) {
  const agents = normalizedAgents(prediction);
  const scores = new Map();
  const markPoints = { "◎": 5, "○": 3, "▲": 2, "△": 1, "☆": 1 };
  for (const definition of AGENTS) {
    const agent = agents.get(definition.id);
    if (!agent || agent.status !== "available") continue;
    const confidence = Math.max(.4, Math.min(1, Number(agent.confidence ?? 1)));
    for (const mark of agent.marks ?? []) {
      const id = Number(mark.horseNumber);
      const row = scores.get(id) ?? { horseNumber: id, horseName: mark.horseName, score: 0, recommendedBy: 0, honmeiBy: 0, valueBy: 0 };
      row.score += (markPoints[mark.mark] ?? 0) * confidence + Math.max(0, Number(mark.score ?? 0));
      if (["◎", "○", "▲"].includes(mark.mark)) row.recommendedBy += 1;
      if (mark.mark === "◎") row.honmeiBy += 1;
      if (definition.id === "sniper" && ["◎", "○", "▲"].includes(mark.mark)) row.valueBy += 1;
      scores.set(id, row);
    }
  }
  if (!scores.size && prediction?.marks?.length) {
    prediction.marks.forEach((mark, index) => scores.set(Number(mark.horseNumber), { ...mark, score: 5 - index, recommendedBy: 0, honmeiBy: 0, valueBy: mark.mark === "☆" ? 1 : 0 }));
  }
  const ranked = [...scores.values()].sort((a, b) => b.score - a.score || b.honmeiBy - a.honmeiBy || a.horseNumber - b.horseNumber);
  const top = ranked[0] ?? null;
  return { ranked, top, agreement: top?.honmeiBy ?? 0, split: Boolean(top && top.honmeiBy < 3), value: ranked.find((row) => row.valueBy > 0 && row !== top) ?? ranked[2] ?? null };
}

function readyCandidates(raceNo = state.raceNo, track = selectedTrack()) {
  return candidates.filter((row) => row.date === state.date && row.meetingName === track?.meetingName && Number(row.raceNo) === Number(raceNo))
    .filter((row) => row.status === "ready" && expectedReturn(row) != null && row.selection);
}
function topCandidate(raceNo = state.raceNo, track = selectedTrack()) { return readyCandidates(raceNo, track).sort((a, b) => (expectedReturn(b) ?? 0) - (expectedReturn(a) ?? 0))[0] ?? null; }
function displayedTopTicket(race, track, prediction, consensus, volatility) {
  return agentRecommendationRows(prediction).sort((a, b) => (expectedReturn(b) ?? 0) - (expectedReturn(a) ?? 0))[0]
    ?? readyCandidates(race.no, track).filter((row) => row.recommendationEligible === true)
      .sort((a, b) => (expectedReturn(b) ?? 0) - (expectedReturn(a) ?? 0))[0]
    ?? null;
}
function agentRecommendationRows(prediction) {
  const labels = { win: "単勝", place: "複勝", quinella: "馬連", wide: "ワイド", trio: "3連複", trifecta: "3連単" };
  const names = new Map(AGENTS.map((agent) => [agent.id, agent.name]));
  return (prediction?.agentPredictions ?? []).flatMap((agent) => (agent.recommended_bets ?? []).flatMap((bet) =>
    (bet.combinations ?? []).slice(0, ["trio", "trifecta"].includes(bet.bet_type) ? 5 : undefined).map((selection) => ({
      betType: labels[bet.bet_type] ?? bet.bet_type,
      method: "1点",
      selection,
      ticketKeys: [selection],
      points: 1,
      totalInvestmentYen: unitStake,
      abilityProbability: bet.estimated_probability,
      adoptedExpectedReturn: bet.expected_value_ratio,
      recommendationEligible: true,
      referenceEstimate: bet.reference_estimate === true || bet.probability_status === "reference_estimate",
      agentId: agent.agent_id,
      agentName: names.get(agent.agent_id) ?? agent.agent_id,
      comment: bet.reason,
    }))));
}
function expectedReturn(row) { for (const key of ["expected_value_ratio", "conservativeExpectedReturn", "adoptedExpectedReturn", "abilityExpectedReturn", "marketExpectedReturn"]) { const value = Number(row?.[key]); if (Number.isFinite(value)) return value; } return null; }

function raceStatus(result, prediction, top, race = selectedRace()) {
  if (isFinalResult(result)) return { id: "result", label: "結果確定" };
  if ((result && result.status !== "pre_race") || hasStarted(state.date, race?.start)) return { id: "closed", label: "発走済み" };
  if (!prediction) return { id: "waiting", label: "発走前データ未取得" };
  if (prediction?.agentSystemStatus === "blocked") return { id: "waiting", label: "品質確認中" };
  if (top) return { id: "ready", label: "期待値計算済み" };
  return { id: "waiting", label: "購入条件未達" };
}
function statusBadge(status) { const className = status.id === "odds" ? "waiting" : status.id; return `<span class="status-badge ${className}">${status.label}</span>`; }
function recommendationDecision(top) { const value = expectedReturn(top); if (value == null) return "対象外"; if (top.recommendationEligible && value >= 1.08) return "買い"; if (value >= 1) return "候補"; return "見送り"; }

function volatilityMeterHtml(profile, compact = false) {
  const segments = Array.from({ length: 5 }, (_, index) => `<i class="${index < profile.level ? "active" : ""}"></i>`).join("");
  return `<div class="volatility-meter level-${profile.level} ${compact ? "compact" : ""}" aria-label="荒れ具合 ${profile.label} ${profile.score}点"><div class="volatility-label"><span>荒れ具合</span><strong>${escapeHtml(profile.label)} <b>${profile.score}</b></strong></div><div class="volatility-track" aria-hidden="true">${segments}</div>${compact ? "" : `<div class="volatility-factors">${profile.factors.map((factor) => `<span>${escapeHtml(factor)}</span>`).join("")}</div>`}</div>`;
}

function findPrediction(raceNo = state.raceNo, track = selectedTrack(), date = state.date) { return predictions.find((row) => row.date === date && row.meetingName === track?.meetingName && Number(row.raceNo) === Number(raceNo)) ?? null; }
function findResult(raceNo = state.raceNo, track = selectedTrack(), date = state.date) { return results.find((row) => row.meetingName === track?.meetingName && Number(row.raceNo) === Number(raceNo) && (!row.date || row.date === date)) ?? null; }
function findAudit(raceNo, track, date = state.date) { return auditRows.find((row) => row.date === date && row.meetingName === track?.meetingName && Number(row.raceNo) === Number(raceNo)) ?? null; }
function selectedMeeting() { return currentEdition.meetings?.find((row) => row.date === state.date) ?? null; }
function selectedTrack() { return selectedMeeting()?.tracks?.find((row) => row.venueCode === state.venueCode) ?? selectedMeeting()?.tracks?.[0] ?? null; }
function selectedRace() { return selectedTrack()?.races?.find((row) => Number(row.no) === Number(state.raceNo)) ?? selectedTrack()?.races?.[0] ?? null; }

function selectDate(date) { state.date = date; state.venueCode = selectedMeeting()?.tracks?.[0]?.venueCode ?? ""; state.raceNo = selectedTrack()?.races?.[0]?.no ?? 1; renderHome(); renderRaceWorkspace(); }
function selectVenue(venueCode) { state.venueCode = venueCode; state.raceNo = selectedTrack()?.races?.[0]?.no ?? 1; renderHome(); renderRaceWorkspace(); }
function openRace(raceNo) { state.raceNo = raceNo; state.detailTab = "conclusion"; state.route = "races"; location.hash = "#races"; renderAll(); window.scrollTo({ top: 0, behavior: "smooth" }); }
function selectRaceByResult(result) { state.date = resultDate(result); const meeting = currentEdition.meetings?.find((row) => row.date === state.date); const track = meeting?.tracks?.find((row) => row.meetingName === result.meetingName); state.venueCode = track?.venueCode ?? meeting?.tracks?.[0]?.venueCode ?? ""; state.raceNo = result.raceNo; }

function renderPeriodTabs(selector, active, onSelect) { const root = document.querySelector(selector); root.innerHTML = PERIODS.map((period) => `<button type="button" class="${period.id === active ? "active" : ""}" data-period="${period.id}">${period.label}</button>`).join(""); root.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => onSelect(button.dataset.period))); }
function inPeriod(date, periodId) { const period = PERIODS.find((row) => row.id === periodId); if (!date || period?.days == null) return true; const now = new Date(); const target = new Date(`${date}T00:00:00+09:00`); const diff = Math.floor((now - target) / 86400000); return diff >= 0 && diff <= period.days; }
function isFinalResult(result) { return Boolean(result && result.status !== "pre_race" && (result.runners ?? []).some((row) => Number(row.finishPosition) === 1)); }
function resultPositionMap(result) { return new Map((result?.runners ?? []).map((row) => [Number(row.horseNumber), Number(row.finishPosition) || null])); }
function resultDate(result) { return normalizeDate(result?.date) || inferDateFromResult(result) || ""; }
function inferDateFromResult(result) { return currentEdition.meetings?.find((meeting) => meeting.tracks.some((track) => track.meetingName === result?.meetingName))?.date ?? referenceMeetings.meetings?.find((meeting) => meeting.tracks.some((track) => track.meetingName === result?.meetingName))?.date ?? ""; }
function trackForResult(result) { const meetings = [...(currentEdition.meetings ?? []), ...(referenceMeetings.meetings ?? [])]; return meetings.flatMap((meeting) => meeting.tracks.map((track) => ({ ...track, date: meeting.date }))).find((track) => track.meetingName === result.meetingName) ?? { meetingName: result.meetingName }; }
function resultIdentity(result) { return `${resultDate(result)}|${result.meetingName}|${result.raceNo}`; }

function nextRaceNumber(track) { if (!track?.races?.length) return null; if (state.date !== tokyoDate()) return state.date > tokyoDate() ? track.races[0].no : null; const minute = tokyoMinutes(); return track.races.find((race) => { const [hour, min] = race.start.split(":").map(Number); return hour * 60 + min > minute; })?.no ?? null; }
function hasStarted(date, startTime) { if (!date || !/^\d{2}:\d{2}$/.test(String(startTime ?? ""))) return false; if (date < tokyoDate()) return true; if (date > tokyoDate()) return false; const [hour, minute] = startTime.split(":").map(Number); return hour * 60 + minute <= tokyoMinutes(); }
function tokyoMinutes() { const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date()); return Number(parts.find((part) => part.type === "hour")?.value) * 60 + Number(parts.find((part) => part.type === "minute")?.value); }
function agentMarkFor(agent, horseNumber) { return agent?.marks?.find((mark) => Number(mark.horseNumber) === Number(horseNumber))?.mark ?? ""; }
function markLabel(row, mark) { return row ? `${mark} ${row.horseNumber}番 ${escapeHtml(row.horseName)}` : `${mark} --`; }
function displayTicket(type, key, row) { const raw = String(key ?? row.selection ?? ""); if (/^\d+(?:-\d+){0,2}$/.test(raw)) return ["3連単"].includes(type) ? raw.replaceAll("-", "→") : raw; return row.method === "1点" ? raw.replace(/\s+[^・]+(?:・|$)/g, "-").replace(/-$/, "") || raw : raw; }
function addMarkFallback() {}
function routeFromHash() { return location.hash.replace("#", "").split("/")[0] || "home"; }
function routeLabel(route) { return ({ home: "ホーム", races: "今日のレース", results: "予想結果", performance: "AI成績", research: "データ／研究" })[route] ?? "ホーム"; }
function predictionKey(row) { return `${row.date}|${row.meetingName}|${row.raceNo}|${row.modelVersion}`; }
function candidateKey(row) { return `${row.date}|${row.meetingName}|${row.raceNo}|${row.betType}|${row.method}|${row.selection}|${row.modelVersion}`; }
function dedupeBy(rows, keyFn) { return [...new Map(rows.map((row) => [keyFn(row), row])).values()]; }
function candidateKeySafe() {}
function formatDate(value) { const normalized = normalizeDate(value); if (!normalized) return "--"; const [, month, day] = normalized.split("-").map(Number); return `${month}月${day}日`; }
function normalizeDate(value) { const text = String(value ?? ""); if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0, 10); const match = text.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/); return match ? `${match[1]}-${match[2].padStart(2, "0")}-${match[3].padStart(2, "0")}` : ""; }
function formatDateTime(value) { try { return new Intl.DateTimeFormat("ja-JP", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Tokyo" }).format(new Date(value)); } catch { return value; } }
function weekday(value) { return new Intl.DateTimeFormat("ja-JP", { weekday: "short", timeZone: "Asia/Tokyo" }).format(new Date(`${value}T00:00:00+09:00`)); }
function tokyoDate() { return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date()); }
function number(value) { return Number(value ?? 0).toLocaleString("ja-JP"); }
function yen(value) { return `${number(Math.round(Number(value) || 0))}円`; }
function signedYen(value) { const amount = Math.round(Number(value) || 0); return `${amount >= 0 ? "+" : "-"}${yen(Math.abs(amount))}`; }
function percent(value) { return Number.isFinite(Number(value)) ? `${(Number(value) * 100).toFixed(1)}%` : "--"; }
function empty(message) { return `<div class="empty-state">${escapeHtml(message)}</div>`; }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]); }
function showToast(message) { const toast = document.querySelector("#toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800); }
