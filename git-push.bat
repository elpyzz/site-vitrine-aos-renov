@echo off
setlocal
cd /d "%~dp0"

set "GIT_EXE="
if exist "C:\Program Files\Git\bin\git.exe" set "GIT_EXE=C:\Program Files\Git\bin\git.exe"
if exist "C:\Program Files (x86)\Git\bin\git.exe" set "GIT_EXE=C:\Program Files (x86)\Git\bin\git.exe"
if exist "%LOCALAPPDATA%\Programs\Git\bin\git.exe" set "GIT_EXE=%LOCALAPPDATA%\Programs\Git\bin\git.exe"
where git >nul 2>&1 && set "GIT_EXE=git"

if "%GIT_EXE%"=="" (
  echo Git introuvable. Installez Git pour Windows: https://git-scm.com/download/win
  echo Puis ajoutez Git au PATH ou relancez ce script.
  exit /b 1
)

"%GIT_EXE%" add .
"%GIT_EXE%" status
"%GIT_EXE%" commit -m "Hero image Aos Renov, pages légales, Resend, renommage BTP Pilot"
"%GIT_EXE%" push origin main
endlocal
