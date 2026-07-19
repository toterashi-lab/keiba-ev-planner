param(
  [int]$RacesPerRun = 500,
  [int]$DelayMs = 2500,
  [int]$PollSeconds = 90
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }
Set-Location $root

& $node --no-warnings "scripts\jra-historical-exotic-odds.mjs" init
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
while ($true) {
  & $node --no-warnings "scripts\jra-historical-exotic-odds.mjs" run --limit $RacesPerRun --delay $DelayMs
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
  $status = (& $node --no-warnings "scripts\jra-historical-exotic-odds.mjs" status) | ConvertFrom-Json
  if ([int]$status.pendingJobs -eq 0) { break }
  Start-Sleep -Seconds $PollSeconds
}
