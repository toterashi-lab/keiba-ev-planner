$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$public = Join-Path $root "public"
$privateDir = Join-Path $root "data\jra-free-private"
$lockPath = Join-Path $privateDir "web-publish.lock"
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }
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
  & $node --no-warnings "scripts\build-public-demo.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Public build failed: $LASTEXITCODE" }
  Set-Location $public
  git add --all
  git diff --cached --quiet
  if ($LASTEXITCODE -eq 0) { return }
  git commit -m ("Update live JRA expectancy {0}" -f (Get-Date -Format "yyyy-MM-dd HH:mm"))
  if ($LASTEXITCODE -ne 0) { throw "Git commit failed: $LASTEXITCODE" }
  git push origin main
  if ($LASTEXITCODE -ne 0) { throw "Git push failed: $LASTEXITCODE" }
} finally {
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
