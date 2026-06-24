$ErrorActionPreference = 'Stop'
$port = 4173

Write-Host "Serving periodic on http://127.0.0.1:$port/"
Start-Job -ScriptBlock {
  param($root, $jobPort)
  Set-Location $root
  python -m http.server $jobPort --bind 127.0.0.1
} -ArgumentList $PSScriptRoot, $port | Out-Null
Start-Sleep -Seconds 1
Start-Process "http://127.0.0.1:$port/"
