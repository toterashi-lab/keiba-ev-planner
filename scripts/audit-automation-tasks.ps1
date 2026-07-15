param([string]$OutputPath)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$privateDir = Join-Path $root "data\jra-free-private"
if (-not $OutputPath) { $OutputPath = Join-Path $privateDir "models\automation-audit.json" }

$specs = @(
  @{ Name = "KeibaEV-JRA-Free-Backfill"; Script = "scripts\run-jra-free-backfill.ps1" },
  @{ Name = "KeibaEV-PostBackfill-Model"; Script = "scripts\run-post-backfill-pipeline.ps1" },
  @{ Name = "KeibaEV-JRA-Current-Sync"; Script = "scripts\sync-jra-current.ps1" },
  @{ Name = "KeibaEV-JRA-Live-Racecards"; Script = "scripts\sync-jra-live-racecards.ps1" },
  @{ Name = "KeibaEV-JRA-Live-Odds"; Script = "scripts\capture-jra-live-odds.ps1" },
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
  $actionMatches = $arguments.IndexOf($expectedScript, [StringComparison]::OrdinalIgnoreCase) -ge 0
  $triggerCount = @($task.Triggers).Count
  [ordered]@{
    name = $spec.Name
    pass = [bool]($enabled -and $actionMatches -and $triggerCount -gt 0)
    exists = $true
    enabled = [bool]$enabled
    state = [string]$task.State
    actionExecute = [string]$task.Actions.Execute
    actionArguments = $arguments
    actionMatches = [bool]$actionMatches
    triggerCount = $triggerCount
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
