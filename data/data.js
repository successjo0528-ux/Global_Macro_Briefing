window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-10-21 05:02:00",
    "date_str": "2026년 10월 21일 (수)",
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
      "price": 4.08,
      "previous_close": 4.05,
      "change": 0.03,
      "change_percent": 0.74,
      "display_price": "4.080%",
      "status": "up",
      "history": [
        4.05,
        4.057,
        4.085,
        4.088,
        4.07,
        4.075,
        4.08
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-10-20 20:00:40"
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
      "price": 5.117,
      "previous_close": 5.24,
      "change": -0.123,
      "change_percent": -2.35,
      "display_price": "5.117%",
      "status": "down",
      "history": [
        5.24,
        5.217,
        5.19,
        5.089,
        5.098,
        5.136,
        5.117
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-10-20 20:00:40",
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
      "price": 5.425,
      "previous_close": 5.598,
      "change": -0.173,
      "change_percent": -3.09,
      "display_price": "5.425%",
      "status": "down",
      "history": [
        5.598,
        5.563,
        5.525,
        5.429,
        5.436,
        5.472,
        5.425
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-10-20 20:00:41"
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
      "price": 101.716,
      "previous_close": 102.18,
      "change": -0.464,
      "change_percent": -0.45,
      "display_price": "101.72 pt",
      "status": "down",
      "history": [
        102.18,
        102.55,
        102.0,
        101.84,
        101.98,
        101.716
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-10-20 20:00:41"
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
      "price": 158.249,
      "previous_close": 158.203,
      "change": 0.046,
      "change_percent": 0.03,
      "display_price": "158.25엔",
      "status": "up",
      "history": [
        158.203,
        158.52,
        158.322,
        157.957,
        158.143,
        157.806,
        158.249
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-10-20 20:00:41"
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
      "price": 4141.6,
      "previous_close": 4177.3,
      "change": -35.7,
      "change_percent": -0.85,
      "display_price": "$4,141.60",
      "status": "down",
      "history": [
        4177.3,
        4107.9,
        4170.1,
        4181.1,
        4160.1,
        4141.6
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-10-20 20:00:42"
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
      "price": 98.12,
      "previous_close": 94.14,
      "change": 3.98,
      "change_percent": 4.23,
      "display_price": "$98.12",
      "status": "up",
      "history": [
        94.14,
        95.09,
        97.97,
        101.41,
        103.66,
        98.12
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-10-20 20:00:42"
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
      "price": 82455.93,
      "previous_close": 81562.49,
      "change": 893.44,
      "change_percent": 1.1,
      "display_price": "$82,456",
      "status": "up",
      "history": [
        81562.492,
        82141.461,
        81500.805,
        81382.148,
        82017.602,
        81853.539,
        82455.93
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-10-20 20:00:42"
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
      "price": 948.5,
      "previous_close": 32.8,
      "change": 915.7,
      "change_percent": 0.0,
      "display_price": "$948.5B (약 9,485억$)",
      "status": "up",
      "history": [
        22.5,
        36.3,
        934.7,
        965.0,
        16.2,
        32.8,
        948.5
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-10-20 20:00:43"
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
      "price": 7712.9,
      "previous_close": 7811.54,
      "change": -98.64,
      "change_percent": -1.26,
      "display_price": "7,712.90",
      "status": "down",
      "history": [
        7807.24,
        7805.45,
        7718.94,
        7744.06,
        7659.44,
        7690.73,
        7712.9
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-10-20 20:00:43"
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
      "price": 29490.283,
      "previous_close": 30883.15,
      "change": -1392.867,
      "change_percent": -4.51,
      "display_price": "29,490.28",
      "status": "down",
      "history": [
        30664.699,
        30569.48,
        29950.82,
        29935.6,
        29187.551,
        29529.35,
        29490.283
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-10-20 20:00:44"
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
      "price": 11283.812,
      "previous_close": 12572.42,
      "change": -1288.608,
      "change_percent": -10.25,
      "display_price": "11,283.81",
      "status": "down",
      "history": [
        12236.79,
        12208.79,
        11684.38,
        11581.21,
        11137.29,
        11316.34,
        11283.812
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-10-20 20:00:44"
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
      "price": 17.49,
      "previous_close": 15.21,
      "change": 2.28,
      "change_percent": 14.99,
      "display_price": "17.49",
      "status": "up",
      "history": [
        15.21,
        15.27,
        16.87,
        16.46,
        19.99,
        18.44,
        17.49
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-10-20 20:00:44"
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
      "price": 1325.67,
      "previous_close": 1340.84,
      "change": -15.17,
      "change_percent": -1.13,
      "display_price": "1,325.67원",
      "status": "down",
      "history": [
        1340.84,
        1334.13,
        1340.31,
        1339.35,
        1340.95,
        1333.43,
        1325.67
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-10-20 20:00:45",
      "fx_averages": {
        "avg_1y": 1449.0,
        "avg_3y": 1401.2
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
      "price": 5552.74,
      "previous_close": 6625.93,
      "change": -1073.19,
      "change_percent": -16.2,
      "display_price": "5,552.74",
      "status": "down",
      "history": [
        6384.24,
        6035.35,
        6008.81,
        5554.22,
        5668.05,
        5768.01
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-10-20 20:00:45"
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
      "price": 781.97,
      "previous_close": 892.27,
      "change": -110.3,
      "change_percent": -12.36,
      "display_price": "781.97",
      "status": "down",
      "history": [
        849.19,
        837.03,
        823.88,
        760.82,
        794.78,
        808.89
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-10-20 20:00:45"
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
      "updated_at": "2026-10-20 20:00:46"
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
      "updated_at": "2026-10-20 20:00:47"
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
      "price": 154.12,
      "previous_close": 177.24,
      "change": -23.12,
      "change_percent": -13.04,
      "display_price": "$154.12",
      "status": "down",
      "history": [
        170.11,
        166.56,
        159.83,
        156.22,
        150.44,
        156.58,
        154.12
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-10-20 20:00:47"
    }
  ],
  "news": [
    {
      "source": "Reuters",
      "title_ko": "연준(Fed) 인플레이션 상승으로 인해 타이트한 도입된 통화",
      "title_en": "Fed rate hike call seen tight as inflation heats up",
      "summary_ko": "연준(Fed) 인플레이션 과열로 인해 타이트한 통화 재개 Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxPMjl1ZWZGd2lIRXg1US1hUjNacTVDN2o5S2lIcXpCdnZ1VHBXcEpqOHV5SzJJZHJrT3RxYjdrRjRrRU03eHNGTTFRMnVCVEdZa0VfLU9BeFdSeTE1aFRrc3ZRampyOFVTczZRbWk0azFBakVndUJ1X0NjVmJmV1JmeXNXSlFkNzF0NUZKTUUyUnlHWi1sOXFpVHV5NnVvcDA%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 14 Oct 2026 14:22:26 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "미국의 인플레이션은 9월에 과열됩니다. 연준(Fed)이 이번 달에 다시 테이블에 등장했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNX3hkV3J5em1xWWY4V0hQODFTamFtU3NvdkpPRUUzMGY0TnlKaVlneXZPc0J6bFpWdDZWb2hLRkZZaHhZVElDSXNFbGNYMVVBRGR6c1RlNDA4cEhkMEcwck5VMFRtZ1QxOFJqNTkyaGJzWWFLSXp2Z0l1Z19vMDh5bGd6N1FJSkJFR2tZUXd1UWUzeVlvZi1xNTVONk00ejJ5cE0xSGY4THFsaUo0RGxPV3dpaW4tbEZseUE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxNX3hkV3J5em1xWWY4V0hQODFTamFtU3NvdkpPRUUzMGY0TnlKaVlneXZPc0J6bFpWdDZWb2hLRkZZaHhZVElDSXNFbGNYMVVBRGR6c1RlNDA4cEhkMEcwck5VMFRtZ1QxOFJqNTkyaGJzWWFLSXp2Z0l1Z19vMDh5bGd6N1FJSkJFR2tZUXd1UWUzeVlvZi1xNTVONk00ejJ5cE0xSGY4THFsaUo0RGxPV3dpaW4tbEZseUE%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "영국 인플레이션으로 인해 BOE의 11월 거래가 성사될 수 있습니다",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPRFIxNENhNGRYUmJLQ0hiZW82dE4zSVVrTkp6ZExjbWk5djg5X1Fad0VIZVRGcVQ2R3ZySWZHOFZoTDZ3UWVXakdldk12T04tSWo5Z3pTR2JkMFpNRFhXTGtsbnRNZWdLRVR5QUItWnJnTGdXWVpaV2tUOG1IN3RGLTVRZHlXMkZlYldEc2JfR0h1NkhGejJfQk8ybVpZWHdmTVJmUzVVb28tYkdpMmNGM3VwRQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPRFIxNENhNGRYUmJLQ0hiZW82dE4zSVVrTkp6ZExjbWk5djg5X1Fad0VIZVRGcVQ2R3ZySWZHOFZoTDZ3UWVXakdldk12T04tSWo5Z3pTR2JkMFpNRFhXTGtsbnRNZWdLRVR5QUItWnJnTGdXWVpaV2tUOG1IN3RGLTVRZHlXMkZlYldEc2JfR0h1NkhGejJfQk8ybVpZWHdmTVJmUzVVb28tYkdpMmNGM3VwRQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "호주 인플레이션이 7월에 뜨거워지고 시장 가격이 인상되는 위험",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOOWdkYmdqYURTcGlVajFleGJIS1J6NUNmRG1tTkJubnhWT1NtamZUX1lTSkhsOFB1eTMzd3dQMUFYUVZlRTdnWkE4d0NrWXFmRjVkM0xfTHRNbDJLM0w5RTVMMUY5OXVIZGNJcTI1Skp2QkxyaDUzVmsxMkpIbzdBdnVCelI1dWFkS3VjZkZRWW1JT2dudGpuOUdfZTZUWGpfQ2RGZS1FeTBvVXl4b3c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxOOWdkYmdqYURTcGlVajFleGJIS1J6NUNmRG1tTkJubnhWT1NtamZUX1lTSkhsOFB1eTMzd3dQMUFYUVZlRTdnWkE4d0NrWXFmRjVkM0xfTHRNbDJLM0w5RTVMMUY5OXVIZGNJcTI1Skp2QkxyaDUzVmsxMkpIbzdBdnVCelI1dWFkS3VjZkZRWW1JT2dudGpuOUdfZTZUWGpfQ2RGZS1FeTBvVXl4b3c%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 정책입안자들은 인플레이션 위험이 증가함에 따라 삽입 삽입 가능성을 주목하고 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxONHZGRC1lZE9FMWRpVnlkVVFaZWFLWkowZWZjaW8teHlXenZhdVJ3OWw3WW1pejA2YUhHNTRpTExYSGE1bDFKQ1JWdVo5YnNSeDEwMGFsanJreTc2SDR6MlFIRnl5UEMwV3VDXzNGcERrX3ZlRS16c2xscjlNeXZoM2pGM25oNjNCcGJiN2tFbjAydWdyOUZYal9fallKcUo3VWZjd1htTnI?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxONHZGRC1lZE9FMWRpVnlkVVFaZWFLWkowZWZjaW8teHlXenZhdVJ3OWw3WW1pejA2YUhHNTRpTExYSGE1bDFKQ1JWdVo5YnNSeDEwMGFsanJreTc2SDR6MlFIRnl5UEMwV3VDXzNGcERrX3ZlRS16c2xscjlNeXZoM2pGM25oNjNCcGJiN2tFbjAydWdyOUZYal9fallKcUo3VWZjd1htTnI%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:02"
    },
    {
      "source": "Reuters",
      "title_ko": "영국 고용시장은 BoE가 끌어올리기 위해 노력하면서 약간의 회복 조짐을 보이고 있습니다.",
      "title_en": "UK jobs market shows some recovery signs as BoE mulls rate hike",
      "summary_ko": "영국 고용시장은 BoE가 삽입 도입을 고려하면서 약간의 회복 조짐을 보이고 있습니다 Reuters. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Reuters뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "연준(Fed) 회의록에 더 많은 정책입안자들이 등장하는 모습",
          "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPbzRaNVFyVGlDLTQ4X0NRZF9wSGRNRmstd3JyX2NwanZFUEYwVjVXbndQN29MeDB5ZVpEaUh6WkxSaHBLNU1OQmtGNkRqV0xLdkJXWU80a1o5YWM1UTV6ZG1zNUJwOUY5a1lmbU9KRGdsYUszeFRYcGY3c1d1UWQ4czQ1SUYweUNOd01sLW1GbXNTeWlkQjdadWtSRmx0dXJQenc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxPbzRaNVFyVGlDLTQ4X0NRZF9wSGRNRmstd3JyX2NwanZFUEYwVjVXbndQN29MeDB5ZVpEaUh6WkxSaHBLNU1OQmtGNkRqV0xLdkJXWU80a1o5YWM1UTV6ZG1zNUJwOUY5a1lmbU9KRGdsYUszeFRYcGY3c1d1UWQ4czQ1SUYweUNOd01sLW1GbXNTeWlkQjdadWtSRmx0dXJQenc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:05"
    },
    {
      "source": "Bloomberg",
      "title_ko": "뉴질랜드의 해",
      "title_en": "New Zealand’s Year-End Inflation Surge Points to More Rate Hikes",
      "summary_ko": "뉴질랜드의 해 관련 핵심 동향이 발표되었습니다. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Bloomberg뿐만 아니라 CNBC, MarketWatch 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOeVFJQVhBQlh1YUItVTRicU00R2ZoVS1tNEFvbjlyRVB2a1M2Z041dmF1dmlkTkVQaUpEYjJyQk1OMFNNT2ItNURySnlldHpaOVB1RWkzMUMtdmFqUnQ2M2xzMnhzbUZfMWEtT09YQlgxRWR2SURSdC1uOE5LM29XVUgwdUg5NmN3bE9lcXdNZHdLcFR6Mk5lQW92T0gtVHNRaE1zNFByZWNzeERZblpZdDdhNFlHdw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxOeVFJQVhBQlh1YUItVTRicU00R2ZoVS1tNEFvbjlyRVB2a1M2Z041dmF1dmlkTkVQaUpEYjJyQk1OMFNNT2ItNURySnlldHpaOVB1RWkzMUMtdmFqUnQ2M2xzMnhzbUZfMWEtT09YQlgxRWR2SURSdC1uOE5LM29XVUgwdUg5NmN3bE9lcXdNZHdLcFR6Mk5lQW92T0gtVHNRaE1zNFByZWNzeERZblpZdDdhNFlHdw%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 19 Oct 2026 20:50:29 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "캐나다 달러는 거의 4단계 상승했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQejFjMHFhbTY3RGNrb3ZLNnZvd2QtWjl4eDg5cG9vRmR3Qk9zbGNBWXM1VXE5Z0ZWamFZYUptd0RwTmdieTRjQXVjWE5YVEhlVzFOUEo3WnF4aVRqSmNvUUFTZnVwVHo2aHVuTXZybk5UT0ZqSmtGNHdfRXZhNWdzVnpDRWRja2ExdFFHNTYwUDg2bmxzWjdRekRHeUtKU3RuY1Z3M2FZSktjdXliQlpZZjBn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxQejFjMHFhbTY3RGNrb3ZLNnZvd2QtWjl4eDg5cG9vRmR3Qk9zbGNBWXM1VXE5Z0ZWamFZYUptd0RwTmdieTRjQXVjWE5YVEhlVzFOUEo3WnF4aVRqSmNvUUFTZnVwVHo2aHVuTXZybk5UT0ZqSmtGNHdfRXZhNWdzVnpDRWRja2ExdFFHNTYwUDg2bmxzWjdRekRHeUtKU3RuY1Z3M2FZSktjdXliQlpZZjBn%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 정책입안자들은 올해 한 번 더 등장할 것으로 예상",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPQm5zRF9jbzFRTVF1RkwxbTBpNGJmeHhRR3RNZU9DMHk5c1pndDJveEhwd2RrZHhRMXBFMGV3cHR4OXlJZUJBdWtjRXhFVkUyYUpRd0F5QWs2Y1NtTllTQzJGdkM4UFBVSzRfa01FQjFuS1Ixc2E0NGJ6Q3Z3a2owYUowN21RM0QwWDBuQzJsZW13bVJzTkJqNGE5aklZWWwzbHBERGNBdWUxZE1BT1M4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPQm5zRF9jbzFRTVF1RkwxbTBpNGJmeHhRR3RNZU9DMHk5c1pndDJveEhwd2RrZHhRMXBFMGV3cHR4OXlJZUJBdWtjRXhFVkUyYUpRd0F5QWs2Y1NtTllTQzJGdkM4UFBVSzRfa01FQjFuS1Ixc2E0NGJ6Q3Z3a2owYUowN21RM0QwWDBuQzJsZW13bVJzTkJqNGE5aklZWWwzbHBERGNBdWUxZE1BT1M4%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "연준(Fed)의 의사록에는 일련의 관심이 보이지 않습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNaF9QQWc3MVFwTXJjNGdBRjd0NUZ6aExkdFpqRkxBSThxMUZteXNiSWJDak1qdTdwRXBkNkdQdDRfekQzN243ODFqNUhBQllGV0pQS3pWY090WThXMTVzZmFnc3pBbENCMGJLaVRXSF9zRUZtZ2dzZE0zelF5dzBadldsZm51dVNVaVpHQTNvVHA3Q2wzQWFmemJIOEs1RzZmQUp5N1hKZzJ1Umc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxNaF9QQWc3MVFwTXJjNGdBRjd0NUZ6aExkdFpqRkxBSThxMUZteXNiSWJDak1qdTdwRXBkNkdQdDRfekQzN243ODFqNUhBQllGV0pQS3pWY090WThXMTVzZmFnc3pBbENCMGJLaVRXSF9zRUZtZ2dzZE0zelF5dzBadldsZm51dVNVaVpHQTNvVHA3Q2wzQWFmemJIOEs1RzZmQUp5N1hKZzJ1Umc%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed)이 기준 금리 인상에 무게를 더 두는 것처럼 주택은 경고 신호를 깜박이고 있다",
          "original_url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPQThhSGdLckY3MFRuaDNSQXFrSS1WWmQ1b29MNXN6a3ZJUDgtOWRPNEEybjdWeUdYal9RWm9XSk9Od2RZeV91dDAyZmtUTE9kN0R5Ul91bUFlRzVudG5TcmhfdFhuUURUbV85dHV6MWsyTTNURWRwZl9lVVJiOE9zTlNiT2xwVUROekxiWTRWQk_SAZYBQVVfeXFMTTc2a08zNV9CdTlVWGRzcWNIX0E3Qk9idS1GWDM5ejVhQ05Wa0Jvb2dhRUdKVUNQcHJsTklHWl84RjJQY2ZINk9HVEdzSmRhdWtYRzlxNFhjUW5scmlxZ1EwUHRDeVRqVHQ3TkpEOXVoSXRPRWlpeUpWcllkWFpuVGIyQXJ6ZGI3T28yRi1jTENIbGlRUVBB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikAFBVV95cUxPQThhSGdLckY3MFRuaDNSQXFrSS1WWmQ1b29MNXN6a3ZJUDgtOWRPNEEybjdWeUdYal9RWm9XSk9Od2RZeV91dDAyZmtUTE9kN0R5Ul91bUFlRzVudG5TcmhfdFhuUURUbV85dHV6MWsyTTNURWRwZl9lVVJiOE9zTlNiT2xwVUROekxiWTRWQk_SAZYBQVVfeXFMTTc2a08zNV9CdTlVWGRzcWNIX0E3Qk9idS1GWDM5ejVhQ05Wa0Jvb2dhRUdKVUNQcHJsTklHWl84RjJQY2ZINk9HVEdzSmRhdWtYRzlxNFhjUW5scmlxZ1EwUHRDeVRqVHQ3TkpEOXVoSXRPRWlpeUpWcllkWFpuVGIyQXJ6ZGI3T28yRi1jTENIbGlRUVBB%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:11"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "연준(Fed)에 이어 재무 담당자의 플레이북: 은행에 예금 지불 요청",
      "title_en": "A Treasurer’s Playbook Following a Fed Rate Hike: Ask Banks to Pay Up for Deposits",
      "summary_ko": "연준(Fed)에 따른 재무 담당자 플레이북: 은행에 예금 지불 요청 WSJ. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Wall Street Journal뿐만 아니라 CNBC, Investing.com 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Investing.com",
          "title_ko": "미국 분리준비 제도(연준)가 10월을 건너뛰고 12월에 하이킹을 하는 것으로 나타났습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNcVN0UTZfVmVsWHlnV3djdWRkWFFZQmVCWmNZZk16OTNUSDUzLXBCU09XdG5HUW5qdzNjOUtpM05LaDZLLWx0MEpUM0VzV2lvQ1BSazlINVpGbWU2blctVllUTXRpNTVmRm1TV2JGUzRYV3ZEbk5tMU1pTHpnc0MzcWt3Z3BFZXZZX191UDNadXhsTDZGMEtOLTZULUhJYVJaV0FVS2g0b3FkR1hNRlRabnlXQ3AxNTV1ZUY0bXNETDdMZU84eWc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMixgFBVV95cUxNcVN0UTZfVmVsWHlnV3djdWRkWFFZQmVCWmNZZk16OTNUSDUzLXBCU09XdG5HUW5qdzNjOUtpM05LaDZLLWx0MEpUM0VzV2lvQ1BSazlINVpGbWU2blctVllUTXRpNTVmRm1TV2JGUzRYV3ZEbk5tMU1pTHpnc0MzcWt3Z3BFZXZZX191UDNadXhsTDZGMEtOLTZULUhJYVJaV0FVS2g0b3FkR1hNRlRabnlXQ3AxNTV1ZUY0bXNETDdMZU84eWc%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "거래자들은 약한 고용 보고서 이후 10월에 연준(Fed)이 등장할 가능성이 거의 없다고 보고 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilgFBVV95cUxPOU1aVUFEOV9MWl9TVVdodDl4eFoyUjgxN2tLZ1QtRWYzbEUtMEpVQll0ZkhSekJFZUFVZzdNeXVqTzdUYXI3OWNMcC1YQ19XVDN2MFNTOWQzNjFLLTBDWFVvLXlWMWZRZ1R6RTRhVVRuS0dkZnJBMTd2dWhGV2hPdUg0b3hJQkZncFhCMnljc2lwYmw3TFHSAZsBQVVfeXFMTzNmZkRlUzhSSXlhMzhWV3lyN0pyeUstczZQXy1HZFNMRUh6TjNPN2Q0bGdrU2tCZjg2YkFZN3RrdndRcEs2TlAxRVlmNlhQVldRd3VZRmtZUlZock5uWTFsQ3dXdDMycWJSbXQwTDBSYVBWa1RZTG9qRWxkQTk1R1Y1WmtuUW9DSF9tUGs0NF8xdmE2RHlYQVJidFk%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "분석: Kevin Warsh가 이번 주 연준(Fed)을 보류해야 하는 세 가지 이유가 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPVVJUMVhPX29BcUJ5OS02b20tQ0xLOHI0bDZ2bFNuc040S3UwYVpmSkN3YlYyZUUxYWZxeGgyU0lJamhsR0w0QWhiUmxDc3hPQVFLUmJmTDdyNmg4ckZUbU1JTi1SY05QWXk3dDRWRGZoLUNZUTk0Q3MtZjl1ZjFJY2FpclNMODd6bXfSAY8BQVVfeXFMTlNGT2plT3FjV25FSXY5aFQxVE9KR1ljejYySlJSdG56OFZ3M1g1ZDRkOG1pODNiUUl3bmlhaklnWVRVSU5kTTBVd2xnWXdMaHpIdVFra2M1Ty1OMlZUMzVqMGh2VU5GeG1sWkZCT2pBdW9ESEwtWnBMb3lmX2RyOU11NVlCZFFjaTdRZkdVQ3M?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxPVVJUMVhPX29BcUJ5OS02b20tQ0xLOHI0bDZ2bFNuc040S3UwYVpmSkN3YlYyZUUxYWZxeGgyU0lJamhsR0w0QWhiUmxDc3hPQVFLUmJmTDdyNmg4ckZUbU1JTi1SY05QWXk3dDRWRGZoLUNZUTk0Q3MtZjl1ZjFJY2FpclNMODd6bXfSAY8BQVVfeXFMTlNGT2plT3FjV25FSXY5aFQxVE9KR1ljejYySlJSdG56OFZ3M1g1ZDRkOG1pODNiUUl3bmlhaklnWVRVSU5kTTBVd2xnWXdMaHpIdVFra2M1Ty1OMlZUMzVqMGh2VU5GeG1sWkZCT2pBdW9ESEwtWnBMb3lmX2RyOU11NVlCZFFjaTdRZkdVQ3M%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:17"
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
      "crawled_at": "2026-10-20 20:01:21"
    },
    {
      "source": "Reuters",
      "title_ko": "이란 전쟁으로 인한 오일 쇼크 우려로 해외 자금 유출로 아시아 증시 타격",
      "title_en": "Foreign outflows hit Asian stocks as Iran war drives oil shock fears",
      "summary_ko": "이란 전쟁으로 인한 오일 쇼크, 우려로 해외 자금 유출로 아시아 증시 타격 Reuters. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 Financial Times, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "이란 전쟁으로 인해 물가가 상승하면서 미국 인플레이션은 3.7%까지 치솟았습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNaTVDMnlSRThVWkxaaEY1cnpwU3VJOFZTbjA0cXYxR0l1WEcyQks5X2tIeDRSSkpsV29RU0xLZFJsTnMwNE5SdC1oWXpHdGFVY0pUOVVxenlSbDNTRVMzTlNLeENwWEFIRFl2Uk1sb1hMdVYtWVVndEw1RGpyT0tVd0ZSOWQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihAFBVV95cUxNaTVDMnlSRThVWkxaaEY1cnpwU3VJOFZTbjA0cXYxR0l1WEcyQks5X2tIeDRSSkpsV29RU0xLZFJsTnMwNE5SdC1oWXpHdGFVY0pUOVVxenlSbDNTRVMzTlNLeENwWEFIRFl2Uk1sb1hMdVYtWVVndEw1RGpyT0tVd0ZSOWQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "아시아 채권으로의 외국인 유입이 6건을 기록했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOeXJuTERwN0d6Y2tTZG5Ra214UmhVa29SRHRzSG9kdFY3QThsTXlPUWlTT1VyRGgxbVJ2TnpTcWJCa1RMaGZJUDVfUVVlWUJJZUVBYU1Ba0haNFRuUHhqN2d2b0Z6NUdHdDRVcUk5eDRDa0s3WmJxRGF3NmpUN2N5dThKWHdtWTRrazBBeENTM0FNdnhXTm9FeUw0Uzdma2FNYk1oVXhUbzU3bEM5azItNlJZTkxYUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxOeXJuTERwN0d6Y2tTZG5Ra214UmhVa29SRHRzSG9kdFY3QThsTXlPUWlTT1VyRGgxbVJ2TnpTcWJCa1RMaGZJUDVfUVVlWUJJZUVBYU1Ba0haNFRuUHhqN2d2b0Z6NUdHdDRVcUk5eDRDa0s3WmJxRGF3NmpUN2N5dThKWHdtWTRrazBBeENTM0FNdnhXTm9FeUw0Uzdma2FNYk1oVXhUbzU3bEM5azItNlJZTkxYUQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:24"
    },
    {
      "source": "Bloomberg",
      "title_ko": "카타르 에너지국장은 호르무즈의 미래에 대해 '잘못'이라고 말했다",
      "title_en": "Qatar Energy Chief Says Bessent ‘Wrong’ About Hormuz Future",
      "summary_ko": "카타르 에너지국장, 호르무즈의 미래에 대해 '잘못' 언급 Bloomberg. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "미 국채/재무부의 Bessent는 대규모 채권 환매가 더욱 증가할 수 있다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPTWc4bVJ0eEl6MmpreFhiWU9RajRyM05KRDVuNU01TkZnY3UxRTdHSkFBTEwtWVV3dHJfczQyS0dNcW9uR2s4cXRDUmN6Y1FjaUZULWpxejJGMUdRWHlnQi1rekZjN2hyQXJmUXZlMGJocGFkaVQwOUtQMWFNYUVyZG9WQnBtYUlEQVdvdnp0dnE1aTlRNUZ1Q1d6OFUyb2IyTEluOXB6Y0RIU0JOSzhmS1l3?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxPTWc4bVJ0eEl6MmpreFhiWU9RajRyM05KRDVuNU01TkZnY3UxRTdHSkFBTEwtWVV3dHJfczQyS0dNcW9uR2s4cXRDUmN6Y1FjaUZULWpxejJGMUdRWHlnQi1rekZjN2hyQXJmUXZlMGJocGFkaVQwOUtQMWFNYUVyZG9WQnBtYUlEQVdvdnp0dnE1aTlRNUZ1Q1d6OFUyb2IyTEluOXB6Y0RIU0JOSzhmS1l3%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "미 국채/재무부 수장 베센트, 미국의 금융력을 외교 정책 도구로 활용하는 것을 지지",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPdVVwZ0p3QWZmMDNKdXYxdTZPRXZtaWo2bmlqMnFDYWI0QXB0SlBPbHZuMl9QY1djNEV6VklBc19PZ01CQzlWT2VxU3YwM0lLeUw2Qm5QbGRRQ2h1b01ELVhMZmRJd2NIZk92bDU5SkpxNkZCanB4OER3UXRJNm0ySGRoUjJYTmxWQllVczhBOUN4Q0ZBN083Z1lEVmxwMkJpZjhYV1BCZ1hxSmUwX0ZYcjBlZnp1MVBfS3c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxPdVVwZ0p3QWZmMDNKdXYxdTZPRXZtaWo2bmlqMnFDYWI0QXB0SlBPbHZuMl9QY1djNEV6VklBc19PZ01CQzlWT2VxU3YwM0lLeUw2Qm5QbGRRQ2h1b01ELVhMZmRJd2NIZk92bDU5SkpxNkZCanB4OER3UXRJNm0ySGRoUjJYTmxWQllVczhBOUN4Q0ZBN083Z1lEVmxwMkJpZjhYV1BCZ1hxSmUwX0ZYcjBlZnp1MVBfS3c%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:30"
    },
    {
      "source": "Bloomberg",
      "title_ko": "베센트의 이란 경제적 고립은 어떤 모습일까",
      "title_en": "What Bessent’s Economic Isolation Of Iran Could Look Like",
      "summary_ko": "Bessent의 이란 경제적 고립은 Bloomberg.com과 비슷할 수 있습니다. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQSFdsTHh5T1BlaE1zSXI4c282WkJlZWFPSXI1ZXBiZFNEcDlXUWExWTI5VWUyVVcwejluN1Jua1RTQjNzb1prVVFYcERZdnFtTUE5RkNlRGlVblpXOVY4S2tWdlBiUTlIMEJURUYzbHdyWmpMcXF2ZkRoNFBxb0s3ZWFtYWV3WkNnTGZycUhSZnBNZXBFOF9ZWllMNGUxM3lISHYtQ3pNQ2VNSi0x?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxQSFdsTHh5T1BlaE1zSXI4c282WkJlZWFPSXI1ZXBiZFNEcDlXUWExWTI5VWUyVVcwejluN1Jua1RTQjNzb1prVVFYcERZdnFtTUE5RkNlRGlVblpXOVY4S2tWdlBiUTlIMEJURUYzbHdyWmpMcXF2ZkRoNFBxb0s3ZWFtYWV3WkNnTGZycUhSZnBNZXBFOF9ZWllMNGUxM3lISHYtQ3pNQ2VNSi0x%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sat, 15 Aug 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Hassett는 CPI 데이터에 따르면 인플레이션에는 '일부 작업'이 필요하다고 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNNHpBeXNZRzZUWjFaWVFQYXNocF9YZjRMd3Z3UWF6MjJiU0hIWERYYWxYc1EyZlVqcGY5ZDFhUUp1b2QyOHdMcTlMckMwNzBWYlNrNXZIWk1nbGtYOTg5QVo4RTdPOTFaR3dYSUVneUtZT3YtcVg1ZjB4Tjd1M1h0T0hTLTNwVnczbW4zV01KZWZ5Z0xtVXJrYzZkZEFBdnNqRDBuNW55RQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipwFBVV95cUxNNHpBeXNZRzZUWjFaWVFQYXNocF9YZjRMd3Z3UWF6MjJiU0hIWERYYWxYc1EyZlVqcGY5ZDFhUUp1b2QyOHdMcTlMckMwNzBWYlNrNXZIWk1nbGtYOTg5QVo4RTdPOTFaR3dYSUVneUtZT3YtcVg1ZjB4Tjd1M1h0T0hTLTNwVnczbW4zV01KZWZ5Z0xtVXJrYzZkZEFBdnNqRDBuNW55RQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "선거를 앞두고 Bessent는 민주당 원이라고 말합니다",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxObkxLVGNxelN2TDhGZUtrbUROaWc5TEFGR2lYX1laNGZBZGRkbGJocUhUY0t1Z1U1ZXByeWZyYmdPS25xZkdPODFrSzZHRk5Bci1nWGM3bGVoT211SGhRSGlvcnp5b1JrMnVVVXRkZk5iNk5vN3JXdFhvdTBjcDdxMGQ5LWdQMzl0SGtRcXF4UXlnM2oxUnRqSWV5REdLRl8yX2NVVUNwNndUeDV0a1hNRHliUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxObkxLVGNxelN2TDhGZUtrbUROaWc5TEFGR2lYX1laNGZBZGRkbGJocUhUY0t1Z1U1ZXByeWZyYmdPS25xZkdPODFrSzZHRk5Bci1nWGM3bGVoT211SGhRSGlvcnp5b1JrMnVVVXRkZk5iNk5vN3JXdFhvdTBjcDdxMGQ5LWdQMzl0SGtRcXF4UXlnM2oxUnRqSWV5REdLRl8yX2NVVUNwNndUeDV0a1hNRHliUQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Frances Donald는 미국 경제의 회복력이 '대가를 치르고 있다'고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOM2JkTlIyUXhLVXh5SFViZDJpOUdGMXRya1NTb01FaG9OUFUwMjVrUjZBajRHb0ZpeHBOSXlvTkhkVUVPRVZrdXh6NWNaWXFSVGREMkRhMTc5bUhXRUlzSXBzTzMxcUNTWkg4X3hyY2t4dzZINTZ2dzJnbDJDemUtamtuQ3g1eDRaTXZLS0lEX2lLZlJDdFBnU25lNmIyNTNzcWZxWk1wZHYwMzg2?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxOM2JkTlIyUXhLVXh5SFViZDJpOUdGMXRya1NTb01FaG9OUFUwMjVrUjZBajRHb0ZpeHBOSXlvTkhkVUVPRVZrdXh6NWNaWXFSVGREMkRhMTc5bUhXRUlzSXBzTzMxcUNTWkg4X3hyY2t4dzZINTZ2dzJnbDJDemUtamtuQ3g1eDRaTXZLS0lEX2lLZlJDdFBnU25lNmIyNTNzcWZxWk1wZHYwMzg2%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent는 수십 년 만에 가장 개입적인 인물이 되었습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQQ0dQbnREekdKc3V2UjZiMzF5ZGRmMVhZWU5mdVNoNjNNdDFFLXdxQmFiSTA1YlhEM0ZCWk1wbk5ObjY2TnYzVXluT3RSdG1zWnpjRXZtMW1pSlg3ZTBaZG5WdVNmSEdxREdfeWlNY1p2NGZaUENpMTFPOThNUFp2ZFR6NVFVTHpwV3o4WWhiM1NVa2syZVl1VkdkQTJuaXVJOE5LeEtrbXFuWW1feW1VbG9xTQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxQQ0dQbnREekdKc3V2UjZiMzF5ZGRmMVhZWU5mdVNoNjNNdDFFLXdxQmFiSTA1YlhEM0ZCWk1wbk5ObjY2TnYzVXluT3RSdG1zWnpjRXZtMW1pSlg3ZTBaZG5WdVNmSEdxREdfeWlNY1p2NGZaUENpMTFPOThNUFp2ZFR6NVFVTHpwV3o4WWhiM1NVa2syZVl1VkdkQTJuaXVJOE5LeEtrbXFuWW1feW1VbG9xTQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:37"
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
          "title_ko": "美 철강 관세 수혜, 어느 종목으로? [한경 프리미엄9 TODAY]",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA1MExRQXJnekt2eE4wVk5BU09sUXJ0Ym5MVy1oUjkxMnR1a2xjT3MwYkdfTEp0RzRHelpzSGM2X0drMmliU3JYbUUtN05MSEREbDZXT05jVGVBdw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA1MExRQXJnekt2eE4wVk5BU09sUXJ0Ym5MVy1oUjkxMnR1a2xjT3MwYkdfTEp0RzRHelpzSGM2X0drMmliU3JYbUUtN05MSEREbDZXT05jVGVBdw?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "관세 덕에 실적 뛴 美 철강주…주가는 엇갈렸다 [오기자의 미주ㅊㅊ]",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE41RlFTTE11dzNwQlZZN0owdGtvcVFQRWZ1b2ctTVhybDZadGI5M3ZPY1VBb196Qmc4T3IxRWctbXhxM0wzY0I1bFhqaElwQndkQVN5MW5yOC0xQQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE41RlFTTE11dzNwQlZZN0owdGtvcVFQRWZ1b2ctTVhybDZadGI5M3ZPY1VBb196Qmc4T3IxRWctbXhxM0wzY0I1bFhqaElwQndkQVN5MW5yOC0xQQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:37"
    },
    {
      "source": "Reuters",
      "title_ko": "논평: 이란 전쟁 패닉으로 인해 한국 주식이 하락한 것이 아니라 더 저렴해졌습니다.",
      "title_en": "COMMENTARY: Iran war panic made South Korean stocks cheaper, not weaker",
      "summary_ko": "논평: 이란 전쟁 패닉으로 인해 한국 주식이 약해진 것이 아니라 더 저렴해졌습니다. Reuters. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
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
      "crawled_at": "2026-10-20 20:01:39"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "국채선물 약세 출발…간밤 대외금리 연동 속 외국인 순매수",
      "title_en": "",
      "summary_ko": "국채선물 약세 출발…간밤 대외금리 연동 속 외국인 순매수 연합인포맥스. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
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
      "related_articles": [],
      "crawled_at": "2026-10-20 20:01:39"
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
      "crawled_at": "2026-10-20 20:01:42"
    },
    {
      "source": "한겨레",
      "title_ko": "’전날 7% 폭락’ 코스피, 장중 3%대 반등…미 국채금리 하락세 영향",
      "title_en": "",
      "summary_ko": "’전날 7% 폭락’ 코스피, 장중 3%대 반등…미 국채금리 하락세 영향 한겨레. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 한겨레에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1WNE1ZU0NRa1pLZjJyNGJpbm85QjVQYnd2RlB4ZGtJcm5QaFp1bVFnZWUwNVpYMTBnSzVueTU5dnBVb25RTG40NzNySXFfTlVMZHpFVmYtYVVEZ3BUZkh5YVJhc1pZNVE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1WNE1ZU0NRa1pLZjJyNGJpbm85QjVQYnd2RlB4ZGtJcm5QaFp1bVFnZWUwNVpYMTBnSzVueTU5dnBVb25RTG40NzNySXFfTlVMZHpFVmYtYVVEZ3BUZkh5YVJhc1pZNVE?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Fri, 16 Oct 2026 02:51:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-20 20:01:42"
    },
    {
      "source": "Investing.com",
      "title_ko": "코스피, 외국인·기관 1.5조 ’팔자’에 와르르…5550대로 후퇴 By EBN",
      "title_en": "",
      "summary_ko": "코스피, 외국인·기관 1.5조 ’팔자’에 와르르…5550대로 후퇴 By EBN Investing.com 한국어. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. Investing.com뿐만 아니라 머니투데이, 한양경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFB6cmw0NThQRk1DTHJyS1d3MG43YjNaWG9MSTJNaHFTLWdFNTVoVXRUYmlrMGhqQm5uRkNEQzloWUxib2JQQ1FwYlVBNjI1TlJ3VnZHNERON0xlWkhjVmotc2RCQnI3SGk2LUFoVXNKSkU?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFB6cmw0NThQRk1DTHJyS1d3MG43YjNaWG9MSTJNaHFTLWdFNTVoVXRUYmlrMGhqQm5uRkNEQzloWUxib2JQQ1FwYlVBNjI1TlJ3VnZHNERON0xlWkhjVmotc2RCQnI3SGk2LUFoVXNKSkU?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 20 Oct 2026 07:41:00 GMT",
      "related_articles": [
        {
          "source": "서울경제TV",
          "title_ko": "코스피, 외국인·기관 매도에 3.73% 급락…5500선 후퇴",
          "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9IY2ZpT2xMT3p4TlUwblNZc1JZR3dJMnllbWloWVRDejM0Nm9qOGJoZjZrclZjb0F6ZGlpUk96a2s2ODlIVDVKYTVpRFpXcDlDZlpaaHQ0NElER25fdjdnVWtOQmI?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9IY2ZpT2xMT3p4TlUwblNZc1JZR3dJMnllbWloWVRDejM0Nm9qOGJoZjZrclZjb0F6ZGlpUk96a2s2ODlIVDVKYTVpRFpXcDlDZlpaaHQ0NElER25fdjdnVWtOQmI?oc=5"
        },
        {
          "source": "한양경제",
          "title_ko": "[마감시황] 코스피, 외국인·기관 매도에 3.73% 급락…5500선 턱걸이",
          "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE0xY3NnTXB6Q2dndFBwdFB6OHFRS3Fya2FJQmNWdkFvWVBiYTc5dU15MV9JWFFreWxybHdiN1ItLXc1WlRRY3poajVrTGZuOE9qUHNZdWM0NGYzLV80eUNlTFNlT1p3Nlh3bThob2lUTkhKUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE0xY3NnTXB6Q2dndFBwdFB6OHFRS3Fya2FJQmNWdkFvWVBiYTc5dU15MV9JWFFreWxybHdiN1ItLXc1WlRRY3poajVrTGZuOE9qUHNZdWM0NGYzLV80eUNlTFNlT1p3Nlh3bThob2lUTkhKUQ?oc=5"
        },
        {
          "source": "머니투데이",
          "title_ko": "코스피, 외국인·기관 매도에 3.73% 하락…5552.74 마감 - 머니투데이",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9KVW1JN013YlF2X0dNRE9BWUtfZ3pGQ0xaemUyN2tQNlA2X1MxbWdNdWdlVEZNVlZ0ai1pRno5S0JZQWQwWTR6QVB5OFNyVVFWbVVLd25sOGItblpVaTVQdTRzWDRGekhO0gFuQVVfeXFMTmxmY25SakdjN1RoZDdOTUpwdm1qQVVGc2lhMzJuLVRiMExsSUN2MzVoWHczLXlvLVgwMjRFV3VwSjhhUm1mRmJaZmxkRHpFZEk4LUw1QzJyTDdoY2lEd2RSbTE1M3NLRURFNGswMkE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9KVW1JN013YlF2X0dNRE9BWUtfZ3pGQ0xaemUyN2tQNlA2X1MxbWdNdWdlVEZNVlZ0ai1pRno5S0JZQWQwWTR6QVB5OFNyVVFWbVVLd25sOGItblpVaTVQdTRzWDRGekhO0gFuQVVfeXFMTmxmY25SakdjN1RoZDdOTUpwdm1qQVVGc2lhMzJuLVRiMExsSUN2MzVoWHczLXlvLVgwMjRFV3VwSjhhUm1mRmJaZmxkRHpFZEk4LUw1QzJyTDdoY2lEd2RSbTE1M3NLRURFNGswMkE?oc=5"
        },
        {
          "source": "아시아경제",
          "title_ko": "코스피, 외국인·기관 매도 확대에 3% 하락 마감",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9GY0F0d1F2QVVXamFFYmxSYmplS2UzQjJERUMwRlNhQUhBSlh6U21COWk1STJ2dUFmSko2ZHBNd3ZFSDZGMzR2MlNWeVdWOEhQMHZSVkZxMFhsR2p2YlR3Qg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9GY0F0d1F2QVVXamFFYmxSYmplS2UzQjJERUMwRlNhQUhBSlh6U21COWk1STJ2dUFmSko2ZHBNd3ZFSDZGMzR2MlNWeVdWOEhQMHZSVkZxMFhsR2p2YlR3Qg?oc=5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:42"
    },
    {
      "source": "KB Think",
      "title_ko": "[외환-주간] 증시, 외국인 그리고 금통위…연저점 이후 어디로",
      "title_en": "",
      "summary_ko": "[외환-주간] 증시, 외국인 그리고 금통위…연저점 이후 어디로 KB Think. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. KB Think에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5JTTRUaHlKYTN5amo4QjJzVUdNRXhvZ1NpZ2FmME8wRUxpVy1HSUJrY0UwaXE5bEJkSWszbERTM3ZUZ2F1Mkc3UzhJckg3amVRcHRKa2pGQ1VkMDJ4UmdFa0Q4UmJETkFiUkNQcGYyMThHZw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5JTTRUaHlKYTN5amo4QjJzVUdNRXhvZ1NpZ2FmME8wRUxpVy1HSUJrY0UwaXE5bEJkSWszbERTM3ZUZ2F1Mkc3UzhJckg3amVRcHRKa2pGQ1VkMDJ4UmdFa0Q4UmJETkFiUkNQcGYyMThHZw?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 18 Oct 2026 04:00:01 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-20 20:01:42"
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
      "crawled_at": "2026-10-20 20:01:42"
    },
    {
      "source": "한국경제",
      "title_ko": "中, 대출금리 결정체계 대수술…기업이 기준금리 직접 고른다 [차이나 워치]",
      "title_en": "",
      "summary_ko": "中, 대출금리 결정체계 대수술…기업이 기준금리 직접 고른다 [차이나 워치] 한국경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 한국경제뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE95ekVtbWZYWkZYOEdLUkZsYWs2QVlTaVBfQWZCU2dMRDZscjZsM2lTTkdtQzZvVHB0ZVRaZDVSaHRuVmFHSVRBVTdITEVUdVJVNUhPQjUyT2U0UQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE95ekVtbWZYWkZYOEdLUkZsYWs2QVlTaVBfQWZCU2dMRDZscjZsM2lTTkdtQzZvVHB0ZVRaZDVSaHRuVmFHSVRBVTdITEVUdVJVNUhPQjUyT2U0UQ?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 19 Oct 2026 10:02:08 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "\"3.25%가 최종 기준금리될 것…핵심 물가, 12월이 피크\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1VRmhiZy1DY0ZEVm4tWnVEVnlxWG5LYXpodkZ3M1dHNWpveEJmMWY2MkNPTlFrLVRFcmIwZFQ1M09rUnZBQzVub0NjN2x0bnV0Y2M0MUtoeWVuYkNJTnZrQjVleW5wallNcExndkNOOEY?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1VRmhiZy1DY0ZEVm4tWnVEVnlxWG5LYXpodkZ3M1dHNWpveEJmMWY2MkNPTlFrLVRFcmIwZFQ1M09rUnZBQzVub0NjN2x0bnV0Y2M0MUtoeWVuYkNJTnZrQjVleW5wallNcExndkNOOEY?oc=5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:42"
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
      "crawled_at": "2026-10-20 20:01:42"
    },
    {
      "source": "YTN",
      "title_ko": "한은, 이번 주 기준금리 결정...시장은 동결 전망",
      "title_en": "",
      "summary_ko": "한은, 이번 주 기준금리 결정...시장은 동결 전망 YTN. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. YTN뿐만 아니라 경향신문, 연합뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9FYUpMVGRZWThuTFNlR2ZnR0loRFRMUTNWbmF2OFFFbHZvQVpRbC1kSzZxdVc0YUhNc292SG9qQ2pYNHBOdDlpWk5PTGkzUU9KQ3g4T2xlUWExWnNPLUE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9FYUpMVGRZWThuTFNlR2ZnR0loRFRMUTNWbmF2OFFFbHZvQVpRbC1kSzZxdVc0YUhNc292SG9qQ2pYNHBOdDlpWk5PTGkzUU9KQ3g4T2xlUWExWnNPLUE?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 18 Oct 2026 13:10:00 GMT",
      "related_articles": [
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
        },
        {
          "source": "한국경제",
          "title_ko": "\"한은, 기준금리 10월 동결, 11월엔 인상 유력\"",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE0xRlBleVVMN3Jra3J0RlBsUWYwQ19xUXRzZWYwSXRrUjY5ckw1Rjc5aDJwNlpkV3FVcnotVzA2VkRlNGhNcWtwYmE1WEJlV3pnak5ua2NDbFhDUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE0xRlBleVVMN3Jra3J0RlBsUWYwQ19xUXRzZWYwSXRrUjY5ckw1Rjc5aDJwNlpkV3FVcnotVzA2VkRlNGhNcWtwYmE1WEJlV3pnak5ua2NDbFhDUQ?oc=5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:43"
    },
    {
      "source": "오피니언뉴스",
      "title_ko": "기준금리 인상 10월엔 쉬어가나…금통위, 오는 22일 연 3% 동결 전망 우세",
      "title_en": "",
      "summary_ko": "기준금리 인상 10월엔 쉬어가나…금통위, 오는 22일 연 3% 동결 전망 우세 오피니언뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 오피니언뉴스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1jVGNEbjFWbmN6QWN4SmtzTklKVW9WeklaamN6LVJWSTdKN1Y1NWdJVlFXVWJDNUhrSS16NkxxOWpVS0FneVJRdXI1c1QyVTdXZXVyQ1RFV0JJbXg1aUdIZlB1MmFHNXlHY2o1ei1UdVg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1jVGNEbjFWbmN6QWN4SmtzTklKVW9WeklaamN6LVJWSTdKN1Y1NWdJVlFXVWJDNUhrSS16NkxxOWpVS0FneVJRdXI1c1QyVTdXZXVyQ1RFV0JJbXg1aUdIZlB1MmFHNXlHY2o1ei1UdVg?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 20 Oct 2026 07:06:46 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-20 20:01:43"
    },
    {
      "source": "Reuters",
      "title_ko": "TSMC의 세 번째",
      "title_en": "TSMC's third-quarter revenue surges to record, beating market forecast",
      "summary_ko": "TSMC의 세 번째 관련 핵심 동향이 발표되었습니다. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Investing.com, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "Nvidia의 Huang, 사이버 보안을 AI의 차세대 거대 시장으로 선전",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxObTk1Ul8zTVNzemNWaEFYNUZvUUNWS1I1OEoyckYtRGtablRwMDI5bVlaRld3SDdxSV82amQ5UlJkWllPYUdCdEw4ak9lVkY3TDZPRlh2azZkY3ZJTzBnaC00UDdsY2RLTmdtM2JiRFNhdHhXdzYzd3pUUEFjTHZteFBnTXhrVlFFQUJNemtjeEt6ZXFVb3NUOUcwTXYwMUFfYzJnMm9TQkJ3cnQ0UmJZcA%3Foc%3D5"
        },
        {
          "source": "Investing.com",
          "title_ko": "TSMC 3분기 이익이 69% 증가해 기대치를 뛰어넘었습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNSERVSDlFcHlXU0ZUWHg2QlgtX2w2QUhLQV9vclFPWnVlUzZOX3ZCRWNaaEtiLVo3MzM1SUI2Q0VfRTNFcWczejBfcUprYzNORmtDbV9VYTFNTjJJbW95WlNtbnBEQi1adXo2bGZOYVBjdzdyaENhSUdhVUNWdkVmTFpZREc1ZXY0UzMtMDB1Vk9BVlhMWkw1aS1ONDdXbENmTERuWXI3bUVVWHNob3FkaA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxNSERVSDlFcHlXU0ZUWHg2QlgtX2w2QUhLQV9vclFPWnVlUzZOX3ZCRWNaaEtiLVo3MzM1SUI2Q0VfRTNFcWczejBfcUprYzNORmtDbV9VYTFNTjJJbW95WlNtbnBEQi1adXo2bGZOYVBjdzdyaENhSUdhVUNWdkVmTFpZREc1ZXY0UzMtMDB1Vk9BVlhMWkw1aS1ONDdXbENmTERuWXI3bUVVWHNob3FkaA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:45"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Nvidia의 주식은 가치 하락으로 경고 신호를 깜박이고 있습니다.",
      "title_en": "Nvidia’s Stock Is Flashing a Warning Sign as Valuation Drops",
      "summary_ko": "엔비디아 주식은 가치 평가 하락으로 경고 신호를 보내고 있습니다. Bloomberg.com. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "엔비디아가 빠르게 승리",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNUklvMHh4T2thUkdNSndrQ3BVOTZjalQwRnJ2ZFdhb3Q4aC1NT2k2LTBLX1AxZmlHdTdheHp1ZDF1ZGVSd2JLc3VFUU1ycWRndnRmS2ZyYVpGeU52OU9IQU5qVHdJb1BXNjJ1MlN4MF9aajQ5QXhmQnhYTXowWEFUa29BQkYySzBxeG1CU0Z0MHB6U3psLU1EcTB4Z3N2dkVYSFM3cEgtNlQ4Uk5VTlE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNUklvMHh4T2thUkdNSndrQ3BVOTZjalQwRnJ2ZFdhb3Q4aC1NT2k2LTBLX1AxZmlHdTdheHp1ZDF1ZGVSd2JLc3VFUU1ycWRndnRmS2ZyYVpGeU52OU9IQU5qVHdJb1BXNjJ1MlN4MF9aajQ5QXhmQnhYTXowWEFUa29BQkYySzBxeG1CU0Z0MHB6U3psLU1EcTB4Z3N2dkVYSFM3cEgtNlQ4Uk5VTlE%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "엔비디아의 중국 AI",
          "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOZ2lCcTJZLWVsU3NJWjJRV2xZd0RXM1NtbWNnQUtfb1RsSjlNVmFEWnVxYVJ5Y0pXS0lWV284NlVCWkp2Qy1jbm5na2ZFeE5BYmNlWFVaVGttNElacjE1SGlaeVBOc1J5Z042bUlOS3JPbWpHcloxVDF5X3B2NG5hSEdCcHp0SGswU3d5VWNNWE02bE1KS0VyTVROTlJxUTRFUzNQM3hrbERWWWh5X21pSFg2ajBBOG02cXdzS1UyV09MY0k?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxOZ2lCcTJZLWVsU3NJWjJRV2xZd0RXM1NtbWNnQUtfb1RsSjlNVmFEWnVxYVJ5Y0pXS0lWV284NlVCWkp2Qy1jbm5na2ZFeE5BYmNlWFVaVGttNElacjE1SGlaeVBOc1J5Z042bUlOS3JPbWpHcloxVDF5X3B2NG5hSEdCcHp0SGswU3d5VWNNWE02bE1KS0VyTVROTlJxUTRFUzNQM3hrbERWWWh5X21pSFg2ajBBOG02cXdzS1UyV09MY0k%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 Huang, 다음 주에 유럽 AI 거래에서 20억 달러 계획",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPQTUyMWwxLUpnYVFUYlNzVS1YS0d5UkpaWXhsbmZ6U08xMmNKUTFSU01rSTRjN0Z4UF9hTG0tajg4TFZqZExYVS1oZkxJWlNFM0hBc2ctbUZBU1htclhwWVB6ajludXpVT3NDZ21YaEk3UExON3ZpZVF3YU1ycDI2MS0tVU1jelR5N3F2emRKT2JDcUE4V3hiUzlxY21SNXBXdHl1YzJWREFfY2I3cWhEa2Z0VQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPQTUyMWwxLUpnYVFUYlNzVS1YS0d5UkpaWXhsbmZ6U08xMmNKUTFSU01rSTRjN0Z4UF9hTG0tajg4TFZqZExYVS1oZkxJWlNFM0hBc2ctbUZBU1htclhwWVB6ajludXpVT3NDZ21YaEk3UExON3ZpZVF3YU1ycDI2MS0tVU1jelR5N3F2emRKT2JDcUE4V3hiUzlxY21SNXBXdHl1YzJWREFfY2I3cWhEa2Z0VQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 200억 달러 규모 Groq 거래, 가치 평가 도전에 성공(1)",
          "original_url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPRFk4d1ZmOThiNnJoQXRIdUVKQTFjWXhmNk8tb1pya1BpaTZ1VmxnOUluSnMwdzVYMW9nNHFBZlJjbGpyeWVXY0FZbGdWRDRZWW9yYmkzajNsT3V1dGJIZ2hFck5yVDJYUk00RU5yWFl3ZFpGcGtqNkxnTjNDQnBsc2xPY2tFYTFWd0dkRDVtUVVYU1ZpSmtIaw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimAFBVV95cUxPRFk4d1ZmOThiNnJoQXRIdUVKQTFjWXhmNk8tb1pya1BpaTZ1VmxnOUluSnMwdzVYMW9nNHFBZlJjbGpyeWVXY0FZbGdWRDRZWW9yYmkzajNsT3V1dGJIZ2hFck5yVDJYUk00RU5yWFl3ZFpGcGtqNkxnTjNDQnBsc2xPY2tFYTFWd0dkRDVtUVVYU1ZpSmtIaw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:49"
    },
    {
      "source": "글로벌이코노믹",
      "title_ko": "캐시 우드 \"메모리 악순환\" 경고…SK하이닉스, HBM 초격차로 돌파",
      "title_en": "",
      "summary_ko": "캐시 우드 \"메모리 악순환\" 경고…SK하이닉스, HBM 초격차로 돌파 글로벌이코노믹. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. 글로벌이코노믹에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxORTF4cFFkcEU2ZWxsWnNKcXFEYnBRVnJQN3FZdDl5elpOWEVMbHB3SHFkUFlUMEk3OFBVN1BBbUZSazBLdnVGWEt4LTYxSnlOYlZscERrZlNXZDdrQ2NBaE5XZVBaelpYc2JlZXJjeTVObjhkU3kzZ3lGM21fMU5WLUg3eVBuU3pH?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxORTF4cFFkcEU2ZWxsWnNKcXFEYnBRVnJQN3FZdDl5elpOWEVMbHB3SHFkUFlUMEk3OFBVN1BBbUZSazBLdnVGWEt4LTYxSnlOYlZscERrZlNXZDdrQ2NBaE5XZVBaelpYc2JlZXJjeTVObjhkU3kzZ3lGM21fMU5WLUg3eVBuU3pH?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 18 Oct 2026 04:23:17 GMT",
      "related_articles": [],
      "crawled_at": "2026-10-20 20:01:49"
    },
    {
      "source": "Bloomberg",
      "title_ko": "거래자들은 관세 조짐 없이 구리 강세장을 경계하고 있습니다.",
      "title_en": "Traders Grow Wary of Copper Bull Market With No Sign of Tariffs",
      "summary_ko": "관세 조짐 없이 구리 강세장에 대한 거래자들의 경계 Bloomberg.com. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNbm1MclVHa3FIVkhCVmFyME5wWHNoNlVDd2NEaTRHSk0ydW0wMU91SG5kY25wVm02R0xwTmFILS1UckNNVlIzbmZGV2Qwak1lOXo3UVlRYzVVUDFJb3RGSHhPaGxzYXdxUS1vbzlybkZuczEwSmJtYnpRb2laUzk4Q05xTlNiYmZ2dDJOWVp0eHQ3N1JuSlVFOTIwdEZKUFV4aXRVYkluX2tvRWdUWlljXzhza0Eyb0xTZUFaeE5NeWY5RGhuOTVPWDlQNm9HczFiRnBaYUNibUxBdmJGMG9xMDctZw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMi4wFBVV95cUxNbm1MclVHa3FIVkhCVmFyME5wWHNoNlVDd2NEaTRHSk0ydW0wMU91SG5kY25wVm02R0xwTmFILS1UckNNVlIzbmZGV2Qwak1lOXo3UVlRYzVVUDFJb3RGSHhPaGxzYXdxUS1vbzlybkZuczEwSmJtYnpRb2laUzk4Q05xTlNiYmZ2dDJOWVp0eHQ3N1JuSlVFOTIwdEZKUFV4aXRVYkluX2tvRWdUWlljXzhza0Eyb0xTZUFaeE5NeWY5RGhuOTVPWDlQNm9HczFiRnBaYUNibUxBdmJGMG9xMDctZw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 20 Oct 2026 11:00:02 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "시장이 미국의 주요 인플레이션 데이터를 기다리면서 금값 하락",
          "original_url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOQ3pfajk5NldmMDliSlhNU3ZYd1J6UGt3cWM4ZHBzTkxnYTVGbnVWU0ZOVFFqLUk2eFYyQnhxdUxiUFp5Y0lXTnpEOGIwMHBveTR5bzBvZmxjWTA4TmR6OUt0U1ZSd2V0dDhkMlg4TkpFdlFCSEtJN3BXYXJQMFZLZDgyZjR6UTRXeU5fRFZ1MHM1WXpCMEtTOF9CNmptQTJmNzBQN1JyMA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipwFBVV95cUxOQ3pfajk5NldmMDliSlhNU3ZYd1J6UGt3cWM4ZHBzTkxnYTVGbnVWU0ZOVFFqLUk2eFYyQnhxdUxiUFp5Y0lXTnpEOGIwMHBveTR5bzBvZmxjWTA4TmR6OUt0U1ZSd2V0dDhkMlg4TkpFdlFCSEtJN3BXYXJQMFZLZDgyZjR6UTRXeU5fRFZ1MHM1WXpCMEtTOF9CNmptQTJmNzBQN1JyMA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:01:53"
    },
    {
      "source": "Reuters",
      "title_ko": "독점: ByteDance, Alibaba, Tencent, 350억 달러 이상의 Nvidia 칩 주문",
      "title_en": "EXCLUSIVE: ByteDance, Alibaba, Tencent place over $35 billion worth of Nvidia chip orders",
      "summary_ko": "독점: ByteDance, Alibaba, Tencent, 350억 달러 상당의 Nvidia 칩 주문 Reuters. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. Reuters뿐만 아니라 Wall Street Journal, The Next Web 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "Nvidia가 지원하는 Lambda는 칩 거래를 위해 10억 달러의 개인 부채를 기록합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPNlg2YUFpb3paaFpOeTgtR2FVSFhZd1ZVaTZGTXBwbTh2bDg3WS1CdVphZ1YyTmpneDJndVZSWGJiM0NQdk1XRUhxa1lmdXZZQk5HVGp2S3VrdFl6bHlXUm1OWFNwNk9wbGxjemhOa0lQM3JZRVk1WmVaV3Zva0R0T2JOdmpleFFVd2hZbUJsT3ctYmNyMk04ODQxaklmaVpMNHFzVEt1ZkVPbHFiQjNkTGVnZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPNlg2YUFpb3paaFpOeTgtR2FVSFhZd1ZVaTZGTXBwbTh2bDg3WS1CdVphZ1YyTmpneDJndVZSWGJiM0NQdk1XRUhxa1lmdXZZQk5HVGp2S3VrdFl6bHlXUm1OWFNwNk9wbGxjemhOa0lQM3JZRVk1WmVaV3Zva0R0T2JOdmpleFFVd2hZbUJsT3ctYmNyMk04ODQxaklmaVpMNHFzVEt1ZkVPbHFiQjNkTGVnZw%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "독점 | 중국의 ByteDance, 최고의 Nvidia AI 칩에 액세스",
          "original_url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPbUhubDRvVC1CWXdTbmsybGJ6VjBOb19rcWJlbXBucjJ5ZndVY2FZNmNDQWVOZW9QOThsWG1yTThkbVlvU0g2ZnFnbXpYUV9iNElpdkU2NzVyU1BYODlfZl9ONVVxOTQyMWVTN04xUHpqUzVUcV9NaWp0ZTUzQmVGZkdZTjE0XzRSc1RzajNB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijgFBVV95cUxPbUhubDRvVC1CWXdTbmsybGJ6VjBOb19rcWJlbXBucjJ5ZndVY2FZNmNDQWVOZW9QOThsWG1yTThkbVlvU0g2ZnFnbXpYUV9iNElpdkU2NzVyU1BYODlfZl9ONVVxOTQyMWVTN04xUHpqUzVUcV9NaWp0ZTUzQmVGZkdZTjE0XzRSc1RzajNB%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "독점 | AI 칩 수요 급증으로 Positron의 신규 자금 조달 가치가 50억 달러로 평가",
          "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQZWpZd1RtLU1tcFpSOUoxYVYtd0gzeTZfanNNaVg1UWxoZ2lfSTFZV2MzdldoTDQyR0lCTGFUd1ZsTG8xcVRlZ1NZWHBPWWphNHdpTTVjSFAtREJnQzhZc0VaS3Vha3U0bVBPQXZqdmhRRlV0Rm9DWnE2MnFTTS1sTWlwajZ1VHFDanNianRkRnpkaG5WZ3ZfT01NdkkzaHlSbUw0?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxQZWpZd1RtLU1tcFpSOUoxYVYtd0gzeTZfanNNaVg1UWxoZ2lfSTFZV2MzdldoTDQyR0lCTGFUd1ZsTG8xcVRlZ1NZWHBPWWphNHdpTTVjSFAtREJnQzhZc0VaS3Vha3U0bVBPQXZqdmhRRlV0Rm9DWnE2MnFTTS1sTWlwajZ1VHFDanNianRkRnpkaG5WZ3ZfT01NdkkzaHlSbUw0%3Foc%3D5"
        },
        {
          "source": "The Next Web",
          "title_ko": "Nvidia는 중국이 350억 달러 규모의 RTX PRO 5500을 주문함에 따라 \"오래된\" 연석을 비난합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPSlFsOXlJeUY3TnpPTW5UU2g5bG5PSGVMZTZFWklBTEVjYnNHOXNWVzdQaWNGUjVhaHExVDhXTnJCNmlwSFRQd1IyQS16eHZLNF9OUmR4MkFCY1lpWGp4RUZoZlp2YklBZDNOM25jMllVRzNrWDlLejNLQzV4d0ZGNTdJRUNSbWNmbk5fRnliNA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijwFBVV95cUxPSlFsOXlJeUY3TnpPTW5UU2g5bG5PSGVMZTZFWklBTEVjYnNHOXNWVzdQaWNGUjVhaHExVDhXTnJCNmlwSFRQd1IyQS16eHZLNF9OUmR4MkFCY1lpWGp4RUZoZlp2YklBZDNOM25jMllVRzNrWDlLejNLQzV4d0ZGNTdJRUNSbWNmbk5fRnliNA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-10-20 20:02:00"
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
