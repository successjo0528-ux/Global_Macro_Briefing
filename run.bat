@echo off
chcp 65001 > nul
cd /d "%~dp0"
title Global Macro Briefing Launcher

echo ========================================================
echo   [Global Macro Briefing] 글로벌 매크로 모닝 브리핑
echo ========================================================
echo.
echo 1. 최신 데이터 크롤링 및 웹 대시보드 실행 (추천)
echo 2. 기존 데이터로 바로 웹 대시보드 열기
echo 3. 최신 데이터 크롤링만 실행
echo.
set /p opt="실행할 번호를 입력하세요 (기본값: 1): "
if "%opt%"=="" set opt=1

if "%opt%"=="1" goto opt1
if "%opt%"=="2" goto opt2
if "%opt%"=="3" goto opt3
goto opt1

:opt1
echo.
echo [1/2] 8대 지표 및 최신 경제 뉴스 크롤링/번역 중...
python crawler_runner.py
echo.
echo [2/2] 로컬 웹 브리핑 대시보드를 시작합니다...
python launcher.py
goto end

:opt2
echo.
echo 웹 브리핑 대시보드를 시작합니다...
python launcher.py
goto end

:opt3
echo.
echo 데이터 크롤링 및 번역을 실행합니다...
python crawler_runner.py
pause
goto end

:end
