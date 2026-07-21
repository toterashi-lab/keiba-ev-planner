param([switch]$ForceModel)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$privateDir = if ($env:KEIBA_PRIVATE_DIR) { $env:KEIBA_PRIVATE_DIR } else { Join-Path (Split-Path $root -Parent) "data\jra-free-private" }
$lockPath = Join-Path $privateDir "post-backfill.lock"
$logDir = Join-Path $privateDir "logs"
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$lock = $null
$lockOwner = [ordered]@{
  pid = $PID
  processStartedAt = (Get-Process -Id $PID).StartTime.ToUniversalTime().ToString("o")
  pipelineStartedAt = (Get-Date).ToUniversalTime().ToString("o")
}
for ($attempt = 0; $attempt -lt 2 -and -not $lock; $attempt++) {
  try {
    $lock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::ReadWrite, [System.IO.FileShare]::None)
    $payload = [System.Text.Encoding]::UTF8.GetBytes(($lockOwner | ConvertTo-Json -Compress))
    $lock.Write($payload, 0, $payload.Length)
    $lock.Flush($true)
  } catch [System.IO.IOException] {
    $existingOwner = $null
    try { $existingPayload = Get-Content -LiteralPath $lockPath -Raw } catch { exit 0 }
    try { $existingOwner = $existingPayload | ConvertFrom-Json } catch { $existingOwner = $null }
    $existingProcess = if ($existingOwner.pid) { Get-Process -Id ([int]$existingOwner.pid) -ErrorAction SilentlyContinue } else { $null }
    $ownerStartedAt = $null
    if ($existingOwner.processStartedAt) {
      try { $ownerStartedAt = [DateTime]::Parse($existingOwner.processStartedAt).ToUniversalTime() } catch { $ownerStartedAt = $null }
    }
    $sameProcess = $existingProcess -and $ownerStartedAt -and
      ([Math]::Abs(($existingProcess.StartTime.ToUniversalTime() - $ownerStartedAt).TotalSeconds) -lt 2)
    if ($sameProcess) { exit 0 }
    Remove-Item -LiteralPath $lockPath -Force -ErrorAction Stop
  }
}
if (-not $lock) { throw "Post-backfill pipeline lock could not be acquired." }

