param([switch]$ForceModel)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$privateDir = Join-Path $root "data\jra-free-private"
$lockPath = Join-Path $privateDir "post-backfill.lock"
$logDir = Join-Path $privateDir "logs"
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$lock = $null
try {
  $lock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::Write, [System.IO.FileShare]::None)
} catch [System.IO.IOException] {
  exit 0
}

$logPath = Join-Path $logDir ("post-backfill-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
Start-Transcript -Path $logPath | Out-Null
try {
  Set-Location $root
  $statusJson = & $node --no-warnings "scripts\jra-free-db.mjs" status
  if ($LASTEXITCODE -ne 0) { throw "Database status failed: $LASTEXITCODE" }
  $status = $statusJson | ConvertFrom-Json
  $pending = [int]($status.jobs.queued) + [int]($status.jobs.running) + [int]($status.jobs.failed)
  if ($pending -gt 0) {
    $failedExhausted = & $node --no-warnings "scripts\backfill-readiness.mjs"
    if ($LASTEXITCODE -eq 3) { throw "Retry limit reached. See backfill-readiness report: $failedExhausted" }
    $task = Get-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill" -ErrorAction SilentlyContinue
    if ($task -and $task.State -ne "Running") { Start-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill" }
    Write-Output "Backfill pending: $pending months. Model pipeline is waiting."
    exit 0
  }

  & $node --no-warnings "scripts\jra-free-db.mjs" audit
  if ($LASTEXITCODE -ne 0) { throw "Full database audit failed: $LASTEXITCODE" }
  $artifact = Join-Path $privateDir "models\ability-softmax-v1.json"
  if ($ForceModel -or -not (Test-Path $artifact)) {
    & $node --no-warnings "scripts\train-expectancy-model.mjs"
    if ($LASTEXITCODE -ne 0) { throw "Model training failed: $LASTEXITCODE" }
  }
  & $node --no-warnings "scripts\generate-market-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Expectancy generation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\train-expectancy-model-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model pipeline check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Expectancy output check failed: $LASTEXITCODE" }
  & (Join-Path $PSScriptRoot "publish-web-status.ps1")
  if ($LASTEXITCODE -ne 0) { throw "Web publish failed: $LASTEXITCODE" }
} finally {
  Stop-Transcript | Out-Null
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
