param(
  [int]$DelayMs = 1500,
  [int]$LockRetries = 6
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) {
  $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
}
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

Set-Location $root
$date = Get-Date -Format "yyyy-MM-dd"
$logDir = Join-Path $root "data\jra-free-private\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("closing-odds-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
$exitCode = 1

Start-Transcript -Path $logPath | Out-Null
try {
  & $node --no-warnings "scripts\jra-free-odds.mjs" available --date $date --delay $DelayMs
  if ($LASTEXITCODE -eq 3) {
    $exitCode = 0
    exit $exitCode
  }
  if ($LASTEXITCODE -ne 0) { throw "JRA odds availability probe failed: $LASTEXITCODE" }
  for ($attempt = 1; $attempt -le $LockRetries; $attempt++) {
    & $node --no-warnings "scripts\jra-free-odds.mjs" capture --date $date --delay $DelayMs
    $exitCode = $LASTEXITCODE
    if ($exitCode -eq 0) { break }
    if ($attempt -lt $LockRetries) { Start-Sleep -Seconds 300 }
  }
  if ($exitCode -eq 0) {
    & $node --no-warnings "scripts\jra-free-odds.mjs" audit
    $exitCode = $LASTEXITCODE
  }
} finally {
  Stop-Transcript | Out-Null
}

exit $exitCode
