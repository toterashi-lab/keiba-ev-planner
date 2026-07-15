$ErrorActionPreference = "Stop"
$scriptPath = Join-Path $PSScriptRoot "run-post-backfill-pipeline.ps1"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$scriptPath`""
$trigger = New-ScheduledTaskTrigger -Once -At ((Get-Date).AddMinutes(5)) -RepetitionInterval (New-TimeSpan -Minutes 15) -RepetitionDuration (New-TimeSpan -Days 3650)
$settings = New-ScheduledTaskSettingsSet -MultipleInstances IgnoreNew -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Hours 8)
Register-ScheduledTask -TaskName "KeibaEV-PostBackfill-Model" -Action $action -Trigger $trigger -Settings $settings -Description "Audit, train, calculate expectancy, and publish after JRA backfill completion" -Force | Out-Null
Get-ScheduledTask -TaskName "KeibaEV-PostBackfill-Model"
