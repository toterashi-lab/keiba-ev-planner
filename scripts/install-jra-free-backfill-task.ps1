$ErrorActionPreference = "Stop"
$scriptPath = Join-Path $PSScriptRoot "run-jra-free-backfill.ps1"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$scriptPath`" -MonthsPerRun 400 -DelayMs 1000 -Passes 5"
$trigger = New-ScheduledTaskTrigger -AtLogOn
$settings = New-ScheduledTaskSettingsSet -MultipleInstances IgnoreNew -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Days 7)
Register-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill" -Action $action -Trigger $trigger -Settings $settings -Description "Resumable low-rate JRA results backfill" -Force | Out-Null
Get-ScheduledTask -TaskName "KeibaEV-JRA-Free-Backfill"
