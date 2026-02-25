@echo off
chcp 65001 >nul
cd /d "%~dp0"

git init
git remote add origin https://github.com/elpyzz/Site-vitrine-Aos-Renov.git
git add .
git commit -m "Initial commit - Site vitrine Aos Renov"
git branch -M main
git push -u origin main

pause