$logPath = Join-Path $logDir ("post-backfill-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
Start-Transcript -Path $logPath | Out-Null
try {
  Set-Location $root
  & $node --no-warnings "scripts\post-backfill-workflow-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Post-backfill workflow validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\settle-agent-predictions.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Agent prediction settlement failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\agent-performance.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Agent performance aggregation failed: $LASTEXITCODE" }
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

  & $node --no-warnings "scripts\jra-historical-win-place-odds.mjs" init
  if ($LASTEXITCODE -ne 0) { throw "Historical win/place odds queue initialization failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-historical-win-place-odds.mjs" repair-raw
  if ($LASTEXITCODE -ne 0) { throw "Historical win/place raw repair initialization failed: $LASTEXITCODE" }
  $oddsStatusJson = & $node --no-warnings "scripts\jra-historical-win-place-odds.mjs" status
  if ($LASTEXITCODE -ne 0) { throw "Historical win/place odds status failed: $LASTEXITCODE" }
  $oddsStatus = $oddsStatusJson | ConvertFrom-Json
  if ([int]$oddsStatus.pendingRaces -gt 0) {
    $oddsRunLock = Join-Path $privateDir "historical-odds-run.lock"
    if (-not (Test-Path -LiteralPath $oddsRunLock)) {
      Start-Process -FilePath "powershell.exe" -ArgumentList @(
        "-NoProfile", "-ExecutionPolicy", "Bypass", "-File",
        (Join-Path $PSScriptRoot "run-historical-win-place-odds-backfill.ps1")
      ) -WorkingDirectory $root -WindowStyle Hidden
    }
    Write-Output ("Historical win/place odds pending: {0}/{1} races. Model pipeline is waiting." -f
      $oddsStatus.pendingRaces,$oddsStatus.totalRaces)
    exit 0
  }
  & $node --no-warnings "scripts\jra-historical-win-place-odds.mjs" audit
  if ($LASTEXITCODE -ne 0) { throw "Historical win/place odds audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-historical-exotic-odds.mjs" repair-raw
  if ($LASTEXITCODE -ne 0) { throw "Historical exotic odds raw repair initialization failed: $LASTEXITCODE" }
  $exoticStatusJson = & $node --no-warnings "scripts\jra-historical-exotic-odds.mjs" status
  if ($LASTEXITCODE -ne 0) { throw "Historical exotic odds status failed: $LASTEXITCODE" }
  $exoticStatus = $exoticStatusJson | ConvertFrom-Json
  if ([int]$exoticStatus.pendingJobs -gt 0) {
    $exoticSupervisor = Get-CimInstance Win32_Process | Where-Object {
      $_.CommandLine -like "*run-historical-exotic-odds-backfill.ps1*"
    } | Select-Object -First 1
    if (-not $exoticSupervisor) {
      Start-Process -FilePath "powershell.exe" -ArgumentList @(
        "-NoProfile", "-ExecutionPolicy", "Bypass", "-File",
        (Join-Path $PSScriptRoot "run-historical-exotic-odds-backfill.ps1")
      ) -WorkingDirectory $root -WindowStyle Hidden
    }
    Write-Output ("Historical exotic odds pending: {0}/{1} jobs. Model pipeline is waiting." -f
      $exoticStatus.pendingJobs,$exoticStatus.totalJobs)
    exit 0
  }
  & $node --no-warnings "scripts\jra-historical-exotic-odds.mjs" audit
  if ($LASTEXITCODE -ne 0) { throw "Historical exotic odds audit failed: $LASTEXITCODE" }
  $coreRepairJson = & $node --no-warnings "scripts\jra-free-db.mjs" repair-raw
  if ($LASTEXITCODE -ne 0) { throw "Core raw archive repair initialization failed: $LASTEXITCODE" }
  $coreRepair = $coreRepairJson | ConvertFrom-Json
  if ([int]$coreRepair.queuedMonths -gt 0) {
    $task = Get-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill" -ErrorAction SilentlyContinue
    if ($task -and $task.State -ne "Running") { Start-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill" }
    Write-Output ("Core raw archive repair queued: {0} months. Model pipeline is waiting." -f $coreRepair.queuedMonths)
    exit 0
  }
  & $node --no-warnings "scripts\jra-free-db.mjs" audit
  if ($LASTEXITCODE -ne 0) { throw "Full database audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\audit-field-availability.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Source field availability audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\analyze-historical-payout-patterns.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Historical payout pattern analysis failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\historical-payout-patterns-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Historical payout pattern validation failed: $LASTEXITCODE" }
  $artifact = Join-Path $privateDir "models\ability-softmax-v1.json"
  $needsTraining = $ForceModel -or -not (Test-Path $artifact)
  if (-not $needsTraining) {
    & $node --no-warnings "scripts\model-freshness.mjs"
    if ($LASTEXITCODE -eq 10) { $needsTraining = $true }
    elseif ($LASTEXITCODE -ne 0) { throw "Model freshness validation failed: $LASTEXITCODE" }
  }
  if ($needsTraining) {
    & $node --max-old-space-size=8192 --no-warnings "scripts\model-training-preflight.mjs"
    if ($LASTEXITCODE -ne 0) { throw "Model training preflight failed: $LASTEXITCODE" }
    & $node --no-warnings "scripts\model-training-resource-check.mjs"
    if ($LASTEXITCODE -ne 0) { throw "Model training resource gate failed: $LASTEXITCODE" }
    & $node --max-old-space-size=8192 --no-warnings "scripts\train-expectancy-model.mjs"
    if ($LASTEXITCODE -ne 0) { throw "Model training failed: $LASTEXITCODE" }
  }
  & $node --no-warnings "scripts\model-freshness.mjs"
  if ($LASTEXITCODE -ne 0) { throw "New model is stale against the current database: $LASTEXITCODE" }
  & $node --no-warnings "scripts\model-artifact-compatibility-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model artifact compatibility validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\finish-order-probabilities-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "All-ticket finish probability validation failed: $LASTEXITCODE" }
  & $node --max-old-space-size=8192 --no-warnings "scripts\train-reference-asof-model.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Reference as-of model training failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\generate-market-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Reference expectancy generation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\audit-reference-market-benchmark.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Reference market probability benchmark failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\reference-market-benchmark-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Reference market probability benchmark check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\generate-market-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Guardrailed reference expectancy generation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\evaluate-reference-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Reference expectancy external audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\generate-market-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Audited reference expectancy generation failed: $LASTEXITCODE" }
  & $node --max-old-space-size=8192 --no-warnings "scripts\predict-live-racecards.mjs" --include-batch
  if ($LASTEXITCODE -ne 0) { throw "Live ability prediction failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\generate-live-market-ev.mjs" --include-batch
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy generation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\prediction-snapshot.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Prediction snapshot persistence failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\export-current-live-predictions.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live AI output export failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\train-expectancy-model-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model pipeline check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\train-expectancy-model-unit-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model numerical unit check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Expectancy output check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\reference-ev-scope-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "AI recommendation evaluation scope failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\reference-asof-model-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Reference as-of model audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy capability check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\evaluate-live-ev-ledger.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy ledger evaluation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\train-agent-models.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Agent model training failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-ev-ledger-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy ledger unit check failed: $LASTEXITCODE" }
  & (Join-Path $PSScriptRoot "publish-live-web.ps1")
  if ($LASTEXITCODE -ne 0) { throw "Web publish failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\goal-completion-audit.mjs" --require-complete
  if ($LASTEXITCODE -ne 0) { throw "Goal completion audit failed: $LASTEXITCODE" }
} finally {
  Stop-Transcript | Out-Null
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
