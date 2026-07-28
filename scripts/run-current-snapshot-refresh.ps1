param()

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$privateDir = if ($env:KEIBA_PRIVATE_DIR) { $env:KEIBA_PRIVATE_DIR } else { Join-Path (Split-Path $root -Parent) "data\jra-free-private" }
$node = Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
if (-not $node) { $node = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" }
if (-not (Test-Path $node)) { throw "Node.js runtime was not found." }

$lockPath = Join-Path $privateDir "current-snapshot-refresh.lock"
$lock = $null
try {
  New-Item -ItemType Directory -Force -Path $privateDir | Out-Null
  $lock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::OpenOrCreate, [System.IO.FileAccess]::ReadWrite, [System.IO.FileShare]::None)
} catch [System.IO.IOException] {
  exit 0
}

try {
  Set-Location $root
  & $node --no-warnings "scripts\train-recent-forecast-baseline.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Current snapshot model refresh failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\evaluate-reference-ev.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Current snapshot all-race audit failed: $LASTEXITCODE" }
  & $node --no-warnings "scripts\agent-performance.mjs"
  if ($LASTEXITCODE -ne 0) { throw "Current snapshot agent aggregation failed: $LASTEXITCODE" }
  Write-Output "Current quality-gated snapshot refresh completed."
} finally {
  if ($lock) { $lock.Dispose() }
  Remove-Item -LiteralPath $lockPath -Force -ErrorAction SilentlyContinue
}
