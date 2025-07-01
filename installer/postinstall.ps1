# postinstall.ps1
$appData = "$env:LOCALAPPDATA\QMMS Trading System"
if (!(Test-Path $appData)) { New-Item -ItemType Directory -Path $appData }
