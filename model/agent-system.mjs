import crypto from "node:crypto";
import { buildFinishOrderProbabilityBooks } from "./finish-order-probabilities.mjs";
export const UNIT_STAKE_YEN=100;
export const PREDICTION_STATES=Object.freeze(["draft","published","locked","settled","invalidated"]);
const aliases={stability:["recent5Stability","recent5PlaceRate"],placeRate:["priorPlaceRateSmoothed"],recentPerformance:["priorWinRateSmoothed","recent3PlaceRate"],connections:["jockeyWinRateSmoothed","trainerWinRateSmoothed"],drawStability:["gateWinRateSmoothed"],course:["venueWinRateSmoothed"],distance:["distanceBandWinRateSmoothed"],going:["goingWinRateSmoothed"],marketTrust:["marketProbability"],marketGap:["modelMarketGap"],trouble:["previousTroubleAdjustment","recent3PositionGain"],paceAdvantage:["paceAdvantage","recent3PositionGain"],conditionChange:["conditionChangeUpside"],longshot:["longshotScore"],speed:["speedFigure","fieldRelativeSmoothedWinRate"],closing:["closingSpeed","recent3LateCornerPositionPercentile"],drawChange:["drawChangeUpside"],jockeyChange:["jockeyChangeUpside"],paceFit:["paceFit","frontRunnerRateSmoothed"],styleFit:["runningStyleFit","frontRunnerRateSmoothed"],leaders:["leaderCompositionFit"],drawStyle:["drawStyleFit"],courseStyle:["courseStyleBias"],dayBias:["raceDayTrackBias"],earlySpeed:["earlySpeed"],positionStability:["positionStability","priorAveragePositionGain"],calibratedWin:["calibratedWinProbability"],expectedValue:["bestExpectedValue"],modelConfidence:["modelConfidence"],sampleSize:["sampleAdequacy"],calibrationQuality:["calibrationQuality"],oddsFreshness:["oddsFreshness"],lowVariance:["lowPredictionVariance"],consensus:["otherAgentConcentration"],overbet:["overbetRisk"],disagreement:["agentDisagreement"],favoriteRisk:["favoriteRisk"],alternativeValue:["alternativeValue"],oddsMovement:["oddsMovementValue"],modelDiversity:["modelDiversity"]};
function define(id,name,voice,types,weights,thresholds){return Object.freeze({id,name,voice,preferredBetTypes:types,weights:Object.freeze(weights),thresholds:Object.freeze(thresholds),version:"1.0.0",learning:Object.freeze({minimumSampleSize:500,maximumUpdateRate:.05,regularization:.1,recentWeightCap:.35})});}
export const AGENT_DEFINITIONS=Object.freeze([
define("safety","堅実派 セーフティ","大きな上振れより、崩れにくさを評価します。",["place","wide","quinella"],{stability:20,placeRate:15,recentPerformance:15,connections:10,drawStability:10,course:10,distance:10,going:5,marketTrust:5},{minimumEv:1.05,minimumConfidence:.65,minimumPlaceProbability:.45}),
define("sniper","穴狙い スナイパー","人気はありませんが、市場評価ほど弱くないと見ます。",["win","quinella","trio","trifecta"],{marketGap:20,trouble:15,paceAdvantage:15,conditionChange:10,longshot:10,speed:10,closing:10,drawChange:5,jockeyChange:5},{minimumEv:1.2,minimumConfidence:.5,minimumWinProbability:.06,minimumWinOdds:5}),
define("pace","展開派 ペースメーカー","隊列とペースから、有利な位置を取れる馬を評価します。",["quinella","wide","trio"],{paceFit:20,styleFit:20,leaders:15,drawStyle:10,courseStyle:10,dayBias:10,closing:5,earlySpeed:5,positionStability:5},{minimumEv:1.08,minimumConfidence:.55}),
define("analyst","数理派 アナリスト","推定勝率、誤差、オッズの3点から購入可否を判断します。",["win","place"],{calibratedWin:30,expectedValue:25,modelConfidence:15,sampleSize:10,calibrationQuality:10,oddsFreshness:5,lowVariance:5},{minimumEv:1.1,minimumConfidence:.7}),
define("contrarian","逆張り派 コントラリアン","評価集中が妥当か、オッズに妙味が残っているかを確認します。",["win","wide","trio"],{consensus:20,overbet:20,marketGap:15,disagreement:15,favoriteRisk:10,alternativeValue:10,oddsMovement:5,modelDiversity:5},{minimumEv:1.15,minimumConfidence:.55,minimumWinProbability:.04})]);

