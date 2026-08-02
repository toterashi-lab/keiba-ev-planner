$ErrorActionPreference = "Stop"
$scriptPath = Join-Path $PSScriptRoot "refresh-latest-week.ps1"
$launcher = Join-Path $PSScriptRoot "run-powershell-hidden.vbs"
$action = New-ScheduledTaskAction -Execute (Join-Path $env:WINDIR "System32\wscript.exe") -Argument "`"$launcher`" `"$scriptPath`" -DelayMs 1500 -WaitMs 120000"
$triggers = @(
  (New-ScheduledTaskTrigger -Daily -At "20:00"),
  (New-ScheduledTaskTrigger -Weekly -WeeksInterval 1 -DaysOfWeek Saturday,Sunday -At "17:30")
)
$settings = New-ScheduledTaskSettingsSet -MultipleInstances IgnoreNew -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Hours 4)
Register-ScheduledTask -TaskName "KeibaEV-Latest-Week-Refresh" -Action $action -Trigger $triggers -Settings $settings -Description "Refresh official racecards, predictions, settled results, and the latest weekly web archive" -Force | Out-Null
Get-ScheduledTask -TaskName "KeibaEV-Latest-Week-Refresh"
