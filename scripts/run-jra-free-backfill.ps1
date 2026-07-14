param(
  [int]$MonthsPerRun = 400,
  [int]$DelayMs = 1500,
  [int]$Passes = 5
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) {
  $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
}
if (-not (Test-Path $node)) {
  throw "Node.js runtime was not found."
}

Set-Location $root
$logDir = Join-Path $root "data\jra-free-private\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("backfill-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
$exitCode = 0

Start-Transcript -Path $logPath | Out-Null
try {
  & $node --no-warnings "scripts\jra-free-db.mjs" init --from 1996-01
  if ($LASTEXITCODE -ne 0) { throw "Queue initialization failed: $LASTEXITCODE" }
  for ($pass = 1; $pass -le $Passes; $pass++) {
    & $node --no-warnings "scripts\jra-free-db.mjs" run --limit $MonthsPerRun --delay $DelayMs
    if ($LASTEXITCODE -ne 0) {
      $exitCode = $LASTEXITCODE
      break
    }
  }
  & $node --no-warnings "scripts\jra-free-db.mjs" audit
  if ($LASTEXITCODE -ne 0) { $exitCode = $LASTEXITCODE }
} catch {
  Write-Error $_
  $exitCode = 1
} finally {
  Stop-Transcript | Out-Null
}

exit $exitCode
