param(
  [int]$MonthsPerRun = 400,
  [int]$DelayMs = 1200
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$privateDir = if ($env:KEIBA_PRIVATE_DIR) { $env:KEIBA_PRIVATE_DIR } else { Join-Path (Split-Path $root -Parent) "data\jra-free-private" }
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $root ".tools\node-v22.23.1-win-x64\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

Set-Location $root
$logDir = Join-Path $privateDir "logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("core-raw-repair-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))

Start-Transcript -Path $logPath | Out-Null
try {
  for ($index = 0; $index -lt $MonthsPerRun; $index++) {
    $statusJson = & $node --no-warnings "scripts\jra-free-db.mjs" status
    if ($LASTEXITCODE -ne 0) { throw "Raw repair status failed: $LASTEXITCODE" }
    $status = $statusJson | ConvertFrom-Json
    if ([int]$status.rawRepair.pending -le 0) { break }
    & $node --no-warnings "scripts\jra-free-db.mjs" run-raw-repair --limit 1 --delay $DelayMs
    if ($LASTEXITCODE -ne 0) { throw "Raw repair worker failed: $LASTEXITCODE" }
  }
  $finalStatusJson = & $node --no-warnings "scripts\jra-free-db.mjs" status
  if ($LASTEXITCODE -ne 0) { throw "Final raw repair status failed: $LASTEXITCODE" }
  $finalStatus = $finalStatusJson | ConvertFrom-Json
  if ([int]$finalStatus.rawRepair.pending -eq 0) {
    & $node --no-warnings "scripts\audit-field-availability.mjs"
    if ($LASTEXITCODE -ne 0) { throw "Final source field availability audit failed: $LASTEXITCODE" }
  }
} finally {
  Stop-Transcript | Out-Null
}
