$ErrorActionPreference = "Stop"
$scriptPath = Join-Path $PSScriptRoot "sync-jra-live-racecards.ps1"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$scriptPath`" -DelayMs 1500"
$triggers = @((New-ScheduledTaskTrigger -Daily -At "18:00"))
foreach ($time in @("08:00", "10:00", "12:00", "14:00", "16:00")) {
  $triggers += New-ScheduledTaskTrigger -Weekly -WeeksInterval 1 -DaysOfWeek Saturday,Sunday -At $time
}
$settings = New-ScheduledTaskSettingsSet -MultipleInstances IgnoreNew -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Hours 1)
Register-ScheduledTask -TaskName "KeibaEV-JRA-Live-Racecards" -Action $action -Trigger $triggers -Settings $settings -Description "Capture official JRA pre-race cards into isolated live tables" -Force | Out-Null
Get-ScheduledTask -TaskName "KeibaEV-JRA-Live-Racecards"
