$ErrorActionPreference = "Stop"
$scriptPath = Join-Path $PSScriptRoot "capture-jra-live-odds.ps1"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$scriptPath`" -DelayMs 1000 -WindowMinutes 20"
$triggers = @()
$time = [datetime]::Today.AddHours(9)
for ($index = 0; $index -lt 48; $index++) {
  $triggers += New-ScheduledTaskTrigger -Daily -At $time
  $time = $time.AddMinutes(10)
}
$settings = New-ScheduledTaskSettingsSet -MultipleInstances IgnoreNew -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Minutes 4)
Register-ScheduledTask -TaskName "KeibaEV-JRA-Live-Odds" -Action $action -Trigger $triggers -Settings $settings -Description "Capture all JRA bet-type odds for races starting within 20 minutes" -Force | Out-Null
Get-ScheduledTask -TaskName "KeibaEV-JRA-Live-Odds"
