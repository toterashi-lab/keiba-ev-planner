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
  & $node --no-warnings "scripts\post-backfill-workflow-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Post-backfill workflow validation failed: $LASTEXITCODE" }
  $statusJson = & $node --no-warnings "scripts\jra-free-db.mjs" status
  if ($LASTEXITCODE -ne 0) { throw "Database status failed: $LASTEXITCODE" }
  $status = $statusJson | ConvertFrom-Json
  $pending = [int]($status.jobs.queued) + [int]($status.jobs.running) + [int]($status.jobs.failed)
  if ($pending -gt 0) {
    $failedExhausted = & $node --no-warnings "scripts\backfill-readiness.mjs"
    if ($LASTEXITCODE -eq 3) { throw "Retry limit reached. See backfill-readiness report: $failedExhausted" }
    $task = Get-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill" -ErrorAction SilentlyContinue
    if ($task -and $status.workerHealth -eq "stalled") {
      Write-Warning "Backfill heartbeat is stale. Restarting the worker safely."
      $runLockPath = Join-Path $privateDir "backfill-run.lock"
      if (-not (Test-Path -LiteralPath $runLockPath)) { throw "Stalled worker lock is missing." }
      $lockOwner = Get-Content -LiteralPath $runLockPath -Raw | ConvertFrom-Json
      $workerPid = [int]$status.workerPid
      if ($workerPid -le 0 -or [int]$lockOwner.pid -ne $workerPid) {
        throw "Refusing to terminate a worker whose PID does not match the run lock."
      }
      Stop-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill"
      Stop-Process -Id $workerPid -Force -ErrorAction Stop
      for ($wait = 0; $wait -lt 10 -and (Get-Process -Id $workerPid -ErrorAction SilentlyContinue); $wait++) {
        Start-Sleep -Seconds 1
      }
      if (Get-Process -Id $workerPid -ErrorAction SilentlyContinue) { throw "Stalled worker did not terminate." }
      Start-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill"
    } elseif ($task -and $status.workerHealth -eq "orphaned") {
      Write-Warning "Backfill run lock is orphaned. Restarting the scheduled worker."
      Stop-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill"
      Start-Sleep -Seconds 2
      Start-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill"
    } elseif ($task -and $task.State -ne "Running") {
      Start-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill"
    }
    Write-Output ("Backfill pending: {0} months. Health={1}, ETA={2}. Model pipeline is waiting." -f $pending,$status.workerHealth,$status.estimatedCompletionAt)
    exit 0
  }

  & $node --no-warnings "scripts\jra-free-db.mjs" audit
  if ($LASTEXITCODE -ne 0) { throw "Full database audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\audit-field-availability.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Source field availability audit failed: $LASTEXITCODE" }
  $artifact = Join-Path $privateDir "models\ability-softmax-v1.json"
  $needsTraining = $ForceModel -or -not (Test-Path $artifact)
  if (-not $needsTraining) {
    try {
      $modelArtifact = Get-Content -LiteralPath $artifact -Raw | ConvertFrom-Json
      $needsTraining = [int64]$modelArtifact.dataCoverage.races -ne [int64]$status.races
    } catch {
      $needsTraining = $true
    }
  }
  if ($needsTraining) {
    & $node --no-warnings "scripts\train-expectancy-model.mjs"
    if ($LASTEXITCODE -ne 0) { throw "Model training failed: $LASTEXITCODE" }
  }
  & $node --no-warnings "scripts\finish-order-probabilities-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "All-ticket finish probability validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\predict-live-racecards.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live ability prediction failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\generate-live-market-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy generation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\generate-market-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Expectancy generation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\train-expectancy-model-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model pipeline check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\train-expectancy-model-unit-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model numerical unit check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Expectancy output check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy capability check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\evaluate-live-ev-ledger.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy ledger evaluation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-ev-ledger-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy ledger unit check failed: $LASTEXITCODE" }
  & (Join-Path $PSScriptRoot "publish-web-status.ps1")
  if ($LASTEXITCODE -ne 0) { throw "Web publish failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\goal-completion-audit.mjs" --require-complete
  if ($LASTEXITCODE -ne 0) { throw "Goal completion audit failed: $LASTEXITCODE" }
} finally {
  Stop-Transcript | Out-Null
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
