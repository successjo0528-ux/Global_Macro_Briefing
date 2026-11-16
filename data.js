window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-11-17 05:01:34",
    "date_str": "2026년 11월 17일 (화)",
    "indicator_count": 19,
    "news_count": 24
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
      "price": 4.125,
      "previous_close": 4.0,
      "change": 0.125,
      "change_percent": 3.12,
      "display_price": "4.125%",
      "status": "up",
      "history": [
        4.0,
        4.035,
        4.115,
        4.115,
        4.128,
        4.122,
        4.125
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-11-16 20:00:39"
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
      "price": 5.113,
      "previous_close": 4.859,
      "change": 0.254,
      "change_percent": 5.23,
      "display_price": "5.113%",
      "status": "up",
      "history": [
        4.859,
        4.864,
        4.983,
        4.998,
        5.103,
        5.154,
        5.113
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-11-16 20:00:39",
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
      "price": 5.459,
      "previous_close": 5.26,
      "change": 0.199,
      "change_percent": 3.78,
      "display_price": "5.459%",
      "status": "up",
      "history": [
        5.26,
        5.256,
        5.35,
        5.356,
        5.433,
        5.481,
        5.459
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-11-16 20:00:40"
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
      "price": 103.52,
      "previous_close": 101.65,
      "change": 1.87,
      "change_percent": 1.84,
      "display_price": "103.52 pt",
      "status": "up",
      "history": [
        101.65,
        102.23,
        102.91,
        103.17,
        103.41,
        103.52
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-11-16 20:00:40"
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
      "price": 159.45,
      "previous_close": 157.498,
      "change": 1.952,
      "change_percent": 1.24,
      "display_price": "159.45엔",
      "status": "up",
      "history": [
        157.498,
        158.292,
        157.983,
        158.705,
        159.734,
        159.875,
        159.45
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-11-16 20:00:40"
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
      "price": 3865.0,
      "previous_close": 4114.5,
      "change": -249.5,
      "change_percent": -6.06,
      "display_price": "$3,865.00",
      "status": "down",
      "history": [
        4114.5,
        4030.2,
        4000.5,
        3885.3,
        3886.3,
        3865.0
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-11-16 20:00:40"
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
      "price": 85.61,
      "previous_close": 86.85,
      "change": -1.24,
      "change_percent": -1.43,
      "display_price": "$85.61",
      "status": "down",
      "history": [
        86.85,
        86.04,
        86.53,
        88.74,
        88.56,
        85.61
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-11-16 20:00:40"
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
      "price": 64994.49,
      "previous_close": 73720.12,
      "change": -8725.63,
      "change_percent": -11.84,
      "display_price": "$64,994",
      "status": "down",
      "history": [
        73720.117,
        73964.469,
        71342.969,
        68249.273,
        64128.051,
        65305.062,
        64994.488
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-11-16 20:00:41"
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
      "price": 912.1,
      "previous_close": 316.5,
      "change": 595.6,
      "change_percent": 188.18,
      "display_price": "$912.1B (약 9,121억$)",
      "status": "up",
      "history": [
        345.6,
        335.1,
        922.6,
        933.1,
        295.5,
        316.5,
        912.1
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-11-16 20:00:41"
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
      "price": 7424.04,
      "previous_close": 7353.73,
      "change": 70.31,
      "change_percent": 0.96,
      "display_price": "7,424.04",
      "status": "up",
      "history": [
        7376.86,
        7549.94,
        7520.93,
        7619.38,
        7592.4,
        7561.67,
        7424.04
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-11-16 20:00:43"
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
      "price": 27279.146,
      "previous_close": 26629.81,
      "change": 649.336,
      "change_percent": 2.44,
      "display_price": "27,279.15",
      "status": "up",
      "history": [
        26989.99,
        27907.631,
        27740.789,
        28374.25,
        28289.189,
        27943.74,
        27279.146
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-11-16 20:00:43"
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
      "price": 9710.795,
      "previous_close": 9011.14,
      "change": 699.655,
      "change_percent": 7.76,
      "display_price": "9,710.80",
      "status": "up",
      "history": [
        9390.25,
        10033.93,
        9998.33,
        10564.11,
        10506.67,
        10146.32,
        9710.795
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-11-16 20:00:43"
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
      "price": 24.4,
      "previous_close": 25.64,
      "change": -1.24,
      "change_percent": -4.84,
      "display_price": "24.40",
      "status": "down",
      "history": [
        25.64,
        19.92,
        19.46,
        17.49,
        18.7,
        19.3,
        24.4
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-11-16 20:00:44"
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
      "price": 1335.37,
      "previous_close": 1356.34,
      "change": -20.97,
      "change_percent": -1.55,
      "display_price": "1,335.37원",
      "status": "down",
      "history": [
        1356.34,
        1362.7,
        1343.84,
        1341.91,
        1336.26,
        1333.78,
        1335.37
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-11-16 20:00:44",
      "fx_averages": {
        "avg_1y": 1442.3,
        "avg_3y": 1401.7
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
      "price": 5100.5,
      "previous_close": 5383.8,
      "change": -283.3,
      "change_percent": -5.26,
      "display_price": "5,100.50",
      "status": "down",
      "history": [
        5059.69,
        5018.85,
        5239.13,
        5375.36,
        5342.73,
        5290.53
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-11-16 20:00:44"
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
      "price": 665.65,
      "previous_close": 678.41,
      "change": -12.76,
      "change_percent": -1.88,
      "display_price": "665.65",
      "status": "down",
      "history": [
        644.27,
        638.97,
        667.61,
        705.1,
        696.53,
        699.66
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-11-16 20:00:44"
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
      "updated_at": "2026-11-16 20:00:45"
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
      "updated_at": "2026-11-16 20:00:46"
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
      "price": 137.84,
      "previous_close": 131.65,
      "change": 6.19,
      "change_percent": 4.7,
      "display_price": "$137.84",
      "status": "up",
      "history": [
        137.01,
        142.1,
        139.18,
        147.81,
        145.38,
        142.78,
        137.84
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-11-16 20:00:46"
    }
  ],
  "news": [
    {
      "source": "연합인포맥스",
      "title_ko": "[뉴욕 금가격] 4천달러 붕괴…연준 우려·이란 기대감 퇴조에 3% 급락",
      "title_en": "",
      "summary_ko": "[뉴욕 금가격] 4천달러 붕괴…연준 우려·이란 기대감 퇴조에 3% 급락 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE4xaVE5TVZsdkdkQXhBX0tnMGpJVDB2VzRnNkw0QnN6dDlOWmV0Z0hQbHRaY3pXc2RkeFRyUmwtRFhiRjFYc2RCT0ZTUmduWFZvbVlGbW1FbGRRNE4wRjlBWjZQd0h0NnlOX1JUSHAtb2I?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE4xaVE5TVZsdkdkQXhBX0tnMGpJVDB2VzRnNkw0QnN6dDlOWmV0Z0hQbHRaY3pXc2RkeFRyUmwtRFhiRjFYc2RCT0ZTUmduWFZvbVlGbW1FbGRRNE4wRjlBWjZQd0h0NnlOX1JUSHAtb2I?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 12 Nov 2026 20:02:41 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-16 20:00:53"
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
      "crawled_at": "2026-11-16 20:00:57"
    },
    {
      "source": "Reuters",
      "title_ko": "연준(Fed) 해맥, 느리고 꾸준한 금리 인상 주장 재차 강조",
      "title_en": "Fed's Hammack reiterates case for slow, steady rate hikes -Bloomberg TV",
      "summary_ko": "연준(Fed) 해맥, 느리고 꾸준한 금리 인상 주장 재차 강조 관련 핵심 동향이 발표되었습니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNYk9kal9uc0hmSGMySFhuVE1BbTd3dkV1SkdjbEx3U2NuZFdoMFI1TThKSHVnLUNGTVNOOVpRM3VVUnBZdkxISEhKdVloQzBxUGlEcm15ZkQyUGZjWW5IbVhhZVNKWnBleE1PZzAyNUtmQUVrWHZ1R2YwU1FSZWVjczdVWXcwX3Z4VWhsVXZwUE1EaWMtZ3I0d1I2WlVOdm5rdGdZMFl4VVJENHRaSUE?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNYk9kal9uc0hmSGMySFhuVE1BbTd3dkV1SkdjbEx3U2NuZFdoMFI1TThKSHVnLUNGTVNOOVpRM3VVUnBZdkxISEhKdVloQzBxUGlEcm15ZkQyUGZjWW5IbVhhZVNKWnBleE1PZzAyNUtmQUVrWHZ1R2YwU1FSZWVjczdVWXcwX3Z4VWhsVXZwUE1EaWMtZ3I0d1I2WlVOdm5rdGdZMFl4VVJENHRaSUE%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 16 Nov 2026 19:34:26 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "연준(Fed)의 콜린스 \"경제적 위험 관리에는 점진적인 금리 인상이 최선\"",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPbHZfX3JqempNenlnSUpVcTd4dXY4djdJU1c2VkZ2Um5fYXkyVTMtYUxBZlBrcXVqQXJkQ0RjejZRQTdBLWxPYzcyRDBfTGxmdUVTekN0TFFWdHNfZFh6ckt0c1RCTVBwZzZjZ3NacWJWSDhvMVRGVDNpR0o2YTBwdmJILTE4eWs2SlQ5YnVHN0ctMFM3bWJsQkhtblRUMjI0amRHcFZLaXNaWWJz?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxPbHZfX3JqempNenlnSUpVcTd4dXY4djdJU1c2VkZ2Um5fYXkyVTMtYUxBZlBrcXVqQXJkQ0RjejZRQTdBLWxPYzcyRDBfTGxmdUVTekN0TFFWdHNfZFh6ckt0c1RCTVBwZzZjZ3NacWJWSDhvMVRGVDNpR0o2YTBwdmJILTE4eWs2SlQ5YnVHN0ctMFM3bWJsQkhtblRUMjI0amRHcFZLaXNaWWJz%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "인도의 인플레이션이 중앙은행의 6% 한도를 위반하고 금리 인상 가능성이 높아졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNSlE4RjR5cTc2cVI3bWZZWHJxcGdTTXA4UjBQNUEtbVdfeXJwdXZ1b21ZejRTaERGWmlXa0JDZ2ZKWHdBaUx3cVFwRnlTSzVzci1FakptNjVUWVZZYXZ2WEEwVy1LMktOWFlUdE5GNHpLbTBMNTR2VFFwRHUtSDFqUkNnUkFNUDBBR2Z0Zm84YjZraTJnaV9uUEU1NVZGN0xnaHVIMWVxRFNiOEsyelNQdWI0R1Y3UVpZ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuAFBVV95cUxNSlE4RjR5cTc2cVI3bWZZWHJxcGdTTXA4UjBQNUEtbVdfeXJwdXZ1b21ZejRTaERGWmlXa0JDZ2ZKWHdBaUx3cVFwRnlTSzVzci1FakptNjVUWVZZYXZ2WEEwVy1LMktOWFlUdE5GNHpLbTBMNTR2VFFwRHUtSDFqUkNnUkFNUDBBR2Z0Zm84YjZraTJnaV9uUEU1NVZGN0xnaHVIMWVxRFNiOEsyelNQdWI0R1Y3UVpZ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed)은 금리 인상을 조정할 시간이 있다고 Daly는 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQVUQyM3Nob1JwMmZBS1JHN1FtZ2h5eTZFWlpZWkJ1Tm9XRlByR2lJWEZkdjJKcVVYbklvMW9GekZ5RDZDQU5KRkVaVHZzN2d6cm5NQTEzWlNtQkNGWmw2dXNJN2hvMFBwenUzdFZDLURfM2JsRVBmckhzY2FZRVJPemM5S0ZIX1BqQzFrbW1wN3lxdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikgFBVV95cUxQVUQyM3Nob1JwMmZBS1JHN1FtZ2h5eTZFWlpZWkJ1Tm9XRlByR2lJWEZkdjJKcVVYbklvMW9GekZ5RDZDQU5KRkVaVHZzN2d6cm5NQTEzWlNtQkNGWmw2dXNJN2hvMFBwenUzdFZDLURfM2JsRVBmckhzY2FZRVJPemM5S0ZIX1BqQzFrbW1wN3lxdw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)의 콜린스 \"꾸준하고 점진적인 금리 인상이 적절\"",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPSmxPcmNNS1JISWxpNy11VFVWNUZsdi13QmZIZDNmT0Npcno0S1JMYzJtRnlqckY4bGU5U3JlczcyeVJTYzZhRlpWeDBkeTR0TGw3Q2VHRzNCYUM3eUZQVHdPUmUxOXd6NnJMSnZSS01EUjFSdTJIeFhXNlc5cThsNXdMZnRzODZMLWNiR0N5QVR5RWFhMzFwUUxPYlYxOWxDTi0yOEg5ZjdLVlk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxPSmxPcmNNS1JISWxpNy11VFVWNUZsdi13QmZIZDNmT0Npcno0S1JMYzJtRnlqckY4bGU5U3JlczcyeVJTYzZhRlpWeDBkeTR0TGw3Q2VHRzNCYUM3eUZQVHdPUmUxOXd6NnJMSnZSS01EUjFSdTJIeFhXNlc5cThsNXdMZnRzODZMLWNiR0N5QVR5RWFhMzFwUUxPYlYxOWxDTi0yOEg5ZjdLVlk%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:02"
    },
    {
      "source": "Reuters",
      "title_ko": "Bessent, 연준(Fed)의 Goolsbee, 인플레이션에서 에너지 쇼크의 역할에 대해 논의",
      "title_en": "Bessent, Fed's Goolsbee divided on role of energy shock in inflation",
      "summary_ko": "베센트-연준(Fed)의 굴스비, 인플레이션에서 에너지 쇼크의 역할로 나누어 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 CNBC, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOWGl4M3I4cEx4Q1pteUwtd3I3OFBYWWFUU096V1Y3X2oxdl9KOFprODJXTEoxallGdk8tXzNuMzlWSXdjTTBFNjUxUHFwWmdVZTFHeTh0TEVYcWtNSXI2aUJkRFdKVFgtNmpWS01zTlhMS21ndThYQjY2bDhXSFpnV2c0Sl8wSzdBWnJzNmZVR05iUGdxU3BCUnBIYlcteEQtRkNMbDBQRF82QXVESmZSRGNvZG9yaGtfbm5QNHBTUE1jNjA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxOWGl4M3I4cEx4Q1pteUwtd3I3OFBYWWFUU096V1Y3X2oxdl9KOFprODJXTEoxallGdk8tXzNuMzlWSXdjTTBFNjUxUHFwWmdVZTFHeTh0TEVYcWtNSXI2aUJkRFdKVFgtNmpWS01zTlhMS21ndThYQjY2bDhXSFpnV2c0Sl8wSzdBWnJzNmZVR05iUGdxU3BCUnBIYlcteEQtRkNMbDBQRF82QXVESmZSRGNvZG9yaGtfbm5QNHBTUE1jNjA%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 13 Nov 2026 15:40:04 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "8월에도 인플레이션이 지속되어 연준(Fed)의 관심이 고정될 가능성이 있음",
          "original_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE45NWtYSmQ5R05raVhQakVkMUdmLWJVTmlCR0R3WWZBbmVsVVQ3SEpnS181Wk5qRUt1cWJhelI4cEZtUDVwb0c5U2dNN0hiZVd0NkdQU1Y0SWRrMlJnQjlXZ1BtdlBHbzF2WkswVFhUVTNXQ3dkcmc5WtIBfkFVX3lxTE9FQ0o0emFuVFUxWFIyNEpyaXpvaS0wVVlydUtLSHhBVDh1blJ6LTdreGozdjZjdmo5eXF5cFdYc05xQjFCMVhnQzFMRkpJVkk2VWwzUlJ3a3F6bjZXTEt4dW1aUDdEWFdHek9FSTVUVTAxdmNSVk8xa0dUMXk5dw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMieEFVX3lxTE45NWtYSmQ5R05raVhQakVkMUdmLWJVTmlCR0R3WWZBbmVsVVQ3SEpnS181Wk5qRUt1cWJhelI4cEZtUDVwb0c5U2dNN0hiZVd0NkdQU1Y0SWRrMlJnQjlXZ1BtdlBHbzF2WkswVFhUVTNXQ3dkcmc5WtIBfkFVX3lxTE9FQ0o0emFuVFUxWFIyNEpyaXpvaS0wVVlydUtLSHhBVDh1blJ6LTdreGozdjZjdmo5eXF5cFdYc05xQjFCMVhnQzFMRkpJVkk2VWwzUlJ3a3F6bjZXTEt4dW1aUDdEWFdHek9FSTVUVTAxdmNSVk8xa0dUMXk5dw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed)의 윌리엄스 총재는 중앙은행이 인플레이션을 목표 수준으로 되돌리기 위해 '해야 할 일'이 있다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNeGRuWWM4eDJNZlg0NWlDTF9Xc1E2c3lBb0NzY3YwSGg4bnlqMnd6X2RnbmhkTk9lUnY0UC1iQVdBdzR2TUUyZVZ6UXRtcExlejMyQzZlTDV3c0V0a0ExRWlsaENJVzZ5LVVvb1FyZENmTG9VVWl5V1BQR2diUF9JdzhLU3g4RDc0OG9ld05FMFhWTnFKUWZaeW9zUUZOektDSC1GejczRzFOWkRUcDJJMDJabjA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxNeGRuWWM4eDJNZlg0NWlDTF9Xc1E2c3lBb0NzY3YwSGg4bnlqMnd6X2RnbmhkTk9lUnY0UC1iQVdBdzR2TUUyZVZ6UXRtcExlejMyQzZlTDV3c0V0a0ExRWlsaENJVzZ5LVVvb1FyZENmTG9VVWl5V1BQR2diUF9JdzhLU3g4RDc0OG9ld05FMFhWTnFKUWZaeW9zUUZOektDSC1GejczRzFOWkRUcDJJMDJabjA%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed) 베팅의 인플레이션 테스트 전 미국 주식 표류: 시장 랩",
          "original_url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPTmVnUHB5bWw0Y052NTU5ZkNsOGdwUXVCWnIwczVnQWJKWmJiaUZta09PNGhNYVZWSENvOFVReWJIVldFcDJNcmlOQ3RyMWhHQThNcmtnU0FIZldHWHJ4NldqbkVrYUlseVNBN0xycmRrUjdFVWRQQll6MzhBUHNOS2NidGtDc01LeWlNd01WNGJxcm5E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilAFBVV95cUxPTmVnUHB5bWw0Y052NTU5ZkNsOGdwUXVCWnIwczVnQWJKWmJiaUZta09PNGhNYVZWSENvOFVReWJIVldFcDJNcmlOQ3RyMWhHQThNcmtnU0FIZldHWHJ4NldqbkVrYUlseVNBN0xycmRrUjdFVWRQQll6MzhBUHNOS2NidGtDc01LeWlNd01WNGJxcm5E%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed)은 '인플레이션에 대해 할 일이 있다'고 KC연준(Fed) 의장이 말했다.",
          "original_url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxORXg3dWdlUEMzckhPaldaYlFrSXlzQnVLeEJLRGtnMFFpeWh5VXI3akUxWEtLQ3JwSk92b2pvWi1FdjNFWVpBZm9Jck56NDUwQkZDUGZpUG01X3RDLS02enpGcWpnXzc3ZWctengxamdOTDY1MzdYMzgxR0V2THk3Zl9xbXZhTEcyWHEzRDU2YWZ2dTZVaFVpNA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimAFBVV95cUxORXg3dWdlUEMzckhPaldaYlFrSXlzQnVLeEJLRGtnMFFpeWh5VXI3akUxWEtLQ3JwSk92b2pvWi1FdjNFWVpBZm9Jck56NDUwQkZDUGZpUG01X3RDLS02enpGcWpnXzc3ZWctengxamdOTDY1MzdYMzgxR0V2THk3Zl9xbXZhTEcyWHEzRDU2YWZ2dTZVaFVpNA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:09"
    },
    {
      "source": "Bloomberg",
      "title_ko": "연준(Fed)이 2027년 10월 공개시장위원회(FOMC) 금리 회의를 공개합니다.",
      "title_en": "Watch Fed Drops October 2027 FOMC Rate Meeting",
      "summary_ko": "연준(Fed)이 2027년 10월 공개시장위원회(FOMC) 금리 회의 Bloomberg.com을 삭제합니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOZlVuNmVpblVBZmlqd2JSYy1scDRVQnBTYV9GLUZ0RmZ1WWtkWHZMdFJnWFgtdFhYWS1lTEFacGFURjJHSURMWUJGbUw0SjNDZGU3MnRLRDRmdVRuSjZxVXFSRWNYR0dYY1E3S0VDdElYS1ZwUTExOVozSTZyRDJ5SS1uRnJ4TFVLcU4xUGNaREpPNUZvYWFtd0RtQQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimwFBVV95cUxOZlVuNmVpblVBZmlqd2JSYy1scDRVQnBTYV9GLUZ0RmZ1WWtkWHZMdFJnWFgtdFhYWS1lTEFacGFURjJHSURMWUJGbUw0SjNDZGU3MnRLRDRmdVRuSjZxVXFSRWNYR0dYY1E3S0VDdElYS1ZwUTExOVozSTZyRDJ5SS1uRnJ4TFVLcU4xUGNaREpPNUZvYWFtd0RtQQ%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 12 Nov 2026 19:24:18 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-16 20:01:12"
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
      "crawled_at": "2026-11-16 20:01:15"
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
          "source": "Bloomberg",
          "title_ko": "태양광 제조업체가 축소하더라도 은 시장은 적자 상태",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOTkNjVWVrTEZ4dmVLN0ZldTRxMmRGWjE1dTlrMTJiMC1scDB2ekxYOXdKMy1vU2VwMElwTEprQUx3NFdPekJpUVIyWFdpeDloMllJYWxydDlqR1d0NDVaeUpEcWVmVGpHTC1hTnU1Vm5Fak42QXRLa1E2ZkEyRVBJd3pUbXVYX3lhaWlXNTFvQkpCakpJbGxiMGQ1dWxucFphTTlKa0Q1NnQxYW5uZmJR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxOTkNjVWVrTEZ4dmVLN0ZldTRxMmRGWjE1dTlrMTJiMC1scDB2ekxYOXdKMy1vU2VwMElwTEprQUx3NFdPekJpUVIyWFdpeDloMllJYWxydDlqR1d0NDVaeUpEcWVmVGpHTC1hTnU1Vm5Fak42QXRLa1E2ZkEyRVBJd3pUbXVYX3lhaWlXNTFvQkpCakpJbGxiMGQ1dWxucFphTTlKa0Q1NnQxYW5uZmJR%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "인도의 10월 무역적자는 금 수입이 급증하면서 398억 8천만 달러로 1년 중 최고치를 기록했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQVC1qbUMzMG9XdFpsRGZQQzNVa3d1R2hfem5KQUplcU1DZWd4amxfa0Z0cTQ0QkU2SkkybmlacTlaNFlNSlB0UkJ6OWJZTUxzZ19lbDlZcmt2RHFMeUF3UjhvRHpFWnVwYzU0RkN1WF9MWFFuOThuMHJUaTdPdDh4VWtQMm9pVEZDZFdjcmVicDZzVDlhSzdHUTBsNWF4VkV2Y1FtRlAyT0tYZmhCdWFyUERaQy1JNDJuVU0tSw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxQVC1qbUMzMG9XdFpsRGZQQzNVa3d1R2hfem5KQUplcU1DZWd4amxfa0Z0cTQ0QkU2SkkybmlacTlaNFlNSlB0UkJ6OWJZTUxzZ19lbDlZcmt2RHFMeUF3UjhvRHpFWnVwYzU0RkN1WF9MWFFuOThuMHJUaTdPdDh4VWtQMm9pVEZDZFdjcmVicDZzVDlhSzdHUTBsNWF4VkV2Y1FtRlAyT0tYZmhCdWFyUERaQy1JNDJuVU0tSw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:19"
    },
    {
      "source": "Reuters",
      "title_ko": "베센트 \"미국, 이란에 본 적 없는 조치 적용할 것\"",
      "title_en": "Bessent says US to apply measures never seen on Iran",
      "summary_ko": "베센트 \"미국, 이란에서는 본 적 없는 조치 적용할 것\" Reuters. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 CNBC, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 13 Aug 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "베센트 \"미국, 이란에 역대 가장 강력한 제재 가할 것\", 중국에 협력 촉구",
          "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOUlFnUHhPNjlxRW5kTy03TFctOE1ST1NabGVNalozY2hiR2RKcEtfV1ZRblJ1VlJXQXRNem1yZmpIRVVYUjJOd2pzWElTX0JVeXZVR1V1Tk5NOG5oWWUtRVZzWDNFOE5KbE1VNmtubXdodnVzQ1RZMFV3TnpUUXVHM1N5MXZqZTBtdW1iUG8xS18wdi1ranhQQXpfVDdiYnRsc09iN3JtbEhZTVIwS202X0lmSkF2V0c2dFV5NQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxOUlFnUHhPNjlxRW5kTy03TFctOE1ST1NabGVNalozY2hiR2RKcEtfV1ZRblJ1VlJXQXRNem1yZmpIRVVYUjJOd2pzWElTX0JVeXZVR1V1Tk5NOG5oWWUtRVZzWDNFOE5KbE1VNmtubXdodnVzQ1RZMFV3TnpUUXVHM1N5MXZqZTBtdW1iUG8xS18wdi1ranhQQXpfVDdiYnRsc09iN3JtbEhZTVIwS202X0lmSkF2V0c2dFV5NQ%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "미국채/재무부 Sec. 이란 위협에 대한 베센트",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQWlVVRGZTa2I2M1RlNlREVTZqd0k4dF9KeVVNLTZWSTk3aXVNVmpMUXFDLWRhOXhkS0s1ZEJBQXE1ZFdDYkdFeEp6WU9oSm5rOG5yeVdpaFZjdE5lN1lTSmZtQklnalNrdVBwcGp5cUo1a3ViVm01RFVnbkQ3dVNpTlZpYU1lX3hCUzQ5ZGl0R0RhRVV6dTNERDVCM2p3cG1GT2NWbzFHTkFob2dK?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxQWlVVRGZTa2I2M1RlNlREVTZqd0k4dF9KeVVNLTZWSTk3aXVNVmpMUXFDLWRhOXhkS0s1ZEJBQXE1ZFdDYkdFeEp6WU9oSm5rOG5yeVdpaFZjdE5lN1lTSmZtQklnalNrdVBwcGp5cUo1a3ViVm01RFVnbkQ3dVNpTlZpYU1lX3hCUzQ5ZGl0R0RhRVV6dTNERDVCM2p3cG1GT2NWbzFHTkFob2dK%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "베센트, 이란 위협 커져가는 가운데 군사기지로 이전",
          "original_url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOajV5Qnhma05Zd0llOVU2c3JoTkpLcjJOLThqUjhoYWhob25vUHV6WEhzQW9ISTRlU3IxaTc2cUlDbFhwNHVZbTd3NVpxNjg0UEUzTENnVHd5ODI5QmpUWmUwTkQ2dzJVRmw2U21vUmdfRHJ5WW9Vdml2cERNWExrYnliQdIBiAFBVV95cUxNLTZLNDB4aVVFRkN3Rl9vUzdiRU1laEVRNDVMSlQxRHBRUkpyblJuRUJHM3drN0hOQzJ4elA5d3Z5dGUwbUl5eTBmcTdFa0tDdkItMENQM0xONFY1Z19DSVd3bXdjdzBoQm1QR19GVGs4QzhpckN4ZnIyZVZmT1AyTGl4QklZV0t5?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMigwFBVV95cUxOajV5Qnhma05Zd0llOVU2c3JoTkpLcjJOLThqUjhoYWhob25vUHV6WEhzQW9ISTRlU3IxaTc2cUlDbFhwNHVZbTd3NVpxNjg0UEUzTENnVHd5ODI5QmpUWmUwTkQ2dzJVRmw2U21vUmdfRHJ5WW9Vdml2cERNWExrYnliQdIBiAFBVV95cUxNLTZLNDB4aVVFRkN3Rl9vUzdiRU1laEVRNDVMSlQxRHBRUkpyblJuRUJHM3drN0hOQzJ4elA5d3Z5dGUwbUl5eTBmcTdFa0tDdkItMENQM0xONFY1Z19DSVd3bXdjdzBoQm1QR19GVGs4QzhpckN4ZnIyZVZmT1AyTGl4QklZV0t5%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent는 미 국채/재무부가 무역 블랙리스트에서 Megaspeed를 선호한다고 밝혔습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNWVFxSHpBeEg2MmF4VFBhWXQwNHJscXVYdEYtc1V4T2c1d25kUlJQY1hGbWI1OUxQZ1Z4aHMtUGJWU1ZOQzE3Ulp4aVFZSlhTbHBUTmpzTlQxV2hzMlhtNzYxbFBOckpWWkQwOUM0VGh2QnN6SEpzTWhMQnVJM0dYVUFBYXIzWl9tT21GLUVlVHFCSldxNTB5eGllLUhwcE53U3JJSmcydEdPWTV4OHc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNWVFxSHpBeEg2MmF4VFBhWXQwNHJscXVYdEYtc1V4T2c1d25kUlJQY1hGbWI1OUxQZ1Z4aHMtUGJWU1ZOQzE3Ulp4aVFZSlhTbHBUTmpzTlQxV2hzMlhtNzYxbFBOckpWWkQwOUM0VGh2QnN6SEpzTWhMQnVJM0dYVUFBYXIzWl9tT21GLUVlVHFCSldxNTB5eGllLUhwcE53U3JJSmcydEdPWTV4OHc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:27"
    },
    {
      "source": "매일경제",
      "title_ko": "트럼프 “멕시코, 불법 이민 막아라”…불응 땐 관세 두 배 경고",
      "title_en": "",
      "summary_ko": "트럼프 “멕시코, 불법 이민 막아라”…불응 땐 관세 두 배 경고 매일경제. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. 매일경제뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBZQlVCTWI0V1NYTWJJSWx6UWVRTTFMRUhDelZCNWRrV0Z5b09xQnJGSndObV9QQTgwem9Bd1VvUzNnSWpoYUVSVkVWdnVXT0xVc3c?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBZQlVCTWI0V1NYTWJJSWx6UWVRTTFMRUhDelZCNWRrV0Z5b09xQnJGSndObV9QQTgwem9Bd1VvUzNnSWpoYUVSVkVWdnVXT0xVc3c?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 12 Nov 2026 13:48:44 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "트럼프 \"멕시코, 미국行 불법 이민자 막지 않으면 관세 2배 인상\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5DWFdNNkNZSnowSkJfaFQ5VlRfNzNWNDZ4WXRJSVN2N20yaXlxcFh5a0VvRGxpNWhPalYyLXdVMG5uT3dKNy13TXpnZTNDbU5KMFNfQVYzbmRlZXFLTTQ5TVd4NnQ1T1dMYmdyYXNmdXQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5DWFdNNkNZSnowSkJfaFQ5VlRfNzNWNDZ4WXRJSVN2N20yaXlxcFh5a0VvRGxpNWhPalYyLXdVMG5uT3dKNy13TXpnZTNDbU5KMFNfQVYzbmRlZXFLTTQ5TVd4NnQ1T1dMYmdyYXNmdXQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:27"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "관세가 미국의 전력 시스템에 충격을 줄 수 있는 방법",
      "title_en": "How Tariffs Could Shock America’s Power System",
      "summary_ko": "관세가 어떻게 미국의 전력 시스템에 충격을 줄 수 있는가 WSJ. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Wall Street Journal뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNUzRhb1lDV2xPaUtUNGhMZDRtX212cV9kaFpzX3FWMGRFb2NzMTRoVTR1cDBpMlNwUW9ydjdyZ0VYNUt5aTRPbW43aDVlVmVlZlFoUnN2aFVUaW00bmp0T2lLV1MyZzllZXBiRHRNZUdLSDNzbzRNVHlEREZFTDVWY0xYNktlS2RtYW16M3hmb0Z2dw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikgFBVV95cUxNUzRhb1lDV2xPaUtUNGhMZDRtX212cV9kaFpzX3FWMGRFb2NzMTRoVTR1cDBpMlNwUW9ydjdyZ0VYNUt5aTRPbW43aDVlVmVlZlFoUnN2aFVUaW00bmp0T2lLV1MyZzllZXBiRHRNZUdLSDNzbzRNVHlEREZFTDVWY0xYNktlS2RtYW16M3hmb0Z2dw%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 20 Feb 2025 08:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "달러는 '미국 판매'에 대한 두려움이 사라지면서 해방일 손실을 지웠습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOOHJRV0l1WW10Z2Ntdmd1dG1vcDFBaVlJdV83RUd2X2RXeGdObWp2Q0Y1RmRDVEpnVXNuTks1V1BuZFgzRHhuSzlORkxYeWNNU29idjJWa2JMaXBRcDdUaE1tU3NBV2NCZjZ6ZTd5aVY1b0VhRTlMMjZpQmZzenNJNU9vWjJ5b2l1QlJpVk9ZTEo1NTdKZG1RQmVCOUlQcDdfUFR2TmVtejNuQnQtVWRpMg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOOHJRV0l1WW10Z2Ntdmd1dG1vcDFBaVlJdV83RUd2X2RXeGdObWp2Q0Y1RmRDVEpnVXNuTks1V1BuZFgzRHhuSzlORkxYeWNNU29idjJWa2JMaXBRcDdUaE1tU3NBV2NCZjZ6ZTd5aVY1b0VhRTlMMjZpQmZzenNJNU9vWjJ5b2l1QlJpVk9ZTEo1NTdKZG1RQmVCOUlQcDdfUFR2TmVtejNuQnQtVWRpMg%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "미국 관세의 역사와 그것이 오늘날 중요한 이유",
          "original_url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOOVVwYXNnOENmeUh1bjhRbVRDTGZLZERFVGVaOVB0U0tSeUs0X0kyR1E1WjQxTGhPaEdHcTZva3JhRmp4SlZRbDdaYzBxaGxEa0t6elhSS1ZCUloxX2ZvQkFJZFl0T2JiQUNTNkhXSzdkU0g3cDFNSXptbkhfb1F2aGtsdllVQW9mMkRBcw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijAFBVV95cUxOOVVwYXNnOENmeUh1bjhRbVRDTGZLZERFVGVaOVB0U0tSeUs0X0kyR1E1WjQxTGhPaEdHcTZva3JhRmp4SlZRbDdaYzBxaGxEa0t6elhSS1ZCUloxX2ZvQkFJZFl0T2JiQUNTNkhXSzdkU0g3cDFNSXptbkhfb1F2aGtsdllVQW9mMkRBcw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "매일경제",
      "title_ko": "“삼전닉스 반등한다더니”…코스피, 외국인·기관 매도에 3.6% 급락 마감",
      "title_en": "",
      "summary_ko": "“삼전닉스 반등한다더니”…코스피, 외국인·기관 매도에 3.6% 급락 마감 매일경제 마켓. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 매일경제뿐만 아니라 한국경제, 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBQZnRjbV9RTThsVjJyd3Z4TFRzQ3NmR09IWHlBWTE0NWRUVFNQYURfc25JMVp2QTEtV0FNNHVYbjRXYW5pUmQ2QlhtMDN3WkdZd2c?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBQZnRjbV9RTThsVjJyd3Z4TFRzQ3NmR09IWHlBWTE0NWRUVFNQYURfc25JMVp2QTEtV0FNNHVYbjRXYW5pUmQ2QlhtMDN3WkdZd2c?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 16 Nov 2026 07:10:59 GMT",
      "related_articles": [
        {
          "source": "매일경제",
          "title_ko": "코스피, 외국인·기관 매도에 상승 출발 후 보합권 등락",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1SQmI0eFg0YzgzUU9nTjZfcElxUHBJVGZiN2ViN01xaVI2SFRfdHdZemZ4eVpTREJwRXByNlBISG5UakgxTGRkVVBpc3NzUVpJdmc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1SQmI0eFg0YzgzUU9nTjZfcElxUHBJVGZiN2ViN01xaVI2SFRfdHdZemZ4eVpTREJwRXByNlBISG5UakgxTGRkVVBpc3NzUVpJdmc?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "美 금리 급등發 약세 속 코스피 반등·외국인 순매도…국고 3년 3.7%대",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFAzRV9OcEIya1c3NzFFZmROVWYzS0hoekRWbUZXNVNaak1xZXMwR1ltaUFDOF90ZjhmS2EyRUhkeTMtUXM2RjU0RUhrRmEzZ21rbTR3ZWpPcnZVaHNVT1dRVzZxSDhzQUs0RnBzYVpqU00?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFAzRV9OcEIya1c3NzFFZmROVWYzS0hoekRWbUZXNVNaak1xZXMwR1ltaUFDOF90ZjhmS2EyRUhkeTMtUXM2RjU0RUhrRmEzZ21rbTR3ZWpPcnZVaHNVT1dRVzZxSDhzQUs0RnBzYVpqU00?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "장 초반 코스피, 외국인 순매수에 3%↑…5500선 재진입",
          "original_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE82SzY3RnJoZkIxU0FWRHpWaUMzVHM5NEpHTE1HRVRVVno3aGtSYndtQ0I5QnFtejh4NUpDRmhKVUt0N0I3NVN3MzFOdFpYYkZ3eEZQUWNVblhMQmZha1UzMWk0TXJfNGtNUnpaWVJGeFBndG5L?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE82SzY3RnJoZkIxU0FWRHpWaUMzVHM5NEpHTE1HRVRVVno3aGtSYndtQ0I5QnFtejh4NUpDRmhKVUt0N0I3NVN3MzFOdFpYYkZ3eEZQUWNVblhMQmZha1UzMWk0TXJfNGtNUnpaWVJGeFBndG5L?oc=5"
        },
        {
          "source": "굿모닝경제",
          "title_ko": "코스피, 외국인·기관 매도에 3.59% 급락…장중 5100선 붕괴",
          "original_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE56S1lZY09mX2ZOVDdHU3Z3RkhidXNjR0RRZW1qMDk4Y1NMVGtNYUpqVGF0akJKXzFKYnJYbG1zTnBsMFlpNmE1eHlGSXZzOE0wU3NlWktLUmdVWFJFaFQ4b0c4QnFEbnlwU3lZNQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE56S1lZY09mX2ZOVDdHU3Z3RkhidXNjR0RRZW1qMDk4Y1NMVGtNYUpqVGF0akJKXzFKYnJYbG1zTnBsMFlpNmE1eHlGSXZzOE0wU3NlWktLUmdVWFJFaFQ4b0c4QnFEbnlwU3lZNQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "[채권-주간] 11월 금통위 직전 글로벌·외국인·주가 주시",
      "title_en": "",
      "summary_ko": "[채권-주간] 11월 금통위 직전 글로벌·외국인·주가 주시 연합인포맥스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE54MkhmR19VWUphZ0stbERSMk40ajU3eHZxVVEwZ3l4M2ZPNjZDRXpEWkJaRFc0VFJuSkpWMTZKMFQ2aENacHhxZjdzX3MyeVpzY0hjNGt3VkV4YU4tX1k4VU1KR0xlWEhlV1k4NmdkS0k?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE54MkhmR19VWUphZ0stbERSMk40ajU3eHZxVVEwZ3l4M2ZPNjZDRXpEWkJaRFc0VFJuSkpWMTZKMFQ2aENacHhxZjdzX3MyeVpzY0hjNGt3VkV4YU4tX1k4VU1KR0xlWEhlV1k4NmdkS0k?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 15 Nov 2026 04:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "산경투데이",
      "title_ko": "원·달러 환율 1,335.7원 마감…중동 불안·긴축 우려에도 하락",
      "title_en": "",
      "summary_ko": "원·달러 환율 1,335.7원 마감…중동 불안·긴축 우려에도 하락 산경투데이. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 산경투데이뿐만 아니라 매일경제, 굿모닝경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9mZmlYTUdKb3pMcW5TdnZVNm1YWFZyUmRYZ0ZnZ0VkaFZjRVBfM3RkMF9PV3U4ekhpcXNNR3U3bTdHemI2VXZoX3pKNFZmZzdiOVJjYlloX0tJSERoVmlCeEdKUEFXTWNuamY5NFVyQTnSAXRBVV95cUxNNXUzWDV2VTAxenJjcUwwZmpoc2dXMFpsSnEtcm9xYXJybEVMUTlyQkdUNmlxOU5PQklla3hMbFpPUzdzemhOekMwMzhTMTgwcmdRUlhITXo5SU1lblNxcWFVNjdRNHNrcnRXY3VQdTc1VkEzZQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9mZmlYTUdKb3pMcW5TdnZVNm1YWFZyUmRYZ0ZnZ0VkaFZjRVBfM3RkMF9PV3U4ekhpcXNNR3U3bTdHemI2VXZoX3pKNFZmZzdiOVJjYlloX0tJSERoVmlCeEdKUEFXTWNuamY5NFVyQTnSAXRBVV95cUxNNXUzWDV2VTAxenJjcUwwZmpoc2dXMFpsSnEtcm9xYXJybEVMUTlyQkdUNmlxOU5PQklla3hMbFpPUzdzemhOekMwMzhTMTgwcmdRUlhITXo5SU1lblNxcWFVNjdRNHNrcnRXY3VQdTc1VkEzZQ?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 16 Nov 2026 07:47:45 GMT",
      "related_articles": [
        {
          "source": "굿모닝경제",
          "title_ko": "[다음주 환율전망] 중동 긴장에 다시 고개 든 강달러…원·달러 환율 1330원대 공방 전망",
          "original_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBCdnZ3Zzd1S2lyUmNqX2w3cUlqa1FZSkcxRDRmeEJjenBhU3lVR1U3VmgxSEpVcGJ3VEx6RE1NdlNrVENzQk9BSVRCWGRJN1BOaHRFWlJIdkdaUlFTZ0hrNF9HY2U0TV9Mb2pDRw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBCdnZ3Zzd1S2lyUmNqX2w3cUlqa1FZSkcxRDRmeEJjenBhU3lVR1U3VmgxSEpVcGJ3VEx6RE1NdlNrVENzQk9BSVRCWGRJN1BOaHRFWlJIdkdaUlFTZ0hrNF9HY2U0TV9Mb2pDRw?oc=5"
        },
        {
          "source": "매일경제",
          "title_ko": "원/달러 환율, 강달러·증시 급락에도 하락…1,330원대 중반",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9BaTY3THlmRldLTmZtSHFWQkZ0WnBZQS1vd2RjclloMEFiUW9vSGotUzdod3BNN0tyZnVxbnNiWXRCRmZIVzhxaXZHaXBLZXhLYUE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9BaTY3THlmRldLTmZtSHFWQkZ0WnBZQS1vd2RjclloMEFiUW9vSGotUzdod3BNN0tyZnVxbnNiWXRCRmZIVzhxaXZHaXBLZXhLYUE?oc=5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "ER 이코노믹리뷰",
      "title_ko": "1340원대 다시 넘보는 환율…미 연준 금리 인상 전망에 상승 압력",
      "title_en": "",
      "summary_ko": "1340원대 다시 넘보는 환율…미 연준 금리 인상 전망에 상승 압력 ER 이코노믹리뷰. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. ER 이코노믹리뷰에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE40ejFMWjVSTWxFU1dvUkJTVmJ3Tl9HajlrWmZwV1Zld2wyWm5GSG1PMk93SUVmZlBSZk85RWRQSWpYZFZ5bGlxVW81TlhiLXhjWGlWd3BEUnRidUNuYktKZEtmYjVDaGd0bTN3WA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE40ejFMWjVSTWxFU1dvUkJTVmJ3Tl9HajlrWmZwV1Zld2wyWm5GSG1PMk93SUVmZlBSZk85RWRQSWpYZFZ5bGlxVW81TlhiLXhjWGlWd3BEUnRidUNuYktKZEtmYjVDaGd0bTN3WA?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 16 Nov 2026 02:11:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "뉴스웨이",
      "title_ko": "미 국채금리 급등에 긴장하는 한국 증시···외국인 자금 향방은",
      "title_en": "",
      "summary_ko": "미 국채금리 급등에 긴장하는 한국 증시···외국인 자금 향방은 뉴스웨이. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 뉴스웨이에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE52QjRlUnBhRDhmTTlvanBoY0pFVFZLall6azdnY0JXOVBlWjhwOUFsX2Jqb2J2VGxxTUtSOUhac1Z6TEFNQW1teGFRZGFxR1VSbUwzUUdsMjRxajI3Zk0zOFNmZXYyQU9xUlE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE52QjRlUnBhRDhmTTlvanBoY0pFVFZLall6azdnY0JXOVBlWjhwOUFsX2Jqb2J2VGxxTUtSOUhac1Z6TEFNQW1teGFRZGFxR1VSbUwzUUdsMjRxajI3Zk0zOFNmZXYyQU9xUlE?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Fri, 13 Nov 2026 05:50:11 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "비즈워치",
      "title_ko": "가계대출 다시 증가…이달 기준금리 인상 힘 받나",
      "title_en": "",
      "summary_ko": "가계대출 다시 증가…이달 기준금리 인상 힘 받나 비즈워치. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 비즈워치에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1qYmpMSnhmYWUzY3lpVmhJWTlpRG8xT2h4Zm90dGVwTUREclJKMFo0M0JIcXZLU1R6LUhWNDUzaktkVVRPOWpJNlpPOTdGR2djSU5Ebk9mbDctTlJhc2ZneXdwQ1AyQThKZVM0?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1qYmpMSnhmYWUzY3lpVmhJWTlpRG8xT2h4Zm90dGVwTUREclJKMFo0M0JIcXZLU1R6LUhWNDUzaktkVVRPOWpJNlpPOTdGR2djSU5Ebk9mbDctTlJhc2ZneXdwQ1AyQThKZVM0?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 15 Nov 2026 03:00:02 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "11월엔 올린다지만 그다음은…금통위가 주목한 소비의 온도",
      "title_en": "",
      "summary_ko": "11월엔 올린다지만 그다음은…금통위가 주목한 소비의 온도 연합인포맥스. 한국은행의 금리 결정 및 국내 수출입 펀더멘털, 가계부채와 부동산 경기에 미치는 파급 효과를 주목할 필요가 있습니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9hdmN3R0ZfV2pQZG5SRG1uM0ZkczZyQkdQSmFhR2RDYTNxVkduU0VmU2tBVU5ZNmpLV3NSZUJmSFlmcFdWb2d5VEVVZS1Nb0RQd2pfUS0yWXNMUUNTUTVhS0xJYy1vQUQ2dURxRjExTWw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9hdmN3R0ZfV2pQZG5SRG1uM0ZkczZyQkdQSmFhR2RDYTNxVkduU0VmU2tBVU5ZNmpLV3NSZUJmSFlmcFdWb2d5VEVVZS1Nb0RQd2pfUS0yWXNMUUNTUTVhS0xJYy1vQUQ2dURxRjExTWw?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 12 Nov 2026 01:40:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "[다음주 한국은행 및 금융위·금감원 일정]",
      "title_en": "",
      "summary_ko": "[다음주 한국은행 및 금융위·금감원 일정] 연합인포맥스. 한국은행의 금리 결정 및 국내 수출입 펀더멘털, 가계부채와 부동산 경기에 미치는 파급 효과를 주목할 필요가 있습니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9weTZHcGtFb3pEWkEtZUs2Uk5mY282MVA1NThFMlJFZnJNd3dZelNTQXY5bXJNdk9WZkZWUEp4dUtuSTREZHowNHFzU3BZeDNDNXI0YmtMbGdadDNfWC1ZV3Q3REg5cTU4bm9Wd0pOaTfSAXRBVV95cUxOOC1fTm45aUFWWkpnSjBIdHliQTV2cE1MLXdqUU1pQkNUVlBDTFloMXJHVTk4RDQ1THlGUFFWVzhNVkQwTGRMdGd5b2l0ZGdvM0xlQnNzbTQ0UG5VOVMwSnZqUjd2Y2d2U1FWdF8wSEdBUWFSdA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9weTZHcGtFb3pEWkEtZUs2Uk5mY282MVA1NThFMlJFZnJNd3dZelNTQXY5bXJNdk9WZkZWUEp4dUtuSTREZHowNHFzU3BZeDNDNXI0YmtMbGdadDNfWC1ZV3Q3REg5cTU4bm9Wd0pOaTfSAXRBVV95cUxOOC1fTm45aUFWWkpnSjBIdHliQTV2cE1MLXdqUU1pQkNUVlBDTFloMXJHVTk4RDQ1THlGUFFWVzhNVkQwTGRMdGd5b2l0ZGdvM0xlQnNzbTQ0UG5VOVMwSnZqUjd2Y2d2U1FWdF8wSEdBUWFSdA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Fri, 13 Nov 2026 23:00:13 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "매일경제",
      "title_ko": "한은 또 올릴까?...올해 마지막 금통위 앞두고 추가 인상 전망 ‘솔솔’",
      "title_en": "",
      "summary_ko": "한은 또 올릴까?...올해 마지막 금통위 앞두고 추가 인상 전망 ‘솔솔’ 매일경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 매일경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1EVEJCT0ZYUHJuR0ItNFdOd2RpbW12UUJqQ3FjNlVhdHVvQ01xcFB0M0IxTDdZU01UNVZtVzlMNkVYbW0wdUczckdFeGlxcXItUjY2UA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1EVEJCT0ZYUHJuR0ItNFdOd2RpbW12UUJqQ3FjNlVhdHVvQ01xcFB0M0IxTDdZU01UNVZtVzlMNkVYbW0wdUczckdFeGlxcXItUjY2UA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 15 Nov 2026 04:50:44 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "The Economy Korea",
      "title_ko": "“중간선거 충격에 엔비디아 악재까지 겹친 AI 랠리” 연준, 빚으로 얽힌 투자 위험 경고",
      "title_en": "",
      "summary_ko": "“중간선거 충격에 엔비디아 악재까지 겹친 AI 랠리” 연준, 빚으로 얽힌 투자 위험 경고 The Economy Korea. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. The Economy Korea뿐만 아니라 서울파이낸스, 마켓잉크 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE4zbEJfaVp2MjNnZUQtbE51d2dZc3d6eHNkczNkNFhDR0NhMlBoM181MzVPbXd3cWRZdEhFQU9hdHBIdmZ0anYwUXczYWtjcGh3OGJZbHFOcGhLUVU?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE4zbEJfaVp2MjNnZUQtbE51d2dZc3d6eHNkczNkNFhDR0NhMlBoM181MzVPbXd3cWRZdEhFQU9hdHBIdmZ0anYwUXczYWtjcGh3OGJZbHFOcGhLUVU?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 16 Nov 2026 02:57:04 GMT",
      "related_articles": [
        {
          "source": "마켓잉크",
          "title_ko": "베센트 \"엔비디아, 외부에서 새 CEO 찾아야\"…연준에는 추가 금리 인상 자제 요구",
          "original_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBzN3VkUnNOMms2QlJuVVVSb2FFVmFGdHV1UW90NUtlMUpMMUN0bHh4Y1ZranhMQXpzUHdkdVlld1NzQkNjTC04emlJdl9aeTgxWG9KdW5GSmR1bWtjcE1tX2lPRVhzTmlIbVgyN20tSQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBzN3VkUnNOMms2QlJuVVVSb2FFVmFGdHV1UW90NUtlMUpMMUN0bHh4Y1ZranhMQXpzUHdkdVlld1NzQkNjTC04emlJdl9aeTgxWG9KdW5GSmR1bWtjcE1tX2lPRVhzTmlIbVgyN20tSQ?oc=5"
        },
        {
          "source": "매일경제",
          "title_ko": "젠슨 황 퇴진에 670조원 'AI금융' 흔들 … 연준도 \"위험\" 경고",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5UZTBid08wQzdpY2VRWGRfckJObnhiWG5leWZRQkxSMkJzRzVWcTVOOHM0NkJWTDhtMHNlTFdvTDhFY0xDZ0FLcE5NdGdMbFZpSnc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5UZTBid08wQzdpY2VRWGRfckJObnhiWG5leWZRQkxSMkJzRzVWcTVOOHM0NkJWTDhtMHNlTFdvTDhFY0xDZ0FLcE5NdGdMbFZpSnc?oc=5"
        },
        {
          "source": "Investing.com",
          "title_ko": "연준 바 총재, AI 급속 확산으로 인한 뱅크런·부채 위험 경고",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9rOEdqbU1tTm5VZ2hXSmo5QlRTdmh5aG5UUkhEN1dpYWNDWnJVNF9kTzdybURfLXdlVXBoMFYxMGlVSEc2ang4SVdRYWhZTW4xcVBsMjZSeUlaMDZPck5SNUpManFvUl9wc1E?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9rOEdqbU1tTm5VZ2hXSmo5QlRTdmh5aG5UUkhEN1dpYWNDWnJVNF9kTzdybURfLXdlVXBoMFYxMGlVSEc2ang4SVdRYWhZTW4xcVBsMjZSeUlaMDZPck5SNUpManFvUl9wc1E?oc=5"
        },
        {
          "source": "서울파이낸스",
          "title_ko": "\"닷컴버블 닮아간다\"···美연준, 'AI 투자 과열'에 경고",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9sUlJqSm9wT3hvaHhRdWxTWUZ5RHZvRklWS1RldE9lZVVxVUFqblludzFaWEh1U1FURTFmRk9BdnFRb3JyVlFHRmZkODBtdGVVT3BVMlpZeWJnUHl3YVlsaXZXY0g4cnMzcXc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9sUlJqSm9wT3hvaHhRdWxTWUZ5RHZvRklWS1RldE9lZVVxVUFqblludzFaWEh1U1FURTFmRk9BdnFRb3JyVlFHRmZkODBtdGVVT3BVMlpZeWJnUHl3YVlsaXZXY0g4cnMzcXc?oc=5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "CoinDesk",
      "title_ko": "FOMC 회의록, 엔비디아 실적, 러시아 소매 암호화폐 규제: 다가오는 암호화폐 주간",
      "title_en": "",
      "summary_ko": "FOMC 회의록, 엔비디아 실적, 러시아 소매 암호화폐 규제: 다가오는 암호화폐 주간 CoinDesk. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. CoinDesk뿐만 아니라 뉴시스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQT3VxSkZ2SnF1ck1XUk11UExGQU9nUm13Zm8yQkJrMGxlbHEzeUFqZkFST3lHX2lUaTRLNkMzUEJvUE9lR1V0TUhiTVZsUTZNTzlUbTJHUmE5b3RKYXA3bXd2SnJTQlNScDRBWGNkTURZdGNEMW4zMnBwaXJMVnQ1dXpTdWkxM2luazdlMktORHVjRF9KQWJZYk9UMGdTeUZpdmJkUEltSHJhLUw2bURPcnBiM2lmSWg2N1lRZENCdw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQT3VxSkZ2SnF1ck1XUk11UExGQU9nUm13Zm8yQkJrMGxlbHEzeUFqZkFST3lHX2lUaTRLNkMzUEJvUE9lR1V0TUhiTVZsUTZNTzlUbTJHUmE5b3RKYXA3bXd2SnJTQlNScDRBWGNkTURZdGNEMW4zMnBwaXJMVnQ1dXpTdWkxM2luazdlMktORHVjRF9KQWJZYk9UMGdTeUZpdmJkUEltSHJhLUw2bURPcnBiM2lmSWg2N1lRZENCdw?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 16 Nov 2026 09:35:31 GMT",
      "related_articles": [
        {
          "source": "뉴시스",
          "title_ko": "[주간 뉴욕증시]'젠슨 황 사임 후 엔비디아 첫 실적…연준 의사록 주목",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9BeVBDVlFCSkR1MHZVeHYwVGlFeU5TR3pUSHRKQTR6MWVtXy01TWRicWg5QUVhMzNNV1VNNUpxakxaOERLVHByTnBXV3h3UlhNUXF6UmJqU3N1NmZZVmZPR9IBeEFVX3lxTE45ODNERElobzRWQWYwbDU1bmNhTlR1Z3dZUy1nUjFFS0R5M25aa2d2RVgxbkozUHFnVThvamR2Q0tvZ0s2M281ZUNiSkEzMndEQmZlSnJlcVg2dzFZdmZVUXBHTjZLRUc1XzFZR0YxVzRtZmJSS2lTMQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9BeVBDVlFCSkR1MHZVeHYwVGlFeU5TR3pUSHRKQTR6MWVtXy01TWRicWg5QUVhMzNNV1VNNUpxakxaOERLVHByTnBXV3h3UlhNUXF6UmJqU3N1NmZZVmZPR9IBeEFVX3lxTE45ODNERElobzRWQWYwbDU1bmNhTlR1Z3dZUy1nUjFFS0R5M25aa2d2RVgxbkozUHFnVThvamR2Q0tvZ0s2M281ZUNiSkEzMndEQmZlSnJlcVg2dzFZdmZVUXBHTjZLRUc1XzFZR0YxVzRtZmJSS2lTMQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:31"
    },
    {
      "source": "인더스트리뉴스",
      "title_ko": "코스피, 외국인·기관 매도에 약세…엔비디아발 불확실성 '지속'",
      "title_en": "",
      "summary_ko": "코스피, 외국인·기관 매도에 약세…엔비디아발 불확실성 '지속' 인더스트리뉴스. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. 인더스트리뉴스뿐만 아니라 비즈워치, 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1sRFp2cUFIRm5mTElUZExEM0V3WEhUbC02TkdvS2l0VjZsdENUZ3NIQ09DbWJuZU5TRnZJUFNyeFh5Zmh2b3drY0JVdklLQnBZdk81Mi1mOW9Sckxfamk4YUgxQzRJMGFuXzI1Nmc5cFdYUQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1sRFp2cUFIRm5mTElUZExEM0V3WEhUbC02TkdvS2l0VjZsdENUZ3NIQ09DbWJuZU5TRnZJUFNyeFh5Zmh2b3drY0JVdklLQnBZdk81Mi1mOW9Sckxfamk4YUgxQzRJMGFuXzI1Nmc5cFdYUQ?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 16 Nov 2026 00:48:18 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "코스피, 한달새 10% '뚝'…내주 '엔비디아·美中회담·연준' 주목",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE45SUNMUllnQThzdDFnb19jUTZoM2RHVHdLWHc1aE05S3RHd25sbnR4Vy15dVdwMGp5T2pBVEhzaXVXMHNxZG5zcHZBbHlXcjVhMFFYdjVxRDgyczZWdV8tYjRLTlowYnpZWVpXc2UyTHo?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE45SUNMUllnQThzdDFnb19jUTZoM2RHVHdLWHc1aE05S3RHd25sbnR4Vy15dVdwMGp5T2pBVEhzaXVXMHNxZG5zcHZBbHlXcjVhMFFYdjVxRDgyczZWdV8tYjRLTlowYnpZWVpXc2UyTHo?oc=5"
        },
        {
          "source": "경향신문",
          "title_ko": "AI가 떠받치는 미국 경제…트럼프 ‘엔비디아 리스크’ 외면",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE40WXFvOExuenlBeEcwcTJnZDlqUEs0QU9YWFlmZkI2LVFibWdwdTQtdFZCNzZscU9DOHFPWTlWTFBQM21kRk5QRHhZcFB3a1JIYkxPa2JaR1c1QdIBX0FVX3lxTFBDUUhGWFFRaVNhVnBqcWF1QV9aRDMtS3hNazREdDdzc1I4eS1Bb2pQLXk4YVRBVHAydm0zVTQxcFhGTU5ZRUYyamJqVlIyUm90S3NZajZURW5hekJPN0dV?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE40WXFvOExuenlBeEcwcTJnZDlqUEs0QU9YWFlmZkI2LVFibWdwdTQtdFZCNzZscU9DOHFPWTlWTFBQM21kRk5QRHhZcFB3a1JIYkxPa2JaR1c1QdIBX0FVX3lxTFBDUUhGWFFRaVNhVnBqcWF1QV9aRDMtS3hNazREdDdzc1I4eS1Bb2pQLXk4YVRBVHAydm0zVTQxcFhGTU5ZRUYyamJqVlIyUm90S3NZajZURW5hekJPN0dV?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "닛케이 일주일만 6만선 하회…엔비디아 불확실성에 AI·반도체↓",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBCWGY0dWp3RWV5SG56N2g2aGxUY1dIREcwaDRpaXN2QmFXUWRuMjk1M2pjNXktaXRFRjhCWU9EalRRYmtmLUgyWExIQ2diczVfc1lvbXc0LUZ2MDDSAWBBVV95cUxOUUgzYVh2bW1oa3pEVUNEak5mcVAzYVFMZ3pBWVlOcV9uQWEzYTFubEptNVA0eEN2akUyQ2xtZGswQW5UWGwwSmxWZDlIQS1uOHBIaHF3ekM0Rnl1b1VpM2k?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBCWGY0dWp3RWV5SG56N2g2aGxUY1dIREcwaDRpaXN2QmFXUWRuMjk1M2pjNXktaXRFRjhCWU9EalRRYmtmLUgyWExIQ2diczVfc1lvbXc0LUZ2MDDSAWBBVV95cUxOUUgzYVh2bW1oa3pEVUNEak5mcVAzYVFMZ3pBWVlOcV9uQWEzYTFubEptNVA0eEN2akUyQ2xtZGswQW5UWGwwSmxWZDlIQS1uOHBIaHF3ekM0Rnl1b1VpM2k?oc=5"
        },
        {
          "source": "비즈워치",
          "title_ko": "하이닉스 7% 급락·코스피 5100 턱걸이...엔비디아 불안 지속",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE12MUFQVVBMa2UweXBtYlR6RVdSc2ZMTlQ5M0R0NldPTHBjMkUxUDc0dmswNTE1MTFodDBvMmcyZ092dFlhdnlxN0dObTlha2RaYVB0bWxQYTM3OW1xbG5JSV9weVdiWkpYTmc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE12MUFQVVBMa2UweXBtYlR6RVdSc2ZMTlQ5M0R0NldPTHBjMkUxUDc0dmswNTE1MTFodDBvMmcyZ092dFlhdnlxN0dObTlha2RaYVB0bWxQYTM3OW1xbG5JSV9weVdiWkpYTmc?oc=5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:32"
    },
    {
      "source": "Reuters",
      "title_ko": "독점: 전 Nvidia CEO 황은 두 번째 직원과 관계를 가졌다고 소식통은 말합니다.",
      "title_en": "EXCLUSIVE: Former Nvidia CEO Huang had a relationship with a second employee, sources say",
      "summary_ko": "독점: 전 엔비디아 CEO 황은 두 번째 직원과 관계를 가졌다고 소식통은 로이터에 말했습니다. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOS3otVnY4ZXphd1g5Q0REOVlqY3c1WXBMSmMtNThTbGlaRGVkVkZXZml1RHlEN3djZXRMT0pSTnJ6c3JiZ0tOdVRRekpJUlBfRV92ZEFEUU9GVU5XZHBYVmotRjFpcExuaER3S1BUaF90UWFaRnVBcFlHazgzOXBSWXJfN1RMSFNrcWY2TVRkQmVTYkNHUUhMeHAyM1huRXItSVhKZU95Q2wyTmg1MnlZcGduR01vdzFBcmpiVA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxOS3otVnY4ZXphd1g5Q0REOVlqY3c1WXBMSmMtNThTbGlaRGVkVkZXZml1RHlEN3djZXRMT0pSTnJ6c3JiZ0tOdVRRekpJUlBfRV92ZEFEUU9GVU5XZHBYVmotRjFpcExuaER3S1BUaF90UWFaRnVBcFlHazgzOXBSWXJfN1RMSFNrcWY2TVRkQmVTYkNHUUhMeHAyM1huRXItSVhKZU95Q2wyTmg1MnlZcGduR01vdzFBcmpiVA%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 12 Nov 2026 19:32:02 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 CEO Search는 Bessent의 개편 요청으로 불을 지폈습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOZVBETnNKak9BME5HaDEzOXN3TzctS3kzWUVadDVaem9wVDExVFJqb0NSMEdoZG01cXFmLTJSaFJzSkhxOTRYelRQcXYxSTl6OUdzaTE3LW9KM3FTRWh0bUZWY1BKMmNaUWVvN1luaTczdVhWTXZHVnFJSWwzZ3Z5R1JIYVljbUl5UmY3bGZfWW1tZnJOaUMwYnpQVElIekFHMjJyUDR3a0NBYVNKZkhtbGdJSQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOZVBETnNKak9BME5HaDEzOXN3TzctS3kzWUVadDVaem9wVDExVFJqb0NSMEdoZG01cXFmLTJSaFJzSkhxOTRYelRQcXYxSTl6OUdzaTE3LW9KM3FTRWh0bUZWY1BKMmNaUWVvN1luaTczdVhWTXZHVnFJSWwzZ3Z5R1JIYVljbUl5UmY3bGZfWW1tZnJOaUMwYnpQVElIekFHMjJyUDR3a0NBYVNKZkhtbGdJSQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 CEO 검색이 Bessent의 'Shakeup' 호출로 불을 끄는 모습을 시청하세요",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOb2RHN0hIZVJtMjhaeEs2WFl0cjJ5eVdKaV9NMkI2OHFxSGx0enJXQUVWUUNERUlEMVVkQjJNQ3ZLVDl1eWw0YnBxbF80T3lwelUtR24wZW1RZFBZay13Mk9qMkJUQnRfUEgwenoxMjllTnI0QWtMVlJvcGZKbERTQ1JIaHVlTWJ6WlI4OU1WVFprNXpFZGJONlRKTjk4VTU0dEJiVk9fRzFjZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxOb2RHN0hIZVJtMjhaeEs2WFl0cjJ5eVdKaV9NMkI2OHFxSGx0enJXQUVWUUNERUlEMVVkQjJNQ3ZLVDl1eWw0YnBxbF80T3lwelUtR24wZW1RZFBZay13Mk9qMkJUQnRfUEgwenoxMjllTnI0QWtMVlJvcGZKbERTQ1JIaHVlTWJ6WlI4OU1WVFprNXpFZGJONlRKTjk4VTU0dEJiVk9fRzFjZw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent가 개편을 촉구함에 따라 Nvidia CEO 검색이 뜨거워지고 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPekVaQWFmdlB5ajNzZmlPQmdMVFBPUXhUYVpnc0U3ZGlQeXJjSFRUZVhwZGxmWjFjMzRPTkZsODJkQjZsOWp3bkMySXJuTDFZNXNaQVU5NFVfNlpHUEtBakN5djhiOGVXSXpXVHM3QVdHU1JaWlo3QVI0SXAxaV9rdnV2X1ZqQjVjXzBZNFVkYTh0a0t4UWQ0bXdrU3dGMmh4R2hHZ0NfNW4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxPekVaQWFmdlB5ajNzZmlPQmdMVFBPUXhUYVpnc0U3ZGlQeXJjSFRUZVhwZGxmWjFjMzRPTkZsODJkQjZsOWp3bkMySXJuTDFZNXNaQVU5NFVfNlpHUEtBakN5djhiOGVXSXpXVHM3QVdHU1JaWlo3QVI0SXAxaV9rdnV2X1ZqQjVjXzBZNFVkYTh0a0t4UWQ0bXdrU3dGMmh4R2hHZ0NfNW4%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "트럼프, 황의 엔비디아 CEO 복귀 요구 지지",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQTzZFZHJxQ1ZMaW5Ba1V4bm8taHd4bFBvYUZHWFY4SFpydml5YUVhLTRCaEFsNG9TbjY1dl9ac2tDek1DemJ0M3FwQTNtQm5aNV83RjFsZEZTNmJ2WHRJRWtHUVRDVEdnTUJtSzlaMWZfSEU2anpRSmVGcG9SUEgxN3c1WG5UcVBkdG02bmsyQkxvNlVqeEV2SDFORlA3VGNHZnpha2EyQ3V5aDVIS1E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxQTzZFZHJxQ1ZMaW5Ba1V4bm8taHd4bFBvYUZHWFY4SFpydml5YUVhLTRCaEFsNG9TbjY1dl9ac2tDek1DemJ0M3FwQTNtQm5aNV83RjFsZEZTNmJ2WHRJRWtHUVRDVEdnTUJtSzlaMWZfSEU2anpRSmVGcG9SUEgxN3c1WG5UcVBkdG02bmsyQkxvNlVqeEV2SDFORlA3VGNHZnpha2EyQ3V5aDVIS1E%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:34"
    },
    {
      "source": "매일경제",
      "title_ko": "“이번주엔 앞길 좀 트일까요”…엔비디아에 미중회담·앤트로픽 IPO까지, 코스피는?",
      "title_en": "",
      "summary_ko": "“이번주엔 앞길 좀 트일까요”…엔비디아에 미중회담·앤트로픽 IPO까지, 코스피는? 매일경제 마켓. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. 매일경제뿐만 아니라 비즈워치 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9tY3owU3NNNFppazhSa29IUGR0eU9SbWV4RS0xTEdSNUhMUVROOEZIZnAtMFBfTlRqTGJCbDJSai1xMmFGTHVrcG5DR203VDc1amc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9tY3owU3NNNFppazhSa29IUGR0eU9SbWV4RS0xTEdSNUhMUVROOEZIZnAtMFBfTlRqTGJCbDJSai1xMmFGTHVrcG5DR203VDc1amc?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 15 Nov 2026 23:58:54 GMT",
      "related_articles": [
        {
          "source": "비즈워치",
          "title_ko": "엔비디아 실적, 앤트로픽 상장에 쏠린 눈...코스피 방향 가른다",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9oYUtYUlpsNFpPb1FZNTZFU0VfZVc1M2YxYW83cEt4VmhsaHZrMGFjWkhUREo1UGxZN0ZXUmxTSllZd1I2OEdTNU5pV0ZYVGpELXRpQmhPS09tRGRyb2VuMU5hVEtkdk1id1E?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9oYUtYUlpsNFpPb1FZNTZFU0VfZVc1M2YxYW83cEt4VmhsaHZrMGFjWkhUREo1UGxZN0ZXUmxTSllZd1I2OEdTNU5pV0ZYVGpELXRpQmhPS09tRGRyb2VuMU5hVEtkdk1id1E?oc=5"
        }
      ],
      "crawled_at": "2026-11-16 20:01:34"
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