export function normalizeWinMarket(rows){const valid=(rows??[]).map(r=>({...r,odds:Number(r.odds)})).filter(r=>Number.isInteger(Number(r.horseNumber))&&r.odds>=1);const total=valid.reduce((s,r)=>s+1/r.odds,0);if(valid.length<2||!(total>0))throw new Error("単勝市場の正規化に必要なオッズがありません");return valid.map(r=>({...r,rawMarketProbability:1/r.odds,marketProbability:(1/r.odds)/total,marketOverround:total}));}
export function calculateWinValue(probability,odds,stakeYen=100){const p=Number(probability),price=Number(odds);if(!(p>=0&&p<=1)||!(price>=1)||!(stakeYen>0))throw new Error("期待値計算の入力が不正です");const expectedReturn=p*price*stakeYen;return{fairWinOdds:p>0?1/p:null,expectedReturn,expectedProfit:expectedReturn-stakeYen,expectedValueRatio:expectedReturn/stakeYen};}
export function brierScore(p,y){same(p,y);return avg(p.map((v,i)=>(Number(v)-Number(y[i]))**2));}export function logLoss(p,y,e=1e-12){same(p,y);return avg(p.map((v,i)=>{const q=clamp(Number(v),e,1-e),o=Number(y[i]);return-o*Math.log(q)-(1-o)*Math.log(1-q);}));}
export function multiclassBrierScore(p,w){validWinner(p,w);return p.reduce((s,v,i)=>s+(Number(v)-(i===w?1:0))**2,0);}export function multiclassLogLoss(p,w,e=1e-12){validWinner(p,w);return-Math.log(Math.max(e,Math.min(1,Number(p[w]))));}export function returnOnInvestment(i,p){i=Number(i);p=Number(p);return i>0?{roi:(p-i)/i,recoveryRate:p/i}:{roi:null,recoveryRate:null};}
export function agentFeatureValue(features,id){for(const key of[id,...(aliases[id]??[])]){const value=finite(features?.[key]);if(value!=null)return clamp(value,0,1);}return null;}
export function inspectAgentFeatureCoverage(features){const ids=[...new Set(AGENT_DEFINITIONS.flatMap(a=>Object.keys(a.weights)))],missingFeatures=ids.filter(id=>agentFeatureValue(features,id)==null);return{featureCount:ids.length,availableFeatureCount:ids.length-missingFeatures.length,missingFeatures};}
export function validateRaceInput(input,options={}){const failures=[],warnings=[],active=(input.entries??[]).filter(r=>!["scratched","excluded","cancelled"].includes(r.scratchStatus)),numbers=active.map(r=>Number(r.horseNumber));if(active.length<2)failures.push("出走馬が2頭未満です");if(numbers.some(n=>!Number.isInteger(n)||n<=0))failures.push("馬番が不正です");if(new Set(numbers).size!==numbers.length)failures.push("馬番が重複しています");if(input.expectedRunnerCount!=null&&Number(input.expectedRunnerCount)!==active.length)failures.push("出走馬数が一致しません");if(!input.raceId)failures.push("レースIDがありません");for(const[key,label]of[["predictedAt","予想時刻"],["cutoffAt","締切時刻"]]){if(!input[key])failures.push(`${label}がありません`);else if(!Number.isFinite(Date.parse(input[key])))failures.push(`${label}が不正です`);}if(Date.parse(input.predictedAt)>=Date.parse(input.cutoffAt))failures.push("予想時刻が締切以後です");if(!input.oddsObservedAt||!(input.winOdds??[]).length)failures.push("予想時点オッズがありません");if(input.oddsObservedAt&&Date.parse(input.oddsObservedAt)>=Date.parse(input.cutoffAt))failures.push("締切後オッズが含まれています");if(input.oddsObservedAt&&Date.parse(input.oddsObservedAt)>Date.parse(input.predictedAt))failures.push("予想後に観測したオッズが含まれています");const age=minutes(input.oddsObservedAt,input.predictedAt);if(age!=null&&age>(options.maximumOddsAgeMinutes??10))failures.push(`オッズが古すぎます (${age.toFixed(1)}分)`);const oddsNumbers=(input.winOdds??[]).map(r=>Number(r.horseNumber));if(oddsNumbers.length&&numbers.some(n=>!oddsNumbers.includes(n)))failures.push("全出走馬の単勝オッズが揃っていません");if(input.hasTargetFields===true)failures.push("結果データが予想入力へ混入しています");if(input.modelValidationStatus===false)failures.push("モデル検証成果物がありません");if(input.historyChronologyValid===false)failures.push("過去走の時系列が不正です");const forbidden=forbiddenPaths(input.entries??[]);if(forbidden.length)failures.push(`結果列が予想入力へ混入しています: ${forbidden.slice(0,3).join("、")}`);const missing=active.flatMap(r=>r.missingFeatures??[]),cells=Math.max(1,active.reduce((s,r)=>s+(Number(r.featureCount)>0?Number(r.featureCount):Object.keys(r.features??{}).length+(r.missingFeatures?.length??0)),0)),missingRate=missing.length/cells;if(missingRate>(options.maximumMissingRate??.35))failures.push(`特徴量欠損率が上限を超えています (${(missingRate*100).toFixed(1)}%)`);else if(missing.length)warnings.push(`欠損特徴量 ${missing.length}件`);return{status:failures.length?"fail":warnings.length?"warn":"pass",failures,warnings,missingRate,activeRunnerCount:active.length,forbiddenPaths:forbidden,oddsAgeMinutes:age};}

