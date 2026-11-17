window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-11-18 05:01:51",
    "date_str": "2026년 11월 18일 (수)",
    "indicator_count": 19,
    "news_count": 20
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
      "price": 4.138,
      "previous_close": 4.035,
      "change": 0.103,
      "change_percent": 2.55,
      "display_price": "4.138%",
      "status": "up",
      "history": [
        4.035,
        4.115,
        4.115,
        4.128,
        4.122,
        4.125,
        4.138
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-11-17 20:00:54"
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
      "price": 5.097,
      "previous_close": 4.864,
      "change": 0.233,
      "change_percent": 4.79,
      "display_price": "5.097%",
      "status": "up",
      "history": [
        4.864,
        4.983,
        4.998,
        5.103,
        5.154,
        5.121,
        5.097
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-11-17 20:00:54",
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
      "price": 5.456,
      "previous_close": 5.256,
      "change": 0.2,
      "change_percent": 3.81,
      "display_price": "5.456%",
      "status": "up",
      "history": [
        5.256,
        5.35,
        5.356,
        5.433,
        5.481,
        5.467,
        5.456
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-11-17 20:00:54"
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
      "price": 103.47,
      "previous_close": 102.23,
      "change": 1.24,
      "change_percent": 1.21,
      "display_price": "103.47 pt",
      "status": "up",
      "history": [
        102.23,
        102.91,
        103.17,
        103.41,
        103.55,
        103.47
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-11-17 20:00:54"
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
      "price": 159.315,
      "previous_close": 158.292,
      "change": 1.023,
      "change_percent": 0.65,
      "display_price": "159.31엔",
      "status": "up",
      "history": [
        158.292,
        157.983,
        158.705,
        159.734,
        159.875,
        159.78,
        159.315
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-11-17 20:00:54"
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
      "price": 3851.3,
      "previous_close": 4030.2,
      "change": -178.9,
      "change_percent": -4.44,
      "display_price": "$3,851.30",
      "status": "down",
      "history": [
        4030.2,
        4000.5,
        3885.3,
        3886.3,
        3853.0,
        3851.3
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-11-17 20:00:54"
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
      "price": 85.7,
      "previous_close": 86.04,
      "change": -0.34,
      "change_percent": -0.4,
      "display_price": "$85.70",
      "status": "down",
      "history": [
        86.04,
        86.53,
        88.74,
        88.56,
        85.72,
        85.7
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-11-17 20:00:55"
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
      "price": 63679.66,
      "previous_close": 73964.47,
      "change": -10284.81,
      "change_percent": -13.91,
      "display_price": "$63,680",
      "status": "down",
      "history": [
        73964.469,
        71342.969,
        68249.273,
        64128.051,
        65305.062,
        64855.844,
        63679.66
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-11-17 20:00:55"
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
      "price": 933.1,
      "previous_close": 19.3,
      "change": 913.8,
      "change_percent": 0.0,
      "display_price": "$933.1B (약 9,331억$)",
      "status": "up",
      "history": [
        295.5,
        316.5,
        912.1,
        924.6,
        27.8,
        19.3,
        933.1
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-11-17 20:00:55"
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
      "price": 7302.14,
      "previous_close": 7376.86,
      "change": -74.72,
      "change_percent": -1.01,
      "display_price": "7,302.14",
      "status": "down",
      "history": [
        7549.94,
        7520.93,
        7619.38,
        7592.4,
        7561.67,
        7416.59,
        7302.14
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-11-17 20:00:56"
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
      "price": 26784.068,
      "previous_close": 26989.99,
      "change": -205.922,
      "change_percent": -0.76,
      "display_price": "26,784.07",
      "status": "down",
      "history": [
        27907.631,
        27740.789,
        28374.25,
        28289.189,
        27943.74,
        27197.15,
        26784.068
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-11-17 20:00:56"
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
      "price": 9454.983,
      "previous_close": 9390.25,
      "change": 64.733,
      "change_percent": 0.69,
      "display_price": "9,454.98",
      "status": "up",
      "history": [
        10033.93,
        9998.33,
        10564.11,
        10506.67,
        10146.32,
        9610.65,
        9454.983
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-11-17 20:00:56"
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
      "price": 26.22,
      "previous_close": 19.92,
      "change": 6.3,
      "change_percent": 31.63,
      "display_price": "26.22",
      "status": "up",
      "history": [
        19.92,
        19.46,
        17.49,
        18.7,
        19.3,
        22.91,
        26.22
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-11-17 20:00:56"
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
      "price": 1335.05,
      "previous_close": 1362.7,
      "change": -27.65,
      "change_percent": -2.03,
      "display_price": "1,335.05원",
      "status": "down",
      "history": [
        1362.7,
        1343.84,
        1341.91,
        1336.26,
        1333.78,
        1333.25,
        1335.05
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-11-17 20:00:56",
      "fx_averages": {
        "avg_1y": 1439.7,
        "avg_3y": 1401.3
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
      "price": 4968.48,
      "previous_close": 5059.69,
      "change": -91.21,
      "change_percent": -1.8,
      "display_price": "4,968.48",
      "status": "down",
      "history": [
        5018.85,
        5239.13,
        5375.36,
        5342.73,
        5290.53,
        5100.5
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-11-17 20:00:57"
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
      "price": 650.06,
      "previous_close": 644.27,
      "change": 5.79,
      "change_percent": 0.9,
      "display_price": "650.06",
      "status": "up",
      "history": [
        638.97,
        667.61,
        705.1,
        696.53,
        699.66,
        665.65
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-11-17 20:00:57"
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
      "updated_at": "2026-11-17 20:00:57"
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
      "updated_at": "2026-11-17 20:00:58"
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
      "price": 133.92,
      "previous_close": 137.01,
      "change": -3.09,
      "change_percent": -2.26,
      "display_price": "$133.92",
      "status": "down",
      "history": [
        142.1,
        139.18,
        147.81,
        145.38,
        142.78,
        136.55,
        133.92
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-11-17 20:00:58"
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
      "crawled_at": "2026-11-17 20:01:08"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "연준(Fed)의 Musalem은 2027년 봄 이전에 몇 차례의 금리 인상이 필요할 것이라고 말했습니다.",
      "title_en": "Fed’s Musalem Says Several Rate Hikes Likely Needed Before Spring 2027",
      "summary_ko": "연준(Fed)의 Musalem, 2027년 봄 이전에 몇 차례의 금리 인상이 필요할 것 같다고 말함 WSJ. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Wall Street Journal뿐만 아니라 CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxONlE5MkU2R0ZHZmVES3lZRXd0anBhR25DRkJOcTM5UU1INjc2VXVuMTFZSG9ONE9HTUdCTGpiVnE2bTdxNmQ5a0JuZWZwVlNFM3dKc0JiZ3U4OElZRWtkLTFOU20tMGZDNVRWMFk5YjdsTzlZdkxNRGV5dl9QWjF3YW5SMV9RdVJUUGNqcmpuSzhNT25wYllhWVcwSXIzYU5acEZkRmlMbUdiQl91NXpnbG95M2NiVmdCYjVuUlFJdw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivwFBVV95cUxONlE5MkU2R0ZHZmVES3lZRXd0anBhR25DRkJOcTM5UU1INjc2VXVuMTFZSG9ONE9HTUdCTGpiVnE2bTdxNmQ5a0JuZWZwVlNFM3dKc0JiZ3U4OElZRWtkLTFOU20tMGZDNVRWMFk5YjdsTzlZdkxNRGV5dl9QWjF3YW5SMV9RdVJUUGNqcmpuSzhNT25wYllhWVcwSXIzYU5acEZkRmlMbUdiQl91NXpnbG95M2NiVmdCYjVuUlFJdw%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 17 Nov 2026 13:14:00 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "세인트루이스 연준(Fed)의 Musalem은 앞으로 몇 달 안에 4번의 금리 인상이 더 필요할 수 있다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5Zd1ptOVBmWHRWbVFNZWhHUWpUelhIUHltUURraG1kOC1HWkJPNWtkNEdZQlJhTHJ5dGQ1N1dmVk1FZW4zQ29UOU0yU3FqbVpNbVB6dFhXN1FTd2pVRHYtNWp4QlFlVkpEaWtEaUJuME9Fc3dVdE85dUhTSdIBgAFBVV95cUxNYzdaNndIR09janNlbVpSX1Fya2VfVnlYSTU5M3hmTUFkcm1MVzNnMngwZ0lMQmJXb0ZEQXZOci1VS3M2SjRfMUdOcnQ2VlRmQmNaZmhqT0RVSGtGNmZTaS03VW9IRFE3aDctTU9VWG9IQXhFd0J2SHBuelJaV2gtWg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMie0FVX3lxTE5Zd1ptOVBmWHRWbVFNZWhHUWpUelhIUHltUURraG1kOC1HWkJPNWtkNEdZQlJhTHJ5dGQ1N1dmVk1FZW4zQ29UOU0yU3FqbVpNbVB6dFhXN1FTd2pVRHYtNWp4QlFlVkpEaWtEaUJuME9Fc3dVdE85dUhTSdIBgAFBVV95cUxNYzdaNndIR09janNlbVpSX1Fya2VfVnlYSTU5M3hmTUFkcm1MVzNnMngwZ0lMQmJXb0ZEQXZOci1VS3M2SjRfMUdOcnQ2VlRmQmNaZmhqT0RVSGtGNmZTaS03VW9IRFE3aDctTU9VWG9IQXhFd0J2SHBuelJaV2gtWg%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed)의 Musalem: 인플레이션 통제를 위해 봄까지 몇 차례의 금리 인상이 필요할 것",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOSzVrVkNybjh2TVFWYUhCWnVlMnpQMEZlOHdhRXp5QUJ6WXVoSFVfdXdEb3JuNGdScFNqWjhQRDFkbVpYYzViaDVTVVpkZGpjUVozUXNrT0JsLVMwRzRNZFFCbHBQX2M3dmFFSi04bkFZRzlVT1JwcUhQelRBTVlLdDdvbkhrNTVTNkJHQUdnUFV0V0RGcDdHZEcxZVV2c3lZeXpUZFYwQTBrV09fQXNnQw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOSzVrVkNybjh2TVFWYUhCWnVlMnpQMEZlOHdhRXp5QUJ6WXVoSFVfdXdEb3JuNGdScFNqWjhQRDFkbVpYYzViaDVTVVpkZGpjUVozUXNrT0JsLVMwRzRNZFFCbHBQX2M3dmFFSi04bkFZRzlVT1JwcUhQelRBTVlLdDdvbkhrNTVTNkJHQUdnUFV0V0RGcDdHZEcxZVV2c3lZeXpUZFYwQTBrV09fQXNnQw%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed)이 흥미를 승인하고, 올해 또 하나의 신호가 올 것이라는 신호를 보냈습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTFB2d21SUXhkazRGZk1QSTgxb2lQME5TUzdVNEZ0bWVxdWRENm96dUNfU040Rnc4Skl5MnZwcXlKLXh0c1NzYVhrNDZHY0F2M2otb0ZEZmRyd0N2Vlk1WjZ1a1FpZk9jaEtBV25HejlPUE5LVWllZDN2TtIBfkFVX3lxTE5MbUliaWM2Nm1nSDRQU0ZEUmdZUXVNVjRZeXpzRWlaY2pMRzMwdGFUb09jaWhqUFNJZEo5OUxJenR2aEtkcWR0MnVYR3VmdndJWlJTNGlPWmUzNmJYLS1oZ29fMW5PR0dzY3JYUkUzaGdfemtIQjBqc1hjMjNtZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMieEFVX3lxTFB2d21SUXhkazRGZk1QSTgxb2lQME5TUzdVNEZ0bWVxdWRENm96dUNfU040Rnc4Skl5MnZwcXlKLXh0c1NzYVhrNDZHY0F2M2otb0ZEZmRyd0N2Vlk1WjZ1a1FpZk9jaEtBV25HejlPUE5LVWllZDN2TtIBfkFVX3lxTE5MbUliaWM2Nm1nSDRQU0ZEUmdZUXVNVjRZeXpzRWlaY2pMRzMwdGFUb09jaWhqUFNJZEo5OUxJenR2aEtkcWR0MnVYR3VmdndJWlJTNGlPWmUzNmJYLS1oZ29fMW5PR0dzY3JYUkUzaGdfemtIQjBqc1hjMjNtZw%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) 관계자들은 인플레이션이 계속 높아지면 흥미진진한 소개를 앞두고 회의록을 보여줍니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNTzJNdE5HTkZiejhGOG1KOFN6MWthLVE1Z1MxNmY4S3BZdGxvaDg4aVJ6Y003UHQzd2RqZ3pvOENfUkdSUDlpQUEtMEx1enQzbkdOQXJCTkhWdUdzd2sxRG5kWDA4OThVMUJNaTBDN19aTUhMYVJMUVE5LThvSS0xRUptNld5ZUNURGU3VzFYeEF5QWpqZmN1d1ZtMmQ5NFdkbHNOc0N2ZG83QVByTFFBTg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxNTzJNdE5HTkZiejhGOG1KOFN6MWthLVE1Z1MxNmY4S3BZdGxvaDg4aVJ6Y003UHQzd2RqZ3pvOENfUkdSUDlpQUEtMEx1enQzbkdOQXJCTkhWdUdzd2sxRG5kWDA4OThVMUJNaTBDN19aTUhMYVJMUVE5LThvSS0xRUptNld5ZUNURGU3VzFYeEF5QWpqZmN1d1ZtMmQ5NFdkbHNOc0N2ZG83QVByTFFBTg%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:14"
    },
    {
      "source": "MarketWatch",
      "title_ko": "연준(Fed)의 추가 금리 인상에 대한 기대가 커지면서 채권 수익( 금리)은 2022년 이후 가장 큰 급등을 기록했습니다.",
      "title_en": "Bond yields just saw their biggest surge since 2022 as expectations grow for more Fed rate hikes",
      "summary_ko": "연준(Fed)의 추가 금리 인상에 대한 기대가 커지면서 Bond 수익률( 금리)은 2022년 이후 가장 큰 급등을 기록했습니다. MarketWatch. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. MarketWatch뿐만 아니라 CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOYXRmY2hqcTlNTnNtZWMyeVJHSy10VGt0Zm5GdS1yRHNKU3lfY2RUZnVnVmk4alB2WFNhUDF2cV9FcnZLTHA5VjFpWmhLYTlfTVRuYjdLVlpFODE4N1U4WW9ma1BRS21rZjNndjJ1MG1fU0tpdWZnWk1FMHRiT2xZRVdOVWYxUXJzWEdOYmJUeGRFRjR1ckhsdk4zcVA0d1Q4aTh6WEhDR0ItU083a2RGclE4VThOd0h1TklldUxLYUptYWdrY0pjZ3lJZ3VqUWtaX1Y1dF93?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMi1gFBVV95cUxOYXRmY2hqcTlNTnNtZWMyeVJHSy10VGt0Zm5GdS1yRHNKU3lfY2RUZnVnVmk4alB2WFNhUDF2cV9FcnZLTHA5VjFpWmhLYTlfTVRuYjdLVlpFODE4N1U4WW9ma1BRS21rZjNndjJ1MG1fU0tpdWZnWk1FMHRiT2xZRVdOVWYxUXJzWEdOYmJUeGRFRjR1ckhsdk4zcVA0d1Q4aTh6WEhDR0ItU083a2RGclE4VThOd0h1TklldUxLYUptYWdrY0pjZ3lJZ3VqUWtaX1Y1dF93%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 12 Nov 2026 22:16:00 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "분석: Kevin Warsh가 이번 주 연준(Fed)을 보류해야 하는 세 가지 이유가 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPVVJUMVhPX29BcUJ5OS02b20tQ0xLOHI0bDZ2bFNuc040S3UwYVpmSkN3YlYyZUUxYWZxeGgyU0lJamhsR0w0QWhiUmxDc3hPQVFLUmJmTDdyNmg4ckZUbU1JTi1SY05QWXk3dDRWRGZoLUNZUTk0Q3MtZjl1ZjFJY2FpclNMODd6bXfSAY8BQVVfeXFMTlNGT2plT3FjV25FSXY5aFQxVE9KR1ljejYySlJSdG56OFZ3M1g1ZDRkOG1pODNiUUl3bmlhaklnWVRVSU5kTTBVd2xnWXdMaHpIdVFra2M1Ty1OMlZUMzVqMGh2VU5GeG1sWkZCT2pBdW9ESEwtWnBMb3lmX2RyOU11NVlCZFFjaTdRZkdVQ3M?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxPVVJUMVhPX29BcUJ5OS02b20tQ0xLOHI0bDZ2bFNuc040S3UwYVpmSkN3YlYyZUUxYWZxeGgyU0lJamhsR0w0QWhiUmxDc3hPQVFLUmJmTDdyNmg4ckZUbU1JTi1SY05QWXk3dDRWRGZoLUNZUTk0Q3MtZjl1ZjFJY2FpclNMODd6bXfSAY8BQVVfeXFMTlNGT2plT3FjV25FSXY5aFQxVE9KR1ljejYySlJSdG56OFZ3M1g1ZDRkOG1pODNiUUl3bmlhaklnWVRVSU5kTTBVd2xnWXdMaHpIdVFra2M1Ty1OMlZUMzVqMGh2VU5GeG1sWkZCT2pBdW9ESEwtWnBMb3lmX2RyOU11NVlCZFFjaTdRZkdVQ3M%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:18"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "BofA \"연준, 다음 달부터 3회 연속 금리 인상\"…1월 전망 추가",
      "title_en": "",
      "summary_ko": "BofA \"연준, 다음 달부터 3회 연속 금리 인상\"…1월 전망 추가 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 IDNFinancials, www.tmgm.com 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5wUGQ3T1lmeDBuT3dOUklaQ0hOUEFxS1dTcUpmMXFFci1EX05QNjlIaUgzQ1ZkNFZpNFN6ZlVVU2ZfMzRYRE1yajc3SElEd1FyNE40anQtbE1vek1LMGNGRTZtQ2xzbG11QUxkdUw4dG0?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5wUGQ3T1lmeDBuT3dOUklaQ0hOUEFxS1dTcUpmMXFFci1EX05QNjlIaUgzQ1ZkNFZpNFN6ZlVVU2ZfMzRYRE1yajc3SElEd1FyNE40anQtbE1vek1LMGNGRTZtQ2xzbG11QUxkdUw4dG0?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 13 Nov 2026 16:41:56 GMT",
      "related_articles": [
        {
          "source": "Investing.com",
          "title_ko": "연준 윌리엄스 총재, 인플레이션 대응 위해 추가 금리 인상 필요 By Investing.com",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE44SjFvb25GcEg0X2NQSGNTUDllU1gwOF8xY2FGWld4U2pWUW5kZ3NqcG9kM0JYYTk4VzJXaHpaODhsWmpGWkN4YkZPbTh1LWdWRlhYNFltTjR3YTJydjFiVE5STWdlVnhHS2c?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE44SjFvb25GcEg0X2NQSGNTUDllU1gwOF8xY2FGWld4U2pWUW5kZ3NqcG9kM0JYYTk4VzJXaHpaODhsWmpGWkN4YkZPbTh1LWdWRlhYNFltTjR3YTJydjFiVE5STWdlVnhHS2c?oc=5"
        },
        {
          "source": "IDNFinancials",
          "title_ko": "미국 달러화, 19개월 만에 최고치 기록, 연준 금리 인상 기대 강화",
          "original_url": "https://news.google.com/rss/articles/CBMihwNBVV95cUxOQzZlZE56ZWwyTk5sOXRTTzl5bmdmSkt6MWdZamI0OWF0b2RrRHA2LXE1eGRBR2xrdE1qOWs1ZnB4djR6UmctUmNvUkZjaFRBZHN6WXVQVzAwUUp0cnVUd3VFSnAtWmxkZW9ZWVBLcHN6aFNJbUxsMTZ6Mjk1Y1YwaFdLdGJHb09tN3dDem84blNJS0xjcEFIM2dzck11c3VvVFVUalhGRlZXVy04ZXJGUFozNWQ0MGlCUFNZc2lBdEFDN0RvZkNLaDdDRHZSd3Vuazk1eHJmd0FhMWM4MzJoT1Q4dUhJT0NNb0hHeTdsWGxYZkkySVFlc0xzUk9VQXRyck5sbE1LbUVZaE92NEkwV0VhQXFXNnpXbC16M0M1Z3g3QjJBYmE5eU8tQkN5LUlxdmt0RGxjMWlhMDNhVTE3X040VW5OT25VekRfc05jaTVqQ0xSdFRhdVdMVkhobEVHZnBVem1zZUtNYU53R0pEanNtWjVSSmxqQk1CMVZVcTJNZDNOU19J?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMihwNBVV95cUxOQzZlZE56ZWwyTk5sOXRTTzl5bmdmSkt6MWdZamI0OWF0b2RrRHA2LXE1eGRBR2xrdE1qOWs1ZnB4djR6UmctUmNvUkZjaFRBZHN6WXVQVzAwUUp0cnVUd3VFSnAtWmxkZW9ZWVBLcHN6aFNJbUxsMTZ6Mjk1Y1YwaFdLdGJHb09tN3dDem84blNJS0xjcEFIM2dzck11c3VvVFVUalhGRlZXVy04ZXJGUFozNWQ0MGlCUFNZc2lBdEFDN0RvZkNLaDdDRHZSd3Vuazk1eHJmd0FhMWM4MzJoT1Q4dUhJT0NNb0hHeTdsWGxYZkkySVFlc0xzUk9VQXRyck5sbE1LbUVZaE92NEkwV0VhQXFXNnpXbC16M0M1Z3g3QjJBYmE5eU8tQkN5LUlxdmt0RGxjMWlhMDNhVTE3X040VW5OT25VekRfc05jaTVqQ0xSdFRhdVdMVkhobEVHZnBVem1zZUtNYU53R0pEanNtWjVSSmxqQk1CMVZVcTJNZDNOU19J?oc=5"
        },
        {
          "source": "www.tmgm.com",
          "title_ko": "연준 해맥, 인플레이션 확산 속 점진적 금리 인상 지지",
          "original_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNeHlybWF5eVJ2dlF6SzRuZkJBZEdmMnFCY2g2VEJLeWhMd0pCQl91OXdmdlE1YjlBdVpOVTlzamNTVUwxLXBEYU9rNVctMHYzM1JVQ1VmQzYtbmthdEY4Mnk3MU9UYVUyN3pSRHJGLUctYVJQWWpEY3A3LUN5aWV4NnczWldUM3cxdkZKX2Jwc3prWkk0bzdEZ29qRmNWSVJvYTlrNWNkdXhqN2ViNlRVemsyUUljRGdp?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNeHlybWF5eVJ2dlF6SzRuZkJBZEdmMnFCY2g2VEJLeWhMd0pCQl91OXdmdlE1YjlBdVpOVTlzamNTVUwxLXBEYU9rNVctMHYzM1JVQ1VmQzYtbmthdEY4Mnk3MU9UYVUyN3pSRHJGLUctYVJQWWpEY3A3LUN5aWV4NnczWldUM3cxdkZKX2Jwc3prWkk0bzdEZ29qRmNWSVJvYTlrNWNkdXhqN2ViNlRVemsyUUljRGdp?oc=5"
        },
        {
          "source": "Investing.com",
          "title_ko": "도이체방크, 예상보다 뜨거운 미국 인플레이션에 연준 3회 연속 금리 인상 전망",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1pd2pPQVMyenY1bHRwVXRvdmRmZEgydDVmVFEwZzNDTTBkc1ZXQTZxdnhPOUNScXB2QTlHY2V6VVNJTTNnMm9Tei1UTlFmMkNnc01SOGdBUnFlQ1dWeWVYREVyd3JSbnV4bXc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1pd2pPQVMyenY1bHRwVXRvdmRmZEgydDVmVFEwZzNDTTBkc1ZXQTZxdnhPOUNScXB2QTlHY2V6VVNJTTNnMm9Tei1UTlFmMkNnc01SOGdBUnFlQ1dWeWVYREVyd3JSbnV4bXc?oc=5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:18"
    },
    {
      "source": "Reuters",
      "title_ko": "Bessent, 연준(Fed) Goolsbee, 인플레이션에서 에너지 쇼크의 역할에 대해 논의",
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
          "source": "Bloomberg",
          "title_ko": "Goolsbee는 연준이 인플레이션 신뢰성을 회복해야 한다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPRkdUNWlhMGFRZG5rd2ZNZE1SUHgyYl9YUTZRbWZRYkFfNkc3ZWJxeEVuOW5VOGdjUFFOb191N3VYLUhvOTBtRHZYVS0wa0FwdXFzZnFPVmI3X3I3bE1sVlp6RS1Jdm5vRW4tcndnSl9IQ0FQUGd0ODhHRkpUMlB0akJ0akZpZTNNdlZXdk8wREY3bHZRTzdfcFFLQjRsancxWHBvSlNRZTdKaFNhMmQyOQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxPRkdUNWlhMGFRZG5rd2ZNZE1SUHgyYl9YUTZRbWZRYkFfNkc3ZWJxeEVuOW5VOGdjUFFOb191N3VYLUhvOTBtRHZYVS0wa0FwdXFzZnFPVmI3X3I3bE1sVlp6RS1Jdm5vRW4tcndnSl9IQ0FQUGd0ODhHRkpUMlB0akJ0akZpZTNNdlZXdk8wREY3bHZRTzdfcFFLQjRsancxWHBvSlNRZTdKaFNhMmQyOQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:23"
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
      "crawled_at": "2026-11-17 20:01:28"
    },
    {
      "source": "Reuters",
      "title_ko": "미 국채/재무부장관 베센트가 이란의 위협 이후 군사기지로 이동했다고 소식통이 전했습니다.",
      "title_en": "US Treasury chief Bessent moved to military base after Iranian threats, sources say",
      "summary_ko": "미 국채/재무부장관 베센트가 이란의 위협 이후 군사기지로 이동했다고 소식통이 로이터통신에 말했다. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 CNBC, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPT3lYOEw5X1FaSkpweDhiUmp3d0QybFR3ZU4xRl8wYXRRMS1CbzFFWENqLXNBVDZhOHBvSHdXSFh3NW5oNXEyUjRfWmFMT0g1bkV2NXRWWDc5UUpsaXVWLWxwQ0RLSkRkTW5jSWlkQ1p1dzFRa2pySzFVTklVb0k3TFo1bmZPb0lZTXVId1oyN2hCZGxkRmZua2R1ay1LN3VkNE1zb1FFNHUwNGNwSlBVdE5aMzFocFlGWTNINElWV3BvY21lOWRNTmxaNHB2dw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizgFBVV95cUxPT3lYOEw5X1FaSkpweDhiUmp3d0QybFR3ZU4xRl8wYXRRMS1CbzFFWENqLXNBVDZhOHBvSHdXSFh3NW5oNXEyUjRfWmFMT0g1bkV2NXRWWDc5UUpsaXVWLWxwQ0RLSkRkTW5jSWlkQ1p1dzFRa2pySzFVTklVb0k3TFo1bmZPb0lZTXVId1oyN2hCZGxkRmZua2R1ay1LN3VkNE1zb1FFNHUwNGNwSlBVdE5aMzFocFlGWTNINElWV3BvY21lOWRNTmxaNHB2dw%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 11 Nov 2026 13:49:37 GMT",
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
          "source": "CNBC",
          "title_ko": "미 국채/재무부 베센트 장관: 'F는 이란 지도부'",
          "original_url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQTUhyMmUtcHNRNzFDUjhIa2FZdWlZQnZzZDFtUi1IZUM3Wjg3Y0VWUG45TzdlVjE4b3NrYjVfNVloRVhYUmVYTUg5UVpPU1JHTEdsQWNJR2tBSkFlQi1TdG5kREFCSkNRbGszUm5Vbkd0QTJhR3hpaUg1S0YzSEctQ1dya3pXcWJoSEdQSjFVMUVway1GNmROTk5R?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimgFBVV95cUxQTUhyMmUtcHNRNzFDUjhIa2FZdWlZQnZzZDFtUi1IZUM3Wjg3Y0VWUG45TzdlVjE4b3NrYjVfNVloRVhYUmVYTUg5UVpPU1JHTEdsQWNJR2tBSkFlQi1TdG5kREFCSkNRbGszUm5Vbkd0QTJhR3hpaUg1S0YzSEctQ1dya3pXcWJoSEdQSjFVMUVway1GNmROTk5R%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent는 수십 년 만에 가장 개입적인 인물이 되었습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQQ0dQbnREekdKc3V2UjZiMzF5ZGRmMVhZWU5mdVNoNjNNdDFFLXdxQmFiSTA1YlhEM0ZCWk1wbk5ObjY2TnYzVXluT3RSdG1zWnpjRXZtMW1pSlg3ZTBaZG5WdVNmSEdxREdfeWlNY1p2NGZaUENpMTFPOThNUFp2ZFR6NVFVTHpwV3o4WWhiM1NVa2syZVl1VkdkQTJuaXVJOE5LeEtrbXFuWW1feW1VbG9xTQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxQQ0dQbnREekdKc3V2UjZiMzF5ZGRmMVhZWU5mdVNoNjNNdDFFLXdxQmFiSTA1YlhEM0ZCWk1wbk5ObjY2TnYzVXluT3RSdG1zWnpjRXZtMW1pSlg3ZTBaZG5WdVNmSEdxREdfeWlNY1p2NGZaUENpMTFPOThNUFp2ZFR6NVFVTHpwV3o4WWhiM1NVa2syZVl1VkdkQTJuaXVJOE5LeEtrbXFuWW1feW1VbG9xTQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:34"
    },
    {
      "source": "Bloomberg",
      "title_ko": "한국 주식, 이란 전쟁 위험으로 2024년 이후 최악의 매도세",
      "title_en": "Korean Stocks Suffer Worst Selloff Since 2024 on Iran War Risks",
      "summary_ko": "한국 주식, 이란 전쟁 위험으로 2024년 이후 최악의 매도세 Bloomberg.com. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg뿐만 아니라 Financial Times, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Financial Times",
          "title_ko": "미국 미국 국채, 트럼프 '해방일' 이후 최악의 주 기록",
          "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQb0FUTktDMERPRkR0VWQyeFdYUXZEZUpGYjFMdFlCekF4YTBVRkJNZzZFY1Fsc2VPeUgzekJnc3Z1XzhaVXZQRTRMWmNGUlJGeEFDNGZlMDc3d2syWDZNRndBeDl2RkY5MnpBM09sUjNSTkVHYWExNU9VSVBUQnhXWjFkaW4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihAFBVV95cUxQb0FUTktDMERPRkR0VWQyeFdYUXZEZUpGYjFMdFlCekF4YTBVRkJNZzZFY1Fsc2VPeUgzekJnc3Z1XzhaVXZQRTRMWmNGUlJGeEFDNGZlMDc3d2syWDZNRndBeDl2RkY5MnpBM09sUjNSTkVHYWExNU9VSVBUQnhXWjFkaW4%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "외국인 매도로 한국 증시, 이정표 도달 후 하락",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPY1ZwaUhhOVZEd3c2VUxZRWNsZmtlMDR6ZjR2Z29MZndiNFMzNEtDX3cwQ0oyS0dqM1BwYnJQRV80NWhteDI1VDlRcnR5MUpqTDV5Mlk3Z3h4ZE8wY2RjTFBOeFBDbTUwVGpVTG83MGpNUGdZeENSZk1QQWpvOUtyUXJBTTlPWVB3cXZVbnVicVRXYkIwakltcTF3aEhGem85YXkxOHAxMS1vc1ZZcDR5NDFEZWFjZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPY1ZwaUhhOVZEd3c2VUxZRWNsZmtlMDR6ZjR2Z29MZndiNFMzNEtDX3cwQ0oyS0dqM1BwYnJQRV80NWhteDI1VDlRcnR5MUpqTDV5Mlk3Z3h4ZE8wY2RjTFBOeFBDbTUwVGpVTG83MGpNUGdZeENSZk1QQWpvOUtyUXJBTTlPWVB3cXZVbnVicVRXYkIwakltcTF3aEhGem85YXkxOHAxMS1vc1ZZcDR5NDFEZWFjZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:38"
    },
    {
      "source": "연합뉴스",
      "title_ko": "이란, 미국 경제봉쇄 맞서 군사행동으로 협상판 흔들기 시도",
      "title_en": "",
      "summary_ko": "이란, 미국 경제봉쇄 맞서 군사행동으로 협상판 흔들기 시도 연합뉴스. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 연합뉴스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFByd1VfZ1RZaGNUMklxOXNudU11RmNUd25ScVJMekN6M0xkeUpHWVVXUWluWHNGNGdnMTMxdncwNS1ScVV6eDdrSFVJTXBsSmt3X00wSTRnYmg1UTDSAWBBVV95cUxNOTYzNVVuVUNqbkxLUlVxMVg5bzVfaF9KYmZ4YW5aVWhWYWlLaGloZmstTWppT1E3b2pwbkVVZXkwWU1lM1Jtd2M2ekJ0Ui0tUmlwZnBHSnh4T0JIaHREVFo?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFByd1VfZ1RZaGNUMklxOXNudU11RmNUd25ScVJMekN6M0xkeUpHWVVXUWluWHNGNGdnMTMxdncwNS1ScVV6eDdrSFVJTXBsSmt3X00wSTRnYmg1UTDSAWBBVV95cUxNOTYzNVVuVUNqbkxLUlVxMVg5bzVfaF9KYmZ4YW5aVWhWYWlLaGloZmstTWppT1E3b2pwbkVVZXkwWU1lM1Jtd2M2ekJ0Ui0tUmlwZnBHSnh4T0JIaHREVFo?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 16 Nov 2026 00:26:01 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-17 20:01:38"
    },
    {
      "source": "글로벌이코노믹",
      "title_ko": "미·중, 첫 무역위원회 개최…각 40조원 상품 관세 인하 시행일 미제시",
      "title_en": "",
      "summary_ko": "미·중, 첫 무역위원회 개최…각 40조원 상품 관세 인하 시행일 미제시 글로벌이코노믹. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 글로벌이코노믹에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPV2hodktONURaMkt3X1hjYThPYUFTTVhTNktTajV2MmlJU0U2Z3ZrcFVzbkJXM0NZZUYtUkpHTWVpdVpfSEtqWDBiVkppYk5GdHloNXFpX3pud2ZrNGNTdEd0RTc4SU9QdmU3WXB3TmlSTTdzNDVBSkVENEM2TnRLVDhUMHhoSmJV?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPV2hodktONURaMkt3X1hjYThPYUFTTVhTNktTajV2MmlJU0U2Z3ZrcFVzbkJXM0NZZUYtUkpHTWVpdVpfSEtqWDBiVkppYk5GdHloNXFpX3pud2ZrNGNTdEd0RTc4SU9QdmU3WXB3TmlSTTdzNDVBSkVENEM2TnRLVDhUMHhoSmJV?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sat, 14 Nov 2026 05:41:18 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-17 20:01:38"
    },
    {
      "source": "매일경제",
      "title_ko": "코스피, 외국인·기관 매도에 상승 출발 후 보합권 등락",
      "title_en": "",
      "summary_ko": "코스피, 외국인·기관 매도에 상승 출발 후 보합권 등락 매일경제 마켓. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 매일경제뿐만 아니라 녹색경제신문, 매일경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1SQmI0eFg0YzgzUU9nTjZfcElxUHBJVGZiN2ViN01xaVI2SFRfdHdZemZ4eVpTREJwRXByNlBISG5UakgxTGRkVVBpc3NzUVpJdmc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1SQmI0eFg0YzgzUU9nTjZfcElxUHBJVGZiN2ViN01xaVI2SFRfdHdZemZ4eVpTREJwRXByNlBISG5UakgxTGRkVVBpc3NzUVpJdmc?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 16 Nov 2026 00:27:41 GMT",
      "related_articles": [
        {
          "source": "매일경제",
          "title_ko": "“삼전닉스 반등한다더니”…코스피, 외국인·기관 매도에 3.6% 급락 마감",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBzT2lYS0N5dXBrbFZTeGpmQl9hYXVjcVRVbUNUNDZ4Q0lUMmZwSE1kbElhZGxnZGdHcEZOV0lrMTdDQnFIakxBR3BaN1l2dmNUZGc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBzT2lYS0N5dXBrbFZTeGpmQl9hYXVjcVRVbUNUNDZ4Q0lUMmZwSE1kbElhZGxnZGdHcEZOV0lrMTdDQnFIakxBR3BaN1l2dmNUZGc?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "장 초반 코스피, 외국인 순매수에 3%↑…5500선 재진입",
          "original_url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxONDZhcFk2MzYwaVpqN3BGVXhvM2tMdHE1VXU1YlpkZzF3NTltX09ub3RIWUZIbmsxN2xkZjdXUThTVUJTb0JWOWdfd2dDeEF5eURWVE1YX3VsTU5tRlBwV2RPNU43bXRvQkx5dEpGdjBmaVRYd2RrTjhvNE51djlob0VKeFVHUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxONDZhcFk2MzYwaVpqN3BGVXhvM2tMdHE1VXU1YlpkZzF3NTltX09ub3RIWUZIbmsxN2xkZjdXUThTVUJTb0JWOWdfd2dDeEF5eURWVE1YX3VsTU5tRlBwV2RPNU43bXRvQkx5dEpGdjBmaVRYd2RrTjhvNE51djlob0VKeFVHUQ?oc=5"
        },
        {
          "source": "에너지경제신문",
          "title_ko": "코스피, 외국인 투매에 5000 내줬다…2월 이후 처음[마감시황]",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9TUjFvYV9DbWxCSzZ3RkN3NTdaMnEwSjJFUmpzS2Q4NGtrWVJZaWpNa3J3TXlTTzAzUnczUjYwcW9XWWttT1Z4VXJIN3lPdmE3Q05JTG01dVZTZXM?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9TUjFvYV9DbWxCSzZ3RkN3NTdaMnEwSjJFUmpzS2Q4NGtrWVJZaWpNa3J3TXlTTzAzUnczUjYwcW9XWWttT1Z4VXJIN3lPdmE3Q05JTG01dVZTZXM?oc=5"
        },
        {
          "source": "녹색경제신문",
          "title_ko": "코스피, 외국인 1.4조원 매도에 5000선 붕괴...9개월여 만에 최저수준",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBzSDZwTmUxcFk0QjBxclJhUjZNV3FEUm9ILXM1WmYtaDhxUl9WRV83YUd1LWtBZ1NXM2NHS0lmV0NrREY4NW94cVJkUmR1dTA4TE91eXlXZmtJRUtxVEJ0N0NIUUtvYnV2?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBzSDZwTmUxcFk0QjBxclJhUjZNV3FEUm9ILXM1WmYtaDhxUl9WRV83YUd1LWtBZ1NXM2NHS0lmV0NrREY4NW94cVJkUmR1dTA4TE91eXlXZmtJRUtxVEJ0N0NIUUtvYnV2?oc=5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:39"
    },
    {
      "source": "산경투데이",
      "title_ko": "원·달러 환율 1,335.7원 마감…중동 불안·긴축 우려에도 하락",
      "title_en": "",
      "summary_ko": "원·달러 환율 1,335.7원 마감…중동 불안·긴축 우려에도 하락 산경투데이. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 산경투데이뿐만 아니라 조세일보 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "조세일보",
          "title_ko": "원·달러 환율 2.50원 오른 1338.2원 마감...외국인 1.6조원 투매에 '흔들'",
          "original_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1uNnc1dlkzS2lSRVVZVmdwVndzT0xoWlpEWS1MSEJFeEpYTmcyeWxXTzh4STJzTHpjdXJoaFdubWpVVHFiRmV3SGNWdlVUMjdyejAxMFFESTNjcWpEME40?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1uNnc1dlkzS2lSRVVZVmdwVndzT0xoWlpEWS1MSEJFeEpYTmcyeWxXTzh4STJzTHpjdXJoaFdubWpVVHFiRmV3SGNWdlVUMjdyejAxMFFESTNjcWpEME40?oc=5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:39"
    },
    {
      "source": "뉴스1",
      "title_ko": "외국인 증시 이탈에 달러·원 장중 1340원대 반등(종합)",
      "title_en": "",
      "summary_ko": "외국인 증시 이탈에 달러·원 장중 1340원대 반등(종합) 뉴스1. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 뉴스1에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1uY1E0M18wNGd5WnR4RVdoZ2lENFpXSmtkU1RxU2VKcHhkcHhuZ2JFbzMtcDFEYWNzZVpiZVpsU0JqSGZuX05YU3JRMEYtNFV1TTF6RTBKOVZha2c?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1uY1E0M18wNGd5WnR4RVdoZ2lENFpXSmtkU1RxU2VKcHhkcHhuZ2JFbzMtcDFEYWNzZVpiZVpsU0JqSGZuX05YU3JRMEYtNFV1TTF6RTBKOVZha2c?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 17 Nov 2026 07:11:36 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-17 20:01:39"
    },
    {
      "source": "오피니언뉴스",
      "title_ko": "[증시 포인트] 관망심리 뚜렷할 듯...외국인 수급도 관건",
      "title_en": "",
      "summary_ko": "[증시 포인트] 관망심리 뚜렷할 듯...외국인 수급도 관건 오피니언뉴스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 오피니언뉴스뿐만 아니라 오피니언뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5RNTlyeWVSZTM4S01Bckk5ZDFucEVpRDh4a3RkaE5nclkwU0thZVhyVUlya0VDMWd2SWE0Sk90bDhsNFNycnRXV1Awelo1Y2pJNDB6NXA4MnRTdlFmWTA0NUhCc015bW9pTWNfSlVXWFZ3Zw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5RNTlyeWVSZTM4S01Bckk5ZDFucEVpRDh4a3RkaE5nclkwU0thZVhyVUlya0VDMWd2SWE0Sk90bDhsNFNycnRXV1Awelo1Y2pJNDB6NXA4MnRTdlFmWTA0NUhCc015bW9pTWNfSlVXWFZ3Zw?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 15 Nov 2026 23:39:20 GMT",
      "related_articles": [
        {
          "source": "오피니언뉴스",
          "title_ko": "[증시 포인트] 제한적 흐름 예상...외국인 수급이 관건",
          "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5sZUpYTlk3YWhqRU1CTzZ3UE9GWGxVSUYxMVJkVllkeGNQT0ZlM05PX1RYeDAzNWgyYkhEellDOS1sUzFuejZ5dUNUV0lTOVBOVkpDaE0xZHk4b3V5eVZRb3dfOUhwVXZQUGg4SVh3OUhWUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5sZUpYTlk3YWhqRU1CTzZ3UE9GWGxVSUYxMVJkVllkeGNQT0ZlM05PX1RYeDAzNWgyYkhEellDOS1sUzFuejZ5dUNUV0lTOVBOVkpDaE0xZHk4b3V5eVZRb3dfOUhwVXZQUGg4SVh3OUhWUQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:39"
    },
    {
      "source": "남도일보",
      "title_ko": "[특징주]유진테크, 외국인 순매수에 4.87% 오른 채 마감",
      "title_en": "",
      "summary_ko": "[특징주]유진테크, 외국인 순매수에 4.87% 오른 채 마감 남도일보. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 남도일보뿐만 아니라 씬짜오베트남 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9pX1I0cTBLbnJtcXYtdDhRS1hHOGRETXRRZ3RDeUszOEhKUzljSEUydHMyVGc1YklQcXphY0VBMHRkcjg2Wm13VzExY0VtNmJYQkZlRGNmQnhjS0xBZUhvcUVpb0xoN1BsRjFNVdIBcEFVX3lxTFBqUElsYmhwcncwVFpqUlRrdmF1aFRmV3hCOU5BV2NuMU5BSFVWWDByajNJa29TNlo1M00wTjN6MDhtVV82ZTFheHE4T3N2cDhYSDlHVVlIOVRoYTRXdjdzX3JMcUJKd2hPVk5idDdtYWM?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9pX1I0cTBLbnJtcXYtdDhRS1hHOGRETXRRZ3RDeUszOEhKUzljSEUydHMyVGc1YklQcXphY0VBMHRkcjg2Wm13VzExY0VtNmJYQkZlRGNmQnhjS0xBZUhvcUVpb0xoN1BsRjFNVdIBcEFVX3lxTFBqUElsYmhwcncwVFpqUlRrdmF1aFRmV3hCOU5BV2NuMU5BSFVWWDByajNJa29TNlo1M00wTjN6MDhtVV82ZTFheHE4T3N2cDhYSDlHVVlIOVRoYTRXdjdzX3JMcUJKd2hPVk5idDdtYWM?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 17 Nov 2026 06:57:00 GMT",
      "related_articles": [
        {
          "source": "씬짜오베트남",
          "title_ko": "베트남 주식 FPT, 외국인 순매도 163억 동 급출회",
          "original_url": "https://news.google.com/rss/articles/CBMiSEFVX3lxTFBIM0ZTZEJ1TGVOYzh0S0NLdEllUEw2cm41T2xYMWNsanZKYnI0SHg2SUVNMGlmWEpqS1JxWmFLd1I0eDBQcWExbg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiSEFVX3lxTFBIM0ZTZEJ1TGVOYzh0S0NLdEllUEw2cm41T2xYMWNsanZKYnI0SHg2SUVNMGlmWEpqS1JxWmFLd1I0eDBQcWExbg?oc=5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:39"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "엔비디아 우려에 코스피 장중 5,000 하회…외국인 순매도(상보)",
      "title_en": "",
      "summary_ko": "엔비디아 우려에 코스피 장중 5,000 하회…외국인 순매도(상보) 연합인포맥스. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. 연합인포맥스뿐만 아니라 아시아경제, 시사저널e 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5Ed1BMOFlJTWtVSFVZWVVsZUFpZ3V6UXVTMDdwNXQtMzItQ1Q3RU1Id29JZkF3VXVadWtxa1djSW53RUZzX1lNQlI5N1JVSHlNUUxmWmJBVjg4Qm5VVnN1YUh2VnhqSjRsTGEycVZsbkk?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5Ed1BMOFlJTWtVSFVZWVVsZUFpZ3V6UXVTMDdwNXQtMzItQ1Q3RU1Id29JZkF3VXVadWtxa1djSW53RUZzX1lNQlI5N1JVSHlNUUxmWmJBVjg4Qm5VVnN1YUh2VnhqSjRsTGEycVZsbkk?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Tue, 17 Nov 2026 00:23:00 GMT",
      "related_articles": [
        {
          "source": "인더스트리뉴스",
          "title_ko": "코스피, 외국인·기관 매도에 약세…엔비디아발 불확실성 '지속'",
          "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1sRFp2cUFIRm5mTElUZExEM0V3WEhUbC02TkdvS2l0VjZsdENUZ3NIQ09DbWJuZU5TRnZJUFNyeFh5Zmh2b3drY0JVdklLQnBZdk81Mi1mOW9Sckxfamk4YUgxQzRJMGFuXzI1Nmc5cFdYUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1sRFp2cUFIRm5mTElUZExEM0V3WEhUbC02TkdvS2l0VjZsdENUZ3NIQ09DbWJuZU5TRnZJUFNyeFh5Zmh2b3drY0JVdklLQnBZdk81Mi1mOW9Sckxfamk4YUgxQzRJMGFuXzI1Nmc5cFdYUQ?oc=5"
        },
        {
          "source": "아시아경제",
          "title_ko": "[포토] 엔비디아 우려에 코스피 장중 5,000 하회…외국인 순매도",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5LSlhYNzJMZGR3d285dTluaXYya01meG5hbzVDcmF6Q2gxekFpSlUwYlg2eTlfajJOVUY1MUhxb2h2V0Qza25pNmtsWUlqUU5MdWhLTklaR0dWNVpSZWU1bw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5LSlhYNzJMZGR3d285dTluaXYya01meG5hbzVDcmF6Q2gxekFpSlUwYlg2eTlfajJOVUY1MUhxb2h2V0Qza25pNmtsWUlqUU5MdWhLTklaR0dWNVpSZWU1bw?oc=5"
        },
        {
          "source": "시장경제신문",
          "title_ko": "[개장시황] 코스피, 외국인 매도에 5000선 이탈…엔비디아 실적 앞두고 경계감",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE04aHZvVG51RVFTZFpOMFRWdjBpcUxQY3hRX1poZ3RtWDFtS1JSc1dxdGNEUWFuakJSazdkdGdDc1pDZ1Nyall3QnVQWVR4enhCZXgwWUIxUnFhSDh1aDI4YzhJWWxValg0aGNhOEF4YXM?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE04aHZvVG51RVFTZFpOMFRWdjBpcUxQY3hRX1poZ3RtWDFtS1JSc1dxdGNEUWFuakJSazdkdGdDc1pDZ1Nyall3QnVQWVR4enhCZXgwWUIxUnFhSDh1aDI4YzhJWWxValg0aGNhOEF4YXM?oc=5"
        },
        {
          "source": "시사저널e",
          "title_ko": "[e마켓오프닝] 美 반도체지수 3.4% 급락···코스피 외국인 매매 향방은",
          "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTFBkMVRfaXBZZmRqZEoyeHpHUzRnVVB0NUstQllWWEFfQlFkYktQeVZ0cG1NbzdfQlpVQ2ZKMkV6ekR0ZGVienZfRHpmY3pMMWkyWEh2OHhnMHhQWGduZENXcGJuSm1CX19vLUJYeGZWQ1h5QQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTFBkMVRfaXBZZmRqZEoyeHpHUzRnVVB0NUstQllWWEFfQlFkYktQeVZ0cG1NbzdfQlpVQ2ZKMkV6ekR0ZGVienZfRHpmY3pMMWkyWEh2OHhnMHhQWGduZENXcGJuSm1CX19vLUJYeGZWQ1h5QQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:39"
    },
    {
      "source": "블루밍비트",
      "title_ko": "美 연준 이사 \"AI 에이전트, 수분 내 뱅크런 유발 가능\"…스테이블코인 확산에 경고",
      "title_en": "",
      "summary_ko": "美 연준 이사 \"AI 에이전트, 수분 내 뱅크런 유발 가능\"…스테이블코인 확산에 경고 블루밍비트. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 블루밍비트뿐만 아니라 KBS 뉴스, Investing.com 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9icGRBd2xLaTJESlVwM0NwR2sxa2pURG9jSmU5Uzk2bUlGY0FhTjlHQXF6bHctZkJteWJiS0V4VVloVlY1dnhBcTNZNGpONnZB?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9icGRBd2xLaTJESlVwM0NwR2sxa2pURG9jSmU5Uzk2bUlGY0FhTjlHQXF6bHctZkJteWJiS0V4VVloVlY1dnhBcTNZNGpONnZB?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 17 Nov 2026 11:47:57 GMT",
      "related_articles": [
        {
          "source": "KBS 뉴스",
          "title_ko": "연준 의장 “AI 투자 실패 시 경기침체·주가 급락” 경고",
          "original_url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE15Mmh3NFFHaW9ST1NrTVlhSV9mbkV0bE9BZTZicHpTZmRUOE1UZi1ualkxb3FvSDhYbVJJWEx3bXdfQ3JJVnlKRmN3SUt3ZHBkNTNIdDBOUzRCWEQ4Z3NrWnoxSWE3ZTBFOGw4?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE15Mmh3NFFHaW9ST1NrTVlhSV9mbkV0bE9BZTZicHpTZmRUOE1UZi1ualkxb3FvSDhYbVJJWEx3bXdfQ3JJVnlKRmN3SUt3ZHBkNTNIdDBOUzRCWEQ4Z3NrWnoxSWE3ZTBFOGw4?oc=5"
        },
        {
          "source": "Investing.com",
          "title_ko": "연준 바 총재, AI 급속 확산으로 인한 뱅크런·부채 위험 경고",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9rOEdqbU1tTm5VZ2hXSmo5QlRTdmh5aG5UUkhEN1dpYWNDWnJVNF9kTzdybURfLXdlVXBoMFYxMGlVSEc2ang4SVdRYWhZTW4xcVBsMjZSeUlaMDZPck5SNUpManFvUl9wc1E?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9rOEdqbU1tTm5VZ2hXSmo5QlRTdmh5aG5UUkhEN1dpYWNDWnJVNF9kTzdybURfLXdlVXBoMFYxMGlVSEc2ang4SVdRYWhZTW4xcVBsMjZSeUlaMDZPck5SNUpManFvUl9wc1E?oc=5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:39"
    },
    {
      "source": "Reuters",
      "title_ko": "Bessent는 Nvidia가 새로운 CEO를 찾으려면 '회사 밖으로 나가야' 한다고 말합니다.",
      "title_en": "Bessent says Nvidia must 'go outside the company' to find new CEO",
      "summary_ko": "Bessent는 Nvidia가 새로운 CEO를 찾기 위해 '회사 밖으로 나가야' 한다고 말합니다 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Reuters, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNVGladEJOQmtqRldzTHdlQ25Fb3pCREJuYmthQTgzclB5Snl6WWFmaXdtWU1KU1NqVGhTZzIyakttSVpxR0p3MVlGU1pBcjhjRjVkVl9wNGU5OS1kOUJkeXRobzlOSjlMUkVPTWkxbmdib3Bna3ZoRVRoM1RybkQ2NE92ZWZTMjBuNF80a1lhVENxQUhTU2hkY0QzaTU0NGc?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxNVGladEJOQmtqRldzTHdlQ25Fb3pCREJuYmthQTgzclB5Snl6WWFmaXdtWU1KU1NqVGhTZzIyakttSVpxR0p3MVlGU1pBcjhjRjVkVl9wNGU5OS1kOUJkeXRobzlOSjlMUkVPTWkxbmdib3Bna3ZoRVRoM1RybkQ2NE92ZWZTMjBuNF80a1lhVENxQUhTU2hkY0QzaTU0NGc%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 15 Nov 2026 15:50:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 CEO Search는 Bessent의 개편 요청으로 불을 지폈습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOZVBETnNKak9BME5HaDEzOXN3TzctS3kzWUVadDVaem9wVDExVFJqb0NSMEdoZG01cXFmLTJSaFJzSkhxOTRYelRQcXYxSTl6OUdzaTE3LW9KM3FTRWh0bUZWY1BKMmNaUWVvN1luaTczdVhWTXZHVnFJSWwzZ3Z5R1JIYVljbUl5UmY3bGZfWW1tZnJOaUMwYnpQVElIekFHMjJyUDR3a0NBYVNKZkhtbGdJSQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOZVBETnNKak9BME5HaDEzOXN3TzctS3kzWUVadDVaem9wVDExVFJqb0NSMEdoZG01cXFmLTJSaFJzSkhxOTRYelRQcXYxSTl6OUdzaTE3LW9KM3FTRWh0bUZWY1BKMmNaUWVvN1luaTczdVhWTXZHVnFJSWwzZ3Z5R1JIYVljbUl5UmY3bGZfWW1tZnJOaUMwYnpQVElIekFHMjJyUDR3a0NBYVNKZkhtbGdJSQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia는 Bessent가 개편을 요구함에 따라 CEO 검색에 대한 열기를 느낍니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNS1ZOWlF3ZUlxWGYyZm9kX3NnZUsyNEpjYXhKaWMxY3hPbnRvSlJYeHc3ak9lejRYcHdmWjB2dk54cmMweklHdXdpVDdmRm9yNE91LWJKV2VoUC16bF9sdzRTM2NhWk5MMnBROXJ2UHA2SU0tSDNpeEZLZkxJZGg4T1laVHUyU1Fid0dtYjQ3c0tHMFRsOVp3TndoeEUzaElUSkxVT3hlOGQyZTVPZDF3emxB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNS1ZOWlF3ZUlxWGYyZm9kX3NnZUsyNEpjYXhKaWMxY3hPbnRvSlJYeHc3ak9lejRYcHdmWjB2dk54cmMweklHdXdpVDdmRm9yNE91LWJKV2VoUC16bF9sdzRTM2NhWk5MMnBROXJ2UHA2SU0tSDNpeEZLZkxJZGg4T1laVHUyU1Fid0dtYjQ3c0tHMFRsOVp3TndoeEUzaElUSkxVT3hlOGQyZTVPZDF3emxB%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Bessent는 Nvidia 파트너 Megaspeed의 수출 통제가 부족하여 상무부를 비난합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNLTRNS3BqaXcwNDJlOTNLZDU2NkdSbmtHUFFPNFJTRFBvdXVselAtVGkyU25RR3Q0Q1djS0N1TDM0VnpNRXNHWmxiVE15bVduU3BUMUlONURZUC1EbTNIa1FqX3liOHBiOUk2S0xKSDMtS0lnZjg3ajVZdTVtTnl3NC1vTWNDM0M4SEFKV3d4N3dieXdvaWhNdEtYc2pvdy0xcVI3VDBGQXM4N00?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxNLTRNS3BqaXcwNDJlOTNLZDU2NkdSbmtHUFFPNFJTRFBvdXVselAtVGkyU25RR3Q0Q1djS0N1TDM0VnpNRXNHWmxiVE15bVduU3BUMUlONURZUC1EbTNIa1FqX3liOHBiOUk2S0xKSDMtS0lnZjg3ajVZdTVtTnl3NC1vTWNDM0M4SEFKV3d4N3dieXdvaWhNdEtYc2pvdy0xcVI3VDBGQXM4N00%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 CEO 검색이 Bessent의 'Shakeup' 호출로 불을 끄는 모습을 시청하세요",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOb2RHN0hIZVJtMjhaeEs2WFl0cjJ5eVdKaV9NMkI2OHFxSGx0enJXQUVWUUNERUlEMVVkQjJNQ3ZLVDl1eWw0YnBxbF80T3lwelUtR24wZW1RZFBZay13Mk9qMkJUQnRfUEgwenoxMjllTnI0QWtMVlJvcGZKbERTQ1JIaHVlTWJ6WlI4OU1WVFprNXpFZGJONlRKTjk4VTU0dEJiVk9fRzFjZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxOb2RHN0hIZVJtMjhaeEs2WFl0cjJ5eVdKaV9NMkI2OHFxSGx0enJXQUVWUUNERUlEMVVkQjJNQ3ZLVDl1eWw0YnBxbF80T3lwelUtR24wZW1RZFBZay13Mk9qMkJUQnRfUEgwenoxMjllTnI0QWtMVlJvcGZKbERTQ1JIaHVlTWJ6WlI4OU1WVFprNXpFZGJONlRKTjk4VTU0dEJiVk9fRzFjZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:42"
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
          "title_ko": "유럽 ​​주가 하락, 나스닥 선물은 Nvidia 실적보다 소폭 상승",
          "original_url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQbHY5U3ZMUmhWeEViMkJTbW9ObHlQYWRWbmdxWDhXMUdaWFRvLVdRY01oaTJJb3lmOFBiaWpQMEFlTFk5R2ttRnBaT18zaF9Jbk9od2Rza0cyMXJ6Z3JlalJDdG9neTVhQ3pJRG05SE9NQUYxZkFvQmQ5bnVfTi13amFNOA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMigwFBVV95cUxQbHY5U3ZMUmhWeEViMkJTbW9ObHlQYWRWbmdxWDhXMUdaWFRvLVdRY01oaTJJb3lmOFBiaWpQMEFlTFk5R2ttRnBaT18zaF9Jbk9od2Rza0cyMXJ6Z3JlalJDdG9neTVhQ3pJRG05SE9NQUYxZkFvQmQ5bnVfTi13amFNOA%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "트럼프는 캐나다 수입품에 대한 관세를 중단했지만 카니는 핵심 작업이 남아 있다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQa1BlNEtwMVJSSkVvQjRBMWRlanN4VUs0aEFKUjIyWU93N090cHl5MjN6Q0VCMWdvUVhseXI4N3Y2aUdXTy1oeHpQVE5TYjdiLVlOcFdaMWswRGVsZzZ0dG5HamdSeFdMSFc5bTZZVHNwaWp3SXRWT3IydFZnR3NSVm13bnEzbTdxajVkbFpzUUhwc01zQzFwWG8yT3RHZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxQa1BlNEtwMVJSSkVvQjRBMWRlanN4VUs0aEFKUjIyWU93N090cHl5MjN6Q0VCMWdvUVhseXI4N3Y2aUdXTy1oeHpQVE5TYjdiLVlOcFdaMWswRGVsZzZ0dG5HamdSeFdMSFc5bTZZVHNwaWp3SXRWT3IydFZnR3NSVm13bnEzbTdxajVkbFpzUUhwc01zQzFwWG8yT3RHZw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "트럼프 \"유럽연합(EU)산 자동차 관세 25%로 인상할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNVE1WMTl1SUo5X1BUQkFPOHd1b2ZfVDR3YzMybjJoRTBPYU5mTVNaM1ZVdkdFaXIwQUt5Q3dyaFRjVDBKX3NiOTgxNTNLNDdWVVBCaTRscDVpR3E3NW5wZEdPR05uNzlacGF3NkFBYlpjX0lwdGlXVDc0ZXdMa3I5X3RKeC0yZkI3eUQzQWpqLTdpWEZFTUtxR1cwb1RkT0JXYjdIaGhTYlNXdHE0MjhJ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxNVE1WMTl1SUo5X1BUQkFPOHd1b2ZfVDR3YzMybjJoRTBPYU5mTVNaM1ZVdkdFaXIwQUt5Q3dyaFRjVDBKX3NiOTgxNTNLNDdWVVBCaTRscDVpR3E3NW5wZEdPR05uNzlacGF3NkFBYlpjX0lwdGlXVDc0ZXdMa3I5X3RKeC0yZkI3eUQzQWpqLTdpWEZFTUtxR1cwb1RkT0JXYjdIaGhTYlNXdHE0MjhJ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "AI의 발전은 사이버 사고의 급격한 증가와 일치한다고 Marsh 데이터는 보여줍니다.",
          "original_url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxORlhXMW5RQ1U5RWx0Z1lhbjg2OTFKamZTY0NHLXd3b24zZU13bFo3RUZTcTNwcTZ0Yk9CMlY1Q2ZPZTVvY2hrVFk3Nzl2V2VDeG5Nd1lzWXhmdDBvRTFEZFNBNTBtUkhfWVZ4eWNaYlh3WkdGdnNmcDFyWFdwR05NMUhlZllWTUJyRXVLdVdnN3lES2xkRWFBS3FsaHZRajdYUnFRZ0hxcVVMZE83M01GeHQyai1QNEFSbFZVUV9Ydw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivwFBVV95cUxORlhXMW5RQ1U5RWx0Z1lhbjg2OTFKamZTY0NHLXd3b24zZU13bFo3RUZTcTNwcTZ0Yk9CMlY1Q2ZPZTVvY2hrVFk3Nzl2V2VDeG5Nd1lzWXhmdDBvRTFEZFNBNTBtUkhfWVZ4eWNaYlh3WkdGdnNmcDFyWFdwR05NMUhlZllWTUJyRXVLdVdnN3lES2xkRWFBS3FsaHZRajdYUnFRZ0hxcVVMZE83M01GeHQyai1QNEFSbFZVUV9Ydw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:49"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "Nvidia 주가가 다시 하락하면서 미국 주식은 하락했습니다.",
      "title_en": "U.S. Stocks Decline as Nvidia Shares Slide Again",
      "summary_ko": "Nvidia 주가가 다시 하락하면서 미국 주식은 하락했습니다 WSJ. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Wall Street Journal뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNcEdLelU4VXpMTmdPeTgxTjBhZkd3NEIyZDg5ZnZCWXdtVnVFd3Fxbm95Z2ZfbkNZRnh2WVppWUhnR0pvZXZsRHdEaWdkaEJ1emVweFpFbG9WUTBPV3B1UktyeVNodWY0SXBtOGNUbXZQWXcyRmNWUnRGR21vYWt0WmxraHFsZ2haSGRCdHZacG1uTkpMTTlNQUpsNEFSRUY4Z2MzaUZn?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxNcEdLelU4VXpMTmdPeTgxTjBhZkd3NEIyZDg5ZnZCWXdtVnVFd3Fxbm95Z2ZfbkNZRnh2WVppWUhnR0pvZXZsRHdEaWdkaEJ1emVweFpFbG9WUTBPV3B1UktyeVNodWY0SXBtOGNUbXZQWXcyRmNWUnRGR21vYWt0WmxraHFsZ2haSGRCdHZacG1uTkpMTTlNQUpsNEFSRUY4Z2MzaUZn%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 13 Nov 2026 20:02:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 수익 테스트 카운트다운에서 주식 하락: 시장 마무리",
          "original_url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQSHFoREFNUWJRYTJxR0pTRnpHM2Q1NlhjQ1pjN0w3U1FWM09sclNuMlVNLWx4YXF0TURpOEdtSk9sc3BXTEpBakhLd21neWhod2pvZ1hRNVAtZWxNTlZmUXl4TXNJQ0MyTTFqa0tpRGVmOVpQZlRidlZzYkFLYnlNSXduLUtPSXo3QUJ0aVhlM0xWVFNh?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilAFBVV95cUxQSHFoREFNUWJRYTJxR0pTRnpHM2Q1NlhjQ1pjN0w3U1FWM09sclNuMlVNLWx4YXF0TURpOEdtSk9sc3BXTEpBakhLd21neWhod2pvZ1hRNVAtZWxNTlZmUXl4TXNJQ0MyTTFqa0tpRGVmOVpQZlRidlZzYkFLYnlNSXduLUtPSXo3QUJ0aVhlM0xWVFNh%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "미국, Nvidia의 고급 AI 칩에 대한 원격 액세스 억제",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQU3diZGZDaW14MTdtajJNSTFnMXF3MWtpODZRZDN3UVVRZXBwQllnQXFRRUFYbTAzQmJkLW1qTDAzZDhyYW54UjdBVjFrZVRzV3JiTVRTdmlybkVtRnZVSWlMTnFvYVp3dkFGeWhUVFdrUE1Na3E0WTVuekRuSm5jN1A2aDBnb1NjYXRhYmJfdjlBQWY1X093Q1hHTDM4ZzNhdlYwNVRn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxQU3diZGZDaW14MTdtajJNSTFnMXF3MWtpODZRZDN3UVVRZXBwQllnQXFRRUFYbTAzQmJkLW1qTDAzZDhyYW54UjdBVjFrZVRzV3JiTVRTdmlybkVtRnZVSWlMTnFvYVp3dkFGeWhUVFdrUE1Na3E0WTVuekRuSm5jN1A2aDBnb1NjYXRhYmJfdjlBQWY1X093Q1hHTDM4ZzNhdlYwNVRn%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia CEO로 복귀하겠다는 Jensen Huang의 성명서를 읽어보세요.",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNNXNydkpJcFMtelZ1em9vNS1RYnFuc3BHMmJoTmVCSmFVMGRoOFVmem5KYW1yR1Z2ZnBGRmhRcXM2VzU5d1J2NDdqWmxGOXhBTzg2N1NtRVppUk96MnBJdUZJQ2t5VUVaX2ttXzlkYmluQ25vQVdMa3ktbWFWWjdfUVk3ckJDbDF2TW1Ickt0eEotcW14dU9yRUJNZUJab3pDekhwcjN5U1BsLVBpTDVncFJB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNNXNydkpJcFMtelZ1em9vNS1RYnFuc3BHMmJoTmVCSmFVMGRoOFVmem5KYW1yR1Z2ZnBGRmhRcXM2VzU5d1J2NDdqWmxGOXhBTzg2N1NtRVppUk96MnBJdUZJQ2t5VUVaX2ttXzlkYmluQ25vQVdMa3ktbWFWWjdfUVk3ckJDbDF2TW1Ickt0eEotcW14dU9yRUJNZUJab3pDekhwcjN5U1BsLVBpTDVncFJB%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia Jitter가 아시아 기술에 부담을 주면서 신흥 주식은 하락",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOOUhUTFdrYUdBNWdCakZmSzJoQTVza3FxVjFGTTdMcDlzeThLQ2xmak5UU1doZjlacUFZb3JpVlNvQjhfR3VEaTZYMzVHQ25EWjFUUVk3SGVaTW9zcDdiR2NsRU9DQUtPdUg2SWN2TTVNcHVIS1hKdFhNREpraGVKWVZWOGRpQ09hdWE5QmZFcDJiY2dScHNoWGthSktSRFhQbEk0eUtWVHlwZ3I0OHc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxOOUhUTFdrYUdBNWdCakZmSzJoQTVza3FxVjFGTTdMcDlzeThLQ2xmak5UU1doZjlacUFZb3JpVlNvQjhfR3VEaTZYMzVHQ25EWjFUUVk3SGVaTW9zcDdiR2NsRU9DQUtPdUg2SWN2TTVNcHVIS1hKdFhNREpraGVKWVZWOGRpQ09hdWE5QmZFcDJiY2dScHNoWGthSktSRFhQbEk0eUtWVHlwZ3I0OHc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-17 20:01:51"
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
