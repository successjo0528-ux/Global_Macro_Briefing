@echo off
chcp 65001 > nul
cd /d "%~dp0"
title GitHub Push - Global Macro Briefing

echo ========================================================
echo   [Global Macro Briefing] GitHub Push and Deploy
echo ========================================================
echo.

git config user.name "successjo0528-ux"
git config user.email "successjo0528@gmail.com"

git init
git branch -M main

git remote remove origin >nul 2>&1
git remote add origin https://github.com/successjo0528-ux/Global_Macro_Briefing.git

echo [*] Staging all files...
git add .

echo [*] Committing...
git commit -m "Deploy Global Macro Briefing full release with Heart Favorites and 6-Section Pipeline" >nul 2>&1

echo.
echo [*] Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   [성공] GitHub 업로드가 완료되었습니다!
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   [안내] GitHub 웹사이트에서 'Global_Macro_Briefing' 
    echo   저장소를 생성한 후 다시 실행해주세요.
    echo ========================================================
)

echo.
pause