export function runFiveAgentPrediction(input, options = {}) {
  const dataQuality = validateRaceInput(input, options);
  if (dataQuality.status === "fail") {
    return { race_id: input.raceId ?? null, status: "blocked", data_quality: dataQuality, predictions: [] };
  }

  const market = normalizeWinMarket(input.winOdds);
  const marketByHorse = new Map(market.map((row) => [Number(row.horseNumber), row]));
  const entries = (input.entries ?? [])
    .filter((row) => !["scratched", "excluded", "cancelled"].includes(row.scratchStatus))
    .map((row) => enrichEntry(row, marketByHorse.get(Number(row.horseNumber)), dataQuality));
  const firstFour = AGENT_DEFINITIONS.slice(0, 4).map((agent) => predictAgent(agent, entries, input, dataQuality, options));
  const contrarianEntries = addConsensusFeatures(entries, firstFour);
  const contrarian = predictAgent(AGENT_DEFINITIONS[4], contrarianEntries, input, dataQuality, options);
  const predictions = [...firstFour, contrarian];

  return {
    race_id: input.raceId,
    status: "published",
    generated_at: input.predictedAt,
    data_snapshot_id: input.dataSnapshotId,
    dataQuality,
    data_quality: dataQuality,
    predictions,
    consensus: summarizeConsensus(predictions),
  };
}

function predictAgent(agent, entries, input, dataQuality, options) {
  const scored = entries.map((entry) => ({ ...entry, ...scoreEntry(agent, entry) }));
  const scoreProbabilities = softmax(scored.map((row) => row.rawScore), options.softmaxTemperature ?? 0.18);
  const blended = scoreProbabilities.map((probability, index) => {
    const base = finite(scored[index].modelProbability);
    return Math.max(1e-9, probability * 0.78 + (base ?? probability) * 0.22);
  });
  const normalized = normalize(blended);
  const horses = scored.map((row, index) => horseOutput(row, normalized[index]));
  horses.sort((left, right) => right.raw_score - left.raw_score || left.horse_number - right.horse_number);
  horses.forEach((horse, index) => { horse.rank = index + 1; });

  const confidence = agentConfidence(scored, horses, dataQuality);
  const recommendedBets = buildRecommendedBets(agent, horses, input.ticketOdds ?? [], confidence, options);
  const top = horses[0];
  const valuePick = [...horses].sort((a, b) => b.expected_value_ratio - a.expected_value_ratio)[0];
  const skip = buildSkipReasons(agent, top, confidence, recommendedBets, dataQuality);
  return {
    prediction_id: crypto.randomUUID(),
    race_id: input.raceId,
    agent_id: agent.id,
    agent_version: agent.version,
    model_version: input.modelVersion ?? "unversioned",
    data_snapshot_id: input.dataSnapshotId,
    predicted_at: input.predictedAt,
    odds_observed_at: input.oddsObservedAt,
    status: "published",
    top_pick: top?.horse_number ?? null,
    second_pick: horses[1]?.horse_number ?? null,
    third_pick: horses[2]?.horse_number ?? null,
    value_pick: valuePick?.horse_number ?? null,
    avoid_pick: horses.at(-1)?.horse_number ?? null,
    confidence,
    summary: `${agent.voice} ${top ? `${top.horse_name}を最上位評価。` : "評価対象なし。"}`,
    horses,
    recommended_bets: recommendedBets,
    skip_reasons: skip,
    data_quality: {
      status: dataQuality.status,
      missing_features: [...new Set(scored.flatMap((row) => row.missingAgentFeatures))],
      odds_freshness_minutes: dataQuality.oddsAgeMinutes,
      warnings: dataQuality.warnings,
    },
  };
}

