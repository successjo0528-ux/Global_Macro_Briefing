window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-11-16 05:01:41",
    "date_str": "2026년 11월 16일 (월)",
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
      "price": 4.122,
      "previous_close": 3.987,
      "change": 0.135,
      "change_percent": 3.39,
      "display_price": "4.122%",
      "status": "up",
      "history": [
        3.987,
        4.0,
        4.035,
        4.115,
        4.115,
        4.128,
        4.122
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-11-15 20:00:38"
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
      "price": 5.154,
      "previous_close": 4.837,
      "change": 0.317,
      "change_percent": 6.55,
      "display_price": "5.154%",
      "status": "up",
      "history": [
        4.837,
        4.859,
        4.864,
        4.983,
        4.998,
        5.103,
        5.154
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-11-15 20:00:38",
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
      "price": 5.481,
      "previous_close": 5.251,
      "change": 0.23,
      "change_percent": 4.38,
      "display_price": "5.481%",
      "status": "up",
      "history": [
        5.251,
        5.26,
        5.256,
        5.35,
        5.356,
        5.433,
        5.481
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-11-15 20:00:38"
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
      "price": 103.411,
      "previous_close": 101.65,
      "change": 1.761,
      "change_percent": 1.73,
      "display_price": "103.41 pt",
      "status": "up",
      "history": [
        101.65,
        102.23,
        102.91,
        103.17,
        103.41
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-11-15 20:00:38"
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
      "price": 159.545,
      "previous_close": 158.357,
      "change": 1.188,
      "change_percent": 0.75,
      "display_price": "159.54엔",
      "status": "up",
      "history": [
        157.498,
        158.292,
        157.983,
        158.705,
        159.734,
        159.875,
        159.545
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-11-15 20:00:39"
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
      "price": 3886.3,
      "previous_close": 4114.5,
      "change": -228.2,
      "change_percent": -5.55,
      "display_price": "$3,886.30",
      "status": "down",
      "history": [
        4114.5,
        4030.2,
        4000.5,
        3885.3,
        3886.3
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-11-15 20:00:39"
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
      "price": 88.56,
      "previous_close": 86.85,
      "change": 1.71,
      "change_percent": 1.97,
      "display_price": "$88.56",
      "status": "up",
      "history": [
        86.85,
        86.04,
        86.53,
        88.74,
        88.56
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-11-15 20:00:39"
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
      "price": 64850.53,
      "previous_close": 75223.15,
      "change": -10372.62,
      "change_percent": -13.79,
      "display_price": "$64,851",
      "status": "down",
      "history": [
        75223.148,
        73720.117,
        73964.469,
        71342.969,
        68249.273,
        64128.051,
        64850.531
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-11-15 20:00:39"
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
      "price": 961.9,
      "previous_close": 960.0,
      "change": 1.9,
      "change_percent": 0.2,
      "display_price": "$961.9B (약 9,619억 달러)",
      "status": "up",
      "history": [
        950,
        955,
        958,
        960,
        961.9
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-11-15 20:00:39"
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
      "price": 7561.67,
      "previous_close": 7688.62,
      "change": -126.95,
      "change_percent": -1.65,
      "display_price": "7,561.67",
      "status": "down",
      "history": [
        7353.73,
        7376.86,
        7549.94,
        7520.93,
        7619.38,
        7592.4,
        7561.67
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-11-15 20:00:49"
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
      "price": 27943.736,
      "previous_close": 28437.17,
      "change": -493.434,
      "change_percent": -1.74,
      "display_price": "27,943.74",
      "status": "down",
      "history": [
        26629.811,
        26989.99,
        27907.631,
        27740.789,
        28374.25,
        28289.189,
        27943.74
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-11-15 20:00:50"
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
      "price": 10146.323,
      "previous_close": 10268.65,
      "change": -122.327,
      "change_percent": -1.19,
      "display_price": "10,146.32",
      "status": "down",
      "history": [
        9011.14,
        9390.25,
        10033.93,
        9998.33,
        10564.11,
        10506.67,
        10146.32
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-11-15 20:00:50"
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
      "price": 19.3,
      "previous_close": 28.18,
      "change": -8.88,
      "change_percent": -31.51,
      "display_price": "19.30",
      "status": "down",
      "history": [
        28.18,
        25.64,
        19.92,
        19.46,
        17.49,
        18.7,
        19.3
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-11-15 20:00:50"
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
      "price": 1334.98,
      "previous_close": 1340.07,
      "change": -5.09,
      "change_percent": -0.38,
      "display_price": "1,334.98원",
      "status": "down",
      "history": [
        1356.34,
        1362.7,
        1343.84,
        1341.91,
        1336.26,
        1333.78,
        1334.98
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-11-15 20:00:50",
      "fx_averages": {
        "avg_1y": 1442.2,
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
      "price": 5290.53,
      "previous_close": 5683.8,
      "change": -393.27,
      "change_percent": -6.92,
      "display_price": "5,290.53",
      "status": "down",
      "history": [
        5383.8,
        5059.69,
        5018.85,
        5239.13,
        5375.36,
        5342.73,
        5290.53
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-11-15 20:00:50"
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
      "price": 699.66,
      "previous_close": 714.95,
      "change": -15.29,
      "change_percent": -2.14,
      "display_price": "699.66",
      "status": "down",
      "history": [
        678.41,
        644.27,
        638.97,
        667.61,
        705.1,
        696.53,
        699.66
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-11-15 20:00:50"
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
      "updated_at": "2026-11-15 20:00:51"
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
      "updated_at": "2026-11-15 20:00:52"
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
      "price": 142.78,
      "previous_close": 152.12,
      "change": -9.34,
      "change_percent": -6.14,
      "display_price": "$142.78",
      "status": "down",
      "history": [
        131.65,
        137.01,
        142.1,
        139.18,
        147.81,
        145.38,
        142.78
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-11-15 20:00:52"
    }
  ],
  "news": [
    {
      "source": "연합인포맥스",
      "title_ko": "[뉴욕 금가격] 4천달러 붕괴…연준 우려·이란 기대감 퇴조에 3% 급락",
      "title_en": "",
      "summary_ko": "[뉴욕 금가격] 4천달러 붕괴…연준 우려·이란 기대감 퇴조에 3% 급락 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "[뉴욕 금가격] 연준 긴축 우려에 4천달러 위태…0.5% 하락",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9zTERib2NWSU1zSHNpbmVGNzVCVFd6UFBFTGdHTlZkNGtQTkVJZ0xYUVFPdW9uaU5TQmFFWnJFTGROWnlCN0g3VzFzeUdLQjV4RTFjaDFadldZUS1xcGlGVFpUWnNhUHVaaWZ3c1hZdzc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9zTERib2NWSU1zSHNpbmVGNzVCVFd6UFBFTGdHTlZkNGtQTkVJZ0xYUVFPdW9uaU5TQmFFWnJFTGROWnlCN0g3VzFzeUdLQjV4RTFjaDFadldZUS1xcGlGVFpUWnNhUHVaaWZ3c1hZdzc?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "[뉴욕환시] 달러 급등…'매파' 연준 예상 속 기술주 초강세",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFA3YTM1ZGtwNzZ0TUFkNlN3OUxIcms4UDJrcDNvenp2akU2OVB2SEVpVWxJMVRSUFdydG9TMDdGS2lDS0JCbmRuaFFzX0NkU213OWRXVkxMMnZGUGpqS2xUbFdnU3NpRjRBVFlCTk9TNFU?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFA3YTM1ZGtwNzZ0TUFkNlN3OUxIcms4UDJrcDNvenp2akU2OVB2SEVpVWxJMVRSUFdydG9TMDdGS2lDS0JCbmRuaFFzX0NkU213OWRXVkxMMnZGUGpqS2xUbFdnU3NpRjRBVFlCTk9TNFU?oc=5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:01"
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
          "title_ko": "베센트(Bessent), 파월 분할이 은행 CEO들에게 인류 모델 위험에 대해 경고했다고 소식통은 전했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOQ05ad1ZkdnNrcEhEMklEalc0TVBmWlppMzkxQlZxQVBpbUp1Nlk1STVqUm51WDI5QnYxS1BleDFONDZwTmR2Tlc4OGl3WGU2US0zVUhhVUQ0Zk5yYlFEV1g2M1ByNy1jUTVSTTRSYjhwUU9XU0lsRHY0V2tjbXNGX1dwUlFJZUV6UkRoang1TW5IbllaTTcycmRDV0ZNYnNQRnRFUWhybVNuVHMtdFdyX0tTLUN4Q1cwYTFPU3BPRG5UeGI4UTJZMXpBc25uZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizgFBVV95cUxOQ05ad1ZkdnNrcEhEMklEalc0TVBmWlppMzkxQlZxQVBpbUp1Nlk1STVqUm51WDI5QnYxS1BleDFONDZwTmR2Tlc4OGl3WGU2US0zVUhhVUQ0Zk5yYlFEV1g2M1ByNy1jUTVSTTRSYjhwUU9XU0lsRHY0V2tjbXNGX1dwUlFJZUV6UkRoang1TW5IbllaTTcycmRDV0ZNYnNQRnRFUWhybVNuVHMtdFdyX0tTLUN4Q1cwYTFPU3BPRG5UeGI4UTJZMXpBc25uZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:04"
    },
    {
      "source": "Reuters",
      "title_ko": "연준(Fed)의 콜린스 \"경제 리스크 관리에는 점진적인 금리 인상이 최선\"",
      "title_en": "Fed's Collins says gradual rate hikes best to manage economic risks",
      "summary_ko": "연준(Fed) 콜린스 \"경제 위험 관리에는 점진적인 금리 인상이 최선\". 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPbHZfX3JqempNenlnSUpVcTd4dXY4djdJU1c2VkZ2Um5fYXkyVTMtYUxBZlBrcXVqQXJkQ0RjejZRQTdBLWxPYzcyRDBfTGxmdUVTekN0TFFWdHNfZFh6ckt0c1RCTVBwZzZjZ3NacWJWSDhvMVRGVDNpR0o2YTBwdmJILTE4eWs2SlQ5YnVHN0ctMFM3bWJsQkhtblRUMjI0amRHcFZLaXNaWWJz?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxPbHZfX3JqempNenlnSUpVcTd4dXY4djdJU1c2VkZ2Um5fYXkyVTMtYUxBZlBrcXVqQXJkQ0RjejZRQTdBLWxPYzcyRDBfTGxmdUVTekN0TFFWdHNfZFh6ckt0c1RCTVBwZzZjZ3NacWJWSDhvMVRGVDNpR0o2YTBwdmJILTE4eWs2SlQ5YnVHN0ctMFM3bWJsQkhtblRUMjI0amRHcFZLaXNaWWJz%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sat, 14 Nov 2026 15:47:44 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)의 Daly는 인플레이션을 진정시키기 위해 더 많은 금리 인상이 필요하다고 말했습니다",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQVjJpUnJYdWk0dzZkcGp0cG54WTc3Sk84VWtmdmpCNGl1Z1pXZm1rYmowRnU4d2NSWmNXUFgtUFdQZDZ6SWswZDFsanZrODFEb1hfSWM3YTA3OC1qa09ZaTZkQXVGUW8xTmRKRnRURW04dWpPR0xxMXZURUNJVXdXdmRCNi1VeTBTRG0tZmN5cVVsVGZ3Mml2am8weXMxLWthNXVKY2Q2UDZhd2lZaXFlaURuaFU?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxQVjJpUnJYdWk0dzZkcGp0cG54WTc3Sk84VWtmdmpCNGl1Z1pXZm1rYmowRnU4d2NSWmNXUFgtUFdQZDZ6SWswZDFsanZrODFEb1hfSWM3YTA3OC1qa09ZaTZkQXVGUW8xTmRKRnRURW04dWpPR0xxMXZURUNJVXdXdmRCNi1VeTBTRG0tZmN5cVVsVGZ3Mml2am8weXMxLWthNXVKY2Q2UDZhd2lZaXFlaURuaFU%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed)은 금리 인상을 조정할 시간이 있다고 Daly는 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQVUQyM3Nob1JwMmZBS1JHN1FtZ2h5eTZFWlpZWkJ1Tm9XRlByR2lJWEZkdjJKcVVYbklvMW9GekZ5RDZDQU5KRkVaVHZzN2d6cm5NQTEzWlNtQkNGWmw2dXNJN2hvMFBwenUzdFZDLURfM2JsRVBmckhzY2FZRVJPemM5S0ZIX1BqQzFrbW1wN3lxdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikgFBVV95cUxQVUQyM3Nob1JwMmZBS1JHN1FtZ2h5eTZFWlpZWkJ1Tm9XRlByR2lJWEZkdjJKcVVYbklvMW9GekZ5RDZDQU5KRkVaVHZzN2d6cm5NQTEzWlNtQkNGWmw2dXNJN2hvMFBwenUzdFZDLURfM2JsRVBmckhzY2FZRVJPemM5S0ZIX1BqQzFrbW1wN3lxdw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)의 콜린스 \"꾸준하고 점진적인 금리 인상이 적절하다\"",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPSmxPcmNNS1JISWxpNy11VFVWNUZsdi13QmZIZDNmT0Npcno0S1JMYzJtRnlqckY4bGU5U3JlczcyeVJTYzZhRlpWeDBkeTR0TGw3Q2VHRzNCYUM3eUZQVHdPUmUxOXd6NnJMSnZSS01EUjFSdTJIeFhXNlc5cThsNXdMZnRzODZMLWNiR0N5QVR5RWFhMzFwUUxPYlYxOWxDTi0yOEg5ZjdLVlk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxPSmxPcmNNS1JISWxpNy11VFVWNUZsdi13QmZIZDNmT0Npcno0S1JMYzJtRnlqckY4bGU5U3JlczcyeVJTYzZhRlpWeDBkeTR0TGw3Q2VHRzNCYUM3eUZQVHdPUmUxOXd6NnJMSnZSS01EUjFSdTJIeFhXNlc5cThsNXdMZnRzODZMLWNiR0N5QVR5RWFhMzFwUUxPYlYxOWxDTi0yOEg5ZjdLVlk%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 관계자들은 계속되는 인플레이션 우려 속에서 금리 인상을 주장하고 있다.",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxObTlSSnpPaC0yUGM0aTNCb3h0cUVRejBTRjg0SXVnT0MwSXNMSzBVS1NFSEpUaGxtOUpzSkZmQlRKWjFWQ2UtNEp2RUgzcWwyMEN3clpKaU1acDlRUGFhS21BTEpWQjdSVURWZjRJd19Tc19pbVVHeWYwUEZLdUlka0x6M1p5WDRMVkVjRmlLTWU?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxObTlSSnpPaC0yUGM0aTNCb3h0cUVRejBTRjg0SXVnT0MwSXNMSzBVS1NFSEpUaGxtOUpzSkZmQlRKWjFWQ2UtNEp2RUgzcWwyMEN3clpKaU1acDlRUGFhS21BTEpWQjdSVURWZjRJd19Tc19pbVVHeWYwUEZLdUlka0x6M1p5WDRMVkVjRmlLTWU%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:11"
    },
    {
      "source": "Reuters",
      "title_ko": "ECB는 12월에 마지막 공개를 예정했지만 인플레이션 위험으로 인해 한 번 더 문이 열려 있습니다: Reuters 여론 조사",
      "title_en": "ECB set for last rate hike in December but inflation risks keep door open for one more: Reuters poll",
      "summary_ko": "ECB는 12월에 마지막 공개를 앞두고 있지만 인플레이션 위험으로 인해 한 가지 더 문이 열려 있습니다: Reuters poll Reuters. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Reuters뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOc1hXaEpuRUhpTnBKTGNYQU9CNnJhRFBYNHdTb2VIOUVyU1VoNmNYcjhNRXdJVTZEQUR4Sm5neEFMOWhwRjF3UW9PLXJuRFNwNG5CSEF5d1hKUTNuQVM0ZXQ5cDBsR04tVDVaT2tGU0VVQWtsZmlNdjROS0ZNdXBUZWF1ZUFTbXZicUE4b0Z0RXo4M3Z6SzFsMXVfZV9QVGMxM1BuMFFZNXktTlloT2dvclB6MA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOc1hXaEpuRUhpTnBKTGNYQU9CNnJhRFBYNHdTb2VIOUVyU1VoNmNYcjhNRXdJVTZEQUR4Sm5neEFMOWhwRjF3UW9PLXJuRFNwNG5CSEF5d1hKUTNuQVM0ZXQ5cDBsR04tVDVaT2tGU0VVQWtsZmlNdjROS0ZNdXBUZWF1ZUFTbXZicUE4b0Z0RXo4M3Z6SzFsMXVfZV9QVGMxM1BuMFFZNXktTlloT2dvclB6MA%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 12 Nov 2026 12:46:50 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 관계자들은 인플레이션 악화에 따라 더 빠른 금리 인상 가능성을 열어두고 있다.",
          "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOTXo5UzFWVEh5WllQOHNxS1Q2cERxOEM0X1QyN1dPX0R4XzdfT1BpajYxdi0xOEltNWh6cE15Z2ZvZ2dXV0Vwb3NkbWZ1VGQ2M2tvVVVSaWd6clhPcS1XUEU2QXE3c0tlLUhPX0c2emRnWVpwOGtoajlnSS1VRXRNZXFaNEpyVlVwcFVIOUdkT18yQ2t6a1psZGVlOFpiZl90QnVhcmxqQzNxNnlNSEdXcWpjcUdzYUNJSi1hcnl6ZEpUSUU?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxOTXo5UzFWVEh5WllQOHNxS1Q2cERxOEM0X1QyN1dPX0R4XzdfT1BpajYxdi0xOEltNWh6cE15Z2ZvZ2dXV0Vwb3NkbWZ1VGQ2M2tvVVVSaWd6clhPcS1XUEU2QXE3c0tlLUhPX0c2emRnWVpwOGtoajlnSS1VRXRNZXFaNEpyVlVwcFVIOUdkT18yQ2t6a1psZGVlOFpiZl90QnVhcmxqQzNxNnlNSEdXcWpjcUdzYUNJSi1hcnl6ZEpUSUU%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "인도의 인플레이션이 중앙은행의 6% 한도를 위반하고 금리 인상 가능성이 높아졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNSlE4RjR5cTc2cVI3bWZZWHJxcGdTTXA4UjBQNUEtbVdfeXJwdXZ1b21ZejRTaERGWmlXa0JDZ2ZKWHdBaUx3cVFwRnlTSzVzci1FakptNjVUWVZZYXZ2WEEwVy1LMktOWFlUdE5GNHpLbTBMNTR2VFFwRHUtSDFqUkNnUkFNUDBBR2Z0Zm84YjZraTJnaV9uUEU1NVZGN0xnaHVIMWVxRFNiOEsyelNQdWI0R1Y3UVpZ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuAFBVV95cUxNSlE4RjR5cTc2cVI3bWZZWHJxcGdTTXA4UjBQNUEtbVdfeXJwdXZ1b21ZejRTaERGWmlXa0JDZ2ZKWHdBaUx3cVFwRnlTSzVzci1FakptNjVUWVZZYXZ2WEEwVy1LMktOWFlUdE5GNHpLbTBMNTR2VFFwRHUtSDFqUkNnUkFNUDBBR2Z0Zm84YjZraTJnaV9uUEU1NVZGN0xnaHVIMWVxRFNiOEsyelNQdWI0R1Y3UVpZ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Goldman은 뜨거운 인플레이션 데이터 이후 연준(Fed) 전망에 또 다른 피규어 소개를 추가합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPaGZrcC11RmpmMVp3a09iZl9aR2N6TDVFV2d1eE50MzBMT0hkZFMtbXFteWFvcDBnSEM0MXdhWFJmM0d4eXZNVFMtNDA2VHozS0UyeEdWcGtQanctN3pxdVVVeWRacnFxS2d3N1I1MktUbUVISWhwZ0VibFgtTWVUX0ZtelYwSmJMQXdUbDJqZmxPMklpS2c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilgFBVV95cUxPaGZrcC11RmpmMVp3a09iZl9aR2N6TDVFV2d1eE50MzBMT0hkZFMtbXFteWFvcDBnSEM0MXdhWFJmM0d4eXZNVFMtNDA2VHozS0UyeEdWcGtQanctN3pxdVVVeWRacnFxS2d3N1I1MktUbUVISWhwZ0VibFgtTWVUX0ZtelYwSmJMQXdUbDJqZmxPMklpS2c%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "일본 도매 인플레이션이 가속화되고 살아난다는 내용 소개 view",
          "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPcS10SkFkNjF0eGRPdkJTYU9aVVR4YzB4ZzNQZ0dfbzVOZ0g3Y2xwQkN2NHF4SmdGdjhIRE02el91WUdSYlFPV0lMcjNQbXdrZVFoWGdVb2RZb0Vwd19HN1V1dWN1MnBzaVJRRzNjU3Z5ZHQ2MTctbmhPZjRXcGVaZVVaZ0szd05xZEoxZEtHOWxkMXZOcm9CMHQtbUl0UEt5aFNNLVUzSDJvQkxibmdMS1VmWTZBUVJYWGVQNEhKR00?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxPcS10SkFkNjF0eGRPdkJTYU9aVVR4YzB4ZzNQZ0dfbzVOZ0g3Y2xwQkN2NHF4SmdGdjhIRE02el91WUdSYlFPV0lMcjNQbXdrZVFoWGdVb2RZb0Vwd19HN1V1dWN1MnBzaVJRRzNjU3Z5ZHQ2MTctbmhPZjRXcGVaZVVaZ0szd05xZEoxZEtHOWxkMXZOcm9CMHQtbUl0UEt5aFNNLVUzSDJvQkxibmdMS1VmWTZBUVJYWGVQNEhKR00%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:15"
    },
    {
      "source": "Bloomberg",
      "title_ko": "연준(Fed)이 2027년 10월 공개시장위원회(FOMC) 금리 회의를 공개합니다.",
      "title_en": "Watch Fed Drops October 2027 FOMC Rate Meeting",
      "summary_ko": "연준(Fed)이 2027년 10월 공개시장위원회(FOMC) 금리 회의 Bloomberg.com을 삭제합니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg뿐만 아니라 Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
      "related_articles": [
        {
          "source": "Wall Street Journal",
          "title_ko": "연준(Fed)을 개편하려는 Kevin Warsh의 계획: 낮은 득표율, 더 많은 심의",
          "original_url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPWWREYWtpWllac2NUdW9FOW1tdXZrTS1FclFzZnA4TEhkOEFJQ0liTEZZdElXbU5BUHMtTnNVME1zYUVpWHY5VXZmM0Z4YWRMY0U4YzVFdldTOEhEQUpSSnluaXNNM2VVVlQ0YnNXR0hUNHRhM1gwSWhtZXl3QlB2QXR5aUVXajZBTTlRdDhB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijgFBVV95cUxPWWREYWtpWllac2NUdW9FOW1tdXZrTS1FclFzZnA4TEhkOEFJQ0liTEZZdElXbU5BUHMtTnNVME1zYUVpWHY5VXZmM0Z4YWRMY0U4YzVFdldTOEhEQUpSSnluaXNNM2VVVlQ0YnNXR0hUNHRhM1gwSWhtZXl3QlB2QXR5aUVXajZBTTlRdDhB%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "연준(Fed), 더 크고 빠른 금리 인상 주장에 직면",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPelFYdmxqTmVYeGJuX2VCMUg3MFowTVhFV25kb1NUN1Z0QUZuMnNVUmVabWhfZU1PVjVTakhlRVRzdHpvWENxd3Y4Y3RJLURrVmNYMkZ3UnpNZUx1RjJvc0xIZDFsZ0xqcDcxbDAwVHNOaUpNSkRuSW00cnVlRy1uQ1F1MjBydEtZSnNVTDJtM2xxaWFXcUcybTUzVGpoaEpSTDM5REtFQ2J0a3Z3WVEtQ25xdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPelFYdmxqTmVYeGJuX2VCMUg3MFowTVhFV25kb1NUN1Z0QUZuMnNVUmVabWhfZU1PVjVTakhlRVRzdHpvWENxd3Y4Y3RJLURrVmNYMkZ3UnpNZUx1RjJvc0xIZDFsZ0xqcDcxbDAwVHNOaUpNSkRuSW00cnVlRy1uQ1F1MjBydEtZSnNVTDJtM2xxaWFXcUcybTUzVGpoaEpSTDM5REtFQ2J0a3Z3WVEtQ25xdw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:19"
    },
    {
      "source": "Reuters",
      "title_ko": "중동 위험, 기술 대패로 아시아 주식에서 해외 유출 급증",
      "title_en": "Foreign outflows from Asian equities surge on Middle East risks, tech rout",
      "summary_ko": "중동 리스크로 인해 아시아 주식에서 해외 자금 유출 급증 Reuters. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
        }
      ],
      "crawled_at": "2026-11-15 20:01:23"
    },
    {
      "source": "Reuters",
      "title_ko": "골드가 1개 이상으로 떨어집니다.",
      "title_en": "Gold drops to over one-year low as fading Middle East peace hopes fan inflation fears",
      "summary_ko": "골드가 1개 이상으로 떨어집니다. 관련 핵심 동향이 발표되었습니다. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPc09mRGRCVmlxTnVTdDR2Y0ktNjVkZE1xUHhyTnZWUGZvbFZFS2hsTFk1SkVfNE82SVZlMTFXbUFtckZMaDIwbzA5RlgxWUxKbE5ZMGhrRkl1UWFrVG9ibW9mdWlGM0NYRTVlQnZramhHSTVadmtEaFhWMDRFY1dYVWRPX1RzNm9YNURTVUVzeGo2aEo4UzZReXRCVlQ0amhjVGFWTU1BVFVQR1k?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxPc09mRGRCVmlxTnVTdDR2Y0ktNjVkZE1xUHhyTnZWUGZvbFZFS2hsTFk1SkVfNE82SVZlMTFXbUFtckZMaDIwbzA5RlgxWUxKbE5ZMGhrRkl1UWFrVG9ibW9mdWlGM0NYRTVlQnZramhHSTVadmtEaFhWMDRFY1dYVWRPX1RzNm9YNURTVUVzeGo2aEo4UzZReXRCVlQ0amhjVGFWTU1BVFVQR1k%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 12 Nov 2026 12:08:58 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "뜨거운 인플레이션 수치와 달러의 가치 상승으로 금 하락",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPUkZNV2RySHI5TXJ4YTBhNlNpTllnVXUyRk9CNzBrLXBLWFc3OTlOM0Y1MUVDcGRhS1pQU1oxR3hveVE5VWRfVGF1aTR4Z0lhcWJjbGV4Ym93cDdqb09JQlpFdC10cW9FUkVBX0NPVFFyOTdxSV81Z0RWUEx4UkdITjNwUnRHUmdDbmg5a0F5QmZXRzdjWGZzeXJsdUNUbDRKM3NvU0VGVGQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxPUkZNV2RySHI5TXJ4YTBhNlNpTllnVXUyRk9CNzBrLXBLWFc3OTlOM0Y1MUVDcGRhS1pQU1oxR3hveVE5VWRfVGF1aTR4Z0lhcWJjbGV4Ym93cDdqb09JQlpFdC10cW9FUkVBX0NPVFFyOTdxSV81Z0RWUEx4UkdITjNwUnRHUmdDbmg5a0F5QmZXRzdjWGZzeXJsdUNUbDRKM3NvU0VGVGQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "남아프리카 랜드화는 7로 하락",
          "original_url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQZHJUYnA3N1BkeU9GR3djUy1pMzFjNHlJNjJXZWVFb3IwVkJFR1NCV0RwVkFhRld3YjNqam9RWWZTMVc1dnY2WHlOWkZNSzZtOHRqUDQyaTY2MXQxdjEwb1J2dm1Xb1ZVaFhrZURLR2xJbG5rRmlHZkdld01FMEFvak5tbG1MWjFDRk5rWlNHUHdjWVNiSWxYaUdfZV9UTUFpWEpnQjdyXy1LcUg2Vm5CRDdsN241clFaMTdoeXBB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivgFBVV95cUxQZHJUYnA3N1BkeU9GR3djUy1pMzFjNHlJNjJXZWVFb3IwVkJFR1NCV0RwVkFhRld3YjNqam9RWWZTMVc1dnY2WHlOWkZNSzZtOHRqUDQyaTY2MXQxdjEwb1J2dm1Xb1ZVaFhrZURLR2xJbG5rRmlHZkdld01FMEFvak5tbG1MWjFDRk5rWlNHUHdjWVNiSWxYaUdfZV9UTUFpWEpnQjdyXy1LcUg2Vm5CRDdsN241clFaMTdoeXBB%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "BoE의 Greene은 지금 인플레이션에 대해 적극적으로 행동하면 상황이 최소한으로 '망가질 것'이라고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNM0szVHlEQVpiTXpBWkZXclIxQ0ZXaDdjQnhSdlZVdUt1N0ZXUjdLaXo5a3Y2TG10a3p5d2w0czgwSGcxTjl6a2ZnR0Znd0hrc0dDajZDV21ZX2tDcnRScUswd29RWlFRSl9PNTJjRzVRd2JyT0Z5NHp4ZWhSdDg2b2d1Z1RmNTJMLWZKM0g4NE4xYTlIYzYxNTR2V0NoWE5wenhxXzM0UzBBQXhCV0RaMTdXQXJKeThRTHItZU9kZWpQT0F6cVdZMWl3?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiygFBVV95cUxNM0szVHlEQVpiTXpBWkZXclIxQ0ZXaDdjQnhSdlZVdUt1N0ZXUjdLaXo5a3Y2TG10a3p5d2w0czgwSGcxTjl6a2ZnR0Znd0hrc0dDajZDV21ZX2tDcnRScUswd29RWlFRSl9PNTJjRzVRd2JyT0Z5NHp4ZWhSdDg2b2d1Z1RmNTJMLWZKM0g4NE4xYTlIYzYxNTR2V0NoWE5wenhxXzM0UzBBQXhCV0RaMTdXQXJKeThRTHItZU9kZWpQT0F6cVdZMWl3%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "금 금리는 거의 1년래 최저 수준으로 하락했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOT3F2NGZ0c25jVUdYLU1WVFUydUJtUHQwWm9uTHlQbG10SHFHLUpZUndrUzZNR2ZwRFBqMUdKNDQ4NmlnY0dDS2hjR3hkenpsZlo1Q3Q2Q21pV3c4dDRFNmdSTnJPejNNR191a1RxVFd5dDNIYkhrb20wcWRRREFCTHFlOXJ1cXZGRlFLRC0ybWNyS0sxODJoWTBBVlFCZDM3S0tSdm9BREUzSVZnQzRiOXc5OXY?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxOT3F2NGZ0c25jVUdYLU1WVFUydUJtUHQwWm9uTHlQbG10SHFHLUpZUndrUzZNR2ZwRFBqMUdKNDQ4NmlnY0dDS2hjR3hkenpsZlo1Q3Q2Q21pV3c4dDRFNmdSTnJPejNNR191a1RxVFd5dDNIYkhrb20wcWRRREFCTHFlOXJ1cXZGRlFLRC0ybWNyS0sxODJoWTBBVlFCZDM3S0tSdm9BREUzSVZnQzRiOXc5OXY%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:28"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "달러-원, 12원 넘게 급락…美·이란 외교 기대 속 한때 1,344원(상보)",
      "title_en": "",
      "summary_ko": "달러-원, 12원 넘게 급락…美·이란 외교 기대 속 한때 1,344원(상보) 연합인포맥스. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 연합인포맥스뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBNczBIV2hTZHBHeFZ1YV9wcE94aUJjVTl3RXRRM2N3TnVhc0dXZUpvN2dYUlRVNHNmZjdzYWNKWFR1UUNLNmxtOEpyckFkVnBraGNPSkxEUVZRaWRETm9rNnVYeEJvSmF4NU14TlByMVk?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBNczBIV2hTZHBHeFZ1YV9wcE94aUJjVTl3RXRRM2N3TnVhc0dXZUpvN2dYUlRVNHNmZjdzYWNKWFR1UUNLNmxtOEpyckFkVnBraGNPSkxEUVZRaWRETm9rNnVYeEJvSmF4NU14TlByMVk?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 09 Nov 2026 13:51:12 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "달러-원, 위험선호 회복에 장중 1,340원선 하향 돌파(상보)",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9lZnc0LUV1MnZ2cVRkVk44bS1RTW80cjRTdzd1OE9DdWNHV214RnA5cUtINTRjUTBBVXhyV2k4UEtHazFPVDF4WS02cFlTTHJkNEc3Uk40Nl9LYWppZF9JOE1EelhsLTJfVWM4YkpXT2s?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9lZnc0LUV1MnZ2cVRkVk44bS1RTW80cjRTdzd1OE9DdWNHV214RnA5cUtINTRjUTBBVXhyV2k4UEtHazFPVDF4WS02cFlTTHJkNEc3Uk40Nl9LYWppZF9JOE1EelhsLTJfVWM4YkpXT2s?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "달러-원, 장중 1,330원선 아래로 낙폭 확대…한때 1,329.20원",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBselRPdTFHMEQtQ2tjclFPNmdxSTlHeWJ4MkhYRUtidVNLTW9JSlhmTGFXRzNjNXFnSWNQMUE0d1E3SWhhVHh0cWtLdHJZamhxRFFzaDY1SjNWeE85aktTRGswblBXRGtvVWJxR2dVTkjSAXRBVV95cUxQZEJUYWc0bXMxaF9xMnVhZ2pLWEJveG8xMTYyR0NQN19LSVU2eGx2VXhCTXNVTmkzMmo0WGh0OTFoWHU4S1lwSFZwSnhzNzUzMlkzSERPLXJEbGhCa0xIWm9rd09DWjdVX3NzNEZKRl9VQWpuWQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBselRPdTFHMEQtQ2tjclFPNmdxSTlHeWJ4MkhYRUtidVNLTW9JSlhmTGFXRzNjNXFnSWNQMUE0d1E3SWhhVHh0cWtLdHJZamhxRFFzaDY1SjNWeE85aktTRGswblBXRGtvVWJxR2dVTkjSAXRBVV95cUxQZEJUYWc0bXMxaF9xMnVhZ2pLWEJveG8xMTYyR0NQN19LSVU2eGx2VXhCTXNVTmkzMmo0WGh0OTFoWHU4S1lwSFZwSnhzNzUzMlkzSERPLXJEbGhCa0xIWm9rd09DWjdVX3NzNEZKRl9VQWpuWQ?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "달러-원, 야간거래서 12원 이상 급락…弱달러에 한때 1,344.00원",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5yR3MzcXRVRzJIYmlZeTQ5NEV5Ty1kQ083YWdQWW56T3hLdlVwTjlkcTNWN21oNDJWV3phS2ZlUmVzWTJWdFZ3RmtsSGplMWxZVnhHc3RSQ3FFOUd5UjRxMGlCN1MxUVRGcWY1NGMzdHLSAXRBVV95cUxOeXZqdUJWVVJHaklISXVDVW90UndMMXVxVWdTdXFYYjY5bjc4dXVBQmxUaFBaT0prNFpCM3dPQnFFeW9QWWt1T04tcGZyTFZ1SlR3cXhVNXFXY0VEMC1fOHNMM3JyU2ZpMFI4elZieWh3OUQzRg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5yR3MzcXRVRzJIYmlZeTQ5NEV5Ty1kQ083YWdQWW56T3hLdlVwTjlkcTNWN21oNDJWV3phS2ZlUmVzWTJWdFZ3RmtsSGplMWxZVnhHc3RSQ3FFOUd5UjRxMGlCN1MxUVRGcWY1NGMzdHLSAXRBVV95cUxOeXZqdUJWVVJHaklISXVDVW90UndMMXVxVWdTdXFYYjY5bjc4dXVBQmxUaFBaT0prNFpCM3dPQnFFeW9QWWt1T04tcGZyTFZ1SlR3cXhVNXFXY0VEMC1fOHNMM3JyU2ZpMFI4elZieWh3OUQzRg?oc=5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:28"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "댄 아이브스, 기술주 폭락은 팬데믹·관세 폭락의 재림…\"황금빛 매수 기회\"",
      "title_en": "",
      "summary_ko": "댄 아이브스, 기술주 폭락은 팬데믹·관세 폭락의 재림…\"황금빛 매수 기회\" 연합인포맥스. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE04Q0docDR5cDJsaEFnZS1DYlJWTzdqRE5wRUJOd2dSalFJZmdSSUtKTlY3blcyeUk4N2llRExsNHVEVHk0N2lHYUJDSXl4bk1yS01ZbzJQM1BOYk1vMUNjVloteUZTVDlBOVNvdEhPOEnSAXRBVV95cUxPYkpsRHplR2htSmh4dGphNDZSVmIxMzI5QlR4bHZUVVF6c1VEMnZqUzRwbWJ1Y3Y1MGQtMVpLWm9KUWFkckJUejZTUnMyeXVlQTAzTnU2OVZoNmY3dGdYZzhoZWRkSFItNF9yU1E2N1Azb2dnYg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE04Q0docDR5cDJsaEFnZS1DYlJWTzdqRE5wRUJOd2dSalFJZmdSSUtKTlY3blcyeUk4N2llRExsNHVEVHk0N2lHYUJDSXl4bk1yS01ZbzJQM1BOYk1vMUNjVloteUZTVDlBOVNvdEhPOEnSAXRBVV95cUxPYkpsRHplR2htSmh4dGphNDZSVmIxMzI5QlR4bHZUVVF6c1VEMnZqUzRwbWJ1Y3Y1MGQtMVpLWm9KUWFkckJUejZTUnMyeXVlQTAzTnU2OVZoNmY3dGdYZzhoZWRkSFItNF9yU1E2N1Azb2dnYg?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 08 Nov 2026 22:54:51 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-15 20:01:28"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "관세가 미국의 전력 시스템에 충격을 줄 수 있는 방법",
      "title_en": "How Tariffs Could Shock America’s Power System",
      "summary_ko": "관세가 어떻게 미국의 전력 시스템에 충격을 줄 수 있는가 WSJ. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Wall Street Journal뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Reuters",
          "title_ko": "미국 관세의 역사와 그것이 오늘날 중요한 이유",
          "original_url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOOVVwYXNnOENmeUh1bjhRbVRDTGZLZERFVGVaOVB0U0tSeUs0X0kyR1E1WjQxTGhPaEdHcTZva3JhRmp4SlZRbDdaYzBxaGxEa0t6elhSS1ZCUloxX2ZvQkFJZFl0T2JiQUNTNkhXSzdkU0g3cDFNSXptbkhfb1F2aGtsdllVQW9mMkRBcw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijAFBVV95cUxOOVVwYXNnOENmeUh1bjhRbVRDTGZLZERFVGVaOVB0U0tSeUs0X0kyR1E1WjQxTGhPaEdHcTZva3JhRmp4SlZRbDdaYzBxaGxEa0t6elhSS1ZCUloxX2ZvQkFJZFl0T2JiQUNTNkhXSzdkU0g3cDFNSXptbkhfb1F2aGtsdllVQW9mMkRBcw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:31"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "美 금리 급등發 약세 속 코스피 반등·외국인 순매도…국고 3년 3.7%대",
      "title_en": "",
      "summary_ko": "美 금리 급등發 약세 속 코스피 반등·외국인 순매도…국고 3년 3.7%대 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 연합뉴스, 더나은미래 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFAzRV9OcEIya1c3NzFFZmROVWYzS0hoekRWbUZXNVNaak1xZXMwR1ltaUFDOF90ZjhmS2EyRUhkeTMtUXM2RjU0RUhrRmEzZ21rbTR3ZWpPcnZVaHNVT1dRVzZxSDhzQUs0RnBzYVpqU00?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFAzRV9OcEIya1c3NzFFZmROVWYzS0hoekRWbUZXNVNaak1xZXMwR1ltaUFDOF90ZjhmS2EyRUhkeTMtUXM2RjU0RUhrRmEzZ21rbTR3ZWpPcnZVaHNVT1dRVzZxSDhzQUs0RnBzYVpqU00?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 11 Nov 2026 04:06:03 GMT",
      "related_articles": [
        {
          "source": "한국경제",
          "title_ko": "장 초반 코스피, 외국인 순매수에 3%↑…5500선 재진입",
          "original_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE82SzY3RnJoZkIxU0FWRHpWaUMzVHM5NEpHTE1HRVRVVno3aGtSYndtQ0I5QnFtejh4NUpDRmhKVUt0N0I3NVN3MzFOdFpYYkZ3eEZQUWNVblhMQmZha1UzMWk0TXJfNGtNUnpaWVJGeFBndG5L?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE82SzY3RnJoZkIxU0FWRHpWaUMzVHM5NEpHTE1HRVRVVno3aGtSYndtQ0I5QnFtejh4NUpDRmhKVUt0N0I3NVN3MzFOdFpYYkZ3eEZQUWNVblhMQmZha1UzMWk0TXJfNGtNUnpaWVJGeFBndG5L?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "’젠슨 황 사임’에도 올랐던 코스피…외국인 매도에 하락",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5EZkJJTHFTdVlFWFdDRWwteTc3ak1IaUJSZjh4MnJKVnY2ZVVGUEJWWE9EbHVhS1o2dmhOamgydTNvNFJYWGtBYmxXd3hjenlVQmo3SE5wNHZ0MWt4T3pDbmxRUlVCS2M?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5EZkJJTHFTdVlFWFdDRWwteTc3ak1IaUJSZjh4MnJKVnY2ZVVGUEJWWE9EbHVhS1o2dmhOamgydTNvNFJYWGtBYmxXd3hjenlVQmo3SE5wNHZ0MWt4T3pDbmxRUlVCS2M?oc=5"
        },
        {
          "source": "더나은미래",
          "title_ko": "코스피, 李 대통령 자본시장 간담회 효과 무색…‘외국인 순매도’에 하락 마감",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBnU3NUU0oyOUFCWHRmdmRwR2hTeFN1VGRGQTAxM2JWRE9QaVpOVkpvalNyOENMN20wUkE0cGl3YUJKN3lDSTRIbmw5aTdSeUtQS3c?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBnU3NUU0oyOUFCWHRmdmRwR2hTeFN1VGRGQTAxM2JWRE9QaVpOVkpvalNyOENMN20wUkE0cGl3YUJKN3lDSTRIbmw5aTdSeUtQS3c?oc=5"
        },
        {
          "source": "글로벌이코노믹",
          "title_ko": "코스피, 외국인 이탈 0.98% 하락… 5300선 하회",
          "original_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOYWpHd3RkWHZqWUZWV3BXN09Pd1RLMFF1UEUyLWt5dTlQaUt0V1k1d2Jqb1hIZDNNUDBPZEhYODRSQ0RBc1RaQXZaXzVTbURFUllScElybTJLdUxaMWlEMWVrZlNRRHgyU1BXck5YbDNrX1FRSWc3ZWdSSFg1azdzY3RIbTVLZ1ZX?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOYWpHd3RkWHZqWUZWV3BXN09Pd1RLMFF1UEUyLWt5dTlQaUt0V1k1d2Jqb1hIZDNNUDBPZEhYODRSQ0RBc1RaQXZaXzVTbURFUllScElybTJLdUxaMWlEMWVrZlNRRHgyU1BXck5YbDNrX1FRSWc3ZWdSSFg1azdzY3RIbTVLZ1ZX?oc=5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:31"
    },
    {
      "source": "진일보 | 전남일보",
      "title_ko": "원·달러 환율 9.6원 하락한 1337.5원…美·이란 긴장 완화 영향 - 진일보 | 전남일보",
      "title_en": "",
      "summary_ko": "원·달러 환율 9.6원 하락한 1337.5원…美·이란 긴장 완화 영향 진일보 | 전남일보. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 진일보 | 전남일보뿐만 아니라 조세일보, 뉴스1 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE00bHg2RGgwSGRGTlpINVFodFF1UHo1SF9JZ2ZmRkdDTGs0cXRiU1B5TVJxTzB5R2RfQkRXczFnUGNCTksxeVpRVG9xdW9zZVE5V1UtaUZaWFNLT01Yd3BfOUZKRFJXUHBzQnc5SkZJQQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE00bHg2RGgwSGRGTlpINVFodFF1UHo1SF9JZ2ZmRkdDTGs0cXRiU1B5TVJxTzB5R2RfQkRXczFnUGNCTksxeVpRVG9xdW9zZVE5V1UtaUZaWFNLT01Yd3BfOUZKRFJXUHBzQnc5SkZJQQ?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 10 Nov 2026 07:37:40 GMT",
      "related_articles": [
        {
          "source": "조세일보",
          "title_ko": "원·달러 환율, 1340.0원…달러, 중동 지역 긴장 완화에 약세",
          "original_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9xMXhPTEhwVU5mUlN5dTZ1TlZCa19DWjJ0dTlqSTE5Ukxtdl82YVpxcV9HeEpGNjRwaVhtdkE5LXhWMzUyNmlJWUFoSkxWdzN1aDAteTY0UjZycWtJTHl3?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9xMXhPTEhwVU5mUlN5dTZ1TlZCa19DWjJ0dTlqSTE5Ukxtdl82YVpxcV9HeEpGNjRwaVhtdkE5LXhWMzUyNmlJWUFoSkxWdzN1aDAteTY0UjZycWtJTHl3?oc=5"
        },
        {
          "source": "뉴스1",
          "title_ko": "'금리 인상 우려' 달러·원 환율 상승 출발…1336.6원 개장",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE53bUhFZmRMVGxfMVVNRW5XMS1TbmtZSkkydzJYb183ZktwS0J2TWloenlKLWlrak5QS0VVVzFFeThhODJ5RlVZVVl2OUVQZ053dEtWUk4zZkV6ZHc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE53bUhFZmRMVGxfMVVNRW5XMS1TbmtZSkkydzJYb183ZktwS0J2TWloenlKLWlrak5QS0VVVzFFeThhODJ5RlVZVVl2OUVQZ053dEtWUk4zZkV6ZHc?oc=5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:31"
    },
    {
      "source": "KB Think",
      "title_ko": "[채권-주간] 11월 금통위 직전 글로벌·외국인·주가 주시",
      "title_en": "",
      "summary_ko": "[채권-주간] 11월 금통위 직전 글로벌·외국인·주가 주시 KB Think. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. KB Think에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9Zd3Rnb3U3dVZPV0F4VVQyOGRTVVA1eS1EYUVBZ0s0NXllclNLNXp4YllkWVF6OFN1UFY1eVo2aGx1Q3RfdGk1ZTgxQlJlYUhmam9hYmZXUnBzUU1kYUpvUzFyRXR2UXIyc0hOTm9aVy1iUQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9Zd3Rnb3U3dVZPV0F4VVQyOGRTVVA1eS1EYUVBZ0s0NXllclNLNXp4YllkWVF6OFN1UFY1eVo2aGx1Q3RfdGk1ZTgxQlJlYUhmam9hYmZXUnBzUU1kYUpvUzFyRXR2UXIyc0hOTm9aVy1iUQ?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 15 Nov 2026 04:00:01 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-15 20:01:31"
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
      "crawled_at": "2026-11-15 20:01:31"
    },
    {
      "source": "산경투데이",
      "title_ko": "원·달러 환율, 장중 1,320원대 진입…외국인 매수에 원화 강세",
      "title_en": "",
      "summary_ko": "원·달러 환율, 장중 1,320원대 진입…외국인 매수에 원화 강세 산경투데이. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 산경투데이에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1uSUh6alFhb3ZtTW9xWTNuTkhGaU1lS3ZMMUREeDNJWENLd0Q4bnpfb2xoY0RkQno5ZFFmWUlBMU16UHZZME1mcHVxZ1EwV2o4VUtIMU5WUF9XdGJQT0c0c01TZ0prd0xOLVJGR1NSOGnSAXRBVV95cUxPWW5YSnFoVjFfd1Vsa1dPbmY0NzE3Wk50RUFRa0dwVUJ1T0VLalhsbkVqZk9HMHZVQnZCbi1Da21aa1c3Smk3Vzl1b2dMZjY4RjQtOUVJbWdiYW85d3lZdjJtYmhTXzFsdTc1ZElzN2lIUUliVQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1uSUh6alFhb3ZtTW9xWTNuTkhGaU1lS3ZMMUREeDNJWENLd0Q4bnpfb2xoY0RkQno5ZFFmWUlBMU16UHZZME1mcHVxZ1EwV2o4VUtIMU5WUF9XdGJQT0c0c01TZ0prd0xOLVJGR1NSOGnSAXRBVV95cUxPWW5YSnFoVjFfd1Vsa1dPbmY0NzE3Wk50RUFRa0dwVUJ1T0VLalhsbkVqZk9HMHZVQnZCbi1Da21aa1c3Smk3Vzl1b2dMZjY4RjQtOUVJbWdiYW85d3lZdjJtYmhTXzFsdTc1ZElzN2lIUUliVQ?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 12 Nov 2026 07:58:09 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-15 20:01:32"
    },
    {
      "source": "한국경제",
      "title_ko": "[현승윤 칼럼] 한은, 기준금리 인상에 신중할 때",
      "title_en": "",
      "summary_ko": "[현승윤 칼럼] 한은, 기준금리 인상에 신중할 때 한국경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 한국경제뿐만 아니라 연합인포맥스, 비즈워치 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9nUjZicVVEVm9ubmgxV1NCeTg1OGdjaUtoSDd1cC1sNU1ZZXBFNHdOcjkzV3NwdV9EU21WcW5id25ZdnZoZ1UtcVBGeDRWUWtIRXB4LThNSUtIZw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9nUjZicVVEVm9ubmgxV1NCeTg1OGdjaUtoSDd1cC1sNU1ZZXBFNHdOcjkzV3NwdV9EU21WcW5id25ZdnZoZ1UtcVBGeDRWUWtIRXB4LThNSUtIZw?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 11 Nov 2026 08:35:57 GMT",
      "related_articles": [
        {
          "source": "비즈워치",
          "title_ko": "가계대출 다시 증가…이달 기준금리 인상 힘 받나",
          "original_url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1qYmpMSnhmYWUzY3lpVmhJWTlpRG8xT2h4Zm90dGVwTUREclJKMFo0M0JIcXZLU1R6LUhWNDUzaktkVVRPOWpJNlpPOTdGR2djSU5Ebk9mbDctTlJhc2ZneXdwQ1AyQThKZVM0?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1qYmpMSnhmYWUzY3lpVmhJWTlpRG8xT2h4Zm90dGVwTUREclJKMFo0M0JIcXZLU1R6LUhWNDUzaktkVVRPOWpJNlpPOTdGR2djSU5Ebk9mbDctTlJhc2ZneXdwQ1AyQThKZVM0?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "이미 긴축적이라고?…한은 FCI 판단에 기준금리 경로 달라질까",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5zcFRGSGZzTWRNNHZtYVlZeTI0VVlCUnJVcW1CZWhwWW96RlBEbk1nYmtwaWlaeEtjaWg1UHZZX05RTGFDd2xycUhBUXZCX0s4RVEySXp6QjdQQURVZUF5R2V3X0hOSXg0enVXZWZsVmw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5zcFRGSGZzTWRNNHZtYVlZeTI0VVlCUnJVcW1CZWhwWW96RlBEbk1nYmtwaWlaeEtjaWg1UHZZX05RTGFDd2xycUhBUXZCX0s4RVEySXp6QjdQQURVZUF5R2V3X0hOSXg0enVXZWZsVmw?oc=5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:32"
    },
    {
      "source": "뉴닉",
      "title_ko": "미국 연준 12월 기준금리 인상 전망: '빅스텝' 가능성과 한국 경제 영향 정리 💸",
      "title_en": "",
      "summary_ko": "미국 연준 12월 기준금리 인상 전망: '빅스텝' 가능성과 한국 경제 영향 정리 💸 뉴닉. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 뉴닉에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5JUEJmVVJsa0V4d1NoSkpvYzVZYXJzeTVpdmJ1VU9JZmVzNTg2RzRxTlYxNG1kZGtMdlozSW9jUHNvTEhVLVVoRGNmTXd6RkE4cEdB?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5JUEJmVVJsa0V4d1NoSkpvYzVZYXJzeTVpdmJ1VU9JZmVzNTg2RzRxTlYxNG1kZGtMdlozSW9jUHNvTEhVLVVoRGNmTXd6RkE4cEdB?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 12 Nov 2026 02:25:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-15 20:01:32"
    },
    {
      "source": "포커스온경제",
      "title_ko": "[파이낸셜 워치(189)] 미국 기준금리 인상 확실시 달러가치 급등세⋯달러지수 1년7개월만 최고치",
      "title_en": "",
      "summary_ko": "[파이낸셜 워치(189)] 미국 기준금리 인상 확실시 달러가치 급등세⋯달러지수 1년7개월만 최고치 포커스온경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 포커스온경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE55eFFGeTdJc1JhajNMTzR4ZWZjMlBMM2R3T0tsVWp4Ulh0Z0tsNHJaNlFsN1ZybTQ3OFdxdzZvekdnZkRDeWRFcGFHMDVLU05MVGpBT3BqdmdoU20wb2wzcQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE55eFFGeTdJc1JhajNMTzR4ZWZjMlBMM2R3T0tsVWp4Ulh0Z0tsNHJaNlFsN1ZybTQ3OFdxdzZvekdnZkRDeWRFcGFHMDVLU05MVGpBT3BqdmdoU20wb2wzcQ?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 11 Nov 2026 22:47:15 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-15 20:01:32"
    },
    {
      "source": "경향신문",
      "title_ko": "미 소비자물가 한달 새 0.4% 상승···다음달 금리 인상 가능성 커졌다",
      "title_en": "",
      "summary_ko": "미 소비자물가 한달 새 0.4% 상승···다음달 금리 인상 가능성 커졌다 경향신문. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 경향신문에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5RaVQ1ZXlHeDZkVjRnUHl6QTlIcXpwclRwcW1lSjRBbmVvOW1GZ1BReXRDVHNUdEt2dmNRaUVLQU9tVXFfMXZDZms0OFBaOGlKc0x4M0dJWDZHUdIBX0FVX3lxTE9CWlZXb3YxazV2NlRuWlgyaVppYVhBQTNJOUp3bnFGS1Qxby1UVUQzX19sbnRYbzBnN041NVJnOW1qNVZub1p5MDM1aWY4N3pNdklJZzZwLTBvcVBURk8w?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5RaVQ1ZXlHeDZkVjRnUHl6QTlIcXpwclRwcW1lSjRBbmVvOW1GZ1BReXRDVHNUdEt2dmNRaUVLQU9tVXFfMXZDZms0OFBaOGlKc0x4M0dJWDZHUdIBX0FVX3lxTE9CWlZXb3YxazV2NlRuWlgyaVppYVhBQTNJOUp3bnFGS1Qxby1UVUQzX19sbnRYbzBnN041NVJnOW1qNVZub1p5MDM1aWY4N3pNdklJZzZwLTBvcVBURk8w?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 10 Nov 2026 13:54:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-15 20:01:32"
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
      "crawled_at": "2026-11-15 20:01:32"
    },
    {
      "source": "마켓잉크",
      "title_ko": "베센트 \"엔비디아, 외부에서 새 CEO 찾아야\"…연준에는 추가 금리 인상 자제 요구",
      "title_en": "",
      "summary_ko": "베센트 \"엔비디아, 외부에서 새 CEO 찾아야\"…연준에는 추가 금리 인상 자제 요구 마켓잉크. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 마켓잉크뿐만 아니라 BeInCrypto 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBzN3VkUnNOMms2QlJuVVVSb2FFVmFGdHV1UW90NUtlMUpMMUN0bHh4Y1ZranhMQXpzUHdkdVlld1NzQkNjTC04emlJdl9aeTgxWG9KdW5GSmR1bWtjcE1tX2lPRVhzTmlIbVgyN20tSQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBzN3VkUnNOMms2QlJuVVVSb2FFVmFGdHV1UW90NUtlMUpMMUN0bHh4Y1ZranhMQXpzUHdkdVlld1NzQkNjTC04emlJdl9aeTgxWG9KdW5GSmR1bWtjcE1tX2lPRVhzTmlIbVgyN20tSQ?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 15 Nov 2026 15:50:04 GMT",
      "related_articles": [
        {
          "source": "BeInCrypto",
          "title_ko": "베센트·루트닉, 트럼프 행정부 엔비디아 중국 칩 조사 갈등",
          "original_url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE9EYThRSjNBWEhEQ19FSlRvTVFtc1psX0lvWEFCbnVXVm45REpQSXhUUDVkZTNXaGdLenJaUEI5UFA0bDBfV0tEN2N5NzE2VzZidHRJSzVzbWt6Szc1T2VmdjlmZnBSa29DTGJrQXlMaUpJdHNYU29PTFBR?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE9EYThRSjNBWEhEQ19FSlRvTVFtc1psX0lvWEFCbnVXVm45REpQSXhUUDVkZTNXaGdLenJaUEI5UFA0bDBfV0tEN2N5NzE2VzZidHRJSzVzbWt6Szc1T2VmdjlmZnBSa29DTGJrQXlMaUpJdHNYU29PTFBR?oc=5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:32"
    },
    {
      "source": "글로벌이코노믹",
      "title_ko": "젠슨 황 스캔들에 등장한 파월…엔비디아 의료 AI 이끈 18년 임원",
      "title_en": "",
      "summary_ko": "젠슨 황 스캔들에 등장한 파월…엔비디아 의료 AI 이끈 18년 임원 글로벌이코노믹. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 글로벌이코노믹뿐만 아니라 뉴스웍스, 파이낸셜뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOaEVtbi1vSnpzajRvMkJ2VlM5YXB0OEtOaUlxYjdJR19SaHZCbHNOOFg2QVlyMXV6Q0EwUnVnT205Z0xLdWNrMGtGOEUxak5XbkNkM1F3MVRhZDJ6M0tBWGVaX2xDODM4WGNzelc3N0Q4cmVhV3dkQVRER0liV0NrQmtUQVlqNWM?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOaEVtbi1vSnpzajRvMkJ2VlM5YXB0OEtOaUlxYjdJR19SaHZCbHNOOFg2QVlyMXV6Q0EwUnVnT205Z0xLdWNrMGtGOEUxak5XbkNkM1F3MVRhZDJ6M0tBWGVaX2xDODM4WGNzelc3N0Q4cmVhV3dkQVRER0liV0NrQmtUQVlqNWM?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 12 Nov 2026 01:15:13 GMT",
      "related_articles": [
        {
          "source": "파이낸셜뉴스",
          "title_ko": "연준, AI발 금융위험 경고… 엔비디아 실적이 분수령 [AI 생태계 덮친 젠슨 황 리스크]",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE4yak56bzFTVXNhZEdGc3AtMEM2ZUNXWWlvdnI2czc2M1V5SWpoODJyb3U2NFdvMEFjcGhucUVRUDllUzlyOG4xNnk2STI2RHhJdnlsS0ZDSnJ3UQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE4yak56bzFTVXNhZEdGc3AtMEM2ZUNXWWlvdnI2czc2M1V5SWpoODJyb3U2NFdvMEFjcGhucUVRUDllUzlyOG4xNnk2STI2RHhJdnlsS0ZDSnJ3UQ?oc=5"
        },
        {
          "source": "뉴스웍스",
          "title_ko": "젠슨 황 떠난 엔비디아…삼성전자 웃고, SK하이닉스 울게 될까",
          "original_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE15SVBXMWtsQ3JLMmVvMEVlcHdkODZNQ1FXQW05dl9wLWFhSlVocUdHZElqWElZSWNON0hOVEpJeW9aQWR3WGQtS3RPLVdsTFpUNnpneHUtbnBNSkNaUWpzUk9yRUdTZzY1ZEZJLWVRRdIBc0FVX3lxTE80THRLRXJZX3BDT3ZGSzZkVlVCN0dMVGZKRTlLZXRDN0F2VHkzWU1UbHBhcEhwck8yZXpNcUw5VElGRkdsVFd3eS1NX3FEdVFzMnJjbWpKUFR4UUdlSmtyeEhFYnJKR1hXQWctN1lkR3NhY0E?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE15SVBXMWtsQ3JLMmVvMEVlcHdkODZNQ1FXQW05dl9wLWFhSlVocUdHZElqWElZSWNON0hOVEpJeW9aQWR3WGQtS3RPLVdsTFpUNnpneHUtbnBNSkNaUWpzUk9yRUdTZzY1ZEZJLWVRRdIBc0FVX3lxTE80THRLRXJZX3BDT3ZGSzZkVlVCN0dMVGZKRTlLZXRDN0F2VHkzWU1UbHBhcEhwck8yZXpNcUw5VElGRkdsVFd3eS1NX3FEdVFzMnJjbWpKUFR4UUdlSmtyeEhFYnJKR1hXQWctN1lkR3NhY0E?oc=5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:32"
    },
    {
      "source": "Reuters",
      "title_ko": "주식은 기술 이익으로 상승합니다. Nvidia는 몇 시간 후에 하락합니다.",
      "title_en": "Stocks rise on tech gains; Nvidia falls after hours",
      "summary_ko": "주식은 기술 이익으로 상승합니다. Nvidia는 몇 시간 만에 하락합니다 Reuters. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Bloomberg, Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxON2pqenNYSWUzSVBxc3U2RlhRT29TZGNJWFVMRVVQa0NkaDd6STY3VzhiZTB1b0RPcXB4c0ZEM1RwaGdkZUpkZHp2Q0ZCenBZZF90eTZFMnJvT2F4elJlZlMzOFFiaTVfUmxxNVcxNFZLOVpRY1ZHTjFITVpqVlJHdDJ6UXVUNXU4Z2NoOGZrVjB0QQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikgFBVV95cUxON2pqenNYSWUzSVBxc3U2RlhRT29TZGNJWFVMRVVQa0NkaDd6STY3VzhiZTB1b0RPcXB4c0ZEM1RwaGdkZUpkZHp2Q0ZCenBZZF90eTZFMnJvT2F4elJlZlMzOFFiaTVfUmxxNVcxNFZLOVpRY1ZHTjFITVpqVlJHdDJ6UXVUNXU4Z2NoOGZrVjB0QQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 12 Nov 2026 01:20:25 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Bessent는 Nvidia가 Huang Oster 이후 '극적인 개편'이 필요하다고 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOeWVOd0Mxb3JkUnFuVDh3VU52TmV0U0tqMm9KYVFZUlR1YWxuNkJONDVmWXlMRDVyZDQ2OHdoWlVXZDNRYWdydk1hd3RQRU5fSUJXLUY0QzJoazZjRm9LOTJtdEo0RVZ3UGFjX1lQdEo4c05ZNnNodmE0cFhmbThoZlFsd2tnOFZaVTVVRDlpdVBqS2VpOV9IV3R1LXJLWV8yWXJ3cnU3WDl5blpJMG9pTW5R?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxOeWVOd0Mxb3JkUnFuVDh3VU52TmV0U0tqMm9KYVFZUlR1YWxuNkJONDVmWXlMRDVyZDQ2OHdoWlVXZDNRYWdydk1hd3RQRU5fSUJXLUY0QzJoazZjRm9LOTJtdEo0RVZ3UGFjX1lQdEo4c05ZNnNodmE0cFhmbThoZlFsd2tnOFZaVTVVRDlpdVBqS2VpOV9IV3R1LXJLWV8yWXJ3cnU3WDl5blpJMG9pTW5R%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "Nvidia 주가가 다시 하락하면서 미국 주식은 하락했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNcEdLelU4VXpMTmdPeTgxTjBhZkd3NEIyZDg5ZnZCWXdtVnVFd3Fxbm95Z2ZfbkNZRnh2WVppWUhnR0pvZXZsRHdEaWdkaEJ1emVweFpFbG9WUTBPV3B1UktyeVNodWY0SXBtOGNUbXZQWXcyRmNWUnRGR21vYWt0WmxraHFsZ2haSGRCdHZacG1uTkpMTTlNQUpsNEFSRUY4Z2MzaUZn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxNcEdLelU4VXpMTmdPeTgxTjBhZkd3NEIyZDg5ZnZCWXdtVnVFd3Fxbm95Z2ZfbkNZRnh2WVppWUhnR0pvZXZsRHdEaWdkaEJ1emVweFpFbG9WUTBPV3B1UktyeVNodWY0SXBtOGNUbXZQWXcyRmNWUnRGR21vYWt0WmxraHFsZ2haSGRCdHZacG1uTkpMTTlNQUpsNEFSRUY4Z2MzaUZn%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia Fallout, 차세대 메가 IPO, FAA 라우터 실패 시청",
          "original_url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxON3hMSDhrM3R5MXZySTUzT3JMTDVNSjdvMnk4OXo1Umo0RS1XZVF4Y2VOcXNGMUJ5WV9PLVF2ODVEVUdRMzBzcm1ZTGhyRFFaRE4wY2ZDam5saElTS0hGWEM3RlNSLXdzQk9NMGF5X1ExLUdVNTR5RTZaVkhZSG5hMVFfNjJaOFNjUWZyUkdIenVtZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikgFBVV95cUxON3hMSDhrM3R5MXZySTUzT3JMTDVNSjdvMnk4OXo1Umo0RS1XZVF4Y2VOcXNGMUJ5WV9PLVF2ODVEVUdRMzBzcm1ZTGhyRFFaRE4wY2ZDam5saElTS0hGWEM3RlNSLXdzQk9NMGF5X1ExLUdVNTR5RTZaVkhZSG5hMVFfNjJaOFNjUWZyUkdIenVtZw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia 드라마가 더욱 전개되면서 Alice Huang의 AI 칩 네트워크 공개",
          "original_url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPaUMwZDFjbzlWdkduTE5EZW01SWd0M2RnQmVMb0FLZkZXX3BlQlZUZFZWWGdLV0lvSVF1QlhJNWJVT2dxWHYzazNrcjNZdXFPRnVxdG1GRHVvSlFOQ09NdW9pc1JSbU5nMzRZN3FZSTJVU1pPdmU4cjVKOUZ4cThEVkJCNjZIYzlrei1nVFFvNlFRX3BCbWt0WV9fLUFsNmc4S3MtZFk5UllVaG14cE9qY0pwZVhxbm1pa043MUJaOVZEZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwgFBVV95cUxPaUMwZDFjbzlWdkduTE5EZW01SWd0M2RnQmVMb0FLZkZXX3BlQlZUZFZWWGdLV0lvSVF1QlhJNWJVT2dxWHYzazNrcjNZdXFPRnVxdG1GRHVvSlFOQ09NdW9pc1JSbU5nMzRZN3FZSTJVU1pPdmU4cjVKOUZ4cThEVkJCNjZIYzlrei1nVFFvNlFRX3BCbWt0WV9fLUFsNmc4S3MtZFk5UllVaG14cE9qY0pwZVhxbm1pa043MUJaOVZEZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:37"
    },
    {
      "source": "Reuters",
      "title_ko": "독점: 전 Nvidia CEO 황은 두 번째 직원과 관계를 가졌다고 소식통은 말합니다.",
      "title_en": "EXCLUSIVE: Former Nvidia CEO Huang had a relationship with a second employee, sources say",
      "summary_ko": "독점: 전 엔비디아 CEO 황은 두 번째 직원과 관계를 가졌다고 소식통은 로이터에 말했습니다. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOS3otVnY4ZXphd1g5Q0REOVlqY3c1WXBMSmMtNThTbGlaRGVkVkZXZml1RHlEN3djZXRMT0pSTnJ6c3JiZ0tOdVRRekpJUlBfRV92ZEFEUU9GVU5XZHBYVmotRjFpcExuaER3S1BUaF90UWFaRnVBcFlHazgzOXBSWXJfN1RMSFNrcWY2TVRkQmVTYkNHUUhMeHAyM1huRXItSVhKZU95Q2wyTmg1MnlZcGduR01vdzFBcmpiVA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxOS3otVnY4ZXphd1g5Q0REOVlqY3c1WXBMSmMtNThTbGlaRGVkVkZXZml1RHlEN3djZXRMT0pSTnJ6c3JiZ0tOdVRRekpJUlBfRV92ZEFEUU9GVU5XZHBYVmotRjFpcExuaER3S1BUaF90UWFaRnVBcFlHazgzOXBSWXJfN1RMSFNrcWY2TVRkQmVTYkNHUUhMeHAyM1huRXItSVhKZU95Q2wyTmg1MnlZcGduR01vdzFBcmpiVA%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sat, 14 Nov 2026 05:13:48 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Bessent는 Nvidia가 Huang Out과 함께 '극적인 개편'이 필요하다고 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNS1ZOWlF3ZUlxWGYyZm9kX3NnZUsyNEpjYXhKaWMxY3hPbnRvSlJYeHc3ak9lejRYcHdmWjB2dk54cmMweklHdXdpVDdmRm9yNE91LWJKV2VoUC16bF9sdzRTM2NhWk5MMnBROXJ2UHA2SU0tSDNpeEZLZkxJZGg4T1laVHUyU1Fid0dtYjQ3c0tHMFRsOVp3TndoeEUzaElUSkxVT3hlOGQyZTVPZDF3emxB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNS1ZOWlF3ZUlxWGYyZm9kX3NnZUsyNEpjYXhKaWMxY3hPbnRvSlJYeHc3ak9lejRYcHdmWjB2dk54cmMweklHdXdpVDdmRm9yNE91LWJKV2VoUC16bF9sdzRTM2NhWk5MMnBROXJ2UHA2SU0tSDNpeEZLZkxJZGg4T1laVHUyU1Fid0dtYjQ3c0tHMFRsOVp3TndoeEUzaElUSkxVT3hlOGQyZTVPZDF3emxB%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "황, 연합국과 함께 Nvidia CEO로 복귀 논의",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNUS0wX1Z6cGRDOHZsRkh5ZF96eHZzczdQeDNHa21rT3JQZ0l2X3lXYVQ2NlliYWs2V3pCTlZPcFctSl9EeXU2VDhwRHlmbnZoQ19mWFhBY1pkcnZDRldzUzR0eG9hYVhPMzBKcEllQzFJdld6SnN1cjdzYktzWHJGUXRaQjZZWG1fNmVTbG1BNzVzTzFtcXNMWkp2R1d3cktlNXo1SldBNW5RNld2TW1yMw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxNUS0wX1Z6cGRDOHZsRkh5ZF96eHZzczdQeDNHa21rT3JQZ0l2X3lXYVQ2NlliYWs2V3pCTlZPcFctSl9EeXU2VDhwRHlmbnZoQ19mWFhBY1pkcnZDRldzUzR0eG9hYVhPMzBKcEllQzFJdld6SnN1cjdzYktzWHJGUXRaQjZZWG1fNmVTbG1BNzVzTzFtcXNMWkp2R1d3cktlNXo1SldBNW5RNld2TW1yMw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Jensen Huang은 동맹국들과 Nvidia CEO로 복귀에 대해 논의한다고 FT는 보도했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOMjJiT3lpV1Ezamlva2NQWFNtWlB6VnRkdXhSOVBselpmQUk5Y2x0RGUyajctclFfY19VMW0wc1Z1VFBhZkdUM2QyUHE3ZC15MUUxVkk4VkJJM25jTFhlM2RaTkFZaGF0UXNUTlp3aFBfckxCaURVUWZMNVBIQ0hZU2FxWThpQldRUjM2RERqalRRNFhGaWJlZFkzWFZkRnFDRzBHamc3ZDZFLWtVdGFuZDEwUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOMjJiT3lpV1Ezamlva2NQWFNtWlB6VnRkdXhSOVBselpmQUk5Y2x0RGUyajctclFfY19VMW0wc1Z1VFBhZkdUM2QyUHE3ZC15MUUxVkk4VkJJM25jTFhlM2RaTkFZaGF0UXNUTlp3aFBfckxCaURVUWZMNVBIQ0hZU2FxWThpQldRUjM2RERqalRRNFhGaWJlZFkzWFZkRnFDRzBHamc3ZDZFLWtVdGFuZDEwUQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "'나는 Sh--의 한 조각이다': Jensen Huang의 Nvidia CEO로서의 마지막 시간",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNLUFpTEJfdXRzTFZ2TklSSUpraEZZZVdGbTZjWHBVbWY5YVVWYzViaDkzNXBzaklIRUdmTDAxd3RYX3lscTFrTFRwdVR1Wnd3QzMtUVk4TVVmak5kNWkxWmMzYlltN1F6cVhRQXlMOGtaX1FKczc1cmQ3WUJJaDJmVGRkZWYzR2pnSWVZU3Z1TWhjUHVCREtWbEtVTUw0ckQ4M0VmR0Mya2o?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxNLUFpTEJfdXRzTFZ2TklSSUpraEZZZVdGbTZjWHBVbWY5YVVWYzViaDkzNXBzaklIRUdmTDAxd3RYX3lscTFrTFRwdVR1Wnd3QzMtUVk4TVVmak5kNWkxWmMzYlltN1F6cVhRQXlMOGtaX1FKczc1cmQ3WUJJaDJmVGRkZWYzR2pnSWVZU3Z1TWhjUHVCREtWbEtVTUw0ckQ4M0VmR0Mya2o%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:41"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "코스피, 한달새 10% '뚝'…내주 '엔비디아·美中회담·연준' 주목",
      "title_en": "",
      "summary_ko": "코스피, 한달새 10% '뚝'…내주 '엔비디아·美中회담·연준' 주목 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 파이낸셜포스트, 아시아경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE45SUNMUllnQThzdDFnb19jUTZoM2RHVHdLWHc1aE05S3RHd25sbnR4Vy15dVdwMGp5T2pBVEhzaXVXMHNxZG5zcHZBbHlXcjVhMFFYdjVxRDgyczZWdV8tYjRLTlowYnpZWVpXc2UyTHo?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE45SUNMUllnQThzdDFnb19jUTZoM2RHVHdLWHc1aE05S3RHd25sbnR4Vy15dVdwMGp5T2pBVEhzaXVXMHNxZG5zcHZBbHlXcjVhMFFYdjVxRDgyczZWdV8tYjRLTlowYnpZWVpXc2UyTHo?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 13 Nov 2026 22:15:08 GMT",
      "related_articles": [
        {
          "source": "파이낸셜포스트",
          "title_ko": "[젠슨황 퇴진] 트럼프, 반도체 수출통제 풀어주고 엔비디아 '주식 매집' 뒷말",
          "original_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE8zbW5DRmhyNEgyYUNtUy1KcEN3cXRlaUlEZS1XaTlfTFZDdlNXZHY1WWduZ1BVQ1U3VHZRNkNhYVFIV2E5N0xRLVY1YjEtVTk0R3IwazlWdjMxNl9STmU0SWZlQUkxTDNpYzJpSlIxWWl3d1g4?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE8zbW5DRmhyNEgyYUNtUy1KcEN3cXRlaUlEZS1XaTlfTFZDdlNXZHY1WWduZ1BVQ1U3VHZRNkNhYVFIV2E5N0xRLVY1YjEtVTk0R3IwazlWdjMxNl9STmU0SWZlQUkxTDNpYzJpSlIxWWl3d1g4?oc=5"
        },
        {
          "source": "아시아경제",
          "title_ko": "\"트럼프, 美 반도체 수출통제 완화 전 엔비디아 주식 매수\"",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1OUmlwOFlIdHFaSXZpQnlCT1kzSlVLaDBGUDZWalMtelgtT3ZVUW1pZnJjc1daZVRPZVRSRVFPdktVU0ZJS2VXQXZLa0hjN1JPVFotTlc0dG5Vcm8zX05rTA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1OUmlwOFlIdHFaSXZpQnlCT1kzSlVLaDBGUDZWalMtelgtT3ZVUW1pZnJjc1daZVRPZVRSRVFPdktVU0ZJS2VXQXZLa0hjN1JPVFotTlc0dG5Vcm8zX05rTA?oc=5"
        }
      ],
      "crawled_at": "2026-11-15 20:01:41"
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
