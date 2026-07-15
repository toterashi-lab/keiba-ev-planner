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

Set-Location $root
$logDir = Join-Path $root "data\jra-free-private\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("web-publish-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))
$lock = $null
try { $lock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::Write, [System.IO.FileShare]::None) }
catch [System.IO.IOException] { return }

Start-Transcript -Path $logPath | Out-Null
try {
  & $node --no-warnings "scripts\validate-reference-dataset.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Reference dataset validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\ev-logic-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "EV logic validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\performance-benchmark-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Performance benchmark validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\ticket-engine-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Ticket engine validation failed: $LASTEXITCODE" }
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
  & $node --no-warnings "scripts\model-training-preflight.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Real database model preflight failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Market expectancy validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-live-racecards-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live racecard validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-live-odds-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live odds validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-market-ev-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\evaluate-live-ev-ledger.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy ledger evaluation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\live-ev-ledger-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Live expectancy ledger unit check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\goal-completion-audit.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Goal completion audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\goal-completion-audit-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Goal completion audit unit check failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-free-db.mjs" lock-self-check
  if ($LASTEXITCODE -ne 0) { throw "Database worker lock validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-free-db.mjs" audit
  if ($LASTEXITCODE -ne 0) { throw "Database audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\build-public-demo.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Public build failed: $LASTEXITCODE" }

  if ($DryRun) { return }

  Set-Location $public
  git add --all
  git diff --cached --quiet
  if ($LASTEXITCODE -eq 0) { return }
  git commit -m ("Update JRA database status {0}" -f (Get-Date -Format "yyyy-MM-dd"))
  if ($LASTEXITCODE -ne 0) { throw "Git commit failed: $LASTEXITCODE" }
  git push origin main
  if ($LASTEXITCODE -ne 0) { throw "Git push failed: $LASTEXITCODE" }
} finally {
  Stop-Transcript | Out-Null
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
