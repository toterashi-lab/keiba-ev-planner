param(
  [int]$RacesPerRun = 100000,
  [int]$DelayMs = 1000
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }
Set-Location $root
& $node --no-warnings "scripts\jra-historical-win-place-odds.mjs" init
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& $node --no-warnings "scripts\jra-historical-win-place-odds.mjs" run --limit $RacesPerRun --delay $DelayMs
exit $LASTEXITCODE
