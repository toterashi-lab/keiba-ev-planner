param([int]$DelayMs = 1500)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }
Set-Location $root
$logDir = Join-Path $root "data\jra-free-private\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("live-racecards-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
Start-Transcript -Path $logPath | Out-Null
try {
  & $node --no-warnings "scripts\jra-live-racecards.mjs" capture --future-only true --delay $DelayMs
  if ($LASTEXITCODE -ne 0) { throw "Live racecard capture failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\predict-live-racecards.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live ability prediction failed: $LASTEXITCODE" }
} finally { Stop-Transcript | Out-Null }
