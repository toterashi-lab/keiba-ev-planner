param()

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$privateDir = if ($env:KEIBA_PRIVATE_DIR) { $env:KEIBA_PRIVATE_DIR } else { Join-Path (Split-Path $root -Parent) "data\jra-free-private" }
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

$lockPath = Join-Path $privateDir "backfill-watchdog.lock"
$lock = $null
try {
  New-Item -ItemType Directory -Force -Path $privateDir | Out-Null
  $lock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::OpenOrCreate, [System.IO.FileAccess]::ReadWrite, [System.IO.FileShare]::None)
} catch [System.IO.IOException] {
  # Another watchdog is still inspecting the worker. Scheduled-task overlap is harmless.
  exit 0
}

try {
  Set-Location $root
  $statusJson = & $node --no-warnings "scripts\jra-free-db.mjs" status
  if ($LASTEXITCODE -ne 0) { throw "Database status failed: $LASTEXITCODE" }
  $status = $statusJson | ConvertFrom-Json
  $pending = [int]$status.jobs.queued + [int]$status.jobs.running + [int]$status.jobs.failed
  if ($pending -le 0) {
    Write-Output "Backfill is complete; watchdog is idle."
    exit 0
  }

  $task = Get-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill" -ErrorAction SilentlyContinue
  $healthy = $status.workerHealth -eq "healthy" -and $task -and $task.State -eq "Running"
  if ($healthy) {
    Write-Output ("Backfill healthy: pending={0}, pid={1}." -f $pending,$status.workerPid)
    exit 0
  }

  # Keep recovery in the PID-validated pipeline so this watchdog never kills an unrelated process.
  $taskState = if ($task) { [string]$task.State } else { "missing" }
  Write-Warning ("Backfill recovery requested: health={0}, task={1}." -f $status.workerHealth,$taskState)
  & (Join-Path $PSScriptRoot "run-post-backfill-pipeline.ps1")
  if ($LASTEXITCODE -ne 0) { throw "Backfill recovery pipeline failed: $LASTEXITCODE" }

  Start-Sleep -Seconds 5
  $recheckJson = & $node --no-warnings "scripts\jra-free-db.mjs" status
  if ($LASTEXITCODE -ne 0) { throw "Database status recheck failed: $LASTEXITCODE" }
  $recheck = $recheckJson | ConvertFrom-Json
  if ($recheck.workerHealth -ne "healthy") {
    throw ("Backfill did not recover: health={0}." -f $recheck.workerHealth)
  }
  Write-Output ("Backfill recovered: pid={0}." -f $recheck.workerPid)
} finally {
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