function scoreEntry(agent, entry) {
  let weighted = 0;
  let availableWeight = 0;
  const contributions = [];
  const missingAgentFeatures = [];
  for (const [featureId, weight] of Object.entries(agent.weights)) {
    const value = agentFeatureValue(entry.features, featureId);
    if (value == null) {
      missingAgentFeatures.push(featureId);
      continue;
    }
    weighted += value * weight;
    availableWeight += weight;
    contributions.push({ featureId, value, contribution: value * weight });
  }
  const rawScore = availableWeight ? weighted / availableWeight : 0;
  contributions.sort((left, right) => right.contribution - left.contribution);
  return { rawScore, contributions, missingAgentFeatures, agentCoverage: availableWeight / 100 };
}

function horseOutput(row, probability) {
  const calibrated = clamp(probability, 1e-9, 1 - 1e-9);
  const value = calculateWinValue(calibrated, row.currentWinOdds);
  const placeProbability = clamp(1 - Math.pow(1 - calibrated, row.fieldSize >= 8 ? 3 : 2), 0, 1);
  const topReasons = row.contributions.slice(0, 3).map((item) => `${featureLabel(item.featureId)}を評価`);
  return {
    horse_number: row.horseNumber,
    horse_name: row.horseName,
    raw_score: round(row.rawScore * 100, 3),
    predicted_win_probability: calibrated,
    calibrated_win_probability: calibrated,
    predicted_place_probability: placeProbability,
    fair_win_odds: value.fairWinOdds,
    current_win_odds: row.currentWinOdds,
    market_probability: row.marketProbability,
    expected_value_ratio: value.expectedValueRatio,
    expected_return_per_100: Math.round(value.expectedReturn),
    expected_profit_per_100: Math.round(value.expectedProfit),
    confidence: clamp((row.agentCoverage * 0.6) + (row.modelConfidence * 0.4), 0, 1),
    uncertainty: clamp(1 - ((row.agentCoverage * 0.6) + (row.modelConfidence * 0.4)), 0, 1),
    rank: null,
    reasons: topReasons.length ? topReasons : ["利用可能な特徴量が限定的"],
    risks: row.missingAgentFeatures.length ? [`未取得特徴量 ${row.missingAgentFeatures.length}件`] : [],
  };
}

function buildRecommendedBets(agent, horses, ticketOdds, confidence, options) {
  if (!horses.length || confidence < agent.thresholds.minimumConfidence) return [];
  const probabilityByHorse = new Map(horses.map((row) => [row.horse_number, row.calibrated_win_probability]));
  const books = buildFinishOrderProbabilityBooks(probabilityByHorse);
  const candidates = [];
  for (const ticket of ticketOdds) {
    const betType = canonicalBetType(ticket.betType);
    if (!agent.preferredBetTypes.includes(betType) || !books[betType]) continue;
    const key = canonicalSelection(betType, ticket.selectionKey);
    const probability = books[betType].get(key);
    const odds = Number(ticket.odds ?? ticket.oddsLow ?? ticket.odds_low);
    if (!(probability > 0) || !(odds >= 1)) continue;
    const expectedValueRatio = probability * odds;
    if (expectedValueRatio < agent.thresholds.minimumEv) continue;
    if (betType === "win") {
      const horse = horses.find((row) => String(row.horse_number) === key);
      if (agent.thresholds.minimumWinProbability && horse.calibrated_win_probability < agent.thresholds.minimumWinProbability) continue;
      if (agent.thresholds.minimumWinOdds && odds < agent.thresholds.minimumWinOdds) continue;
    }
    if (betType === "place" && agent.thresholds.minimumPlaceProbability && probability < agent.thresholds.minimumPlaceProbability) continue;
    candidates.push({
      bet_type: betType,
      combinations: [key],
      units: 1,
      stake_yen: UNIT_STAKE_YEN,
      estimated_probability: probability,
      estimated_return: Math.round(probability * odds * UNIT_STAKE_YEN),
      expected_profit: Math.round((probability * odds - 1) * UNIT_STAKE_YEN),
      expected_value_ratio: expectedValueRatio,
      odds,
      reason: `EV ${expectedValueRatio.toFixed(2)} と信頼度 ${(confidence * 100).toFixed(0)}%が基準を通過`,
      risks: ["推定確率には誤差があり、利益を保証しません"],
      probability_status: ["trio", "trifecta", "quinella", "wide"].includes(betType) ? "reference_estimate" : "estimated",
      reference_estimate: ["trio", "trifecta", "quinella", "wide"].includes(betType),
    });
  }
  const limits = { trio: 5, trifecta: 5 };
  const counts = new Map();
  return candidates
    .sort((left, right) => right.expected_value_ratio - left.expected_value_ratio)
    .filter((row) => {
      const limit = limits[row.bet_type] ?? (options.maximumTicketsPerType ?? 3);
      const count = counts.get(row.bet_type) ?? 0;
      if (count >= limit) return false;
      counts.set(row.bet_type, count + 1);
      return true;
    });
}

