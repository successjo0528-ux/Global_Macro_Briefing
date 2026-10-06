window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-10-07 05:01:49",
    "date_str": "2026년 10월 07일 (수)",
    "indicator_count": 19,
    "news_count": 25
  },
  "indicators": [
    {
      "id": "us_short",
      "symbol": "^IRX",
      "name_ko": "미국 단기 국채 금리 (13주)",
      "name_en": "US 13W T-Bill",
      "group": "macro",
      "unit": "%",
      "format": "{:.3f}%",
      "description": "단기 무위험 금리 및 연준의 기준금리 방향성을 가장 빠르게 선반영하는 단기채 지표",
      "price": 4.037,
      "previous_close": 4.057,
      "change": -0.02,
      "change_percent": -0.49,
      "display_price": "4.037%",
      "status": "down",
      "history": [
        4.057,
        4.065,
        4.03,
        3.982,
        3.993,
        4.018,
        4.037
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-10-06 20:00:39"
    },
    {
      "id": "us10y",
      "symbol": "^TNX",
      "name_ko": "미국 10년물 국채 금리",
      "name_en": "US 10Y Yield",
      "group": "macro",
      "unit": "%",
      "has_yield_signal": true,
      "format": "{:.3f}%",
      "description": "글로벌 무위험 금리 벤치마크, 밸류에이션 및 유동성 바로미터 (5% 돌파 시 경계 경보)",
      "price": 5.269,
      "previous_close": 5.24,
      "change": 0.029,
      "change_percent": 0.55,
      "display_price": "5.269%",
      "status": "up",
      "history": [
        5.24,
        5.255,
        5.293,
        5.237,
        5.277,
        5.311,
        5.269
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-10-06 20:00:40",
      "yield_signal": {
        "level": "alert",
        "tag": "🔴 경계 경보 (5.00% 돌파)",
        "desc": "신흥국 자산 타격 & 부채 이자부담 임계선"
      }
    },
    {
      "id": "us30y",
      "symbol": "^TYX",
      "name_ko": "미국 30년물 국채 금리",
      "name_en": "US 30Y Yield",
      "group": "macro",
      "unit": "%",
      "format": "{:.3f}%",
      "description": "초장기 채권 금리, 미국의 막대한 재정적자 및 기간 프리미엄(Term Premium) 바로미터",
      "price": 5.641,
      "previous_close": 5.561,
      "change": 0.08,
      "change_percent": 1.44,
      "display_price": "5.641%",
      "status": "up",
      "history": [
        5.561,
        5.594,
        5.638,
        5.603,
        5.63,
        5.665,
        5.641
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-10-06 20:00:40"
    },
    {
      "id": "dxy",
      "symbol": "DX-Y.NYB",
      "name_ko": "달러 인덱스 (DXY)",
      "name_en": "US Dollar Index",
      "group": "macro",
      "unit": "pt",
      "format": "{:.2f} pt",
      "description": "주요 6개국 통화 대비 달러화 가치 (달러 강세/약세 지표)",
      "price": 101.863,
      "previous_close": 101.37,
      "change": 0.493,
      "change_percent": 0.49,
      "display_price": "101.86 pt",
      "status": "up",
      "history": [
        101.37,
        101.45,
        102.1,
        101.93,
        102.17,
        101.863
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-10-06 20:00:40"
    },
    {
      "id": "usdjpy",
      "symbol": "JPY=X",
      "name_ko": "달러 / 엔 환율 (USD/JPY)",
      "name_en": "USD / JPY",
      "group": "macro",
      "unit": "엔",
      "format": "{:,.2f}엔",
      "description": "엔 캐리 트레이드 청산 리스크 및 일본은행(BOJ) 통화정책 바로미터",
      "price": 158.172,
      "previous_close": 157.463,
      "change": 0.709,
      "change_percent": 0.45,
      "display_price": "158.17엔",
      "status": "up",
      "history": [
        157.361,
        157.404,
        157.558,
        157.927,
        157.734,
        157.963,
        158.172
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-10-06 20:00:40"
    },
    {
      "id": "gold",
      "symbol": "GC=F",
      "name_ko": "국제 금 시세 (선물)",
      "name_en": "Gold Futures",
      "group": "macro",
      "unit": "$",
      "format": "${:,.2f}",
      "description": "인플레이션 헤지 및 대표 닻(Anchor) 안전자산, 실질금리 역방향 흐름",
      "price": 4195.7,
      "previous_close": 4179.7,
      "change": 16.0,
      "change_percent": 0.38,
      "display_price": "$4,195.70",
      "status": "up",
      "history": [
        4179.7,
        4186.7,
        4202.3,
        4162.3,
        4156.8,
        4195.7
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-10-06 20:00:40"
    },
    {
      "id": "wti",
      "symbol": "CL=F",
      "name_ko": "국제 유가 (WTI 원유)",
      "name_en": "WTI Crude Oil",
      "group": "macro",
      "unit": "$",
      "format": "${:.2f}",
      "description": "헤드라인 인플레이션 시한폭탄 및 원자재 물가 압력 지표",
      "price": 89.76,
      "previous_close": 89.38,
      "change": 0.38,
      "change_percent": 0.43,
      "display_price": "$89.76",
      "status": "up",
      "history": [
        89.38,
        90.42,
        92.87,
        91.11,
        89.43,
        89.76
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-10-06 20:00:40"
    },
    {
      "id": "btc",
      "symbol": "BTC-USD",
      "name_ko": "비트코인 (BTC)",
      "name_en": "Bitcoin",
      "group": "macro",
      "unit": "$",
      "format": "${:,.0f}",
      "description": "글로벌 위험자산 선호도 및 잉여 유동성 측정 지표",
      "price": 85618.88,
      "previous_close": 83553.85,
      "change": 2065.03,
      "change_percent": 2.47,
      "display_price": "$85,619",
      "status": "up",
      "history": [
        83553.852,
        84853.102,
        84497.211,
        84763.578,
        86480.305,
        85786.594,
        85618.883
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-10-06 20:00:41"
    },
    {
      "id": "tga",
      "symbol": "TGA Balance",
      "name_ko": "미 재무부 TGA 현금 잔고",
      "name_en": "US Treasury General Account",
      "group": "macro",
      "unit": "$",
      "is_tga": true,
      "format": "${:,.1f}B",
      "description": "스콧 베센트 재무장관의 유동성 탄약고 (잔고 방출=유동성 공급/주가상승, 충전=유동성 흡수)",
      "price": 871.2,
      "previous_close": 29.1,
      "change": 842.1,
      "change_percent": 0.0,
      "display_price": "$871.2B (약 8,712억$)",
      "status": "up",
      "history": [
        42.9,
        20.4,
        893.7,
        883.3,
        17.0,
        29.1,
        871.2
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-10-06 20:00:41"
    },
    {
      "id": "sp500",
      "symbol": "^GSPC",
      "name_ko": "S&P 500 지수",
      "name_en": "S&P 500",
      "group": "us_market",
      "unit": "pt",
      "format": "{:,.2f}",
      "description": "미국 대형주 대표 벤치마크 및 글로벌 주식 투자 심리",
      "price": 7819.04,
      "previous_close": 7743.41,
      "change": 75.63,
      "change_percent": 0.98,
      "display_price": "7,819.04",
      "status": "up",
      "history": [
        7683.69,
        7670.84,
        7651.54,
        7666.45,
        7722.72,
        7773.95,
        7819.04
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-10-06 20:00:41"
    },
    {
      "id": "nasdaq",
      "symbol": "^NDX",
      "name_ko": "나스닥 100 지수",
      "name_en": "Nasdaq 100",
      "group": "us_market",
      "unit": "pt",
      "format": "{:,.2f}",
      "description": "빅테크 및 성장주 중심의 글로벌 기술주 지표",
      "price": 31224.473,
      "previous_close": 30608.13,
      "change": 616.343,
      "change_percent": 2.01,
      "display_price": "31,224.47",
      "status": "up",
      "history": [
        30276.811,
        30339.33,
        30408.5,
        30501.561,
        30807.93,
        31076.439,
        31224.473
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-10-06 20:00:42"
    },
    {
      "id": "sox",
      "symbol": "^SOX",
      "name_ko": "필라델피아 반도체 지수",
      "name_en": "PHLX Semiconductor",
      "group": "us_market",
      "unit": "pt",
      "format": "{:,.2f}",
      "description": "글로벌 AI/반도체 밸류체인 및 삼성전자/SK하이닉스 외국인 수급 직결",
      "price": 13217.823,
      "previous_close": 12668.93,
      "change": 548.893,
      "change_percent": 4.33,
      "display_price": "13,217.82",
      "status": "up",
      "history": [
        12465.24,
        12629.16,
        12628.62,
        12829.0,
        13136.67,
        13172.74,
        13217.823
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-10-06 20:00:42"
    },
    {
      "id": "vix",
      "symbol": "^VIX",
      "name_ko": "VIX 변동성 지수 (공포지수)",
      "name_en": "CBOE Volatility",
      "group": "us_market",
      "unit": "pt",
      "format": "{:.2f}",
      "description": "월가 S&P500 옵션 내재 변동성 및 투자자 공포/탐욕 심리",
      "price": 15.04,
      "previous_close": 16.07,
      "change": -1.03,
      "change_percent": -6.41,
      "display_price": "15.04",
      "status": "down",
      "history": [
        16.07,
        16.04,
        16.34,
        16.39,
        15.31,
        15.52,
        15.04
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-10-06 20:00:42"
    },
    {
      "id": "usdkrw",
      "symbol": "KRW=X",
      "name_ko": "달러 / 원 환율",
      "name_en": "USD / KRW",
      "group": "korea_market",
      "unit": "원",
      "has_fx_averages": true,
      "format": "{:,.2f}원",
      "description": "원화 가치 및 외인 수급의 핵심 변수 (1년 평균 및 3년 평균 기준선 제공)",
      "price": 1337.97,
      "previous_close": 1354.51,
      "change": -16.54,
      "change_percent": -1.22,
      "display_price": "1,337.97원",
      "status": "down",
      "history": [
        1359.56,
        1350.5,
        1356.84,
        1360.59,
        1342.56,
        1343.75,
        1337.97
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-10-06 20:00:42",
      "fx_averages": {
        "avg_1y": 1453.2,
        "avg_3y": 1401.4
      }
    },
    {
      "id": "kospi",
      "symbol": "^KS11",
      "name_ko": "코스피 종합지수 (KOSPI)",
      "name_en": "KOSPI Composite",
      "group": "korea_market",
      "unit": "pt",
      "format": "{:,.2f}",
      "description": "국내 대형주/제조업 중심 유가증권시장 대표 벤치마크",
      "price": 6941.39,
      "previous_close": 7017.91,
      "change": -76.52,
      "change_percent": -1.09,
      "display_price": "6,941.39",
      "status": "down",
      "history": [
        7080.92,
        6889.74,
        6870.81,
        6838.04,
        6971.35,
        7003.74
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-10-06 20:00:42"
    },
    {
      "id": "kosdaq",
      "symbol": "^KQ11",
      "name_ko": "코스닥 종합지수 (KOSDAQ)",
      "name_en": "KOSDAQ Composite",
      "group": "korea_market",
      "unit": "pt",
      "format": "{:,.2f}",
      "description": "국내 IT, 바이오, 2차전지, 중소형 성장주 대표 벤치마크",
      "price": 919.92,
      "previous_close": 834.38,
      "change": 85.54,
      "change_percent": 10.25,
      "display_price": "919.92",
      "status": "up",
      "history": [
        844.48,
        846.58,
        849.8,
        855.91,
        894.29,
        893.29
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-10-06 20:00:43"
    },
    {
      "id": "kr_bond3y",
      "symbol": "KR-BOND 3Y",
      "name_ko": "한국 국고채 3년물 금리",
      "name_en": "Korea Treasury 3Y",
      "group": "korea_market",
      "unit": "%",
      "is_kr_bond": true,
      "format": "{:.2f}%",
      "description": "국내 채권시장 단기 기준물, 한국은행 통화정책 및 기업 자금조달 금리 벤치마크",
      "price": 3.81,
      "previous_close": 3.79,
      "change": 0.02,
      "change_percent": 0.53,
      "display_price": "3.81%",
      "status": "up",
      "history": [
        3.75,
        3.78,
        3.79,
        3.84,
        3.79,
        3.81
      ],
      "chart_url": "https://finance.naver.com/marketindex/interestDetail.naver?marketindexCd=IRR_GOVT03Y",
      "updated_at": "2026-10-06 20:00:43"
    },
    {
      "id": "kr_bond10y",
      "symbol": "KR-BOND 10Y",
      "name_ko": "한국 국고채 10년물 금리",
      "name_en": "Korea Treasury 10Y",
      "group": "korea_market",
      "unit": "%",
      "is_kr_bond10y": true,
      "has_kr_yield_signal": true,
      "format": "{:.3f}%",
      "description": "국내 장기 무위험 금리 벤치마크 (4.0% 경계 / 4.5% 대피 / 5.0% 위기)",
      "price": 4.366,
      "previous_close": 4.334,
      "change": 0.032,
      "change_percent": 0.74,
      "display_price": "4.366%",
      "status": "up",
      "history": [
        4.28,
        4.3,
        4.32,
        4.34,
        4.35,
        4.366
      ],
      "chart_url": "https://kr.investing.com/rates-bonds/south-korea-10-year-bond-yield",
      "updated_at": "2026-10-06 20:00:44"
    },
    {
      "id": "ewy",
      "symbol": "EWY",
      "name_ko": "MSCI 한국 ETF (EWY)",
      "name_en": "iShares MSCI S.Korea",
      "group": "korea_market",
      "unit": "$",
      "format": "${:.2f}",
      "description": "뉴욕 야간 외국인 한국물 거래 (익일 아침 코스피 시초가 선행 지표)",
      "price": 186.41,
      "previous_close": 187.18,
      "change": -0.77,
      "change_percent": -0.41,
      "display_price": "$186.41",
      "status": "down",
      "history": [
        183.58,
        187.1,
        182.78,
        186.11,
        191.88,
        191.46,
        186.41
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-10-06 20:00:44"
    }
  ],
  "news": [
    {
      "source": "Reuters",
      "title_ko": "연준(Fed)의 Daly: 추가 인상 필요성은 충격에 따라 결정",
      "title_en": "Fed's Daly: need for more hikes hinges on what happens with shocks",
      "summary_ko": "연준(Fed)의 Daly: 추가 인상의 필요성은 충격에 따라 결정됨 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 CNBC, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOS1NIR0txbU9OM3c1aUhGM2doeVltazU2U2YyOHV2YVR4R2lkRG5FUXp2N0VnaVdLVlRCV1BUMXBJWUpBUmVTZTlMQXV2VU1KOXhocElZNGEzYWFnS2xGQ2hCTlRPbzJjN0J5Ty1neVBpdU1UV0JxRlFRTDNjOEk1QjhXQ1otdkhOTG8zLW5QLTRxQVc5dE5KeVNURTlXYWU4Unh4eg?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipAFBVV95cUxOS1NIR0txbU9OM3c1aUhGM2doeVltazU2U2YyOHV2YVR4R2lkRG5FUXp2N0VnaVdLVlRCV1BUMXBJWUpBUmVTZTlMQXV2VU1KOXhocElZNGEzYWFnS2xGQ2hCTlRPbzJjN0J5Ty1neVBpdU1UV0JxRlFRTDNjOEk1QjhXQ1otdkhOTG8zLW5QLTRxQVc5dE5KeVNURTlXYWU4Unh4eg%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 06 Oct 2026 16:59:53 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Warsh 소속 최초로 연준(Fed)의 테이블이 등장합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOTmR4eUlzVVZXLUFSSEpiLUs3UkxJMDYwVVpsU2o1REJIOUFSTlN3U2VBV2NRZ3hUTUNzSy1KRTNlODFaTmh6bGgtTFpCM3BCWE13c250dlBDTW5XaS1rWHpUMjV0cFJiSkxqN3g4OTVVZmJKN1dKSXZhRHZ2bW1Lbndrc3UxRGhjNG9LY01lZklaajE4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilAFBVV95cUxOTmR4eUlzVVZXLUFSSEpiLUs3UkxJMDYwVVpsU2o1REJIOUFSTlN3U2VBV2NRZ3hUTUNzSy1KRTNlODFaTmh6bGgtTFpCM3BCWE13c250dlBDTW5XaS1rWHpUMjV0cFJiSkxqN3g4OTVVZmJKN1dKSXZhRHZ2bW1Lbndrc3UxRGhjNG9LY01lZklaajE4%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "영란은행, 인플레이션율 4%대 돌파에 금리인상 기조 전환",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPVWQxa3d0cG05Tmpfck4tZm5ZLTRLMUQ1bzRpVUNlbDg0ZDlNemp5d0hPbDVkcjBJdENvbFdldlA3a0h1VkZfOUt2NUE5eVNSaHlMbWZLUTBhNGZoOWEzNDZ6QVFYR095Wmt1dndTak1SaDJHbXBTZzdwWWlmZW16MjBRV3ZTanNaQm00M1VxdXE2OE5JUkdKczBSWTNVNkpJQzl6dTlXaGtHRXNWS21z?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPVWQxa3d0cG05Tmpfck4tZm5ZLTRLMUQ1bzRpVUNlbDg0ZDlNemp5d0hPbDVkcjBJdENvbFdldlA3a0h1VkZfOUt2NUE5eVNSaHlMbWZLUTBhNGZoOWEzNDZ6QVFYR095Wmt1dndTak1SaDJHbXBTZzdwWWlmZW16MjBRV3ZTanNaQm00M1VxdXE2OE5JUkdKczBSWTNVNkpJQzl6dTlXaGtHRXNWS21z%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) 관계자들은 인플레이션이 진정되지 않으면 생체인식 필요성을 느꼈습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQX3djZ2FKOHhfMkVRRHEzdFlsQ0t2Tmt5OE1sM1lrX1V3WFZ3RXlYdTlZcFVSWmx0YWFYaDZRSjYyYkRwVXQzZm5Sdldobk5xc0pXdVotLUt2S251cnVfdHV3MmRObmd1aW5zcGZkVGVxdkgzbURqbU9qV093Wmt2aWFFWkpxaWNGYVRQanh6NWRqeXJfZHA3bDB4Nmp2LXlrbUh0MlR1WWdDWEM5QUpaV2gycjItYmvSAbwBQVVfeXFMTjhBbUlQSGRVY3hPZXpNT3A1NFlLQ1ViNUZ0WjBzaC1LdTlFZ3J1UHI4Q1FGT2tUZ3JWeDBOWTIxRGJWRnNRUW9VcHdfQkhKZk5IaGhBdmdiSXFYX3RySnhUOVNpeUN2TjBvMUVKcEUyRXlQUjZkRmYwQU5ud3VIczJwLTZxVW90NlVZYjM4a2J3RnpxbjV1RlZ5VXFYenNZcXFEVmhLM0pKUnQyOVZQRm5lMUlvdDNLWVRFOU0?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxQX3djZ2FKOHhfMkVRRHEzdFlsQ0t2Tmt5OE1sM1lrX1V3WFZ3RXlYdTlZcFVSWmx0YWFYaDZRSjYyYkRwVXQzZm5Sdldobk5xc0pXdVotLUt2S251cnVfdHV3MmRObmd1aW5zcGZkVGVxdkgzbURqbU9qV093Wmt2aWFFWkpxaWNGYVRQanh6NWRqeXJfZHA3bDB4Nmp2LXlrbUh0MlR1WWdDWEM5QUpaV2gycjItYmvSAbwBQVVfeXFMTjhBbUlQSGRVY3hPZXpNT3A1NFlLQ1ViNUZ0WjBzaC1LdTlFZ3J1UHI4Q1FGT2tUZ3JWeDBOWTIxRGJWRnNRUW9VcHdfQkhKZk5IaGhBdmdiSXFYX3RySnhUOVNpeUN2TjBvMUVKcEUyRXlQUjZkRmYwQU5ud3VIczJwLTZxVW90NlVZYjM4a2J3RnpxbjV1RlZ5VXFYenNZcXFEVmhLM0pKUnQyOVZQRm5lMUlvdDNLWVRFOU0%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) 관계자들은 인플레이션이 계속 높아지면 흥미진진한 소개를 앞두고 회의록을 보여줍니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNTzJNdE5HTkZiejhGOG1KOFN6MWthLVE1Z1MxNmY4S3BZdGxvaDg4aVJ6Y003UHQzd2RqZ3pvOENfUkdSUDlpQUEtMEx1enQzbkdOQXJCTkhWdUdzd2sxRG5kWDA4OThVMUJNaTBDN19aTUhMYVJMUVE5LThvSS0xRUptNld5ZUNURGU3VzFYeEF5QWpqZmN1d1ZtMmQ5NFdkbHNOc0N2ZG83QVByTFFBTtIBtgFBVV95cUxPS3UtZVZPRFRsQW52SVNRS2pVMGV0b2wtbHZEbEo4MEFwZDlMS1VBdklTekZBamJJWkd1MF9SbnFyODc3UUlwZGlHRVpFblZkM2w3c3VDeHRWWHZTWmttdnlRZkRqaUFaQnJjRzRPQ1ZQcGFvZ2xpOXlfVWxTT1FPV0FsQkpld0EwUy1sMlRtZlN1RnVxeVBDTHpDcjUyLU9RVXU4aUhBRV9Zbll0eDlEdEFwVy10UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxNTzJNdE5HTkZiejhGOG1KOFN6MWthLVE1Z1MxNmY4S3BZdGxvaDg4aVJ6Y003UHQzd2RqZ3pvOENfUkdSUDlpQUEtMEx1enQzbkdOQXJCTkhWdUdzd2sxRG5kWDA4OThVMUJNaTBDN19aTUhMYVJMUVE5LThvSS0xRUptNld5ZUNURGU3VzFYeEF5QWpqZmN1d1ZtMmQ5NFdkbHNOc0N2ZG83QVByTFFBTtIBtgFBVV95cUxPS3UtZVZPRFRsQW52SVNRS2pVMGV0b2wtbHZEbEo4MEFwZDlMS1VBdklTekZBamJJWkd1MF9SbnFyODc3UUlwZGlHRVpFblZkM2w3c3VDeHRWWHZTWmttdnlRZkRqaUFaQnJjRzRPQ1ZQcGFvZ2xpOXlfVWxTT1FPV0FsQkpld0EwUy1sMlRtZlN1RnVxeVBDTHpDcjUyLU9RVXU4aUhBRV9Zbll0eDlEdEFwVy10UQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:00"
    },
    {
      "source": "Reuters",
      "title_ko": "유로존 인플레이션이 예상보다 크게 급등하여 ECB에 금리 인상 압력을 가하고 있습니다.",
      "title_en": "Euro zone inflation surges more than expected, keeping pressure on ECB to hike rates",
      "summary_ko": "유로존 인플레이션이 예상보다 크게 급등하여 ECB에 금리 인상 압력 유지 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 CNBC, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNTjBZN3Zra1B6VVdIMFBGalpKbDVTYW9ZZjR2UFJDRC10V25XZHBRQndua3Brc1BVbWxPT2pZTWcwZzBYSFNIREFlX2FvLVNVOENURWZJckwyRmwyakp3X0tQd0Z5MVJVOVlrYmdxZlJ1azdLTjRvNW9WdzlJcjhYRE1YcVlYTk44V1hMSV9KZk1YdVpQdmRMTUN5bjI1QQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxNTjBZN3Zra1B6VVdIMFBGalpKbDVTYW9ZZjR2UFJDRC10V25XZHBRQndua3Brc1BVbWxPT2pZTWcwZzBYSFNIREFlX2FvLVNVOENURWZJckwyRmwyakp3X0tQd0Z5MVJVOVlrYmdxZlJ1azdLTjRvNW9WdzlJcjhYRE1YcVlYTk44V1hMSV9KZk1YdVpQdmRMTUN5bjI1QQ%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 02 Oct 2026 09:57:23 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) 쿡 주지사는 인플레이션 문제 해결을 위해 '행동할 준비가 되어 있다'고 밝혔습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNV2Q5NThqUHd1aDMwaW5zTzkzRTNUdXZpX3Z4SHEzd3JUcElDSExlY2pYR0JwNUxnbXNkb053ZmY2WUpyTGs5dEp6R2EzZmhqNUVRS1Vmb2xGNnFGdWVfWmRQY0d4N0VTWW1aVld4YjczbWJrR1UyY1dHbFFKdlVERkhHQ3doRlVJWGQxZ2lvZTJzUjkzWFZmckdlWjU3WjUzQ0ZRRzZNY3dHQ1hxU3pCSTlFT0fSAboBQVVfeXFMTjlwaVZzbmtnN0RzMEYzM3RPVWZKemtBblJxTXBYejl6T1lSNzh4YUZKZGlmSHBFMnhyYTBsbS1RR0k4MGxLM0pNSmJDM3BIUklNN0txbm1FVkRRWENXSDZhOVJ6S0YyWlhZcFlBVmFSazR0T0lMOXlZTnlXOFRLbXRDUVEtX2xVelVkT2tITnBwUWN3X1ZFNmczbnRnTzdOQ2UzbGlQSXI3bGQ2c0h6NHdZbHpHZW1zSFVR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxNV2Q5NThqUHd1aDMwaW5zTzkzRTNUdXZpX3Z4SHEzd3JUcElDSExlY2pYR0JwNUxnbXNkb053ZmY2WUpyTGs5dEp6R2EzZmhqNUVRS1Vmb2xGNnFGdWVfWmRQY0d4N0VTWW1aVld4YjczbWJrR1UyY1dHbFFKdlVERkhHQ3doRlVJWGQxZ2lvZTJzUjkzWFZmckdlWjU3WjUzQ0ZRRzZNY3dHQ1hxU3pCSTlFT0fSAboBQVVfeXFMTjlwaVZzbmtnN0RzMEYzM3RPVWZKemtBblJxTXBYejl6T1lSNzh4YUZKZGlmSHBFMnhyYTBsbS1RR0k4MGxLM0pNSmJDM3BIUklNN0txbm1FVkRRWENXSDZhOVJ6S0YyWlhZcFlBVmFSazR0T0lMOXlZTnlXOFRLbXRDUVEtX2xVelVkT2tITnBwUWN3X1ZFNmczbnRnTzdOQ2UzbGlQSXI3bGQ2c0h6NHdZbHpHZW1zSFVR%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "BOJ 총재, 목표치에 인플레이션 고정에 더 집중 촉구",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPMHBEWXdWR2hXZFN5QVc0dUhhNUwtNFAzNGt6ZmF3MnluNkFZdS1OTHV2NXRTcWdYd21mWkZIWUZORmUzZVFQa0I2blM0QzJJVk9jZ0E0YTY3dURQUDJsTm42S1lMU1JoWlJMZFl6RjJTTll3NkNPa21reUdlaUR0TFFtVXEwNGVkb0pkbk9hMkdvREhCeUIxU3dhYVZka0tsRjFfb3NMUVI0al9QWlFuQUN6ZzV5UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPMHBEWXdWR2hXZFN5QVc0dUhhNUwtNFAzNGt6ZmF3MnluNkFZdS1OTHV2NXRTcWdYd21mWkZIWUZORmUzZVFQa0I2blM0QzJJVk9jZ0E0YTY3dURQUDJsTm42S1lMU1JoWlJMZFl6RjJTTll3NkNPa21reUdlaUR0TFFtVXEwNGVkb0pkbk9hMkdvREhCeUIxU3dhYVZka0tsRjFfb3NMUVI0al9QWlFuQUN6ZzV5UQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed), 인상 베팅이 사라지면서 ECB 회의록에 인플레이션 우려 표시",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNOFpSQnpjU1hLeUJYN1dqN2VnbWhJV2FvMW03eFA4ZGk3TUE2ZlZnZFBoVVJTcVUySlZDeUM3dWViTDV5dlliNTAzRkw4SGhYOEwxZDBOcVNzdFlHRklvZGlaV1hUQmZHU3NzTGw3LXdSY1JFbm94czZfak43N2VDU1ZSTjYwd0h5MGVNYl9wdVN5MEltWGxWRlJTZm53SDMyS29ibXRXbTJzbVZU?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxNOFpSQnpjU1hLeUJYN1dqN2VnbWhJV2FvMW03eFA4ZGk3TUE2ZlZnZFBoVVJTcVUySlZDeUM3dWViTDV5dlliNTAzRkw4SGhYOEwxZDBOcVNzdFlHRklvZGlaV1hUQmZHU3NzTGw3LXdSY1JFbm94czZfak43N2VDU1ZSTjYwd0h5MGVNYl9wdVN5MEltWGxWRlJTZm53SDMyS29ibXRXbTJzbVZU%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "ECB는 채권 스프레드가 아닌 인플레이션에 초점을 맞추고 있다고 Nagel은 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPOHZQZHNWRjJnT0JEQ0pvTE5pR0hzdDNyZlNfLUJ3cV90ekxuTzVJdWZ4NjJjSXMxUlF0N0JlSTV2aGRIX0RYZ2NpVHJnWkg1S0x0N2xpZnhrUjYxUFVPUlE1Z1g4MGowQ21ZcGxaV0VmUmtqSEMtVkR6MEtuVVBMRjhqY3RmT25hdXRINE42UXdCdFd5N1dVUzJvV3FjOUtiazBnUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipAFBVV95cUxPOHZQZHNWRjJnT0JEQ0pvTE5pR0hzdDNyZlNfLUJ3cV90ekxuTzVJdWZ4NjJjSXMxUlF0N0JlSTV2aGRIX0RYZ2NpVHJnWkg1S0x0N2xpZnhrUjYxUFVPUlE1Z1g4MGowQ21ZcGxaV0VmUmtqSEMtVkR6MEtuVVBMRjhqY3RmT25hdXRINE42UXdCdFd5N1dVUzJvV3FjOUtiazBnUQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:04"
    },
    {
      "source": "Bloomberg",
      "title_ko": "터키 가격의 놀라운 둔화로 인해 피규어 인하가 주장되고 있습니다.",
      "title_en": "Surprise Slowdown in Turkish Prices Makes Case for Rate Cut",
      "summary_ko": "터키 가격의 놀라운 둔화로 인해 피규어 인하 Bloomberg.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg뿐만 아니라 MarketWatch 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPcWNLWUlMT05ndkUyMWZHdFF5RktkaFZIbXZSVC05Tml0REtYNjZ1MWdaMFVoNW9BZG9Rd3ZnMGtxbVA2TVJPemxLTDJPZ3JlRlZtTGpEamtNOURWUlVkLXdiU3k5S2w3ZDByQ2hLY3JrU1prNUItQXd3bHF1YmZkT2tJMUhrUDRnVXFBcUN4SXpIbXp1ejRwelZIcW1SMnhkR3hqTDZkZ05OMUlHeVhrRzFB?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxPcWNLWUlMT05ndkUyMWZHdFF5RktkaFZIbXZSVC05Tml0REtYNjZ1MWdaMFVoNW9BZG9Rd3ZnMGtxbVA2TVJPemxLTDJPZ3JlRlZtTGpEamtNOURWUlVkLXdiU3k5S2w3ZDByQ2hLY3JrU1prNUItQXd3bHF1YmZkT2tJMUhrUDRnVXFBcUN4SXpIbXp1ejRwelZIcW1SMnhkR3hqTDZkZ05OMUlHeVhrRzFB%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 05 Oct 2026 07:37:43 GMT",
      "related_articles": [
        {
          "source": "MarketWatch",
          "title_ko": "시장은 연준(Fed)의 너무 많은 인상을 가격에 반영하고 있다고 전 달라스 연준(Fed) 의장이 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOWmNkZTJhVGFoNC16dTZTTzIwZ0FTcXVNOFZQa3JMRHFWLUZwOVRyMG04cmdPS0NlcmJ0ZjR1SHdjU3VZZjlJc3VVTDhZNGRrYmN2WU9KV1A2VG13ZlZMeGZnYVdOWGhmQkIzYTBhSHZPalBxbk91alA0MjJoUTlVX2lUWTl1Sm1NYXM4QmljemtFZHNFcXJIWHhhQkhaekZ0VHh1UllIMjI0YjZlTXA0Qmw5eXI1TS1yOTZJ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuwFBVV95cUxOWmNkZTJhVGFoNC16dTZTTzIwZ0FTcXVNOFZQa3JMRHFWLUZwOVRyMG04cmdPS0NlcmJ0ZjR1SHdjU3VZZjlJc3VVTDhZNGRrYmN2WU9KV1A2VG13ZlZMeGZnYVdOWGhmQkIzYTBhSHZPalBxbk91alA0MjJoUTlVX2lUWTl1Sm1NYXM4QmljemtFZHNFcXJIWHhhQkhaekZ0VHh1UllIMjI0YjZlTXA0Qmw5eXI1TS1yOTZJ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:06"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Watch Rediker: 파월은 연준 이사회에 '감소 영향'을 미칩니다",
      "title_en": "Watch Rediker: Powell Is a ‘Tempering Influence’ on Fed Board",
      "summary_ko": "Watch Rediker: 파월이 연준 이사회에 '감소 영향'을 끼친다 Bloomberg.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQd0l6Y21MLTVSa3FXSF9aZHQ3aS1HVnFSM202MVo3VG1BODE2em91aEl5RW1lV181SENYdW9hTU5CckF5eDFtSDZzb3ZFZlN1dENWVFp0NjZxWkJ4Yl9VUlNsWG92TUFjaEFEdTYwMVUzZE4zZTV4eXR6eGVrVXBOUDdOcFNCX1d1ZU1JRHMyellWYjZGSnVnMVB6OFJob29UU0hwOW5QeWdMX0E?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxQd0l6Y21MLTVSa3FXSF9aZHQ3aS1HVnFSM202MVo3VG1BODE2em91aEl5RW1lV181SENYdW9hTU5CckF5eDFtSDZzb3ZFZlN1dENWVFp0NjZxWkJ4Yl9VUlNsWG92TUFjaEFEdTYwMVUzZE4zZTV4eXR6eGVrVXBOUDdOcFNCX1d1ZU1JRHMyellWYjZGSnVnMVB6OFJob29UU0hwOW5QeWdMX0E%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 02 Oct 2026 00:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "일자리는 부진하지만 인플레이션으로 인해 연준(Fed)이 경계심을 유지하고 있음",
          "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNQXFzQVplUlBjRDVZXzJuT1JRb1M1TFM5MmxrZVE4R2ducEo4eGx5VUs3cDNPYlQ3eVhXNDJYU2tvM0JUVWhORlUwOW10RFlQZmk4LVRoY3M2bjFiYTRKbHFDUWktVklQODktZ1pJWnZJeEJiZHRkRW1ackh5SC1LbzZXWVRPcnFTeGtjSjlibWprNDVGcUZpeUlkRG0yQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxNQXFzQVplUlBjRDVZXzJuT1JRb1M1TFM5MmxrZVE4R2ducEo4eGx5VUs3cDNPYlQ3eVhXNDJYU2tvM0JUVWhORlUwOW10RFlQZmk4LVRoY3M2bjFiYTRKbHFDUWktVklQODktZ1pJWnZJeEJiZHRkRW1ackh5SC1LbzZXWVRPcnFTeGtjSjlibWprNDVGcUZpeUlkRG0yQQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:08"
    },
    {
      "source": "MarketWatch",
      "title_ko": "반등을 기대하는 트레이더",
      "title_en": "Traders expecting a back-to-back rate hike from the Fed in October may have gotten ahead of themselves",
      "summary_ko": "반등을 기대하는 트레이더 관련 핵심 동향이 발표되었습니다. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. MarketWatch뿐만 아니라 CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxNMTB6d2lWTHduVVNpUTJZYXpBUlRmRndFdU5EMHJNUFoydUFVcDFOQnhfemhXZ2ViYWlSUGZuOWdlZHpSbVdxZ3ZHOHEtMEVlZ2I0bDJCOW5OaWUwcmt0MS1TbExQVklodUt0WTNxRWh2aGJud085RVY3LVMteDVqSk9GZllsVTNyakNXR2pDYXhzaUgwTUNQeUp0bXVXN3k5UVhlNktwOHA1NzNHRHJqZXBDSlp3NHQ3ODJZREl5TUFyZm55Y1dwVThTakRjTjFLdlc5d2J4RG8teFVXWkE?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMi3gFBVV95cUxNMTB6d2lWTHduVVNpUTJZYXpBUlRmRndFdU5EMHJNUFoydUFVcDFOQnhfemhXZ2ViYWlSUGZuOWdlZHpSbVdxZ3ZHOHEtMEVlZ2I0bDJCOW5OaWUwcmt0MS1TbExQVklodUt0WTNxRWh2aGJud085RVY3LVMteDVqSk9GZllsVTNyakNXR2pDYXhzaUgwTUNQeUp0bXVXN3k5UVhlNktwOHA1NzNHRHJqZXBDSlp3NHQ3ODJZREl5TUFyZm55Y1dwVThTakRjTjFLdlc5d2J4RG8teFVXWkE%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 29 Sep 2026 20:13:00 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "거래자들은 약한 고용 보고서 이후 10월에 연준(Fed)이 등장할 가능성이 거의 없다고 보고 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed)에서 발행한 7월의 피규어? 확률이 높아지고 있어요",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxONUdmS2Z4R0JWQjJVblhOSnRtcWJXUEVxVFBqcG9JdWhBcjZ1RXVya2ZZNjNqTDVQY2RiSm5xbEUyVlRDSjg5MExzXzdwNW83d2tTaFE3SVBwS1E5VVVRbkpZSmpCekNvZi1iTnJaMUcyb1c3WTk0R1RFQjZUczNOQ2NKQ0lpZW5Ha2hVR19Ld1nSAZYBQVVfeXFMTk1kR0FPT1VVTUdoSDRRZnN5dUtfWkUxdF91emZuMHFxU3p0ZGdkTkxncGpLQ0RaVDFsNjROSDdtRk51dkcySng5cUNVcERaOERSVWhUQzYzcUZhNnEycFYwc1BxN25qSGR4N0NqUEVSTFVwNENjMEpmbUFGTE1mQnk4NEt3bERFUHp1YzI4OWZ1bnVmdFFn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxONUdmS2Z4R0JWQjJVblhOSnRtcWJXUEVxVFBqcG9JdWhBcjZ1RXVya2ZZNjNqTDVQY2RiSm5xbEUyVlRDSjg5MExzXzdwNW83d2tTaFE3SVBwS1E5VVVRbkpZSmpCekNvZi1iTnJaMUcyb1c3WTk0R1RFQjZUczNOQ2NKQ0lpZW5Ha2hVR19Ld1nSAZYBQVVfeXFMTk1kR0FPT1VVTUdoSDRRZnN5dUtfWkUxdF91emZuMHFxU3p0ZGdkTkxncGpLQ0RaVDFsNjROSDdtRk51dkcySng5cUNVcERaOERSVWhUQzYzcUZhNnEycFYwc1BxN25qSGR4N0NqUEVSTFVwNENjMEpmbUFGTE1mQnk4NEt3bERFUHp1YzI4OWZ1bnVmdFFn%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:12"
    },
    {
      "source": "Reuters",
      "title_ko": "중동 위험, 기술 대패로 인해 아시아 주식에서 해외 자금 유출 급증",
      "title_en": "Foreign outflows from Asian equities surge on Middle East risks, tech rout",
      "summary_ko": "중동 리스크로 인해 아시아 주식에서 해외 자금 유출 급증 Reuters. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 CNBC, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNTGJ4TlQ4d0l6VmNkTzh6eWIxbmt1TDhrZy1TMVRmRWRqOGRfb2FRdENoeVUwM1V4bmVMWjc3ZENoV2hDX1hrbTEtVXpibi1zbUJhR3BxRXVwd0JrWjdzSGZoZ21VMkFFeE9kTzJEWjdCRzRtY1hVWE5SeXVMYWZSUVJIcEFKc05LYWY0M21KSktSV2Q3dHVVazd3bWlrT0JQRGdGRWkyX0NtOGhRZi1uZ2UtWQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxNTGJ4TlQ4d0l6VmNkTzh6eWIxbmt1TDhrZy1TMVRmRWRqOGRfb2FRdENoeVUwM1V4bmVMWjc3ZENoV2hDX1hrbTEtVXpibi1zbUJhR3BxRXVwd0JrWjdzSGZoZ21VMkFFeE9kTzJEWjdCRzRtY1hVWE5SeXVMYWZSUVJIcEFKc05LYWY0M21KSktSV2Q3dHVVazd3bWlrT0JQRGdGRWkyX0NtOGhRZi1uZ2UtWQ%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Wed, 10 Jun 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "이란 전쟁으로 인한 오일 쇼크 우려로 해외 자금 유출로 아시아 증시 타격",
          "original_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "월가가 중동 긴장을 모니터링함에 따라 U.S. 미 국채/재무부수익(금리) 상승",
          "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOZld3ajVXMWdnQnVibk5pTFctajNqbndkX0ZUZkVXTzRJTUlWVEVXckg1UFJ2N0g2VDlvRWtjTzZfOVhqX0VkWHBTcVNqLXdKZGxxN1IzcXg1VGpleTRJMjhqQi1hM3RHR1RGUmxyYjluaWp1TG9FSG9SMG91akpDdEJTcWtaeTJ2dFHSAY8BQVVfeXFMTWFzTWNuVXU4c0d2OXJKRERvOTQtNkxXMFlkRVYxbmNGTHhmcDg2M18xTHBYZnY1WUo1b3cwLU5kSWtTaUNzZ2pCTHpVYmxYNHh5a1BJTDhDU29JRDhDOTM2cTZaMGNLVGozMXZzMkRpRG80M1hjVzBLV05UVlhEWXQyV1E4OGtKaEN2VU5MTFk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxOZld3ajVXMWdnQnVibk5pTFctajNqbndkX0ZUZkVXTzRJTUlWVEVXckg1UFJ2N0g2VDlvRWtjTzZfOVhqX0VkWHBTcVNqLXdKZGxxN1IzcXg1VGpleTRJMjhqQi1hM3RHR1RGUmxyYjluaWp1TG9FSG9SMG91akpDdEJTcWtaeTJ2dFHSAY8BQVVfeXFMTWFzTWNuVXU4c0d2OXJKRERvOTQtNkxXMFlkRVYxbmNGTHhmcDg2M18xTHBYZnY1WUo1b3cwLU5kSWtTaUNzZ2pCTHpVYmxYNHh5a1BJTDhDU29JRDhDOTM2cTZaMGNLVGozMXZzMkRpRG80M1hjVzBLV05UVlhEWXQyV1E4OGtKaEN2VU5MTFk%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "미국채/재무부수익(금리)이 다년간 최고치로의 급등이 식으면서 하락했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5JN3hlTGd4VlZhb0g2Y1AzdHJ3ZVZYOHJ3UDI3X1NpekdCemxHTlpsbVl2NUxLTmdUU2dmTFB2QlFWQmJXN2syaVh3OHdMR294SzRUMUhzRktsbk50UG9JMks1dWZqQldIYmllQUpyWjhHRFZERVVhVtIBfkFVX3lxTFBiS2VYTXRVaXVCQXUzd0VTNXZSYXQxRWl5V18xSXVlZVBXeEdjMkIwWGloZlVKalh5SjU2RmF3dGxfNEpzd05SMjczOXNmQTFZTGloaUdOdzAxMVRuWXc1ME9mb0RCYThITTZrQnNKM3NuQ1NKUDBsY1lEVU1PUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMieEFVX3lxTE5JN3hlTGd4VlZhb0g2Y1AzdHJ3ZVZYOHJ3UDI3X1NpekdCemxHTlpsbVl2NUxLTmdUU2dmTFB2QlFWQmJXN2syaVh3OHdMR294SzRUMUhzRktsbk50UG9JMks1dWZqQldIYmllQUpyWjhHRFZERVVhVtIBfkFVX3lxTFBiS2VYTXRVaXVCQXUzd0VTNXZSYXQxRWl5V18xSXVlZVBXeEdjMkIwWGloZlVKalh5SjU2RmF3dGxfNEpzd05SMjczOXNmQTFZTGloaUdOdzAxMVRuWXc1ME9mb0RCYThITTZrQnNKM3NuQ1NKUDBsY1lEVU1PUQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "남아프리카 중앙 은행은 두 번째로 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPRjBsNHVyd0M1QUFzS05nLXJqV0tJMThtaW1EWHZCUDdVZXJFNjJSR2lVZXpkNERzbkFnYjlaSHE3OWgtZ2c5ZXZzZ2NCdDB6VXJyQmgtQVFKTG9MMnRyZVQ3OHZ4NmZnRHN5WVZNU3c1OFJUdURwRlpFWnFtVFBNVUZjVGFfSC1LWHRUV19BQUk3RDNQeTFyZDg1aGhQeU5STkRBd0Z3QnQxdENka19pWXlYOA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPRjBsNHVyd0M1QUFzS05nLXJqV0tJMThtaW1EWHZCUDdVZXJFNjJSR2lVZXpkNERzbkFnYjlaSHE3OWgtZ2c5ZXZzZ2NCdDB6VXJyQmgtQVFKTG9MMnRyZVQ3OHZ4NmZnRHN5WVZNU3c1OFJUdURwRlpFWnFtVFBNVUZjVGFfSC1LWHRUV19BQUk3RDNQeTFyZDg1aGhQeU5STkRBd0Z3QnQxdENka19pWXlYOA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:16"
    },
    {
      "source": "Reuters",
      "title_ko": "이란 전쟁 영향으로 이번 주 남아프리카 연료 가격 급등",
      "title_en": "South African fuel prices to jump this week on Iran war impact",
      "summary_ko": "이란 전쟁 영향으로 이번 주 남아프리카 연료 가격 급등 관련 핵심 동향이 발표되었습니다. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNWGN4N0hDeHBrQ016aHFNam5wQk9IRHo2OTJjNUtFWWZKT2h1TE5abndZYXNiSVdjS0R1a2xNRGc0djNYTDRNaTR4UElrOEt3SVloQjMxTm1Yb3F6WnFjc2lLTC1oTENXMmVXeTQyUGxPMXc2d0pER3BCQjRMZkVhcmMybHZVNVJuZDM1RzNxVlA3VHdMeHYydFFsV3RjZnZBZ09wenpfWG9MbEFGZ2c?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNWGN4N0hDeHBrQ016aHFNam5wQk9IRHo2OTJjNUtFWWZKT2h1TE5abndZYXNiSVdjS0R1a2xNRGc0djNYTDRNaTR4UElrOEt3SVloQjMxTm1Yb3F6WnFjc2lLTC1oTENXMmVXeTQyUGxPMXc2d0pER3BCQjRMZkVhcmMybHZVNVJuZDM1RzNxVlA3VHdMeHYydFFsV3RjZnZBZ09wenpfWG9MbEFGZ2c%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 05 Oct 2026 14:04:39 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "한국 경상수지 흑자 칩 기록 급증",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNWFRnTG54WVM1QmFHX2YtWjlQV043MWd5X2hkVHozNW1JV0FXTWxEaGpkSi1pdGVHSnRaS2FLd0xvR1RvWjBLNE1HTFdEc3doRVhBZkt4Rnd2RG82VHlGalBjRmxycWNocW9oTFVBdERLOUItUTA1SnRrMlZVVkFNTVd2SXdyU1R0SDFVOFZpelNKLTBHeHdoZTBuODFzcGxCNER3ZUVuTi1sQ0lCcUNQbUpnRkQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxNWFRnTG54WVM1QmFHX2YtWjlQV043MWd5X2hkVHozNW1JV0FXTWxEaGpkSi1pdGVHSnRaS2FLd0xvR1RvWjBLNE1HTFdEc3doRVhBZkt4Rnd2RG82VHlGalBjRmxycWNocW9oTFVBdERLOUItUTA1SnRrMlZVVkFNTVd2SXdyU1R0SDFVOFZpelNKLTBHeHdoZTBuODFzcGxCNER3ZUVuTi1sQ0lCcUNQbUpnRkQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:19"
    },
    {
      "source": "Bloomberg",
      "title_ko": "카타르는 호르무즈가 가스 거래를 중단하면서 10년 만에 가장 큰 적자를 기록했습니다.",
      "title_en": "Qatar Has Widest Deficit in a Decade as Hormuz Ties Up Gas Trade",
      "summary_ko": "호르무즈가 가스 거래를 중단하면서 카타르는 10년 만에 가장 큰 적자 기록 Bloomberg.com. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNR2lxbV9QaFNwYVZia0puRm9FTl9uUFV0Q3RWc0RYS3ZkUVdTaWo1ZkwxZGt1Rmpac3cxVHFEbjBBWERPVTByUTMwZ0gxQ1hkQmNaZG9aMnNJemY1TENfRjE1WjRpN2lXOG1SSjhuNmRZZS00bnVNeFgtUEk2TWpoR0w4cWM5UGVsNVpwdV9odHZvcV9QeWw1QWxyLXE4bVJnMFF0ZDNmWm1kaHlYaW9XaVFoWXhOdw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNR2lxbV9QaFNwYVZia0puRm9FTl9uUFV0Q3RWc0RYS3ZkUVdTaWo1ZkwxZGt1Rmpac3cxVHFEbjBBWERPVTByUTMwZ0gxQ1hkQmNaZG9aMnNJemY1TENfRjE1WjRpN2lXOG1SSjhuNmRZZS00bnVNeFgtUEk2TWpoR0w4cWM5UGVsNVpwdV9odHZvcV9QeWw1QWxyLXE4bVJnMFF0ZDNmWm1kaHlYaW9XaVFoWXhOdw%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 08 Sep 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "미국 채권 수익률이 계속 오르면 워싱턴은 다음에 무엇을 할 것인가?",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOQnNOaEpMX1dfS3ZXNUV1SFZZcDY5MWI0UW9udWNkN3dJc0wtZU4wc1JFX1laSjlTY1N1MTdkdjRtMVlIMXFRMkhuUmwtcFcwYlQ2UUEyZnBJSEY3VGo5azVGUXJYU1BuZU9aSmRlZEVsQzNGN3FJeTctRUdlR0ItcFJKbkVYODktX2dWRzE4MjY3aFp3RV9KR3BsYlM5RGpTLS03YW9R?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxOQnNOaEpMX1dfS3ZXNUV1SFZZcDY5MWI0UW9udWNkN3dJc0wtZU4wc1JFX1laSjlTY1N1MTdkdjRtMVlIMXFRMkhuUmwtcFcwYlQ2UUEyZnBJSEY3VGo5azVGUXJYU1BuZU9aSmRlZEVsQzNGN3FJeTctRUdlR0ItcFJKbkVYODktX2dWRzE4MjY3aFp3RV9KR3BsYlM5RGpTLS03YW9R%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "슬로바키아인이 선거를 설정합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQTFBCMFRhMFdBZ2hfSm1aenNxajRKa2tzNzBwMGFmeXdNaFNUcWhTd05OVnhlT25UOUxUeVFGV3pEbWlpRzg5MVl1OERkNlUwTU1iMHNnWkhxTDQtRnN2djZ4MU14a3NQZUF5d2V2U2ZmZnhJWDQzN2JpZ0pNVU5scVBqQmJyNUk5NWpBRnF3dmlzMUxfZzhBakdOLTNJckpORWotclcyempGOElvVXE0Zlg4ZEZfQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxQTFBCMFRhMFdBZ2hfSm1aenNxajRKa2tzNzBwMGFmeXdNaFNUcWhTd05OVnhlT25UOUxUeVFGV3pEbWlpRzg5MVl1OERkNlUwTU1iMHNnWkhxTDQtRnN2djZ4MU14a3NQZUF5d2V2U2ZmZnhJWDQzN2JpZ0pNVU5scVBqQmJyNUk5NWpBRnF3dmlzMUxfZzhBakdOLTNJckpORWotclcyempGOElvVXE0Zlg4ZEZfQQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "미국의 8월 재정적자는 전년 동기 대비 1조 9700억 달러로 감소했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPTWVHVXlpTTA5N0RxVVVibkhNckdwYUN0NUhaaU1EMG95UEhIa2E2RVZGbFk5WFUyaEpSUWpkWlczbUxNeERpQldXdWR4eUxsUEZIYXRFV0ZlakhJSTFiQ0dCNTBzcGYwQVI3djR2c2U4aEE1VlAyb3lpWE9JVGxLM2lNRWFhVTQxeTh1UnNDa0pFMXNqOTE4a21jQy03bjNfR2VkWVUwQml4WXVub1Aw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPTWVHVXlpTTA5N0RxVVVibkhNckdwYUN0NUhaaU1EMG95UEhIa2E2RVZGbFk5WFUyaEpSUWpkWlczbUxNeERpQldXdWR4eUxsUEZIYXRFV0ZlakhJSTFiQ0dCNTBzcGYwQVI3djR2c2U4aEE1VlAyb3lpWE9JVGxLM2lNRWFhVTQxeTh1UnNDa0pFMXNqOTE4a21jQy03bjNfR2VkWVUwQml4WXVub1Aw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:22"
    },
    {
      "source": "Bloomberg",
      "title_ko": "베센트의 이란 위협은 미국의 중국 공격 의지에 달려 있다",
      "title_en": "Bessent’s Iran Threat Hinges on US Willingness to Hit China",
      "summary_ko": "베센트의 이란 위협은 미국의 중국 공격 의지에 달려 있다 Bloomberg.com. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Bloomberg, MarketWatch 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPLVViODVsMEI2MVdqaFhiVFVzaUlZa0xlQVRoc21Cc0JwMVhvUWdoT0FIZlFlMnM4OTZkZ2JNZjREckd5aGswajhBTFFjbFotTmRHazdQTmVERUtoSnV6RmYyaGEyMTBLaG1JWWFWUW5md2djNW9veTV2R05zMmdWb1lqS3FVWU1ZNmpUQmdCd0Y5Q1ZlNm5JOWJvM2g3bFZjTE9ucHg4V2pmM3duQjNpVkRSSEs?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxPLVViODVsMEI2MVdqaFhiVFVzaUlZa0xlQVRoc21Cc0JwMVhvUWdoT0FIZlFlMnM4OTZkZ2JNZjREckd5aGswajhBTFFjbFotTmRHazdQTmVERUtoSnV6RmYyaGEyMTBLaG1JWWFWUW5md2djNW9veTV2R05zMmdWb1lqS3FVWU1ZNmpUQmdCd0Y5Q1ZlNm5JOWJvM2g3bFZjTE9ucHg4V2pmM3duQjNpVkRSSEs%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 25 Aug 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "소득에 관한 좋은 소식이 있습니다. 아무도 그것을 믿지 않는 것 같습니다",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQSmVnc0EwdEtDMlR2aUJJRkg5YmwtWGF5U0NqQkVEVlpnX0NxN0doekFMN3hXSVhGbVh6OVF6V2VScGp6T3poaXB1VDViYWx5azNKTDc4YkF6NGFWQUZ4LWtIZVRpVDZGOWVvTVc0b01nUkw1NEpwM2JLWFotaWpvZ0VJN29YeWt4cjdValJSRmdRWWRfQlQ2MUJJSGVyZW1rN3RNblh6c2lGWXBnRndVeGNKNA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxQSmVnc0EwdEtDMlR2aUJJRkg5YmwtWGF5U0NqQkVEVlpnX0NxN0doekFMN3hXSVhGbVh6OVF6V2VScGp6T3poaXB1VDViYWx5azNKTDc4YkF6NGFWQUZ4LWtIZVRpVDZGOWVvTVc0b01nUkw1NEpwM2JLWFotaWpvZ0VJN29YeWt4cjdValJSRmdRWWRfQlQ2MUJJSGVyZW1rN3RNblh6c2lGWXBnRndVeGNKNA%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "실제로 인플레이션을 주도하고 상승하는 요인은 무엇입니까?",
          "original_url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNeGdsdGE2N2VyWkY0cmphSEkyeEpFal9BU21ZdDU3YzlONUVKdTcySGVwSzlMVHhKU0k2Q0o4X2NOYVVLMVNFcDl1MWdIUWtmWVoyeTEwenQzajZFQVYweHN1bS1rdXFxb09fYlNVNlJhMHBkS1Bua290WEsxeHE4ZV9BM1NrQWgzMGVIVDE4b0x2YnpSc1FRWW16TFdfNWJt?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMioAFBVV95cUxNeGdsdGE2N2VyWkY0cmphSEkyeEpFal9BU21ZdDU3YzlONUVKdTcySGVwSzlMVHhKU0k2Q0o4X2NOYVVLMVNFcDl1MWdIUWtmWVoyeTEwenQzajZFQVYweHN1bS1rdXFxb09fYlNVNlJhMHBkS1Bua290WEsxeHE4ZV9BM1NrQWgzMGVIVDE4b0x2YnpSc1FRWW16TFdfNWJt%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "미국 수익( 금리)은 유가 하락으로 2002년 최고치에서 하락, 베센트, 부채에 대한 서약",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPMzEtUVFoWkZFa3NIWUVTRmc3ZUdvd0prLWZFWFVyVktjYnVrOV9yTVoyR3pudUpTVGFWLXpyLUpaZGtUdnZ2ZDh0S3lOdmhmX3FJWTY5UVhoSlpyc2hlS1E4TnlHS2ZVa0UtZHFLN3BkUXN5dVNDdDVfZTI0OXpmRUhHSXNzOTlNanF6ejZfb25xWW5IUXNaMDdWZERpRml4bzBvREFsNXc4OFlmTmN1S0lVQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPMzEtUVFoWkZFa3NIWUVTRmc3ZUdvd0prLWZFWFVyVktjYnVrOV9yTVoyR3pudUpTVGFWLXpyLUpaZGtUdnZ2ZDh0S3lOdmhmX3FJWTY5UVhoSlpyc2hlS1E4TnlHS2ZVa0UtZHFLN3BkUXN5dVNDdDVfZTI0OXpmRUhHSXNzOTlNanF6ejZfb25xWW5IUXNaMDdWZERpRml4bzBvREFsNXc4OFlmTmN1S0lVQQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "옐런 \"트럼프, 미국 동맹국에 끔찍하다\"며 보복 지지",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQU3k4dVlrRG9WeENKdlJoMUVyR1BRTWlrV0dMYm9SYWJERXk5cUhUSjlDMURGM3IyNndwUl9wWVR6UGVSaDgwUElVRS1WNkJCZUlGZXVyQWN3dTZNcHdWc29HUEMxM2hTbGxhZkZJWXVMZnA5Qkl1OUkySUp0ZnBkY3BYRHZQcmYwVjFGM2xibFRNdnJGdUJfREgwc21Ca0p5RFNlRk55NUhWVGdWVHc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxQU3k4dVlrRG9WeENKdlJoMUVyR1BRTWlrV0dMYm9SYWJERXk5cUhUSjlDMURGM3IyNndwUl9wWVR6UGVSaDgwUElVRS1WNkJCZUlGZXVyQWN3dTZNcHdWc29HUEMxM2hTbGxhZkZJWXVMZnA5Qkl1OUkySUp0ZnBkY3BYRHZQcmYwVjFGM2xibFRNdnJGdUJfREgwc21Ca0p5RFNlRk55NUhWVGdWVHc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:27"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "금리 급등으로 상업용 부동산이 폭등하고 있습니다.",
      "title_en": "The Surge in Rates Is Blowing Up Commercial Real-Estate Deals",
      "summary_ko": "금리 급등으로 상업용 부동산이 폭등하고 있습니다. 관련 핵심 동향이 발표되었습니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Wall Street Journal뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxONXV6eW1EaHZGdUY3cmoxUEhXUUtzLUxBa25GbUt0Z2F6ZkxWUW9YQWZvY1NRcDk3ZzhZNmFXZ3JNTEp0LUJaOEFNVnp2TkR6NGFCeEVJMi02UXl6NS1kNWFHTlFQdjNfbnVKLVdSUHktbDMzSlZ4MGh0Ml95S2xncWFKem4?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihAFBVV95cUxONXV6eW1EaHZGdUY3cmoxUEhXUUtzLUxBa25GbUt0Z2F6ZkxWUW9YQWZvY1NRcDk3ZzhZNmFXZ3JNTEp0LUJaOEFNVnp2TkR6NGFCeEVJMi02UXl6NS1kNWFHTlFQdjNfbnVKLVdSUHktbDMzSlZ4MGh0Ml95S2xncWFKem4%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 06 Oct 2026 00:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "미국 국채 슬럼프(Slump), 장기 수익률( 금리)을 Fresh 24로 추진",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPdS1Yd1RIMEhSTmNFb2NEUUVGRGktUmNWcmxWOGVfVENPOW51RGxGY3lYMEpZRXQtTVBzT2tqS0FXcWg4a3pKNzlHdG5VWmJPNjlVRG1IS2hOXzBISHhfVjV0eHFyc2lFUmRGeHROQ1JSTTA2aWhpbVFlb2VrelFoWlhZdGhzd1RqQWt3RzZ4aVFYeklTMFc2YnhMQlZYcV9xRXFua0lpMlJCdU5zTU1qRTdsZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPdS1Yd1RIMEhSTmNFb2NEUUVGRGktUmNWcmxWOGVfVENPOW51RGxGY3lYMEpZRXQtTVBzT2tqS0FXcWg4a3pKNzlHdG5VWmJPNjlVRG1IS2hOXzBISHhfVjV0eHFyc2lFUmRGeHROQ1JSTTA2aWhpbVFlb2VrelFoWlhZdGhzd1RqQWt3RzZ4aVFYeklTMFc2YnhMQlZYcV9xRXFua0lpMlJCdU5zTU1qRTdsZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:29"
    },
    {
      "source": "매일경제",
      "title_ko": "“9월에 20조 팔아치운 외국인”…10월엔 돌아올까",
      "title_en": "",
      "summary_ko": "“9월에 20조 팔아치운 외국인”…10월엔 돌아올까 매일경제 마켓. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 매일경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBiRzBhQklwQjdSS1AtdDVSVGJPNHE2V2tLZFBjb1lFeFh1cHVoXzF1UkdqQlhEQ1hLbGYxYnRSS2JIY0ZpVUhfRzhrX1pkWE5Ic3c?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBiRzBhQklwQjdSS1AtdDVSVGJPNHE2V2tLZFBjb1lFeFh1cHVoXzF1UkdqQlhEQ1hLbGYxYnRSS2JIY0ZpVUhfRzhrX1pkWE5Ic3c?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 02 Oct 2026 06:24:12 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-06 20:01:29"
    },
    {
      "source": "인베스트조선",
      "title_ko": "'1500원 뉴노멀' 한 달 만에 흔들…1300원대 환율은 언제까지 갈까",
      "title_en": "",
      "summary_ko": "'1500원 뉴노멀' 한 달 만에 흔들…1300원대 환율은 언제까지 갈까 인베스트조선. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 인베스트조선에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxObkhvS09kWVNmbkhHSVoxX1ljenNMeC1rWURiWEVfYWJRTVh3RFBKOXk0T2lQeGRCbVMtd1N0RzJ5Ymh5Qy1UVDZqZXVYSk9Qb3c0bG1lUXBsa3RyeTM5ck10WnF3dUMwZjM5WENhMER5WWlsQlJQd1B1anVCNmFhSVZucw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxObkhvS09kWVNmbkhHSVoxX1ljenNMeC1rWURiWEVfYWJRTVh3RFBKOXk0T2lQeGRCbVMtd1N0RzJ5Ymh5Qy1UVDZqZXVYSk9Qb3c0bG1lUXBsa3RyeTM5ck10WnF3dUMwZjM5WENhMER5WWlsQlJQd1B1anVCNmFhSVZucw?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 26 Aug 2026 07:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-06 20:01:29"
    },
    {
      "source": "CNBC",
      "title_ko": "케빈 워시(Kevin Warsh)의 세 단어는 월가가 연준(Fed)이 금리 인상을 어디까지 할 것인지 궁금해지게 만든다.",
      "title_en": "Three words from Kevin Warsh have Wall Street wondering how far the Fed will go with rate hikes",
      "summary_ko": "케빈 워시(Kevin Warsh)의 세 단어는 월가가 연준(Fed)이 금리 인상을 어디까지 할 것인지 궁금해지게 만든다 CNBC. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. CNBC에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNSXdfWXNIMEY2YkdDSGh2cWVONW03aXdjUFFuUGV5cmswQnNjQlgzNTJTWTBiM3ZnZmY4Wl95MmRYOGFyeDB6YjJwTTdDdk94QU1jendxcHZxemF2dExzdFh1WWwzeE0tMTdnWUFLWUhqeTdUMm9ORG53UGVoaU1zSVhVU3hkV1RNaDNqNmNjMVo2VUVteXR0NnE1dHZUZGo2WUZUMWNYdzlnR3FGcWNrRlhqU0hUX21VUUI4aE50bUFmb2tVdDZMMldYNG_SAdIBQVVfeXFMTy1qakhvTjZoRU1JZjNhZDFtUjN3cWg5N3JmQjQ4RnpsZGFUVW5pVWFOOXdlWDhnMjBMRzN2SnBObjF2OTBTTGZCWW5sX3NheHNjVHhEY2NVVkt5YXU2S1AyNFRRamM1UXhYN0NWTGUwOHRTc0hxVVdMT0xITXZXN05MZ01jOGdIU1pfVTkybXMyY081a1hIYUtqTWFKMzdFVXIwYVZmT19PbXlOTzNIenN1YXhKY1RvTkd2SkctZ01VOGVFN0p0bTR5X2RTQ1MyVlhn?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizAFBVV95cUxNSXdfWXNIMEY2YkdDSGh2cWVONW03aXdjUFFuUGV5cmswQnNjQlgzNTJTWTBiM3ZnZmY4Wl95MmRYOGFyeDB6YjJwTTdDdk94QU1jendxcHZxemF2dExzdFh1WWwzeE0tMTdnWUFLWUhqeTdUMm9ORG53UGVoaU1zSVhVU3hkV1RNaDNqNmNjMVo2VUVteXR0NnE1dHZUZGo2WUZUMWNYdzlnR3FGcWNrRlhqU0hUX21VUUI4aE50bUFmb2tVdDZMMldYNG_SAdIBQVVfeXFMTy1qakhvTjZoRU1JZjNhZDFtUjN3cWg5N3JmQjQ4RnpsZGFUVW5pVWFOOXdlWDhnMjBMRzN2SnBObjF2OTBTTGZCWW5sX3NheHNjVHhEY2NVVkt5YXU2S1AyNFRRamM1UXhYN0NWTGUwOHRTc0hxVVdMT0xITXZXN05MZ01jOGdIU1pfVTkybXMyY081a1hIYUtqTWFKMzdFVXIwYVZmT19PbXlOTzNIenN1YXhKY1RvTkd2SkctZ01VOGVFN0p0bTR5X2RTQ1MyVlhn%3Foc%3D5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Fri, 18 Sep 2026 07:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-06 20:01:30"
    },
    {
      "source": "뉴스핌",
      "title_ko": "[베트남 증시] 유동성 급감 속 6거래일 만에 반등...외국인은 9거래일 연속 '팔자'",
      "title_en": "",
      "summary_ko": "[베트남 증시] 유동성 급감 속 6거래일 만에 반등...외국인은 9거래일 연속 '팔자' 뉴스핌. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 뉴스핌에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5Hd0ZnZXdQbC1DYlAyb2pfOXJObmpRRUtZMUxaX3duNXJOQTZHTXN4SUc3SWxDT0Y0MWREdDdPaU9teUVvUHNJVXY2NVV0blNvcFRfYVppT1RTX2xN?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5Hd0ZnZXdQbC1DYlAyb2pfOXJObmpRRUtZMUxaX3duNXJOQTZHTXN4SUc3SWxDT0Y0MWREdDdPaU9teUVvUHNJVXY2NVV0blNvcFRfYVppT1RTX2xN?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 05 Oct 2026 10:40:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-06 20:01:30"
    },
    {
      "source": "Investing.com",
      "title_ko": "[1006마감체크] 코스피, 외국인 매도에 7000선 반납... 코스닥은 900선 회복 By 인포스탁데일리",
      "title_en": "",
      "summary_ko": "[1006마감체크] 코스피, 외국인 매도에 7000선 반납... 코스닥은 900선 회복 By 인포스탁데일리 Investing.com 한국어. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. Investing.com뿐만 아니라 Daum, 뉴스투데이 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE0xLURZY2F0SkxZblRXbUdHczgxd2xwQ2FyaGFHVC00aVZZRmxGWFZmRWxVNEpRU1JwQmRORUxsSm8zV3BnV0NxeDdCVjNYcVdybnUxZ1VkYUluT1g1ZWVlaXcxM1hlN0MwWWQ5WDN4a0U?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE0xLURZY2F0SkxZblRXbUdHczgxd2xwQ2FyaGFHVC00aVZZRmxGWFZmRWxVNEpRU1JwQmRORUxsSm8zV3BnV0NxeDdCVjNYcVdybnUxZ1VkYUluT1g1ZWVlaXcxM1hlN0MwWWQ5WDN4a0U?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 06 Oct 2026 08:38:00 GMT",
      "related_articles": [
        {
          "source": "코리아리포트",
          "title_ko": "코스피, 외국인 매도에 '7천선' 반납…코스닥은 3% 상승",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1CN3RNb0FYakJwdFlqOUxjd2ZkYklodVFuT1FOMi1BalUtZ0ZwY3hSMnFJa3N2bEFZdHA2bnJzaXpFeVpySHVxRm8zaE1KelMxZFhadWpiZ0w0V1ZuN05QQWlKTnRudmNMT2NsVDNOQ1A?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1CN3RNb0FYakJwdFlqOUxjd2ZkYklodVFuT1FOMi1BalUtZ0ZwY3hSMnFJa3N2bEFZdHA2bnJzaXpFeVpySHVxRm8zaE1KelMxZFhadWpiZ0w0V1ZuN05QQWlKTnRudmNMT2NsVDNOQ1A?oc=5"
        },
        {
          "source": "뉴스투데이",
          "title_ko": "(마감시황) 코스피, 외국인 '팔자'에 6,940선으로 주저 앉아…코스닥 910선 회복",
          "original_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE83VlFDM2lCT1JiLTI1VHRBaS1uV0VvLVJtd0VHUnNkeG52b1dZYlc2TkRfOU16dl9JdTI0Mm9wMUp6Y004M1QyamlSMnJMUlh1VmdwVDNwbFZMYndLM1E?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE83VlFDM2lCT1JiLTI1VHRBaS1uV0VvLVJtd0VHUnNkeG52b1dZYlc2TkRfOU16dl9JdTI0Mm9wMUp6Y004M1QyamlSMnJMUlh1VmdwVDNwbFZMYndLM1E?oc=5"
        },
        {
          "source": "Daum",
          "title_ko": "[食전食후] 코스피, 외국인 매도에 6900선으로 밀려…코스닥은 2%대 강세",
          "original_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE40Z1hBWnVWc1EyUHJOTEswNEd4M25idW91X1YtNFFIc2pvZXRmME1TdnNBSEQwem0xRGxJRDQ0QnFtSnRYcVpaa2xKVkpYaWs?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE40Z1hBWnVWc1EyUHJOTEswNEd4M25idW91X1YtNFFIc2pvZXRmME1TdnNBSEQwem0xRGxJRDQ0QnFtSnRYcVpaa2xKVkpYaWs?oc=5"
        },
        {
          "source": "Daum",
          "title_ko": "코스피, 외국인 ‘팔자’에 7000선서 등락…삼성전기↑",
          "original_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE14cWtEM3BTWVpIbUJTRXZ3aHNkdjlfTllEb09GWjNhTXQ4OXdVNE1hcTJGMTV5Qzl0NGJMRkp0WEpSTklrMEtPZTM0dTBYSFU?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE14cWtEM3BTWVpIbUJTRXZ3aHNkdjlfTllEb09GWjNhTXQ4OXdVNE1hcTJGMTV5Qzl0NGJMRkp0WEpSTklrMEtPZTM0dTBYSFU?oc=5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:30"
    },
    {
      "source": "동아일보",
      "title_ko": "美연준, 만장일치로 기준금리 인상… 워시 “인플레 너무 높고 너무 오래 지속”",
      "title_en": "",
      "summary_ko": "美연준, 만장일치로 기준금리 인상… 워시 “인플레 너무 높고 너무 오래 지속” 동아일보. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 동아일보에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5ZWHpTWDdlSkFOVUZiaFZISEVQb2N6QUQ0QzNqMjF3N0JzaURwSUo4UGpKRk1hQjBhZ0o2UkN3c2d1cGpNYUFlN3JHMVpXMi04Qk5ENzhoU3k5Vk5VSGNZUEhobzVhY0NPSkNVUFNQRmdCbzTSAWZBVV95cUxQWi00ZUJabC1wWEZnVVNJSnhPZldPRkNuLTBvSXVXcEpIeUc0SlZOLUpyVmhVcE9JdWkxaUMzTlB6dFhxUjFIUVo2MnQxSWRvNjVqaUhwRTc2MEdqcUJLeEZNRHJVU3c?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5ZWHpTWDdlSkFOVUZiaFZISEVQb2N6QUQ0QzNqMjF3N0JzaURwSUo4UGpKRk1hQjBhZ0o2UkN3c2d1cGpNYUFlN3JHMVpXMi04Qk5ENzhoU3k5Vk5VSGNZUEhobzVhY0NPSkNVUFNQRmdCbzTSAWZBVV95cUxQWi00ZUJabC1wWEZnVVNJSnhPZldPRkNuLTBvSXVXcEpIeUc0SlZOLUpyVmhVcE9JdWkxaUMzTlB6dFhxUjFIUVo2MnQxSWRvNjVqaUhwRTc2MEdqcUJLeEZNRHJVU3c?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 17 Sep 2026 07:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-06 20:01:30"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "RBA, 기준금리 4.60%로 인상…15년 만에 최고치(상보)",
      "title_en": "",
      "summary_ko": "RBA, 기준금리 4.60%로 인상…15년 만에 최고치(상보) 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9CSUZ2M3ZmNHpNTGdqU3FkVmFYeVkxd3N6WHRXbHhuQTBSYS0za05zTEp6Sjh3Y09aTzhlRFFWc2RJQzJGQzAxNmpsenlVcTc2UTA1cVV1c0tDRF9OVmNVTkZnTGt6c3lQWk1OclRfbW4?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9CSUZ2M3ZmNHpNTGdqU3FkVmFYeVkxd3N6WHRXbHhuQTBSYS0za05zTEp6Sjh3Y09aTzhlRFFWc2RJQzJGQzAxNmpsenlVcTc2UTA1cVV1c0tDRF9OVmNVTkZnTGt6c3lQWk1OclRfbW4?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 29 Sep 2026 07:14:33 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-06 20:01:30"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "[이번주 한국은행 및 금융위·금감원 일정]",
      "title_en": "",
      "summary_ko": "[이번주 한국은행 및 금융위·금감원 일정] 연합인포맥스. 한국은행의 금리 결정 및 국내 수출입 펀더멘털, 가계부채와 부동산 경기에 미치는 파급 효과를 주목할 필요가 있습니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5UXzNlcXN5SEF0M3IyOEIwa2pjelB6Q1BJRmkxVldEamhnajRWbmI0MS1vbDRtZHZ6T2wyQzlhQVFENEJBLXFDN1JIc2JGQU1UR0o5LWhGYjd2ejdwTVg1cEtZZ1VYMzE5N0hsWTk0UUzSAXRBVV95cUxPLUdCTzlRYktrUVEyZUpaNHNZV1NUcjBud053UDdUUXNLczgyN2Uxczh6Z0tRbnFfaDRSLW5SS25hV2c5WVdwY1VueDBvQTVnT2lvb09nWm5iYmJaWUNGWFpSV2JLUkRUWjVWRjNiTG1TRGNJcA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5UXzNlcXN5SEF0M3IyOEIwa2pjelB6Q1BJRmkxVldEamhnajRWbmI0MS1vbDRtZHZ6T2wyQzlhQVFENEJBLXFDN1JIc2JGQU1UR0o5LWhGYjd2ejdwTVg1cEtZZ1VYMzE5N0hsWTk0UUzSAXRBVV95cUxPLUdCTzlRYktrUVEyZUpaNHNZV1NUcjBud053UDdUUXNLczgyN2Uxczh6Z0tRbnFfaDRSLW5SS25hV2c5WVdwY1VueDBvQTVnT2lvb09nWm5iYmJaWUNGWFpSV2JLUkRUWjVWRjNiTG1TRGNJcA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 05 Oct 2026 22:00:12 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-06 20:01:30"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "9월 소비자물가 2.9% 상승·예상치 부합…근원물가 2.8%↑",
      "title_en": "",
      "summary_ko": "9월 소비자물가 2.9% 상승·예상치 부합…근원물가 2.8%↑ 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 매일경제, 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE4xRHNLM1BVYVVMdlFVQ3hNUGhrRWVLT1YwaUZ6MXgzbURyY05CT3AxTnhTQW5OSTRZR1pIVW83cEttcmtKbnF1NmxpTkpQODREWHhLYnpNLUh1dWMzMWRoeGNLcWNTRlM3WjkzVC00bng?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE4xRHNLM1BVYVVMdlFVQ3hNUGhrRWVLT1YwaUZ6MXgzbURyY05CT3AxTnhTQW5OSTRZR1pIVW83cEttcmtKbnF1NmxpTkpQODREWHhLYnpNLUh1dWMzMWRoeGNLcWNTRlM3WjkzVC00bng?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 01 Oct 2026 23:00:02 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "9월 소비자물가 2.9% 상승·예상치 부합…근원물가 2.8%↑(종합)",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE4wTjNEXzFKc2xOLVc0UjAyRVVaczhORDB1MUh1TGdyUVF1NEFCQTdrNDh3d3lhN3FGN3loMVFWYWZnVFgyMGlHX1Y0XzVTSFlvUGVzQndpQ3dpa0R0OEVBTFZXVEtCOTd3VWpTM09EbWs?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE4wTjNEXzFKc2xOLVc0UjAyRVVaczhORDB1MUh1TGdyUVF1NEFCQTdrNDh3d3lhN3FGN3loMVFWYWZnVFgyMGlHX1Y0XzVTSFlvUGVzQndpQ3dpa0R0OEVBTFZXVEtCOTd3VWpTM09EbWs?oc=5"
        },
        {
          "source": "매일경제",
          "title_ko": "한은 “10월 소비자물가 3% 안팎 전망…상승 압력 여전”",
          "original_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFA3Vkk2SXQ4WVBnUmEzTzVUNUhMWW8yRTJ1RUhRdV9Mb0dBN3Jpa1lIWFMxcTYzbmdKbHJuVFJicVJMUTJ3YVJFUXYyV1VfQWt5ZlZVMw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFA3Vkk2SXQ4WVBnUmEzTzVUNUhMWW8yRTJ1RUhRdV9Mb0dBN3Jpa1lIWFMxcTYzbmdKbHJuVFJicVJMUTJ3YVJFUXYyV1VfQWt5ZlZVMw?oc=5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:30"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "권대영 재경부 1차관 '히든카드' 꺼내든 정부…부동산·가계부채 정면돌파",
      "title_en": "",
      "summary_ko": "권대영 재경부 1차관 '히든카드' 꺼내든 정부…부동산·가계부채 정면돌파 연합인포맥스. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9IbEdIT3YtZWl6U0lza0czYlpDNVUzbmhENGJtRWdvVV8yYVhSQnpWWjlEN3J2ZEgyYnJIbzdLUjhHbVZDZlJuR2VjaWlNdGpHNHBmdFZKOE84dUs4ZTJFVDNWNnk2czY5QmJwUDk4VWU?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9IbEdIT3YtZWl6U0lza0czYlpDNVUzbmhENGJtRWdvVV8yYVhSQnpWWjlEN3J2ZEgyYnJIbzdLUjhHbVZDZlJuR2VjaWlNdGpHNHBmdFZKOE84dUs4ZTJFVDNWNnk2czY5QmJwUDk4VWU?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 01 Oct 2026 05:24:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-06 20:01:31"
    },
    {
      "source": "Bloomberg",
      "title_ko": "AI 지출 모멘텀의 새로운 신호로 TSMC 매출 36% 급증",
      "title_en": "TSMC Sales Surge 36% in Fresh Sign of AI Spending Momentum",
      "summary_ko": "AI 지출 모멘텀의 새로운 신호로 TSMC 매출 36% 급증 Bloomberg.com. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Financial Times, Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOQUFMWnQ1VUVhNVhROTlOVDgwNnA2VVgtaElBd1paY0lCT3dybEI0ay1yTmRiNVhFTGFmSGtZOXlacDVjaFg5c1ZKQThUeXgwYmFidjBUOUZFYU9EeXo4dlMtWW1HQ2lQLW84QjRmRlJQZzZuMU5wSDFKU1FJX0VKdWFZYkJxdHJqSkNqX2hFdFYtbnZGcEdNdWZvM3l0STRSQVZBSnUwV3BzN1BJ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxOQUFMWnQ1VUVhNVhROTlOVDgwNnA2VVgtaElBd1paY0lCT3dybEI0ay1yTmRiNVhFTGFmSGtZOXlacDVjaFg5c1ZKQThUeXgwYmFidjBUOUZFYU9EeXo4dlMtWW1HQ2lQLW84QjRmRlJQZzZuMU5wSDFKU1FJX0VKdWFZYkJxdHJqSkNqX2hFdFYtbnZGcEdNdWZvM3l0STRSQVZBSnUwV3BzN1BJ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Mon, 13 Jul 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia는 고객에게 새로운 Rubin 디자인을 제공하는 과정을 홍보합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPNk9DR20yVlp0dThjRlo3SE1qc3FtTXpYODBRY2ZGRHlCUHBvY1ZpM2lCYkpyNmRfdFdXZzJ6ZmxSdXlnSlFDSGZiZkJSQ1FHX3F3UUtTV1RxT0hyWlkyNExqY250LVZkWXNGaEljWE9sbU9aekRQeGxwaUk2MEgzWEt4VkJKTFZZTE56MWlxWlRzRHNmaFpGcnBSbXZjcDF3QmlydHdVR3RTRUxaSHhF?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPNk9DR20yVlp0dThjRlo3SE1qc3FtTXpYODBRY2ZGRHlCUHBvY1ZpM2lCYkpyNmRfdFdXZzJ6ZmxSdXlnSlFDSGZiZkJSQ1FHX3F3UUtTV1RxT0hyWlkyNExqY250LVZkWXNGaEljWE9sbU9aekRQeGxwaUk2MEgzWEt4VkJKTFZZTE56MWlxWlRzRHNmaFpGcnBSbXZjcDF3QmlydHdVR3RTRUxaSHhF%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "엔비디아, 중국에서 판매용 AI 칩 생산 재개",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNRDhwMDFUSE8xLXdkOTFLbmZCNW1hcnN2NXVId3F0ZTczZjJRdVBQMWhaVHBSZEd0U1JBamZKdzh4ZnplclBHTnlVZ1NWcXBDWi1ob3p5WjZFZzZKdzFnaDZ2bW1fMGZHQW5iRkc1U2tIQndHSHFPLUN2NkNNQkxoNG51dzJqZFNYRUdWNXIxMHhfbktfRFE5a3RGWDNZSkp3dFZEVkpnaDVPdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxNRDhwMDFUSE8xLXdkOTFLbmZCNW1hcnN2NXVId3F0ZTczZjJRdVBQMWhaVHBSZEd0U1JBamZKdzh4ZnplclBHTnlVZ1NWcXBDWi1ob3p5WjZFZzZKdzFnaDZ2bW1fMGZHQW5iRkc1U2tIQndHSHFPLUN2NkNNQkxoNG51dzJqZFNYRUdWNXIxMHhfbktfRFE5a3RGWDNZSkp3dFZEVkpnaDVPdw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed), 인플레이션 억제 위해 금리 인상…트럼프 비난",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQUHRZYmthcDR5cVV4Y05OSmpLM3dvWHNmdm0xQm9feWhlV2pRc1hLYjhvZGJVcnoxc01SNksxUl9uVWMyZHBxV05wM3NoM3oxaTVCZG4zWUZOM3k5bEJoYWVyTGpMNmZQQ25SRzdQZXZob3VOSGRVUDJWcGotZmllNW5SRkg5d1hKN0ZHWGtuOTEwR3RZNktEU1I0S3J5XzZMaGxKZklXWkMzTjFWMUE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxQUHRZYmthcDR5cVV4Y05OSmpLM3dvWHNmdm0xQm9feWhlV2pRc1hLYjhvZGJVcnoxc01SNksxUl9uVWMyZHBxV05wM3NoM3oxaTVCZG4zWUZOM3k5bEJoYWVyTGpMNmZQQ25SRzdQZXZob3VOSGRVUDJWcGotZmllNW5SRkg5d1hKN0ZHWGtuOTEwR3RZNktEU1I0S3J5XzZMaGxKZklXWkMzTjFWMUE%3Foc%3D5"
        },
        {
          "source": "Financial Times",
          "title_ko": "공급망 비용 인플레이션의 새로운 폭발로 타격을 입은 미국 제조업체",
          "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPVlA3clhoZHZZTXBPTkpZMjNHRVhucm1nTUxYclV2UF9mRVowVkcwekVpSW1PUUFRUnNfSUxlaHRyYWNpYk1uOHpqS1RkdDh0NlZyNnZlR2RUWFNhbnJnNmhEMmw5ZTRQTzYtblRuVWtiSmRobGxJZnBQRXQ0Q1hpaFZZMGk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihAFBVV95cUxPVlA3clhoZHZZTXBPTkpZMjNHRVhucm1nTUxYclV2UF9mRVowVkcwekVpSW1PUUFRUnNfSUxlaHRyYWNpYk1uOHpqS1RkdDh0NlZyNnZlR2RUWFNhbnJnNmhEMmw5ZTRQTzYtblRuVWtiSmRobGxJZnBQRXQ0Q1hpaFZZMGk%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:35"
    },
    {
      "source": "CTech",
      "title_ko": "투자자 수요가 급증함에 따라 DeepSeek의 자금 조달 라운드는 150억 달러에 도달할 수 있습니다.",
      "title_en": "DeepSeek’s funding round could approach $15 billion as investor demand surges",
      "summary_ko": "투자자 수요가 급증함에 따라 DeepSeek의 자금 조달 라운드는 150억 달러에 도달할 수 있습니다. CTech. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. CTech뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5wOTV4cTA0T291WTByeUo3Ync3YzBJdTd4S1ZtcEhzOVdkd2Iyb1JtTHU0YTRvNWRGTXI2M3NLZnBEWnFpeTdnQW1NcTFYQnVlMHZDVnhkcFMwdFl3U2N5dHpkZDFXZ1k?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiZ0FVX3lxTE5wOTV4cTA0T291WTByeUo3Ync3YzBJdTd4S1ZtcEhzOVdkd2Iyb1JtTHU0YTRvNWRGTXI2M3NLZnBEWnFpeTdnQW1NcTFYQnVlMHZDVnhkcFMwdFl3U2N5dHpkZDFXZ1k%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 06 Oct 2026 06:51:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "DeepSeek, Tencent에서 최소 120억 달러 투자 유치",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQQXVsa1AtZXBYRFRpZG9IQ1JKcW5qVjZiLVNsUDhRc2hJRWJVYlZ1cXR3TGdKS2NOb3hkZ3dFM1lCdjFEWW05YjJPMl85cGwxWFZhbWdWSnNMVGJTem1RY2c5azlLbS1kRnhqdE5tY1NBWVZwM1BDUHV4RWxvcmVzdkdNVEY3VXlqQVF4N0diNU9WUjVJT3VGOU9lNVFEY0VhZlIyMG1yaE96Ui1xOFlwYlJLS28?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxQQXVsa1AtZXBYRFRpZG9IQ1JKcW5qVjZiLVNsUDhRc2hJRWJVYlZ1cXR3TGdKS2NOb3hkZ3dFM1lCdjFEWW05YjJPMl85cGwxWFZhbWdWSnNMVGJTem1RY2c5azlLbS1kRnhqdE5tY1NBWVZwM1BDUHV4RWxvcmVzdkdNVEY3VXlqQVF4N0diNU9WUjVJT3VGOU9lNVFEY0VhZlIyMG1yaE96Ui1xOFlwYlJLS28%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "DeepSeek은 새로운 자금 조달로 120억 달러 이상의 순익을 낼 것이라고 소식통은 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPQ0hfa1A1NjJCNExCcDJkTmFQOTMtOTV5MU9ZSDQ4M0pUTDBBUzdTNjVTMHpkMUROdG5qWVBXaVcza29USWdhRHd0dDcyRmdBSDBYYVYzYzVSeVN4WlhkN2pURGk4blpRaFpTYUpjeHhwTDBuQ0dmTWJKNnJIM3dmSEhFUC1TQWltODdoY1ZLSmh4MmNMakhOOXl4RHAzTXM5ckx0NTVoZ2dwc0dDaDRRVVRjSTFBc053cjVMOTl6b1VVcW5rNU9MWk9CdGk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizAFBVV95cUxPQ0hfa1A1NjJCNExCcDJkTmFQOTMtOTV5MU9ZSDQ4M0pUTDBBUzdTNjVTMHpkMUROdG5qWVBXaVcza29USWdhRHd0dDcyRmdBSDBYYVYzYzVSeVN4WlhkN2pURGk4blpRaFpTYUpjeHhwTDBuQ0dmTWJKNnJIM3dmSEhFUC1TQWltODdoY1ZLSmh4MmNMakhOOXl4RHAzTXM5ckx0NTVoZ2dwc0dDaDRRVVRjSTFBc053cjVMOTl6b1VVcW5rNU9MWk9CdGk%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "DeepSeek은 올해부터 IPO 신청을 준비하고 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNN3lwYTZpbjNfb1kxR3VTU2lRLUs4QnB5UU1EZEFsdEhscTB5NmF5NUo4bEdjLXhQRi1meF9YZERRLUlKakREQU1RWUxibnFoeGdZTW1wQl84Y2QtQ19feklmTVNBZTQ4ZWRKZTU4ZDNsUG5peEFOcFBPQ2hlUXl0MGpYdUVWZ2paWXV4eHRmbDBMbDh2VlVOUnhrSmJBZVVxRnV6WnR0N1k4VE5ONFQ2eEZoMA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxNN3lwYTZpbjNfb1kxR3VTU2lRLUs4QnB5UU1EZEFsdEhscTB5NmF5NUo4bEdjLXhQRi1meF9YZERRLUlKakREQU1RWUxibnFoeGdZTW1wQl84Y2QtQ19feklmTVNBZTQ4ZWRKZTU4ZDNsUG5peEFOcFBPQ2hlUXl0MGpYdUVWZ2paWXV4eHRmbDBMbDh2VlVOUnhrSmJBZVVxRnV6WnR0N1k4VE5ONFQ2eEZoMA%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia가 지원하는 Lambda는 칩 거래를 위해 10억 달러의 개인 부채를 기록합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPNlg2YUFpb3paaFpOeTgtR2FVSFhZd1ZVaTZGTXBwbTh2bDg3WS1CdVphZ1YyTmpneDJndVZSWGJiM0NQdk1XRUhxa1lmdXZZQk5HVGp2S3VrdFl6bHlXUm1OWFNwNk9wbGxjemhOa0lQM3JZRVk1WmVaV3Zva0R0T2JOdmpleFFVd2hZbUJsT3ctYmNyMk04ODQxaklmaVpMNHFzVEt1ZkVPbHFiQjNkTGVnZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPNlg2YUFpb3paaFpOeTgtR2FVSFhZd1ZVaTZGTXBwbTh2bDg3WS1CdVphZ1YyTmpneDJndVZSWGJiM0NQdk1XRUhxa1lmdXZZQk5HVGp2S3VrdFl6bHlXUm1OWFNwNk9wbGxjemhOa0lQM3JZRVk1WmVaV3Zva0R0T2JOdmpleFFVd2hZbUJsT3ctYmNyMk04ODQxaklmaVpMNHFzVEt1ZkVPbHFiQjNkTGVnZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:40"
    },
    {
      "source": "Bloomberg",
      "title_ko": "월요일에 이란 경제를 고립시키려는 미국의 계획을 자세히 설명할 예정",
      "title_en": "Bessent to Detail US Plans to Isolate Iran’s Economy on Monday",
      "summary_ko": "월요일 Bloomberg.com에서 이란 경제를 고립시키려는 미국의 계획을 자세히 설명할 예정. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg뿐만 아니라 Wall Street Journal, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPQnFHTUU1Y1hCWmJfYmVfM2VUdE5kR3czc0ZfRUFmMzNVWElXcTFvV096REotZHBIMi05REh6MU5PZk5GT0Z4YlFSTWVoZDVDaS1oTVpCMmVSSm9JQXA4SzU4ckZKRHB2dHBCSGY0S2NOa3BMMHdzX3M0ZXR6MWNHTE42V3BxTG5aY1d6SG53UjdFVmlBQjhxdFpRQ1BPWW5veGFLQnB4NzlPU3dMNkJaZk10dw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPQnFHTUU1Y1hCWmJfYmVfM2VUdE5kR3czc0ZfRUFmMzNVWElXcTFvV096REotZHBIMi05REh6MU5PZk5GT0Z4YlFSTWVoZDVDaS1oTVpCMmVSSm9JQXA4SzU4ckZKRHB2dHBCSGY0S2NOa3BMMHdzX3M0ZXR6MWNHTE42V3BxTG5aY1d6SG53UjdFVmlBQjhxdFpRQ1BPWW5veGFLQnB4NzlPU3dMNkJaZk10dw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 20 Aug 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "DeepSeek은 Huawei와 협력하여 칩 프로그래밍 도구를 개발하고 Nvidia에 대한 의존도를 줄입니다.",
          "original_url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPdUg5OUtKZEFWWE1PU3dHYURRTThhbS1fWTM2YzdIekQyTTIwU1daMl8wSW5XNTl4aklKSWlxVHRrazlhRlNjNXZDX0ZHd3RnUldXTUZmbGNuYXJYMUV2SFVvWEZsVWRuajcxazZ5WmZ3eEg5TEMtMVVIMXB1V0ppNHA4VEIyQzN0c0hmZDNjaWFLTE81d3IxLXZQeWVJWjhzWTNrUXBzU0IwYXhaX3NqUXkwNTJmMS1yZlhiaGNPRVUxcGZ0RmNKVFhRRVZrQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizgFBVV95cUxPdUg5OUtKZEFWWE1PU3dHYURRTThhbS1fWTM2YzdIekQyTTIwU1daMl8wSW5XNTl4aklKSWlxVHRrazlhRlNjNXZDX0ZHd3RnUldXTUZmbGNuYXJYMUV2SFVvWEZsVWRuajcxazZ5WmZ3eEg5TEMtMVVIMXB1V0ppNHA4VEIyQzN0c0hmZDNjaWFLTE81d3IxLXZQeWVJWjhzWTNrUXBzU0IwYXhaX3NqUXkwNTJmMS1yZlhiaGNPRVUxcGZ0RmNKVFhRRVZrQQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "중국, AI 기업에 Nvidia H200 구매 허용",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQRlNtV2pJdEhRb0U4NTlpWU5vMnZqYWNTTUZ2clRfUVRZY0FXTzZMN1pWNVNXZU1FZDlnS3A4RFBhX1lRbWNZcEhZbUV1S0JVdkFiaGdyS2dFakY5NW1LeXRnMVF4dVNITmIwbXZkYzI4SVdvV19leEVlNXFVRndUMS00bWVzT3ZONll3OGVpUDRFSklIOW1JVTROR29SUWZqQXhJekRweUlzTFRzOHRtLQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxQRlNtV2pJdEhRb0U4NTlpWU5vMnZqYWNTTUZ2clRfUVRZY0FXTzZMN1pWNVNXZU1FZDlnS3A4RFBhX1lRbWNZcEhZbUV1S0JVdkFiaGdyS2dFakY5NW1LeXRnMVF4dVNITmIwbXZkYzI4SVdvV19leEVlNXFVRndUMS00bWVzT3ZONll3OGVpUDRFSklIOW1JVTROR29SUWZqQXhJekRweUlzTFRzOHRtLQ%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "텍사스 전력을 강화하려는 Dell Scion",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOU3N4bGp0RGJBdHNUR0xTWXVGQ0JoS1Ytcm42eW9ieUFaTE45bG9Uc3VoeFN2TUoxYmxKazAySVhBekR0b3ZIdTJGdzFIdjRVd09jWk9NLXFpWld3WmFSN1I3WlFEV0VSd1kxREJBaVBYRG40V203WU9fYmlodGpoRFRQc0dVM283VWRLQlJGY1hsUXFWOW42Z1M4VmxTR3BIZ1VJT05GWFB6Zw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxOU3N4bGp0RGJBdHNUR0xTWXVGQ0JoS1Ytcm42eW9ieUFaTE45bG9Uc3VoeFN2TUoxYmxKazAySVhBekR0b3ZIdTJGdzFIdjRVd09jWk9NLXFpWld3WmFSN1I3WlFEV0VSd1kxREJBaVBYRG40V203WU9fYmlodGpoRFRQc0dVM283VWRLQlJGY1hsUXFWOW42Z1M4VmxTR3BIZ1VJT05GWFB6Zw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "브라질 선거가 결선투표로 향하는 것을 지켜보고 Bessent는 수익률(회), AI에 대한 우려를 경시했습니다",
          "original_url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQYmtPcTIzQnJTRUUzT3didFFOS1UwNjhmTVVUTnRsUUZHQ3A3SmRlZjlZNHVSLTc0LThuSEQtVjRtTzlfS2R6cnRNWlo0N2hVWEFvNW1YNFRwRmdOTkF6RFo4UjNHejJfWG9hOWwxeFVrUm5YcTlkM2Z4eTR2azJzV3U1ZXZ4UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihgFBVV95cUxQYmtPcTIzQnJTRUUzT3didFFOS1UwNjhmTVVUTnRsUUZHQ3A3SmRlZjlZNHVSLTc0LThuSEQtVjRtTzlfS2R6cnRNWlo0N2hVWEFvNW1YNFRwRmdOTkF6RFo4UjNHejJfWG9hOWwxeFVrUm5YcTlkM2Z4eTR2azJzV3U1ZXZ4UQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:42"
    },
    {
      "source": "Reuters",
      "title_ko": "Morgan Stanley는 AI 전력 위기가 칩 공급망에 영향을 미치면서 Nvidia, Broadcom이 보호를 받고 있다고 말합니다.",
      "title_en": "Nvidia, Broadcom shielded as AI power crunch hits chip supply chain, says Morgan Stanley",
      "summary_ko": "Morgan Stanley Reuters는 AI 전력 위기가 칩 공급망에 영향을 미치면서 엔비디아와 브로드컴이 보호받고 있다고 밝혔습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Reuters뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOMF9lcTkxVU5OWUp5THhibUJWc3U0MWo5c2dreS02dFk3TGt4SlBXLVdpX0htOV85SnVsc3RUZjZJZDJac3p3bFgzS05uU2hjVXh5N0RjcFVtQml0TnBRSllwREVDdUVFOTBoTTRMT01RMnVUNGQtZk1ZY0ZIdUZHWHNBbjlaMk10dEpJZ3J5eTZHYjlDQW9JdEg4STBBLVNYNlFRb1J1aUJudHJkS2lmT0otSUJHdE5wVnJaXw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxOMF9lcTkxVU5OWUp5THhibUJWc3U0MWo5c2dreS02dFk3TGt4SlBXLVdpX0htOV85SnVsc3RUZjZJZDJac3p3bFgzS05uU2hjVXh5N0RjcFVtQml0TnBRSllwREVDdUVFOTBoTTRMT01RMnVUNGQtZk1ZY0ZIdUZHWHNBbjlaMk10dEpJZ3J5eTZHYjlDQW9JdEg4STBBLVNYNlFRb1J1aUJudHJkS2lmT0otSUJHdE5wVnJaXw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 05 Oct 2026 14:15:59 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 가치 평가는 AI 랠리가 거품이 아니라는 것을 보여준다고 DBS는 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNMTFROVdldzRQOElVR0dxRXh6S2ZLNnZHdHFxS09pci00ZWtQSzhiLWQ0ZlFRcVpQdW9rNzlaTlZVLUJ0ekxDdEhxclNRUGI0RVhNYlpoYXNXWFQtdzZDTzgwYnByaDV3eFV2Q083SlZFd1c0eER0VXRGRnpWUURycnhYV2hOQm5sR2wzMFh2MHBtYlhPVzdpQWhkREI0N21ZTllVQmhvZVZ4eENz?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxNMTFROVdldzRQOElVR0dxRXh6S2ZLNnZHdHFxS09pci00ZWtQSzhiLWQ0ZlFRcVpQdW9rNzlaTlZVLUJ0ekxDdEhxclNRUGI0RVhNYlpoYXNXWFQtdzZDTzgwYnByaDV3eFV2Q083SlZFd1c0eER0VXRGRnpWUURycnhYV2hOQm5sR2wzMFh2MHBtYlhPVzdpQWhkREI0N21ZTllVQmhvZVZ4eENz%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "DeepSeek, Nvidia를 대체할 수 있는 Huawei AI 칩 도구 공개",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPdVlMbU1WWGh0VkFFanFnSF90Z3dRRGlFcEJzYnZJZExZb2VqSy11a2V2MXZHQ3JuQ3lVVU5UeS1VQTJqSVY4WTNLLUNXZl9nWlZXbzBxLUsxNktKV2dLRFNsWC14eE9SaGw4NzhDSmVRUU9FZzF0c3c5bVlSMTJ3dzU4akpnYmpleHdYeEJ2Q1JyZTY4ZlMybHhCcVUxRkxGb0pEUzdjdGVvMGZhc1l3UFhLVE4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxPdVlMbU1WWGh0VkFFanFnSF90Z3dRRGlFcEJzYnZJZExZb2VqSy11a2V2MXZHQ3JuQ3lVVU5UeS1VQTJqSVY4WTNLLUNXZl9nWlZXbzBxLUsxNktKV2dLRFNsWC14eE9SaGw4NzhDSmVRUU9FZzF0c3c5bVlSMTJ3dzU4akpnYmpleHdYeEJ2Q1JyZTY4ZlMybHhCcVUxRkxGb0pEUzdjdGVvMGZhc1l3UFhLVE4%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia, Hugging Face 해킹을 막을 수 있는 AI 안전 소프트웨어 출시",
          "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNSVREakRaN2V6OWo0bzNFcVBHb1VZMzRVS29mcWF4XzZwSmdxLVRublBqSTE5ZlNBaHBKb0lTU1o2SWV0V0t1U3M3TVl1ZnlJWGVJRGxKclM5RkphYzhzU3FlNkZHNDk3TUZhdW54dGtydmR3MFR2ZFVZdWItaVpsNjZYX2hIbjVHcTM0ZTVqLVd6UHV2OGY4eFM4ZW1va1pCSF90VzlZd3BSUjVkY1RJRzV2ZGFEUnlnbDY1d0ZjOFZoYXBVRU5YZEM0Zmk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizAFBVV95cUxNSVREakRaN2V6OWo0bzNFcVBHb1VZMzRVS29mcWF4XzZwSmdxLVRublBqSTE5ZlNBaHBKb0lTU1o2SWV0V0t1U3M3TVl1ZnlJWGVJRGxKclM5RkphYzhzU3FlNkZHNDk3TUZhdW54dGtydmR3MFR2ZFVZdWItaVpsNjZYX2hIbjVHcTM0ZTVqLVd6UHV2OGY4eFM4ZW1va1pCSF90VzlZd3BSUjVkY1RJRzV2ZGFEUnlnbDY1d0ZjOFZoYXBVRU5YZEM0Zmk%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "엔비디아, 잠재적인 거래를 위해 칩 스타트업의 반란과 대화 중",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNYVdKT3RrZ2R6RXppSndKZ1E2NFRCUHp2Y0pHUkpxMFphcGJhWkxHZlgxTUd5cGt2Y3ZwLTFTbXBEeGlMWnJhX2ZnMW8yc2Myck5wU2pRaFdFUzJOQWYwdzFDS3F4UXJ1Qjg2MWpWOE9qaEpHTUtCS1FwLUJ3cVM3S1g2a2NoREUtWUFKLTBTelB1SWJicVFMcDZ0amR4NldhS1FGRkxKMllTX25hdE83SUF1N1o?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxNYVdKT3RrZ2R6RXppSndKZ1E2NFRCUHp2Y0pHUkpxMFphcGJhWkxHZlgxTUd5cGt2Y3ZwLTFTbXBEeGlMWnJhX2ZnMW8yc2Myck5wU2pRaFdFUzJOQWYwdzFDS3F4UXJ1Qjg2MWpWOE9qaEpHTUtCS1FwLUJ3cVM3S1g2a2NoREUtWUFKLTBTelB1SWJicVFMcDZ0amR4NldhS1FGRkxKMllTX25hdE83SUF1N1o%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:46"
    },
    {
      "source": "Reuters",
      "title_ko": "엔비디아",
      "title_en": "Nvidia-backed Reflection unveils first AI model to take on Chinese open models",
      "summary_ko": "엔비디아 관련 핵심 동향이 발표되었습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Reuters뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNQ2FQR2h6dGd0eThzSjRKNENDQV9YMnpIZlVfWTNVV2tlSTEzZDJyU09MZ2s1Sk9lWVRESzdwQmdfQjlsRzZPVmJuUzRLQkp5UXhVUHpia2pZWHVfRmQyR21COWx2dGZxR0pzUmxvT3RUUDVhX1JRWm1LQXRfVmV5bGpIMFYtRHFoNW1UMlV3Q3h5X19QaVAxMnJ1SkxrU0pKVnJYcW9LNTNENVJldFc1VTNoRHdRRmNkVFM4?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuwFBVV95cUxNQ2FQR2h6dGd0eThzSjRKNENDQV9YMnpIZlVfWTNVV2tlSTEzZDJyU09MZ2s1Sk9lWVRESzdwQmdfQjlsRzZPVmJuUzRLQkp5UXhVUHpia2pZWHVfRmQyR21COWx2dGZxR0pzUmxvT3RUUDVhX1JRWm1LQXRfVmV5bGpIMFYtRHFoNW1UMlV3Q3h5X19QaVAxMnJ1SkxrU0pKVnJYcW9LNTNENVJldFc1VTNoRHdRRmNkVFM4%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 05 Oct 2026 20:54:09 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "엔비디아",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPS1BvX0FBT0xBVGJmZGtmMjhGQVlkWXBoYzdvZEF3d3BXaklYQkFaQW0zZHBqTHJaVFhJTzRqSS1zYTdIcERqVFRjOUtIZFZHRXRRclg4c0VScG5NQ3JYX1lyTkstTlFzOVlOd0p4MDhZV1diTV9DQjZUZEtxLXdxelZ0U2FlOHZvUE0xTHBUSXVaLUxiQTVMcUFobHdUczdQMmVaTE9MeGM5MUhDUW5lclpkMA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPS1BvX0FBT0xBVGJmZGtmMjhGQVlkWXBoYzdvZEF3d3BXaklYQkFaQW0zZHBqTHJaVFhJTzRqSS1zYTdIcERqVFRjOUtIZFZHRXRRclg4c0VScG5NQ3JYX1lyTkstTlFzOVlOd0p4MDhZV1diTV9DQjZUZEtxLXdxelZ0U2FlOHZvUE0xTHBUSXVaLUxiQTVMcUFobHdUczdQMmVaTE9MeGM5MUhDUW5lclpkMA%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia 파트너 Hon Hai, AI 열풍으로 매출 추정치 상회",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNVzlNa1VEX2xXMTVORThGeXAyQVQ1ZTh3VlY4VFZYVzVzVUVlQ3Q1OEo2THN6Ym40MUEtRmJfX19xbFREMHkwQ3U5QmFhbUs4ckRhM3J3VXhvMEhWUWRKRTZlOWdwSm1nOEZhOU9JS0JmbU80by1CdWk0dG5YTkZobmt6MUtFc2VqQ3hwekVJMFc0NGdsRGZUR1dDb2tiTnFyXzJXTkN4MDNmMVdWTDFOUWJ3?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNVzlNa1VEX2xXMTVORThGeXAyQVQ1ZTh3VlY4VFZYVzVzVUVlQ3Q1OEo2THN6Ym40MUEtRmJfX19xbFREMHkwQ3U5QmFhbUs4ckRhM3J3VXhvMEhWUWRKRTZlOWdwSm1nOEZhOU9JS0JmbU80by1CdWk0dG5YTkZobmt6MUtFc2VqQ3hwekVJMFc0NGdsRGZUR1dDb2tiTnFyXzJXTkN4MDNmMVdWTDFOUWJ3%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "엔비디아, AI 에이전트의 잘못된 작동을 막기 위해 설계된 시스템 출시",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPNXp5U1NScVBhb29ldkZHSmNLS1pYVHBvRGhXTHNuSDh2QXpkY2hUeDBqTjBFekpaOVA4YW9vcEo0endNWjhDb2dSQ0V1NVJGNTZUMEowT0dlX2liaEE3VmV0UGtpdHRHNGhvSUlERTkyY3BaU0o3cUhCdlktdUxOcHljY21yTUY3ekJoclh2SWJQd0kwV05ua0ItdzNkTklTS25YWUU2ZkZ5RFRNUC03bEp5Wko?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxPNXp5U1NScVBhb29ldkZHSmNLS1pYVHBvRGhXTHNuSDh2QXpkY2hUeDBqTjBFekpaOVA4YW9vcEo0endNWjhDb2dSQ0V1NVJGNTZUMEowT0dlX2liaEE3VmV0UGtpdHRHNGhvSUlERTkyY3BaU0o3cUhCdlktdUxOcHljY21yTUY3ekJoclh2SWJQd0kwV05ua0ItdzNkTklTS25YWUU2ZkZ5RFRNUC03bEp5Wko%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "BofA는 Nvidia Trading을 AI 위험에 대해 최대 50% 할인된 가격으로 보고 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNQk9Cb09xMFlNSGtYajJoVkRCMVFXdFJCWXVWcmNQZnBEV3Qzei1oZEVMQUhkNDZ6X3RBUnk0UHc4b0VQaWlhS0ZqUnBJNXpVX3dsU3FESW5KTDZOZjNvLVlwTnl3VXNkWWQzR1NsSl8wczNrR0xEcmgtQ1RjeDRsdlFlTEt2RHUybGw4WXlBVjhGcmQ4am9qelFhMVhha1FvamF2S2k1TTVZTjJK?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxNQk9Cb09xMFlNSGtYajJoVkRCMVFXdFJCWXVWcmNQZnBEV3Qzei1oZEVMQUhkNDZ6X3RBUnk0UHc4b0VQaWlhS0ZqUnBJNXpVX3dsU3FESW5KTDZOZjNvLVlwTnl3VXNkWWQzR1NsSl8wczNrR0xEcmgtQ1RjeDRsdlFlTEt2RHUybGw4WXlBVjhGcmQ4am9qelFhMVhha1FvamF2S2k1TTVZTjJK%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-06 20:01:49"
    }
  ]
};
window.__KEYWORDS_CONFIG__ = {
  "score_threshold": 20,
  "swell_keywords": [
    "tga",
    "재무부 일반계정",
    "현금 잔고",
    "스콧 베센트",
    "베센트",
    "40조",
    "40 trillion",
    "국가부채",
    "national debt",
    "부채 한도",
    "debt ceiling",
    "스테이블코인",
    "stablecoin",
    "테더",
    "서클",
    "단기국채",
    "t-bills",
    "hbm",
    "엔비디아",
    "nvidia",
    "tsmc",
    "딥시크",
    "deepseek",
    "전력망",
    "power grid",
    "변압기",
    "transformer",
    "smr",
    "원전",
    "구리",
    "copper",
    "닥터 코퍼",
    "전력",
    "전력난",
    "전력 부족",
    "power shortage",
    "electricity",
    "희토류",
    "히토류",
    "rare earth",
    "rare earths",
    "핵심광물",
    "critical minerals",
    "그린란드",
    "greenland",
    "1500원",
    "1600원",
    "패권",
    "이란",
    "iran",
    "호르무즈",
    "hormuz",
    "strait of hormuz",
    "중동",
    "middle east",
    "우크라이나",
    "ukraine",
    "러시아 우크라이나",
    "russia ukraine",
    "지정학"
  ],
  "impact_keywords": [
    "fomc",
    "금리 결정",
    "금리 인하",
    "금리 인상",
    "rate cut",
    "rate hike",
    "파월",
    "powell",
    "긴급",
    "shock",
    "쇼크",
    "surprise",
    "서프라이즈",
    "사상 최대",
    "record high",
    "경고",
    "warning",
    "폭등",
    "폭락",
    "crash",
    "surge",
    "순매도",
    "순매수",
    "외국인"
  ]
};
window.__SOURCES_CONFIG__ = [
  {
    "id": "fed_official",
    "name": "🏛️ 미국 연방준비제도 (Federal Reserve)",
    "website": "https://www.federalreserve.gov",
    "domain": "federalreserve.gov",
    "description": "연준 공식 성명서, 통화정책 결정문, 파월 의장 연설문 및 베이지북",
    "enabled": true
  },
  {
    "id": "ny_fed",
    "name": "📑 뉴욕 연방준비은행 (NY Fed Liberty Street)",
    "website": "https://libertystreeteconomics.newyorkfed.org",
    "domain": "libertystreeteconomics.newyorkfed.org",
    "description": "뉴욕 연은 유동성, 재정적자, 국채 시장 심층 연구 리포트",
    "enabled": true
  },
  {
    "id": "bloomberg",
    "name": "🌐 Bloomberg (블룸버그)",
    "website": "https://www.bloomberg.com",
    "domain": "bloomberg.com",
    "description": "글로벌 1티어 경제 매체 (거시경제, 연준 금리, 채권, 원자재, 빅테크)",
    "enabled": true
  },
  {
    "id": "reuters",
    "name": "🌐 Reuters (로이터 통신)",
    "website": "https://www.reuters.com",
    "domain": "reuters.com",
    "description": "글로벌 통화정책, 중앙은행 금리 결정, 지정학 긴급 속보",
    "enabled": true
  },
  {
    "id": "wsj",
    "name": "🇺🇸 Wall Street Journal (월스트리트저널)",
    "website": "https://www.wsj.com",
    "domain": "wsj.com",
    "description": "미국 실물 경제, 40조 달러 국가부채, 재무부 국채 발행(QRA), 기업 동향",
    "enabled": true
  },
  {
    "id": "cnbc",
    "name": "📺 CNBC (미국 CNBC)",
    "website": "https://www.cnbc.com",
    "domain": "cnbc.com",
    "description": "미국 금융시장 실시간 거시, 채권수익률, 환율, 고용/소비자물가(CPI)",
    "enabled": true
  },
  {
    "id": "ft",
    "name": "🇬🇧 Financial Times (파이낸셜타임스)",
    "website": "https://www.ft.com",
    "domain": "ft.com",
    "description": "영국/유럽 및 글로벌 매크로 경제, 국제 금융시장 심층 분석",
    "enabled": true
  },
  {
    "id": "economist",
    "name": "🇬🇧 The Economist (이코노미스트)",
    "website": "https://www.economist.com",
    "domain": "economist.com",
    "description": "글로벌 매크로 메가트렌드, 지정학 구조 분석 및 경제 전망",
    "enabled": true
  },
  {
    "id": "nytimes_biz",
    "name": "📰 New York Times Business (뉴욕타임스)",
    "website": "https://www.nytimes.com/section/business",
    "domain": "nytimes.com",
    "description": "미국 경제정책, 무역 갈등, 테크 산업 규제 및 거시 트렌드",
    "enabled": true
  },
  {
    "id": "ecb",
    "name": "🇪🇺 ECB (유럽중앙은행)",
    "website": "https://www.ecb.europa.eu",
    "domain": "ecb.europa.eu",
    "description": "유로존 기준금리 결정, 유럽 물가 및 통화정책 공식 발표",
    "enabled": true
  },
  {
    "id": "boj",
    "name": "🇯🇵 BOJ (일본은행)",
    "website": "https://www.boj.or.jp",
    "domain": "boj.or.jp",
    "description": "일본은행 금리 결정, 엔화 정책, 엔캐리 트레이드 관련 공식 발표",
    "enabled": true
  },
  {
    "id": "nikkei",
    "name": "🇯🇵 Nikkei Asia (닛케이 아시아)",
    "website": "https://asia.nikkei.com",
    "domain": "asia.nikkei.com",
    "description": "아시아 경제, 글로벌 반도체/HBM 공급망, 아시아 환율 동향",
    "enabled": true
  },
  {
    "id": "caixin",
    "name": "🇨🇳 Caixin Global (중국 차이신)",
    "website": "https://www.caixinglobal.com",
    "domain": "caixinglobal.com",
    "description": "중국 실물 경제지표, 부동산 부채, 통화정책 및 금융시장 전문",
    "enabled": true
  },
  {
    "id": "scmp",
    "name": "🇨🇳 SCMP (사우스차이나모닝포스트)",
    "website": "https://www.scmp.com",
    "domain": "scmp.com",
    "description": "중국 거시경제, 미중 기술/원자재 패권 갈등, 위안화 환율",
    "enabled": true
  },
  {
    "id": "goldman_sachs",
    "name": "📊 Goldman Sachs Research (골드만삭스)",
    "website": "https://www.goldmansachs.com/insights",
    "domain": "goldmansachs.com",
    "description": "월가 대표 투자은행 글로벌 거시 전망 및 섹터별 인사이트 리포트",
    "enabled": true
  },
  {
    "id": "imf",
    "name": "🌐 IMF (국제통화기금)",
    "website": "https://www.imf.org",
    "domain": "imf.org",
    "description": "글로벌 금융안정 보고서(GFSR), 세계 경제성장률 전망(WEO)",
    "enabled": true
  },
  {
    "id": "bis",
    "name": "🌐 BIS (국제결제은행)",
    "website": "https://www.bis.org",
    "domain": "bis.org",
    "description": "중앙은행들의 중앙은행, 글로벌 잉여 유동성 및 은행 건전성 분석",
    "enabled": true
  },
  {
    "id": "bok",
    "name": "🏛️ 한국은행 (Bank of Korea)",
    "website": "https://www.bok.or.kr",
    "domain": "bok.or.kr",
    "description": "금융통화위원회 기준금리 결정, 국내 경제전망 및 통화신용정책 보고서",
    "enabled": true
  },
  {
    "id": "einfomax",
    "name": "🇰🇷 연합인포맥스",
    "website": "https://news.einfomax.co.kr",
    "domain": "einfomax.co.kr",
    "description": "외환(달러/원), 채권 금리, 외국인 순매수/선물 수급 실시간 전문",
    "enabled": true
  },
  {
    "id": "hankyung",
    "name": "🇰🇷 한국경제신문 (한경)",
    "website": "https://www.hankyung.com",
    "domain": "hankyung.com",
    "description": "국내외 증시, 반도체/수출입, 거시경제 및 부동산/가계부채 동향",
    "enabled": true
  },
  {
    "id": "mk",
    "name": "🇰🇷 매일경제신문 (매경)",
    "website": "https://www.mk.co.kr",
    "domain": "mk.co.kr",
    "description": "국내외 거시경제, 외환 및 증시, 기업 투자 사이클 심층 보도",
    "enabled": true
  },
  {
    "id": "yna",
    "name": "🇰🇷 연합뉴스 (경제/금융)",
    "website": "https://www.yna.co.kr",
    "domain": "yna.co.kr",
    "description": "국내 수출입 펀더멘털, 소비자물가(CPI), 정부 경제재정 정책 속보",
    "enabled": true
  },
  {
    "id": "chosunbiz",
    "name": "🇰🇷 조선비즈",
    "website": "https://biz.chosun.com",
    "domain": "chosunbiz.com",
    "description": "국내외 거시경제, IT/반도체 산업, 금융 및 글로벌 공급망",
    "enabled": true
  },
  {
    "id": "the_information",
    "name": "🤖 The Information / Tech (실리콘밸리 테크)",
    "website": "https://www.theinformation.com",
    "domain": "theinformation.com",
    "description": "글로벌 AI 빅테크, AI 칩(GPU/HBM), 데이터센터 전력 인프라 특종 보도",
    "enabled": true
  }
];
