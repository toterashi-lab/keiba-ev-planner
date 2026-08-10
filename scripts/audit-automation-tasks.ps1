param([string]$OutputPath)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$privateDir = if ($env:KEIBA_PRIVATE_DIR) { $env:KEIBA_PRIVATE_DIR } else { Join-Path (Split-Path $root -Parent) "data\jra-free-private" }
if (-not $OutputPath) { $OutputPath = Join-Path $privateDir "models\automation-audit.json" }

function Test-ScheduledScriptAction([string]$Arguments, [string]$ExpectedScript) {
  if ($Arguments.IndexOf($ExpectedScript, [StringComparison]::OrdinalIgnoreCase) -ge 0) { return $true }
  if (-not (Test-Path -LiteralPath $ExpectedScript)) { return $false }
  $expectedName = [IO.Path]::GetFileName($ExpectedScript)
  $expectedHash = (Get-FileHash -LiteralPath $ExpectedScript -Algorithm SHA256).Hash
  foreach ($match in [regex]::Matches($Arguments, '"([^\"]+\.ps1)"')) {
    $candidate = $match.Groups[1].Value
    if ([IO.Path]::GetFileName($candidate) -ine $expectedName -or -not (Test-Path -LiteralPath $candidate)) { continue }
    if ((Get-FileHash -LiteralPath $candidate -Algorithm SHA256).Hash -eq $expectedHash) { return $true }
  }
  return $false
}

$specs = @(
  @{ Name = "KeibaEV-JRA-Free-Backfill"; Script = "scripts\run-jra-free-backfill.ps1" },
  @{ Name = "KeibaEV-Backfill-Watchdog"; Script = "scripts\watch-backfill.ps1" },
  @{ Name = "KeibaEV-PostBackfill-Model"; Script = "scripts\run-post-backfill-pipeline.ps1" },
  @{ Name = "KeibaEV-JRA-Current-Sync"; Script = "scripts\sync-jra-current.ps1" },
  @{ Name = "KeibaEV-JRA-Live-Racecards"; Script = "scripts\sync-jra-live-racecards.ps1" },
  @{ Name = "KeibaEV-JRA-Live-Odds"; Script = "scripts\capture-jra-live-odds.ps1"; MinTriggers = 48; RequiredArgument = "-WindowMinutes 7" },
  @{ Name = "KeibaEV-JRA-Live-Odds-Offset"; Script = "scripts\capture-jra-live-odds.ps1"; MinTriggers = 48; RequiredArgument = "-WindowMinutes 7" },
  @{ Name = "KeibaEV-Latest-Week-Refresh"; Script = "scripts\refresh-latest-week.ps1"; MinTriggers = 2; RequiredArgument = "-WaitMs 120000" },
  @{ Name = "KeibaEV-Web-Publish"; Script = "scripts\publish-web-status.ps1" }
)

$tasks = foreach ($spec in $specs) {
  $task = Get-ScheduledTask -TaskName $spec.Name -ErrorAction SilentlyContinue
  $expectedScript = Join-Path $root $spec.Script
  if (-not $task) {
    [ordered]@{ name = $spec.Name; pass = $false; exists = $false; enabled = $false; actionMatches = $false; triggerCount = 0; expectedScript = $expectedScript }
    continue
  }
  $info = $task | Get-ScheduledTaskInfo
  $arguments = [string]$task.Actions.Arguments
  $enabled = $task.State -ne "Disabled" -and $task.Settings.Enabled
  $actionMatches = Test-ScheduledScriptAction $arguments $expectedScript
  $headless = [IO.Path]::GetFileName([string]$task.Actions.Execute) -ieq "wscript.exe"
  $triggerCount = @($task.Triggers).Count
  $minimumTriggers = if ($spec.MinTriggers) { [int]$spec.MinTriggers } else { 1 }
  $argumentMatches = -not $spec.RequiredArgument -or $arguments.IndexOf([string]$spec.RequiredArgument, [StringComparison]::OrdinalIgnoreCase) -ge 0
  [ordered]@{
    name = $spec.Name
    pass = [bool]($enabled -and $headless -and $actionMatches -and $argumentMatches -and $triggerCount -ge $minimumTriggers)
    exists = $true
    enabled = [bool]$enabled
    state = [string]$task.State
    actionExecute = [string]$task.Actions.Execute
    actionArguments = $arguments
    actionMatches = [bool]$actionMatches
    headless = [bool]$headless
    requiredArgument = [string]$spec.RequiredArgument
    argumentMatches = [bool]$argumentMatches
    triggerCount = $triggerCount
    minimumTriggers = $minimumTriggers
    expectedScript = $expectedScript
    lastRunTime = if ($info.LastRunTime.Year -gt 2000) { $info.LastRunTime.ToUniversalTime().ToString("o") } else { $null }
    lastTaskResult = [int64]$info.LastTaskResult
    nextRunTime = if ($info.NextRunTime.Year -gt 2000) { $info.NextRunTime.ToUniversalTime().ToString("o") } else { $null }
  }
}

$report = [ordered]@{
  version = "automation-audit-v1"
  checkedAt = [DateTime]::UtcNow.ToString("o")
  pass = @($tasks | Where-Object { -not $_.pass }).Count -eq 0
  requiredTaskCount = $specs.Count
  tasks = @($tasks)
}
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $OutputPath) | Out-Null
$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($OutputPath, (($report | ConvertTo-Json -Depth 8) + "`n"), $utf8)
$report | ConvertTo-Json -Depth 8
if (-not $report.pass) { exit 2 }