function enrichEntry(entry, market, dataQuality) {
  const features = { ...(entry.features ?? {}) };
  const modelProbability = finite(entry.modelProbability) ?? finite(features.calibratedWinProbability) ?? market.marketProbability;
  const modelMarketGap = clamp(0.5 + (modelProbability - market.marketProbability) * 2, 0, 1);
  Object.assign(features, {
    marketProbability: market.marketProbability,
    calibratedWinProbability: modelProbability,
    modelMarketGap,
    bestExpectedValue: clamp(modelProbability * market.odds / 2, 0, 1),
    modelConfidence: finite(entry.modelConfidence) ?? clamp(1 - dataQuality.missingRate, 0, 1),
    sampleAdequacy: finite(entry.sampleAdequacy) ?? 0,
    calibrationQuality: clamp(1 - (finite(entry.calibrationError) ?? 1), 0, 1),
    oddsFreshness: clamp(1 - (dataQuality.oddsAgeMinutes ?? 10) / 10, 0, 1),
    lowPredictionVariance: clamp(1 - (finite(entry.predictionVariance) ?? 1), 0, 1),
  });
  return {
    ...entry,
    horseNumber: Number(entry.horseNumber),
    horseName: entry.horseName ?? `${entry.horseNumber}番`,
    currentWinOdds: market.odds,
    marketProbability: market.marketProbability,
    modelProbability,
    modelConfidence: features.modelConfidence,
    fieldSize: dataQuality.activeRunnerCount,
    features,
  };
}

function addConsensusFeatures(entries, predictions) {
  const topCounts = new Map();
  const probabilityRows = new Map();
  for (const prediction of predictions) {
    topCounts.set(prediction.top_pick, (topCounts.get(prediction.top_pick) ?? 0) + 1);
    for (const horse of prediction.horses) {
      if (!probabilityRows.has(horse.horse_number)) probabilityRows.set(horse.horse_number, []);
      probabilityRows.get(horse.horse_number).push(horse.calibrated_win_probability);
    }
  }
  return entries.map((entry) => {
    const probabilities = probabilityRows.get(entry.horseNumber) ?? [];
    const mean = avg(probabilities);
    const variance = avg(probabilities.map((value) => (value - mean) ** 2));
    const concentration = (topCounts.get(entry.horseNumber) ?? 0) / Math.max(1, predictions.length);
    const overbet = entry.marketProbability > entry.modelProbability ? entry.marketProbability - entry.modelProbability : 0;
    return {
      ...entry,
      features: {
        ...entry.features,
        otherAgentConcentration: concentration,
        overbetRisk: clamp(overbet * 4, 0, 1),
        agentDisagreement: clamp(Math.sqrt(variance) * 5, 0, 1),
        favoriteRisk: clamp(entry.marketProbability * 2, 0, 1),
        alternativeValue: clamp(entry.modelProbability * entry.currentWinOdds / 2, 0, 1),
        oddsMovementValue: finite(entry.features.oddsMovementValue) ?? 0.5,
        modelDiversity: clamp(1 - concentration, 0, 1),
      },
    };
  });
}

