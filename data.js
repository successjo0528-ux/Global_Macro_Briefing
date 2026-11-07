window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-11-08 05:01:18",
    "date_str": "2026년 11월 08일 (일)",
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
      "price": 4.0,
      "previous_close": 3.998,
      "change": 0.002,
      "change_percent": 0.05,
      "display_price": "4.000%",
      "status": "up",
      "history": [
        3.998,
        3.973,
        3.982,
        4.025,
        4.025,
        3.987,
        4.0
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-11-07 20:00:40"
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
      "price": 4.859,
      "previous_close": 4.989,
      "change": -0.13,
      "change_percent": -2.61,
      "display_price": "4.859%",
      "status": "down",
      "history": [
        4.989,
        4.929,
        4.894,
        4.952,
        4.894,
        4.837,
        4.859
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-11-07 20:00:40",
      "yield_signal": {
        "level": "warn",
        "tag": "🟠 주의 구간 (4.50~5.00%)",
        "desc": "주식 밸류에이션 부담 & 환율 상승 압력"
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
      "price": 5.26,
      "previous_close": 5.329,
      "change": -0.069,
      "change_percent": -1.29,
      "display_price": "5.260%",
      "status": "down",
      "history": [
        5.329,
        5.309,
        5.269,
        5.324,
        5.282,
        5.251,
        5.26
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-11-07 20:00:40"
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
      "price": 102.279,
      "previous_close": 101.88,
      "change": 0.399,
      "change_percent": 0.39,
      "display_price": "102.28 pt",
      "status": "up",
      "history": [
        101.88,
        101.75,
        101.87,
        101.51,
        101.55,
        102.3
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-11-07 20:00:40"
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
      "price": 158.425,
      "previous_close": 157.833,
      "change": 0.592,
      "change_percent": 0.38,
      "display_price": "158.43엔",
      "status": "up",
      "history": [
        157.804,
        157.677,
        157.915,
        158.469,
        158.357,
        157.498,
        158.425
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-11-07 20:00:41"
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
      "price": 4074.9,
      "previous_close": 3898.9,
      "change": 176.0,
      "change_percent": 4.51,
      "display_price": "$4,074.90",
      "status": "up",
      "history": [
        3898.9,
        3969.6,
        3940.4,
        4073.0,
        4113.5,
        4074.9
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-11-07 20:00:41"
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
      "price": 90.83,
      "previous_close": 104.12,
      "change": -13.29,
      "change_percent": -12.76,
      "display_price": "$90.83",
      "status": "down",
      "history": [
        104.12,
        96.46,
        96.09,
        88.12,
        90.52,
        90.83
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-11-07 20:00:41"
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
      "price": 75690.65,
      "previous_close": 78248.45,
      "change": -2557.8,
      "change_percent": -3.27,
      "display_price": "$75,691",
      "status": "down",
      "history": [
        78248.453,
        76677.297,
        77345.047,
        80405.289,
        75942.125,
        75746.93,
        75690.648
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-11-07 20:00:41"
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
      "price": 936.2,
      "previous_close": 300.9,
      "change": 635.3,
      "change_percent": 211.13,
      "display_price": "$936.2B (약 9,362억$)",
      "status": "up",
      "history": [
        22.2,
        20.3,
        938.2,
        922.8,
        314.4,
        300.9,
        936.2
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-11-07 20:00:42"
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
      "price": 7376.86,
      "previous_close": 7743.98,
      "change": -367.12,
      "change_percent": -4.74,
      "display_price": "7,376.86",
      "status": "down",
      "history": [
        7720.39,
        7580.07,
        7541.4,
        7568.92,
        7688.62,
        7353.73,
        7376.86
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-11-07 20:00:42"
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
      "price": 26989.992,
      "previous_close": 29813.16,
      "change": -2823.168,
      "change_percent": -9.47,
      "display_price": "26,989.99",
      "status": "down",
      "history": [
        29402.51,
        28384.85,
        27989.82,
        28180.26,
        28437.17,
        26629.811,
        26989.99
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-11-07 20:00:42"
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
      "price": 9390.25,
      "previous_close": 11684.0,
      "change": -2293.75,
      "change_percent": -19.63,
      "display_price": "9,390.25",
      "status": "down",
      "history": [
        11518.2,
        10688.8,
        10328.33,
        10600.4,
        10268.65,
        9011.14,
        9390.25
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-11-07 20:00:43"
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
      "price": 25.64,
      "previous_close": 17.2,
      "change": 8.44,
      "change_percent": 49.07,
      "display_price": "25.64",
      "status": "up",
      "history": [
        17.2,
        19.42,
        21.15,
        20.83,
        16.61,
        28.18,
        25.64
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-11-07 20:00:43"
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
      "price": 1363.65,
      "previous_close": 1340.34,
      "change": 23.31,
      "change_percent": 1.74,
      "display_price": "1,363.65원",
      "status": "up",
      "history": [
        1340.34,
        1337.98,
        1325.52,
        1344.81,
        1342.9,
        1340.07,
        1356.34
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-11-07 20:00:43",
      "fx_averages": {
        "avg_1y": 1445.3,
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
      "price": 5059.69,
      "previous_close": 6012.44,
      "change": -952.75,
      "change_percent": -15.85,
      "display_price": "5,059.69",
      "status": "down",
      "history": [
        5937.66,
        5730.74,
        5859.08,
        5648.79,
        5683.8,
        5383.8,
        5059.69
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-11-07 20:00:44"
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
      "price": 644.27,
      "previous_close": 771.28,
      "change": -127.01,
      "change_percent": -16.47,
      "display_price": "644.27",
      "status": "down",
      "history": [
        753.23,
        724.38,
        734.36,
        704.39,
        714.95,
        678.41,
        644.27
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-11-07 20:00:44"
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
      "updated_at": "2026-11-07 20:00:44"
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
      "updated_at": "2026-11-07 20:00:45"
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
      "price": 137.01,
      "previous_close": 165.91,
      "change": -28.9,
      "change_percent": -17.42,
      "display_price": "$137.01",
      "status": "down",
      "history": [
        161.83,
        152.89,
        151.62,
        155.06,
        152.12,
        131.65,
        137.01
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-11-07 20:00:45"
    }
  ],
  "news": [
    {
      "source": "연합인포맥스",
      "title_ko": "\"美민주당 의회 장악 시 이란전쟁 종식 압박…파월 자진 퇴임\"",
      "title_en": "",
      "summary_ko": "\"美민주당 의회 장악 시 이란전쟁 종식 압박…파월 자진 퇴임\" 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBIT1drNEtqLXBHMjlXdlQwbVA2ZFdEcTlrSFpBZllzeS1PMHhaMVdGY2oycm9EWGhHOC12ak1MYmxoVDVJZ1NkbVloWkVxaDM1NGxKQ0VoN19SamFCMnUtNmZyc1BxTUVVYXR0QTRlWjY?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBIT1drNEtqLXBHMjlXdlQwbVA2ZFdEcTlrSFpBZllzeS1PMHhaMVdGY2oycm9EWGhHOC12ak1MYmxoVDVJZ1NkbVloWkVxaDM1NGxKQ0VoN19SamFCMnUtNmZyc1BxTUVVYXR0QTRlWjY?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Tue, 03 Nov 2026 05:50:00 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "티미라오스 \"민주당의 상원 장악, 트럼프 연준 개편에 강력한 제동\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE81VTJrOGFYNDlFZjhjdGFEb2l2RnZEOG9qakFuc05EUGdHUFBhbTN6eVozcmVSd2M1eHhBNjN6ZU1qd3V3ODViTVVPOWY0bVBXZnN3VGR2LWlJZi1ST2w4eERIVGg1cTJKZ1lHSFBKWmXSAXRBVV95cUxNdWttb1lVNVNXZmVqak1FRDRMR0J0cU14Uk1lamd2cWNKSkN5Z1ZCa2dudFdva3BVY0lyS0Fvc0pHeDZPa1N5UzFCbEg3czBwanB4Z1B0ejhHR1diYkFrc1FxWWZVTlVSZFdObnVLcERNZjBGWQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE81VTJrOGFYNDlFZjhjdGFEb2l2RnZEOG9qakFuc05EUGdHUFBhbTN6eVozcmVSd2M1eHhBNjN6ZU1qd3V3ODViTVVPOWY0bVBXZnN3VGR2LWlJZi1ST2w4eERIVGg1cTJKZ1lHSFBKWmXSAXRBVV95cUxNdWttb1lVNVNXZmVqak1FRDRMR0J0cU14Uk1lamd2cWNKSkN5Z1ZCa2dudFdva3BVY0lyS0Fvc0pHeDZPa1N5UzFCbEg3czBwanB4Z1B0ejhHR1diYkFrc1FxWWZVTlVSZFdObnVLcERNZjBGWQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:00:54"
    },
    {
      "source": "Bloomberg",
      "title_ko": "베센트, 연준 총재처럼 모순된 모기지 약속",
      "title_en": "Bessent, Like Fed Governor, Made Contradictory Mortgage Pledges",
      "summary_ko": "베센트, 연준 총재처럼 모순된 모기지 약속 Bloomberg.com. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPd0NCdkttc2ZoRjdyLUJmU1l1al9LcVMyLUZNV3V5MUZCT0xyVHhzTlJ6LUFwZkVzWWFtQVl1ZXFjMnFnN0FzcTQybnhQT3V4QXBOT29mRzM3UkhDd256VWRDR2VwTUVLS0Y0V1RlbXlWLW5FMjNic0lCNlNSa2F2YjJIdUJvNVJ3WXp5NktmTS1xb3Q4QnpWNEJmcmtLNTRzRnd2LWt6d0VnblR6ZHhpQ3lR?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxPd0NCdkttc2ZoRjdyLUJmU1l1al9LcVMyLUZNV3V5MUZCT0xyVHhzTlJ6LUFwZkVzWWFtQVl1ZXFjMnFnN0FzcTQybnhQT3V4QXBOT29mRzM3UkhDd256VWRDR2VwTUVLS0Y0V1RlbXlWLW5FMjNic0lCNlNSa2F2YjJIdUJvNVJ3WXp5NktmTS1xb3Q4QnpWNEJmcmtLNTRzRnd2LWt6d0VnblR6ZHhpQ3lR%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 17 Sep 2025 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "베센트(Bessent), 파월 식사가 은행 CEO들에게 인류 모델 위험에 대해 경고했다고 소식통은 전했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOQ05ad1ZkdnNrcEhEMklEalc0TVBmWlppMzkxQlZxQVBpbUp1Nlk1STVqUm51WDI5QnYxS1BleDFONDZwTmR2Tlc4OGl3WGU2US0zVUhhVUQ0Zk5yYlFEV1g2M1ByNy1jUTVSTTRSYjhwUU9XU0lsRHY0V2tjbXNGX1dwUlFJZUV6UkRoang1TW5IbllaTTcycmRDV0ZNYnNQRnRFUWhybVNuVHMtdFdyX0tTLUN4Q1cwYTFPU3BPRG5UeGI4UTJZMXpBc25uZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizgFBVV95cUxOQ05ad1ZkdnNrcEhEMklEalc0TVBmWlppMzkxQlZxQVBpbUp1Nlk1STVqUm51WDI5QnYxS1BleDFONDZwTmR2Tlc4OGl3WGU2US0zVUhhVUQ0Zk5yYlFEV1g2M1ByNy1jUTVSTTRSYjhwUU9XU0lsRHY0V2tjbXNGX1dwUlFJZUV6UkRoang1TW5IbllaTTcycmRDV0ZNYnNQRnRFUWhybVNuVHMtdFdyX0tTLUN4Q1cwYTFPU3BPRG5UeGI4UTJZMXpBc25uZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:00:56"
    },
    {
      "source": "Reuters",
      "title_ko": "연준(Fed) 정책입안자들은 강력한 일자리 보고서 이후에 등장하는 것을 고려합니다.",
      "title_en": "Fed policymakers consider rate hike after strong jobs report",
      "summary_ko": "연준(Fed) 정책입안자들은 일자리 호조 보고서 이후 등장하는 것을 고려한다 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQMF93ekZ4N2wtdW4zX1llS2FoZWpNVlhMLTRNOGVJTUktZmpLQUNBSzY2bW16Mm9mb3lrZERqNFZ6WkRmYkhBTG00Z2k2NFYyNTVLcmVBSkV5eVJRU1RwZFc5blM4MkRmcUxYU2hadXRWbVh0VXpjektqM1BGS3ZlZlNMeW43VWxmeE5TQm13d0E3bTVwUnp5dzFFNA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimwFBVV95cUxQMF93ekZ4N2wtdW4zX1llS2FoZWpNVlhMLTRNOGVJTUktZmpLQUNBSzY2bW16Mm9mb3lrZERqNFZ6WkRmYkhBTG00Z2k2NFYyNTVLcmVBSkV5eVJRU1RwZFc5blM4MkRmcUxYU2hadXRWbVh0VXpjektqM1BGS3ZlZlNMeW43VWxmeE5TQm13d0E3bTVwUnp5dzFFNA%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 06 Nov 2026 20:58:34 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "스웨덴의 인플레이션 둔화로 인해 Riksbank가 소개된 사례",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNNmZtcDBIVk9ycEgyUTViYWVpYzExcmdnbFBNUENtYTNveDdBVHQ0bm92R0REUWtqSHo3VVBoejJ1NVV6N1ljQ0VTczNYVUx6ckV5WW9wb0x1SUNGN0NxdUNqWFJfbDZWek5nTmNHV1hLUVJWQkZidGdhaDBFWnVRZnFqdV96alRZUVFjOUNpei1TV1hrMzJWTTlPS0JyOGlyRWtZaVBNdFhvYzQ5Snc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNNmZtcDBIVk9ycEgyUTViYWVpYzExcmdnbFBNUENtYTNveDdBVHQ0bm92R0REUWtqSHo3VVBoejJ1NVV6N1ljQ0VTczNYVUx6ckV5WW9wb0x1SUNGN0NxdUNqWFJfbDZWek5nTmNHV1hLUVJWQkZidGdhaDBFWnVRZnFqdV96alRZUVFjOUNpei1TV1hrMzJWTTlPS0JyOGlyRWtZaVBNdFhvYzQ5Snc%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "BoE, 호주에 가입 삽입 클럽 가입 이미 완료됐을 수도",
          "original_url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPZXFXYWhzdHpRY3JzRGtmbUUzUjJreHZPWEpia1B2aDc0ZVo5cUVUcUFQMXNMdWlETWpGNHo0ZE00UzhBN1Q5YWxaeUVMLTdnOU9JQjlCSGdMUVJQcnJkUkxuVEpibVA3emtVTlNGclBWbERaR1ZTRzBDOWJISU9hQlhtSGVHRldjRV90eTVFMUNFYWdNUnc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilgFBVV95cUxPZXFXYWhzdHpRY3JzRGtmbUUzUjJreHZPWEpia1B2aDc0ZVo5cUVUcUFQMXNMdWlETWpGNHo0ZE00UzhBN1Q5YWxaeUVMLTdnOU9JQjlCSGdMUVJQcnJkUkxuVEpibVA3emtVTlNGclBWbERaR1ZTRzBDOWJISU9hQlhtSGVHRldjRV90eTVFMUNFYWdNUnc%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed), 금리인상 일시중단, 그러나 오래 가지 않을 수도",
          "original_url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQMFBxcEVKT0RxYVJKYWZGOUlGd0VJTE5vN2lNTnozcm92NTV5Vzg3aVdhT2p3eGpoVlZlZ19aaGtPa0s2VzBsS2xuamdkTnU4X2dhNGRzYjlaVTFpVzdLSkg4TDRlQThPdnZOandxOE1wV0o0WDFCcDgtbEZIQmR0a3BFOWdIM1dPZGdmQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijAFBVV95cUxQMFBxcEVKT0RxYVJKYWZGOUlGd0VJTE5vN2lNTnozcm92NTV5Vzg3aVdhT2p3eGpoVlZlZ19aaGtPa0s2VzBsS2xuamdkTnU4X2dhNGRzYjlaVTFpVzdLSkg4TDRlQThPdnZOandxOE1wV0o0WDFCcDgtbEZIQmR0a3BFOWdIM1dPZGdmQQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 인플레이션 상승으로 인해 타이트한 도입 콜",
          "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:01"
    },
    {
      "source": "Bloomberg",
      "title_ko": "BOE United, 3년 만에 처음으로 공개",
      "title_en": "BOE United in Delivering First Rate Hike in Three Years",
      "summary_ko": "BOE United, 3년 만에 처음으로 소개 Bloomberg.com 제공. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNWjRuVXJNYjZoYW83R0pqNWxsRFhDMW4xa2c1MGZwT1RSS0N5WFFrODZxdnZld2lLekhlR0ZoWkd3NGduUHdqY0ZyS043WWVHa0drSUgyTDNpcTdSSFBSUmE2SUdfRS03TTZFVUhPV2MxWnNKMjdWZFp3MENIb2tBeElnb0JHM19Xa2tlV1lfSXlXdWRIWlh1RjF6OWR5cENZYkdrVHZ6VWJkUQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxNWjRuVXJNYjZoYW83R0pqNWxsRFhDMW4xa2c1MGZwT1RSS0N5WFFrODZxdnZld2lLekhlR0ZoWkd3NGduUHdqY0ZyS043WWVHa0drSUgyTDNpcTdSSFBSUmE2SUdfRS03TTZFVUhPV2MxWnNKMjdWZFp3MENIb2tBeElnb0JHM19Xa2tlV1lfSXlXdWRIWlh1RjF6OWR5cENZYkdrVHZ6VWJkUQ%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 05 Nov 2026 12:16:36 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "올해 가격 리스크가 지속되면서 체코의 두 번째 피규어 소개 시작",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNdnJ0bEdVYUVTTnBiQjNib2ZNa3I3S0h3Sk90a3BQMkF4ZUNsem81TkhOZUI1N2p4NVcwTUdUcEgwcEZ6WklWUTIzNFAxN3M0aVlJSWk1RXBFV2NfR2FYR1luRjVHaktFWTJyVW1vdUlvSE5HMG5CSmt1a201X0RvRlc0WDhRaHB3S2ltb0VIdVpQZkJSNlhYaFhqcDJ0cEJpYm4ycVYzQnVaQ040TVZFNUlXdUo0UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNdnJ0bEdVYUVTTnBiQjNib2ZNa3I3S0h3Sk90a3BQMkF4ZUNsem81TkhOZUI1N2p4NVcwTUdUcEgwcEZ6WklWUTIzNFAxN3M0aVlJSWk1RXBFV2NfR2FYR1luRjVHaktFWTJyVW1vdUlvSE5HMG5CSmt1a201X0RvRlc0WDhRaHB3S2ltb0VIdVpQZkJSNlhYaFhqcDJ0cEJpYm4ycVYzQnVaQ040TVZFNUlXdUo0UQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "BOE, 3년 만에 첫 공개 개시: 결정 가이드",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOdG95UDllS293LVdSRTZNbXFXSFlMZ002UDJ1bTdMeXpkOVIwcWhCUVBMZU5QMnN6cEdaSkFrV2NUUU1SZkZnTk1sdXRKZUxYYnRtRkM3dFE4dzdBUjB0YkV2MDRRZVp6ZlhwOVlER2RCY25UOFBTYmxGS0ktM25LMFJVakk3enlGa25YNVljR3ZfOWg1NUJBNDlhNkRnX2loTTlvd0V5SUpVYVBhSjBWVA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOdG95UDllS293LVdSRTZNbXFXSFlMZ002UDJ1bTdMeXpkOVIwcWhCUVBMZU5QMnN6cEdaSkFrV2NUUU1SZkZnTk1sdXRKZUxYYnRtRkM3dFE4dzdBUjB0YkV2MDRRZVp6ZlhwOVlER2RCY25UOFBTYmxGS0ktM25LMFJVakk3enlGa25YNVljR3ZfOWg1NUJBNDlhNkRnX2loTTlvd0V5SUpVYVBhSjBWVA%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)의 Daly는 가격을 길들이기 위해 더 많은 금리 인상이 필요할 것이라고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNNlV4UkhGUmxWX1RyQXZqMnlGbnJIMFRXMm1VWGJ6dWVDNERJMjB4eTVva3FxNmFmMzZBU3Jmc1hTc09BWG5OcC1SMVA3MmhhMTV3bFk0NE56N0t0NkFPcXFGeTV4dFZvcGlqS2hzRTUtSkRxNzNoWnFJUjFhWkFlZFBzZHNYeGl1enUxOXlna2NPdkNEMGU3OTVWYkJmYXR1ZnRUaFR1ekI3QXBQeWoySDBrMHNnUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNNlV4UkhGUmxWX1RyQXZqMnlGbnJIMFRXMm1VWGJ6dWVDNERJMjB4eTVva3FxNmFmMzZBU3Jmc1hTc09BWG5OcC1SMVA3MmhhMTV3bFk0NE56N0t0NkFPcXFGeTV4dFZvcGlqS2hzRTUtSkRxNzNoWnFJUjFhWkFlZFBzZHNYeGl1enUxOXlna2NPdkNEMGU3OTVWYkJmYXR1ZnRUaFR1ekI3QXBQeWoySDBrMHNnUQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "즉시 보기: Bank of England, 3년 만에 처음으로 소개 도입, 금빛 수익률( 금리) 상승",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNX1NmeDl4ZndpQkllbEZoTmVYQzFUSXpCeFNTRnByV05HcVlaYXl0RkY4b0htT1dYTkhQZG9DNldqcmtna1gyNVhkdTZwWmR3NTBZb0gtUm9kWnlfQzVhMWJCTzVYSGhpLXkxS085ZGpwVUVEbWlTWmItbElUTzFqTEwydEJTSUVheFJsTGNjdnlfRW1RaURzWm5KOGs5Rmx1bUV4SUxpTWNaMlNhWGxPU2lnNkt0cXc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxNX1NmeDl4ZndpQkllbEZoTmVYQzFUSXpCeFNTRnByV05HcVlaYXl0RkY4b0htT1dYTkhQZG9DNldqcmtna1gyNVhkdTZwWmR3NTBZb0gtUm9kWnlfQzVhMWJCTzVYSGhpLXkxS085ZGpwVUVEbWlTWmItbElUTzFqTEwydEJTSUVheFJsTGNjdnlfRW1RaURzWm5KOGs5Rmx1bUV4SUxpTWNaMlNhWGxPU2lnNkt0cXc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:05"
    },
    {
      "source": "Reuters",
      "title_ko": "브라질 중앙은행, 룰라 선거 승리 후 금리 인하 중단",
      "title_en": "Brazil's central bank ends run of rate cuts after Lula election win",
      "summary_ko": "브라질 중앙은행, 룰라 선거 승리 후 금리 인하 종료. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQZEFUME9sYnFseThMNGczNTU1OGwtT1ZzWk5yNXpVWGpfZWpFbjVYcHJ0NS1iRjNVNGcyQnZ4cXp3WkRuVTJ3UF8takxXTnV6ZjZ5RXFsVkVGazQwbkdkZ3czRTZ1QXp6RVo4eVZxRGpJSkN0dXhzSWZ6V0N4RGwzdTVsTF9vYlFHdUlrakdlZGF4bnFPYzlNZ1dUT2FHTnlJZTlYSWlYZ1psV2NQSHB2RExDZUg?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxQZEFUME9sYnFseThMNGczNTU1OGwtT1ZzWk5yNXpVWGpfZWpFbjVYcHJ0NS1iRjNVNGcyQnZ4cXp3WkRuVTJ3UF8takxXTnV6ZjZ5RXFsVkVGazQwbkdkZ3czRTZ1QXp6RVo4eVZxRGpJSkN0dXhzSWZ6V0N4RGwzdTVsTF9vYlFHdUlrakdlZGF4bnFPYzlNZ1dUT2FHTnlJZTlYSWlYZ1psV2NQSHB2RExDZUg%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 04 Nov 2026 23:38:07 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "미국 분리준비 제도(연준)가 어떻게 미국 선거에서 승리하게 되었는가",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOZEloOTdwdE5iVEI5RXl3LXNHRmlteHJzaUF1cjJOMGhwOVpUMU1Ua1pqTF9kaFdFUW00UlhKS2pud3NWdHRNdzBxbjdLTG9IUG5STV9Od3p1RDZna1locmNyQ0VtNlBTTmYtd0NyaFl0U3k5RG9temUtdzhIUVdzUTZ1SmhpdkJadFA3QW9jNVA4OWVyUGdzMmRTRVVjcTVDWktBeTNMTm9TblkxckRDZkdLUlFjYmFkd1E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxOZEloOTdwdE5iVEI5RXl3LXNHRmlteHJzaUF1cjJOMGhwOVpUMU1Ua1pqTF9kaFdFUW00UlhKS2pud3NWdHRNdzBxbjdLTG9IUG5STV9Od3p1RDZna1locmNyQ0VtNlBTTmYtd0NyaFl0U3k5RG9temUtdzhIUVdzUTZ1SmhpdkJadFA3QW9jNVA4OWVyUGdzMmRTRVVjcTVDWktBeTNMTm9TblkxckRDZkdLUlFjYmFkd1E%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:08"
    },
    {
      "source": "Reuters",
      "title_ko": "중동 위험, 기술 대패로 인해 아시아 주식에서 해외 자금 유출 급증",
      "title_en": "Foreign outflows from Asian equities surge on Middle East risks, tech rout",
      "summary_ko": "중동 위험으로 인해 아시아 주식에서 해외 자금 유출 급증 Reuters. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 Reuters, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "CNBC",
          "title_ko": "미국채/재무부수익(금리)이 다년간 최고치로의 급등이 식으면서 하락했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5JN3hlTGd4VlZhb0g2Y1AzdHJ3ZVZYOHJ3UDI3X1NpekdCemxHTlpsbVl2NUxLTmdUU2dmTFB2QlFWQmJXN2syaVh3OHdMR294SzRUMUhzRktsbk50UG9JMks1dWZqQldIYmllQUpyWjhHRFZERVVhVtIBfkFVX3lxTFBiS2VYTXRVaXVCQXUzd0VTNXZSYXQxRWl5V18xSXVlZVBXeEdjMkIwWGloZlVKalh5SjU2RmF3dGxfNEpzd05SMjczOXNmQTFZTGloaUdOdzAxMVRuWXc1ME9mb0RCYThITTZrQnNKM3NuQ1NKUDBsY1lEVU1PUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMieEFVX3lxTE5JN3hlTGd4VlZhb0g2Y1AzdHJ3ZVZYOHJ3UDI3X1NpekdCemxHTlpsbVl2NUxLTmdUU2dmTFB2QlFWQmJXN2syaVh3OHdMR294SzRUMUhzRktsbk50UG9JMks1dWZqQldIYmllQUpyWjhHRFZERVVhVtIBfkFVX3lxTFBiS2VYTXRVaXVCQXUzd0VTNXZSYXQxRWl5V18xSXVlZVBXeEdjMkIwWGloZlVKalh5SjU2RmF3dGxfNEpzd05SMjczOXNmQTFZTGloaUdOdzAxMVRuWXc1ME9mb0RCYThITTZrQnNKM3NuQ1NKUDBsY1lEVU1PUQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "아시아 주식에 대한 외국인 매도는 채권수익률(금리) 상승으로 상승",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNamNqM2EwN3NZZHktOS1DLWZMZ1hUbV9ma05QYzdVem5uQ2tSY0I1VUljV2M1eVpjdWdZT2xCOEJNVzFNZ1dQZFVpLUgzRGI0ZjliUDRDdXhfMVBlTTl3bnRSa2szT1JhWG56LUk5LThTamt6d0hIeF9XTFFCNk0zdFNTSVdJLXVmamIzb0txYm5hbHpweHp5TkFrX0tXUlZkbm4xUFF0LUs?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxNamNqM2EwN3NZZHktOS1DLWZMZ1hUbV9ma05QYzdVem5uQ2tSY0I1VUljV2M1eVpjdWdZT2xCOEJNVzFNZ1dQZFVpLUgzRGI0ZjliUDRDdXhfMVBlTTl3bnRSa2szT1JhWG56LUk5LThTamt6d0hIeF9XTFFCNk0zdFNTSVdJLXVmamIzb0txYm5hbHpweHp5TkFrX0tXUlZkbm4xUFF0LUs%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:08"
    },
    {
      "source": "MarketWatch",
      "title_ko": "이란 전쟁이 곧 끝나더라도 유가가 계속 오르면 기준 금리가 '상당히 높아질' 수 있다",
      "title_en": "Interest rates could go ‘significantly higher’ if oil prices keep climbing — even if the Iran war ends soon",
      "summary_ko": "이란 전쟁이 곧 끝나더라도 유가가 계속 오르면 기준 금리가 '상당히 높아질' 수 있음 MarketWatch. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. MarketWatch에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxNaUxDMm5kSHl6UGRsanIwSTVsOTRSRDJUMi1VUXE3eWdhVVZtc1JzNGlkSkpPTDdhLWJRN3MwTlVKTEVRRTZvOWpKdl95MVVac1lkY2kzYy1jMnpmQ0RJZXctTEtNM19HTG9wLWZGMmx0cVl3R1JIbVJSci1RYVI4QW10RjhvNlhkTmFMNnBZb0JNejJTaVhpc2ZPUTRocm56d3dydGNDMTJ2VE1Ybk83QWJkR1FoalA2LUpFbkNFZFl3YjUtV3hHV0hHQ0J5YXQ2ZkVmUjJiYkNncDFLdTY0?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMi3wFBVV95cUxNaUxDMm5kSHl6UGRsanIwSTVsOTRSRDJUMi1VUXE3eWdhVVZtc1JzNGlkSkpPTDdhLWJRN3MwTlVKTEVRRTZvOWpKdl95MVVac1lkY2kzYy1jMnpmQ0RJZXctTEtNM19HTG9wLWZGMmx0cVl3R1JIbVJSci1RYVI4QW10RjhvNlhkTmFMNnBZb0JNejJTaVhpc2ZPUTRocm56d3dydGNDMTJ2VE1Ybk83QWJkR1FoalA2LUpFbkNFZFl3YjUtV3hHV0hHQ0J5YXQ2ZkVmUjJiYkNncDFLdTY0%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 05 Nov 2026 12:33:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-07 20:01:08"
    },
    {
      "source": "Reuters",
      "title_ko": "논평: 아시아는 민주당이 트럼프의 이란 전쟁과 관세로부터 구제책을 제공할 수 있기를 희망합니다.",
      "title_en": "COMMENTARY: Asia hopes Democrats can provide relief from Trump's Iran war, tariffs",
      "summary_ko": "논평: 아시아는 민주당이 트럼프의 이란 전쟁에서 구제책을 제공할 수 있기를 바라며 관세를 부과했습니다. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 Reuters, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOUk1naVB2YlNzNHNsUVA1ZVp4ZU5QaUNocUZjdkt0VVdHZVVmZXdRZzhSdUt5RFROWXlBclNEM0p0NnJTc3dqaWlBWVhoUWRVczliT2JGR3l3RXU0R1N0aGZicXFZSkdiNjd6dmZJWVVoRWp4X21wNUJNd2EzOG5CMnJoR1ExaW1lX1Q4R0o0cHhBM1lZX0lnd0NLMkFVaTJZZ0FvUVNfejFaaFViQU9tX3REV2ZBNjdCOHU3ak1EcUdJX2xsbFdCWE9pVzk?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizAFBVV95cUxOUk1naVB2YlNzNHNsUVA1ZVp4ZU5QaUNocUZjdkt0VVdHZVVmZXdRZzhSdUt5RFROWXlBclNEM0p0NnJTc3dqaWlBWVhoUWRVczliT2JGR3l3RXU0R1N0aGZicXFZSkdiNjd6dmZJWVVoRWp4X21wNUJNd2EzOG5CMnJoR1ExaW1lX1Q4R0o0cHhBM1lZX0lnd0NLMkFVaTJZZ0FvUVNfejFaaFViQU9tX3REV2ZBNjdCOHU3ak1EcUdJX2xsbFdCWE9pVzk%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 04 Nov 2026 13:25:38 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "영란은행, 이란 전쟁 이후 처음으로 기준 금리 인상, 인플레이션이 5%에 가까워질 것이라고 경고",
          "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTFA2ekdpTXhxc3k5elptZTdDcmhfTy1PNGlRZ19pM3VCeVFCbXItX0ZpZzM4UHJlbEx2NkFmaTBrVmduNUJtWm5tWDJnXzd5RlYzalpEU0taeUtWRHNXVTNoNWJHUlZtNjhBTGw3ak9mY2Yxdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMickFVX3lxTFA2ekdpTXhxc3k5elptZTdDcmhfTy1PNGlRZ19pM3VCeVFCbXItX0ZpZzM4UHJlbEx2NkFmaTBrVmduNUJtWm5tWDJnXzd5RlYzalpEU0taeUtWRHNXVTNoNWJHUlZtNjhBTGw3ak9mY2Yxdw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Carney, Bank of Canada, 2% 인플레이션 목표에 초점을 맞춘 프레임워크 갱신",
          "original_url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOczRHYVNTT0tlZ1NzMmpsTHJtdTY2ZkxLYlBRVmVjdGpZYW1lRElmeXVpZEhuZ3R6V0dhWGxBRUZsQXp5THZlbmExUG43T0gtX2dOSUJtMzFjWWE2bDlWSE1iV09LVlg3RmhhekwzSzQyVjFFV29ldThZS0RjbGc0emFOZ1lVVHBKQkJERkxKMjBPRks1OTM2QzU1bEZzSGFaRTV5ZXhLdDB0N1BwQ3RRMHdYaVBYalFHSmM4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuwFBVV95cUxOczRHYVNTT0tlZ1NzMmpsTHJtdTY2ZkxLYlBRVmVjdGpZYW1lRElmeXVpZEhuZ3R6V0dhWGxBRUZsQXp5THZlbmExUG43T0gtX2dOSUJtMzFjWWE2bDlWSE1iV09LVlg3RmhhekwzSzQyVjFFV29ldThZS0RjbGc0emFOZ1lVVHBKQkJERkxKMjBPRks1OTM2QzU1bEZzSGFaRTV5ZXhLdDB0N1BwQ3RRMHdYaVBYalFHSmM4%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "말레이시아, 금리를 유지하고 가격 압력이 증가함에 따라 경계하겠다고 다짐",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNNUVzNHNfcXF5REhKbnI1Sm5mMVdFWENQQWtNQ05QVk5oZDN5MDA4UWdtdEtYdngwd1k4Z0VTalBHOXpoS2cyMGhqRmM2OHY1ZFhJVmM1RlZfLUlSNXlBM3p1VjJWaFRmZk81bDhnYVU5TEZ2VTNURWNHMy0xb3FuWUdVaE1KZTNBSnZsRnI1WjhJRi0yWjVjeWpUbGREZ0JYN0xVUFBRVmZnRmtwMWdob0ZjaXc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxNNUVzNHNfcXF5REhKbnI1Sm5mMVdFWENQQWtNQ05QVk5oZDN5MDA4UWdtdEtYdngwd1k4Z0VTalBHOXpoS2cyMGhqRmM2OHY1ZFhJVmM1RlZfLUlSNXlBM3p1VjJWaFRmZk81bDhnYVU5TEZ2VTNURWNHMy0xb3FuWUdVaE1KZTNBSnZsRnI1WjhJRi0yWjVjeWpUbGREZ0JYN0xVUFBRVmZnRmtwMWdob0ZjaXc%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "'부당한' 관세를 뒤집기 위해 노력하는 무역 문제에 관한 미국 하원 민주당 최고위",
          "original_url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOQXNkS0ZtWVFhNnE4MDNEU3NnaVJUbW5pbHRUUENOWC1zUDdCZEt1S252bElIZ29nMENqUGxjd0pvdmZ4UGxnVFI3eFBxdF9PQUt6bXFRQ2otaUd4R2xKY3VxODdzNjFOVDVfZG41Yy1fQVVEelZna3RvdlNWaTlpQ0E3WENNbTR1dk9xLUxiajJfc3p0cUQtWkpKQWZGQ05SQVR2S0xFVVF6bXF5LWZOSzc3TWp5c2c5NTB3NTAwU1dqdV9FR1E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMixgFBVV95cUxOQXNkS0ZtWVFhNnE4MDNEU3NnaVJUbW5pbHRUUENOWC1zUDdCZEt1S252bElIZ29nMENqUGxjd0pvdmZ4UGxnVFI3eFBxdF9PQUt6bXFRQ2otaUd4R2xKY3VxODdzNjFOVDVfZG41Yy1fQVVEelZna3RvdlNWaTlpQ0E3WENNbTR1dk9xLUxiajJfc3p0cUQtWkpKQWZGQ05SQVR2S0xFVVF6bXF5LWZOSzc3TWp5c2c5NTB3NTAwU1dqdV9FR1E%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:10"
    },
    {
      "source": "한국경제",
      "title_ko": "\"트럼프 관세 폐지·이란전 중단\" 美 민주당…행정부와 대립 예고 [워싱턴나우+]",
      "title_en": "",
      "summary_ko": "\"트럼프 관세 폐지·이란전 중단\" 美 민주당…행정부와 대립 예고 [워싱턴나우+] 한국경제. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 한국경제뿐만 아니라 뉴스1, 한국경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1tUEZlQXk1eDFCbm5sanBJNmJDdS1BcWZ2eDI3YnB1eUp4bEd2cTdmeENZVHFzM04ya2Z2WnFBQVlsQ1diR2RrblZDM0xrSDMtY0VWRF9WOXJiZw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1tUEZlQXk1eDFCbm5sanBJNmJDdS1BcWZ2eDI3YnB1eUp4bEd2cTdmeENZVHFzM04ya2Z2WnFBQVlsQ1diR2RrblZDM0xrSDMtY0VWRF9WOXJiZw?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 05 Nov 2026 08:29:40 GMT",
      "related_articles": [
        {
          "source": "뉴스1",
          "title_ko": "트럼프 \"관세 없애면 韓·日 등서 제품 들어와\"…이란엔 공격 위협",
          "original_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBraEg0QkxDR3NucVVZWC1STVdrekYxcUxqbmlmZjhQY0FUUjVxakNWTm9Cc2ZFRGNrSHVnUTRFN0lRNFRFVzFaaEFGN3JGbkVPQnhsY0RwMDk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBraEg0QkxDR3NucVVZWC1STVdrekYxcUxqbmlmZjhQY0FUUjVxakNWTm9Cc2ZFRGNrSHVnUTRFN0lRNFRFVzFaaEFGN3JGbkVPQnhsY0RwMDk?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "\"트럼프 관세와 한판\" 예고했지만…민주당 가로막는 것은 [워싱턴나우+]",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBoQWZ1TGY0TzFuSzlFdzJGLUxPUk9zT3B4MkxlSHFpbmxzY2lScGdxUHVWMEY2YzJpTHBSallpcmVvRjJzMmV0WWh4TVBrdnZJZUJ3eGc1SUlKQQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBoQWZ1TGY0TzFuSzlFdzJGLUxPUk9zT3B4MkxlSHFpbmxzY2lScGdxUHVWMEY2YzJpTHBSallpcmVvRjJzMmV0WWh4TVBrdnZJZUJ3eGc1SUlKQQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:10"
    },
    {
      "source": "Bloomberg",
      "title_ko": "한국 주식, 이란 전쟁 위험으로 2024년 이후 최악의 매도세 겪어",
      "title_en": "Korean Stocks Suffer Worst Selloff Since 2024 on Iran War Risks",
      "summary_ko": "한국 주식, 이란 전쟁 위험으로 2024년 이후 최악의 매도세 Bloomberg.com. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPOFNxZXN1QTZBR0ZzNXJJRWxhdXpaTGlPejRWRGxtX19WWjdQejB2UHdDVnhaY3NWVlV5U1N1N0lNdlZEVFFwQlBnTlFPWVJNRndYUmJGdjFnUGszb3Fjemd4aUQzdmpNM0hJdkw5NGdpREVtRzVVSF95OFhETlJpU3B6RWdRVnZ2VkRwVEFUUk0xWHh1dXFSNG1ZYmN3SVdTaGpzRmxGT08wMUk?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxPOFNxZXN1QTZBR0ZzNXJJRWxhdXpaTGlPejRWRGxtX19WWjdQejB2UHdDVnhaY3NWVlV5U1N1N0lNdlZEVFFwQlBnTlFPWVJNRndYUmJGdjFnUGszb3Fjemd4aUQzdmpNM0hJdkw5NGdpREVtRzVVSF95OFhETlJpU3B6RWdRVnZ2VkRwVEFUUk0xWHh1dXFSNG1ZYmN3SVdTaGpzRmxGT08wMUk%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 02 Mar 2026 08:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "외국인 매도로 한국 증시, 이정표 도달 후 하락",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPY1ZwaUhhOVZEd3c2VUxZRWNsZmtlMDR6ZjR2Z29MZndiNFMzNEtDX3cwQ0oyS0dqM1BwYnJQRV80NWhteDI1VDlRcnR5MUpqTDV5Mlk3Z3h4ZE8wY2RjTFBOeFBDbTUwVGpVTG83MGpNUGdZeENSZk1QQWpvOUtyUXJBTTlPWVB3cXZVbnVicVRXYkIwakltcTF3aEhGem85YXkxOHAxMS1vc1ZZcDR5NDFEZWFjZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPY1ZwaUhhOVZEd3c2VUxZRWNsZmtlMDR6ZjR2Z29MZndiNFMzNEtDX3cwQ0oyS0dqM1BwYnJQRV80NWhteDI1VDlRcnR5MUpqTDV5Mlk3Z3h4ZE8wY2RjTFBOeFBDbTUwVGpVTG83MGpNUGdZeENSZk1QQWpvOUtyUXJBTTlPWVB3cXZVbnVicVRXYkIwakltcTF3aEhGem85YXkxOHAxMS1vc1ZZcDR5NDFEZWFjZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:14"
    },
    {
      "source": "매일경제",
      "title_ko": "'블루웨이브 쇼크' 원/달러 환율 한 달 만에 1,360원대 터치",
      "title_en": "",
      "summary_ko": "'블루웨이브 쇼크' 원/달러 환율 한 달 만에 1,360원대 터치 매일경제 마켓. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 매일경제뿐만 아니라 씬짜오베트남, 베타뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE81QzFUak5uUndNaXRHMF94OGthZnQ0cUZoTlBtbkVJWWY0bjA3WTVVbmhnUUNkZS1Jdkh1VjhpOXBveXM1aTNFcGZWYnlzZEhyLXc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE81QzFUak5uUndNaXRHMF94OGthZnQ0cUZoTlBtbkVJWWY0bjA3WTVVbmhnUUNkZS1Jdkh1VjhpOXBveXM1aTNFcGZWYnlzZEhyLXc?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 06 Nov 2026 07:10:07 GMT",
      "related_articles": [
        {
          "source": "씬짜오베트남",
          "title_ko": "원/달러 환율 한 달 만에 1,360원대…’블루웨이브 쇼크’에 증시 급락",
          "original_url": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE1rcF92c3JCajg4UEdlLV9TaHJTZUNVdW5qR1RpUWc2MENGWDctcTgwVVVfelZ1a1ZQc1d5U3NJeElITW9lNGN5RQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE1rcF92c3JCajg4UEdlLV9TaHJTZUNVdW5qR1RpUWc2MENGWDctcTgwVVVfelZ1a1ZQc1d5U3NJeElITW9lNGN5RQ?oc=5"
        },
        {
          "source": "베타뉴스",
          "title_ko": "'블루웨이브'에도 원·달러 환율 1342.1원…외국인 3.4조 순매도에 소폭 상승",
          "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1kUzN1MzFDMDJNalBCdng5WnlHTEo5U09WeHRSbWhoQmNudHZ3dHFqMDhoVmx4VExBU1pfREF6WlVLNGVLUHUwRXk5YmhQWXJCd0FZcmZ1a0pVR1BOZk9mSVlPay0?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1kUzN1MzFDMDJNalBCdng5WnlHTEo5U09WeHRSbWhoQmNudHZ3dHFqMDhoVmx4VExBU1pfREF6WlVLNGVLUHUwRXk5YmhQWXJCd0FZcmZ1a0pVR1BOZk9mSVlPay0?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:14"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "달러-원, 장중 1,340원선 밑으로…外人 달러 선물 대거 순매도",
      "title_en": "",
      "summary_ko": "달러-원, 장중 1,340원선 밑으로…外人 달러 선물 대거 순매도 연합인포맥스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 연합인포맥스뿐만 아니라 뉴스1 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBTcXV6M3ZoemY2WFh2RmVnb3FIYnVNRDN6NU4tWUFMSUxQMlZmQk9GeFFuc2p5ekwwaG5xUkhGaldybVdQUmxHZm4wZjRZMk0xZTAzNUNRSmdKRlY4SUZfb053Um9BM0xhT1llbU44VXrSAXRBVV95cUxNSGc1U0EwbWR1SHd5UGtyUEJ6d1hXN2V4NzBoZklhakh5WDQ5Q1Q4ZVFST0RPZDRDZV9JZlREYS1XY21tRVNHT2RiYlppSDFVS3NZVzIwYnlqZWhNVlh1Zlh1dzNaQ0YwQ1MzajNkOGxKQ2ZFVg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBTcXV6M3ZoemY2WFh2RmVnb3FIYnVNRDN6NU4tWUFMSUxQMlZmQk9GeFFuc2p5ekwwaG5xUkhGaldybVdQUmxHZm4wZjRZMk0xZTAzNUNRSmdKRlY4SUZfb053Um9BM0xhT1llbU44VXrSAXRBVV95cUxNSGc1U0EwbWR1SHd5UGtyUEJ6d1hXN2V4NzBoZklhakh5WDQ5Q1Q4ZVFST0RPZDRDZV9JZlREYS1XY21tRVNHT2RiYlppSDFVS3NZVzIwYnlqZWhNVlh1Zlh1dzNaQ0YwQ1MzajNkOGxKQ2ZFVg?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 03 Nov 2026 04:33:02 GMT",
      "related_articles": [
        {
          "source": "뉴스1",
          "title_ko": "달러·원 환율 1346원 출발…외국인 증시 이탈에 상승 압력",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE56V01JYWxTbUl5amtwV2tLaGFTUnI4T054aEhYV1JDRVNYV25oeG1UNEFvRkRBVE1yXzRYTE95QWtlQjMzblpoVHAwVXgtZGxyUU5oZ1pVdGp0Qnc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE56V01JYWxTbUl5amtwV2tLaGFTUnI4T054aEhYV1JDRVNYV25oeG1UNEFvRkRBVE1yXzRYTE95QWtlQjMzblpoVHAwVXgtZGxyUU5oZ1pVdGp0Qnc?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:14"
    },
    {
      "source": "글로벌이코노믹",
      "title_ko": "[미 중간선거] 증시 외국인 매도폭탄… 달러 약세에도 원·달러 환율 상승",
      "title_en": "",
      "summary_ko": "[미 중간선거] 증시 외국인 매도폭탄… 달러 약세에도 원·달러 환율 상승 글로벌이코노믹. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 글로벌이코노믹뿐만 아니라 뉴스1, 서울경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPR2xjbldVMGNPWTZycUVHY2RQcHZaLTZzeExycjljbG1IRUR0Mnk4U1hmWWtVN19UUVpqa2JIM3o0SW1pOFpsVEt6OTBQVmtXbHVNSVdNT1dnT0w3dnBGMTk5THk2VWpaSEZsWWVyOEt4TDFUYTM4VnJSSnBycUNvSnFSWUE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPR2xjbldVMGNPWTZycUVHY2RQcHZaLTZzeExycjljbG1IRUR0Mnk4U1hmWWtVN19UUVpqa2JIM3o0SW1pOFpsVEt6OTBQVmtXbHVNSVdNT1dnT0w3dnBGMTk5THk2VWpaSEZsWWVyOEt4TDFUYTM4VnJSSnBycUNvSnFSWUE?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 05 Nov 2026 07:30:43 GMT",
      "related_articles": [
        {
          "source": "KB Think",
          "title_ko": "[환율 전망] 환율 급등 배후, 외국인 환헤지가 업계의 정설",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5EZXhLQ1BGOHdKdG8tR0h1SXVRWWJkLU55MHRQbjdmNU5KbW5Ld3EyV0lLOXB2R0RtbFdRZno5V1NZNmE4dVVUSkI0TGdzR2N0UElxdm9KeEtEbjZobF9ubA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5EZXhLQ1BGOHdKdG8tR0h1SXVRWWJkLU55MHRQbjdmNU5KbW5Ld3EyV0lLOXB2R0RtbFdRZno5V1NZNmE4dVVUSkI0TGdzR2N0UElxdm9KeEtEbjZobF9ubA?oc=5"
        },
        {
          "source": "뉴스1",
          "title_ko": "유가 급락에도 외국인 코스피 3.4조 투매…달러·원 소폭 상승(종합)",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9lQ2RBSUg1UDhtdkpWQVp3bWhETTlOMEpaM1Z0a1VVLWJnaHFPdjk4OXBKaVB4ZFFKM2dMQVZtYTVEREk4aU5XOWprNDhMMU5rajliZm10TzdxT00?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9lQ2RBSUg1UDhtdkpWQVp3bWhETTlOMEpaM1Z0a1VVLWJnaHFPdjk4OXBKaVB4ZFFKM2dMQVZtYTVEREk4aU5XOWprNDhMMU5rajliZm10TzdxT00?oc=5"
        },
        {
          "source": "머니투데이",
          "title_ko": "달러 약세에도 원/달러 환율 9.5원 급등…외국인 달러 매수세 - 머니투데이",
          "original_url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5nQ1dXa3F5TzluM0Z5TkhWLWVOYTJfVEl6RWFTbVhKeF9POWxXb3Jmc0FZVm5iVm9mbTVETDdTU2QxVVhRR0pGZ0REazRMX0N5N3RVUjBFdDJnY1h6ckk4Nmp4TGRnOFVjbDZV0gFwQVVfeXFMT1gwYnpKclI0VXZEV3YtYU9YcVEwT1IyRDhDaWRjdUFXYkhiMndFSlRYZVVlVGpDc1F0Y3NHdGFJTEpfNXFHcGtNX2FBQmxpTGhwRGQ2UjgzR2xNbjR3bTczTzJMd0hFTVRHZHhnd3VBZA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5nQ1dXa3F5TzluM0Z5TkhWLWVOYTJfVEl6RWFTbVhKeF9POWxXb3Jmc0FZVm5iVm9mbTVETDdTU2QxVVhRR0pGZ0REazRMX0N5N3RVUjBFdDJnY1h6ckk4Nmp4TGRnOFVjbDZV0gFwQVVfeXFMT1gwYnpKclI0VXZEV3YtYU9YcVEwT1IyRDhDaWRjdUFXYkhiMndFSlRYZVVlVGpDc1F0Y3NHdGFJTEpfNXFHcGtNX2FBQmxpTGhwRGQ2UjgzR2xNbjR3bTczTzJMd0hFTVRHZHhnd3VBZA?oc=5"
        },
        {
          "source": "서울경제",
          "title_ko": "美 중간선거에 출렁인 코스피…외국인 하루 2.5조 순매도",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5kVDc0TEU1b2YtMWFEZEowbkY1SHVnLUMzLWxnWDJEMEJiMzlEOF9tQl9yZlI5ODZkSWNseEpUcnZUOVpXRm16SFJXc1NnRkZXMnfSAVNBVV95cUxPc3ZEcUVNaDJPa1ZSUHdJVm0tQ2liVy1YSS1CVEg0NmlZZXlDbzR0S09mamwxNlJ0RFhnYmFHTzVuZXhGdlMzU1RnSnN0SndhTDQ0aw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5kVDc0TEU1b2YtMWFEZEowbkY1SHVnLUMzLWxnWDJEMEJiMzlEOF9tQl9yZlI5ODZkSWNseEpUcnZUOVpXRm16SFJXc1NnRkZXMnfSAVNBVV95cUxPc3ZEcUVNaDJPa1ZSUHdJVm0tQ2liVy1YSS1CVEg0NmlZZXlDbzR0S09mamwxNlJ0RFhnYmFHTzVuZXhGdlMzU1RnSnN0SndhTDQ0aw?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:14"
    },
    {
      "source": "인더스트리뉴스",
      "title_ko": "코스피, 외국인 1.5조 '매도'에 3.59% 급락…5600선서 마감",
      "title_en": "",
      "summary_ko": "코스피, 외국인 1.5조 '매도'에 3.59% 급락…5600선서 마감 인더스트리뉴스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 인더스트리뉴스뿐만 아니라 연합뉴스, 머니투데이 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9rV3lRSHpBQ1BUOExCanVGR2Y5aU05MHd4cl92WU04RVRoemIwUXlycVZzWm91bVVYbnV0cDRob1R3NGxzYmw5NDBnSnlqQ08zR2tja1FfOXRDVlRrOVFwNFVBS2ozYXhySVR6b3VfSXJQQQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9rV3lRSHpBQ1BUOExCanVGR2Y5aU05MHd4cl92WU04RVRoemIwUXlycVZzWm91bVVYbnV0cDRob1R3NGxzYmw5NDBnSnlqQ08zR2tja1FfOXRDVlRrOVFwNFVBS2ozYXhySVR6b3VfSXJQQQ?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 03 Nov 2026 09:01:51 GMT",
      "related_articles": [
        {
          "source": "뉴스핌",
          "title_ko": "[마감시황] 코스피, 외국인·기관 '팔자'에 3%대 하락…5700선 아래로",
          "original_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBkejZhelhqbHU4WVBEVEZ4bWtTUGFMa2QyaG1fY1hvRzIyeE8tM3JqYXdmdlVvR3F5NGR3WlRuY3hQT0c5eTRIVnNNX0taZ3Y1SjVYNTd0aTZGU2Ra?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBkejZhelhqbHU4WVBEVEZ4bWtTUGFMa2QyaG1fY1hvRzIyeE8tM3JqYXdmdlVvR3F5NGR3WlRuY3hQT0c5eTRIVnNNX0taZ3Y1SjVYNTd0aTZGU2Ra?oc=5"
        },
        {
          "source": "아시아경제",
          "title_ko": "코스피, 외국인 3.4조 팔았다…5380선으로 털썩",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9FWEcwVHRTZkpFOFA0eGtycDNMeGpIZWYtM193b09oUzlPYkhpM0oxZjlXU2xpak8tVVhpSFY4S1pQckZsUkRHbXJHLU9jQlA3VFVfUjU1WXJHQ20wam5lXw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9FWEcwVHRTZkpFOFA0eGtycDNMeGpIZWYtM193b09oUzlPYkhpM0oxZjlXU2xpak8tVVhpSFY4S1pQckZsUkRHbXJHLU9jQlA3VFVfUjU1WXJHQ20wam5lXw?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "코스피, 외국인 '팔자'로 돌아서자 하락전환…1%대 하락",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA0eHlBUjRqYXh2ZzFLaU1heTJGLVoxdWZ4cTNHRG1hSkVSbVIyTE52Rzh5dUhtVEY4ZEh5WlBlY3FCSGgwV0k4ZDJRc0xtQ3pPVkQ1LWk2U3JfV0nSAWBBVV95cUxOb0tWWWNrTk5hSDFsUHQ4R3c2WHh3WHFVY0ljOWU0TnlFSkZkZVR5dUt0WlpnN2VkbEdQQVRNYmc4Z3htMVBNTU40dDdxSFZNX1RZV3NmYTFLWnFDMGotQ0k?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA0eHlBUjRqYXh2ZzFLaU1heTJGLVoxdWZ4cTNHRG1hSkVSbVIyTE52Rzh5dUhtVEY4ZEh5WlBlY3FCSGgwV0k4ZDJRc0xtQ3pPVkQ1LWk2U3JfV0nSAWBBVV95cUxOb0tWWWNrTk5hSDFsUHQ4R3c2WHh3WHFVY0ljOWU0TnlFSkZkZVR5dUt0WlpnN2VkbEdQQVRNYmc4Z3htMVBNTU40dDdxSFZNX1RZV3NmYTFLWnFDMGotQ0k?oc=5"
        },
        {
          "source": "머니투데이",
          "title_ko": "코스피, 외국인 매도세에 2.3% 하락…SK하닉 6% 대 ↓ - 머니투데이",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5SaU53Z2tlUkpiRzY5Yi1VT0RxUWcxWE1ObWJCZ1NCZ2hvTjh2bk9iU2V5endEV1RVTFg1TVFLQVBEdjF0OGtWOF93RWhfY3l1blNhZWppTGZOcmFQZnJyLXpFaEQ0a2lQ0gFuQVVfeXFMUFFyTGpaMDVFb201RFRuTWkzMHhuZDhNb2NfU3dOelhCUElrYndOMVotQ1VmWF8td05sQ2dlVmRyckYxbXQyaWswdWpHczFiNkhCZS1yeWhBTjlOVmxaWlB3TDkyUjdzWXQ1LW5oR2c?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5SaU53Z2tlUkpiRzY5Yi1VT0RxUWcxWE1ObWJCZ1NCZ2hvTjh2bk9iU2V5endEV1RVTFg1TVFLQVBEdjF0OGtWOF93RWhfY3l1blNhZWppTGZOcmFQZnJyLXpFaEQ0a2lQ0gFuQVVfeXFMUFFyTGpaMDVFb201RFRuTWkzMHhuZDhNb2NfU3dOelhCUElrYndOMVotQ1VmWF8td05sQ2dlVmRyckYxbXQyaWswdWpHczFiNkhCZS1yeWhBTjlOVmxaWlB3TDkyUjdzWXQ1LW5oR2c?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:14"
    },
    {
      "source": "연합뉴스",
      "title_ko": "씨티 \"코스피 급락에도 11월 금리 인상 전망 유지\"",
      "title_en": "",
      "summary_ko": "씨티 \"코스피 급락에도 11월 금리 인상 전망 유지\" 연합뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합뉴스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1ocDU2SGJOdWJxZEtqN2pndnpfVVlya09hWkhWN04ydEo0aGcwcGFGcDlKT2JEREgwTnFMTHpBRkNYX1pBWnFGbGl0bGNSZzh4MGFpQ1JlbmxqQ1HSAWBBVV95cUxPWU5seVFxbWtKazRtN2JyZlV2TXpjTGZxLS1nSndiS1V3M2ZQQWpoS01YYVdIT1hHNzZsUEdsN3NtU3pIeDVHN2Q5ZGFwVzFNOEZjNXVrS0FTS2RjWUpHTzk?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1ocDU2SGJOdWJxZEtqN2pndnpfVVlya09hWkhWN04ydEo0aGcwcGFGcDlKT2JEREgwTnFMTHpBRkNYX1pBWnFGbGl0bGNSZzh4MGFpQ1JlbmxqQ1HSAWBBVV95cUxPWU5seVFxbWtKazRtN2JyZlV2TXpjTGZxLS1nSndiS1V3M2ZQQWpoS01YYVdIT1hHNzZsUEdsN3NtU3pIeDVHN2Q5ZGFwVzFNOEZjNXVrS0FTS2RjWUpHTzk?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Fri, 06 Nov 2026 07:44:06 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-07 20:01:14"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "[블루쓰나미 긴급진단] 채권시장 \"'4천피' 가면 11월 기준금리 인상불가할듯\"",
      "title_en": "",
      "summary_ko": "[블루쓰나미 긴급진단] 채권시장 \"'4천피' 가면 11월 기준금리 인상불가할듯\" 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 메디컬투데이 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE83S0tycTM0TGg0U3AybDhmaE82M3A1VzhCT2xVN0hZazNCRmNkUld4dUdmTTE3TkU0VVVCbEF3d0MtV2NITEx6QXFqS0tNbG5KanlaRzBlcWxiY19yY3BOaDNya290eUxTTnpSNC0zTF8?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE83S0tycTM0TGg0U3AybDhmaE82M3A1VzhCT2xVN0hZazNCRmNkUld4dUdmTTE3TkU0VVVCbEF3d0MtV2NITEx6QXFqS0tNbG5KanlaRzBlcWxiY19yY3BOaDNya290eUxTTnpSNC0zTF8?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 06 Nov 2026 01:29:00 GMT",
      "related_articles": [
        {
          "source": "메디컬투데이",
          "title_ko": "[분석] 10월 물가 둔화에도 11월 기준금리 인상에 무게",
          "original_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9McFRON2kyMWJBeWg3MEpSbEw0Y0JFNFRUZnB4eWZNckpSVGNGTnVZTkROOFJabTZaTW5WeTBnZE1FdGJpNm5PYmhNM1phektqNEx4cy11Z3lZcnZLRTZJb0tJb0dCZjk0Y3Fvcg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9McFRON2kyMWJBeWg3MEpSbEw0Y0JFNFRUZnB4eWZNckpSVGNGTnVZTkROOFJabTZaTW5WeTBnZE1FdGJpNm5PYmhNM1phektqNEx4cy11Z3lZcnZLRTZJb0tJb0dCZjk0Y3Fvcg?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:14"
    },
    {
      "source": "한국경제",
      "title_ko": "[속보] 영국, 3년여만에 기준금리 인상…연 4%로 0.25%p↑",
      "title_en": "",
      "summary_ko": "[속보] 영국, 3년여만에 기준금리 인상…연 4%로 0.25%p↑ 한국경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 한국경제뿐만 아니라 녹색경제신문, 연합뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE10bldfZFgtVHBpRlBIcTlReDg3RFFFRllnVlBqTV91UkRXbHkwWVBIZmZuX3J2Yzhob3V1SzBlanJYR2wzVFNhaVcybHBmaEVGbkNGNFZmQU1HUQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE10bldfZFgtVHBpRlBIcTlReDg3RFFFRllnVlBqTV91UkRXbHkwWVBIZmZuX3J2Yzhob3V1SzBlanJYR2wzVFNhaVcybHBmaEVGbkNGNFZmQU1HUQ?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 05 Nov 2026 12:02:20 GMT",
      "related_articles": [
        {
          "source": "녹색경제신문",
          "title_ko": "중동발 물가 압박에...영국, 3년3개월 만에 기준금리 연 4%로 인상",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE11b0xoaUdvMjZjT29kakp6aFYxUU5fTlpoaTFycEUzNU8zc2czc3dQTlFuVUNYT2VOdHREQjZvUm04dXB1UnJQYTVnbzBDY0tweEl1SlJyRVMyZ0NyLTgyQkJCNm5yVWtN?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE11b0xoaUdvMjZjT29kakp6aFYxUU5fTlpoaTFycEUzNU8zc2czc3dQTlFuVUNYT2VOdHREQjZvUm04dXB1UnJQYTVnbzBDY0tweEl1SlJyRVMyZ0NyLTgyQkJCNm5yVWtN?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "영국, 3년여 만 기준금리 인상…연4%로 0.25%p↑",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBtakprWW1ES0pRc0RJMGRuaFRnd090U0tNSGNMRWd3eFFfR0dkbDJkTEFHYXVDQ0xiOElvcFR0bE5zUlJYZi0yWkFJS29wS3k2QU1fNXJSdDc1RXBndWtNLTM2RTBvZkk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBtakprWW1ES0pRc0RJMGRuaFRnd090U0tNSGNMRWd3eFFfR0dkbDJkTEFHYXVDQ0xiOElvcFR0bE5zUlJYZi0yWkFJS29wS3k2QU1fNXJSdDc1RXBndWtNLTM2RTBvZkk?oc=5"
        },
        {
          "source": "경향신문",
          "title_ko": "영국, 물가 급등에 3년여 만에 기준금리 인상…연 4%로 0.25%p↑",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9maE5IYXlCQ3pYT09BSzRiZS1kdXlscTJXQ3AzcnFSZ3loX3VUdU9lZUFjc1duN3VaLTNNYnB0WERCZUpTTGZPWnI1ajllXzdXVXhUVURTTE52Z9IBX0FVX3lxTFBaZTZZUkc1UU5POWpidG42TEkwVTg1aWxUWlJwd2VUUnlzTmhjeTNLN1NNS3BBajFIRlRDODh1eXNCVy1lUGdlM2F1RmdnQTFYSzdPU3M4Zmh1YVMwUDQ0?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9maE5IYXlCQ3pYT09BSzRiZS1kdXlscTJXQ3AzcnFSZ3loX3VUdU9lZUFjc1duN3VaLTNNYnB0WERCZUpTTGZPWnI1ajllXzdXVXhUVURTTE52Z9IBX0FVX3lxTFBaZTZZUkc1UU5POWpidG42TEkwVTg1aWxUWlJwd2VUUnlzTmhjeTNLN1NNS3BBajFIRlRDODh1eXNCVy1lUGdlM2F1RmdnQTFYSzdPU3M4Zmh1YVMwUDQ0?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "[2보] 영국, 3년여만에 기준금리 인상…연 4%로 0.25%p↑",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9qUmJMUlhKODY2YjVoLTZUbXhwaUxpbHJPa3Frb0Q5QVh5aWxoQ0dBbFM4cGMyYUZzRGl5MElDOGVOSGdybTJIWWw0aE1EdGVsUFVad2NMM1JJY2fSAWBBVV95cUxQaUJDSVlSVm5adEM0QzdsM1cyNmVUTUVMa2tnU0RZb2lSMExOUTN0bkJMa2pPTlA4Zkh3Tk94N2VXS3JUS1pGbE5lczNHN0V1dVNNS1hUNk1ERUhIdjJVa0w?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9qUmJMUlhKODY2YjVoLTZUbXhwaUxpbHJPa3Frb0Q5QVh5aWxoQ0dBbFM4cGMyYUZzRGl5MElDOGVOSGdybTJIWWw0aE1EdGVsUFVad2NMM1JJY2fSAWBBVV95cUxQaUJDSVlSVm5adEM0QzdsM1cyNmVUTUVMa2tnU0RZb2lSMExOUTN0bkJMa2pPTlA4Zkh3Tk94N2VXS3JUS1pGbE5lczNHN0V1dVNNS1hUNk1ERUhIdjJVa0w?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:14"
    },
    {
      "source": "머니투데이",
      "title_ko": "영국 기준금리 3.75%→4% 인상…이란 전쟁 여파에 3년여 만에 '유턴' - 머니투데이",
      "title_en": "",
      "summary_ko": "영국 기준금리 3.75%→4% 인상…이란 전쟁 여파에 3년여 만에 '유턴' - 머니투데이 관련 핵심 동향이 발표되었습니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 머니투데이뿐만 아니라 한국경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1HV2llWmlqX2czNzJ4VVNJX2prR0VRbVFKb1dsUjdORFk2a2F0VWVrU09KNmtJZnRjNHFWd3hXVE1HeGV2cFMteVhpb3lCYmJpYzliSWR6NWUtTFljZlQ5Qk5kRjZaY0ts0gFuQVVfeXFMT2hLZTBSdG9qbHJvbVJMejQ0enhaSmp5VWdBTzc3NXo4c3c0NlRJeG9yT2ZHUUZMdUdMQWFheEloejQyR3VFcUN5aVRXb2JYZ1B5NjBTdWNQVjJ0bnZaMXBRYU9KdURKb3lOX0xrRlE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1HV2llWmlqX2czNzJ4VVNJX2prR0VRbVFKb1dsUjdORFk2a2F0VWVrU09KNmtJZnRjNHFWd3hXVE1HeGV2cFMteVhpb3lCYmJpYzliSWR6NWUtTFljZlQ5Qk5kRjZaY0ts0gFuQVVfeXFMT2hLZTBSdG9qbHJvbVJMejQ0enhaSmp5VWdBTzc3NXo4c3c0NlRJeG9yT2ZHUUZMdUdMQWFheEloejQyR3VFcUN5aVRXb2JYZ1B5NjBTdWNQVjJ0bnZaMXBRYU9KdURKb3lOX0xrRlE?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 05 Nov 2026 12:32:19 GMT",
      "related_articles": [
        {
          "source": "한국경제",
          "title_ko": "호주 기준금리 4.85%로 인상…18년 만에 최고치",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9Vem03Y2RsZEx1WGRPOEVfVTE4MVFacGUwRjFrYm1Ud09hQVBHWDVWbHFFckpacUpfZ0l2MkEtd3c0cmNyUnVrb3NtY2NxTElUUEFaQlJ2SnlvQQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9Vem03Y2RsZEx1WGRPOEVfVTE4MVFacGUwRjFrYm1Ud09hQVBHWDVWbHFFckpacUpfZ0l2MkEtd3c0cmNyUnVrb3NtY2NxTElUUEFaQlJ2SnlvQQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:15"
    },
    {
      "source": "https://www.sisaworld.kr/",
      "title_ko": "영국 기준금리 4%로 인상…3년3개월 만에 긴축 전환, 중동발 에너지 물가에 대응 - https://www.sisaworld.kr/",
      "title_en": "",
      "summary_ko": "영국 기준금리 4%로 인상…3년3개월 만에 긴축 전환, 중동발 에너지 물가에 대응 https://www.sisaworld.kr/. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. https://www.sisaworld.kr/에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9iSTgyQWFzUk04Ym9laExWVVIyQzJBZFdSTEFZRXFIdTV5MU9mTVFhWVh1Q0NXN2xNSG90R25qdFV6NDR2aUlBTmZOVnBERy1JVjJvbzQzOVFvUmp5NWxvc1BLMFRtUTJGUVE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9iSTgyQWFzUk04Ym9laExWVVIyQzJBZFdSTEFZRXFIdTV5MU9mTVFhWVh1Q0NXN2xNSG90R25qdFV6NDR2aUlBTmZOVnBERy1JVjJvbzQzOVFvUmp5NWxvc1BLMFRtUTJGUVE?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 05 Nov 2026 16:22:15 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-07 20:01:15"
    },
    {
      "source": "연합뉴스",
      "title_ko": "워시 \"내년 기준금리 결정 FOMC는 7번만…내후년은 6번\"",
      "title_en": "",
      "summary_ko": "워시 \"내년 기준금리 결정 FOMC는 7번만…내후년은 6번\" 연합뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합뉴스뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5OVHIzUTM0MF9CMWY2bmRJNzE3Rm01bDdDRTRRS0N0NWw1bS05aXNHNnV2QVVDYUtJSUJTd1Z3M1ZMQVc3VGlvNDVsWmp6dzNIQ2xDWEJyeUpXQUHSAWBBVV95cUxOUndVQkZWTlluR3JWWkFfMXpIa0hQNzgxaUVyRlI4WU0zN3I0UTRhWXhNdUY3eVJvM2Q4a0NPeE9OUllMYmszMWVRcm8yRXBlSWlvaUxZdWthcVFwbkU1VHg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5OVHIzUTM0MF9CMWY2bmRJNzE3Rm01bDdDRTRRS0N0NWw1bS05aXNHNnV2QVVDYUtJSUJTd1Z3M1ZMQVc3VGlvNDVsWmp6dzNIQ2xDWEJyeUpXQUHSAWBBVV95cUxOUndVQkZWTlluR3JWWkFfMXpIa0hQNzgxaUVyRlI4WU0zN3I0UTRhWXhNdUY3eVJvM2Q4a0NPeE9OUllMYmszMWVRcm8yRXBlSWlvaUxZdWthcVFwbkU1VHg?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 29 Oct 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "멕시코 중앙은행, 기준금리 6.25%로 깜짝 인하",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5rWUxORnpGbU9Mb1RjRk04QTJncEUxdVl4NUtCSGZQS0pleW8yZVF0TkFxZGU1aTEwa2dWUFQ5LUFiQXZKUzRDSEozWUktRzZFYTRnR0ZMT0hPZTZ2TERWc1hVVmRGREp1UE9qUjhJUEs?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5rWUxORnpGbU9Mb1RjRk04QTJncEUxdVl4NUtCSGZQS0pleW8yZVF0TkFxZGU1aTEwa2dWUFQ5LUFiQXZKUzRDSEozWUktRzZFYTRnR0ZMT0hPZTZ2TERWc1hVVmRGREp1UE9qUjhJUEs?oc=5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:15"
    },
    {
      "source": "Bloomberg",
      "title_ko": "미국 선거로 인해 AI 및 관세 무역이 약화됨에 따라 구리 가격 하락",
      "title_en": "Copper Moves Lower as US Election Undermines AI and Tariff Trade",
      "summary_ko": "미국 선거로 인해 AI 및 관세 거래가 약화됨에 따라 구리 가격 하락 Bloomberg.com. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPWnlsdF9sNDNwY0VTbjBVa1QwUmFYZXJQUWhfcEdtSF9NUWFlNS1KOTh5RW1EcXQ3NUpsVnFVazZsSmRBZ01pUkRkVFRRTXlvWkcxUjFzYVlMa2d3YmZqaWs0dXBzLTBWNE5MZ19wWW1LQldvbFJSNUM4MzBnUUZsYVlDczRmLWI3UnZ2WTFxT1VwWkFWZHBUdXYyUWlZeE9XSWVxTDhSSmxyUktGb0dIaXMyUnJqdw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPWnlsdF9sNDNwY0VTbjBVa1QwUmFYZXJQUWhfcEdtSF9NUWFlNS1KOTh5RW1EcXQ3NUpsVnFVazZsSmRBZ01pUkRkVFRRTXlvWkcxUjFzYVlMa2d3YmZqaWs0dXBzLTBWNE5MZ19wWW1LQldvbFJSNUM4MzBnUUZsYVlDczRmLWI3UnZ2WTFxT1VwWkFWZHBUdXYyUWlZeE9XSWVxTDhSSmxyUktGb0dIaXMyUnJqdw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 06 Nov 2026 20:37:40 GMT",
      "related_articles": [
        {
          "source": "Wall Street Journal",
          "title_ko": "10월 한국 인플레이션은 여전히 ​​목표치를 초과했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOMHNoTTBBOVlvWk1iWVVQbHNOakVTTUlybkM5Z3h3NkFncTBnNVB1YzBPOWJ1bXNOV1IxRDVBR3lHY0t0SjJJbko3anFVaEE3MGV6OW1xTTA5UlVtdVdKdmNlR2hPSkRzRVV4dGNTNncyVkptT2Z3aVZ3TjdBaHQ4ZXR5cXJIRXJGQWk4blB6V3ZzZTl3S211V0Via3hBajV3UVdZ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxOMHNoTTBBOVlvWk1iWVVQbHNOakVTTUlybkM5Z3h3NkFncTBnNVB1YzBPOWJ1bXNOV1IxRDVBR3lHY0t0SjJJbko3anFVaEE3MGV6OW1xTTA5UlVtdVdKdmNlR2hPSkRzRVV4dGNTNncyVkptT2Z3aVZ3TjdBaHQ4ZXR5cXJIRXJGQWk4blB6V3ZzZTl3S211V0Via3hBajV3UVdZ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:15"
    },
    {
      "source": "Reuters",
      "title_ko": "미국, 트럼프보다 중국에 희토류·농업 약속 이행 촉구",
      "title_en": "US urges China to meet rare earths, agriculture commitments ahead of Trump-Xi meetings",
      "summary_ko": "미국, 트럼프보다 중국에 희토류·농업 약속 이행 촉구 관련 핵심 동향이 발표되었습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Reuters뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNY1NQbGhDdzBnZUVPRWxZMzdCdlUxcTdxTlhaVXYwclNRTm92UXdGanlUVmpxQUczWFItME5kaWp3NWFKVDZUWW5GVlowUnFrYktvOEdvYTNlclhVRUQxbWlia18zQW1RRzhJMlhoRjE3b2xIdlllYXZCSm5BUTR1SFdudTNfS0ZRWUtjenNLS0NwOUMyN0gtb3JkX0NQaE1EdjluMkI3aFhscEplOWVXM0FIZTI4N3IxV3pLWGhsNUZLUQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwgFBVV95cUxNY1NQbGhDdzBnZUVPRWxZMzdCdlUxcTdxTlhaVXYwclNRTm92UXdGanlUVmpxQUczWFItME5kaWp3NWFKVDZUWW5GVlowUnFrYktvOEdvYTNlclhVRUQxbWlia18zQW1RRzhJMlhoRjE3b2xIdlllYXZCSm5BUTR1SFdudTNfS0ZRWUtjenNLS0NwOUMyN0gtb3JkX0NQaE1EdjluMkI3aFhscEplOWVXM0FIZTI4N3IxV3pLWGhsNUZLUQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 06 Nov 2026 17:53:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "미국, AI 확보 후 중국의 해외 Nvidia 칩 액세스 검토",
          "original_url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQZTdpdUdWQmtCamVUUDN2Y0NSMVRQVjBrNGQ5dG0xWVpOVG5xVGprbGFITVRkNzYtaHF0WmVWYUFkaHJubUNROHEwUDdEeGoxZzZ4STVrOHBieEM3SWFUSWpEMm56UUFUOExxTlJwdWg3YkQ0OGU5T1B0a2w2SXNwNEw3N2RMM21TRUoyZEx3REpsdmFqdzd3WXdxeW1zbEtqUVViYmtMa2hFNy13bzIyOTJhRzE2QWQ5SjdGTUY1T0VWQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwgFBVV95cUxQZTdpdUdWQmtCamVUUDN2Y0NSMVRQVjBrNGQ5dG0xWVpOVG5xVGprbGFITVRkNzYtaHF0WmVWYUFkaHJubUNROHEwUDdEeGoxZzZ4STVrOHBieEM3SWFUSWpEMm56UUFUOExxTlJwdWg3YkQ0OGU5T1B0a2w2SXNwNEw3N2RMM21TRUoyZEx3REpsdmFqdzd3WXdxeW1zbEtqUVViYmtMa2hFNy13bzIyOTJhRzE2QWQ5SjdGTUY1T0VWQQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:16"
    },
    {
      "source": "Reuters",
      "title_ko": "베센트는 이란에 대한 압박을 강화하기 위해 미국이 매주 새로운 2차 제재를 가할 것으로 예상한다.",
      "title_en": "Bessent expects new US secondary sanctions weekly, aiming to increase pressure on Iran",
      "summary_ko": "베센트는 이란에 대한 압력을 강화하기 위해 매주 새로운 미국의 2차 제재를 기대합니다. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNdWJLRHJBSlpLeHYxNEtndmNRX19YTG9GWENmSEdTZXRTbnZnUFJITUtYcV83YnlPWmlpbC00WnZic3FMYVowRlA4Zzk5V2NKc2ZSSkxtUXl6N1A2MmdQbTI3cWhqbWxfMXVNekZQWFYwY2hPcENiOXR1N1JjRU4ydTRGTWZoV0U2Ul9KdmVZZ1pBQzVFTnR1MUl5YXRpTV9DWXE1bEtOc0FkVTRpNkFHOV9XZ2JOUGJ2eUQ0WFFqRDdLdlZlWWdQdlpjSHY?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizAFBVV95cUxNdWJLRHJBSlpLeHYxNEtndmNRX19YTG9GWENmSEdTZXRTbnZnUFJITUtYcV83YnlPWmlpbC00WnZic3FMYVowRlA4Zzk5V2NKc2ZSSkxtUXl6N1A2MmdQbTI3cWhqbWxfMXVNekZQWFYwY2hPcENiOXR1N1JjRU4ydTRGTWZoV0U2Ul9KdmVZZ1pBQzVFTnR1MUl5YXRpTV9DWXE1bEtOc0FkVTRpNkFHOV9XZ2JOUGJ2eUQ0WFFqRDdLdlZlWWdQdlpjSHY%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 30 Aug 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Bessent는 미국 부채 시장의 긴장에 대한 두려움을 억제합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQdmNsa1QyN3lTZU1IX1hDN0VjWHI3M2pQbW1IU3N5ZHJMQTBna3hkNUtYWFRNa2NBaVRTRlM3eVVxOVFHMHhLaUJBX0tqWi1WY0lTbkwyVGFfMTNNWTdVTk5CQVRUUl9pcG1HQXR0MDhnQTlFRGJtaU5xZFRBME5zVU1ZdGxCV0NDVDBpOVdCSVpmbHk3OHh2azFvXzlsR0E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxQdmNsa1QyN3lTZU1IX1hDN0VjWHI3M2pQbW1IU3N5ZHJMQTBna3hkNUtYWFRNa2NBaVRTRlM3eVVxOVFHMHhLaUJBX0tqWi1WY0lTbkwyVGFfMTNNWTdVTk5CQVRUUl9pcG1HQXR0MDhnQTlFRGJtaU5xZFRBME5zVU1ZdGxCV0NDVDBpOVdCSVpmbHk3OHh2azFvXzlsR0E%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:17"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "엔비디아·배당 역송금 경계에도 '잠잠'…달러-원 1,330원 회귀 전망",
      "title_en": "",
      "summary_ko": "엔비디아·배당 역송금 경계에도 '잠잠'…달러-원 1,330원 회귀 전망 관련 핵심 동향이 발표되었습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9CUjFlWDhwbHdTUWd6NENCUHRzNmdHaHczWS1XVE5nSlhZN0c0LWRaaThyMzJWWjNQY1hvcVRaSTBrSTJaSG9MY0VBd0d0YWRHNUtrRDdGdmcweDRFTEQwMUdwclIyZThfX0VRWGItaHo?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9CUjFlWDhwbHdTUWd6NENCUHRzNmdHaHczWS1XVE5nSlhZN0c0LWRaaThyMzJWWjNQY1hvcVRaSTBrSTJaSG9MY0VBd0d0YWRHNUtrRDdGdmcweDRFTEQwMUdwclIyZThfX0VRWGItaHo?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 04 Nov 2026 00:59:28 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-07 20:01:17"
    },
    {
      "source": "Bloomberg",
      "title_ko": "미국은 엔비디아 CEO와 가까운 여성이 중국 스파이였다고 NYT가 밝혔습니다.",
      "title_en": "US Believes Woman Close to Nvidia CEO Was a China Spy, NYT Says",
      "summary_ko": "미국은 엔비디아 CEO와 가까운 여성이 중국 스파이였다고 NYT가 Bloomberg.com에서 밝혔습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOeks3UUZzZHludldva0o2QkpXMGZySHJkZzNtNGJTcUcwbHBtV3pKbW9TWUc1ZWRxaDl2SGo4NzFHQnYyRlg1UmZMazRwVnRpcmhaeFR0a2VjWEpXdDhaaWNIOGVsUEc5TFJRSlVHTFlKX0NBRzZhcEVFMkU2Y2dRMGdyaDVqU1dQOWxjd3lVekxvZHFETmg5UlpGRWl3NEtVRGhYWW5hQXJVOXJVNV9reWV3QQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOeks3UUZzZHludldva0o2QkpXMGZySHJkZzNtNGJTcUcwbHBtV3pKbW9TWUc1ZWRxaDl2SGo4NzFHQnYyRlg1UmZMazRwVnRpcmhaeFR0a2VjWEpXdDhaaWNIOGVsUEc5TFJRSlVHTFlKX0NBRzZhcEVFMkU2Y2dRMGdyaDVqU1dQOWxjd3lVekxvZHFETmg5UlpGRWl3NEtVRGhYWW5hQXJVOXJVNV9reWV3QQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sat, 07 Nov 2026 03:13:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "독점: 중국이 수입 승인을 보류함에 따라 Nvidia 칩이 홍콩에 쌓였습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQZHNUQnlURFBWSTlTSE5wNWUzekR0cDZfcWQzQVRFLVNweXJiSGhtSFZ6cWdvMXF4SHpLRy1YT1Y2QjJZMGxRajNaRGQ1Y25SVGkycEphaU4zTTRJSzV0QjNPTFMxeEl0Mm9CdGFQc0JJTHBNemVoSXdkTnhsR1FNR0t1b2hoUHdfSW0yVnlGMl95Qkd4dDAtMGdhYTFhUzRhc0U1Mm9fdGxLRnhacUNr?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxQZHNUQnlURFBWSTlTSE5wNWUzekR0cDZfcWQzQVRFLVNweXJiSGhtSFZ6cWdvMXF4SHpLRy1YT1Y2QjJZMGxRajNaRGQ1Y25SVGkycEphaU4zTTRJSzV0QjNPTFMxeEl0Mm9CdGFQc0JJTHBNemVoSXdkTnhsR1FNR0t1b2hoUHdfSW0yVnlGMl95Qkd4dDAtMGdhYTFhUzRhc0U1Mm9fdGxLRnhacUNr%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "TSMC, 첨단 AI 메모리 칩 제조 검토 중",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNVVJGbWZwV3FvN1Q3OHRSQTdCTGI4eFFHM2VKYzItYlM3SjFKVW1vbkZCMzJiRDVOLXhhSXBIX0lybV9FNUlfVFU4UzJIYUUyVkdka3VXdG1LOEVIWTBqblFCaGt3NEE5bTB2bU92MkZ5VHFPalZ3MzJwSHN6YmFtNjF5YWxiUFZHYXBqbTVGUHhGYnhHUHZVcUhXNndCdGdBM0N3bGpUeW1EYjZGc2hV?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxNVVJGbWZwV3FvN1Q3OHRSQTdCTGI4eFFHM2VKYzItYlM3SjFKVW1vbkZCMzJiRDVOLXhhSXBIX0lybV9FNUlfVFU4UzJIYUUyVkdka3VXdG1LOEVIWTBqblFCaGt3NEE5bTB2bU92MkZ5VHFPalZ3MzJwSHN6YmFtNjF5YWxiUFZHYXBqbTVGUHhGYnhHUHZVcUhXNndCdGdBM0N3bGpUeW1EYjZGc2hV%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "주요 공화당 의원들은 중국 스파이 혐의에 대해 엔비디아 CEO에게 브리핑을 요청합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNNVFaekphR1ctQUxRQk5CTEFSNnZuTDNJR2FJLUg5UEdXbDZQUEY0UmphZ3JlWFdRLWxDWE4tZjRsQUpPMHhON0lnMTBZdHNocGVfUFJVUHUyd2k1UjlWa1RLQTA5MGh4SlFRUE5heWdZSC1NbkUtMmNrNEJpSHNyV3RFbHoteXZabVk4U0s4dzdoSlhpOWI2aDdSRmtFdk51bjRfOENZaFFrUFQxZDFSUWxOQ21pUHZNZ09fUWJ3Vi1MVW1KTDZVeXFQaw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiywFBVV95cUxNNVFaekphR1ctQUxRQk5CTEFSNnZuTDNJR2FJLUg5UEdXbDZQUEY0UmphZ3JlWFdRLWxDWE4tZjRsQUpPMHhON0lnMTBZdHNocGVfUFJVUHUyd2k1UjlWa1RLQTA5MGh4SlFRUE5heWdZSC1NbkUtMmNrNEJpSHNyV3RFbHoteXZabVk4U0s4dzdoSlhpOWI2aDdSRmtFdk51bjRfOENZaFFrUFQxZDFSUWxOQ21pUHZNZ09fUWJ3Vi1MVW1KTDZVeXFQaw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "엔비디아 CEO, 미국 국회의원들로부터 스파이 조사에 연루돼 있다는 압박을 받음",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQbTI0MFVuSmI4SjRNUkNiRDRWb1V4eGJqNXZRb19oZHRRMzNGeWJsMm4ySWtIdG1qWmtRTkpYVndDSlI2TUpWM1gteU5QN3NpQ2c3bExmNXB5Rk5keXQ2czRlQUxsLTRZYWhQdWhTUkFkcXg0cUZvYm9vcjlLUndWbXc1QWZ5bnRmcEZ5SVpZRnQ1OGxDTjZfODY1N1lQM3plMm5TNjc2TGZkVU15bm1mQlIwOUpLZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxQbTI0MFVuSmI4SjRNUkNiRDRWb1V4eGJqNXZRb19oZHRRMzNGeWJsMm4ySWtIdG1qWmtRTkpYVndDSlI2TUpWM1gteU5QN3NpQ2c3bExmNXB5Rk5keXQ2czRlQUxsLTRZYWhQdWhTUkFkcXg0cUZvYm9vcjlLUndWbXc1QWZ5bnRmcEZ5SVpZRnQ1OGxDTjZfODY1N1lQM3plMm5TNjc2TGZkVU15bm1mQlIwOUpLZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-07 20:01:18"
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
