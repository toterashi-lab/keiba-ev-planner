param([int]$DelayMs = 1500)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }
Set-Location $root
$privateDir = if ($env:KEIBA_PRIVATE_DIR) { $env:KEIBA_PRIVATE_DIR } else { Join-Path (Split-Path $root -Parent) "data\jra-free-private" }
$logDir = Join-Path $privateDir "logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("live-racecards-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
Start-Transcript -Path $logPath | Out-Null
try {
  & $node --no-warnings "scripts\jra-live-racecards.mjs" capture --future-only true --delay $DelayMs
  if ($LASTEXITCODE -ne 0) { throw "Live racecard capture failed: $LASTEXITCODE" }
  $today = Get-Date -Format "yyyy-MM-dd"
  $databasePath = Join-Path $privateDir "keiba.sqlite"
  $upcomingRaceCount = & $node --no-warnings -e "const{DatabaseSync}=require('node:sqlite');const d=new DatabaseSync(process.argv[1],{readOnly:true});console.log(d.prepare('select count(*) c from live_races where race_date>=?').get(process.argv[2]).c);d.close()" $databasePath $today
  if ($LASTEXITCODE -ne 0) { throw "Live racecard coverage check failed: $LASTEXITCODE" }
  if ([int]$upcomingRaceCount -eq 0) { Write-Output "No upcoming live races; waiting for official racecards."; return }
  & $node --max-old-space-size=8192 --no-warnings "scripts\predict-live-racecards.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live ability prediction failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\generate-live-market-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live AI output generation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\prediction-snapshot.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Prediction snapshot persistence failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\export-current-live-predictions.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live AI output export failed: $LASTEXITCODE" }
  & (Join-Path $PSScriptRoot "publish-live-web.ps1")
  if ($LASTEXITCODE -ne 0) { throw "Live racecard publication failed: $LASTEXITCODE" }
} finally { Stop-Transcript | Out-Null }
