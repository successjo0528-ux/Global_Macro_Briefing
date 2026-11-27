window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-11-28 05:01:44",
    "date_str": "2026년 11월 28일 (토)",
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
      "price": 4.153,
      "previous_close": 4.145,
      "change": 0.008,
      "change_percent": 0.19,
      "display_price": "4.153%",
      "status": "up",
      "history": [
        4.145,
        4.147,
        4.122,
        4.147,
        4.168,
        4.155,
        4.153
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-11-27 20:00:40"
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
      "price": 4.936,
      "previous_close": 5.066,
      "change": -0.13,
      "change_percent": -2.57,
      "display_price": "4.936%",
      "status": "down",
      "history": [
        5.066,
        5.052,
        4.912,
        4.918,
        4.904,
        4.848,
        4.936
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-11-27 20:00:41",
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
      "price": 5.325,
      "previous_close": 5.412,
      "change": -0.087,
      "change_percent": -1.61,
      "display_price": "5.325%",
      "status": "down",
      "history": [
        5.412,
        5.401,
        5.303,
        5.294,
        5.292,
        5.235,
        5.325
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-11-27 20:00:41"
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
      "price": 104.033,
      "previous_close": 103.9,
      "change": 0.133,
      "change_percent": 0.13,
      "display_price": "104.03 pt",
      "status": "up",
      "history": [
        103.9,
        103.81,
        104.32,
        103.81,
        103.67,
        104.033
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-11-27 20:00:41"
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
      "price": 159.559,
      "previous_close": 159.381,
      "change": 0.178,
      "change_percent": 0.11,
      "display_price": "159.56엔",
      "status": "up",
      "history": [
        159.381,
        159.707,
        158.931,
        159.009,
        159.262,
        159.215,
        159.559
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-11-27 20:00:41"
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
      "price": 3668.5,
      "previous_close": 3685.5,
      "change": -17.0,
      "change_percent": -0.46,
      "display_price": "$3,668.50",
      "status": "down",
      "history": [
        3685.5,
        3515.4,
        3651.4,
        3561.9,
        3535.8,
        3668.5
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-11-27 20:00:41"
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
      "price": 83.08,
      "previous_close": 83.21,
      "change": -0.13,
      "change_percent": -0.16,
      "display_price": "$83.08",
      "status": "down",
      "history": [
        83.21,
        83.98,
        80.17,
        82.05,
        83.68,
        83.08
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-11-27 20:00:42"
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
      "price": 59810.79,
      "previous_close": 60094.09,
      "change": -283.3,
      "change_percent": -0.47,
      "display_price": "$59,811",
      "status": "down",
      "history": [
        60094.09,
        61161.91,
        61210.984,
        59747.766,
        60378.199,
        60494.711,
        59810.789
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-11-27 20:00:42"
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
      "price": 898.8,
      "previous_close": 368.5,
      "change": 530.3,
      "change_percent": 143.91,
      "display_price": "$898.8B (약 8,988억$)",
      "status": "up",
      "history": [
        17.9,
        35.9,
        880.8,
        958.4,
        308.9,
        368.5,
        898.8
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-11-27 20:00:42"
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
      "price": 7297.49,
      "previous_close": 7340.53,
      "change": -43.04,
      "change_percent": -0.59,
      "display_price": "7,297.49",
      "status": "down",
      "history": [
        7323.63,
        7175.83,
        6910.39,
        7237.17,
        7201.09,
        7182.78,
        7297.49
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-11-27 20:00:43"
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
      "price": 26726.389,
      "previous_close": 27001.78,
      "change": -275.391,
      "change_percent": -1.02,
      "display_price": "26,726.39",
      "status": "down",
      "history": [
        27116.26,
        26517.051,
        25028.98,
        26746.1,
        26214.17,
        26046.9,
        26726.389
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-11-27 20:00:43"
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
      "price": 9186.706,
      "previous_close": 9642.88,
      "change": -456.174,
      "change_percent": -4.73,
      "display_price": "9,186.71",
      "status": "down",
      "history": [
        9652.8,
        9419.72,
        8408.59,
        9588.05,
        8832.5,
        8774.86,
        9186.706
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-11-27 20:00:43"
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
      "price": 23.81,
      "previous_close": 28.44,
      "change": -4.63,
      "change_percent": -16.28,
      "display_price": "23.81",
      "status": "down",
      "history": [
        28.44,
        35.89,
        26.62,
        26.36,
        28.29,
        26.8,
        23.81
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-11-27 20:00:43"
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
      "price": 1333.27,
      "previous_close": 1330.4,
      "change": 2.87,
      "change_percent": 0.22,
      "display_price": "1,333.27원",
      "status": "up",
      "history": [
        1330.4,
        1334.79,
        1344.31,
        1341.02,
        1342.65,
        1342.97,
        1333.27
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-11-27 20:00:44",
      "fx_averages": {
        "avg_1y": 1437.4,
        "avg_3y": 1402.4
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
      "price": 4915.68,
      "previous_close": 5067.44,
      "change": -151.76,
      "change_percent": -2.99,
      "display_price": "4,915.68",
      "status": "down",
      "history": [
        5137.89,
        4869.96,
        4708.54,
        5006.03,
        4697.51,
        4711.21
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-11-27 20:00:44"
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
      "price": 708.99,
      "previous_close": 662.81,
      "change": 46.18,
      "change_percent": 6.97,
      "display_price": "708.99",
      "status": "up",
      "history": [
        684.81,
        645.68,
        635.45,
        665.88,
        650.64,
        655.71
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-11-27 20:00:44"
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
      "updated_at": "2026-11-27 20:00:44"
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
      "updated_at": "2026-11-27 20:00:45"
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
      "price": 135.86,
      "previous_close": 135.32,
      "change": 0.54,
      "change_percent": 0.4,
      "display_price": "$135.86",
      "status": "up",
      "history": [
        136.73,
        134.59,
        123.26,
        135.72,
        130.7,
        129.19,
        135.86
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-11-27 20:00:45"
    }
  ],
  "news": [
    {
      "source": "Reuters",
      "title_ko": "연준(Fed)의 윌리엄스 \"인플레이션은 여전히 ​​너무 높아 추가 금리 인상 가능성 신호\"",
      "title_en": "Fed's Williams says inflation still too high, signals more rate hikes possible",
      "summary_ko": "연준(Fed)의 윌리엄스 \"인플레이션은 여전히 ​​너무 높아 추가 금리 인상 가능성 신호\" 관련 핵심 동향이 발표되었습니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNa3lvbHFTMGFKUm9paUJYVzFoQzd1QnQtSzAtTlZmSlFyRW5Sc1hic3p2MVV0VWVrYjFkNDdQZlFTUWMzZGFueG5yMTVMcGhLWUxwQi16Ujk5b2ppMVRWTGowaHlMZDQ4Z19xbWpCQTRFVzFHSHhxeW9kbG80OTVtSEZsb3REX29FRFFPR0xzTnFjYXh6?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilAFBVV95cUxNa3lvbHFTMGFKUm9paUJYVzFoQzd1QnQtSzAtTlZmSlFyRW5Sc1hic3p2MVV0VWVrYjFkNDdQZlFTUWMzZGFueG5yMTVMcGhLWUxwQi16Ujk5b2ppMVRWTGowaHlMZDQ4Z19xbWpCQTRFVzFHSHhxeW9kbG80OTVtSEZsb3REX29FRFFPR0xzTnFjYXh6%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 23 Nov 2026 23:38:48 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "도쿄의 빨라진 인플레이션 속도, BOJ에 대한 사례 소개",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPcC1BOTk5RDl4MEhDRXl4a1J6VktNMlVWWWx4WnZoMzdEdHRfM1hoS2RmZWdfUFNzMk9JVlBJYTAxMzRMdzlPMXE5WHZUaHg5TVhYUWlhTlI4blpWazdfTG9nTjhnbGVrM3FWMjF2YjhhZG56SWtid0Z6YmFWMkJlejNwdzU1cnVJTl9jZm1aV2g3M0lXVnRtWENUVDJZLVdQNThfRDZTdE1VSmtWd29ibC1TZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPcC1BOTk5RDl4MEhDRXl4a1J6VktNMlVWWWx4WnZoMzdEdHRfM1hoS2RmZWdfUFNzMk9JVlBJYTAxMzRMdzlPMXE5WHZUaHg5TVhYUWlhTlI4blpWazdfTG9nTjhnbGVrM3FWMjF2YjhhZG56SWtid0Z6YmFWMkJlejNwdzU1cnVJTl9jZm1aV2g3M0lXVnRtWENUVDJZLVdQNThfRDZTdE1VSmtWd29ibC1TZw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "ECB의 Nagel, 12월에 또 다른 삽입 인상 필요 신호",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPRlpPOVV2bmRKNmQ0WFI0TlNOS3haQzFnOFJ6R2Y1ME5YUURJV2RMTldFTXBpenJzWWR5UkdfdGc4ZW02aGJFQV80V3RvMDl5S2FTaXdCZ09zS1RUMm15V19HV3FkbXZkMjVkOFJMbTVwbEFxSjNHRjFlZEZ2U3FTaEhyUGtkVFEwNzFVR1c4SGpIcEFWVlhqMERqelBUSWJDbGo5NHNGdzF1d1dPdnc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxPRlpPOVV2bmRKNmQ0WFI0TlNOS3haQzFnOFJ6R2Y1ME5YUURJV2RMTldFTXBpenJzWWR5UkdfdGc4ZW02aGJFQV80V3RvMDl5S2FTaXdCZ09zS1RUMm15V19HV3FkbXZkMjVkOFJMbTVwbEFxSjNHRjFlZEZ2U3FTaEhyUGtkVFEwNzFVR1c4SGpIcEFWVlhqMERqelBUSWJDbGo5NHNGdzF1d1dPdnc%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Hawkish Bank of Japan 회원, 인플레이션에 대한 빠른 금리 인상 추구",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPZ0FVN1RFanhlMEZqZV8xTUp2SHljUzhfMF9WZW5VaW51dkViU1FJTW9wdTRaSVNFRk5VLUMzZ3JXajd1VzRPZ2F2OXVxRHFSakwzOGZsd3JsRmMxbWx5UktVWC1OZ3lYdmx0WlBiRVREUXdoUWFRbG5xVDRuRWpnTXdRQW9RUEV5bk9yMy1zX2Vyb1VzclBWbTVrUVRyNTlmVHFIR1ZZT0c5UEhHWXNXNlBrcnU3UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPZ0FVN1RFanhlMEZqZV8xTUp2SHljUzhfMF9WZW5VaW51dkViU1FJTW9wdTRaSVNFRk5VLUMzZ3JXajd1VzRPZ2F2OXVxRHFSakwzOGZsd3JsRmMxbWx5UktVWC1OZ3lYdmx0WlBiRVREUXdoUWFRbG5xVDRuRWpnTXdRQW9RUEV5bk9yMy1zX2Vyb1VzclBWbTVrUVRyNTlmVHFIR1ZZT0c5UEhHWXNXNlBrcnU3UQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "RBA 금리 인상 후에도 호주 인플레이션 가속화",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPSmZnclVsakZpNHFUSWtSVk4walE3M0V1bkM0RHgyWFVpRjVzVHM0TTI4TWhTYnNjQXJSTWkzdWZ2clZiVmEyaTEtSjlheHZTUURJWXB6TF9mc1JrcEZxbjlfWUJTLTlieWpSa2dzWHNPem1IVEdCVFNwSmFqYW95cTI0ak4wSUE2UC1EV19WZVU5MUpSRUNPeUUtYWNHb3AyazFodU9qVzNMbmJZZVE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxPSmZnclVsakZpNHFUSWtSVk4walE3M0V1bkM0RHgyWFVpRjVzVHM0TTI4TWhTYnNjQXJSTWkzdWZ2clZiVmEyaTEtSjlheHZTUURJWXB6TF9mc1JrcEZxbjlfWUJTLTlieWpSa2dzWHNPem1IVEdCVFNwSmFqYW95cTI0ak4wSUE2UC1EV19WZVU5MUpSRUNPeUUtYWNHb3AyazFodU9qVzNMbmJZZVE%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:00:59"
    },
    {
      "source": "Reuters",
      "title_ko": "BOJ 정책 입안자는 더 빠른 속도의 기회를 시사합니다.",
      "title_en": "BOJ policymaker signals chance of faster-paced interest rate hikes",
      "summary_ko": "BOJ 정책 입안자는 더 빠른 속도의 기회를 시사합니다. 관련 핵심 동향이 발표되었습니다. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPSzdDZ1dodDgxM0NfQ1dITzJmdGxGVWhwUzRfY0ZhczRfZXFxRkhzZWZxS3JGdWhvU3BuRXhYRV9Halg4MjM0RnUwSklfdklwWWRSakNUdm9KV3JHSEJpR01HS2J0QUpKZFYwOThYRDMyVVc1cm9neWRYaFdyV000bENreEN1Y0g0Wk95bEdNZ2MyVmxTQlB4QWhYS1hUTkFZNENqbXh4STc?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxPSzdDZ1dodDgxM0NfQ1dITzJmdGxGVWhwUzRfY0ZhczRfZXFxRkhzZWZxS3JGdWhvU3BuRXhYRV9Halg4MjM0RnUwSklfdklwWWRSakNUdm9KV3JHSEJpR01HS2J0QUpKZFYwOThYRDMyVVc1cm9neWRYaFdyV000bENreEN1Y0g0Wk95bEdNZ2MyVmxTQlB4QWhYS1hUTkFZNENqbXh4STc%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 26 Nov 2026 01:15:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 정책입안자들은 강력한 일자리 보고서 이후에 등장하는 것을 고려합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQMF93ekZ4N2wtdW4zX1llS2FoZWpNVlhMLTRNOGVJTUktZmpLQUNBSzY2bW16Mm9mb3lrZERqNFZ6WkRmYkhBTG00Z2k2NFYyNTVLcmVBSkV5eVJRU1RwZFc5blM4MkRmcUxYU2hadXRWbVh0VXpjektqM1BGS3ZlZlNMeW43VWxmeE5TQm13d0E3bTVwUnp5dzFFNA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimwFBVV95cUxQMF93ekZ4N2wtdW4zX1llS2FoZWpNVlhMLTRNOGVJTUktZmpLQUNBSzY2bW16Mm9mb3lrZERqNFZ6WkRmYkhBTG00Z2k2NFYyNTVLcmVBSkV5eVJRU1RwZFc5blM4MkRmcUxYU2hadXRWbVh0VXpjektqM1BGS3ZlZlNMeW43VWxmeE5TQm13d0E3bTVwUnp5dzFFNA%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "다음 주 연준(Fed) 관심이 노출될 가능성이 훨씬 높아졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxONjAwZFZ6bi16bV9pV1FMWDdfMzlhZUVicnJQaThwYjZySUZTbGhMQkNscFdkdHB1ME1Hc0RsaWYzVDM1SEk0ZmNSX3czTmlESXR1U0R1Zy1DMnU0cWU4REpYYWNVMHdBYlp3TjRkRHAyQ0pqLXdTZ2hoUUlkYnlPMHFCeUhZb2hEYmRVenQ1bWxpT0E1anFMT2NCRDFIdmlUaUlPVUtJX05idUVJa3lCd9IBtgFBVV95cUxNb09kWUpPaTFYX1J3T0ZYVDM1YjZURW4zVnh3R29VUWU2bzlsTWQxZ051RElKY1BzZmZ0X2RNT3BUWFR6TUpEV3pIOURqamZmMDM0YlJVSWpELXRJOUJhYkI1RU9xc2hvdFdiRHZNOWVVVXB0SFFfWG5NMFIwdXlwZ0ZsUUtfS1FsVGJBQ3RBZzJQbEx1NFNiN196NmNTdW5rZDB3TkpYbS1Ld3AwRThybGt5VjVEUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxONjAwZFZ6bi16bV9pV1FMWDdfMzlhZUVicnJQaThwYjZySUZTbGhMQkNscFdkdHB1ME1Hc0RsaWYzVDM1SEk0ZmNSX3czTmlESXR1U0R1Zy1DMnU0cWU4REpYYWNVMHdBYlp3TjRkRHAyQ0pqLXdTZ2hoUUlkYnlPMHFCeUhZb2hEYmRVenQ1bWxpT0E1anFMT2NCRDFIdmlUaUlPVUtJX05idUVJa3lCd9IBtgFBVV95cUxNb09kWUpPaTFYX1J3T0ZYVDM1YjZURW4zVnh3R29VUWU2bzlsTWQxZ051RElKY1BzZmZ0X2RNT3BUWFR6TUpEV3pIOURqamZmMDM0YlJVSWpELXRJOUJhYkI1RU9xc2hvdFdiRHZNOWVVVXB0SFFfWG5NMFIwdXlwZ0ZsUUtfS1FsVGJBQ3RBZzJQbEx1NFNiN196NmNTdW5rZDB3TkpYbS1Ld3AwRThybGt5VjVEUQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "ECB는 기준에 따라 뒤처질 수 없다, Kocher 말한다",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQaVRrcXd1MUdSeG56V0dYTERydUtFemtKRmlmelo2VFBoeDZiZkgyem9kRnR1Z1AzTTk0WHAwMmdWdWNpY3MtdjVTWXk1dTU0YjE4dzNYN2kyMzlUVzZOMVYzaDI5T0VBVnVraUktMW5iQ1dWQU5kbzg3MUdLVWtHV0twUUV1LVJhcjNBblZkMXZHb3BvZWtHNF9Rc0pwWm5pQlpNaHdTTkx6YWpP?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxQaVRrcXd1MUdSeG56V0dYTERydUtFemtKRmlmelo2VFBoeDZiZkgyem9kRnR1Z1AzTTk0WHAwMmdWdWNpY3MtdjVTWXk1dTU0YjE4dzNYN2kyMzlUVzZOMVYzaDI5T0VBVnVraUktMW5iQ1dWQU5kbzg3MUdLVWtHV0twUUV1LVJhcjNBblZkMXZHb3BvZWtHNF9Rc0pwWm5pQlpNaHdTTkx6YWpP%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed) 정책입안자들은 요율을 두고 의견이 갈렸다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQOVl1b0t4RWF0WnFRODUzeHAydHMzOFl1U0lKbEhOa3ZSbG1GdDdubllBRG9raTZ0VllPeWJsUEFmOUlLaGZKYkd1QXo0dEFyUzZCUjdKM0NQeHdCeUZWU1hBcTBNaGJIaVJwVkluZ3Y0elloSXRyRHJkek1VdUxJdkV0NV8xSXJxUFdOVjBJVmFRcm5Na3M2ZGlodGdtcEk2NFlnWnZXVUNQSlJBUUFUSmJiOA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxQOVl1b0t4RWF0WnFRODUzeHAydHMzOFl1U0lKbEhOa3ZSbG1GdDdubllBRG9raTZ0VllPeWJsUEFmOUlLaGZKYkd1QXo0dEFyUzZCUjdKM0NQeHdCeUZWU1hBcTBNaGJIaVJwVkluZ3Y0elloSXRyRHJkek1VdUxJdkV0NV8xSXJxUFdOVjBJVmFRcm5Na3M2ZGlodGdtcEk2NFlnWnZXVUNQSlJBUUFUSmJiOA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:02"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "BNP파리바 \"연준, 12월부터 세 차례 연속 금리 인상 전망\"",
      "title_en": "",
      "summary_ko": "BNP파리바 \"연준, 12월부터 세 차례 연속 금리 인상 전망\" 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 www.tmgm.com, 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE84a3JlM2NXd2ludmg5dmlNYWJ5cnA2V2ZwTWE3QzNKakp4NTR3QnZRUXR1Wjg3SHVnVkxjdHlrOGptcVVzMUM5MUdaT1gzclFUM211U2dfX0hVRWV1S2RyVlZ1ZFR0dFFIQTNYdTA5Rl8?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE84a3JlM2NXd2ludmg5dmlNYWJ5cnA2V2ZwTWE3QzNKakp4NTR3QnZRUXR1Wjg3SHVnVkxjdHlrOGptcVVzMUM5MUdaT1gzclFUM211U2dfX0hVRWV1S2RyVlZ1ZFR0dFFIQTNYdTA5Rl8?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 25 Nov 2026 01:32:00 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "월가 \"美 신규 관세에 연준 추가 금리 인상 가능성 커져\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5xZzJ5Vkl0SGFiUmJtNHNoRkZ6cXhBOW5tc3hwME12bUQ5YnJobEJQdjROamRsX1E4TFcxNzVheHhuVTltcVdyTmpZRkN2dUpkdUxWVllCRWgyWWhsQ0xmREF6UUNqRkw2NXpKRU1YbzbSAXRBVV95cUxNV2NiYnl6VDlTcjA1RmMyYnJaWC1Fb3h5T3J3TzRhMGZ3M3NWa2Y1U1VTZDRLYzh3akN5VTgtSjNHMDktS1UzZ3NoMzZnUmlvTmYzZ0RnYXBYd0JhOElLdV9sdXlaamVzdkRqazdvUWh6OFBtVw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5xZzJ5Vkl0SGFiUmJtNHNoRkZ6cXhBOW5tc3hwME12bUQ5YnJobEJQdjROamRsX1E4TFcxNzVheHhuVTltcVdyTmpZRkN2dUpkdUxWVllCRWgyWWhsQ0xmREF6UUNqRkw2NXpKRU1YbzbSAXRBVV95cUxNV2NiYnl6VDlTcjA1RmMyYnJaWC1Fb3h5T3J3TzRhMGZ3M3NWa2Y1U1VTZDRLYzh3akN5VTgtSjNHMDktS1UzZ3NoMzZnUmlvTmYzZ0RnYXBYd0JhOElLdV9sdXlaamVzdkRqazdvUWh6OFBtVw?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "'한은 금리 인상 사이클 사실상 끝'…해외 증권사 '반전' 전망",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9aUGUwUXQ2ejg3cnAzRXVVMlFyNVpvenlfblpjTkdfQWZIR1pBNzIxdjVqenkyckFiUjAzWnNmRHJ2ZmVCT09nTm8ydHB4ZFVZRC1RXzFPLU1NZw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9aUGUwUXQ2ejg3cnAzRXVVMlFyNVpvenlfblpjTkdfQWZIR1pBNzIxdjVqenkyckFiUjAzWnNmRHJ2ZmVCT09nTm8ydHB4ZFVZRC1RXzFPLU1NZw?oc=5"
        },
        {
          "source": "Investing.com",
          "title_ko": "Bernstein “2027년 금 강세 전망…연준 금리 인상 중단 가능성”",
          "original_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE83WEtpa1hCUWFwaWs5UjRRRG5fZDhIS1h6WDJwWEtqcnNZYWk1U2dxUENRQTYzdjVPRS1PeDJHeWZXbWdZbkpwWGJkUVVKOFdhU0szR2RSVk5oUXBUSzkzUFVnb3p1aFFGdDZSTm02TQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE83WEtpa1hCUWFwaWs5UjRRRG5fZDhIS1h6WDJwWEtqcnNZYWk1U2dxUENRQTYzdjVPRS1PeDJHeWZXbWdZbkpwWGJkUVVKOFdhU0szR2RSVk5oUXBUSzkzUFVnb3p1aFFGdDZSTm02TQ?oc=5"
        },
        {
          "source": "www.tmgm.com",
          "title_ko": "영국 파운드화 상승, 영란은행의 매파적 기조가 연준 금리 인상 기대 상쇄",
          "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOSURMWFJVSExhc3k2dG5aZmhwSmJRN0xYaTdVUDUwdlFPb1dWY3RvZVptM3FTNjduZHBSVDYwMjlFaFU5bTd6YVAyLUJ3d2ZUVjlzRWVaTVk2UHM4ak5UZFhWbDRCUHFNVjVTMnBIeXJqZzdtN2x1U1YtaC1JZWoydnJ0ZmhCS0FiT2xZSDBvVUdkSkdvblNJVnY5Ry1HYTRLZTBlWWFxa1VPZWlYUzA0WmhvQ01rUUMwTGZtbk1relEyd0R4RGNtLUpNWnE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOSURMWFJVSExhc3k2dG5aZmhwSmJRN0xYaTdVUDUwdlFPb1dWY3RvZVptM3FTNjduZHBSVDYwMjlFaFU5bTd6YVAyLUJ3d2ZUVjlzRWVaTVk2UHM4ak5UZFhWbDRCUHFNVjVTMnBIeXJqZzdtN2x1U1YtaC1JZWoydnJ0ZmhCS0FiT2xZSDBvVUdkSkdvblNJVnY5Ry1HYTRLZTBlWWFxa1VPZWlYUzA0WmhvQ01rUUMwTGZtbk1relEyd0R4RGNtLUpNWnE?oc=5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:02"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "FX스와프, 한은 인상에 1년물 상승…12월 FOMC 앞두고 고점 반납",
      "title_en": "",
      "summary_ko": "FX스와프, 한은 인상에 1년물 상승…12월 FOMC 앞두고 고점 반납 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5aUGloQk9xN1ljbWJ1WU1tMUo5am85SHgySXZrdGRxTDdMVUZTTmp4TlpQeDlNalFVV1IxNDBiendfRWNWejNGb3FMMXhwRWtiWTVHLW5Odlc5ejZzRnFISTlUQmNoUXRtRHhlVUxLZ1jSAXRBVV95cUxQWXlGcDExYTlnZUhNZGIyUjVyN3dJS2RsNHMtZnd6V0pZQlp1SnMwZHBfNkM0eWx1djVQNEt3QVowSFFjWVRqT1hYWjJKd1I5d2g2Y0lFQ25aQVV3NUZhZWZRVDd3X0tJSFFmOUdjcVBYM1VLWQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5aUGloQk9xN1ljbWJ1WU1tMUo5am85SHgySXZrdGRxTDdMVUZTTmp4TlpQeDlNalFVV1IxNDBiendfRWNWejNGb3FMMXhwRWtiWTVHLW5Odlc5ejZzRnFISTlUQmNoUXRtRHhlVUxLZ1jSAXRBVV95cUxQWXlGcDExYTlnZUhNZGIyUjVyN3dJS2RsNHMtZnd6V0pZQlp1SnMwZHBfNkM0eWx1djVQNEt3QVowSFFjWVRqT1hYWjJKd1I5d2g2Y0lFQ25aQVV3NUZhZWZRVDd3X0tJSFFmOUdjcVBYM1VLWQ?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 26 Nov 2026 09:00:24 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-27 20:01:03"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "ECB는 인플레이션 전망이 '크게' 개선되지 않는 한 또 다른 소개가 필요하다고 보았습니다.",
      "title_en": "ECB Saw Need for Another Rate Hike Unless Inflation Outlook Improved ‘Significantly’",
      "summary_ko": "ECB, 인플레이션 전망 '상당히' 개선되지 않는 한 또 다른 소개 필요 WSJ. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Wall Street Journal뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxOU2g3T2NNRnFfQ3pTa3ZBaldiSjZlOElVeV9ubUJpQWQ4ZXhRRzJ1VWtDZVpXUnhMajVQXzRTemdoVml3WUVoQm9NNzlwd1A3N3BjVm44VExaYWhLelQyTkppcmNxNnRIRElVYnhOUThpcl9uZ3FTQUNIQU1WMk1iLV9YZU5RZ2M0dkhiOFotUk5MRGFxRWg4dzk2MFVJX25sa3RjZVVYeElVR1l4dEx2REFiU0NZZUFndUFvZGFMY29oTFNuZFpCVjFuMjNuSm92?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMi0AFBVV95cUxOU2g3T2NNRnFfQ3pTa3ZBaldiSjZlOElVeV9ubUJpQWQ4ZXhRRzJ1VWtDZVpXUnhMajVQXzRTemdoVml3WUVoQm9NNzlwd1A3N3BjVm44VExaYWhLelQyTkppcmNxNnRIRElVYnhOUThpcl9uZ3FTQUNIQU1WMk1iLV9YZU5RZ2M0dkhiOFotUk5MRGFxRWg4dzk2MFVJX25sa3RjZVVYeElVR1l4dEx2REFiU0NZZUFndUFvZGFMY29oTFNuZFpCVjFuMjNuSm92%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 26 Nov 2026 13:26:57 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "ECB 관리들은 인플레이션 전망이 악화되면서 긴축이 더 심해지는 것을 보았습니다",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNU3dSOF9DeDY0YlZLTEJ5a2VKUzNwTmo1ckxEejlvYmhsUEFtZm9EblczRjZOcThyUEJqWGhzMDlYblZEc3JxRW9FbVF6VzZUdnpwekJBNWc4NEY1ZmdxTldsNnJfVWFQVE85MnpjMmx1VTh4VFhJSG5mU3J5ODJ5YTJJd1B2VlFpbXFaZXEwSmdRQmZLRWFJeHJXancyS1hNdVdOSURtNVNZaGhRQ2VGRlc1UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxNU3dSOF9DeDY0YlZLTEJ5a2VKUzNwTmo1ckxEejlvYmhsUEFtZm9EblczRjZOcThyUEJqWGhzMDlYblZEc3JxRW9FbVF6VzZUdnpwekJBNWc4NEY1ZmdxTldsNnJfVWFQVE85MnpjMmx1VTh4VFhJSG5mU3J5ODJ5YTJJd1B2VlFpbXFaZXEwSmdRQmZLRWFJeHJXancyS1hNdVdOSURtNVNZaGhRQ2VGRlc1UQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "ECB의 Simkus는 인플레이션이 확대됨에 따라 하이킹을 하는 것이 '신중한' 것이라고 말합니다",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPeUR3LTdfWnVXRUZxMy1QdVQyejN5NjQzMVhvOUdiUkhlUm9TOG90NzA1MEluQS1HdFdtR29DcGMtT1o5Njl3ZkVvM1IxblM5dWNUb2hBbndwbUhXU21OQmRNdXhVdWQwU0o2eUx1WXBCN0FlUllJS0NnalgxX3V2R2JFWjgtT3pPZ1ZpWFlDa1NTY0FpVlBjNFB6SDRzbTZvSHlJMlNqb2ZUTkRpeVdQYg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxPeUR3LTdfWnVXRUZxMy1QdVQyejN5NjQzMVhvOUdiUkhlUm9TOG90NzA1MEluQS1HdFdtR29DcGMtT1o5Njl3ZkVvM1IxblM5dWNUb2hBbndwbUhXU21OQmRNdXhVdWQwU0o2eUx1WXBCN0FlUllJS0NnalgxX3V2R2JFWjgtT3pPZ1ZpWFlDa1NTY0FpVlBjNFB6SDRzbTZvSHlJMlNqb2ZUTkRpeVdQYg%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:05"
    },
    {
      "source": "Bloomberg",
      "title_ko": "베센트, 이란의 위협에 따라 군용 숙소로 이전",
      "title_en": "Bessent Moved to Military Housing Following Iranian Threats",
      "summary_ko": "베센트, 이란 위협에 따라 군용 숙소로 이전 Bloomberg.com. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxObDZTV2MyWmFzRDJsWElscm1XVHVGSER0M2ctcUVZMmZuekJtZTN5azZUOG1JTHZQX0Q2VjJHMkM0TndyanE0RU8xcWo2bERwcXVUOUpOTl9XTWJ5cDRxVXlJcXQ5MUg0ZHVVZkd0UDF2aFBfU19USUFWV19CUTUzOGpnODhQX3dKOVF2U3NPNV9lLXU3bk9wTmc2Ym54cmVFYU1ydFRiZXhqTWxzNzFZ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxObDZTV2MyWmFzRDJsWElscm1XVHVGSER0M2ctcUVZMmZuekJtZTN5azZUOG1JTHZQX0Q2VjJHMkM0TndyanE0RU8xcWo2bERwcXVUOUpOTl9XTWJ5cDRxVXlJcXQ5MUg0ZHVVZkd0UDF2aFBfU19USUFWV19CUTUzOGpnODhQX3dKOVF2U3NPNV9lLXU3bk9wTmc2Ym54cmVFYU1ydFRiZXhqTWxzNzFZ%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 11 Nov 2026 08:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Bessent는 다음 달 미국 장기채권 판매를 줄일 것이라고 Citi가 밝혔습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPQ3g1bDc4T2w2UUNsWG12djVjdkZSS2RJOTlnMXAwUTNVNUtNaEdaSlRFNm84Yl9rWmhRVDdjYTV0clcxM044cFpyV05hdndtLXQ0SzJ6NG10ZkduTGExcHRYVEhOa3hhR3NJdVJmZ2xIc1V0RFpHX3R6RDhZTGtnblNVaDc1Z0FMM0luV2x5Y0F5Z1had3dvdGxtTExSNUsxcVdzUUs3YkIyb0dnLXI1dTllS2w?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxPQ3g1bDc4T2w2UUNsWG12djVjdkZSS2RJOTlnMXAwUTNVNUtNaEdaSlRFNm84Yl9rWmhRVDdjYTV0clcxM044cFpyV05hdndtLXQ0SzJ6NG10ZkduTGExcHRYVEhOa3hhR3NJdVJmZ2xIc1V0RFpHX3R6RDhZTGtnblNVaDc1Z0FMM0luV2x5Y0F5Z1had3dvdGxtTExSNUsxcVdzUUs3YkIyb0dnLXI1dTllS2w%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:09"
    },
    {
      "source": "Bloomberg",
      "title_ko": "트럼프의 관세와 이란 전쟁에 대해 당신이 지불하는 금액은 다음과 같습니다.",
      "title_en": "Here’s How Much You’re Paying for Trump’s Tariffs and Iran War",
      "summary_ko": "트럼프의 관세와 이란 전쟁에 대해 당신이 지불하는 금액은 다음과 같습니다. Bloomberg.com. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPZDBvaXE2U0Q5QTlPTUJTZnNPUnNZakNvVlB0QWgtbURJSDhJNUZzdzZRSUs0MGN0dmpBY0tnN2NSUDV4ZkV2NkZ2X28xSTVjQ1hiTU9SUEpqQnphUUhXMktXYUhFV2EwMkQwWF8xTHV2NWZDRkw0V1J6UzdWU2NiT2tyN2wyMWYzM0R6SzUzaUVHZHNyQlhjSEFiQ3lrdUp5Wlh3SUtR?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxPZDBvaXE2U0Q5QTlPTUJTZnNPUnNZakNvVlB0QWgtbURJSDhJNUZzdzZRSUs0MGN0dmpBY0tnN2NSUDV4ZkV2NkZ2X28xSTVjQ1hiTU9SUEpqQnphUUhXMktXYUhFV2EwMkQwWF8xTHV2NWZDRkw0V1J6UzdWU2NiT2tyN2wyMWYzM0R6SzUzaUVHZHNyQlhjSEFiQ3lrdUp5Wlh3SUtR%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 29 Oct 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "미국 파트너들이 분노와 외교로 새로운 관세에 대응하는 모습을 지켜보세요",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOSzhudjgwWVphNXpmTGU5YjV3TDhYMkJ2aEozbXAyanQ1dHBJZjFmaTZRMFozME1zTzZPNWlxWFJwMldYdHAzajNUUS1ZTFZIa3ZyakVac2kwZ3U3MVE5VFNFZ0FmY0VIX29ReE1EcUduQWdZMDZSNFJfbFlKbWo3UFVQQmE4YjhLd3laTXRrVE04Qm5aRHU0dUlSWDlQZkZKSzNBWEdpMEp0dXdrRXkw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxOSzhudjgwWVphNXpmTGU5YjV3TDhYMkJ2aEozbXAyanQ1dHBJZjFmaTZRMFozME1zTzZPNWlxWFJwMldYdHAzajNUUS1ZTFZIa3ZyakVac2kwZ3U3MVE5VFNFZ0FmY0VIX29ReE1EcUduQWdZMDZSNFJfbFlKbWo3UFVQQmE4YjhLd3laTXRrVE04Qm5aRHU0dUlSWDlQZkZKSzNBWEdpMEp0dXdrRXkw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "트럼프 관세의 다음 배치가 G로 곧 출시됩니다",
          "original_url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOWlpweFhXRFFWZ0lEaUtJZWRzU0hUM3FpN2ZCLVl1NnRzVDQ0ellQY1h2Nlc2TW1lNGpabzl0SEZSdTZWYVRqbUNlU3A5TktZaWFaanRUUFhQZUw3Tkp4eEsxeXZ4RGlRR3pDbVZOeGJlNkdhWFRfejZGRy1OWk1oM3FqSFQ5U0hBWFRqQ21fVm9UNWtmb1NhWkVB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimgFBVV95cUxOWlpweFhXRFFWZ0lEaUtJZWRzU0hUM3FpN2ZCLVl1NnRzVDQ0ellQY1h2Nlc2TW1lNGpabzl0SEZSdTZWYVRqbUNlU3A5TktZaWFaanRUUFhQZUw3Tkp4eEsxeXZ4RGlRR3pDbVZOeGJlNkdhWFRfejZGRy1OWk1oM3FqSFQ5U0hBWFRqQ21fVm9UNWtmb1NhWkVB%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "트럼프가 제안한 인도 관세가 경쟁국과 어떻게 비교되는지",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNazJTSjI3dk40ZnhoM2ZJR2N2eXp0NUFoaWUxNUI4NW9wV19YWEtpd24tS0t5YnFHV2YzSkRmSXdiTnR6cjRuMTROY1d1VlQ2NUR3UjNNMUJkeU5XQVBOeUQ1VnVTQmtQU3BVOUNndHdyeUhvWDcxdmRHMGtheVJCREs4UzdCWS1VVDQwcmdQYWtILXltMHRhN1UxeTVtdGhuMFhpemlOdDRkLTB5?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxNazJTSjI3dk40ZnhoM2ZJR2N2eXp0NUFoaWUxNUI4NW9wV19YWEtpd24tS0t5YnFHV2YzSkRmSXdiTnR6cjRuMTROY1d1VlQ2NUR3UjNNMUJkeU5XQVBOeUQ1VnVTQmtQU3BVOUNndHdyeUhvWDcxdmRHMGtheVJCREs4UzdCWS1VVDQwcmdQYWtILXltMHRhN1UxeTVtdGhuMFhpemlOdDRkLTB5%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "관세에 대한 미국의 계획이 반발되는 것을 지켜보십시오",
          "original_url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPTDlUMTlLa2EtNGxnWjdyelI3YlliVFl1cENOZ1lqOV9PeHZzc2pFVktib1pURVRPRllFcEZKdEVOZDNoME5zazlpUVRFc3UzaGNYTXFxV1JjMTJnblZoS1hCVS1kX0R1WXNrMUE0VGVOR2ZXTEgxTW11TlNuTlhJSWNSUWtncVBHZjlDaVljLVZleWs?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikwFBVV95cUxPTDlUMTlLa2EtNGxnWjdyelI3YlliVFl1cENOZ1lqOV9PeHZzc2pFVktib1pURVRPRllFcEZKdEVOZDNoME5zazlpUVRFc3UzaGNYTXFxV1JjMTJnblZoS1hCVS1kX0R1WXNrMUE0VGVOR2ZXTEgxTW11TlNuTlhJSWNSUWtncVBHZjlDaVljLVZleWs%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:13"
    },
    {
      "source": "CNBC",
      "title_ko": "이란은 미 국채/재무부가 제재를 확대함에 따라 미국의 호위에도 불구하고 세 척의 유조선이 호르무즈에서 지뢰를 공격했다고 밝혔습니다.",
      "title_en": "Iran says three tankers hit mines in Hormuz despite U.S. escort, as Treasury widens sanctions",
      "summary_ko": "미 국채/재무부가 제재를 확대하자 이란은 미국의 호위에도 불구하고 유조선 3척이 호르무즈에서 지뢰를 공격했다고 밝혔습니다. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. CNBC뿐만 아니라 Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9aSnVNOTQ5Ml81YUdQSkxzbkI0bVF5OUV4RndqcjVrWkM1SGw4V0tZOVJEbGRmTGgybGxfTUwzRVNISTRFUmxkX0cydWlPcVRCN2dIWFFfaklmbk40ZnptNVMxUURLdWFoRUtUNkNR0gFzQVVfeXFMTVY0aG5JUVJlODBXb0tvdmJTRjJoV2R2Uk9TMVpKcFdpLVpTUThDU3MzcGw3RnVmanBjQ1VNRFlkRi1JZUMxMDRNcWFXLVJoNlo4dVB6VU91V2tYRnpDU1oyekUxaWQwdlBXbGJoZ1ZlSGNKcw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMibkFVX3lxTE9aSnVNOTQ5Ml81YUdQSkxzbkI0bVF5OUV4RndqcjVrWkM1SGw4V0tZOVJEbGRmTGgybGxfTUwzRVNISTRFUmxkX0cydWlPcVRCN2dIWFFfaklmbk40ZnptNVMxUURLdWFoRUtUNkNR0gFzQVVfeXFMTVY0aG5JUVJlODBXb0tvdmJTRjJoV2R2Uk9TMVpKcFdpLVpTUThDU3MzcGw3RnVmanBjQ1VNRFlkRi1JZUMxMDRNcWFXLVJoNlo4dVB6VU91V2tYRnpDU1oyekUxaWQwdlBXbGJoZ1ZlSGNKcw%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 24 Nov 2026 05:05:08 GMT",
      "related_articles": [
        {
          "source": "Wall Street Journal",
          "title_ko": "독일 소비자 신뢰도는 경제, 인플레이션에 대한 우려에도 불구하고 상승",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPQkZQeXNYYnJjMkNPZ3pYSDY3dmpHV3pvbko0ZXB0aXVQcU5sQ0hyY08tQVRlVEd5cGxGV1lwNXMxSjZYNVF0S0JNZ2VCcWY0R3BUNWlJckMtUEVoNktQYzBZX3dFb2xwWWJXN3JFeVliQzBKUVVZbEttR01tUkZCMWJPOUh3NWdDU1gtN1UwREtGZFlDdG1HQlJCaERveE1rZGFQeHZTUjZQV1NjOGdPTg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxPQkZQeXNYYnJjMkNPZ3pYSDY3dmpHV3pvbko0ZXB0aXVQcU5sQ0hyY08tQVRlVEd5cGxGV1lwNXMxSjZYNVF0S0JNZ2VCcWY0R3BUNWlJckMtUEVoNktQYzBZX3dFb2xwWWJXN3JFeVliQzBKUVVZbEttR01tUkZCMWJPOUh3NWdDU1gtN1UwREtGZFlDdG1HQlJCaERveE1rZGFQeHZTUjZQV1NjOGdPTg%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:15"
    },
    {
      "source": "CNBC",
      "title_ko": "영란은행, 이란 전쟁 이후 처음으로 기준 금리 인상, 인플레이션이 5%에 가까워질 것이라고 경고",
      "title_en": "Bank of England hikes interest rate for the first time since Iran war, warns inflation will near 5%",
      "summary_ko": "영란은행은 이란 전쟁 이후 처음으로 기준 금리 인상, 인플레이션이 5%에 가까워질 것이라고 경고 CNBC. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. CNBC뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTFA2ekdpTXhxc3k5elptZTdDcmhfTy1PNGlRZ19pM3VCeVFCbXItX0ZpZzM4UHJlbEx2NkFmaTBrVmduNUJtWm5tWDJnXzd5RlYzalpEU0taeUtWRHNXVTNoNWJHUlZtNjhBTGw3ak9mY2Yxdw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMickFVX3lxTFA2ekdpTXhxc3k5elptZTdDcmhfTy1PNGlRZ19pM3VCeVFCbXItX0ZpZzM4UHJlbEx2NkFmaTBrVmduNUJtWm5tWDJnXzd5RlYzalpEU0taeUtWRHNXVTNoNWJHUlZtNjhBTGw3ak9mY2Yxdw%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 05 Nov 2026 08:00:00 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "글로벌 채권수익률( )이 멀티로 급등",
          "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNSXE1amZIRWIwXzJ6NTVmZ1pLQVZIVThoQjI1QnRzUGtNX2UybVVGVFpDM01IenhCY1F0Z0lTNlphU1NNdF81RGk5XzFXWndRcVBRRkd6ZWJXeUM0RUpZc01yeTRCMXY0S25RblhDbXhNMHpVM0xmaVRsOHMxMGdkOVF0ckhBLU1SbkHSAY8BQVVfeXFMTlR1WGhmQWsyWlRVWGt1WkVxczJJdkpmSS1NOGUwUzFvY2xxaUdJOGpRbnMyYjV3YzIzR0MtMm9aMzFrOGJ5cGtYWnUzblotc2pfcE91Ym8zcF9PRGg5MDQwRWpfcDVocFotUlg1WWlCamE5TWlYS29Fd2hYNVNEYVBvVlA1QTJzVTVmVXZkZGc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxNSXE1amZIRWIwXzJ6NTVmZ1pLQVZIVThoQjI1QnRzUGtNX2UybVVGVFpDM01IenhCY1F0Z0lTNlphU1NNdF81RGk5XzFXWndRcVBRRkd6ZWJXeUM0RUpZc01yeTRCMXY0S25RblhDbXhNMHpVM0xmaVRsOHMxMGdkOVF0ckhBLU1SbkHSAY8BQVVfeXFMTlR1WGhmQWsyWlRVWGt1WkVxczJJdkpmSS1NOGUwUzFvY2xxaUdJOGpRbnMyYjV3YzIzR0MtMm9aMzFrOGJ5cGtYWnUzblotc2pfcE91Ym8zcF9PRGg5MDQwRWpfcDVocFotUlg1WWlCamE5TWlYS29Fd2hYNVNEYVBvVlA1QTJzVTVmVXZkZGc%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "유로",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNQV91VXMzbTBWRWtyVHZlbmxqSFdtQnNteHFSTnVRdlJCVm9NZUdCMnROT0E2U3dLREktSk5GYkl2bUF2UXhrM1FDVFR0dTktMnVTUDVqWHZJTVdtUDZKUnY3YUFadGpZdU5xbHJhcEFUaDQzX3EwekliN3I5VXlzVXZ0VUtPT2c2SEVvbC1wX1MwN3dKQkU0TWwxTWRIVTU5bUxYVmJVeWRsZTAwSEVlUzF2ME5udw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNQV91VXMzbTBWRWtyVHZlbmxqSFdtQnNteHFSTnVRdlJCVm9NZUdCMnROT0E2U3dLREktSk5GYkl2bUF2UXhrM1FDVFR0dTktMnVTUDVqWHZJTVdtUDZKUnY3YUFadGpZdU5xbHJhcEFUaDQzX3EwekliN3I5VXlzVXZ0VUtPT2c2SEVvbC1wX1MwN3dKQkU0TWwxTWRIVTU5bUxYVmJVeWRsZTAwSEVlUzF2ME5udw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "잠비아 중앙은행, 인플레이션 위험 증가에 따라 주요 금리 유지",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNV1JaUE16bkhyYUlHV0xsUWF0Z05aUVZwQno2T2VGcWtpU2ZLS1V4cWw1dkRuaGxGeGcxNU9JN3ZaaXk3bF84WEhxbmRRMmV3YnVWMDRCQUkzSHloZ1RST2xKeXdQeW5naS1YSllsbWRMckIwb09MVno4SUlteHlUcTUzaTNyb2YyN2pYSVlGQmZGMHpPNjg1UGZLZHY4eXBDeml2U0RkV2FSQ01ZaVVF?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxNV1JaUE16bkhyYUlHV0xsUWF0Z05aUVZwQno2T2VGcWtpU2ZLS1V4cWw1dkRuaGxGeGcxNU9JN3ZaaXk3bF84WEhxbmRRMmV3YnVWMDRCQUkzSHloZ1RST2xKeXdQeW5naS1YSllsbWRMckIwb09MVno4SUlteHlUcTUzaTNyb2YyN2pYSVlGQmZGMHpPNjg1UGZLZHY4eXBDeml2U0RkV2FSQ01ZaVVF%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "끝",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPVjN2UHQweFRIVFNCMHFhUzk4SjFCSmVRaXU1ZFlRem9SX1BBZ0FpQkZIYjFnUV9TUFlyanJzZ3ZrbktOdE8yaGpKYjBrUDhab0tXYkdiYS0zdkotc0lMV0JaWXNPY2xlSnhHdENkTUQ1VHFmTDRzQkt5Zzh3VlVqWmZyektCRnVLM1hBaWlHZ2dJamNDR09MQnhOWWVib1ZWZWNMcFdPWW1xNXdfci1J?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPVjN2UHQweFRIVFNCMHFhUzk4SjFCSmVRaXU1ZFlRem9SX1BBZ0FpQkZIYjFnUV9TUFlyanJzZ3ZrbktOdE8yaGpKYjBrUDhab0tXYkdiYS0zdkotc0lMV0JaWXNPY2xlSnhHdENkTUQ1VHFmTDRzQkt5Zzh3VlVqWmZyektCRnVLM1hBaWlHZ2dJamNDR09MQnhOWWVib1ZWZWNMcFdPWW1xNXdfci1J%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:19"
    },
    {
      "source": "연합뉴스",
      "title_ko": "美기술패권 진력하는 트럼프…교역국엔 '깨알 트집' 관세 칼날",
      "title_en": "",
      "summary_ko": "美기술패권 진력하는 트럼프…교역국엔 '깨알 트집' 관세 칼날 연합뉴스. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. 연합뉴스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5PYkpBbUZkaWFESGh0NFJVVFEycHF2NWdRTC1VVlM4VTNxMkZneTRxMUpYV3FVdXhwUUQ5TjFhZEJlaTFhWDZsZlJQLVJHelMzbGNlLVNvMDdLeTTSAWBBVV95cUxPaFFnNDVmLUlKeXhfVU4tLUxMRUdVeW1HMTZMMGNHVm5kMHJ2eEZFSGh4T2NkVm5PQlhOR2xQWHdYQVpoOUF3bU1YMzBNOG8zN05Tc2NwOGJLVGRTWjVIV3Q?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5PYkpBbUZkaWFESGh0NFJVVFEycHF2NWdRTC1VVlM4VTNxMkZneTRxMUpYV3FVdXhwUUQ5TjFhZEJlaTFhWDZsZlJQLVJHelMzbGNlLVNvMDdLeTTSAWBBVV95cUxPaFFnNDVmLUlKeXhfVU4tLUxMRUdVeW1HMTZMMGNHVm5kMHJ2eEZFSGh4T2NkVm5PQlhOR2xQWHdYQVpoOUF3bU1YMzBNOG8zN05Tc2NwOGJLVGRTWjVIV3Q?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 26 Nov 2026 17:50:30 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-27 20:01:19"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Goldman은 인플레이션 냉각에서 원화 안정성이 금리 인상을 능가한다고 말합니다.",
      "title_en": "Goldman Says Won Stability Beats Rate Hikes in Cooling Inflation",
      "summary_ko": "Goldman은 인플레이션 냉각에서 원화 안정성이 금리 인상을 능가한다고 말합니다. Bloomberg. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNTk9NV0NUWVpIdGVwOUNQcERHN0J6TC1pVXFfc2pCZ3pseFRGU1N1TDlTeFE1UHNibl9lSlBLSHV3aThsN1VBTDY3ZnF3M2poMDRVcEYwblFlUWFiSklsRURvU3ZFUG95TEhTS0w0OFZJalpUMHZISlVoZnphbWtKMHJqLXNSaUpqV3llQThNWV81dlhZemdUeUFiVlBnSm9IZEhvbi1HVTk1QkNETzRwMklGTlVQdw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNTk9NV0NUWVpIdGVwOUNQcERHN0J6TC1pVXFfc2pCZ3pseFRGU1N1TDlTeFE1UHNibl9lSlBLSHV3aThsN1VBTDY3ZnF3M2poMDRVcEYwblFlUWFiSklsRURvU3ZFUG95TEhTS0w0OFZJalpUMHZISlVoZnphbWtKMHJqLXNSaUpqV3llQThNWV81dlhZemdUeUFiVlBnSm9IZEhvbi1HVTk1QkNETzRwMklGTlVQdw%3Foc%3D5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 24 Nov 2026 06:05:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-27 20:01:21"
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
          "title_ko": "원화/달러화: 한국, 원화 약세로 과도한 움직임이 있을 경우 조치를 취하겠다고 다짐",
          "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQa2RyZHEzR29oU2ZKRGFJakxSQnNBWVZWb1hCNmNYNGVrSEtuQ2w5VWh5bTJ4UFZObzV2ZktibUstaVdhVnhNaWxmekNieEdCaWxrSDZlZFNwaWxnSmw5RzBaSS14NGxCM1ZVcklrcHZ4WHA3MEN4ZXZFb3RtNU1QNVh2MzZ1U3I2cnI3WG1lQTMtWlJwZG1oYjh3ckxCVDdWSHNmbFZoYU9WWHNOWndHMXJCcWJxNjlPa1l5Q0V6WWc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxQa2RyZHEzR29oU2ZKRGFJakxSQnNBWVZWb1hCNmNYNGVrSEtuQ2w5VWh5bTJ4UFZObzV2ZktibUstaVdhVnhNaWxmekNieEdCaWxrSDZlZFNwaWxnSmw5RzBaSS14NGxCM1ZVcklrcHZ4WHA3MEN4ZXZFb3RtNU1QNVh2MzZ1U3I2cnI3WG1lQTMtWlJwZG1oYjh3ckxCVDdWSHNmbFZoYU9WWHNOWndHMXJCcWJxNjlPa1l5Q0V6WWc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:24"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "한은 \"달러 강세·외국인 주식자금 유출에도 달러-원 대체로 안정…경상흑자 영향\"",
      "title_en": "",
      "summary_ko": "한은 \"달러 강세·외국인 주식자금 유출에도 달러-원 대체로 안정…경상흑자 영향\" 연합인포맥스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5Tc3lyZFg3RjBoQ3E5LXVvblRmWi1rdHBkNUV6dXJZbk1fNDhrWF9sNlJzdllJN1lhdHZNMkNkX2h3LWE2Z04yTVZXQWg4eE1RbTBOQ1REVV9NZ0M1cjhkMV9XYU1zbTVhRmRibzM4cUzSAXRBVV95cUxOejNicDM3Tm1kamFwZFpob25zdlNEUkpmdWNJNjRldUplc2k5MjRkcVM5WTEzSjMxLU1rSHVYQ3EyWm80aVRTVVg0bXljcXlpOFZjdTF1YUNBaU9hQlRPMXNXU25NcVJyVjM0cm93UlZJTDFZQw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5Tc3lyZFg3RjBoQ3E5LXVvblRmWi1rdHBkNUV6dXJZbk1fNDhrWF9sNlJzdllJN1lhdHZNMkNkX2h3LWE2Z04yTVZXQWg4eE1RbTBOQ1REVV9NZ0M1cjhkMV9XYU1zbTVhRmRibzM4cUzSAXRBVV95cUxOejNicDM3Tm1kamFwZFpob25zdlNEUkpmdWNJNjRldUplc2k5MjRkcVM5WTEzSjMxLU1rSHVYQ3EyWm80aVRTVVg0bXljcXlpOFZjdTF1YUNBaU9hQlRPMXNXU25NcVJyVjM0cm93UlZJTDFZQw?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 26 Nov 2026 03:35:41 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-27 20:01:24"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "현대차證 \"코스피 외국인 매도세, 12월 중순부터 잦아들 수 있어\"",
      "title_en": "",
      "summary_ko": "현대차證 \"코스피 외국인 매도세, 12월 중순부터 잦아들 수 있어\" 연합인포맥스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 연합인포맥스뿐만 아니라 KBS 뉴스, 조선일보 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE15M3dSRV9QN3ZKb21YdzBNdGlqM2FGSVY4SlV0T0FnRXdfazVudjkxNUFqN3JyemxUN1FKQTN4X05pbG41eEVXT1JRamZmNXhydE1UZW5mN2pQYnpFdS12SjU1MkpRZjUxdVF6V3FrbVk?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE15M3dSRV9QN3ZKb21YdzBNdGlqM2FGSVY4SlV0T0FnRXdfazVudjkxNUFqN3JyemxUN1FKQTN4X05pbG41eEVXT1JRamZmNXhydE1UZW5mN2pQYnpFdS12SjU1MkpRZjUxdVF6V3FrbVk?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 23 Nov 2026 01:39:36 GMT",
      "related_articles": [
        {
          "source": "KBS 뉴스",
          "title_ko": "코스피·코스닥 동반 급등…외국인 순매수",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBBYllXV2ZfNUJoNjFGS0JtNkc3dVlKSzRsb00ycl8zaGR5dHFWVzVMSXJlZExQZFRKeDdIVlZUcUxSRVY0UzY1OWF3SUFmWldXb1FkSWpRZkY5VmM?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBBYllXV2ZfNUJoNjFGS0JtNkc3dVlKSzRsb00ycl8zaGR5dHFWVzVMSXJlZExQZFRKeDdIVlZUcUxSRVY0UzY1OWF3SUFmWldXb1FkSWpRZkY5VmM?oc=5"
        },
        {
          "source": "조선일보",
          "title_ko": "코스피, 외국인 1.1조원 ‘사자’에 4.3% 상승 마감...코스닥은 8% 폭등",
          "original_url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOVTRxOU9LRmhqVGt3WDVnODJld3l2b01WVmZjd293SF9DX0V5bHRXYmFYcFBIUlNJcEtGSzA5SnJPWnBYMUM0emNQUFF6UUljOFdnN2tkVTVBQXFDSUZoMk0zQjdVRXNIX3dUVDVfQUE0SmZycTJiZDg1UkFxeEp6Yw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOVTRxOU9LRmhqVGt3WDVnODJld3l2b01WVmZjd293SF9DX0V5bHRXYmFYcFBIUlNJcEtGSzA5SnJPWnBYMUM0emNQUFF6UUljOFdnN2tkVTVBQXFDSUZoMk0zQjdVRXNIX3dUVDVfQUE0SmZycTJiZDg1UkFxeEp6Yw?oc=5"
        },
        {
          "source": "KBS 뉴스",
          "title_ko": "코스피 6%대 상승 5천 선 회복…외국인 ‘순매수’",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFB5QUpJN1d4Q3gxOVpSdEk2UmFWb0hmODFTc0ExLXg5bDFGTGptRlNtbmtRTnFDNFI4cVFhUllyUXhydldsR2JJQ0psSzhwUE5pODlRX3dfeWtVeG8?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFB5QUpJN1d4Q3gxOVpSdEk2UmFWb0hmODFTc0ExLXg5bDFGTGptRlNtbmtRTnFDNFI4cVFhUllyUXhydldsR2JJQ0psSzhwUE5pODlRX3dfeWtVeG8?oc=5"
        },
        {
          "source": "KBS 뉴스",
          "title_ko": "위기의 코스피…외국인 ‘팔자’ 언제까지?",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAyUWJUSktScTdFV1ppQTNVa190THdRaXhlVTlDejAxSzZPYy16eDZ6ZV83amlXVlpTRi1OdkltQUFoVi1xa2h3b2FUZjRzNnZaYzJha01NRjJTZUU?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAyUWJUSktScTdFV1ppQTNVa190THdRaXhlVTlDejAxSzZPYy16eDZ6ZV83amlXVlpTRi1OdkltQUFoVi1xa2h3b2FUZjRzNnZaYzJha01NRjJTZUU?oc=5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:24"
    },
    {
      "source": "매일경제",
      "title_ko": "달러당 원화값, 미국 기술주 조정·외국인 순매도에 0.8원 하락한 1,343.2원",
      "title_en": "",
      "summary_ko": "달러당 원화값, 미국 기술주 조정·외국인 순매도에 0.8원 하락한 1,343.2원 매일경제TV. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 매일경제뿐만 아니라 연합뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE14TVhTMW1QTjFzSHA0VHFhcEdkZDU5LUZUZEltMF9lM29fLUxIdFRlNkhGYmJfMXE2TE1NU2VwVHJ0WHVJUHp2QXh1LVlXMEkxdldqZjBQS1loVXJFbHpYclRQaWtjYV9O?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE14TVhTMW1QTjFzSHA0VHFhcEdkZDU5LUZUZEltMF9lM29fLUxIdFRlNkhGYmJfMXE2TE1NU2VwVHJ0WHVJUHp2QXh1LVlXMEkxdldqZjBQS1loVXJFbHpYclRQaWtjYV9O?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 25 Nov 2026 07:40:00 GMT",
      "related_articles": [
        {
          "source": "연합뉴스",
          "title_ko": "환율, 미국 기술주 조정·외국인 순매도에 소폭 상승…1,343.2원",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1LYU8taTAzdjFBQ09WZnNfSnhQdmpUZkxhRWNMZE1mOHpYSExlX1pNcWEwaHEtOW5zNnk3R3lsTmVReVdBaUZiMVNXdElqcjd4NkN3cGlxbGlqdjjSAWBBVV95cUxOUVNmaE1qY0xKWmxkclVSeGxOal95VGl6REVDazJ5OTZqNjMwbEdscElLMXNkZnc0OVNPeFRuTTVjRVRUTWVBSld0SUwxN2FBTUwxYWpXSGprNVJVU2pEa0U?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1LYU8taTAzdjFBQ09WZnNfSnhQdmpUZkxhRWNMZE1mOHpYSExlX1pNcWEwaHEtOW5zNnk3R3lsTmVReVdBaUZiMVNXdElqcjd4NkN3cGlxbGlqdjjSAWBBVV95cUxOUVNmaE1qY0xKWmxkclVSeGxOal95VGl6REVDazJ5OTZqNjMwbEdscElLMXNkZnc0OVNPeFRuTTVjRVRUTWVBSld0SUwxN2FBTUwxYWpXSGprNVJVU2pEa0U?oc=5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:24"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "기준금리 인상에 대출금리 더 뛴다…불어나는 이자는 '시간 문제'",
      "title_en": "",
      "summary_ko": "기준금리 인상에 대출금리 더 뛴다…불어나는 이자는 '시간 문제' 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 네이버페이 머니스토리, 한겨레 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBJTExJUVB5MnFVd3JCV0IyMzBLS3pTVVA0TXAtMFZTcDAwa0dIV1ZIQUc4bG1IUlJLa2lyLVZNRTFKa1VCZXJZRDUyWmNXa2h5N3ZWOE1PZkY0ME5ZYWJqQUpYUWZHaF92UU1SdEo3UHo?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBJTExJUVB5MnFVd3JCV0IyMzBLS3pTVVA0TXAtMFZTcDAwa0dIV1ZIQUc4bG1IUlJLa2lyLVZNRTFKa1VCZXJZRDUyWmNXa2h5N3ZWOE1PZkY0ME5ZYWJqQUpYUWZHaF92UU1SdEo3UHo?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 26 Nov 2026 06:13:34 GMT",
      "related_articles": [
        {
          "source": "MBC 뉴스",
          "title_ko": "여당, 기준금리 인상에 \"가계 부담 우려‥민생예산 증액 요청\"",
          "original_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE84eEZIOXdRYm4yYTFCQUxxbmtVMHZtVXplWDVFSjZxeVROR2VLcmJLY2FmZy0zbG5iTmV6OHN4dzN3Rm5VMkEtaTROMDBKTlhqWGg1R3BQRWN3QkNvQWRUQWZNNXMyYkc1Si0xcHEtTkwzc04tNVktatIBeEFVX3lxTFB6Vk14V1dnS0RFZDdxYjdraWY4dEVOd1FsQUZ1UjhfRU4xdVRVaW1vUUJmZi1MbGFjd1RXSUVhcXFkMEItVHlGNlMwMFM2N0RiWDdnRFM1RFlwVnNYZ1FEdDl3ZWI1M2Y2UDJSLURRSEkzakR3c2dJUA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE84eEZIOXdRYm4yYTFCQUxxbmtVMHZtVXplWDVFSjZxeVROR2VLcmJLY2FmZy0zbG5iTmV6OHN4dzN3Rm5VMkEtaTROMDBKTlhqWGg1R3BQRWN3QkNvQWRUQWZNNXMyYkc1Si0xcHEtTkwzc04tNVktatIBeEFVX3lxTFB6Vk14V1dnS0RFZDdxYjdraWY4dEVOd1FsQUZ1UjhfRU4xdVRVaW1vUUJmZi1MbGFjd1RXSUVhcXFkMEItVHlGNlMwMFM2N0RiWDdnRFM1RFlwVnNYZ1FEdDl3ZWI1M2Y2UDJSLURRSEkzakR3c2dJUA?oc=5"
        },
        {
          "source": "한겨레",
          "title_ko": "5% 안팎 대출금리 더 뛴다…올 3번째 기준금리 인상에 가계·기업 ‘비상’",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE4zVG9IWkxIZTJWeHRZRVFzTFhPN2VCZkVhYW8zV3hNd1NoYWhQbFFUM2Y2RFJuMUEyUTI2SnVKcFNMenZCVzhlMFNHc2UxQUNnS0lFemV1eWMwVkhHWXhRNWRraW1SUUk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE4zVG9IWkxIZTJWeHRZRVFzTFhPN2VCZkVhYW8zV3hNd1NoYWhQbFFUM2Y2RFJuMUEyUTI2SnVKcFNMenZCVzhlMFNHc2UxQUNnS0lFemV1eWMwVkhHWXhRNWRraW1SUUk?oc=5"
        },
        {
          "source": "톱데일리",
          "title_ko": "기준금리 인상, 보험사에 호재일까…건전성 지표는 '갈림길'",
          "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE05S3d5ZXhJNlJ3OWtSV3lxZWJrZU9VcUxjX09SOHY0RzhyMjVWNURtdlZPY05ReDROTEJQbHFFOGp1aFdXNlY2OTlKeDMtbGFZ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE05S3d5ZXhJNlJ3OWtSV3lxZWJrZU9VcUxjX09SOHY0RzhyMjVWNURtdlZPY05ReDROTEJQbHFFOGp1aFdXNlY2OTlKeDMtbGFZ?oc=5"
        },
        {
          "source": "네이버페이 머니스토리",
          "title_ko": "기준금리 인상 : 3.25%로 올랐어요, 내 대출 이자는 얼마나 오를까요",
          "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5VNDM1Uk55VnE4RXZOeTFzSDZvREoyd284TEdDRFhTRDF3cVh6Y3VFWllEYUZQV3d0X0d2U1BIX1YzRTFGc05ucUNMX2xWblQ3WVE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5VNDM1Uk55VnE4RXZOeTFzSDZvREoyd284TEdDRFhTRDF3cVh6Y3VFWllEYUZQV3d0X0d2U1BIX1YzRTFGc05ucUNMX2xWblQ3WVE?oc=5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:24"
    },
    {
      "source": "한국경제",
      "title_ko": "'이 시나리오면 2028년 먹구름'…한국은행이 보낸 경고 [분석+]",
      "title_en": "",
      "summary_ko": "'이 시나리오면 2028년 먹구름'…한국은행이 보낸 경고 [분석+] 한국경제. 한국은행의 금리 결정 및 국내 수출입 펀더멘털, 가계부채와 부동산 경기에 미치는 파급 효과를 주목할 필요가 있습니다. 한국경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5IemJGWkRqX1VIWmo2cmI2Y1pCTXh5bi1CV2tzYzM0VU83MVZSVUdzUHpzSFh1RHVsV0FzbkpfWHB4VWlPS2pvN2FwOFAyZklvNVZVM3d1WVQtQQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5IemJGWkRqX1VIWmo2cmI2Y1pCTXh5bi1CV2tzYzM0VU83MVZSVUdzUHpzSFh1RHVsV0FzbkpfWHB4VWlPS2pvN2FwOFAyZklvNVZVM3d1WVQtQQ?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 26 Nov 2026 13:00:03 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-27 20:01:24"
    },
    {
      "source": "KBS 뉴스",
      "title_ko": "김민석 “한국은행 기준 금리 인상에 서민 부담…당력 동원해 민생 정치 올인”",
      "title_en": "",
      "summary_ko": "김민석 “한국은행 기준 금리 인상에 서민 부담…당력 동원해 민생 정치 올인” KBS 뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. KBS 뉴스뿐만 아니라 MBC 뉴스, 연합뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE8xVFdKQTRLUTJaUXI3aWRtUUpSbTNrWDBTV0RDODBzZDFQMnlpMlBmUjJ3V3lGVDBYMW56S25yUHRRNkxMSlQ1SXh1RGUwWE04bHFlNW9qbUo5U1k?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE8xVFdKQTRLUTJaUXI3aWRtUUpSbTNrWDBTV0RDODBzZDFQMnlpMlBmUjJ3V3lGVDBYMW56S25yUHRRNkxMSlQ1SXh1RGUwWE04bHFlNW9qbUo5U1k?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Fri, 27 Nov 2026 01:37:00 GMT",
      "related_articles": [
        {
          "source": "MBC 뉴스",
          "title_ko": "한은 기준금리 인상‥성장률 전망 대폭 상향",
          "original_url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1odHM5Y0V4TzdLLS1qUUkzVzBqSm1heF9XNkhWandBZ0VFelVCXy1QQ0dtcExZeGEwVjVWM3dTZ19FcjJTbTVGUWstaW9RNzhJd3J0bzRjbGo2c2E1S3g5MVVWcFVqLVFRX1ZGc0R1Slowb1pFQnZEYWpB0gF6QVVfeXFMTXF4VWZVSFhNVEJKQzR0MjBxLUxsSFhpVGtaUDRBekwwcGhrazdtYkRfV3BoNzkwWFZaQWJFUm1kT19Pd01FRDlLQzlpRk1ZZW1OSDRpRXFOd0lXajNIdERGVTBoMGRhSmlEUDRhTDRDVU1vS3VkTmUwVFE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1odHM5Y0V4TzdLLS1qUUkzVzBqSm1heF9XNkhWandBZ0VFelVCXy1QQ0dtcExZeGEwVjVWM3dTZ19FcjJTbTVGUWstaW9RNzhJd3J0bzRjbGo2c2E1S3g5MVVWcFVqLVFRX1ZGc0R1Slowb1pFQnZEYWpB0gF6QVVfeXFMTXF4VWZVSFhNVEJKQzR0MjBxLUxsSFhpVGtaUDRBekwwcGhrazdtYkRfV3BoNzkwWFZaQWJFUm1kT19Pd01FRDlLQzlpRk1ZZW1OSDRpRXFOd0lXajNIdERGVTBoMGRhSmlEUDRhTDRDVU1vS3VkTmUwVFE?oc=5"
        },
        {
          "source": "MBC 뉴스",
          "title_ko": "한은 기준금리 인상, 성장률 전망 대폭 상향‥\"물가 안정 중점\"",
          "original_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9sa0FmYTlGNGtYdVppaVdXTG16cC1SaEdudnoxVnVFaDB5Q0NTeGg1bWlDa3R1eXFUc29VMUpvOXJTWWx2ZEgtZy1zeE4xQmVXQlI1RXo4UUJCWm9ucWZrTFdzWEV5Y1NnWWVkN2JBUEo3QjQ3ZVlDMNIBeEFVX3lxTE1TU0J3WGdZbFpIdWxTYVVFeFdieFJoUm03QThGZkRJMHA1YllpdTFEMU9sLWZ2YndSeEF5TE81eEVKZmd0QkRtaldwVURFV1o5VXhQQWxFakg1cmc3d1lXOVB4VWt5M2JhdWw2THdiNC1xX3Y4enZYYQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9sa0FmYTlGNGtYdVppaVdXTG16cC1SaEdudnoxVnVFaDB5Q0NTeGg1bWlDa3R1eXFUc29VMUpvOXJTWWx2ZEgtZy1zeE4xQmVXQlI1RXo4UUJCWm9ucWZrTFdzWEV5Y1NnWWVkN2JBUEo3QjQ3ZVlDMNIBeEFVX3lxTE1TU0J3WGdZbFpIdWxTYVVFeFdieFJoUm03QThGZkRJMHA1YllpdTFEMU9sLWZ2YndSeEF5TE81eEVKZmd0QkRtaldwVURFV1o5VXhQQWxFakg1cmc3d1lXOVB4VWt5M2JhdWw2THdiNC1xX3Y4enZYYQ?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "국고채 금리, 기준금리 인상에 일제히 상승…성장률·점도표 상향(종합)",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1pMjItQUxuZFNYVDBROHdUWGZxamhtRkhuSzVGdHNUeFVoODZhc0UwZXZyN3B3YjJHeEhnejBGc2xkVHlzQWhkS040U2NkUWRzeXdrTHIwbU9iSm8?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1pMjItQUxuZFNYVDBROHdUWGZxamhtRkhuSzVGdHNUeFVoODZhc0UwZXZyN3B3YjJHeEhnejBGc2xkVHlzQWhkS040U2NkUWRzeXdrTHIwbU9iSm8?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "한국은행, 기준금리 인상…연 3.25% 결정",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBmS0JRVkJlRm5zTUxvdDRMY040WWtidk92YkpyckFpZGp6MkJNcWtuT1JrZTlJNHNVTGNpSml0Um83UGdGeldFem5zNk1SZk8tVWpRTzU0dVVvZmNXQ0FJTE5kLWttWXc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBmS0JRVkJlRm5zTUxvdDRMY040WWtidk92YkpyckFpZGp6MkJNcWtuT1JrZTlJNHNVTGNpSml0Um83UGdGeldFem5zNk1SZk8tVWpRTzU0dVVvZmNXQ0FJTE5kLWttWXc?oc=5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:24"
    },
    {
      "source": "연합뉴스",
      "title_ko": "국고채 금리, 기준금리 인상·매파적 점도표에 상승(종합)",
      "title_en": "",
      "summary_ko": "국고채 금리, 기준금리 인상·매파적 점도표에 상승(종합) 연합뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합뉴스뿐만 아니라 에너지경제신문, 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE01UDFzSTlGWlNzdnRISVZjaHhlNGFaX0liOHVzZURub1kxT0pad2ZpelppcWRPMkdPbmNrMUVqZGlxWTBTRmFmZDI4eXd2clBSRm1aR201WVJjSGlDUV9fdg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE01UDFzSTlGWlNzdnRISVZjaHhlNGFaX0liOHVzZURub1kxT0pad2ZpelppcWRPMkdPbmNrMUVqZGlxWTBTRmFmZDI4eXd2clBSRm1aR201WVJjSGlDUV9fdg?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 26 Nov 2026 07:50:28 GMT",
      "related_articles": [
        {
          "source": "MBC 뉴스",
          "title_ko": "한은, 오늘 기준금리 결정‥'인상'에 무게",
          "original_url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1veFpMQ3pHSXhmb2lpbEdHSnFsVTlFSUlMLUk2Um5QYmRHU1oybEs1RE16NnJoZC10U1E3aVpiNjlJcGlDSjVlRkZhcmh3VDNtS0RzaG5fNDZQTjJiQlczUTg1bHJiekFPbGFNc1NKNzVBb2RlNk800gF3QVVfeXFMTWc2a3h3aUVINXZ5NGR4WXBPaUhIRkJZOHpUdVBSQzFVSEdTakFxNTdSYU9iaWxhQXRzVjFxUzhWYXMwNUxiWXNKOGpJSWpSVW9qWEdXY2pnbFNkUFNCVWpmeG1SSWM4dExOYjE0a1JETlhrLThoUHc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1veFpMQ3pHSXhmb2lpbEdHSnFsVTlFSUlMLUk2Um5QYmRHU1oybEs1RE16NnJoZC10U1E3aVpiNjlJcGlDSjVlRkZhcmh3VDNtS0RzaG5fNDZQTjJiQlczUTg1bHJiekFPbGFNc1NKNzVBb2RlNk800gF3QVVfeXFMTWc2a3h3aUVINXZ5NGR4WXBPaUhIRkJZOHpUdVBSQzFVSEdTakFxNTdSYU9iaWxhQXRzVjFxUzhWYXMwNUxiWXNKOGpJSWpSVW9qWEdXY2pnbFNkUFNCVWpmeG1SSWM4dExOYjE0a1JETlhrLThoUHc?oc=5"
        },
        {
          "source": "에너지경제신문",
          "title_ko": "금통위원 7명 중 5명, 기준금리 인상 찬성…만성적 인플레 우려",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9Qa3pKeHlsUVZ0LVFWc3JmaTR3LUFVNjBfeG0zemhiZ1pqMHdORy11cEVhNzdXVFQyTmYxNkRlNnNuY0pkdVZZcmhFQ1VQcTdLS3ZjZjllRFJVdGM?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9Qa3pKeHlsUVZ0LVFWc3JmaTR3LUFVNjBfeG0zemhiZ1pqMHdORy11cEVhNzdXVFQyTmYxNkRlNnNuY0pkdVZZcmhFQ1VQcTdLS3ZjZjllRFJVdGM?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "금통위, 기준금리 3.25%로 인상…\"가파른 성장 속 수요 압력 우려\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBLUlF6TUF2WVJUUU9YMTBwcGhLNnRQTURWSHFnSnVPRWFPb09rdXN1MWF5T2lnaS1NQ3J5ODNBMzFzQWVOanhyRkRwcXJsc014M2NjeWpnZm02dWp5Y2xicnF0NFI0OHpKNDNTWHJ4aGjSAXRBVV95cUxOM1hTbk9US2RQZVhoTGI0Znk2aFJLT2p6azBWLUIyX0ZoeFBXY194amZBbWFpYWRzbFA1SjJGZFVWMHB2a3NhS092endTd0RjVnNqWlc3QnU3bVRlcnZVRzRiS3ZYY0FTZmdxM2RNMFN0YXlzRQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBLUlF6TUF2WVJUUU9YMTBwcGhLNnRQTURWSHFnSnVPRWFPb09rdXN1MWF5T2lnaS1NQ3J5ODNBMzFzQWVOanhyRkRwcXJsc014M2NjeWpnZm02dWp5Y2xicnF0NFI0OHpKNDNTWHJ4aGjSAXRBVV95cUxOM1hTbk9US2RQZVhoTGI0Znk2aFJLT2p6azBWLUIyX0ZoeFBXY194amZBbWFpYWRzbFA1SjJGZFVWMHB2a3NhS092endTd0RjVnNqWlc3QnU3bVRlcnZVRzRiS3ZYY0FTZmdxM2RNMFN0YXlzRQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:25"
    },
    {
      "source": "연합뉴스",
      "title_ko": "목표 2배 가까운 미국 물가…12월 기준금리 인상 무게",
      "title_en": "",
      "summary_ko": "목표 2배 가까운 미국 물가…12월 기준금리 인상 무게 연합뉴스TV. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합뉴스뿐만 아니라 SBS Biz 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE8tMmMwRFhuVnY3TEd3b043RG9lN3lFUWpxWF83MWQ3eVgtOFRFNWlqM2tycXNJMW5BdXpNT1hGMUFFOHR0RXBnMTBMQkI4S3Q1MkplenVQSkM4UDh0eDU2S3hXRzZ6VEE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE8tMmMwRFhuVnY3TEd3b043RG9lN3lFUWpxWF83MWQ3eVgtOFRFNWlqM2tycXNJMW5BdXpNT1hGMUFFOHR0RXBnMTBMQkI4S3Q1MkplenVQSkM4UDh0eDU2S3hXRzZ6VEE?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Thu, 26 Nov 2026 03:59:00 GMT",
      "related_articles": [
        {
          "source": "SBS Biz",
          "title_ko": "주담대 이자 폭탄 터지나? 기준금리 인상의 영향 분석",
          "original_url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE93THp3amhPRmRDbVBOZWtjcFhxY18xbFd6OFc5RGRxUFRFQ0Vic1AtNnBWbmRhSlFHWVpQV2NGbGQyV3NuYUdNZjZmRDd6RkdkaHE40gFYQVVfeXFMT0tVTmdlLUl0MGR0YkdkNnhKX3lrX0dPd040Nk5NLU9PUFRCYXVNYVcxRVVJTVpWMGtIVEpwdEhKTjVrS25FQTJWUnJpazhzbGJNRktvS3N3dQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE93THp3amhPRmRDbVBOZWtjcFhxY18xbFd6OFc5RGRxUFRFQ0Vic1AtNnBWbmRhSlFHWVpQV2NGbGQyV3NuYUdNZjZmRDd6RkdkaHE40gFYQVVfeXFMT0tVTmdlLUl0MGR0YkdkNnhKX3lrX0dPd040Nk5NLU9PUFRCYXVNYVcxRVVJTVpWMGtIVEpwdEhKTjVrS25FQTJWUnJpazhzbGJNRktvS3N3dQ?oc=5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:25"
    },
    {
      "source": "Reuters",
      "title_ko": "VIEW 엔비디아, 젠슨 황(Jensen Huang)을 CEO로 복귀시켜 기술 급증에 불을 붙였습니다",
      "title_en": "VIEW Nvidia reinstates Jensen Huang as CEO, igniting tech surge",
      "summary_ko": "VIEW 엔비디아, 젠슨 황(Jensen Huang)을 CEO로 복귀시켜 기술 급증에 불을 지폈습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQWmN5QUFQSGxDSlRyR3gxZzZQczRFSC1SNjFtY0xtMkM4cjhwbnZndkNaSW5JVDNvVVYxMDdObkhjcVZIMVpVZ2FoVFdNZ3NGQU9hckJhZUx6M0dfMERucTNVZk9aamhpRU85TE96c1pEdGUyTlhyZVRMWlNPNUJ1TG1mLTJadHltZ1Utal85WFlTb09aTXF3MTBXNG1TZ0EzeHYzUFNadw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipwFBVV95cUxQWmN5QUFQSGxDSlRyR3gxZzZQczRFSC1SNjFtY0xtMkM4cjhwbnZndkNaSW5JVDNvVVYxMDdObkhjcVZIMVpVZ2FoVFdNZ3NGQU9hckJhZUx6M0dfMERucTNVZk9aamhpRU85TE96c1pEdGUyTlhyZVRMWlNPNUJ1TG1mLTJadHltZ1Utal85WFlTb09aTXF3MTBXNG1TZ0EzeHYzUFNadw%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Mon, 23 Nov 2026 17:07:29 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia는 Bessent가 개편을 요구함에 따라 CEO 검색에 대한 열기를 느낍니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNS1ZOWlF3ZUlxWGYyZm9kX3NnZUsyNEpjYXhKaWMxY3hPbnRvSlJYeHc3ak9lejRYcHdmWjB2dk54cmMweklHdXdpVDdmRm9yNE91LWJKV2VoUC16bF9sdzRTM2NhWk5MMnBROXJ2UHA2SU0tSDNpeEZLZkxJZGg4T1laVHUyU1Fid0dtYjQ3c0tHMFRsOVp3TndoeEUzaElUSkxVT3hlOGQyZTVPZDF3emxB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNS1ZOWlF3ZUlxWGYyZm9kX3NnZUsyNEpjYXhKaWMxY3hPbnRvSlJYeHc3ak9lejRYcHdmWjB2dk54cmMweklHdXdpVDdmRm9yNE91LWJKV2VoUC16bF9sdzRTM2NhWk5MMnBROXJ2UHA2SU0tSDNpeEZLZkxJZGg4T1laVHUyU1Fid0dtYjQ3c0tHMFRsOVp3TndoeEUzaElUSkxVT3hlOGQyZTVPZDF3emxB%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Nvidia 이사회의 Huang 반전은 독립성에 대한 의구심을 불러일으킨다고 비평가들은 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPc0s4b2VlR0lnRDlhYWpheHZuRHcwNmd3VWFzUFZTZkNfbjlYaG8ybDVjZ1d4VlFXS3JaZmFWTjhkTlpaeTBKVTN3aGV1eERkMFlmZGRxUzVsYzRaZFhNblp5S2d0czFZV3ZJZVpOc0c4YlJJazhiQzlYYkFJYUo5YnhfMklmdDVGVklQMHBCQkN6dVRLQkRHWEFGaDZQMFBDblJzam5wSTFxdWd5SUdNRXdpUVRSVzNFYmNOUFo0SkllU0FMSF9lbQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiyAFBVV95cUxPc0s4b2VlR0lnRDlhYWpheHZuRHcwNmd3VWFzUFZTZkNfbjlYaG8ybDVjZ1d4VlFXS3JaZmFWTjhkTlpaeTBKVTN3aGV1eERkMFlmZGRxUzVsYzRaZFhNblp5S2d0czFZV3ZJZVpOc0c4YlJJazhiQzlYYkFJYUo5YnhfMklmdDVGVklQMHBCQkN6dVRLQkRHWEFGaDZQMFBDblJzam5wSTFxdWd5SUdNRXdpUVRSVzNFYmNOUFo0SkllU0FMSF9lbQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "갑작스러운 이사회 반전에 트럼프 개입 후 황이 엔비디아 CEO로 복귀",
          "original_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOd19EYmc4X2wzaW5zXzZ5VXZ1cUFJbS1OYzJsZ2VSTVRnMkQteWdiN3Z0dTBlNmltdll6Vy1RWnpxVUthOF9XX3g0YmVvNWdXODJUMGpSeXdldVdYQWE3N2hCQXU3RExXSDViSWI3S2xHNVZFc0NUVmh5bGRhem5aUzdDa29xb1hH?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiiAFBVV95cUxOd19EYmc4X2wzaW5zXzZ5VXZ1cUFJbS1OYzJsZ2VSTVRnMkQteWdiN3Z0dTBlNmltdll6Vy1RWnpxVUthOF9XX3g0YmVvNWdXODJUMGpSeXdldVdYQWE3N2hCQXU3RExXSDViSWI3S2xHNVZFc0NUVmh5bGRhem5aUzdDa29xb1hH%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "엔비디아, 트럼프 압박 이후 놀라운 반전으로 황 다시 고용",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOUkNIMGtvdXlmRlE2NVZqSEhkRFItNWFyeGJtR0pKbWxZTjRxZHQwTmxIbnB1eXFsZV9QWkE4bFRVMEtoU0huMmdNZHRUbnZmNTRkM3l6eVQtQ3J5OUxkZ1hxckxLQlF0aE5YZUtDTVBTT0x2eHRuQjVhdnFzNmpscXdMaUhRaGlsaVFVM0dHbF9yTURqSFpMczlrQXAyYjdqbUJTdWFjS2Jqa1pGeG9n?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxOUkNIMGtvdXlmRlE2NVZqSEhkRFItNWFyeGJtR0pKbWxZTjRxZHQwTmxIbnB1eXFsZV9QWkE4bFRVMEtoU0huMmdNZHRUbnZmNTRkM3l6eVQtQ3J5OUxkZ1hxckxLQlF0aE5YZUtDTVBTT0x2eHRuQjVhdnFzNmpscXdMaUhRaGlsaVFVM0dHbF9yTURqSFpMczlrQXAyYjdqbUJTdWFjS2Jqa1pGeG9n%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:28"
    },
    {
      "source": "Bloomberg",
      "title_ko": "엔비디아의 쇼킹유(Shocking U)",
      "title_en": "Nvidia’s Shocking U-Turn Is Bad News for Anthropic",
      "summary_ko": "엔비디아의 쇼킹유(Shocking U) 관련 핵심 동향이 발표되었습니다. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQV0RTUGRJWFNZZGNUY254YlNwRkg5akRCYzJyZnd2aGw4VDN1NzRrY1N3RFhWYzZRcmYzbndrZVZDQ01LYTkwZ0s4clBrMWJQUElxRFNrNXdURkp3d1ZycmFiczlmMEJSd2lRR0luejc4Q1VBQVVxZG04TU4tcUd3Umd5UVcyQUg1Q0lqWndiY19JSFJiVkpid2lhR1BxcDBPY0pMbmFHV3ZLREhQOE9xQWhMTFNXVy14Rkw0dkFlMEZRb0loaThr?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMixwFBVV95cUxQV0RTUGRJWFNZZGNUY254YlNwRkg5akRCYzJyZnd2aGw4VDN1NzRrY1N3RFhWYzZRcmYzbndrZVZDQ01LYTkwZ0s4clBrMWJQUElxRFNrNXdURkp3d1ZycmFiczlmMEJSd2lRR0luejc4Q1VBQVVxZG04TU4tcUd3Umd5UVcyQUg1Q0lqWndiY19JSFJiVkpid2lhR1BxcDBPY0pMbmFHV3ZLREhQOE9xQWhMTFNXVy14Rkw0dkFlMEZRb0loaThr%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Tue, 24 Nov 2026 13:15:09 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "Morning Call Sheet: Nvidia 매수 기회, AI 주식 및 연준(Fed) 피규어 소개 위험",
          "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQOTZ6MnJFa2hRYk5RalJiU2VGbVMwUjk1VDlqS3hfdlFUb3I4MXdMLVdsMVlHUUh1a2hIUG1jU194RDlRUXZlRG5JenhjaGtZd2Y3a1dTTDRvZkc5eHI5UnZVZFNpOWZnUk1YUGZQeGtkRWNfYVFIS2ZXalVfNFBRUUVpN2luWVY1Y2FyTld2SUZGTnVYXzV6ZC1MMVNwVThRaWlfSG1raDk4VGxxRUxsRHVnOFRwbmh0MkxuUmpBcjA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxQOTZ6MnJFa2hRYk5RalJiU2VGbVMwUjk1VDlqS3hfdlFUb3I4MXdMLVdsMVlHUUh1a2hIUG1jU194RDlRUXZlRG5JenhjaGtZd2Y3a1dTTDRvZkc5eHI5UnZVZFNpOWZnUk1YUGZQeGtkRWNfYVFIS2ZXalVfNFBRUUVpN2luWVY1Y2FyTld2SUZGTnVYXzV6ZC1MMVNwVThRaWlfSG1raDk4VGxxRUxsRHVnOFRwbmh0MkxuUmpBcjA%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia의 CEO Search는 Bessent의 개편 요청으로 불을 지폈습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOZVBETnNKak9BME5HaDEzOXN3TzctS3kzWUVadDVaem9wVDExVFJqb0NSMEdoZG01cXFmLTJSaFJzSkhxOTRYelRQcXYxSTl6OUdzaTE3LW9KM3FTRWh0bUZWY1BKMmNaUWVvN1luaTczdVhWTXZHVnFJSWwzZ3Z5R1JIYVljbUl5UmY3bGZfWW1tZnJOaUMwYnpQVElIekFHMjJyUDR3a0NBYVNKZkhtbGdJSQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOZVBETnNKak9BME5HaDEzOXN3TzctS3kzWUVadDVaem9wVDExVFJqb0NSMEdoZG01cXFmLTJSaFJzSkhxOTRYelRQcXYxSTl6OUdzaTE3LW9KM3FTRWh0bUZWY1BKMmNaUWVvN1luaTczdVhWTXZHVnFJSWwzZ3Z5R1JIYVljbUl5UmY3bGZfWW1tZnJOaUMwYnpQVElIekFHMjJyUDR3a0NBYVNKZkhtbGdJSQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia Blackwell 칩이 Alice Huang과 연결된 중국 사이트에 등장",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOajRDYnpkT2kwWEdlR2REeG93cnBZdkdsYmo3dTFmaVp3enZYN3Jid0RYVWZwNXJvcE00OG5FNjdwd0MzQXpFV1gzeUxkdnhxTVNoaGVNRmpnRllMTGY4emNtNW9VYnc4RWZVX0I2WExQNy1Ha21aV0FNWWVUb0FacnFLM01rUWRudjBCdGJpbGxCVUx3dl9KMEtZb0pyYURCTG1iWW5xUmNpaDlnc0lsMVpldmV6QQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxOajRDYnpkT2kwWEdlR2REeG93cnBZdkdsYmo3dTFmaVp3enZYN3Jid0RYVWZwNXJvcE00OG5FNjdwd0MzQXpFV1gzeUxkdnhxTVNoaGVNRmpnRllMTGY4emNtNW9VYnc4RWZVX0I2WExQNy1Ha21aV0FNWWVUb0FacnFLM01rUWRudjBCdGJpbGxCVUx3dl9KMEtZb0pyYURCTG1iWW5xUmNpaDlnc0lsMVpldmV6QQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Schumer는 Nvidia CEO가 미국 수출 통제법을 위반했다고 비난했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNWkIyNDFsT2dsN05tM0U4NFZjRU9IZG1Bemx1b2hqOXFneHV3bDBnY0gzc3drRkxjY0JqWVdPTW8xR29QUy1wczZRM0FaemMzMEk3X2I5Wlp5elVhS0dTb2tIMFJ3VlZ3a0dNelRZYWFpeVA0THA3UDkwMGVtd1BZMENTbEZ6alRuR3pnNnI0TGdMWjZ3VVBmb2lDZHd4ckJwVzJRTk1veERGQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxNWkIyNDFsT2dsN05tM0U4NFZjRU9IZG1Bemx1b2hqOXFneHV3bDBnY0gzc3drRkxjY0JqWVdPTW8xR29QUy1wczZRM0FaemMzMEk3X2I5Wlp5elVhS0dTb2tIMFJ3VlZ3a0dNelRZYWFpeVA0THA3UDkwMGVtd1BZMENTbEZ6alRuR3pnNnI0TGdMWjZ3VVBmb2lDZHd4ckJwVzJRTk1veERGQQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:32"
    },
    {
      "source": "Reuters",
      "title_ko": "Nvidia Bears는 Huang의 깜짝 복귀로 122억 달러의 타격을 입었습니다.",
      "title_en": "Nvidia bears face $12.2 billion hit on Huang's surprise return",
      "summary_ko": "Nvidia Bears는 Huang의 깜짝 복귀로 122억 달러의 타격을 입었습니다. 관련 핵심 동향이 발표되었습니다. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxObDc2T2YtTzVKdktGdmxSZW5iSG5Pcy16ZU9IZDZKUnhYTEJqRmRBY191eHI1QktIeHplc1B0QUM0SmJnN0oxODJUNzI4bVhRQ1ZxOE5PX19ueW92VHdQS3cyVGd4Z1lmcXRqaEtya183QUF0XzJFampRLW9OOVgtZXF1bVFicUlERG9TQy1ra3kwNnNJUlpfc3lLQ0hpdHh3Umtr?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxObDc2T2YtTzVKdktGdmxSZW5iSG5Pcy16ZU9IZDZKUnhYTEJqRmRBY191eHI1QktIeHplc1B0QUM0SmJnN0oxODJUNzI4bVhRQ1ZxOE5PX19ueW92VHdQS3cyVGd4Z1lmcXRqaEtya183QUF0XzJFampRLW9OOVgtZXF1bVFicUlERG9TQy1ra3kwNnNJUlpfc3lLQ0hpdHh3Umtr%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Mon, 23 Nov 2026 16:39:44 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "황의 엔비디아 복귀에 월가 급등, 미채/재무부수익(금리) 상승",
          "original_url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNR2c4ZVNmcHBzVFctOTBkRUd2d0VHTklseUhCcEtZT2VHbU1WbWprMUk2aDZSQ2tkZHNYVE9EWUgyaEkxeWtyN0M2V2NzR2ZCTHFmMEhvbHFDeExTNUdTeDF3WkxJZ2RSdmZ2cHBxWlFjTXdoa1hXdlZQRWtyTFFKVlJjMA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMigwFBVV95cUxNR2c4ZVNmcHBzVFctOTBkRUd2d0VHTklseUhCcEtZT2VHbU1WbWprMUk2aDZSQ2tkZHNYVE9EWUgyaEkxeWtyN0M2V2NzR2ZCTHFmMEhvbHFDeExTNUdTeDF3WkxJZ2RSdmZ2cHBxWlFjTXdoa1hXdlZQRWtyTFFKVlJjMA%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "'왕의 귀환을 기다리고 있습니다': 대만은 황의 엔비디아 복귀를 축하합니다",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNaTZ6TUZYZWVkRjE2bWxnV3RrVlZlLVhmUkJCYkNzZzhkNGJ0cUZuTFNTY3ktRFB0X252eVpXdmxVTHhVbm9zOC1mcXVfcDJ5Q1RWMFdqOFBwWWNtazJfV0prNXhpUHRLZHJLSXlzTVR0eTdKZG9yRWxYdGE2SnJPT1Fwd2VYNlhXclRaQjJvTVRFTXg2Z0MzUGc3bkp6SXVDT1ZKMV9DX044UzZRQjRpZ2pHbmwxcDBjTnc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxNaTZ6TUZYZWVkRjE2bWxnV3RrVlZlLVhmUkJCYkNzZzhkNGJ0cUZuTFNTY3ktRFB0X252eVpXdmxVTHhVbm9zOC1mcXVfcDJ5Q1RWMFdqOFBwWWNtazJfV0prNXhpUHRLZHJLSXlzTVR0eTdKZG9yRWxYdGE2SnJPT1Fwd2VYNlhXclRaQjJvTVRFTXg2Z0MzUGc3bkp6SXVDT1ZKMV9DX044UzZRQjRpZ2pHbmwxcDBjTnc%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Vance는 Huang의 Nvidia 복귀를 옹호하고 '익명 소스'를 비난합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOeFdDYXRaR3luMVhGeUFZX1Y3RlZtOF9GcGlnREowa1BxcVozNzNwckhzcjJYZzJDcFRzRlcxZTZqbDV4RXAxS2NXZkRoRTJRSDNxRU8wLXA3RV9YSGxFYTZOXzJjWUZENlFUYTVFYS13bnpTeUo4RXl1aWM1S1lNSzlMR1JDVk5QSF93T0tvdWU5cU1Bakw4emNCMHpjZ0M3Y0otdy1BSHdpWnF6YTVjUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOeFdDYXRaR3luMVhGeUFZX1Y3RlZtOF9GcGlnREowa1BxcVozNzNwckhzcjJYZzJDcFRzRlcxZTZqbDV4RXAxS2NXZkRoRTJRSDNxRU8wLXA3RV9YSGxFYTZOXzJjWUZENlFUYTVFYS13bnpTeUo4RXl1aWM1S1lNSzlMR1JDVk5QSF93T0tvdWU5cU1Bakw4emNCMHpjZ0M3Y0otdy1BSHdpWnF6YTVjUQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "AI Boom, Nvidia의 Huang에서 Krugman 시청",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPX1ZTZ2Z6QjRyd1ZZWUF2Z2pwNnhoTlRsS29DdGQtQTA1T09nY2s4dmVhdmlZRlR0Z25OeXR6eVdmVTJDRjNIXzNVemdaOU5IOGVjR3lLb2d3SXloMVpaMXFxaFd3dWRaWXppU09RbURqcHN0TTk1N3dDOTYzTHNERUgwTC05ZTJTbjNsWklYeTdiWExZRnVIcC1feEVXcWlBYTgyM0JuYjVuTUk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxPX1ZTZ2Z6QjRyd1ZZWUF2Z2pwNnhoTlRsS29DdGQtQTA1T09nY2s4dmVhdmlZRlR0Z25OeXR6eVdmVTJDRjNIXzNVemdaOU5IOGVjR3lLb2d3SXloMVpaMXFxaFd3dWRaWXppU09RbURqcHN0TTk1N3dDOTYzTHNERUgwTC05ZTJTbjNsWklYeTdiWExZRnVIcC1feEVXcWlBYTgyM0JuYjVuTUk%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:39"
    },
    {
      "source": "Bloomberg",
      "title_ko": "AI 랠리가 새로운 테스트에 직면한 모습 보기: Nvidia Curbs & Trump 관세",
      "title_en": "Watch AI Rally Faces Fresh Test: Nvidia Curbs & Trump Tariffs",
      "summary_ko": "AI 랠리가 새로운 테스트에 직면한 모습 보기: Nvidia Curbs 및 Trump 관세 Bloomberg. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Bloomberg, Wall Street Journal 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPa3NYckVYckpGRmotV2s4OU9QTjdQU3hka1A1YzdzSXhTRWlhbGhENGtWYW8zQWhaU2FiTkxLUlJjMDhnUFJjUFpwZ1IwWmRySXVITXE4dTBuN1dpLUlFTEEtX1p4UkJDelBfWGJVb2tpWVRBUU9iMU1DTmItSmo3QXpWZ0RYeEpzMWNBLWRzMmE3Y3FNWnJn?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilwFBVV95cUxPa3NYckVYckpGRmotV2s4OU9QTjdQU3hka1A1YzdzSXhTRWlhbGhENGtWYW8zQWhaU2FiTkxLUlJjMDhnUFJjUFpwZ1IwWmRySXVITXE4dTBuN1dpLUlFTEEtX1p4UkJDelBfWGJVb2tpWVRBUU9iMU1DTmItSmo3QXpWZ0RYeEpzMWNBLWRzMmE3Y3FNWnJn%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 27 Nov 2026 00:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "나스닥 100번 하락, Nvidia Euphoria 퇴색, 새로운 관세 떠오름",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQcHhkVFpXSmc2SFJ3VEV3WHg5Vm4xYmRlM2l5R3Z2TEx6emJsdVRiQVBJTjJpaDJ3X2NsZFBURUR4anlRVDY4aTl0cHFvUzFTWUw5VUtXcE5pSEt1TzNPTWlXU0xHYV84QjVURk9LV1pFRGloYTQ1aU1iUmJ4TlN1NlVRYXN6QS1ub2Z6Mm1HMlNXS0hYV1YxNzF5SV9MSUNkNUtRTnRqb1phaUlESmRaMUxjcTM0dw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxQcHhkVFpXSmc2SFJ3VEV3WHg5Vm4xYmRlM2l5R3Z2TEx6emJsdVRiQVBJTjJpaDJ3X2NsZFBURUR4anlRVDY4aTl0cHFvUzFTWUw5VUtXcE5pSEt1TzNPTWlXU0xHYV84QjVURk9LV1pFRGloYTQ1aU1iUmJ4TlN1NlVRYXN6QS1ub2Z6Mm1HMlNXS0hYV1YxNzF5SV9MSUNkNUtRTnRqb1phaUlESmRaMUxjcTM0dw%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "Nvidia 뉴스가 시장을 상승시키면서 금 선물 반등",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQQ1lDUDJKYnppMTFtNDdCYUoyWkVjdTBJYWpOaWY3OHFRUTMxT0VSUTR0UWN4SEFQVVZJUlhqNjU4OFlDeXdHZkh4ZUFFSTNzWXhEcWpRQ0h0eVk3Q1ZmU2I5OURqdnhEc1hlQmRDcGVVLXZ5YW8yTWQ4dWYwRHE4V0dLTGZhd0p2S3A1V0l6MUs4M3RXaFh0TlJDZUdQYkdPRWNoclFEMl9sY2JTQzNZcDJn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxQQ1lDUDJKYnppMTFtNDdCYUoyWkVjdTBJYWpOaWY3OHFRUTMxT0VSUTR0UWN4SEFQVVZJUlhqNjU4OFlDeXdHZkh4ZUFFSTNzWXhEcWpRQ0h0eVk3Q1ZmU2I5OURqdnhEc1hlQmRDcGVVLXZ5YW8yTWQ4dWYwRHE4V0dLTGZhd0p2S3A1V0l6MUs4M3RXaFh0TlJDZUdQYkdPRWNoclFEMl9sY2JTQzNZcDJn%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia와 AI가 시장 충격을 두려워하는 모습 보기: 시장 현황",
          "original_url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOQUpKdll3YnRTeXhYejFpMFNxZEJnRk5KWEZJN0RISXB0Y3JHcVM4YlY4dnF3djFFeTNlRXZER2tPYXBONFYwcUhNY3FGQU9QWEpqMzgtNDhxc0VqbXE2QTVCR0Q1WVFyZ0ExSVM4azhiRVRrQkl2RDNWWUFOakRrVG5mMlA4VW56NGJ1SzVFdmpwcmRneE5UbWdWS1lsNkJH?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMioAFBVV95cUxOQUpKdll3YnRTeXhYejFpMFNxZEJnRk5KWEZJN0RISXB0Y3JHcVM4YlY4dnF3djFFeTNlRXZER2tPYXBONFYwcUhNY3FGQU9QWEpqMzgtNDhxc0VqbXE2QTVCR0Q1WVFyZ0ExSVM4azhiRVRrQkl2RDNWWUFOakRrVG5mMlA4VW56NGJ1SzVFdmpwcmRneE5UbWdWS1lsNkJH%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia Saga가 중국 AI를 스턴트할 것인가?",
          "original_url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNZGVnb1Q5QllweVA5WllCYXRSWTVLajZ5bmtSMENSQW1EcXhRdXMyN1ZFRHpyZ1JiUWZyenFUS2U1Vi1Ucm9lTlR2SGtNQ2d6eW1WbWp1blpUY3R2VF81V3psTnlOY1VPMFQydkp0RUtvX3kxYmJwcnBicS1uLU5FYWVOeTE5TDFtSGE5ZVd3?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMijgFBVV95cUxNZGVnb1Q5QllweVA5WllCYXRSWTVLajZ5bmtSMENSQW1EcXhRdXMyN1ZFRHpyZ1JiUWZyenFUS2U1Vi1Ucm9lTlR2SGtNQ2d6eW1WbWp1blpUY3R2VF81V3psTnlOY1VPMFQydkp0RUtvX3kxYmJwcnBicS1uLU5FYWVOeTE5TDFtSGE5ZVd3%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-27 20:01:43"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "구리는 AI 롤러코스터 속 부진하지만 물리적 공급은 여전히 ​​부족하다",
      "title_en": "Copper Slumps Amid AI Roller Coaster But Physical Supply Remains Tight",
      "summary_ko": "구리, AI 롤러코스터 속 부진했지만 실물 공급은 여전히 ​​부족 WSJ. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Wall Street Journal에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQbXJXdFVUTFZpNnl3SlJWbU9iV0ZaOGh1QUVUR1o5WjYtOXhwb3M1NUROaFFTb3NpOUJRZ1ROZ2Y0NlVlOWhwb0htcUY3SV9hYlRmZnMxT2Rnc21UMUlmazQwZk50TF9SY0U2enpKTzQ1a1hwbTY2aGlLbmM3Z0xkODBrQWg1YVdSREgtMjRKR1JHUk1RN3hrZjEwNmZpUk5EZktvRFVNdklzVzl5R0x0Mlh4Q3k2UmoxY203SFU3R1kwWDBQUnc?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMixgFBVV95cUxQbXJXdFVUTFZpNnl3SlJWbU9iV0ZaOGh1QUVUR1o5WjYtOXhwb3M1NUROaFFTb3NpOUJRZ1ROZ2Y0NlVlOWhwb0htcUY3SV9hYlRmZnMxT2Rnc21UMUlmazQwZk50TF9SY0U2enpKTzQ1a1hwbTY2aGlLbmM3Z0xkODBrQWg1YVdSREgtMjRKR1JHUk1RN3hrZjEwNmZpUk5EZktvRFVNdklzVzl5R0x0Mlh4Q3k2UmoxY203SFU3R1kwWDBQUnc%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 25 Nov 2026 16:30:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-27 20:01:44"
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
