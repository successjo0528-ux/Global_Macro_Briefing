window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-10-16 05:05:09",
    "date_str": "2026년 10월 16일 (금)",
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
      "price": 4.088,
      "previous_close": 4.037,
      "change": 0.051,
      "change_percent": 1.26,
      "display_price": "4.088%",
      "status": "up",
      "history": [
        4.037,
        4.043,
        4.057,
        4.05,
        4.057,
        4.085,
        4.088
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-10-15 20:00:38"
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
      "price": 5.089,
      "previous_close": 5.277,
      "change": -0.188,
      "change_percent": -3.56,
      "display_price": "5.089%",
      "status": "down",
      "history": [
        5.277,
        5.231,
        5.244,
        5.24,
        5.217,
        5.19,
        5.089
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-10-15 20:00:38",
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
      "price": 5.429,
      "previous_close": 5.661,
      "change": -0.232,
      "change_percent": -4.1,
      "display_price": "5.429%",
      "status": "down",
      "history": [
        5.661,
        5.606,
        5.6,
        5.598,
        5.563,
        5.525,
        5.429
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-10-15 20:00:38"
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
      "price": 102.034,
      "previous_close": 102.14,
      "change": -0.106,
      "change_percent": -0.1,
      "display_price": "102.03 pt",
      "status": "down",
      "history": [
        102.14,
        102.21,
        102.58,
        102.18,
        102.55,
        102.034
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-10-15 20:00:38"
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
      "price": 158.098,
      "previous_close": 158.296,
      "change": -0.198,
      "change_percent": -0.13,
      "display_price": "158.10엔",
      "status": "down",
      "history": [
        158.296,
        158.06,
        158.063,
        158.203,
        158.52,
        158.322,
        158.098
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-10-15 20:00:38"
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
      "price": 4195.2,
      "previous_close": 4157.0,
      "change": 38.2,
      "change_percent": 0.92,
      "display_price": "$4,195.20",
      "status": "up",
      "history": [
        4157.0,
        4216.3,
        4190.6,
        4177.3,
        4107.9,
        4195.2
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-10-15 20:00:39"
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
      "price": 96.28,
      "previous_close": 91.49,
      "change": 4.79,
      "change_percent": 5.24,
      "display_price": "$96.28",
      "status": "up",
      "history": [
        91.49,
        91.85,
        93.74,
        94.14,
        95.09,
        96.28
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-10-15 20:00:39"
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
      "price": 82301.3,
      "previous_close": 82546.32,
      "change": -245.02,
      "change_percent": -0.3,
      "display_price": "$82,301",
      "status": "down",
      "history": [
        82546.32,
        82912.227,
        83679.469,
        81762.562,
        83095.125,
        81562.492,
        82301.297
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-10-15 20:00:39"
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
      "price": 920.2,
      "previous_close": 17.5,
      "change": 902.7,
      "change_percent": 0.0,
      "display_price": "$920.2B (약 9,202억$)",
      "status": "up",
      "history": [
        306.2,
        353.9,
        872.5,
        885.8,
        51.9,
        17.5,
        920.2
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-10-15 20:00:39"
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
      "price": 7744.1,
      "previous_close": 7818.93,
      "change": -74.83,
      "change_percent": -0.96,
      "display_price": "7,744.10",
      "status": "down",
      "history": [
        7801.77,
        7765.36,
        7811.54,
        7807.24,
        7805.45,
        7718.94,
        7744.1
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-10-15 20:00:40"
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
      "price": 29935.594,
      "previous_close": 31224.47,
      "change": -1288.876,
      "change_percent": -4.13,
      "display_price": "29,935.59",
      "status": "down",
      "history": [
        31160.08,
        30725.811,
        30883.15,
        30664.699,
        30569.48,
        29950.82,
        29935.594
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-10-15 20:00:40"
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
      "price": 11581.215,
      "previous_close": 13217.82,
      "change": -1636.605,
      "change_percent": -12.38,
      "display_price": "11,581.22",
      "status": "down",
      "history": [
        13066.15,
        12623.71,
        12572.42,
        12236.79,
        12208.79,
        11684.38,
        11581.215
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-10-15 20:00:40"
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
      "price": 16.43,
      "previous_close": 15.08,
      "change": 1.35,
      "change_percent": 8.95,
      "display_price": "16.43",
      "status": "up",
      "history": [
        15.08,
        15.41,
        14.84,
        15.21,
        15.27,
        16.87,
        16.43
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-10-15 20:00:40"
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
      "price": 1341.43,
      "previous_close": 1339.74,
      "change": 1.69,
      "change_percent": 0.13,
      "display_price": "1,341.43원",
      "status": "up",
      "history": [
        1339.74,
        1339.08,
        1342.99,
        1340.84,
        1334.13,
        1340.31,
        1341.43
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-10-15 20:00:40",
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
      "price": 5554.22,
      "previous_close": 7003.74,
      "change": -1449.52,
      "change_percent": -20.7,
      "display_price": "5,554.22",
      "status": "down",
      "history": [
        6941.39,
        6803.9,
        6625.93,
        6384.24,
        6035.35,
        6008.81
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-10-15 20:00:41"
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
      "price": 760.82,
      "previous_close": 893.29,
      "change": -132.47,
      "change_percent": -14.83,
      "display_price": "760.82",
      "status": "down",
      "history": [
        919.92,
        898.43,
        892.27,
        849.19,
        837.03,
        823.88
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-10-15 20:00:41"
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
      "updated_at": "2026-10-15 20:00:41"
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
      "updated_at": "2026-10-15 20:00:43"
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
      "price": 156.08,
      "previous_close": 186.4,
      "change": -30.32,
      "change_percent": -16.27,
      "display_price": "$156.08",
      "status": "down",
      "history": [
        183.69,
        176.29,
        177.24,
        170.11,
        166.56,
        159.83,
        156.08
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-10-15 20:00:43"
    }
  ],
  "news": [
    {
      "source": "Bloomberg",
      "title_ko": "Warsh Takes IMF Stage as Hot Inflation Spurs 금리 인상 Bets",
      "title_en": "Warsh Takes IMF Stage as Hot Inflation Spurs Rate Hike Bets",
      "summary_ko": "Warsh Takes IMF Stage as Hot Inflation Spurs 금리 인상 Bets Bloomberg.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQaktMZDgxRUI3RGFpOGlLUkt4TDlnYUVhWkNwcWlSSE83bWstR19tQ0I5NTVQTkFzUWdSYkhhSGZqTHk1Z2taX2lYYlE2RTZCUV9FVHB0V004TEF2VVRzbjItOFJjanR4enBBeTZpTFN4NzdXNmRibnNWY1MzcHNxcDVmY3BFLVJRWTFoYWE3Y0Roa3d3aG9wWk9Qd21CUU1pXzItU1d4elQ3NlozY1k5c2VGNA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxQaktMZDgxRUI3RGFpOGlLUkt4TDlnYUVhWkNwcWlSSE83bWstR19tQ0I5NTVQTkFzUWdSYkhhSGZqTHk1Z2taX2lYYlE2RTZCUV9FVHB0V004TEF2VVRzbjItOFJjanR4enBBeTZpTFN4NzdXNmRibnNWY1MzcHNxcDVmY3BFLVJRWTFoYWE3Y0Roa3d3aG9wWk9Qd21CUU1pXzItU1d4elQ3NlozY1k5c2VGNA%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 15 Oct 2026 18:31:22 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "UBS extends 연준(Fed) tightening cycle forecast with March 금리 인상 after inflation surprise",
          "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNTkxzQTlzckZ6U0lMVWlyYnNreWlmSU1WbWdncVFVaHNUTEk0VGU2S3gxNkwzMFV1NmxwV2N5U05zWEdTMG9xSUNKVnduLThfTU5zT0JlLVVISHYya0UxclBtY05EcHo3VzdyNkE0dlFLZUFCN2ZkZXpvenptaUxYNHBwTk9aZjg3QzJXUzVVX01Vc2xfSFNCYXpTSVNJb2l1MUNPSmxNTjFXanB3WVlyY3lteWd6Y3FuZUpoa2p4TXk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxNTkxzQTlzckZ6U0lMVWlyYnNreWlmSU1WbWdncVFVaHNUTEk0VGU2S3gxNkwzMFV1NmxwV2N5U05zWEdTMG9xSUNKVnduLThfTU5zT0JlLVVISHYya0UxclBtY05EcHo3VzdyNkE0dlFLZUFCN2ZkZXpvenptaUxYNHBwTk9aZjg3QzJXUzVVX01Vc2xfSFNCYXpTSVNJb2l1MUNPSmxNTjFXanB3WVlyY3lteWd6Y3FuZUpoa2p4TXk%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "US inflation heats up in September; 연준(Fed) 금리 인상 this month back on table",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNX3hkV3J5em1xWWY4V0hQODFTamFtU3NvdkpPRUUzMGY0TnlKaVlneXZPc0J6bFpWdDZWb2hLRkZZaHhZVElDSXNFbGNYMVVBRGR6c1RlNDA4cEhkMEcwck5VMFRtZ1QxOFJqNTkyaGJzWWFLSXp2Z0l1Z19vMDh5bGd6N1FJSkJFR2tZUXd1UWUzeVlvZi1xNTVONk00ejJ5cE0xSGY4THFsaUo0RGxPV3dpaW4tbEZseUE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxNX3hkV3J5em1xWWY4V0hQODFTamFtU3NvdkpPRUUzMGY0TnlKaVlneXZPc0J6bFpWdDZWb2hLRkZZaHhZVElDSXNFbGNYMVVBRGR6c1RlNDA4cEhkMEcwck5VMFRtZ1QxOFJqNTkyaGJzWWFLSXp2Z0l1Z19vMDh5bGd6N1FJSkJFR2tZUXd1UWUzeVlvZi1xNTVONk00ejJ5cE0xSGY4THFsaUo0RGxPV3dpaW4tbEZseUE%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 금리 인상 call seen tight as inflation heats up",
          "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Latest inflation data may prompt October 연준(Fed) 금리 인상, says expert",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9GZ2duV29QVWJoS2drRjRVY0NnRUJ2VUlaYkE1R1hpcHlWU2k0ZzJRTkloN0ljeWp1U1diNTBnXzdHUmpfREpJODFXb2tQUVhGdmtrUm1lR2gyRkx5aEROckJpaFQ1eVk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiZ0FVX3lxTE9GZ2duV29QVWJoS2drRjRVY0NnRUJ2VUlaYkE1R1hpcHlWU2k0ZzJRTkloN0ljeWp1U1diNTBnXzdHUmpfREpJODFXb2tQUVhGdmtrUm1lR2gyRkx5aEROckJpaFQ1eVk%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:01:13"
    },
    {
      "source": "Reuters",
      "title_ko": "EXCLUSIVE: 연준(Fed)'s Daly says rate hikes likely needed, but not urgently",
      "title_en": "EXCLUSIVE: Fed's Daly says rate hikes likely needed, but not urgently",
      "summary_ko": "EXCLUSIVE: 연준(Fed)'s Daly says rate hikes likely needed, but not urgently Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Wall Street Journal, Virginia Business 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOMndHODQzSE53STRuTnVib1hVbS02ZEtKUEFmQnlqNDRFTXVHSVRxMFh1YU9IN0lLRTlPbEZsOXhHQllMczhyQ0llSHFoX3RuQTdHNUMtQUszZlZEcWJYMDRjMDAxNG5hUGNxMXZHejlZbFg5STlZekM0Vy1VeldsVGdvRXU5SVZmZTAyVTRkT0NZOHptamRHMFVqdzdBUmNONTV2eWJzaXc?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxOMndHODQzSE53STRuTnVib1hVbS02ZEtKUEFmQnlqNDRFTXVHSVRxMFh1YU9IN0lLRTlPbEZsOXhHQllMczhyQ0llSHFoX3RuQTdHNUMtQUszZlZEcWJYMDRjMDAxNG5hUGNxMXZHejlZbFg5STlZekM0Vy1VeldsVGdvRXU5SVZmZTAyVTRkT0NZOHptamRHMFVqdzdBUmNONTV2eWJzaXc%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 14 Oct 2026 21:40:00 GMT",
      "related_articles": [
        {
          "source": "Virginia Business",
          "title_ko": "연준(Fed) may skip October but pull 금리 인상 trigger in December",
          "original_url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPZHN0WnFCZ0hweXRUUm93aE43LWpIa1AtWW9DdUdYNXJrSW1QZ1ZRWGREMmRvSmpESnpZTkotMGdadXhScEpwS2JjVUFCbHpBcUpRdHBCalBKRHEwZmdGVWE5ZjEtbkdmem9tdGkxOEowMG84N2lrT1lDQWJDTXl1SGtMU3QtUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihgFBVV95cUxPZHN0WnFCZ0hweXRUUm93aE43LWpIa1AtWW9DdUdYNXJrSW1QZ1ZRWGREMmRvSmpESnpZTkotMGdadXhScEpwS2JjVUFCbHpBcUpRdHBCalBKRHEwZmdGVWE5ZjEtbkdmem9tdGkxOEowMG84N2lrT1lDQWJDTXl1SGtMU3QtUQ%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "연준(Fed)’s Bowman Says Inflation Above Goal, But No Urgency to Act",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOQy1vLWxVdHppOC1HaVlmSWtXY0cyNG1FNExuOGRyUjVKU2lOWFl3TlllSEJmOHBxUXoxR0ZrVmpzZ1paTjJzUDBzWFhDSFZMNnNkbmZjSTdXbXUwMXFaOXp1bGFKdEdKS0QxeUZORW03T0ZyamVadkNqOFVocWZ3S1ZjYl9uR094S3Z0SGNTcnlnZmVPSVBwaW5TWThNQlVxTVNCS1ViYjdkcnh4WVU1TjhB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxOQy1vLWxVdHppOC1HaVlmSWtXY0cyNG1FNExuOGRyUjVKU2lOWFl3TlllSEJmOHBxUXoxR0ZrVmpzZ1paTjJzUDBzWFhDSFZMNnNkbmZjSTdXbXUwMXFaOXp1bGFKdEdKS0QxeUZORW03T0ZyamVadkNqOFVocWZ3S1ZjYl9uR094S3Z0SGNTcnlnZmVPSVBwaW5TWThNQlVxTVNCS1ViYjdkcnh4WVU1TjhB%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:01:28"
    },
    {
      "source": "Reuters",
      "title_ko": "연준(Fed)'s Williams sees no need for 금리 인상 in 2027, Bloomberg News reports",
      "title_en": "Fed's Williams sees no need for rate hike in 2027, Bloomberg News reports",
      "summary_ko": "연준(Fed)'s Williams sees no need for 금리 인상 in 2027, Bloomberg News reports Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Reuters, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "연준(Fed)'s Collins sees another 금리 인상 on the table before end of 2026",
          "original_url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPQTNoWUtZWjdLcTc2ZmNycnptRmR1cmluWThZU2ZTYU5JUkdaazY1Z2hEdjIxNWZ3VU5RSVZvejc3VnlueGZoN0JyNlNmdkptQk9ZNEZqU1MyLTNUblpOaF9FMkdGbnZhX1hTVllLTzYxNFEwamlyazZKem00N1k1UFBablNQSVRCZTgySWNNR3pHemxzSEl1S0VBeE1DQlYyS0Ntdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipAFBVV95cUxPQTNoWUtZWjdLcTc2ZmNycnptRmR1cmluWThZU2ZTYU5JUkdaazY1Z2hEdjIxNWZ3VU5RSVZvejc3VnlueGZoN0JyNlNmdkptQk9ZNEZqU1MyLTNUblpOaF9FMkdGbnZhX1hTVllLTzYxNFEwamlyazZKem00N1k1UFBablNQSVRCZTgySWNNR3pHemxzSEl1S0VBeE1DQlYyS0Ntdw%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "Traders now see little chance of a 연준(Fed) 금리 인상 in October after weak jobs report",
          "original_url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "New York 연준(Fed)’s Williams says it's 'reasonable' to expect another 금리 인상 by year",
          "original_url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPYmxaX3dTMVR5S2VYVnlWTC1MOVdISU9wRGg2b3FuZ0JnQVdXUUJEYVdDbVVZa1hjaEx6QW9vZ28yRnVwMnMxTE9OT0VCVUJ5Vll1aDNXQUZ2R3NnSUxyU2tOQk1WQ1NhMGk5VWVMVlBwRlBDZV9kbmpZTWg5TjJXOXA0UnphZ0XSAYwBQVVfeXFMUGIxR1RPSHZGUTJBR1Nycno2QlRfZzVpQkIzWG9Dd0lrdzJpMGMzOU8yUTFQWDFabFdYU1ZaVElkZ09BYUNTa0dMVFI5dnZJSEE4QkZ5T0VxSmd6aXVkXzVIREVkUmRfcWppX3RfZGFiMi1ETUtnWkJ6c0tCV1N2NnFpYTlOMjVvVjdmYUc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihwFBVV95cUxPYmxaX3dTMVR5S2VYVnlWTC1MOVdISU9wRGg2b3FuZ0JnQVdXUUJEYVdDbVVZa1hjaEx6QW9vZ28yRnVwMnMxTE9OT0VCVUJ5Vll1aDNXQUZ2R3NnSUxyU2tOQk1WQ1NhMGk5VWVMVlBwRlBDZV9kbmpZTWg5TjJXOXA0UnphZ0XSAYwBQVVfeXFMUGIxR1RPSHZGUTJBR1Nycno2QlRfZzVpQkIzWG9Dd0lrdzJpMGMzOU8yUTFQWDFabFdYU1ZaVElkZ09BYUNTa0dMVFI5dnZJSEE4QkZ5T0VxSmd6aXVkXzVIREVkUmRfcWppX3RfZGFiMi1ETUtnWkJ6c0tCV1N2NnFpYTlOMjVvVjdmYUc%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) approves interest 금리 인상, signals one more to come this year",
          "original_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTFB2d21SUXhkazRGZk1QSTgxb2lQME5TUzdVNEZ0bWVxdWRENm96dUNfU040Rnc4Skl5MnZwcXlKLXh0c1NzYVhrNDZHY0F2M2otb0ZEZmRyd0N2Vlk1WjZ1a1FpZk9jaEtBV25HejlPUE5LVWllZDN2TtIBfkFVX3lxTE5MbUliaWM2Nm1nSDRQU0ZEUmdZUXVNVjRZeXpzRWlaY2pMRzMwdGFUb09jaWhqUFNJZEo5OUxJenR2aEtkcWR0MnVYR3VmdndJWlJTNGlPWmUzNmJYLS1oZ29fMW5PR0dzY3JYUkUzaGdfemtIQjBqc1hjMjNtZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMieEFVX3lxTFB2d21SUXhkazRGZk1QSTgxb2lQME5TUzdVNEZ0bWVxdWRENm96dUNfU040Rnc4Skl5MnZwcXlKLXh0c1NzYVhrNDZHY0F2M2otb0ZEZmRyd0N2Vlk1WjZ1a1FpZk9jaEtBV25HejlPUE5LVWllZDN2TtIBfkFVX3lxTE5MbUliaWM2Nm1nSDRQU0ZEUmdZUXVNVjRZeXpzRWlaY2pMRzMwdGFUb09jaWhqUFNJZEo5OUxJenR2aEtkcWR0MnVYR3VmdndJWlJTNGlPWmUzNmJYLS1oZ29fMW5PR0dzY3JYUkUzaGdfemtIQjBqc1hjMjNtZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:01:49"
    },
    {
      "source": "MarketWatch",
      "title_ko": "Traders expecting a back-to",
      "title_en": "Traders expecting a back-to-back rate hike from the Fed in October may have gotten ahead of themselves",
      "summary_ko": "Traders expecting a back-to 관련 핵심 동향이 발표되었습니다. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. MarketWatch뿐만 아니라 CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "A July 금리 인상 from the 연준(Fed)? The odds are rising",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxONUdmS2Z4R0JWQjJVblhOSnRtcWJXUEVxVFBqcG9JdWhBcjZ1RXVya2ZZNjNqTDVQY2RiSm5xbEUyVlRDSjg5MExzXzdwNW83d2tTaFE3SVBwS1E5VVVRbkpZSmpCekNvZi1iTnJaMUcyb1c3WTk0R1RFQjZUczNOQ2NKQ0lpZW5Ha2hVR19Ld1nSAZYBQVVfeXFMTk1kR0FPT1VVTUdoSDRRZnN5dUtfWkUxdF91emZuMHFxU3p0ZGdkTkxncGpLQ0RaVDFsNjROSDdtRk51dkcySng5cUNVcERaOERSVWhUQzYzcUZhNnEycFYwc1BxN25qSGR4N0NqUEVSTFVwNENjMEpmbUFGTE1mQnk4NEt3bERFUHp1YzI4OWZ1bnVmdFFn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxONUdmS2Z4R0JWQjJVblhOSnRtcWJXUEVxVFBqcG9JdWhBcjZ1RXVya2ZZNjNqTDVQY2RiSm5xbEUyVlRDSjg5MExzXzdwNW83d2tTaFE3SVBwS1E5VVVRbkpZSmpCekNvZi1iTnJaMUcyb1c3WTk0R1RFQjZUczNOQ2NKQ0lpZW5Ha2hVR19Ld1nSAZYBQVVfeXFMTk1kR0FPT1VVTUdoSDRRZnN5dUtfWkUxdF91emZuMHFxU3p0ZGdkTkxncGpLQ0RaVDFsNjROSDdtRk51dkcySng5cUNVcERaOERSVWhUQzYzcUZhNnEycFYwc1BxN25qSGR4N0NqUEVSTFVwNENjMEpmbUFGTE1mQnk4NEt3bERFUHp1YzI4OWZ1bnVmdFFn%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:02:00"
    },
    {
      "source": "MarketWatch",
      "title_ko": "Opinion: 연준(Fed) minutes coming tomorrow could give markets important clues about future rate hikes",
      "title_en": "Opinion: Fed minutes coming tomorrow could give markets important clues about future rate hikes",
      "summary_ko": "Opinion: 연준(Fed) minutes coming tomorrow could give markets important clues about future rate hikes MarketWatch. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. MarketWatch에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
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
      "crawled_at": "2026-10-15 20:02:07"
    },
    {
      "source": "Reuters",
      "title_ko": "US toy prices surge ahead of holiday shopping season as tariffs, Iran war bite",
      "title_en": "US toy prices surge ahead of holiday shopping season as tariffs, Iran war bite",
      "summary_ko": "US toy prices surge ahead of holiday shopping season as tariffs, Iran war bite Reuters. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Reuters뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPUWVCNGhqaElYVEdtQXA1SUhOSzFvVDc2YUMxWFdDTGhUOTFIR2taTXFwbzRoM0xlZWxsYkozc0NYejhNb2VpdHZ1VDUxQkZ0ZnNjMFVtRF9GRzBMaFBBYXNzTHRGd2pxbWpweXJqY1JjNnNVd3lHTXU3bmpDQ1J1QWphUk43VEVuSXZnNmZFdzkwZHJHLU55SGU0N1I5amh5Tmt2UEs3cUxoRkFkV1k5UFlIdlpqU3pFZE0tbVNFWnR4eDFRektpeVQzWmw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizAFBVV95cUxPUWVCNGhqaElYVEdtQXA1SUhOSzFvVDc2YUMxWFdDTGhUOTFIR2taTXFwbzRoM0xlZWxsYkozc0NYejhNb2VpdHZ1VDUxQkZ0ZnNjMFVtRF9GRzBMaFBBYXNzTHRGd2pxbWpweXJqY1JjNnNVd3lHTXU3bmpDQ1J1QWphUk43VEVuSXZnNmZFdzkwZHJHLU55SGU0N1I5amh5Tmt2UEs3cUxoRkFkV1k5UFlIdlpqU3pFZE0tbVNFWnR4eDFRektpeVQzWmw%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Thu, 15 Oct 2026 10:18:56 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Watch US 수익률(금리) Surge, Calling Bessent's Bluff | Real 수익률(금리) 9/10/2026",
          "original_url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNd2tGMFFaNG1oZmhPWVhIUk1yRTBkWVNNXzBSNW9JcW11Mkt5Zm1tSXM0RFVHMDd2RkNaT3lIbXE0cTBhWmZoQjlWbTNzTVZlX2pSbEZxOTBLZFZiZThtTER5MmhMMVJuTEY4a29vaXpRQzlBcnh4ZWY1NTFnTmpsQg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMigAFBVV95cUxNd2tGMFFaNG1oZmhPWVhIUk1yRTBkWVNNXzBSNW9JcW11Mkt5Zm1tSXM0RFVHMDd2RkNaT3lIbXE0cTBhWmZoQjlWbTNzTVZlX2pSbEZxOTBLZFZiZThtTER5MmhMMVJuTEY4a29vaXpRQzlBcnh4ZWY1NTFnTmpsQg%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "US Producer Prices Rise by Most in More Than Four Years",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxON0NNSjRwU0JyOE4wRVpSOTQ2QjZvR1p5aFpKV0VlM1gxd2lCLWM3YlIySHpuZF9kR0pEM3ZWaHZJUU1lNkxRRVJKV0s2eDZpWk5tNGdIQl9xMHlqT29OVFZNWnZoYzk4VzNDWkRoY3IwaVRpTVloVmJ6YWV5WEx5MDl4ZHpUQjkwTXhxZ0dPU3dWZkdjcjVtYnJCUkxIU1F3endOZkVjWWcyUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxON0NNSjRwU0JyOE4wRVpSOTQ2QjZvR1p5aFpKV0VlM1gxd2lCLWM3YlIySHpuZF9kR0pEM3ZWaHZJUU1lNkxRRVJKV0s2eDZpWk5tNGdIQl9xMHlqT29OVFZNWnZoYzk4VzNDWkRoY3IwaVRpTVloVmJ6YWV5WEx5MDl4ZHpUQjkwTXhxZ0dPU3dWZkdjcjVtYnJCUkxIU1F3endOZkVjWWcyUQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Gold subdued ahead of US inflation data, Warsh remarks",
          "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNRnRSZTl3U0dwUkZRSkNlalhmeF94cE1aaGV4NjNZdll2aENMRDZTWGNTTnhjMS1BQ1hKUG9qc2hKS185eXpWTjFfUnBwN1cwdVNIUllaMnc0Tno2SnFBaXp4RGxMWkd1eFhXR1VTLV9qN25ETlIyeEVLNXNGX2NqZV80SUk5WG5IeEVDNGpRbTRfaVliMk9HVk5vQ0lyVnc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxNRnRSZTl3U0dwUkZRSkNlalhmeF94cE1aaGV4NjNZdll2aENMRDZTWGNTTnhjMS1BQ1hKUG9qc2hKS185eXpWTjFfUnBwN1cwdVNIUllaMnc0Tno2SnFBaXp4RGxMWkd1eFhXR1VTLV9qN25ETlIyeEVLNXNGX2NqZV80SUk5WG5IeEVDNGpRbTRfaVliMk9HVk5vQ0lyVnc%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "House Passes Bill Allowing New Tariffs on Russia Oil Buyers",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPSUY3Y2o1UW5sR1pnNktlX1BHSjVyU3pNTzZ1VVoxQ1JnWUg3c2pLTGF2VUtpbl96MWlDY2NSMEp3ZHNHbHZHbDdSMWVlYzI1N0lwaVpLV2oxLTJZaVNNVFZmVDBQRUFjVms4ZXpMZjdXaWZkX3h4dzJMRWpYMW9jbTlnM3lIOW5Ea0poUGphVGhZVVczUVRjRlBKSnlkWTk1Q1lRbW1FdGhpNldUdXlrbEdjbw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPSUY3Y2o1UW5sR1pnNktlX1BHSjVyU3pNTzZ1VVoxQ1JnWUg3c2pLTGF2VUtpbl96MWlDY2NSMEp3ZHNHbHZHbDdSMWVlYzI1N0lwaVpLV2oxLTJZaVNNVFZmVDBQRUFjVms4ZXpMZjdXaWZkX3h4dzJMRWpYMW9jbTlnM3lIOW5Ea0poUGphVGhZVVczUVRjRlBKSnlkWTk1Q1lRbW1FdGhpNldUdXlrbEdjbw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:02:28"
    },
    {
      "source": "Reuters",
      "title_ko": "US 수익률(금리) surge triggers mortgage hedging, adds to bond market pressure",
      "title_en": "US yield surge triggers mortgage hedging, adds to bond market pressure",
      "summary_ko": "US 수익률(금리) surge triggers mortgage hedging, adds to bond market pressure Reuters. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "미 국채/재무부 수익률(금리) Surge as Oil, Buyback Results Fuel Selloff",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPVDFoMGQwT1RfV280cU11T0IxcTFHbEVSaXkxLXJyaGVaVG1MRGowVWFXSC0xVDNTRDc5cGx1dUlXM3dfbmZxRE1xVmpTclpRQ0gxOVRJX1c5QzR5czd5WDJpWktpdGx3Q0JPcmVQdGs3VU1tS0x4R1FxbHYwMTBwdXlHdEpZM3RtdEJyTjRvbVBxVElLLU02ZGtJbmRpc1B3R0tnc0lSSVR6b0xSalhNcWRZMWxPQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPVDFoMGQwT1RfV280cU11T0IxcTFHbEVSaXkxLXJyaGVaVG1MRGowVWFXSC0xVDNTRDc5cGx1dUlXM3dfbmZxRE1xVmpTclpRQ0gxOVRJX1c5QzR5czd5WDJpWktpdGx3Q0JPcmVQdGs3VU1tS0x4R1FxbHYwMTBwdXlHdEpZM3RtdEJyTjRvbVBxVElLLU02ZGtJbmRpc1B3R0tnc0lSSVR6b0xSalhNcWRZMWxPQQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent’s Upsized Buybacks Get Hit by Bond Market Reality",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPMHM4dHJQb1psOHhIc3JyX1Mzc0dOd2RtcDRPUFpzeXlIWWhjNjB3elFmYXBHRDhaemJiX0lDaFRTUnRSLU94SDBiTndjQjh0d3NoTXI5anNWLUlwUEZwR3VXcDhDRHFYRkdES1N5cVk2c3I0YnVFWlp6d2g2N0Y1V1JVSTZpekgteUVBZGNnckNqdFlac0pyazBnaThDeFNYS1BjWkdHSWxWa0l6ZDVzZnVESQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPMHM4dHJQb1psOHhIc3JyX1Mzc0dOd2RtcDRPUFpzeXlIWWhjNjB3elFmYXBHRDhaemJiX0lDaFRTUnRSLU94SDBiTndjQjh0d3NoTXI5anNWLUlwUEZwR3VXcDhDRHFYRkdES1N5cVk2c3I0YnVFWlp6d2g2N0Y1V1JVSTZpekgteUVBZGNnckNqdFlac0pyazBnaThDeFNYS1BjWkdHSWxWa0l6ZDVzZnVESQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Behind Bessent Moves, 월가 Sees Sign of Bond",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPTGtZcUxST3BKd3FOQ2l3TDltSUlfQl82cGhRLU9XOHZNdHltaEFUM3RaMmNzdGRIQWJRSWR1c0VEUVJDYTVycVhRbVpTNjc4SFBFdUo2TnBHTWF0MjVIc0ZWb254Uzc4MXlkQnFORUd3d0RWT3VJdkpWMUJfTVNIOGtvUTNZVUVaUUVOYXRsQUtFeXZmbzRSOHNSWHRGT2FXaTFNNGNuZXFwVUs1T2JUUnpDWnM?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxPTGtZcUxST3BKd3FOQ2l3TDltSUlfQl82cGhRLU9XOHZNdHltaEFUM3RaMmNzdGRIQWJRSWR1c0VEUVJDYTVycVhRbVpTNjc4SFBFdUo2TnBHTWF0MjVIc0ZWb254Uzc4MXlkQnFORUd3d0RWT3VJdkpWMUJfTVNIOGtvUTNZVUVaUUVOYXRsQUtFeXZmbzRSOHNSWHRGT2FXaTFNNGNuZXFwVUs1T2JUUnpDWnM%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:02:45"
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
      "crawled_at": "2026-10-15 20:03:06"
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
          "title_ko": "Chokepoints and the Challenge Facing Policymakers to Gauge Supply Shocks",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPMmFyTzlEQ1Itb0dPVU13amFqLUc5UG1tbGY5UDF6ZG1KdmEzcXZ3LUFXNlVSMXllaFhQRXhJWVlpWFUzeFNYRWM2d1hPR2d0R2FnVk4zSzJudktUYjBHWTNwZWpjY2ZjNkNxRWs2TjBPUDUyblV3ejJLMVhHWGNEcmp0TzBqZE90b2hmZmpnY01tT05wMzBjMTRsNWZGNC1WZHN0WDBjT0tUb1RnNWNod0N6cl9nS3c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxPMmFyTzlEQ1Itb0dPVU13amFqLUc5UG1tbGY5UDF6ZG1KdmEzcXZ3LUFXNlVSMXllaFhQRXhJWVlpWFUzeFNYRWM2d1hPR2d0R2FnVk4zSzJudktUYjBHWTNwZWpjY2ZjNkNxRWs2TjBPUDUyblV3ejJLMVhHWGNEcmp0TzBqZE90b2hmZmpnY01tT05wMzBjMTRsNWZGNC1WZHN0WDBjT0tUb1RnNWNod0N6cl9nS3c%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Watch What Hot US Inflation Means for Bonds, Warsh in Asia",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOZFl4aVM5TWdsVEVDTnB4SWh2OVZ4bGJKZkZGcHNsVUc1dC1uX3A4N1pYeUZTeEMtSWUyTklfekt0ZldtQWtRVmVHWldMSFJuZHBDNmdzQXh2dW9tQktXdGk5VndHa1hQUnRIcjI3Q200NWJKakhodE1mdEhnb3hudjBUVkRCWGF6aG85cjlRRk94eU9FbDRtX1ZHM0xpOXlIdUh0a181T1NOQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxOZFl4aVM5TWdsVEVDTnB4SWh2OVZ4bGJKZkZGcHNsVUc1dC1uX3A4N1pYeUZTeEMtSWUyTklfekt0ZldtQWtRVmVHWldMSFJuZHBDNmdzQXh2dW9tQktXdGk5VndHa1hQUnRIcjI3Q200NWJKakhodE1mdEhnb3hudjBUVkRCWGF6aG85cjlRRk94eU9FbDRtX1ZHM0xpOXlIdUh0a181T1NOQQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "India's goods trade deficit widens; focus turns to trade pacts to narrow gap",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPRlpEUE85Qnl6NWJNQXBnMU1Lek11TWVESkZWSFVzU2JrM3kyUmhWeGNHd3VRNE5YRzBXeC1ieElneF9CcjdoWkpBSHRsWFMxRVg2N1VyX29EQ0lHZDZaaHN2QkdIMHB0NVFKTENwb1pXc29GLVFhWFRId2MtYmJmU3ZJWDlFMVdjMzlHT1lrQzh1d1lCYWJvTXFLd1U1ejVCZ3dHSWlB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxPRlpEUE85Qnl6NWJNQXBnMU1Lek11TWVESkZWSFVzU2JrM3kyUmhWeGNHd3VRNE5YRzBXeC1ieElneF9CcjdoWkpBSHRsWFMxRVg2N1VyX29EQ0lHZDZaaHN2QkdIMHB0NVFKTENwb1pXc29GLVFhWFRId2MtYmJmU3ZJWDlFMVdjMzlHT1lrQzh1d1lCYWJvTXFLd1U1ejVCZ3dHSWlB%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent Pushes IMF on ‘Distortionary’ Policies, Hints at China",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxONm1xZ1dGQjF6RElKNTVENktvczF4UTZTa05xXzBIQlp3ekM0bTZjRVdUb0ZNRFE2OWtENm9mMDE2YlBZdE41cndPeWphSmN0ejkxVW03WklIOWFETVZmVEV0VWpCWHJkZEFHQ0xCa2pLLUtVNVBYLU1HSzFfTUtpN2MwOGtYcUR6ZWxiY2VUWm9objVRMnEwdXV3MVRKV2UxOEZRU2JlZFpFTkZ0RjlLcw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxONm1xZ1dGQjF6RElKNTVENktvczF4UTZTa05xXzBIQlp3ekM0bTZjRVdUb0ZNRFE2OWtENm9mMDE2YlBZdE41cndPeWphSmN0ejkxVW03WklIOWFETVZmVEV0VWpCWHJkZEFHQ0xCa2pLLUtVNVBYLU1HSzFfTUtpN2MwOGtYcUR6ZWxiY2VUWm9objVRMnEwdXV3MVRKV2UxOEZRU2JlZFpFTkZ0RjlLcw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:03:28"
    },
    {
      "source": "한국경제",
      "title_ko": "이형일, 베센트와 첫 상견례…'대미투자' 재무라인 가동",
      "title_en": "",
      "summary_ko": "이형일, 베센트와 첫 상견례…'대미투자' 재무라인 가동 대한경제. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 한국경제뿐만 아니라 시민행정신문, YTN 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "YTN",
          "title_ko": "이형일·베센트 화상면담 \"한미 경제·금융협력 중요성 재확인\"",
          "original_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5uc2hLVTdXQ0tSdm4xZkh5NTUxUks3UkdKNDV3UjRXTGJ1MnBVVDJ6cXZGX01YVVVPWWdnVUcwNHpva0hWc1g2REE5ZUpGYnQydFFFQVpzNEo0MTdxZUE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5uc2hLVTdXQ0tSdm4xZkh5NTUxUks3UkdKNDV3UjRXTGJ1MnBVVDJ6cXZGX01YVVVPWWdnVUcwNHpva0hWc1g2REE5ZUpGYnQydFFFQVpzNEo0MTdxZUE?oc=5"
        },
        {
          "source": "시민행정신문",
          "title_ko": "이형일 부총리, 베센트 美 재무장관과 화상면담",
          "original_url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9DcnI5V05XVEEzRW1sSnhNQmZGNmtSQ0tJWmx1em8xT2FnbmhyXzQ1Y2RVRWZYemsyVktiLUdZVzhLVWtycEJqMzJzM21GSG5WclRrZ2lmaFRKS2FMc3pSa2lja2UtU1NGenlFZHB3?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9DcnI5V05XVEEzRW1sSnhNQmZGNmtSQ0tJWmx1em8xT2FnbmhyXzQ1Y2RVRWZYemsyVktiLUdZVzhLVWtycEJqMzJzM21GSG5WclRrZ2lmaFRKS2FMc3pSa2lja2UtU1NGenlFZHB3?oc=5"
        }
      ],
      "crawled_at": "2026-10-15 20:03:28"
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
      "crawled_at": "2026-10-15 20:03:35"
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
      "crawled_at": "2026-10-15 20:03:35"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "\"외국인 순매도 사상최대 전망\"…코스피 수급 불확실성 커진다",
      "title_en": "",
      "summary_ko": "\"외국인 순매도 사상최대 전망\"…코스피 수급 불확실성 커진다 연합인포맥스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 연합인포맥스뿐만 아니라 팍스경제TV, 뉴스토마토 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "전자신문",
          "title_ko": "코스피 3.65% 급락해 두 달 만에 6380대 '털썩'…외국인 순매도 행렬 지속",
          "original_url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1KY3NDZlNBVUdOdjBvOEtrUmpEYXVjcllhNmlUZ1IxRXprYkVOSGd2RGFSMjNxckstZE01ajNSRlg0SXNyU2FEUk5aQUExUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1KY3NDZlNBVUdOdjBvOEtrUmpEYXVjcllhNmlUZ1IxRXprYkVOSGd2RGFSMjNxckstZE01ajNSRlg0SXNyU2FEUk5aQUExUQ?oc=5"
        },
        {
          "source": "팍스경제TV",
          "title_ko": "코스피, 외국인 7거래일 연속 ‘팔자’…6000선 턱걸이",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB0eXJMblppNVRQVE1xS1RrMDhKTGV6U3ZPTFdIb3NqXy15b2gxR1JncENpd250VmMwcU84R25wa0FmRzdMem5rSkVrRTNZZUh1NTA2ZmREbExQalFfaVBTNjFtZ1Brdk51?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB0eXJMblppNVRQVE1xS1RrMDhKTGV6U3ZPTFdIb3NqXy15b2gxR1JncENpd250VmMwcU84R25wa0FmRzdMem5rSkVrRTNZZUh1NTA2ZmREbExQalFfaVBTNjFtZ1Brdk51?oc=5"
        },
        {
          "source": "뉴스핌",
          "title_ko": "[개장시황] 코스피, 외국인 순매수 전환에 2% 상승…6100선 회복",
          "original_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5TS3FzcWh6cDF2M0FqMlJtNUQ1NUN2X1ZvaXEtWHA3MkNnSExaTmNtNkoxWllydjlaUzZKdXdzUXRlWXQydHFxMUJrRkZab2lVbFliTExIYlVsU0tT?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5TS3FzcWh6cDF2M0FqMlJtNUQ1NUN2X1ZvaXEtWHA3MkNnSExaTmNtNkoxWllydjlaUzZKdXdzUXRlWXQydHFxMUJrRkZab2lVbFliTExIYlVsU0tT?oc=5"
        },
        {
          "source": "뉴스토마토",
          "title_ko": "코스피, 외국인 매도에 6500선 턱걸이…4거래일 연속 약세",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE0ycDBUQktZNHgweWhzdmZ5Q1lpa0YxeFNXbVhuY3F0V0ZIWlNXSUZWZ1BDSVF3R3NYVWZGYlZHMFlkeG9BUVdsdDBZTkNqTmY0QW9TR1V4T194ZUkzU3RJVQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE0ycDBUQktZNHgweWhzdmZ5Q1lpa0YxeFNXbVhuY3F0V0ZIWlNXSUZWZ1BDSVF3R3NYVWZGYlZHMFlkeG9BUVdsdDBZTkNqTmY0QW9TR1V4T194ZUkzU3RJVQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-15 20:03:35"
    },
    {
      "source": "중기이코노미",
      "title_ko": "원달러 환율 하락·중동 긴장 국제유가 상승 마감",
      "title_en": "",
      "summary_ko": "원달러 환율 하락·중동 긴장 국제유가 상승 마감 중기이코노미. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 중기이코노미뿐만 아니라 베타뉴스, 중기이코노미 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5VdEZNMU9Rd3J2UTI1alpPTnlESDRhR2x4djhVN0lyZkFVaXU1QUVPRHo2RVgybUZmaVh2R3pVU19pcklQVGhVX29YODQ5SS1kVmFzMFV5RjFMLUZQNGJKeE12V2UzY3JSV1E?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5VdEZNMU9Rd3J2UTI1alpPTnlESDRhR2x4djhVN0lyZkFVaXU1QUVPRHo2RVgybUZmaVh2R3pVU19pcklQVGhVX29YODQ5SS1kVmFzMFV5RjFMLUZQNGJKeE12V2UzY3JSV1E?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 15 Oct 2026 01:21:46 GMT",
      "related_articles": [
        {
          "source": "중기이코노미",
          "title_ko": "중동 지정학적 리스크와 유가상승 여파로 원달러 환율↑",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE14a0VTcjZaSzlGWEtSQkdZQXNRQS1zRFhBMVdTck1hRTJlU01ucTNkd3YzNzVqcTNfRG9DcjBaWlBsRFlZeGdRblFaaHlfUHc4QTF4Vk16M3Eyb19TcEhHZV9RVlR1T3M0d3c?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE14a0VTcjZaSzlGWEtSQkdZQXNRQS1zRFhBMVdTck1hRTJlU01ucTNkd3YzNzVqcTNfRG9DcjBaWlBsRFlZeGdRblFaaHlfUHc4QTF4Vk16M3Eyb19TcEhHZV9RVlR1T3M0d3c?oc=5"
        },
        {
          "source": "베타뉴스",
          "title_ko": "'美 물가 충격·증시 폭락'에 원·달러 환율 급등...1344.6원 마감",
          "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBKdmJfVFV6WHNnLWRsMWpxWVQySmdNU3hBOGdmWkswekJtY2g4TkYtT0NydjJBSnFuZ2RTdGVfaGE3emVSS1plYUljQjJwVXg0RDRWSzF6WldlX1JoUTdYZTFZSTI?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBKdmJfVFV6WHNnLWRsMWpxWVQySmdNU3hBOGdmWkswekJtY2g4TkYtT0NydjJBSnFuZ2RTdGVfaGE3emVSS1plYUljQjJwVXg0RDRWSzF6WldlX1JoUTdYZTFZSTI?oc=5"
        }
      ],
      "crawled_at": "2026-10-15 20:03:35"
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
      "crawled_at": "2026-10-15 20:03:42"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "[금통위 인터뷰] 도이체 \"한은, 11월부터 3차례 금리 인상…최종금리 3.75%\" |",
      "title_en": "",
      "summary_ko": "[금통위 인터뷰] 도이체 \"한은, 11월부터 3차례 금리 인상…최종금리 3.75%\" | 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 인더스트리뉴스, 연합뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE0tdDFldFlQTU9UUXFKU1FBNmMtNWxZbjNQWHF3bC1GZ1JWVmlIRkx1S3B5NDdra3UtaE1EMFpLZl8ydmhUa3Y2RG9sY1M4YkZpT1p0SGhYUmFBZHU1UzNfMGE1Z0xXeGRfSjJEakxEMGFHbE5k?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE0tdDFldFlQTU9UUXFKU1FBNmMtNWxZbjNQWHF3bC1GZ1JWVmlIRkx1S3B5NDdra3UtaE1EMFpLZl8ydmhUa3Y2RG9sY1M4YkZpT1p0SGhYUmFBZHU1UzNfMGE1Z0xXeGRfSjJEakxEMGFHbE5k?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 15 Oct 2026 01:05:07 GMT",
      "related_articles": [
        {
          "source": "연합뉴스",
          "title_ko": "野배준영 \"한은총재, 이달 기준금리 인상 '원점 재검토'해야\"",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1jTzNWVkNkLV90bXZycmk1Tm5RaGpwaUh6Q0RBN2tFaEtaeEl0TzExU0x5VzlKc2NFUHlLczJTSmVpU01kNWZOWTJiN19uUW80NV9GTW5GOFhIQXQtaURLUNIBYEFVX3lxTE1jTzNWVkNkLV90bXZycmk1Tm5RaGpwaUh6Q0RBN2tFaEtaeEl0TzExU0x5VzlKc2NFUHlLczJTSmVpU01kNWZOWTJiN19uUW80NV9GTW5GOFhIQXQtaURLUA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1jTzNWVkNkLV90bXZycmk1Tm5RaGpwaUh6Q0RBN2tFaEtaeEl0TzExU0x5VzlKc2NFUHlLczJTSmVpU01kNWZOWTJiN19uUW80NV9GTW5GOFhIQXQtaURLUNIBYEFVX3lxTE1jTzNWVkNkLV90bXZycmk1Tm5RaGpwaUh6Q0RBN2tFaEtaeEl0TzExU0x5VzlKc2NFUHlLczJTSmVpU01kNWZOWTJiN19uUW80NV9GTW5GOFhIQXQtaURLUA?oc=5"
        },
        {
          "source": "인더스트리뉴스",
          "title_ko": "모건스탠리 “한은, 11월 기준금리 인상”…내년 1분기 3.50% 전망",
          "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTFBMYVZJTWoyaVNDeEJ6a3F2NVVTRkpGOVdfOXpZSndDNjFhM044LUpzRms1aHZMb18zOUVLM0NGWk5INW41d0NYWU1JQnJWTVdLdW9zVE5ZLUhTTHJ6a3M4ZDlPZm50cC16S0htSlkxbTd1dw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTFBMYVZJTWoyaVNDeEJ6a3F2NVVTRkpGOVdfOXpZSndDNjFhM044LUpzRms1aHZMb18zOUVLM0NGWk5INW41d0NYWU1JQnJWTVdLdW9zVE5ZLUhTTHJ6a3M4ZDlPZm50cC16S0htSlkxbTd1dw?oc=5"
        },
        {
          "source": "아이뉴스24",
          "title_ko": "금통위원들 \"집값 아직 불안⋯금리 인상, 취약부문 부실 우려\"",
          "original_url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFA0MGhQWGpsRms1NmJYSzljNERXYXZ6VHFJSm5jY2ZCUFlPZWpNQVUyQy1CeVpuMHZGNl9YbTBQNENqWDh3bEhLamFTSQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFA0MGhQWGpsRms1NmJYSzljNERXYXZ6VHFJSm5jY2ZCUFlPZWpNQVUyQy1CeVpuMHZGNl9YbTBQNENqWDh3bEhLamFTSQ?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "[금통위 인터뷰] JP모건 \"이달 매파적 동결 전망…최종금리 3.75%\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9GbjFvNFUtZEp5VVpWSHczeHhId3VMOTVERHVSQVBNOGE3U2FSb2VVYWQtNEh6eHNDODNySEhJYlJDLWNLUE5Hc2FGTkNTa3BQcGduOWc1RUhCTzNMc2p2V2VkVktnb0dDT1N5RXpfbFo?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9GbjFvNFUtZEp5VVpWSHczeHhId3VMOTVERHVSQVBNOGE3U2FSb2VVYWQtNEh6eHNDODNySEhJYlJDLWNLUE5Hc2FGTkNTa3BQcGduOWc1RUhCTzNMc2p2V2VkVktnb0dDT1N5RXpfbFo?oc=5"
        }
      ],
      "crawled_at": "2026-10-15 20:03:42"
    },
    {
      "source": "매일일보",
      "title_ko": "내년 채권금리 전망 엇갈려…KB증권 '하락'·블룸버그 '기준금리 인상'",
      "title_en": "",
      "summary_ko": "내년 채권금리 전망 엇갈려…KB증권 '하락'·블룸버그 '기준금리 인상' 매일일보. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 매일일보에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE53TUpJeFVEZWhCZFdkT2ZRM05kZC1FWEJYcXl5YkF1dTZMajZSMFY3UDlhSlgzd0lsaThGczlDeG1XTnpwYjVHSlJnRnF6QVozN0w3N0JlZHlMUjZESXlHMmlEQng?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE53TUpJeFVEZWhCZFdkT2ZRM05kZC1FWEJYcXl5YkF1dTZMajZSMFY3UDlhSlgzd0lsaThGczlDeG1XTnpwYjVHSlJnRnF6QVozN0w3N0JlZHlMUjZESXlHMmlEQng?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 15 Oct 2026 07:05:43 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-15 20:03:42"
    },
    {
      "source": "비즈니스포스트",
      "title_ko": "현대차증권 \"미국 연준 연내 기준금리 인상 확실, 10월보다 12월 인상에 무게\"",
      "title_en": "",
      "summary_ko": "현대차증권 \"미국 연준 연내 기준금리 인상 확실, 10월보다 12월 인상에 무게\" 비즈니스포스트. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 비즈니스포스트뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE13YnZmczAxZ242RDRFcEREajBBYXdZTmRmV0hmSVpkanhUcXQ0ZXRmU0dxLU9zWGVnakhJNG03UWlCbk1UZG1zcUJiVXJxSzdjVUQtbkFTbWg2OHEtdUlfN1hZMWp0QS0tSkJBQWpDNm54Mk0?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE13YnZmczAxZ242RDRFcEREajBBYXdZTmRmV0hmSVpkanhUcXQ0ZXRmU0dxLU9zWGVnakhJNG03UWlCbk1UZG1zcUJiVXJxSzdjVUQtbkFTbWg2OHEtdUlfN1hZMWp0QS0tSkJBQWpDNm54Mk0?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 15 Oct 2026 00:17:07 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "\"3.25%가 최종 기준금리될 것…핵심 물가, 12월이 피크\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1VRmhiZy1DY0ZEVm4tWnVEVnlxWG5LYXpodkZ3M1dHNWpveEJmMWY2MkNPTlFrLVRFcmIwZFQ1M09rUnZBQzVub0NjN2x0bnV0Y2M0MUtoeWVuYkNJTnZrQjVleW5wallNcExndkNOOEY?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1VRmhiZy1DY0ZEVm4tWnVEVnlxWG5LYXpodkZ3M1dHNWpveEJmMWY2MkNPTlFrLVRFcmIwZFQ1M09rUnZBQzVub0NjN2x0bnV0Y2M0MUtoeWVuYkNJTnZrQjVleW5wallNcExndkNOOEY?oc=5"
        }
      ],
      "crawled_at": "2026-10-15 20:03:43"
    },
    {
      "source": "MBC 뉴스",
      "title_ko": "미 9월 CPI 전년 대비 3.7%↑‥기준금리 결정 앞두고 전망치 상회",
      "title_en": "",
      "summary_ko": "미 9월 CPI 전년 대비 3.7%↑‥기준금리 결정 앞두고 전망치 상회 MBC 뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. MBC 뉴스뿐만 아니라 아이뉴스24, KBS 뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
      "related_articles": [
        {
          "source": "아이뉴스24",
          "title_ko": "美 9월 소비자물가 3.7% 상승⋯연준 추가 금리 인상 압박",
          "original_url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBSZ0dVVEZESFg2Ty1HNklLV2pyUDR2WW01V01ySGdWMnB6TjQtMTAxdDVlZ0NGUWhUX3FPVzR1ZjNHRGVKUV9oUVl3VQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBSZ0dVVEZESFg2Ty1HNklLV2pyUDR2WW01V01ySGdWMnB6TjQtMTAxdDVlZ0NGUWhUX3FPVzR1ZjNHRGVKUV9oUVl3VQ?oc=5"
        },
        {
          "source": "조선일보",
          "title_ko": "美 9월 소비자물가 3.7% 상승…이달 금리 인상 확률 22%→46%",
          "original_url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPTVBRVHpibUpXclFIRmV3NlRwSmpkVGJzTEFoeEl0WFlPUEVxY3pkdnJocXZfZ3djd0djU3M4Qk5RVjdLRDV4NEs1QWdiSkVwLVRsaDl3dmZ3bHNOUlNKY1AwZWJVRTZUWVEtT1djU2JtY3Roa3Vxd2RPb2QtQmFlcElIc2p6NkcwUk9B?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPTVBRVHpibUpXclFIRmV3NlRwSmpkVGJzTEFoeEl0WFlPUEVxY3pkdnJocXZfZ3djd0djU3M4Qk5RVjdLRDV4NEs1QWdiSkVwLVRsaDl3dmZ3bHNOUlNKY1AwZWJVRTZUWVEtT1djU2JtY3Roa3Vxd2RPb2QtQmFlcElIc2p6NkcwUk9B?oc=5"
        },
        {
          "source": "KBS 뉴스",
          "title_ko": "미 소비자물가 3.7% 상승…추가 금리 인상 압박",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5IenVxckJFRXMxVWVpbVVFb182dzhTRmVETWFwTGhGcU1sLUVOekVXRkNkQjhCZ1Y3WFJ5MlozWHphc1FHa21YTjJOcEdDbHdadE9SM285M281ZVE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5IenVxckJFRXMxVWVpbVVFb182dzhTRmVETWFwTGhGcU1sLUVOekVXRkNkQjhCZ1Y3WFJ5MlozWHphc1FHa21YTjJOcEdDbHdadE9SM285M281ZVE?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "美 근원 9월 소비자물가지수 전달비 0.3% 상승…시장 전망치 상회(상보)",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1IZEQxLVZBdlplR3ozVndmVlVDSEFVZXpEMnpQdkMzbmdCOWQxVHJqOXdqV05VY1JZeVRZS3lXejNSNktzMVoydThYdlNaa0FJSVRXb1dVREVtVkYwTHU4WWI3dE1qakZZd0drLV96VVk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1IZEQxLVZBdlplR3ozVndmVlVDSEFVZXpEMnpQdkMzbmdCOWQxVHJqOXdqV05VY1JZeVRZS3lXejNSNktzMVoydThYdlNaa0FJSVRXb1dVREVtVkYwTHU4WWI3dE1qakZZd0drLV96VVk?oc=5"
        }
      ],
      "crawled_at": "2026-10-15 20:03:43"
    },
    {
      "source": "KBS 뉴스",
      "title_ko": "한은 총재 “7·8월 연속 기준금리 인상으로 궁극적 비용 축소”",
      "title_en": "",
      "summary_ko": "한은 총재 “7·8월 연속 기준금리 인상으로 궁극적 비용 축소” KBS 뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. KBS 뉴스뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAzak51UWpRWkdhU2M4Q05TR0NFbUlGb2tZamxNbXF5R09kLUR0UWNGRDIzOVRjSEkwTmZFVHZJVEw5bW40dmZ1S05LeEZwQ3Y0dVJxcmVvbFMwaFk?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAzak51UWpRWkdhU2M4Q05TR0NFbUlGb2tZamxNbXF5R09kLUR0UWNGRDIzOVRjSEkwTmZFVHZJVEw5bW40dmZ1S05LeEZwQ3Y0dVJxcmVvbFMwaFk?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 12 Oct 2026 02:45:00 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "호주 웨스트팩 \"RBA, 11월 기준금리 25bp 인상 전망…실업률 영향 미미\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1wbEZpX0hfMkVveF9TcTRDVVpWVDBxOVY4RW5sTWRGU3FZS0xrTkU4TnBkZ1NIM1gxRlpjX2NNOGdXLVdkaUJKZG1nbllsTVU4dGo1UXhlcjlfMFpBdXYxdlBHUWxFV2E5djlkS2dmcjI?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1wbEZpX0hfMkVveF9TcTRDVVpWVDBxOVY4RW5sTWRGU3FZS0xrTkU4TnBkZ1NIM1gxRlpjX2NNOGdXLVdkaUJKZG1nbllsTVU4dGo1UXhlcjlfMFpBdXYxdlBHUWxFV2E5djlkS2dmcjI?oc=5"
        }
      ],
      "crawled_at": "2026-10-15 20:03:43"
    },
    {
      "source": "Reuters",
      "title_ko": "TSMC's third",
      "title_en": "TSMC's third-quarter revenue surges to record, beating market forecast",
      "summary_ko": "TSMC's third 관련 핵심 동향이 발표되었습니다. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "Watch TSMC’s Third",
          "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNeFFOOG44QlVIa0ZKY1hEanJZcmZ3RER1Um9BQnlEMjNkWlRnRllOV0RvaHVBRzdkVHNYNVRrUkpTRnBraXY2VnRrWkpieVp4WGduZFlnTWpidmI4TXJkQXIwZHVJcTdUX2o2QkpGcl8zTEhydzlrblpWeS1PWGY3a0dvcTYzTjRCa1FpTGxzLTRGdU9HcEZDUzBVaUxCbFdKOFFr?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxNeFFOOG44QlVIa0ZKY1hEanJZcmZ3RER1Um9BQnlEMjNkWlRnRllOV0RvaHVBRzdkVHNYNVRrUkpTRnBraXY2VnRrWkpieVp4WGduZFlnTWpidmI4TXJkQXIwZHVJcTdUX2o2QkpGcl8zTEhydzlrblpWeS1PWGY3a0dvcTYzTjRCa1FpTGxzLTRGdU9HcEZDUzBVaUxCbFdKOFFr%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "LSEG taps Nvidia for faster historical market data processing",
          "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNYy1XWU5PM1RfaklzejU4RG1OOEV6YTkyTms1aGNfbTFiSXJmNkdTbkpSeWo2VElLV2ZCMVlta29aSWlGMHR5c3QyQV9hS0xSaDZCUjZxaU1QeGtaNHgwd0l2Nm9tR2ZaaFBRdFd4TF9Jb0lHdnR2eXI4ZzVjaGhDMDRUU0ZPcVdVb2Q1TlpqT2YxaDdoYjVScFZNVVg1YVdkWkE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNYy1XWU5PM1RfaklzejU4RG1OOEV6YTkyTms1aGNfbTFiSXJmNkdTbkpSeWo2VElLV2ZCMVlta29aSWlGMHR5c3QyQV9hS0xSaDZCUjZxaU1QeGtaNHgwd0l2Nm9tR2ZaaFBRdFd4TF9Jb0lHdnR2eXI4ZzVjaGhDMDRUU0ZPcVdVb2Q1TlpqT2YxaDdoYjVScFZNVVg1YVdkWkE%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia’s Huang Touts Cybersecurity as Next Big Market for AI",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "AI credit worries send default insurance to record high",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOa21Bbk9kN3JUMWZXLWNLVWFlRkQ1dDFSYnRQQzBRNDVudTYtaDhjcjcyenBQM0prdHlYY2ZxY25fZzdYQk9FYkh1N043NW83amxZbHVvZUxYUXk5YnVtR3NtaXdPMFFNa3Z4UUpYdWlXQzhmbjV2bF96TktQQ3VNOFFhLWMtcUE2NllOMzNsN3I?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxOa21Bbk9kN3JUMWZXLWNLVWFlRkQ1dDFSYnRQQzBRNDVudTYtaDhjcjcyenBQM0prdHlYY2ZxY25fZzdYQk9FYkh1N043NW83amxZbHVvZUxYUXk5YnVtR3NtaXdPMFFNa3Z4UUpYdWlXQzhmbjV2bF96TktQQ3VNOFFhLWMtcUE2NllOMzNsN3I%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:04:04"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Drops",
      "title_en": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Drops",
      "summary_ko": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Drops Bloomberg.com. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Yahoo Finance",
          "title_ko": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Falls",
          "original_url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPQVB0djBZRHItdW9ub3BCOEFrUGtQZlhfNmEwXzdhR1dVU3BuX0ZFRmNvOXcxMUlBMUtEb3dxWVd6cURqbkV3dXcxMWR3WUo2MTBkZDdETWJWWGNnWk0wNk9ZVGw5N2VRVTQ2ZWVtSUJBeWpGXzZsOUJSbzNsX1lJZ1g5dDRKS3JFb29UX0JwSWs4a3FxVlJmd21pSE9nRHB2?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMioAFBVV95cUxPQVB0djBZRHItdW9ub3BCOEFrUGtQZlhfNmEwXzdhR1dVU3BuX0ZFRmNvOXcxMUlBMUtEb3dxWVd6cURqbkV3dXcxMWR3WUo2MTBkZDdETWJWWGNnWk0wNk9ZVGw5N2VRVTQ2ZWVtSUJBeWpGXzZsOUJSbzNsX1lJZ1g5dDRKS3JFb29UX0JwSWs4a3FxVlJmd21pSE9nRHB2%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia's China AI",
          "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOZ2lCcTJZLWVsU3NJWjJRV2xZd0RXM1NtbWNnQUtfb1RsSjlNVmFEWnVxYVJ5Y0pXS0lWV284NlVCWkp2Qy1jbm5na2ZFeE5BYmNlWFVaVGttNElacjE1SGlaeVBOc1J5Z042bUlOS3JPbWpHcloxVDF5X3B2NG5hSEdCcHp0SGswU3d5VWNNWE02bE1KS0VyTVROTlJxUTRFUzNQM3hrbERWWWh5X21pSFg2ajBBOG02cXdzS1UyV09MY0k?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxOZ2lCcTJZLWVsU3NJWjJRV2xZd0RXM1NtbWNnQUtfb1RsSjlNVmFEWnVxYVJ5Y0pXS0lWV284NlVCWkp2Qy1jbm5na2ZFeE5BYmNlWFVaVGttNElacjE1SGlaeVBOc1J5Z042bUlOS3JPbWpHcloxVDF5X3B2NG5hSEdCcHp0SGswU3d5VWNNWE02bE1KS0VyTVROTlJxUTRFUzNQM3hrbERWWWh5X21pSFg2ajBBOG02cXdzS1UyV09MY0k%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia’s Huang Plans $2 Billion in Europe AI Deals in Next Week",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPQTUyMWwxLUpnYVFUYlNzVS1YS0d5UkpaWXhsbmZ6U08xMmNKUTFSU01rSTRjN0Z4UF9hTG0tajg4TFZqZExYVS1oZkxJWlNFM0hBc2ctbUZBU1htclhwWVB6ajludXpVT3NDZ21YaEk3UExON3ZpZVF3YU1ycDI2MS0tVU1jelR5N3F2emRKT2JDcUE4V3hiUzlxY21SNXBXdHl1YzJWREFfY2I3cWhEa2Z0VQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPQTUyMWwxLUpnYVFUYlNzVS1YS0d5UkpaWXhsbmZ6U08xMmNKUTFSU01rSTRjN0Z4UF9hTG0tajg4TFZqZExYVS1oZkxJWlNFM0hBc2ctbUZBU1htclhwWVB6ajludXpVT3NDZ21YaEk3UExON3ZpZVF3YU1ycDI2MS0tVU1jelR5N3F2emRKT2JDcUE4V3hiUzlxY21SNXBXdHl1YzJWREFfY2I3cWhEa2Z0VQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Watch Nvidia, Anthropic Weigh In On AI Safeguards",
          "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNRVNzd3hGeU1sekJPVTBNeEpCdm9HSzZjb015RU9Yd3BHU3dTcHRXdFY2dVN6bGlzYjdSaTd1SHhjR0xaQmJHMUpRSmsydE4xUHNORFVOUXprckp1dk95ME9tUmplWVR5MjdGeHliSlVSX0lUNTJsQlRGTHVzT1I5ZEJ6UzFZckw5ZkZ2cXZMVGY1ODJfb3lCck9HczVmZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxNRVNzd3hGeU1sekJPVTBNeEpCdm9HSzZjb015RU9Yd3BHU3dTcHRXdFY2dVN6bGlzYjdSaTd1SHhjR0xaQmJHMUpRSmsydE4xUHNORFVOUXprckp1dk95ME9tUmplWVR5MjdGeHliSlVSX0lUNTJsQlRGTHVzT1I5ZEJ6UzFZckw5ZkZ2cXZMVGY1ODJfb3lCck9HczVmZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:04:26"
    },
    {
      "source": "calcalistech.com",
      "title_ko": "DeepSeek’s funding round could approach $15 billion as investor demand surges",
      "title_en": "DeepSeek’s funding round could approach $15 billion as investor demand surges",
      "summary_ko": "DeepSeek’s funding round could approach $15 billion as investor demand surges calcalistech.com. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. calcalistech.com뿐만 아니라 Reuters, Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Wall Street Journal",
          "title_ko": "Exclusive | Positron Valued at $5 Billion in New Funding as Demand for AI Chips Surges",
          "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQZWpZd1RtLU1tcFpSOUoxYVYtd0gzeTZfanNNaVg1UWxoZ2lfSTFZV2MzdldoTDQyR0lCTGFUd1ZsTG8xcVRlZ1NZWHBPWWphNHdpTTVjSFAtREJnQzhZc0VaS3Vha3U0bVBPQXZqdmhRRlV0Rm9DWnE2MnFTTS1sTWlwajZ1VHFDanNianRkRnpkaG5WZ3ZfT01NdkkzaHlSbUw0?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxQZWpZd1RtLU1tcFpSOUoxYVYtd0gzeTZfanNNaVg1UWxoZ2lfSTFZV2MzdldoTDQyR0lCTGFUd1ZsTG8xcVRlZ1NZWHBPWWphNHdpTTVjSFAtREJnQzhZc0VaS3Vha3U0bVBPQXZqdmhRRlV0Rm9DWnE2MnFTTS1sTWlwajZ1VHFDanNianRkRnpkaG5WZ3ZfT01NdkkzaHlSbUw0%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:04:44"
    },
    {
      "source": "Bloomberg",
      "title_ko": "구리 Falls for Third Day as Strong US Inflation Spurs Selloff",
      "title_en": "Copper Falls for Third Day as Strong US Inflation Spurs Selloff",
      "summary_ko": "구리 Falls for Third Day as Strong US Inflation Spurs Selloff Bloomberg.com. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Wall Street Journal, Financial Times 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOQ0psUFhiRzE0dTRhNF9VT09tUG9BWmw2QUxYOWE1Qy1aUURTTVBrRHpHVFAzRDNyLVdqV0ZfaUEzdXRYMDBGWnNHTzlkVzhJYUw3NWJTcHY3dUl5MDRlcGNNSVRDQnZFZ1N3QUJnRFhqUTAyei1aRzBxU3dIZm1QbFRWVjFoMDFsSVBQa01DR1JadUxXUk9XZzFqbTNwSXRIRExpeTk0R0hVUzVCckF3U1UzcWQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxOQ0psUFhiRzE0dTRhNF9VT09tUG9BWmw2QUxYOWE1Qy1aUURTTVBrRHpHVFAzRDNyLVdqV0ZfaUEzdXRYMDBGWnNHTzlkVzhJYUw3NWJTcHY3dUl5MDRlcGNNSVRDQnZFZ1N3QUJnRFhqUTAyei1aRzBxU3dIZm1QbFRWVjFoMDFsSVBQa01DR1JadUxXUk9XZzFqbTNwSXRIRExpeTk0R0hVUzVCckF3U1UzcWQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 15 Oct 2026 11:09:54 GMT",
      "related_articles": [
        {
          "source": "Wall Street Journal",
          "title_ko": "Cerebras Files for IPO as Demand Surges for More Efficient AI Chips",
          "original_url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQN1o1WkloLUZqUTFnYTVVVU1wc2o0cDllQldqOGV3R2lsNlJKNDQzejZOa2lMWUk5ZkhCVDZ3ZmRSZUc2cTFIb1BMcU1RVkZzbFV0WXR2U216bTdiUlZCZzEzREZTRXpKVHlfSHBCUHFFRnhQNXd0dGVMSjZvSkRFMlY2MXItUTVLeTNSRzhRR1RWN2M?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikwFBVV95cUxQN1o1WkloLUZqUTFnYTVVVU1wc2o0cDllQldqOGV3R2lsNlJKNDQzejZOa2lMWUk5ZkhCVDZ3ZmRSZUc2cTFIb1BMcU1RVkZzbFV0WXR2U216bTdiUlZCZzEzREZTRXpKVHlfSHBCUHFFRnhQNXd0dGVMSjZvSkRFMlY2MXItUTVLeTNSRzhRR1RWN2M%3Foc%3D5"
        },
        {
          "source": "Financial Times",
          "title_ko": "US chip stocks slide as inflation and AI debt fears unsettle investors",
          "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNV010dndEUEEtbWpidDZDc3dSbk1wMnNqdmV6V1QxN3VqektkZ2dlY010cVhrOXgzQkJrRWhxdXk1WVg4VlBId2lTNVFMRXowVTlBZGJKeHhpWDhjOER6NlZmdGZFWnc1SmhVSTRvTzJpbmdfTmk1d2xYWHg1N0VFUXFTaUY?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihAFBVV95cUxNV010dndEUEEtbWpidDZDc3dSbk1wMnNqdmV6V1QxN3VqektkZ2dlY010cVhrOXgzQkJrRWhxdXk1WVg4VlBId2lTNVFMRXowVTlBZGJKeHhpWDhjOER6NlZmdGZFWnc1SmhVSTRvTzJpbmdfTmk1d2xYWHg1N0VFUXFTaUY%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:04:58"
    },
    {
      "source": "Reuters",
      "title_ko": "PODCAST: Ukraine oil strike, Fort Hood execution, AI stock slide (Updated)",
      "title_en": "PODCAST: Ukraine oil strike, Fort Hood execution, AI stock slide (Updated)",
      "summary_ko": "PODCAST: Ukraine oil strike, Fort Hood execution, AI stock slide (Updated) Reuters. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Reuters뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPQkMwTlMzX1N4X3pDdDhqVGJIZUFDaURGLUVvUlc3eWZSVHlaS2laNjlCQTltU0lqYnVPQTFRN1BiVXFmYU42eXZkcW84YkpsV1VEdjg0RXZrRVI2X1VmQkRjYU4zcFFsR29yLVcwVlRTeXJtSHFzdVVzTzg4TENiSlZoMUppZ2x1c1Z1WmJSV3JIQUN2RjRQVDBJWQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimwFBVV95cUxPQkMwTlMzX1N4X3pDdDhqVGJIZUFDaURGLUVvUlc3eWZSVHlaS2laNjlCQTltU0lqYnVPQTFRN1BiVXFmYU42eXZkcW84YkpsV1VEdjg0RXZrRVI2X1VmQkRjYU4zcFFsR29yLVcwVlRTeXJtSHFzdVVzTzg4TENiSlZoMUppZ2x1c1Z1WmJSV3JIQUN2RjRQVDBJWQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 15 Oct 2026 18:30:38 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Britain needs to keep deficit reduction on track, IMF says",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPUTJyMHNnWkhKZFRYM0ZuTkVjem1qaGRJRGwyaW1zQWVJUXhYOXVTbURmVFI2c2tfRVFlSEMyUnh0SEVuYXpzRzFtTmVBQTlQY2xkLWF2LU9veG1IYU5qeFo5Q2ZhS1VGSHAzQWVObEM2cnJYS2lkVHVlXzJTbjBHZXpmTGVORnFPd3dBX1VHS0pxV2lTTUw4MGZWQ0lJSlVhNzlzcXp5clNudU0?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxPUTJyMHNnWkhKZFRYM0ZuTkVjem1qaGRJRGwyaW1zQWVJUXhYOXVTbURmVFI2c2tfRVFlSEMyUnh0SEVuYXpzRzFtTmVBQTlQY2xkLWF2LU9veG1IYU5qeFo5Q2ZhS1VGSHAzQWVObEM2cnJYS2lkVHVlXzJTbjBHZXpmTGVORnFPd3dBX1VHS0pxV2lTTUw4MGZWQ0lJSlVhNzlzcXp5clNudU0%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-15 20:05:09"
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
