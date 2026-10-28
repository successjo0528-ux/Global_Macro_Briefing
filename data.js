window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-10-29 05:01:35",
    "date_str": "2026년 10월 29일 (목)",
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
      "price": 3.995,
      "previous_close": 4.08,
      "change": -0.085,
      "change_percent": -2.08,
      "display_price": "3.995%",
      "status": "down",
      "history": [
        4.08,
        4.063,
        4.022,
        4.032,
        4.025,
        4.04,
        3.995
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-10-28 20:00:39"
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
      "price": 5.045,
      "previous_close": 5.117,
      "change": -0.072,
      "change_percent": -1.41,
      "display_price": "5.045%",
      "status": "down",
      "history": [
        5.117,
        5.146,
        4.953,
        4.988,
        4.986,
        4.993,
        5.045
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-10-28 20:00:39",
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
      "price": 5.361,
      "previous_close": 5.425,
      "change": -0.064,
      "change_percent": -1.18,
      "display_price": "5.361%",
      "status": "down",
      "history": [
        5.425,
        5.439,
        5.287,
        5.315,
        5.301,
        5.305,
        5.361
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-10-28 20:00:40"
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
      "price": 102.14,
      "previous_close": 101.78,
      "change": 0.36,
      "change_percent": 0.35,
      "display_price": "102.14 pt",
      "status": "up",
      "history": [
        101.78,
        101.61,
        101.81,
        101.96,
        102.32,
        102.14
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-10-28 20:00:40"
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
      "price": 157.881,
      "previous_close": 158.523,
      "change": -0.642,
      "change_percent": -0.4,
      "display_price": "157.88엔",
      "status": "down",
      "history": [
        158.523,
        158.268,
        158.132,
        156.494,
        156.83,
        157.528,
        157.881
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-10-28 20:00:40"
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
      "price": 4076.9,
      "previous_close": 4150.0,
      "change": -73.1,
      "change_percent": -1.76,
      "display_price": "$4,076.90",
      "status": "down",
      "history": [
        4150.0,
        4060.4,
        4007.9,
        4038.4,
        4074.6,
        4076.9
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-10-28 20:00:40"
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
      "price": 102.53,
      "previous_close": 97.15,
      "change": 5.38,
      "change_percent": 5.54,
      "display_price": "$102.53",
      "status": "up",
      "history": [
        97.15,
        99.47,
        103.27,
        101.76,
        99.9,
        102.53
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-10-28 20:00:40"
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
      "price": 81602.65,
      "previous_close": 81311.89,
      "change": 290.76,
      "change_percent": 0.36,
      "display_price": "$81,603",
      "status": "up",
      "history": [
        81311.891,
        81074.188,
        80790.836,
        80024.008,
        80006.656,
        80805.078,
        81602.648
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-10-28 20:00:41"
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
      "price": 1020.7,
      "previous_close": 321.6,
      "change": 699.1,
      "change_percent": 217.38,
      "display_price": "$1,020.7B (약 10,207억$)",
      "status": "up",
      "history": [
        19.4,
        57.6,
        982.5,
        1052.5,
        289.8,
        321.6,
        1020.7
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-10-28 20:00:41"
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
      "price": 7744.38,
      "previous_close": 7690.73,
      "change": 53.65,
      "change_percent": 0.7,
      "display_price": "7,744.38",
      "status": "up",
      "history": [
        7712.57,
        7757.17,
        7663.43,
        7623.68,
        7676.77,
        7722.6,
        7744.38
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-10-28 20:00:41"
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
      "price": 29813.156,
      "previous_close": 29529.35,
      "change": 283.806,
      "change_percent": 0.96,
      "display_price": "29,813.16",
      "status": "up",
      "history": [
        29490.279,
        29822.52,
        28958.689,
        28957.529,
        29273.4,
        29651.439,
        29813.156
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-10-28 20:00:42"
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
      "price": 11684.0,
      "previous_close": 11316.34,
      "change": 367.66,
      "change_percent": 3.25,
      "display_price": "11,684.00",
      "status": "up",
      "history": [
        11283.81,
        11505.56,
        10731.98,
        10779.46,
        11083.47,
        11482.5,
        11684.0
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-10-28 20:00:42"
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
      "price": 16.92,
      "previous_close": 17.31,
      "change": -0.39,
      "change_percent": -2.25,
      "display_price": "16.92",
      "status": "down",
      "history": [
        17.31,
        16.68,
        19.03,
        19.45,
        18.39,
        17.52,
        16.92
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-10-28 20:00:42"
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
      "price": 1341.3,
      "previous_close": 1330.0,
      "change": 11.3,
      "change_percent": 0.85,
      "display_price": "1,341.30원",
      "status": "up",
      "history": [
        1330.0,
        1323.94,
        1325.59,
        1325.99,
        1321.76,
        1324.77,
        1341.3
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-10-28 20:00:42",
      "fx_averages": {
        "avg_1y": 1446.6,
        "avg_3y": 1401.0
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
      "price": 6012.44,
      "previous_close": 5768.01,
      "change": 244.43,
      "change_percent": 4.24,
      "display_price": "6,012.44",
      "status": "up",
      "history": [
        5552.74,
        5735.66,
        5533.77,
        5550.3,
        5469.47,
        5638.34
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-10-28 20:00:43"
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
      "price": 771.28,
      "previous_close": 808.89,
      "change": -37.61,
      "change_percent": -4.65,
      "display_price": "771.28",
      "status": "down",
      "history": [
        781.97,
        792.76,
        764.1,
        751.69,
        727.21,
        743.83
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-10-28 20:00:43"
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
      "updated_at": "2026-10-28 20:00:43"
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
      "updated_at": "2026-10-28 20:00:44"
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
      "price": 165.88,
      "previous_close": 156.58,
      "change": 9.3,
      "change_percent": 5.94,
      "display_price": "$165.88",
      "status": "up",
      "history": [
        153.99,
        156.88,
        149.06,
        151.26,
        152.72,
        157.46,
        165.88
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-10-28 20:00:44"
    }
  ],
  "news": [
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
      "crawled_at": "2026-10-28 20:00:54"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Warsh, FOMC 회의 일정이 내년 가을부터 변경될 것이라고 밝혔습니다.",
      "title_en": "Warsh Says FOMC Meeting Schedule Will Change as of Next Fall",
      "summary_ko": "Warsh, FOMC 회의 일정이 내년 가을부터 변경될 것이라고 Bloomberg.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg뿐만 아니라 CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNMmFaSnVIZ25QMm1nYTFDalFNWnhBNmRWc1VlV1RlTDhaT0IxSFVEc2pZVmFuay1UYUszVVpOc0pvTmFXZG42QmJpQW1fZnRLS0EtbGtzNjhtazl5OWttS05aVFROWG5ReVdHNGsxT0FYdVFOR0JpYVJ4YUpvbzN5U1FNY0RjTWgtcWFFUGVyNUVpbFhLNHEycXh0eWN0bDFNd09mY3B3?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxNMmFaSnVIZ25QMm1nYTFDalFNWnhBNmRWc1VlV1RlTDhaT0IxSFVEc2pZVmFuay1UYUszVVpOc0pvTmFXZG42QmJpQW1fZnRLS0EtbGtzNjhtazl5OWttS05aVFROWG5ReVdHNGsxT0FYdVFOR0JpYVJ4YUpvbzN5U1FNY0RjTWgtcWFFUGVyNUVpbFhLNHEycXh0eWN0bDFNd09mY3B3%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 28 Oct 2026 18:56:06 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) 2026년 10월 FOMC 회의: Kevin Warsh의 정책 결정을 언제 어디서 볼 수 있나요?",
          "original_url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPTlNtNTBVY09DdGVxbFpiMnhZQW0yYnloLW1xWmJydF9QclIxWjNkSXhfak55aHFzUzBZV0RsNkFlTWpRTTl5ZjZvS2NubXF1cVEtMk9SNW9zUzIzNW9RcHpKT1JJOUJ2RVJjSDY2cFhVU0kweUlBRzhibWNwQTJxZGFYVW0xZkdkMDJQdzZIc01OX2FuMUxhM29ZWDJzVGxjR0pQdWphdGVhRTFGNm5ER3NtM1N6Ylhrc1VwMndB0gHDAUFVX3lxTE1zVG9PaEtVMklXdlZBZWY5NUFibHlzX2VTbzk5d0hsaXBuVzRJTnJLUU1obUtuMlljTlVtU2ZTRWVLWG4wQTc4cjhCdHlkTGtQcE5DRTFXWWgxeU9namhDNWxVV0dUZ3RNNUs0cGx5ZkFDa0xQWG16QzBPM1JZN0dJdDN3S3hiMDdIdUJWclhEa2Q0MFp3MHBydTdwa3hTaGdJQ0dwODlnTnBUQWNKajBOWjBLR2JMLXNYQnRwZUg4alM0SQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivgFBVV95cUxPTlNtNTBVY09DdGVxbFpiMnhZQW0yYnloLW1xWmJydF9QclIxWjNkSXhfak55aHFzUzBZV0RsNkFlTWpRTTl5ZjZvS2NubXF1cVEtMk9SNW9zUzIzNW9RcHpKT1JJOUJ2RVJjSDY2cFhVU0kweUlBRzhibWNwQTJxZGFYVW0xZkdkMDJQdzZIc01OX2FuMUxhM29ZWDJzVGxjR0pQdWphdGVhRTFGNm5ER3NtM1N6Ylhrc1VwMndB0gHDAUFVX3lxTE1zVG9PaEtVMklXdlZBZWY5NUFibHlzX2VTbzk5d0hsaXBuVzRJTnJLUU1obUtuMlljTlVtU2ZTRWVLWG4wQTc4cjhCdHlkTGtQcE5DRTFXWWgxeU9namhDNWxVV0dUZ3RNNUs0cGx5ZkFDa0xQWG16QzBPM1JZN0dJdDN3S3hiMDdIdUJWclhEa2Q0MFp3MHBydTdwa3hTaGdJQ0dwODlnTnBUQWNKajBOWjBLR2JMLXNYQnRwZUg4alM0SQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:00:57"
    },
    {
      "source": "Reuters",
      "title_ko": "VIEW, FOMC, 금리 안정 유지, 시장 소폭 상승",
      "title_en": "VIEW FOMC holds rates steady, markets rise modestly",
      "summary_ko": "VIEW, FOMC, 금리 안정 유지, 시장 소폭 상승 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNR3M1cWh6azZyTHVTWV9qanQ0LXVsVHVNRzdLeUlSbEx3aVYta0xwa3VPODBoc1JvUEZMRVNGQ045ZkZZajVCTmhzZGdPcmFOaHhJelg0OHRIMjQyZnlXemdNbU42cWFhS3dQaExlT3RtLWpiTmxlVUMtYzZ4dHhYNGdFc1FtRlJ4SUtZQlFjWUE3N2JqNUtHdHctdUFtWWZBd1E?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNR3M1cWh6azZyTHVTWV9qanQ0LXVsVHVNRzdLeUlSbEx3aVYta0xwa3VPODBoc1JvUEZMRVNGQ045ZkZZajVCTmhzZGdPcmFOaHhJelg0OHRIMjQyZnlXemdNbU42cWFhS3dQaExlT3RtLWpiTmxlVUMtYzZ4dHhYNGdFc1FtRlJ4SUtZQlFjWUE3N2JqNUtHdHctdUFtWWZBd1E%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 28 Oct 2026 19:35:46 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "분석: 모두가 연준이 10월에 금리를 동결할 것으로 예상하고 있습니다. Kevin Warsh는 우리 모두를 놀라게 할 수 있습니다",
          "original_url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNZFl6VlNnRU5TX2V4NEx3eEEwWDhfZGMxS3FsUVd2Z0FMZzJLcnNfOEQ1Z2xxYmc5Nk1SYVNFQkhQeFZiX21fdFJTOWZ4aEhvTU1mQTRIdEFYMms2Q093RS0xMURjb3RwTVNfQXp0cVhjTHpGUEdENzBHeERCYW84dnRkRE1DVjRuTXo5c3M5aEkzOXNkMnlFX9IBngFBVV95cUxQUjQ0SjZBMDNsSDI4cDdJVTgtUFlVdnlhQXN4ZjViU2R2bWdobHQ4RDM2cDVIc1J5RGJwOXZsNnRUQTh6QkFyVEFjbUc0blFvNUE4M2tZN1NnRTJhbnVLa1AxYkk3R0xCTUpQN1dRV0dNckx2NzFXZktaLW1QOXlCMVJmN1FfWjJNZmJma3hQcGZvQUF6NkNaZGwySWtmQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimAFBVV95cUxNZFl6VlNnRU5TX2V4NEx3eEEwWDhfZGMxS3FsUVd2Z0FMZzJLcnNfOEQ1Z2xxYmc5Nk1SYVNFQkhQeFZiX21fdFJTOWZ4aEhvTU1mQTRIdEFYMms2Q093RS0xMURjb3RwTVNfQXp0cVhjTHpGUEdENzBHeERCYW84dnRkRE1DVjRuTXo5c3M5aEkzOXNkMnlFX9IBngFBVV95cUxQUjQ0SjZBMDNsSDI4cDdJVTgtUFlVdnlhQXN4ZjViU2R2bWdobHQ4RDM2cDVIc1J5RGJwOXZsNnRUQTh6QkFyVEFjbUc0blFvNUE4M2tZN1NnRTJhbnVLa1AxYkk3R0xCTUpQN1dRV0dNckx2NzFXZktaLW1QOXlCMVJmN1FfWjJNZmJma3hQcGZvQUF6NkNaZGwySWtmQQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "월가는 연준(Fed)이 기준금리를 안정적으로 유지하고 다음 인상 가능성을 12월로 연기함에 따라 대부분 상승",
          "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPQVNrQUVwN1c3SjBCODU1TXUwRy1hQ2lIQUxFZkJ3dGhXa0NZalhVTFFoeTU4MlB3VDRwWE1QRktITG5FZnd1eUVDTjRUankwRGgzRkRKTGdwZDVDbWUyTWVKNlRKVld5RVdaTllzZkVhdXUzNkZUOU5RWWNOQVJTY2xuaDJZZXlybC05LXRmTmpPb2RvVlliLWxBUXZVRldXU3kyY2pWb1ZmZlFNUU1KMmN4aV9wMk9Lai01YXcza0JqdDQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxPQVNrQUVwN1c3SjBCODU1TXUwRy1hQ2lIQUxFZkJ3dGhXa0NZalhVTFFoeTU4MlB3VDRwWE1QRktITG5FZnd1eUVDTjRUankwRGgzRkRKTGdwZDVDbWUyTWVKNlRKVld5RVdaTllzZkVhdXUzNkZUOU5RWWNOQVJTY2xuaDJZZXlybC05LXRmTmpPb2RvVlliLWxBUXZVRldXU3kyY2pWb1ZmZlFNUU1KMmN4aV9wMk9Lai01YXcza0JqdDQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)이 금리를 안정적으로 유지하기로 한 결정의 주요 시사점",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNazA1c1dQMFJxcHlvOVpqYk1iUTk0ejhkRlVYc09KVm4yR1NqVjBvTU04MlE2U095QzBNTWZsbVlCcVpNRHNfb3pUSGJYM3QwZ3ZyeUlMS2V6UU1VUUtkdlVEcFI5aVAtSjNhWUhMTVE3UWg5dnRpXzNoZGt6S0trcXZnOW5NaDZkSVNob0N6WmczeUFEeEFWbjFfLWxxbi1janRWQ2ln?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxNazA1c1dQMFJxcHlvOVpqYk1iUTk0ejhkRlVYc09KVm4yR1NqVjBvTU04MlE2U095QzBNTWZsbVlCcVpNRHNfb3pUSGJYM3QwZ3ZyeUlMS2V6UU1VUUtkdlVEcFI5aVAtSjNhWUhMTVE3UWg5dnRpXzNoZGt6S0trcXZnOW5NaDZkSVNob0N6WmczeUFEeEFWbjFfLWxxbi1janRWQ2ln%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "워시",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPMWE0UWlwemdYNE5CaEZPSVBqZVNuSmlVSmIxWHV6R1hXa3lua1RReGpYaTEtZGttNzZoTU1XT3VGbjZWUmxFSWxnN21mMGlHVW1fazREOXdRZVk1ek9ya1JVMVNWM0NoVEVzRHY2bWJSYy1JRUtrNElLb3BPSjJzNm9wWmpmYTU3OXRIQ0E1dG82TkU2emF4QVoxTEJJU01ydzF5cHZHRVlnbGp6T3JESUtzV0ZZYjZUc2c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxPMWE0UWlwemdYNE5CaEZPSVBqZVNuSmlVSmIxWHV6R1hXa3lua1RReGpYaTEtZGttNzZoTU1XT3VGbjZWUmxFSWxnN21mMGlHVW1fazREOXdRZVk1ek9ya1JVMVNWM0NoVEVzRHY2bWJSYy1JRUtrNElLb3BPSjJzNm9wWmpmYTU3OXRIQ0E1dG82TkU2emF4QVoxTEJJU01ydzF5cHZHRVlnbGp6T3JESUtzV0ZZYjZUc2c%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:03"
    },
    {
      "source": "Reuters",
      "title_ko": "연준(Fed), 금리인상 일시중단, 그러나 오래 가지 않을 수도",
      "title_en": "Fed to hit pause on rate hikes, but maybe not for long",
      "summary_ko": "연준(Fed)은 금리 인상을 일시 중단할 것이나 장기적으로는 그렇지 않을 수도 있음 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Reuters, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQMFBxcEVKT0RxYVJKYWZGOUlGd0VJTE5vN2lNTnozcm92NTV5Vzg3aVdhT2p3eGpoVlZlZ19aaGtPa0s2VzBsS2xuamdkTnU4X2dhNGRzYjlaVTFpVzdLSkg4TDRlQThPdnZOandxOE1wV0o0WDFCcDgtbEZIQmR0a3BFOWdIM1dPZGdmQQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijAFBVV95cUxQMFBxcEVKT0RxYVJKYWZGOUlGd0VJTE5vN2lNTnozcm92NTV5Vzg3aVdhT2p3eGpoVlZlZ19aaGtPa0s2VzBsS2xuamdkTnU4X2dhNGRzYjlaVTFpVzdLSkg4TDRlQThPdnZOandxOE1wV0o0WDFCcDgtbEZIQmR0a3BFOWdIM1dPZGdmQQ%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 26 Oct 2026 10:22:43 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "영란은행, 인플레이션율 4%대 돌파에 금리인상 기조 전환",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPVWQxa3d0cG05Tmpfck4tZm5ZLTRLMUQ1bzRpVUNlbDg0ZDlNemp5d0hPbDVkcjBJdENvbFdldlA3a0h1VkZfOUt2NUE5eVNSaHlMbWZLUTBhNGZoOWEzNDZ6QVFYR095Wmt1dndTak1SaDJHbXBTZzdwWWlmZW16MjBRV3ZTanNaQm00M1VxdXE2OE5JUkdKczBSWTNVNkpJQzl6dTlXaGtHRXNWS21z?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPVWQxa3d0cG05Tmpfck4tZm5ZLTRLMUQ1bzRpVUNlbDg0ZDlNemp5d0hPbDVkcjBJdENvbFdldlA3a0h1VkZfOUt2NUE5eVNSaHlMbWZLUTBhNGZoOWEzNDZ6QVFYR095Wmt1dndTak1SaDJHbXBTZzdwWWlmZW16MjBRV3ZTanNaQm00M1VxdXE2OE5JUkdKczBSWTNVNkpJQzl6dTlXaGtHRXNWS21z%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "COMMENTARY: 연준(Fed) 회의록, 9월의 흥미로운 흥미로운 내용이 여전히 테이블에 있음",
          "original_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPSVRUSV8yamU0TV9KS0l6VjdObHdFelZjd2QxY2ZhWXBJTjN5b3hRbzZGekxuNWVQUHFVSXNHdFFscG1LTTVMX2xKZkx2Nk1GNzRBY3E4RGlGcXpUSkVxUnRaQllXeFlrT2lFd0UycUpVV1Q2MHpYQzU2TFBaM3JYTW50dHFKTlJtd2Y3QzViUWpRRklDSU13VzlHUjRHMmRrSlFibHM3Rzlsa0NNcHh1Tm9XdG1qRTdZ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuAFBVV95cUxPSVRUSV8yamU0TV9KS0l6VjdObHdFelZjd2QxY2ZhWXBJTjN5b3hRbzZGekxuNWVQUHFVSXNHdFFscG1LTTVMX2xKZkx2Nk1GNzRBY3E4RGlGcXpUSkVxUnRaQllXeFlrT2lFd0UycUpVV1Q2MHpYQzU2TFBaM3JYTW50dHFKTlJtd2Y3QzViUWpRRklDSU13VzlHUjRHMmRrSlFibHM3Rzlsa0NNcHh1Tm9XdG1qRTdZ%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) 금리 인상이 다가오고 있지만 이번 주에는 그렇지 않을 것: CNBC 조사",
          "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPemFCemhRSnI2LTdtSk9nOGRqR3IyQVotVHh4YzEwZzJld3dqNTM4TmRpbHJZSlVRZWZlX0JJYzAtODd1a0lyVlVETlRkbmtWOHpZbzc0eXo2VUFBTzdZZ1ZrWFhKaklMN1JQcmNhaEpEVEpNa0JPRllsdUN0cU9kc1NLM3J0eHpLWHfSAY8BQVVfeXFMTml6aGtHdzhmakJjT00ya2VsRkpBbFpXNDU0YUFmQU96TFRvSFhMWDJhS1RkWG1yNjdWOW1zQTFEV1M3eEg3VEx6ZTM4Z1lSWEZxcnJ6ckQ5Skt2V1hLYUNkX1lZM2R0dklVaHd6dGdSR2lhZEhXVlA4MEphQ0lSTjBSeHp3M0IwMnc5eFhTelk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxPemFCemhRSnI2LTdtSk9nOGRqR3IyQVotVHh4YzEwZzJld3dqNTM4TmRpbHJZSlVRZWZlX0JJYzAtODd1a0lyVlVETlRkbmtWOHpZbzc0eXo2VUFBTzdZZ1ZrWFhKaklMN1JQcmNhaEpEVEpNa0JPRllsdUN0cU9kc1NLM3J0eHpLWHfSAY8BQVVfeXFMTml6aGtHdzhmakJjT00ya2VsRkpBbFpXNDU0YUFmQU96TFRvSFhMWDJhS1RkWG1yNjdWOW1zQTFEV1M3eEg3VEx6ZTM4Z1lSWEZxcnJ6ckQ5Skt2V1hLYUNkX1lZM2R0dklVaHd6dGdSR2lhZEhXVlA4MEphQ0lSTjBSeHp3M0IwMnc5eFhTelk%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed)이 관심을 승인하고, 올해 또 하나의 신호를 보낼 것입니다.",
          "original_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTFB2d21SUXhkazRGZk1QSTgxb2lQME5TUzdVNEZ0bWVxdWRENm96dUNfU040Rnc4Skl5MnZwcXlKLXh0c1NzYVhrNDZHY0F2M2otb0ZEZmRyd0N2Vlk1WjZ1a1FpZk9jaEtBV25HejlPUE5LVWllZDN2TtIBfkFVX3lxTE5MbUliaWM2Nm1nSDRQU0ZEUmdZUXVNVjRZeXpzRWlaY2pMRzMwdGFUb09jaWhqUFNJZEo5OUxJenR2aEtkcWR0MnVYR3VmdndJWlJTNGlPWmUzNmJYLS1oZ29fMW5PR0dzY3JYUkUzaGdfemtIQjBqc1hjMjNtZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMieEFVX3lxTFB2d21SUXhkazRGZk1QSTgxb2lQME5TUzdVNEZ0bWVxdWRENm96dUNfU040Rnc4Skl5MnZwcXlKLXh0c1NzYVhrNDZHY0F2M2otb0ZEZmRyd0N2Vlk1WjZ1a1FpZk9jaEtBV25HejlPUE5LVWllZDN2TtIBfkFVX3lxTE5MbUliaWM2Nm1nSDRQU0ZEUmdZUXVNVjRZeXpzRWlaY2pMRzMwdGFUb09jaWhqUFNJZEo5OUxJenR2aEtkcWR0MnVYR3VmdndJWlJTNGlPWmUzNmJYLS1oZ29fMW5PR0dzY3JYUkUzaGdfemtIQjBqc1hjMjNtZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:04"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "美 국채가, 보합권서 좁게 등락…FOMC 대기",
      "title_en": "",
      "summary_ko": "美 국채가, 보합권서 좁게 등락…FOMC 대기 연합인포맥스. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 연합인포맥스뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9NOVUtWDNhR0p2UDF1VHl0b2x0eVJrd0tMVTh4WFdoZzlIVjF0NS1ZQ2R3N3FKQ2ppejJYNVNhdWo2UmpKWHRJam1Qa0VJVG1pclNIak8xRC1hTl9LY3dnQjBCaUtnOGhwUnppNkU2NTU?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9NOVUtWDNhR0p2UDF1VHl0b2x0eVJrd0tMVTh4WFdoZzlIVjF0NS1ZQ2R3N3FKQ2ppejJYNVNhdWo2UmpKWHRJam1Qa0VJVG1pclNIak8xRC1hTl9LY3dnQjBCaUtnOGhwUnppNkU2NTU?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 28 Oct 2026 15:25:32 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "미 달러화 강보합…유가 상승 속 FOMC 경계감",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1WeXp2eTl4bVNqWndheWFlQVZmOXcxZGtUN1VWTUcyWmpkZklxTkRGT2pwbmlvdU55cVF1Mk5acWcxWXBSVGFQTWgyQTNqc2hDY0JWOFVwd3lUcG5lREYtQnZQVWQ5UG8zUmpfSmFQQ0k?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1WeXp2eTl4bVNqWndheWFlQVZmOXcxZGtUN1VWTUcyWmpkZklxTkRGT2pwbmlvdU55cVF1Mk5acWcxWXBSVGFQTWgyQTNqc2hDY0JWOFVwd3lUcG5lREYtQnZQVWQ5UG8zUmpfSmFQQ0k?oc=5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:04"
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
      "crawled_at": "2026-10-28 20:01:04"
    },
    {
      "source": "Reuters",
      "title_ko": "베센트 \"미국, 이번 주에 이란 은행 제재 발표할 것\"",
      "title_en": "Bessent says U.S. likely to announce Iran bank sanctions this week",
      "summary_ko": "베센트 \"미국, 이번 주에 이란 은행 제재 발표할 것\" 관련 핵심 동향이 발표되었습니다. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQZEY5Z1hsMHdwMm1tT1QxU0JvSllPd1V0eFVXWTlTYlRHMHphTDFnbENycVpzeWcxUmFHZ3I3ZUhEdDNaYkJueWotd2h0ZUFySE9GUGthYzlfcFJxVzZiMlhGbXZSSDAwTlJiRlZEQXVCYks4UUUyVFdWSHItUDN0MDZLU1pKZzFFZ2l3X2dBVmVCNVpFRFFKS2lmNUxVeGdIcDBrbk90SDY1ZWNOM1E?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxQZEY5Z1hsMHdwMm1tT1QxU0JvSllPd1V0eFVXWTlTYlRHMHphTDFnbENycVpzeWcxUmFHZ3I3ZUhEdDNaYkJueWotd2h0ZUFySE9GUGthYzlfcFJxVzZiMlhGbXZSSDAwTlJiRlZEQXVCYks4UUUyVFdWSHItUDN0MDZLU1pKZzFFZ2l3X2dBVmVCNVpFRFFKS2lmNUxVeGdIcDBrbk90SDY1ZWNOM1E%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 01 Sep 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "베센트 \"미국, 이란에 본 적 없는 조치 적용할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "베센트는 미국이 이란에 사상 최대의 제재를 가할 것이라고 말하고 중국의 협력을 촉구했다.",
          "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOUlFnUHhPNjlxRW5kTy03TFctOE1ST1NabGVNalozY2hiR2RKcEtfV1ZRblJ1VlJXQXRNem1yZmpIRVVYUjJOd2pzWElTX0JVeXZVR1V1Tk5NOG5oWWUtRVZzWDNFOE5KbE1VNmtubXdodnVzQ1RZMFV3TnpUUXVHM1N5MXZqZTBtdW1iUG8xS18wdi1ranhQQXpfVDdiYnRsc09iN3JtbEhZTVIwS202X0lmSkF2V0c2dFV5NQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxOUlFnUHhPNjlxRW5kTy03TFctOE1ST1NabGVNalozY2hiR2RKcEtfV1ZRblJ1VlJXQXRNem1yZmpIRVVYUjJOd2pzWElTX0JVeXZVR1V1Tk5NOG5oWWUtRVZzWDNFOE5KbE1VNmtubXdodnVzQ1RZMFV3TnpUUXVHM1N5MXZqZTBtdW1iUG8xS18wdi1ranhQQXpfVDdiYnRsc09iN3JtbEhZTVIwS202X0lmSkF2V0c2dFV5NQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent, 미 국채/재무부 Buybacks 확장 준비 완료",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOQWY5d21tU2lXNHBENmdSTGlNdXJGM05jMzBNTDZzQUpfN25yUTAwYVpPOWNDbWxnNGtIczFWMnNhMV9VU3A0OGZXZDVqb01pQmpTb0czd1NqZVVkMnB6ZG1wT21HRWZXS0haV0dON0ZCOUdMZjhWaHRMMk83NnBKaTZYcUdGZFVwLURJTFNZcXQ0eEpoMmNCNy1JZmVhS01RQlVyOHEzY3FXdFBWWUFEMg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOQWY5d21tU2lXNHBENmdSTGlNdXJGM05jMzBNTDZzQUpfN25yUTAwYVpPOWNDbWxnNGtIczFWMnNhMV9VU3A0OGZXZDVqb01pQmpTb0czd1NqZVVkMnB6ZG1wT21HRWZXS0haV0dON0ZCOUdMZjhWaHRMMk83NnBKaTZYcUdGZFVwLURJTFNZcXQ0eEpoMmNCNy1JZmVhS01RQlVyOHEzY3FXdFBWWUFEMg%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "미국은 엔화 개입 이후 일본을 ​​지원하기 위해 '무엇이든 할 것'이라고 베센트는 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOLW5ZcUFHeUZRaEhwNjZqZGJoQXh4T3BXYXpZTzJhYmMtdFdlUjFnOEMta2JOaUlRNzBlSmFUQmlNY0RTdEtQaURxVkJ6VVRDeWE2TkdoTldVM2RWQmNMcl9aMDZ1RDQ0d215VWQ1VjVUS2hwTGtuWVhtenZRTHd1RE5xU295NGhLaHZ4ZXJhR1dKNGxLR1R3MWVKNjVsVXJwdGJad1cxcFM1aHVBRVF5QndreWM4OFM0cE9zUld2VnJtZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwgFBVV95cUxOLW5ZcUFHeUZRaEhwNjZqZGJoQXh4T3BXYXpZTzJhYmMtdFdlUjFnOEMta2JOaUlRNzBlSmFUQmlNY0RTdEtQaURxVkJ6VVRDeWE2TkdoTldVM2RWQmNMcl9aMDZ1RDQ0d215VWQ1VjVUS2hwTGtuWVhtenZRTHd1RE5xU295NGhLaHZ4ZXJhR1dKNGxLR1R3MWVKNjVsVXJwdGJad1cxcFM1aHVBRVF5QndreWM4OFM0cE9zUld2VnJtZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:09"
    },
    {
      "source": "Bloomberg",
      "title_ko": "한국 주식, 이란 전쟁 위험으로 2024년 이후 최악의 매도세 겪어",
      "title_en": "Korean Stocks Suffer Worst Selloff Since 2024 on Iran War Risks",
      "summary_ko": "한국 주식, 이란 전쟁 위험으로 2024년 이후 최악의 매도세 Bloomberg.com. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Reuters",
          "title_ko": "독일 소비자 심리, 인플레이션 우려로 하락",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQU2NSMlpDSUlVX01lX1hOSWNrTzJwNHhPY0ZtcXJWUnEwd0RTS05GRnE1VDl5SEFONzlFNkVXNjBaZ1pBSVg2M09yd0xVMWdpTDVxNWM5alI1M2ZVdFNmZzl3QW9idzFOa3FXZXc3d04zc3FEM2FkdS14dDRJTmx3MDdqMUNvckZnV25YMGtRdjRkR085b2tuOFg1SjQtQ2FKMkV4Q2kzMDY?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxQU2NSMlpDSUlVX01lX1hOSWNrTzJwNHhPY0ZtcXJWUnEwd0RTS05GRnE1VDl5SEFONzlFNkVXNjBaZ1pBSVg2M09yd0xVMWdpTDVxNWM5alI1M2ZVdFNmZzl3QW9idzFOa3FXZXc3d04zc3FEM2FkdS14dDRJTmx3MDdqMUNvckZnV25YMGtRdjRkR085b2tuOFg1SjQtQ2FKMkV4Q2kzMDY%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "인플레이션 위험을 억제하기 위한 파키스탄 하이킹 기준",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPZkRNOHcxQmxySmdrREdXdGFucmwySG8zRUtlM1ZSLW1rcWNWOFQxTjI5dnY4NzVja2lyb1dNTm9Sc3RuVkplMWRTMVAyMHRBX1NlbWdJUmc1UjBGdnozVVo4SVIwbklCcjNGWFdScVdJMkZ0dHVGU28xWk9ob0Y3dVkyc0w0MzJTbERlZ092LUJ6REpBWl9mNzJOOFZQVUhIMWk4TzFB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxPZkRNOHcxQmxySmdrREdXdGFucmwySG8zRUtlM1ZSLW1rcWNWOFQxTjI5dnY4NzVja2lyb1dNTm9Sc3RuVkplMWRTMVAyMHRBX1NlbWdJUmc1UjBGdnozVVo4SVIwbklCcjNGWFdScVdJMkZ0dHVGU28xWk9ob0Y3dVkyc0w0MzJTbERlZ092LUJ6REpBWl9mNzJOOFZQVUhIMWk4TzFB%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "외국인 매도로 한국 증시, 이정표 도달 후 하락",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPY1ZwaUhhOVZEd3c2VUxZRWNsZmtlMDR6ZjR2Z29MZndiNFMzNEtDX3cwQ0oyS0dqM1BwYnJQRV80NWhteDI1VDlRcnR5MUpqTDV5Mlk3Z3h4ZE8wY2RjTFBOeFBDbTUwVGpVTG83MGpNUGdZeENSZk1QQWpvOUtyUXJBTTlPWVB3cXZVbnVicVRXYkIwakltcTF3aEhGem85YXkxOHAxMS1vc1ZZcDR5NDFEZWFjZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPY1ZwaUhhOVZEd3c2VUxZRWNsZmtlMDR6ZjR2Z29MZndiNFMzNEtDX3cwQ0oyS0dqM1BwYnJQRV80NWhteDI1VDlRcnR5MUpqTDV5Mlk3Z3h4ZE8wY2RjTFBOeFBDbTUwVGpVTG83MGpNUGdZeENSZk1QQWpvOUtyUXJBTTlPWVB3cXZVbnVicVRXYkIwakltcTF3aEhGem85YXkxOHAxMS1vc1ZZcDR5NDFEZWFjZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:15"
    },
    {
      "source": "매일경제",
      "title_ko": "한은 “2050년 탄소중립에 840조 필요”",
      "title_en": "",
      "summary_ko": "한은 “2050년 탄소중립에 840조 필요” 매일경제 마켓. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 매일경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBTTmpvLVNnbnY4Zy0xN243QXlBcFJaRnBSM3EtQ1hOckJETDVPTmw4OFhTcnNkWXBqc2tZN2kwaml6dzY0U1l4ck5WNkhMUnhIbEE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBTTmpvLVNnbnY4Zy0xN243QXlBcFJaRnBSM3EtQ1hOckJETDVPTmw4OFhTcnNkWXBqc2tZN2kwaml6dzY0U1l4ck5WNkhMUnhIbEE?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 28 Oct 2026 06:24:01 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-28 20:01:15"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "트럼프 관세 역풍…룰라 당선에 브라질 '자원 무기화' 경고음",
      "title_en": "",
      "summary_ko": "트럼프 관세 역풍…룰라 당선에 브라질 '자원 무기화' 경고음 연합인포맥스. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. 연합인포맥스뿐만 아니라 뉴스토마토 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFAyMmVfRng3TnQzcEsxUTVTVEV0Tk4zaWZva3VXX09BRlFKbEs3NGRXcUhocTRrLUhYRVVGNnN6R3hsWjJwWjRBbFZHcVYyb1ZscU9xaGwyVGwwZERoUmxESGZ0dnFvbjU1ZXdKdV8tVnc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFAyMmVfRng3TnQzcEsxUTVTVEV0Tk4zaWZva3VXX09BRlFKbEs3NGRXcUhocTRrLUhYRVVGNnN6R3hsWjJwWjRBbFZHcVYyb1ZscU9xaGwyVGwwZERoUmxESGZ0dnFvbjU1ZXdKdV8tVnc?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 27 Oct 2026 01:49:59 GMT",
      "related_articles": [
        {
          "source": "뉴스토마토",
          "title_ko": "트럼프 \"관세 50%로 올릴 수도\"…미 진출 기업에 '경고'",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE0wZVhnS1Z6QjM3V3cwOUNGMHB5WWcxOFdMeUp0OGxleGVnN1lreFlmS3RIMldzNGdaU3dBamdEZi1BOWJmZVU5c1RaWXpJVW9GOElRTEdWLVpPQWJFbTFZdQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE0wZVhnS1Z6QjM3V3cwOUNGMHB5WWcxOFdMeUp0OGxleGVnN1lreFlmS3RIMldzNGdaU3dBamdEZi1BOWJmZVU5c1RaWXpJVW9GOElRTEdWLVpPQWJFbTFZdQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:15"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "FOMC 대기 속 코스피 급등發 위험선호…국고 3년 3.0bp↑(종합)",
      "title_en": "",
      "summary_ko": "FOMC 대기 속 코스피 급등發 위험선호…국고 3년 3.0bp↑(종합) 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5jNkdGcm9sbEdRM2oxTEtlRXVkMUEwTF91aF9ySWE0MkxmUTlvZFM0d2QxNjBpSlNVWlRWSmdpVjYwamEwOTZvekJvM1pUNkwwUUttU0pJR1RzSmFHZXV1UkFWa0JYQ0xld3l5bUNTSFQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5jNkdGcm9sbEdRM2oxTEtlRXVkMUEwTF91aF9ySWE0MkxmUTlvZFM0d2QxNjBpSlNVWlRWSmdpVjYwamEwOTZvekJvM1pUNkwwUUttU0pJR1RzSmFHZXV1UkFWa0JYQ0xld3l5bUNTSFQ?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 28 Oct 2026 04:08:51 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-28 20:01:15"
    },
    {
      "source": "Bloomberg",
      "title_ko": "97년 참사로 상처받은 한국, 초조하게 24회 개막",
      "title_en": "Scarred by ‘97 Crash, Korea Nervously Opens 24-Hour Won Trading",
      "summary_ko": "97년 참사로 상처받은 한국, 초조하게 24회 개막 관련 핵심 동향이 발표되었습니다. 국내 금융시장에 대한 외국인 자본 유출입 및 환율 안정성에 영향을 주는 주요 요인입니다. Bloomberg뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPY1RpQVROZFFqTGdqZ0UySERVM3pQUENOanJQRWtvcUxsNUpORVFjTHB1bjhjNVR4MXhJV3E3R1RQazV5NnZ2SXZXdWpQTXVMd1Q3djdfRHhfRWxjMDhJUGZvY3RNR2dzeFJkcVJ4ZEFWVk5zWVpIR3NoUzl4aW9UOU1DTTN2eXoySmVtMGVXRlJrUURnS2h4Y1hpZU1nbGZpbGF6RGZJSXBTVm9V?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxPY1RpQVROZFFqTGdqZ0UySERVM3pQUENOanJQRWtvcUxsNUpORVFjTHB1bjhjNVR4MXhJV3E3R1RQazV5NnZ2SXZXdWpQTXVMd1Q3djdfRHhfRWxjMDhJUGZvY3RNR2dzeFJkcVJ4ZEFWVk5zWVpIR3NoUzl4aW9UOU1DTTN2eXoySmVtMGVXRlJrUURnS2h4Y1hpZU1nbGZpbGF6RGZJSXBTVm9V%3Foc%3D5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 02 Jul 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "KRW/USD: 한국은 원화 약세로 인해 과도한 움직임이 있을 경우 조치를 취하겠다고 다짐함",
          "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQa2RyZHEzR29oU2ZKRGFJakxSQnNBWVZWb1hCNmNYNGVrSEtuQ2w5VWh5bTJ4UFZObzV2ZktibUstaVdhVnhNaWxmekNieEdCaWxrSDZlZFNwaWxnSmw5RzBaSS14NGxCM1ZVcklrcHZ4WHA3MEN4ZXZFb3RtNU1QNVh2MzZ1U3I2cnI3WG1lQTMtWlJwZG1oYjh3ckxCVDdWSHNmbFZoYU9WWHNOWndHMXJCcWJxNjlPa1l5Q0V6WWc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxQa2RyZHEzR29oU2ZKRGFJakxSQnNBWVZWb1hCNmNYNGVrSEtuQ2w5VWh5bTJ4UFZObzV2ZktibUstaVdhVnhNaWxmekNieEdCaWxrSDZlZFNwaWxnSmw5RzBaSS14NGxCM1ZVcklrcHZ4WHA3MEN4ZXZFb3RtNU1QNVh2MzZ1U3I2cnI3WG1lQTMtWlJwZG1oYjh3ckxCVDdWSHNmbFZoYU9WWHNOWndHMXJCcWJxNjlPa1l5Q0V6WWc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:16"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "달러-원, 1,340원대로 급등…外人 달러선물 올해 최대 순매수(상보)",
      "title_en": "",
      "summary_ko": "달러-원, 1,340원대로 급등…外人 달러선물 올해 최대 순매수(상보) 연합인포맥스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 연합인포맥스뿐만 아니라 조세일보, 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9aVDlMdkRpQ1Q2VnRZbDNqME5zVWZKWF9zUkdWTXZ3X2l1Ylh1ZUtNOHdRODd4MFhUVkU1OUQ3RzNxLWVsaW9qTU5XUVdMRmNvU3ZYamdQa2FSaWxwRGtwZzhSTXdxYmRfTFh2bzFXV0U?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9aVDlMdkRpQ1Q2VnRZbDNqME5zVWZKWF9zUkdWTXZ3X2l1Ylh1ZUtNOHdRODd4MFhUVkU1OUQ3RzNxLWVsaW9qTU5XUVdMRmNvU3ZYamdQa2FSaWxwRGtwZzhSTXdxYmRfTFh2bzFXV0U?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 28 Oct 2026 06:32:00 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "달러-원, '숏커버·外人 달러선물 대규모 순매수'에 1,330원선 돌파(상보)",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBnTi1TSjVOMjBRSjc0VFRPalVuaGg5eERDRXdMc2NoR285NG9kTlFhQ0RQUE5CcUFJbEtHUFVrd1NvWlV2VnZ2RE5mVm4tUk5aa3RTSEFBcEw3S3U4aEdfcXpYcjJ5ZXZsUGpkMTk0enY?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBnTi1TSjVOMjBRSjc0VFRPalVuaGg5eERDRXdMc2NoR285NG9kTlFhQ0RQUE5CcUFJbEtHUFVrd1NvWlV2VnZ2RE5mVm4tUk5aa3RTSEFBcEw3S3U4aEdfcXpYcjJ5ZXZsUGpkMTk0enY?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "달러-원, 1,340원대로 급등…장중 外人 달러선물 올해 최대 순매수",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9GeHJReWlhNjhKV0k0TEZYdm1pWUVjZ2hlOGtVcEhYZUJiRGRoM015SzFBVERKd28wdk1NcTBBRjBsRGlYNmR6NEFJa0F0b1ZaRVY2RFRFNDhPbF9uUGpPbDRuTWtPRGRYRzd6U3IxZDPSAXRBVV95cUxNVlk2UEYwdW42WjBQLVRsX2VQVWZLX2pBODdPaUxhMFRIRmVXQk1Xalh0N1VXdUVNQnUxZldJdXJyWUtTTkx3bHpmYWVMcHMydVdHaDlZNTIxOHhzYUJycDJEZGdaU0FkWGg5TGtNVTdtOWVqUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9GeHJReWlhNjhKV0k0TEZYdm1pWUVjZ2hlOGtVcEhYZUJiRGRoM015SzFBVERKd28wdk1NcTBBRjBsRGlYNmR6NEFJa0F0b1ZaRVY2RFRFNDhPbF9uUGpPbDRuTWtPRGRYRzd6U3IxZDPSAXRBVV95cUxNVlk2UEYwdW42WjBQLVRsX2VQVWZLX2pBODdPaUxhMFRIRmVXQk1Xalh0N1VXdUVNQnUxZldJdXJyWUtTTkx3bHpmYWVMcHMydVdHaDlZNTIxOHhzYUJycDJEZGdaU0FkWGg5TGtNVTdtOWVqUQ?oc=5"
        },
        {
          "source": "조세일보",
          "title_ko": "원·달러 환율, 1326.0원…달러, 10월 FOMC 앞두고 강세",
          "original_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFA3VXU1dTVyWHhpMnhQZ19NU2FycjNzWk5hams2bEtVN3djQjlaVFlGR1cya2h3Z3ZRQ0o4N0VXQVdBVXdBRmFGY29oODYzeGY2V0UxVFRiSDZQOVpBdlJN?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFA3VXU1dTVyWHhpMnhQZ19NU2FycjNzWk5hams2bEtVN3djQjlaVFlGR1cya2h3Z3ZRQ0o4N0VXQVdBVXdBRmFGY29oODYzeGY2V0UxVFRiSDZQOVpBdlJN?oc=5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:16"
    },
    {
      "source": "매일경제",
      "title_ko": "원/달러 환율, 미 금리 결정 경계감 속 1,320원대 보합권",
      "title_en": "",
      "summary_ko": "원/달러 환율, 미 금리 결정 경계감 속 1,320원대 보합권 매일경제 마켓. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 매일경제뿐만 아니라 아시아타임즈, 아시아경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE10ai1SVzA1ZmVfZmhiVThZX2JtMXQ5SWR1bnBwR1MtV05LS0ZKc1RQNk9kQ0d5ZnNRUmNDT1NNZzBaYlFBQktDNGYyNlI4c3p4X0E?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE10ai1SVzA1ZmVfZmhiVThZX2JtMXQ5SWR1bnBwR1MtV05LS0ZKc1RQNk9kQ0d5ZnNRUmNDT1NNZzBaYlFBQktDNGYyNlI4c3p4X0E?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 27 Oct 2026 07:33:34 GMT",
      "related_articles": [
        {
          "source": "아시아경제",
          "title_ko": "원·달러 환율, 14원 뛰어…FOMC 앞두고 외환시장 긴장감(상보)",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBXcjhnSjBjMG1jbVp2ay1ZeGhOMDU1MThia1RUdEw0MnVqRkE0V1lGdnVkRWVNZzl5VG04TEl6VFF3LUQxdkkycVFBeDM2T2tsaUZhQjZwT0NoN1FLZ01sUA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBXcjhnSjBjMG1jbVp2ay1ZeGhOMDU1MThia1RUdEw0MnVqRkE0V1lGdnVkRWVNZzl5VG04TEl6VFF3LUQxdkkycVFBeDM2T2tsaUZhQjZwT0NoN1FLZ01sUA?oc=5"
        },
        {
          "source": "아시아타임즈",
          "title_ko": "원·달러 환율, FOMC 경계감에 '14원' 폭등",
          "original_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9ScVIySlNXU2FfVkVPSy1ia2FiUjF0RExXZDNnM3ZTRU1NYkZEQmRNNE8yQjRYMWhlTGJzbGtVWDJUWnB2SkZMX1A3eFJqT1RLRktZX2F1T3ZfdkFPeGc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9ScVIySlNXU2FfVkVPSy1ia2FiUjF0RExXZDNnM3ZTRU1NYkZEQmRNNE8yQjRYMWhlTGJzbGtVWDJUWnB2SkZMX1A3eFJqT1RLRktZX2F1T3ZfdkFPeGc?oc=5"
        },
        {
          "source": "뉴스1",
          "title_ko": "FOMC 앞두고 강달러…달러·원 환율 장 초반 1327원대 상승",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBqZlJPdXR0dWdXSXQxcEo3cHhyY1JjdzYwbkRXbGhhcXRndG1JNTBzRFdFSHQ4THRXQU1sVGRpbzZzaGNUTzllUkpIOVhJQTlYb242VGE0T2pjVzg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBqZlJPdXR0dWdXSXQxcEo3cHhyY1JjdzYwbkRXbGhhcXRndG1JNTBzRFdFSHQ4THRXQU1sVGRpbzZzaGNUTzllUkpIOVhJQTlYb242VGE0T2pjVzg?oc=5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:16"
    },
    {
      "source": "중기이코노미",
      "title_ko": "중동 긴장 고조와 뉴욕증시 변동성 속 원달러 환율 ↓",
      "title_en": "",
      "summary_ko": "중동 긴장 고조와 뉴욕증시 변동성 속 원달러 환율 ↓ 중기이코노미. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 중기이코노미에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE0yNTJzYzJobnFJMkc1ZGtaZWhhVkF0WG5aakpPNzY4SzZ0dm9fZEN5bUtUdFNnVDNiRFlxekY0Tnp2OWRuRkVhMlhEblVGVGtnOWdGcU1wU1VoX0czakNPUFplQ25QMExfYVE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE0yNTJzYzJobnFJMkc1ZGtaZWhhVkF0WG5aakpPNzY4SzZ0dm9fZEN5bUtUdFNnVDNiRFlxekY0Tnp2OWRuRkVhMlhEblVGVGtnOWdGcU1wU1VoX0czakNPUFplQ25QMExfYVE?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 26 Oct 2026 01:41:57 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-28 20:01:16"
    },
    {
      "source": "연합뉴스",
      "title_ko": "[속보] 워시 \"내년 기준금리 결정 FOMC 연 8회서 7회로 축소\"",
      "title_en": "",
      "summary_ko": "[속보] 워시 \"내년 기준금리 결정 FOMC 연 8회서 7회로 축소\" 연합뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합뉴스뿐만 아니라 헤럴드경제, 한국경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA5STdERm9BYzdFNnBqUzBTUnpwbVNIWWItXzBHaGxmVEVsMUpHaURRQ2ZXUFlYMlpEemltMk5UckFHeDRxek5nVHNrZ1VZQS1Ca3JPVnJyejlzYW_SAWBBVV95cUxPTmo5LVNnamxDcklPQ1VxUkVoWHZQNnNtN1BRaFlFQnRLM1hEanA0SXgwUXB2RWVDbWtOeW9iNG96R2MxdS1IMFF4Qm0zZlpQQzVReG5SV1h3OGhyRUpXeHY?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA5STdERm9BYzdFNnBqUzBTUnpwbVNIWWItXzBHaGxmVEVsMUpHaURRQ2ZXUFlYMlpEemltMk5UckFHeDRxek5nVHNrZ1VZQS1Ca3JPVnJyejlzYW_SAWBBVV95cUxPTmo5LVNnamxDcklPQ1VxUkVoWHZQNnNtN1BRaFlFQnRLM1hEanA0SXgwUXB2RWVDbWtOeW9iNG96R2MxdS1IMFF4Qm0zZlpQQzVReG5SV1h3OGhyRUpXeHY?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 28 Oct 2026 18:47:19 GMT",
      "related_articles": [
        {
          "source": "연합뉴스",
          "title_ko": "워시 \"내년 기준금리 결정 FOMC는 7번만…내후년은 6번\"",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5OVHIzUTM0MF9CMWY2bmRJNzE3Rm01bDdDRTRRS0N0NWw1bS05aXNHNnV2QVVDYUtJSUJTd1Z3M1ZMQVc3VGlvNDVsWmp6dzNIQ2xDWEJyeUpXQUHSAWBBVV95cUxOUndVQkZWTlluR3JWWkFfMXpIa0hQNzgxaUVyRlI4WU0zN3I0UTRhWXhNdUY3eVJvM2Q4a0NPeE9OUllMYmszMWVRcm8yRXBlSWlvaUxZdWthcVFwbkU1VHg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5OVHIzUTM0MF9CMWY2bmRJNzE3Rm01bDdDRTRRS0N0NWw1bS05aXNHNnV2QVVDYUtJSUJTd1Z3M1ZMQVc3VGlvNDVsWmp6dzNIQ2xDWEJyeUpXQUHSAWBBVV95cUxOUndVQkZWTlluR3JWWkFfMXpIa0hQNzgxaUVyRlI4WU0zN3I0UTRhWXhNdUY3eVJvM2Q4a0NPeE9OUllMYmszMWVRcm8yRXBlSWlvaUxZdWthcVFwbkU1VHg?oc=5"
        },
        {
          "source": "머니투데이",
          "title_ko": "美 기준금리 결정 연 8회→6회로 축소…단기 시장 변동성 잡는다 - 머니투데이",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9hWXVUTzdOUUZndEo4UWppQU95aEYxaWZkTUQ0MDVKLTBodEw1VEhiOUxJWGYwUDVQR1VkQnItYzVTVUhwMnppZVYwdkJJZGVud1BnNzQxU25yekhIRWhOLWpkTGdpdjJC0gFuQVVfeXFMT1dKWHhMZVc0ZGdMTVFIRFI4bFlGX2dWa2Z4dmx3bVJLenYtMHl3QkRwSzBlZzc2YTJFdS0xelNtendKUkk5S0d6ODUxRlNYR081ckZsVEdpaWFlRDU3RW9mNk5XWHA1NEdoSTEwSkE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9hWXVUTzdOUUZndEo4UWppQU95aEYxaWZkTUQ0MDVKLTBodEw1VEhiOUxJWGYwUDVQR1VkQnItYzVTVUhwMnppZVYwdkJJZGVud1BnNzQxU25yekhIRWhOLWpkTGdpdjJC0gFuQVVfeXFMT1dKWHhMZVc0ZGdMTVFIRFI4bFlGX2dWa2Z4dmx3bVJLenYtMHl3QkRwSzBlZzc2YTJFdS0xelNtendKUkk5S0d6ODUxRlNYR081ckZsVEdpaWFlRDU3RW9mNk5XWHA1NEdoSTEwSkE?oc=5"
        },
        {
          "source": "헤럴드경제",
          "title_ko": "[속보] 워시 “다음해 기준금리 결정 FOMC 연 8회서 7회로 축소”",
          "original_url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE80UlV5UTFsYk53WC1STTBpcXJJcXl2N0xocXZ4VGU4MmkyY1BpZUNTREtTQi1RaEs0UlBvbXlqSlhURldUN1k4allRWERYSWJiMno1QTNvSQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE80UlV5UTFsYk53WC1STTBpcXJJcXl2N0xocXZ4VGU4MmkyY1BpZUNTREtTQi1RaEs0UlBvbXlqSlhURldUN1k4allRWERYSWJiMno1QTNvSQ?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "[속보] Fed, 美 기준금리 연 3.75~4.00%로 동결 [Fed 워치]",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBGZGVYX3h1azkyamk0MXlUd2RrX0VHRno2VkFBeEQ0aTZNWHd2QlFpQ3dMZkVuakx5clU5RXhJdHczbmxmS3hXdWJpejZVNnlRZTQzeUc4T2U0QQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBGZGVYX3h1azkyamk0MXlUd2RrX0VHRno2VkFBeEQ0aTZNWHd2QlFpQ3dMZkVuakx5clU5RXhJdHczbmxmS3hXdWJpejZVNnlRZTQzeUc4T2U0QQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:16"
    },
    {
      "source": "연합뉴스",
      "title_ko": "캐나다, 3년 3개월 만에 금리 인상…기준금리 연 2.50%로 상향",
      "title_en": "",
      "summary_ko": "캐나다, 3년 3개월 만에 금리 인상…기준금리 연 2.50%로 상향 연합뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합뉴스뿐만 아니라 MTN 머니투데이방송 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBFMzA3VVVVS0VpMC1kd3hXaW1LMWV4RVB0UGcwYWczakp4QWJvRVpvaTdrSzlQblpyRzlFV2JidFViTTFqc0kxWmFNVU41MWZHYmk3SlBmZ2RZYTTSAWBBVV95cUxPYTkzTDljS292MUlNaFU2MlBFblhFZVhhbkhhUVR5WU5LNC1DWXlyMFJVZ3Y2SExRSTNmTVNTY1lkbXJZRjg2VjVoWl93amM4Z0JWSllVVHRQaFYxNEdrZm0?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBFMzA3VVVVS0VpMC1kd3hXaW1LMWV4RVB0UGcwYWczakp4QWJvRVpvaTdrSzlQblpyRzlFV2JidFViTTFqc0kxWmFNVU41MWZHYmk3SlBmZ2RZYTTSAWBBVV95cUxPYTkzTDljS292MUlNaFU2MlBFblhFZVhhbkhhUVR5WU5LNC1DWXlyMFJVZ3Y2SExRSTNmTVNTY1lkbXJZRjg2VjVoWl93amM4Z0JWSllVVHRQaFYxNEdrZm0?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 28 Oct 2026 15:16:45 GMT",
      "related_articles": [
        {
          "source": "MTN 머니투데이방송",
          "title_ko": "미 연준, 10월 FOMC에서 기준금리 동결…2명은 인상 주장",
          "original_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1DWUd1Y1VaUjYzYnA2bVVuTHd5bk03NDBRT0duZU4yNmhNVy1IUkhhNE5jNkNPelRSTlA4akVJcmVMXzhleWVPc2tNc293MG9ZU2d1bERMbGMxZE92UGY4?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1DWUd1Y1VaUjYzYnA2bVVuTHd5bk03NDBRT0duZU4yNmhNVy1IUkhhNE5jNkNPelRSTlA4akVJcmVMXzhleWVPc2tNc293MG9ZU2d1bERMbGMxZE92UGY4?oc=5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:17"
    },
    {
      "source": "글로벌이코노믹",
      "title_ko": "[김대호 진단] 연준 FOMC 기준금리 동결과 역사의 교훈",
      "title_en": "",
      "summary_ko": "[김대호 진단] 연준 FOMC 기준금리 동결과 역사의 교훈 글로벌이코노믹. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 글로벌이코노믹에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOMkZiRzRBMnI2d0hOT0U3U3U5Sm90bTZnaU9TT09oXzdZN1pLdGNORmVHY3laSE9scVpoVERUb0JMM1pSb3Vpb3ZfWEJNcXBOWHppTEdVa1ZMNkRlOXc5eFU2QnNmM1owUnVhNHpObHNsaHN3MjhCMmZTSzBldmJaYWY1dFQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOMkZiRzRBMnI2d0hOT0U3U3U5Sm90bTZnaU9TT09oXzdZN1pLdGNORmVHY3laSE9scVpoVERUb0JMM1pSb3Vpb3ZfWEJNcXBOWHppTEdVa1ZMNkRlOXc5eFU2QnNmM1owUnVhNHpObHNsaHN3MjhCMmZTSzBldmJaYWY1dFQ?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 28 Oct 2026 15:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-28 20:01:17"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "BOC, 기준금리 2.50%로 25bp 인상…2023년 7월 이후 처음(상보)",
      "title_en": "",
      "summary_ko": "BOC, 기준금리 2.50%로 25bp 인상…2023년 7월 이후 처음(상보) 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 한국경제, 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9VdVlFTDZ3a2tnbDN3TEQ1YWZfUEh1QjV4dWR6NzM1aldXUVg4UUk3bGtTQlZtazN4dWxWVjlhYU1jdGZZc1RsWlBza2tSUl9QaGhSS0dtanR3c1pEQmN1MHFqa29pN0QxQjVJTkhaMDg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9VdVlFTDZ3a2tnbDN3TEQ1YWZfUEh1QjV4dWR6NzM1aldXUVg4UUk3bGtTQlZtazN4dWxWVjlhYU1jdGZZc1RsWlBza2tSUl9QaGhSS0dtanR3c1pEQmN1MHFqa29pN0QxQjVJTkhaMDg?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 28 Oct 2026 16:13:02 GMT",
      "related_articles": [
        {
          "source": "한국경제",
          "title_ko": "Fed, 기준금리 연 3.75%~4.00%로 동결…2명은 인상 주장 [Fed워치]",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9XU2lBSXlnOUVOZzlSQ2RJeWpXLVFwWmtNVkhWemI0UHU1ZkJwRWxCZVp3ck1BdWtPdUF6QkItZHFQOXcwZE1OZ3BSNEx1Tjl3Rzkyd3B2OWZkZw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9XU2lBSXlnOUVOZzlSQ2RJeWpXLVFwWmtNVkhWemI0UHU1ZkJwRWxCZVp3ck1BdWtPdUF6QkItZHFQOXcwZE1OZ3BSNEx1Tjl3Rzkyd3B2OWZkZw?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "뉴질랜드, 기준금리 2.75% 동결…4대3 표결로 인상 불발(상보)",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9tVW9CRlVMLWRxcFQ2Ym9UZkNWNVA1M1JEUmR2d1hSYURicElfNXFqNWtSaUZFWGhwczZIcTAyUFpQR0NMNzVBRVJpY1pWX0NJNFJrSjluZERNdHNUcEloUW9MUXQ2ZnJGX0tBOFpJS2o?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9tVW9CRlVMLWRxcFQ2Ym9UZkNWNVA1M1JEUmR2d1hSYURicElfNXFqNWtSaUZFWGhwczZIcTAyUFpQR0NMNzVBRVJpY1pWX0NJNFJrSjluZERNdHNUcEloUW9MUXQ2ZnJGX0tBOFpJS2o?oc=5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:17"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "한국은행 신임 통화정책·시장 담당 부총재보에 최창호 국장",
      "title_en": "",
      "summary_ko": "한국은행 신임 통화정책·시장 담당 부총재보에 최창호 국장 연합인포맥스. 한국은행의 금리 결정 및 국내 수출입 펀더멘털, 가계부채와 부동산 경기에 미치는 파급 효과를 주목할 필요가 있습니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBGYnVwTEM5TGZrWGhGN0U0NlpCdlNJU1RKeURsU2l4TnRUX2NYVEpoNTNVcFdDc0FONjJub182OHpxTlJCLWdabHJoVkJHT0dyaDU4eHF1ekp3N0ZwbnVzRlMwY1NQLTlWb3dCR0ZCeUc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBGYnVwTEM5TGZrWGhGN0U0NlpCdlNJU1RKeURsU2l4TnRUX2NYVEpoNTNVcFdDc0FONjJub182OHpxTlJCLWdabHJoVkJHT0dyaDU4eHF1ekp3N0ZwbnVzRlMwY1NQLTlWb3dCR0ZCeUc?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 26 Oct 2026 08:38:46 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-28 20:01:17"
    },
    {
      "source": "Bloomberg",
      "title_ko": "구리 웨이버스 니어 투 2",
      "title_en": "Copper Wavers Near Two-Week High as Traders Look to Fed Meeting",
      "summary_ko": "구리 웨이버스 니어 투 2 관련 핵심 동향이 발표되었습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOeXlxLVRzdXdET0JOdFpWX1JPX1ExUVNtNUFCZEhlenRPOTR3cVBFYkdzVW1ycTlpOS1pVFpTSEI3UjNIVzRPa1BSWHNkc1Y3MjNyQ2FmbEI1dUxEMnBOVEw4M2RLRzlRZGd1OUU3U1ZoUFM5MFBYRUtqNy1UcEZwcm9jRUo1TjV6Qm5YNWZIRzFiWjlQSVVWZ05udFZ0U1RCWl9TVmhITFYwRDVNSkF2a2gyRVg?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxOeXlxLVRzdXdET0JOdFpWX1JPX1ExUVNtNUFCZEhlenRPOTR3cVBFYkdzVW1ycTlpOS1pVFpTSEI3UjNIVzRPa1BSWHNkc1Y3MjNyQ2FmbEI1dUxEMnBOVEw4M2RLRzlRZGd1OUU3U1ZoUFM5MFBYRUtqNy1UcEZwcm9jRUo1TjV6Qm5YNWZIRzFiWjlQSVVWZ05udFZ0U1RCWl9TVmhITFYwRDVNSkF2a2gyRVg%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 28 Oct 2026 11:01:17 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-28 20:01:17"
    },
    {
      "source": "Reuters",
      "title_ko": "트럼프, 시진핑과 희토류 펜타닐 관세 삭감",
      "title_en": "Trump shaves China tariffs in deal with Xi on fentanyl, rare earths",
      "summary_ko": "트럼프, 시진핑과 희토류 펜타닐 관세 삭감 관련 핵심 동향이 발표되었습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Reuters뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNRUN6ajZWR1MxcEY1VUpYNjVtYTFKM2g2ZkFqcmZubVJKTXZ2bHF3dkRWSVl4cXJJdXBBUkZxLUNmNkpoaWxYeHVQOHBkS1pfZ3hIdHkzN05fSU9CTERNZ1EyTDk0VGJUYUFjRENFVURTdWNhVjIxb0RQQ25qS0NfZnQtamhIZ1pld1FUbFJCeC1jSEpVT2laeHhKcE1ocUpBRVFTTkZNXzkxZw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxNRUN6ajZWR1MxcEY1VUpYNjVtYTFKM2g2ZkFqcmZubVJKTXZ2bHF3dkRWSVl4cXJJdXBBUkZxLUNmNkpoaWxYeHVQOHBkS1pfZ3hIdHkzN05fSU9CTERNZ1EyTDk0VGJUYUFjRENFVURTdWNhVjIxb0RQQ25qS0NfZnQtamhIZ1pld1FUbFJCeC1jSEpVT2laeHhKcE1ocUpBRVFTTkZNXzkxZw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 30 Oct 2025 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "OpenAI는 중국의 DeepSeek이 미국 모델을 증류하여 AI를 훈련했다고 밝혔습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOS1JWNDM3elpGZUJXbnA3bS04V0FicHdfV0hyNll1QTg4cmoxWElkVUtrYkcwZnEwYzhZOWpQdE9rU1ZrQ1AyLUtoekRXbFoxTmFtbS1zRzAtaXlabzB0eXN1TlpnQktIVV8wOUtuU1BleWlWZl9BNjVTdkQzdEVISWpnZE5DQ194T2RFMWhMQUpDVVBjU0ZqWUNrZ05qblNxblJOQlgtQlJzSTJ6Ty1rQ1JFdXpKMURLczB4dnVYVQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivwFBVV95cUxOS1JWNDM3elpGZUJXbnA3bS04V0FicHdfV0hyNll1QTg4cmoxWElkVUtrYkcwZnEwYzhZOWpQdE9rU1ZrQ1AyLUtoekRXbFoxTmFtbS1zRzAtaXlabzB0eXN1TlpnQktIVV8wOUtuU1BleWlWZl9BNjVTdkQzdEVISWpnZE5DQ194T2RFMWhMQUpDVVBjU0ZqWUNrZ05qblNxblJOQlgtQlJzSTJ6Ty1rQ1JFdXpKMURLczB4dnVYVQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed), '더 많은 정보 축적' 기다리며 금리 동결",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPaU93czlpTHJXMTJGby0yOGppZGVlVkZzZW4tNC11WTcwVk1yQUZHTVMza0dTLURMRi0tTUtYTHhITkI2OVBWN2k0anZCN2liNnlyNFpaTmFTaWlFTHItWmtBXzh1VWhkRjZBNjVDejQxOGNUTW1HWWRBUzNjbGdKUDV0MlFSWXRsaWQwMXpWQXI?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxPaU93czlpTHJXMTJGby0yOGppZGVlVkZzZW4tNC11WTcwVk1yQUZHTVMza0dTLURMRi0tTUtYTHhITkI2OVBWN2k0anZCN2liNnlyNFpaTmFTaWlFTHItWmtBXzh1VWhkRjZBNjVDejQxOGNUTW1HWWRBUzNjbGdKUDV0MlFSWXRsaWQwMXpWQXI%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "트럼프, 캐나다 수입품에 대한 관세 중단, 카니 “핵심 작업 남아”",
          "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQa1BlNEtwMVJSSkVvQjRBMWRlanN4VUs0aEFKUjIyWU93N090cHl5MjN6Q0VCMWdvUVhseXI4N3Y2aUdXTy1oeHpQVE5TYjdiLVlOcFdaMWswRGVsZzZ0dG5HamdSeFdMSFc5bTZZVHNwaWp3SXRWT3IydFZnR3NSVm13bnEzbTdxajVkbFpzUUhwc01zQzFwWG8yT3RHZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxQa1BlNEtwMVJSSkVvQjRBMWRlanN4VUs0aEFKUjIyWU93N090cHl5MjN6Q0VCMWdvUVhseXI4N3Y2aUdXTy1oeHpQVE5TYjdiLVlOcFdaMWswRGVsZzZ0dG5HamdSeFdMSFc5bTZZVHNwaWp3SXRWT3IydFZnR3NSVm13bnEzbTdxajVkbFpzUUhwc01zQzFwWG8yT3RHZw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "트럼프 \"유럽연합(EU)산 자동차 관세 25%로 인상할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNVE1WMTl1SUo5X1BUQkFPOHd1b2ZfVDR3YzMybjJoRTBPYU5mTVNaM1ZVdkdFaXIwQUt5Q3dyaFRjVDBKX3NiOTgxNTNLNDdWVVBCaTRscDVpR3E3NW5wZEdPR05uNzlacGF3NkFBYlpjX0lwdGlXVDc0ZXdMa3I5X3RKeC0yZkI3eUQzQWpqLTdpWEZFTUtxR1cwb1RkT0JXYjdIaGhTYlNXdHE0MjhJ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxNVE1WMTl1SUo5X1BUQkFPOHd1b2ZfVDR3YzMybjJoRTBPYU5mTVNaM1ZVdkdFaXIwQUt5Q3dyaFRjVDBKX3NiOTgxNTNLNDdWVVBCaTRscDVpR3E3NW5wZEdPR05uNzlacGF3NkFBYlpjX0lwdGlXVDc0ZXdMa3I5X3RKeC0yZkI3eUQzQWpqLTdpWEZFTUtxR1cwb1RkT0JXYjdIaGhTYlNXdHE0MjhJ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:20"
    },
    {
      "source": "Reuters",
      "title_ko": "독점: US DOJ는 Nvidia의 Hugging Face 구매에 대해 문의하고 있다고 소식통은 말합니다.",
      "title_en": "EXCLUSIVE: US DOJ is inquiring about Nvidia's purchase of Hugging Face, sources say",
      "summary_ko": "독점: US DOJ는 Nvidia의 Hugging Face 구매에 대해 문의하고 있다고 소식통은 Reuters에 말했습니다. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNQi1pQlpXMFg0djlmZFhkcGFlc3hJWmxKNXIzeFlTOWRxSXd5YWtCX1FRdUdlWWM1NEZxQVpOWktKbVkyWWR1aFRhbFd3SnRRcW5SZTJ0YXRvQTZ6MjlmVmFMVThhSldFTUpseWRtblVrel8tM0VISmVOVmdVend5UTFOTHhKazBXalpIOHVUdkVmcm5YdTI4UWk3MUJObk9GMzRYOEpkeEFXVnhwZXc?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNQi1pQlpXMFg0djlmZFhkcGFlc3hJWmxKNXIzeFlTOWRxSXd5YWtCX1FRdUdlWWM1NEZxQVpOWktKbVkyWWR1aFRhbFd3SnRRcW5SZTJ0YXRvQTZ6MjlmVmFMVThhSldFTUpseWRtblVrel8tM0VISmVOVmdVend5UTFOTHhKazBXalpIOHVUdkVmcm5YdTI4UWk3MUJObk9GMzRYOEpkeEFXVnhwZXc%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 28 Oct 2026 19:02:16 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "DOJ가 Nvidia의 Hugging Face 거래에 대해 문의했다고 Reuters가 밝혔습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNa3hzZk9tLVg4clhwcUE5N2pFeG9tUUlEOFpFVVlfd0VkXzFsWTZHVGdJMVdBWTN0VlJPc3N2NF9oQndxbG40end5b2xvbnU3TlEyVVNENDZSZUM5Q1VJa0FzSW1rci1hTnFhdWxxWGVaUzRud3ZFU1c1WUp6OFNwY01VSXoyV3ZMNTVlQTNrYzJUSFpvMmdlS3k0QlZVS0YtT3hQOWFwNHlmbV9kQmc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNa3hzZk9tLVg4clhwcUE5N2pFeG9tUUlEOFpFVVlfd0VkXzFsWTZHVGdJMVdBWTN0VlJPc3N2NF9oQndxbG40end5b2xvbnU3TlEyVVNENDZSZUM5Q1VJa0FzSW1rci1hTnFhdWxxWGVaUzRud3ZFU1c1WUp6OFNwY01VSXoyV3ZMNTVlQTNrYzJUSFpvMmdlS3k0QlZVS0YtT3hQOWFwNHlmbV9kQmc%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "소식통에 따르면 DeepSeek은 AI 경쟁을 촉진하기 위해 150억 달러의 기금 모금을 마무리했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOQkI4b1B0WkYzUnhGdTF6b0VTRnBCWjRxelF3Q2g4VlRjTzNUOFFTZUhrM3VHSWs2M1VpWkZqN0FleF9JREgzdXpEWFNHM0VvSXhhNm5pdHRXZkRrNUR0UGFJVUMzRjNDWWRwZ0ZtOEsyMm93VU82Rno1R3FxQTNxMllyeWh2YnJRY19hUjZMbExjank3YUg5anFYdjRHRUdnSlN3cFMwMU9TLVBDSldIYUpUdy1vYTdtS3RHTnphNU1KYTdtYWVzNFFR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiygFBVV95cUxOQkI4b1B0WkYzUnhGdTF6b0VTRnBCWjRxelF3Q2g4VlRjTzNUOFFTZUhrM3VHSWs2M1VpWkZqN0FleF9JREgzdXpEWFNHM0VvSXhhNm5pdHRXZkRrNUR0UGFJVUMzRjNDWWRwZ0ZtOEsyMm93VU82Rno1R3FxQTNxMllyeWh2YnJRY19hUjZMbExjank3YUg5anFYdjRHRUdnSlN3cFMwMU9TLVBDSldIYUpUdy1vYTdtS3RHTnphNU1KYTdtYWVzNFFR%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "독점: Nvidia는 Anthropic의 대규모 IPO에 투자하기 위해 협상 중이라고 소식통은 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPbmduYjZNYlh4TmVDd3dMTzZmU21ud1Q5WVVaYXBOM2hUQ201U2tjeDhoWHd6ZjhlQzdtUWxiNmFibkRpc2VlcmxjbWMzTWljZ0ZZSkF6VHFPWnJVUFQwc2g4RDNtb1FCWjN1R3BBcFRzUHkyTXJiRXZpa0NxV29IWFc1LV9lUXh0bXc3TWNrSHZhT0lPTVU2dEswYWhSVUw2SzFkRkVmSHU0S3c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxPbmduYjZNYlh4TmVDd3dMTzZmU21ud1Q5WVVaYXBOM2hUQ201U2tjeDhoWHd6ZjhlQzdtUWxiNmFibkRpc2VlcmxjbWMzTWljZ0ZZSkF6VHFPWnJVUFQwc2g4RDNtb1FCWjN1R3BBcFRzUHkyTXJiRXZpa0NxV29IWFc1LV9lUXh0bXc3TWNrSHZhT0lPTVU2dEswYWhSVUw2SzFkRkVmSHU0S3c%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia는 Hugging Face 거래를 통해 개방형 AI 모델에 130억 달러를 투자했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPSktMTEFzVUpJM09CZGMxcnEtMVJHTElxMllESE9QbHdMbjl4MmQ2TjJvSjRXY1Q3RUVmNGMxQ2xIMTVtOWhnVHYyWGluNmNDektRcVloUmZfTmdWMDJyMFRrTjZHYzl6aUYyd1JYM3hQenBmeFJ1N3FleW01SF9HeFVSZ3oxMlBsS3BrcHZiblZBWTNSWDQyMzdSWGMwMnJ3NnNTbG14R3FTb1BUdGc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxPSktMTEFzVUpJM09CZGMxcnEtMVJHTElxMllESE9QbHdMbjl4MmQ2TjJvSjRXY1Q3RUVmNGMxQ2xIMTVtOWhnVHYyWGluNmNDektRcVloUmZfTmdWMDJyMFRrTjZHYzl6aUYyd1JYM3hQenBmeFJ1N3FleW01SF9HeFVSZ3oxMlBsS3BrcHZiblZBWTNSWDQyMzdSWGMwMnJ3NnNTbG14R3FTb1BUdGc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:28"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Nvidia 지원 회사, 31억 달러 규모의 GPU 대출 시장 출시",
      "title_en": "Nvidia-Backed Firm Launches $3.1 Billion GPU Loan into Market",
      "summary_ko": "Nvidia 지원 회사, 시장에 31억 달러 규모의 GPU 대출 개시 Bloomberg.com. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. Bloomberg뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNWG4yWWNoTk85a0VzNWR5dnhLNTZUU3RmTVJWSnNJWmZta1FURTYxdXExMmR3ekxwVmRiUU9LaW40ellxb0JFWDJ1RHQ0c3JCSFlxSEF5UmZWNWJ5d2cyaVR5Vl9LMG1EODd2TjhuNnloRXotNzJDZGp5U3V0TXBLYTdhVW44TTlfdVFZUXRPS0ZWRVBQaDFHWVJZWkpqbE1MNUcydEZPckVqU1VBOWs4Tw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxNWG4yWWNoTk85a0VzNWR5dnhLNTZUU3RmTVJWSnNJWmZta1FURTYxdXExMmR3ekxwVmRiUU9LaW40ellxb0JFWDJ1RHQ0c3JCSFlxSEF5UmZWNWJ5d2cyaVR5Vl9LMG1EODd2TjhuNnloRXotNzJDZGp5U3V0TXBLYTdhVW44TTlfdVFZUXRPS0ZWRVBQaDFHWVJZWkpqbE1MNUcydEZPckVqU1VBOWs4Tw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 28 Oct 2026 05:04:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "엔비디아와 메타, 30억 달러 규모 투자 계약으로 AI 협력 강화",
          "original_url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPS2Q3RzNwUk5IQWZ1NjIwYmxWV2xCVjZRQVk2OUQ3a1B5MWhKanZMZ3JyMHVRQ2MwSzRzZVZ4VmxNTGNKWDljd084OTRUSWcwNHdFYmduNTJ1RTAtcW0xRHVobW1BcVNQakJrT3paQkdQODl0dVoxZHNwYXhiVFJpclpNaVZrQ2lqRk5oMnBZYzlPOGc2alc3Q2szb2pDOWJhUDJXUA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipAFBVV95cUxPS2Q3RzNwUk5IQWZ1NjIwYmxWV2xCVjZRQVk2OUQ3a1B5MWhKanZMZ3JyMHVRQ2MwSzRzZVZ4VmxNTGNKWDljd084OTRUSWcwNHdFYmduNTJ1RTAtcW0xRHVobW1BcVNQakJrT3paQkdQODl0dVoxZHNwYXhiVFJpclpNaVZrQ2lqRk5oMnBZYzlPOGc2alc3Q2szb2pDOWJhUDJXUA%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia 지원 Pigment, Microsoft에 맞서기 위해 2억 5천만 달러 모금",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxONzdiTy10MkxyX0NHZzZHU1djY1c1LVE5MDFhNlh1V0tfczVfLXNueGpaT0NySVJXSFAzYUJxNTFpUEM2OEt1VTlyUFdjcEJ2NDFsX2t1cDBsT0NvOWVTdUtNc19INmE5d2JneFVOVUhpczN1ZE9saU93WE95VzB3Ml9TMGxJTGdTNUlkdG5ET09qeFJKQVNDN3lBdXNGOU5uZE1Ma1k3OWFjMUxvTGlLUEtR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxONzdiTy10MkxyX0NHZzZHU1djY1c1LVE5MDFhNlh1V0tfczVfLXNueGpaT0NySVJXSFAzYUJxNTFpUEM2OEt1VTlyUFdjcEJ2NDFsX2t1cDBsT0NvOWVTdUtNc19INmE5d2JneFVOVUhpczN1ZE9saU93WE95VzB3Ml9TMGxJTGdTNUlkdG5ET09qeFJKQVNDN3lBdXNGOU5uZE1Ma1k3OWFjMUxvTGlLUEtR%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia가 지원하는 Firmus는 AI 조사가 증가하는 가운데 50억 달러 규모의 호주 IPO를 취소합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQY21BNU1iQlJDajVWejFGYjVrM2J0cllKVmc5WEVZX2tMQnROZGFJRkRDekhCaFY0MzRnYXhYOGNaVi11cFlndVo5b1RIYUpaS25JbV92dVkwVEZpXzVaTWdtR3piN0d6SUI2OW9qaEI4eHVCV1VBQkFBWXhyemttZDlhMlFVa3hQdDhpWVZkLW95cmxNaEFzZGxWb2dzU3VPSzNlNTc4OEF5YXV1LVoxOHZuUzFsMTZfaDJuckx4UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivwFBVV95cUxQY21BNU1iQlJDajVWejFGYjVrM2J0cllKVmc5WEVZX2tMQnROZGFJRkRDekhCaFY0MzRnYXhYOGNaVi11cFlndVo5b1RIYUpaS25JbV92dVkwVEZpXzVaTWdtR3piN0d6SUI2OW9qaEI4eHVCV1VBQkFBWXhyemttZDlhMlFVa3hQdDhpWVZkLW95cmxNaEFzZGxWb2dzU3VPSzNlNTc4OEF5YXV1LVoxOHZuUzFsMTZfaDJuckx4UQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "엔비디아",
          "original_url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNQ2FQR2h6dGd0eThzSjRKNENDQV9YMnpIZlVfWTNVV2tlSTEzZDJyU09MZ2s1Sk9lWVRESzdwQmdfQjlsRzZPVmJuUzRLQkp5UXhVUHpia2pZWHVfRmQyR21COWx2dGZxR0pzUmxvT3RUUDVhX1JRWm1LQXRfVmV5bGpIMFYtRHFoNW1UMlV3Q3h5X19QaVAxMnJ1SkxrU0pKVnJYcW9LNTNENVJldFc1VTNoRHdRRmNkVFM4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuwFBVV95cUxNQ2FQR2h6dGd0eThzSjRKNENDQV9YMnpIZlVfWTNVV2tlSTEzZDJyU09MZ2s1Sk9lWVRESzdwQmdfQjlsRzZPVmJuUzRLQkp5UXhVUHpia2pZWHVfRmQyR21COWx2dGZxR0pzUmxvT3RUUDVhX1JRWm1LQXRfVmV5bGpIMFYtRHFoNW1UMlV3Q3h5X19QaVAxMnJ1SkxrU0pKVnJYcW9LNTNENVJldFc1VTNoRHdRRmNkVFM4%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:32"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "U.A.E. 이란에서의 미국 전쟁을 지원한 공로로 모두가 탐내는 AI 칩을 보상으로 받았습니다",
      "title_en": "U.A.E. Rewarded With Coveted AI Chips for Supporting U.S. War in Iran",
      "summary_ko": "U.A.E. 미국의 이란 전쟁 지원에 대한 보상으로 탐나는 AI 칩을 받았습니다 WSJ. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Wall Street Journal뿐만 아니라 Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5vMmhlQVRPQ1ROQmh3ejlOam1KUmJ0NzZvVmZTdEVnYTdwZlNWVHotdWE1b0JKeFBuX1NYVjlxV29QRXA4YmU4UWE1VUpBTmJaakhXS2hDVjIzNkFjMF9rX3U5Y1RlNWQ3SXpxTndPOU54QzFMMkZn?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMid0FVX3lxTE5vMmhlQVRPQ1ROQmh3ejlOam1KUmJ0NzZvVmZTdEVnYTdwZlNWVHotdWE1b0JKeFBuX1NYVjlxV29QRXA4YmU4UWE1VUpBTmJaakhXS2hDVjIzNkFjMF9rX3U5Y1RlNWQ3SXpxTndPOU54QzFMMkZn%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 15 Jul 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Wall Street Journal",
          "title_ko": "독점 | AI 칩의 전력 효율을 높이는 스타트업이 5억 달러 자금 조달",
          "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNX3FJSWlWU2kyaHN4ekJ1eTNFWmg2NGFZUkRVUVlWMWJncFRyX0MxX0JUOE9NTEttd3NFUjVKV0JuNUN4N1dLSHo1MTg2SHh3cDJ6ZGdFQlNxYkI2UFp6QmdFZFgxTW9pdnY0TS1lekxncXNEMzNLVzNXZFM2OUpuRHpKU2w3R2JtRkg3b3VTV1NUUE84RFpEUlpTMXBHQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxNX3FJSWlWU2kyaHN4ekJ1eTNFWmg2NGFZUkRVUVlWMWJncFRyX0MxX0JUOE9NTEttd3NFUjVKV0JuNUN4N1dLSHo1MTg2SHh3cDJ6ZGdFQlNxYkI2UFp6QmdFZFgxTW9pdnY0TS1lekxncXNEMzNLVzNXZFM2OUpuRHpKU2w3R2JtRkg3b3VTV1NUUE84RFpEUlpTMXBHQQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-28 20:01:35"
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
