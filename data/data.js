window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-09-25 05:01:39",
    "date_str": "2026년 09월 25일 (금)",
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
      "price": 4.068,
      "previous_close": 3.97,
      "change": 0.098,
      "change_percent": 2.47,
      "display_price": "4.068%",
      "status": "up",
      "history": [
        3.97,
        3.965,
        3.978,
        3.982,
        4.028,
        4.068
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-09-24 20:00:41"
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
      "price": 5.162,
      "previous_close": 5.006,
      "change": 0.156,
      "change_percent": 3.12,
      "display_price": "5.162%",
      "status": "up",
      "history": [
        5.006,
        4.947,
        4.998,
        4.963,
        5.114,
        5.162
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-09-24 20:00:41",
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
      "price": 5.461,
      "previous_close": 5.349,
      "change": 0.112,
      "change_percent": 2.09,
      "display_price": "5.461%",
      "status": "up",
      "history": [
        5.349,
        5.296,
        5.331,
        5.296,
        5.401,
        5.461
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-09-24 20:00:41"
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
      "price": 101.258,
      "previous_close": 100.22,
      "change": 1.038,
      "change_percent": 1.04,
      "display_price": "101.26 pt",
      "status": "up",
      "history": [
        100.22,
        100.22,
        100.43,
        101.1,
        101.258
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-09-24 20:00:42"
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
      "price": 158.884,
      "previous_close": 155.266,
      "change": 3.618,
      "change_percent": 2.33,
      "display_price": "158.88엔",
      "status": "up",
      "history": [
        155.266,
        156.014,
        156.129,
        157.046,
        157.369,
        157.464,
        158.884
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-09-24 20:00:42"
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
      "price": 4307.8,
      "previous_close": 4399.7,
      "change": -91.9,
      "change_percent": -2.09,
      "display_price": "$4,307.80",
      "status": "down",
      "history": [
        4399.7,
        4424.9,
        4383.9,
        4376.4,
        4318.4,
        4307.8
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-09-24 20:00:42"
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
      "price": 95.23,
      "previous_close": 101.91,
      "change": -6.68,
      "change_percent": -6.55,
      "display_price": "$95.23",
      "status": "down",
      "history": [
        101.91,
        100.3,
        95.78,
        94.59,
        92.16,
        95.23
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-09-24 20:00:42"
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
      "price": 84373.93,
      "previous_close": 80901.46,
      "change": 3472.47,
      "change_percent": 4.29,
      "display_price": "$84,374",
      "status": "up",
      "history": [
        80901.461,
        81233.68,
        81142.609,
        86602.914,
        86172.281,
        84383.008,
        84373.93
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-09-24 20:00:42"
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
      "price": 957.4,
      "previous_close": 44.0,
      "change": 913.4,
      "change_percent": 0.0,
      "display_price": "$957.4B (약 9,574억$)",
      "status": "up",
      "history": [
        330.2,
        283.2,
        1004.4,
        947.3,
        54.1,
        44.0,
        957.4
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-09-24 20:00:43"
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
      "price": 7704.23,
      "previous_close": 7585.73,
      "change": 118.5,
      "change_percent": 1.56,
      "display_price": "7,704.23",
      "status": "up",
      "history": [
        7551.81,
        7637.76,
        7650.5,
        7764.7,
        7706.03,
        7704.23
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-09-24 20:00:43"
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
      "price": 30478.855,
      "previous_close": 28937.84,
      "change": 1541.015,
      "change_percent": 5.33,
      "display_price": "30,478.85",
      "status": "up",
      "history": [
        28945.061,
        29446.98,
        29644.17,
        30482.35,
        30470.289,
        30478.855
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-09-24 20:00:44"
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
      "price": 12492.536,
      "previous_close": 11175.55,
      "change": 1316.986,
      "change_percent": 11.78,
      "display_price": "12,492.54",
      "status": "up",
      "history": [
        11246.11,
        11599.49,
        11921.69,
        12433.17,
        12534.28,
        12492.536
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-09-24 20:00:44"
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
      "price": 15.45,
      "previous_close": 17.71,
      "change": -2.26,
      "change_percent": -12.76,
      "display_price": "15.45",
      "status": "down",
      "history": [
        17.71,
        15.44,
        14.81,
        14.87,
        15.18,
        15.45
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-09-24 20:00:44"
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
      "price": 1367.05,
      "previous_close": 1363.57,
      "change": 3.48,
      "change_percent": 0.26,
      "display_price": "1,367.05원",
      "status": "up",
      "history": [
        1363.57,
        1376.6,
        1379.53,
        1384.86,
        1373.68,
        1350.36,
        1367.05
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-09-24 20:00:44",
      "fx_averages": {
        "avg_1y": 1456.8,
        "avg_3y": 1401.6
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
      "price": 7080.92,
      "previous_close": 6684.37,
      "change": 396.55,
      "change_percent": 5.93,
      "display_price": "7,080.92",
      "status": "up",
      "history": [
        6627.26,
        6717.97,
        6715.41,
        6894.23,
        7007.72,
        7080.92
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-09-24 20:00:45"
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
      "price": 844.48,
      "previous_close": 806.79,
      "change": 37.69,
      "change_percent": 4.67,
      "display_price": "844.48",
      "status": "up",
      "history": [
        812.41,
        815.98,
        822.18,
        827.12,
        836.27,
        844.48
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-09-24 20:00:45"
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
      "updated_at": "2026-09-24 20:00:45"
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
      "updated_at": "2026-09-24 20:00:46"
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
      "price": 182.5,
      "previous_close": 176.49,
      "change": 6.01,
      "change_percent": 3.41,
      "display_price": "$182.50",
      "status": "up",
      "history": [
        175.54,
        182.39,
        181.31,
        189.16,
        192.62,
        185.65,
        182.5
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-09-24 20:00:46"
    }
  ],
  "news": [
    {
      "source": "CNBC",
      "title_ko": "달러는 2 근처에 보유",
      "title_en": "Dollar holds near 2-month high as markets weigh rate hikes, Iran diplomacy",
      "summary_ko": "달러는 2 근처에 보유 관련 핵심 동향이 발표되었습니다. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. CNBC뿐만 아니라 MarketWatch, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNUXhJVHpLOEZ0bFFvSlVUdVJyYkZPVThKQ290WUpfbkN1eVZ3WDc3QVVMVE9GNFBXWThfVktHNHdaNzNIZGZtd2U0WE9uUU5XUi1oZ0NCUmNGWU94cTV5QTlWaVZJcTVvMWVmTnljWVVFcERqLWdZZnlLeWRwS3JaYlVGV0FqQjN2MTdLVHNkeXloTF85MnVIOHIwckZncWc5MFHSAacBQVVfeXFMTWtTWlpCSGpMbWxhdUtDdHhYam9Vc3Vrd2tyUEFHNTg4Qjl6M3ZQVXE0LWhKY3VjN2Y5NGRYeEdBZjVpSlhxZnFWSmxRUzJEemxTczNVT3JOcUhGeGp2R1lRNHdzLUUwQW5BWXFNbXQwdm40WXk5aERDenROSXBCNmtscVRjbnBsa1c5bEJMZjJ2NDI4X2tzNXBXclBkeVZxZDItNVVaSUU?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNUXhJVHpLOEZ0bFFvSlVUdVJyYkZPVThKQ290WUpfbkN1eVZ3WDc3QVVMVE9GNFBXWThfVktHNHdaNzNIZGZtd2U0WE9uUU5XUi1oZ0NCUmNGWU94cTV5QTlWaVZJcTVvMWVmTnljWVVFcERqLWdZZnlLeWRwS3JaYlVGV0FqQjN2MTdLVHNkeXloTF85MnVIOHIwckZncWc5MFHSAacBQVVfeXFMTWtTWlpCSGpMbWxhdUtDdHhYam9Vc3Vrd2tyUEFHNTg4Qjl6M3ZQVXE0LWhKY3VjN2Y5NGRYeEdBZjVpSlhxZnFWSmxRUzJEemxTczNVT3JOcUhGeGp2R1lRNHdzLUUwQW5BWXFNbXQwdm40WXk5aERDenROSXBCNmtscVRjbnBsa1c5bEJMZjJ2NDI4X2tzNXBXclBkeVZxZDItNVVaSUU%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 23 Sep 2026 02:37:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "내부 삽입 베팅이 더 강한 달러를 육성함에 따라 금은 빛을 잃습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQVGROaTNUbzBNRWdvU1J1SVRKaURrN0FDVHMteG50VExEUUhKN3UyQ0pMZ3F0ZUtXRHoyc2c2aDgzRkFrTFhHR01OdVROSVBWVnRLWmhqSjNDdW5FVjdHeEptYW5fUFg1VFVnX0xXZURtemZqOVNqNmRqc19yVjdYX3BwM1I1T0M4VUIwdDNqdmxFcnlXX2pKS3VCNllNbEJTQkZxZTJkd1NpNDZwOGpBSw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxQVGROaTNUbzBNRWdvU1J1SVRKaURrN0FDVHMteG50VExEUUhKN3UyQ0pMZ3F0ZUtXRHoyc2c2aDgzRkFrTFhHR01OdVROSVBWVnRLWmhqSjNDdW5FVjdHeEptYW5fUFg1VFVnX0xXZURtemZqOVNqNmRqc19yVjdYX3BwM1I1T0M4VUIwdDNqdmxFcnlXX2pKS3VCNllNbEJTQkZxZTJkd1NpNDZwOGpBSw%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "월가가 연준(Fed) 금리 인상을 더 두려워하면서 채권 수익률( 금리)이 5% 이상 급등했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNWWJMOGx4MkZURnVjUExNcnhnajRQQ0dnN0hieTVZUEtlQUp2cjdmRWpGZXFub2VxSVByYlVKUnpWSm9kb09DQ2h1UTJMa1pKSlVwbHhYR29jZ3I4ZUR1MGo1SHpwQUQ4U3BkOHhUUGVfOWQyb3Q1QU9ZcEpzX05Ld1BCNktGcUJCRzkxUnBYVmhYWXBBOVF5MUZuS1pZdVJMVG9sWHdEMTljYXRjVC14QUY0RlJsdDY4WlhQbm1fak4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxNWWJMOGx4MkZURnVjUExNcnhnajRQQ0dnN0hieTVZUEtlQUp2cjdmRWpGZXFub2VxSVByYlVKUnpWSm9kb09DQ2h1UTJMa1pKSlVwbHhYR29jZ3I4ZUR1MGo1SHpwQUQ4U3BkOHhUUGVfOWQyb3Q1QU9ZcEpzX05Ld1BCNktGcUJCRzkxUnBYVmhYWXBBOVF5MUZuS1pZdVJMVG9sWHdEMTljYXRjVC14QUY0RlJsdDY4WlhQbm1fak4%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed)의 콜린스, 인플레이션 지지 후 '눈에 띄게' 높아질 수 있다고 경고",
          "original_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOc3JSTWhtWUo2N2llLUF0a245YTB0NUM2RFREaHA5UnNRRkRfTURiNHZwM0RxajlINXNIUHBSZWFSNkdudkdVX2sxNGJnMGdOUU8td3RMMG1JSENjMTgyNkFlcFBPODFBQU5Vb1A5ZXBDTXlTMVYxWmRpay1EN094U1hfamlMZ2JI0gGOAUFVX3lxTE9JMU5MaTJtZkxRNjJNbUtnZEkyU0NQT3N4QVpjamtKMDlSeTV6ZmpaOTFiTjRQZmtIa3lRMHJkU0o2eXRnOFBGaVFSeGZxMU5TM3NfOG55bVcxZGN2cW1LNzdqZkpONHVjTUJ5Tk5DUEZzQTlLRFkxUWwzME1vVlhxTkNUMjVPRzZlWmp5RkE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiiAFBVV95cUxOc3JSTWhtWUo2N2llLUF0a245YTB0NUM2RFREaHA5UnNRRkRfTURiNHZwM0RxajlINXNIUHBSZWFSNkdudkdVX2sxNGJnMGdOUU8td3RMMG1JSENjMTgyNkFlcFBPODFBQU5Vb1A5ZXBDTXlTMVYxWmRpay1EN094U1hfamlMZ2JI0gGOAUFVX3lxTE9JMU5MaTJtZkxRNjJNbUtnZEkyU0NQT3N4QVpjamtKMDlSeTV6ZmpaOTFiTjRQZmtIa3lRMHJkU0o2eXRnOFBGaVFSeGZxMU5TM3NfOG55bVcxZGN2cW1LNzdqZkpONHVjTUJ5Tk5DUEZzQTlLRFkxUWwzME1vVlhxTkNUMjVPRzZlWmp5RkE%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "10",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNaTYxSFZ2NnctamhZYXdkVTNPUi1QcEczSmZuV1YzOTlXVjd0ZUZEZFllOGNsbk9jMTVMU1dKcVdyX1dRUmo1QzBhSS14UFd3UlBEQVczZjhVdDFrZHFKWG1hQ1Uwc2hKY3hYWjh1X1VUX3lYNE1HNzRuWG1OalhYandaYWlBSXN3X0NiTkd5V0XSAZYBQVVfeXFMTkFSczFpQXVBNVp4OU5LNXZGU0sxU201bVNyV29jY3FWa0V6ZjZsNDhET0lVbWw1eFo1bkd6aVhxSGZYaTZFUjVjOHRYQXptbHR6STBycGZiX2QtdjA1aGwzU2gyd0NxbE04WFRCVnRVV1AwOTJzaFZKWDRqYVVMRExuRGpleGhLR3dMT1ZJUkl0dW9FbWNB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxNaTYxSFZ2NnctamhZYXdkVTNPUi1QcEczSmZuV1YzOTlXVjd0ZUZEZFllOGNsbk9jMTVMU1dKcVdyX1dRUmo1QzBhSS14UFd3UlBEQVczZjhVdDFrZHFKWG1hQ1Uwc2hKY3hYWjh1X1VUX3lYNE1HNzRuWG1OalhYandaYWlBSXN3X0NiTkd5V0XSAZYBQVVfeXFMTkFSczFpQXVBNVp4OU5LNXZGU0sxU201bVNyV29jY3FWa0V6ZjZsNDhET0lVbWw1eFo1bkd6aVhxSGZYaTZFUjVjOHRYQXptbHR6STBycGZiX2QtdjA1aGwzU2gyd0NxbE04WFRCVnRVV1AwOTJzaFZKWDRqYVVMRExuRGpleGhLR3dMT1ZJUkl0dW9FbWNB%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:00"
    },
    {
      "source": "IDNFinancials",
      "title_ko": "스콧 베센트, 케빈 워시의 연준 금리 인상 지지",
      "title_en": "",
      "summary_ko": "스콧 베센트, 케빈 워시의 연준 금리 인상 지지 IDNFinancials. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. IDNFinancials뿐만 아니라 블루밍비트, 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiuAJBVV95cUxPZEZuLTg2eFpGUDlyTlBzRkVXNXlsR25kN3duNWRHNGZKbW5EUzZBX1MyRFI5TDN0N0hMaXZOT3FGb3ZYRnprb3RRZ3JvNFRJLWpGa2hacUZUS0p6Z3dNNUlXWVZ6Tk1PR21nSlRFRk9mZllIOGhVT1lxZ0FWaDNHTHVWR2RSRmNKdGZ2M1VodFRsdmZsTGxaMVZRMC1feUdFRk1lS0p5SEl6WHZDbDlFRUxNYUZqenN1aGtIYU1JTlRwVGFzY3lFZmZqam9GNnlHMDlINThjMGhuY0c0Zk9weHN4MXB5c2lyM0J0YjlESWhjV2swWjVXR1lCY2hiQXZjTW50QUNtTGkzcDQ2Rmx1YkJSLTZuaWtoekJTZHE1QVlKNi1CNE9CeXdFbTBteDhoeUdudGR3OWs?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiuAJBVV95cUxPZEZuLTg2eFpGUDlyTlBzRkVXNXlsR25kN3duNWRHNGZKbW5EUzZBX1MyRFI5TDN0N0hMaXZOT3FGb3ZYRnprb3RRZ3JvNFRJLWpGa2hacUZUS0p6Z3dNNUlXWVZ6Tk1PR21nSlRFRk9mZllIOGhVT1lxZ0FWaDNHTHVWR2RSRmNKdGZ2M1VodFRsdmZsTGxaMVZRMC1feUdFRk1lS0p5SEl6WHZDbDlFRUxNYUZqenN1aGtIYU1JTlRwVGFzY3lFZmZqam9GNnlHMDlINThjMGhuY0c0Zk9weHN4MXB5c2lyM0J0YjlESWhjV2swWjVXR1lCY2hiQXZjTW50QUNtTGkzcDQ2Rmx1YkJSLTZuaWtoekJTZHE1QVlKNi1CNE9CeXdFbTBteDhoeUdudGR3OWs?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 22 Sep 2026 05:40:00 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "연준 바 이사, 추가 금리 인상 지지…\"인플레 목표 달성 위험 커져\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBXN0hPWDZUSVhqZW9oODJ3d2FLX3ZVMWxMWGpLZW9mSjhRM2VleFJHR0QxUUstb0JQVjV4STFWaElPNjB1T09IREtScmxLQWpNSFJCMWVaTXhIcVR5XzRzM1paVE44MEl4c2RkN0VJX3o?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBXN0hPWDZUSVhqZW9oODJ3d2FLX3ZVMWxMWGpLZW9mSjhRM2VleFJHR0QxUUstb0JQVjV4STFWaElPNjB1T09IREtScmxLQWpNSFJCMWVaTXhIcVR5XzRzM1paVE44MEl4c2RkN0VJX3o?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "연준, 3년만에 금리 인상으로…연내 '한번 추가 인상' 시사(상보)",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE91RnloRWtFeG1wUDU5M2RNTVR5bXhwLUloang0Z1J5ZWw3eXVZTkk1OWp6TWVucERzS29GWk4xZ2RDelpkTW9vbk5DM0NqOHpneU9jc1A4M2p2QkE3dzRyU2FlaWdGd3BocldZODlQRDA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE91RnloRWtFeG1wUDU5M2RNTVR5bXhwLUloang0Z1J5ZWw3eXVZTkk1OWp6TWVucERzS29GWk4xZ2RDelpkTW9vbk5DM0NqOHpneU9jc1A4M2p2QkE3dzRyU2FlaWdGd3BocldZODlQRDA?oc=5"
        },
        {
          "source": "블루밍비트",
          "title_ko": "연준 인사, 추가 금리 인상 시사…\"물가 여전히 목표 웃돌아\"",
          "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE00RGtHRDdMUzVrZmk3bUtuTmtEWU1SRExjOHJKUWh5NTEyNllUVmhGT280Zk9Id1g4YzdiNm1LM2M4enJUYWpEZ3dOd0tSLVVG?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE00RGtHRDdMUzVrZmk3bUtuTmtEWU1SRExjOHJKUWh5NTEyNllUVmhGT280Zk9Id1g4YzdiNm1LM2M4enJUYWpEZ3dOd0tSLVVG?oc=5"
        },
        {
          "source": "YTN",
          "title_ko": "'금리 인상' 끝이 아니다?…연준 내부서 쏟아지는 경고 [지금이뉴스]",
          "original_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1oWmdGaWdpeE9JeFcyOTBHX1Y3N01Mc3dkWDRwZ2N1MzZ1andhUjJPWlFzYTBNSDNOSW5wd0VrSnd4ME5XaTBLLTZoZFV4aVNleVR2SjlaSEY5TE5EQmc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1oWmdGaWdpeE9JeFcyOTBHX1Y3N01Mc3dkWDRwZ2N1MzZ1andhUjJPWlFzYTBNSDNOSW5wd0VrSnd4ME5XaTBLLTZoZFV4aVNleVR2SjlaSEY5TE5EQmc?oc=5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:00"
    },
    {
      "source": "Reuters",
      "title_ko": "미국 미국 분리준비제도(연준), 새로운 스테이블코인 규정 제안",
      "title_en": "US Federal Reserve proposes new stablecoin rules",
      "summary_ko": "미국 미국 분리준비제도(연준), 새로운 스테이블코인 규정 제안 관련 핵심 동향이 발표되었습니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPY25jeWJ2LVJIWmg5cThieHN1M3RDYjNGcGRyR19sNVN0cHBXRXlCUmEzbS1Zb3ZsNnhSM3VmcFQ4QkUzNG1VRXpkTTF2elFfNDhYa19ha0pJZlNpRHFhUXIwcE83ckdBM01Sc3FvRW1hZEY1MkR1RF9ZNFVDUTZkTmRhRXhJanlzRFF2OTdLaWZ4dWJjejJHR0FKRVoycGgzaklV?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxPY25jeWJ2LVJIWmg5cThieHN1M3RDYjNGcGRyR19sNVN0cHBXRXlCUmEzbS1Zb3ZsNnhSM3VmcFQ4QkUzNG1VRXpkTTF2elFfNDhYa19ha0pJZlNpRHFhUXIwcE83ckdBM01Sc3FvRW1hZEY1MkR1RF9ZNFVDUTZkTmRhRXhJanlzRFF2OTdLaWZ4dWJjejJHR0FKRVoycGgzaklV%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 24 Sep 2026 18:53:01 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "Odds of 미국 분리준비제도(연준) 유가 상승으로 인해 상승세",
          "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPUWx3V1U4LVllRFN2ZUNCN3N5SUN0VF9Iakl4UVlSamwtUGFTNE1ZRXFzWmJMSUNaRnRZejE3V3NRMUVfNzU4Y012MGtaa1plNlUybkxycWRvQ3NKdTdtVVIzVWlIMG55ZHp3S2lyc3JmOEU3bHMtNFFvRkJleWlpYm9FNXPSAYoBQVVfeXFMTmRFOUNteTdsTVNuNXRycmx6YkxLVmVwWGQ4ZURXOVpjUGsxbkU3M1pyZzgxUVJEX2NjV1Jmc2hsY3hCaGpOSkM1UmNsRjFuUlJmYi1jLW1zYmlyOGZ4bWZYRDlCSklGYjVTVWdrWXFiU0Etb0l3NFgwdlRHNDU1YVFaQTllVDN4bmRn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihAFBVV95cUxPUWx3V1U4LVllRFN2ZUNCN3N5SUN0VF9Iakl4UVlSamwtUGFTNE1ZRXFzWmJMSUNaRnRZejE3V3NRMUVfNzU4Y012MGtaa1plNlUybkxycWRvQ3NKdTdtVVIzVWlIMG55ZHp3S2lyc3JmOEU3bHMtNFFvRkJleWlpYm9FNXPSAYoBQVVfeXFMTmRFOUNteTdsTVNuNXRycmx6YkxLVmVwWGQ4ZURXOVpjUGsxbkU3M1pyZzgxUVJEX2NjV1Jmc2hsY3hCaGpOSkM1UmNsRjFuUlJmYi1jLW1zYmlyOGZ4bWZYRDlCSklGYjVTVWdrWXFiU0Etb0l3NFgwdlRHNDU1YVFaQTllVDN4bmRn%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:03"
    },
    {
      "source": "Bloomberg",
      "title_ko": "이란이 연준(Fed) 금리 경로에 대해 완화적인 우려를 표명함에 따라 금은 안정되었습니다.",
      "title_en": "Gold Steadies as Iran Talks Temper Concerns Over Fed Rate Path",
      "summary_ko": "이란, 연준(Fed) 금리 경로에 대한 우려를 완화하자 금은 안정 Bloomberg.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg뿐만 아니라 MarketWatch, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPS0lGQndCZl9ua0tsV1ljV3ZxekNiNU1WSlBfUXpScmdaVHpkX2NWS3Jnc2ZoMnNTRlhEMXRadlpwSGJmQ3VlSDNlZlc2RnRFQmc1bGN5NE5lRWI3aVlzV2RoUm5Xc2IzdW9Da2RnUno0dkRDYnhfeEJIRGJWU0h2YUxQOXdWbUJMZEZ6bGNzUFVkSUpTOUJYOVRaRDdROEdKTzAybHIxRTdtTjl5NXNpTm1PSQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPS0lGQndCZl9ua0tsV1ljV3ZxekNiNU1WSlBfUXpScmdaVHpkX2NWS3Jnc2ZoMnNTRlhEMXRadlpwSGJmQ3VlSDNlZlc2RnRFQmc1bGN5NE5lRWI3aVlzV2RoUm5Xc2IzdW9Da2RnUno0dkRDYnhfeEJIRGJWU0h2YUxQOXdWbUJMZEZ6bGNzUFVkSUpTOUJYOVRaRDdROEdKTzAybHIxRTdtTjl5NXNpTm1PSQ%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 22 Sep 2026 23:56:43 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "베센트는 BOJ를 반대한다",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQOHBSWnB3S3BOVjk1LVBBRVFiYTV6ZHRNME9jMWlOQmI3cndNWl9oOXh1Ni1vNWlNSTdIY2txS01zZVl5R3UzODdnN29EOFdBOGtNQjM5Ql9aNk1sS05XdjV4Q0tfNE82bXl6NWxXbUpEQ1RzbUV1Tk1uWW1va1Izc1h2a1pEdHZ2UC1sT0pfVHEyY1dMX09DbjJ4UTFCX2FYQkJNTWFpUWQwMVdQQTdubw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxQOHBSWnB3S3BOVjk1LVBBRVFiYTV6ZHRNME9jMWlOQmI3cndNWl9oOXh1Ni1vNWlNSTdIY2txS01zZVl5R3UzODdnN29EOFdBOGtNQjM5Ql9aNk1sS05XdjV4Q0tfNE82bXl6NWxXbUpEQ1RzbUV1Tk1uWW1va1Izc1h2a1pEdHZ2UC1sT0pfVHEyY1dMX09DbjJ4UTFCX2FYQkJNTWFpUWQwMVdQQTdubw%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "수요일 연준(Fed)의 핵심 내용 5가지를 소개합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPbkhGeWtmVHdBc2hSWUMwNmdPdkZRYmc2RVV3bWFYdHdZQWxmc3NUUDVNUlEzejk0VE0yM0hHbzFSUW9Rb1RFcTJRRk5SMEd1MkswWmNTZC1YSUNJbWFUQXlrWFZxSFpIN21JNzM4UHI3bGdRSlJkZTV5RHFUNzBhSTg1enluQ1RDXzd2dTZLQlNmRnI0aER2YlF30gGfAUFVX3lxTE9Pd0F0dFg2QnRCaXZ6MnhpQVd3aWVDSDJBZkFZS1FMaXpwdzFoNXpuTGk4OTVoa1lVckhhSDlfZ3BsanVTUWxFWUJYTk5SV3JQcUJLeEwxNnJUMk1QV1FRUm1aSDFhU1d6RG9JMUpzLXVDcllucjNNVnZsMF9DaXczZlVuanVoWklYQjRVSmN0bERGbUJ3ckhBSF9FWXhyOA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimgFBVV95cUxPbkhGeWtmVHdBc2hSWUMwNmdPdkZRYmc2RVV3bWFYdHdZQWxmc3NUUDVNUlEzejk0VE0yM0hHbzFSUW9Rb1RFcTJRRk5SMEd1MkswWmNTZC1YSUNJbWFUQXlrWFZxSFpIN21JNzM4UHI3bGdRSlJkZTV5RHFUNzBhSTg1enluQ1RDXzd2dTZLQlNmRnI0aER2YlF30gGfAUFVX3lxTE9Pd0F0dFg2QnRCaXZ6MnhpQVd3aWVDSDJBZkFZS1FMaXpwdzFoNXpuTGk4OTVoa1lVckhhSDlfZ3BsanVTUWxFWUJYTk5SV3JQcUJLeEwxNnJUMk1QV1FRUm1aSDFhU1d6RG9JMUpzLXVDcllucjNNVnZsMF9DaXczZlVuanVoWklYQjRVSmN0bERGbUJ3ckhBSF9FWXhyOA%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "오피니언: 연준(Fed)의 금리인상을 노리는 은밀한 방법이 있다",
          "original_url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOaVdYb2l3cERJbzl0RlBjd05yOWRmbExXUG03dXN0dVN0UG8xb01Ja3R5cjhDNnRtOW1fU1JQbGVKX0lNWnpLR0M0blQ0Q3R6RDJ5TzBjZ3VNeHRHZFQ2N3BiWURvMFcxTjhfVmdMejJYRG9xWnM3RjI5QVg2VkhSOVNGOHBSZkRmQmI2eWctdlNLT05EaFF3?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilwFBVV95cUxOaVdYb2l3cERJbzl0RlBjd05yOWRmbExXUG03dXN0dVN0UG8xb01Ja3R5cjhDNnRtOW1fU1JQbGVKX0lNWnpLR0M0blQ0Q3R6RDJ5TzBjZ3VNeHRHZFQ2N3BiWURvMFcxTjhfVmdMejJYRG9xWnM3RjI5QVg2VkhSOVNGOHBSZkRmQmI2eWctdlNLT05EaFF3%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "일주일 만에 골드",
          "original_url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPenM1U09oVWJmVW8zbUtuN1ZLcWU1dGRKa1Rqdk1FU0k5QmVDSGRwcG9hR1NVVFVYOGhkSWpMdVF0aWFZMWx6TlNSWHZiajl5UWdzbWFZNmpGUW53MEhhbGgteHgtOGZGTzdlVGdWVjhWR2pMSzdJSWdCSmVTRHA4RVlCWS1tNU1NQU9QanFEQTRnNjhSSlhFQ052dEE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinAFBVV95cUxPenM1U09oVWJmVW8zbUtuN1ZLcWU1dGRKa1Rqdk1FU0k5QmVDSGRwcG9hR1NVVFVYOGhkSWpMdVF0aWFZMWx6TlNSWHZiajl5UWdzbWFZNmpGUW53MEhhbGgteHgtOGZGTzdlVGdWVjhWR2pMSzdJSWdCSmVTRHA4RVlCWS1tNU1NQU9QanFEQTRnNjhSSlhFQ052dEE%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:09"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "월가 전문가 \"美·이란 합의 땐 유가·금리 하락…연준, 매파 근거 잃을 것\"",
      "title_en": "",
      "summary_ko": "월가 전문가 \"美·이란 합의 땐 유가·금리 하락…연준, 매파 근거 잃을 것\" 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBHbzF3WDZ5MzFMV0phM2hwLURBTXQ4VVQ3SzU5a002NnVCZjRRV0hiRVM2dWNIYWs1VzcyRjNSdFVIanlncUx5RUdnaUFzQ2EwNUNsZmxRdHpmMkRBcFRGcDNXajdQbmU5UTlZSFVnNWU?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBHbzF3WDZ5MzFMV0phM2hwLURBTXQ4VVQ3SzU5a002NnVCZjRRV0hiRVM2dWNIYWs1VzcyRjNSdFVIanlncUx5RUdnaUFzQ2EwNUNsZmxRdHpmMkRBcFRGcDNXajdQbmU5UTlZSFVnNWU?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 23 Sep 2026 03:13:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:09"
    },
    {
      "source": "Bloomberg",
      "title_ko": "또 다른 호르무즈: 흑해 봉쇄로 식량 공급 충격 위협",
      "title_en": "The Other Hormuz: Black Sea Blockade Threatens a Food Supply Shock",
      "summary_ko": "또 다른 호르무즈: 흑해 봉쇄로 식량 공급 충격 위협 Bloomberg.com. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOcFJoRXZCYjFhejNmdnZxMlZmLUpoZU01MnVwdUV2RExPdzNVakNrU1podnNzVVh5Zl9DVG90MXoyeGJaYzhLdVFhaHpta251VnRpVVBzTXhCSGt6R2VuYTF6QXotM0ZxLVlBYTlqYUF6azJ2VnhJcmJkMnNsdVYyTl9WQzdGNExtWE44MkdTY2JQQjRoMUhZclV5TDlVMVRqRlBrR1JCZUp3ZTNGMzZsNTFhRnUwWlY2VTZUbk5B?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivgFBVV95cUxOcFJoRXZCYjFhejNmdnZxMlZmLUpoZU01MnVwdUV2RExPdzNVakNrU1podnNzVVh5Zl9DVG90MXoyeGJaYzhLdVFhaHpta251VnRpVVBzTXhCSGt6R2VuYTF6QXotM0ZxLVlBYTlqYUF6azJ2VnhJcmJkMnNsdVYyTl9WQzdGNExtWE44MkdTY2JQQjRoMUhZclV5TDlVMVRqRlBrR1JCZUp3ZTNGMzZsNTFhRnUwWlY2VTZUbk5B%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Sun, 20 Sep 2026 23:01:01 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:09"
    },
    {
      "source": "Reuters",
      "title_ko": "중동 위험, 기술 대패로 인해 아시아 주식에서 해외 유출 급증",
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
          "source": "Reuters",
          "title_ko": "이란 전쟁이 오일 쇼크 우려를 불러일으키면서 해외 자금 유출이 아시아 증시를 강타했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "월가가 중동 긴장을 모니터링함에 따라 U.S. 미 국채/재무부수익(금리) 상승",
          "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOZld3ajVXMWdnQnVibk5pTFctajNqbndkX0ZUZkVXTzRJTUlWVEVXckg1UFJ2N0g2VDlvRWtjTzZfOVhqX0VkWHBTcVNqLXdKZGxxN1IzcXg1VGpleTRJMjhqQi1hM3RHR1RGUmxyYjluaWp1TG9FSG9SMG91akpDdEJTcWtaeTJ2dFHSAY8BQVVfeXFMTWFzTWNuVXU4c0d2OXJKRERvOTQtNkxXMFlkRVYxbmNGTHhmcDg2M18xTHBYZnY1WUo1b3cwLU5kSWtTaUNzZ2pCTHpVYmxYNHh5a1BJTDhDU29JRDhDOTM2cTZaMGNLVGozMXZzMkRpRG80M1hjVzBLV05UVlhEWXQyV1E4OGtKaEN2VU5MTFk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxOZld3ajVXMWdnQnVibk5pTFctajNqbndkX0ZUZkVXTzRJTUlWVEVXckg1UFJ2N0g2VDlvRWtjTzZfOVhqX0VkWHBTcVNqLXdKZGxxN1IzcXg1VGpleTRJMjhqQi1hM3RHR1RGUmxyYjluaWp1TG9FSG9SMG91akpDdEJTcWtaeTJ2dFHSAY8BQVVfeXFMTWFzTWNuVXU4c0d2OXJKRERvOTQtNkxXMFlkRVYxbmNGTHhmcDg2M18xTHBYZnY1WUo1b3cwLU5kSWtTaUNzZ2pCTHpVYmxYNHh5a1BJTDhDU29JRDhDOTM2cTZaMGNLVGozMXZzMkRpRG80M1hjVzBLV05UVlhEWXQyV1E4OGtKaEN2VU5MTFk%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:12"
    },
    {
      "source": "Reuters",
      "title_ko": "투자자들이 미국에 집중하면서 월가 하락",
      "title_en": "Wall Street dips as investors focus on US-Iran war",
      "summary_ko": "투자자들이 미국에 집중하면서 월가 하락 관련 핵심 동향이 발표되었습니다. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Reuters뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNdkxPUUdXbDkwcTdtbC1yM0NWMldPb2lpeExQRVh2SVFWQUl4Q3haSlp4U04yU1BoanNVeWF5bTIwbWJRQXVEQkIwMm0taFZ4eDJ3dUVjOTVuSWhEMVRZNV9vdUNab01CS1o4aUpoQVE5TmFqV1BMTFVaZVJzVEFES3Y4S1BLZFQ1TDFtR2dLZklJRkdFN3hTaENjVDhSc05sT1BVZ09idlU1ZGkwdTZLRi1n?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNdkxPUUdXbDkwcTdtbC1yM0NWMldPb2lpeExQRVh2SVFWQUl4Q3haSlp4U04yU1BoanNVeWF5bTIwbWJRQXVEQkIwMm0taFZ4eDJ3dUVjOTVuSWhEMVRZNV9vdUNab01CS1o4aUpoQVE5TmFqV1BMTFVaZVJzVEFES3Y4S1BLZFQ1TDFtR2dLZklJRkdFN3hTaENjVDhSc05sT1BVZ09idlU1ZGkwdTZLRi1n%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 24 Sep 2026 18:36:05 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "5% 미국채/재무부수익(금리)이 쇼크 가치를 잃으면서 투자자들은 6%에 대해 걱정하기 시작합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOZGNNand1cUh2bEZfdjZSUEI0TTRsbTRmc3kyRk9ZdGNMZ1VWdEMwWDVFTVpmUjFnUFNwRlhXQklrUWR6UEc2QUhaWFBKQUQ0M04xRjBjck5tWTA1cS0yRmNNN1BJV2JvYTBnLVpsczZzazN5alR0OW5hdDVNMW1majRMcFdCcXpYQzFWVjlsbGM?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxOZGNNand1cUh2bEZfdjZSUEI0TTRsbTRmc3kyRk9ZdGNMZ1VWdEMwWDVFTVpmUjFnUFNwRlhXQklrUWR6UEc2QUhaWFBKQUQ0M04xRjBjck5tWTA1cS0yRmNNN1BJV2JvYTBnLVpsczZzazN5alR0OW5hdDVNMW1majRMcFdCcXpYQzFWVjlsbGM%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "5% 미국 국채/재무부수익(금리)이 충격 가치를 잃으면서 투자자들은 6%에 대해 걱정하기 시작합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNMExlM2hCa285MnJxNXVkQm1VR250U1dqN00xaW1xejVPMTA1VUZCbnRqbFhYVk9TQzBEdE55ZWVoTGc0Y1VPajJVQ0NuSjJaZ3ozbFVjR3FDd0c5WTJxY0oyT0ZPbTl3ZTNLRUxEVEdOdnpCSjI4TEdRY1JPSTFmdVZrbW9jQjB1NHdBbjBUX0R0ZWtSalkyTGtTVlFxM3YyMEZXOXIxdU5fNXJfcnRIYS1OSTBnVUJWN2Z0MG9qVEU?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxNMExlM2hCa285MnJxNXVkQm1VR250U1dqN00xaW1xejVPMTA1VUZCbnRqbFhYVk9TQzBEdE55ZWVoTGc0Y1VPajJVQ0NuSjJaZ3ozbFVjR3FDd0c5WTJxY0oyT0ZPbTl3ZTNLRUxEVEdOdnpCSjI4TEdRY1JPSTFmdVZrbW9jQjB1NHdBbjBUX0R0ZWtSalkyTGtTVlFxM3YyMEZXOXIxdU5fNXJfcnRIYS1OSTBnVUJWN2Z0MG9qVEU%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Watch SNB Holds 기준 금리, 프랑 개입 위협 완화",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPNWlHbElRanJEdEhZWDdOZ3FncDQ2cE95WFdWT1MxYTgyemZPQnlHaWtTYUZkYkZQSWNwclBaVGhXOGt2MHpDMi1DS1RtWmQ0TjRtSFI1VTNMTWdMbWU5NVF4QUpzVkhzTzFmQ0oybjJ0eUF6RW5NNlVHQmlJNUhaZHZrVm56eXdWQ0pkSmdBMnR2cXVCWEZBTXFwTmFaYmQ2akVVT0RvbFQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxPNWlHbElRanJEdEhZWDdOZ3FncDQ2cE95WFdWT1MxYTgyemZPQnlHaWtTYUZkYkZQSWNwclBaVGhXOGt2MHpDMi1DS1RtWmQ0TjRtSFI1VTNMTWdMbWU5NVF4QUpzVkhzTzFmQ0oybjJ0eUF6RW5NNlVHQmlJNUhaZHZrVm56eXdWQ0pkSmdBMnR2cXVCWEZBTXFwTmFaYmQ2akVVT0RvbFQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "월가는 유가 상승으로 종료, 미국채/재무부수익(금리) 상승",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQeEU4dTJoZV9XeFR4cENDYXhRMG1Tb3E4aHFNc1RoUEpHeVJNYmtnS1RHb0lVdzg5S1BKelZiUkR4eER2bkFZc0tjcWxlRFEyODRlVlRoNlNmblFabUhsZnJwTllqbmd2RUQ5NmI0M0JVc3B3aVkwcmt0SE9vTERyLVhFRzIybV9OMU94QlF6UGdORGhJZldzTUJ6X1F2TjhTRVpLNDZWeVN6WU1hR0ZLRw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxQeEU4dTJoZV9XeFR4cENDYXhRMG1Tb3E4aHFNc1RoUEpHeVJNYmtnS1RHb0lVdzg5S1BKelZiUkR4eER2bkFZc0tjcWxlRFEyODRlVlRoNlNmblFabUhsZnJwTllqbmd2RUQ5NmI0M0JVc3B3aVkwcmt0SE9vTERyLVhFRzIybV9OMU94QlF6UGdORGhJZldzTUJ6X1F2TjhTRVpLNDZWeVN6WU1hR0ZLRw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:18"
    },
    {
      "source": "Bloomberg",
      "title_ko": "카타르 에너지국장은 호르무즈의 미래에 대해 '잘못'이라고 말했다",
      "title_en": "Qatar Energy Chief Says Bessent ‘Wrong’ About Hormuz Future",
      "summary_ko": "카타르 에너지국장, 호르무즈 미래에 대해 '잘못' 밝혔다 Bloomberg.com. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOMXBsLWRYS0lhdGFNQkNoeW5EVEpxT1dITm9PQmxWMmRnamZUR3dKRUNtREZLYm91OXZ0SnZYUnM1RnZtSDJCZ1ktdklSN0lER05DLXg2Q1g1RW5sd0hQV2I0endqZzZGdFNhWXAtbGFOSUNaYnhrSW5RZ0FFekt6MUoxWlRyTjhGN3lCWEJpSUpMUGpuSWNNcHg1V0ZFLWVPalo5Z0Y1MUV0bnd6ZnVv?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxOMXBsLWRYS0lhdGFNQkNoeW5EVEpxT1dITm9PQmxWMmRnamZUR3dKRUNtREZLYm91OXZ0SnZYUnM1RnZtSDJCZ1ktdklSN0lER05DLXg2Q1g1RW5sd0hQV2I0endqZzZGdFNhWXAtbGFOSUNaYnhrSW5RZ0FFekt6MUoxWlRyTjhGN3lCWEJpSUpMUGpuSWNNcHg1V0ZFLWVPalo5Z0Y1MUV0bnd6ZnVv%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 20 Sep 2026 16:33:42 GMT",
      "related_articles": [
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
        }
      ],
      "crawled_at": "2026-09-24 20:01:21"
    },
    {
      "source": "CNBC",
      "title_ko": "글로벌 채권수익률( )이 멀티로 급등",
      "title_en": "Global bond yields soar to multi-decade highs as Middle East turmoil reignites inflation fears",
      "summary_ko": "글로벌 채권수익률( )이 멀티로 급등 관련 핵심 동향이 발표되었습니다. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. CNBC뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNSXE1amZIRWIwXzJ6NTVmZ1pLQVZIVThoQjI1QnRzUGtNX2UybVVGVFpDM01IenhCY1F0Z0lTNlphU1NNdF81RGk5XzFXWndRcVBRRkd6ZWJXeUM0RUpZc01yeTRCMXY0S25RblhDbXhNMHpVM0xmaVRsOHMxMGdkOVF0ckhBLU1SbkHSAY8BQVVfeXFMTlR1WGhmQWsyWlRVWGt1WkVxczJJdkpmSS1NOGUwUzFvY2xxaUdJOGpRbnMyYjV3YzIzR0MtMm9aMzFrOGJ5cGtYWnUzblotc2pfcE91Ym8zcF9PRGg5MDQwRWpfcDVocFotUlg1WWlCamE5TWlYS29Fd2hYNVNEYVBvVlA1QTJzVTVmVXZkZGc?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxNSXE1amZIRWIwXzJ6NTVmZ1pLQVZIVThoQjI1QnRzUGtNX2UybVVGVFpDM01IenhCY1F0Z0lTNlphU1NNdF81RGk5XzFXWndRcVBRRkd6ZWJXeUM0RUpZc01yeTRCMXY0S25RblhDbXhNMHpVM0xmaVRsOHMxMGdkOVF0ckhBLU1SbkHSAY8BQVVfeXFMTlR1WGhmQWsyWlRVWGt1WkVxczJJdkpmSS1NOGUwUzFvY2xxaUdJOGpRbnMyYjV3YzIzR0MtMm9aMzFrOGJ5cGtYWnUzblotc2pfcE91Ym8zcF9PRGg5MDQwRWpfcDVocFotUlg1WWlCamE5TWlYS29Fd2hYNVNEYVBvVlA1QTJzVTVmVXZkZGc%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 01 Sep 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "WRAPUP2 글로벌 환율",
          "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQQW45OFZ3N1pORXhqcVZYWk1rTlU3amU2RGhiajRXQkp5cXpYOVZ6RENHUUxqLUxJXzRXd0FxUWQzUjVwSmV2NWR5ZkktdmpOZldfOFZZb3I5UUMwT2JHQWtGZk12LTBJb2RQYXlyREU3SzVUUGJlUmRWZFNOaXhQWkoyRHd0TjR2Z184SGVpbDhSUHVwZ016ZG50VTA5NjFVN2NlTEYyUXBTVHFFNGpIOHVDbmFyakpHdlRmUlI0SUZYaEU?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxQQW45OFZ3N1pORXhqcVZYWk1rTlU3amU2RGhiajRXQkp5cXpYOVZ6RENHUUxqLUxJXzRXd0FxUWQzUjVwSmV2NWR5ZkktdmpOZldfOFZZb3I5UUMwT2JHQWtGZk12LTBJb2RQYXlyREU3SzVUUGJlUmRWZFNOaXhQWkoyRHd0TjR2Z184SGVpbDhSUHVwZ016ZG50VTA5NjFVN2NlTEYyUXBTVHFFNGpIOHVDbmFyakpHdlRmUlI0SUZYaEU%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "중앙 은행이 인플레이션 목표를 낮추면서 헝가리 채권 강세는 유로 경로에 베팅",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxORHg3bl9QcE1XcnAtN2p3NG9pUlVvLUpFUm9BbTdjaDFPaDhfTE1zNFBfbHlZM3Q5NmlSd3ZtMHhjaHMxQ3BiQ3M3b1dnSnpVWEIzSDhKZ3ZZR1pvaFpWcF9VWnJObnhwUlh4Y19nU2kzSy13VWstOVBJX09zdDJhYmN5Z1N0a2JwMmdQdnVCbVhKaXRpa3F5MUFjOEJ2cXM2VWlyVkFFTXBaV1NwTXpNZFNhZkE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxORHg3bl9QcE1XcnAtN2p3NG9pUlVvLUpFUm9BbTdjaDFPaDhfTE1zNFBfbHlZM3Q5NmlSd3ZtMHhjaHMxQ3BiQ3M3b1dnSnpVWEIzSDhKZ3ZZR1pvaFpWcF9VWnJObnhwUlh4Y19nU2kzSy13VWstOVBJX09zdDJhYmN5Z1N0a2JwMmdQdnVCbVhKaXRpa3F5MUFjOEJ2cXM2VWlyVkFFTXBaV1NwTXpNZFNhZkE%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Aldi US COO 보기: 미국인들은 인플레이션 압력을 느끼고 있습니다",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNamlUdUhnNGVRb2xQQmc1RzdpX1h3OUFRNEx6M3lzUTFuQ2dyaHZDWWxqeVh0Rk9kSVVNdmlSeHRhcVFhZWdZcWlNY0xIY2l6bVR3X1hNd3NfUjAyNEJ6akw1OS1kaDE0TU1CYU9FRVM0bUdQOHBQa1d6ZW1tRHkwb1pzTEhuOGwzX0hleGlycFZCRHZDeVlyVXRnOHhUbEh3Y2VqSXNESmlJSmx4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxNamlUdUhnNGVRb2xQQmc1RzdpX1h3OUFRNEx6M3lzUTFuQ2dyaHZDWWxqeVh0Rk9kSVVNdmlSeHRhcVFhZWdZcWlNY0xIY2l6bVR3X1hNd3NfUjAyNEJ6akw1OS1kaDE0TU1CYU9FRVM0bUdQOHBQa1d6ZW1tRHkwb1pzTEhuOGwzX0hleGlycFZCRHZDeVlyVXRnOHhUbEh3Y2VqSXNESmlJSmx4%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:24"
    },
    {
      "source": "매일경제",
      "title_ko": "[표] 거래소 외국인 순매수도 상위종목(23일)",
      "title_en": "",
      "summary_ko": "[표] 거래소 외국인 순매수도 상위종목(23일) 매일경제 마켓. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 매일경제뿐만 아니라 연합뉴스, 뉴시스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5paVBxTW5YUFNzRkd0NGxla1Azc3k2bW50UmZSX21QckRxc1JXa1FIZTVodWVmcW1WMzhXSGVFMU5QYlNLbnFaQVd5eTMwUmhiUGc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5paVBxTW5YUFNzRkd0NGxla1Azc3k2bW50UmZSX21QckRxc1JXa1FIZTVodWVmcW1WMzhXSGVFMU5QYlNLbnFaQVd5eTMwUmhiUGc?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 23 Sep 2026 06:45:56 GMT",
      "related_articles": [
        {
          "source": "매일경제",
          "title_ko": "[표] 코스닥 외국인 순매수도 상위종목(21일)",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5lblpLRmVYUUdTS3gwR2NycWNJQ0YzVU5hbXhiVFJOdjJsSEloTW1uZHlmSDFEc0ZIYkI3TzhhZ1U4WmZHYXNoTlVING5KZG91aUE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5lblpLRmVYUUdTS3gwR2NycWNJQ0YzVU5hbXhiVFJOdjJsSEloTW1uZHlmSDFEc0ZIYkI3TzhhZ1U4WmZHYXNoTlVING5KZG91aUE?oc=5"
        },
        {
          "source": "v.daum.net",
          "title_ko": "코스피, 기관·외국인 순매수에 장중 강세",
          "original_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1Zdy15ZGlnWjM1by1tMWwxdExpd3hnWXMwYUQyZER6R2ZWUHJBczZSWmMzbjhKYmhYaDVTaXJnc0lFaVZnLUFBNHhmTmdYaUU?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1Zdy15ZGlnWjM1by1tMWwxdExpd3hnWXMwYUQyZER6R2ZWUHJBczZSWmMzbjhKYmhYaDVTaXJnc0lFaVZnLUFBNHhmTmdYaUU?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "금리 충격 비켜간 코스피…외국인 매도에 약보합 마감",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5QNTdTZ0ZnMlhjcW96WWVpYnp0Z0xzcFhJQm54d0ZITHk4UjZOSFJmekxIZ2xqbGViVy1KRFVFTkdXWjVHYTZTNVJUbDdVdVNiNnZaU0drWGJ3bGNiWFFRR29OZWhIXzA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5QNTdTZ0ZnMlhjcW96WWVpYnp0Z0xzcFhJQm54d0ZITHk4UjZOSFJmekxIZ2xqbGViVy1KRFVFTkdXWjVHYTZTNVJUbDdVdVNiNnZaU0drWGJ3bGNiWFFRR29OZWhIXzA?oc=5"
        },
        {
          "source": "뉴시스",
          "title_ko": "'셀코리아' 이제 끝?…외국인 수급 확대 신호 켜졌다",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFB6bDlTaEFuOVEwMG5GR1IzNklwZURrOU9LOWhkTkFpaGl4MlFNbDFMbEJiTE90bkQydXZ3QVVkdmsxbmJxZ29sUVNxRW5iV1dYRW94VW84STBsdkhqdmFtUdIBeEFVX3lxTE05Y05XYWxkUXRxODhCS21sdnZjV3lBWUx6Tkp4X2ZOVlBFZDlfSEpoellIQmFNbkFnOTVjRU9xeGxxWWdVV3BQV2RwNlNvV0hST3d4SFl6MHA5bktCV1ZmeGlIUkIzc2NIVHlnMFNneEtLM0xERzNjNg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFB6bDlTaEFuOVEwMG5GR1IzNklwZURrOU9LOWhkTkFpaGl4MlFNbDFMbEJiTE90bkQydXZ3QVVkdmsxbmJxZ29sUVNxRW5iV1dYRW94VW84STBsdkhqdmFtUdIBeEFVX3lxTE05Y05XYWxkUXRxODhCS21sdnZjV3lBWUx6Tkp4X2ZOVlBFZDlfSEpoellIQmFNbkFnOTVjRU9xeGxxWWdVV3BQV2RwNlNvV0hST3d4SFl6MHA5bktCV1ZmeGlIUkIzc2NIVHlnMFNneEtLM0xERzNjNg?oc=5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:25"
    },
    {
      "source": "아시아경제",
      "title_ko": "원·달러 환율 22.8원 급락, 1350원대로 \"추석 앞두고 달러 매도·미국 이란 대화 기대\"(상보)",
      "title_en": "",
      "summary_ko": "원·달러 환율 22.8원 급락, 1350원대로 \"추석 앞두고 달러 매도·미국 이란 대화 기대\"(상보) 아시아경제. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 아시아경제뿐만 아니라 매일경제, kado.net 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE0zZV9nOU1SS1pINGozSmU2bEgzTXRGYUdSMF95UFhRcXJfTWdmbkVSaUlUaHVWMHB6X2VRY2dQWE95SjVGV3MtOUtwcjQ1aUdTLVlRSW9aZmdad0dpd1dpdw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE0zZV9nOU1SS1pINGozSmU2bEgzTXRGYUdSMF95UFhRcXJfTWdmbkVSaUlUaHVWMHB6X2VRY2dQWE95SjVGV3MtOUtwcjQ1aUdTLVlRSW9aZmdad0dpd1dpdw?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 22 Sep 2026 07:56:06 GMT",
      "related_articles": [
        {
          "source": "kado.net",
          "title_ko": "이틀째 급락 원·달러 환율 1350원대로…미국-이란 대화 재개 기대감 겹쳐",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFA5bFBOeC1Vem4zOEkwOV9BWHpvV3BWWkpzaGMwRlY3aVZ1V1VaNXFCWUdORU1idVNfYjJiQUpmdnZ5MmlzTTBwYkRBdVFoSEt1cDRFRnNWQm10cS1DQlJYTTg4NjlyTlE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFA5bFBOeC1Vem4zOEkwOV9BWHpvV3BWWkpzaGMwRlY3aVZ1V1VaNXFCWUdORU1idVNfYjJiQUpmdnZ5MmlzTTBwYkRBdVFoSEt1cDRFRnNWQm10cS1DQlJYTTg4NjlyTlE?oc=5"
        },
        {
          "source": "베타뉴스",
          "title_ko": "추석 앞두고 '달러 매도·중동 대화 기대'에 원·달러 환율, 이틀 연속 급락...다시 1350원대로",
          "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1WUllYZVlqTERUN2Ixb2cyVmY4Tm5OMzJpQmZiZUdBQkduWFk2RFo0OVVyempmQzFod2xveFUxOW52RThTNkxRRFM3QUEzWVhEbUdQaU5hNzZkemVFeC1Kc3V4QWY?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1WUllYZVlqTERUN2Ixb2cyVmY4Tm5OMzJpQmZiZUdBQkduWFk2RFo0OVVyempmQzFod2xveFUxOW52RThTNkxRRFM3QUEzWVhEbUdQaU5hNzZkemVFeC1Kc3V4QWY?oc=5"
        },
        {
          "source": "매일경제",
          "title_ko": "[외환] 원/달러 환율 7.6원 오른 1,366.0원(15:30 기준가)",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9kYmQtS240RUZlT0p3U3hUbVZaZlUwUlc0akxnbnRTN0E1WVc1SXAtX3ZwUXdIZXJWbjhDZUQwSmQ5ZTQtNWotZ290YnpBeE9hUGc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9kYmQtS240RUZlT0p3U3hUbVZaZlUwUlc0akxnbnRTN0E1WVc1SXAtX3ZwUXdIZXJWbjhDZUQwSmQ5ZTQtNWotZ290YnpBeE9hUGc?oc=5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:25"
    },
    {
      "source": "CNBC",
      "title_ko": "케빈 워시(Kevin Warsh)의 세 단어는 월가가 연준(Fed)이 금리 인상을 어디까지 할 것인지 궁금해지게 만든다.",
      "title_en": "Three words from Kevin Warsh have Wall Street wondering how far the Fed will go with rate hikes",
      "summary_ko": "케빈 워시(Kevin Warsh)의 세 단어는 월가가 연준(Fed)이 금리 인상을 어디까지 할 것인지 궁금해지게 만든다. 관련 핵심 동향이 발표되었습니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. CNBC에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNSXdfWXNIMEY2YkdDSGh2cWVONW03aXdjUFFuUGV5cmswQnNjQlgzNTJTWTBiM3ZnZmY4Wl95MmRYOGFyeDB6YjJwTTdDdk94QU1jendxcHZxemF2dExzdFh1WWwzeE0tMTdnWUFLWUhqeTdUMm9ORG53UGVoaU1zSVhVU3hkV1RNaDNqNmNjMVo2VUVteXR0NnE1dHZUZGo2WUZUMWNYdzlnR3FGcWNrRlhqU0hUX21VUUI4aE50bUFmb2tVdDZMMldYNG_SAdIBQVVfeXFMTy1qakhvTjZoRU1JZjNhZDFtUjN3cWg5N3JmQjQ4RnpsZGFUVW5pVWFOOXdlWDhnMjBMRzN2SnBObjF2OTBTTGZCWW5sX3NheHNjVHhEY2NVVkt5YXU2S1AyNFRRamM1UXhYN0NWTGUwOHRTc0hxVVdMT0xITXZXN05MZ01jOGdIU1pfVTkybXMyY081a1hIYUtqTWFKMzdFVXIwYVZmT19PbXlOTzNIenN1YXhKY1RvTkd2SkctZ01VOGVFN0p0bTR5X2RTQ1MyVlhn?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizAFBVV95cUxNSXdfWXNIMEY2YkdDSGh2cWVONW03aXdjUFFuUGV5cmswQnNjQlgzNTJTWTBiM3ZnZmY4Wl95MmRYOGFyeDB6YjJwTTdDdk94QU1jendxcHZxemF2dExzdFh1WWwzeE0tMTdnWUFLWUhqeTdUMm9ORG53UGVoaU1zSVhVU3hkV1RNaDNqNmNjMVo2VUVteXR0NnE1dHZUZGo2WUZUMWNYdzlnR3FGcWNrRlhqU0hUX21VUUI4aE50bUFmb2tVdDZMMldYNG_SAdIBQVVfeXFMTy1qakhvTjZoRU1JZjNhZDFtUjN3cWg5N3JmQjQ4RnpsZGFUVW5pVWFOOXdlWDhnMjBMRzN2SnBObjF2OTBTTGZCWW5sX3NheHNjVHhEY2NVVkt5YXU2S1AyNFRRamM1UXhYN0NWTGUwOHRTc0hxVVdMT0xITXZXN05MZ01jOGdIU1pfVTkybXMyY081a1hIYUtqTWFKMzdFVXIwYVZmT19PbXlOTzNIenN1YXhKY1RvTkd2SkctZ01VOGVFN0p0bTR5X2RTQ1MyVlhn%3Foc%3D5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Fri, 18 Sep 2026 16:33:43 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:26"
    },
    {
      "source": "인베스트조선",
      "title_ko": "WGBI 편입 막바지…외국인 수급 둔화, 채권시장 변수로",
      "title_en": "",
      "summary_ko": "WGBI 편입 막바지…외국인 수급 둔화, 채권시장 변수로 인베스트조선. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 인베스트조선에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQejkxMjdCdWptR0hsMUlsdUQxQjE2UUxsM0lLcGNlNlRsWFNfMjR6SldndWVIdDU1WEpwOVR3dm1rQmZrdWNKbXA3cEJLRXhhN0lxa1BXa3ZlMXJLZjZiOTk2RHRsXzM3NllNd21nd1FVdW1Damo3SEwtdWFzU2FKUFhwdw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQejkxMjdCdWptR0hsMUlsdUQxQjE2UUxsM0lLcGNlNlRsWFNfMjR6SldndWVIdDU1WEpwOVR3dm1rQmZrdWNKbXA3cEJLRXhhN0lxa1BXa3ZlMXJLZjZiOTk2RHRsXzM3NllNd21nd1FVdW1Damo3SEwtdWFzU2FKUFhwdw?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 21 Sep 2026 22:02:18 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:26"
    },
    {
      "source": "v.daum.net",
      "title_ko": "연준 기준금리 인상…원-달러 환율, 15거래일 만에 1380원대 재진입",
      "title_en": "",
      "summary_ko": "연준 기준금리 인상…원-달러 환율, 15거래일 만에 1380원대 재진입 관련 핵심 동향이 발표되었습니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. v.daum.net에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9oR0NVZXBMWWZPLU9ZYjBZNFozM05qZUE0eGV5R0tUTkVVSG1aeXRBRjhONmFnOC1xVU5Id05maklqS3pUb1h5X0ZpZjluZ0U?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9oR0NVZXBMWWZPLU9ZYjBZNFozM05qZUE0eGV5R0tUTkVVSG1aeXRBRjhONmFnOC1xVU5Id05maklqS3pUb1h5X0ZpZjluZ0U?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 20 Sep 2026 06:38:38 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:26"
    },
    {
      "source": "매일경제",
      "title_ko": "한은 \"기준금리 인상, 금융취약성 완화 기여\"",
      "title_en": "",
      "summary_ko": "한은 \"기준금리 인상, 금융취약성 완화 기여\" 매일경제 마켓. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 매일경제뿐만 아니라 문화일보, v.daum.net 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBFbXFCWUtZSGhkZ2hMTFpEUlRQRVo5QXd4QmpYTEt2eDVuU2RfY2tobDZ4NUdkamN0V2wwREFzRndQZERYbGxRYnlvNlBRVUFOLXc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBFbXFCWUtZSGhkZ2hMTFpEUlRQRVo5QXd4QmpYTEt2eDVuU2RfY2tobDZ4NUdkamN0V2wwREFzRndQZERYbGxRYnlvNlBRVUFOLXc?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 22 Sep 2026 07:52:10 GMT",
      "related_articles": [
        {
          "source": "오피니언뉴스",
          "title_ko": "[최석원 칼럼] 美·日 기준금리 인상은 시장 신뢰 회복의 계기",
          "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5yWGFEelViWW9DMjBXM2lMSU4tUXRsS09WQ1UtVjhwaFdvSDRhbUlLQkltWll0dktaN2VWOHFKZTRPWUM1Q0hXN1BWdEFkRzBpQ0JjZHhCTXNiYlpVTkpHMzdKOFhVSi1oV045cnJyNUpwQQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5yWGFEelViWW9DMjBXM2lMSU4tUXRsS09WQ1UtVjhwaFdvSDRhbUlLQkltWll0dktaN2VWOHFKZTRPWUM1Q0hXN1BWdEFkRzBpQ0JjZHhCTXNiYlpVTkpHMzdKOFhVSi1oV045cnJyNUpwQQ?oc=5"
        },
        {
          "source": "아시아경제",
          "title_ko": "[사설]기준금리 인상, 시차까지 살펴 취약차주 점검해야",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5SQmNrVXBMRVZuVTBGR0JuWWNfcGZQRTYwck5DS1dod0lISWF2N2VSV0dHdi1jeUhUUy1CbkxFSHgxbkxkVXBNUkZsbE9PS3J6bGQ1ekJHOVQwVXM1TC1UYQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5SQmNrVXBMRVZuVTBGR0JuWWNfcGZQRTYwck5DS1dod0lISWF2N2VSV0dHdi1jeUhUUy1CbkxFSHgxbkxkVXBNUkZsbE9PS3J6bGQ1ekJHOVQwVXM1TC1UYQ?oc=5"
        },
        {
          "source": "v.daum.net",
          "title_ko": "\"연준 기준금리 5% 이상으로 올릴수 있어\"…BofA 경고",
          "original_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE40Mi1pdFNpM0dxWnZFVmJ2RFJZYXZiTEtoWEJQNkw0QkhvSTVGbUxUNEVhaHpRWENIYmlSd1pZZ1FkRnAxdVlPS05UajgxVms?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE40Mi1pdFNpM0dxWnZFVmJ2RFJZYXZiTEtoWEJQNkw0QkhvSTVGbUxUNEVhaHpRWENIYmlSd1pZZ1FkRnAxdVlPS05UajgxVms?oc=5"
        },
        {
          "source": "문화일보",
          "title_ko": "한국은행의 경고… 금리인상 한파, 내년 봄 취약가계·중소기업 덮친다",
          "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE8wVlFtNnQtWUlJbVE3emRhNGdnWVpOelFSdUo2b1J6eU9RZWxhaGIwUlg3d3pveWVaNHBmRGw4WTFhN0xRSXp3eHI4YnZ0aXE0?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE8wVlFtNnQtWUlJbVE3emRhNGdnWVpOelFSdUo2b1J6eU9RZWxhaGIwUlg3d3pveWVaNHBmRGw4WTFhN0xRSXp3eHI4YnZ0aXE0?oc=5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:26"
    },
    {
      "source": "아주경제",
      "title_ko": "[뉴욕증시 마감] 3대지수 일제히 하락…美국채금리 급등·기준금리 인상 가능성 여파",
      "title_en": "",
      "summary_ko": "[뉴욕증시 마감] 3대지수 일제히 하락…美국채금리 급등·기준금리 인상 가능성 여파 아주경제. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 아주경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9ldXR5a1hQZ1haZnR5ZF9ZNGtQNXIxMWJEcW5DaXRINEhlMDVLZHc2VDhhUzdkUmUtVEpma3J0em1MeHZDUWhqemZ2RERsRWhOejY1Sy1QN0ViZ9IBWEFVX3lxTFBZZURvQUdtWEV6VmM2d09La2ZUN1pVUFBGVlFWRXEyNEl3UU9LSW9MNENZbDM2dFZJdUZIOE05YlprdHFGRGgweHRSNklEWHU3ZFB1dS1wcmU?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9ldXR5a1hQZ1haZnR5ZF9ZNGtQNXIxMWJEcW5DaXRINEhlMDVLZHc2VDhhUzdkUmUtVEpma3J0em1MeHZDUWhqemZ2RERsRWhOejY1Sy1QN0ViZ9IBWEFVX3lxTFBZZURvQUdtWEV6VmM2d09La2ZUN1pVUFBGVlFWRXEyNEl3UU9LSW9MNENZbDM2dFZJdUZIOE05YlprdHFGRGgweHRSNklEWHU3ZFB1dS1wcmU?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 24 Sep 2026 00:56:02 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:26"
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
      "pub_date": "Wed, 16 Sep 2026 18:09:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:26"
    },
    {
      "source": "v.daum.net",
      "title_ko": "금통위원 \"성장세에도 소득 개선 차등화⋯추가 금리 인상 속도 살펴야\"",
      "title_en": "",
      "summary_ko": "금통위원 \"성장세에도 소득 개선 차등화⋯추가 금리 인상 속도 살펴야\" v.daum.net. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. v.daum.net에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9ua0FoODk2WWlvTzdtN3Q4MzFiRjg2WGtOWXBvMGxUMm56dFQ0WXZKUm5Yc2NZVTFDb0hnSTNobU8wdlRqTWJkVncxOEJRbHM?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9ua0FoODk2WWlvTzdtN3Q4MzFiRjg2WGtOWXBvMGxUMm56dFQ0WXZKUm5Yc2NZVTFDb0hnSTNobU8wdlRqTWJkVncxOEJRbHM?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 22 Sep 2026 02:02:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:26"
    },
    {
      "source": "국민일보",
      "title_ko": "[단독] “가계부채 위험” 경고한 한은… 사내대출 증가로 ‘엇박자’",
      "title_en": "",
      "summary_ko": "[단독] “가계부채 위험” 경고한 한은… 사내대출 증가로 ‘엇박자’ 국민일보. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 국민일보에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE54NU0yT1IzNVNNSl9WU0R5TDFja1JrOGU5TFJoamNtZ0lOSnd6SFR5OHM0aFVXVE1rNlBIQ09KVFdqRFk5a0VVVWo3UExZS0Z2cHpFV1FDOE9IZV9UT2h6SEstTU9scW_SAWxBVV95cUxPY0VDVjNYTy1nYy1wZWV3TTY2YmhTZl9jeWcyN2NRcUF2X0tMdjYwUWEzZVlENlhYazNtLXVQRzBtVDhWUFBZbEF2ZUc5ZV9HblA3VVBINEFmb01JRTZNT1JRbldsSm1YU0pnWVc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE54NU0yT1IzNVNNSl9WU0R5TDFja1JrOGU5TFJoamNtZ0lOSnd6SFR5OHM0aFVXVE1rNlBIQ09KVFdqRFk5a0VVVWo3UExZS0Z2cHpFV1FDOE9IZV9UT2h6SEstTU9scW_SAWxBVV95cUxPY0VDVjNYTy1nYy1wZWV3TTY2YmhTZl9jeWcyN2NRcUF2X0tMdjYwUWEzZVlENlhYazNtLXVQRzBtVDhWUFBZbEF2ZUc5ZV9HblA3VVBINEFmb01JRTZNT1JRbldsSm1YU0pnWVc?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 20 Sep 2026 17:10:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:26"
    },
    {
      "source": "Reuters",
      "title_ko": "남아프리카공화국은 이란의 전쟁 가격 충격을 이유로 기준 금리를 인상했다.",
      "title_en": "South Africa raises interest rate, citing Iran war price shocks",
      "summary_ko": "남아프리카공화국, 이란의 전쟁 가격 충격을 이유로 기준 금리 인상 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Reuters, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNV2FXZDZQMjRCRlRDREtBYmlpenVnV0d4eFdWNVk5RFhhX3FTTE1teUtsaTRyR3U4VldvZThscHM5blJ5cUdNWnNQa2dnTWYzYlh3NXRpREJSMlFLLUVibE9OYjIxelpqS3lHRE9kN1JVSFM1Z1hxTGU1VXJvSnpWV0k4Vk5YTDlKM0E5QXVDMkRhODJXT1VlcklqejF6OFZWTUNHZE9wMFg?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxNV2FXZDZQMjRCRlRDREtBYmlpenVnV0d4eFdWNVk5RFhhX3FTTE1teUtsaTRyR3U4VldvZThscHM5blJ5cUdNWnNQa2dnTWYzYlh3NXRpREJSMlFLLUVibE9OYjIxelpqS3lHRE9kN1JVSFM1Z1hxTGU1VXJvSnpWV0k4Vk5YTDlKM0E5QXVDMkRhODJXT1VlcklqejF6OFZWTUNHZE9wMFg%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Wed, 23 Sep 2026 14:42:39 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "BofA는 Nvidia Trading을 AI 위험에 대해 최대 50% 할인된 가격으로 보고 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNQk9Cb09xMFlNSGtYajJoVkRCMVFXdFJCWXVWcmNQZnBEV3Qzei1oZEVMQUhkNDZ6X3RBUnk0UHc4b0VQaWlhS0ZqUnBJNXpVX3dsU3FESW5KTDZOZjNvLVlwTnl3VXNkWWQzR1NsSl8wczNrR0xEcmgtQ1RjeDRsdlFlTEt2RHUybGw4WXlBVjhGcmQ4am9qelFhMVhha1FvamF2S2k1TTVZTjJK?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxNQk9Cb09xMFlNSGtYajJoVkRCMVFXdFJCWXVWcmNQZnBEV3Qzei1oZEVMQUhkNDZ6X3RBUnk0UHc4b0VQaWlhS0ZqUnBJNXpVX3dsU3FESW5KTDZOZjNvLVlwTnl3VXNkWWQzR1NsSl8wczNrR0xEcmgtQ1RjeDRsdlFlTEt2RHUybGw4WXlBVjhGcmQ4am9qelFhMVhha1FvamF2S2k1TTVZTjJK%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "백악관 관계자는 Moonshot AI가 중국의 수출 금지에도 불구하고 Nvidia의 칩에 액세스했다고 밝혔습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNN0tXOXpfRFVEU3RYV29odERGREg0dXNxdjZaS2lPY0R4THN2LUpnOW5YdFlRa2dsaGhpZkhYWHBLZFhoYnM1ZnZmXzh5aEh2TVZ0MkJieENRWEVITVBJdEE4aDNvZG9rTUZYbTh0dEpBSFU3blg4SXFSZDZoTDJpd2NRWdIBiAFBVV95cUxOTTF3R3BBVS1mTWNxUnZRVHlzTmVqbUJQVTNoemdldnNXVmFxQXQxeDlCU0U5Uld6bDZPQ2JxTFdQdkZ5STk2TVlZQ0lTaml6QmxhYzlPZUt5WEMtdXA4M0dlRExuVkhXak1SU3pWWHlicXdPWUxUazZDQUVpdExXR2pHX3ZoMUwt?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMigwFBVV95cUxNN0tXOXpfRFVEU3RYV29odERGREg0dXNxdjZaS2lPY0R4THN2LUpnOW5YdFlRa2dsaGhpZkhYWHBLZFhoYnM1ZnZmXzh5aEh2TVZ0MkJieENRWEVITVBJdEE4aDNvZG9rTUZYbTh0dEpBSFU3blg4SXFSZDZoTDJpd2NRWdIBiAFBVV95cUxOTTF3R3BBVS1mTWNxUnZRVHlzTmVqbUJQVTNoemdldnNXVmFxQXQxeDlCU0U5Uld6bDZPQ2JxTFdQdkZ5STk2TVlZQ0lTaml6QmxhYzlPZUt5WEMtdXA4M0dlRExuVkhXak1SU3pWWHlicXdPWUxUazZDQUVpdExXR2pHX3ZoMUwt%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "노르웨이 중앙은행은 기준금리 인상, 다시 인상할 수도 있음",
          "original_url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOMEVOZzdaZ2dDRHE4QTFPR3N5UkNQVlFCdWJNUVpLel9ZWGtEREJaTmdlQ3huRFh2Z2l3cWlkd0Z2LUdIYUpjdXpRSmJUTG9DUTZhTk1pRkJOajVpNFp5cW15a0tKR3lHdWdrR1p1MUt1QVdzc1p4NHMzLUkyeG1IV2R2bXVsLWRvUXdtRkVkYVVuSDNaZWFHaG5kdC0zYkdoLVdmc01aOA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipwFBVV95cUxOMEVOZzdaZ2dDRHE4QTFPR3N5UkNQVlFCdWJNUVpLel9ZWGtEREJaTmdlQ3huRFh2Z2l3cWlkd0Z2LUdIYUpjdXpRSmJUTG9DUTZhTk1pRkJOajVpNFp5cW15a0tKR3lHdWdrR1p1MUt1QVdzc1p4NHMzLUkyeG1IV2R2bXVsLWRvUXdtRkVkYVVuSDNaZWFHaG5kdC0zYkdoLVdmc01aOA%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)의 금리 인상 결정의 주요 시사점",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQa2RlWUd3LTlsVnAtWXZTVVc2WnZtME1KWThQN2FiVjZBaXZHMkh6MXduSVNyUHlYYjlZb1ctU2hkVWtjQlBwMjdHdDlobGM2U1pkTlRUdU9zYTFyZktDSDRoVEwwTlJlaFFaY3lSeVcxT3ZzMFZKOFBKa2FSTTQxcGRCSjRFemtmQ2kxcUdNWXR1WHFpTHlwd0dMcWxwWTZDUTFsaGhoaHVUZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxQa2RlWUd3LTlsVnAtWXZTVVc2WnZtME1KWThQN2FiVjZBaXZHMkh6MXduSVNyUHlYYjlZb1ctU2hkVWtjQlBwMjdHdDlobGM2U1pkTlRUdU9zYTFyZktDSDRoVEwwTlJlaFFaY3lSeVcxT3ZzMFZKOFBKa2FSTTQxcGRCSjRFemtmQ2kxcUdNWXR1WHFpTHlwd0dMcWxwWTZDUTFsaGhoaHVUZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:33"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Nvidia의 주식은 가치 평가가 하락함에 따라 경고 신호를 깜박이고 있습니다.",
      "title_en": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Falls",
      "summary_ko": "Nvidia의 주식은 가치 평가 하락으로 경고 신호를 보내고 있습니다. Bloomberg.com. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOMmZza3lFQmV4Y3NTNVlkOThiYTlkUWFGY1lPUWF1SEpPRkRNXy1GRnpNYWlDa1JqdEJRejYyVF9mSlQ2eldpbGR0dFRRM1dWVS1oY1RmMGNqRy1aVExud1duUXhTZHdZTW9SU2J6aVBrMTVUVmNubDlQc3F6TjNHem4zWTM1dlp6dWFtbzd6d3ZOOE43NDNXYkpGMzMwR1NqQ2VfT3FPVGMtbEJHdzFMNQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOMmZza3lFQmV4Y3NTNVlkOThiYTlkUWFGY1lPUWF1SEpPRkRNXy1GRnpNYWlDa1JqdEJRejYyVF9mSlQ2eldpbGR0dFRRM1dWVS1oY1RmMGNqRy1aVExud1duUXhTZHdZTW9SU2J6aVBrMTVUVmNubDlQc3F6TjNHem4zWTM1dlp6dWFtbzd6d3ZOOE43NDNXYkpGMzMwR1NqQ2VfT3FPVGMtbEJHdzFMNQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Tue, 22 Sep 2026 17:46:02 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia가 AI의 규칙을 만들고 있는 모습을 시청하세요",
          "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPcEtKYkpZSnowUHFQb2YwVzh2aHdkU2FlWkF6TmNTQjJIUG5JVF8zRU5FWUZxNUJPeHJXaWpQR0FiOW5HY2ItNHNFdnRteVR1UDBnaTFiakhCVzdUazFBdS1WMkZTMS1US1RKSUdvY1FxNm1KbUk3Mk5yOU52d0RSVV9aX0Mwdl9QUVN3RVFjWTFuY0stb1hIbmJ4ZjlRQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxPcEtKYkpZSnowUHFQb2YwVzh2aHdkU2FlWkF6TmNTQjJIUG5JVF8zRU5FWUZxNUJPeHJXaWpQR0FiOW5HY2ItNHNFdnRteVR1UDBnaTFiakhCVzdUazFBdS1WMkZTMS1US1RKSUdvY1FxNm1KbUk3Mk5yOU52d0RSVV9aX0Mwdl9QUVN3RVFjWTFuY0stb1hIbmJ4ZjlRQQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia는 고객에게 새로운 Rubin 디자인을 제공하는 과정을 홍보합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPNk9DR20yVlp0dThjRlo3SE1qc3FtTXpYODBRY2ZGRHlCUHBvY1ZpM2lCYkpyNmRfdFdXZzJ6ZmxSdXlnSlFDSGZiZkJSQ1FHX3F3UUtTV1RxT0hyWlkyNExqY250LVZkWXNGaEljWE9sbU9aekRQeGxwaUk2MEgzWEt4VkJKTFZZTE56MWlxWlRzRHNmaFpGcnBSbXZjcDF3QmlydHdVR3RTRUxaSHhF?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPNk9DR20yVlp0dThjRlo3SE1qc3FtTXpYODBRY2ZGRHlCUHBvY1ZpM2lCYkpyNmRfdFdXZzJ6ZmxSdXlnSlFDSGZiZkJSQ1FHX3F3UUtTV1RxT0hyWlkyNExqY250LVZkWXNGaEljWE9sbU9aekRQeGxwaUk2MEgzWEt4VkJKTFZZTE56MWlxWlRzRHNmaFpGcnBSbXZjcDF3QmlydHdVR3RTRUxaSHhF%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia는 AI 붐이 온전하다는 예측으로 칩 주식 상승을 촉발했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPYmFTYjRhRjAzTnZXU3lJa1V4a3ZlVy1INVptbHZUc3V6b2NyOGJFRnRtQTFWQ2lrU2pYc0M3N01TcW9tVkh6ZmRQTU81OUd1VlBnQ0o1b3pZSlFqZmtSM1NjYzd5T2xnZE12clJPM3ZlUjdhdWxfbVB4MlQ1UWowZGhNNmxYZXNJRVdGVk1nZ3ZIMjlZdU5WWEg4ak5mYmUy?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMioAFBVV95cUxPYmFTYjRhRjAzTnZXU3lJa1V4a3ZlVy1INVptbHZUc3V6b2NyOGJFRnRtQTFWQ2lrU2pYc0M3N01TcW9tVkh6ZmRQTU81OUd1VlBnQ0o1b3pZSlFqZmtSM1NjYzd5T2xnZE12clJPM3ZlUjdhdWxfbVB4MlQ1UWowZGhNNmxYZXNJRVdGVk1nZ3ZIMjlZdU5WWEg4ak5mYmUy%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia는 Hugging Face를 129억 달러에 인수하기로 합의했다고 The Information이 보도했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQcnRUV293OVVFOWdRY2o0c0tqNDhzYzRfMHVQdFBrT3ZZdmxiRGVOeDl0d3JiZmN6NnVBY3JvODV5MTdlRXZhWlZuM3ZfcldFSXlDR0RLNHVvYUFrVmR6VXBoR21tWlpXWE1YZ2ItQXJFeHAxWllIVnBtXzB1ci1uUHp2d296ZlRzU0VYOGlkbUlBZnl3X2FtV2tYaE5TdHQ5V1d1MTdVVloyNjhjS19mbkJtbDlBOXBLT2R6ZVdB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivgFBVV95cUxQcnRUV293OVVFOWdRY2o0c0tqNDhzYzRfMHVQdFBrT3ZZdmxiRGVOeDl0d3JiZmN6NnVBY3JvODV5MTdlRXZhWlZuM3ZfcldFSXlDR0RLNHVvYUFrVmR6VXBoR21tWlpXWE1YZ2ItQXJFeHAxWllIVnBtXzB1ci1uUHp2d296ZlRzU0VYOGlkbUlBZnl3X2FtV2tYaE5TdHQ5V1d1MTdVVloyNjhjS19mbkJtbDlBOXBLT2R6ZVdB%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:36"
    },
    {
      "source": "Bloomberg",
      "title_ko": "엔비디아는 AI를 예측한다",
      "title_en": "Nvidia Predicts AI-Fueled Sales Surge Will Extend Into 2028",
      "summary_ko": "엔비디아는 AI를 예측한다 관련 핵심 동향이 발표되었습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPRm1qOEpKb1B2M3BYMElNRW5qcmZ4ekQ4U1V0X3NPbTk4QUFPX2xBSG40WDlCRjFhcjJfakZ1WWpIcldJT1NlYWF2ZFk3R19jdDNlX2I2SVRKZVRObHZMWjdYTHljb3FSODNNYVlsakhRQldJYUV5U0tGWjF0MXRwMnJmTHBOZVpjMWxUbTFGV0I1T0o3azBUSzBOSXU1SzY5QkFIU2NzUWlBZw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxPRm1qOEpKb1B2M3BYMElNRW5qcmZ4ekQ4U1V0X3NPbTk4QUFPX2xBSG40WDlCRjFhcjJfakZ1WWpIcldJT1NlYWF2ZFk3R19jdDNlX2I2SVRKZVRObHZMWjdYTHljb3FSODNNYVlsakhRQldJYUV5U0tGWjF0MXRwMnJmTHBOZVpjMWxUbTFGV0I1T0o3azBUSzBOSXU1SzY5QkFIU2NzUWlBZw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Wed, 26 Aug 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "트럼프의 Nvidia 거래로 아르메니아가 놀라운 AI ​​핫스팟으로 변모",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQamxLc3VXWWlmSHd3LWJxNXV5UVRFY1VSVk5vZFppalNfNkdZOExXSnB2QjBMTWV1Wkx6czIzdUlKWjlKb2pLdzFsQW5sMW9mdl9salBDcXM1WHdaQmVoNXNzNjU2MUVwNEp5VllQMDhnWDRIcVVGVEgwTDVON1l3dVVJclJXbllzNVhXSk00X0FmVWxUX00yVm1GQmJVUDI2YVd4UXQ3X28?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxQamxLc3VXWWlmSHd3LWJxNXV5UVRFY1VSVk5vZFppalNfNkdZOExXSnB2QjBMTWV1Wkx6czIzdUlKWjlKb2pLdzFsQW5sMW9mdl9salBDcXM1WHdaQmVoNXNzNjU2MUVwNEp5VllQMDhnWDRIcVVGVEgwTDVON1l3dVVJclJXbllzNVhXSk00X0FmVWxUX00yVm1GQmJVUDI2YVd4UXQ3X28%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "엔비디아 CEO, 2030년 세상이 종말할 가능성은 '0%'",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPLXhIME9aMzVZRU5MZ1NnVTRlT2ZKUm1MU3BUUlYyS0x4R1pPQlJucHktcEZmS3hqOGRTZWRBQVpia3pQQTU5WWJmZmpTbUFremMzLU5jNmdqamxuR1p4VldhUjh1dkFoX3ptMHZ4Q3pUY3phSUxaOUVYMDlEUVVOSmFrUU5seVh3T3A0WVUzcDhvaFEtOHgyM1EzazR6STYweGdsM0JsNk9JR3piQzdsSQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxPLXhIME9aMzVZRU5MZ1NnVTRlT2ZKUm1MU3BUUlYyS0x4R1pPQlJucHktcEZmS3hqOGRTZWRBQVpia3pQQTU5WWJmZmpTbUFremMzLU5jNmdqamxuR1p4VldhUjh1dkFoX3ptMHZ4Q3pUY3phSUxaOUVYMDlEUVVOSmFrUU5seVh3T3A0WVUzcDhvaFEtOHgyM1EzazR6STYweGdsM0JsNk9JR3piQzdsSQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia 고객은 AI 관련 가격이 15% 이상 인상된다는 알림을 받았습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNeWxlMlJjV3JZVWZoeTJhRzlhTDJOenZaS195ZEl4a1NkWERBQUwyU2hQcXlTOEk2RkpqLW5OeWhybzlFbzFONVkyWHhjNWhnSEhZQUpJS2xlSU0wOUQ3b2NsZXd0RTdGMHZsQ25rYTI4aDNNOU05OEVHMHVuaXQ0N2NyUXQtN194VXhqQ0g1SlpwdFZrM3JEeTZvYjFfVWhJaC12NkRfWTE5bzZkMXNyTC1Xbk8?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxNeWxlMlJjV3JZVWZoeTJhRzlhTDJOenZaS195ZEl4a1NkWERBQUwyU2hQcXlTOEk2RkpqLW5OeWhybzlFbzFONVkyWHhjNWhnSEhZQUpJS2xlSU0wOUQ3b2NsZXd0RTdGMHZsQ25rYTI4aDNNOU05OEVHMHVuaXQ0N2NyUXQtN194VXhqQ0g1SlpwdFZrM3JEeTZvYjFfVWhJaC12NkRfWTE5bzZkMXNyTC1Xbk8%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia는 내년에 70%의 매출 성장을 예측하며 AI 지출 붐이 앞으로 몇 년 남았다는 신호입니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNVTdJRXVOXzFrQjZXaG1XeVpHNUg0UzBHMnZ0b3lUT1hCZktWajJhbkJfSmcweHEyVE9sNVdrOGx2MlFhUlZ2Z0xna3Jzd0gzWUJCdHR2MHN3Y0pqYURLQ0JQUmxfYVJpT3h3TEV4amE3TkR5SnlIa3A1NlRvcE16Y3NZbnNzQUVuRFlfS2lvUE81ajBta2hYaEp5Wk94c014b3lkQmg5S3N6WlMyWWc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNVTdJRXVOXzFrQjZXaG1XeVpHNUg0UzBHMnZ0b3lUT1hCZktWajJhbkJfSmcweHEyVE9sNVdrOGx2MlFhUlZ2Z0xna3Jzd0gzWUJCdHR2MHN3Y0pqYURLQ0JQUmxfYVJpT3h3TEV4amE3TkR5SnlIa3A1NlRvcE16Y3NZbnNzQUVuRFlfS2lvUE81ajBta2hYaEp5Wk94c014b3lkQmg5S3N6WlMyWWc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:37"
    },
    {
      "source": "Investing.com",
      "title_ko": "E.ON CEO, 기업에 전력망 공격 대비 경고",
      "title_en": "",
      "summary_ko": "E.ON CEO, 기업에 전력망 공격 대비 경고 Investing.com 한국어. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Investing.com에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9XdGR4a1hrZ1JfUkVONlBXRXVITHJrRjN5MklmV1ZKcmE0YmgyRld0cE5WZkU4cFVkRFNlQ1U0STdnRG1qNzdfTmdwSDB4Q1FicUZHY0NSd3JPSEp1cW5MX1liaGJYUktHc295eVd0SndFZWlTX0FF?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9XdGR4a1hrZ1JfUkVONlBXRXVITHJrRjN5MklmV1ZKcmE0YmgyRld0cE5WZkU4cFVkRFNlQ1U0STdnRG1qNzdfTmdwSDB4Q1FicUZHY0NSd3JPSEp1cW5MX1liaGJYUktHc295eVd0SndFZWlTX0FF?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 24 Sep 2026 11:06:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-24 20:01:37"
    },
    {
      "source": "Reuters",
      "title_ko": "베센트는 이란에 대한 압박을 강화하기 위해 미국이 매주 새로운 2차 제재를 가할 것으로 예상한다.",
      "title_en": "Bessent expects new US secondary sanctions weekly, aiming to increase pressure on Iran",
      "summary_ko": "베센트는 이란에 대한 압력을 강화하기 위해 매주 새로운 미국의 2차 제재를 기대합니다. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Bloomberg",
          "title_ko": "Bessent의 채권 이익은 미 국채/재무부수익(금리) Jump Again으로 전멸되었습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQUGphdmpYNEU1RGpsMEttVXdjbk81ck5UVXVNeHRxcXpDQWhTSU1ycTZIUUFSUEdNak9jdU9ZMkxPTnVWNTU3dXJXM0VVM1JSTmVYT3oxOGl6aHBvSV80RmZYOE1UcXp6djlUQTk3QzV3MzhtSWIyaGdJUkFEZUtzbnJZMUhZdTMyYjhFSGVod3Y3WXpsdjlYbW1OU01NOEtja3NUZEktb2hoaEJqYW13QTJBY1pnZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxQUGphdmpYNEU1RGpsMEttVXdjbk81ck5UVXVNeHRxcXpDQWhTSU1ycTZIUUFSUEdNak9jdU9ZMkxPTnVWNTU3dXJXM0VVM1JSTmVYT3oxOGl6aHBvSV80RmZYOE1UcXp6djlUQTk3QzV3MzhtSWIyaGdJUkFEZUtzbnJZMUhZdTMyYjhFSGVod3Y3WXpsdjlYbW1OU01NOEtja3NUZEktb2hoaEJqYW13QTJBY1pnZw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "베센트, BOJ에 금리 인상 압력 강화",
          "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPejVQaVFpejVVNUFJazJ2Q1N2cTFYUEx3NjdqcENpR1FDUmZ3aUNoMGdsakZsaVdERWt3OWtzQll5M2JRU1ZrV2hxV25pUno0ak10LVU5OTV5Nnd1X3ktZHloZ200aENaRjZCT18zbUZzLVNOSko5eDBKMGVmcGdVdm9Ma1pkakxaZnhqZktwS3F1cWZXRk54UVp2VlV2YkJkendNUXZUb0pXYmpMSmZPeG05Zmd1MzBfY2t4Qg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxPejVQaVFpejVVNUFJazJ2Q1N2cTFYUEx3NjdqcENpR1FDUmZ3aUNoMGdsakZsaVdERWt3OWtzQll5M2JRU1ZrV2hxV25pUno0ak10LVU5OTV5Nnd1X3ktZHloZ200aENaRjZCT18zbUZzLVNOSko5eDBKMGVmcGdVdm9Ma1pkakxaZnhqZktwS3F1cWZXRk54UVp2VlV2YkJkendNUXZUb0pXYmpMSmZPeG05Zmd1MzBfY2t4Qg%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent, AI 이점 홍보 실패로 미국 하이퍼스케일러 비난",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPX3lzR0RuekxkZHRza0VnNXI3WEVScWhYMnJ2Z2hzaFhjc29OSmo2R0N4Z2RqSW10TVM5dk9vSFJqSE43WUFvb3JJSkZieERwUGdjUUdIUms4SEFiUmdyQk1wOXJGR1JhcVpMcmc4eGNtLTdRVG1PZVZOUl83elE3cU9OVE1uVHhUd05QNWlpU0FLTXpUZGJXUmV0Wl9IeFFBcHdiYmM1bG14RmttR3JrVERxWQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPX3lzR0RuekxkZHRza0VnNXI3WEVScWhYMnJ2Z2hzaFhjc29OSmo2R0N4Z2RqSW10TVM5dk9vSFJqSE43WUFvb3JJSkZieERwUGdjUUdIUms4SEFiUmdyQk1wOXJGR1JhcVpMcmc4eGNtLTdRVG1PZVZOUl83elE3cU9OVE1uVHhUd05QNWlpU0FLTXpUZGJXUmV0Wl9IeFFBcHdiYmM1bG14RmttR3JrVERxWQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Bessent는 미국 부채 시장의 긴장에 대한 두려움을 억제합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQdmNsa1QyN3lTZU1IX1hDN0VjWHI3M2pQbW1IU3N5ZHJMQTBna3hkNUtYWFRNa2NBaVRTRlM3eVVxOVFHMHhLaUJBX0tqWi1WY0lTbkwyVGFfMTNNWTdVTk5CQVRUUl9pcG1HQXR0MDhnQTlFRGJtaU5xZFRBME5zVU1ZdGxCV0NDVDBpOVdCSVpmbHk3OHh2azFvXzlsR0E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxQdmNsa1QyN3lTZU1IX1hDN0VjWHI3M2pQbW1IU3N5ZHJMQTBna3hkNUtYWFRNa2NBaVRTRlM3eVVxOVFHMHhLaUJBX0tqWi1WY0lTbkwyVGFfMTNNWTdVTk5CQVRUUl9pcG1HQXR0MDhnQTlFRGJtaU5xZFRBME5zVU1ZdGxCV0NDVDBpOVdCSVpmbHk3OHh2azFvXzlsR0E%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-24 20:01:39"
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
