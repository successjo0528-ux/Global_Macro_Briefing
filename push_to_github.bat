@echo off
chcp 65001 > nul
cd /d "%~dp0"
title GitHub Push - Global Macro Briefing

echo ========================================================
echo   [Global Macro Briefing] GitHub Push and Deploy
echo ========================================================
echo.

git init
git branch -M main

git remote remove origin >nul 2>&1
git remote add origin https://github.com/successjo0528-ux/Global_Macro_Briefing.git

echo [*] Staging all files...
git add .

echo [*] Committing...
git commit -m "Deploy Global Macro Briefing full release with Heart Favorites and 6-Section Pipeline"

echo.
echo [*] Pushing to GitHub...
git push -u origin main

echo.
echo ========================================================
echo   Done!
echo ========================================================
echo.
pause
