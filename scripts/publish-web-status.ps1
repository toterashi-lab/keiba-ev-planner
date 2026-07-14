param([switch]$DryRun)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$public = Join-Path $root "public"
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) {
  $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
}
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

Set-Location $root
$logDir = Join-Path $root "data\jra-free-private\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$logPath = Join-Path $logDir ("web-publish-{0}.log" -f (Get-Date -Format "yyyyMMdd-HHmmss"))

Start-Transcript -Path $logPath | Out-Null
try {
  & $node --no-warnings "scripts\validate-reference-dataset.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Reference dataset validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\ev-logic-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "EV logic validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\performance-benchmark-check.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Performance benchmark validation failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\jra-free-db.mjs" audit
  if ($LASTEXITCODE -ne 0) { throw "Database audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\build-public-demo.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Public build failed: $LASTEXITCODE" }

  if ($DryRun) { exit 0 }

  Set-Location $public
  git add -- README.md data/database-status.js data/closing-odds-2026-07-11-2026-07-12.js
  git diff --cached --quiet
  if ($LASTEXITCODE -eq 0) { exit 0 }
  git commit -m ("Update JRA database status {0}" -f (Get-Date -Format "yyyy-MM-dd"))
  if ($LASTEXITCODE -ne 0) { throw "Git commit failed: $LASTEXITCODE" }
  git push origin main
  if ($LASTEXITCODE -ne 0) { throw "Git push failed: $LASTEXITCODE" }
} finally {
  Stop-Transcript | Out-Null
}
