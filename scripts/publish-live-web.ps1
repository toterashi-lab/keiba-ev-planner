$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$public = Join-Path $root "public"
$privateDir = Join-Path $root "data\jra-free-private"
$lockPath = Join-Path $privateDir "web-publish.lock"
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

function Get-RemoteFileSha256([string]$Uri) {
  $response = Invoke-WebRequest -UseBasicParsing -Uri $Uri -TimeoutSec 20
  $bytes = if ($response.RawContentStream) { $response.RawContentStream.ToArray() }
    elseif ($response.Content -is [byte[]]) { $response.Content } else { [Text.Encoding]::UTF8.GetBytes([string]$response.Content) }
  $sha = [Security.Cryptography.SHA256]::Create()
  try { return ([BitConverter]::ToString($sha.ComputeHash($bytes))).Replace("-", "").ToLowerInvariant() }
  finally { $sha.Dispose() }
}
$lock = $null
try { $lock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::Write, [System.IO.FileShare]::None) }
catch [System.IO.IOException] { return }
try {
  Set-Location $root
  & $node --no-warnings "scripts\jra-live-racecards-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live racecard check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-live-odds-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live odds check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\generate-live-market-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy generation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\audit-field-availability.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Source field availability audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\build-public-demo.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Public build failed: $LASTEXITCODE" }
  Set-Location $public
  $manifestPath = Join-Path $public "data\publication-manifest.json"
  if (-not (Test-Path -LiteralPath $manifestPath)) { throw "Publication manifest is missing." }
  $manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
  git add --all
  git diff --cached --quiet
  if ($LASTEXITCODE -eq 0) { return }
  git commit -m ("Update live JRA expectancy {0}" -f (Get-Date -Format "yyyy-MM-dd HH:mm"))
  if ($LASTEXITCODE -ne 0) { throw "Git commit failed: $LASTEXITCODE" }
  git push origin main
  if ($LASTEXITCODE -ne 0) { throw "Git push failed: $LASTEXITCODE" }

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
} finally {
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
