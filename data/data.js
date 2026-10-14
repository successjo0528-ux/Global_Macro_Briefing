window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-10-15 05:01:46",
    "date_str": "2026년 10월 15일 (목)",
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
      "price": 4.085,
      "previous_close": 4.037,
      "change": 0.048,
      "change_percent": 1.19,
      "display_price": "4.085%",
      "status": "up",
      "history": [
        4.037,
        4.037,
        4.043,
        4.057,
        4.05,
        4.057,
        4.085
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-10-14 20:00:42"
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
      "price": 5.19,
      "previous_close": 5.269,
      "change": -0.079,
      "change_percent": -1.5,
      "display_price": "5.190%",
      "status": "down",
      "history": [
        5.269,
        5.277,
        5.231,
        5.244,
        5.24,
        5.217,
        5.19
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-10-14 20:00:42",
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
      "price": 5.525,
      "previous_close": 5.641,
      "change": -0.116,
      "change_percent": -2.06,
      "display_price": "5.525%",
      "status": "down",
      "history": [
        5.641,
        5.661,
        5.606,
        5.6,
        5.598,
        5.563,
        5.525
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-10-14 20:00:42"
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
      "price": 102.543,
      "previous_close": 102.24,
      "change": 0.303,
      "change_percent": 0.3,
      "display_price": "102.54 pt",
      "status": "up",
      "history": [
        102.24,
        102.14,
        102.21,
        102.58,
        102.18,
        102.543
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-10-14 20:00:43"
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
      "price": 158.322,
      "previous_close": 157.963,
      "change": 0.359,
      "change_percent": 0.23,
      "display_price": "158.32엔",
      "status": "up",
      "history": [
        158.296,
        158.06,
        158.063,
        158.203,
        158.52,
        158.322,
        158.322
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-10-14 20:00:43"
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
      "price": 4123.1,
      "previous_close": 4140.7,
      "change": -17.6,
      "change_percent": -0.43,
      "display_price": "$4,123.10",
      "status": "down",
      "history": [
        4140.7,
        4157.0,
        4216.3,
        4190.6,
        4177.3,
        4123.1
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-10-14 20:00:43"
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
      "price": 95.06,
      "previous_close": 88.28,
      "change": 6.78,
      "change_percent": 7.68,
      "display_price": "$95.06",
      "status": "up",
      "history": [
        88.28,
        91.49,
        91.85,
        93.74,
        94.14,
        95.06
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-10-14 20:00:43"
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
      "price": 81771.77,
      "previous_close": 81676.336,
      "change": 95.434,
      "change_percent": 0.12,
      "display_price": "$81,772",
      "status": "up",
      "history": [
        81676.336,
        82546.32,
        82912.227,
        83679.469,
        81762.562,
        83095.125,
        81771.773
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-10-14 20:00:43"
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
      "price": 872.5,
      "previous_close": 353.9,
      "change": 518.6,
      "change_percent": 146.54,
      "display_price": "$872.5B (약 8,725억$)",
      "status": "up",
      "history": [
        30.8,
        15.8,
        887.5,
        920.2,
        306.2,
        353.9,
        872.5
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-10-14 20:00:43"
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
      "price": 7719.54,
      "previous_close": 7773.95,
      "change": -54.41,
      "change_percent": -0.7,
      "display_price": "7,719.54",
      "status": "down",
      "history": [
        7818.93,
        7801.77,
        7765.36,
        7811.54,
        7807.24,
        7805.45,
        7719.54
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-10-14 20:00:44"
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
      "price": 29950.816,
      "previous_close": 31076.44,
      "change": -1125.624,
      "change_percent": -3.62,
      "display_price": "29,950.82",
      "status": "down",
      "history": [
        31224.471,
        31160.08,
        30725.811,
        30883.15,
        30664.699,
        30569.48,
        29950.816
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-10-14 20:00:44"
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
      "price": 11684.383,
      "previous_close": 13172.74,
      "change": -1488.357,
      "change_percent": -11.3,
      "display_price": "11,684.38",
      "status": "down",
      "history": [
        13217.82,
        13066.15,
        12623.71,
        12572.42,
        12236.79,
        12208.79,
        11684.383
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-10-14 20:00:45"
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
      "price": 16.9,
      "previous_close": 15.01,
      "change": 1.89,
      "change_percent": 12.59,
      "display_price": "16.90",
      "status": "up",
      "history": [
        15.01,
        15.08,
        15.41,
        14.84,
        15.21,
        15.27,
        16.9
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-10-14 20:00:45"
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
      "price": 1341.31,
      "previous_close": 1343.75,
      "change": -2.44,
      "change_percent": -0.18,
      "display_price": "1,341.31원",
      "status": "down",
      "history": [
        1339.74,
        1339.08,
        1342.99,
        1340.84,
        1334.13,
        1340.31,
        1341.31
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-10-14 20:00:45",
      "fx_averages": {
        "avg_1y": 1451.3,
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
      "price": 6008.81,
      "previous_close": 6971.35,
      "change": -962.54,
      "change_percent": -13.81,
      "display_price": "6,008.81",
      "status": "down",
      "history": [
        7003.74,
        6941.39,
        6803.9,
        6625.93,
        6384.24,
        6035.35
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-10-14 20:00:45"
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
      "price": 823.88,
      "previous_close": 894.29,
      "change": -70.41,
      "change_percent": -7.87,
      "display_price": "823.88",
      "status": "down",
      "history": [
        893.29,
        919.92,
        898.43,
        892.27,
        849.19,
        837.03
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-10-14 20:00:45"
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
      "updated_at": "2026-10-14 20:00:46"
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
      "updated_at": "2026-10-14 20:00:47"
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
      "price": 159.82,
      "previous_close": 191.46,
      "change": -31.64,
      "change_percent": -16.53,
      "display_price": "$159.82",
      "status": "down",
      "history": [
        186.4,
        183.69,
        176.29,
        177.24,
        170.11,
        166.56,
        159.82
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-10-14 20:00:47"
    }
  ],
  "news": [
    {
      "source": "Reuters",
      "title_ko": "미국의 인플레이션은 9월에 과열됩니다. 연준(Fed)이 이번 달에 다시 테이블에 등장했습니다.",
      "title_en": "US inflation heats up in September; Fed rate hike this month back on table",
      "summary_ko": "미국의 인플레이션은 9월에 과열됩니다. 연준(Fed)이 이번 달에 테이블에 등장했습니다. Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNX3hkV3J5em1xWWY4V0hQODFTamFtU3NvdkpPRUUzMGY0TnlKaVlneXZPc0J6bFpWdDZWb2hLRkZZaHhZVElDSXNFbGNYMVVBRGR6c1RlNDA4cEhkMEcwck5VMFRtZ1QxOFJqNTkyaGJzWWFLSXp2Z0l1Z19vMDh5bGd6N1FJSkJFR2tZUXd1UWUzeVlvZi1xNTVONk00ejJ5cE0xSGY4THFsaUo0RGxPV3dpaW4tbEZseUE?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxNX3hkV3J5em1xWWY4V0hQODFTamFtU3NvdkpPRUUzMGY0TnlKaVlneXZPc0J6bFpWdDZWb2hLRkZZaHhZVElDSXNFbGNYMVVBRGR6c1RlNDA4cEhkMEcwck5VMFRtZ1QxOFJqNTkyaGJzWWFLSXp2Z0l1Z19vMDh5bGd6N1FJSkJFR2tZUXd1UWUzeVlvZi1xNTVONk00ejJ5cE0xSGY4THFsaUo0RGxPV3dpaW4tbEZseUE%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 14 Oct 2026 17:25:53 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 인플레이션 상승으로 인해 타이트한 도입된 통화",
          "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "월가는 뜨거운 인플레이션 데이터로 인해 연준(Fed) 금리 인상에 대한 우려가 커지면서 하락했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPMDkzb0Zhb0ExSzhlSnR6c25HbzdpY2g1djVFZ1R4eVktaWtCZ2gya1lEdHpzcHlEM1VITE1Pdlc1MmlDclhQQmxOWC13NXdXZjhPOEYtUnc3bm80eThIZ0lEam8tN0hXV3kxNnhob3g5OHFxNHd5VzJsTks4SzlJR0JRVE5LZ2JMbXhYNFhvOC1yTUJ5bWFEN0JWTFdpaFkxN2c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxPMDkzb0Zhb0ExSzhlSnR6c25HbzdpY2g1djVFZ1R4eVktaWtCZ2gya1lEdHpzcHlEM1VITE1Pdlc1MmlDclhQQmxOWC13NXdXZjhPOEYtUnc3bm80eThIZ0lEam8tN0hXV3kxNnhob3g5OHFxNHd5VzJsTks4SzlJR0JRVE5LZ2JMbXhYNFhvOC1yTUJ5bWFEN0JWTFdpaFkxN2c%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "씨티, 인플레이션 충격에 연준(Fed)에 매파로 돌변, 12월 피규어 소개 기대",
          "original_url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQaTlWWnFXTFVrM3lHcHBOZF9YMzFUQkx5WmJXNE5ieXJoY29tVkZKZGRGT3JoX3NBNGNPSERqeW5CTnlDdWh0SWZDZ3gtcGQyOTBFSW90dmgwOEJTdV85SVJxV2dQUmtETDc1RlR4RFNXSzRDZTY2ZFNQTk4tajdmNWZST0FRd1BmaG5kSjhrbWdnVHY2MFNrcFNiaHF6aU1BOEZCSkNCOFZHTGV4TFNmS2czNWg1RHZnOHZN?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuwFBVV95cUxQaTlWWnFXTFVrM3lHcHBOZF9YMzFUQkx5WmJXNE5ieXJoY29tVkZKZGRGT3JoX3NBNGNPSERqeW5CTnlDdWh0SWZDZ3gtcGQyOTBFSW90dmgwOEJTdV85SVJxV2dQUmtETDc1RlR4RFNXSzRDZTY2ZFNQTk4tajdmNWZST0FRd1BmaG5kSjhrbWdnVHY2MFNrcFNiaHF6aU1BOEZCSkNCOFZHTGV4TFNmS2czNWg1RHZnOHZN%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "인도의 9월 인플레이션은 5.54%로 급등해 추가 금리 인상 가능성이 높아졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQdUxxMHVta3BKU2dCLTBRTU5iRm1Xd1gwWWNBTzI4djlyVmFnYWpyZzRJbFQtamt5WHVoaFhCd1lMLVRWMUxpaGw5WERwT3dWZGJvbmRxYjhVUE5pU1Y4NjRzX2lVN1BpXzlBckQxMW4tYmhkNnpKOVQtdUQwSFJKUUZHUThxbnNRYllBZGtGSTV3MXFWZkc4cjRVUHJyU2c2MkNiRWczUl9NTUpVQ2tiSFVjR090Wk9yNjU3NkR4ZklId2o1akswcXNhZ3ptdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizgFBVV95cUxQdUxxMHVta3BKU2dCLTBRTU5iRm1Xd1gwWWNBTzI4djlyVmFnYWpyZzRJbFQtamt5WHVoaFhCd1lMLVRWMUxpaGw5WERwT3dWZGJvbmRxYjhVUE5pU1Y4NjRzX2lVN1BpXzlBckQxMW4tYmhkNnpKOVQtdUQwSFJKUUZHUThxbnNRYllBZGtGSTV3MXFWZkc4cjRVUHJyU2c2MkNiRWczUl9NTUpVQ2tiSFVjR090Wk9yNjU3NkR4ZklId2o1akswcXNhZ3ptdw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:03"
    },
    {
      "source": "Reuters",
      "title_ko": "연준(Fed)의 윌리엄스, 2027년에는 생체인식 필요없다고 블룸버그통신 보도",
      "title_en": "Fed's Williams sees no need for rate hike in 2027, Bloomberg News reports",
      "summary_ko": "연준(Fed)의 윌리엄스, 2027년에는 생체인식 필요없다고 블룸버그통신 보도 로이터. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Reuters, MarketWatch 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOVlpnSjdVeERKaFdNRkxCTHhRNmY5Y0FFN3k0by1ndE9MYXIzN0pybnJzUFBqR1hOaHpUYjFjODI1ZGNSMjVLRF83S19ZNXB6eGU0YU5MUUVMWEFtSjN4UlRReUpsWFktZ2lfX1pQZDBNS1Qtbk02bXNGRVNQZUlSS2pKZ2wxRUtGZzBWYUxCdGJpbHZkOFlMYWhtb0lRNFZEMDd6ZnY2RjdDRXpVdWhsUVhwN3ZsZ1k?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxOVlpnSjdVeERKaFdNRkxCTHhRNmY5Y0FFN3k0by1ndE9MYXIzN0pybnJzUFBqR1hOaHpUYjFjODI1ZGNSMjVLRF83S19ZNXB6eGU0YU5MUUVMWEFtSjN4UlRReUpsWFktZ2lfX1pQZDBNS1Qtbk02bXNGRVNQZUlSS2pKZ2wxRUtGZzBWYUxCdGJpbHZkOFlMYWhtb0lRNFZEMDd6ZnY2RjdDRXpVdWhsUVhwN3ZsZ1k%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 13 Oct 2026 19:23:55 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 정책입안자들은 올해 또 한 번의 등장을 예고하고 있다.",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPQm5zRF9jbzFRTVF1RkwxbTBpNGJmeHhRR3RNZU9DMHk5c1pndDJveEhwd2RrZHhRMXBFMGV3cHR4OXlJZUJBdWtjRXhFVkUyYUpRd0F5QWs2Y1NtTllTQzJGdkM4UFBVSzRfa01FQjFuS1Ixc2E0NGJ6Q3Z3a2owYUowN21RM0QwWDBuQzJsZW13bVJzTkJqNGE5aklZWWwzbHBERGNBdWUxZE1BT1M4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPQm5zRF9jbzFRTVF1RkwxbTBpNGJmeHhRR3RNZU9DMHk5c1pndDJveEhwd2RrZHhRMXBFMGV3cHR4OXlJZUJBdWtjRXhFVkUyYUpRd0F5QWs2Y1NtTllTQzJGdkM4UFBVSzRfa01FQjFuS1Ixc2E0NGJ6Q3Z3a2owYUowN21RM0QwWDBuQzJsZW13bVJzTkJqNGE5aklZWWwzbHBERGNBdWUxZE1BT1M4%3Foc%3D5"
        },
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
          "source": "MarketWatch",
          "title_ko": "연준(Fed)의 회의록에는 일련의 관심이 보이지 않습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNaF9QQWc3MVFwTXJjNGdBRjd0NUZ6aExkdFpqRkxBSThxMUZteXNiSWJDak1qdTdwRXBkNkdQdDRfekQzN243ODFqNUhBQllGV0pQS3pWY090WThXMTVzZmFnc3pBbENCMGJLaVRXSF9zRUZtZ2dzZE0zelF5dzBadldsZm51dVNVaVpHQTNvVHA3Q2wzQWFmemJIOEs1RzZmQUp5N1hKZzJ1Umc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxNaF9QQWc3MVFwTXJjNGdBRjd0NUZ6aExkdFpqRkxBSThxMUZteXNiSWJDak1qdTdwRXBkNkdQdDRfekQzN243ODFqNUhBQllGV0pQS3pWY090WThXMTVzZmFnc3pBbENCMGJLaVRXSF9zRUZtZ2dzZE0zelF5dzBadldsZm51dVNVaVpHQTNvVHA3Q2wzQWFmemJIOEs1RzZmQUp5N1hKZzJ1Umc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:10"
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
      "pub_date": "Tue, 29 Sep 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "연준(Fed)에서 발행한 7월의 피규어? 확률이 높아지고 있어요",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxONUdmS2Z4R0JWQjJVblhOSnRtcWJXUEVxVFBqcG9JdWhBcjZ1RXVya2ZZNjNqTDVQY2RiSm5xbEUyVlRDSjg5MExzXzdwNW83d2tTaFE3SVBwS1E5VVVRbkpZSmpCekNvZi1iTnJaMUcyb1c3WTk0R1RFQjZUczNOQ2NKQ0lpZW5Ha2hVR19Ld1nSAZYBQVVfeXFMTk1kR0FPT1VVTUdoSDRRZnN5dUtfWkUxdF91emZuMHFxU3p0ZGdkTkxncGpLQ0RaVDFsNjROSDdtRk51dkcySng5cUNVcERaOERSVWhUQzYzcUZhNnEycFYwc1BxN25qSGR4N0NqUEVSTFVwNENjMEpmbUFGTE1mQnk4NEt3bERFUHp1YzI4OWZ1bnVmdFFn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxONUdmS2Z4R0JWQjJVblhOSnRtcWJXUEVxVFBqcG9JdWhBcjZ1RXVya2ZZNjNqTDVQY2RiSm5xbEUyVlRDSjg5MExzXzdwNW83d2tTaFE3SVBwS1E5VVVRbkpZSmpCekNvZi1iTnJaMUcyb1c3WTk0R1RFQjZUczNOQ2NKQ0lpZW5Ha2hVR19Ld1nSAZYBQVVfeXFMTk1kR0FPT1VVTUdoSDRRZnN5dUtfWkUxdF91emZuMHFxU3p0ZGdkTkxncGpLQ0RaVDFsNjROSDdtRk51dkcySng5cUNVcERaOERSVWhUQzYzcUZhNnEycFYwc1BxN25qSGR4N0NqUEVSTFVwNENjMEpmbUFGTE1mQnk4NEt3bERFUHp1YzI4OWZ1bnVmdFFn%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:13"
    },
    {
      "source": "MarketWatch",
      "title_ko": "의견: 내일 발표되는 연준 회의록은 향후 금리 인상에 대한 중요한 단서를 시장에 제공할 수 있습니다.",
      "title_en": "Opinion: Fed minutes coming tomorrow could give markets important clues about future rate hikes",
      "summary_ko": "의견: 내일 연준 회의록은 향후 금리 인상에 대한 중요한 단서를 시장에 제공할 수 있음 MarketWatch. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. MarketWatch에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPV09PMVdnLUY2MmZwd2NJZW1rMjRqQ0JJOTUtQVdEVWxvT2VFYjBmV0RMbER5TFdNNE1HQ3NvMkxVZ0RSOXh3eEIyQVFuQ2RidENKcDBQQVM0UkFRaHlYcFB5S0ZWcW8wWHVuOEdRTEV2alNvYU5qcXRmcGxSX0tUWVJ0N3JjLVBTUHRfa2x1YWdPcFZ0WV9VM0NlM0Y2TW0yMkY5Tlk1WFVybml5MW4tUmhQRFlJUUpvNHdXZE1xWmVzVzdWNk1qSG93?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiygFBVV95cUxPV09PMVdnLUY2MmZwd2NJZW1rMjRqQ0JJOTUtQVdEVWxvT2VFYjBmV0RMbER5TFdNNE1HQ3NvMkxVZ0RSOXh3eEIyQVFuQ2RidENKcDBQQVM0UkFRaHlYcFB5S0ZWcW8wWHVuOEdRTEV2alNvYU5qcXRmcGxSX0tUWVJ0N3JjLVBTUHRfa2x1YWdPcFZ0WV9VM0NlM0Y2TW0yMkY5Tlk1WFVybml5MW4tUmhQRFlJUUpvNHdXZE1xWmVzVzdWNk1qSG93%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 06 Oct 2026 07:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-14 20:01:14"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "'월마트 경기침체 신호' 다시 급등…\"연준 금리 인하 전환 가능성\"",
      "title_en": "",
      "summary_ko": "'월마트 경기침체 신호' 다시 급등…\"연준 금리 인하 전환 가능성\" 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 블루밍비트, BeInCrypto 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBxRU1wcllKV3JvQnhWclFKdVI3Yk5WX3BnMW5Vc3NJOUlLSURHTUdzazdUNUhpVHA5UXVscmRiaDN1MlRBajVyemF4SnR1N3l6bG5LcVo0U0dNTW1nRU12cDlOX0FzMHBVdE1oWTgzbGM?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBxRU1wcllKV3JvQnhWclFKdVI3Yk5WX3BnMW5Vc3NJOUlLSURHTUdzazdUNUhpVHA5UXVscmRiaDN1MlRBajVyemF4SnR1N3l6bG5LcVo0U0dNTW1nRU12cDlOX0FzMHBVdE1oWTgzbGM?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 13 Oct 2026 01:04:00 GMT",
      "related_articles": [
        {
          "source": "BeInCrypto",
          "title_ko": "미국 인플레이션 3.7%…비트코인·금 하락, 10월 연준 금리 인상?",
          "original_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE4wbV96RURYZmhDMmYxQ3FZNWZHcXdRclA5SDdCNGZ0WjNyVTkzLUREVTlOUUw1Y3NacmtWbkZoZ3o5c3RwMnBaV0M2c3VTRXNxUmEwb3JhbFFBalFpOV9QOGFuWEtnc2l6czNaZQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE4wbV96RURYZmhDMmYxQ3FZNWZHcXdRclA5SDdCNGZ0WjNyVTkzLUREVTlOUUw1Y3NacmtWbkZoZ3o5c3RwMnBaV0M2c3VTRXNxUmEwb3JhbFFBalFpOV9QOGFuWEtnc2l6czNaZQ?oc=5"
        },
        {
          "source": "블루밍비트",
          "title_ko": "美 연준 콜린스 \"연내 추가 금리 인상 가능성 높아\"…인플레 압력 경계",
          "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1ERHlUOXpfN0tZVHgycUthancyU0VyV2o3bEZqcVJ4el9jYlJCV3BjSGswaG4tN0JIRk1CU2NFWktIeTU1ZzliWHB3SUJIQUls?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1ERHlUOXpfN0tZVHgycUthancyU0VyV2o3bEZqcVJ4el9jYlJCV3BjSGswaG4tN0JIRk1CU2NFWktIeTU1ZzliWHB3SUJIQUls?oc=5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:15"
    },
    {
      "source": "Reuters",
      "title_ko": "미국 수익( 금리) 급등으로 모기지 헤징이 유발되고 채권 시장에 압력이 가중됩니다.",
      "title_en": "US yield surge triggers mortgage hedging, adds to bond market pressure",
      "summary_ko": "미국 수익( 금리) 급증으로 모기지 헤징이 유발되고 채권 시장 압력이 가중됨 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOSDF3em5PS0NkZ3ZlcnJlQktDOFBTQjlhZmhpYWJ1WHRyRWlyX1dQbTJRd0FqMk52WU1zZGNvVDdJcnNCUFllLUlnUVBPVzREd3VESXpXU1dLWFpZeVQweW1RYUlqRmtfbk1DYVJ2UWt0dDVrcGUtM282UXNyR0IxejBkLWZFdHg0VF9TenZDMUc4bDZldkk0Uk82WVFObDVST2NsWE9wT0RxZF9jY1RVQg?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOSDF3em5PS0NkZ3ZlcnJlQktDOFBTQjlhZmhpYWJ1WHRyRWlyX1dQbTJRd0FqMk52WU1zZGNvVDdJcnNCUFllLUlnUVBPVzREd3VESXpXU1dLWFpZeVQweW1RYUlqRmtfbk1DYVJ2UWt0dDVrcGUtM282UXNyR0IxejBkLWZFdHg0VF9TenZDMUc4bDZldkk0Uk82WVFObDVST2NsWE9wT0RxZF9jY1RVQg%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Mon, 12 Oct 2026 14:39:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "미국채/재무부수익( 금리) 석유 급등, 환매 결과 연료 매도",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPVDFoMGQwT1RfV280cU11T0IxcTFHbEVSaXkxLXJyaGVaVG1MRGowVWFXSC0xVDNTRDc5cGx1dUlXM3dfbmZxRE1xVmpTclpRQ0gxOVRJX1c5QzR5czd5WDJpWktpdGx3Q0JPcmVQdGs3VU1tS0x4R1FxbHYwMTBwdXlHdEpZM3RtdEJyTjRvbVBxVElLLU02ZGtJbmRpc1B3R0tnc0lSSVR6b0xSalhNcWRZMWxPQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPVDFoMGQwT1RfV280cU11T0IxcTFHbEVSaXkxLXJyaGVaVG1MRGowVWFXSC0xVDNTRDc5cGx1dUlXM3dfbmZxRE1xVmpTclpRQ0gxOVRJX1c5QzR5czd5WDJpWktpdGx3Q0JPcmVQdGs3VU1tS0x4R1FxbHYwMTBwdXlHdEpZM3RtdEJyTjRvbVBxVElLLU02ZGtJbmRpc1B3R0tnc0lSSVR6b0xSalhNcWRZMWxPQQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent의 대규모 자사주 매입이 채권 시장 현실에 타격을 받음",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPMHM4dHJQb1psOHhIc3JyX1Mzc0dOd2RtcDRPUFpzeXlIWWhjNjB3elFmYXBHRDhaemJiX0lDaFRTUnRSLU94SDBiTndjQjh0d3NoTXI5anNWLUlwUEZwR3VXcDhDRHFYRkdES1N5cVk2c3I0YnVFWlp6d2g2N0Y1V1JVSTZpekgteUVBZGNnckNqdFlac0pyazBnaThDeFNYS1BjWkdHSWxWa0l6ZDVzZnVESQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPMHM4dHJQb1psOHhIc3JyX1Mzc0dOd2RtcDRPUFpzeXlIWWhjNjB3elFmYXBHRDhaemJiX0lDaFRTUnRSLU94SDBiTndjQjh0d3NoTXI5anNWLUlwUEZwR3VXcDhDRHFYRkdES1N5cVk2c3I0YnVFWlp6d2g2N0Y1V1JVSTZpekgteUVBZGNnckNqdFlac0pyazBnaThDeFNYS1BjWkdHSWxWa0l6ZDVzZnVESQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "베센트 행보 뒤에 월가, 인연의 흔적이 보인다",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPTGtZcUxST3BKd3FOQ2l3TDltSUlfQl82cGhRLU9XOHZNdHltaEFUM3RaMmNzdGRIQWJRSWR1c0VEUVJDYTVycVhRbVpTNjc4SFBFdUo2TnBHTWF0MjVIc0ZWb254Uzc4MXlkQnFORUd3d0RWT3VJdkpWMUJfTVNIOGtvUTNZVUVaUUVOYXRsQUtFeXZmbzRSOHNSWHRGT2FXaTFNNGNuZXFwVUs1T2JUUnpDWnM?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxPTGtZcUxST3BKd3FOQ2l3TDltSUlfQl82cGhRLU9XOHZNdHltaEFUM3RaMmNzdGRIQWJRSWR1c0VEUVJDYTVycVhRbVpTNjc4SFBFdUo2TnBHTWF0MjVIc0ZWb254Uzc4MXlkQnFORUd3d0RWT3VJdkpWMUJfTVNIOGtvUTNZVUVaUUVOYXRsQUtFeXZmbzRSOHNSWHRGT2FXaTFNNGNuZXFwVUs1T2JUUnpDWnM%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:21"
    },
    {
      "source": "Reuters",
      "title_ko": "중동 위험, 기술 대패로 인해 아시아 주식에서 해외 유출 급증",
      "title_en": "Foreign outflows from Asian equities surge on Middle East risks, tech rout",
      "summary_ko": "중동 리스크로 인해 아시아 주식에서 해외 자금 유출 급증 Reuters. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 Bloomberg, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Bloomberg",
          "title_ko": "중동 싸움으로 인플레이션 우려로 금 하락세 유지",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNNGxFTlR1SHo4d3B6YnI0bEpxUTNSeE92ZkRWNW45WG5wMDhCcVJqSDdjVDZXWnpEV2xlTWlVbnVxYWJ3Y0V2SGpaVjB0MldSWllRQS1rREVnamFUTGxIWlhTSk0tT3BRUEFkbVVuSWlxa3UxMFRxOS11RXMzR3VvVExCTDM2ZE9DbmN2cnp1XzBFblA1cmo1STBzTGJYLWxhak1Ma2NBMGpsUDJOWU92REt0SQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxNNGxFTlR1SHo4d3B6YnI0bEpxUTNSeE92ZkRWNW45WG5wMDhCcVJqSDdjVDZXWnpEV2xlTWlVbnVxYWJ3Y0V2SGpaVjB0MldSWllRQS1rREVnamFUTGxIWlhTSk0tT3BRUEFkbVVuSWlxa3UxMFRxOS11RXMzR3VvVExCTDM2ZE9DbmN2cnp1XzBFblA1cmo1STBzTGJYLWxhak1Ma2NBMGpsUDJOWU92REt0SQ%3Foc%3D5"
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
        }
      ],
      "crawled_at": "2026-10-14 20:01:27"
    },
    {
      "source": "Bloomberg",
      "title_ko": "카타르 에너지국장은 호르무즈의 미래에 대해 '잘못'이라고 말했다",
      "title_en": "Qatar Energy Chief Says Bessent ‘Wrong’ About Hormuz Future",
      "summary_ko": "카타르 에너지국장, 호르무즈 미래에 대해 '잘못' 밝혔다 Bloomberg.com. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "카타르는 호르무즈가 가스 거래를 중단하면서 10년 만에 가장 큰 적자를 기록했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNR2lxbV9QaFNwYVZia0puRm9FTl9uUFV0Q3RWc0RYS3ZkUVdTaWo1ZkwxZGt1Rmpac3cxVHFEbjBBWERPVTByUTMwZ0gxQ1hkQmNaZG9aMnNJemY1TENfRjE1WjRpN2lXOG1SSjhuNmRZZS00bnVNeFgtUEk2TWpoR0w4cWM5UGVsNVpwdV9odHZvcV9QeWw1QWxyLXE4bVJnMFF0ZDNmWm1kaHlYaW9XaVFoWXhOdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNR2lxbV9QaFNwYVZia0puRm9FTl9uUFV0Q3RWc0RYS3ZkUVdTaWo1ZkwxZGt1Rmpac3cxVHFEbjBBWERPVTByUTMwZ0gxQ1hkQmNaZG9aMnNJemY1TENfRjE1WjRpN2lXOG1SSjhuNmRZZS00bnVNeFgtUEk2TWpoR0w4cWM5UGVsNVpwdV9odHZvcV9QeWw1QWxyLXE4bVJnMFF0ZDNmWm1kaHlYaW9XaVFoWXhOdw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent가 엔화 거래자들에게 '지금은 내가 집이다'라고 말하는 모습을 시청하세요",
          "original_url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOZ1B3cFZWOUUwMk13UVpxbldvcXd5WE5STnM0N0NDaF9iZThyRS1xeHFzR0VoQmpYZzhvVGd0ekd6LUM5Vk9qZENFMlNEQzItcHFZblQzMmkwbzVId2RGVVc4MEoxTE5mZHBDRW9oRzdrVko5cEtweDRHM0s5aDVxdHNUaHlvcktfN1gzelVWdTFrRE9PUTZqSFhma3REZHU5?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMioAFBVV95cUxOZ1B3cFZWOUUwMk13UVpxbldvcXd5WE5STnM0N0NDaF9iZThyRS1xeHFzR0VoQmpYZzhvVGd0ekd6LUM5Vk9qZENFMlNEQzItcHFZblQzMmkwbzVId2RGVVc4MEoxTE5mZHBDRW9oRzdrVko5cEtweDRHM0s5aDVxdHNUaHlvcktfN1gzelVWdTFrRE9PUTZqSFhma3REZHU5%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "미 국채/재무부 수장 베센트, 미국의 금융력을 외교 정책 도구로 활용하는 것을 지지",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPdVVwZ0p3QWZmMDNKdXYxdTZPRXZtaWo2bmlqMnFDYWI0QXB0SlBPbHZuMl9QY1djNEV6VklBc19PZ01CQzlWT2VxU3YwM0lLeUw2Qm5QbGRRQ2h1b01ELVhMZmRJd2NIZk92bDU5SkpxNkZCanB4OER3UXRJNm0ySGRoUjJYTmxWQllVczhBOUN4Q0ZBN083Z1lEVmxwMkJpZjhYV1BCZ1hxSmUwX0ZYcjBlZnp1MVBfS3c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxPdVVwZ0p3QWZmMDNKdXYxdTZPRXZtaWo2bmlqMnFDYWI0QXB0SlBPbHZuMl9QY1djNEV6VklBc19PZ01CQzlWT2VxU3YwM0lLeUw2Qm5QbGRRQ2h1b01ELVhMZmRJd2NIZk92bDU5SkpxNkZCanB4OER3UXRJNm0ySGRoUjJYTmxWQllVczhBOUN4Q0ZBN083Z1lEVmxwMkJpZjhYV1BCZ1hxSmUwX0ZYcjBlZnp1MVBfS3c%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "미 국채/재무부 Bessent는 대규모 채권 환매가 더욱 증가할 수 있다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPTWc4bVJ0eEl6MmpreFhiWU9RajRyM05KRDVuNU01TkZnY3UxRTdHSkFBTEwtWVV3dHJfczQyS0dNcW9uR2s4cXRDUmN6Y1FjaUZULWpxejJGMUdRWHlnQi1rekZjN2hyQXJmUXZlMGJocGFkaVQwOUtQMWFNYUVyZG9WQnBtYUlEQVdvdnp0dnE1aTlRNUZ1Q1d6OFUyb2IyTEluOXB6Y0RIU0JOSzhmS1l3?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxPTWc4bVJ0eEl6MmpreFhiWU9RajRyM05KRDVuNU01TkZnY3UxRTdHSkFBTEwtWVV3dHJfczQyS0dNcW9uR2s4cXRDUmN6Y1FjaUZULWpxejJGMUdRWHlnQi1rekZjN2hyQXJmUXZlMGJocGFkaVQwOUtQMWFNYUVyZG9WQnBtYUlEQVdvdnp0dnE1aTlRNUZ1Q1d6OFUyb2IyTEluOXB6Y0RIU0JOSzhmS1l3%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:28"
    },
    {
      "source": "Bloomberg",
      "title_ko": "베센트의 이란 위협은 미국의 중국 공격 의지에 달려 있다",
      "title_en": "Bessent’s Iran Threat Hinges on US Willingness to Hit China",
      "summary_ko": "베센트의 이란 위협은 미국의 중국 공격 의지에 달려 있다 Bloomberg.com. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "베센트(Bessent)는 미국을 제안한다",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOdmUycmRQNWwzNXJaRFhBMmo4UGNQOF9ETjh0dVZkMG93bmhtUGxCbDJBdUlBRHgwSWJfTkpvZjZkUDZoaFktNzZiNHVrMXlYV2ZEQ3Rhd0VUN0ZsQTlTcW1POEVVcHB2NEFFSTRlTkJSVk5fN2podXRIbzB1ckUwU0xnSGRfUTJUNkl4THZ6ZGo3MlN3dVpYcEVka1lqc09FcnlKb2UyZ01WV2JEcHpOUw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOdmUycmRQNWwzNXJaRFhBMmo4UGNQOF9ETjh0dVZkMG93bmhtUGxCbDJBdUlBRHgwSWJfTkpvZjZkUDZoaFktNzZiNHVrMXlYV2ZEQ3Rhd0VUN0ZsQTlTcW1POEVVcHB2NEFFSTRlTkJSVk5fN2podXRIbzB1ckUwU0xnSGRfUTJUNkl4THZ6ZGo3MlN3dVpYcEVka1lqc09FcnlKb2UyZ01WV2JEcHpOUw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "베센트 \"미국, 이란에 본 적 없는 조치 적용할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent의 성장 계획으로는 미국 부채 문제를 해결할 수 없다고 IMF 총재가 경고",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQYnBHbGQzVEJ1ZzRIbThkU3ZxamRZZk9qT09jUDBYMFVSTnVtQk9SX0dJa3dBMEZUY3o2bzY2VjlQZXZlRU9iZGx3SV8yX2lCd1ZIM2EwalRaakFuTVprOENhZDZxR3g5a2NoNFlXcW1IZmp2LW1wLVh3dzJEdGJKTzJCZGNfb1d1aUN0NmlTbkw0bXo3ZndGQXVmc3l0WmtadmZqeFVqYkxQMnowY2hGZmozWVo?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxQYnBHbGQzVEJ1ZzRIbThkU3ZxamRZZk9qT09jUDBYMFVSTnVtQk9SX0dJa3dBMEZUY3o2bzY2VjlQZXZlRU9iZGx3SV8yX2lCd1ZIM2EwalRaakFuTVprOENhZDZxR3g5a2NoNFlXcW1IZmp2LW1wLVh3dzJEdGJKTzJCZGNfb1d1aUN0NmlTbkw0bXo3ZndGQXVmc3l0WmtadmZqeFVqYkxQMnowY2hGZmozWVo%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent, 중국에서 IMF에 '왜곡' 정책 압박",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxONm1xZ1dGQjF6RElKNTVENktvczF4UTZTa05xXzBIQlp3ekM0bTZjRVdUb0ZNRFE2OWtENm9mMDE2YlBZdE41cndPeWphSmN0ejkxVW03WklIOWFETVZmVEV0VWpCWHJkZEFHQ0xCa2pLLUtVNVBYLU1HSzFfTUtpN2MwOGtYcUR6ZWxiY2VUWm9objVRMnEwdXV3MVRKV2UxOEZRU2JlZFpFTkZ0RjlLcw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxONm1xZ1dGQjF6RElKNTVENktvczF4UTZTa05xXzBIQlp3ekM0bTZjRVdUb0ZNRFE2OWtENm9mMDE2YlBZdE41cndPeWphSmN0ejkxVW03WklIOWFETVZmVEV0VWpCWHJkZEFHQ0xCa2pLLUtVNVBYLU1HSzFfTUtpN2MwOGtYcUR6ZWxiY2VUWm9objVRMnEwdXV3MVRKV2UxOEZRU2JlZFpFTkZ0RjlLcw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:30"
    },
    {
      "source": "한국경제",
      "title_ko": "이형일, 베센트와 첫 상견례…'대미투자' 재무라인 가동",
      "title_en": "",
      "summary_ko": "이형일, 베센트와 첫 상견례…'대미투자' 재무라인 가동 대한경제. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 한국경제뿐만 아니라 노컷뉴스, 저스트 이코노믹스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9leTlxMjE5M3l6cTc5WU9LVVJ1bWljc0pkRmg2LXFUUVBhX0FBUndsUXZFcW80aE5jYmRKWWw1TGhDNUpfY3lzRHhMU1pLVGJPQjdUS0dGVW9lY3EyRjVjWTNhSExMX19BMVJrS290MGhWLURv?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9leTlxMjE5M3l6cTc5WU9LVVJ1bWljc0pkRmg2LXFUUVBhX0FBUndsUXZFcW80aE5jYmRKWWw1TGhDNUpfY3lzRHhMU1pLVGJPQjdUS0dGVW9lY3EyRjVjWTNhSExMX19BMVJrS290MGhWLURv?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 14 Oct 2026 04:37:59 GMT",
      "related_articles": [
        {
          "source": "저스트 이코노믹스",
          "title_ko": "이형일 부총리, 베센트 美 재무장관과 화상면담",
          "original_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE4yQ2VvY0l2XzlrMmdYamRLakRNNm9NVmRnM3NLMFhfeTFaaWYxVGx0WlJKY05iLWYzQnNYUHlXd1NEMXBBSVVBdkw0Ql9iNW9fN0F6RTl3a3dfV3l2enpJ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE4yQ2VvY0l2XzlrMmdYamRLakRNNm9NVmRnM3NLMFhfeTFaaWYxVGx0WlJKY05iLWYzQnNYUHlXd1NEMXBBSVVBdkw0Ql9iNW9fN0F6RTl3a3dfV3l2enpJ?oc=5"
        },
        {
          "source": "YTN",
          "title_ko": "이형일·베센트 화상면담 \"한미 경제·금융협력 중요성 재확인\"",
          "original_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5uc2hLVTdXQ0tSdm4xZkh5NTUxUks3UkdKNDV3UjRXTGJ1MnBVVDJ6cXZGX01YVVVPWWdnVUcwNHpva0hWc1g2REE5ZUpGYnQydFFFQVpzNEo0MTdxZUE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5uc2hLVTdXQ0tSdm4xZkh5NTUxUks3UkdKNDV3UjRXTGJ1MnBVVDJ6cXZGX01YVVVPWWdnVUcwNHpva0hWc1g2REE5ZUpGYnQydFFFQVpzNEo0MTdxZUE?oc=5"
        },
        {
          "source": "노컷뉴스",
          "title_ko": "이형일, 美베센트 장관과 첫 화상면담…한미 경제·금융협력 강화",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBvcnhIRzd0dUN3V1RPODhRdVlZMUg3X1NNSWFqcWdOZmRKMDAzWWVWQklpUERUUjVzZmRHQnp5Z0lOcWFCTzJIc0RlNUFTekxfVUE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBvcnhIRzd0dUN3V1RPODhRdVlZMUg3X1NNSWFqcWdOZmRKMDAzWWVWQklpUERUUjVzZmRHQnp5Z0lOcWFCTzJIc0RlNUFTekxfVUE?oc=5"
        },
        {
          "source": "파이낸셜뉴스",
          "title_ko": "이형일, 美 베센트와 화상면담서 \"긴밀한 소통·협력 지속 기대\"",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1sOFBNdkJQcXVFbEI5TnUxYzdNVU5HdDBPaFpPTkxJRUh1MEM3RUE1T2NLbGdQclZVRzZRZ0lDTVo0UmxEaFA5R2MxMnJpV19KZFFnc05tbTNIUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1sOFBNdkJQcXVFbEI5TnUxYzdNVU5HdDBPaFpPTkxJRUh1MEM3RUE1T2NLbGdQclZVRzZRZ0lDTVo0UmxEaFA5R2MxMnJpV19KZFFnc05tbTNIUQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:30"
    },
    {
      "source": "Bloomberg",
      "title_ko": "트럼프 거래, 달러 수요 급증으로 원화 가치 상승 위협",
      "title_en": "Trump Deal Threatens Won’s Advance as Dollar Demand to Surge",
      "summary_ko": "트럼프 거래, 달러 수요 급증으로 원화 가치 상승 위협 Bloomberg.com. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. Bloomberg에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
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
      "crawled_at": "2026-10-14 20:01:31"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "외국인 달러선물 올해 최대 순매수…달러-원 추세 전환엔 신중",
      "title_en": "",
      "summary_ko": "외국인 달러선물 올해 최대 순매수…달러-원 추세 전환엔 신중 관련 핵심 동향이 발표되었습니다. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 연합인포맥스뿐만 아니라 뉴스1 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9HRlQwd0tMTExWZDdzelV5cGhrbVN0RVUzQV9BdUdncnBNVGt2Tm1SSjliajlUdzlTUXIwLUZ3QWtkdmJ2aDloVWZZUl96QlpBUUNJNTBlYUEwQUdaVlVTdWstR3FVM3V2RFJ3d3U3VWI?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9HRlQwd0tMTExWZDdzelV5cGhrbVN0RVUzQV9BdUdncnBNVGt2Tm1SSjliajlUdzlTUXIwLUZ3QWtkdmJ2aDloVWZZUl96QlpBUUNJNTBlYUEwQUdaVlVTdWstR3FVM3V2RFJ3d3U3VWI?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 14 Oct 2026 01:57:25 GMT",
      "related_articles": [
        {
          "source": "뉴스1",
          "title_ko": "외인 증시 순매수 전환에…달러·원 다시 1330원대로 하락",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5xaHR3Vk1oYXMzTGFGZ1pkcGNfekl1b0pVME9RdU5LdHVibHkxVmVnZm9qbk9PQTRRdVVOaUZQbWp6OU5aMW4wUkozbVNlamdYaGoxUjVEdUdFUXM?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5xaHR3Vk1oYXMzTGFGZ1pkcGNfekl1b0pVME9RdU5LdHVibHkxVmVnZm9qbk9PQTRRdVVOaUZQbWp6OU5aMW4wUkozbVNlamdYaGoxUjVEdUdFUXM?oc=5"
        },
        {
          "source": "뉴스1",
          "title_ko": "외국인 코스피 4.5조 투매에…달러·원 연저점 찍고 10원 상승(종합)",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1feXRfOFNVYlNoZnJRNmNlb1dqZFJoWVMtc0wyYm42X2tic3JtaTdnLXFEb3BpQmQwTEt6NXhrQ3FXVVd1d1hWazFLYm9FNks5RXcwbFlUM0E5aE0?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1feXRfOFNVYlNoZnJRNmNlb1dqZFJoWVMtc0wyYm42X2tic3JtaTdnLXFEb3BpQmQwTEt6NXhrQ3FXVVd1d1hWazFLYm9FNks5RXcwbFlUM0E5aE0?oc=5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:31"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "\"외국인 순매도 사상최대 전망\"…코스피 수급 불확실성 커진다",
      "title_en": "",
      "summary_ko": "\"외국인 순매도 사상최대 전망\"…코스피 수급 불확실성 커진다 연합인포맥스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 연합인포맥스뿐만 아니라 경북도민일보, 뉴스핌 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9ZM0c4VExsbUVUd25HN1dHeVFUN3VCWUdwM3UyMlpkN3FQWFdsZ1RuTFhNMXpsd3daeDEtZEtUak9OY21GeGNsYUMyQVc2aHRGZE5lYWxPMXI5LXZndnd3blVsVUNwR2xYQlVfd1RCM3E?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9ZM0c4VExsbUVUd25HN1dHeVFUN3VCWUdwM3UyMlpkN3FQWFdsZ1RuTFhNMXpsd3daeDEtZEtUak9OY21GeGNsYUMyQVc2aHRGZE5lYWxPMXI5LXZndnd3blVsVUNwR2xYQlVfd1RCM3E?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 12 Oct 2026 01:01:00 GMT",
      "related_articles": [
        {
          "source": "팍스경제TV",
          "title_ko": "코스피, 외국인 7거래일 연속 ‘팔자’…6000선 턱걸이",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB0eXJMblppNVRQVE1xS1RrMDhKTGV6U3ZPTFdIb3NqXy15b2gxR1JncENpd250VmMwcU84R25wa0FmRzdMem5rSkVrRTNZZUh1NTA2ZmREbExQalFfaVBTNjFtZ1Brdk51?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB0eXJMblppNVRQVE1xS1RrMDhKTGV6U3ZPTFdIb3NqXy15b2gxR1JncENpd250VmMwcU84R25wa0FmRzdMem5rSkVrRTNZZUh1NTA2ZmREbExQalFfaVBTNjFtZ1Brdk51?oc=5"
        },
        {
          "source": "서울경제TV",
          "title_ko": "코스피, 외국인 매도에 6거래일 연속 하락…6000선 턱걸이",
          "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBUUDk1OF9STEpuREpRVTBtZ0hTd2dYMVJIYXU4ZDNZclF4VmtUOGtMMVE1RlBlLUltdng3SktNRFE4cVVRZDR2dHJScjBzUGktS2lPWWkxc0ZIQzVFU2NNUnpBOHc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBUUDk1OF9STEpuREpRVTBtZ0hTd2dYMVJIYXU4ZDNZclF4VmtUOGtMMVE1RlBlLUltdng3SktNRFE4cVVRZDR2dHJScjBzUGktS2lPWWkxc0ZIQzVFU2NNUnpBOHc?oc=5"
        },
        {
          "source": "경북도민일보",
          "title_ko": "장 초반 2% 넘게 뛰더니…코스피, 외국인 매도 폭탄에 또 6000선 '턱걸이'",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE50SnBFd2d3TTcxa1RZWlBZbHRiNWQ4a2VLMXRDRlhJRWxlVUFBRi1mQVF1VmFFQlNSTTV0TEFwTjhjZjJicE9KeHBSeTZzVjk0blplcmRNdmdoRUxCQ1F3SG5pVnFwYUVHZ0E?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE50SnBFd2d3TTcxa1RZWlBZbHRiNWQ4a2VLMXRDRlhJRWxlVUFBRi1mQVF1VmFFQlNSTTV0TEFwTjhjZjJicE9KeHBSeTZzVjk0blplcmRNdmdoRUxCQ1F3SG5pVnFwYUVHZ0E?oc=5"
        },
        {
          "source": "뉴스핌",
          "title_ko": "[개장시황] 코스피, 외국인 순매수 전환에 2% 상승…6100선 회복",
          "original_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5TS3FzcWh6cDF2M0FqMlJtNUQ1NUN2X1ZvaXEtWHA3MkNnSExaTmNtNkoxWllydjlaUzZKdXdzUXRlWXQydHFxMUJrRkZab2lVbFliTExIYlVsU0tT?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5TS3FzcWh6cDF2M0FqMlJtNUQ1NUN2X1ZvaXEtWHA3MkNnSExaTmNtNkoxWllydjlaUzZKdXdzUXRlWXQydHFxMUJrRkZab2lVbFliTExIYlVsU0tT?oc=5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:31"
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
      "crawled_at": "2026-10-14 20:01:31"
    },
    {
      "source": "아시아경제",
      "title_ko": "[2026국감]신현송 \"7·8월 기준금리 인상, 환율 안정에 큰 작용\"",
      "title_en": "",
      "summary_ko": "[2026국감]신현송 \"7·8월 기준금리 인상, 환율 안정에 큰 작용\" 아시아경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 아시아경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1LUlRWY0JKUGNmN3pIWGZUSjFuNWxXS1p6Y2pIbDR5bnY5cVFyUml5UVNqYzRuY29pakNzSkxWcnI1SWRpN0dhMkY2Y1hsOVlnTmdUOWl3N2M4OGVXZHdTaQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1LUlRWY0JKUGNmN3pIWGZUSjFuNWxXS1p6Y2pIbDR5bnY5cVFyUml5UVNqYzRuY29pakNzSkxWcnI1SWRpN0dhMkY2Y1hsOVlnTmdUOWl3N2M4OGVXZHdTaQ?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 12 Oct 2026 09:00:12 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-14 20:01:31"
    },
    {
      "source": "데일리안",
      "title_ko": "9월 美 소비자물가, 이란 전쟁 여파에 3.7% 급등…트럼프 중간선거 '비상'",
      "title_en": "",
      "summary_ko": "9월 美 소비자물가, 이란 전쟁 여파에 3.7% 급등…트럼프 중간선거 '비상' 데일리안. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 데일리안뿐만 아니라 연합인포맥스, 조선일보 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiggJBVV95cUxQMXJrWVAwR20ta1VnN1hpNzYxMUpoSDg3alFhQlRJa3JaOFYyN3pjNGNZZHBVT3Q3RUFwY0V6aVFxNjVYU3praEE4QmplMmllOWhUZEdPMHJIbTBUa0wxYXlMM1pDQzc2RXhxSDdreml0YVFtYkNiV2tMNkRyVUNYU1FXMThPNXJfcFgyQmJFd2Z2ZURCbkYwWnJmLTgtb290ZXZNeFl6WkZuSWJBM0RYVWJOOFdCZnI4NDg2RWtVMzRZTEI1VUM5V2FtODhCQkptVGtmNDdJbzBTaVN5elA2a09DUDBwalRVb3pvUmFLTUhuY25BbUxBUFZHamxody0zZ1E?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiggJBVV95cUxQMXJrWVAwR20ta1VnN1hpNzYxMUpoSDg3alFhQlRJa3JaOFYyN3pjNGNZZHBVT3Q3RUFwY0V6aVFxNjVYU3praEE4QmplMmllOWhUZEdPMHJIbTBUa0wxYXlMM1pDQzc2RXhxSDdreml0YVFtYkNiV2tMNkRyVUNYU1FXMThPNXJfcFgyQmJFd2Z2ZURCbkYwWnJmLTgtb290ZXZNeFl6WkZuSWJBM0RYVWJOOFdCZnI4NDg2RWtVMzRZTEI1VUM5V2FtODhCQkptVGtmNDdJbzBTaVN5elA2a09DUDBwalRVb3pvUmFLTUhuY25BbUxBUFZHamxody0zZ1E?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 14 Oct 2026 13:30:00 GMT",
      "related_articles": [
        {
          "source": "조선일보",
          "title_ko": "美 9월 소비자물가 3.7% 상승…이달 금리 인상 확률 22%→46%",
          "original_url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPTVBRVHpibUpXclFIRmV3NlRwSmpkVGJzTEFoeEl0WFlPUEVxY3pkdnJocXZfZ3djd0djU3M4Qk5RVjdLRDV4NEs1QWdiSkVwLVRsaDl3dmZ3bHNOUlNKY1AwZWJVRTZUWVEtT1djU2JtY3Roa3Vxd2RPb2QtQmFlcElIc2p6NkcwUk9B?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPTVBRVHpibUpXclFIRmV3NlRwSmpkVGJzTEFoeEl0WFlPUEVxY3pkdnJocXZfZ3djd0djU3M4Qk5RVjdLRDV4NEs1QWdiSkVwLVRsaDl3dmZ3bHNOUlNKY1AwZWJVRTZUWVEtT1djU2JtY3Roa3Vxd2RPb2QtQmFlcElIc2p6NkcwUk9B?oc=5"
        },
        {
          "source": "서울경제",
          "title_ko": "美 9월 소비자물가 3.7%↑…4개월 만에 최고, 금리 인상 압박 재점화",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFA2YW9zeDZ0M2RFTGsya3ZzS1pJRkhLX3pidjA4NUg1WGM0RWxlSDd3WXJsZ1Z2VEp1Wl9oMXIyaWdXUDFab0daTDIwdV9aWHNpZmfSAVNBVV95cUxPaE51cFF6YWZGVHczNGh0WnRudk5udlNoQnpWUXpMSVE3aEhxbjNnTWRWd3pwVWN2Qk5IaVBMRno5V3BmYkV2ckVEMWYtOTA0d002bw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFA2YW9zeDZ0M2RFTGsya3ZzS1pJRkhLX3pidjA4NUg1WGM0RWxlSDd3WXJsZ1Z2VEp1Wl9oMXIyaWdXUDFab0daTDIwdV9aWHNpZmfSAVNBVV95cUxPaE51cFF6YWZGVHczNGh0WnRudk5udlNoQnpWUXpMSVE3aEhxbjNnTWRWd3pwVWN2Qk5IaVBMRno5V3BmYkV2ckVEMWYtOTA0d002bw?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "美 근원 9월 소비자물가지수 전달비 0.3% 상승…시장 전망치 상회(상보)",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1IZEQxLVZBdlplR3ozVndmVlVDSEFVZXpEMnpQdkMzbmdCOWQxVHJqOXdqV05VY1JZeVRZS3lXejNSNktzMVoydThYdlNaa0FJSVRXb1dVREVtVkYwTHU4WWI3dE1qakZZd0drLV96VVk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1IZEQxLVZBdlplR3ozVndmVlVDSEFVZXpEMnpQdkMzbmdCOWQxVHJqOXdqV05VY1JZeVRZS3lXejNSNktzMVoydThYdlNaa0FJSVRXb1dVREVtVkYwTHU4WWI3dE1qakZZd0drLV96VVk?oc=5"
        },
        {
          "source": "매일경제",
          "title_ko": "[속보] 미 9월 소비자물가 전년대비 3.7%↑…예상치 소폭 상회",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5USlJaal9pVUotbHc2NmxBSXFOdTFPSEJfUDFNd3dqaXpSMzZ4N0FrdDFSX1RFUnhuSkg4WkFVMmdsWWNzQTRKZ2c2TlJRRVBEdEE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5USlJaal9pVUotbHc2NmxBSXFOdTFPSEJfUDFNd3dqaXpSMzZ4N0FrdDFSX1RFUnhuSkg4WkFVMmdsWWNzQTRKZ2c2TlJRRVBEdEE?oc=5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:32"
    },
    {
      "source": "MBC 뉴스",
      "title_ko": "미 9월 CPI 전년 대비 3.7%↑‥기준금리 결정 앞두고 전망치 상회",
      "title_en": "",
      "summary_ko": "미 9월 CPI 전년 대비 3.7%↑‥기준금리 결정 앞두고 전망치 상회 MBC 뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. MBC 뉴스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1XSEdnTDRfYzE1NlhBMy1qZnZZX1pTaU1WMWJ0OGdxRXZUUzhKY1czN2h0ZVU2VUVzX0E0S3puQ3NiZ2RCdV9kNzlnQVFSb0RQMVBlWDUycUpJa2pOMkVHRmdiNEVPZEFrVUYtUjh6X19RZHpF0gF0QVVfeXFMTXpseDNDQWVOYTdGSkp2a0VXRzVoV09KTWFSX2FBSGd4Sk9BSkktNlBBZHFlcUk3TnFtVWV1UHk1SFdaZ1R1OVVER1pyd3AtM292WHhSRGlvQ0VGLWZfSVM1S2M0Rk1tZjJJS3B6QjI4STV2QUg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1XSEdnTDRfYzE1NlhBMy1qZnZZX1pTaU1WMWJ0OGdxRXZUUzhKY1czN2h0ZVU2VUVzX0E0S3puQ3NiZ2RCdV9kNzlnQVFSb0RQMVBlWDUycUpJa2pOMkVHRmdiNEVPZEFrVUYtUjh6X19RZHpF0gF0QVVfeXFMTXpseDNDQWVOYTdGSkp2a0VXRzVoV09KTWFSX2FBSGd4Sk9BSkktNlBBZHFlcUk3TnFtVWV1UHk1SFdaZ1R1OVVER1pyd3AtM292WHhSRGlvQ0VGLWZfSVM1S2M0Rk1tZjJJS3B6QjI4STV2QUg?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 14 Oct 2026 13:10:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-14 20:01:32"
    },
    {
      "source": "인더스트리뉴스",
      "title_ko": "모건스탠리 “한은, 11월 기준금리 인상”…내년 1분기 3.50% 전망",
      "title_en": "",
      "summary_ko": "모건스탠리 “한은, 11월 기준금리 인상”…내년 1분기 3.50% 전망 인더스트리뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 인더스트리뉴스뿐만 아니라 세계일보, KBS 뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTFBMYVZJTWoyaVNDeEJ6a3F2NVVTRkpGOVdfOXpZSndDNjFhM044LUpzRms1aHZMb18zOUVLM0NGWk5INW41d0NYWU1JQnJWTVdLdW9zVE5ZLUhTTHJ6a3M4ZDlPZm50cC16S0htSlkxbTd1dw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTFBMYVZJTWoyaVNDeEJ6a3F2NVVTRkpGOVdfOXpZSndDNjFhM044LUpzRms1aHZMb18zOUVLM0NGWk5INW41d0NYWU1JQnJWTVdLdW9zVE5ZLUhTTHJ6a3M4ZDlPZm50cC16S0htSlkxbTd1dw?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 14 Oct 2026 07:32:36 GMT",
      "related_articles": [
        {
          "source": "연합뉴스",
          "title_ko": "野배준영 \"한은총재, 이달 기준금리 인상 '원점 재검토'해야\"",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBDbUJvbUZaVTM4eXhmWEM3UVVscWJXWEx0cDh4Smd3UGs0MkhpRllpX3BfNXNPRXJxdzFNd3JxYUdhZkFzWURfTWVjNFUyTUJDTjlrSE13SldvS0nSAWBBVV95cUxNY08zVlZDZC1fdG12cnJpNU5uUWhqcGlIekNEQTdrRWhLWnhJdE8xMVNMeVc5SnNjRVB5S3MyU0plaVNNZDVmTlkyYjdfblFvNDVfRk1uRjhYSEF0LWlES1A?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBDbUJvbUZaVTM4eXhmWEM3UVVscWJXWEx0cDh4Smd3UGs0MkhpRllpX3BfNXNPRXJxdzFNd3JxYUdhZkFzWURfTWVjNFUyTUJDTjlrSE13SldvS0nSAWBBVV95cUxNY08zVlZDZC1fdG12cnJpNU5uUWhqcGlIekNEQTdrRWhLWnhJdE8xMVNMeVc5SnNjRVB5S3MyU0plaVNNZDVmTlkyYjdfblFvNDVfRk1uRjhYSEF0LWlES1A?oc=5"
        },
        {
          "source": "세계일보",
          "title_ko": "李대통령 “상당히 장기간 고금리 시대”… 모건스탠리·씨티, 11월 기준금리 인상 전망",
          "original_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBUUmZaVTREdWtTNG1hTmxPNkdLT1dWMXYtQkt3SzZyVm9obnBuNUVnalUtcUlkM0t1VngzMmJRT0hOWXdlVm80dDdDSV9zVkFObjQ5UnpSTVbSAVRBVV95cUxPUDdkcF9iQXVBS0JrSzlUR1poNDljTXBoY09wel93TXBVdEZQakZOVGhDUlBoT2d2ZFNFRkVBUTFVc3BBVTV2RlhmWjVLUmdTTzNRU1A?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBUUmZaVTREdWtTNG1hTmxPNkdLT1dWMXYtQkt3SzZyVm9obnBuNUVnalUtcUlkM0t1VngzMmJRT0hOWXdlVm80dDdDSV9zVkFObjQ5UnpSTVbSAVRBVV95cUxPUDdkcF9iQXVBS0JrSzlUR1poNDljTXBoY09wel93TXBVdEZQakZOVGhDUlBoT2d2ZFNFRkVBUTFVc3BBVTV2RlhmWjVLUmdTTzNRU1A?oc=5"
        },
        {
          "source": "KBS 뉴스",
          "title_ko": "한은 총재 “7·8월 연속 기준금리 인상으로 궁극적 비용 축소”",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAzak51UWpRWkdhU2M4Q05TR0NFbUlGb2tZamxNbXF5R09kLUR0UWNGRDIzOVRjSEkwTmZFVHZJVEw5bW40dmZ1S05LeEZwQ3Y0dVJxcmVvbFMwaFk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAzak51UWpRWkdhU2M4Q05TR0NFbUlGb2tZamxNbXF5R09kLUR0UWNGRDIzOVRjSEkwTmZFVHZJVEw5bW40dmZ1S05LeEZwQ3Y0dVJxcmVvbFMwaFk?oc=5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:32"
    },
    {
      "source": "Chosunbiz",
      "title_ko": "비트코인 8만2000달러선까지 하락… 美 기준금리 인상 우려에 약세 - 조선비즈",
      "title_en": "",
      "summary_ko": "비트코인 8만2000달러선까지 하락… 美 기준금리 인상 우려에 약세 - 조선비즈 관련 핵심 동향이 발표되었습니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Chosunbiz에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQS2FZaUZFaXhnYVIxNF9NWlpnYkctcDJkRi13cXhOczdvVmVocE1CdTRfMVV6VURXZHdTR01wcnM2TVpOZkhBcGdNZ3dJVDdwREVSNUpVWkZwel9XS2xYeTk0cVpfSWJwQTQ0dS1LcmNTNkw4blByTHFmWHJvNU1UVNIBlAFBVV95cUxQS3RYeHBIVHVIekw1X2hEdUFZZnVwc0gyR1l2THJqOVdXVEhEMU14U1ZxdGhIeVRNdzlmdWY2TVZ2ZDdYVHRjQ2ZyQ1NmRGFwOF9mRUdQSUw5VGdkZHNTbE55OERPbDJJV0dUdWs4M2E0MS12bzgxbWM0WUtyX24zNTMwYmY1ZWVIQmJYQzIxNmctUXg2?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQS2FZaUZFaXhnYVIxNF9NWlpnYkctcDJkRi13cXhOczdvVmVocE1CdTRfMVV6VURXZHdTR01wcnM2TVpOZkhBcGdNZ3dJVDdwREVSNUpVWkZwel9XS2xYeTk0cVpfSWJwQTQ0dS1LcmNTNkw4blByTHFmWHJvNU1UVNIBlAFBVV95cUxQS3RYeHBIVHVIekw1X2hEdUFZZnVwc0gyR1l2THJqOVdXVEhEMU14U1ZxdGhIeVRNdzlmdWY2TVZ2ZDdYVHRjQ2ZyQ1NmRGFwOF9mRUdQSUw5VGdkZHNTbE55OERPbDJJV0dUdWs4M2E0MS12bzgxbWM0WUtyX24zNTMwYmY1ZWVIQmJYQzIxNmctUXg2?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 12 Oct 2026 23:41:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-14 20:01:32"
    },
    {
      "source": "디지털데일리",
      "title_ko": "“수도권 집값·가계부채 불안 여전”…신현송, 추가 금리 인상 가능성 열어둬 [2026 국감]",
      "title_en": "",
      "summary_ko": "“수도권 집값·가계부채 불안 여전”…신현송, 추가 금리 인상 가능성 열어둬 [2026 국감] 디지털데일리. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 디지털데일리뿐만 아니라 연합인포맥스, 아이뉴스24 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1mRW1rOVhCaVlvN0djbV96SndjeUZ1RTZ4ZHNZdXkxWERSMkdtLXIwMldTVjJRc0NfNzZCSjk3bXRjQ2UzcHdWUGo3SThCZGo0MVBmVXdEc0NqaEpKOXAxZ0oyNmM?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1mRW1rOVhCaVlvN0djbV96SndjeUZ1RTZ4ZHNZdXkxWERSMkdtLXIwMldTVjJRc0NfNzZCSjk3bXRjQ2UzcHdWUGo3SThCZGo0MVBmVXdEc0NqaEpKOXAxZ0oyNmM?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 12 Oct 2026 06:27:07 GMT",
      "related_articles": [
        {
          "source": "아이뉴스24",
          "title_ko": "금통위원들 \"집값 아직 불안⋯금리 인상, 취약부문 부실 우려\"",
          "original_url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFA0MGhQWGpsRms1NmJYSzljNERXYXZ6VHFJSm5jY2ZCUFlPZWpNQVUyQy1CeVpuMHZGNl9YbTBQNENqWDh3bEhLamFTSQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFA0MGhQWGpsRms1NmJYSzljNERXYXZ6VHFJSm5jY2ZCUFlPZWpNQVUyQy1CeVpuMHZGNl9YbTBQNENqWDh3bEhLamFTSQ?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "[금통위 인터뷰] SC \"10월 금리 동결 전망…인상 소수의견 가능성\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9fVXRZOFFMU2VjSlNzdUJvWFMyUEVsc0hMRHRqQi03NFhtLTRmZmJqUjVrWFp5OVl0eVNfSEtpeE1qVnhrTkZNdllRLXp2OWNPaEFxTUk1cW1IR0ZUWEgtWXRldG9rZzdLTmlBbXlEbF8?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9fVXRZOFFMU2VjSlNzdUJvWFMyUEVsc0hMRHRqQi03NFhtLTRmZmJqUjVrWFp5OVl0eVNfSEtpeE1qVnhrTkZNdllRLXp2OWNPaEFxTUk1cW1IR0ZUWEgtWXRldG9rZzdLTmlBbXlEbF8?oc=5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:32"
    },
    {
      "source": "Reuters",
      "title_ko": "TSMC의 세 번째",
      "title_en": "TSMC's third-quarter revenue surges to record, beating market forecast",
      "summary_ko": "TSMC의 세 번째 관련 핵심 동향이 발표되었습니다. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Reuters",
          "title_ko": "LSEG는 더 빠른 과거 시장 데이터 처리를 위해 Nvidia를 활용합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNYy1XWU5PM1RfaklzejU4RG1OOEV6YTkyTms1aGNfbTFiSXJmNkdTbkpSeWo2VElLV2ZCMVlta29aSWlGMHR5c3QyQV9hS0xSaDZCUjZxaU1QeGtaNHgwd0l2Nm9tR2ZaaFBRdFd4TF9Jb0lHdnR2eXI4ZzVjaGhDMDRUU0ZPcVdVb2Q1TlpqT2YxaDdoYjVScFZNVVg1YVdkWkE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNYy1XWU5PM1RfaklzejU4RG1OOEV6YTkyTms1aGNfbTFiSXJmNkdTbkpSeWo2VElLV2ZCMVlta29aSWlGMHR5c3QyQV9hS0xSaDZCUjZxaU1QeGtaNHgwd0l2Nm9tR2ZaaFBRdFd4TF9Jb0lHdnR2eXI4ZzVjaGhDMDRUU0ZPcVdVb2Q1TlpqT2YxaDdoYjVScFZNVVg1YVdkWkE%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 Huang, 사이버 보안을 AI의 차세대 거대 시장으로 선전",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:36"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Nvidia의 주식은 가치 평가가 하락함에 따라 경고 신호를 깜박이고 있습니다.",
      "title_en": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Falls",
      "summary_ko": "Nvidia의 주식은 가치 평가 하락으로 경고 신호를 보내고 있습니다. Bloomberg.com. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOMmZza3lFQmV4Y3NTNVlkOThiYTlkUWFGY1lPUWF1SEpPRkRNXy1GRnpNYWlDa1JqdEJRejYyVF9mSlQ2eldpbGR0dFRRM1dWVS1oY1RmMGNqRy1aVExud1duUXhTZHdZTW9SU2J6aVBrMTVUVmNubDlQc3F6TjNHem4zWTM1dlp6dWFtbzd6d3ZOOE43NDNXYkpGMzMwR1NqQ2VfT3FPVGMtbEJHdzFMNQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOMmZza3lFQmV4Y3NTNVlkOThiYTlkUWFGY1lPUWF1SEpPRkRNXy1GRnpNYWlDa1JqdEJRejYyVF9mSlQ2eldpbGR0dFRRM1dWVS1oY1RmMGNqRy1aVExud1duUXhTZHdZTW9SU2J6aVBrMTVUVmNubDlQc3F6TjNHem4zWTM1dlp6dWFtbzd6d3ZOOE43NDNXYkpGMzMwR1NqQ2VfT3FPVGMtbEJHdzFMNQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Tue, 22 Sep 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "엔비디아의 중국 AI",
          "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOZ2lCcTJZLWVsU3NJWjJRV2xZd0RXM1NtbWNnQUtfb1RsSjlNVmFEWnVxYVJ5Y0pXS0lWV284NlVCWkp2Qy1jbm5na2ZFeE5BYmNlWFVaVGttNElacjE1SGlaeVBOc1J5Z042bUlOS3JPbWpHcloxVDF5X3B2NG5hSEdCcHp0SGswU3d5VWNNWE02bE1KS0VyTVROTlJxUTRFUzNQM3hrbERWWWh5X21pSFg2ajBBOG02cXdzS1UyV09MY0k?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxOZ2lCcTJZLWVsU3NJWjJRV2xZd0RXM1NtbWNnQUtfb1RsSjlNVmFEWnVxYVJ5Y0pXS0lWV284NlVCWkp2Qy1jbm5na2ZFeE5BYmNlWFVaVGttNElacjE1SGlaeVBOc1J5Z042bUlOS3JPbWpHcloxVDF5X3B2NG5hSEdCcHp0SGswU3d5VWNNWE02bE1KS0VyTVROTlJxUTRFUzNQM3hrbERWWWh5X21pSFg2ajBBOG02cXdzS1UyV09MY0k%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 200억 달러 규모 Groq 거래, 가치 평가 도전에 성공(1)",
          "original_url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPRFk4d1ZmOThiNnJoQXRIdUVKQTFjWXhmNk8tb1pya1BpaTZ1VmxnOUluSnMwdzVYMW9nNHFBZlJjbGpyeWVXY0FZbGdWRDRZWW9yYmkzajNsT3V1dGJIZ2hFck5yVDJYUk00RU5yWFl3ZFpGcGtqNkxnTjNDQnBsc2xPY2tFYTFWd0dkRDVtUVVYU1ZpSmtIaw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimAFBVV95cUxPRFk4d1ZmOThiNnJoQXRIdUVKQTFjWXhmNk8tb1pya1BpaTZ1VmxnOUluSnMwdzVYMW9nNHFBZlJjbGpyeWVXY0FZbGdWRDRZWW9yYmkzajNsT3V1dGJIZ2hFck5yVDJYUk00RU5yWFl3ZFpGcGtqNkxnTjNDQnBsc2xPY2tFYTFWd0dkRDVtUVVYU1ZpSmtIaw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia는 고객에게 새로운 Rubin 디자인을 제공하는 과정을 홍보합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPNk9DR20yVlp0dThjRlo3SE1qc3FtTXpYODBRY2ZGRHlCUHBvY1ZpM2lCYkpyNmRfdFdXZzJ6ZmxSdXlnSlFDSGZiZkJSQ1FHX3F3UUtTV1RxT0hyWlkyNExqY250LVZkWXNGaEljWE9sbU9aekRQeGxwaUk2MEgzWEt4VkJKTFZZTE56MWlxWlRzRHNmaFpGcnBSbXZjcDF3QmlydHdVR3RTRUxaSHhF?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPNk9DR20yVlp0dThjRlo3SE1qc3FtTXpYODBRY2ZGRHlCUHBvY1ZpM2lCYkpyNmRfdFdXZzJ6ZmxSdXlnSlFDSGZiZkJSQ1FHX3F3UUtTV1RxT0hyWlkyNExqY250LVZkWXNGaEljWE9sbU9aekRQeGxwaUk2MEgzWEt4VkJKTFZZTE56MWlxWlRzRHNmaFpGcnBSbXZjcDF3QmlydHdVR3RTRUxaSHhF%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia는 OpenAI 프로젝트의 첫 번째 단계에서 최대 1,050억 달러를 지원할 예정입니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQbnV3M294MnVTMGVUMHp4bGpwd1FGeHhsV1pnbWJKUU95NUtXUzEwTHY4THhKNDNuOUhoY21uTktkVWxmSngzZS1INTZkMnd5OFRzbExwRzlqNU41djk2UHJ1bmZNaFBaSmsxSURma2huRzFhR2RDY1g5S0MxQW9Rd0ZCczZIeUNHQnpFQVF6b1k1bUltZ280VTRWdnVnSlpkeHJPbHV0M0ROM0RsSDFfUlVRWGpJMTQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxQbnV3M294MnVTMGVUMHp4bGpwd1FGeHhsV1pnbWJKUU95NUtXUzEwTHY4THhKNDNuOUhoY21uTktkVWxmSngzZS1INTZkMnd5OFRzbExwRzlqNU41djk2UHJ1bmZNaFBaSmsxSURma2huRzFhR2RDY1g5S0MxQW9Rd0ZCczZIeUNHQnpFQVF6b1k1bUltZ280VTRWdnVnSlpkeHJPbHV0M0ROM0RsSDFfUlVRWGpJMTQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:40"
    },
    {
      "source": "조선일보",
      "title_ko": "신현송 \"AI 호황, 중동 전쟁 모두 물가 압박\"…금리 인상 기조 유지 시사",
      "title_en": "",
      "summary_ko": "신현송 \"AI 호황, 중동 전쟁 모두 물가 압박\"…금리 인상 기조 유지 시사 조선일보. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 조선일보뿐만 아니라 전자신문 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNN0tCOTgwNGVrU3QyTm9HZWdzOG5DdFdYZy0yaXJUaXMxQUZ3UUtVWndEQ29VekxDRGR6TkcteG9fWV8xRmI5VlM0TWZpWXA2bENwOFhvdWFBdjdzRUMtTWdEc29mUC1ZR1FYNXFmZmdIUFdEUzhBX3NvN2NQNWV3N3NOWXg3dkVJMmhncnJ3?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNN0tCOTgwNGVrU3QyTm9HZWdzOG5DdFdYZy0yaXJUaXMxQUZ3UUtVWndEQ29VekxDRGR6TkcteG9fWV8xRmI5VlM0TWZpWXA2bENwOFhvdWFBdjdzRUMtTWdEc29mUC1ZR1FYNXFmZmdIUFdEUzhBX3NvN2NQNWV3N3NOWXg3dkVJMmhncnJ3?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 14 Oct 2026 06:40:45 GMT",
      "related_articles": [
        {
          "source": "전자신문",
          "title_ko": "신현송 한은 총재 “AI 투자·중동 악재로 물가 자극…통화정책으로 양극화 대응”",
          "original_url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE4tdUhZZEtNeWdGakdpTlRnUHJieERua1VFZVdSOUFSZWFfVTA5QWc2NXo1VmIxbGNhekp3SFZPWUJkeVp3QmVXN0kwazZFQQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE4tdUhZZEtNeWdGakdpTlRnUHJieERua1VFZVdSOUFSZWFfVTA5QWc2NXo1VmIxbGNhekp3SFZPWUJkeVp3QmVXN0kwazZFQQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:40"
    },
    {
      "source": "calcalistech.com",
      "title_ko": "투자자 수요가 급증함에 따라 DeepSeek의 자금 조달 라운드는 150억 달러에 도달할 수 있습니다.",
      "title_en": "DeepSeek’s funding round could approach $15 billion as investor demand surges",
      "summary_ko": "투자자 수요가 급증함에 따라 DeepSeek의 자금 조달 라운드는 150억 달러에 접근할 수 있습니다. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. calcalistech.com뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "Nvidia의 Huang, 다음 주에 유럽 AI 거래에서 20억 달러 계획",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPQTUyMWwxLUpnYVFUYlNzVS1YS0d5UkpaWXhsbmZ6U08xMmNKUTFSU01rSTRjN0Z4UF9hTG0tajg4TFZqZExYVS1oZkxJWlNFM0hBc2ctbUZBU1htclhwWVB6ajludXpVT3NDZ21YaEk3UExON3ZpZVF3YU1ycDI2MS0tVU1jelR5N3F2emRKT2JDcUE4V3hiUzlxY21SNXBXdHl1YzJWREFfY2I3cWhEa2Z0VQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPQTUyMWwxLUpnYVFUYlNzVS1YS0d5UkpaWXhsbmZ6U08xMmNKUTFSU01rSTRjN0Z4UF9hTG0tajg4TFZqZExYVS1oZkxJWlNFM0hBc2ctbUZBU1htclhwWVB6ajludXpVT3NDZ21YaEk3UExON3ZpZVF3YU1ycDI2MS0tVU1jelR5N3F2emRKT2JDcUE4V3hiUzlxY21SNXBXdHl1YzJWREFfY2I3cWhEa2Z0VQ%3Foc%3D5"
        },
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
        }
      ],
      "crawled_at": "2026-10-14 20:01:44"
    },
    {
      "source": "Reuters",
      "title_ko": "논평: 미국은 전략적 구리 매장지를 구축했습니다. 이제 그것을 유지할 수 있습니까?",
      "title_en": "COMMENTARY: US has built a strategic copper reserve. Now can it keep it?",
      "summary_ko": "논평: 미국은 전략적 구리 매장지를 구축했습니다. 이제 그것을 유지할 수 있습니까? 로이터. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Reuters뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQSzA2M2pxajE0NjNnQ1hIM3A0Z0hGdjMzWTZuTjZuVHN1UlE4Q2VUcUR2NUkzWFNDTGVBbUZwVm9aT2VzRmtIN011U2ZlQ29INnNNLTctV2NlR2lRWk9BeWx3TXZSbjlNYVFNaUtWSDBuTDV2WGFqUU5hOWlBQkpTanRPQnFkaWdiZElNUzc5TFIxSXZzQnl4TzZOTFNITE9ubHJCWS1mcDNfQjI0d0FjMHRQN2Jkenc4M3pKWWlsNVJQZUE?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxQSzA2M2pxajE0NjNnQ1hIM3A0Z0hGdjMzWTZuTjZuVHN1UlE4Q2VUcUR2NUkzWFNDTGVBbUZwVm9aT2VzRmtIN011U2ZlQ29INnNNLTctV2NlR2lRWk9BeWx3TXZSbjlNYVFNaUtWSDBuTDV2WGFqUU5hOWlBQkpTanRPQnFkaWdiZElNUzc5TFIxSXZzQnl4TzZOTFNITE9ubHJCWS1mcDNfQjI0d0FjMHRQN2Jkenc4M3pKWWlsNVJQZUE%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 12 Oct 2026 06:29:33 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "논평: 인도 파일: 한국, 대만이 AI 물결을 타고 인도를 추월했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNbjlRWU1NdWwyZk91SmVaNkEtc3ZaWG9ySlpmajZoYUVoRFV5SFZGLTNUQ0ZtTU5PSG5BemN3b2FxMFc1aWlBYmJQRnNyVEJhTU90dFAyYWZpelhvQkdTM1pXVDVGaThOLWZudXhzbFdZdDZDbjdrMmQ0Sl8tYWVuLVdfTVVHRUU3Qll2SWR2QzZMb2t3SzNEc2g5TGFwMmFNN0FzWW52MDBsdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxNbjlRWU1NdWwyZk91SmVaNkEtc3ZaWG9ySlpmajZoYUVoRFV5SFZGLTNUQ0ZtTU5PSG5BemN3b2FxMFc1aWlBYmJQRnNyVEJhTU90dFAyYWZpelhvQkdTM1pXVDVGaThOLWZudXhzbFdZdDZDbjdrMmQ0Sl8tYWVuLVdfTVVHRUU3Qll2SWR2QzZMb2t3SzNEc2g5TGFwMmFNN0FzWW52MDBsdw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-14 20:01:46"
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
