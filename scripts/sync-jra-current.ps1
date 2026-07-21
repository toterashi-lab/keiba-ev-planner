param([int]$DelayMs = 1500, [int]$WaitMs = 120000)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) {
  $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
}
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

Set-Location $root
$logDir = Join-Path $root "data\jra-free-private\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("current-sync-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
$exitCode = 0

Start-Transcript -Path $logPath | Out-Null
try {
  & $node --no-warnings "scripts\jra-free-db.mjs" sync-current --refresh --delay $DelayMs --wait $WaitMs
  if ($LASTEXITCODE -ne 0) { $exitCode = $LASTEXITCODE }
  & $node --no-warnings "scripts\jra-free-db.mjs" audit
  if ($LASTEXITCODE -ne 0) { $exitCode = $LASTEXITCODE }
  & $node --no-warnings "scripts\evaluate-live-ev-ledger.mjs"
  if ($LASTEXITCODE -ne 0) { $exitCode = $LASTEXITCODE }
} catch {
  Write-Error $_
  $exitCode = 1
} finally {
  Stop-Transcript | Out-Null
}

exit $exitCode
