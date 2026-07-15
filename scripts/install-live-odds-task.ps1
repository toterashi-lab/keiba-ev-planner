$ErrorActionPreference = "Stop"
$scriptPath = Join-Path $PSScriptRoot "capture-jra-live-odds.ps1"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$scriptPath`" -DelayMs 1000 -WindowMinutes 7"
$settings = New-ScheduledTaskSettingsSet -MultipleInstances IgnoreNew -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Minutes 4)
$tasks = @(
  @{ Name = "KeibaEV-JRA-Live-Odds"; OffsetMinutes = 0 },
  @{ Name = "KeibaEV-JRA-Live-Odds-Offset"; OffsetMinutes = 5 }
)
foreach ($spec in $tasks) {
  $triggers = @()
  $time = [datetime]::Today.AddHours(9).AddMinutes($spec.OffsetMinutes)
  for ($index = 0; $index -lt 48; $index++) {
    $triggers += New-ScheduledTaskTrigger -Daily -At $time
    $time = $time.AddMinutes(10)
  }
  Register-ScheduledTask -TaskName $spec.Name -Action $action -Trigger $triggers -Settings $settings -Description "Capture all JRA bet-type odds for races starting within 7 minutes at five-minute combined cadence" -Force | Out-Null
}
Get-ScheduledTask -TaskName "KeibaEV-JRA-Live-Odds*"
