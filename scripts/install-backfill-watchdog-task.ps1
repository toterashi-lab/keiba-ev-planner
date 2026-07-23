$ErrorActionPreference = "Stop"
$scriptPath = Join-Path $PSScriptRoot "watch-backfill.ps1"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$scriptPath`""
$trigger = New-ScheduledTaskTrigger -Once -At ((Get-Date).AddMinutes(2)) -RepetitionInterval (New-TimeSpan -Minutes 5) -RepetitionDuration (New-TimeSpan -Days 3650)
$settings = New-ScheduledTaskSettingsSet -MultipleInstances IgnoreNew -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Minutes 4)
Register-ScheduledTask -TaskName "KeibaEV-Backfill-Watchdog" -Action $action -Trigger $trigger -Settings $settings -Description "Recover the JRA historical backfill when its worker stops or becomes orphaned" -Force | Out-Null
Get-ScheduledTask -TaskName "KeibaEV-Backfill-Watchdog"
