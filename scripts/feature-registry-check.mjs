import { DatabaseSync } from "node:sqlite";
import { FEATURE_GROUPS, FORBIDDEN_TARGET_FIELDS, auditFeatureRegistry } from "../model/feature-registry.mjs";

const ids = FEATURE_GROUPS.map((group) => group.id);
if (new Set(ids).size !== ids.length) throw new Error("特徴量グループIDが重複しています");
if (FEATURE_GROUPS.length < 12) throw new Error("特徴量グループが不足しています");
if (!FORBIDDEN_TARGET_FIELDS.every((field) => field.startsWith("target."))) throw new Error("禁止特徴量の名前空間が不正です");

const database = new DatabaseSync("data/jra-free-private/keiba.sqlite", { readOnly: true });
try {
  const report = auditFeatureRegistry(database);
  if (!report.groups.some((group) => group.id === "weather_going" && group.status === "ready")) throw new Error("天候・馬場特徴量が利用可能と判定されません");
  if (!report.groups.some((group) => group.id === "horse_form" && group.status === "ready")) throw new Error("近走特徴量が利用可能と判定されません");
  if (!report.groups.some((group) => group.id === "course_geometry" && group.status === "missing")) throw new Error("未取得コース形状が誤って利用可能です");
  console.log(JSON.stringify({ groups: report.groups.length, ready: report.readyGroups, partial: report.partialGroups, missing: report.missingGroups }, null, 2));
} finally {
  database.close();
}
