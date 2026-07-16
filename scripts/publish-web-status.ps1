param([switch]$DryRun)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$public = Join-Path $root "public"
$privateDir = Join-Path $root "data\jra-free-private"
$lockPath = Join-Path $privateDir "web-publish.lock"
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) {
  $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
}
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

function Get-RemoteFileSha256([string]$Uri) {
  $response = Invoke-WebRequest -UseBasicParsing -Uri $Uri -TimeoutSec 20
  $bytes = if ($response.RawContentStream) { $response.RawContentStream.ToArray() }
    elseif ($response.Content -is [byte[]]) { $response.Content } else { [Text.Encoding]::UTF8.GetBytes([string]$response.Content) }
  $sha = [Security.Cryptography.SHA256]::Create()
  try { return ([BitConverter]::ToString($sha.ComputeHash($bytes))).Replace("-", "").ToLowerInvariant() }
  finally { $sha.Dispose() }
}

Set-Location $root
$logDir = Join-Path $root "data\jra-free-private\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("web-publish-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
$lock = $null
$lockOwner = [ordered]@{
  pid = $PID
  processStartedAt = (Get-Process -Id $PID).StartTime.ToUniversalTime().ToString("o")
  publishStartedAt = (Get-Date).ToUniversalTime().ToString("o")
}
for ($attempt = 0; $attempt -lt 2 -and -not $lock; $attempt++) {
  try {
    $lock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::ReadWrite, [System.IO.FileShare]::None)
    $payload = [System.Text.Encoding]::UTF8.GetBytes(($lockOwner | ConvertTo-Json -Compress))
    $lock.Write($payload, 0, $payload.Length)
    $lock.Flush($true)
  } catch [System.IO.IOException] {
    try { $existingPayload = Get-Content -LiteralPath $lockPath -Raw } catch { return }
    try { $existingOwner = $existingPayload | ConvertFrom-Json } catch { $existingOwner = $null }
    $existingProcess = if ($existingOwner.pid) { Get-Process -Id ([int]$existingOwner.pid) -ErrorAction SilentlyContinue } else { $null }
    $ownerStartedAt = $null
    if ($existingOwner.processStartedAt) {
      try { $ownerStartedAt = [DateTime]::Parse($existingOwner.processStartedAt).ToUniversalTime() } catch { $ownerStartedAt = $null }
    }
    $sameProcess = $existingProcess -and $ownerStartedAt -and
      ([Math]::Abs(($existingProcess.StartTime.ToUniversalTime() - $ownerStartedAt).TotalSeconds) -lt 2)
    if ($sameProcess) { return }
    Remove-Item -LiteralPath $lockPath -Force -ErrorAction Stop
  }
}
if (-not $lock) { throw "Web publication lock could not be acquired." }

