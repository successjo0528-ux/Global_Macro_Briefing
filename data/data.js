window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-09-02 05:01:51",
    "date_str": "2026년 09월 02일 (수)",
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
      "price": 3.772,
      "previous_close": 3.703,
      "change": 0.069,
      "change_percent": 1.86,
      "display_price": "3.772%",
      "status": "up",
      "history": [
        3.703,
        3.705,
        3.69,
        3.678,
        3.732,
        3.772
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-09-01 20:00:35"
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
      "price": 4.796,
      "previous_close": 4.704,
      "change": 0.092,
      "change_percent": 1.96,
      "display_price": "4.796%",
      "status": "up",
      "history": [
        4.704,
        4.639,
        4.664,
        4.672,
        4.758,
        4.796
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-09-01 20:00:35",
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
      "price": 5.268,
      "previous_close": 5.231,
      "change": 0.037,
      "change_percent": 0.71,
      "display_price": "5.268%",
      "status": "up",
      "history": [
        5.231,
        5.174,
        5.186,
        5.191,
        5.249,
        5.268
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-09-01 20:00:35"
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
      "price": 99.691,
      "previous_close": 98.92,
      "change": 0.771,
      "change_percent": 0.78,
      "display_price": "99.69 pt",
      "status": "up",
      "history": [
        98.92,
        99.17,
        99.16,
        99.43,
        99.691
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-09-01 20:00:35"
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
      "price": 160.234,
      "previous_close": 158.904,
      "change": 1.33,
      "change_percent": 0.84,
      "display_price": "160.23엔",
      "status": "up",
      "history": [
        158.904,
        159.139,
        159.223,
        159.255,
        159.321,
        160.122,
        160.234
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-09-01 20:00:35"
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
      "price": 4374.3,
      "previous_close": 4638.1,
      "change": -263.8,
      "change_percent": -5.69,
      "display_price": "$4,374.30",
      "status": "down",
      "history": [
        4638.1,
        4598.2,
        4609.7,
        4478.1,
        4431.1,
        4374.3
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-09-01 20:00:35"
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
      "price": 90.57,
      "previous_close": 82.36,
      "change": 8.21,
      "change_percent": 9.97,
      "display_price": "$90.57",
      "status": "up",
      "history": [
        82.36,
        82.23,
        83.53,
        83.4,
        85.76,
        90.57
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-09-01 20:00:35"
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
      "price": 77295.16,
      "previous_close": 79027.42,
      "change": -1732.26,
      "change_percent": -2.19,
      "display_price": "$77,295",
      "status": "down",
      "history": [
        79027.422,
        80257.539,
        77830.289,
        78245.812,
        77667.57,
        78548.633,
        77295.156
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-09-01 20:00:36"
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
      "price": 971.3,
      "previous_close": 270.4,
      "change": 700.9,
      "change_percent": 259.21,
      "display_price": "$971.3B (약 9,713억$)",
      "status": "up",
      "history": [
        24.0,
        44.5,
        950.8,
        1023.6,
        218.2,
        270.4,
        971.3
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-09-01 20:00:36"
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
      "price": 7631.54,
      "previous_close": 7674.37,
      "change": -42.83,
      "change_percent": -0.56,
      "display_price": "7,631.54",
      "status": "down",
      "history": [
        7652.86,
        7677.28,
        7675.7,
        7730.99,
        7686.14,
        7631.54
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-09-01 20:00:38"
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
      "price": 29077.22,
      "previous_close": 29308.86,
      "change": -231.64,
      "change_percent": -0.79,
      "display_price": "29,077.22",
      "status": "down",
      "history": [
        29023.18,
        29209.23,
        29224.52,
        29641.561,
        29456.971,
        29077.221
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-09-01 20:00:38"
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
      "price": 11288.612,
      "previous_close": 11740.37,
      "change": -451.758,
      "change_percent": -3.85,
      "display_price": "11,288.61",
      "status": "down",
      "history": [
        11423.17,
        11588.04,
        11611.24,
        11882.17,
        11535.05,
        11288.612
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-09-01 20:00:38"
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
      "price": 16.38,
      "previous_close": 15.85,
      "change": 0.53,
      "change_percent": 3.34,
      "display_price": "16.38",
      "status": "up",
      "history": [
        15.85,
        15.45,
        15.21,
        14.51,
        14.92,
        16.38
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-09-01 20:00:38"
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
      "price": 1373.99,
      "previous_close": 1384.98,
      "change": -10.99,
      "change_percent": -0.79,
      "display_price": "1,373.99원",
      "status": "down",
      "history": [
        1384.98,
        1380.76,
        1381.49,
        1383.49,
        1380.45,
        1377.11,
        1373.99
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-09-01 20:00:38",
      "fx_averages": {
        "avg_1y": 1460.0,
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
      "price": 6835.8,
      "previous_close": 6912.95,
      "change": -77.15,
      "change_percent": -1.12,
      "display_price": "6,835.80",
      "status": "down",
      "history": [
        6696.96,
        6742.74,
        6808.21,
        6912.37,
        6820.02
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-09-01 20:00:39"
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
      "price": 821.25,
      "previous_close": 801.94,
      "change": 19.31,
      "change_percent": 2.41,
      "display_price": "821.25",
      "status": "up",
      "history": [
        813.33,
        827.15,
        826.87,
        837.65,
        834.29
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-09-01 20:00:39"
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
      "price": 3.87,
      "previous_close": 3.83,
      "change": 0.04,
      "change_percent": 1.04,
      "display_price": "3.87%",
      "status": "up",
      "history": [
        3.83,
        3.83,
        3.81,
        3.75,
        3.78,
        3.83,
        3.87
      ],
      "chart_url": "https://finance.naver.com/marketindex/interestDetail.naver?marketindexCd=IRR_GOVT03Y",
      "updated_at": "2026-09-01 20:00:39"
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
      "updated_at": "2026-09-01 20:00:40"
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
      "price": 175.84,
      "previous_close": 178.34,
      "change": -2.5,
      "change_percent": -1.4,
      "display_price": "$175.84",
      "status": "down",
      "history": [
        173.64,
        180.15,
        179.18,
        182.14,
        180.86,
        175.84
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-09-01 20:00:41"
    }
  ],
  "news": [
    {
      "source": "Investing.com",
      "title_ko": "연준 금리 인상 우려·중동 긴장 고조에 아시아 증시 하락",
      "title_en": "",
      "summary_ko": "연준 금리 인상 우려·중동 긴장 고조에 아시아 증시 하락 Investing.com 한국어. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Investing.com뿐만 아니라 조선일보, 파이낸셜뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBhWGpvMHdtVnNNSlBsc3R4RTN5VDVwZXVKd3ZDZnJiMEZNRlBXUk5IbFZzX2FHWkQ0OXh0c0J6Y2RGT3U5NlZzX00wekIxcGUwdWpSaFVJcGplN3FoVTZTTUZEUGNjeHV2WGI5aV9tQmE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBhWGpvMHdtVnNNSlBsc3R4RTN5VDVwZXVKd3ZDZnJiMEZNRlBXUk5IbFZzX2FHWkQ0OXh0c0J6Y2RGT3U5NlZzX00wekIxcGUwdWpSaFVJcGplN3FoVTZTTUZEUGNjeHV2WGI5aV9tQmE?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 31 Aug 2026 03:38:00 GMT",
      "related_articles": [
        {
          "source": "Investing.com",
          "title_ko": "엔화 160엔 근접 속 아시아 통화 안정…베센트, BOJ 금리 인상 지지",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB6NTVtY0NLVzhpU3p0QXkxMExNTV81bXRkWHlJMVRkQzI2Y1VRQnpqQmFpZDkwS1ZJNUZXZFdjVWphQUNtZzVQSnhYNGVfcmEtMmU0bDZVbTJxajhSWFhoMHRSYnF3cEE?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB6NTVtY0NLVzhpU3p0QXkxMExNTV81bXRkWHlJMVRkQzI2Y1VRQnpqQmFpZDkwS1ZJNUZXZFdjVWphQUNtZzVQSnhYNGVfcmEtMmU0bDZVbTJxajhSWFhoMHRSYnF3cEE?oc=5"
        },
        {
          "source": "파이낸셜뉴스",
          "title_ko": "바 연준 이사 \"인플레 안 꺾이면 금리 인상 단호히 나서야\"",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE4yTG82bUpYb3ZyZFlWSzVBTkIwLW8tWXBOY00zaUo3MGlSTmJvSi1rcXhnR1RBei1leVlwM204ZDNocTdBWmdQQktWY0IwQUZ0UzZieEhOSGY3QQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE4yTG82bUpYb3ZyZFlWSzVBTkIwLW8tWXBOY00zaUo3MGlSTmJvSi1rcXhnR1RBei1leVlwM204ZDNocTdBWmdQQktWY0IwQUZ0UzZieEhOSGY3QQ?oc=5"
        },
        {
          "source": "KBC광주방송",
          "title_ko": "연준 '금리 인상' 시사에 트럼프 \"美 금리 너무 높아...세계 최저여야\"",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBEZ05zM2dPNU96d1NfRXNaSlA2enpySnU2b1c3TWxSVGFMVGEzM3E1NTlveDdjcTZwNXBkeGtwRC0ySUtMeDFTSnZXUmg5b3dhRWxOVlpnREFqVWdYS0ZnLQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBEZ05zM2dPNU96d1NfRXNaSlA2enpySnU2b1c3TWxSVGFMVGEzM3E1NTlveDdjcTZwNXBkeGtwRC0ySUtMeDFTSnZXUmg5b3dhRWxOVlpnREFqVWdYS0ZnLQ?oc=5"
        },
        {
          "source": "조선일보",
          "title_ko": "은행주, 韓 두달 연속 금리 인상, 美 연준 ‘매파적’ 기조에 강세",
          "original_url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPaC1qV3BwZ2tPUzUxOHB6ekxQYmt6VVQwVXZ4RWoybVh3YWx2STZkakdSdTZQTWVDLVNXOFFfV2RqTnFicFVOVkp3cnIybzcwUGhLb2ZXbzNVcTdqM0ZiWFk3bE1zWHM0aHFpdjFXS1M1ZDhsSnlXY2ZPTDRPbEdrNA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPaC1qV3BwZ2tPUzUxOHB6ekxQYmt6VVQwVXZ4RWoybVh3YWx2STZkakdSdTZQTWVDLVNXOFFfV2RqTnFicFVOVkp3cnIybzcwUGhLb2ZXbzNVcTdqM0ZiWFk3bE1zWHM0aHFpdjFXS1M1ZDhsSnlXY2ZPTDRPbEdrNA?oc=5"
        }
      ],
      "crawled_at": "2026-09-01 20:00:50"
    },
    {
      "source": "Investing.com",
      "title_ko": "베센트, 일본에 재정 건전화·금리 인상 경로 제시 촉구",
      "title_en": "",
      "summary_ko": "베센트, 일본에 재정 건전화·금리 인상 경로 제시 촉구 Investing.com 한국어. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Investing.com뿐만 아니라 Investing.com, bloomingbit.io 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9ZQ0x2TDktTnNob042LXhKM1hQRXlZSWpvUFVLNUVKSUdTSURYVFVTVldMaDBkSVRGdnBlV0p4dG1kdmxTOVl4UURFSDZFaG5zWFBzclZfVlAzWWdRSDBjVTV2NFh0MFFuV19VTDllSDU?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9ZQ0x2TDktTnNob042LXhKM1hQRXlZSWpvUFVLNUVKSUdTSURYVFVTVldMaDBkSVRGdnBlV0p4dG1kdmxTOVl4UURFSDZFaG5zWFBzclZfVlAzWWdRSDBjVTV2NFh0MFFuV19VTDllSDU?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 01 Sep 2026 00:32:00 GMT",
      "related_articles": [
        {
          "source": "bloomingbit.io",
          "title_ko": "베센트 \"아베노믹스 끝나가\"…BOJ 9월 금리 인상 확률 88%",
          "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE4wbTBickhKMXNEMjhqb2lyNXdUVkt0Y3FjZmRabDRlZ0ttLWw5RlZJRHY3Z0pTSkJrR1lCLWw5dGNvbU1KZ2k1LTV3d2xobG5O?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE4wbTBickhKMXNEMjhqb2lyNXdUVkt0Y3FjZmRabDRlZ0ttLWw5RlZJRHY3Z0pTSkJrR1lCLWw5dGNvbU1KZ2k1LTV3d2xobG5O?oc=5"
        },
        {
          "source": "Investing.com",
          "title_ko": "베센트 미 재무장관, BOJ에 건전한 정책 유지·엔화 변동성 회피 촉구",
          "original_url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBzTmNrWEtUcl9tRWJkUU5KSThWUnhBNnJOakhaQmV4MzBIV21mdnkxTmVTNHFzQlRKNXVOTmJ5WUNDU1FEWkNCTGgtRWoyWW9OQ3plVEgyVlZKX2w1MlllLWE1WjlRU3pwbE9SS0Rn?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBzTmNrWEtUcl9tRWJkUU5KSThWUnhBNnJOakhaQmV4MzBIV21mdnkxTmVTNHFzQlRKNXVOTmJ5WUNDU1FEWkNCTGgtRWoyWW9OQ3plVEgyVlZKX2w1MlllLWE1WjlRU3pwbE9SS0Rn?oc=5"
        },
        {
          "source": "Investing.com",
          "title_ko": "베센트 \"일본과 BOJ, 엔화 강세 위한 조치 취할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1wXzBRVXNMM09hYWpWamg4LUxyWEhNYzlxaEtmRkFIdmRmY1lsY0hGamFJMjI1SHh3Ymd5TXFvamh1OU4weHppWnAxX0pNa05XRmlUWW5PdVBfTlJsbmZzUEZzUThVemF4WUtwWmpmbE0?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1wXzBRVXNMM09hYWpWamg4LUxyWEhNYzlxaEtmRkFIdmRmY1lsY0hGamFJMjI1SHh3Ymd5TXFvamh1OU4weHppWnAxX0pNa05XRmlUWW5PdVBfTlJsbmZzUEZzUThVemF4WUtwWmpmbE0?oc=5"
        },
        {
          "source": "Investing.com",
          "title_ko": "베센트 美 재무 \"엔화 안정적…BOJ 금리 압박 없다\"",
          "original_url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1ycy13Vjd3ZldodDBRVWszM2RGVExNQmhXbS1NWlhrYXgybVlvakxjS1B0RjNGTmw1VGExM2x6MXk4aURsX1UwWkJiMzlQdkhJRXBZYWh0LWFaX1BkeXI3UFYyY2RBLWJxTmJsME1ZMWFTNGtJZ2FJ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1ycy13Vjd3ZldodDBRVWszM2RGVExNQmhXbS1NWlhrYXgybVlvakxjS1B0RjNGTmw1VGExM2x6MXk4aURsX1UwWkJiMzlQdkhJRXBZYWh0LWFaX1BkeXI3UFYyY2RBLWJxTmJsME1ZMWFTNGtJZ2FJ?oc=5"
        }
      ],
      "crawled_at": "2026-09-01 20:00:50"
    },
    {
      "source": "Reuters",
      "title_ko": "이란 전쟁은 인플레이션을 높게 유지할 수 있다고 ECB 정책 입안자 렌은 경고했다고 FT는 보도했습니다.",
      "title_en": "Iran war could keep inflation high, ECB policymaker Rehn warns, FT reports",
      "summary_ko": "이란 전쟁은 인플레이션을 높게 유지할 수 있다고 ECB 정책 입안자 렌은 경고했다고 FT는 보도했습니다. 관련 핵심 동향이 발표되었습니다. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 Financial Times, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNczVob1gxUHFoRy1KdW9KWVliajZETzhoSDdQeGlDQ3pkYlRJZ1RyVjFMYlJ6LXpVQ1EwemZiYXZXblVqRW1SS2VOVWZsWmJXVTU1dFN6SDczZ2pNNjAtMmhJYVZZaUp2QmR6cm5wU0pDZloxbWY0R1hCakZlV2ZORHB4Ym1TZ2p1WVpLOTJjbTFsN3YwTVMwMDhWMFNsUXRNSjZVOGZTb29BcjhrUnBkYnNlU1pzVjVhNnJxdkNNZzlpV3hN?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMixAFBVV95cUxNczVob1gxUHFoRy1KdW9KWVliajZETzhoSDdQeGlDQ3pkYlRJZ1RyVjFMYlJ6LXpVQ1EwemZiYXZXblVqRW1SS2VOVWZsWmJXVTU1dFN6SDczZ2pNNjAtMmhJYVZZaUp2QmR6cm5wU0pDZloxbWY0R1hCakZlV2ZORHB4Ym1TZ2p1WVpLOTJjbTFsN3YwTVMwMDhWMFNsUXRNSjZVOGZTb29BcjhrUnBkYnNlU1pzVjVhNnJxdkNNZzlpV3hN%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 01 Sep 2026 04:25:00 GMT",
      "related_articles": [
        {
          "source": "Financial Times",
          "title_ko": "이란의 '소모 충돌'로 인해 인플레이션이 계속 높아질 수 있다고 ECB 정책 입안자가 경고",
          "original_url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQTmJOb19mc01kRTRlbi1Hd2VNR1RUUGtrVHZHeUNQT2F2aDJjajlqNU5LeEVweVA4cko3QmNPcFJyN0d4dE92ZWNWYzlQUkNKTW1KbF9FeW9ZVzZIaGNqSWVOU1lJMHl4V0ZlV0FOS0tXaGpXVkhPOXdoU3I0NzhsaGZzc2o?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMihAFBVV95cUxQTmJOb19mc01kRTRlbi1Hd2VNR1RUUGtrVHZHeUNQT2F2aDJjajlqNU5LeEVweVA4cko3QmNPcFJyN0d4dE92ZWNWYzlQUkNKTW1KbF9FeW9ZVzZIaGNqSWVOU1lJMHl4V0ZlV0FOS0tXaGpXVkhPOXdoU3I0NzhsaGZzc2o%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "이스라엘 중앙은행 “인플레이션이 낮게 유지되면 추가 금리인하 가능”",
          "original_url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxObFl2Z09zV1BON3Uwc3Btc1JoOVRjODNmUXRONTR4a1NWeFU3UnNIb21LaGYzakd4RlJwSDZPZjllTFZlamdRb1prU2RHMzdQc1JQTFNjSk40dVRyWFhrUWZCcUdaTDZCLTZZT1AwSlNZRXlQWXlGQjl6UkhielBJZUsxZ21VT3U5Y0h1YXZHQ2ZtODFQVV9GQm81LWxZNEtoc1lZV1FVZW1ra0Z5MEFJaThGbDUzLW1yMmttM2tHRWtPbnBueGdWM0FB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiygFBVV95cUxObFl2Z09zV1BON3Uwc3Btc1JoOVRjODNmUXRONTR4a1NWeFU3UnNIb21LaGYzakd4RlJwSDZPZjllTFZlamdRb1prU2RHMzdQc1JQTFNjSk40dVRyWFhrUWZCcUdaTDZCLTZZT1AwSlNZRXlQWXlGQjl6UkhielBJZUsxZ21VT3U5Y0h1YXZHQ2ZtODFQVV9GQm81LWxZNEtoc1lZV1FVZW1ra0Z5MEFJaThGbDUzLW1yMmttM2tHRWtPbnBueGdWM0FB%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "독일 인플레이션 상승으로 인해 ECB의 관심이 높아졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPMWZ4UkVFbVJIX1ZZQ3Y0Tk91b1FxamswZkJIcWlHWk8zQlJ2emlId1lRNWN2cUxDVVRXWXBad0xjTkZ5MnJteDRISlJRekhiaXB0YnFJZjhXN2FmVjhLdlQ2Sk9zUlhodHU3SjNKMFRRTGxBVXdNNFdVVWoyTTBFTkM2dGJBRjVWYjNPZndDeU8tdFVNV3FKcnhVX0h4ZzRMS2phMEZiMFpYdUQwSHRvTUlNdjdQY3c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxPMWZ4UkVFbVJIX1ZZQ3Y0Tk91b1FxamswZkJIcWlHWk8zQlJ2emlId1lRNWN2cUxDVVRXWXBad0xjTkZ5MnJteDRISlJRekhiaXB0YnFJZjhXN2FmVjhLdlQ2Sk9zUlhodHU3SjNKMFRRTGxBVXdNNFdVVWoyTTBFTkM2dGJBRjVWYjNPZndDeU8tdFVNV3FKcnhVX0h4ZzRMS2phMEZiMFpYdUQwSHRvTUlNdjdQY3c%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "에버코어 구하 “지금은 인플레이션이 처음이다”",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPSURISTBwNnlGRnJBZXVmOTF5dnJvd2F0R3g4V3BfZVZJSUhwY19sSWdJZ0F4TVVLc0Zzb2NrVVVzWVhlVmFCTzQ2RzEzeDRHOFphdmpSYk91ZXJEZ2VRUEp5TkpFcTJDcDlNSExXUEN5cWlIY0JDaGJ1ZlJtWjBkMkFIRWRQcm8tOGFNMzZyTzBxS0xLcDNZRFNiOGlUVmRuVVF6dTlZUndKVmtDUmc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxPSURISTBwNnlGRnJBZXVmOTF5dnJvd2F0R3g4V3BfZVZJSUhwY19sSWdJZ0F4TVVLc0Zzb2NrVVVzWVhlVmFCTzQ2RzEzeDRHOFphdmpSYk91ZXJEZ2VRUEp5TkpFcTJDcDlNSExXUEN5cWlIY0JDaGJ1ZlJtWjBkMkFIRWRQcm8tOGFNMzZyTzBxS0xLcDNZRFNiOGlUVmRuVVF6dTlZUndKVmtDUmc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:00:54"
    },
    {
      "source": "MarketWatch",
      "title_ko": "연준(Fed)의 리사 쿡이 주택담보대출 사기를 부인하고 트럼프는 자신을 해임할 근거가 없다고 말했다",
      "title_en": "Fed’s Lisa Cook denies committing mortgage fraud, says Trump has no grounds to remove her from office",
      "summary_ko": "연준(Fed)의 리사 쿡이 모기지 사기 혐의를 부인하고 트럼프는 자신을 해임할 근거가 없다고 말했다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. MarketWatch뿐만 아니라 CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPM1NoWUNmZWQ2VjhCa1BMZlg5NWNhQ2IwVWJnU2VaUUpyVEpBTnhPYnBubGdYX2hkZnVZTXBYakQzbHRpUTJBVU5ldm5zQm5ZdkNteHhPWlpoamRVQUVtc3BUZXlrcWJybWdaS0NtcmpBOURhQV93Z2dHcjZUbHMtd2UxWkprRHFFOTZBT2Jwak4xajQycUpmT3l6bk1PRXFQX2xWTF9YVEswSGFEaFZmNlpVclU1N1ZUZjl4Z29TNkt1dzFZY09JNUkyM29PNThjeFJwal9JNEdKZw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMi2gFBVV95cUxPM1NoWUNmZWQ2VjhCa1BMZlg5NWNhQ2IwVWJnU2VaUUpyVEpBTnhPYnBubGdYX2hkZnVZTXBYakQzbHRpUTJBVU5ldm5zQm5ZdkNteHhPWlpoamRVQUVtc3BUZXlrcWJybWdaS0NtcmpBOURhQV93Z2dHcjZUbHMtd2UxWkprRHFFOTZBT2Jwak4xajQycUpmT3l6bk1PRXFQX2xWTF9YVEswSGFEaFZmNlpVclU1N1ZUZjl4Z29TNkt1dzFZY09JNUkyM29PNThjeFJwal9JNEdKZw%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 27 Aug 2026 00:14:00 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "연준(Fed)의 리사 쿡(Lisa Cook), 모기지 의혹을 트럼프와 내각에 되돌려",
          "original_url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFB0OVE3a2tFeHJKY1dFTmEwanp2UlpINUJFQi13N1FrUzdRQmRvMUxuRXpOVzJ6eng1eWItRDBFZXVZUTJHV3dXT0VaUTh5SURkVVNmUFVPcGctZG0xTi1QcjFrN2VLb1daU052dGFTVEYybGNMVTBv0gF8QVVfeXFMTjYyTmlMaDJpT0xfWTdFcEVHN0gweEloM3gyMG9xYnB4cTVUVE1Fa2lHNlR5ZXhUTFByLVlac0lCZm1KU1NtUk5sbDZwZDhpbHRYbDBiNGNNN1AxcjAzTjVEQ2lxN1pVVnplMmFUQlBPa0N4eTV1MVRwMGo5SQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMid0FVX3lxTFB0OVE3a2tFeHJKY1dFTmEwanp2UlpINUJFQi13N1FrUzdRQmRvMUxuRXpOVzJ6eng1eWItRDBFZXVZUTJHV3dXT0VaUTh5SURkVVNmUFVPcGctZG0xTi1QcjFrN2VLb1daU052dGFTVEYybGNMVTBv0gF8QVVfeXFMTjYyTmlMaDJpT0xfWTdFcEVHN0gweEloM3gyMG9xYnB4cTVUVE1Fa2lHNlR5ZXhUTFByLVlac0lCZm1KU1NtUk5sbDZwZDhpbHRYbDBiNGNNN1AxcjAzTjVEQ2lxN1pVVnplMmFUQlBPa0N4eTV1MVRwMGo5SQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:00:57"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "얼마나 타이트한지",
      "title_en": "How a Tight-Lipped Fed Could Lead to Higher Mortgage Rates",
      "summary_ko": "얼마나 타이트한지 관련 핵심 동향이 발표되었습니다. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Wall Street Journal뿐만 아니라 Bloomberg, MarketWatch 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPSnhQaGtGR0QtRkEtN2R3Mno3WnhlczZyZ1N4c3FyOGRXUzdvUHFIX3dVNGJOcUxKYzZEVWJEQ0pXa3lVZjRpQXo2Q25sZDROX1Q5SUxIUzhOaE9JUmJKa0RtNTlvY0xqM2E0Mm16WDFieTZZakNrLUViMFZjanZVZ2E1Z1RVSG1KanJDTVc2akx5NFpVU2FrSGZyblFtZ2R3UDJHQ3ZOOW8?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxPSnhQaGtGR0QtRkEtN2R3Mno3WnhlczZyZ1N4c3FyOGRXUzdvUHFIX3dVNGJOcUxKYzZEVWJEQ0pXa3lVZjRpQXo2Q25sZDROX1Q5SUxIUzhOaE9JUmJKa0RtNTlvY0xqM2E0Mm16WDFieTZZakNrLUViMFZjanZVZ2E1Z1RVSG1KanJDTVc2akx5NFpVU2FrSGZyblFtZ2R3UDJHQ3ZOOW8%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 29 Jun 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)의 슈미드(Schmid), 인플레이션을 줄이기 위해서는 더 긴축적인 정책이 필요하다고 말함",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNVEhVQmoySzBVakJNbERFMlQ5RTJwRER3NEE0U242bFdKT21UMndVUUJDRm1VeWV5ZEduQXFydmxyWE9CYi01MDRTcnhxVGNzZmxZbWJzaDR2aXlCMzFDQmpPRjVmRnZsWjdNRzYwampkWEhvYk5fMGd4X3ptdUpqTm5RcDh0UF9FU3N1c1hPc0VXaFN0amRtM3F4dndfWThyRE9tUlVYWlBvNGJSSEYw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxNVEhVQmoySzBVakJNbERFMlQ5RTJwRER3NEE0U242bFdKT21UMndVUUJDRm1VeWV5ZEduQXFydmxyWE9CYi01MDRTcnhxVGNzZmxZbWJzaDR2aXlCMzFDQmpPRjVmRnZsWjdNRzYwampkWEhvYk5fMGd4X3ptdUpqTm5RcDh0UF9FU3N1c1hPc0VXaFN0amRtM3F4dndfWThyRE9tUlVYWlBvNGJSSEYw%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "워시가 연준을 운영하는 상황에서 채권 투자자들은 걱정해야 할까?",
          "original_url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPMVpzZVg1YTdjVW95S3FwZG1ucnBoWnU2eFpVX2RuWkRvWmdjdXJkX1U5cWtHN19rRklTQzlrSDB2cnhIXzJaYmJLSENzY0Q2dzdadEFBV3Y2RlNFdDM5TV9rbEZianhiU19kTGliRHg1T21lR2dJdVNQRmplTi1fd2lWQlJ3Z3J4RHFNaTEySlZrV2xvc0RoUU5ld3Z1Zw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMingFBVV95cUxPMVpzZVg1YTdjVW95S3FwZG1ucnBoWnU2eFpVX2RuWkRvWmdjdXJkX1U5cWtHN19rRklTQzlrSDB2cnhIXzJaYmJLSENzY0Q2dzdadEFBV3Y2RlNFdDM5TV9rbEZianhiU19kTGliRHg1T21lR2dJdVNQRmplTi1fd2lWQlJ3Z3J4RHFNaTEySlZrV2xvc0RoUU5ld3Z1Zw%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "미국채/재무부, 연준(Fed) 그리고 당신의 돈에 대한 위협",
          "original_url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNLVVTcVVZeEVrOUF6V1NYdF8wcERQV1pWaGJkT2FySkRIZmtwOHVGOEZDNHF6VzRpdkhhRzVHd3dZTkRtWWJzMmZ6cDIwc1N4VG1xM3FNMml3aV9ETkYwSU5zaFpZd3FGeUNBWGRNY0RuV2NXanZHb2thckQ1ZzFDVmhmeFNsSGVGWTNoTUlaSFdjallLemtF?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilwFBVV95cUxNLVVTcVVZeEVrOUF6V1NYdF8wcERQV1pWaGJkT2FySkRIZmtwOHVGOEZDNHF6VzRpdkhhRzVHd3dZTkRtWWJzMmZ6cDIwc1N4VG1xM3FNMml3aV9ETkYwSU5zaFpZd3FGeUNBWGRNY0RuV2NXanZHb2thckQ1ZzFDVmhmeFNsSGVGWTNoTUlaSFdjallLemtF%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:01"
    },
    {
      "source": "Bloomberg",
      "title_ko": "세계는 대부분 Bessent의 이란 제재 경고를 무시합니다.",
      "title_en": "World Mostly Shrugs Off Bessent’s Iran Sanctions Warnings",
      "summary_ko": "세계는 대부분 Bessent의 이란 제재 경고를 무시합니다. Bloomberg.com. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQVUFrM2N3M2Z6VlVKNEM1SHRjR1kxTmsySTY2UXluSFJtSWd6N2FVWnRicmh2VGQ5RnkycVRiZ1NFSndJS1dwc3NvcDFXdjM0Q0pUYlVxemxWakNqNGFiTzdOSkVDTzNlcUlBckNMNFZhdEF4NmpIakVRcXVMN2E3VXYxeVpNaWd4Nmw4ZTREaXZIenh6dDZPX3ItSElQQm9EVVFIMXItZEtEN0NsS0QtVzJR?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxQVUFrM2N3M2Z6VlVKNEM1SHRjR1kxTmsySTY2UXluSFJtSWd6N2FVWnRicmh2VGQ5RnkycVRiZ1NFSndJS1dwc3NvcDFXdjM0Q0pUYlVxemxWakNqNGFiTzdOSkVDTzNlcUlBckNMNFZhdEF4NmpIakVRcXVMN2E3VXYxeVpNaWd4Nmw4ZTREaXZIenh6dDZPX3ItSElQQm9EVVFIMXItZEtEN0NsS0QtVzJR%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Sun, 30 Aug 2026 12:50:43 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "베센트의 이란 위협은 미국의 중국 공격 의지에 달려 있다",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPLVViODVsMEI2MVdqaFhiVFVzaUlZa0xlQVRoc21Cc0JwMVhvUWdoT0FIZlFlMnM4OTZkZ2JNZjREckd5aGswajhBTFFjbFotTmRHazdQTmVERUtoSnV6RmYyaGEyMTBLaG1JWWFWUW5md2djNW9veTV2R05zMmdWb1lqS3FVWU1ZNmpUQmdCd0Y5Q1ZlNm5JOWJvM2g3bFZjTE9ucHg4V2pmM3duQjNpVkRSSEs?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxPLVViODVsMEI2MVdqaFhiVFVzaUlZa0xlQVRoc21Cc0JwMVhvUWdoT0FIZlFlMnM4OTZkZ2JNZjREckd5aGswajhBTFFjbFotTmRHazdQTmVERUtoSnV6RmYyaGEyMTBLaG1JWWFWUW5md2djNW9veTV2R05zMmdWb1lqS3FVWU1ZNmpUQmdCd0Y5Q1ZlNm5JOWJvM2g3bFZjTE9ucHg4V2pmM3duQjNpVkRSSEs%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent의 이란 제재로 수십 개의 중국과 홍콩 기업이 타격을 입었습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNdnpjUWs4UTdZbU5fVjFLQ2dyZlJDempDTEk2MFNNa01Na3JuT3JQejN3RXEzMl9KcWdnZVN2bWxFZVhrVzVRZ2Q0bVVjRzRYSmt1T19GZVg1bnVvS0dlWXQySWZsVUJtSmtLWUNTLTlrSm8ydXVDS0pUNVBSOE92YU5KVUR6eC1rMmpIXzRGLXQyN2ZnZUM2c1VZb2hyVDR5YkcyTEgzSzJIZG1pc3EyS09n?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNdnpjUWs4UTdZbU5fVjFLQ2dyZlJDempDTEk2MFNNa01Na3JuT3JQejN3RXEzMl9KcWdnZVN2bWxFZVhrVzVRZ2Q0bVVjRzRYSmt1T19GZVg1bnVvS0dlWXQySWZsVUJtSmtLWUNTLTlrSm8ydXVDS0pUNVBSOE92YU5KVUR6eC1rMmpIXzRGLXQyN2ZnZUM2c1VZb2hyVDR5YkcyTEgzSzJIZG1pc3EyS09n%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "베센트는 이란이 제재로 인한 경제적 압박 속에서 맹렬히 비난하고 있다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9wOWJlaDAzRW96X3A5aDRza2xCMHY4bG1HQUlBSXRQdGpMSmpxOWxQQVZMWWl4TVVxT1NYMHVmNlc2NlB4ckVaazl5UjFCdTllWXV6TFZIUzU1UUcxU2RLQlQ2cVJwSzA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiZ0FVX3lxTE9wOWJlaDAzRW96X3A5aDRza2xCMHY4bG1HQUlBSXRQdGpMSmpxOWxQQVZMWWl4TVVxT1NYMHVmNlc2NlB4ckVaazl5UjFCdTllWXV6TFZIUzU1UUcxU2RLQlQ2cVJwSzA%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "이란 전쟁 인플레이션이 과열되면서 미국 주식이 하락했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPRUVYWG9PbUEwbUxITHE3TFdtaGg3Q3lkaEl0U05DcEJENnEtOUo1SThLa200ZWRXSHJabTRiSElaTEdwcWtvbS04alVuTjRzRHR3M0htU09HUzJJQzZiTDJiTEVxTG5WTmNOQzE3WWs3dGx0N1ltdWJrUUZWb19ZUEZKaEItS1prMWF3Rk1xdGJKUWFf?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilAFBVV95cUxPRUVYWG9PbUEwbUxITHE3TFdtaGg3Q3lkaEl0U05DcEJENnEtOUo1SThLa200ZWRXSHJabTRiSElaTEdwcWtvbS04alVuTjRzRHR3M0htU09HUzJJQzZiTDJiTEVxTG5WTmNOQzE3WWs3dGx0N1ltdWJrUUZWb19ZUEZKaEItS1prMWF3Rk1xdGJKUWFf%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:07"
    },
    {
      "source": "Reuters",
      "title_ko": "중동 위험, 기술 대패로 인해 아시아 주식에서 해외 유출 급증",
      "title_en": "Foreign outflows from Asian equities surge on Middle East risks, tech rout",
      "summary_ko": "중동 위험으로 인해 아시아 주식에서 해외 자금 유출 급증 Reuters. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "이란 전쟁으로 인한 오일 쇼크 우려로 해외 자금 유출로 아시아 증시 타격",
          "original_url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuAFBVV95cUxQQ0NNSG5uNFRpYXM5SDFrSlFaM1ZhaFdGU1FTbjRmaEZiVmI2NEFEWHZTXzlBX2dtY3g2RmE5WjM1eHdITERKVDEwWTJHQmNpem1sQkZFQnBKMTlFNG15Q2I1Y1E3NEJocWszaXI2b3Rsa1g4T3VSbHp0YzM2ODBrRmpjZDZpOS1NZGIxWTlGXy13bVNGYjNVWjZ2bzVMOXo5dk9OZ3lYVEtWemlKOXhYMnZEOW5waW9R%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "인플레이션 우려로 글로벌 채권 수익률 급등",
          "original_url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPMXRsbzVpN09jS2VHaE5PSHJ1NjdVNFBSVF9naFY2M0VzWjU0akMzMjAyVmk5SExrUmt1TWVUQkNFTHBBVzJJY3EwX0Y3eG1RZm52TTlMVXVtMDdNOUs5QmNocGFYZVEwVTZtM09vMi1KdG9jT3Q3cC00aEZEQXF1YkNjbVlhckFoaFplZ0xFQ0R1WURxVTN4bm1tR191c2s0MzNUVQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipAFBVV95cUxPMXRsbzVpN09jS2VHaE5PSHJ1NjdVNFBSVF9naFY2M0VzWjU0akMzMjAyVmk5SExrUmt1TWVUQkNFTHBBVzJJY3EwX0Y3eG1RZm52TTlMVXVtMDdNOUs5QmNocGFYZVEwVTZtM09vMi1KdG9jT3Q3cC00aEZEQXF1YkNjbVlhckFoaFplZ0xFQ0R1WURxVTN4bm1tR191c2s0MzNUVQ%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "월가가 중동 긴장을 모니터링함에 따라 U.S. 미 국채/재무부수익(금리) 상승",
          "original_url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOZld3ajVXMWdnQnVibk5pTFctajNqbndkX0ZUZkVXTzRJTUlWVEVXckg1UFJ2N0g2VDlvRWtjTzZfOVhqX0VkWHBTcVNqLXdKZGxxN1IzcXg1VGpleTRJMjhqQi1hM3RHR1RGUmxyYjluaWp1TG9FSG9SMG91akpDdEJTcWtaeTJ2dFHSAY8BQVVfeXFMTWFzTWNuVXU4c0d2OXJKRERvOTQtNkxXMFlkRVYxbmNGTHhmcDg2M18xTHBYZnY1WUo1b3cwLU5kSWtTaUNzZ2pCTHpVYmxYNHh5a1BJTDhDU29JRDhDOTM2cTZaMGNLVGozMXZzMkRpRG80M1hjVzBLV05UVlhEWXQyV1E4OGtKaEN2VU5MTFk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiigFBVV95cUxOZld3ajVXMWdnQnVibk5pTFctajNqbndkX0ZUZkVXTzRJTUlWVEVXckg1UFJ2N0g2VDlvRWtjTzZfOVhqX0VkWHBTcVNqLXdKZGxxN1IzcXg1VGpleTRJMjhqQi1hM3RHR1RGUmxyYjluaWp1TG9FSG9SMG91akpDdEJTcWtaeTJ2dFHSAY8BQVVfeXFMTWFzTWNuVXU4c0d2OXJKRERvOTQtNkxXMFlkRVYxbmNGTHhmcDg2M18xTHBYZnY1WUo1b3cwLU5kSWtTaUNzZ2pCTHpVYmxYNHh5a1BJTDhDU29JRDhDOTM2cTZaMGNLVGozMXZzMkRpRG80M1hjVzBLV05UVlhEWXQyV1E4OGtKaEN2VU5MTFk%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "아시아 주식에 대한 외국인 매도는 채권수익률(금리) 상승으로 상승",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNamNqM2EwN3NZZHktOS1DLWZMZ1hUbV9ma05QYzdVem5uQ2tSY0I1VUljV2M1eVpjdWdZT2xCOEJNVzFNZ1dQZFVpLUgzRGI0ZjliUDRDdXhfMVBlTTl3bnRSa2szT1JhWG56LUk5LThTamt6d0hIeF9XTFFCNk0zdFNTSVdJLXVmamIzb0txYm5hbHpweHp5TkFrX0tXUlZkbm4xUFF0LUs?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxNamNqM2EwN3NZZHktOS1DLWZMZ1hUbV9ma05QYzdVem5uQ2tSY0I1VUljV2M1eVpjdWdZT2xCOEJNVzFNZ1dQZFVpLUgzRGI0ZjliUDRDdXhfMVBlTTl3bnRSa2szT1JhWG56LUk5LThTamt6d0hIeF9XTFFCNk0zdFNTSVdJLXVmamIzb0txYm5hbHpweHp5TkFrX0tXUlZkbm4xUFF0LUs%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:13"
    },
    {
      "source": "Investing.com",
      "title_ko": "베센트, 2년 내 호르무즈 해협 \"가치 없어질 것\" 경고",
      "title_en": "",
      "summary_ko": "베센트, 2년 내 호르무즈 해협 \"가치 없어질 것\" 경고 Investing.com 한국어. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Investing.com뿐만 아니라 bloomingbit.io, v.daum.net 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5iXzZpNjVRVlFmVzVJX1hxellNbnJ4bWJCdkFVbE1GZzd3UjBjbnlmcWhVNldXVU9ad3pfd1o2a0Z1Y0VRNTc1eFJwWmVsOUNFWWFqV2pMQWUySEFvR3EzczhUa0dTTzZDWUE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5iXzZpNjVRVlFmVzVJX1hxellNbnJ4bWJCdkFVbE1GZzd3UjBjbnlmcWhVNldXVU9ad3pfd1o2a0Z1Y0VRNTc1eFJwWmVsOUNFWWFqV2pMQWUySEFvR3EzczhUa0dTTzZDWUE?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 01 Sep 2026 14:10:00 GMT",
      "related_articles": [
        {
          "source": "bloomingbit.io",
          "title_ko": "베센트 재무 \"금주내 이란과 거래하는 은행 제재 발표\"",
          "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1SUTZ1Nkc3S0QtVVVKQzFxdjd0ZzdMOW1GR2VuZHNBaVV2SjJvWFlDcThqY25JY1RSc0sxUTFQOTNWemZhQi1Uc3Jpa2ttSWRI?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1SUTZ1Nkc3S0QtVVVKQzFxdjd0ZzdMOW1GR2VuZHNBaVV2SjJvWFlDcThqY25JY1RSc0sxUTFQOTNWemZhQi1Uc3Jpa2ttSWRI?oc=5"
        },
        {
          "source": "v.daum.net",
          "title_ko": "베센트, G20 회의서 캐나다 비판...‘이란 경제고립’ 동참 압박",
          "original_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1YUjlHSVpWTEl6blhDeV9Id21wbWJwQWotWGV6YTc5VGtfRm1FZ2MtV3hxR0hOdnpMcGNxVEpoSjJ5X0MwanN0YndvUWNGZFU?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1YUjlHSVpWTEl6blhDeV9Id21wbWJwQWotWGV6YTc5VGtfRm1FZ2MtV3hxR0hOdnpMcGNxVEpoSjJ5X0MwanN0YndvUWNGZFU?oc=5"
        },
        {
          "source": "bloomingbit.io",
          "title_ko": "베센트 美 재무장관 \"이란에 대한 압박 계속할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBlNEJFYktDVDM5d21JcVY2S0M4cEc0MzNUblJhTG5nV3lWeDh1NlNNUWxnYng0d293cTJDUG1wNkU1cnFpN2lPVTdjYVcteVNW?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBlNEJFYktDVDM5d21JcVY2S0M4cEc0MzNUblJhTG5nV3lWeDh1NlNNUWxnYng0d293cTJDUG1wNkU1cnFpN2lPVTdjYVcteVNW?oc=5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:13"
    },
    {
      "source": "Bloomberg",
      "title_ko": "베센트는 석유가 우회하기 때문에 호르무즈는 '가치 없게' 될 것이라고 말한다",
      "title_en": "Bessent Says Hormuz Will Be ‘Worthless’ as Oil Bypasses It",
      "summary_ko": "베센트 \"석유 우회로 호르무즈는 쓸모없어질 것\". 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxObVVWWjNNeENodUlKQnA4YTRSa0Nlc0ZZbHhaQ1d0MjlLcGNGSjQtUmhic0VldGZqNnJyc2ZxcXVRWExTSlN5UkZRMEo2enMxQTh3S2xYdkI3azVFalJOclYyQU5KRHF1cGU3andZb0tIZnhSYUg1RTVzUjlYYi12Q0ZaU1lLWUtUc2NsTmNGUWV1MnM2SWdCTjlHOFpmZEJpby1CYzAyc2J0Z0s0cGtPRUJB?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxObVVWWjNNeENodUlKQnA4YTRSa0Nlc0ZZbHhaQ1d0MjlLcGNGSjQtUmhic0VldGZqNnJyc2ZxcXVRWExTSlN5UkZRMEo2enMxQTh3S2xYdkI3azVFalJOclYyQU5KRHF1cGU3andZb0tIZnhSYUg1RTVzUjlYYi12Q0ZaU1lLWUtUc2NsTmNGUWV1MnM2SWdCTjlHOFpmZEJpby1CYzAyc2J0Z0s0cGtPRUJB%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 01 Sep 2026 13:52:23 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Bessent는 파이프라인이 2년 안에 Hormuz를 '무용지물'로 만들 것이라고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQVjBGRjlUTGtKYXJMOXp6TGNVYlZGUnQzcWs1dkQxTHNMOGlsTXBlZ0hjUXF5aWZWa3NJd1NTZDNESDdabTRFeWxIS0ZfVkxZRlZaUVlHTW9GYUNCTGYycFhOVkx3czduSEhjcGlENW43S1hzazhtbHFWMjZfLUFKbGljWFFBZU9Ea1NxMDhXMGt4NlNRVmh6RDlVMzZKN3BQOTVFNnFqRWV3cUJXTExyMjVHZjVsNXpSSUE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxQVjBGRjlUTGtKYXJMOXp6TGNVYlZGUnQzcWs1dkQxTHNMOGlsTXBlZ0hjUXF5aWZWa3NJd1NTZDNESDdabTRFeWxIS0ZfVkxZRlZaUVlHTW9GYUNCTGYycFhOVkx3czduSEhjcGlENW43S1hzazhtbHFWMjZfLUFKbGljWFFBZU9Ea1NxMDhXMGt4NlNRVmh6RDlVMzZKN3BQOTVFNnFqRWV3cUJXTExyMjVHZjVsNXpSSUE%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "베센트 \"미국, 이란에 본 적 없는 조치 적용할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "미 국채/재무부 베센트 장관: 우리는 이란 분쟁의 반대편에 설 것입니다.",
          "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPRFgzWWpEcHNZeHdnWDBhZVYxRlVQakFYTkVhTEtBcnJrQW5IVzlZUE1hV3Z2QkRSWm9FOWNtVllMQVc3Zlctc1QxZXRNRGVRZ1loLUZPZm9JQVoyVmlRTTZMTVhPcGRGUVhoTkNjX3lkUnY1T2x3VE4yX2E1bDlMZ2ltdXZFdUlLeVdTRFlaRHVsQ2JXcnQzd0JwRUlNWFBobU8tdk4zVWcxQmY3TzNjb1Rwei1KblJ1SjlWYQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxPRFgzWWpEcHNZeHdnWDBhZVYxRlVQakFYTkVhTEtBcnJrQW5IVzlZUE1hV3Z2QkRSWm9FOWNtVllMQVc3Zlctc1QxZXRNRGVRZ1loLUZPZm9JQVoyVmlRTTZMTVhPcGRGUVhoTkNjX3lkUnY1T2x3VE4yX2E1bDlMZ2ltdXZFdUlLeVdTRFlaRHVsQ2JXcnQzd0JwRUlNWFBobU8tdk4zVWcxQmY3TzNjb1Rwei1KblJ1SjlWYQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "베센트, G20에 '미국 성장 어젠다' 판매 신뢰성 테스트 직면",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQcjE2d1dINXZ1V2lUTmp4R0lrRWRSVjZhc2pUTC1NbXFuS3VZOFBualMtRkNZbENaN3RhS0xMTnBiTUFtbzhjNmlUVDhQQURKalZ5N01TZ19GSVBIRm5pOTdod1ZFdm1rUjdSMjFkTVBiT0ZvM3FhdzhVZHY2MWw5dzF1cWhKZXI1MmVyZjlZTU8yNDhockFCVkRMUHhMSDVieTJ5dzlMc0ZQUHlLY1ZLdllSQmdLbU0?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxQcjE2d1dINXZ1V2lUTmp4R0lrRWRSVjZhc2pUTC1NbXFuS3VZOFBualMtRkNZbENaN3RhS0xMTnBiTUFtbzhjNmlUVDhQQURKalZ5N01TZ19GSVBIRm5pOTdod1ZFdm1rUjdSMjFkTVBiT0ZvM3FhdzhVZHY2MWw5dzF1cWhKZXI1MmVyZjlZTU8yNDhockFCVkRMUHhMSDVieTJ5dzlMc0ZQUHlLY1ZLdllSQmdLbU0%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:18"
    },
    {
      "source": "Reuters",
      "title_ko": "미국 미 국채/재무부 베센트, 관세, 이란 전쟁, 채권 혼란 속에 G20 외교 시험 직면",
      "title_en": "US Treasury's Bessent faces G20 diplomacy test amid tariffs, Iran war, bond turmoil",
      "summary_ko": "미국 미 국채/재무부 베센트, 관세, 이란 전쟁, 채권 혼란 속에 G20 외교 시험 직면 로이터. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 Al Jazeera, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxORVlaS1VmZVF5Rjh3RFkwVk40ZGpBSU1LLXM3XzQ1REFxbnl0aHREWXhieU9vUnU0aUdkTWgtNmJrYk9BRDE3aEllamozWFJVMHZ5QTJUS0pkckpwbjFVQ2dxaEhBaWZWZXg3a05ISG1Fb3k4aWV0QmRSbGFiOHdsQ0x6QWZjUUN6b3lsc2c5MEZOc2RCWXZXcERhdkN4NFJGVHBGejVxbTBZWDdvczdJamxDQ3Jib29xS1lzcURfX05MQ1BET25r?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMixwFBVV95cUxORVlaS1VmZVF5Rjh3RFkwVk40ZGpBSU1LLXM3XzQ1REFxbnl0aHREWXhieU9vUnU0aUdkTWgtNmJrYk9BRDE3aEllamozWFJVMHZ5QTJUS0pkckpwbjFVQ2dxaEhBaWZWZXg3a05ISG1Fb3k4aWV0QmRSbGFiOHdsQ0x6QWZjUUN6b3lsc2c5MEZOc2RCWXZXcERhdkN4NFJGVHBGejVxbTBZWDdvczdJamxDQ3Jib29xS1lzcURfX05MQ1BET25r%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 30 Aug 2026 10:04:00 GMT",
      "related_articles": [
        {
          "source": "Al Jazeera",
          "title_ko": "미국 미국채/재무부 베센트 \"이란 경제, 수개월 내 붕괴할 수도 있다\" 경고",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQc3FlY3k0c19Yai1XcV84WWZLbmpuODFvdmV0N2R5RDZLVElsOUIydkR2S2ZLUTRPMmI4cXRYNFBlay1FTTJ3Mmd4eS1NZl8xcDJ2RDA4bmJJbEpZUVBCM1M2NlFjSm1RZUpmcVE5MmVqWG8ybWhTWkxrOXRfSS1BamVaNHpGTWpwZmc3MncwSHZGV3RmV3Z6WEJyNjEtelZXSlFyRDZ6ZGp6X2FWcWI4VHl2ZFrSAboBQVVfeXFMTks1WjFWMFJ5RVFkS0FreXVSUEprWklSOU9iMk1qakJfTHJuWV9KcEgyUVVnZDR1dnFsRGxmMkVncGxTUTEtdDludzgwQjQxXy00RUdOYWFiMUQ4YjRHUkdFZE1vS2FVZ3laZ1F4ZHVvR0luQUw3ZXc2ZmxhblRaNXN4MkZZT3piam5SLUptQ1VuNld0X0ZZY1ZkWTdJMmRWYll4UmtmWmFGdTE0TjdDMk91QndvWEREOTVR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxQc3FlY3k0c19Yai1XcV84WWZLbmpuODFvdmV0N2R5RDZLVElsOUIydkR2S2ZLUTRPMmI4cXRYNFBlay1FTTJ3Mmd4eS1NZl8xcDJ2RDA4bmJJbEpZUVBCM1M2NlFjSm1RZUpmcVE5MmVqWG8ybWhTWkxrOXRfSS1BamVaNHpGTWpwZmc3MncwSHZGV3RmV3Z6WEJyNjEtelZXSlFyRDZ6ZGp6X2FWcWI4VHl2ZFrSAboBQVVfeXFMTks1WjFWMFJ5RVFkS0FreXVSUEprWklSOU9iMk1qakJfTHJuWV9KcEgyUVVnZDR1dnFsRGxmMkVncGxTUTEtdDludzgwQjQxXy00RUdOYWFiMUQ4YjRHUkdFZE1vS2FVZ3laZ1F4ZHVvR0luQUw3ZXc2ZmxhblRaNXN4MkZZT3piam5SLUptQ1VuNld0X0ZZY1ZkWTdJMmRWYll4UmtmWmFGdTE0TjdDMk91QndvWEREOTVR%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "미국채/재무부수익(금리)은 유가 상승으로 하락하고 거래자들은 미국을 모니터링합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPdUk3WWx3blNwUHh1dVpDYVhzd0Q0ZTF4U2tBVTRQaG5DdGpxZFc5ODlybDhIUWtJQ1k5a2Y1aU1MdzA1Nl9ONmxuTElDUHpGQWphVmZzNHZCdnlycFJwNHplNTBmdmRfV09KYThDZEJUMVFZQjJjc0lBR2FBWlZSWFpWN1dONDJrNTZtX25EZDNYQnYwZUk2NURmazljTW010gGmAUFVX3lxTFBrd2cyX1BMaFFlRDd0MXNvQVJmOUJZWnFwZVVLQkpQU080UTVhVzZBNjZMVEFCaXYyZ1ZwdFZuaUNybGxBdmczR2xxQjNzb0Yzck1SNXZYcVpjOXJDVUFERmpOTjktYmdHWU11TTdoelJBXzNQWFJiVXk5MDRXMXpPWmh5Q3V2bXpBalExSWhKbGx2d0w5RXR6eFVIcDRpcVF0b2IydEE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMioAFBVV95cUxPdUk3WWx3blNwUHh1dVpDYVhzd0Q0ZTF4U2tBVTRQaG5DdGpxZFc5ODlybDhIUWtJQ1k5a2Y1aU1MdzA1Nl9ONmxuTElDUHpGQWphVmZzNHZCdnlycFJwNHplNTBmdmRfV09KYThDZEJUMVFZQjJjc0lBR2FBWlZSWFpWN1dONDJrNTZtX25EZDNYQnYwZUk2NURmazljTW010gGmAUFVX3lxTFBrd2cyX1BMaFFlRDd0MXNvQVJmOUJZWnFwZVVLQkpQU080UTVhVzZBNjZMVEFCaXYyZ1ZwdFZuaUNybGxBdmczR2xxQjNzb0Yzck1SNXZYcVpjOXJDVUFERmpOTjktYmdHWU11TTdoelJBXzNQWFJiVXk5MDRXMXpPWmh5Q3V2bXpBalExSWhKbGx2d0w5RXR6eFVIcDRpcVF0b2IydEE%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent가 개입 중에 G20 신뢰성 테스트에 직면함을 시청하세요",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNNWNCT1IxeXlfaHRzaHd4d1gtMFo0NFo1NVZkZ1pPMDF2TmlfRVZJZjlyUDhGWjAzdEpCVlI1b2NTYV9VRlJUVEpVOTJlMHJERmhOZGhHLW5ZTlJ1cXhhSTc0WjY1LW9UdXBwWE03STNuN3ZMaDkwWFJLYjNWN3Q0V24xSXVHb0pGalFXS3diZFdtcldrcUpNYnQzLURoNmNMOHRHUlhVSnRvLUND?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxNNWNCT1IxeXlfaHRzaHd4d1gtMFo0NFo1NVZkZ1pPMDF2TmlfRVZJZjlyUDhGWjAzdEpCVlI1b2NTYV9VRlJUVEpVOTJlMHJERmhOZGhHLW5ZTlJ1cXhhSTc0WjY1LW9UdXBwWE03STNuN3ZMaDkwWFJLYjNWN3Q0V24xSXVHb0pGalFXS3diZFdtcldrcUpNYnQzLURoNmNMOHRHUlhVSnRvLUND%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "미국은 시 이전 중국의 생산과잉 관세를 7.5%로 보고 있다",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOY1cySzg1bmVQS2h5QnlFSllIV3VwWWNnQzRTVURxSjlhNnlRd3lvTmtOcE83dWs4UVQ3S05sUVZiR1h1dENiWU9hWnZXeVh4SjRDbzFTX1lrUVRROTNIUTdXNGJlcFVqbGs4Q3RCRUFaWHpSNkxreTZkYnNCYWIxbEg3V19WdURwamwxaU83TllhdWQ5X0lRQ1VXd1MwUzB1WVUyTmNaU2xzbzlxZVNDTndlWEk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxOY1cySzg1bmVQS2h5QnlFSllIV3VwWWNnQzRTVURxSjlhNnlRd3lvTmtOcE83dWs4UVQ3S05sUVZiR1h1dENiWU9hWnZXeVh4SjRDbzFTX1lrUVRROTNIUTdXNGJlcFVqbGs4Q3RCRUFaWHpSNkxreTZkYnNCYWIxbEg3V19WdURwamwxaU83TllhdWQ5X0lRQ1VXd1MwUzB1WVUyTmNaU2xzbzlxZVNDTndlWEk%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:25"
    },
    {
      "source": "Reuters",
      "title_ko": "연준(Fed)의 Musalem은 CNBC에서 9월 금리콜 전망을 미리 판단하지 않을 것이라고 밝혔습니다.",
      "title_en": "Fed's Musalem says on CNBC he won't prejudge rate call view for September FOMC",
      "summary_ko": "연준(Fed)의 Musalem은 CNBC에서 9월 금리콜 전망을 미리 판단하지 않을 것이라고 밝혔습니다. 부분공개시장위원회(FOMC) Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPQmhONVBVZ3NRQnY3d2Jsc1dlUW1ia3ppZmtReTJPQWhaR1BFZWVLdkF6OFYtak5qUjhkc2ZXSk1nMjNyTEtUc2ZkUXY5VGh3OGV5NnRCZ2pIV0Z6WERGbTViMmd5WnpkcVpqakthNndVbmllMjJIQXdpODdfRWZHWTBBc0w2QXd2Nkw3Z2ZzOUEyMmZSc05KQkh0WGg2MzkyMGNHSTBLQ29wTUktWFhrSkFLaw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPQmhONVBVZ3NRQnY3d2Jsc1dlUW1ia3ppZmtReTJPQWhaR1BFZWVLdkF6OFYtak5qUjhkc2ZXSk1nMjNyTEtUc2ZkUXY5VGh3OGV5NnRCZ2pIV0Z6WERGbTViMmd5WnpkcVpqakthNndVbmllMjJIQXdpODdfRWZHWTBBc0w2QXd2Nkw3Z2ZzOUEyMmZSc05KQkh0WGg2MzkyMGNHSTBLQ29wTUktWFhrSkFLaw%3Foc%3D5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 20 Aug 2026 07:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-01 20:01:28"
    },
    {
      "source": "Bloomberg",
      "title_ko": "트럼프 거래, 달러 수요 급증으로 원화 가치 상승 위협",
      "title_en": "Trump Deal Threatens Won’s Advance as Dollar Demand to Surge",
      "summary_ko": "트럼프 거래, 달러 수요 급증으로 원화 가치 상승 위협 Bloomberg.com. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. Bloomberg에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
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
      "crawled_at": "2026-09-01 20:01:30"
    },
    {
      "source": "매일경제",
      "title_ko": "[표] 코스닥 외국인 순매수도 상위종목(31일)",
      "title_en": "",
      "summary_ko": "[표] 코스닥 외국인 순매수도 상위종목(31일) 매일경제 마켓. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 매일경제뿐만 아니라 2news.co.kr, 스트레이트뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5lNmtqVzVwQWJiZm5NNklVYUx6UjZsWTRad2dJdzljVGdkajNGbFlESF9JTFFESFdpbXFrWEt0TmNoYkNYWnhNTUd0VlY1X2d5Nmc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5lNmtqVzVwQWJiZm5NNklVYUx6UjZsWTRad2dJdzljVGdkajNGbFlESF9JTFFESFdpbXFrWEt0TmNoYkNYWnhNTUd0VlY1X2d5Nmc?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 31 Aug 2026 06:45:32 GMT",
      "related_articles": [
        {
          "source": "스트레이트뉴스",
          "title_ko": "코스피, 외국인·기관 ‘팔자’에 1%대 하락",
          "original_url": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBSYkcxZFZUNGh3SVpKQVp3a1lQWEUtTmVaT1ZkSllfS3YxalBnTnZTMkZubVkzczFGMDd6bFpKdmpxSWtPSTFXQmhSVGpJcllId094NzFjWldZM2lrcjFXeVRlUk16bzc0YnBSdTVWMnl2LUnSAXdBVV95cUxQYW1EbTlaNElKb2x3UGU4UThNa1VzaklMZnR0Q3RGbHNpUERELVh5NEVHUGF3cGxxRTBUR3ZUUFh3YTRoY2M4OXVqSkVrRmJPNEpyNDhLZlJsSEp2SmtvUjdHcmEzQVBJMzNSMzhvOXJqN3BQX3JUUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBSYkcxZFZUNGh3SVpKQVp3a1lQWEUtTmVaT1ZkSllfS3YxalBnTnZTMkZubVkzczFGMDd6bFpKdmpxSWtPSTFXQmhSVGpJcllId094NzFjWldZM2lrcjFXeVRlUk16bzc0YnBSdTVWMnl2LUnSAXdBVV95cUxQYW1EbTlaNElKb2x3UGU4UThNa1VzaklMZnR0Q3RGbHNpUERELVh5NEVHUGF3cGxxRTBUR3ZUUFh3YTRoY2M4OXVqSkVrRmJPNEpyNDhLZlJsSEp2SmtvUjdHcmEzQVBJMzNSMzhvOXJqN3BQX3JUUQ?oc=5"
        },
        {
          "source": "2news.co.kr",
          "title_ko": "코스피, 외국인 매도 속 기타법인 1조 순매수에 상승 전환 [장중시황]",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1sZFFna1AydWlRaDRzUTc2bThsclR6LW1GMTJrTHdjeHpWVU44VDY0UzZyOEhEWWsySjUwMmoxVHE4Q3RRRlVpOXNvLUFPZmx2dWVWLWstRjBvTmIxb1BMODZUNDdFd042?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1sZFFna1AydWlRaDRzUTc2bThsclR6LW1GMTJrTHdjeHpWVU44VDY0UzZyOEhEWWsySjUwMmoxVHE4Q3RRRlVpOXNvLUFPZmx2dWVWLWstRjBvTmIxb1BMODZUNDdFd042?oc=5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:30"
    },
    {
      "source": "newspim.com",
      "title_ko": "[모닝 리포트] 중동 불안에 원·달러 환율 상승 전망...1370원 안팎",
      "title_en": "",
      "summary_ko": "[모닝 리포트] 중동 불안에 원·달러 환율 상승 전망...1370원 안팎 newspim.com. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. newspim.com뿐만 아니라 뉴스1 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE41QkRKM3pFaXhVUE8tTlNPMkY1YWxBaVY5cTJtV053Wmt2bU5tVl8yVnh5M2RMc2oxaGhKeWRRdG1XWkMxQzV4MUVZWDJ3RlJBZHhMcHotOEJ3cW92?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE41QkRKM3pFaXhVUE8tTlNPMkY1YWxBaVY5cTJtV053Wmt2bU5tVl8yVnh5M2RMc2oxaGhKeWRRdG1XWkMxQzV4MUVZWDJ3RlJBZHhMcHotOEJ3cW92?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 31 Aug 2026 23:48:00 GMT",
      "related_articles": [
        {
          "source": "뉴스1",
          "title_ko": "달러·원 환율, 중동 불안·美 금리 상승에도 하락",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5oZ3M2cW4wZ1lBV2gwbnhXdEc2STlGLTRNQmtnOGpYTEMyUXBHcU5qNmFuM3FtODRPVFdtdzUzaGZSaGpZdEFfOUtmTW9ENzRndzlNUm13UnRsNzTSAWBBVV95cUxOWTNtRFh2dDZxVjRWS3V3RkxwRUJSVXctQlQxdGJmS25aNmZxUGdIUVZobGlCdHBEdmdhZEdmNmQtRjJKUHZZY2xMOEZNNWhqYmhyMXZRMXVEdnhQTHBpVEY?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5oZ3M2cW4wZ1lBV2gwbnhXdEc2STlGLTRNQmtnOGpYTEMyUXBHcU5qNmFuM3FtODRPVFdtdzUzaGZSaGpZdEFfOUtmTW9ENzRndzlNUm13UnRsNzTSAWBBVV95cUxOWTNtRFh2dDZxVjRWS3V3RkxwRUJSVXctQlQxdGJmS25aNmZxUGdIUVZobGlCdHBEdmdhZEdmNmQtRjJKUHZZY2xMOEZNNWhqYmhyMXZRMXVEdnhQTHBpVEY?oc=5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:30"
    },
    {
      "source": "뉴데일리",
      "title_ko": "1500원 뚫었던 원·달러 환율, 1300원대 진입 … '원화 강세' 어디까지",
      "title_en": "",
      "summary_ko": "1500원 뚫었던 원·달러 환율, 1300원대 진입 … '원화 강세' 어디까지 뉴데일리. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 뉴데일리뿐만 아니라 산경투데이, 한국경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBRU0NkZTlUT2xTcUcwVW1aYzNzQllZdHBvUDVkc0h3VTg5elNYUHV1bFhLMkZHMXV4T2IzdWxMNHBxc3Y3aEdsT1Q2cHhkMWp2MEpSdFV5OEZIWU5PdTQyR1gxZlpKX3NmQW4yRC1OVHJYMzczVFBKdjJjZ9IBgAFBVV95cUxNMEZiQUo0bW9NTzljczFRcVlCXzZZX1BzS2owNUhveG9vZWtfbHhhUkFhZXFwREdhc0tac3VyN1lIR0xfNWp6M1FEUS1WY1dYYmNPZkxGRXNGYm94bFlpdDdtSU5tTmJyLVhPVFNjaVJUajh5OURXNmE0eHNaYkNScg?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBRU0NkZTlUT2xTcUcwVW1aYzNzQllZdHBvUDVkc0h3VTg5elNYUHV1bFhLMkZHMXV4T2IzdWxMNHBxc3Y3aEdsT1Q2cHhkMWp2MEpSdFV5OEZIWU5PdTQyR1gxZlpKX3NmQW4yRC1OVHJYMzczVFBKdjJjZ9IBgAFBVV95cUxNMEZiQUo0bW9NTzljczFRcVlCXzZZX1BzS2owNUhveG9vZWtfbHhhUkFhZXFwREdhc0tac3VyN1lIR0xfNWp6M1FEUS1WY1dYYmNPZkxGRXNGYm94bFlpdDdtSU5tTmJyLVhPVFNjaVJUajh5OURXNmE0eHNaYkNScg?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 30 Aug 2026 00:39:25 GMT",
      "related_articles": [
        {
          "source": "산경투데이",
          "title_ko": "원화 두 달 새 10% 강세…외국인 수급·엔화 반등에 환율 흐름 바뀌나",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBkTENVa1NHTnd0U1BDTF9SdEN4V3BNQjhYUmQwR2RNTVJDZzZidld0Sm9xdmU1X1ZBNVFRZFRlcFRZQTd5UHZRUjY4Z0NJcGpiRGx3Z0R0WGdWNFNPRS1YUHpXcWh6R2R6YktKSEJMNmvSAXRBVV95cUxNTGtIUWhXQ2M5NHhrRnNPV3paRXpQTkxYSGgxcjJHNks4bW5lY1J6UVBOeEVMbzdaUTRNRmhMNVFVZ2EtclExZ2Rubm1fOVl0N3J1RklSVW02a3ZvbDhuYld5QUtwQ1A0WER4VWJ3bmFVNkZJMg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBkTENVa1NHTnd0U1BDTF9SdEN4V3BNQjhYUmQwR2RNTVJDZzZidld0Sm9xdmU1X1ZBNVFRZFRlcFRZQTd5UHZRUjY4Z0NJcGpiRGx3Z0R0WGdWNFNPRS1YUHpXcWh6R2R6YktKSEJMNmvSAXRBVV95cUxNTGtIUWhXQ2M5NHhrRnNPV3paRXpQTkxYSGgxcjJHNks4bW5lY1J6UVBOeEVMbzdaUTRNRmhMNVFVZ2EtclExZ2Rubm1fOVl0N3J1RklSVW02a3ZvbDhuYld5QUtwQ1A0WER4VWJ3bmFVNkZJMg?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "원·달러 환율 13개월 만에 1360원대…하락세 더 이어지나",
          "original_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBHb085VTJTa1kxNzY2ZjJlWWtlSk1BMWZBcldDSkhsYVdMdEtmdGNHQzE3MExvdWFjV1NBRGFNUWlLQUdHVWlpbDYzbUFOWmFpN1cwNFVSYjFES1RIbDhaOWZMcURNR2N5SXFBQkJPOHJFa3hS?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBHb085VTJTa1kxNzY2ZjJlWWtlSk1BMWZBcldDSkhsYVdMdEtmdGNHQzE3MExvdWFjV1NBRGFNUWlLQUdHVWlpbDYzbUFOWmFpN1cwNFVSYjFES1RIbDhaOWZMcURNR2N5SXFBQkJPOHJFa3hS?oc=5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:31"
    },
    {
      "source": "YTN",
      "title_ko": "기준금리 인상에 주담대 오르나...이자 부담도 커져",
      "title_en": "",
      "summary_ko": "기준금리 인상에 주담대 오르나...이자 부담도 커져 YTN. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. YTN뿐만 아니라 연합뉴스, 경북매일 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5nYWE3TU04RkZRczZBSVNfMEh1Sk55b2FTTmV5UGFwRWhTTGVQRXpDLWp0Uy13dFBCak1LZHhISzZxbThIMG0xNlFqTTl2RW5VX1hYY0hlYVRRal9kVkE?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5nYWE3TU04RkZRczZBSVNfMEh1Sk55b2FTTmV5UGFwRWhTTGVQRXpDLWp0Uy13dFBCak1LZHhISzZxbThIMG0xNlFqTTl2RW5VX1hYY0hlYVRRal9kVkE?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sat, 29 Aug 2026 13:20:00 GMT",
      "related_articles": [
        {
          "source": "연합뉴스",
          "title_ko": "美 기준금리 인상 가능성에 국고채 금리↑…상승폭은 줄어(종합)",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1aRk9oR1BWMS0weEZ3Q2x2SHA4Ymp0dzhYMTZYekQtWUhKT3o2QmZtTTNFQWgtelo3d2FUSFMwa3NQVXVhRFNERFJsNlV1dHlwOUo2VFJWQ3ZMU00?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1aRk9oR1BWMS0weEZ3Q2x2SHA4Ymp0dzhYMTZYekQtWUhKT3o2QmZtTTNFQWgtelo3d2FUSFMwa3NQVXVhRFNERFJsNlV1dHlwOUo2VFJWQ3ZMU00?oc=5"
        },
        {
          "source": "경북매일",
          "title_ko": "대구상의 “지역기업 86%, 기준금리 인상에 경영 부담”",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBFQjZQSDZ3QzNadHNLZmNFN21tZ1lsOVo3eTFoWUNaRFlVZWdJc2lXX2JzSFNLWEVTTFJJMnd2ZUo4YUUwNG1PcGJHS3V2aVJVZjNBbGZ3OENVdw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBFQjZQSDZ3QzNadHNLZmNFN21tZ1lsOVo3eTFoWUNaRFlVZWdJc2lXX2JzSFNLWEVTTFJJMnd2ZUo4YUUwNG1PcGJHS3V2aVJVZjNBbGZ3OENVdw?oc=5"
        },
        {
          "source": "한겨레",
          "title_ko": "한은 기준금리 인상, 금통위원 7명 중 6명 찬성",
          "original_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9maE5ZZ1drNjRfYzhXUUZfZmRPTkRTR1NvV0VqRWVvY1A2WE9sUWJCa3NFcl9aTEpBQ0NYVW5pSzFuajNmTlBGeGc1dGYwdnBfcXhOUUF5ODNrMHFRajhBLWVuMXlITWdRaDNkZWhNbGtpQQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9maE5ZZ1drNjRfYzhXUUZfZmRPTkRTR1NvV0VqRWVvY1A2WE9sUWJCa3NFcl9aTEpBQ0NYVW5pSzFuajNmTlBGeGc1dGYwdnBfcXhOUUF5ODNrMHFRajhBLWVuMXlITWdRaDNkZWhNbGtpQQ?oc=5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:31"
    },
    {
      "source": "경상매일신문",
      "title_ko": "기준금리 인상이 기업에 미치는 영향·대응방안 조사",
      "title_en": "",
      "summary_ko": "기준금리 인상이 기업에 미치는 영향·대응방안 조사 경상매일신문. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 경상매일신문에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1yTlg4VjZDMk5jdFhDMWlia0tISWQzd2tQaWVaZGEtWHJ3amVDZzhDRHI2MWJRNU1reVB6S2U1TlBRQzRyMEg5ejZvTFVqWGpWXzRkbEZGZGVycVROcTQ4?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1yTlg4VjZDMk5jdFhDMWlia0tISWQzd2tQaWVaZGEtWHJ3amVDZzhDRHI2MWJRNU1reVB6S2U1TlBRQzRyMEg5ejZvTFVqWGpWXzRkbEZGZGVycVROcTQ4?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 31 Aug 2026 08:39:59 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-01 20:01:31"
    },
    {
      "source": "Investing.com",
      "title_ko": "기준금리 3% 시대 경고등 켜진 ‘빚투’···금리인상에 이자부담 높아진다 By 투데이코리아",
      "title_en": "",
      "summary_ko": "기준금리 3% 시대 경고등 켜진 ‘빚투’···금리인상에 이자부담 높아진다 By 투데이코리아 Investing.com 한국어. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Investing.com에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1CX09DbkVYeUk5Q1BENXlGNHIzc18wM0J5SXdNQUhQcjZFcUN1R0JQTXdya3J2NV8xQVFzRU1pQ2hQMXg2T0JpR0FuNHA2M0szQ3phUzBlR3p6aDJObnBYT3dmZzlscXlGU1E?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1CX09DbkVYeUk5Q1BENXlGNHIzc18wM0J5SXdNQUhQcjZFcUN1R0JQTXdya3J2NV8xQVFzRU1pQ2hQMXg2T0JpR0FuNHA2M0szQ3phUzBlR3p6aDJObnBYT3dmZzlscXlGU1E?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 31 Aug 2026 06:20:35 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-01 20:01:31"
    },
    {
      "source": "kbsm.net",
      "title_ko": "대구기업 85.9%, 기준금리 인상으로 경영에 부정적",
      "title_en": "",
      "summary_ko": "대구기업 85.9%, 기준금리 인상으로 경영에 부정적 kbsm.net. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. kbsm.net뿐만 아니라 연합뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5aa2d4UzcxdTdWLW1Za2FPcGMxLTRiUjQtbU5jLU5RWlJRci1WSGd0aGZrQUFvWUQ5dW1nc09RSUd0LXJTNUxXUmZYNkx1djBaZUlpRERFR2w?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5aa2d4UzcxdTdWLW1Za2FPcGMxLTRiUjQtbU5jLU5RWlJRci1WSGd0aGZrQUFvWUQ5dW1nc09RSUd0LXJTNUxXUmZYNkx1djBaZUlpRERFR2w?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 31 Aug 2026 03:39:00 GMT",
      "related_articles": [
        {
          "source": "연합뉴스",
          "title_ko": "[속보] 금통위원 6명 ’기준금리 인상’ 찬성…1명 동결 의견",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5LRWxyZ3ROMVVFdXJUZnIwbkxtTFd3RzNQYkg4djNnYzBzd0FCMVozdk15bUVKc1doWXJDU3piZ0o3SDRXdkMxTE9rWGIzQ1BsMFdfZjBZSjFVdjc4andsSlh2QmcyaW8?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5LRWxyZ3ROMVVFdXJUZnIwbkxtTFd3RzNQYkg4djNnYzBzd0FCMVozdk15bUVKc1doWXJDU3piZ0o3SDRXdkMxTE9rWGIzQ1BsMFdfZjBZSjFVdjc4andsSlh2QmcyaW8?oc=5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:31"
    },
    {
      "source": "meconomynews.com",
      "title_ko": "코람코신탁 \"이리츠코크렙, 기준금리 인상했지만 연 7% 배당 유지\"",
      "title_en": "",
      "summary_ko": "코람코신탁 \"이리츠코크렙, 기준금리 인상했지만 연 7% 배당 유지\" meconomynews.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. meconomynews.com에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE80N3RoNllKM3U2ZDdnSkh1WWEyaExwZzF5YWQ1a2ZqXzBENzMtbHE3VWpuaC1SaWVaTTZKZkJsSVo5SlBRYkI5dHJLa3ltOXhncFZsd19rb2tMenlXNmhVNzhPWllhbHk5eUhlc3RBQXM?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE80N3RoNllKM3U2ZDdnSkh1WWEyaExwZzF5YWQ1a2ZqXzBENzMtbHE3VWpuaC1SaWVaTTZKZkJsSVo5SlBRYkI5dHJLa3ltOXhncFZsd19rb2tMenlXNmhVNzhPWllhbHk5eUhlc3RBQXM?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 01 Sep 2026 06:31:06 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-01 20:01:31"
    },
    {
      "source": "Bloomberg",
      "title_ko": "엔비디아, 역대 두 번째로 큰 주가 급등으로 4,420억 달러 추가",
      "title_en": "Nvidia Adds $442 Billion in Second Biggest Ever Stock Surge",
      "summary_ko": "엔비디아, 사상 두 번째로 큰 주가 급등으로 4,420억 달러 추가 Bloomberg.com. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNS1NENk9rRTlfX3NnOGZGNWgwV2E0Y3pQRlVtZmI0MUk5bXJWSGtlcWdRQXVzaDlpa1p0WlFsNFlVTVM0a01FdGFUVlNSR3RrUm1kdVRRYU83cGNIczJUb3ZpMUo5WmE0d0Z5MFpZSlJ4aWlpbmhXMUtYZVJrMDNUd3BWOEVMckVoNGs2NzJDbGlRWlJfd1RzcWdfaTlBa3FhdXVTZG9qRXpqU0lsV1E?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNS1NENk9rRTlfX3NnOGZGNWgwV2E0Y3pQRlVtZmI0MUk5bXJWSGtlcWdRQXVzaDlpa1p0WlFsNFlVTVM0a01FdGFUVlNSR3RrUm1kdVRRYU83cGNIczJUb3ZpMUo5WmE0d0Z5MFpZSlJ4aWlpbmhXMUtYZVJrMDNUd3BWOEVMckVoNGs2NzJDbGlRWlJfd1RzcWdfaTlBa3FhdXVTZG9qRXpqU0lsV1E%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Thu, 27 Aug 2026 20:28:30 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "엔비디아, 칩 제조사 MediaTek에 35억 달러 투자, 파트너십 확대",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQNGg1el9MUWRYTnBSbW42NnllVGxRSmwxLUloa1ppa01jamtTRXhiMEo0cUd0dk5iMDVPZEpMdDFBbGMtd2FzSVJFRjRIM3BSVVU1RFhEaTB1TDhHQzVNb2VnLTZWXzhQMmthTG5VRzk1STBaRVlsNENZOHNnWTJ4TURjR2hPUDNlS1VtSDd4NlB0UUxBLXprTnRJM25XOXNLVWt4amprQ3YyeWM?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxQNGg1el9MUWRYTnBSbW42NnllVGxRSmwxLUloa1ppa01jamtTRXhiMEo0cUd0dk5iMDVPZEpMdDFBbGMtd2FzSVJFRjRIM3BSVVU1RFhEaTB1TDhHQzVNb2VnLTZWXzhQMmthTG5VRzk1STBaRVlsNENZOHNnWTJ4TURjR2hPUDNlS1VtSDd4NlB0UUxBLXprTnRJM25XOXNLVWt4amprQ3YyeWM%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Blue Owl, Nvidia의 칩 구매를 위해 24억 달러 규모의 Iren 부채 거래 주도",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQT245VEpzNmp3RWgtdXdRanozUFBGdDZsWTJ5amgtZVFtYURoR2FVVUplblhXc0tWYlRscDZYNEZwQ1cyQmJyOWNWeHdpT29xdHczcGVJRjF5YWZEdTRuSU5YMGJPeWZxZTUwMXFLYU5JVzlwMnVPbHFRbk9veTM4MWZwcmlOQkpRc21fR3k0NFpZcXhhUTdMUnpTN25Dc0dRa3Z3czh0TFdxZHBGVDFldzJnSmk?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxQT245VEpzNmp3RWgtdXdRanozUFBGdDZsWTJ5amgtZVFtYURoR2FVVUplblhXc0tWYlRscDZYNEZwQ1cyQmJyOWNWeHdpT29xdHczcGVJRjF5YWZEdTRuSU5YMGJPeWZxZTUwMXFLYU5JVzlwMnVPbHFRbk9veTM4MWZwcmlOQkpRc21fR3k0NFpZcXhhUTdMUnpTN25Dc0dRa3Z3czh0TFdxZHBGVDFldzJnSmk%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia, 최신 AI 추진을 위해 대만 MediaTek에 35억 달러 투자",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxORWg0ODJXdU5BQTVyaVFNNVlFUm1QQkswdHBzczFfeEU5TDdQSlZQbUdkMDV4dU1BRlQzOWNrT09xb0NhZEFjdTFMR1VTU1g3WFlKUHgyVU1qQWxPeWdrTVEwcU1kRVVteko1cWZzN1VHSFdMYWhCaldjZlhTQmZ0ZUdKYmlveEpGUnBOYk5JS2ctSkFTUHJJWnVCTTU5UENwM3Z2R3Jn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxORWg0ODJXdU5BQTVyaVFNNVlFUm1QQkswdHBzczFfeEU5TDdQSlZQbUdkMDV4dU1BRlQzOWNrT09xb0NhZEFjdTFMR1VTU1g3WFlKUHgyVU1qQWxPeWdrTVEwcU1kRVVteko1cWZzN1VHSFdMYWhCaldjZlhTQmZ0ZUdKYmlveEpGUnBOYk5JS2ctSkFTUHJJWnVCTTU5UENwM3Z2R3Jn%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia가 칩 제조업체 MediaTek에 35억 달러를 투자하는 모습을 시청하세요",
          "original_url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQYU9vNzNQd2FXUFBES2VUbm9wQV8zc1JQRTRHQkQycXR2dzVCR3JsWVctNnhINVhQSzJEUGZpWjJsX2pnQWo1bEFvQThwWnFjeVNsZUpIOFlqd3RybFVMMlpocXBEOHkzVEtBbmhlTmhYNTBhNGNRamRCZUhhYlF0Q3M5RVVUVHJRX1NyRWJUZy0xUTh4LUFMSEhlckdXR3hBVXVYYW8ybDI?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqAFBVV95cUxQYU9vNzNQd2FXUFBES2VUbm9wQV8zc1JQRTRHQkQycXR2dzVCR3JsWVctNnhINVhQSzJEUGZpWjJsX2pnQWo1bEFvQThwWnFjeVNsZUpIOFlqd3RybFVMMlpocXBEOHkzVEtBbmhlTmhYNTBhNGNRamRCZUhhYlF0Q3M5RVVUVHJRX1NyRWJUZy0xUTh4LUFMSEhlckdXR3hBVXVYYW8ybDI%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:36"
    },
    {
      "source": "Bloomberg",
      "title_ko": "AI 지출 모멘텀의 새로운 신호로 TSMC 매출 36% 급증",
      "title_en": "TSMC Sales Surge 36% in Fresh Sign of AI Spending Momentum",
      "summary_ko": "AI 지출 모멘텀의 새로운 신호로 TSMC 매출 36% 급증 Bloomberg.com. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOQUFMWnQ1VUVhNVhROTlOVDgwNnA2VVgtaElBd1paY0lCT3dybEI0ay1yTmRiNVhFTGFmSGtZOXlacDVjaFg5c1ZKQThUeXgwYmFidjBUOUZFYU9EeXo4dlMtWW1HQ2lQLW84QjRmRlJQZzZuMU5wSDFKU1FJX0VKdWFZYkJxdHJqSkNqX2hFdFYtbnZGcEdNdWZvM3l0STRSQVZBSnUwV3BzN1BJ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxOQUFMWnQ1VUVhNVhROTlOVDgwNnA2VVgtaElBd1paY0lCT3dybEI0ay1yTmRiNVhFTGFmSGtZOXlacDVjaFg5c1ZKQThUeXgwYmFidjBUOUZFYU9EeXo4dlMtWW1HQ2lQLW84QjRmRlJQZzZuMU5wSDFKU1FJX0VKdWFZYkJxdHJqSkNqX2hFdFYtbnZGcEdNdWZvM3l0STRSQVZBSnUwV3BzN1BJ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Mon, 13 Jul 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Nvidia는 내년에 70%의 매출 성장을 예측하며 AI 지출 붐이 앞으로 몇 년 남았다는 신호입니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNVTdJRXVOXzFrQjZXaG1XeVpHNUg0UzBHMnZ0b3lUT1hCZktWajJhbkJfSmcweHEyVE9sNVdrOGx2MlFhUlZ2Z0xna3Jzd0gzWUJCdHR2MHN3Y0pqYURLQ0JQUmxfYVJpT3h3TEV4amE3TkR5SnlIa3A1NlRvcE16Y3NZbnNzQUVuRFlfS2lvUE81ajBta2hYaEp5Wk94c014b3lkQmg5S3N6WlMyWWc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNVTdJRXVOXzFrQjZXaG1XeVpHNUg0UzBHMnZ0b3lUT1hCZktWajJhbkJfSmcweHEyVE9sNVdrOGx2MlFhUlZ2Z0xna3Jzd0gzWUJCdHR2MHN3Y0pqYURLQ0JQUmxfYVJpT3h3TEV4amE3TkR5SnlIa3A1NlRvcE16Y3NZbnNzQUVuRFlfS2lvUE81ajBta2hYaEp5Wk94c014b3lkQmg5S3N6WlMyWWc%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "AI 하드웨어에 대한 수요가 계속 강해지면서 TSMC 매출 45% 증가",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPYVNOYWwxVXNFbmZiMW51OV82OTM2TkVTeE5jSF80TF8wQm9MQ2RkOU5OdGJtU1pyZXZKUUhFdEs3MU9oNktjRXZaQlJwM3BxOGgxakFoQ25wel9GYnFtZUxYUXJrdUkxR2Zjazh3NDFpMmdSRmQwZUlaSDRzQ1o1VjlxUlgwSWpvZ0wycHQ5T1NMbEgxbnVyR1E2MzNVR0lXdU85ZVJRdmstY2Z4c3VKSC1n?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxPYVNOYWwxVXNFbmZiMW51OV82OTM2TkVTeE5jSF80TF8wQm9MQ2RkOU5OdGJtU1pyZXZKUUhFdEs3MU9oNktjRXZaQlJwM3BxOGgxakFoQ25wel9GYnFtZUxYUXJrdUkxR2Zjazh3NDFpMmdSRmQwZUlaSDRzQ1o1VjlxUlgwSWpvZ0wycHQ5T1NMbEgxbnVyR1E2MzNVR0lXdU85ZVJRdmstY2Z4c3VKSC1n%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Nvidia는 고객에게 새로운 Rubin 디자인을 제공하는 과정을 홍보합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPNk9DR20yVlp0dThjRlo3SE1qc3FtTXpYODBRY2ZGRHlCUHBvY1ZpM2lCYkpyNmRfdFdXZzJ6ZmxSdXlnSlFDSGZiZkJSQ1FHX3F3UUtTV1RxT0hyWlkyNExqY250LVZkWXNGaEljWE9sbU9aekRQeGxwaUk2MEgzWEt4VkJKTFZZTE56MWlxWlRzRHNmaFpGcnBSbXZjcDF3QmlydHdVR3RTRUxaSHhF?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirwFBVV95cUxPNk9DR20yVlp0dThjRlo3SE1qc3FtTXpYODBRY2ZGRHlCUHBvY1ZpM2lCYkpyNmRfdFdXZzJ6ZmxSdXlnSlFDSGZiZkJSQ1FHX3F3UUtTV1RxT0hyWlkyNExqY250LVZkWXNGaEljWE9sbU9aekRQeGxwaUk2MEgzWEt4VkJKTFZZTE56MWlxWlRzRHNmaFpGcnBSbXZjcDF3QmlydHdVR3RTRUxaSHhF%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "TSMC, 매출 증대·AI '메가트렌드' 잡기 위해 투자 전망",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQeXFMd1QtVVYwTDVYNUFCTkppRGZ0OEFzbElVS2VpemNrN3VGTVhFMHROaFBVek5WUzRYYm1mYThXdG1QZ1F4SVZ4cklvbUV4MmttdWNMTDRxTEZWdHI4VDk0UEpKdEpycFQxMVpZT1labl84ZWdfNmVsVjh5aUszZEFUZHYzdjkwNXNqc19haDFaM1RYSHJVNXdQVExvN0tUY0JoNklHTGFQblhland2clpKZkNFdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxQeXFMd1QtVVYwTDVYNUFCTkppRGZ0OEFzbElVS2VpemNrN3VGTVhFMHROaFBVek5WUzRYYm1mYThXdG1QZ1F4SVZ4cklvbUV4MmttdWNMTDRxTEZWdHI4VDk0UEpKdEpycFQxMVpZT1labl84ZWdfNmVsVjh5aUszZEFUZHYzdjkwNXNqc19haDFaM1RYSHJVNXdQVExvN0tUY0JoNklHTGFQblhland2clpKZkNFdw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:43"
    },
    {
      "source": "KBS 뉴스",
      "title_ko": "충북 영동군 변압기 화재로 4개 리 정전…“긴급 복구 중”",
      "title_en": "",
      "summary_ko": "충북 영동군 변압기 화재로 4개 리 정전…“긴급 복구 중” KBS 뉴스. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. KBS 뉴스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE4zOUVoZEtUT09FNlZDTkw1b2xhdmlsVHprRkNxVXlvdFRNbENKUEk0MnFqb0pGQkhUdFdEZEdhcklXbWZRS2xPajZTSW5NaGZmT0lEVTBXOEhDY1E?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE4zOUVoZEtUT09FNlZDTkw1b2xhdmlsVHprRkNxVXlvdFRNbENKUEk0MnFqb0pGQkhUdFdEZEdhcklXbWZRS2xPajZTSW5NaGZmT0lEVTBXOEhDY1E?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 01 Sep 2026 13:09:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-01 20:01:43"
    },
    {
      "source": "Reuters",
      "title_ko": "미국, 호르무즈 해협 주변 이란에 새로운 공습 개시",
      "title_en": "US launches new barrage of strikes on Iran around Strait of Hormuz",
      "summary_ko": "미국, 호르무즈 해협 주변 이란에 새로운 공습 개시 관련 핵심 동향이 발표되었습니다. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 The Jerusalem Post, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOYWVYQlZISm1jT2ZUaUZ4bDJ2ZE10ZEpaeXo5MnBPQTJYS0ZJNDFjNmdBNGlPQjdyRTIxMVJWeDYzTlFEZi1wVm55eUJTUjkxSjB2WnVVU3NLaEtjTWlMTFFXZlZuTDYyNzREc3hxWnpxRzdUV2MtRUdhei12TE9TQ0Rrc1hTMEN4alFnS1VFcVRzSEM1dmVxR2FYbzZXb1B2a254Y2FlVXlNMFBhQVlFRTAyNzdoaE1FN2Q5dFF0LS1PZDR3bm1PS2JR?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiygFBVV95cUxOYWVYQlZISm1jT2ZUaUZ4bDJ2ZE10ZEpaeXo5MnBPQTJYS0ZJNDFjNmdBNGlPQjdyRTIxMVJWeDYzTlFEZi1wVm55eUJTUjkxSjB2WnVVU3NLaEtjTWlMTFFXZlZuTDYyNzREc3hxWnpxRzdUV2MtRUdhei12TE9TQ0Rrc1hTMEN4alFnS1VFcVRzSEM1dmVxR2FYbzZXb1B2a254Y2FlVXlNMFBhQVlFRTAyNzdoaE1FN2Q5dFF0LS1PZDR3bm1PS2JR%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 01 Sep 2026 18:11:05 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "DeepSeek, V4 Flash보다 최대 14배 높은 가격으로 V4 Pro 출시",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNVzBOcmxUZXZzV20xU1pZMnI1X0JKRzV1SUJwcGhzaE1JZDZfUTZqVDZMVXNhUHFoY295SHZuLWZZbTlXa1AtUmI2dkRhRWliRXFBYzdZQlROdUVzZ2dNc2pHLUhvdTFBSVpSTW9SaHBQUnJubTdMX2FQUkhHTDhiUGtiZDUxLTRQXzRrZERqSzlOSXZpMWYxUzVWeXFCdW1HZEVWbWMtVDhFU1BCSkE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNVzBOcmxUZXZzV20xU1pZMnI1X0JKRzV1SUJwcGhzaE1JZDZfUTZqVDZMVXNhUHFoY295SHZuLWZZbTlXa1AtUmI2dkRhRWliRXFBYzdZQlROdUVzZ2dNc2pHLUhvdTFBSVpSTW9SaHBQUnJubTdMX2FQUkhHTDhiUGtiZDUxLTRQXzRrZERqSzlOSXZpMWYxUzVWeXFCdW1HZEVWbWMtVDhFU1BCSkE%3Foc%3D5"
        },
        {
          "source": "The Jerusalem Post",
          "title_ko": "미국, AI 칩에 대한 접근 확대로 이란 전쟁에서 UAE의 군사 지원에 보답",
          "original_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1iNFhidFdIdExQTnhkeWY3QUltN0ZzOEwzSTBIY3BvZ281SXpFOXQ5N01Ob0dTeUlZWXhwS0psVUxSSUhrM0VsX2ptSE9QVmRMRUZybG9GT2kybnVQdFpB?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiX0FVX3lxTE1iNFhidFdIdExQTnhkeWY3QUltN0ZzOEwzSTBIY3BvZ281SXpFOXQ5N01Ob0dTeUlZWXhwS0psVUxSSUhrM0VsX2ptSE9QVmRMRUZybG9GT2kybnVQdFpB%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:46"
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
      "pub_date": "Sun, 30 Aug 2026 23:52:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "석유로 인한 달러 상승, 수익(회) 증가로 인플레이션 우려 부활",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQUzR4b3dnajg5QUJSRUN0VHJXQkhXQWpUX2lLVU91dWgtZWJSNGNKcXRLSUpramxQeER0NHliVWZ2LU9xSjJYV25IRGpUMWlDODcxc2g4d0d1S3ZkSFhMLUxEdWlEV1NwNDZmaUhENDZVT1RpUFlQci1UUGlvWlVlX0xObzRJdlFFT09GMWtXQmNGN0xKM0xWUTd1TDBwQzdQaHRyTTJvRnM5TmpMQ0tSZVR3?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxQUzR4b3dnajg5QUJSRUN0VHJXQkhXQWpUX2lLVU91dWgtZWJSNGNKcXRLSUpramxQeER0NHliVWZ2LU9xSjJYV25IRGpUMWlDODcxc2g4d0d1S3ZkSFhMLUxEdWlEV1NwNDZmaUhENDZVT1RpUFlQci1UUGlvWlVlX0xObzRJdlFFT09GMWtXQmNGN0xKM0xWUTd1TDBwQzdQaHRyTTJvRnM5TmpMQ0tSZVR3%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "Bessent는 미국 부채 시장의 긴장에 대한 두려움을 억제합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQdmNsa1QyN3lTZU1IX1hDN0VjWHI3M2pQbW1IU3N5ZHJMQTBna3hkNUtYWFRNa2NBaVRTRlM3eVVxOVFHMHhLaUJBX0tqWi1WY0lTbkwyVGFfMTNNWTdVTk5CQVRUUl9pcG1HQXR0MDhnQTlFRGJtaU5xZFRBME5zVU1ZdGxCV0NDVDBpOVdCSVpmbHk3OHh2azFvXzlsR0E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxQdmNsa1QyN3lTZU1IX1hDN0VjWHI3M2pQbW1IU3N5ZHJMQTBna3hkNUtYWFRNa2NBaVRTRlM3eVVxOVFHMHhLaUJBX0tqWi1WY0lTbkwyVGFfMTNNWTdVTk5CQVRUUl9pcG1HQXR0MDhnQTlFRGJtaU5xZFRBME5zVU1ZdGxCV0NDVDBpOVdCSVpmbHk3OHh2azFvXzlsR0E%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-01 20:01:51"
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
