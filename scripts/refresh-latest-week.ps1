param(
  [int]$DelayMs = 1500,
  [int]$WaitMs = 120000,
  [switch]$SkipPublish,
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$privateDir = if ($env:KEIBA_PRIVATE_DIR) { $env:KEIBA_PRIVATE_DIR } else { Join-Path (Split-Path $root -Parent) "data\jra-free-private" }
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $root ".tools\node-v22.23.1-win-x64\node.exe" }
if (-not (Test-Path -LiteralPath $node)) { throw "Node.js runtime was not found." }

$logDir = Join-Path $privateDir "logs"
$modelDir = Join-Path $privateDir "models"
$lockPath = Join-Path $privateDir "latest-week-refresh.lock"
$statusPath = Join-Path $modelDir "latest-week-refresh.json"
New-Item -ItemType Directory -Force -Path $logDir, $modelDir | Out-Null
$logPath = Join-Path $logDir ("latest-week-refresh-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
$startedAt = [DateTime]::UtcNow
$steps = New-Object System.Collections.Generic.List[object]
$lock = $null

function Save-Status([string]$Status, [string]$Message) {
  $wasPublished = $false
  foreach ($step in $steps) {
    if ($step.name -eq "publication" -and $step.status -eq "complete") { $wasPublished = $true }
  }
  $stepSnapshot = [object[]]$steps
  $payload = [ordered]@{
    version = "latest-week-refresh-v1"
    status = $Status
    message = $Message
    startedAt = $startedAt.ToString("o")
    finishedAt = [DateTime]::UtcNow.ToString("o")
    durationSeconds = [Math]::Round(([DateTime]::UtcNow - $startedAt).TotalSeconds, 1)
    published = $wasPublished
    steps = $stepSnapshot
    logPath = $logPath
  }
  $utf8 = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($statusPath, (($payload | ConvertTo-Json -Depth 8) + "`n"), $utf8)
}

function Invoke-NodeStep([string]$Name, [string[]]$Arguments) {
  $stepStarted = [DateTime]::UtcNow
  if ($DryRun) {
    $steps.Add([ordered]@{ name = $Name; status = "dry_run"; command = "$node $($Arguments -join ' ')" })
    return
  }
  & $node --no-warnings @Arguments
  $exitCode = $LASTEXITCODE
  $steps.Add([ordered]@{ name = $Name; status = if ($exitCode -eq 0) { "complete" } else { "failed" };
      exitCode = $exitCode; durationSeconds = [Math]::Round(([DateTime]::UtcNow - $stepStarted).TotalSeconds, 1) })
  if ($exitCode -ne 0) { throw "$Name failed: $exitCode" }
}

try {
  try {
    $lock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::ReadWrite, [System.IO.FileShare]::None)
  } catch [System.IO.IOException] {
    $existing = Get-Item -LiteralPath $lockPath -ErrorAction SilentlyContinue
    if ($existing -and $existing.LastWriteTimeUtc -lt [DateTime]::UtcNow.AddHours(-4)) {
      Remove-Item -LiteralPath $lockPath -Force
      $lock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::ReadWrite, [System.IO.FileShare]::None)
    } else {
      Save-Status "skipped" "A latest-week refresh is already running."
      return
    }
  }
  $owner = [Text.Encoding]::UTF8.GetBytes((@{ pid = $PID; startedAt = $startedAt.ToString("o") } | ConvertTo-Json -Compress))
  $lock.Write($owner, 0, $owner.Length)
  $lock.Flush($true)

  Set-Location $root
  Start-Transcript -Path $logPath | Out-Null
  $repositoryWasClean = -not [bool]((& git status --porcelain) -join "")

  Invoke-NodeStep "current-results-sync" @("scripts\jra-free-db.mjs", "sync-current", "--refresh", "--delay", "$DelayMs", "--wait", "$WaitMs")
  Invoke-NodeStep "database-status" @("scripts\jra-free-db.mjs", "status")
  Invoke-NodeStep "official-racecard-capture" @("scripts\jra-live-racecards.mjs", "capture", "--future-only", "true", "--delay", "$DelayMs")

  if (-not $DryRun) {
    $databasePath = Join-Path $privateDir "keiba.sqlite"
    $today = Get-Date -Format "yyyy-MM-dd"
    $upcomingRaceCount = & $node --no-warnings -e "const{DatabaseSync}=require('node:sqlite');const d=new DatabaseSync(process.argv[1],{readOnly:true});console.log(d.prepare('select count(*) c from live_races where race_date>=?').get(process.argv[2]).c);d.close()" $databasePath $today
    if ($LASTEXITCODE -ne 0) { throw "Upcoming race coverage check failed: $LASTEXITCODE" }
    $steps.Add([ordered]@{ name = "upcoming-race-check"; status = "complete"; races = [int]$upcomingRaceCount })
    if ([int]$upcomingRaceCount -gt 0) {
      Invoke-NodeStep "live-prediction" @("--max-old-space-size=8192", "scripts\predict-live-racecards.mjs")
      Invoke-NodeStep "live-expectancy" @("scripts\generate-live-market-ev.mjs")
      Invoke-NodeStep "prediction-snapshot" @("scripts\prediction-snapshot.mjs")
    }
  }

  if ($SkipPublish -or $DryRun) {
    Invoke-NodeStep "live-prediction-export" @("scripts\export-current-live-predictions.mjs")
    Invoke-NodeStep "latest-week-export" @("scripts\export-current-week-racecards.mjs")
    Invoke-NodeStep "published-result-sync" @("scripts\sync-published-replay-results.mjs")
    Invoke-NodeStep "weekly-result-evaluation" @("scripts\evaluate-live-replay-results.mjs")
    Invoke-NodeStep "weekly-result-validation" @("scripts\live-replay-result-audit-check.mjs")
    Invoke-NodeStep "public-cache-refresh" @("scripts\update-public-cache-busters.mjs")
    Invoke-NodeStep "static-page-generation" @("scripts\generate-static-pages.mjs")
  } elseif (-not $repositoryWasClean) {
    $steps.Add([ordered]@{ name = "publication"; status = "skipped"; reason = "repository_not_clean_before_refresh" })
    Save-Status "complete_without_publish" "Data refreshed, but publication was skipped because the repository had local changes."
    return
  } else {
    & (Join-Path $PSScriptRoot "publish-live-web.ps1")
    if ($LASTEXITCODE -ne 0) { throw "Latest-week publication failed: $LASTEXITCODE" }
    $steps.Add([ordered]@{ name = "publication"; status = "complete" })
  }

  Save-Status "complete" "Latest racecards, predictions, and weekly results were refreshed."
} catch {
  Save-Status "failed" $_.Exception.Message
  throw
} finally {
  try { Stop-Transcript | Out-Null } catch {}
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