Start-Transcript -Path $logPath | Out-Null
try {
  & $node --no-warnings "scripts\validate-reference-dataset.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Reference dataset validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\ev-logic-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "EV logic validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\finish-order-probabilities-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "All-ticket finish probability validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\performance-benchmark-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Performance benchmark validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\ticket-engine-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Ticket engine validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\structured-ticket-search-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Structured ticket search validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\feature-registry-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Feature registry validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\model-feature-pipeline-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model feature pipeline validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\model-validation-policy-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model validation policy failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\train-expectancy-model-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model training pipeline validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\train-expectancy-model-unit-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model numerical unit validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\model-training-preflight-freshness.mjs"
  if ($LASTEXITCODE -eq 10) {
    & $node --max-old-space-size=8192 --no-warnings "scripts\model-training-preflight.mjs"
    if ($LASTEXITCODE -ne 0) { throw "Real database model preflight failed: $LASTEXITCODE" }
  } elseif ($LASTEXITCODE -ne 0) {
    throw "Real database model preflight freshness check failed: $LASTEXITCODE"
  }
  & $node --no-warnings "scripts\model-data-snapshot-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model data snapshot validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\model-artifact-compatibility-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Model artifact compatibility validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Market expectancy validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\reference-ev-scope-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "AI recommendation evaluation scope failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-live-racecards-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live racecard validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-live-odds-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live odds validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\race-time-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Pre-race observation time validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-pipeline-workflow-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live pipeline workflow validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\evaluate-live-ev-ledger.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy ledger evaluation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-ev-ledger-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy ledger unit check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\goal-completion-audit-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Goal completion audit unit check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\horse-racing-ev-agent-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Horse-racing EV agent contract validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\expectancy-agent-ensemble-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Expectancy agent ensemble validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\publish-workflow-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Publication workflow validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\post-backfill-workflow-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Post-backfill workflow validation failed: $LASTEXITCODE" }
  & "scripts\audit-automation-tasks.ps1"
  if ($LASTEXITCODE -ne 0) { throw "Automation task audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-free-db.mjs" lock-self-check
  if ($LASTEXITCODE -ne 0) { throw "Database worker lock validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-free-db.mjs" audit
  if ($LASTEXITCODE -ne 0) { throw "Database audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\audit-field-availability.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Source field availability audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\analyze-historical-payout-patterns.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Historical payout pattern analysis failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\historical-payout-patterns-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Historical payout pattern validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\build-public-demo.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Public build failed: $LASTEXITCODE" }

  if ($DryRun) { return }

  Set-Location $public
  $manifestPath = Join-Path $public "data\publication-manifest.json"
  if (-not (Test-Path -LiteralPath $manifestPath)) { throw "Publication manifest is missing." }
  $manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
  git add --all
  git diff --cached --quiet
  if ($LASTEXITCODE -ne 0) {
    git commit -m ("Update JRA database status {0}" -f (Get-Date -Format "yyyy-MM-dd"))
    if ($LASTEXITCODE -ne 0) { throw "Git commit failed: $LASTEXITCODE" }
    git push origin main
    if ($LASTEXITCODE -ne 0) { throw "Git push failed: $LASTEXITCODE" }
  }

  git fetch origin main --quiet
  if ($LASTEXITCODE -ne 0) { throw "Git remote verification fetch failed: $LASTEXITCODE" }
  $localCommit = (& git rev-parse HEAD).Trim()
  $remoteCommit = (& git rev-parse origin/main).Trim()
  if ($localCommit -ne $remoteCommit) { throw "Published branch differs from origin/main." }

  $publicationUrl = "https://toterashi-lab.github.io/keiba-ev-planner/data/publication-manifest.json"
  $remoteManifest = $null
  for ($attempt = 0; $attempt -lt 60; $attempt++) {
    try {
      $cacheBuster = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
      $candidate = Invoke-RestMethod -UseBasicParsing -Uri ("{0}?id={1}&t={2}" -f $publicationUrl,$manifest.manifestId,$cacheBuster) -TimeoutSec 20
      $remoteLiveRacecardsSha256 = Get-RemoteFileSha256 ("https://toterashi-lab.github.io/keiba-ev-planner/data/live-racecards.js?t={0}" -f $cacheBuster)
      $remoteLiveModelOutputsSha256 = Get-RemoteFileSha256 ("https://toterashi-lab.github.io/keiba-ev-planner/data/live-model-outputs.js?t={0}" -f $cacheBuster)
      if (($candidate.manifestId -eq $manifest.manifestId) -and
        ($remoteLiveRacecardsSha256 -eq $manifest.liveRacecardsSha256) -and
        ($remoteLiveModelOutputsSha256 -eq $manifest.liveModelOutputsSha256)) { $remoteManifest = $candidate; break }
    } catch {
      Write-Warning ("Pages verification attempt {0} failed: {1}" -f ($attempt + 1),$_.Exception.Message)
    }
    Start-Sleep -Seconds 5
  }
  if (-not $remoteManifest) { throw "GitHub Pages did not serve the current publication manifest within five minutes." }

  $receiptPath = Join-Path $privateDir "models\publication-receipt.json"
  $receipt = [ordered]@{
    status = "verified"
    publishedAt = [DateTime]::UtcNow.ToString("o")
    url = $publicationUrl
    commit = $localCommit
    remoteCommit = $remoteCommit
    manifestId = $manifest.manifestId
    remoteManifestId = $remoteManifest.manifestId
    manifestSha256 = (Get-FileHash -LiteralPath $manifestPath -Algorithm SHA256).Hash.ToLowerInvariant()
    databaseRaces = [int64]$manifest.databaseRaces
    modelVersion = $manifest.modelVersion
    liveRaceCount = [int64]$manifest.liveRaceCount
    liveCandidateCount = [int64]$manifest.liveCandidateCount
    livePredictionCount = [int64]$manifest.livePredictionCount
    liveRacecardsSha256 = $manifest.liveRacecardsSha256
    remoteLiveRacecardsSha256 = $remoteLiveRacecardsSha256
    liveModelOutputsSha256 = $manifest.liveModelOutputsSha256
    remoteLiveModelOutputsSha256 = $remoteLiveModelOutputsSha256
  }
  $utf8 = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($receiptPath, (($receipt | ConvertTo-Json -Depth 6) + "`n"), $utf8)

  Set-Location $root
  & $node --no-warnings "scripts\goal-completion-audit.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Goal completion audit failed after publication verification: $LASTEXITCODE" }
} finally {
  Stop-Transcript | Out-Null
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
