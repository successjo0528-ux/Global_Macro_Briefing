window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-09-03 05:01:51",
    "date_str": "2026년 09월 03일 (목)",
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
      "previous_close": 3.705,
      "change": 0.067,
      "change_percent": 1.81,
      "display_price": "3.772%",
      "status": "up",
      "history": [
        3.705,
        3.69,
        3.678,
        3.732,
        3.772,
        3.772
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-09-02 20:00:35"
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
      "previous_close": 4.639,
      "change": 0.157,
      "change_percent": 3.38,
      "display_price": "4.796%",
      "status": "up",
      "history": [
        4.639,
        4.664,
        4.672,
        4.758,
        4.796,
        4.796
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-09-02 20:00:35",
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
      "price": 5.267,
      "previous_close": 5.174,
      "change": 0.093,
      "change_percent": 1.8,
      "display_price": "5.267%",
      "status": "up",
      "history": [
        5.174,
        5.186,
        5.191,
        5.249,
        5.268,
        5.267
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-09-02 20:00:35"
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
      "price": 99.594,
      "previous_close": 99.17,
      "change": 0.424,
      "change_percent": 0.43,
      "display_price": "99.59 pt",
      "status": "up",
      "history": [
        99.17,
        99.16,
        99.43,
        99.67,
        99.594
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-09-02 20:00:35"
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
      "price": 158.779,
      "previous_close": 159.139,
      "change": -0.36,
      "change_percent": -0.23,
      "display_price": "158.78엔",
      "status": "down",
      "history": [
        159.223,
        159.255,
        159.321,
        160.122,
        159.747,
        160.196,
        158.779
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-09-02 20:00:35"
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
      "price": 4435.0,
      "previous_close": 4598.2,
      "change": -163.2,
      "change_percent": -3.55,
      "display_price": "$4,435.00",
      "status": "down",
      "history": [
        4598.2,
        4609.7,
        4478.1,
        4431.1,
        4348.0,
        4435.0
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-09-02 20:00:35"
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
      "price": 90.88,
      "previous_close": 82.23,
      "change": 8.65,
      "change_percent": 10.52,
      "display_price": "$90.88",
      "status": "up",
      "history": [
        82.23,
        83.53,
        83.4,
        85.76,
        90.22,
        90.88
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-09-02 20:00:36"
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
      "price": 77303.62,
      "previous_close": 80257.54,
      "change": -2953.92,
      "change_percent": -3.68,
      "display_price": "$77,304",
      "status": "down",
      "history": [
        80257.539,
        77830.289,
        78245.812,
        77667.57,
        78548.633,
        77403.625,
        77303.617
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-09-02 20:00:36"
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
      "price": 1023.6,
      "previous_close": 319.7,
      "change": 703.9,
      "change_percent": 220.18,
      "display_price": "$1,023.6B (약 10,236억$)",
      "status": "up",
      "history": [
        218.2,
        270.4,
        971.3,
        942.8,
        400.5,
        319.7,
        1023.6
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-09-02 20:00:36"
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
      "price": 7666.68,
      "previous_close": 7652.86,
      "change": 13.82,
      "change_percent": 0.18,
      "display_price": "7,666.68",
      "status": "up",
      "history": [
        7677.28,
        7675.7,
        7730.99,
        7711.76,
        7686.14,
        7631.47,
        7666.68
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-09-02 20:00:37"
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
      "price": 29143.33,
      "previous_close": 29023.18,
      "change": 120.15,
      "change_percent": 0.41,
      "display_price": "29,143.33",
      "status": "up",
      "history": [
        29209.23,
        29224.52,
        29641.561,
        29456.971,
        29077.221,
        29143.33
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-09-02 20:00:37"
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
      "price": 11339.254,
      "previous_close": 11423.17,
      "change": -83.916,
      "change_percent": -0.73,
      "display_price": "11,339.25",
      "status": "down",
      "history": [
        11588.04,
        11611.24,
        11882.17,
        11469.66,
        11535.05,
        11288.61,
        11339.254
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-09-02 20:00:37"
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
      "price": 15.25,
      "previous_close": 15.45,
      "change": -0.2,
      "change_percent": -1.29,
      "display_price": "15.25",
      "status": "down",
      "history": [
        15.45,
        15.21,
        14.51,
        14.43,
        14.92,
        16.34,
        15.25
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-09-02 20:00:38"
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
      "price": 1359.37,
      "previous_close": 1380.76,
      "change": -21.39,
      "change_percent": -1.55,
      "display_price": "1,359.37원",
      "status": "down",
      "history": [
        1381.49,
        1383.49,
        1380.45,
        1377.11,
        1366.62,
        1372.86,
        1359.37
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-09-02 20:00:38",
      "fx_averages": {
        "avg_1y": 1459.6,
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
      "price": 6562.72,
      "previous_close": 6696.96,
      "change": -134.24,
      "change_percent": -2.0,
      "display_price": "6,562.72",
      "status": "down",
      "history": [
        6742.74,
        6808.21,
        6912.37,
        6820.02,
        6835.8
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-09-02 20:00:38"
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
      "price": 803.98,
      "previous_close": 813.33,
      "change": -9.35,
      "change_percent": -1.15,
      "display_price": "803.98",
      "status": "down",
      "history": [
        827.15,
        826.87,
        837.65,
        834.29,
        821.25
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-09-02 20:00:38"
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
      "price": 3.93,
      "previous_close": 3.87,
      "change": 0.06,
      "change_percent": 1.55,
      "display_price": "3.93%",
      "status": "up",
      "history": [
        3.83,
        3.81,
        3.75,
        3.78,
        3.83,
        3.87,
        3.93
      ],
      "chart_url": "https://finance.naver.com/marketindex/interestDetail.naver?marketindexCd=IRR_GOVT03Y",
      "updated_at": "2026-09-02 20:00:38"
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
      "updated_at": "2026-09-02 20:00:40"
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
      "price": 178.89,
      "previous_close": 173.64,
      "change": 5.25,
      "change_percent": 3.02,
      "display_price": "$178.89",
      "status": "up",
      "history": [
        180.15,
        179.18,
        182.14,
        180.86,
        175.8,
        178.89
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-09-02 20:00:40"
    }
  ],
  "news": [
    {
      "source": "CNBC",
      "title_ko": "시장은 올해 이란 휴전으로 인해 잠재력을 향해 다시 이동하고 있습니다.",
      "title_en": "Markets shift back toward potential Fed rate cut this year with Iran ceasefire in place",
      "summary_ko": "시장은 올해 이란 휴전으로 인해 잠재력을 향해 다시 이동하고 있습니다. 관련 핵심 동향이 발표되었습니다. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. CNBC뿐만 아니라 Bloomberg, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNZGtvOGY1aDZBcVpZMW5NUFJDNzB4YU95eFFRSzBYaTd3WHFNRWdOTXlPQlVGcXBpdlMwSVRoR1hLZnkwa1A3SVg0SGFjMXUyemFHaW9kY3JxQ2c5UkQzZURkTFVXampOMndtcnFHZnN0LWZuN0ltV1hhSW85ZTRubFBvVE1LdlZJLURNSXNRemdqbktTZEphU2o5RmhCY2NOZEF1UkxKZy1KakQtZFlMTE1Hbm55cjQ3WWdIV0hhTmE5WEHSAcgBQVVfeXFMTVJWTk9yVkpld1BaRHMxMGRfc2lQQl9qVU9iR3k4dURPNFFGOE14LTU3M0pLVGM4S05OY2VwUHdlYkNsSEFIbkdjczVlaUU1Z0dXOUdZMEYyZ0Z1QnU3WktLWXhLMFIxOExXb3FQWXBoTkJfR1I1QzBoTDFkOHIxajRpUzlwMlNva0dadUFUcmVFblQtRnVKSHNVc0R0VmJIU0hMNzhoSmlRdGhLY3VnS1pKcHpEenFIRThqRDJ5TlBNbnlLRVBSMlA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwwFBVV95cUxNZGtvOGY1aDZBcVpZMW5NUFJDNzB4YU95eFFRSzBYaTd3WHFNRWdOTXlPQlVGcXBpdlMwSVRoR1hLZnkwa1A3SVg0SGFjMXUyemFHaW9kY3JxQ2c5UkQzZURkTFVXampOMndtcnFHZnN0LWZuN0ltV1hhSW85ZTRubFBvVE1LdlZJLURNSXNRemdqbktTZEphU2o5RmhCY2NOZEF1UkxKZy1KakQtZFlMTE1Hbm55cjQ3WWdIV0hhTmE5WEHSAcgBQVVfeXFMTVJWTk9yVkpld1BaRHMxMGRfc2lQQl9qVU9iR3k4dURPNFFGOE14LTU3M0pLVGM4S05OY2VwUHdlYkNsSEFIbkdjczVlaUU1Z0dXOUdZMEYyZ0Z1QnU3WktLWXhLMFIxOExXb3FQWXBoTkJfR1I1QzBoTDFkOHIxajRpUzlwMlNva0dadUFUcmVFblQtRnVKSHNVc0R0VmJIU0hMNzhoSmlRdGhLY3VnS1pKcHpEenFIRThqRDJ5TlBNbnlLRVBSMlA%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 08 Apr 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Barclays는 Warsh 연설 이후 연준 (Fed)이 올해 두 번 더 금리를 인상 할 것으로 예상합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQcjVHcjZWTGVra3FoZ29XVXdDS05fZlh6S3ZwZHdzb2Z1bHo1Tm12NUNBZWZxN21sTG5hYkdfVVA5VmlBMm5xOERKNXJYZDJURkI2Yk5Lb1JNZFFyNEJVZUdKSjhtdFZtbm5MdHJfN3cwN1FTUzRlUkJwUWxnWjlqLVVpdHZrQkRnaUx0Y1oyZlQ1VzY0LUhmRlI5d2RKbU9lQWVZUC0xTG81QjljYzRwdDRQRndsY3FXZWdR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuwFBVV95cUxQcjVHcjZWTGVra3FoZ29XVXdDS05fZlh6S3ZwZHdzb2Z1bHo1Tm12NUNBZWZxN21sTG5hYkdfVVA5VmlBMm5xOERKNXJYZDJURkI2Yk5Lb1JNZFFyNEJVZUdKSjhtdFZtbm5MdHJfN3cwN1FTUzRlUkJwUWxnWjlqLVVpdHZrQkRnaUx0Y1oyZlQ1VzY0LUhmRlI5d2RKbU9lQWVZUC0xTG81QjljYzRwdDRQRndsY3FXZWdR%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "연준(Fed) 기준 금리 인하에 대한 시장의 희망은 빠르게 사라지고 있다",
          "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPenZDZzZIZWtCNFRmZThzaC1aek1vT2NWSzMyU1Y0TnBpRWw5bnR1M1Vtaml1ajRlNFBiSVN3SkRCUjBTdGFHQzdQQUkwSE5qcHlYMnNoQS1UN3hWNlZuV1NPNjAtTWkyaWpjS2diSzNpajhDQldrZDdhNVpOeEtvd0tXNXMtT1VhendWbmhEX2FtRmhGa2FqTnVyQzVMVlVjdEhR0gGoAUFVX3lxTE96U0h0N2Nxd2FJNU9rbkdzTjlwemVtOGhZUUoxY0k2WlEwWS00U2xIVVNNdUNSVzlwSkNlY1NTWFRvc0lsM3B0WFFfeWI5QkFkTnY5UElvQy1obkVkVG5fM2lSWlRBbTEyQ3dqZzU5bnVQOVQ0LWRHVm9BYnE2eV84blgwVlNScktObmtjbkVXTW9uZ0xYaG04TEh2bVJWZThyT2t0YmNhTQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxPenZDZzZIZWtCNFRmZThzaC1aek1vT2NWSzMyU1Y0TnBpRWw5bnR1M1Vtaml1ajRlNFBiSVN3SkRCUjBTdGFHQzdQQUkwSE5qcHlYMnNoQS1UN3hWNlZuV1NPNjAtTWkyaWpjS2diSzNpajhDQldrZDdhNVpOeEtvd0tXNXMtT1VhendWbmhEX2FtRmhGa2FqTnVyQzVMVlVjdEhR0gGoAUFVX3lxTE96U0h0N2Nxd2FJNU9rbkdzTjlwemVtOGhZUUoxY0k2WlEwWS00U2xIVVNNdUNSVzlwSkNlY1NTWFRvc0lsM3B0WFFfeWI5QkFkTnY5UElvQy1obkVkVG5fM2lSWlRBbTEyQ3dqZzU5bnVQOVQ0LWRHVm9BYnE2eV84blgwVlNScktObmtjbkVXTW9uZ0xYaG04TEh2bVJWZThyT2t0YmNhTQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)이 금리를 유지한다면 시장의 반응은 좋지 않을 것입니다: Seder",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOb3M1YTRKeExWbE16WEFucjZJRENraVpMRzE5SnZzRk8taHBONS0xcFV5NWFOTnplSUktdkt1QmRacklrc0pQalIwUUVMTG1IVloyVnB6LWpDTmhXSEUta1c5dmNBLVNtTzJzZkJsdXZEUUNnMlNRd2pSX1FFNDFOU2NPazdVWldfUHBhcW84RmZ0OTR2bG9xR0hXT2hUWHEzdlk2dFFKaDFUZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxOb3M1YTRKeExWbE16WEFucjZJRENraVpMRzE5SnZzRk8taHBONS0xcFV5NWFOTnplSUktdkt1QmRacklrc0pQalIwUUVMTG1IVloyVnB6LWpDTmhXSEUta1c5dmNBLVNtTzJzZkJsdXZEUUNnMlNRd2pSX1FFNDFOU2NPazdVWldfUHBhcW84RmZ0OTR2bG9xR0hXT2hUWHEzdlk2dFFKaDFUZw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-02 20:00:55"
    },
    {
      "source": "CNBC",
      "title_ko": "10",
      "title_en": "10-year Treasury yield slides as Iran deal drives rethink on Fed interest rate hikes",
      "summary_ko": "10 관련 핵심 동향이 발표되었습니다. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. CNBC뿐만 아니라 Bloomberg, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPRG9oQVRDYjVZbTFuZERZUjFJSjZyWER6ZTB0bXFGaWhGM1BMSENPY0ZqQ29kSEhqOExHQ0toekFGcE9fd0prUVRFdHlWTzVOX1RMNVdXVDc0OTRqRWtSTGpFRFJ0OV9QS3JyME0zSmdJUDJ2S0VhcEZYUGhqVE9BeXdUNTZ6cU5sNWxZOHRYTS01a1o2WEF5btIBngFBVV95cUxOQS1BejRFaVlpMml3aFNMb0FTbGdCQkVLZFVJd3VvbHJQVGxvQ1ZCeFkxWnBXcm1GcGx4OTEtaE1pTzBDZ0U1bzRfZjF0NjdETV9RXzJ5aXBwNE8xajE0dTNmbUs4YmhZQUdFWDlsM2VtNWZDLUd6R2FSeDRjRWUyVFVJa3MxVHBWTmNqTFhrbVZPMzEteUdkY2t0NGUyUQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimAFBVV95cUxPRG9oQVRDYjVZbTFuZERZUjFJSjZyWER6ZTB0bXFGaWhGM1BMSENPY0ZqQ29kSEhqOExHQ0toekFGcE9fd0prUVRFdHlWTzVOX1RMNVdXVDc0OTRqRWtSTGpFRFJ0OV9QS3JyME0zSmdJUDJ2S0VhcEZYUGhqVE9BeXdUNTZ6cU5sNWxZOHRYTS01a1o2WEF5btIBngFBVV95cUxOQS1BejRFaVlpMml3aFNMb0FTbGdCQkVLZFVJd3VvbHJQVGxvQ1ZCeFkxWnBXcm1GcGx4OTEtaE1pTzBDZ0U1bzRfZjF0NjdETV9RXzJ5aXBwNE8xajE0dTNmbUs4YmhZQUdFWDlsM2VtNWZDLUd6R2FSeDRjRWUyVFVJa3MxVHBWTmNqTFhrbVZPMzEteUdkY2t0NGUyUQ%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 15 Jun 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "유로존 인플레이션이 3% 이상 상승하며 ECB의 등장 인물 베팅이 확고해졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNWlU0ZGJQMWt6NVhpVng4SW1jUk1SM3NXZWlRZzliNnV5emhYeDRaVF9FYnA1aWNDUVphdW1hQTcwRWVOVGR1YjBfdm9sOUlWcFpCSnFwOVNubkh6VnZrTjRyMERVTWRKaXYzZHNaVjBZZ2hYT015OHgzb2o5S25uaG1OaFNGVzRpZk1XSDZMMVhhUUM1V19VbWktVnRmXy1YbEFUS3JxeGEtY0E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqwFBVV95cUxNWlU0ZGJQMWt6NVhpVng4SW1jUk1SM3NXZWlRZzliNnV5emhYeDRaVF9FYnA1aWNDUVphdW1hQTcwRWVOVGR1YjBfdm9sOUlWcFpCSnFwOVNubkh6VnZrTjRyMERVTWRKaXYzZHNaVjBZZ2hYT015OHgzb2o5S25uaG1OaFNGVzRpZk1XSDZMMVhhUUM1V19VbWktVnRmXy1YbEFUS3JxeGEtY0E%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "독일 인플레이션 상승으로 인해 ECB의 관심이 높아졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPMWZ4UkVFbVJIX1ZZQ3Y0Tk91b1FxamswZkJIcWlHWk8zQlJ2emlId1lRNWN2cUxDVVRXWXBad0xjTkZ5MnJteDRISlJRekhiaXB0YnFJZjhXN2FmVjhLdlQ2Sk9zUlhodHU3SjNKMFRRTGxBVXdNNFdVVWoyTTBFTkM2dGJBRjVWYjNPZndDeU8tdFVNV3FKcnhVX0h4ZzRMS2phMEZiMFpYdUQwSHRvTUlNdjdQY3c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxPMWZ4UkVFbVJIX1ZZQ3Y0Tk91b1FxamswZkJIcWlHWk8zQlJ2emlId1lRNWN2cUxDVVRXWXBad0xjTkZ5MnJteDRISlJRekhiaXB0YnFJZjhXN2FmVjhLdlQ2Sk9zUlhodHU3SjNKMFRRTGxBVXdNNFdVVWoyTTBFTkM2dGJBRjVWYjNPZndDeU8tdFVNV3FKcnhVX0h4ZzRMS2phMEZiMFpYdUQwSHRvTUlNdjdQY3c%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "금은 거의 2로 하락",
          "original_url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOcGRDTjJlQVBDZkNfeW5WNWk4aWh2TllVWTJUUnlKTzBxNWxwcUxnZEUwNFVkOVBVUy11VTdrZy1henJZa0Y0ay1FRjA3TS1PWWRKOUFxdVQyWnVyZGR4MjdLbkpfX29Ddk9JNGVBZWFRTXFvclpYVUJkeVdQSkxmZkpRWnhwOEt5VFY4TEFWdnVRRVZmVE90Z9IBngFBVV95cUxOMjlpRXBWMGhPX2JndVEyWDdsTWZDSjhtMWtqMEE2NUVTMkhDZ3pSS2NwWjZHR2k2U0pCbWhxdlVTTjk5bng3X2pkNVpPbkttT2pIQVJWX3ZCTXBqM2dtd3JwcU1ZVEpIXzRFOTBJWnhuYWhQa3duSVlpZ0dhbTJITGkyWkF5VlFxb29NSnFnU2lya0hCZnh3MWxDRHB4QQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimAFBVV95cUxOcGRDTjJlQVBDZkNfeW5WNWk4aWh2TllVWTJUUnlKTzBxNWxwcUxnZEUwNFVkOVBVUy11VTdrZy1henJZa0Y0ay1FRjA3TS1PWWRKOUFxdVQyWnVyZGR4MjdLbkpfX29Ddk9JNGVBZWFRTXFvclpYVUJkeVdQSkxmZkpRWnhwOEt5VFY4TEFWdnVRRVZmVE90Z9IBngFBVV95cUxOMjlpRXBWMGhPX2JndVEyWDdsTWZDSjhtMWtqMEE2NUVTMkhDZ3pSS2NwWjZHR2k2U0pCbWhxdlVTTjk5bng3X2pkNVpPbkttT2pIQVJWX3ZCTXBqM2dtd3JwcU1ZVEpIXzRFOTBJWnhuYWhQa3duSVlpZ0dhbTJITGkyWkF5VlFxb29NSnFnU2lya0hCZnh3MWxDRHB4QQ%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "미국 10",
          "original_url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFA2XzdMSmQwU3JlODFrTmc0T0lQNDdjTTd5VjB4TjJOYnZzVlpyTTBObjdLQmdrQS1UeHZVY3BkVW5rOVZsMU90T3J5cDdSVDRLZ0MtY0g1eXFhOFFMZC1wWG5VZGNQNVZRa1JCb2lJS0I3aFduRkh3M29aa9IBgAFBVV95cUxQTkdDU0l6d2lKSV9Pd253Vkx0TFJjdHdvN0dtRkV0OG81S09NdFVRa2ZMWGV0SW9rOWNONkZpbFN6aU9JUHVnSlJaV1ZXemVRcEY3OGNGZF9QUnBfZWpGTmJuSklTYXdxSVA5UVlkVzd5cGFfdVZtSUQ5bTdjd1BwWQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMie0FVX3lxTFA2XzdMSmQwU3JlODFrTmc0T0lQNDdjTTd5VjB4TjJOYnZzVlpyTTBObjdLQmdrQS1UeHZVY3BkVW5rOVZsMU90T3J5cDdSVDRLZ0MtY0g1eXFhOFFMZC1wWG5VZGNQNVZRa1JCb2lJS0I3aFduRkh3M29aa9IBgAFBVV95cUxQTkdDU0l6d2lKSV9Pd253Vkx0TFJjdHdvN0dtRkV0OG81S09NdFVRa2ZMWGV0SW9rOWNONkZpbFN6aU9JUHVnSlJaV1ZXemVRcEY3OGNGZF9QUnBfZWpGTmJuSklTYXdxSVA5UVlkVzd5cGFfdVZtSUQ5bTdjd1BwWQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:00"
    },
    {
      "source": "뉴시스",
      "title_ko": "\"연준이 금리 인상해도 비트코인 오른다…국가부채가 관건\"",
      "title_en": "",
      "summary_ko": "\"연준이 금리 인상해도 비트코인 오른다…국가부채가 관건\" 뉴시스. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 뉴시스뿐만 아니라 Investing.com, 마켓인 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFAwUzlyUERlWVZWLW5neEc0dnhkZTZldzA3TVl5UF9rWHB6SnQzbi1rYmppNV9vTEZiRHAybk9feTJGUGtHOGNWVGxvMHB0WEpHUUNkYTZWT0NDRHZUS1dKNk5R?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFAwUzlyUERlWVZWLW5neEc0dnhkZTZldzA3TVl5UF9rWHB6SnQzbi1rYmppNV9vTEZiRHAybk9feTJGUGtHOGNWVGxvMHB0WEpHUUNkYTZWT0NDRHZUS1dKNk5R?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 02 Sep 2026 08:30:00 GMT",
      "related_articles": [
        {
          "source": "Investing.com",
          "title_ko": "연준 금리 인상 전망, 유가 상승, 일본 국채 금리 - 시장 움직임 분석",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5pRTZsVkUxQ3pLRkd4WlYwbDdsZXlyc240NmZOVzV6Wkw3RGJoNURmVk9ta3pxUWJCenJNZ0FhNk8wVmpVWFQ1cmd1UGxXMGFsOElvWjZZVXpETTkzZXE1bUFwNlQ3SnZOS0E?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5pRTZsVkUxQ3pLRkd4WlYwbDdsZXlyc240NmZOVzV6Wkw3RGJoNURmVk9ta3pxUWJCenJNZ0FhNk8wVmpVWFQ1cmd1UGxXMGFsOElvWjZZVXpETTkzZXE1bUFwNlQ3SnZOS0E?oc=5"
        },
        {
          "source": "마켓인",
          "title_ko": "도이체방크 \"연준, 9월 금리 인상 가능성 가장 높아\"",
          "original_url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1rTUZ4OVV0eWhMT2p5MVZNSVFsTEZNekd2dmxvX3hMRF9xaXdNNi1PekZQVDEtM0pnV2YxaUMwcF9RbkdpR1RySTNPRmU1RGpBMVBSdmNHRnJvQXlzT21KbTBCb2ZNaUhzSlpaeFhra3RBSUk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1rTUZ4OVV0eWhMT2p5MVZNSVFsTEZNekd2dmxvX3hMRF9xaXdNNi1PekZQVDEtM0pnV2YxaUMwcF9RbkdpR1RySTNPRmU1RGpBMVBSdmNHRnJvQXlzT21KbTBCb2ZNaUhzSlpaeFhra3RBSUk?oc=5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:01"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "얼마나 타이트한지",
      "title_en": "How a Tight-Lipped Fed Could Lead to Higher Mortgage Rates",
      "summary_ko": "얼마나 타이트한지 관련 핵심 동향이 발표되었습니다. 중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다. Wall Street Journal뿐만 아니라 MarketWatch, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Reuters",
          "title_ko": "연준(Fed)의 파월 즐겨, 연준(Fed)을 정치화하면 대중의 신뢰를 잃을 것이라고 경고",
          "original_url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOV3ZFbXQweXJ2anVHZUoxV0o2N2E5TkVMeXZSTVcyX2xHdzdhdWVvbTBRV1RJRlE5ZnBlOUtabVZmRTI1REVXYXlFdlBMVXRzakxRUS1KSGw5YUhaVUNrVlJLNWVoMmVQR1lnc2ZldG5NWk9xbC1vZ0ljdzdhMjdvbC02TTlNLU9UZzdFOGlua244aDF6blYyT2t6blpyU1dsVENGQzhzc0t2UUtJ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirAFBVV95cUxOV3ZFbXQweXJ2anVHZUoxV0o2N2E5TkVMeXZSTVcyX2xHdzdhdWVvbTBRV1RJRlE5ZnBlOUtabVZmRTI1REVXYXlFdlBMVXRzakxRUS1KSGw5YUhaVUNrVlJLNWVoMmVQR1lnc2ZldG5NWk9xbC1vZ0ljdzdhMjdvbC02TTlNLU9UZzdFOGlua244aDF6blYyT2t6blpyU1dsVENGQzhzc0t2UUtJ%3Foc%3D5"
        },
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
      "crawled_at": "2026-09-02 20:01:07"
    },
    {
      "source": "MarketWatch",
      "title_ko": "연준(Fed)의 리사 쿡이 주택담보대출 사기를 부인하고 트럼프는 자신을 해임할 근거가 없다고 말했다",
      "title_en": "Fed’s Lisa Cook denies committing mortgage fraud, says Trump has no grounds to remove her from office",
      "summary_ko": "연준(Fed)의 리사 쿡(Lisa Cook)이 모기지 사기 행위를 부인하고 트럼프가 그녀를 사무실에서 해임할 근거가 없다고 말하다 marketwatch.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. MarketWatch에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
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
      "related_articles": [],
      "crawled_at": "2026-09-02 20:01:08"
    },
    {
      "source": "Reuters",
      "title_ko": "이란 전쟁으로 인한 오일 쇼크 우려로 해외 자금 유출로 아시아 증시 타격",
      "title_en": "Foreign outflows hit Asian stocks as Iran war drives oil shock fears",
      "summary_ko": "이란 전쟁으로 인한 오일 쇼크, 우려로 해외 자금 유출로 아시아 증시 타격 Reuters. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "Bloomberg",
          "title_ko": "캐나다 은행, 관세로 기준금리 2.25% 유지, 이란 전쟁 전망",
          "original_url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVnpZVHZOM0pXemhCandGNUNYOXcxU0tvaVdZX2lpRkxtNjhuVnZad29kdzdXODduMEdXck5tLU5EV0pCandBdjkzNmZaMjNwRW5yVFJmTVZCMnZTSmpDVndWTzQ0U2VxS241NS04Z1Z0Vk9GVWVFX0JpSjZMRU8tSjRiRldMZnBaZkQteFBNaDQzbDY4ODROeUZ2aGo?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinAFBVV95cUxPVnpZVHZOM0pXemhCandGNUNYOXcxU0tvaVdZX2lpRkxtNjhuVnZad29kdzdXODduMEdXck5tLU5EV0pCandBdjkzNmZaMjNwRW5yVFJmTVZCMnZTSmpDVndWTzQ0U2VxS241NS04Z1Z0Vk9GVWVFX0JpSjZMRU8tSjRiRldMZnBaZkQteFBNaDQzbDY4ODROeUZ2aGo%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "유가 급등, 인플레이션 우려 고조로 글로벌 채권 수익률( 금리) 점프",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPNUlCR0k3M3VWNXJzY3BCTTBGTk9YZm5OLURyLVM0ZUVWLU9tTU5HNmR1NmVBdlF6aDYtOVFHUENFcTJQdFpFRDRuam9qY0VQTmtwem5ZTzA4UmlXb0hUN280V2V5ZnNLLVdENUZRUmZ6dU41YjItbGNWVlRaRm50LWo0dEtOSldqWVZZVVBTaFlPa1JzYk1QU2o4ZnlIX1RPd3JPdzlYNlJUQVo4M2hqNHJCZzI0Yk5iMEE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxPNUlCR0k3M3VWNXJzY3BCTTBGTk9YZm5OLURyLVM0ZUVWLU9tTU5HNmR1NmVBdlF6aDYtOVFHUENFcTJQdFpFRDRuam9qY0VQTmtwem5ZTzA4UmlXb0hUN280V2V5ZnNLLVdENUZRUmZ6dU41YjItbGNWVlRaRm50LWo0dEtOSldqWVZZVVBTaFlPa1JzYk1QU2o4ZnlIX1RPd3JPdzlYNlJUQVo4M2hqNHJCZzI0Yk5iMEE%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "미국은 제안된 캐나다 협정의 일환으로 주요 관세를 인하할 수 있다고 소식통은 밝혔습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPQnRyZExVRkFxVGJqQkpSZk83d1pCbkQ1elJqVURZSjl6TTEyZUZtdURWYWhMRldiTWpiRUFXWW1nSExxeE10cXJWMndsbl9QLXJwVDZqVTllUTNUV2s2M3pJZ3U5WExpbHh4MHpYNGE5OXpMeGU0cFlUVEdwM3IwdmtNbHRYOE5hSFRzWDF6ODBLczdqbDllaTRlamRySDlLREFqNi1UTnJuTk9uZFFmUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxPQnRyZExVRkFxVGJqQkpSZk83d1pCbkQ1elJqVURZSjl6TTEyZUZtdURWYWhMRldiTWpiRUFXWW1nSExxeE10cXJWMndsbl9QLXJwVDZqVTllUTNUV2s2M3pJZ3U5WExpbHh4MHpYNGE5OXpMeGU0cFlUVEdwM3IwdmtNbHRYOE5hSFRzWDF6ODBLczdqbDllaTRlamRySDlLREFqNi1UTnJuTk9uZFFmUQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "아시아 채권으로의 외국인 유입이 6건을 기록했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOeXJuTERwN0d6Y2tTZG5Ra214UmhVa29SRHRzSG9kdFY3QThsTXlPUWlTT1VyRGgxbVJ2TnpTcWJCa1RMaGZJUDVfUVVlWUJJZUVBYU1Ba0haNFRuUHhqN2d2b0Z6NUdHdDRVcUk5eDRDa0s3WmJxRGF3NmpUN2N5dThKWHdtWTRrazBBeENTM0FNdnhXTm9FeUw0Uzdma2FNYk1oVXhUbzU3bEM5azItNlJZTkxYUQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxOeXJuTERwN0d6Y2tTZG5Ra214UmhVa29SRHRzSG9kdFY3QThsTXlPUWlTT1VyRGgxbVJ2TnpTcWJCa1RMaGZJUDVfUVVlWUJJZUVBYU1Ba0haNFRuUHhqN2d2b0Z6NUdHdDRVcUk5eDRDa0s3WmJxRGF3NmpUN2N5dThKWHdtWTRrazBBeENTM0FNdnhXTm9FeUw0Uzdma2FNYk1oVXhUbzU3bEM5azItNlJZTkxYUQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:14"
    },
    {
      "source": "매일경제",
      "title_ko": "다시 고개 든 3%대 물가에 중동발 오일쇼크까지…물가부담 커진다",
      "title_en": "",
      "summary_ko": "다시 고개 든 3%대 물가에 중동발 오일쇼크까지…물가부담 커진다 매일경제 마켓. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 매일경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1LNkZ4WTBvXzh3c3RtSXlsSGRhclMwWHJLWFdkTXhUNGpFU3BPRS1IcmJWazNvdlpCSVFPSjc0SDJwZ3UwT3lMbWlSekNNUjVSdHc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1LNkZ4WTBvXzh3c3RtSXlsSGRhclMwWHJLWFdkTXhUNGpFU3BPRS1IcmJWazNvdlpCSVFPSjc0SDJwZ3UwT3lMbWlSekNNUjVSdHc?oc=5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 70,
      "badge_label": "🔥 특급 너울",
      "badge_class": "tier-swell",
      "pub_date": "Wed, 02 Sep 2026 07:53:37 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-02 20:01:14"
    },
    {
      "source": "Reuters",
      "title_ko": "미국 미 국채/재무부 베센트, 관세, 이란 전쟁, 채권 혼란 속에 G20 외교 시험 직면",
      "title_en": "US Treasury's Bessent faces G20 diplomacy test amid tariffs, Iran war, bond turmoil",
      "summary_ko": "미국 미 국채/재무부 베센트, 관세, 이란 전쟁, 채권 혼란 속에 G20 외교 시험 직면 로이터. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxORVlaS1VmZVF5Rjh3RFkwVk40ZGpBSU1LLXM3XzQ1REFxbnl0aHREWXhieU9vUnU0aUdkTWgtNmJrYk9BRDE3aEllamozWFJVMHZ5QTJUS0pkckpwbjFVQ2dxaEhBaWZWZXg3a05ISG1Fb3k4aWV0QmRSbGFiOHdsQ0x6QWZjUUN6b3lsc2c5MEZOc2RCWXZXcERhdkN4NFJGVHBGejVxbTBZWDdvczdJamxDQ3Jib29xS1lzcURfX05MQ1BET25r?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMixwFBVV95cUxORVlaS1VmZVF5Rjh3RFkwVk40ZGpBSU1LLXM3XzQ1REFxbnl0aHREWXhieU9vUnU0aUdkTWgtNmJrYk9BRDE3aEllamozWFJVMHZ5QTJUS0pkckpwbjFVQ2dxaEhBaWZWZXg3a05ISG1Fb3k4aWV0QmRSbGFiOHdsQ0x6QWZjUUN6b3lsc2c5MEZOc2RCWXZXcERhdkN4NFJGVHBGejVxbTBZWDdvczdJamxDQ3Jib29xS1lzcURfX05MQ1BET25r%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 31 Aug 2026 07:57:59 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "베센트 \"미국, 이번 주에 이란 은행 제재 발표할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQZEY5Z1hsMHdwMm1tT1QxU0JvSllPd1V0eFVXWTlTYlRHMHphTDFnbENycVpzeWcxUmFHZ3I3ZUhEdDNaYkJueWotd2h0ZUFySE9GUGthYzlfcFJxVzZiMlhGbXZSSDAwTlJiRlZEQXVCYks4UUUyVFdWSHItUDN0MDZLU1pKZzFFZ2l3X2dBVmVCNVpFRFFKS2lmNUxVeGdIcDBrbk90SDY1ZWNOM1E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxQZEY5Z1hsMHdwMm1tT1QxU0JvSllPd1V0eFVXWTlTYlRHMHphTDFnbENycVpzeWcxUmFHZ3I3ZUhEdDNaYkJueWotd2h0ZUFySE9GUGthYzlfcFJxVzZiMlhGbXZSSDAwTlJiRlZEQXVCYks4UUUyVFdWSHItUDN0MDZLU1pKZzFFZ2l3X2dBVmVCNVpFRFFKS2lmNUxVeGdIcDBrbk90SDY1ZWNOM1E%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "베센트 \"미국, 이란에 본 적 없는 조치 적용할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiogFBVV95cUxNT2p2QW55Tk9jcjF5Ti1OZmlpMGpLTEg0RU92RVEtMzFobXY2TmtNWjFJaUVZMl9RaWxWM09uV2xjVlQ0dnFHcGlEVi1Zc3ZnRHpFMkZ5VExoeTdzSVE0cmYzMVRFQUExRHA2RHNhZFpFMFZnNnIySjh3RTBRSXVtX3ZqVTJjVWhGSmdpTHVmY19QRE9ieWNmaDdaM2hmOHZfRFE%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "베센트는 이란이 제재로 인한 경제적 압박 속에서 맹렬히 비난하고 있다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9wOWJlaDAzRW96X3A5aDRza2xCMHY4bG1HQUlBSXRQdGpMSmpxOWxQQVZMWWl4TVVxT1NYMHVmNlc2NlB4ckVaazl5UjFCdTllWXV6TFZIUzU1UUcxU2RLQlQ2cVJwSzA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiZ0FVX3lxTE9wOWJlaDAzRW96X3A5aDRza2xCMHY4bG1HQUlBSXRQdGpMSmpxOWxQQVZMWWl4TVVxT1NYMHVmNlc2NlB4ckVaazl5UjFCdTllWXV6TFZIUzU1UUcxU2RLQlQ2cVJwSzA%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "베센트(Bessent)는 미국을 제안한다",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOdmUycmRQNWwzNXJaRFhBMmo4UGNQOF9ETjh0dVZkMG93bmhtUGxCbDJBdUlBRHgwSWJfTkpvZjZkUDZoaFktNzZiNHVrMXlYV2ZEQ3Rhd0VUN0ZsQTlTcW1POEVVcHB2NEFFSTRlTkJSVk5fN2podXRIbzB1ckUwU0xnSGRfUTJUNkl4THZ6ZGo3MlN3dVpYcEVka1lqc09FcnlKb2UyZ01WV2JEcHpOUw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOdmUycmRQNWwzNXJaRFhBMmo4UGNQOF9ETjh0dVZkMG93bmhtUGxCbDJBdUlBRHgwSWJfTkpvZjZkUDZoaFktNzZiNHVrMXlYV2ZEQ3Rhd0VUN0ZsQTlTcW1POEVVcHB2NEFFSTRlTkJSVk5fN2podXRIbzB1ckUwU0xnSGRfUTJUNkl4THZ6ZGo3MlN3dVpYcEVka1lqc09FcnlKb2UyZ01WV2JEcHpOUw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:20"
    },
    {
      "source": "Bloomberg",
      "title_ko": "베센트는 석유가 우회하기 때문에 호르무즈는 '가치 없게' 될 것이라고 말한다",
      "title_en": "Bessent Says Hormuz Will Be ‘Worthless’ as Oil Bypasses It",
      "summary_ko": "베센트 \"석유 우회로 호르무즈는 쓸모없어질 것\". 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxObVVWWjNNeENodUlKQnA4YTRSa0Nlc0ZZbHhaQ1d0MjlLcGNGSjQtUmhic0VldGZqNnJyc2ZxcXVRWExTSlN5UkZRMEo2enMxQTh3S2xYdkI3azVFalJOclYyQU5KRHF1cGU3andZb0tIZnhSYUg1RTVzUjlYYi12Q0ZaU1lLWUtUc2NsTmNGUWV1MnM2SWdCTjlHOFpmZEJpby1CYzAyc2J0Z0s0cGtPRUJB?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxObVVWWjNNeENodUlKQnA4YTRSa0Nlc0ZZbHhaQ1d0MjlLcGNGSjQtUmhic0VldGZqNnJyc2ZxcXVRWExTSlN5UkZRMEo2enMxQTh3S2xYdkI3azVFalJOclYyQU5KRHF1cGU3andZb0tIZnhSYUg1RTVzUjlYYi12Q0ZaU1lLWUtUc2NsTmNGUWV1MnM2SWdCTjlHOFpmZEJpby1CYzAyc2J0Z0s0cGtPRUJB%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 01 Sep 2026 15:47:47 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Bessent는 Hormuz 경로가 미래에 우회될 것이라고 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOZGdpbkN2aE1XVGRteThEUzJBbmdVR0MtcHRKWlpTUGROZ0ZQS3JZU2otYzk1Qm9JdHRnYzJaMUhfdFpMa0JzdXVCTkhyRVE3bzFZV3VyQURZY01FX09lQVY3c2g1dDFsREtXbGdqY21WSVk3Q0lrWFY0c2g3NV85QUEwbERPckRQNWJsM3QxdDVIMzEtM1RnMmJzMzZ6MW1fek1iTDJ0SzZVUHgtWEVxUA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOZGdpbkN2aE1XVGRteThEUzJBbmdVR0MtcHRKWlpTUGROZ0ZQS3JZU2otYzk1Qm9JdHRnYzJaMUhfdFpMa0JzdXVCTkhyRVE3bzFZV3VyQURZY01FX09lQVY3c2g1dDFsREtXbGdqY21WSVk3Q0lrWFY0c2g3NV85QUEwbERPckRQNWJsM3QxdDVIMzEtM1RnMmJzMzZ6MW1fek1iTDJ0SzZVUHgtWEVxUA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:23"
    },
    {
      "source": "Bloomberg",
      "title_ko": "카타르, 베센트의 이란 거래가 다가오고 있다는 신호를 지켜보세요",
      "title_en": "Watch Qatar, Bessent Signal Iran Deal Could Be Coming",
      "summary_ko": "카타르, 베센트의 이란 거래가 다가오고 있다는 신호를 조심하세요 Bloomberg.com. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQX2wtMHNLRnBVQVF1UlEtOVJETzhzUnEya3ExeVRNUFAyS2xHZkMtYkNFOEdzRHVWWEFnRTE1UGVQOGszYUxwQmJRSzkxdGVMbEJVZURGNE9vVEZmdFNSY1dRQ0ktbWZ1U3VHb0JHTkNMczhSazZHVVNwVWVQWlVvRm1kc1VnTkFEVkdqa0ZmZEVYbGxFN3M2RXF2TGpEb3gtVEtB?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxQX2wtMHNLRnBVQVF1UlEtOVJETzhzUnEya3ExeVRNUFAyS2xHZkMtYkNFOEdzRHVWWEFnRTE1UGVQOGszYUxwQmJRSzkxdGVMbEJVZURGNE9vVEZmdFNSY1dRQ0ktbWZ1U3VHb0JHTkNMczhSazZHVVNwVWVQWlVvRm1kc1VnTkFEVkdqa0ZmZEVYbGxFN3M2RXF2TGpEb3gtVEtB%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 04 Aug 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Scott Bessent는 중국이 무역 흑자 분쟁에 대해 만장일치로 G20 성명을 중단했다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPb2NHbkIzVHAxdEE3bkhrWUpXOTNFWTlONjVlWFE0SkRXNkRXNEdCaHhkMWNsMDQzRFZnZFF6S2dqUWZ4S2EwcmVhM1B4b2RHV19mOFEzRzNpbGtmZUFyVWhDQVpiN01aWTlaYmM1WmdCemozdTJzMUhDZHdOUm83allSVVZNcEhFTk16NUZtMG9wTk5lNlVocnZZNnp4cHZqWXdFeHM4TE9tQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiqgFBVV95cUxPb2NHbkIzVHAxdEE3bkhrWUpXOTNFWTlONjVlWFE0SkRXNkRXNEdCaHhkMWNsMDQzRFZnZFF6S2dqUWZ4S2EwcmVhM1B4b2RHV19mOFEzRzNpbGtmZUFyVWhDQVpiN01aWTlaYmM1WmdCemozdTJzMUhDZHdOUm83allSVVZNcEhFTk16NUZtMG9wTk5lNlVocnZZNnp4cHZqWXdFeHM4TE9tQQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Pantera의 Morehead는 Bessent의 채권에 대한 허세가 역효과를 냈다고 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPWkVpYlQ0QVlEdXFMbjhlMm1HTnFGMTZpOVlCbm9nck9hMkY3d3d0ZFFwcTRyUWZNWGx1bERaVVRCeDhIc0FuZVJfR3gyX0Zxd0pYSG96R2dCdS1MOUVwTHVwMENEd0N0Y2p0Nk0zYzVnMl9vTmUzcVVKQVBiTEM2MEVRdzlVcWl5MDZwQ3dJZ25DR09Fd2dLNTh6Z3NxYmpS?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMioAFBVV95cUxPWkVpYlQ0QVlEdXFMbjhlMm1HTnFGMTZpOVlCbm9nck9hMkY3d3d0ZFFwcTRyUWZNWGx1bERaVVRCeDhIc0FuZVJfR3gyX0Zxd0pYSG96R2dCdS1MOUVwTHVwMENEd0N0Y2p0Nk0zYzVnMl9vTmUzcVVKQVBiTEM2MEVRdzlVcWl5MDZwQ3dJZ25DR09Fd2dLNTh6Z3NxYmpS%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Bessent, Warsh에 대한 신뢰 신호, 인플레이션 하락 예상",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPMkRlVU51bjFjRGlLa3pUVlB2ZTJOb0JjVGh5eVBOWllZQm56VTh6Tkl5WWFsZkdPWWFPN3I1VjhQLVQ2d1VDVXRVVzRyZFFRRjlQSUtnQm8wQXNtU0t1SG1KbE9mbjQxTEx0X09wNkpIc2gtY20tOGoxell0YWRMU1pCWVRwUENMSlBvZWswRnYzejNfTzN3T2VuTGN3WGZfMkN1LWlIYVJWOHFGdzlEbEo2NA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPMkRlVU51bjFjRGlLa3pUVlB2ZTJOb0JjVGh5eVBOWllZQm56VTh6Tkl5WWFsZkdPWWFPN3I1VjhQLVQ2d1VDVXRVVzRyZFFRRjlQSUtnQm8wQXNtU0t1SG1KbE9mbjQxTEx0X09wNkpIc2gtY20tOGoxell0YWRMU1pCWVRwUENMSlBvZWswRnYzejNfTzN3T2VuTGN3WGZfMkN1LWlIYVJWOHFGdzlEbEo2NA%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:29"
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
      "crawled_at": "2026-09-02 20:01:31"
    },
    {
      "source": "매일경제",
      "title_ko": "[표] 코스닥 외국인 순매수도 상위종목(31일)",
      "title_en": "",
      "summary_ko": "[표] 코스닥 외국인 순매수도 상위종목(31일) 매일경제 마켓. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 매일경제뿐만 아니라 한양경제, 2news.co.kr 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "source": "한양경제",
          "title_ko": "[마감시황] 코스피, 외국인·기관 매도 폭탄에 4%↓…6600선 내줘",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBRbnJHZHZEZ0FQbFMtRmJPbHc0c1FSdUZfMzdsT2Q0b2FJU1QydS1BT3dKRWh5M3VkUHJOYmZxVTRPdVVOTFJFLWNWWmVzd2E1eDMwMkNSRDBwRk8zMUhXYS13ZHlyNlU1b0FRM2FsYUY?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBRbnJHZHZEZ0FQbFMtRmJPbHc0c1FSdUZfMzdsT2Q0b2FJU1QydS1BT3dKRWh5M3VkUHJOYmZxVTRPdVVOTFJFLWNWWmVzd2E1eDMwMkNSRDBwRk8zMUhXYS13ZHlyNlU1b0FRM2FsYUY?oc=5"
        },
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
      "crawled_at": "2026-09-02 20:01:32"
    },
    {
      "source": "한국경제",
      "title_ko": "원달러환율 하락, 기업들 달러 매입 몰렸다…거주자 달러예금 사상 최대치",
      "title_en": "",
      "summary_ko": "원달러환율 하락, 기업들 달러 매입 몰렸다…거주자 달러예금 사상 최대치 대한경제. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 한국경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5nR29HT3ltMkprNVAxaW9YLUtISjlHN2pia0tRblZyUzJuZXo1aTZrOGRMQjI3RXM3a0lZTkhoa1JiVmhHNlpkaGc5THZ2aXU1THJrZ0FvaXlXSkMxektmbm9yZ2o5UUYzSVdiWlUwS1BtWm0z?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5nR29HT3ltMkprNVAxaW9YLUtISjlHN2pia0tRblZyUzJuZXo1aTZrOGRMQjI3RXM3a0lZTkhoa1JiVmhHNlpkaGc5THZ2aXU1THJrZ0FvaXlXSkMxektmbm9yZ2o5UUYzSVdiWlUwS1BtWm0z?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 28 Aug 2026 05:15:17 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-02 20:01:32"
    },
    {
      "source": "산경투데이",
      "title_ko": "환율, 중동 불안·미 국채금리 상승에도 하락…1,368.7원 마감",
      "title_en": "",
      "summary_ko": "환율, 중동 불안·미 국채금리 상승에도 하락…1,368.7원 마감 산경투데이. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 산경투데이뿐만 아니라 뉴스핌, 뉴스1 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBLcXZJR1ZjeUxfUU1JSDBKc3Jya1l5eDUxNEIwMHFZX29DMUdkUkFENFVDczhlM1pWUEEwWl9NN2dYazVmd2Qwb2tKNUEtWkpXOGEtOGFfNXdPVVlRbGhld3NJQTV3WWxSa1NUTVdaWFrSAXRBVV95cUxQY0pwLWRRYm1TdHVjWFotZnJIT19wenlmLWItMThlX09taGFsZW1KQjgzOTN0ZXJmZ21GYUZJbjU3Z0RRejd5NFFkUWJVOGhPcjdKNVRNM0FZc21oNXltUUxyNWIyRU53VTlBdC0yTG5uRDNXTQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBLcXZJR1ZjeUxfUU1JSDBKc3Jya1l5eDUxNEIwMHFZX29DMUdkUkFENFVDczhlM1pWUEEwWl9NN2dYazVmd2Qwb2tKNUEtWkpXOGEtOGFfNXdPVVlRbGhld3NJQTV3WWxSa1NUTVdaWFrSAXRBVV95cUxQY0pwLWRRYm1TdHVjWFotZnJIT19wenlmLWItMThlX09taGFsZW1KQjgzOTN0ZXJmZ21GYUZJbjU3Z0RRejd5NFFkUWJVOGhPcjdKNVRNM0FZc21oNXltUUxyNWIyRU53VTlBdC0yTG5uRDNXTQ?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 02 Sep 2026 07:03:53 GMT",
      "related_articles": [
        {
          "source": "뉴스핌",
          "title_ko": "[모닝 리포트] 중동 불안에 원·달러 환율 상승 전망...1370원 안팎",
          "original_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE41QkRKM3pFaXhVUE8tTlNPMkY1YWxBaVY5cTJtV053Wmt2bU5tVl8yVnh5M2RMc2oxaGhKeWRRdG1XWkMxQzV4MUVZWDJ3RlJBZHhMcHotOEJ3cW92?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE41QkRKM3pFaXhVUE8tTlNPMkY1YWxBaVY5cTJtV053Wmt2bU5tVl8yVnh5M2RMc2oxaGhKeWRRdG1XWkMxQzV4MUVZWDJ3RlJBZHhMcHotOEJ3cW92?oc=5"
        },
        {
          "source": "뉴스1",
          "title_ko": "달러·원 환율, 중동 불안·美 금리 상승에도 하락",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5oZ3M2cW4wZ1lBV2gwbnhXdEc2STlGLTRNQmtnOGpYTEMyUXBHcU5qNmFuM3FtODRPVFdtdzUzaGZSaGpZdEFfOUtmTW9ENzRndzlNUm13UnRsNzTSAWBBVV95cUxOWTNtRFh2dDZxVjRWS3V3RkxwRUJSVXctQlQxdGJmS25aNmZxUGdIUVZobGlCdHBEdmdhZEdmNmQtRjJKUHZZY2xMOEZNNWhqYmhyMXZRMXVEdnhQTHBpVEY?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5oZ3M2cW4wZ1lBV2gwbnhXdEc2STlGLTRNQmtnOGpYTEMyUXBHcU5qNmFuM3FtODRPVFdtdzUzaGZSaGpZdEFfOUtmTW9ENzRndzlNUm13UnRsNzTSAWBBVV95cUxOWTNtRFh2dDZxVjRWS3V3RkxwRUJSVXctQlQxdGJmS25aNmZxUGdIUVZobGlCdHBEdmdhZEdmNmQtRjJKUHZZY2xMOEZNNWhqYmhyMXZRMXVEdnhQTHBpVEY?oc=5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:32"
    },
    {
      "source": "베타뉴스",
      "title_ko": "원·달러 환율, 다시 1360원대로...중동 리스크·美금리상승 이겨낸 수출업체 매도",
      "title_en": "",
      "summary_ko": "원·달러 환율, 다시 1360원대로...중동 리스크·美금리상승 이겨낸 수출업체 매도 베타뉴스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 베타뉴스뿐만 아니라 뉴데일리 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5aQU9XanFmdGtoQWM4VlhPX0hYVGtJTTZvMUJTYml1SnR0RWR1a1pCS0tyeTAtM2lnNVhaRjRQSERiMU83M25EM05qelIxaHBYbGtQRlZhWnQ3cTFpRWcteHY2STI?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5aQU9XanFmdGtoQWM4VlhPX0hYVGtJTTZvMUJTYml1SnR0RWR1a1pCS0tyeTAtM2lnNVhaRjRQSERiMU83M25EM05qelIxaHBYbGtQRlZhWnQ3cTFpRWcteHY2STI?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 02 Sep 2026 09:05:46 GMT",
      "related_articles": [
        {
          "source": "뉴데일리",
          "title_ko": "1500원 뚫었던 원·달러 환율, 1300원대 진입 … '원화 강세' 어디까지",
          "original_url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBRU0NkZTlUT2xTcUcwVW1aYzNzQllZdHBvUDVkc0h3VTg5elNYUHV1bFhLMkZHMXV4T2IzdWxMNHBxc3Y3aEdsT1Q2cHhkMWp2MEpSdFV5OEZIWU5PdTQyR1gxZlpKX3NmQW4yRC1OVHJYMzczVFBKdjJjZ9IBgAFBVV95cUxNMEZiQUo0bW9NTzljczFRcVlCXzZZX1BzS2owNUhveG9vZWtfbHhhUkFhZXFwREdhc0tac3VyN1lIR0xfNWp6M1FEUS1WY1dYYmNPZkxGRXNGYm94bFlpdDdtSU5tTmJyLVhPVFNjaVJUajh5OURXNmE0eHNaYkNScg?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBRU0NkZTlUT2xTcUcwVW1aYzNzQllZdHBvUDVkc0h3VTg5elNYUHV1bFhLMkZHMXV4T2IzdWxMNHBxc3Y3aEdsT1Q2cHhkMWp2MEpSdFV5OEZIWU5PdTQyR1gxZlpKX3NmQW4yRC1OVHJYMzczVFBKdjJjZ9IBgAFBVV95cUxNMEZiQUo0bW9NTzljczFRcVlCXzZZX1BzS2owNUhveG9vZWtfbHhhUkFhZXFwREdhc0tac3VyN1lIR0xfNWp6M1FEUS1WY1dYYmNPZkxGRXNGYm94bFlpdDdtSU5tTmJyLVhPVFNjaVJUajh5OURXNmE0eHNaYkNScg?oc=5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:32"
    },
    {
      "source": "대구MBC",
      "title_ko": "대구 기업 86% \"기준금리 인상, 경영에 부정적\"",
      "title_en": "",
      "summary_ko": "대구 기업 86% \"기준금리 인상, 경영에 부정적\" 대구MBC. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 대구MBC뿐만 아니라 경북신문, v.daum.net 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBwTnBnMmxoOHVmYjI3WkZ4Q3lqb0tNTTZ3eGNpYzA0MWhqamZkdGVDQTZLalAwcXZhbEJSQkFzcmpVanB1a1QteFZEeXc?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBwTnBnMmxoOHVmYjI3WkZ4Q3lqb0tNTTZ3eGNpYzA0MWhqamZkdGVDQTZLalAwcXZhbEJSQkFzcmpVanB1a1QteFZEeXc?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 02 Sep 2026 06:46:00 GMT",
      "related_articles": [
        {
          "source": "v.daum.net",
          "title_ko": "기업대출 70%가 변동금리…기준금리 인상에 TK 중기 ‘기존 빚’ 비상",
          "original_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9Bc1ptendEbEFlRU50Ny1NaUJ6YkVnZVBiZ0VKb1dWR2lRc2ppNm9heDdWekNpWFg5dkowd0l5X2lteTJXNWp4NEFLZ3VYU0E?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9Bc1ptendEbEFlRU50Ny1NaUJ6YkVnZVBiZ0VKb1dWR2lRc2ppNm9heDdWekNpWFg5dkowd0l5X2lteTJXNWp4NEFLZ3VYU0E?oc=5"
        },
        {
          "source": "매일일보",
          "title_ko": "8월 소비자물가 상승률 3.1% \"10월 기준금리 인상 여부 주목\"",
          "original_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE4tdDc1UmpmOWpQeWdtMHNNWEdVTG1yQVVfYmxPTWRjdWxicjJObjlIZHJTcUpjSjNCeHpMazNyRWxBOHJObVhTQ25qdHF5dUFxc29lUV9TdDRzMldfejYtWGZ2VE4?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE4tdDc1UmpmOWpQeWdtMHNNWEdVTG1yQVVfYmxPTWRjdWxicjJObjlIZHJTcUpjSjNCeHpMazNyRWxBOHJObVhTQ25qdHF5dUFxc29lUV9TdDRzMldfejYtWGZ2VE4?oc=5"
        },
        {
          "source": "경북신문",
          "title_ko": "대구기업 85.9%, 기준금리 인상으로 경영에 부정적",
          "original_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5aa2d4UzcxdTdWLW1Za2FPcGMxLTRiUjQtbU5jLU5RWlJRci1WSGd0aGZrQUFvWUQ5dW1nc09RSUd0LXJTNUxXUmZYNkx1djBaZUlpRERFR2w?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5aa2d4UzcxdTdWLW1Za2FPcGMxLTRiUjQtbU5jLU5RWlJRci1WSGd0aGZrQUFvWUQ5dW1nc09RSUd0LXJTNUxXUmZYNkx1djBaZUlpRERFR2w?oc=5"
        },
        {
          "source": "경북매일",
          "title_ko": "대구상의 “지역기업 86%, 기준금리 인상에 경영 부담”",
          "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBFQjZQSDZ3QzNadHNLZmNFN21tZ1lsOVo3eTFoWUNaRFlVZWdJc2lXX2JzSFNLWEVTTFJJMnd2ZUo4YUUwNG1PcGJHS3V2aVJVZjNBbGZ3OENVdw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBFQjZQSDZ3QzNadHNLZmNFN21tZ1lsOVo3eTFoWUNaRFlVZWdJc2lXX2JzSFNLWEVTTFJJMnd2ZUo4YUUwNG1PcGJHS3V2aVJVZjNBbGZ3OENVdw?oc=5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:32"
    },
    {
      "source": "글로벌이코노믹",
      "title_ko": "일본은행, 9월 금리 인상 검토… 기준금리 1.25% 유력",
      "title_en": "",
      "summary_ko": "일본은행, 9월 금리 인상 검토… 기준금리 1.25% 유력 글로벌이코노믹. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 글로벌이코노믹뿐만 아니라 연합뉴스, KBS 뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNc0YyeFJ6NkNoNlJGV2c2OGZ4dXJqX0JxLUNXM2JVc3BwMU5aOGhiUUJyeG9ncmVHMXRrMnVHYmg1LVNNdUpqUTlfNTB6MXJvSjdBeTlhQmlwOGZtR2pWLVlnNWExMVAzcEtVS21JRlAxUXJJR3d3VEVZUERyVUpGeXdRc3lKbUpq?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNc0YyeFJ6NkNoNlJGV2c2OGZ4dXJqX0JxLUNXM2JVc3BwMU5aOGhiUUJyeG9ncmVHMXRrMnVHYmg1LVNNdUpqUTlfNTB6MXJvSjdBeTlhQmlwOGZtR2pWLVlnNWExMVAzcEtVS21JRlAxUXJJR3d3VEVZUERyVUpGeXdRc3lKbUpq?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 02 Sep 2026 07:14:15 GMT",
      "related_articles": [
        {
          "source": "연합뉴스",
          "title_ko": "美 기준금리 인상 가능성에 국고채 금리↑…상승폭은 줄어(종합)",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1aRk9oR1BWMS0weEZ3Q2x2SHA4Ymp0dzhYMTZYekQtWUhKT3o2QmZtTTNFQWgtelo3d2FUSFMwa3NQVXVhRFNERFJsNlV1dHlwOUo2VFJWQ3ZMU00?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1aRk9oR1BWMS0weEZ3Q2x2SHA4Ymp0dzhYMTZYekQtWUhKT3o2QmZtTTNFQWgtelo3d2FUSFMwa3NQVXVhRFNERFJsNlV1dHlwOUo2VFJWQ3ZMU00?oc=5"
        },
        {
          "source": "신아일보",
          "title_ko": "연이은 기준금리 인상…주택시장 '거래 위축·양극화' 전망",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBzcFE2eWVmS0VfNWN3bnA2Tkt3dmRGVG9taUxTN19nUUhYOGZfbGcyVTJvTmM3elYwWkVETENFdHpKMk9WbV9nOUZvZm93ZlJxVHdkVlFDMTBSamlCOUl5czJoWTNQZUdNUVRvdEx4dWQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBzcFE2eWVmS0VfNWN3bnA2Tkt3dmRGVG9taUxTN19nUUhYOGZfbGcyVTJvTmM3elYwWkVETENFdHpKMk9WbV9nOUZvZm93ZlJxVHdkVlFDMTBSamlCOUl5czJoWTNQZUdNUVRvdEx4dWQ?oc=5"
        },
        {
          "source": "KBS 뉴스",
          "title_ko": "[경제톡톡] 한국은행 2달 연속 금리 인상…자산 배분 전략은?",
          "original_url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBXNnB0aDM1UlBpVnlDcUtMU1dsWU5OYWIwbGdMRHU1VW5BaTlIelF6UWZnbzU2RGduV1Jqem1EWFlVQ29QM1RJNmJHYXFONTZmVUxlUFRwRmVMWDNpWm1jMTVGdi1Cdw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBXNnB0aDM1UlBpVnlDcUtMU1dsWU5OYWIwbGdMRHU1VW5BaTlIelF6UWZnbzU2RGduV1Jqem1EWFlVQ29QM1RJNmJHYXFONTZmVUxlUFRwRmVMWDNpWm1jMTVGdi1Cdw?oc=5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:32"
    },
    {
      "source": "경상매일신문",
      "title_ko": "기준금리 인상이 기업에 미치는 영향·대응방안 조사",
      "title_en": "",
      "summary_ko": "기준금리 인상이 기업에 미치는 영향·대응방안 조사 경상매일신문. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 경상매일신문뿐만 아니라 연합뉴스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
      "related_articles": [
        {
          "source": "연합뉴스",
          "title_ko": "기준금리 인상에 주택 거래 위축...전월세 시장도 불안 전망",
          "original_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5RZ3ptV0pkWWJielVobEhLdlc5TlpES1E5RElqTVFSZk1sRG1ZbXRNQzV6TDlZQV9zRWFKOEI5Y1M3UGN4M3Z1T2dIZ1RkdWNpNTM1dlhNOVdwSkRKcTN4T9IBYEFVX3lxTE5RZ3ptV0pkWWJielVobEhLdlc5TlpES1E5RElqTVFSZk1sRG1ZbXRNQzV6TDlZQV9zRWFKOEI5Y1M3UGN4M3Z1T2dIZ1RkdWNpNTM1dlhNOVdwSkRKcTN4Tw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5RZ3ptV0pkWWJielVobEhLdlc5TlpES1E5RElqTVFSZk1sRG1ZbXRNQzV6TDlZQV9zRWFKOEI5Y1M3UGN4M3Z1T2dIZ1RkdWNpNTM1dlhNOVdwSkRKcTN4T9IBYEFVX3lxTE5RZ3ptV0pkWWJielVobEhLdlc5TlpES1E5RElqTVFSZk1sRG1ZbXRNQzV6TDlZQV9zRWFKOEI5Y1M3UGN4M3Z1T2dIZ1RkdWNpNTM1dlhNOVdwSkRKcTN4Tw?oc=5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:32"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "BOC, 기준금리 2.25%로 동결…7회 연속(상보)",
      "title_en": "",
      "summary_ko": "BOC, 기준금리 2.25%로 동결…7회 연속(상보) 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBEWEZaUzB2Tm5CSTJLYTJzRjRGYzNwOXluWENZVzBCVGs1RWRLcl9uMHZXbUlVUlhQRXlCMElMdUdOZGhVSm9odnp2X3Y5QVZxeHBiN3pTWmFybURvSkZXbldmVWo2UWVVUEE2cU9MbFA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBEWEZaUzB2Tm5CSTJLYTJzRjRGYzNwOXluWENZVzBCVGs1RWRLcl9uMHZXbUlVUlhQRXlCMElMdUdOZGhVSm9odnp2X3Y5QVZxeHBiN3pTWmFybURvSkZXbldmVWo2UWVVUEE2cU9MbFA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 02 Sep 2026 16:37:48 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-02 20:01:32"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "8월 소비자물가 3.1% 상승…근원물가 3.4%·생활물가 3.2%↑",
      "title_en": "",
      "summary_ko": "8월 소비자물가 3.1% 상승…근원물가 3.4%·생활물가 3.2%↑ 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스뿐만 아니라 매일경제 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5aQkItdVcxZWctS0ZTRU5sN3gzZkszUl9TUEJ4VjFzeVFITU82ZVlUeGpIUmJjVTFqeEpESW1fWGJ1WG5Vc2xDN1NQNW1naGdPX0VYRjdmeFowNjNQVHFDRzJSMXZoVTRQYkJnVUlEeXY?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5aQkItdVcxZWctS0ZTRU5sN3gzZkszUl9TUEJ4VjFzeVFITU82ZVlUeGpIUmJjVTFqeEpESW1fWGJ1WG5Vc2xDN1NQNW1naGdPX0VYRjdmeFowNjNQVHFDRzJSMXZoVTRQYkJnVUlEeXY?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Tue, 01 Sep 2026 23:00:00 GMT",
      "related_articles": [
        {
          "source": "매일경제",
          "title_ko": "[속보] 8월 소비자물가 상승률 3.1%…두 달 만에 다시 3%대",
          "original_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBaNklPN0t2ZllXNm50enphc0Y3M0M0ODhaM3ByanFHSFpyUmViSktJRTRNSzY1R1lZS2pDUmV5bFhRaHpBSUlUR3h4REozcEpiQVlFOQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBaNklPN0t2ZllXNm50enphc0Y3M0M0ODhaM3ByanFHSFpyUmViSktJRTRNSzY1R1lZS2pDUmV5bFhRaHpBSUlUR3h4REozcEpiQVlFOQ?oc=5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:32"
    },
    {
      "source": "Bloomberg",
      "title_ko": "AI 지출 모멘텀의 새로운 신호로 TSMC 매출 36% 급증",
      "title_en": "TSMC Sales Surge 36% in Fresh Sign of AI Spending Momentum",
      "summary_ko": "AI 지출 모멘텀의 새로운 신호로 TSMC 매출 36% 급증 Bloomberg.com. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
        },
        {
          "source": "Bloomberg",
          "title_ko": "TSMC, AI 수요에 대한 확신의 표시로 2026년 전망 상향",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNLW1Vcjk3TkZFc0RSVXQzaXcyTkEyM0ZIc0kteUQ2TjBYT3EwUGRuWlJmUWJTYnBYSXpGaXNkZzZZRHhkQmNHZnFvOHhHTmtUTFBIZDhmYWowR1BnSUdPcWVjb3k3WlFRenRmTUV1WnNrZkRyWFAxbmhpR2RuUkpqVDhxcU5zanpkVFV0Y2ItWUhLX2lDMVkwQV8za1Q2N2l6ajVNSXZxLW5hTS1PcmZxMjJjYUhWdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNLW1Vcjk3TkZFc0RSVXQzaXcyTkEyM0ZIc0kteUQ2TjBYT3EwUGRuWlJmUWJTYnBYSXpGaXNkZzZZRHhkQmNHZnFvOHhHTmtUTFBIZDhmYWowR1BnSUdPcWVjb3k3WlFRenRmTUV1WnNrZkRyWFAxbmhpR2RuUkpqVDhxcU5zanpkVFV0Y2ItWUhLX2lDMVkwQV8za1Q2N2l6ajVNSXZxLW5hTS1PcmZxMjJjYUhWdw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "전쟁 후 TSMC의 판매 추정치가 AI 수요를 감소시키지 못함",
          "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNQzk0SnlzendjeFVXVTVNaWs5aGx3UThMckp2MmtFMDdfMmF0eEYzMVlCel9fZ2NhaWd4WDJ0aGxKQ2p6SWNRR0dpQ3h1V1daOHNnX05HQXMxZUMwcVp0dzB5SVM3Rlh2MmtMcnVLQTBWd0s0MjFNYU5qcmgwUmRPaTJjT01sVnBDVk9pb18tZ2l5WlhBTDNCblNQdkF2bVdrSG5naEdxZG9QejlaSUwteVhn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxNQzk0SnlzendjeFVXVTVNaWs5aGx3UThMckp2MmtFMDdfMmF0eEYzMVlCel9fZ2NhaWd4WDJ0aGxKQ2p6SWNRR0dpQ3h1V1daOHNnX05HQXMxZUMwcVp0dzB5SVM3Rlh2MmtMcnVLQTBWd0s0MjFNYU5qcmgwUmRPaTJjT01sVnBDVk9pb18tZ2l5WlhBTDNCblNQdkF2bVdrSG5naEdxZG9QejlaSUwteVhn%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:39"
    },
    {
      "source": "더나은미래",
      "title_ko": "삼성전자·SK하이닉스, 중동발 악재에 4%대 동반 폭락",
      "title_en": "",
      "summary_ko": "삼성전자·SK하이닉스, 중동발 악재에 4%대 동반 폭락 더나은미래. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. 더나은미래뿐만 아니라 한국경제, 2news.co.kr 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1FMV9PUmVDRVBiQ1NnbjV2d0lIdlhucTdiYW1tcldsb0xPcktSc0dyQWx3OW16UVpfSlo2R01XSC1iRGd2MmY5TDFsS29FbzFmQ1E?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1FMV9PUmVDRVBiQ1NnbjV2d0lIdlhucTdiYW1tcldsb0xPcktSc0dyQWx3OW16UVpfSlo2R01XSC1iRGd2MmY5TDFsS29FbzFmQ1E?oc=5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 02 Sep 2026 09:15:00 GMT",
      "related_articles": [
        {
          "source": "2news.co.kr",
          "title_ko": "국제유가 폭등과 국채금리 상승에 삼성·SK하이닉스 4%대 급락",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5pRlpTanBkQ3dxVDFWaWRyemJGRDE4ekgxOGpVQlJrQkJkQ2oxMnQ0X1RyNVhBRTFCWk9NTEJvd3QtZU1ycTNRRGZSTEVCNXdyTzRjMmktQWZSOHNkMnphTS1rLXBnOEd1?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5pRlpTanBkQ3dxVDFWaWRyemJGRDE4ekgxOGpVQlJrQkJkQ2oxMnQ0X1RyNVhBRTFCWk9NTEJvd3QtZU1ycTNRRGZSTEVCNXdyTzRjMmktQWZSOHNkMnphTS1rLXBnOEd1?oc=5"
        },
        {
          "source": "한국경제",
          "title_ko": "SK하이닉스, 일본에 공장?...최태원 대답은",
          "original_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBQSzZvSVdCbE1la3hJeERNX0NkVXE1dmZwZm5iQVEyQVNFYmZBLW9VZmlYa1huLUZ5RF8wd1BwWUlqRTVmRER5bklsQzI5RWNTUzBUZWpwWGxOc2xqQk9xaWdnNk9YbWJwWjV3eA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBQSzZvSVdCbE1la3hJeERNX0NkVXE1dmZwZm5iQVEyQVNFYmZBLW9VZmlYa1huLUZ5RF8wd1BwWUlqRTVmRER5bklsQzI5RWNTUzBUZWpwWGxOc2xqQk9xaWdnNk9YbWJwWjV3eA?oc=5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:39"
    },
    {
      "source": "Reuters",
      "title_ko": "트럼프는 재정 자제를 약속했다. 대신 차입 비용이 증가하면서 부채가 40조 달러를 넘어섰습니다.",
      "title_en": "Trump pledged fiscal restraint. Instead, debt tops $40 trillion as borrowing costs rise",
      "summary_ko": "트럼프는 재정 자제를 약속했다. 대신 차입 비용이 증가하면서 부채가 40조 달러를 넘어섰습니다. 관련 핵심 동향이 발표되었습니다. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOWkE3SEY4Mk1STzZZZXp0NGtSNXh3NV96RVBHQTlqRGVGZml6YWRKaVdqRnZHN1N4LUJrdms4UG9zY0NLVFJiMnZqUkNad1A0YVUteGxNdVdHU2JLOUFPeVI4TmtQT2xmZUhWRmZrcVE1bUlpdXRFd2ZNSGJjQUMxNEVTa3FwYU9pcnFCa3RiemZoWU5hcjYzaXEzbDVBaDFqNGV0R1lLVXhYaVJmbWxHbkdUVW1rX21ubzM1UVl3?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivgFBVV95cUxOWkE3SEY4Mk1STzZZZXp0NGtSNXh3NV96RVBHQTlqRGVGZml6YWRKaVdqRnZHN1N4LUJrdms4UG9zY0NLVFJiMnZqUkNad1A0YVUteGxNdVdHU2JLOUFPeVI4TmtQT2xmZUhWRmZrcVE1bUlpdXRFd2ZNSGJjQUMxNEVTa3FwYU9pcnFCa3RiemZoWU5hcjYzaXEzbDVBaDFqNGV0R1lLVXhYaVJmbWxHbkdUVW1rX21ubzM1UVl3%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Wed, 02 Sep 2026 10:31:33 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "Nvidia는 월가 거대 기업과 파트너십을 맺고 AI 구축을 위해 5천억 달러를 모금했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNNC15TDEteDI0VXNtbnFkb016anJWMDJqVHRSTDlRNVNkTXFIS2NVWWlDVVVldmN1Qld0ZWIyeXowZ3d6WkFQR2YtQWN6SUU1Tzl3VFR2YmphekZzUWtCZGpsQmFWQVR4bzhEdGI1Tkxfby15cy1xVWVhWXYzQUU5WTlYWDRHc2d1azhzYXJaMHcyeGxJT0pBdU5RRXpfZG15QTJrdmRBd3hrSnlDLV9wTUdiU3U5NW5PYXBUbGJoZEdmVHBY?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMixAFBVV95cUxNNC15TDEteDI0VXNtbnFkb016anJWMDJqVHRSTDlRNVNkTXFIS2NVWWlDVVVldmN1Qld0ZWIyeXowZ3d6WkFQR2YtQWN6SUU1Tzl3VFR2YmphekZzUWtCZGpsQmFWQVR4bzhEdGI1Tkxfby15cy1xVWVhWXYzQUU5WTlYWDRHc2d1azhzYXJaMHcyeGxJT0pBdU5RRXpfZG15QTJrdmRBd3hrSnlDLV9wTUdiU3U5NW5PYXBUbGJoZEdmVHBY%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:42"
    },
    {
      "source": "Reuters",
      "title_ko": "베센트는 러시아 장관에게 우크라이나 전쟁이 끝날 때까지 경제적 구제가 없을 것이라고 말했다고 소식통은 전했다.",
      "title_en": "Bessent told Russian minister no economic relief until Ukraine war ends, source says",
      "summary_ko": "베센트는 러시아 장관에게 우크라이나 전쟁이 끝날 때까지 경제적 구제가 없을 것이라고 말했다고 소식통은 로이터에 말했습니다. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 Bloomberg, uatv.ua 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQNmFhem94cGh1dF9LbEJGWFptV094TFA2S0dwWFBadjFBTTdTa2p3a1RZMHY4UkVPeE5DVkVabG1JWVdtd19zSWg3MFVZZDFzUFJ1djd0UXFOQ1cyV2RmVkFhSWpKbFJvQlowUkp4Y29ndU5Pc3Z0b1VjVFFBOFpNMnBKQkx5d2RiS0Y2QWNaUFZVaE4xc0RFOTFBQ3VWemZSYVdXOUJiOVZsSU5TemRNdlM5T3BsZVprazgyejBR?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivgFBVV95cUxQNmFhem94cGh1dF9LbEJGWFptV094TFA2S0dwWFBadjFBTTdTa2p3a1RZMHY4UkVPeE5DVkVabG1JWVdtd19zSWg3MFVZZDFzUFJ1djd0UXFOQ1cyV2RmVkFhSWpKbFJvQlowUkp4Y29ndU5Pc3Z0b1VjVFFBOFpNMnBKQkx5d2RiS0Y2QWNaUFZVaE4xc0RFOTFBQ3VWemZSYVdXOUJiOVZsSU5TemRNdlM5T3BsZVprazgyejBR%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 31 Aug 2026 23:33:57 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "월요일에 이란 경제를 고립시키려는 미국의 계획을 자세히 설명할 예정",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPQnFHTUU1Y1hCWmJfYmVfM2VUdE5kR3czc0ZfRUFmMzNVWElXcTFvV096REotZHBIMi05REh6MU5PZk5GT0Z4YlFSTWVoZDVDaS1oTVpCMmVSSm9JQXA4SzU4ckZKRHB2dHBCSGY0S2NOa3BMMHdzX3M0ZXR6MWNHTE42V3BxTG5aY1d6SG53UjdFVmlBQjhxdFpRQ1BPWW5veGFLQnB4NzlPU3dMNkJaZk10dw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPQnFHTUU1Y1hCWmJfYmVfM2VUdE5kR3czc0ZfRUFmMzNVWElXcTFvV096REotZHBIMi05REh6MU5PZk5GT0Z4YlFSTWVoZDVDaS1oTVpCMmVSSm9JQXA4SzU4ckZKRHB2dHBCSGY0S2NOa3BMMHdzX3M0ZXR6MWNHTE42V3BxTG5aY1d6SG53UjdFVmlBQjhxdFpRQ1BPWW5veGFLQnB4NzlPU3dMNkJaZk10dw%3Foc%3D5"
        },
        {
          "source": "uatv.ua",
          "title_ko": "Bessent, 우크라이나와의 전쟁이 끝나기 전에 미국-러시아 거래 배제 — Reuters",
          "original_url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxObDRIQ3hwS2Vvc0cyZHczVE5mZG9lVmVLMC14dXFZc3ZkSjZBc3oxTTdDaXptb2NHakxPQWZQVVhHUl9aS1lVRXNRcmxNZ3hTQ2lpVGI1RWdiaEhWXzBPM05tQlRaT0plZmlVRmZKWjdYZ1VRRktJNlBaZ3pFRG1jODcyZUlLN1BzQ0N6VnpGUjFwT1hzQl9kVWZFdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimwFBVV95cUxObDRIQ3hwS2Vvc0cyZHczVE5mZG9lVmVLMC14dXFZc3ZkSjZBc3oxTTdDaXptb2NHakxPQWZQVVhHUl9aS1lVRXNRcmxNZ3hTQ2lpVGI1RWdiaEhWXzBPM05tQlRaT0plZmlVRmZKWjdYZ1VRRktJNlBaZ3pFRG1jODcyZUlLN1BzQ0N6VnpGUjFwT1hzQl9kVWZFdw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "베센트는 엔화가 '매우 억제적'이며 무질서하게 움직이지 않는다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOemhvR29KUUI0VU1FYmFvbE9CWHhadUtxNWsxQU5uSWxkdVNVNVFDQjhFOHgyaXRnbUFvTjBGd1lwSEtaTGFua0lzQ3B6c1J5enpTQmNaVUlRZEx1VHRfR25qdnRMRlU4bGZzb1h4LTdpdnFqSVJPd1dhZHBvcnZYNTRVM2w0eWdteU52ejJQdzlNaDBsQ2lzQTdkeUZCNjAzSnJIZWRaMUxIWkR0WkE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxOemhvR29KUUI0VU1FYmFvbE9CWHhadUtxNWsxQU5uSWxkdVNVNVFDQjhFOHgyaXRnbUFvTjBGd1lwSEtaTGFua0lzQ3B6c1J5enpTQmNaVUlRZEx1VHRfR25qdnRMRlU4bGZzb1h4LTdpdnFqSVJPd1dhZHBvcnZYNTRVM2w0eWdteU52ejJQdzlNaDBsQ2lzQTdkeUZCNjAzSnJIZWRaMUxIWkR0WkE%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-09-02 20:01:49"
    },
    {
      "source": "Bloomberg",
      "title_ko": "구리는 미국으로의 흐름이 시장을 강화함에 따라 $ 14,000에 가까워졌습니다.",
      "title_en": "Copper Marches Closer to $14,000 as Flows to US Tighten Market",
      "summary_ko": "구리는 미국으로의 자금 유입으로 시장이 14,000달러에 가까워졌습니다. Bloomberg.com. 빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다. Bloomberg에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxONU1WRFVQSTFqVFJnRHFJVnVzcFloRzdybUFtc3pUTktvM2tzRW9HYUwydnNxa2s3Y094QkVsNWxkNlhObFM4MzBPTEtqWGYxZkRabjkwY2dqTkFFd2RPbmxoVGh3ZDVCQmM1WGxWelY0bzlKOEM3a0ZiVWt4WkRXaDhLTUZEZkNDaWdmbG8wSmxlYmZTR1E3Z0tUMGFEOVM2eEFzOHFOSUVWLWJuMXBLc2Fn?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxONU1WRFVQSTFqVFJnRHFJVnVzcFloRzdybUFtc3pUTktvM2tzRW9HYUwydnNxa2s3Y094QkVsNWxkNlhObFM4MzBPTEtqWGYxZkRabjkwY2dqTkFFd2RPbmxoVGh3ZDVCQmM1WGxWelY0bzlKOEM3a0ZiVWt4WkRXaDhLTUZEZkNDaWdmbG8wSmxlYmZTR1E3Z0tUMGFEOVM2eEFzOHFOSUVWLWJuMXBLc2Fn%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Tue, 04 Aug 2026 07:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-09-02 20:01:51"
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
