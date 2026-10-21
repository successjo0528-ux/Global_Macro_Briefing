window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-10-22 05:04:38",
    "date_str": "2026년 10월 22일 (목)",
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
      "price": 4.063,
      "previous_close": 4.057,
      "change": 0.006,
      "change_percent": 0.15,
      "display_price": "4.063%",
      "status": "up",
      "history": [
        4.057,
        4.085,
        4.088,
        4.07,
        4.075,
        4.08,
        4.063
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-10-21 20:00:41"
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
      "price": 5.146,
      "previous_close": 5.217,
      "change": -0.071,
      "change_percent": -1.36,
      "display_price": "5.146%",
      "status": "down",
      "history": [
        5.217,
        5.19,
        5.089,
        5.098,
        5.136,
        5.117,
        5.146
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-10-21 20:00:41",
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
      "price": 5.439,
      "previous_close": 5.563,
      "change": -0.124,
      "change_percent": -2.23,
      "display_price": "5.439%",
      "status": "down",
      "history": [
        5.563,
        5.525,
        5.429,
        5.436,
        5.472,
        5.425,
        5.439
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-10-21 20:00:42"
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
      "price": 101.696,
      "previous_close": 102.55,
      "change": -0.854,
      "change_percent": -0.83,
      "display_price": "101.70 pt",
      "status": "down",
      "history": [
        102.55,
        102.0,
        101.84,
        101.98,
        101.73,
        101.696
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-10-21 20:00:42"
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
      "price": 158.19,
      "previous_close": 158.52,
      "change": -0.33,
      "change_percent": -0.21,
      "display_price": "158.19엔",
      "status": "down",
      "history": [
        158.52,
        158.322,
        157.957,
        158.143,
        157.806,
        158.523,
        158.19
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-10-21 20:00:42"
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
      "price": 4149.7,
      "previous_close": 4107.9,
      "change": 41.8,
      "change_percent": 1.02,
      "display_price": "$4,149.70",
      "status": "up",
      "history": [
        4107.9,
        4170.1,
        4181.1,
        4160.1,
        4142.6,
        4149.7
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-10-21 20:00:42"
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
      "price": 97.61,
      "previous_close": 95.09,
      "change": 2.52,
      "change_percent": 2.65,
      "display_price": "$97.61",
      "status": "up",
      "history": [
        95.09,
        97.97,
        101.41,
        103.66,
        101.79,
        97.61
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-10-21 20:00:42"
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
      "price": 84395.14,
      "previous_close": 82141.46,
      "change": 2253.68,
      "change_percent": 2.74,
      "display_price": "$84,395",
      "status": "up",
      "history": [
        82141.461,
        81500.805,
        81382.148,
        82017.602,
        81853.539,
        82941.0,
        84395.141
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-10-21 20:00:43"
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
      "price": 965.0,
      "previous_close": 322.0,
      "change": 643.0,
      "change_percent": 199.69,
      "display_price": "$965.0B (약 9,650억$)",
      "status": "up",
      "history": [
        16.2,
        32.8,
        948.5,
        973.7,
        313.4,
        322.0,
        965.0
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-10-21 20:00:43"
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
      "price": 7757.71,
      "previous_close": 7807.24,
      "change": -49.53,
      "change_percent": -0.63,
      "display_price": "7,757.71",
      "status": "down",
      "history": [
        7805.45,
        7718.94,
        7744.06,
        7659.44,
        7690.73,
        7712.57,
        7757.71
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-10-21 20:00:43"
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
      "price": 29822.518,
      "previous_close": 30664.7,
      "change": -842.182,
      "change_percent": -2.75,
      "display_price": "29,822.52",
      "status": "down",
      "history": [
        30569.48,
        29950.82,
        29935.6,
        29187.551,
        29529.35,
        29490.279,
        29822.518
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-10-21 20:00:43"
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
      "price": 11505.556,
      "previous_close": 12236.79,
      "change": -731.234,
      "change_percent": -5.98,
      "display_price": "11,505.56",
      "status": "down",
      "history": [
        12208.79,
        11684.38,
        11581.21,
        11137.29,
        11316.34,
        11283.81,
        11505.556
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-10-21 20:00:44"
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
      "price": 16.72,
      "previous_close": 15.27,
      "change": 1.45,
      "change_percent": 9.5,
      "display_price": "16.72",
      "status": "up",
      "history": [
        15.27,
        16.87,
        16.46,
        19.99,
        18.44,
        17.31,
        16.72
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-10-21 20:00:44"
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
      "price": 1325.8,
      "previous_close": 1334.13,
      "change": -8.33,
      "change_percent": -0.62,
      "display_price": "1,325.80원",
      "status": "down",
      "history": [
        1334.13,
        1340.31,
        1339.35,
        1340.95,
        1333.43,
        1330.0,
        1325.8
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-10-21 20:00:44",
      "fx_averages": {
        "avg_1y": 1449.0,
        "avg_3y": 1401.1
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
      "price": 5735.66,
      "previous_close": 6384.24,
      "change": -648.58,
      "change_percent": -10.16,
      "display_price": "5,735.66",
      "status": "down",
      "history": [
        6035.35,
        6008.81,
        5554.22,
        5668.05,
        5768.01,
        5552.74
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-10-21 20:00:44"
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
      "price": 792.76,
      "previous_close": 849.19,
      "change": -56.43,
      "change_percent": -6.65,
      "display_price": "792.76",
      "status": "down",
      "history": [
        837.03,
        823.88,
        760.82,
        794.78,
        808.89,
        781.97
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-10-21 20:00:44"
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
      "updated_at": "2026-10-21 20:00:45"
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
      "updated_at": "2026-10-21 20:00:46"
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
      "price": 156.81,
      "previous_close": 170.11,
      "change": -13.3,
      "change_percent": -7.82,
      "display_price": "$156.81",
      "status": "down",
      "history": [
        166.56,
        159.83,
        156.22,
        150.44,
        156.58,
        153.99,
        156.81
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-10-21 20:00:46"
    }
  ],
  "news": [
    {
      "source": "Reuters",
      "title_ko": "Australian central banker says inflation outlook worse, unsure about November 금리 인상",
      "title_en": "Australian central banker says inflation outlook worse, unsure about November rate hike",
      "summary_ko": "Australian central banker says inflation outlook worse, unsure about November 금리 인상 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg, MarketWatch 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNMkpNZ19yZ05Hem9Oa0NPdGV1aUhGZzc3emJnVFFWVmZ3TUFBZkdXZlJqZmVCRHF6anpfSTdIODc0anNLa1VQbHpiN0VRejFRejZqck1RdkF0bXpVUzJCdmUwVVM2dHB2cmVxS2d6c3pUSl9WWTZWdHBBV0dDVzhCM0ZIQ015VUg2ZVlyQkRubU9OcWdHNm1tSHplbE9CbVR1eFdEU0wxcWM4eXg2TVBaSjRmWTdRaGkzdl9wcHc1QUM?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxNMkpNZ19yZ05Hem9Oa0NPdGV1aUhGZzc3emJnVFFWVmZ3TUFBZkdXZlJqZmVCRHF6anpfSTdIODc0anNLa1VQbHpiN0VRejFRejZqck1RdkF0bXpVUzJCdmUwVVM2dHB2cmVxS2d6c3pUSl9WWTZWdHBBV0dDVzhCM0ZIQ015VUg2ZVlyQkRubU9OcWdHNm1tSHplbE9CbVR1eFdEU0wxcWM4eXg2TVBaSjRmWTdRaGkzdl9wcHc1QUM%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 20 Oct 2026 22:14:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "New Zealand’s Year",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOeVFJQVhBQlh1YUItVTRicU00R2ZoVS1tNEFvbjlyRVB2a1M2Z041dmF1dmlkTkVQaUpEYjJyQk1OMFNNT2ItNURySnlldHpaOVB1RWkzMUMtdmFqUnQ2M2xzMnhzbUZfMWEtT09YQlgxRWR2SURSdC1uOE5LM29XVUgwdUg5NmN3bE9lcXdNZHdLcFR6Mk5lQW92T0gtVHNRaE1zNFByZWNzeERZblpZdDdhNFlHdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxOeVFJQVhBQlh1YUItVTRicU00R2ZoVS1tNEFvbjlyRVB2a1M2Z041dmF1dmlkTkVQaUpEYjJyQk1OMFNNT2ItNURySnlldHpaOVB1RWkzMUMtdmFqUnQ2M2xzMnhzbUZfMWEtT09YQlgxRWR2SURSdC1uOE5LM29XVUgwdUg5NmN3bE9lcXdNZHdLcFR6Mk5lQW92T0gtVHNRaE1zNFByZWNzeERZblpZdDdhNFlHdw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 금리 인상 call seen tight as inflation heats up",
          "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Euro zone inflation rises above 3%, cementing ECB 금리 인상 bets",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNWlU0ZGJQMWt6NVhpVng4SW1jUk1SM3NXZWlRZzliNnV5emhYeDRaVF9FYnA1aWNDUVphdW1hQTcwRWVOVGR1YjBfdm9sOUlWcFpCSnFwOVNubkh6VnZrTjRyMERVTWRKaXYzZHNaVjBZZ2hYT015OHgzb2o5S25uaG1OaFNGVzRpZk1XSDZMMVhhUUM1V19VbWktVnRmXy1YbEFUS3JxeGEtY0E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxNWlU0ZGJQMWt6NVhpVng4SW1jUk1SM3NXZWlRZzliNnV5emhYeDRaVF9FYnA1aWNDUVphdW1hQTcwRWVOVGR1YjBfdm9sOUlWcFpCSnFwOVNubkh6VnZrTjRyMERVTWRKaXYzZHNaVjBZZ2hYT015OHgzb2o5S25uaG1OaFNGVzRpZk1XSDZMMVhhUUM1V19VbWktVnRmXy1YbEFUS3JxeGEtY0E%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "Rising inflation could help spur a 연준(Fed) 금리 인상 this year. What does this mean if you’re considering a CD?",
          "original_url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNYlFvMWtSOWNmZXVoZFk0aWFyQnBEd1dlb3d3RDhFNTYxTWNUTlZaVXJwLUprLWFhOUx5SzJZZ0NSN3lsSFRvNmJPWVhZVkR5S05HdlhucmpqR002VWZwTkp6UGxMc19RX2ROR25TZEs2Y2xucklucFdSMDRZNVRDQV95aVlGZjhlWEpkSHV1ZHF0ZFVhVE9rcVBlUDFIX01SRUsxem1IcHZ3YV84X25kTEVjT2tMUl9aOWh0OWJDWmRLOExxV1pzbUh4aEZ4YmtlTzJnaw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMi1AFBVV95cUxNYlFvMWtSOWNmZXVoZFk0aWFyQnBEd1dlb3d3RDhFNTYxTWNUTlZaVXJwLUprLWFhOUx5SzJZZ0NSN3lsSFRvNmJPWVhZVkR5S05HdlhucmpqR002VWZwTkp6UGxMc19RX2ROR25TZEs2Y2xucklucFdSMDRZNVRDQV95aVlGZjhlWEpkSHV1ZHF0ZFVhVE9rcVBlUDFIX01SRUsxem1IcHZ3YV84X25kTEVjT2tMUl9aOWh0OWJDWmRLOExxV1pzbUh4aEZ4YmtlTzJnaw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:01:17"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Inflation, Weak Rupee Keep RBI Rate Hikes in Play, Minutes Show",
      "title_en": "Inflation, Weak Rupee Keep RBI Rate Hikes in Play, Minutes Show",
      "summary_ko": "Inflation, Weak Rupee Keep RBI Rate Hikes in Play, Minutes Show Bloomberg.com. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNMWhpMHYwZldralI3U3JBRXFBLVVuNjdwaE1GY1Vpbk9DWldZaTFicGhLbXRBVjZCYUFZZWVsVk9jaWhqalYyZXdTRktDNUpEaUFyYjNKUmhOdHpUS1hfRXVSSUZOaDc4ZGJSWGRXc2VkZEJvbWEzMWpHY2pyLWNWcWwwNm0zOGNYWUtRb1ZFUTFGWDRGVVNTYVJXTGdFc2FyR0JPZEx5Um5JejFOU08tenhB?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNMWhpMHYwZldralI3U3JBRXFBLVVuNjdwaE1GY1Vpbk9DWldZaTFicGhLbXRBVjZCYUFZZWVsVk9jaWhqalYyZXdTRktDNUpEaUFyYjNKUmhOdHpUS1hfRXVSSUZOaDc4ZGJSWGRXc2VkZEJvbWEzMWpHY2pyLWNWcWwwNm0zOGNYWUtRb1ZFUTFGWDRGVVNTYVJXTGdFc2FyR0JPZEx5Um5JejFOU08tenhB%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 21 Oct 2026 11:33:51 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "연준(Fed)'s table is set for a 금리 인상, a first under Warsh",
          "original_url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOTmR4eUlzVVZXLUFSSEpiLUs3UkxJMDYwVVpsU2o1REJIOUFSTlN3U2VBV2NRZ3hUTUNzSy1KRTNlODFaTmh6bGgtTFpCM3BCWE13c250dlBDTW5XaS1rWHpUMjV0cFJiSkxqN3g4OTVVZmJKN1dKSXZhRHZ2bW1Lbndrc3UxRGhjNG9LY01lZklaajE4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilAFBVV95cUxOTmR4eUlzVVZXLUFSSEpiLUs3UkxJMDYwVVpsU2o1REJIOUFSTlN3U2VBV2NRZ3hUTUNzSy1KRTNlODFaTmh6bGgtTFpCM3BCWE13c250dlBDTW5XaS1rWHpUMjV0cFJiSkxqN3g4OTVVZmJKN1dKSXZhRHZ2bW1Lbndrc3UxRGhjNG9LY01lZklaajE4%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "Odds of 미국 연방준비제도(연준) 금리 인상 surge as oil prices rip higher",
          "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPUWx3V1U4LVllRFN2ZUNCN3N5SUN0VF9Iakl4UVlSamwtUGFTNE1ZRXFzWmJMSUNaRnRZejE3V3NRMUVfNzU4Y012MGtaa1plNlUybkxycWRvQ3NKdTdtVVIzVWlIMG55ZHp3S2lyc3JmOEU3bHMtNFFvRkJleWlpYm9FNXPSAYoBQVVfeXFMTmRFOUNteTdsTVNuNXRycmx6YkxLVmVwWGQ4ZURXOVpjUGsxbkU3M1pyZzgxUVJEX2NjV1Jmc2hsY3hCaGpOSkM1UmNsRjFuUlJmYi1jLW1zYmlyOGZ4bWZYRDlCSklGYjVTVWdrWXFiU0Etb0l3NFgwdlRHNDU1YVFaQTllVDN4bmRn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihAFBVV95cUxPUWx3V1U4LVllRFN2ZUNCN3N5SUN0VF9Iakl4UVlSamwtUGFTNE1ZRXFzWmJMSUNaRnRZejE3V3NRMUVfNzU4Y012MGtaa1plNlUybkxycWRvQ3NKdTdtVVIzVWlIMG55ZHp3S2lyc3JmOEU3bHMtNFFvRkJleWlpYm9FNXPSAYoBQVVfeXFMTmRFOUNteTdsTVNuNXRycmx6YkxLVmVwWGQ4ZURXOVpjUGsxbkU3M1pyZzgxUVJEX2NjV1Jmc2hsY3hCaGpOSkM1UmNsRjFuUlJmYi1jLW1zYmlyOGZ4bWZYRDlCSklGYjVTVWdrWXFiU0Etb0l3NFgwdlRHNDU1YVFaQTllVDN4bmRn%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "September 연준(Fed) decision is now a coin flip as 금리 인상 odds increase post Warsh",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNZWlrekRPMjZoeC1sSXNwR29MZy1pT0w2UTVRcC1JdjUzUTZDaTFkWi1DTVEtVlJzU1JHd3ZTMUhQLTBJMjV0cUU2MWdsRGphU0F3UE9NbGUtcFVUcE1FZGZFNjczSVN5WnM2NF9BUFhKUVRMbjhJMXQ1ZjhUMlhLV2xxOE04eEY1Z0F0am5qNXZacFRrQkJ2dDhnY3NNSWFfTUxCd3RR0gGrAUFVX3lxTE1iME12QXVKVkQ4QTJVSHg1WGpwd0cwZEZCQkt2eEdlQy12dldQUmpEZEp0bkFsVEJZTG1GRFRWSmJIbExpS3lSS3lYeHBEbzNKVWYyOU9SeW5pTUZNcGVMOUNFb3hya3lPaVFSVFh5TXp2SXJ2QjBkOS0wY3dvZzl1V21tQ2xXNUQ1R0VUWG9PWWo1M25aNG5ZdHNhSU9kNDVvOVVrOF80SXN3UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxNZWlrekRPMjZoeC1sSXNwR29MZy1pT0w2UTVRcC1JdjUzUTZDaTFkWi1DTVEtVlJzU1JHd3ZTMUhQLTBJMjV0cUU2MWdsRGphU0F3UE9NbGUtcFVUcE1FZGZFNjczSVN5WnM2NF9BUFhKUVRMbjhJMXQ1ZjhUMlhLV2xxOE04eEY1Z0F0am5qNXZacFRrQkJ2dDhnY3NNSWFfTUxCd3RR0gGrAUFVX3lxTE1iME12QXVKVkQ4QTJVSHg1WGpwd0cwZEZCQkt2eEdlQy12dldQUmpEZEp0bkFsVEJZTG1GRFRWSmJIbExpS3lSS3lYeHBEbzNKVWYyOU9SeW5pTUZNcGVMOUNFb3hya3lPaVFSVFh5TXp2SXJ2QjBkOS0wY3dvZzl1V21tQ2xXNUQ1R0VUWG9PWWo1M25aNG5ZdHNhSU9kNDVvOVVrOF80SXN3UQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Watch Inflation Jolt to Fade, 연준(Fed) to Stay on Sidelines",
          "original_url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQX2k0LXNpeGdYYmZRRW5hSjNyaFd1NU9vaTNYQ2E4dzg2VHNfckJBcHhQcE9aRVhvQ0Q2NG16bkh3aEdKQktmcTdRd2pOeURNY3ZkQTdPWWlheHVkcUhseHhMYnBtUExSRmc1eDgxQ3p4d2pOV2cwM0thYlZDWHVscEFjaVNnWHY5WDZqLV9MelZMX1NXSkp6Zzhvek5xRi1fS2ZBUA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipAFBVV95cUxQX2k0LXNpeGdYYmZRRW5hSjNyaFd1NU9vaTNYQ2E4dzg2VHNfckJBcHhQcE9aRVhvQ0Q2NG16bkh3aEdKQktmcTdRd2pOeURNY3ZkQTdPWWlheHVkcUhseHhMYnBtUExSRmc1eDgxQ3p4d2pOV2cwM0thYlZDWHVscEFjaVNnWHY5WDZqLV9MelZMX1NXSkp6Zzhvek5xRi1fS2ZBUA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:01:38"
    },
    {
      "source": "Reuters",
      "title_ko": "UK jobs market shows some recovery signs as BoE mulls 금리 인상",
      "title_en": "UK jobs market shows some recovery signs as BoE mulls rate hike",
      "summary_ko": "UK jobs market shows some recovery signs as BoE mulls 금리 인상 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Reuters, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNUmZlU01BMnM1M2hmTVcybjZ5RkZFdWRLcnU1cllLaTN4Z0hwRHZnVTdJeEFRQ1hOSFZJb2N0VGpCY0tKVHNlVUZXSERMS2hCcnVuRFhKU1o4SDZsYVpGUFJtQlFLYktRUzFocFBUQVFEVFFSd0JiR2pyZFZvNXU1TTN6RGNfa3RMNEljRlNxVFV6alZOb2lPTUI2UkZYV2pPNmc?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNUmZlU01BMnM1M2hmTVcybjZ5RkZFdWRLcnU1cllLaTN4Z0hwRHZnVTdJeEFRQ1hOSFZJb2N0VGpCY0tKVHNlVUZXSERMS2hCcnVuRFhKU1o4SDZsYVpGUFJtQlFLYktRUzFocFBUQVFEVFFSd0JiR2pyZFZvNXU1TTN6RGNfa3RMNEljRlNxVFV6alZOb2lPTUI2UkZYV2pPNmc%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 20 Oct 2026 06:09:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "연준(Fed)'s Williams sees no urgency for next 금리 인상",
          "original_url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNQW15c0ZrS2lrMUlHZDZjZlpxRG5GazRlendBenpXeWZSR3NCaXBFLXA5LVBlbWNEeDNsWnRnS25CYWwxc3AzRDhrTjhUZTNZcl8xN2VDT3JtZHk1eVpHUzFaaXpVVy1HbUk1Y3hKOEtoTmxpNTVwWkJHZXVvTWl1cm5QdWVpWXhFQkxBdmt4enRJRkF3NUlxTQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimAFBVV95cUxNQW15c0ZrS2lrMUlHZDZjZlpxRG5GazRlendBenpXeWZSR3NCaXBFLXA5LVBlbWNEeDNsWnRnS25CYWwxc3AzRDhrTjhUZTNZcl8xN2VDT3JtZHk1eVpHUzFaaXpVVy1HbUk1Y3hKOEtoTmxpNTVwWkJHZXVvTWl1cm5QdWVpWXhFQkxBdmt4enRJRkF3NUlxTQ%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "Markets see Warsh endorsing a 금리 인상 in September. Not everyone is convinced",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNd1ZnbDVGTERQNngxeERKWW5PWUdJa2xhVGJFSkoxLUhqYzV2ZHpMVllqeC1jdGc2ZFh0Tlhka1V5ajRvaXFndk1INkhDTUNnTU9Ydk01RGhiNjRrTDZXdDNESzFSaXdQeFBCeG1ndXpvX01mczUwQVo3N0stbDBJcjNsZG1TWTg0Ql9zYUFhSF9MbzUzakRrcHBVZWlYd3l0eEFIV0ZRczRpaTVRbVV6QklKd3kyQdIBuwFBVV95cUxOMGl2dW1jTnM4bjlTY1JGcWk2RFI5alpkQzZsS1hwUy1hSFlqUDJzb0NEekx3VWxPVmVkQ1F6NVNraDdGX0ZWdExVb3VjbW80OFB5TFBZMkt6RjllRVQzMHhIR3pQYkc3QUFTR2QydHNuVXg4cjdUUkJXeUxzbzcwdnM4ZlFKU0ZwLWtfejVyeEJSeG9vM1A2QmZrMGROVjdiaXJqWXJlNFZYZkx2VU8yTVlXblkzSG5TRVJr?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNd1ZnbDVGTERQNngxeERKWW5PWUdJa2xhVGJFSkoxLUhqYzV2ZHpMVllqeC1jdGc2ZFh0Tlhka1V5ajRvaXFndk1INkhDTUNnTU9Ydk01RGhiNjRrTDZXdDNESzFSaXdQeFBCeG1ndXpvX01mczUwQVo3N0stbDBJcjNsZG1TWTg0Ql9zYUFhSF9MbzUzakRrcHBVZWlYd3l0eEFIV0ZRczRpaTVRbVV6QklKd3kyQdIBuwFBVV95cUxOMGl2dW1jTnM4bjlTY1JGcWk2RFI5alpkQzZsS1hwUy1hSFlqUDJzb0NEekx3VWxPVmVkQ1F6NVNraDdGX0ZWdExVb3VjbW80OFB5TFBZMkt6RjllRVQzMHhIR3pQYkc3QUFTR2QydHNuVXg4cjdUUkJXeUxzbzcwdnM4ZlFKU0ZwLWtfejVyeEJSeG9vM1A2QmZrMGROVjdiaXJqWXJlNFZYZkx2VU8yTVlXblkzSG5TRVJr%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:01:53"
    },
    {
      "source": "Bloomberg",
      "title_ko": "DOJ Not Reopening Criminal Probe Into 파월 의장, Blanche Says",
      "title_en": "DOJ Not Reopening Criminal Probe Into Powell, Blanche Says",
      "summary_ko": "DOJ Not Reopening Criminal Probe Into 파월 의장, Blanche Says Bloomberg.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQUlNMeDN6ZlV0NC1DZTl0emNOaV92S1dPUVRwbFpNUlhucHFPaWNJajVhOG1hMFhVZ2VnRk5CaUZFalFNeUJKZVdBRGd5dE1zR19sZVM3RE5OLXhhNUxuS2RKajc3dVZnekUxNmEyV0tBQkp2M1NMUGNQVTdUbU5Nem9sZl9EY1o3UnNSemNwNVU1aGFrSVNIX2loWjdpb2szQXBobmxScHdEa3hFNGNxTGJ2eHU?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxQUlNMeDN6ZlV0NC1DZTl0emNOaV92S1dPUVRwbFpNUlhucHFPaWNJajVhOG1hMFhVZ2VnRk5CaUZFalFNeUJKZVdBRGd5dE1zR19sZVM3RE5OLXhhNUxuS2RKajc3dVZnekUxNmEyV0tBQkp2M1NMUGNQVTdUbU5Nem9sZl9EY1o3UnNSemNwNVU1aGFrSVNIX2loWjdpb2szQXBobmxScHdEa3hFNGNxTGJ2eHU%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 02 Oct 2026 07:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-21 20:02:00"
    },
    {
      "source": "MarketWatch",
      "title_ko": "Traders expecting a back-to",
      "title_en": "Traders expecting a back-to-back rate hike from the Fed in October may have gotten ahead of themselves",
      "summary_ko": "Traders expecting a back-to 관련 핵심 동향이 발표되었습니다. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. MarketWatch뿐만 아니라 Bloomberg, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "Traders now see little chance of a 연준(Fed) 금리 인상 in October after weak jobs report",
          "original_url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "A July 금리 인상 from the 연준(Fed)? The odds are rising",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxONUdmS2Z4R0JWQjJVblhOSnRtcWJXUEVxVFBqcG9JdWhBcjZ1RXVya2ZZNjNqTDVQY2RiSm5xbEUyVlRDSjg5MExzXzdwNW83d2tTaFE3SVBwS1E5VVVRbkpZSmpCekNvZi1iTnJaMUcyb1c3WTk0R1RFQjZUczNOQ2NKQ0lpZW5Ha2hVR19Ld1nSAZYBQVVfeXFMTk1kR0FPT1VVTUdoSDRRZnN5dUtfWkUxdF91emZuMHFxU3p0ZGdkTkxncGpLQ0RaVDFsNjROSDdtRk51dkcySng5cUNVcERaOERSVWhUQzYzcUZhNnEycFYwc1BxN25qSGR4N0NqUEVSTFVwNENjMEpmbUFGTE1mQnk4NEt3bERFUHp1YzI4OWZ1bnVmdFFn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxONUdmS2Z4R0JWQjJVblhOSnRtcWJXUEVxVFBqcG9JdWhBcjZ1RXVya2ZZNjNqTDVQY2RiSm5xbEUyVlRDSjg5MExzXzdwNW83d2tTaFE3SVBwS1E5VVVRbkpZSmpCekNvZi1iTnJaMUcyb1c3WTk0R1RFQjZUczNOQ2NKQ0lpZW5Ha2hVR19Ld1nSAZYBQVVfeXFMTk1kR0FPT1VVTUdoSDRRZnN5dUtfWkUxdF91emZuMHFxU3p0ZGdkTkxncGpLQ0RaVDFsNjROSDdtRk51dkcySng5cUNVcERaOERSVWhUQzYzcUZhNnEycFYwc1BxN25qSGR4N0NqUEVSTFVwNENjMEpmbUFGTE1mQnk4NEt3bERFUHp1YzI4OWZ1bnVmdFFn%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Traders Pull Back on October 연준(Fed) Hike Bets After Cool PCE Data",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOMm5SVnI0VE5OT1EySk5mWndReTFpb25SZXNlcGduOXlQc2hBbTFhQllCVFJIc1FNcGNvTWRBRUNldVVKa0hSZERtd2dyNlA0TG5aTFpxZERCR1M1RUEzeXpySHVSWkQ1OEFaQUstRXZGdGd4M290dVZBR1UwU1dNa2w2TWE2d0hOS28ydjN5SDAwcnp4TWlZUEt5d3lpRklfbEpLR0xKTjBGcXVGQVZoVjBTaw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOMm5SVnI0VE5OT1EySk5mWndReTFpb25SZXNlcGduOXlQc2hBbTFhQllCVFJIc1FNcGNvTWRBRUNldVVKa0hSZERtd2dyNlA0TG5aTFpxZERCR1M1RUEzeXpySHVSWkQ1OEFaQUstRXZGdGd4M290dVZBR1UwU1dNa2w2TWE2d0hOS28ydjN5SDAwcnp4TWlZUEt5d3lpRklfbEpLR0xKTjBGcXVGQVZoVjBTaw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:02:18"
    },
    {
      "source": "Reuters",
      "title_ko": "Foreign outflows hit Asian stocks as Iran war drives oil shock fears",
      "title_en": "Foreign outflows hit Asian stocks as Iran war drives oil shock fears",
      "summary_ko": "Foreign outflows hit Asian stocks as Iran war drives oil shock fears Reuters. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Reuters뿐만 아니라 Reuters, Financial Times 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Tue, 24 Mar 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Financial Times",
          "title_ko": "US inflation jumps to 3.7% as Iran war drives up prices",
          "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNaTVDMnlSRThVWkxaaEY1cnpwU3VJOFZTbjA0cXYxR0l1WEcyQks5X2tIeDRSSkpsV29RU0xLZFJsTnMwNE5SdC1oWXpHdGFVY0pUOVVxenlSbDNTRVMzTlNLeENwWEFIRFl2Uk1sb1hMdVYtWVVndEw1RGpyT0tVd0ZSOWQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihAFBVV95cUxNaTVDMnlSRThVWkxaaEY1cnpwU3VJOFZTbjA0cXYxR0l1WEcyQks5X2tIeDRSSkpsV29RU0xLZFJsTnMwNE5SdC1oWXpHdGFVY0pUOVVxenlSbDNTRVMzTlNLeENwWEFIRFl2Uk1sb1hMdVYtWVVndEw1RGpyT0tVd0ZSOWQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Foreign inflows into Asian bonds hit six",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOeXJuTERwN0d6Y2tTZG5Ra214UmhVa29SRHRzSG9kdFY3QThsTXlPUWlTT1VyRGgxbVJ2TnpTcWJCa1RMaGZJUDVfUVVlWUJJZUVBYU1Ba0haNFRuUHhqN2d2b0Z6NUdHdDRVcUk5eDRDa0s3WmJxRGF3NmpUN2N5dThKWHdtWTRrazBBeENTM0FNdnhXTm9FeUw0Uzdma2FNYk1oVXhUbzU3bEM5azItNlJZTkxYUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxOeXJuTERwN0d6Y2tTZG5Ra214UmhVa29SRHRzSG9kdFY3QThsTXlPUWlTT1VyRGgxbVJ2TnpTcWJCa1RMaGZJUDVfUVVlWUJJZUVBYU1Ba0haNFRuUHhqN2d2b0Z6NUdHdDRVcUk5eDRDa0s3WmJxRGF3NmpUN2N5dThKWHdtWTRrazBBeENTM0FNdnhXTm9FeUw0Uzdma2FNYk1oVXhUbzU3bEM5azItNlJZTkxYUQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:02:32"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Qatar Energy Chief Says Bessent ‘Wrong’ About Hormuz Future",
      "title_en": "Qatar Energy Chief Says Bessent ‘Wrong’ About Hormuz Future",
      "summary_ko": "Qatar Energy Chief Says Bessent ‘Wrong’ About Hormuz Future Bloomberg.com. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Bloomberg뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "Bessent Says Hormuz Will Soon Be ‘Worthless’ as Oil Bypasses It",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxObVVWWjNNeENodUlKQnA4YTRSa0Nlc0ZZbHhaQ1d0MjlLcGNGSjQtUmhic0VldGZqNnJyc2ZxcXVRWExTSlN5UkZRMEo2enMxQTh3S2xYdkI3azVFalJOclYyQU5KRHF1cGU3andZb0tIZnhSYUg1RTVzUjlYYi12Q0ZaU1lLWUtUc2NsTmNGUWV1MnM2SWdCTjlHOFpmZEJpby1CYzAyc2J0Z0s0cGtPRUJB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxObVVWWjNNeENodUlKQnA4YTRSa0Nlc0ZZbHhaQ1d0MjlLcGNGSjQtUmhic0VldGZqNnJyc2ZxcXVRWExTSlN5UkZRMEo2enMxQTh3S2xYdkI3azVFalJOclYyQU5KRHF1cGU3andZb0tIZnhSYUg1RTVzUjlYYi12Q0ZaU1lLWUtUc2NsTmNGUWV1MnM2SWdCTjlHOFpmZEJpby1CYzAyc2J0Z0s0cGtPRUJB%3Foc%3D5"
        },
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
          "source": "Bloomberg",
          "title_ko": "Trump to Levy More Chip Tariffs, Exemptions for US Manufacturing",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPdHUteWpWbWwxR1Rhb0pmYm9aeVJLUlZWdVFrbnZCMHVCdHA2NlhPeW5PLTI3R1BaV3ItNjNvclQ3Qk1FMC1sV1B6NDN5SUJ3cG5VVGRQajQtejktSFg1NEkydklFOGIwMXRBTzZRa2RHdHk4TTQ5WWpZcVJmUFpMOTBVOXNGaTNvcE9GYXJ1QlVMU3M4akwwV3lPSUhmSHIyeGlabk11cUpwY2ZVY0g0d05HMzU?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxPdHUteWpWbWwxR1Rhb0pmYm9aeVJLUlZWdVFrbnZCMHVCdHA2NlhPeW5PLTI3R1BaV3ItNjNvclQ3Qk1FMC1sV1B6NDN5SUJ3cG5VVGRQajQtejktSFg1NEkydklFOGIwMXRBTzZRa2RHdHk4TTQ5WWpZcVJmUFpMOTBVOXNGaTNvcE9GYXJ1QlVMU3M4akwwV3lPSUhmSHIyeGlabk11cUpwY2ZVY0g0d05HMzU%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:02:54"
    },
    {
      "source": "Bloomberg",
      "title_ko": "US Tells Iran’s Trade Partners to Cut Ties or Face Sanctions",
      "title_en": "US Tells Iran’s Trade Partners to Cut Ties or Face Sanctions",
      "summary_ko": "US Tells Iran’s Trade Partners to Cut Ties or Face Sanctions Bloomberg.com. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPMDBjUWhER2FqdU1MVFF6MVR6QWZEY194a29CcWRvZUtjQUtzcUM3M1RqRlpDbTFjRXVSTGZ6d3RQb3JZanNieDRMSS1qRHRqQ29PVzk2bUdob1RmX2ZXRXZITnVxb2ktNnA2WXRWVVZWRmthY1lLeWwxOTJobDhXV2pWZ0JvUUNKQkJpUUtjN2NYQXNySi1nSWdtSi1wVDY4SFdNdA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipAFBVV95cUxPMDBjUWhER2FqdU1MVFF6MVR6QWZEY194a29CcWRvZUtjQUtzcUM3M1RqRlpDbTFjRXVSTGZ6d3RQb3JZanNieDRMSS1qRHRqQ29PVzk2bUdob1RmX2ZXRXZITnVxb2ktNnA2WXRWVVZWRmthY1lLeWwxOTJobDhXV2pWZ0JvUUNKQkJpUUtjN2NYQXNySi1nSWdtSi1wVDY4SFdNdA%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 24 Aug 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Rubio says Trump to take up to 60 days to weigh Russia sanctions",
          "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNRlRkQlBQYXFvck1VQUYxcVpwM2dEVDMwQThIY3ZHRldBd0M0dmV5NXFnZlBXMnpuUnozQlhLbkg4ZjZCT3kzVW5mcnl3RVEwUXRpdUJsZGViRlE1MFdJbHZWZ3pRTXNOUDQtOTRsQU5nSzd4a3d5Z3c2dTkzZWZSNlZsbXZBamFSMS1qVEVnaHc2MTZJUHZ4YU1zS0hfNVM4eVE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNRlRkQlBQYXFvck1VQUYxcVpwM2dEVDMwQThIY3ZHRldBd0M0dmV5NXFnZlBXMnpuUnozQlhLbkg4ZjZCT3kzVW5mcnl3RVEwUXRpdUJsZGViRlE1MFdJbHZWZ3pRTXNOUDQtOTRsQU5nSzd4a3d5Z3c2dTkzZWZSNlZsbXZBamFSMS1qVEVnaHc2MTZJUHZ4YU1zS0hfNVM4eVE%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Yellen Says Trump ‘Appalling’ on US Allies, Backs Retaliation",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQU3k4dVlrRG9WeENKdlJoMUVyR1BRTWlrV0dMYm9SYWJERXk5cUhUSjlDMURGM3IyNndwUl9wWVR6UGVSaDgwUElVRS1WNkJCZUlGZXVyQWN3dTZNcHdWc29HUEMxM2hTbGxhZkZJWXVMZnA5Qkl1OUkySUp0ZnBkY3BYRHZQcmYwVjFGM2xibFRNdnJGdUJfREgwc21Ca0p5RFNlRk55NUhWVGdWVHc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxQU3k4dVlrRG9WeENKdlJoMUVyR1BRTWlrV0dMYm9SYWJERXk5cUhUSjlDMURGM3IyNndwUl9wWVR6UGVSaDgwUElVRS1WNkJCZUlGZXVyQWN3dTZNcHdWc29HUEMxM2hTbGxhZkZJWXVMZnA5Qkl1OUkySUp0ZnBkY3BYRHZQcmYwVjFGM2xibFRNdnJGdUJfREgwc21Ca0p5RFNlRk55NUhWVGdWVHc%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "US Goods",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOUHNTVzVsbGNfYUhVUHF2MURMRFNVNFctLXBJMG95WFQ2REwzVDB4Y2hHVUsxOXNWUXZZQkhZTXQ2TmdfU0M1QUhwb0lpVmdCYmtBUFVCV1kyUERaRVFjTTJTQXlZQjZabXBOOXNELThtcldrYkdxZ0JNY0pqUHAxNzJySUVFTFRDZVU2RTlyM1k1Q2pxTjRJalBRNkhtWnc3YWRNbjEyUi1DY2hQSDRaNTZKLWE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxOUHNTVzVsbGNfYUhVUHF2MURMRFNVNFctLXBJMG95WFQ2REwzVDB4Y2hHVUsxOXNWUXZZQkhZTXQ2TmdfU0M1QUhwb0lpVmdCYmtBUFVCV1kyUERaRVFjTTJTQXlZQjZabXBOOXNELThtcldrYkdxZ0JNY0pqUHAxNzJySUVFTFRDZVU2RTlyM1k1Q2pxTjRJalBRNkhtWnc3YWRNbjEyUi1DY2hQSDRaNTZKLWE%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Asian bonds see first monthly foreign outflow in five months",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQUUY2a3ZIXzg1a1h3b3dVTnp5MlFJM2p0U1MwcjJveHVnVEpKam45MUdwZmFjVHBCRlBYck1DUmlvSDRvdUFFWG51RkY1X3BjekY5NmFfRVg0bUJxWnNfTUFVaGR6Sk9jVWZndndXX2QyNXRBVHl5Nkhxcy1hWE5ZTlA2cWV4aExTYW9wV0xYdDJFQVd0dUx0N3VVRVNPanZMYjZHaDNxb0o?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxQUUY2a3ZIXzg1a1h3b3dVTnp5MlFJM2p0U1MwcjJveHVnVEpKam45MUdwZmFjVHBCRlBYck1DUmlvSDRvdUFFWG51RkY1X3BjekY5NmFfRVg0bUJxWnNfTUFVaGR6Sk9jVWZndndXX2QyNXRBVHl5Nkhxcy1hWE5ZTlA2cWV4aExTYW9wV0xYdDJFQVd0dUx0N3VVRVNPanZMYjZHaDNxb0o%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:03:16"
    },
    {
      "source": "한국경제",
      "title_ko": "美 철강 관세 수혜, 전극·설비·전력으로 번진다 [오기자의 미주ㅊㅊ+]",
      "title_en": "",
      "summary_ko": "美 철강 관세 수혜, 전극·설비·전력으로 번진다 [오기자의 미주ㅊㅊ+] 한국경제. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. 한국경제뿐만 아니라 한국경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1sWklqRFhUU1VxQ2xXRDhlVWtzN3J6TlI2NHE3YVAxNUpmdGNXUU5yMk9RZ0c4OER6TGx2WnhOSmx5QzVGRGQ0N0hQaFJXckRmMVJDeFNyVEpldw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1sWklqRFhUU1VxQ2xXRDhlVWtzN3J6TlI2NHE3YVAxNUpmdGNXUU5yMk9RZ0c4OER6TGx2WnhOSmx5QzVGRGQ0N0hQaFJXckRmMVJDeFNyVEpldw?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 20 Oct 2026 05:31:14 GMT",
      "related_articles": [
        {
          "source": "한국경제",
          "title_ko": "관세 덕에 실적 뛴 美 철강주…주가는 엇갈렸다 [오기자의 미주ㅊㅊ]",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE41RlFTTE11dzNwQlZZN0owdGtvcVFQRWZ1b2ctTVhybDZadGI5M3ZPY1VBb196Qmc4T3IxRWctbXhxM0wzY0I1bFhqaElwQndkQVN5MW5yOC0xQQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE41RlFTTE11dzNwQlZZN0owdGtvcVFQRWZ1b2ctTVhybDZadGI5M3ZPY1VBb196Qmc4T3IxRWctbXhxM0wzY0I1bFhqaElwQndkQVN5MW5yOC0xQQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-21 20:03:16"
    },
    {
      "source": "Reuters",
      "title_ko": "COMMENTARY: Iran war panic made South Korean stocks cheaper, not weaker",
      "title_en": "COMMENTARY: Iran war panic made South Korean stocks cheaper, not weaker",
      "summary_ko": "COMMENTARY: Iran war panic made South Korean stocks cheaper, not weaker Reuters. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Reuters에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQMkNMMjhiVi1CWV8yMHJ3M3V3VVZCaFVzZDU5UnRCcFhxVmt1YVVJNmlQLWlCVDJyTWRoNVRUVHdZTjNtQld6Snd6OVpRWXRBamlqUkxNMWxZcTVNYU1iYllCU1JGbERmNTI1aDZQNkgtQWRuSUl5cmFpck5MaWh2ZERvVVBzR0QwNnBfTHJnMzRRWUY4ZWcxZUZ5N3RnaTNDM2NtMjBHZlNTWWc?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxQMkNMMjhiVi1CWV8yMHJ3M3V3VVZCaFVzZDU5UnRCcFhxVmt1YVVJNmlQLWlCVDJyTWRoNVRUVHdZTjNtQld6Snd6OVpRWXRBamlqUkxNMWxZcTVNYU1iYllCU1JGbERmNTI1aDZQNkgtQWRuSUl5cmFpck5MaWh2ZERvVVBzR0QwNnBfTHJnMzRRWUY4ZWcxZUZ5N3RnaTNDM2NtMjBHZlNTWWc%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 26 Mar 2026 07:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-21 20:03:23"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "국채선물 약세 출발…간밤 대외금리 연동 속 외국인 순매수",
      "title_en": "",
      "summary_ko": "국채선물 약세 출발…간밤 대외금리 연동 속 외국인 순매수 연합인포맥스. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 연합인포맥스뿐만 아니라 KB Think 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1PWHVOQlFORmJXMTFaS2EwemRCdjl5LWk4UExfWDRJamNzWWs1T19Eb2F3cmJDbWtsa2t3aVU4aE11LUo1NVBxMFU4Q0NUZUcwVTk2Q1BHX3EzNFQ0VjV2ZnUtaHBzTXIyUVdKVmdDbm0?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1PWHVOQlFORmJXMTFaS2EwemRCdjl5LWk4UExfWDRJamNzWWs1T19Eb2F3cmJDbWtsa2t3aVU4aE11LUo1NVBxMFU4Q0NUZUcwVTk2Q1BHX3EzNFQ0VjV2ZnUtaHBzTXIyUVdKVmdDbm0?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 20 Oct 2026 02:09:36 GMT",
      "related_articles": [
        {
          "source": "KB Think",
          "title_ko": "국채선물 강세 출발…외국인 순매수·금통위 대기",
          "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1tWGtuZWlKb1BQem0wZkU1MlZCdjFTbW9pQkl1VVZaSWJ4TUprRG5nUmN5V3ZUc2xWbjFrWDFDUWg5MzN0NktXMHV6MGdILTdPVVQyRVl1SW5QSlpmOTB6NHhFa1J4Tl8tSTBlTGpXSEtDUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1tWGtuZWlKb1BQem0wZkU1MlZCdjFTbW9pQkl1VVZaSWJ4TUprRG5nUmN5V3ZUc2xWbjFrWDFDUWg5MzN0NktXMHV6MGdILTdPVVQyRVl1SW5QSlpmOTB6NHhFa1J4Tl8tSTBlTGpXSEtDUQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-21 20:03:23"
    },
    {
      "source": "중기이코노미",
      "title_ko": "중동 완화 기대에 유가↓…원달러 환율, 2년 만에 최저",
      "title_en": "",
      "summary_ko": "중동 완화 기대에 유가↓…원달러 환율, 2년 만에 최저 중기이코노미. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 중기이코노미뿐만 아니라 한국경제, 조세일보 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9PdkVsclNCTW9YY3BRdy1VS01wRjExa2l2UnB3bHRKRUpyM2hFX252azVETG9ESGFORnZNbjd1SDFmUnBZa0pSdW05QWNoLWxIUjBxSDE5UWUxdXllZ3pWbldNbDZjbHlic2c?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9PdkVsclNCTW9YY3BRdy1VS01wRjExa2l2UnB3bHRKRUpyM2hFX252azVETG9ESGFORnZNbjd1SDFmUnBZa0pSdW05QWNoLWxIUjBxSDE5UWUxdXllZ3pWbldNbDZjbHlic2c?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 21 Oct 2026 01:27:22 GMT",
      "related_articles": [
        {
          "source": "조세일보",
          "title_ko": "원·달러 환율, 1326.0원…달러, 중동 긴장 완화 기대에 약세",
          "original_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9JdzlSdUt2dTg0blJVWm1RcVd5Ung0R2s1VWl1S183ZXNIeVVEQTNRMjV3TWozUFplcy0yanYzSUZ0MWFSNExWYmFOSzY3V2xLMjBiLXlmdy0xVS1zWDNz?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9JdzlSdUt2dTg0blJVWm1RcVd5Ung0R2s1VWl1S183ZXNIeVVEQTNRMjV3TWozUFplcy0yanYzSUZ0MWFSNExWYmFOSzY3V2xLMjBiLXlmdy0xVS1zWDNz?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "[속보]원·달러 환율 '뚝'",
          "original_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1iMzdPVEFMQ1hCMV9DVlNpRVZvckNOOGx2Zm5FZFVGbFFKS0lDbGJ6U2cyRTVLb0RVQjhhQWJtN20zV2lHcTZTSWRISjNKNV9MRDVNRmt4Qy1FaVRyWHE0cm8xOEVhUXdBamdUVg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1iMzdPVEFMQ1hCMV9DVlNpRVZvckNOOGx2Zm5FZFVGbFFKS0lDbGJ6U2cyRTVLb0RVQjhhQWJtN20zV2lHcTZTSWRISjNKNV9MRDVNRmt4Qy1FaVRyWHE0cm8xOEVhUXdBamdUVg?oc=5"
        },
        {
          "source": "매일경제",
          "title_ko": "원달러환율 2년 1개웖만에 최저",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9nSFh5MGdvQWotWEZ1QldVVzBUMlBwNmhEZVd1Q1JZY0JlZ1hPYUNhZkdkbmpmM2NVc0o2YWhEdVY5TEJtNF9UUE9PSm83cjBTUXc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9nSFh5MGdvQWotWEZ1QldVVzBUMlBwNmhEZVd1Q1JZY0JlZ1hPYUNhZkdkbmpmM2NVc0o2YWhEdVY5TEJtNF9UUE9PSm83cjBTUXc?oc=5"
        }
      ],
      "crawled_at": "2026-10-21 20:03:23"
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
      "crawled_at": "2026-10-21 20:03:30"
    },
    {
      "source": "인더스트리뉴스",
      "title_ko": "코스피, 외국인 매수세에 3%대 반등…5735.66 마감",
      "title_en": "",
      "summary_ko": "코스피, 외국인 매수세에 3%대 반등…5735.66 마감 인더스트리뉴스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 인더스트리뉴스뿐만 아니라 머니투데이, 아시아경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE0wMS1CaGZMb0tVVlEweU5IcnZVNDgxLTYwT2FTb01DdmdVY2g5Y3FBS2Rob1ZjOExaYnRpbGpCdlZBcjBuQVpCeTJtam9kVUpHUTBWbDJzcjJlbW5fV3V2VmVFR0IzNDhueUdrV1pCdVNHdw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE0wMS1CaGZMb0tVVlEweU5IcnZVNDgxLTYwT2FTb01DdmdVY2g5Y3FBS2Rob1ZjOExaYnRpbGpCdlZBcjBuQVpCeTJtam9kVUpHUTBWbDJzcjJlbW5fV3V2VmVFR0IzNDhueUdrV1pCdVNHdw?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 21 Oct 2026 08:49:42 GMT",
      "related_articles": [
        {
          "source": "아시아경제",
          "title_ko": "[굿모닝증시]\"코스피, 급락분은 회복 전망…'삼전닉스' 외국인 수급 지켜봐야\"",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBpNXJmdXJiUHY1U3FQYkNCX1daZmlMb1NuYUIwUURfdTNuNmpsOXFDc09qUl8wSW16WVNqdnpoRU1YRE8xUF9YSmVXSnFRV2xqNVRvSHRrNjR6YUsyeWF3YQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBpNXJmdXJiUHY1U3FQYkNCX1daZmlMb1NuYUIwUURfdTNuNmpsOXFDc09qUl8wSW16WVNqdnpoRU1YRE8xUF9YSmVXSnFRV2xqNVRvSHRrNjR6YUsyeWF3YQ?oc=5"
        },
        {
          "source": "www.ebn.co.kr",
          "title_ko": "코스피, 외국인 '사자'에 3.29% 급등…매수 사이드카까지 발동",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFAzR05TeTFrS1VWX0xYT0FXREptSVVvR1B6VGNMNF9oNHhRM3dSdXpTNTRFVGlwbjdMZWI3RWhlcXRIbVdIckZsX0k2dEV2eUFCdmZKd3I4TzZEaVo5MTlzeUh5VVhEN1VU?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFAzR05TeTFrS1VWX0xYT0FXREptSVVvR1B6VGNMNF9oNHhRM3dSdXpTNTRFVGlwbjdMZWI3RWhlcXRIbVdIckZsX0k2dEV2eUFCdmZKd3I4TzZEaVo5MTlzeUh5VVhEN1VU?oc=5"
        },
        {
          "source": "아시아경제",
          "title_ko": "코스피, 외국인·기관 매도 확대에 3% 하락 마감",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9GY0F0d1F2QVVXamFFYmxSYmplS2UzQjJERUMwRlNhQUhBSlh6U21COWk1STJ2dUFmSko2ZHBNd3ZFSDZGMzR2MlNWeVdWOEhQMHZSVkZxMFhsR2p2YlR3Qg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9GY0F0d1F2QVVXamFFYmxSYmplS2UzQjJERUMwRlNhQUhBSlh6U21COWk1STJ2dUFmSko2ZHBNd3ZFSDZGMzR2MlNWeVdWOEhQMHZSVkZxMFhsR2p2YlR3Qg?oc=5"
        },
        {
          "source": "머니투데이",
          "title_ko": "코스피, 외국인·기관 매도에 3.73% 하락…5552.74 마감 - 머니투데이",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9KVW1JN013YlF2X0dNRE9BWUtfZ3pGQ0xaemUyN2tQNlA2X1MxbWdNdWdlVEZNVlZ0ai1pRno5S0JZQWQwWTR6QVB5OFNyVVFWbVVLd25sOGItblpVaTVQdTRzWDRGekhO0gFuQVVfeXFMTmxmY25SakdjN1RoZDdOTUpwdm1qQVVGc2lhMzJuLVRiMExsSUN2MzVoWHczLXlvLVgwMjRFV3VwSjhhUm1mRmJaZmxkRHpFZEk4LUw1QzJyTDdoY2lEd2RSbTE1M3NLRURFNGswMkE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9KVW1JN013YlF2X0dNRE9BWUtfZ3pGQ0xaemUyN2tQNlA2X1MxbWdNdWdlVEZNVlZ0ai1pRno5S0JZQWQwWTR6QVB5OFNyVVFWbVVLd25sOGItblpVaTVQdTRzWDRGekhO0gFuQVVfeXFMTmxmY25SakdjN1RoZDdOTUpwdm1qQVVGc2lhMzJuLVRiMExsSUN2MzVoWHczLXlvLVgwMjRFV3VwSjhhUm1mRmJaZmxkRHpFZEk4LUw1QzJyTDdoY2lEd2RSbTE1M3NLRURFNGswMkE?oc=5"
        }
      ],
      "crawled_at": "2026-10-21 20:03:30"
    },
    {
      "source": "뉴시스",
      "title_ko": "\"무섭게 팔던 외국인, 매도 정점 찍었나…답은 환율에\"",
      "title_en": "",
      "summary_ko": "\"무섭게 팔던 외국인, 매도 정점 찍었나…답은 환율에\" 뉴시스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 뉴시스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1lVEE4enhEdWtVeGlmZ3ZQcWxFbWx1TW5EbjV6OGxmU2syNWlMS2xfMDloTlhwNDZXcnFFWmI4Y281V2F4RVdKd01kVHRZZmZMd0c0WWQ5WVpILUEtWFB2a9IBeEFVX3lxTE9MUVlqX0VCSjRwZl9UZk9TQWhsUW9RQ0NCUUxac3FHdHhhOF9ycnRlYlNtNTFPYklvSXpoNzVrUzYyd3RaZlFha3ZnMngyLUR4UjRnWkh4YXkzSFN3TnBMT0FuNjlRelhqQ3ljMkxQbXZQNnRrb2Rxdg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1lVEE4enhEdWtVeGlmZ3ZQcWxFbWx1TW5EbjV6OGxmU2syNWlMS2xfMDloTlhwNDZXcnFFWmI4Y281V2F4RVdKd01kVHRZZmZMd0c0WWQ5WVpILUEtWFB2a9IBeEFVX3lxTE9MUVlqX0VCSjRwZl9UZk9TQWhsUW9RQ0NCUUxac3FHdHhhOF9ycnRlYlNtNTFPYklvSXpoNzVrUzYyd3RaZlFha3ZnMngyLUR4UjRnWkh4YXkzSFN3TnBMT0FuNjlRelhqQ3ljMkxQbXZQNnRrb2Rxdg?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 21 Oct 2026 15:05:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-21 20:03:30"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "국토부 \"기준금리 인상 등 금융여건 변화…공급확대로 시장 안정 기반 강화\"",
      "title_en": "",
      "summary_ko": "국토부 \"기준금리 인상 등 금융여건 변화…공급확대로 시장 안정 기반 강화\" 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE8zbUF2emlqVERnRmxBbFROcWpOU0kwVEFYeU9MNTZJNGJsc3g2UDVOcjJRZjAwZ0hJb25pMjVaNC14aGlzUUlnX1lWRzIybG51d0tVTFpvMDdFbGdnbXh6ZGpJRGxCZWxMWml0aWM5UDI?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE8zbUF2emlqVERnRmxBbFROcWpOU0kwVEFYeU9MNTZJNGJsc3g2UDVOcjJRZjAwZ0hJb25pMjVaNC14aGlzUUlnX1lWRzIybG51d0tVTFpvMDdFbGdnbXh6ZGpJRGxCZWxMWml0aWM5UDI?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 18 Oct 2026 06:58:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-21 20:03:30"
    },
    {
      "source": "연합뉴스",
      "title_ko": "한은 금통위, 오늘 기준금리 결정…동결 무게",
      "title_en": "",
      "summary_ko": "한은 금통위, 오늘 기준금리 결정…동결 무게 연합뉴스TV. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합뉴스뿐만 아니라 KBS 뉴스, 연합뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE01d0ExRlBIS2JEWUc5T1VXZGVoemE2cmc2Y2NSMGZISWVWNEYycURiU3hLYzV5TzBOUGtCX2RtN1NZdUlQV002MkQ0VVNGbHdOdi15eXRxY0JjUWZPNHpfbXFSb0xOajA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE01d0ExRlBIS2JEWUc5T1VXZGVoemE2cmc2Y2NSMGZISWVWNEYycURiU3hLYzV5TzBOUGtCX2RtN1NZdUlQV002MkQ0VVNGbHdOdi15eXRxY0JjUWZPNHpfbXFSb0xOajA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 21 Oct 2026 19:47:00 GMT",
      "related_articles": [
        {
          "source": "KBS 뉴스",
          "title_ko": "오늘 한은 금통위 기준금리 결정…‘동결’ 전망 우세",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1BNDlTV2xUSGJodlVRQzFTM3hBREJLUDVYODF0M1lHSTYwaWpLcm51UWRnRzlnbHNZMllyX01Hbm5FN1N4OTMwVU5WODZNVnNib1FHbUpLM2QyNVE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1BNDlTV2xUSGJodlVRQzFTM3hBREJLUDVYODF0M1lHSTYwaWpLcm51UWRnRzlnbHNZMllyX01Hbm5FN1N4OTMwVU5WODZNVnNib1FHbUpLM2QyNVE?oc=5"
        },
        {
          "source": "YTN",
          "title_ko": "한은, 이번 주 기준금리 결정...시장은 동결 전망",
          "original_url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5xaWZsMHFMa1ozMy1oelFFZDhDV3FjZzRYTnJUak0zMmduOHg1Uk96MDNVbmR2SUVfNTBtdmwxNW1TcTJNRVdKZzljdGNWTVFoUkxWMG9hTnA2bWpGMWxZV1Z3SXNkVWhzR2dORkVLUkZNMk1pZGc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5xaWZsMHFMa1ozMy1oelFFZDhDV3FjZzRYTnJUak0zMmduOHg1Uk96MDNVbmR2SUVfNTBtdmwxNW1TcTJNRVdKZzljdGNWTVFoUkxWMG9hTnA2bWpGMWxZV1Z3SXNkVWhzR2dORkVLUkZNMk1pZGc?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "한은, 22일 기준금리 결정…숨고르기 전망",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1VTmQwZXd1d00wZlJNR0N0WXNuM3pack11amJlaXAzSU1zQ0xNVXp4clFoenNEZmEyamFyaEVESXpuUXJUckdVUlA1QXoxbDVzVGVIWUZ5Qm1MN3lwMmVoWmhLeVREUVk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1VTmQwZXd1d00wZlJNR0N0WXNuM3pack11amJlaXAzSU1zQ0xNVXp4clFoenNEZmEyamFyaEVESXpuUXJUckdVUlA1QXoxbDVzVGVIWUZ5Qm1MN3lwMmVoWmhLeVREUVk?oc=5"
        },
        {
          "source": "경향신문",
          "title_ko": "중국, 기준금리 결정 다양화한다",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBPTkJIei03Q1QybmNQaDJPVnoyY19JMTJ6aEFFVWhPT1B4VlVhX21FeUNtNkpmZnRUMVYzS3BNamJrRVBoT1Q0MEdnd3k3cU9MRzZLb0VoSTVzUdIBX0FVX3lxTFA5TVh6WVdtMXdnaUxMZG95aTdDaWZDZ2tiOE9ndXpxb2VXUHV1ZDh3WWJCM1h1cTgyV25JX0xHV19BT0VDTjB0bTV6UGlMLWpVM2dFd1pZQkh4a2g3R0tZ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBPTkJIei03Q1QybmNQaDJPVnoyY19JMTJ6aEFFVWhPT1B4VlVhX21FeUNtNkpmZnRUMVYzS3BNamJrRVBoT1Q0MEdnd3k3cU9MRzZLb0VoSTVzUdIBX0FVX3lxTFA5TVh6WVdtMXdnaUxMZG95aTdDaWZDZ2tiOE9ndXpxb2VXUHV1ZDh3WWJCM1h1cTgyV25JX0xHV19BT0VDTjB0bTV6UGlMLWpVM2dFd1pZQkh4a2g3R0tZ?oc=5"
        }
      ],
      "crawled_at": "2026-10-21 20:03:31"
    },
    {
      "source": "뉴스토마토",
      "title_ko": "4% 조달금리 허덕이는 카드사, 기준금리 인상여부 촉각",
      "title_en": "",
      "summary_ko": "4% 조달금리 허덕이는 카드사, 기준금리 인상여부 촉각 뉴스토마토. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 뉴스토마토에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1tcjVqU1BJLXluVk5IT2pQaWhiSTlvMTFsRGJWRTlRMmRaUWxLRXRicklBTVNSYnJaV29zdVg5N1RwSWJ2M0hKY00wSGRSNHBIRFI0MTcwbTNUQlZYdU9zZQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1tcjVqU1BJLXluVk5IT2pQaWhiSTlvMTFsRGJWRTlRMmRaUWxLRXRicklBTVNSYnJaV29zdVg5N1RwSWJ2M0hKY00wSGRSNHBIRFI0MTcwbTNUQlZYdU9zZQ?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 20 Oct 2026 04:20:49 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-21 20:03:31"
    },
    {
      "source": "매일경제",
      "title_ko": "실적 발표에는 널뛰는 주식…기준금리 변화 영향은 미미 한 까닭 [너드의 투자법]",
      "title_en": "",
      "summary_ko": "실적 발표에는 널뛰는 주식…기준금리 변화 영향은 미미 한 까닭 [너드의 투자법] 매일경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 매일경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9LVkpCQ1NmdHJNdUMxbXBaTXBSNjVOS2lpczZxQ2oxbm1ReFdfNTM3MmtlMzhrZkFYOUhubWp2aG9XeE41ZExwUUtoQjIyVVp4X29GOA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9LVkpCQ1NmdHJNdUMxbXBaTXBSNjVOS2lpczZxQ2oxbm1ReFdfNTM3MmtlMzhrZkFYOUhubWp2aG9XeE41ZExwUUtoQjIyVVp4X29GOA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 19 Oct 2026 08:51:51 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-21 20:03:31"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "\"3.25%가 최종 기준금리될 것…핵심 물가, 12월이 피크\"",
      "title_en": "",
      "summary_ko": "\"3.25%가 최종 기준금리될 것…핵심 물가, 12월이 피크\" 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1VRmhiZy1DY0ZEVm4tWnVEVnlxWG5LYXpodkZ3M1dHNWpveEJmMWY2MkNPTlFrLVRFcmIwZFQ1M09rUnZBQzVub0NjN2x0bnV0Y2M0MUtoeWVuYkNJTnZrQjVleW5wallNcExndkNOOEY?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1VRmhiZy1DY0ZEVm4tWnVEVnlxWG5LYXpodkZ3M1dHNWpveEJmMWY2MkNPTlFrLVRFcmIwZFQ1M09rUnZBQzVub0NjN2x0bnV0Y2M0MUtoeWVuYkNJTnZrQjVleW5wallNcExndkNOOEY?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 15 Oct 2026 10:09:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-21 20:03:31"
    },
    {
      "source": "Reuters",
      "title_ko": "TSMC's third",
      "title_en": "TSMC's third-quarter revenue surges to record, beating market forecast",
      "summary_ko": "TSMC's third 관련 핵심 동향이 발표되었습니다. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Bloomberg, Investing.com 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNeVBYZ3dYR1hTREs5alJLQ2RsTHl3d3NMRVhKVVpQb1pYem92N1ZDdWl6MjNpWmswZWZfa1h2ak5NSjRUS0QyVHBaUDBZdmRvOTBTYjc5WktHT29IZV9KQXdiMVlnTDY5Q2VNNEJMbHZXREJxMW9xdUM5TWdna1JURW45Y2pTMlNhc1JWZ09DUWU0MXlFUlpOcDRmRWJweV9ISGNNeWh1RjdRdDNNZ3VEM0g3ZGpFd0J1U3Iw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuwFBVV95cUxNeVBYZ3dYR1hTREs5alJLQ2RsTHl3d3NMRVhKVVpQb1pYem92N1ZDdWl6MjNpWmswZWZfa1h2ak5NSjRUS0QyVHBaUDBZdmRvOTBTYjc5WktHT29IZV9KQXdiMVlnTDY5Q2VNNEJMbHZXREJxMW9xdUM5TWdna1JURW45Y2pTMlNhc1JWZ09DUWU0MXlFUlpOcDRmRWJweV9ISGNNeWh1RjdRdDNNZ3VEM0g3ZGpFd0J1U3Iw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Wed, 07 Oct 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia’s Huang Touts Cybersecurity as Next Big Market for AI",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA%3Foc%3D5"
        },
        {
          "source": "Investing.com",
          "title_ko": "TSMC Q3 profit jumps 69% to record, beating expectations By Reuters",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNSERVSDlFcHlXU0ZUWHg2QlgtX2w2QUhLQV9vclFPWnVlUzZOX3ZCRWNaaEtiLVo3MzM1SUI2Q0VfRTNFcWczejBfcUprYzNORmtDbV9VYTFNTjJJbW95WlNtbnBEQi1adXo2bGZOYVBjdzdyaENhSUdhVUNWdkVmTFpZREc1ZXY0UzMtMDB1Vk9BVlhMWkw1aS1ONDdXbENmTERuWXI3bUVVWHNob3FkaA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxNSERVSDlFcHlXU0ZUWHg2QlgtX2w2QUhLQV9vclFPWnVlUzZOX3ZCRWNaaEtiLVo3MzM1SUI2Q0VfRTNFcWczejBfcUprYzNORmtDbV9VYTFNTjJJbW95WlNtbnBEQi1adXo2bGZOYVBjdzdyaENhSUdhVUNWdkVmTFpZREc1ZXY0UzMtMDB1Vk9BVlhMWkw1aS1ONDdXbENmTERuWXI3bUVVWHNob3FkaA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:03:45"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Drops",
      "title_en": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Drops",
      "summary_ko": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Drops Bloomberg.com. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "Nvidia wins fast",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNUklvMHh4T2thUkdNSndrQ3BVOTZjalQwRnJ2ZFdhb3Q4aC1NT2k2LTBLX1AxZmlHdTdheHp1ZDF1ZGVSd2JLc3VFUU1ycWRndnRmS2ZyYVpGeU52OU9IQU5qVHdJb1BXNjJ1MlN4MF9aajQ5QXhmQnhYTXowWEFUa29BQkYySzBxeG1CU0Z0MHB6U3psLU1EcTB4Z3N2dkVYSFM3cEgtNlQ4Uk5VTlE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNUklvMHh4T2thUkdNSndrQ3BVOTZjalQwRnJ2ZFdhb3Q4aC1NT2k2LTBLX1AxZmlHdTdheHp1ZDF1ZGVSd2JLc3VFUU1ycWRndnRmS2ZyYVpGeU52OU9IQU5qVHdJb1BXNjJ1MlN4MF9aajQ5QXhmQnhYTXowWEFUa29BQkYySzBxeG1CU0Z0MHB6U3psLU1EcTB4Z3N2dkVYSFM3cEgtNlQ4Uk5VTlE%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia in Talks to Back Firmus After IPO Flop, Report Says",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOQ09GZ1FuR1F4Q05xYXNoTkVZQVVTTjNkaUg2cGhwRjFTQTFEaDBJOHh3Nlp2d1ZQM0stcEQzOGhwb013akJBUTlTaHU4Tl9IWng2VFhDdXcxc2l2RVpjcERuNS1WdFhPYUhmWjBmZ1JhMmtxelhwTUEwS1pJb0I1ZWtDYjJnUi1NNXpUdDJNSHotZVdaaFFnVXBjb2dRUVFRNFk4NW5hb2kyOEVLNFRSQ21Yaw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOQ09GZ1FuR1F4Q05xYXNoTkVZQVVTTjNkaUg2cGhwRjFTQTFEaDBJOHh3Nlp2d1ZQM0stcEQzOGhwb013akJBUTlTaHU4Tl9IWng2VFhDdXcxc2l2RVpjcERuNS1WdFhPYUhmWjBmZ1JhMmtxelhwTUEwS1pJb0I1ZWtDYjJnUi1NNXpUdDJNSHotZVdaaFFnVXBjb2dRUVFRNFk4NW5hb2kyOEVLNFRSQ21Yaw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia's China AI",
          "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOZ2lCcTJZLWVsU3NJWjJRV2xZd0RXM1NtbWNnQUtfb1RsSjlNVmFEWnVxYVJ5Y0pXS0lWV284NlVCWkp2Qy1jbm5na2ZFeE5BYmNlWFVaVGttNElacjE1SGlaeVBOc1J5Z042bUlOS3JPbWpHcloxVDF5X3B2NG5hSEdCcHp0SGswU3d5VWNNWE02bE1KS0VyTVROTlJxUTRFUzNQM3hrbERWWWh5X21pSFg2ajBBOG02cXdzS1UyV09MY0k?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxOZ2lCcTJZLWVsU3NJWjJRV2xZd0RXM1NtbWNnQUtfb1RsSjlNVmFEWnVxYVJ5Y0pXS0lWV284NlVCWkp2Qy1jbm5na2ZFeE5BYmNlWFVaVGttNElacjE1SGlaeVBOc1J5Z042bUlOS3JPbWpHcloxVDF5X3B2NG5hSEdCcHp0SGswU3d5VWNNWE02bE1KS0VyTVROTlJxUTRFUzNQM3hrbERWWWh5X21pSFg2ajBBOG02cXdzS1UyV09MY0k%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia Hits First Record Since May as Value Nears $6 Trillion",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPTVFEeTNlUDR6Mjl2VEFvVjVrdi1HRjdSNTZwNDdjRlZOQTE2NXNKeHNOWnRxdW1fYm9mbnJfanRKRUdrb3diRTBkTF9vVUtkTGNLYjAzblR5Y3ZHUzRjN0NqYnN5aWFMTXlmTElPVXVvTjNtOFd4Y2pqMXZ1ckU4Q0pjRlhoNmhYV19BRk1iU2NhOVV0TlRyUlgtckd6eXFNeUFpOXVSTS1BVUNQX3BkZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxPTVFEeTNlUDR6Mjl2VEFvVjVrdi1HRjdSNTZwNDdjRlZOQTE2NXNKeHNOWnRxdW1fYm9mbnJfanRKRUdrb3diRTBkTF9vVUtkTGNLYjAzblR5Y3ZHUzRjN0NqYnN5aWFMTXlmTElPVXVvTjNtOFd4Y2pqMXZ1ckU4Q0pjRlhoNmhYV19BRk1iU2NhOVV0TlRyUlgtckd6eXFNeUFpOXVSTS1BVUNQX3BkZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:04:07"
    },
    {
      "source": "서울경제TV",
      "title_ko": "‘77조 신기록’ SK하이닉스…HBM4 독주엔 ‘경고등’",
      "title_en": "",
      "summary_ko": "‘77조 신기록’ SK하이닉스…HBM4 독주엔 ‘경고등’ 서울경제TV. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. 서울경제TV뿐만 아니라 글로벌이코노믹, 문화일보 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBIY2VlckpBcXdJNVdYUHI4Y0FfajFuRWwtMlJtd01tcUVQZUVwNFBlOEtBUzhBX2c3QThVUXlFRUxERnlRTVI3MDhkYzludDFLS2RTbUQ5T3hfbzhTRWFSUVR5MEc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBIY2VlckpBcXdJNVdYUHI4Y0FfajFuRWwtMlJtd01tcUVQZUVwNFBlOEtBUzhBX2c3QThVUXlFRUxERnlRTVI3MDhkYzludDFLS2RTbUQ5T3hfbzhTRWFSUVR5MEc?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 21 Oct 2026 08:59:02 GMT",
      "related_articles": [
        {
          "source": "글로벌이코노믹",
          "title_ko": "캐시 우드 \"메모리 악순환\" 경고…SK하이닉스, HBM 초격차로 돌파",
          "original_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxORTF4cFFkcEU2ZWxsWnNKcXFEYnBRVnJQN3FZdDl5elpOWEVMbHB3SHFkUFlUMEk3OFBVN1BBbUZSazBLdnVGWEt4LTYxSnlOYlZscERrZlNXZDdrQ2NBaE5XZVBaelpYc2JlZXJjeTVObjhkU3kzZ3lGM21fMU5WLUg3eVBuU3pH?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxORTF4cFFkcEU2ZWxsWnNKcXFEYnBRVnJQN3FZdDl5elpOWEVMbHB3SHFkUFlUMEk3OFBVN1BBbUZSazBLdnVGWEt4LTYxSnlOYlZscERrZlNXZDdrQ2NBaE5XZVBaelpYc2JlZXJjeTVObjhkU3kzZ3lGM21fMU5WLUg3eVBuU3pH?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "SK하이닉스, 40조 자사주 매입 한 달 앞당겨 끝냈다",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5NNW4tUE1meklCLUstUmJNOHFKdWJycFJlMUNkc1F4bDc1SnpIYzdnZ0lUeGRPeG5rNVA3emZKclo1SE9jeHdtWkcxbXFpR014LVFoUFhtYUVuZw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5NNW4tUE1meklCLUstUmJNOHFKdWJycFJlMUNkc1F4bDc1SnpIYzdnZ0lUeGRPeG5rNVA3emZKclo1SE9jeHdtWkcxbXFpR014LVFoUFhtYUVuZw?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "\"정말 피가 마릅니다\"…SK하이닉스 폭등에도 개미들은 '한숨' [분석+]",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1OV09uTTRXLUVDbTNXTlVXam5acHplNHB1UDhjLUdFMm9DbG9Xa3BDT3ZPa0JKN2tJMmhGM2VBVElpOVhaMEpMajFlUUdfR1VDUTVpT2hwOHJoZw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1OV09uTTRXLUVDbTNXTlVXam5acHplNHB1UDhjLUdFMm9DbG9Xa3BDT3ZPa0JKN2tJMmhGM2VBVElpOVhaMEpMajFlUUdfR1VDUTVpT2hwOHJoZw?oc=5"
        },
        {
          "source": "문화일보",
          "title_ko": "[속보]수급공백 올까…SK하이닉스, 40조원 규모 자사주 매입 완료",
          "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9LT1hmT2o3bGZTTWQ1TXIzN1U4bk1uV2xxVjNBRUROclAzeER3TGdzVUx5aUpqTzRSZ0FwOFZxT2pSX1BUeC13b1NWRnY0WXgz?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9LT1hmT2o3bGZTTWQ1TXIzN1U4bk1uV2xxVjNBRUROclAzeER3TGdzVUx5aUpqTzRSZ0FwOFZxT2pSX1BUeC13b1NWRnY0WXgz?oc=5"
        }
      ],
      "crawled_at": "2026-10-21 20:04:07"
    },
    {
      "source": "Bloomberg",
      "title_ko": "미국 국채 Slide After Middle East Strife Report Spurs Oil Gains",
      "title_en": "Treasuries Slide After Middle East Strife Report Spurs Oil Gains",
      "summary_ko": "미국 국채 Slide After Middle East Strife Report Spurs Oil Gains Bloomberg.com. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOS1NpTjhYQmpDMUFOVUJRdC1WRTdYNFBRd0V4cl9KZFF4NDVjU3Nkbzdjblh4TXhDaDBQa2hicElLWXFjSlUzWTh0eHB2WHNwSXZnZ2RwTVdGVUpvRE04ZVpMQnB4blBGQlVkdW8yQWV4NXVUOUl4YVZVVU1xc205OGhwTHYxN1Q4M3JCUnlMRUszSzIzeXFmS2FUTURIakRHUGpjMWpXUng4OFY5M1l1MkswaEZ5QQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxOS1NpTjhYQmpDMUFOVUJRdC1WRTdYNFBRd0V4cl9KZFF4NDVjU3Nkbzdjblh4TXhDaDBQa2hicElLWXFjSlUzWTh0eHB2WHNwSXZnZ2RwTVdGVUpvRE04ZVpMQnB4blBGQlVkdW8yQWV4NXVUOUl4YVZVVU1xc205OGhwTHYxN1Q4M3JCUnlMRUszSzIzeXFmS2FUTURIakRHUGpjMWpXUng4OFY5M1l1MkswaEZ5QQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 21 Oct 2026 19:46:49 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Dollar mixed as traders wait on 연준(Fed), Aussie gains",
          "original_url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQMmhtRnJCbDhIc08yUUUxQnBOU0tmczBNT3JOTjBKVy1LY0VCUW1pdk9hNW83QXdqM3pKOGthelR0NldvLUx6ZHdfUWpTTnpHOVhVeG9nR0tUWjVqNlUyT09jbVp3eUZDb1RLbjhLakZYUXZfcXNoVndFSG50cUw5alpFRHVpNWdUMWtxLWpXMUZsdFE1RVhtX0RWVkVLazFFNUlIZi1fcHRJUjZYY090OVBwaTZMUnJ4TmdtbWFR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivgFBVV95cUxQMmhtRnJCbDhIc08yUUUxQnBOU0tmczBNT3JOTjBKVy1LY0VCUW1pdk9hNW83QXdqM3pKOGthelR0NldvLUx6ZHdfUWpTTnpHOVhVeG9nR0tUWjVqNlUyT09jbVp3eUZDb1RLbjhLakZYUXZfcXNoVndFSG50cUw5alpFRHVpNWdUMWtxLWpXMUZsdFE1RVhtX0RWVkVLazFFNUlIZi1fcHRJUjZYY090OVBwaTZMUnJ4TmdtbWFR%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:04:18"
    },
    {
      "source": "Reuters",
      "title_ko": "EXCLUSIVE: ByteDance, Alibaba, Tencent place over $35 billion worth of Nvidia chip orders",
      "title_en": "EXCLUSIVE: ByteDance, Alibaba, Tencent place over $35 billion worth of Nvidia chip orders",
      "summary_ko": "EXCLUSIVE: ByteDance, Alibaba, Tencent place over $35 billion worth of Nvidia chip orders Reuters. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Bloomberg, Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQOXBuUld1bXhxNWlQNktuUmYxOWpVRFlnN0dialpvZlhYM1JLVzE1N0VBSUVNbUlCNmwtN2RVWXRkd1VUV3BRSV9aMGJGMkpxQUk4VWZ1dUt5YjZpdmthQVZ3REFHUzBmV3B0SFJwOFFsMl9fb3l0Y3F0Z1FXbDAxSFhTbV9peVVDQ3FKRnp3NjVDdEpRVHdIOG04SjctLWRRTzN2bDM1a2QxaGdZMHlJV0hGS1FObHFKTVNiS3hvXzZsUzdvMktteFBvSGNEZw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizgFBVV95cUxQOXBuUld1bXhxNWlQNktuUmYxOWpVRFlnN0dialpvZlhYM1JLVzE1N0VBSUVNbUlCNmwtN2RVWXRkd1VUV3BRSV9aMGJGMkpxQUk4VWZ1dUt5YjZpdmthQVZ3REFHUzBmV3B0SFJwOFFsMl9fb3l0Y3F0Z1FXbDAxSFhTbV9peVVDQ3FKRnp3NjVDdEpRVHdIOG04SjctLWRRTzN2bDM1a2QxaGdZMHlJV0hGS1FObHFKTVNiS3hvXzZsUzdvMktteFBvSGNEZw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 20 Oct 2026 15:51:20 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia Buying an Additional $1.5 Billion in SB Energy Shares Ahead of IPO",
          "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNbGhSS3ppY3VLbEZhRE0yTnVfUTBFNk1ncjI4YmRUd25MV2lzZWVoOFdzT3ZyaG5Td2hWbDZPU0FVSkdEcGR3dlBkX1FvNFpjMjVTblFSaWhIbVRRdXU4bFRPcV9QZXA1d2U4N0RkQ1pKVmk1RkozdjVLdG5uaVZaUUdkS3JvMDZYemRmMkJQTG9RckdEMDBJdWlZQ1VGT1Q5eE9BTGdzX2pFVndMaE1HWkg5LWV1czFXeTk4aXI3NEk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxNbGhSS3ppY3VLbEZhRE0yTnVfUTBFNk1ncjI4YmRUd25MV2lzZWVoOFdzT3ZyaG5Td2hWbDZPU0FVSkdEcGR3dlBkX1FvNFpjMjVTblFSaWhIbVRRdXU4bFRPcV9QZXA1d2U4N0RkQ1pKVmk1RkozdjVLdG5uaVZaUUdkS3JvMDZYemRmMkJQTG9RckdEMDBJdWlZQ1VGT1Q5eE9BTGdzX2pFVndMaE1HWkg5LWV1czFXeTk4aXI3NEk%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "Exclusive | China’s ByteDance Gets Access to Top Nvidia AI Chips",
          "original_url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPbUhubDRvVC1CWXdTbmsybGJ6VjBOb19rcWJlbXBucjJ5ZndVY2FZNmNDQWVOZW9QOThsWG1yTThkbVlvU0g2ZnFnbXpYUV9iNElpdkU2NzVyU1BYODlfZl9ONVVxOTQyMWVTN04xUHpqUzVUcV9NaWp0ZTUzQmVGZkdZTjE0XzRSc1RzajNB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijgFBVV95cUxPbUhubDRvVC1CWXdTbmsybGJ6VjBOb19rcWJlbXBucjJ5ZndVY2FZNmNDQWVOZW9QOThsWG1yTThkbVlvU0g2ZnFnbXpYUV9iNElpdkU2NzVyU1BYODlfZl9ONVVxOTQyMWVTN04xUHpqUzVUcV9NaWp0ZTUzQmVGZkdZTjE0XzRSc1RzajNB%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "Exclusive | Positron Valued at $5 Billion in New Funding as Demand for AI Chips Surges",
          "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQZWpZd1RtLU1tcFpSOUoxYVYtd0gzeTZfanNNaVg1UWxoZ2lfSTFZV2MzdldoTDQyR0lCTGFUd1ZsTG8xcVRlZ1NZWHBPWWphNHdpTTVjSFAtREJnQzhZc0VaS3Vha3U0bVBPQXZqdmhRRlV0Rm9DWnE2MnFTTS1sTWlwajZ1VHFDanNianRkRnpkaG5WZ3ZfT01NdkkzaHlSbUw0?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxQZWpZd1RtLU1tcFpSOUoxYVYtd0gzeTZfanNNaVg1UWxoZ2lfSTFZV2MzdldoTDQyR0lCTGFUd1ZsTG8xcVRlZ1NZWHBPWWphNHdpTTVjSFAtREJnQzhZc0VaS3Vha3U0bVBPQXZqdmhRRlV0Rm9DWnE2MnFTTS1sTWlwajZ1VHFDanNianRkRnpkaG5WZ3ZfT01NdkkzaHlSbUw0%3Foc%3D5"
        },
        {
          "source": "Semafor",
          "title_ko": "Chinese tech firms purchase more than $35 billion of Nvidia chips: Reuters",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxObkVSTm9IU1ZCbVg4MzFEdFc4Qi1QQTFWWVkyMUNpbld5WHVoRVh0MHBWU05RZnF6MS1JNkdyc2ZvdFEwZC1IX2N1algwSmhZQnRFYWFiR2lqX0hZZmJpdnNOUmNrUnpyQmk1N0hnZFgyX0c5ZEllTjk0T0VJUEVjdV9CY2lOd0R1b2FBUC1QcmktXzc2aVZzM0lqeUZOalJWSVhlNnVXY25heHRCVG9hWldxdWpwZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxObkVSTm9IU1ZCbVg4MzFEdFc4Qi1QQTFWWVkyMUNpbld5WHVoRVh0MHBWU05RZnF6MS1JNkdyc2ZvdFEwZC1IX2N1algwSmhZQnRFYWFiR2lqX0hZZmJpdnNOUmNrUnpyQmk1N0hnZFgyX0c5ZEllTjk0T0VJUEVjdV9CY2lOd0R1b2FBUC1QcmktXzc2aVZzM0lqeUZOalJWSVhlNnVXY25heHRCVG9hWldxdWpwZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-21 20:04:38"
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
