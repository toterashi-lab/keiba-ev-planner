$ErrorActionPreference = "Stop"
$launcher = Join-Path $PSScriptRoot "run-powershell-hidden.vbs"
$wscript = Join-Path $env:WINDIR "System32\wscript.exe"
$taskNames = @(
  "KeibaEV-JRA-Free-Backfill",
  "KeibaEV-Backfill-Watchdog",
  "KeibaEV-PostBackfill-Model",
  "KeibaEV-JRA-Current-Sync",
  "KeibaEV-JRA-Live-Racecards",
  "KeibaEV-JRA-Live-Odds",
  "KeibaEV-JRA-Live-Odds-Offset",
  "KeibaEV-Latest-Week-Refresh",
  "KeibaEV-Web-Publish"
)

foreach ($taskName in $taskNames) {
  $task = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
  if (-not $task) { Write-Warning "$taskName does not exist."; continue }
  $arguments = [string]$task.Actions.Arguments
  if ([string]$task.Actions.Execute -like "*wscript.exe" -and $arguments.Contains($launcher)) { continue }
  $match = [regex]::Match($arguments, '(?i)-File\s+(?:"([^"]+)"|''([^'']+)''|(\S+))(.*)$')
  if (-not $match.Success) { throw "Could not find the PowerShell script in $taskName arguments: $arguments" }
  $scriptPath = @($match.Groups[1].Value, $match.Groups[2].Value, $match.Groups[3].Value) | Where-Object { $_ } | Select-Object -First 1
  $tail = $match.Groups[4].Value.Trim()
  $headlessArguments = "`"$launcher`" `"$scriptPath`""
  if ($tail) { $headlessArguments += " $tail" }
  $action = New-ScheduledTaskAction -Execute $wscript -Argument $headlessArguments
  Set-ScheduledTask -TaskName $taskName -Action $action | Out-Null
}

Get-ScheduledTask -TaskName $taskNames | Select-Object TaskName, State, @{ Name = "Execute"; Expression = { $_.Actions.Execute } }, @{ Name = "Arguments"; Expression = { $_.Actions.Arguments } }
