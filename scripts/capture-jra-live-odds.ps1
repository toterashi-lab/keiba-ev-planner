param([int]$DelayMs = 1000, [int]$WindowMinutes = 20)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }
Set-Location $root
$date = Get-Date -Format "yyyy-MM-dd"
$logDir = Join-Path $root "data\jra-free-private\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("live-odds-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
Start-Transcript -Path $logPath | Out-Null
try {
  & $node --no-warnings "scripts\jra-free-odds.mjs" available --date $date --delay $DelayMs
  if ($LASTEXITCODE -eq 3) { return }
  if ($LASTEXITCODE -ne 0) { throw "Live odds availability probe failed: $LASTEXITCODE" }
  $beforeBatch = & $node --no-warnings -e "const{DatabaseSync}=require('node:sqlite');const d=new DatabaseSync('data/jra-free-private/keiba.sqlite',{readOnly:true});console.log(d.prepare(\"select coalesce(max(id),0) id from odds_ingestion_batches where source='JRA official live odds' and status='complete'\").get().id);d.close()"
  $raceCount = & $node --no-warnings -e "const{DatabaseSync}=require('node:sqlite');const d=new DatabaseSync('data/jra-free-private/keiba.sqlite',{readOnly:true});console.log(d.prepare('select count(*) c from live_races where race_date=?').get(process.argv[1]).c);d.close()" $date
  if ([int]$raceCount -eq 0) {
    & $node --no-warnings "scripts\jra-live-racecards.mjs" capture --future-only true --delay $DelayMs
    if ($LASTEXITCODE -ne 0) { throw "Racecard prerequisite failed: $LASTEXITCODE" }
  }
  & $node --no-warnings "scripts\jra-free-odds.mjs" capture --live true --snapshot-kind pre_race --date $date --window-minutes $WindowMinutes --delay $DelayMs
  if ($LASTEXITCODE -ne 0) { throw "Live win/place capture failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-free-exotic-odds.mjs" capture --live true --snapshot-kind pre_race --date $date --window-minutes $WindowMinutes --delay $DelayMs
  if ($LASTEXITCODE -ne 0) { throw "Live exotic capture failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-free-odds.mjs" audit
  if ($LASTEXITCODE -ne 0) { throw "Live odds audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\predict-live-racecards.mjs" --date $date
  if ($LASTEXITCODE -ne 0) { throw "Live ability prediction failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\generate-live-market-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy generation failed: $LASTEXITCODE" }
  $afterBatch = & $node --no-warnings -e "const{DatabaseSync}=require('node:sqlite');const d=new DatabaseSync('data/jra-free-private/keiba.sqlite',{readOnly:true});console.log(d.prepare(\"select coalesce(max(id),0) id from odds_ingestion_batches where source='JRA official live odds' and status='complete'\").get().id);d.close()"
  if ([int64]$afterBatch -gt [int64]$beforeBatch) {
    & (Join-Path $PSScriptRoot "publish-live-web.ps1")
  }
} finally { Stop-Transcript | Out-Null }