function summarizeConsensus(predictions) {
  const counts = new Map();
  for (const prediction of predictions) counts.set(prediction.top_pick, (counts.get(prediction.top_pick) ?? 0) + 1);
  const ranked = [...counts].sort((left, right) => right[1] - left[1]);
  return {
    top_pick: ranked[0]?.[0] ?? null,
    agreement: `${ranked[0]?.[1] ?? 0}/${predictions.length}`,
    split_opinion: (ranked[0]?.[1] ?? 0) < 3,
    votes: Object.fromEntries(ranked),
  };
}

function buildSkipReasons(agent, top, confidence, recommendedBets, dataQuality) {
  const reasons = [];
  if (confidence < agent.thresholds.minimumConfidence) reasons.push("最低信頼度を満たしていません");
  if (top && top.expected_value_ratio < agent.thresholds.minimumEv) reasons.push("最低期待値を満たしていません");
  if (dataQuality.status !== "pass") reasons.push("データ品質に警告があります");
  if (!recommendedBets.length && !reasons.length) reasons.push("利用可能な券種オッズで購入基準を満たす買い目がありません");
  return reasons;
}

function agentConfidence(scored, horses, dataQuality) {
  const coverage = avg(scored.map((row) => row.agentCoverage));
  const separation = horses.length > 1 ? Math.max(0, horses[0].raw_score - horses[1].raw_score) / 100 : 0;
  return clamp(coverage * 0.7 + Math.min(1, separation * 5) * 0.2 + (1 - dataQuality.missingRate) * 0.1, 0, 1);
}

function softmax(values, temperature) {
  const max = Math.max(...values);
  return normalize(values.map((value) => Math.exp((value - max) / Math.max(0.01, temperature))));
}

function normalize(values) {
  const total = values.reduce((sum, value) => sum + value, 0);
  return values.map((value) => value / total);
}

function canonicalBetType(value) {
  const map = { tansho: "win", fukusho: "place", umaren: "quinella", wide: "wide", sanrenpuku: "trio", sanrentan: "trifecta" };
  return map[value] ?? String(value ?? "").toLowerCase();
}

function canonicalSelection(type, value) {
  const numbers = String(value ?? "").match(/\d+/g)?.map(Number) ?? [];
  if (["quinella", "wide", "trio"].includes(type)) numbers.sort((left, right) => left - right);
  return numbers.join("-");
}

function forbiddenPaths(entries) {
  const pattern = /(^|\.)(finish|finishPosition|result|payout|finalOdds|closingOdds|popularity|rank|target)(\.|$)/i;
  const found = [];
  const walk = (value, path) => {
    if (!value || typeof value !== "object") return;
    for (const [key, child] of Object.entries(value)) {
      const childPath = path ? `${path}.${key}` : key;
      if (pattern.test(childPath)) found.push(childPath);
      else walk(child, childPath);
    }
  };
  entries.forEach((entry, index) => walk(entry.features ?? {}, `entries.${index}.features`));
  return found;
}

function featureLabel(id) {
  const labels = { stability: "近走安定度", placeRate: "複勝実績", marketGap: "市場評価との差", paceAdvantage: "展開利", paceFit: "想定ペース適性", calibratedWin: "校正済み勝率", expectedValue: "期待値", overbet: "過剰人気リスク", disagreement: "意見分散" };
  return labels[id] ?? id;
}

function finite(value) { const number = Number(value); return Number.isFinite(number) ? number : null; }
function clamp(value, minimum, maximum) { return Math.max(minimum, Math.min(maximum, value)); }
function avg(values) { return values.length ? values.reduce((sum, value) => sum + Number(value), 0) / values.length : 0; }
function round(value, digits) { const scale = 10 ** digits; return Math.round(value * scale) / scale; }
function minutes(from, to) { const left = Date.parse(from); const right = Date.parse(to); return Number.isFinite(left) && Number.isFinite(right) ? (right - left) / 60000 : null; }
function same(left, right) { if (!Array.isArray(left) || left.length !== right?.length || !left.length) throw new Error("配列長が一致しません"); }
function validWinner(probabilities, winnerIndex) { if (!Array.isArray(probabilities) || !probabilities.length || !Number.isInteger(winnerIndex) || winnerIndex < 0 || winnerIndex >= probabilities.length) throw new Error("勝者インデックスが不正です"); }
