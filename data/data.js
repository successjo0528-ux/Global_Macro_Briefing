window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-10-12 05:06:03",
    "date_str": "2026년 10월 12일 (월)",
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
      "price": 4.057,
      "previous_close": 3.982,
      "change": 0.075,
      "change_percent": 1.88,
      "display_price": "4.057%",
      "status": "up",
      "history": [
        3.982,
        3.993,
        4.018,
        4.037,
        4.037,
        4.043,
        4.057
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-10-11 20:00:33"
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
      "price": 5.244,
      "previous_close": 5.237,
      "change": 0.007,
      "change_percent": 0.13,
      "display_price": "5.244%",
      "status": "up",
      "history": [
        5.237,
        5.277,
        5.311,
        5.269,
        5.277,
        5.231,
        5.244
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-10-11 20:00:34",
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
      "price": 5.6,
      "previous_close": 5.603,
      "change": -0.003,
      "change_percent": -0.05,
      "display_price": "5.600%",
      "status": "down",
      "history": [
        5.603,
        5.63,
        5.665,
        5.641,
        5.661,
        5.606,
        5.6
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-10-11 20:00:34"
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
      "price": 102.231,
      "previous_close": 102.17,
      "change": 0.061,
      "change_percent": 0.06,
      "display_price": "102.23 pt",
      "status": "up",
      "history": [
        102.17,
        101.83,
        102.24,
        102.14,
        102.21
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-10-11 20:00:34"
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
      "price": 158.246,
      "previous_close": 157.558,
      "change": 0.688,
      "change_percent": 0.44,
      "display_price": "158.25엔",
      "status": "up",
      "history": [
        157.927,
        157.734,
        157.963,
        158.296,
        158.06,
        158.063,
        158.246
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-10-11 20:00:34"
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
      "price": 4216.3,
      "previous_close": 4156.8,
      "change": 59.5,
      "change_percent": 1.43,
      "display_price": "$4,216.30",
      "status": "up",
      "history": [
        4156.8,
        4187.1,
        4140.7,
        4157.0,
        4216.3
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-10-11 20:00:34"
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
      "price": 91.85,
      "previous_close": 89.43,
      "change": 2.42,
      "change_percent": 2.71,
      "display_price": "$91.85",
      "status": "up",
      "history": [
        89.43,
        89.44,
        88.28,
        91.49,
        91.85
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-10-11 20:00:34"
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
      "price": 83585.54,
      "previous_close": 85786.59,
      "change": -2201.05,
      "change_percent": -2.57,
      "display_price": "$83,586",
      "status": "down",
      "history": [
        85786.594,
        85557.562,
        83275.93,
        81676.336,
        82546.32,
        82912.227,
        83585.539
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-10-11 20:00:34"
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
      "price": 885.8,
      "previous_close": 301.4,
      "change": 584.4,
      "change_percent": 193.9,
      "display_price": "$885.8B (약 8,858억$)",
      "status": "up",
      "history": [
        19.0,
        19.4,
        885.4,
        887.5,
        299.7,
        301.4,
        885.8
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-10-11 20:00:35"
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
      "price": 7811.54,
      "previous_close": 7651.54,
      "change": 160.0,
      "change_percent": 2.09,
      "display_price": "7,811.54",
      "status": "up",
      "history": [
        7666.45,
        7722.72,
        7773.95,
        7818.93,
        7801.77,
        7765.36,
        7811.54
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-10-11 20:00:35"
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
      "price": 30883.148,
      "previous_close": 30408.5,
      "change": 474.648,
      "change_percent": 1.56,
      "display_price": "30,883.15",
      "status": "up",
      "history": [
        30501.561,
        30807.93,
        31076.439,
        31224.471,
        31160.08,
        30725.811,
        30883.15
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-10-11 20:00:36"
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
      "price": 12572.42,
      "previous_close": 12628.62,
      "change": -56.2,
      "change_percent": -0.45,
      "display_price": "12,572.42",
      "status": "down",
      "history": [
        12829.0,
        13136.67,
        13172.74,
        13217.82,
        13066.15,
        12623.71,
        12572.42
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-10-11 20:00:36"
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
      "price": 14.84,
      "previous_close": 16.39,
      "change": -1.55,
      "change_percent": -9.46,
      "display_price": "14.84",
      "status": "down",
      "history": [
        16.39,
        15.31,
        15.52,
        15.01,
        15.08,
        15.41,
        14.84
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-10-11 20:00:36"
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
      "price": 1340.02,
      "previous_close": 1356.84,
      "change": -16.82,
      "change_percent": -1.24,
      "display_price": "1,340.02원",
      "status": "down",
      "history": [
        1360.59,
        1342.56,
        1343.75,
        1339.74,
        1339.08,
        1342.99,
        1340.02
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-10-11 20:00:36",
      "fx_averages": {
        "avg_1y": 1453.2,
        "avg_3y": 1401.8
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
      "price": 6625.93,
      "previous_close": 6889.74,
      "change": -263.81,
      "change_percent": -3.83,
      "display_price": "6,625.93",
      "status": "down",
      "history": [
        6870.81,
        6838.04,
        6971.35,
        7003.74,
        6941.39,
        6803.9,
        6625.93
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-10-11 20:00:36"
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
      "price": 892.27,
      "previous_close": 846.58,
      "change": 45.69,
      "change_percent": 5.4,
      "display_price": "892.27",
      "status": "up",
      "history": [
        849.8,
        855.91,
        894.29,
        893.29,
        919.92,
        898.43,
        892.27
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-10-11 20:00:36"
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
      "updated_at": "2026-10-11 20:00:37"
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
      "updated_at": "2026-10-11 20:00:37"
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
      "price": 177.24,
      "previous_close": 182.78,
      "change": -5.54,
      "change_percent": -3.03,
      "display_price": "$177.24",
      "status": "down",
      "history": [
        186.11,
        191.88,
        191.46,
        186.4,
        183.69,
        176.29,
        177.24
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-10-11 20:00:38"
    }
  ],
  "news": [
    {
      "source": "Reuters",
      "title_ko": "연준(Fed)'s Cook lawyers say hearing will show no mortgage fraud case",
      "title_en": "Fed's Cook lawyers say hearing will show no mortgage fraud case",
      "summary_ko": "연준(Fed)'s Cook lawyers say hearing will show no mortgage fraud case Reuters. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 CNBC, Yahoo Finance 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQMkNMTVRSYXRhNXNPNW1Ma2ZZY2pLSU42ZERMblNFOFJlMm41ckNZUkRtZlNlZlBOX1BZZEEzdno0R294aDVXWVY2czNOQU1wNFpTZGtUS0JibTF3OHVubVI2a2N3QXFYSnBrZXNPTE4wV0p5QzVTNkFVN3EyUEVDVlRfUnREdFRuc1EtMzJxREpvVVU5cUdhUHctdFg4WUVMRlRTSjlxTHBENE9QLTR1b3lGTTdkUQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxQMkNMTVRSYXRhNXNPNW1Ma2ZZY2pLSU42ZERMblNFOFJlMm41ckNZUkRtZlNlZlBOX1BZZEEzdno0R294aDVXWVY2czNOQU1wNFpTZGtUS0JibTF3OHVubVI2a2N3QXFYSnBrZXNPTE4wV0p5QzVTNkFVN3EyUEVDVlRfUnREdFRuc1EtMzJxREpvVVU5cUdhUHctdFg4WUVMRlRTSjlxTHBENE9QLTR1b3lGTTdkUQ%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 09 Oct 2026 15:13:55 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) holds 기준금리 steady: Here's what that means for credit cards, savings rates, mortgages and car loans",
          "original_url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE16LVNnWnBCazkwbXB6djJNMFgxMC1Ja190Y3V0RXNPSnNKcWw5S0xoNjY1U2l5Snc2ZFM4Snhvc2FNUGtnQ2xNMVMwT2ZWN3o4S0g0TzRSVy1TVURpX3ZUU3NKYmJMQTFQc0lUbGRUZXdTVFYydFV2clR30gF_QVVfeXFMTmthOXhBdS14eUNpaEtHbGZ2TXpRNzFpSEoxMGN1MVg3OV91aUpQc01mQ05iYml1OGJOUmczbldCWllXTExlRWpKTk1BdTg3NU1pcVVJMm9taEpnMC1DaUZzSkVxcmFDMUJkT1pDNXdDWHNoOU5vcGVWaklaTWZKSQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiekFVX3lxTE16LVNnWnBCazkwbXB6djJNMFgxMC1Ja190Y3V0RXNPSnNKcWw5S0xoNjY1U2l5Snc2ZFM4Snhvc2FNUGtnQ2xNMVMwT2ZWN3o4S0g0TzRSVy1TVURpX3ZUU3NKYmJMQTFQc0lUbGRUZXdTVFYydFV2clR30gF_QVVfeXFMTmthOXhBdS14eUNpaEtHbGZ2TXpRNzFpSEoxMGN1MVg3OV91aUpQc01mQ05iYml1OGJOUmczbldCWllXTExlRWpKTk1BdTg3NU1pcVVJMm9taEpnMC1DaUZzSkVxcmFDMUJkT1pDNXdDWHNoOU5vcGVWaklaTWZKSQ%3Foc%3D5"
        },
        {
          "source": "Yahoo Finance",
          "title_ko": "연준(Fed)'s Musalem says lowering inflation will require more rate hikes",
          "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPeC1fM3BUQmhweHdpaklHUUZ4Q204bmVmY0xiWndDUzB4LWI1bTMxTmx6bnFGbFlKalJyOGlFQk50ekJqNGNvYUxINkJObzJNS2FDNWVJTUhDQzJDdE94NE4xbUFNNEhDSTFBNEVSaVA2QzdiWENRaS1MemltZEx2NzAzcktLWGY1cGg0SHA3MGtBNG5VcUd5OEhyZGI5cTVQLVNN?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxPeC1fM3BUQmhweHdpaklHUUZ4Q204bmVmY0xiWndDUzB4LWI1bTMxTmx6bnFGbFlKalJyOGlFQk50ekJqNGNvYUxINkJObzJNS2FDNWVJTUhDQzJDdE94NE4xbUFNNEhDSTFBNEVSaVA2QzdiWENRaS1MemltZEx2NzAzcktLWGY1cGg0SHA3MGtBNG5VcUd5OEhyZGI5cTVQLVNN%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "Trump ramps up battle to fire 연준(Fed)’s Lisa Cook. Her lawyers say there’s no basis to remove her.",
          "original_url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQTmxOUW9NMFk5ckZkRWhJMTRXZV9XN3Y0LXBCVG5UdXd2eFp5b2hBVjNIX3l4MjFQLWtIV0hrclZPVnZFWWxFbS1oQVlfLWxTdXZ0RUlHLWZLUkR2TlFXNTJSakFUM1JxVFFBaklSNHA4a1didm0wcUY0eWY0Mm5yM2xpTkZiUWx4TUJSREl2WWdremNlX19QUFhabDI0eDV2Y3p5aEFHQ2lOMjZIcUM2dHh6Q1lBN2t2dnpBTnpfbno4dTFTN1UzaVVMajlsQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizgFBVV95cUxQTmxOUW9NMFk5ckZkRWhJMTRXZV9XN3Y0LXBCVG5UdXd2eFp5b2hBVjNIX3l4MjFQLWtIV0hrclZPVnZFWWxFbS1oQVlfLWxTdXZ0RUlHLWZLUkR2TlFXNTJSakFUM1JxVFFBaklSNHA4a1didm0wcUY0eWY0Mm5yM2xpTkZiUWx4TUJSREl2WWdremNlX19QUFhabDI0eDV2Y3p5aEFHQ2lOMjZIcUM2dHh6Q1lBN2t2dnpBTnpfbno4dTFTN1UzaVVMajlsQQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:01:06"
    },
    {
      "source": "Bloomberg",
      "title_ko": "연준(Fed) Minutes Show Hawkish Unity Behind September 금리 인상",
      "title_en": "Fed Minutes Show Hawkish Unity Behind September Rate Hike",
      "summary_ko": "연준(Fed) Minutes Show Hawkish Unity Behind September 금리 인상 Bloomberg.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg뿐만 아니라 MarketWatch, Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNc2dJM2Q2bTVvQVNpNUNzSTgzNHJCbWc3Ync3aXEyYmdSVHo1b1JZNHB1UXdGYVY5YWpPTHpDdWtQYjdtbnZOa1k0SzVIeV9SS0ljelRxbUdIWXB5NHBtdk5lUDM1ZWQyUHlNSjFlbVh6Q1lHbm9jdUJCRllMZXdnVWluOHRwV2x4WUdZdHBkU2NuY3BJNWtYS1puYWVtTTQySDR1QXJEaGJrTng2?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxNc2dJM2Q2bTVvQVNpNUNzSTgzNHJCbWc3Ync3aXEyYmdSVHo1b1JZNHB1UXdGYVY5YWpPTHpDdWtQYjdtbnZOa1k0SzVIeV9SS0ljelRxbUdIWXB5NHBtdk5lUDM1ZWQyUHlNSjFlbVh6Q1lHbm9jdUJCRllMZXdnVWluOHRwV2x4WUdZdHBkU2NuY3BJNWtYS1puYWVtTTQySDR1QXJEaGJrTng2%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 07 Oct 2026 18:00:01 GMT",
      "related_articles": [
        {
          "source": "MarketWatch",
          "title_ko": "연준(Fed)’s minutes show no appetite for a series of interest",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNaF9QQWc3MVFwTXJjNGdBRjd0NUZ6aExkdFpqRkxBSThxMUZteXNiSWJDak1qdTdwRXBkNkdQdDRfekQzN243ODFqNUhBQllGV0pQS3pWY090WThXMTVzZmFnc3pBbENCMGJLaVRXSF9zRUZtZ2dzZE0zelF5dzBadldsZm51dVNVaVpHQTNvVHA3Q2wzQWFmemJIOEs1RzZmQUp5N1hKZzJ1Umc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxNaF9QQWc3MVFwTXJjNGdBRjd0NUZ6aExkdFpqRkxBSThxMUZteXNiSWJDak1qdTdwRXBkNkdQdDRfekQzN243ODFqNUhBQllGV0pQS3pWY090WThXMTVzZmFnc3pBbENCMGJLaVRXSF9zRUZtZ2dzZE0zelF5dzBadldsZm51dVNVaVpHQTNvVHA3Q2wzQWFmemJIOEs1RzZmQUp5N1hKZzJ1Umc%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "Opinion: 연준(Fed) minutes coming tomorrow could give markets important clues about future rate hikes",
          "original_url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPV09PMVdnLUY2MmZwd2NJZW1rMjRqQ0JJOTUtQVdEVWxvT2VFYjBmV0RMbER5TFdNNE1HQ3NvMkxVZ0RSOXh3eEIyQVFuQ2RidENKcDBQQVM0UkFRaHlYcFB5S0ZWcW8wWHVuOEdRTEV2alNvYU5qcXRmcGxSX0tUWVJ0N3JjLVBTUHRfa2x1YWdPcFZ0WV9VM0NlM0Y2TW0yMkY5Tlk1WFVybml5MW4tUmhQRFlJUUpvNHdXZE1xWmVzVzdWNk1qSG93?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiygFBVV95cUxPV09PMVdnLUY2MmZwd2NJZW1rMjRqQ0JJOTUtQVdEVWxvT2VFYjBmV0RMbER5TFdNNE1HQ3NvMkxVZ0RSOXh3eEIyQVFuQ2RidENKcDBQQVM0UkFRaHlYcFB5S0ZWcW8wWHVuOEdRTEV2alNvYU5qcXRmcGxSX0tUWVJ0N3JjLVBTUHRfa2x1YWdPcFZ0WV9VM0NlM0Y2TW0yMkY5Tlk1WFVybml5MW4tUmhQRFlJUUpvNHdXZE1xWmVzVzdWNk1qSG93%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "연준(Fed) Minutes Show No Urgency for October Hike",
          "original_url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNTk9UeE52MHVzR05WQU00NU5MVEZNazlHSmxKTkRXc0x3NUF0V0NVWURTVENXVUNnWEtxbC0xMzVENnQySmpRZUpiaXhKM2NLd3l4NUVvMDdqMzNDdzBpaE1tbWYtd2R1SVNqQU1WT1NFdWk4emphX1lHazF5RkMxRkdVdHR2TVhPQnhlR0hR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijgFBVV95cUxNTk9UeE52MHVzR05WQU00NU5MVEZNazlHSmxKTkRXc0x3NUF0V0NVWURTVENXVUNnWEtxbC0xMzVENnQySmpRZUpiaXhKM2NLd3l4NUVvMDdqMzNDdzBpaE1tbWYtd2R1SVNqQU1WT1NFdWk4emphX1lHazF5RkMxRkdVdHR2TVhPQnhlR0hR%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:01:24"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Russia’s Above Target Inflation Clouds Path for New Rate Cuts",
      "title_en": "Russia’s Above Target Inflation Clouds Path for New Rate Cuts",
      "summary_ko": "Russia’s Above Target Inflation Clouds Path for New Rate Cuts Bloomberg.com. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Bloomberg뿐만 아니라 CNBC, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNUDVIWlppLWZ6aHNHc3VHMnZtZ3FyWHRjZENKSlFraVZVWjVsc2hjQld6MzVNNzNHSVE3WFZ6UTdrMTNWemdnWUJmVHQ1eUF2R3hlWWE1MXEzTTRDT2F2NmFuRnNWdGJMZjl6dzVmQjhjTU41TkxmOExFbVF1c2FPSkdvX3cwQWMxN29JUGFPYWRDQkFiT0VZYTRNV0ZESzBsaF82RXF6eEJJTUV2dmRCb3FB?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNUDVIWlppLWZ6aHNHc3VHMnZtZ3FyWHRjZENKSlFraVZVWjVsc2hjQld6MzVNNzNHSVE3WFZ6UTdrMTNWemdnWUJmVHQ1eUF2R3hlWWE1MXEzTTRDT2F2NmFuRnNWdGJMZjl6dzVmQjhjTU41TkxmOExFbVF1c2FPSkdvX3cwQWMxN29JUGFPYWRDQkFiT0VZYTRNV0ZESzBsaF82RXF6eEJJTUV2dmRCb3FB%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 09 Oct 2026 16:13:50 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "India Set for Back-to",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOUlN2V0JBOTJjdFVWTXgySklfUHI3Mkpid0toYXdCclhuY3FyY2ljT09qb0R4b21XZW5wTEVIcTIxaGljeGpfZDVFMnpZcG1BeGhDLXg1WGRvNjJZbXhqOWVKOUF2M25WMmZEdmhrMnllcUF2ZmpkQ3gzNHNyUnk3eWtfS3dVLTd6cUwwMU9iQ2ZELWtZZXloWjg2YU5oOGR3VHpadkppMzhWSlRoYXU2NDVlSQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOUlN2V0JBOTJjdFVWTXgySklfUHI3Mkpid0toYXdCclhuY3FyY2ljT09qb0R4b21XZW5wTEVIcTIxaGljeGpfZDVFMnpZcG1BeGhDLXg1WGRvNjJZbXhqOWVKOUF2M25WMmZEdmhrMnllcUF2ZmpkQ3gzNHNyUnk3eWtfS3dVLTd6cUwwMU9iQ2ZELWtZZXloWjg2YU5oOGR3VHpadkppMzhWSlRoYXU2NDVlSQ%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "Analysis: Hot inflation data sets up a 연준(Fed) 금리 인상. What happens if Warsh wavers",
          "original_url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPUTZyQXZidTZGdVYxeXZXSW0zUmpaREhLeWVUa0dlOEFrUUlnSlN3WmhDQkNiaUJYb29XWDV6eFg4NktmSDJ1M1F3cUIyOU1FbUNwU2VnaXcwRFQ4MUJTQWxGTjk4d1NLYmdfN2FiV2lFd0V2NkEwRWVOUTl0MVF6WnVHeXFXd29nNnRnall30gGTAUFVX3lxTFBhVENSMnExZUdsNFppdExrZHo5TzVoV0VIckoxMVJlTG8xM1NBNEJiQmozT051UllUNVNpSEJ0U3c1MzJWYVF1OU11ZWl4M0RxZi03THNYU19UYTQwRTVkYjhzR0tfcVppTWtIR1FWcTRuc1R5YmpMeUFpYjNueEVWMkRrY184NlpmUTdQY1lidHBscw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijgFBVV95cUxPUTZyQXZidTZGdVYxeXZXSW0zUmpaREhLeWVUa0dlOEFrUUlnSlN3WmhDQkNiaUJYb29XWDV6eFg4NktmSDJ1M1F3cUIyOU1FbUNwU2VnaXcwRFQ4MUJTQWxGTjk4d1NLYmdfN2FiV2lFd0V2NkEwRWVOUTl0MVF6WnVHeXFXd29nNnRnall30gGTAUFVX3lxTFBhVENSMnExZUdsNFppdExrZHo5TzVoV0VIckoxMVJlTG8xM1NBNEJiQmozT051UllUNVNpSEJ0U3c1MzJWYVF1OU11ZWl4M0RxZi03THNYU19UYTQwRTVkYjhzR0tfcVppTWtIR1FWcTRuc1R5YmpMeUFpYjNueEVWMkRrY184NlpmUTdQY1lidHBscw%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) officials saw need for 금리 인상 if inflation doesn't cool, minutes show",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQX3djZ2FKOHhfMkVRRHEzdFlsQ0t2Tmt5OE1sM1lrX1V3WFZ3RXlYdTlZcFVSWmx0YWFYaDZRSjYyYkRwVXQzZm5Sdldobk5xc0pXdVotLUt2S251cnVfdHV3MmRObmd1aW5zcGZkVGVxdkgzbURqbU9qV093Wmt2aWFFWkpxaWNGYVRQanh6NWRqeXJfZHA3bDB4Nmp2LXlrbUh0MlR1WWdDWEM5QUpaV2gycjItYmvSAbwBQVVfeXFMTjhBbUlQSGRVY3hPZXpNT3A1NFlLQ1ViNUZ0WjBzaC1LdTlFZ3J1UHI4Q1FGT2tUZ3JWeDBOWTIxRGJWRnNRUW9VcHdfQkhKZk5IaGhBdmdiSXFYX3RySnhUOVNpeUN2TjBvMUVKcEUyRXlQUjZkRmYwQU5ud3VIczJwLTZxVW90NlVZYjM4a2J3RnpxbjV1RlZ5VXFYenNZcXFEVmhLM0pKUnQyOVZQRm5lMUlvdDNLWVRFOU0?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxQX3djZ2FKOHhfMkVRRHEzdFlsQ0t2Tmt5OE1sM1lrX1V3WFZ3RXlYdTlZcFVSWmx0YWFYaDZRSjYyYkRwVXQzZm5Sdldobk5xc0pXdVotLUt2S251cnVfdHV3MmRObmd1aW5zcGZkVGVxdkgzbURqbU9qV093Wmt2aWFFWkpxaWNGYVRQanh6NWRqeXJfZHA3bDB4Nmp2LXlrbUh0MlR1WWdDWEM5QUpaV2gycjItYmvSAbwBQVVfeXFMTjhBbUlQSGRVY3hPZXpNT3A1NFlLQ1ViNUZ0WjBzaC1LdTlFZ3J1UHI4Q1FGT2tUZ3JWeDBOWTIxRGJWRnNRUW9VcHdfQkhKZk5IaGhBdmdiSXFYX3RySnhUOVNpeUN2TjBvMUVKcEUyRXlQUjZkRmYwQU5ud3VIczJwLTZxVW90NlVZYjM4a2J3RnpxbjV1RlZ5VXFYenNZcXFEVmhLM0pKUnQyOVZQRm5lMUlvdDNLWVRFOU0%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "BOJ chief calls for more focus on anchoring inflation around target",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPMHBEWXdWR2hXZFN5QVc0dUhhNUwtNFAzNGt6ZmF3MnluNkFZdS1OTHV2NXRTcWdYd21mWkZIWUZORmUzZVFQa0I2blM0QzJJVk9jZ0E0YTY3dURQUDJsTm42S1lMU1JoWlJMZFl6RjJTTll3NkNPa21reUdlaUR0TFFtVXEwNGVkb0pkbk9hMkdvREhCeUIxU3dhYVZka0tsRjFfb3NMUVI0al9QWlFuQUN6ZzV5UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPMHBEWXdWR2hXZFN5QVc0dUhhNUwtNFAzNGt6ZmF3MnluNkFZdS1OTHV2NXRTcWdYd21mWkZIWUZORmUzZVFQa0I2blM0QzJJVk9jZ0E0YTY3dURQUDJsTm42S1lMU1JoWlJMZFl6RjJTTll3NkNPa21reUdlaUR0TFFtVXEwNGVkb0pkbk9hMkdvREhCeUIxU3dhYVZka0tsRjFfb3NMUVI0al9QWlFuQUN6ZzV5UQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:01:46"
    },
    {
      "source": "Reuters",
      "title_ko": "Euro zone inflation surges more than expected, keeping pressure on ECB to hike rates",
      "title_en": "Euro zone inflation surges more than expected, keeping pressure on ECB to hike rates",
      "summary_ko": "Euro zone inflation surges more than expected, keeping pressure on ECB to hike rates Reuters. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Reuters뿐만 아니라 Reuters, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNTjBZN3Zra1B6VVdIMFBGalpKbDVTYW9ZZjR2UFJDRC10V25XZHBRQndua3Brc1BVbWxPT2pZTWcwZzBYSFNIREFlX2FvLVNVOENURWZJckwyRmwyakp3X0tQd0Z5MVJVOVlrYmdxZlJ1azdLTjRvNW9WdzlJcjhYRE1YcVlYTk44V1hMSV9KZk1YdVpQdmRMTUN5bjI1QQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxNTjBZN3Zra1B6VVdIMFBGalpKbDVTYW9ZZjR2UFJDRC10V25XZHBRQndua3Brc1BVbWxPT2pZTWcwZzBYSFNIREFlX2FvLVNVOENURWZJckwyRmwyakp3X0tQd0Z5MVJVOVlrYmdxZlJ1azdLTjRvNW9WdzlJcjhYRE1YcVlYTk44V1hMSV9KZk1YdVpQdmRMTUN5bjI1QQ%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 02 Oct 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "연준(Fed)'s Daly: need for more hikes hinges on what happens with shocks",
          "original_url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOS1NIR0txbU9OM3c1aUhGM2doeVltazU2U2YyOHV2YVR4R2lkRG5FUXp2N0VnaVdLVlRCV1BUMXBJWUpBUmVTZTlMQXV2VU1KOXhocElZNGEzYWFnS2xGQ2hCTlRPbzJjN0J5Ty1neVBpdU1UV0JxRlFRTDNjOEk1QjhXQ1otdkhOTG8zLW5QLTRxQVc5dE5KeVNURTlXYWU4Unh4eg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipAFBVV95cUxOS1NIR0txbU9OM3c1aUhGM2doeVltazU2U2YyOHV2YVR4R2lkRG5FUXp2N0VnaVdLVlRCV1BUMXBJWUpBUmVTZTlMQXV2VU1KOXhocElZNGEzYWFnS2xGQ2hCTlRPbzJjN0J5Ty1neVBpdU1UV0JxRlFRTDNjOEk1QjhXQ1otdkhOTG8zLW5QLTRxQVc5dE5KeVNURTlXYWU4Unh4eg%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) Governor Cook says she's 'prepared to act' on 금리 인상 to address inflation",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNV2Q5NThqUHd1aDMwaW5zTzkzRTNUdXZpX3Z4SHEzd3JUcElDSExlY2pYR0JwNUxnbXNkb053ZmY2WUpyTGs5dEp6R2EzZmhqNUVRS1Vmb2xGNnFGdWVfWmRQY0d4N0VTWW1aVld4YjczbWJrR1UyY1dHbFFKdlVERkhHQ3doRlVJWGQxZ2lvZTJzUjkzWFZmckdlWjU3WjUzQ0ZRRzZNY3dHQ1hxU3pCSTlFT0fSAboBQVVfeXFMTjlwaVZzbmtnN0RzMEYzM3RPVWZKemtBblJxTXBYejl6T1lSNzh4YUZKZGlmSHBFMnhyYTBsbS1RR0k4MGxLM0pNSmJDM3BIUklNN0txbm1FVkRRWENXSDZhOVJ6S0YyWlhZcFlBVmFSazR0T0lMOXlZTnlXOFRLbXRDUVEtX2xVelVkT2tITnBwUWN3X1ZFNmczbnRnTzdOQ2UzbGlQSXI3bGQ2c0h6NHdZbHpHZW1zSFVR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxNV2Q5NThqUHd1aDMwaW5zTzkzRTNUdXZpX3Z4SHEzd3JUcElDSExlY2pYR0JwNUxnbXNkb053ZmY2WUpyTGs5dEp6R2EzZmhqNUVRS1Vmb2xGNnFGdWVfWmRQY0d4N0VTWW1aVld4YjczbWJrR1UyY1dHbFFKdlVERkhHQ3doRlVJWGQxZ2lvZTJzUjkzWFZmckdlWjU3WjUzQ0ZRRzZNY3dHQ1hxU3pCSTlFT0fSAboBQVVfeXFMTjlwaVZzbmtnN0RzMEYzM3RPVWZKemtBblJxTXBYejl6T1lSNzh4YUZKZGlmSHBFMnhyYTBsbS1RR0k4MGxLM0pNSmJDM3BIUklNN0txbm1FVkRRWENXSDZhOVJ6S0YyWlhZcFlBVmFSazR0T0lMOXlZTnlXOFRLbXRDUVEtX2xVelVkT2tITnBwUWN3X1ZFNmczbnRnTzdOQ2UzbGlQSXI3bGQ2c0h6NHdZbHpHZW1zSFVR%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "With inflation risks to upside, ECB may need to hike more, Dolenc says",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOUUg5SHpBLWFwbG5xWEVMN2lFV1ZkS3VqN3dXTHQxM2RLcVk5QmtrMzFjNTk4S214czN4X2NyZjVULV8yazNYSC1qeERUNFA0N0dmajVjT3FXVUpFcW1aMjNickdUakg1dkdKSTZXZG5NRXdzY2M1SWp3QnBjejJVWFdRekZTZ0hwMWJ0cDZrU2ZhRXliV0lSck9SbmgwZmswWGhSRmJfX2JsMzRkNG5sbQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOUUg5SHpBLWFwbG5xWEVMN2lFV1ZkS3VqN3dXTHQxM2RLcVk5QmtrMzFjNTk4S214czN4X2NyZjVULV8yazNYSC1qeERUNFA0N0dmajVjT3FXVUpFcW1aMjNickdUakg1dkdKSTZXZG5NRXdzY2M1SWp3QnBjejJVWFdRekZTZ0hwMWJ0cDZrU2ZhRXliV0lSck9SbmgwZmswWGhSRmJfX2JsMzRkNG5sbQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) officials see rates likely rising to curb high inflation",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPS1FaZTVSeTlieFN5WUNJdHE5VVB5VlM2Q0pSY3BtalppeEt0S0s0YnNBMzlTcUpIWGg0V3dxTTBiWWdpbW1OTTJBSFIwMDUzNG80ekkzM3AtMXFoSmRNQVNPQUxBeUVlTmFPNjdWZmk3enE2NFVpY1U1Y1dqSkdDY080OXBZZGRmbWZmYWw2WGdEVmlTOVVhNXVCb0QxU01Lc0tHSTVDS05ZMjJJ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxPS1FaZTVSeTlieFN5WUNJdHE5VVB5VlM2Q0pSY3BtalppeEt0S0s0YnNBMzlTcUpIWGg0V3dxTTBiWWdpbW1OTTJBSFIwMDUzNG80ekkzM3AtMXFoSmRNQVNPQUxBeUVlTmFPNjdWZmk3enE2NFVpY1U1Y1dqSkdDY080OXBZZGRmbWZmYWw2WGdEVmlTOVVhNXVCb0QxU01Lc0tHSTVDS05ZMjJJ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:02:07"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "A Treasurer’s Playbook Following a 연준(Fed) 금리 인상: Ask Banks to Pay Up for Deposits",
      "title_en": "A Treasurer’s Playbook Following a Fed Rate Hike: Ask Banks to Pay Up for Deposits",
      "summary_ko": "A Treasurer’s Playbook Following a 연준(Fed) 금리 인상: Ask Banks to Pay Up for Deposits WSJ. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Wall Street Journal뿐만 아니라 CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOdlUtTGRpNGc0NGdBUGhlLTYwN3JhSVR3bnlFWUZ2Y3ptMzBNdGc5dmpXZ1RqMlNNT0wwVDVzeEJRMFJHdEVRcHNOV3V6U0I5VzJHWHlSTDR6MlZFanhLdUwxcGxWNkh0dmR5RGRxd2t4QnBPdXpTZVc2b3VwMlQ1dm9peG1aaUtZU2JrTloxb3dxVnNLdHkwNldYcUJXRExOQUVsaWpDeS1NZkk3VWhCM2VYSUlmd1lncDFIb2dn?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivgFBVV95cUxOdlUtTGRpNGc0NGdBUGhlLTYwN3JhSVR3bnlFWUZ2Y3ptMzBNdGc5dmpXZ1RqMlNNT0wwVDVzeEJRMFJHdEVRcHNOV3V6U0I5VzJHWHlSTDR6MlZFanhLdUwxcGxWNkh0dmR5RGRxd2t4QnBPdXpTZVc2b3VwMlQ1dm9peG1aaUtZU2JrTloxb3dxVnNLdHkwNldYcUJXRExOQUVsaWpDeS1NZkk3VWhCM2VYSUlmd1lncDFIb2dn%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 17 Sep 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "Traders now see little chance of a 연준(Fed) 금리 인상 in October after weak jobs report",
          "original_url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "Analysis: Kevin Warsh has three reasons to hold off on a 연준(Fed) 금리 인상 this week",
          "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPVVJUMVhPX29BcUJ5OS02b20tQ0xLOHI0bDZ2bFNuc040S3UwYVpmSkN3YlYyZUUxYWZxeGgyU0lJamhsR0w0QWhiUmxDc3hPQVFLUmJmTDdyNmg4ckZUbU1JTi1SY05QWXk3dDRWRGZoLUNZUTk0Q3MtZjl1ZjFJY2FpclNMODd6bXfSAY8BQVVfeXFMTlNGT2plT3FjV25FSXY5aFQxVE9KR1ljejYySlJSdG56OFZ3M1g1ZDRkOG1pODNiUUl3bmlhaklnWVRVSU5kTTBVd2xnWXdMaHpIdVFra2M1Ty1OMlZUMzVqMGh2VU5GeG1sWkZCT2pBdW9ESEwtWnBMb3lmX2RyOU11NVlCZFFjaTdRZkdVQ3M?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxPVVJUMVhPX29BcUJ5OS02b20tQ0xLOHI0bDZ2bFNuc040S3UwYVpmSkN3YlYyZUUxYWZxeGgyU0lJamhsR0w0QWhiUmxDc3hPQVFLUmJmTDdyNmg4ckZUbU1JTi1SY05QWXk3dDRWRGZoLUNZUTk0Q3MtZjl1ZjFJY2FpclNMODd6bXfSAY8BQVVfeXFMTlNGT2plT3FjV25FSXY5aFQxVE9KR1ljejYySlJSdG56OFZ3M1g1ZDRkOG1pODNiUUl3bmlhaklnWVRVSU5kTTBVd2xnWXdMaHpIdVFra2M1Ty1OMlZUMzVqMGh2VU5GeG1sWkZCT2pBdW9ESEwtWnBMb3lmX2RyOU11NVlCZFFjaTdRZkdVQ3M%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:02:22"
    },
    {
      "source": "Reuters",
      "title_ko": "Foreign outflows from Asian equities surge on Middle East risks, tech rout",
      "title_en": "Foreign outflows from Asian equities surge on Middle East risks, tech rout",
      "summary_ko": "Foreign outflows from Asian equities surge on Middle East risks, tech rout Reuters. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Reuters뿐만 아니라 Reuters, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "Foreign outflows hit Asian stocks as Iran war drives oil shock fears",
          "original_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "U.S. 미 국채/재무부 수익률(금리) rise as 월가 monitors Middle East tensions",
          "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOZld3ajVXMWdnQnVibk5pTFctajNqbndkX0ZUZkVXTzRJTUlWVEVXckg1UFJ2N0g2VDlvRWtjTzZfOVhqX0VkWHBTcVNqLXdKZGxxN1IzcXg1VGpleTRJMjhqQi1hM3RHR1RGUmxyYjluaWp1TG9FSG9SMG91akpDdEJTcWtaeTJ2dFHSAY8BQVVfeXFMTWFzTWNuVXU4c0d2OXJKRERvOTQtNkxXMFlkRVYxbmNGTHhmcDg2M18xTHBYZnY1WUo1b3cwLU5kSWtTaUNzZ2pCTHpVYmxYNHh5a1BJTDhDU29JRDhDOTM2cTZaMGNLVGozMXZzMkRpRG80M1hjVzBLV05UVlhEWXQyV1E4OGtKaEN2VU5MTFk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxOZld3ajVXMWdnQnVibk5pTFctajNqbndkX0ZUZkVXTzRJTUlWVEVXckg1UFJ2N0g2VDlvRWtjTzZfOVhqX0VkWHBTcVNqLXdKZGxxN1IzcXg1VGpleTRJMjhqQi1hM3RHR1RGUmxyYjluaWp1TG9FSG9SMG91akpDdEJTcWtaeTJ2dFHSAY8BQVVfeXFMTWFzTWNuVXU4c0d2OXJKRERvOTQtNkxXMFlkRVYxbmNGTHhmcDg2M18xTHBYZnY1WUo1b3cwLU5kSWtTaUNzZ2pCTHpVYmxYNHh5a1BJTDhDU29JRDhDOTM2cTZaMGNLVGozMXZzMkRpRG80M1hjVzBLV05UVlhEWXQyV1E4OGtKaEN2VU5MTFk%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "미 국채/재무부 수익률(금리) slide as surge to multiyear highs cools",
          "original_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5JN3hlTGd4VlZhb0g2Y1AzdHJ3ZVZYOHJ3UDI3X1NpekdCemxHTlpsbVl2NUxLTmdUU2dmTFB2QlFWQmJXN2syaVh3OHdMR294SzRUMUhzRktsbk50UG9JMks1dWZqQldIYmllQUpyWjhHRFZERVVhVtIBfkFVX3lxTFBiS2VYTXRVaXVCQXUzd0VTNXZSYXQxRWl5V18xSXVlZVBXeEdjMkIwWGloZlVKalh5SjU2RmF3dGxfNEpzd05SMjczOXNmQTFZTGloaUdOdzAxMVRuWXc1ME9mb0RCYThITTZrQnNKM3NuQ1NKUDBsY1lEVU1PUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMieEFVX3lxTE5JN3hlTGd4VlZhb0g2Y1AzdHJ3ZVZYOHJ3UDI3X1NpekdCemxHTlpsbVl2NUxLTmdUU2dmTFB2QlFWQmJXN2syaVh3OHdMR294SzRUMUhzRktsbk50UG9JMks1dWZqQldIYmllQUpyWjhHRFZERVVhVtIBfkFVX3lxTFBiS2VYTXRVaXVCQXUzd0VTNXZSYXQxRWl5V18xSXVlZVBXeEdjMkIwWGloZlVKalh5SjU2RmF3dGxfNEpzd05SMjczOXNmQTFZTGloaUdOdzAxMVRuWXc1ME9mb0RCYThITTZrQnNKM3NuQ1NKUDBsY1lEVU1PUQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Foreign selling in Asian equities rises as bond 수익률(금리) climb",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNamNqM2EwN3NZZHktOS1DLWZMZ1hUbV9ma05QYzdVem5uQ2tSY0I1VUljV2M1eVpjdWdZT2xCOEJNVzFNZ1dQZFVpLUgzRGI0ZjliUDRDdXhfMVBlTTl3bnRSa2szT1JhWG56LUk5LThTamt6d0hIeF9XTFFCNk0zdFNTSVdJLXVmamIzb0txYm5hbHpweHp5TkFrX0tXUlZkbm4xUFF0LUs?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxNamNqM2EwN3NZZHktOS1DLWZMZ1hUbV9ma05QYzdVem5uQ2tSY0I1VUljV2M1eVpjdWdZT2xCOEJNVzFNZ1dQZFVpLUgzRGI0ZjliUDRDdXhfMVBlTTl3bnRSa2szT1JhWG56LUk5LThTamt6d0hIeF9XTFFCNk0zdFNTSVdJLXVmamIzb0txYm5hbHpweHp5TkFrX0tXUlZkbm4xUFF0LUs%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:02:44"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Qatar Energy Chief Says Bessent ‘Wrong’ About Hormuz Future",
      "title_en": "Qatar Energy Chief Says Bessent ‘Wrong’ About Hormuz Future",
      "summary_ko": "Qatar Energy Chief Says Bessent ‘Wrong’ About Hormuz Future Bloomberg.com. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOMXBsLWRYS0lhdGFNQkNoeW5EVEpxT1dITm9PQmxWMmRnamZUR3dKRUNtREZLYm91OXZ0SnZYUnM1RnZtSDJCZ1ktdklSN0lER05DLXg2Q1g1RW5sd0hQV2I0endqZzZGdFNhWXAtbGFOSUNaYnhrSW5RZ0FFekt6MUoxWlRyTjhGN3lCWEJpSUpMUGpuSWNNcHg1V0ZFLWVPalo5Z0Y1MUV0bnd6ZnVv?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxOMXBsLWRYS0lhdGFNQkNoeW5EVEpxT1dITm9PQmxWMmRnamZUR3dKRUNtREZLYm91OXZ0SnZYUnM1RnZtSDJCZ1ktdklSN0lER05DLXg2Q1g1RW5sd0hQV2I0endqZzZGdFNhWXAtbGFOSUNaYnhrSW5RZ0FFekt6MUoxWlRyTjhGN3lCWEJpSUpMUGpuSWNNcHg1V0ZFLWVPalo5Z0Y1MUV0bnd6ZnVv%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 20 Sep 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Qatar Has Widest Deficit in a Decade as Hormuz Ties Up Gas Trade",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNR2lxbV9QaFNwYVZia0puRm9FTl9uUFV0Q3RWc0RYS3ZkUVdTaWo1ZkwxZGt1Rmpac3cxVHFEbjBBWERPVTByUTMwZ0gxQ1hkQmNaZG9aMnNJemY1TENfRjE1WjRpN2lXOG1SSjhuNmRZZS00bnVNeFgtUEk2TWpoR0w4cWM5UGVsNVpwdV9odHZvcV9QeWw1QWxyLXE4bVJnMFF0ZDNmWm1kaHlYaW9XaVFoWXhOdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNR2lxbV9QaFNwYVZia0puRm9FTl9uUFV0Q3RWc0RYS3ZkUVdTaWo1ZkwxZGt1Rmpac3cxVHFEbjBBWERPVTByUTMwZ0gxQ1hkQmNaZG9aMnNJemY1TENfRjE1WjRpN2lXOG1SSjhuNmRZZS00bnVNeFgtUEk2TWpoR0w4cWM5UGVsNVpwdV9odHZvcV9QeWw1QWxyLXE4bVJnMFF0ZDNmWm1kaHlYaW9XaVFoWXhOdw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Watch Bessent Tells Yen Traders 'I Am the House Now'",
          "original_url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOZ1B3cFZWOUUwMk13UVpxbldvcXd5WE5STnM0N0NDaF9iZThyRS1xeHFzR0VoQmpYZzhvVGd0ekd6LUM5Vk9qZENFMlNEQzItcHFZblQzMmkwbzVId2RGVVc4MEoxTE5mZHBDRW9oRzdrVko5cEtweDRHM0s5aDVxdHNUaHlvcktfN1gzelVWdTFrRE9PUTZqSFhma3REZHU5?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMioAFBVV95cUxOZ1B3cFZWOUUwMk13UVpxbldvcXd5WE5STnM0N0NDaF9iZThyRS1xeHFzR0VoQmpYZzhvVGd0ekd6LUM5Vk9qZENFMlNEQzItcHFZblQzMmkwbzVId2RGVVc4MEoxTE5mZHBDRW9oRzdrVko5cEtweDRHM0s5aDVxdHNUaHlvcktfN1gzelVWdTFrRE9PUTZqSFhma3REZHU5%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "미 국채/재무부's Bessent says upsized bond buybacks could increase further",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPTWc4bVJ0eEl6MmpreFhiWU9RajRyM05KRDVuNU01TkZnY3UxRTdHSkFBTEwtWVV3dHJfczQyS0dNcW9uR2s4cXRDUmN6Y1FjaUZULWpxejJGMUdRWHlnQi1rekZjN2hyQXJmUXZlMGJocGFkaVQwOUtQMWFNYUVyZG9WQnBtYUlEQVdvdnp0dnE1aTlRNUZ1Q1d6OFUyb2IyTEluOXB6Y0RIU0JOSzhmS1l3?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxPTWc4bVJ0eEl6MmpreFhiWU9RajRyM05KRDVuNU01TkZnY3UxRTdHSkFBTEwtWVV3dHJfczQyS0dNcW9uR2s4cXRDUmN6Y1FjaUZULWpxejJGMUdRWHlnQi1rekZjN2hyQXJmUXZlMGJocGFkaVQwOUtQMWFNYUVyZG9WQnBtYUlEQVdvdnp0dnE1aTlRNUZ1Q1d6OFUyb2IyTEluOXB6Y0RIU0JOSzhmS1l3%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "US 미 국채/재무부 chief Bessent backs using US financial power as foreign policy tool",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPdVVwZ0p3QWZmMDNKdXYxdTZPRXZtaWo2bmlqMnFDYWI0QXB0SlBPbHZuMl9QY1djNEV6VklBc19PZ01CQzlWT2VxU3YwM0lLeUw2Qm5QbGRRQ2h1b01ELVhMZmRJd2NIZk92bDU5SkpxNkZCanB4OER3UXRJNm0ySGRoUjJYTmxWQllVczhBOUN4Q0ZBN083Z1lEVmxwMkJpZjhYV1BCZ1hxSmUwX0ZYcjBlZnp1MVBfS3c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxPdVVwZ0p3QWZmMDNKdXYxdTZPRXZtaWo2bmlqMnFDYWI0QXB0SlBPbHZuMl9QY1djNEV6VklBc19PZ01CQzlWT2VxU3YwM0lLeUw2Qm5QbGRRQ2h1b01ELVhMZmRJd2NIZk92bDU5SkpxNkZCanB4OER3UXRJNm0ySGRoUjJYTmxWQllVczhBOUN4Q0ZBN083Z1lEVmxwMkJpZjhYV1BCZ1hxSmUwX0ZYcjBlZnp1MVBfS3c%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:03:06"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Bessent’s Iran Threat Hinges on US Willingness to Hit China",
      "title_en": "Bessent’s Iran Threat Hinges on US Willingness to Hit China",
      "summary_ko": "Bessent’s Iran Threat Hinges on US Willingness to Hit China Bloomberg.com. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "Bessent Will Likely Cut US Long Bond Sales Next Month, Says Citi",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPQ3g1bDc4T2w2UUNsWG12djVjdkZSS2RJOTlnMXAwUTNVNUtNaEdaSlRFNm84Yl9rWmhRVDdjYTV0clcxM044cFpyV05hdndtLXQ0SzJ6NG10ZkduTGExcHRYVEhOa3hhR3NJdVJmZ2xIc1V0RFpHX3R6RDhZTGtnblNVaDc1Z0FMM0luV2x5Y0F5Z1had3dvdGxtTExSNUsxcVdzUUs3YkIyb0dnLXI1dTllS2w?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxPQ3g1bDc4T2w2UUNsWG12djVjdkZSS2RJOTlnMXAwUTNVNUtNaEdaSlRFNm84Yl9rWmhRVDdjYTV0clcxM044cFpyV05hdndtLXQ0SzJ6NG10ZkduTGExcHRYVEhOa3hhR3NJdVJmZ2xIc1V0RFpHX3R6RDhZTGtnblNVaDc1Z0FMM0luV2x5Y0F5Z1had3dvdGxtTExSNUsxcVdzUUs3YkIyb0dnLXI1dTllS2w%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "EXCLUSIVE: US 미 국채/재무부's Bessent to skip IMF",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPS0Fvek5PSXlPRmt0Z3pZd2JXcHpwcC1VSkNUdFRKRFVvNkFpNEJtMXJkd3JSSk9BMmV1aXdLRlBnTjNGMXdxaFl3M0NXc0VlTV8yT3VjMHA2b3pRekZXblctZUVfeGtXNm1zUHBsWTBIMzgwV2xCU01ndm9NWWRwMXYzSy0zNFJvUERHUUNvVll3QktBYmdNN2dnYTh4ZlVOeVk1SElVUlFqVjBpdVhyTzJR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxPS0Fvek5PSXlPRmt0Z3pZd2JXcHpwcC1VSkNUdFRKRFVvNkFpNEJtMXJkd3JSSk9BMmV1aXdLRlBnTjNGMXdxaFl3M0NXc0VlTV8yT3VjMHA2b3pRekZXblctZUVfeGtXNm1zUHBsWTBIMzgwV2xCU01ndm9NWWRwMXYzSy0zNFJvUERHUUNvVll3QktBYmdNN2dnYTh4ZlVOeVk1SElVUlFqVjBpdVhyTzJR%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent's Plans to Rein In US Deficit Met With Skepticism",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNUXNIa0NyX0tHTXRKVHZoUlpGYW41c2ZxNk9UelVjNWtWUzFERzJsUlB3bkdCb3NsUUdQTFVZSzBIcnVqN1JUZ2dGbEVyN2N6Y3hZY3hOd1BQQ3BoOTBXaTVNV1dJLVl4Ni1qenVtWFJ0aXcxSnlvZHJfaW8xNzVGRzJhMHpSVkpLLWpKTGpWb2lDWjRJRGwxTy1sSmdqUHdhVE5QbkVSYlFwVmlfdzFXU2hONkgxQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNUXNIa0NyX0tHTXRKVHZoUlpGYW41c2ZxNk9UelVjNWtWUzFERzJsUlB3bkdCb3NsUUdQTFVZSzBIcnVqN1JUZ2dGbEVyN2N6Y3hZY3hOd1BQQ3BoOTBXaTVNV1dJLVl4Ni1qenVtWFJ0aXcxSnlvZHJfaW8xNzVGRzJhMHpSVkpLLWpKTGpWb2lDWjRJRGwxTy1sSmdqUHdhVE5QbkVSYlFwVmlfdzFXU2hONkgxQQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Bessent defends Trump economic policies, reveals plans to meet Chinese official",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxORTlaeHpnSkMzSU5ieGJqNEpUTFdaYU8yTzc2OExDcElaWFVFclZyNkVNcThWaFRiM29ZNGhaY3dpWS1RbVh0NUhZczdVLUhLVFNjN3RCRFhZMlVmeU5ibVhCXy14VnItdkpzVHNJZXlxWmhxbzRLX3BjOTFzcE9yRVFteHcwS0Jaa19QaTVPdnh5WDFLcXdvTXBrNldnNVJDd0RvN1NRYllyRWM?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxORTlaeHpnSkMzSU5ieGJqNEpUTFdaYU8yTzc2OExDcElaWFVFclZyNkVNcThWaFRiM29ZNGhaY3dpWS1RbVh0NUhZczdVLUhLVFNjN3RCRFhZMlVmeU5ibVhCXy14VnItdkpzVHNJZXlxWmhxbzRLX3BjOTFzcE9yRVFteHcwS0Jaa19QaTVPdnh5WDFLcXdvTXBrNldnNVJDd0RvN1NRYllyRWM%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:03:27"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "WSJ Opinion: Senate Candidates Debate: Medicare for All, Tariffs, Iran and Social Security",
      "title_en": "WSJ Opinion: Senate Candidates Debate: Medicare for All, Tariffs, Iran and Social Security",
      "summary_ko": "WSJ Opinion: Senate Candidates Debate: Medicare for All, Tariffs, Iran and Social Security WSJ. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Wall Street Journal뿐만 아니라 Reuters, MarketWatch 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiiwJBVV95cUxPbHBDcGp5MGtndVZaN1lpdjNoSUR4S19uc05YOVh1YjhzUEw2SG5HVGVqbjRwNkFjY2phQzNJeUlyaGRiQS1fVU9QOV9PSHNHWDZRZDR5SnRIWmxnX3BzRnBIaWZyZm1fenRaNk43RXpZX0hMNS1YWUJIN3hnMkZpMllQTEVYbEVRYklmNUtDenN0a0ZpM1JNSXMzWGNrZTladG5ibXkwcWRFMzJTT0I0Vm51cWpsUERQVDJyNjdfOHBtLXhoaVEyby1KQmVhZEpoQndKNTd1TTNjdHoxcmJqV2VXVUVTbnJFUDM2dEp5TmE1SlM2UDFrQjFsLVVteXhfdXFheWZja3Z2eU0?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiiwJBVV95cUxPbHBDcGp5MGtndVZaN1lpdjNoSUR4S19uc05YOVh1YjhzUEw2SG5HVGVqbjRwNkFjY2phQzNJeUlyaGRiQS1fVU9QOV9PSHNHWDZRZDR5SnRIWmxnX3BzRnBIaWZyZm1fenRaNk43RXpZX0hMNS1YWUJIN3hnMkZpMllQTEVYbEVRYklmNUtDenN0a0ZpM1JNSXMzWGNrZTladG5ibXkwcWRFMzJTT0I0Vm51cWpsUERQVDJyNjdfOHBtLXhoaVEyby1KQmVhZEpoQndKNTd1TTNjdHoxcmJqV2VXVUVTbnJFUDM2dEp5TmE1SlM2UDFrQjFsLVVteXhfdXFheWZja3Z2eU0%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 09 Oct 2026 23:28:49 GMT",
      "related_articles": [
        {
          "source": "MarketWatch",
          "title_ko": "Opinion: Rising 기준금리: The good, the bad and the ugly for retirees",
          "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNYXpjc25RaGJVb1lHNl9zNXZ1b2VpQXVFblN1bTd6S1h4eE92bERKWjhUR1h3QUFqVlhwN2M0Rl93VFpQRFh0OXNnZG9CMkFEa3IzLVVnby0yeUtDZVVjRlNHekJ0bkQ2d1B3LXBSdkZBUmFqamxnMEF5VC1ENFYyYjYteWJ4OFdONm1ROWNoVWs4UktkYUpRMnZvSDd4UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxNYXpjc25RaGJVb1lHNl9zNXZ1b2VpQXVFblN1bTd6S1h4eE92bERKWjhUR1h3QUFqVlhwN2M0Rl93VFpQRFh0OXNnZG9CMkFEa3IzLVVnby0yeUtDZVVjRlNHekJ0bkQ2d1B3LXBSdkZBUmFqamxnMEF5VC1ENFYyYjYteWJ4OFdONm1ROWNoVWs4UktkYUpRMnZvSDd4UQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Brazil election to reshape trade with US, with tariffs and minerals at stake",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOZ2tkejVWVGdYM28ydWpFcGlic2NHYlctREhMSmJVak9qWkdEX3hMbW1GVk5DMFV2dF84QmJtRlVnRXFXMW5zdWZGTGJQbXBXTEE1LWFfa3BHSlZQNThTclhzYWIwWWY5NGIwRkJZZzFoZU4xU0RwbS14bFlWbmZ1N1RCR2lrWlNmOXhLWmtiZVVoSE1CakxXUFZ6WUhyYk5xT0RQbVZnbXpFNVgtN24ydjl1N0hzSVE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxOZ2tkejVWVGdYM28ydWpFcGlic2NHYlctREhMSmJVak9qWkdEX3hMbW1GVk5DMFV2dF84QmJtRlVnRXFXMW5zdWZGTGJQbXBXTEE1LWFfa3BHSlZQNThTclhzYWIwWWY5NGIwRkJZZzFoZU4xU0RwbS14bFlWbmZ1N1RCR2lrWlNmOXhLWmtiZVVoSE1CakxXUFZ6WUhyYk5xT0RQbVZnbXpFNVgtN24ydjl1N0hzSVE%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:03:42"
    },
    {
      "source": "한국경제",
      "title_ko": "\"네가 안 사면 남이 산다\"→마이크론 급등, 해외 채권 수요…베센트의 손? [김현석의 월스트리트나우]",
      "title_en": "",
      "summary_ko": "\"네가 안 사면 남이 산다\"→마이크론 급등, 해외 채권 수요…베센트의 손? [김현석의 월스트리트나우] 한국경제. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 한국경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE90UXR4ZFBlTlZEYndkMWVYd0Y5azV4aTR0eFQ5WXNqTVR4Y1FHMksybTduTlprckxhUmdiY2k0TElvLVd5ZWhZal9KV091aEVTa1RQblpOY0lvZw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE90UXR4ZFBlTlZEYndkMWVYd0Y5azV4aTR0eFQ5WXNqTVR4Y1FHMksybTduTlprckxhUmdiY2k0TElvLVd5ZWhZal9KV091aEVTa1RQblpOY0lvZw?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 07 Oct 2026 22:43:41 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-11 20:03:42"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Trump Deal Threatens Won’s Advance as Dollar Demand to Surge",
      "title_en": "Trump Deal Threatens Won’s Advance as Dollar Demand to Surge",
      "summary_ko": "Trump Deal Threatens Won’s Advance as Dollar Demand to Surge Bloomberg.com. 국내 금융시장에 대한 외국인 자본 유출입 및 환율 안정성에 영향을 주는 주요 요인입니다. Bloomberg에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPdXhjMjNMWEZ0SC1vZ1ZJVDVyZ3NsanBPYmIyTlhKWlBjTWF0bnYzTzVjMmVfTjk5UXp4UzJyX0NIZ0x1bWg2eGhUUExnWU40LTBiOUVtVzlrLXE4SkMtanJKMVYxNS1ISjc0ZzNWeGdGY1NOaEVtcVZVVnFOenNRTHZRQW52dTBCWEhCQ3NvNkt5b3dFTWFqaHJoTVphMGtUcGVpaVlMR3QzUTVyWTJnVA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxPdXhjMjNMWEZ0SC1vZ1ZJVDVyZ3NsanBPYmIyTlhKWlBjTWF0bnYzTzVjMmVfTjk5UXp4UzJyX0NIZ0x1bWg2eGhUUExnWU40LTBiOUVtVzlrLXE4SkMtanJKMVYxNS1ISjc0ZzNWeGdGY1NOaEVtcVZVVnFOenNRTHZRQW52dTBCWEhCQ3NvNkt5b3dFTWFqaHJoTVphMGtUcGVpaVlMR3QzUTVyWTJnVA%3Foc%3D5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 21 Sep 2025 07:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-11 20:03:49"
    },
    {
      "source": "CNBC",
      "title_ko": "Three words from Kevin Warsh have 월가 wondering how far the 연준(Fed) will go with rate hikes",
      "title_en": "Three words from Kevin Warsh have Wall Street wondering how far the Fed will go with rate hikes",
      "summary_ko": "Three words from Kevin Warsh have 월가 wondering how far the 연준(Fed) will go with rate hikes CNBC. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. CNBC에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
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
      "crawled_at": "2026-10-11 20:03:56"
    },
    {
      "source": "Chosunbiz",
      "title_ko": "Foreign selling surges as KOSPI rally lifts Korea’s foreign equity share",
      "title_en": "Foreign selling surges as KOSPI rally lifts Korea’s foreign equity share - CHOSUNBIZ",
      "summary_ko": "Foreign selling surges as KOSPI rally lifts Korea’s foreign equity share 관련 핵심 동향이 발표되었습니다. 국내 금융시장에 대한 외국인 자본 유출입 및 환율 안정성에 영향을 주는 주요 요인입니다. Chosunbiz뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQVEliNXNKVWJuczVTUk1vMUNDNS1fTzBkN2l2MWx3OWFCZDhOQ3BuTXRmMVY1bkVuZ2hDWERoWGExRUNFQnBJSW80QnNUVnE0WFZLUDBjWm5xc2dPS3FKNnVDaTBJODhHdXBnMFFkbDBDcEJXWElrYzFoLW0yWEJvZNIBlAFBVV95cUxOYlBFYTE0Y05EOHRpUmY3aXFWZTZxTTlVLThqekhRNE1ldzFkcGNKUTFzSW9NT01ieGh2TUdEYTlwdjk2aXVLUmVZeUlaODNnOG55QUtKaWtIZXlhR3dvcXlEN0FZcEk1ZkhDaEhDTTZxY3J4RnVRZEVZajFVSDh1MXNOdlRqNFpRSkg4RGY0ZDFwc3k5?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMigAFBVV95cUxQVEliNXNKVWJuczVTUk1vMUNDNS1fTzBkN2l2MWx3OWFCZDhOQ3BuTXRmMVY1bkVuZ2hDWERoWGExRUNFQnBJSW80QnNUVnE0WFZLUDBjWm5xc2dPS3FKNnVDaTBJODhHdXBnMFFkbDBDcEJXWElrYzFoLW0yWEJvZNIBlAFBVV95cUxOYlBFYTE0Y05EOHRpUmY3aXFWZTZxTTlVLThqekhRNE1ldzFkcGNKUTFzSW9NT01ieGh2TUdEYTlwdjk2aXVLUmVZeUlaODNnOG55QUtKaWtIZXlhR3dvcXlEN0FZcEk1ZkhDaEhDTTZxY3J4RnVRZEVZajFVSDh1MXNOdlRqNFpRSkg4RGY0ZDFwc3k5%3Foc%3D5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 19 May 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "South Korea's KOSPI drops 20% from June record close as chipmakers drag",
          "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPMnBQOE1fVmRvbXNHdHBLZTVmakUxdDNfY2o1N2NZLWU5b3AyMlpYTlFyanFFbEFfdC02UGNfTGlHRVNsYXc0aGh4aEVIUHdXQTZlbUtFOVhtbEtaelFLTUFIdHpFX1lRS2VjVGpMNGRqa2tSVWhveUVHSkVPUUhoYUpscENVd0F4a3pvTTQ3aHA0Y01VbTg3RllEMlp3dGRGQjh2ZHpKMGtINjFocVFQVkFRS1hLTUpNeHdQNmVmR1Q?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxPMnBQOE1fVmRvbXNHdHBLZTVmakUxdDNfY2o1N2NZLWU5b3AyMlpYTlFyanFFbEFfdC02UGNfTGlHRVNsYXc0aGh4aEVIUHdXQTZlbUtFOVhtbEtaelFLTUFIdHpFX1lRS2VjVGpMNGRqa2tSVWhveUVHSkVPUUhoYUpscENVd0F4a3pvTTQ3aHA0Y01VbTg3RllEMlp3dGRGQjh2ZHpKMGtINjFocVFQVkFRS1hLTUpNeHdQNmVmR1Q%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:04:08"
    },
    {
      "source": "The Economic Times",
      "title_ko": "Global Market: 외국인 투자자 pull $23.5 billion from Asian equities in September as US 수익률(금리) surge",
      "title_en": "Global Market: Foreign investors pull $23.5 billion from Asian equities in September as US yields surge",
      "summary_ko": "Global Market: 외국인 투자자 pull $23.5 billion from Asian equities in September as US 수익률(금리) surge The Economic Times. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. The Economic Times뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMimwJBVV95cUxOeFZDOWFiV2VTbkI1aFVEeWpqbzhIM0Z1Vzg1bEpMSllOY0FTTUFfbVNmWTNUMTJWc1hMWjZ0TTNyN3dEQzVncTI4QmdFRm91TUhCNjVvUHlZbDA5T19IdDJRZXhUclljTEpadFF6MXE0dnkxR3NJaERFZ0l6Z0s5R1dtekZGckdOaDZsdEVKanlFdVl5dlkzUFhDalQtLV94Z2FaSXBYdk9EckRtYXZTNkhvdHYxTkJQOE9CYkE1eDdMRFo1TXBlUjFwazRoZDF6RHFsVjlBNnVNNWw1Z3pXZkhtN3RCNGFXZ2N4dG1ZRjMzaklyWXBZM2NCMzFFTXo1TzdYaGdZSktwaW1fQktZdl80V1pOdlBfZ2Fv0gGgAkFVX3lxTE5PZURfRlNjcUp0U21CZjRBNGpRZlVGSWtjUlNCQmpUbWtqYWNRUlM3V1d6NmVpQmxJZ1JLbEp2dG4xeEh5bG1rdnFBX2VLYU5SUzhhc2MtcVZjREFsQ1hieVROZkhhZy1rQUZ1RFRFQUxscFJrVWR4ZXZ6U0JCYWkwMFlmcUZDNnJqT09YSDhxMDUzVVotVlVmNkctdzFWT016VTZ0TEhuNG9vR2Q4TTVQdndqNlpXZE0yWFNpc2tpVXYxdUhTNFdvZlpBd1ZBLTBTUEh2UnRIQUF0OVRGSVB4R21qYk1nRTl4WVFoeXFVTWRRZjNCZ3NGWERkVEFDQ2h6OUY0blpvRzljdGFoQTZsRG1MMWdlVlJ4aHVVMGotcg?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimwJBVV95cUxOeFZDOWFiV2VTbkI1aFVEeWpqbzhIM0Z1Vzg1bEpMSllOY0FTTUFfbVNmWTNUMTJWc1hMWjZ0TTNyN3dEQzVncTI4QmdFRm91TUhCNjVvUHlZbDA5T19IdDJRZXhUclljTEpadFF6MXE0dnkxR3NJaERFZ0l6Z0s5R1dtekZGckdOaDZsdEVKanlFdVl5dlkzUFhDalQtLV94Z2FaSXBYdk9EckRtYXZTNkhvdHYxTkJQOE9CYkE1eDdMRFo1TXBlUjFwazRoZDF6RHFsVjlBNnVNNWw1Z3pXZkhtN3RCNGFXZ2N4dG1ZRjMzaklyWXBZM2NCMzFFTXo1TzdYaGdZSktwaW1fQktZdl80V1pOdlBfZ2Fv0gGgAkFVX3lxTE5PZURfRlNjcUp0U21CZjRBNGpRZlVGSWtjUlNCQmpUbWtqYWNRUlM3V1d6NmVpQmxJZ1JLbEp2dG4xeEh5bG1rdnFBX2VLYU5SUzhhc2MtcVZjREFsQ1hieVROZkhhZy1rQUZ1RFRFQUxscFJrVWR4ZXZ6U0JCYWkwMFlmcUZDNnJqT09YSDhxMDUzVVotVlVmNkctdzFWT016VTZ0TEhuNG9vR2Q4TTVQdndqNlpXZE0yWFNpc2tpVXYxdUhTNFdvZlpBd1ZBLTBTUEh2UnRIQUF0OVRGSVB4R21qYk1nRTl4WVFoeXFVTWRRZjNCZ3NGWERkVEFDQ2h6OUY0blpvRzljdGFoQTZsRG1MMWdlVlJ4aHVVMGotcg%3Foc%3D5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Fri, 09 Oct 2026 09:56:02 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Stocks weigh as 외국인 투자자 pull $27 bln out of 신흥국 시장 portfolios in May",
          "original_url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQVExxNFNhbUNHdmhCdGxnT3ptdEowdXFMZDE2MHVGN1A0ellrR1A5MVNfaWpKcWlnWTJablpmU29WMFVDNS1ZU21sWG16TEJPbTNoLVk1cFNZMGNHYl8zcVNpR2lBYzViRlRfZVJ1Mm83ODQzb0hlVE04YWxBdnFHSl9uVDhGajAtdjQ0aHI5NUVsd2lXYnZsV1FwUThZcGZaTVdORXctaWxNNFVuRWZjOTBXZURpOXlPN01LaExHUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivwFBVV95cUxQVExxNFNhbUNHdmhCdGxnT3ptdEowdXFMZDE2MHVGN1A0ellrR1A5MVNfaWpKcWlnWTJablpmU29WMFVDNS1ZU21sWG16TEJPbTNoLVk1cFNZMGNHYl8zcVNpR2lBYzViRlRfZVJ1Mm83ODQzb0hlVE04YWxBdnFHSl9uVDhGajAtdjQ0aHI5NUVsd2lXYnZsV1FwUThZcGZaTVdORXctaWxNNFVuRWZjOTBXZURpOXlPN01LaExHUQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:04:19"
    },
    {
      "source": "Investing.com",
      "title_ko": "[1006마감체크] 코스피, 외국인 매도에 7000선 반납... 코스닥은 900선 회복 By 인포스탁데일리",
      "title_en": "",
      "summary_ko": "[1006마감체크] 코스피, 외국인 매도에 7000선 반납... 코스닥은 900선 회복 By 인포스탁데일리 Investing.com 한국어. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. Investing.com뿐만 아니라 녹색경제신문, 파이낸셜뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "녹색경제신문",
          "title_ko": "코스피, 외국인 '팔자'에 약세...6910선 사수",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9NYXpZU1ZacldQM1pMcTBqRmM5Si1WUFJSUFBfa2hCazBhQndaaWFXOWFEam52WjZmWXQ5MzlmQXJUWE05UXFhcThZMWdJcUJ4VDl2OGJaSnRFT3B3V1hybmNHaWpZZDR4?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9NYXpZU1ZacldQM1pMcTBqRmM5Si1WUFJSUFBfa2hCazBhQndaaWFXOWFEam52WjZmWXQ5MzlmQXJUWE05UXFhcThZMWdJcUJ4VDl2OGJaSnRFT3B3V1hybmNHaWpZZDR4?oc=5"
        },
        {
          "source": "브릿지경제",
          "title_ko": "[마감시황] 코스피, 외국인 2.6조 순매도에 1.98% 내린 6800선 마감",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE55S2twNGVjc3ZoeG5Rd1VPRnJYVXdxaW5hU0p3TUZZbVo4MWh1WkVPSnU3dUJvY3R1MFFSRU9OQTZWTGQyRWRfZXZjLTU2alN4WjZwcnlPNDVJdw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE55S2twNGVjc3ZoeG5Rd1VPRnJYVXdxaW5hU0p3TUZZbVo4MWh1WkVPSnU3dUJvY3R1MFFSRU9OQTZWTGQyRWRfZXZjLTU2alN4WjZwcnlPNDVJdw?oc=5"
        },
        {
          "source": "코리아리포트",
          "title_ko": "코스피, 외국인 매도에 '7천선' 반납…코스닥은 3% 상승",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1CN3RNb0FYakJwdFlqOUxjd2ZkYklodVFuT1FOMi1BalUtZ0ZwY3hSMnFJa3N2bEFZdHA2bnJzaXpFeVpySHVxRm8zaE1KelMxZFhadWpiZ0w0V1ZuN05QQWlKTnRudmNMT2NsVDNOQ1A?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1CN3RNb0FYakJwdFlqOUxjd2ZkYklodVFuT1FOMi1BalUtZ0ZwY3hSMnFJa3N2bEFZdHA2bnJzaXpFeVpySHVxRm8zaE1KelMxZFhadWpiZ0w0V1ZuN05QQWlKTnRudmNMT2NsVDNOQ1A?oc=5"
        },
        {
          "source": "파이낸셜뉴스",
          "title_ko": "코스피, 외국인 2.2조원대 매도세에 6800선 후퇴[fn오후시황]",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1RcHlZdUdZU3RXTkRRX3l2SDhSOU1qOFFZMDBKZTdyV1VGd2dfY3RHcDRqbUtUVEYzRkVZTnVEc21SNS04STFQWEFyYldOLUZ2OTVwUjA4NE1vQQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1RcHlZdUdZU3RXTkRRX3l2SDhSOU1qOFFZMDBKZTdyV1VGd2dfY3RHcDRqbUtUVEYzRkVZTnVEc21SNS04STFQWEFyYldOLUZ2OTVwUjA4NE1vQQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-11 20:04:19"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "RBI, 기준금리 5.5%로 금리 인상…3년여만에 긴축으로 선회",
      "title_en": "",
      "summary_ko": "RBI, 기준금리 5.5%로 금리 인상…3년여만에 긴축으로 선회 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 매일경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE52SWliUWoxYnYwUURvOVVnNnJpdUpsMmhDaXMycFBwMkNKMWZyRzI5aW9LbWl0dktmS0FaWlljZWRmdENaRVNWV0ZISHd6VnhkdDV4Rjk5TjBuODhZeXpWZDIwcGFGenIweXZ4RlNCWWjSAXRBVV95cUxOY2JKYS1Cdk1LZnNEc3gzMWt6T25pNl9PY1pZVTJFMEF2TDdlbjNfR0MwNjdQTVIwc0RHdi1LQXY4MEJpNVh2UzJkVDRNR1JZOVJDcTBRekNiWm9YSUp6M0ktNVhLLWFsT1NscEFwZEh3NnZIaQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE52SWliUWoxYnYwUURvOVVnNnJpdUpsMmhDaXMycFBwMkNKMWZyRzI5aW9LbWl0dktmS0FaWlljZWRmdENaRVNWV0ZISHd6VnhkdDV4Rjk5TjBuODhZeXpWZDIwcGFGenIweXZ4RlNCWWjSAXRBVV95cUxOY2JKYS1Cdk1LZnNEc3gzMWt6T25pNl9PY1pZVTJFMEF2TDdlbjNfR0MwNjdQTVIwc0RHdi1LQXY4MEJpNVh2UzJkVDRNR1JZOVJDcTBRekNiWm9YSUp6M0ktNVhLLWFsT1NscEFwZEh3NnZIaQ?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 07 Oct 2026 07:26:27 GMT",
      "related_articles": [
        {
          "source": "매일경제",
          "title_ko": "9월 FOMC 의사록 \"기준금리 목표 범위, 추가 인상 적절\"",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1XMEgtWktPb1dXSlNaRjUwZU9iM2MxQ2xmRThUUVpSVkJMd1Q2NUI0aXd6ZFFyTmZsazhIa1NaeTBKUll3cWdralE3S2QtS29nTDIxM0JuallZNzk3SEQ2OUdtZ1hWZERh?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1XMEgtWktPb1dXSlNaRjUwZU9iM2MxQ2xmRThUUVpSVkJMd1Q2NUI0aXd6ZFFyTmZsazhIa1NaeTBKUll3cWdralE3S2QtS29nTDIxM0JuallZNzk3SEQ2OUdtZ1hWZERh?oc=5"
        }
      ],
      "crawled_at": "2026-10-11 20:04:19"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "기업어음 금리 올해최고…\"기준금리 인상영향, 연말수급은 주시\"",
      "title_en": "",
      "summary_ko": "기업어음 금리 올해최고…\"기준금리 인상영향, 연말수급은 주시\" 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 연합뉴스, 뉴데일리 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBfV2R6NGE0NW5vWmVpMC05NVY0dUlPMmYzVTBFM1Z4RlBpVkpUVGlDeDk2M1dWbFF4al9LQ1pLV3VTVEtwbjhHbU1UV1BvaXJUNEVXM3Mxa3F6WVdzYncxVFhEOTlQMkRPZ3NLTU5UbGg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBfV2R6NGE0NW5vWmVpMC05NVY0dUlPMmYzVTBFM1Z4RlBpVkpUVGlDeDk2M1dWbFF4al9LQ1pLV3VTVEtwbjhHbU1UV1BvaXJUNEVXM3Mxa3F6WVdzYncxVFhEOTlQMkRPZ3NLTU5UbGg?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 07 Oct 2026 02:19:00 GMT",
      "related_articles": [
        {
          "source": "연합뉴스",
          "title_ko": "인도중앙은행, 3년8개월만 첫 기준금리 인상…\"인플레 대응\"",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE40Rl9zS1g4X0QzWkRHOUtUNk9IbExwQVJyMHkzS0dqck01XzZmMXRicmtNM2M3bTVUQnZJNzN5NFQtNkswNVZkQ29EQXBJNjV0QktPV2xOeEVMVUXSAWBBVV95cUxNbUtZRmxoZDdCVFJiMDJlV0o2d19CR1ByQlpHM09qYlpETnMzMmpheWNxbjdwVDdHbFI4dnJQanZQeVUwbFNMM01BdmRRbDBBZlZWMENkLWo5dHB5UnZQYUk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE40Rl9zS1g4X0QzWkRHOUtUNk9IbExwQVJyMHkzS0dqck01XzZmMXRicmtNM2M3bTVUQnZJNzN5NFQtNkswNVZkQ29EQXBJNjV0QktPV2xOeEVMVUXSAWBBVV95cUxNbUtZRmxoZDdCVFJiMDJlV0o2d19CR1ByQlpHM09qYlpETnMzMmpheWNxbjdwVDdHbFI4dnJQanZQeVUwbFNMM01BdmRRbDBBZlZWMENkLWo5dHB5UnZQYUk?oc=5"
        },
        {
          "source": "뉴데일리",
          "title_ko": "美연준, 2연속 기준금리 인상에 신중론 … \"서두를 필요 없다\"",
          "original_url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1TWGpLZ1VNTUV3eEJ5X1FLck44OVRPeGZRNGRuSE4yMG1kYTJmVDBHUFNhZm1jV1daM3ZNbmI4ME9ramdVSFpVeXN0WUhhdHVCeDh0Z2VtY29pUjFoLVVfSTZmenZWRUo0dTdQSDRjVDVPczVramxPd016c9IBgAFBVV95cUxQN0lHLXpBWXBBSm9hVVAtYzl3UUFQc042M2pjMDNUNThTYmVWaDNtUktwRFh0aW5weDZZZHJUQ19JQl9taEp6V0tldzdzUFA5MEZSU0NlZlM1aXd1SlFaOGRnYjU2ZzAtNTQ1TFdaRnBPNVh4R3NqUDlrYWJ1dE8ycA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1TWGpLZ1VNTUV3eEJ5X1FLck44OVRPeGZRNGRuSE4yMG1kYTJmVDBHUFNhZm1jV1daM3ZNbmI4ME9ramdVSFpVeXN0WUhhdHVCeDh0Z2VtY29pUjFoLVVfSTZmenZWRUo0dTdQSDRjVDVPczVramxPd016c9IBgAFBVV95cUxQN0lHLXpBWXBBSm9hVVAtYzl3UUFQc042M2pjMDNUNThTYmVWaDNtUktwRFh0aW5weDZZZHJUQ19JQl9taEp6V0tldzdzUFA5MEZSU0NlZlM1aXd1SlFaOGRnYjU2ZzAtNTQ1TFdaRnBPNVh4R3NqUDlrYWJ1dE8ycA?oc=5"
        }
      ],
      "crawled_at": "2026-10-11 20:04:20"
    },
    {
      "source": "서울파이낸스",
      "title_ko": "기준금리 연속 인상에도 변동금리 대출 증가···가계부채 경고등",
      "title_en": "",
      "summary_ko": "기준금리 연속 인상에도 변동금리 대출 증가···가계부채 경고등 서울파이낸스. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 서울파이낸스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9xQVpsNXJmWW43UHd3aDY4M21GTWFmd1pJZ3FhRWZXVEs4NllEMVFBRkxOVzdsUERvYkVEei03VjVPdW1jbklmdGJjWWFqc3dhYUJUS21fNEZEQXBmeEVYa2Via0lkMi1pblE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9xQVpsNXJmWW43UHd3aDY4M21GTWFmd1pJZ3FhRWZXVEs4NllEMVFBRkxOVzdsUERvYkVEei03VjVPdW1jbklmdGJjWWFqc3dhYUJUS21fNEZEQXBmeEVYa2Via0lkMi1pblE?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 11 Oct 2026 05:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-11 20:04:20"
    },
    {
      "source": "뉴스1",
      "title_ko": "美연준 \"연내 기준금리 한 차례 더 인상\"…9월 FOMC 의사록 공개",
      "title_en": "",
      "summary_ko": "美연준 \"연내 기준금리 한 차례 더 인상\"…9월 FOMC 의사록 공개 뉴스1. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 뉴스1에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBJWE1zR2d3STFlelFheWswb0VmZHdxVkx0RHpYbUdoUlE1UW9wSWt2OEFwTVhGcW9Ic2Y5Wl8zTjlwUzJJcUlvM2pJUUdVOW5GQjJGSTFpQ3I?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBJWE1zR2d3STFlelFheWswb0VmZHdxVkx0RHpYbUdoUlE1UW9wSWt2OEFwTVhGcW9Ic2Y5Wl8zTjlwUzJJcUlvM2pJUUdVOW5GQjJGSTFpQ3I?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 07 Oct 2026 19:35:08 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-11 20:04:20"
    },
    {
      "source": "한국경제",
      "title_ko": "\"전세·가계부채 등 韓 경제현상, 국제적 연구의제로 발전시킬 것\"",
      "title_en": "",
      "summary_ko": "\"전세·가계부채 등 韓 경제현상, 국제적 연구의제로 발전시킬 것\" 한국경제. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 한국경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9iZERxZ1FZS1FrSWFscXI4YVo5QkdONS0wNE9Xcl9PZTBqbEJ1RFBBSkl6ZTZ6S0VBNm8wa2N5al9DVU5XVW9HVVUwQXQ3T2J4X1JRTFE3cWpXdw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9iZERxZ1FZS1FrSWFscXI4YVo5QkdONS0wNE9Xcl9PZTBqbEJ1RFBBSkl6ZTZ6S0VBNm8wa2N5al9DVU5XVW9HVVUwQXQ3T2J4X1JRTFE3cWpXdw?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 11 Oct 2026 09:10:34 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-11 20:04:20"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Nvidia-Backed IPO’s Cratering Demand Sends Warning on AI Funding",
      "title_en": "Nvidia-Backed IPO’s Cratering Demand Sends Warning on AI Funding",
      "summary_ko": "Nvidia-Backed IPO’s Cratering Demand Sends Warning on AI Funding Bloomberg.com. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNY1Bic0VhVWU5NVVMNWxfTzl3WTJPenlXS0JGVzl1cW1NUVlzWHhhcDBteV9nUUJrTFlmVG9DZFpnUGF2N1A5amJoeTItX2pGUnVDaUFjb1UtRGNyZ0N4UzdKeHR4RkYzTkxnX0VSV3V3ODlWMFJiYVN6QkhGU2IyYVh6QmZFQ1dWSmVFalpqX0IwcS03TklBazZFcU1wX19qSmdSNHlLVUdiMzZpRDNVczFkTmNYUQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNY1Bic0VhVWU5NVVMNWxfTzl3WTJPenlXS0JGVzl1cW1NUVlzWHhhcDBteV9nUUJrTFlmVG9DZFpnUGF2N1A5amJoeTItX2pGUnVDaUFjb1UtRGNyZ0N4UzdKeHR4RkYzTkxnX0VSV3V3ODlWMFJiYVN6QkhGU2IyYVh6QmZFQ1dWSmVFalpqX0IwcS03TklBazZFcU1wX19qSmdSNHlLVUdiMzZpRDNVczFkTmNYUQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Thu, 08 Oct 2026 23:07:19 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Falls",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOMmZza3lFQmV4Y3NTNVlkOThiYTlkUWFGY1lPUWF1SEpPRkRNXy1GRnpNYWlDa1JqdEJRejYyVF9mSlQ2eldpbGR0dFRRM1dWVS1oY1RmMGNqRy1aVExud1duUXhTZHdZTW9SU2J6aVBrMTVUVmNubDlQc3F6TjNHem4zWTM1dlp6dWFtbzd6d3ZOOE43NDNXYkpGMzMwR1NqQ2VfT3FPVGMtbEJHdzFMNQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOMmZza3lFQmV4Y3NTNVlkOThiYTlkUWFGY1lPUWF1SEpPRkRNXy1GRnpNYWlDa1JqdEJRejYyVF9mSlQ2eldpbGR0dFRRM1dWVS1oY1RmMGNqRy1aVExud1duUXhTZHdZTW9SU2J6aVBrMTVUVmNubDlQc3F6TjNHem4zWTM1dlp6dWFtbzd6d3ZOOE43NDNXYkpGMzMwR1NqQ2VfT3FPVGMtbEJHdzFMNQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOTTdRWmlock9MZXVkX09SREZqQW43VE9DQ2ltalZmaE5DNzdjaGdhRm1tZHVJaTlQT2F3Q1g5NTMtcENBQWU5dXI3NTk3M0J4UkNEak5FQkdEUmlHSEJQZ09FWXRvblIzWnNRQzNha3BrWklQN3dCTkdnOVBLbkZ3bTdIb1EzZmo0NlVicF9WcTJJekRZNUdtb1kxTFpraXpMVWRpZFFFdXFRZDhhS05zTjJqNks?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxOTTdRWmlock9MZXVkX09SREZqQW43VE9DQ2ltalZmaE5DNzdjaGdhRm1tZHVJaTlQT2F3Q1g5NTMtcENBQWU5dXI3NTk3M0J4UkNEak5FQkdEUmlHSEJQZ09FWXRvblIzWnNRQzNha3BrWklQN3dCTkdnOVBLbkZ3bTdIb1EzZmo0NlVicF9WcTJJekRZNUdtb1kxTFpraXpMVWRpZFFFdXFRZDhhS05zTjJqNks%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia in talks to invest further in Reflection AI or buy it, FT reports",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQQXpmTnVsdlhWdUt0a0hnSUg1YUVoRWNhT2JSQ24yeHFvRWVPdG5SNzNsWkNLVS0zbng0UWZrMS1zaGtXRmNzRThMamRUNXJPUGRwX09vN2J0dXFSUW9ZSThFeGZ6bTg5bnFqVVktSk91RzBNMkN0MGFOX2FSSEFZMzZ4TXhMb1dsc1hpLUwtY1pmeERoMnE0M2llTEI0X1V2cGxRc1UtMnpYUmc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxQQXpmTnVsdlhWdUt0a0hnSUg1YUVoRWNhT2JSQ24yeHFvRWVPdG5SNzNsWkNLVS0zbng0UWZrMS1zaGtXRmNzRThMamRUNXJPUGRwX09vN2J0dXFSUW9ZSThFeGZ6bTg5bnFqVVktSk91RzBNMkN0MGFOX2FSSEFZMzZ4TXhMb1dsc1hpLUwtY1pmeERoMnE0M2llTEI0X1V2cGxRc1UtMnpYUmc%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOdGxrUDVTc2JTVERpVDhpZ0tCekJVZmRMWjkyRHZWWVpGRWlvbVZxZmZGTUgyZDlxV2MzVUFGSmhjeVc2Qkc4cTlNWnNZaGp3MllmR0FwcjVOV0FLZGRNSVUxZm1VQlFSWE00X1czdkVtaGlWMnFUUC0xM0VVd0ZIWTdrY2xtbUhGY19DTmEwY0VRX2lQQjJ4eUs1SHJwVm5ILTVjVHpYNFAxWVBINzJGOEVQMA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOdGxrUDVTc2JTVERpVDhpZ0tCekJVZmRMWjkyRHZWWVpGRWlvbVZxZmZGTUgyZDlxV2MzVUFGSmhjeVc2Qkc4cTlNWnNZaGp3MllmR0FwcjVOV0FLZGRNSVUxZm1VQlFSWE00X1czdkVtaGlWMnFUUC0xM0VVd0ZIWTdrY2xtbUhGY19DTmEwY0VRX2lQQjJ4eUs1SHJwVm5ILTVjVHpYNFAxWVBINzJGOEVQMA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:04:42"
    },
    {
      "source": "Reuters",
      "title_ko": "TSMC's third",
      "title_en": "TSMC's third-quarter revenue surges to record, beating market forecast",
      "summary_ko": "TSMC's third 관련 핵심 동향이 발표되었습니다. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNeVBYZ3dYR1hTREs5alJLQ2RsTHl3d3NMRVhKVVpQb1pYem92N1ZDdWl6MjNpWmswZWZfa1h2ak5NSjRUS0QyVHBaUDBZdmRvOTBTYjc5WktHT29IZV9KQXdiMVlnTDY5Q2VNNEJMbHZXREJxMW9xdUM5TWdna1JURW45Y2pTMlNhc1JWZ09DUWU0MXlFUlpOcDRmRWJweV9ISGNNeWh1RjdRdDNNZ3VEM0g3ZGpFd0J1U3Iw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuwFBVV95cUxNeVBYZ3dYR1hTREs5alJLQ2RsTHl3d3NMRVhKVVpQb1pYem92N1ZDdWl6MjNpWmswZWZfa1h2ak5NSjRUS0QyVHBaUDBZdmRvOTBTYjc5WktHT29IZV9KQXdiMVlnTDY5Q2VNNEJMbHZXREJxMW9xdUM5TWdna1JURW45Y2pTMlNhc1JWZ09DUWU0MXlFUlpOcDRmRWJweV9ISGNNeWh1RjdRdDNNZ3VEM0g3ZGpFd0J1U3Iw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Thu, 08 Oct 2026 05:39:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "TSMC’s Quarterly Revenue Jumps 51% After AI Demand Holds Up",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOSTg3enVNeFlpZmJZV2dvY05xSy1FVXI3NGhCOVRrRlZhRXJRblBFRm8xbDBuQ3hYX2p0RkJUMks2LUZEQ2pjaWxPU0FvWkpFNHlnV0ktUW1KTTdQZE1UWl80S0Vyb1JQVFNWLXVDN2RsNzlLWHVCNURsbEhLVTNjTExnTHhGN3pUdFVRMUVzdGlSaVZNZ3ZDOHg3SEt6X0RvM1h5RUd3SDhMa2k4T2c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxOSTg3enVNeFlpZmJZV2dvY05xSy1FVXI3NGhCOVRrRlZhRXJRblBFRm8xbDBuQ3hYX2p0RkJUMks2LUZEQ2pjaWxPU0FvWkpFNHlnV0ktUW1KTTdQZE1UWl80S0Vyb1JQVFNWLXVDN2RsNzlLWHVCNURsbEhLVTNjTExnTHhGN3pUdFVRMUVzdGlSaVZNZ3ZDOHg3SEt6X0RvM1h5RUd3SDhMa2k4T2c%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia’s Huang Touts Cybersecurity as Next Big Market for AI",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "월가’s Rate Shock Spreads Beneath AI",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxORnFaNG93ZHlzb0F2b3F5MXNoQzEtLXhZOVVjV2xRSUJ6NmF6ZE81UGFqd2dmRnJNZUhncS04RTdsY042TVpabE1Va0lLMjc3aU9GVXV3cXZKdlpiZ1J3SHBqc0dfNmpCOFRCSWYxR05lWHBYcm01T21aRldaZl9tY1B0NFVxVU01VEN0aXF5dEFQMDFBRnp1X2hkSjRjZ3RQVE5QN0w4VmdmZzMtY1BwMjJJbVk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxORnFaNG93ZHlzb0F2b3F5MXNoQzEtLXhZOVVjV2xRSUJ6NmF6ZE81UGFqd2dmRnJNZUhncS04RTdsY042TVpabE1Va0lLMjc3aU9GVXV3cXZKdlpiZ1J3SHBqc0dfNmpCOFRCSWYxR05lWHBYcm01T21aRldaZl9tY1B0NFVxVU01VEN0aXF5dEFQMDFBRnp1X2hkSjRjZ3RQVE5QN0w4VmdmZzMtY1BwMjJJbVk%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:05:00"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Watch SpaceX Eyes $40B for Nvidia Chips, Asian Stocks Hold Near Record Highs",
      "title_en": "Watch SpaceX Eyes $40B for Nvidia Chips, Asian Stocks Hold Near Record Highs",
      "summary_ko": "Watch SpaceX Eyes $40B for Nvidia Chips, Asian Stocks Hold Near Record Highs Bloomberg.com. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOZ3c3N1lManVGanFrNWlUbnFMNmdrWnJUa0tvTmZTSFg1NHFlZFdnMzJIZ094Wm1MWTJ5U2NGcGhHcGxhRENkM2Y4VnNmSUtzQkF0dTY5Ul9ORTVseUw0RFE4TC1mVWJGcFZ5emsybDhoRER1d3ZTNTZMSlhlNjJDbUVQcGVJZw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihgFBVV95cUxOZ3c3N1lManVGanFrNWlUbnFMNmdrWnJUa0tvTmZTSFg1NHFlZFdnMzJIZ094Wm1MWTJ5U2NGcGhHcGxhRENkM2Y4VnNmSUtzQkF0dTY5Ul9ORTVseUw0RFE4TC1mVWJGcFZ5emsybDhoRER1d3ZTNTZMSlhlNjJDbUVQcGVJZw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Wed, 07 Oct 2026 05:02:47 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Ignoring AI bubble fears, investors bet Nvidia and Google will fuel Taiwan stocks to record",
          "original_url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNUEozd0hMdFdfUFU0dGlmUEdsYlhJc2toXzZXYWI2b2NrTEdpQ0NMYnl1QWpHWHF6Y2d2ajVIbS1Ic3RSc0R0ZUpBZVBlMUlmYXNRVGFtSE9JYjFmTFFwSVhiQVZCVkd1UGk2N1RjRmdna2s1ZDdBTzFxM2RvU1VyZVVMS1p3V2NiOV9kXzJzUHAzVW82bmJ1NjFxLVdyN0VzOW9VZVpaay1Dd1k5S29kZlhObDJJcG1vV1B4czlBb2xYUFc3WS1jWkQ4WQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiywFBVV95cUxNUEozd0hMdFdfUFU0dGlmUEdsYlhJc2toXzZXYWI2b2NrTEdpQ0NMYnl1QWpHWHF6Y2d2ajVIbS1Ic3RSc0R0ZUpBZVBlMUlmYXNRVGFtSE9JYjFmTFFwSVhiQVZCVkd1UGk2N1RjRmdna2s1ZDdBTzFxM2RvU1VyZVVMS1p3V2NiOV9kXzJzUHAzVW82bmJ1NjFxLVdyN0VzOW9VZVpaay1Dd1k5S29kZlhObDJJcG1vV1B4czlBb2xYUFc3WS1jWkQ4WQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "SpaceX in Talks to Borrow $40 Billion to Buy Nvidia Chips",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNelk1VmhBcFVqRmpRQndWdklsTm1EVVZmaHk4REFBRXk1WmJYdDMxUDBxSEFkNHl1YWs2OUNCU1ZDWXRVcG9XaGJzR2JHaFUtLXlNaHZTZVNxQjN2NGkzTW5jczlfZXN1S3ppd0ttdnJZemtvM3llR25xOUVvSVMxY3hPd1dtaEtVV2NRNXN4eU5wMG4zUjNxWW9WTEFHT2l4V1p5OE1oODNoVE45bXJGZUQ1SQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxNelk1VmhBcFVqRmpRQndWdklsTm1EVVZmaHk4REFBRXk1WmJYdDMxUDBxSEFkNHl1YWs2OUNCU1ZDWXRVcG9XaGJzR2JHaFUtLXlNaHZTZVNxQjN2NGkzTW5jczlfZXN1S3ppd0ttdnJZemtvM3llR25xOUVvSVMxY3hPd1dtaEtVV2NRNXN4eU5wMG4zUjNxWW9WTEFHT2l4V1p5OE1oODNoVE45bXJGZUQ1SQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "SpaceX seeks $40 billion financing to buy Nvidia chips, sources say",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQZjBzanVwMDltRU1WZFNTWGF3VUw0ZEdQZmlmQWRsbG5lb21pU3VxTlUtM0tZbzNWaFlXY1JhbHcxV0FXX3RpTUVUQlVGenhSYnZ1VlprMzlqdEZwa1lPbEczRnJWRWZfU19nTDdtMzM2WFlMWm0zeWliejlSRUtrdXJsRmM4VFYtbmJXLVprajJ1U2cxVUZPdGhMaUgzRUVJV2R0Q3BiTGJiOHg0ZUYw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxQZjBzanVwMDltRU1WZFNTWGF3VUw0ZEdQZmlmQWRsbG5lb21pU3VxTlUtM0tZbzNWaFlXY1JhbHcxV0FXX3RpTUVUQlVGenhSYnZ1VlprMzlqdEZwa1lPbEczRnJWRWZfU19nTDdtMzM2WFlMWm0zeWliejlSRUtrdXJsRmM4VFYtbmJXLVprajJ1U2cxVUZPdGhMaUgzRUVJV2R0Q3BiTGJiOHg0ZUYw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Trump discloses Nvidia stock trades as he prepares to honor CEO Huang",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPc0R0am1rbndOQjhQUzhJdTNHcXpnb3lDWFVteEs0SzJiVzc5cFNhMkNJZ2F5dzhjSTFlbFE1ZDRHNVE0MTNJM1phbUU1MVZXX0VkdmZoRUJDaU5OX3pPZ3V2bUZIaTMxZ0std2V2eVFyVUlaZGFXNjhCYTNtV1AxbnVsSlJnVXlWTW9JWWhiYTJaczdTR1JBcDNFaFg0YWRmZjRhZVR6c3dvd3pv?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxPc0R0am1rbndOQjhQUzhJdTNHcXpnb3lDWFVteEs0SzJiVzc5cFNhMkNJZ2F5dzhjSTFlbFE1ZDRHNVE0MTNJM1phbUU1MVZXX0VkdmZoRUJDaU5OX3pPZ3V2bUZIaTMxZ0std2V2eVFyVUlaZGFXNjhCYTNtV1AxbnVsSlJnVXlWTW9JWWhiYTJaczdTR1JBcDNFaFg0YWRmZjRhZVR6c3dvd3pv%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:05:22"
    },
    {
      "source": "CTech",
      "title_ko": "DeepSeek’s funding round could approach $15 billion as investor demand surges",
      "title_en": "DeepSeek’s funding round could approach $15 billion as investor demand surges",
      "summary_ko": "DeepSeek’s funding round could approach $15 billion as investor demand surges CTech. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. CTech뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "DeepSeek to Raise at Least $12 Billion in Tencent",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQQXVsa1AtZXBYRFRpZG9IQ1JKcW5qVjZiLVNsUDhRc2hJRWJVYlZ1cXR3TGdKS2NOb3hkZ3dFM1lCdjFEWW05YjJPMl85cGwxWFZhbWdWSnNMVGJTem1RY2c5azlLbS1kRnhqdE5tY1NBWVZwM1BDUHV4RWxvcmVzdkdNVEY3VXlqQVF4N0diNU9WUjVJT3VGOU9lNVFEY0VhZlIyMG1yaE96Ui1xOFlwYlJLS28?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxQQXVsa1AtZXBYRFRpZG9IQ1JKcW5qVjZiLVNsUDhRc2hJRWJVYlZ1cXR3TGdKS2NOb3hkZ3dFM1lCdjFEWW05YjJPMl85cGwxWFZhbWdWSnNMVGJTem1RY2c5azlLbS1kRnhqdE5tY1NBWVZwM1BDUHV4RWxvcmVzdkdNVEY3VXlqQVF4N0diNU9WUjVJT3VGOU9lNVFEY0VhZlIyMG1yaE96Ui1xOFlwYlJLS28%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "DeepSeek set to net over $12 billion in new fundraising, source says",
          "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPQ0hfa1A1NjJCNExCcDJkTmFQOTMtOTV5MU9ZSDQ4M0pUTDBBUzdTNjVTMHpkMUROdG5qWVBXaVcza29USWdhRHd0dDcyRmdBSDBYYVYzYzVSeVN4WlhkN2pURGk4blpRaFpTYUpjeHhwTDBuQ0dmTWJKNnJIM3dmSEhFUC1TQWltODdoY1ZLSmh4MmNMakhOOXl4RHAzTXM5ckx0NTVoZ2dwc0dDaDRRVVRjSTFBc053cjVMOTl6b1VVcW5rNU9MWk9CdGk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizAFBVV95cUxPQ0hfa1A1NjJCNExCcDJkTmFQOTMtOTV5MU9ZSDQ4M0pUTDBBUzdTNjVTMHpkMUROdG5qWVBXaVcza29USWdhRHd0dDcyRmdBSDBYYVYzYzVSeVN4WlhkN2pURGk4blpRaFpTYUpjeHhwTDBuQ0dmTWJKNnJIM3dmSEhFUC1TQWltODdoY1ZLSmh4MmNMakhOOXl4RHAzTXM5ckx0NTVoZ2dwc0dDaDRRVVRjSTFBc053cjVMOTl6b1VVcW5rNU9MWk9CdGk%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Watch DeepSeek Nears $12B Funding Round Ahead of Potential IPO",
          "original_url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQRUZlS19pWkZvc3FaRmtmdWVQQ1ZDQkZHWjk1TXBqV3hMU0FsOVgyWHlhNi1SQkNoSWpaZE9GVkJQOGtOUDRRcF9DamotS3ZoYWZHQ0hVM0Z1XzNkb3RjQVdha2RhLWdWRXB1OXBQTE1IRkZSYnFDUzVCc3RXZi00dXAzdmpzUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihgFBVV95cUxQRUZlS19pWkZvc3FaRmtmdWVQQ1ZDQkZHWjk1TXBqV3hMU0FsOVgyWHlhNi1SQkNoSWpaZE9GVkJQOGtOUDRRcF9DamotS3ZoYWZHQ0hVM0Z1XzNkb3RjQVdha2RhLWdWRXB1OXBQTE1IRkZSYnFDUzVCc3RXZi00dXAzdmpzUQ%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "Exclusive | Positron Valued at $5 Billion in New Funding as Demand for AI Chips Surges",
          "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQZWpZd1RtLU1tcFpSOUoxYVYtd0gzeTZfanNNaVg1UWxoZ2lfSTFZV2MzdldoTDQyR0lCTGFUd1ZsTG8xcVRlZ1NZWHBPWWphNHdpTTVjSFAtREJnQzhZc0VaS3Vha3U0bVBPQXZqdmhRRlV0Rm9DWnE2MnFTTS1sTWlwajZ1VHFDanNianRkRnpkaG5WZ3ZfT01NdkkzaHlSbUw0?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxQZWpZd1RtLU1tcFpSOUoxYVYtd0gzeTZfanNNaVg1UWxoZ2lfSTFZV2MzdldoTDQyR0lCTGFUd1ZsTG8xcVRlZ1NZWHBPWWphNHdpTTVjSFAtREJnQzhZc0VaS3Vha3U0bVBPQXZqdmhRRlV0Rm9DWnE2MnFTTS1sTWlwajZ1VHFDanNianRkRnpkaG5WZ3ZfT01NdkkzaHlSbUw0%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:05:44"
    },
    {
      "source": "Reuters",
      "title_ko": "Musk says TSMC won't run Terafab AI chip complex",
      "title_en": "Musk says TSMC won't run Terafab AI chip complex",
      "summary_ko": "Musk says TSMC won't run Terafab AI chip complex Reuters. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Reuters뿐만 아니라 Bloomberg, The Information 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQdXV3b1VldjdSN0dMQlNTZm9JYmRscDY2UllLUnlaTEJoU21xVzRpVXhucnlxbFhsOUFLUmlYU1EzejBIRWQzYm0zeTdVdE1lckU4V01RZ2pneE9nbkI1UHJHTGM2UkIwaUI4WWltR1pocHpmcHZraExfVHB4dld0N1pGX2ZRTWw5Zjc2V0FhTEg5Y29DN0hYMmdmVV9YVWNnZjlQRmNlNF9sMGozVVFOOWNOc2FDWlBZbVRzaTJxcmFrUU1UT1c2T1NSR0JzQQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizgFBVV95cUxQdXV3b1VldjdSN0dMQlNTZm9JYmRscDY2UllLUnlaTEJoU21xVzRpVXhucnlxbFhsOUFLUmlYU1EzejBIRWQzYm0zeTdVdE1lckU4V01RZ2pneE9nbkI1UHJHTGM2UkIwaUI4WWltR1pocHpmcHZraExfVHB4dld0N1pGX2ZRTWw5Zjc2V0FhTEg5Y29DN0hYMmdmVV9YVWNnZjlQRmNlNF9sMGozVVFOOWNOc2FDWlBZbVRzaTJxcmFrUU1UT1c2T1NSR0JzQQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 07 Oct 2026 08:03:14 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Elon Musk Rules Out Potential TSMC Role in Terafab Operations",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNbzY3RGpPc0pVaURhb05fMzFjUWhkX1NjX3I3MnFxXzVrRmpjWWJGemxObFhUU3lIb0hELV9MZVhPeWdHMDAxaXQ0RWw0ZGZVWEhhUGtrN3A0dWo0QllLMFJUODB3UXlUaHZNN0NOWkppaVVrdkt1WmU5bVBnWFNfaWNiajBWeVZYTjNYdERDeG1MdC1iTm1aTzV1T0xqN2FPMnpXSERYRUhDM2lEc1F5T21n?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNbzY3RGpPc0pVaURhb05fMzFjUWhkX1NjX3I3MnFxXzVrRmpjWWJGemxObFhUU3lIb0hELV9MZVhPeWdHMDAxaXQ0RWw0ZGZVWEhhUGtrN3A0dWo0QllLMFJUODB3UXlUaHZNN0NOWkppaVVrdkt1WmU5bVBnWFNfaWNiajBWeVZYTjNYdERDeG1MdC1iTm1aTzV1T0xqN2FPMnpXSERYRUhDM2lEc1F5T21n%3Foc%3D5"
        },
        {
          "source": "The Information",
          "title_ko": "DeepSeek Open",
          "original_url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOMUNQNk9QclVCTG5FbGlpd19GaU1BU1pzT0xNMzJXdUVXZVBMRnh1SU1mb2tNeXpqN01vUWxCbTVkWTRBU2NySDVLT2xsbDF5M2pUUlUxUVdSVW5BdWZOVWhWNjVNTEFXeVBxSzk4SUdxSkd1aXJyLXBTdkI0NEx1NG9ncFdGRTl2Y3pEY2pSLTZscV9pU0ZNdQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimAFBVV95cUxOMUNQNk9QclVCTG5FbGlpd19GaU1BU1pzT0xNMzJXdUVXZVBMRnh1SU1mb2tNeXpqN01vUWxCbTVkWTRBU2NySDVLT2xsbDF5M2pUUlUxUVdSVW5BdWZOVWhWNjVNTEFXeVBxSzk4SUdxSkd1aXJyLXBTdkI0NEx1NG9ncFdGRTl2Y3pEY2pSLTZscV9pU0ZNdQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Microsoft Plans Production Boost for AI Chips, Report Says",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNcEF3N3FXM2Q5cW9DcVpFY0FGYnVoTGJqN05yNl9PUUx0RnNpQ0tlNHEza2xIMHhjcjd0cy00Y2NWQ3NhSzNwNktCeFBnSzdKbkpoVEJBM1Y3LVRNUW1uSmhvc0xhOW8tN2pZU2xMRDN6MURuUWFzT2l3WHZKRl80b1M1N25WemdVWVpqTEJmOGpTMWljbERZTGRFbl9tbVI1Qmd4Z0RiQ1ZCMjJMN1BQTHJscw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxNcEF3N3FXM2Q5cW9DcVpFY0FGYnVoTGJqN05yNl9PUUx0RnNpQ0tlNHEza2xIMHhjcjd0cy00Y2NWQ3NhSzNwNktCeFBnSzdKbkpoVEJBM1Y3LVRNUW1uSmhvc0xhOW8tN2pZU2xMRDN6MURuUWFzT2l3WHZKRl80b1M1N25WemdVWVpqTEJmOGpTMWljbERZTGRFbl9tbVI1Qmd4Z0RiQ1ZCMjJMN1BQTHJscw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-11 20:06:03"
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
