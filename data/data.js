window.__BRIEFING_DATA__ = {
  "metadata": {
    "title": "글로벌 매크로 & 경제 모닝 브리핑",
    "updated_at": "2026-11-24 05:01:55",
    "date_str": "2026년 11월 24일 (화)",
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
      "price": 4.147,
      "previous_close": 4.122,
      "change": 0.025,
      "change_percent": 0.61,
      "display_price": "4.147%",
      "status": "up",
      "history": [
        4.122,
        4.125,
        4.138,
        4.145,
        4.147,
        4.122,
        4.147
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EIRX/",
      "updated_at": "2026-11-23 20:00:53"
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
      "price": 4.928,
      "previous_close": 5.154,
      "change": -0.226,
      "change_percent": -4.38,
      "display_price": "4.928%",
      "status": "down",
      "history": [
        5.154,
        5.121,
        5.103,
        5.066,
        5.052,
        4.912,
        4.928
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETNX/",
      "updated_at": "2026-11-23 20:00:53",
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
      "price": 5.3,
      "previous_close": 5.481,
      "change": -0.181,
      "change_percent": -3.3,
      "display_price": "5.300%",
      "status": "down",
      "history": [
        5.481,
        5.467,
        5.458,
        5.412,
        5.401,
        5.303,
        5.3
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ETYX/",
      "updated_at": "2026-11-23 20:00:53"
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
      "price": 104.354,
      "previous_close": 103.55,
      "change": 0.804,
      "change_percent": 0.78,
      "display_price": "104.35 pt",
      "status": "up",
      "history": [
        103.55,
        103.49,
        103.86,
        103.9,
        103.81,
        104.354
      ],
      "chart_url": "https://finance.yahoo.com/quote/DX-Y.NYB/",
      "updated_at": "2026-11-23 20:00:53"
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
      "price": 158.944,
      "previous_close": 159.875,
      "change": -0.931,
      "change_percent": -0.58,
      "display_price": "158.94엔",
      "status": "down",
      "history": [
        159.875,
        159.78,
        159.523,
        159.504,
        159.381,
        159.707,
        158.944
      ],
      "chart_url": "https://finance.yahoo.com/quote/JPY%3DX/",
      "updated_at": "2026-11-23 20:00:54"
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
      "price": 3641.0,
      "previous_close": 3853.0,
      "change": -212.0,
      "change_percent": -5.5,
      "display_price": "$3,641.00",
      "status": "down",
      "history": [
        3853.0,
        3864.2,
        3741.9,
        3685.5,
        3515.4,
        3641.0
      ],
      "chart_url": "https://finance.yahoo.com/quote/GC%3DF/",
      "updated_at": "2026-11-23 20:00:54"
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
      "price": 80.02,
      "previous_close": 85.72,
      "change": -5.7,
      "change_percent": -6.65,
      "display_price": "$80.02",
      "status": "down",
      "history": [
        85.72,
        86.01,
        83.26,
        83.21,
        83.98,
        80.02
      ],
      "chart_url": "https://finance.yahoo.com/quote/CL%3DF/",
      "updated_at": "2026-11-23 20:00:54"
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
      "price": 61253.88,
      "previous_close": 64893.945,
      "change": -3640.065,
      "change_percent": -5.61,
      "display_price": "$61,254",
      "status": "down",
      "history": [
        64893.945,
        62987.266,
        61901.82,
        58798.98,
        60094.09,
        61161.91,
        61253.879
      ],
      "chart_url": "https://finance.yahoo.com/quote/BTC-USD/",
      "updated_at": "2026-11-23 20:00:55"
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
      "price": 892.3,
      "previous_close": 303.6,
      "change": 588.7,
      "change_percent": 193.91,
      "display_price": "$892.3B (약 8,923억$)",
      "status": "up",
      "history": [
        51.0,
        22.1,
        921.2,
        891.2,
        304.7,
        303.6,
        892.3
      ],
      "chart_url": "https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance",
      "updated_at": "2026-11-23 20:00:55"
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
      "price": 7249.57,
      "previous_close": 7592.4,
      "change": -342.83,
      "change_percent": -4.52,
      "display_price": "7,249.57",
      "status": "down",
      "history": [
        7561.67,
        7416.59,
        7340.53,
        7323.63,
        7175.83,
        6910.39,
        7249.57
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EGSPC/",
      "updated_at": "2026-11-23 20:00:55"
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
      "price": 26756.545,
      "previous_close": 28289.19,
      "change": -1532.645,
      "change_percent": -5.42,
      "display_price": "26,756.54",
      "status": "down",
      "history": [
        27943.74,
        27197.15,
        27001.779,
        27116.26,
        26517.051,
        25028.98,
        26756.545
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ENDX/",
      "updated_at": "2026-11-23 20:00:55"
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
      "price": 9531.934,
      "previous_close": 10506.67,
      "change": -974.736,
      "change_percent": -9.28,
      "display_price": "9,531.93",
      "status": "down",
      "history": [
        10146.32,
        9610.65,
        9642.88,
        9652.8,
        9419.72,
        8408.59,
        9531.934
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5ESOX/",
      "updated_at": "2026-11-23 20:00:55"
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
      "price": 27.47,
      "previous_close": 19.3,
      "change": 8.17,
      "change_percent": 42.33,
      "display_price": "27.47",
      "status": "up",
      "history": [
        19.3,
        22.91,
        25.46,
        24.56,
        28.44,
        35.89,
        27.47
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EVIX/",
      "updated_at": "2026-11-23 20:00:56"
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
      "price": 1341.68,
      "previous_close": 1333.78,
      "change": 7.9,
      "change_percent": 0.59,
      "display_price": "1,341.68원",
      "status": "up",
      "history": [
        1333.78,
        1333.25,
        1335.67,
        1333.01,
        1330.4,
        1334.79,
        1341.68
      ],
      "chart_url": "https://finance.yahoo.com/quote/KRW%3DX/",
      "updated_at": "2026-11-23 20:00:56",
      "fx_averages": {
        "avg_1y": 1440.1,
        "avg_3y": 1402.1
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
      "price": 4708.54,
      "previous_close": 5342.73,
      "change": -634.19,
      "change_percent": -11.87,
      "display_price": "4,708.54",
      "status": "down",
      "history": [
        5290.53,
        5100.5,
        4968.48,
        5067.44,
        5137.89,
        4869.96
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKS11/",
      "updated_at": "2026-11-23 20:00:56"
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
      "price": 635.45,
      "previous_close": 696.53,
      "change": -61.08,
      "change_percent": -8.77,
      "display_price": "635.45",
      "status": "down",
      "history": [
        699.66,
        665.65,
        650.06,
        662.81,
        684.81,
        645.68
      ],
      "chart_url": "https://finance.yahoo.com/quote/%5EKQ11/",
      "updated_at": "2026-11-23 20:00:56"
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
      "updated_at": "2026-11-23 20:00:56"
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
      "updated_at": "2026-11-23 20:00:57"
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
      "price": 135.73,
      "previous_close": 145.38,
      "change": -9.65,
      "change_percent": -6.64,
      "display_price": "$135.73",
      "status": "down",
      "history": [
        142.78,
        136.55,
        135.32,
        136.73,
        134.59,
        123.26,
        135.73
      ],
      "chart_url": "https://finance.yahoo.com/quote/EWY/",
      "updated_at": "2026-11-23 20:00:57"
    }
  ],
  "news": [
    {
      "source": "Reuters",
      "title_ko": "연준(Fed)은 기준 금리를 낮추어 앞으로 추가 인하를 예고합니다. 미란은 반대한다",
      "title_en": "Fed lowers interest rates, signals more cuts ahead; Miran dissents",
      "summary_ko": "연준(Fed)은 기준 금리를 낮추어 앞으로 추가 인하를 예고합니다. 미란은 반대한다 로이터 통신. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQSWk3X1ZhUUtVZGRVanRTS2M5U0ItVGhtdDZwR0kwWFIyMDNOX3dERS1saXp3a0FBVGwyM290RDFrcUdHV3M3cGhmS3Vnc05LTDNMYlVsdVRacVVZMnpsejJpZlFkaTBlNFN6X055UG9ieU5URlhHNnJUREFBcXBWcUkzRkhHOGVOUGVsWGU0RHN5TGVRNFRwVVZnQ3RtajhVQVJ6Y0RCT0NaSmZqNGc?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxQSWk3X1ZhUUtVZGRVanRTS2M5U0ItVGhtdDZwR0kwWFIyMDNOX3dERS1saXp3a0FBVGwyM290RDFrcUdHV3M3cGhmS3Vnc05LTDNMYlVsdVRacVVZMnpsejJpZlFkaTBlNFN6X055UG9ieU5URlhHNnJUREFBcXBWcUkzRkhHOGVOUGVsWGU0RHN5TGVRNFRwVVZnQ3RtajhVQVJ6Y0RCT0NaSmZqNGc%3Foc%3D5",
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
          "title_ko": "연준(Fed)의 폴슨은 추가 금리 인상을 지지하며 공유된 이해가 지침보다 낫다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNaTBVRUlUTV9PeXd4LVVTV0s1WXhjN2NwOERhbDFORGsxOHUtUGdJRjNwSUFLbG5LRzgxUy1RRUJ2MWZKVnZqV096cWdqZUwtSDd3R0tRdXctWWk5X3hNV1FQdlJUY3ZzUWVjZF9Yc1BFUm5DU3pYQnl2TEhtVkdoRTNuY2dDcUZzSERnT3hwN1FPdjY1ZFFULVoxa2VxRmxWM0VXSUFnOU5IM09XTDZWUTJNT2ZuYWl0TU5tbw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxNaTBVRUlUTV9PeXd4LVVTV0s1WXhjN2NwOERhbDFORGsxOHUtUGdJRjNwSUFLbG5LRzgxUy1RRUJ2MWZKVnZqV096cWdqZUwtSDd3R0tRdXctWWk5X3hNV1FQdlJUY3ZzUWVjZF9Yc1BFUm5DU3pYQnl2TEhtVkdoRTNuY2dDcUZzSERnT3hwN1FPdjY1ZFFULVoxa2VxRmxWM0VXSUFnOU5IM09XTDZWUTJNT2ZuYWl0TU5tbw%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)이 만든 'Shock' 피규어? 이 경제에서?",
          "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQQ1N1UEpzQUo3X0NFTW1tdEhiWlRtQzFzVEdCa1R4V1hJbjc4VUo4cWxZdHZEdHVUT0JZWkIyMHdfSThfVUNPeFRKanpxTndYTnA2d1BwN0hyVWtCamhiYVRMYW1qTWxNMDkwa1ZMcF9pY0xWVHBxUDBrTWItX2trcTZxOHZiOWhGVVBSLWZNREh0QVJBRFhONThHRUs0WHhpNmZhTlFlSEJoaWRzU04xRzJKS0ZCYjFvSkZ0dQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxQQ1N1UEpzQUo3X0NFTW1tdEhiWlRtQzFzVEdCa1R4V1hJbjc4VUo4cWxZdHZEdHVUT0JZWkIyMHdfSThfVUNPeFRKanpxTndYTnA2d1BwN0hyVWtCamhiYVRMYW1qTWxNMDkwa1ZMcF9pY0xWVHBxUDBrTWItX2trcTZxOHZiOWhGVVBSLWZNREh0QVJBRFhONThHRUs0WHhpNmZhTlFlSEJoaWRzU04xRzJKS0ZCYjFvSkZ0dQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "연준(Fed), 금리 인하했지만 파월 이전은 2025년 마지막일 수도 있다고 시사",
          "original_url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxORUhPcmllZ2l6Zy1QYmNTUmpfX0RRQ2RHMjJkWUR3cGNwYUk1VjE5TDV6d3RVUXJzNHhEcmpmS1Uzd0h4YXdXNjV1dnotY19Gc0lfTTAwWkhLdVVfMGgxN1BlNGFodkxTZXB4dnZNMy1sX2w1Z2hDTEJrZWpqUjRId1dWbFBDTGhWSTNhdC1TRFo4UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMikgFBVV95cUxORUhPcmllZ2l6Zy1QYmNTUmpfX0RRQ2RHMjJkWUR3cGNwYUk1VjE5TDV6d3RVUXJzNHhEcmpmS1Uzd0h4YXdXNjV1dnotY19Gc0lfTTAwWkhLdVVfMGgxN1BlNGFodkxTZXB4dnZNMy1sX2w1Z2hDTEJrZWpqUjRId1dWbFBDTGhWSTNhdC1TRFo4UQ%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "연준(Fed)의 월러는 시스템에서 인플레이션을 '충격'시키려면 금리 인상이 필요할 수 있다고 말했습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNMURESHotYzFzck1UMzlCXzNKdkthQUVJNVFZOHNlaExhR3IxSjhsazlZSHphalJnMlQ2VjNqWkVnRm1OTWFfSHl5ZkRiQ2dQLTF3SVpua18yMXp1cWhyWnNEdWZGcmFZczd6MmRxTDhsc0xPRnprd0tLUjhLWGprdWVyUnNKMEFDZWxJM0tfQmdaQm1QT2FGMlU1eE5iRUl2TzZENVZtNHpJTUJ6ckhHbEljXzJfXzctdjR4Rl9UQ0tvUzhSTk9IX29KYkdvNlFBbHFWNzNpbXFIa3M?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMi2wFBVV95cUxNMURESHotYzFzck1UMzlCXzNKdkthQUVJNVFZOHNlaExhR3IxSjhsazlZSHphalJnMlQ2VjNqWkVnRm1OTWFfSHl5ZkRiQ2dQLTF3SVpua18yMXp1cWhyWnNEdWZGcmFZczd6MmRxTDhsc0xPRnprd0tLUjhLWGprdWVyUnNKMEFDZWxJM0tfQmdaQm1QT2FGMlU1eE5iRUl2TzZENVZtNHpJTUJ6ckhHbEljXzJfXzctdjR4Rl9UQ0tvUzhSTk9IX29KYkdvNlFBbHFWNzNpbXFIa3M%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:09"
    },
    {
      "source": "Reuters",
      "title_ko": "연준(Fed) 정책입안자들은 10월 인플레이션 위험에 초점을 맞추었으며, 일부에서는 더 큰 변화가 필요하다고 보고 있습니다.",
      "title_en": "Fed policymakers focused on inflation risks in October, with some seeing need for bigger rate hike",
      "summary_ko": "연준(Fed) 정책입안자들은 10월 인플레이션 위험에 초점을 맞추었으며, 일부에서는 더 큰 규모의 수영복 도입이 필요하다고 보고 있습니다. Reuters. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Reuters뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOQWp0U1B6TG9KQU5oY25mQTRtbk5hTUZxNnI3azdIZDNNcU9iN1hzSndVckt3eU5ReUZockwxa1JOMVYyNTQ5d281c3NnU1pEU3pKaEZMSUZEdFQ3bG9DaXk4Umx1NG5WQ3ZvMko2VzBYdlgwYUI0Rm9ud1kzU1VMeWdZNXlkd3FJWTBvc25qV1ROWDZubGV4SF9QUk1EcG9BWGprZzRxcU9xa2g5TmRiUDRqR0FoYmNreUNicmFiWQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivwFBVV95cUxOQWp0U1B6TG9KQU5oY25mQTRtbk5hTUZxNnI3azdIZDNNcU9iN1hzSndVckt3eU5ReUZockwxa1JOMVYyNTQ5d281c3NnU1pEU3pKaEZMSUZEdFQ3bG9DaXk4Umx1NG5WQ3ZvMko2VzBYdlgwYUI0Rm9ud1kzU1VMeWdZNXlkd3FJWTBvc25qV1ROWDZubGV4SF9QUk1EcG9BWGprZzRxcU9xa2g5TmRiUDRqR0FoYmNreUNicmFiWQ%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 19 Nov 2026 04:39:20 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "연준 쿡 \"높은 인플레이션 낮추려면 금리 인상 필요\"",
          "original_url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNV0pwMURCc1diYXRGTmtCaC0tNnZac3RIMEtTT1BCMGxpZ093OTRFdVJpRGx4TW5YRENNTWxpN0dYLTZpQ0ZXOC1sby1jNUtYbVNseHFWN2J3MGFuQjNwa3lOR2F4S1JicENRMzQ1ZWlDMkRyRzk5eG5IcVFpQXkyS0kzYU15a1RCWXNwWERBVFRmbUFZbE80WHhKUmVoejA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMinwFBVV95cUxNV0pwMURCc1diYXRGTmtCaC0tNnZac3RIMEtTT1BCMGxpZ093OTRFdVJpRGx4TW5YRENNTWxpN0dYLTZpQ0ZXOC1sby1jNUtYbVNseHFWN2J3MGFuQjNwa3lOR2F4S1JicENRMzQ1ZWlDMkRyRzk5eG5IcVFpQXkyS0kzYU15a1RCWXNwWERBVFRmbUFZbE80WHhKUmVoejA%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "일본의 핵심 인플레이션이 10월 가속화되면서 끌어들이는 기대감이 더욱 확고해졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNWFVlZ2VrLUVHQkxQZUFqNjM2LXUwZXVvLWM0bTJYbkdILVhXZUduWlo2SXF5dExsVkl5Z0Y0SFlud3ExT0JiN0Vrb0FYLWVMRnNoR2Z1a25tdmNIQ1diVU10cTYwNXZRaVFXblN5cHpXazNtVkdXbW5QdTljdDZDVzBoNWh0Q2p3QkRwMjI1cC1pcXN0QkhCXzY5N0VkV2xGWkNodTR3eTA3LTlCWXBnNFdibk9xRTVWa280?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiuwFBVV95cUxNWFVlZ2VrLUVHQkxQZUFqNjM2LXUwZXVvLWM0bTJYbkdILVhXZUduWlo2SXF5dExsVkl5Z0Y0SFlud3ExT0JiN0Vrb0FYLWVMRnNoR2Z1a25tdmNIQ1diVU10cTYwNXZRaVFXblN5cHpXazNtVkdXbW5QdTljdDZDVzBoNWh0Q2p3QkRwMjI1cC1pcXN0QkhCXzY5N0VkV2xGWkNodTR3eTA3LTlCWXBnNFdibk9xRTVWa280%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "J.P. Morgan, 연준(Fed)이 인플레이션 지속으로 향후 3차례 회의에서 금리 인상할 것으로 예상",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNWkZwc3MzeGxPMldOWGxwZnk4UFBSWGtfVC1pTnBnQXVRZzBrNTBzdGxCc05WSU5KNjVoTk1XSm82Q2UxSms1WnhkT05tTG5xU3JULWRtUTVOSlpmeXgyNTFWRVVOX1BTS3ZNaDZEendqbkJJNXlMSndLb0JiQjJ0dEhnMWs3bm5RX0hDNTZ4SVlaamJTU2ZDZVJ1VG8ycVpNdXR3NFdKMHhDVjdlUWMyWmhwVQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxNWkZwc3MzeGxPMldOWGxwZnk4UFBSWGtfVC1pTnBnQXVRZzBrNTBzdGxCc05WSU5KNjVoTk1XSm82Q2UxSms1WnhkT05tTG5xU3JULWRtUTVOSlpmeXgyNTFWRVVOX1BTS3ZNaDZEendqbkJJNXlMSndLb0JiQjJ0dEhnMWs3bm5RX0hDNTZ4SVlaamJTU2ZDZVJ1VG8ycVpNdXR3NFdKMHhDVjdlUWMyWmhwVQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)의 폴슨, 인플레이션 완화를 위한 고의적인 금리 인상 주장",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOVzNrVGozWDhWTXBGWDE1dEt5SlgtZElGUWtERk03U3ZrQ1g1aXg1dUpWZ1ZkMUJsdFNwZ3lSeGNKTDNkajMyZEVOWHA2anFINmJYWHUzY2FUMk9vZ0pxcEJjS3Q1OWpnYzV1VnRZaWJtaDZLWThERzhoenZvbUdzMlFtUzluSDNkNXpteDZzQTl1NDNnbjgwR3dXaXpIYnlIQ1dDYmtEdW5XT0ZDY1MyWGQ5Y2U1UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxOVzNrVGozWDhWTXBGWDE1dEt5SlgtZElGUWtERk03U3ZrQ1g1aXg1dUpWZ1ZkMUJsdFNwZ3lSeGNKTDNkajMyZEVOWHA2anFINmJYWHUzY2FUMk9vZ0pxcEJjS3Q1OWpnYzV1VnRZaWJtaDZLWThERzhoenZvbUdzMlFtUzluSDNkNXpteDZzQTl1NDNnbjgwR3dXaXpIYnlIQ1dDYmtEdW5XT0ZDY1MyWGQ5Y2U1UQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:11"
    },
    {
      "source": "Bloomberg",
      "title_ko": "경제학자들은 연준(Fed)이 금리 인상에 대한 기대를 저버리는 것으로 보고 있습니다.",
      "title_en": "Economists See Fed Defying Expectations for Rate Hikes",
      "summary_ko": "경제학자들은 연준(Fed)이 금리 인상에 대한 기대를 무시한다고 본다 Bloomberg.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg뿐만 아니라 CNBC, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOaGN6aS00aUNHRFNQTVIyZm5MZ2l3cXNrUERERGNKT1BUQXp3eGxnejZSUFM0eXdmN0djUF91V1QyWWZ6SXZsX3FfU0lYSF9IcUJ3LVQ3Rllwd0Q3bEw3VFN4dGxJQUFqLVV1WDZIWnVEamlEOWxQa3Rad0lKc1pvWGxjb3B6bHhLM2E5eWN5RWpja0c4VDA5TnhuX19CQjNGZS1GUWtTY3A1QXFQbVcwalBB?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisgFBVV95cUxOaGN6aS00aUNHRFNQTVIyZm5MZ2l3cXNrUERERGNKT1BUQXp3eGxnejZSUFM0eXdmN0djUF91V1QyWWZ6SXZsX3FfU0lYSF9IcUJ3LVQ3Rllwd0Q3bEw3VFN4dGxJQUFqLVV1WDZIWnVEamlEOWxQa3Rad0lKc1pvWGxjb3B6bHhLM2E5eWN5RWpja0c4VDA5TnhuX19CQjNGZS1GUWtTY3A1QXFQbVcwalBB%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Fri, 11 Sep 2026 07:00:00 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "9월 연준(Fed) 결정은 이제 Warsh 이후에 등장 확률이 증가함에 따라 동전 뒤집기입니다.",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNZWlrekRPMjZoeC1sSXNwR29MZy1pT0w2UTVRcC1JdjUzUTZDaTFkWi1DTVEtVlJzU1JHd3ZTMUhQLTBJMjV0cUU2MWdsRGphU0F3UE9NbGUtcFVUcE1FZGZFNjczSVN5WnM2NF9BUFhKUVRMbjhJMXQ1ZjhUMlhLV2xxOE04eEY1Z0F0am5qNXZacFRrQkJ2dDhnY3NNSWFfTUxCd3RR0gGrAUFVX3lxTE1iME12QXVKVkQ4QTJVSHg1WGpwd0cwZEZCQkt2eEdlQy12dldQUmpEZEp0bkFsVEJZTG1GRFRWSmJIbExpS3lSS3lYeHBEbzNKVWYyOU9SeW5pTUZNcGVMOUNFb3hya3lPaVFSVFh5TXp2SXJ2QjBkOS0wY3dvZzl1V21tQ2xXNUQ1R0VUWG9PWWo1M25aNG5ZdHNhSU9kNDVvOVVrOF80SXN3UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxNZWlrekRPMjZoeC1sSXNwR29MZy1pT0w2UTVRcC1JdjUzUTZDaTFkWi1DTVEtVlJzU1JHd3ZTMUhQLTBJMjV0cUU2MWdsRGphU0F3UE9NbGUtcFVUcE1FZGZFNjczSVN5WnM2NF9BUFhKUVRMbjhJMXQ1ZjhUMlhLV2xxOE04eEY1Z0F0am5qNXZacFRrQkJ2dDhnY3NNSWFfTUxCd3RR0gGrAUFVX3lxTE1iME12QXVKVkQ4QTJVSHg1WGpwd0cwZEZCQkt2eEdlQy12dldQUmpEZEp0bkFsVEJZTG1GRFRWSmJIbExpS3lSS3lYeHBEbzNKVWYyOU9SeW5pTUZNcGVMOUNFb3hya3lPaVFSVFh5TXp2SXJ2QjBkOS0wY3dvZzl1V21tQ2xXNUQ1R0VUWG9PWWo1M25aNG5ZdHNhSU9kNDVvOVVrOF80SXN3UQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "연준(Fed)의 인플레이션 싸움에 추가 인상이 필요할 수 있음을 시청하세요",
          "original_url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPbXZDS0RPQmNCdFFFZjNTWUhMWV9EQ3JIQnM2eDg2dVB0T2RYVmRaTmtKeUhrNDdCREVTMld5Wm9vZXJEZEZJN0huVUxRQmROOGxwVURXY3dROEpFMGZ2dnVUR21UWWcwOHdzalRjMm83X243Z1VObU11dHlmLU5DVUdLVm9jbUYtdnl3THVlUkltSWRtNzBuc0t5YzR4RmNQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMioAFBVV95cUxPbXZDS0RPQmNCdFFFZjNTWUhMWV9EQ3JIQnM2eDg2dVB0T2RYVmRaTmtKeUhrNDdCREVTMld5Wm9vZXJEZEZJN0huVUxRQmROOGxwVURXY3dROEpFMGZ2dnVUR21UWWcwOHdzalRjMm83X243Z1VObU11dHlmLU5DVUdLVm9jbUYtdnl3THVlUkltSWRtNzBuc0t5YzR4RmNQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:14"
    },
    {
      "source": "Wall Street Journal",
      "title_ko": "연준(Fed)에 이어 재무 담당자의 플레이북: 은행에 예금 지불 요청",
      "title_en": "A Treasurer’s Playbook Following a Fed Rate Hike: Ask Banks to Pay Up for Deposits",
      "summary_ko": "연준(Fed)에 따른 재무 담당자 플레이북: 은행에 예금 지불 요청 WSJ. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Wall Street Journal뿐만 아니라 Bloomberg, CNBC 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOdlUtTGRpNGc0NGdBUGhlLTYwN3JhSVR3bnlFWUZ2Y3ptMzBNdGc5dmpXZ1RqMlNNT0wwVDVzeEJRMFJHdEVRcHNOV3V6U0I5VzJHWHlSTDR6MlZFanhLdUwxcGxWNkh0dmR5RGRxd2t4QnBPdXpTZVc2b3VwMlQ1dm9peG1aaUtZU2JrTloxb3dxVnNLdHkwNldYcUJXRExOQUVsaWpDeS1NZkk3VWhCM2VYSUlmd1lncDFIb2dn?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivgFBVV95cUxOdlUtTGRpNGc0NGdBUGhlLTYwN3JhSVR3bnlFWUZ2Y3ptMzBNdGc5dmpXZ1RqMlNNT0wwVDVzeEJRMFJHdEVRcHNOV3V6U0I5VzJHWHlSTDR6MlZFanhLdUwxcGxWNkh0dmR5RGRxd2t4QnBPdXpTZVc2b3VwMlQ1dm9peG1aaUtZU2JrTloxb3dxVnNLdHkwNldYcUJXRExOQUVsaWpDeS1NZkk3VWhCM2VYSUlmd1lncDFIb2dn%3Foc%3D5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 17 Sep 2026 11:16:49 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "트레이더들이 니어에 베팅함에 따라 금 반등",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQVy1Pa3puQ1RUS0xLT3pTdTBrdUc0Q0J4TkFqMW81cXpOdUpQSU9LV2wtNlJIS19wOG9uMEVEUlZkZUNIQXJBcXdNeWdaV0JiXzF4WGluNWtSaVU4T09reFVtYkc0dXJOZkFLXzFMUGNzOVl1SHRVaG5PR3dvVnpwR3VTbGJibEloRHVzcjQxYWc5UWxZdWR5OWdmdGE5UTh0c1NSRF9vc09YUk1aVHNFNmFVZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxQVy1Pa3puQ1RUS0xLT3pTdTBrdUc0Q0J4TkFqMW81cXpOdUpQSU9LV2wtNlJIS19wOG9uMEVEUlZkZUNIQXJBcXdNeWdaV0JiXzF4WGluNWtSaVU4T09reFVtYkc0dXJOZkFLXzFMUGNzOVl1SHRVaG5PR3dvVnpwR3VTbGJibEloRHVzcjQxYWc5UWxZdWR5OWdmdGE5UTh0c1NSRF9vc09YUk1aVHNFNmFVZw%3Foc%3D5"
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
      "crawled_at": "2026-11-23 20:01:15"
    },
    {
      "source": "한국경제",
      "title_ko": "증시 흔들려도 금리 인상?…'물가잡기'와 '금융안정’ 별도 관리하나 [심성미의 중앙은행 워치]",
      "title_en": "",
      "summary_ko": "증시 흔들려도 금리 인상?…'물가잡기'와 '금융안정’ 별도 관리하나 [심성미의 중앙은행 워치] 한국경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 한국경제뿐만 아니라 블루밍비트 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5VcHpqT1J5UkZpLVBkYTN3Y0JOa2RWTXNSWlFqODJrTlJ2NmtaMHhzSHB6VUJhTGpPdUZ1MXhyZWh1akR0Smt0aXAyazVKbEhJMzF0WnkzdFpMUQ?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5VcHpqT1J5UkZpLVBkYTN3Y0JOa2RWTXNSWlFqODJrTlJ2NmtaMHhzSHB6VUJhTGpPdUZ1MXhyZWh1akR0Smt0aXAyazVKbEhJMzF0WnkzdFpMUQ?oc=5",
      "category": "fed_liquidity",
      "section_no": 2,
      "section_title": "연준 정책 및 유동성 동향",
      "section_icon": "🏛️",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 23 Nov 2026 06:21:40 GMT",
      "related_articles": [
        {
          "source": "블루밍비트",
          "title_ko": "美 증시 폭락에 연준 '빅스텝' 전망 소멸…12월 금리 인상 기대 후퇴",
          "original_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE80LUQxTkZyNkh2dm5KYnQ2WklacXNlVW1xX0Z0Rmp1d3M4ZzU1SElxWG9kTWtkS0N5UldWblllM0U4UDJudFV6STFzNEFDcjNX?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE80LUQxTkZyNkh2dm5KYnQ2WklacXNlVW1xX0Z0Rmp1d3M4ZzU1SElxWG9kTWtkS0N5UldWblllM0U4UDJudFV6STFzNEFDcjNX?oc=5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:15"
    },
    {
      "source": "Reuters",
      "title_ko": "중동 위험, 기술 대패로 인해 아시아 주식에서 해외 자금 유출 급증",
      "title_en": "Foreign outflows from Asian equities surge on Middle East risks, tech rout",
      "summary_ko": "중동 위험으로 인해 아시아 주식에서 해외 자금 유출 급증 Reuters. 중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다. Reuters뿐만 아니라 CNBC, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
      "crawled_at": "2026-11-23 20:01:16"
    },
    {
      "source": "Bloomberg",
      "title_ko": "싱가포르 핵심 인플레이션은 전기 요금 인하로 1.5%로 완화됩니다.",
      "title_en": "Singapore Core Inflation Eases to 1.5% as Electricity Rates Cut",
      "summary_ko": "싱가포르 핵심 인플레이션은 전기 요금 인하로 1.5%로 완화됩니다. Bloomberg.com. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPVHRyb241NUFZbFRTUnBIUjZLZnBwQTh2dFZDbnpSblFMMGJTeDdLWEZaN0M2eGUtdzFsQkdmaDIzWlVWREZkVnlVZnBBa2tGN2tGSTBYQ1g4SENFMk1ObW92U084VUVUNmtmRE02SHJpOTZuR0oxOWhjSGNnOENaMlVwYVlyQW1kVWhMRDBzUmQ1VGRqZ21DSVhFV3AxN2ZBTEVVYnZkck8zcFZvdVNQZm1vNA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxPVHRyb241NUFZbFRTUnBIUjZLZnBwQTh2dFZDbnpSblFMMGJTeDdLWEZaN0M2eGUtdzFsQkdmaDIzWlVWREZkVnlVZnBBa2tGN2tGSTBYQ1g4SENFMk1ObW92U084VUVUNmtmRE02SHJpOTZuR0oxOWhjSGNnOENaMlVwYVlyQW1kVWhMRDBzUmQ1VGRqZ21DSVhFV3AxN2ZBTEVVYnZkck8zcFZvdVNQZm1vNA%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 23 Nov 2026 07:36:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "인플레이션",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNWHdTZjVkclV5cTh4dWx5MnZlUE1IR3U2RHJGb0d0MHVUZUszQWRaQV9MUG9IaE9INExSeXBkSUFCY2YwSWRvbHVWQ3dGWElBRUhyRk52VVpVVXNkNEE1NHZqbjYwZmxiRlpGYlpfM0JRR1NiZU04MzV2cERVLTRsZWhqcDlzZklDMWVMWldUeXFtZVk1VTkyZFduRHNVMHdmRlliLVhHMFNoRDBzVDZhX2JzSUFIZw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxNWHdTZjVkclV5cTh4dWx5MnZlUE1IR3U2RHJGb0d0MHVUZUszQWRaQV9MUG9IaE9INExSeXBkSUFCY2YwSWRvbHVWQ3dGWElBRUhyRk52VVpVVXNkNEE1NHZqbjYwZmxiRlpGYlpfM0JRR1NiZU04MzV2cERVLTRsZWhqcDlzZklDMWVMWldUeXFtZVk1VTkyZFduRHNVMHdmRlliLVhHMFNoRDBzVDZhX2JzSUFIZw%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "10월 싱가포르 근원 인플레이션율은 전망치보다 낮은 1.5%로 상승",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPTEpjSHFUY2R5RVllaGFGMWFJYjBMT1lCLXVLMTlBNUNQNmd0dnlyUmtoRjBTYW9GbFprdTBNbUo4eHZOUXo2R1JveWRnZmtrTzdBTG10aHE4a1FEUG5jeU9feFBCc2tSZmgxcm85UUsyTlAwNjhEOENDWDFIREJpZ0JlX3ZJTnNnUWlHdS12TWlzUDROVEllRExiMk9DSy1UNU1SZW9HREFTQzJaMm9pQw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxPTEpjSHFUY2R5RVllaGFGMWFJYjBMT1lCLXVLMTlBNUNQNmd0dnlyUmtoRjBTYW9GbFprdTBNbUo4eHZOUXo2R1JveWRnZmtrTzdBTG10aHE4a1FEUG5jeU9feFBCc2tSZmgxcm85UUsyTlAwNjhEOENDWDFIREJpZ0JlX3ZJTnNnUWlHdS12TWlzUDROVEllRExiMk9DSy1UNU1SZW9HREFTQzJaMm9pQw%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "일본 소비자 인플레이션으로 인해 속도가 강화됨",
          "original_url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOZ29mc3Fqd1V5SnRGYk9vckRWS2M1eUlWSHI3UVcxcHZ5Q1I3SnJkTWpKZ2twNnRFREl3QjFQa2tnUDdhUEZwQlQ2Sjg2QkVsQXN0bmtVV2I5dzR3RU5WNngwVllxRThldXlPbXQ5UU9PZUdvX204LUtGalhocnNBNmJBenYzSzhaR25xQy1ualAxM1VfY0FlN3JR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimgFBVV95cUxOZ29mc3Fqd1V5SnRGYk9vckRWS2M1eUlWSHI3UVcxcHZ5Q1I3SnJkTWpKZ2twNnRFREl3QjFQa2tnUDdhUEZwQlQ2Sjg2QkVsQXN0bmtVV2I5dzR3RU5WNngwVllxRThldXlPbXQ5UU9PZUdvX204LUtGalhocnNBNmJBenYzSzhaR25xQy1ualAxM1VfY0FlN3JR%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "4월 인플레이션은 휘발유 가격에 힘입어 3.8%까지 치솟았다",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9sSW4xOVBxcHVXMmN1RUJlbnI5VHc1b2JwQS1QMG10YUZKMy1mYUhSMFFMM01kV2pkbjBVSWNqenpRalFxSmJQWWZEc1F2TXlaakdabGxmTU1jZVJLZVdnUDlqLU1ra3Z5ZjQ2UWljSms?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMicEFVX3lxTE9sSW4xOVBxcHVXMmN1RUJlbnI5VHc1b2JwQS1QMG10YUZKMy1mYUhSMFFMM01kV2pkbjBVSWNqenpRalFxSmJQWWZEc1F2TXlaakdabGxmTU1jZVJLZVdnUDlqLU1ra3Z5ZjQ2UWljSms%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:18"
    },
    {
      "source": "Reuters",
      "title_ko": "미 국채/재무부장관 베센트가 이란의 위협 이후 군사기지로 이동했다고 소식통이 전했습니다.",
      "title_en": "US Treasury chief Bessent moved to military base after Iranian threats, sources say",
      "summary_ko": "미 국채/재무부장관 베센트가 이란의 위협 이후 군사기지로 이동했다고 소식통이 로이터통신에 말했다. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Reuters뿐만 아니라 Reuters, Al Arabiya English 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPT3lYOEw5X1FaSkpweDhiUmp3d0QybFR3ZU4xRl8wYXRRMS1CbzFFWENqLXNBVDZhOHBvSHdXSFh3NW5oNXEyUjRfWmFMT0g1bkV2NXRWWDc5UUpsaXVWLWxwQ0RLSkRkTW5jSWlkQ1p1dzFRa2pySzFVTklVb0k3TFo1bmZPb0lZTXVId1oyN2hCZGxkRmZua2R1ay1LN3VkNE1zb1FFNHUwNGNwSlBVdE5aMzFocFlGWTNINElWV3BvY21lOWRNTmxaNHB2dw?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizgFBVV95cUxPT3lYOEw5X1FaSkpweDhiUmp3d0QybFR3ZU4xRl8wYXRRMS1CbzFFWENqLXNBVDZhOHBvSHdXSFh3NW5oNXEyUjRfWmFMT0g1bkV2NXRWWDc5UUpsaXVWLWxwQ0RLSkRkTW5jSWlkQ1p1dzFRa2pySzFVTklVb0k3TFo1bmZPb0lZTXVId1oyN2hCZGxkRmZua2R1ay1LN3VkNE1zb1FFNHUwNGNwSlBVdE5aMzFocFlGWTNINElWV3BvY21lOWRNTmxaNHB2dw%3Foc%3D5",
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
          "source": "Al Arabiya English",
          "title_ko": "베센트 \"아직 미군기지에 거주하며 이란 압박할 것\"",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOc1RUaUVIWTF2RWZBa2dhUnBkOFhqNDlYeFZiMW1ONnJkX0tYSlQtTnAydVRSTEdQb3JFMGtTRmJ6d2VBQlJIUmZOaURyYlFNWHN6N3pIU3BTemxWUUN0N1h4a3c1Z1Q1djR4STg1dzEza01OckVQak1femVQZnNsYWdvUGRFQm1qWnA0UHNON2k5RENvTC1hbWVNRUhUb0g0TFJPR21MWnMzNFQ5Vlo1UmM3Q05wbVZzQlHSAb8BQVVfeXFMT09wY3RpUnBUeEs3OGl1NkZ3Z0VOelRXcnhPWS13Ym14TTAtRmxDRDBkdkM2VmZRMVRyODhhdl9yeVBucEJTaEZfUElnbC13dF9HUXpxRlFROHJ1TTFTTmVNbTI2UENPb0NFaTVIczNSdUg3Q0xpQnFNWlEwTWpCMkwyRXNYOG03UUw5ckVmXzFIeG83cU9kY2VtLVZXUTUxTVZZOVRQVm5MaVNzcnQwaFlKWk05SVBHbW1SVDI3UFE?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxOc1RUaUVIWTF2RWZBa2dhUnBkOFhqNDlYeFZiMW1ONnJkX0tYSlQtTnAydVRSTEdQb3JFMGtTRmJ6d2VBQlJIUmZOaURyYlFNWHN6N3pIU3BTemxWUUN0N1h4a3c1Z1Q1djR4STg1dzEza01OckVQak1femVQZnNsYWdvUGRFQm1qWnA0UHNON2k5RENvTC1hbWVNRUhUb0g0TFJPR21MWnMzNFQ5Vlo1UmM3Q05wbVZzQlHSAb8BQVVfeXFMT09wY3RpUnBUeEs3OGl1NkZ3Z0VOelRXcnhPWS13Ym14TTAtRmxDRDBkdkM2VmZRMVRyODhhdl9yeVBucEJTaEZfUElnbC13dF9HUXpxRlFROHJ1TTFTTmVNbTI2UENPb0NFaTVIczNSdUg3Q0xpQnFNWlEwTWpCMkwyRXNYOG03UUw5ckVmXzFIeG83cU9kY2VtLVZXUTUxTVZZOVRQVm5MaVNzcnQwaFlKWk05SVBHbW1SVDI3UFE%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "미 국채/재무부 수장 베센트, 미국의 금융력을 외교 정책 도구로 활용하는 것을 지지",
          "original_url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPdVVwZ0p3QWZmMDNKdXYxdTZPRXZtaWo2bmlqMnFDYWI0QXB0SlBPbHZuMl9QY1djNEV6VklBc19PZ01CQzlWT2VxU3YwM0lLeUw2Qm5QbGRRQ2h1b01ELVhMZmRJd2NIZk92bDU5SkpxNkZCanB4OER3UXRJNm0ySGRoUjJYTmxWQllVczhBOUN4Q0ZBN083Z1lEVmxwMkJpZjhYV1BCZ1hxSmUwX0ZYcjBlZnp1MVBfS3c?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiugFBVV95cUxPdVVwZ0p3QWZmMDNKdXYxdTZPRXZtaWo2bmlqMnFDYWI0QXB0SlBPbHZuMl9QY1djNEV6VklBc19PZ01CQzlWT2VxU3YwM0lLeUw2Qm5QbGRRQ2h1b01ELVhMZmRJd2NIZk92bDU5SkpxNkZCanB4OER3UXRJNm0ySGRoUjJYTmxWQllVczhBOUN4Q0ZBN083Z1lEVmxwMkJpZjhYV1BCZ1hxSmUwX0ZYcjBlZnp1MVBfS3c%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:20"
    },
    {
      "source": "Bloomberg",
      "title_ko": "체코 경제가 스태그플레이션 충격에 직면했다고 정책 입안자 Seidler가 말했습니다.",
      "title_en": "Czech Economy Facing Stagflation Shock, Policymaker Seidler Says",
      "summary_ko": "체코 경제가 스태그플레이션 충격에 직면했다고 정책 입안자 Seidler가 Bloomberg.com에 말했습니다. 미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다. Bloomberg뿐만 아니라 Bloomberg, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQY0M2UWJqTkU1c18tNW96MWJGNnFudDJHQVptLXAzYmFrNmVYS3k1eVhDRjFTSHl3NV9JbkFoMHVFUVllZWpnT3pmVlFBMUl4NUdOTWk5Z1hNU21mQ1JtMWRmUXJUMm90UC1uWmFwcXlNMEI4NmtHSzlZeTlWRUYxd3RvX29JbloyeXJ0VF9ORUhMLU1TenhtVXFGaFlnbHd0Y1VsYTZUNUlZWXhDa2pYOFVTcWY?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxQY0M2UWJqTkU1c18tNW96MWJGNnFudDJHQVptLXAzYmFrNmVYS3k1eVhDRjFTSHl3NV9JbkFoMHVFUVllZWpnT3pmVlFBMUl4NUdOTWk5Z1hNU21mQ1JtMWRmUXJUMm90UC1uWmFwcXlNMEI4NmtHSzlZeTlWRUYxd3RvX29JbloyeXJ0VF9ORUhMLU1TenhtVXFGaFlnbHd0Y1VsYTZUNUlZWXhDa2pYOFVTcWY%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Sun, 22 Nov 2026 13:02:00 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "경제학자들은 지수 점검 후 인도 인플레이션에 대해 더 정확해졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQaU9lRVdvMm5sWWZWbE1EYnpGTWxZaWVKajF2SDljbGRGSlcwZkFHZGZraU5CSUtqbERkTGN3UncxYktuZ1B3WHhfSDg4eDd0YkhkSzN0bVhsZFQzYXhNWmw3OVNHNjRuYnFic1BmZGNSTWtVYXR3alo4Z0JVUGV4d3NyM2t4UWlUN3RsbmxaMjlkUXpuVGNVcWJPTnpUUEtOczJoVERRaFM2QkcxTkxSdU1TLWp1UQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxQaU9lRVdvMm5sWWZWbE1EYnpGTWxZaWVKajF2SDljbGRGSlcwZkFHZGZraU5CSUtqbERkTGN3UncxYktuZ1B3WHhfSDg4eDd0YkhkSzN0bVhsZFQzYXhNWmw3OVNHNjRuYnFic1BmZGNSTWtVYXR3alo4Z0JVUGV4d3NyM2t4UWlUN3RsbmxaMjlkUXpuVGNVcWJPTnpUUEtOczJoVERRaFM2QkcxTkxSdU1TLWp1UQ%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "IMF 총재는 글로벌 인플레이션으로 인해 많은 국가에서 긴축 통화 정책이 필요하다고 밝혔습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNek12QlczdG01emR1MWtEdU8zWXFZalNKUWE3cDR4Vm9YbFNVaU51Y3RxT0Ywak8yV2FrSUQxelVFRDBRZlFwblRqMWctbmw5TUFja2xjSEh3UW1PQUJtTEVmb0FkMVpoYkg0UWVFYkNOZXhSSU54RUJxOTVOdDNQaEk4N2FqUjdWQjNpSk1yZndSZjhzcURKc2dUT2RLOUVqb3dwUGExZG1KUm4tdk05VzBDN0N4SGhvbFdxZg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxNek12QlczdG01emR1MWtEdU8zWXFZalNKUWE3cDR4Vm9YbFNVaU51Y3RxT0Ywak8yV2FrSUQxelVFRDBRZlFwblRqMWctbmw5TUFja2xjSEh3UW1PQUJtTEVmb0FkMVpoYkg0UWVFYkNOZXhSSU54RUJxOTVOdDNQaEk4N2FqUjdWQjNpSk1yZndSZjhzcURKc2dUT2RLOUVqb3dwUGExZG1KUm4tdk05VzBDN0N4SGhvbFdxZg%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "RBA는 인플레이션, 일자리 상충관계 관리를 추구한다고 이사회 구성원은 말합니다.",
          "original_url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOQnhrbGhFcDBkUG5teTFYdVFqcGhZRm9HckFtWmJ4MF9UN0hFdjZSS19WaHQwYlplNEQ4Z2Eya18xZE90YjVWVHFobmRiNnpqRG9ZSVlfQUF3alZpbWlzUFlTOGZnd21tcGprcUs0WHhETlYwOHUxR19sbzJvOFRTU0EzeFM3ejRRTzBrY2I2azVKYktFLVJXRjEwUmgwNExiVFlDXzhsbHU1ZDYyWDBIclF1Zw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiswFBVV95cUxOQnhrbGhFcDBkUG5teTFYdVFqcGhZRm9HckFtWmJ4MF9UN0hFdjZSS19WaHQwYlplNEQ4Z2Eya18xZE90YjVWVHFobmRiNnpqRG9ZSVlfQUF3alZpbWlzUFlTOGZnd21tcGprcUs0WHhETlYwOHUxR19sbzJvOFRTU0EzeFM3ejRRTzBrY2I2azVKYktFLVJXRjEwUmgwNExiVFlDXzhsbHU1ZDYyWDBIclF1Zw%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:21"
    },
    {
      "source": "CNBC",
      "title_ko": "기준금리가 3주 만에 최고 수준으로 회복됨에 따라 모기지 수요가 감소했습니다.",
      "title_en": "Mortgage demand turns lower, as interest rates shoot back up to the highest level in three weeks",
      "summary_ko": "기준금리가 3주 만에 최고 수준으로 회복됨에 따라 모기지 수요가 낮아졌습니다. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. CNBC뿐만 아니라 Bloomberg, MarketWatch 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNNVdHSVg0NE1TLTgzdDFlZ2ZLR1lEdjF5TVZpZnpIejMxWnlLVjgwQThxRWREcmtVN3dUMEJqQ3V2dl9sSmMxRHJDX1V3MVVRQkZHXzh5TkJHOTZySl9tV083aUotcEoyZk9lWm1EbzF3dWc1U3Q0bnFEZ3h6X2FqbFlzZ2pUVnpYeEhQbHV1Ui00WmNsemFrUEpWREI3blhYNVZpSTZzU2hJdDRtdU9TMFdiNDN1bElrWHpySktxZTB3WVZpYXNPb3dWbVLSAdIBQVVfeXFMTmpLYlNVa0xLcTFMeUdYaHhSMGsyYnF5cjJoZGRCR1RYTXVkZEQ5N3hIdkR0bzM1YVZldXgzeS1BazVFdnRDSmhQbm16dmk0c0JYTGkwdVNWdHZ6eDZtWUM1bVBzVUZmWWFFblJWLUJ5VDZtal95NU5WcWpkdnJ2cE40VkVOeEZzdGxYZVJ2RkpMUWc2STNmdzdWYkdlazR4cEdaem5mX0Jjc1ZuaEV1ZVMxU29XamhaTDc4M3F2Y2VaM19qNTBJcUhFVW8wS3kxZ3dn?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMizAFBVV95cUxNNVdHSVg0NE1TLTgzdDFlZ2ZLR1lEdjF5TVZpZnpIejMxWnlLVjgwQThxRWREcmtVN3dUMEJqQ3V2dl9sSmMxRHJDX1V3MVVRQkZHXzh5TkJHOTZySl9tV083aUotcEoyZk9lWm1EbzF3dWc1U3Q0bnFEZ3h6X2FqbFlzZ2pUVnpYeEhQbHV1Ui00WmNsemFrUEpWREI3blhYNVZpSTZzU2hJdDRtdU9TMFdiNDN1bElrWHpySktxZTB3WVZpYXNPb3dWbVLSAdIBQVVfeXFMTmpLYlNVa0xLcTFMeUdYaHhSMGsyYnF5cjJoZGRCR1RYTXVkZEQ5N3hIdkR0bzM1YVZldXgzeS1BazVFdnRDSmhQbm16dmk0c0JYTGkwdVNWdHZ6eDZtWUM1bVBzVUZmWWFFblJWLUJ5VDZtal95NU5WcWpkdnJ2cE40VkVOeEZzdGxYZVJ2RkpMUWc2STNmdzdWYkdlazR4cEdaem5mX0Jjc1ZuaEV1ZVMxU29XamhaTDc4M3F2Y2VaM19qNTBJcUhFVW8wS3kxZ3dn%3Foc%3D5",
      "category": "us_economy",
      "section_no": 3,
      "section_title": "미국 경제 관련 주요 뉴스 요약",
      "section_icon": "🇺🇸",
      "importance_score": 35,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Wed, 18 Nov 2026 12:33:50 GMT",
      "related_articles": [
        {
          "source": "Bloomberg",
          "title_ko": "Traders는 몇 년 동안 높은 수준을 유지하고 있는지에 베팅하고 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOendXZWRGalVfMHpfQTJhRGFXOXdyNW1hYmhhUDNXTWFfbWVLNy1mQmJhZEhKWDR1aVo0LTZ4Q3JhemNpQzR2M0hxNDlvanV3MmlVNVA3aEY0QkVtNEwzQWpDTWMwTWRfcUNmTngtMThtTjhHRGI2a3Z6VGhiWEIxZUNHdEFXT0R2R0F0S3BsLVlXY3M5SVcxUy1pYlVMak5Rd0hwVERQeF9DOHNzVjJQdw?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMisAFBVV95cUxOendXZWRGalVfMHpfQTJhRGFXOXdyNW1hYmhhUDNXTWFfbWVLNy1mQmJhZEhKWDR1aVo0LTZ4Q3JhemNpQzR2M0hxNDlvanV3MmlVNVA3aEY0QkVtNEwzQWpDTWMwTWRfcUNmTngtMThtTjhHRGI2a3Z6VGhiWEIxZUNHdEFXT0R2R0F0S3BsLVlXY3M5SVcxUy1pYlVMak5Rd0hwVERQeF9DOHNzVjJQdw%3Foc%3D5"
        },
        {
          "source": "MarketWatch",
          "title_ko": "트럼프는 신용 카드 제한을 적용할 수 있지만 휴일 쇼핑객은 아직 이에 의존해서는 안 됩니다.",
          "original_url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOLUlXTG9sd3NEVXM3UTVEdTJFczh4aWpuc0liSHlZWExHdUlBRTl6Z1c0dG9BZExJOXo5YlBFVE1oa3BhdEZxOHRHd0xhTEozMTdwbkFxaWJiTVJNdmRBeG4yalJiWk5vSUw3amQwQjViVDIxdDJQUjc3VktMemFEa1lEd0J5Ym4xX0ctSEhkNFZQd1FyV3NJRUFTSWVuS3FkZjdWaXZrUXJabDVsejA1LTVkTG5vY2ZRaGZlbzVBazRtMGc5ZTQxZUNYVmpabzYzRjRmM0t3?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMi1gFBVV95cUxOLUlXTG9sd3NEVXM3UTVEdTJFczh4aWpuc0liSHlZWExHdUlBRTl6Z1c0dG9BZExJOXo5YlBFVE1oa3BhdEZxOHRHd0xhTEozMTdwbkFxaWJiTVJNdmRBeG4yalJiWk5vSUw3amQwQjViVDIxdDJQUjc3VktMemFEa1lEd0J5Ym4xX0ctSEhkNFZQd1FyV3NJRUFTSWVuS3FkZjdWaXZrUXJabDVsejA1LTVkTG5vY2ZRaGZlbzVBazRtMGc5ZTQxZUNYVmpabzYzRjRmM0t3%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:25"
    },
    {
      "source": "Bloomberg",
      "title_ko": "97년 참사로 상처 입은 한국, 초조하게 24회 개막",
      "title_en": "Scarred by ‘97 Crash, Korea Nervously Opens 24-Hour Won Trading",
      "summary_ko": "97년 참사로 상처 입은 한국, 초조하게 24회 개막 관련 핵심 동향이 발표되었습니다. 국내 금융시장에 대한 외국인 자본 유출입 및 환율 안정성에 영향을 주는 주요 요인입니다. Bloomberg뿐만 아니라 Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "현대차證 \"코스피 외국인 매도세, 12월 중순부터 잦아들 수 있어\"",
      "title_en": "",
      "summary_ko": "현대차證 \"코스피 외국인 매도세, 12월 중순부터 잦아들 수 있어\" 연합인포맥스. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 연합인포맥스뿐만 아니라 뉴스1, 코리아리포트 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "위기의 코스피…외국인 ‘팔자’ 언제까지?",
          "original_url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1OWU9qVVZTc2QyZ3RoNGhUVXhPLTNnSDV6WThnRkpWMXJ6WFBPZG5rNmhUUjZmQU5rOEF3NzFMTGZGZktPQXlrS0EwOWtoZEREVkk4N3d4T0laeVNRUXhjendUSWNuZw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1OWU9qVVZTc2QyZ3RoNGhUVXhPLTNnSDV6WThnRkpWMXJ6WFBPZG5rNmhUUjZmQU5rOEF3NzFMTGZGZktPQXlrS0EwOWtoZEREVkk4N3d4T0laeVNRUXhjendUSWNuZw?oc=5"
        },
        {
          "source": "뉴스1",
          "title_ko": "'외국인 순매도' 코스피 4% 가까이 약세…코스닥 연저점 붕괴[장중시황]",
          "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9iWTM1OXVXWXVZcnBubjB6VHVIR0hReWo0bGxEbkkzOXc4ZDJvTm45eFhaQTBqWXp6X3E2Y2k5N05ZeDROaWZKWmNMOU5hcTFBYm1RVGVZXzlxVDA?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9iWTM1OXVXWXVZcnBubjB6VHVIR0hReWo0bGxEbkkzOXc4ZDJvTm45eFhaQTBqWXp6X3E2Y2k5N05ZeDROaWZKWmNMOU5hcTFBYm1RVGVZXzlxVDA?oc=5"
        },
        {
          "source": "코리아리포트",
          "title_ko": "코스피, 외국인 매도에도 1.4% 올라 5138 마감",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9Mb0Rmb211UlpmSncwWlV6V0lneHhIRHZ5eVRqM2tyM1FMM2phTk1lbFRnUUc3Z1RERVV2YjVVOUJacTI4R0F4N242TFRNWS1pdEtNUTFwcm1WWmx5bl9VdnJRcmJrU3QySXplUENDWmw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9Mb0Rmb211UlpmSncwWlV6V0lneHhIRHZ5eVRqM2tyM1FMM2phTk1lbFRnUUc3Z1RERVV2YjVVOUJacTI4R0F4N242TFRNWS1pdEtNUTFwcm1WWmx5bl9VdnJRcmJrU3QySXplUENDWmw?oc=5"
        },
        {
          "source": "Investing.com",
          "title_ko": "코스피, 외국인 매수에 5090선 회복…코스닥도 상승 By EBN",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE54QVJPcmhHT1hCTXpYMG5tTDRrZUlMbGNxblA1TV9fQ25rOEZZWlM2b0JXLUFnQi03M1ZJRkhnRW5iRTQxakllTk03WkVsYzZmRDRhVXdvbVNhVDBEMzBRSVpfbUYtbk9DSnBrSTBoUDc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE54QVJPcmhHT1hCTXpYMG5tTDRrZUlMbGNxblA1TV9fQ25rOEZZWlM2b0JXLUFnQi03M1ZJRkhnRW5iRTQxakllTk03WkVsYzZmRDRhVXdvbVNhVDBEMzBRSVpfbUYtbk9DSnBrSTBoUDc?oc=5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "10년 국채선물 반빅 가까이 강세폭 늘려…외국인 순매수 확대",
      "title_en": "",
      "summary_ko": "10년 국채선물 반빅 가까이 강세폭 늘려…외국인 순매수 확대 연합인포맥스. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. 연합인포맥스뿐만 아니라 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE43TXdvSmtVM040Ry1sOElIRVdIRElJVDJubzlTTUR1R3YwUzI1TDFnQmhtSXIwUmppbzQzeFctQnFOZ2RHWGlxRmh4ZmlLSW1vWWxVV3J2RV9qUk5SUEwtVWxscldocWplb29kcTJJNVI?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE43TXdvSmtVM040Ry1sOElIRVdIRElJVDJubzlTTUR1R3YwUzI1TDFnQmhtSXIwUmppbzQzeFctQnFOZ2RHWGlxRmh4ZmlLSW1vWWxVV3J2RV9qUk5SUEwtVWxscldocWplb29kcTJJNVI?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 45,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Thu, 19 Nov 2026 07:21:15 GMT",
      "related_articles": [
        {
          "source": "연합인포맥스",
          "title_ko": "국채선물 강세 출발…간밤 유가 급락·외국인 순매수",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1ySDdKek1NWFRWY1ZCLUJtRVZpMXk0cllKZFVfRVNXMFp5VGNjLVRrN1NCV29YTU5SY2JlQURpS18xMFJkQm5acFVjcHZXdTVzZ3daUzI1a1ZWVUdkQWxPRk9DSGhrcnFBdWpTN2tRbWk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1ySDdKek1NWFRWY1ZCLUJtRVZpMXk0cllKZFVfRVNXMFp5VGNjLVRrN1NCV29YTU5SY2JlQURpS18xMFJkQm5acFVjcHZXdTVzZ3daUzI1a1ZWVUdkQWxPRk9DSGhrcnFBdWpTN2tRbWk?oc=5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "KB Think",
      "title_ko": "메가톤급 외국인 배당에 달러/원 상방 압력 확대",
      "title_en": "",
      "summary_ko": "메가톤급 외국인 배당에 달러/원 상방 압력 확대 KB Think. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. KB Think에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1CRTE0VTFLaU9jWVZpMWc1c3Q5Y2dnSE5kOU1GaWlCVnZXR2w4endHX25MQlp5WUdpbkgzcWhCa2c2SGNNZDA0QWxYY3ZUeUxYRDJCajF3LTVWNDA4aUU2cllR?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1CRTE0VTFLaU9jWVZpMWc1c3Q5Y2dnSE5kOU1GaWlCVnZXR2w4endHX25MQlp5WUdpbkgzcWhCa2c2SGNNZDA0QWxYY3ZUeUxYRDJCajF3LTVWNDA4aUU2cllR?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sun, 22 Nov 2026 23:51:54 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "뉴스1",
      "title_ko": "외인 7거래일째 순매도…달러·원 1345.9원, 장중 1350원 돌파(종합)",
      "title_en": "",
      "summary_ko": "외인 7거래일째 순매도…달러·원 1345.9원, 장중 1350원 돌파(종합) 뉴스1. 외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다. 뉴스1뿐만 아니라 CBC뉴스, 조세일보 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1oWThZYmN5a0pZNVRnU19yN0RmQ3dEOGZEZGl0Q1NrbFVKZjFlaHp3bFc2OGZCN01yYVAwUUpUNlh0RV9NMEdOb1hMOEt4eUlPOEkyVDVScGloZXM?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1oWThZYmN5a0pZNVRnU19yN0RmQ3dEOGZEZGl0Q1NrbFVKZjFlaHp3bFc2OGZCN01yYVAwUUpUNlh0RV9NMEdOb1hMOEt4eUlPOEkyVDVScGloZXM?oc=5",
      "category": "foreign_flows_korea",
      "section_no": 4,
      "section_title": "한국 외국인 투자자 수급 및 국내 증시 영향",
      "section_icon": "🇰🇷",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 23 Nov 2026 07:22:56 GMT",
      "related_articles": [
        {
          "source": "CBC뉴스",
          "title_ko": "[환율마감] 증시 폭락·외인 이탈에 원화 약세 직격탄… 원/달러 환율 2주 만에 장중 1,350원대 돌파",
          "original_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1kTmdKdnAteWdIRDZZd2ZSREFMUGMzT2RuSzVlQmpHZGxoYy1sNFd2Q01UWUhqMFFfRHNELUlodWtlOTRoNkpiT0pVQ2owTDcwREhVdWtoaHc1X3pMVDFVV2R6akJ3VXhL?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1kTmdKdnAteWdIRDZZd2ZSREFMUGMzT2RuSzVlQmpHZGxoYy1sNFd2Q01UWUhqMFFfRHNELUlodWtlOTRoNkpiT0pVQ2owTDcwREhVdWtoaHc1X3pMVDFVV2R6akJ3VXhL?oc=5"
        },
        {
          "source": "조세일보",
          "title_ko": "원·달러 환율, 1333.7원…달러, 10월 FOMC 매파적 의사록에 강세",
          "original_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE41cUF3b3RyMlBaelYwMFJFZnJBSEtBQnpPckFxVWdaWG5kUVU2MGpueTd2d0NjcDNLTEk2OFRIMTJIOEFySFlZLUVsbVZJSzNyckJBM0E3M2ljRENwc0w0?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE41cUF3b3RyMlBaelYwMFJFZnJBSEtBQnpPckFxVWdaWG5kUVU2MGpueTd2d0NjcDNLTEk2OFRIMTJIOEFySFlZLUVsbVZJSzNyckJBM0E3M2ljRENwc0w0?oc=5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "이투데이",
      "title_ko": "\"이번엔 올린다\"⋯전문가 14인, 11월 기준금리 인상 의견 '한목소리' [금통위폴]",
      "title_en": "",
      "summary_ko": "\"이번엔 올린다\"⋯전문가 14인, 11월 기준금리 인상 의견 '한목소리' [금통위폴] 이투데이. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 이투데이뿐만 아니라 SBS Biz, 연합인포맥스 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE93cC1wcHNyUmpkeDV0WGF1SFdsVDlhbkZUU0phZ2dmcUVQNFplRW1vNDM5RWUxbmxTMXo1VkVLeG1RYnVaeTZGZHFkY3Q0QWl6WlI3cA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE93cC1wcHNyUmpkeDV0WGF1SFdsVDlhbkZUU0phZ2dmcUVQNFplRW1vNDM5RWUxbmxTMXo1VkVLeG1RYnVaeTZGZHFkY3Q0QWl6WlI3cA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 23 Nov 2026 05:17:00 GMT",
      "related_articles": [
        {
          "source": "허프포스트코리아",
          "title_ko": "트럼프 독려에도 부동산 시장은 얼어붙는다 : 12월 기준금리 인상 전망, 주택 건설·구매 심리 추가 위축 불가피",
          "original_url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE90NFI2V2xlVW1fbXNtVjk0bzRxM21PM2V0R2E2dzJFeGtqUDRRb2YwUW9WRXV1cThIVTFrMWdSSHlfMEVNR3RpMkRBanV4LXJJamRaUlFzUQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE90NFI2V2xlVW1fbXNtVjk0bzRxM21PM2V0R2E2dzJFeGtqUDRRb2YwUW9WRXV1cThIVTFrMWdSSHlfMEVNR3RpMkRBanV4LXJJamRaUlFzUQ?oc=5"
        },
        {
          "source": "SBS Biz",
          "title_ko": "[셀럽의 한 수] '검은 월요일'에 한은 기준금리 인상 예상…'주식 대응' 어떡하죠?",
          "original_url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE9jcXVKQktSbVRqN3Q1VjdHc0x1SFhDcFB1c08zWVEyOGlmUnJmVElzb2JXSW5CRWg5NDd5RUtCOEgyRFVyZnNScHVHcWttYUhVdmpB0gFYQVVfeXFMUE1tdlBEZ0ZRMEttTEFIS18tYmpFanExWUpDS2s0SnowOGljVGw4LVNCcTBONi01T2pxSlkzUXNjRUZ2NlRaNElmOGtUUmkyaDJmT3pmcmJtdw?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE9jcXVKQktSbVRqN3Q1VjdHc0x1SFhDcFB1c08zWVEyOGlmUnJmVElzb2JXSW5CRWg5NDd5RUtCOEgyRFVyZnNScHVHcWttYUhVdmpB0gFYQVVfeXFMUE1tdlBEZ0ZRMEttTEFIS18tYmpFanExWUpDS2s0SnowOGljVGw4LVNCcTBONi01T2pxSlkzUXNjRUZ2NlRaNElmOGtUUmkyaDJmT3pmcmJtdw?oc=5"
        },
        {
          "source": "연합인포맥스",
          "title_ko": "[인포맥스 POLL] 19명 전문가 중 18명 11월 금통위서 인상 전망",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5uZWczb3RLdmdSSktqcWxoQkZ3SF93MHRBaWNaVWpVbVJ5Z09Db0MwLTdNNGxlYTF3QzgtOHpweEI1c21RSVhuemdOQXZVMTZ3MVpLbmN6czJESUhuSC0zRDR1RU5QX2hhREtXRHhYbGU?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5uZWczb3RLdmdSSktqcWxoQkZ3SF93MHRBaWNaVWpVbVJ5Z09Db0MwLTdNNGxlYTF3QzgtOHpweEI1c21RSVhuemdOQXZVMTZ3MVpLbmN6czJESUhuSC0zRDR1RU5QX2hhREtXRHhYbGU?oc=5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "한국공공정책신문",
      "title_ko": "올해 마지막 금통위 26일, 기준금리 인상에 무게",
      "title_en": "",
      "summary_ko": "올해 마지막 금통위 26일, 기준금리 인상에 무게 한국공공정책신문. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 한국공공정책신문뿐만 아니라 월요신문, 천지일보 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiQ0FVX3lxTE9wcEVlYjI5N21RWl93RS1TeTVaenJtanpXTEFOQmVCNkp3X0syWFhkN3JtSEE2Qlh3aERwNXBKOU1RbzA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiQ0FVX3lxTE9wcEVlYjI5N21RWl93RS1TeTVaenJtanpXTEFOQmVCNkp3X0syWFhkN3JtSEE2Qlh3aERwNXBKOU1RbzA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 23 Nov 2026 09:16:20 GMT",
      "related_articles": [
        {
          "source": "조세금융신문",
          "title_ko": "[N위크] 올해 마지막 기준금리 인상?…디지털자산법·금융쇄신안 공개",
          "original_url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBnODRENGZMajJuTjlMeXNJMUFMYWxwSm40ZUpwQkdfR0FlWEZ0cVZaWWl1cXo2d0lSTEkxbmZsN1lPakU2Zl9WVTZ2SmJPeXZRYVNsNGhQWUJyOEQyaXl6c3F4SQ?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBnODRENGZMajJuTjlMeXNJMUFMYWxwSm40ZUpwQkdfR0FlWEZ0cVZaWWl1cXo2d0lSTEkxbmZsN1lPakU2Zl9WVTZ2SmJPeXZRYVNsNGhQWUJyOEQyaXl6c3F4SQ?oc=5"
        },
        {
          "source": "연합뉴스",
          "title_ko": "이번주 올해 마지막 한은 금통위…금리 인상에 무게",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5SRlRHcUJVOFpNYmNKaXlISmpRSjduRnQ1ZTF1ZEdTcFEwa1JIOEtmdzZTUDItUVBmam04UTV2ME9sTmxvY0o0dzJPVzNycGdaZkF3bGptT3E5T090MDZUTTlQRVhyblk?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5SRlRHcUJVOFpNYmNKaXlISmpRSjduRnQ1ZTF1ZEdTcFEwa1JIOEtmdzZTUDItUVBmam04UTV2ME9sTmxvY0o0dzJPVzNycGdaZkF3bGptT3E5T090MDZUTTlQRVhyblk?oc=5"
        },
        {
          "source": "천지일보",
          "title_ko": "올해 마지막 금통위, 한은 추가 금리 인상 나설 듯",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9TOXVYV2VSRkp0UVdmaTlXY1U3R3p0OXY0TExXWWt1N1lVbU5LVl9sVDdjanJiV1poaWlQRE84UVBfTV9DcXFhZVlEQUF1eTF5ZzBMci1ib3RoZ1JNYkxYZ0Z1MUJuRlltZ1E?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9TOXVYV2VSRkp0UVdmaTlXY1U3R3p0OXY0TExXWWt1N1lVbU5LVl9sVDdjanJiV1poaWlQRE84UVBfTV9DcXFhZVlEQUF1eTF5ZzBMci1ib3RoZ1JNYkxYZ0Z1MUJuRlltZ1E?oc=5"
        },
        {
          "source": "월요신문",
          "title_ko": "성장률·물가 부담 커진 한은...올해 마지막 금통위서 금리 인상할까",
          "original_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBtY3ZNZ0xnMTZhczc4aVM2ejZPUV9NWXMtU1ZUUzEzMnNVcHhidTNaWHg3QzRiaUYyRFRYUGlVWHJXbDRteVZrY09EMTZVTFdkbS1sZlhiYmNvcncwejRlSXVnQ0F3ZlU2RWc?oc=5",
          "translated_url": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBtY3ZNZ0xnMTZhczc4aVM2ejZPUV9NWXMtU1ZUUzEzMnNVcHhidTNaWHg3QzRiaUYyRFRYUGlVWHJXbDRteVZrY09EMTZVTFdkbS1sZlhiYmNvcncwejRlSXVnQ0F3ZlU2RWc?oc=5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "서울경제",
      "title_ko": "한은, 기준금리 인상 재개하나...美 PCE·성장률 관심 [한동훈의 위클리전망대]",
      "title_en": "",
      "summary_ko": "한은, 기준금리 인상 재개하나...美 PCE·성장률 관심 [한동훈의 위클리전망대] 서울경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 서울경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5wTG92WUFYMkx2RnBSMnRFcGdFcW5RM2ROZUtuUHl5OTR5QzVVYlJOZS1ZVXY1UFptNDk0Y2J5X2JDZlBoWVp4eHpJdFMwWXowbWfSAVNBVV95cUxPUk01TFpLWFh3bU5WLUtNcHlrdzNzdXlRSFFRMl85UG84S0UyaHpZZHRMWGc1anRvUGI0U2h4Y1d2VVN6a0J5czhETms2NjByaG1LNA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5wTG92WUFYMkx2RnBSMnRFcGdFcW5RM2ROZUtuUHl5OTR5QzVVYlJOZS1ZVXY1UFptNDk0Y2J5X2JDZlBoWVp4eHpJdFMwWXowbWfSAVNBVV95cUxPUk01TFpLWFh3bU5WLUtNcHlrdzNzdXlRSFFRMl85UG84S0UyaHpZZHRMWGc1anRvUGI0U2h4Y1d2VVN6a0J5czhETms2NjByaG1LNA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 30,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Sat, 21 Nov 2026 21:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "연합인포맥스",
      "title_ko": "S&P, 韓 내년 성장률 3.0%로 상향…\"기준금리 내년까지 3.25% 유지\"",
      "title_en": "",
      "summary_ko": "S&P, 韓 내년 성장률 3.0%로 상향…\"기준금리 내년까지 3.25% 유지\" 연합인포맥스. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 연합인포맥스에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE94LUI4UjlFdjRrN0N4ZU91ZEE3R2Z3YU5JQmZSWDVlUEVMMFkyOThXaUVhUXQxQkx0cGxBaFdINWNHbjNOWDgxemF4Rmxfdzdwb0hVQ09IdGxfQ1ZjWHVsYmJtZFY5T192cm82Qjg3Z3fSAXRBVV95cUxNOUFMUlNGQVUyUVljVjNDSUpodGdjU2dmOEZvYkVJNkpZeTVqS1FzamppTFl0WFl4VE9QYTgwR0RPeVUwMUhlcERET2p6RFhpeTh2MWp4Y3dobTBMWGkxZHpPcldtd3k1cDFDY2VwNjduNWJSSA?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE94LUI4UjlFdjRrN0N4ZU91ZEE3R2Z3YU5JQmZSWDVlUEVMMFkyOThXaUVhUXQxQkx0cGxBaFdINWNHbjNOWDgxemF4Rmxfdzdwb0hVQ09IdGxfQ1ZjWHVsYmJtZFY5T192cm82Qjg3Z3fSAXRBVV95cUxNOUFMUlNGQVUyUVljVjNDSUpodGdjU2dmOEZvYkVJNkpZeTVqS1FzamppTFl0WFl4VE9QYTgwR0RPeVUwMUhlcERET2p6RFhpeTh2MWp4Y3dobTBMWGkxZHpPcldtd3k1cDFDY2VwNjduNWJSSA?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Mon, 23 Nov 2026 06:21:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "한국경제",
      "title_ko": "P가 끌어올린 한국 경제, 그리고 최종 기준금리",
      "title_en": "",
      "summary_ko": "P가 끌어올린 한국 경제, 그리고 최종 기준금리 한국경제. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. 한국경제에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFB6U1Y1M1o5aUFzaU1QeFlvcVZ6NExxTU4yVXpSTVAzQndodGw2TjdJYkQxdjBmSlFMeVRWU2dibFV3YlQ0bVhRcjUwaWw5b3luaGV5M2NUSkI2Zw?oc=5",
      "translated_url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFB6U1Y1M1o5aUFzaU1QeFlvcVZ6NExxTU4yVXpSTVAzQndodGw2TjdJYkQxdjBmSlFMeVRWU2dibFV3YlQ0bVhRcjUwaWw5b3luaGV5M2NUSkI2Zw?oc=5",
      "category": "korea_economy",
      "section_no": 5,
      "section_title": "국내 경제 관련 주요 뉴스 요약",
      "section_icon": "📈",
      "importance_score": 25,
      "badge_label": "📌 체크",
      "badge_class": "tier-check",
      "pub_date": "Fri, 20 Nov 2026 08:00:00 GMT",
      "related_articles": [],
      "crawled_at": "2026-11-23 20:01:26"
    },
    {
      "source": "Reuters",
      "title_ko": "VIEW Nvidia, Jensen Huang을 CEO로 복귀시켜 기술 급증에 불을 붙였습니다",
      "title_en": "VIEW Nvidia reinstates Jensen Huang as CEO, igniting tech surge",
      "summary_ko": "VIEW Nvidia, Jensen Huang을 CEO로 복귀시켜 기술 급증에 불을 지폈습니다. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Reuters뿐만 아니라 Bloomberg, The Loadstar 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
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
          "title_ko": "황이 CEO로 복귀하면서 엔비디아 주가 급등을 지켜보세요",
          "original_url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQYWw4UFlXMHZDMGI2eWtpWVJkRXlkbkM1cjVwZURzMHFpOU1PSzliNW5PaE0weUoxRk1SaENQMVZPTFZzQmV5eWZNQmtJVkM3Zklhcl90cjcweG5CTE5hNHkwV1lVMHRTdzlfS0FORUFxUmhlNkFnRU9wdVZ2aS1RRk5nclBicFZjbTJrdXNVd0xVZDRkOXVjZDNqQXUtSzVJMUExUg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipAFBVV95cUxQYWw4UFlXMHZDMGI2eWtpWVJkRXlkbkM1cjVwZURzMHFpOU1PSzliNW5PaE0weUoxRk1SaENQMVZPTFZzQmV5eWZNQmtJVkM3Zklhcl90cjcweG5CTE5hNHkwV1lVMHRTdzlfS0FORUFxUmhlNkFnRU9wdVZ2aS1RRk5nclBicFZjbTJrdXNVd0xVZDRkOXVjZDNqQXUtSzVJMUExUg%3Foc%3D5"
        },
        {
          "source": "LinkedIn",
          "title_ko": "기술 매도세가 심화되면서 시장 급락 | #나스닥 Erases 2026 Gain 매도의 주요 이유: - Anthropic IPO를 위한 매도 - Nvidia를 둘러싼 문제 - 기술 수준 깨기 - 연준(Fed)에서 소개됨",
          "original_url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOVTBIRjJNVWNuVVAyNkVDbl9nZGxhbF9HNmQyNmFwcEVkRjF3NnREMzIzQkFMR1djWGpBSThIRWFUWmZGS0haM1ZRdks3RzZGdVBNNzdFOXV3dVJ5eE5vQWJ4YmZvcmlPQS0zRHIxeWExTV9MY0RqdGRqOFpnR3B1cUtod3lPWEdrUHpsSWVic1lFY0p2RmVJQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMimAFBVV95cUxOVTBIRjJNVWNuVVAyNkVDbl9nZGxhbF9HNmQyNmFwcEVkRjF3NnREMzIzQkFMR1djWGpBSThIRWFUWmZGS0haM1ZRdks3RzZGdVBNNzdFOXV3dVJ5eE5vQWJ4YmZvcmlPQS0zRHIxeWExTV9MY0RqdGRqOFpnR3B1cUtod3lPWEdrUHpsSWVic1lFY0p2RmVJQQ%3Foc%3D5"
        },
        {
          "source": "The Loadstar",
          "title_ko": "Reuters: Nvidia, Jensen Huang을 CEO로 복귀시켜 기술 급증에 불을 붙였습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOaUJZZFRsel9EUTBKMDh6RS1BT2xDLW83MmloWDhzOUlDbklIdGpwVElWclVUN25zaTRlem9sNERmRVNZYl9oV24taU10QlVROF85clh0SEhBclhxdFAtQ1ZHUV9ncjRSbW8yRnhTMWVIa0YtZkgwUUFpcnhqdkJES0NZSENiZXlpVG5xdjlIUUhEVEJI?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilAFBVV95cUxOaUJZZFRsel9EUTBKMDh6RS1BT2xDLW83MmloWDhzOUlDbklIdGpwVElWclVUN25zaTRlem9sNERmRVNZYl9oV24taU10QlVROF85clh0SEhBclhxdFAtQ1ZHUV9ncjRSbW8yRnhTMWVIa0YtZkgwUUFpcnhqdkJES0NZSENiZXlpVG5xdjlIUUhEVEJI%3Foc%3D5"
        },
        {
          "source": "Investing.com",
          "title_ko": "Nvidia, Jensen Huang을 CEO로 복귀시켜 기술 급증에 불을 붙임 By Reuters",
          "original_url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNcld2Y0VUcVBIT0dzdUNfTTVXR2wtQWpTalQ3bWoxRzBtQUVkYVJ3Uk5UdkQ1a3k2Vl94blVPdW1NaDZHLVVjdXEyZy0tT24zQXRuTVRTMWd1ci0zS2llbXh0amFtOFhrSC0zczh4eTV6SWs2ZVhsTmRFSFhMOE5vRGJhcExwOHFrdWo2b283cUo2d0pPQjl4bVpaV25vVEpHbjgxN1lQT2dtOHFVTWc?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMirgFBVV95cUxNcld2Y0VUcVBIT0dzdUNfTTVXR2wtQWpTalQ3bWoxRzBtQUVkYVJ3Uk5UdkQ1a3k2Vl94blVPdW1NaDZHLVVjdXEyZy0tT24zQXRuTVRTMWd1ci0zS2llbXh0amFtOFhrSC0zczh4eTV6SWs2ZVhsTmRFSFhMOE5vRGJhcExwOHFrdWo2b283cUo2d0pPQjl4bVpaV25vVEpHbjgxN1lQT2dtOHFVTWc%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:34"
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
          "source": "Investing.com",
          "title_ko": "엔비디아 곰은 황의 깜짝 복귀로 122억 달러의 타격을 입었다 By Reuters",
          "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQZDc0YUdNNFhwcEktaEtSNTV3aXlncFhteTA3N09Helc0ZUstSUZkMzV0cTlyQ3plYkFqdzFuVnU4WXhqQW1mZXRjVVM3eDVUal9PS0dQZmN0NzBTMXhZbVRMREFjZlZ6WkxhbGU3ZzVGcmlGN0t2eGhfeGVCMERxU3duN2ZiQ29CNnoyN1RzNGczSWUyUk5obGJLai05VER6UmYwV2pnRU1SdDRXVk5hUE45bWdvNDA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxQZDc0YUdNNFhwcEktaEtSNTV3aXlncFhteTA3N09Helc0ZUstSUZkMzV0cTlyQ3plYkFqdzFuVnU4WXhqQW1mZXRjVVM3eDVUal9PS0dQZmN0NzBTMXhZbVRMREFjZlZ6WkxhbGU3ZzVGcmlGN0t2eGhfeGVCMERxU3duN2ZiQ29CNnoyN1RzNGczSWUyUk5obGJLai05VER6UmYwV2pnRU1SdDRXVk5hUE45bWdvNDA%3Foc%3D5"
        },
        {
          "source": "Reuters",
          "title_ko": "황의 퇴임으로 엔비디아의 중국 내 수십억 달러 매출이 위협받는 이유",
          "original_url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPMzBhLWJfeFVoaXlNajJPVmVaNHl3bFFPR3lveEhDV3dlNXU3MTNlcm1MNVp0OGM5MmtvcmVxVHg2SXBCZ0U1WkdBX0NGYmNZR1NrUXI2MVZFdXQtQnlhUXN6bm9SRGJOSnYxb1QzRklGZWd1bm9tdnlSNnVGLUpLWllkZFB2MVF0UXd3T3NDbWRUQUtmVzZkUml4cXJjdmhXVXFkYWdLZ3o4TGI0T2tIZG5KMHZlSWpSczNIVg?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMivAFBVV95cUxPMzBhLWJfeFVoaXlNajJPVmVaNHl3bFFPR3lveEhDV3dlNXU3MTNlcm1MNVp0OGM5MmtvcmVxVHg2SXBCZ0U1WkdBX0NGYmNZR1NrUXI2MVZFdXQtQnlhUXN6bm9SRGJOSnYxb1QzRklGZWd1bm9tdnlSNnVGLUpLWllkZFB2MVF0UXd3T3NDbWRUQUtmVzZkUml4cXJjdmhXVXFkYWdLZ3o4TGI0T2tIZG5KMHZlSWpSczNIVg%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "Huang의 Nvidia 복귀는 나쁜 선례입니다",
          "original_url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNTE8wMnRvazZzWElQUU9sa3l6WVFCVkdmUlAtRHJha0pld1FIby11OUE4RDQ3RHpUWXQ5aDZpWU1HQkdIYUt6RVgtbzNWR29aTjRZTFlVMGNvdWIxalRYdk01djY0ckdZNl9qZ2hCay0yZTNsZGdRVzg2eFlOMlBEY3lIYzRFTWFKZ3Z1Nnd3OHZsbl93Q1BkemRtZlRRcm8zS050R2hn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMipgFBVV95cUxNTE8wMnRvazZzWElQUU9sa3l6WVFCVkdmUlAtRHJha0pld1FIby11OUE4RDQ3RHpUWXQ5aDZpWU1HQkdIYUt6RVgtbzNWR29aTjRZTFlVMGNvdWIxalRYdk01djY0ckdZNl9qZ2hCay0yZTNsZGdRVzg2eFlOMlBEY3lIYzRFTWFKZ3Z1Nnd3OHZsbl93Q1BkemRtZlRRcm8zS050R2hn%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "월가가 Nvidia 황의 복귀에 반응하는 모습 보기",
          "original_url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPd1JMSTJLclRpeTRHaGxRaTdfWENZUTMxd2E4d0VuNU83MG5wQ090Ni1zVndVaWN4eV80QTNPVm5xelBEODg5ZGIxUE5xZ1FsRmdvQTlQbl9TU2Zwdm9jM1ZIZjhvV09rVHluT1N0N0Fzckszek9fOE1EeW43bWNOYlVsVy1uSHNfWFplYml3a2paR3Y1M0M3OVVlR2F3bzVwbmtR?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiowFBVV95cUxPd1JMSTJLclRpeTRHaGxRaTdfWENZUTMxd2E4d0VuNU83MG5wQ090Ni1zVndVaWN4eV80QTNPVm5xelBEODg5ZGIxUE5xZ1FsRmdvQTlQbl9TU2Zwdm9jM1ZIZjhvV09rVHluT1N0N0Fzckszek9fOE1EeW43bWNOYlVsVy1uSHNfWFplYml3a2paR3Y1M0M3OVVlR2F3bzVwbmtR%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:40"
    },
    {
      "source": "CNBC",
      "title_ko": "Morning Call Sheet: Nvidia 매수 기회, AI 주식 및 연준(Fed) 피규어 소개 위험",
      "title_en": "Morning Call Sheet: Nvidia buying opportunities, AI stocks and Fed rate hike risks",
      "summary_ko": "모닝 콜 시트: Nvidia 매수 기회, AI 주식 및 연준(Fed) 삽입 리스크 CNBC. 연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다. CNBC뿐만 아니라 CNBC, Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQOTZ6MnJFa2hRYk5RalJiU2VGbVMwUjk1VDlqS3hfdlFUb3I4MXdMLVdsMVlHUUh1a2hIUG1jU194RDlRUXZlRG5JenhjaGtZd2Y3a1dTTDRvZkc5eHI5UnZVZFNpOWZnUk1YUGZQeGtkRWNfYVFIS2ZXalVfNFBRUUVpN2luWVY1Y2FyTld2SUZGTnVYXzV6ZC1MMVNwVThRaWlfSG1raDk4VGxxRUxsRHVnOFRwbmh0MkxuUmpBcjA?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiwAFBVV95cUxQOTZ6MnJFa2hRYk5RalJiU2VGbVMwUjk1VDlqS3hfdlFUb3I4MXdMLVdsMVlHUUh1a2hIUG1jU194RDlRUXZlRG5JenhjaGtZd2Y3a1dTTDRvZkc5eHI5UnZVZFNpOWZnUk1YUGZQeGtkRWNfYVFIS2ZXalVfNFBRUUVpN2luWVY1Y2FyTld2SUZGTnVYXzV6ZC1MMVNwVThRaWlfSG1raDk4VGxxRUxsRHVnOFRwbmh0MkxuUmpBcjA%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 55,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 23 Nov 2026 12:12:13 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "엔비디아, 데이터센터, 연준(Fed)에 대해 '시장은 여전히 ​​질문을 던지고 있다' | 마켓톡",
          "original_url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1BTlVvMDBHdDBBck9ZT0NuVTJZQmFrQXZfVk93cURfeWVzT1FZU2NvWUpyeU9laS1TcmNOaDdQVVdBaS1qRGROTUNIb1NHeWVHU3RBQk5iaHRKeGp4WlpXLW8tN1k5M1E?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiZ0FVX3lxTE1BTlVvMDBHdDBBck9ZT0NuVTJZQmFrQXZfVk93cURfeWVzT1FZU2NvWUpyeU9laS1TcmNOaDdQVVdBaS1qRGROTUNIb1NHeWVHU3RBQk5iaHRKeGp4WlpXLW8tN1k5M1E%3Foc%3D5"
        },
        {
          "source": "Wall Street Journal",
          "title_ko": "미국 최대의 전력망 운영자는 AI 문제를 안고 있습니다. 데이터 센터가 너무 많아서",
          "original_url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQMW5vdnZPa0t2X3J2ZmtrcEVZTGJobE5EYlF0bFR4bC1BWE5CbDNhY0llUy1XUFhDbW4yeW8tVWplTHNLd01FeWg3ZzZHcnhZSzc0cTdDV2RFdDRRMFhkSzBFUTZuY1d5TmtIMThtN04yTzYyMDBBXzhncXpUU2stcA?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMigAFBVV95cUxQMW5vdnZPa0t2X3J2ZmtrcEVZTGJobE5EYlF0bFR4bC1BWE5CbDNhY0llUy1XUFhDbW4yeW8tVWplTHNLd01FeWg3ZzZHcnhZSzc0cTdDV2RFdDRRMFhkSzBFUTZuY1d5TmtIMThtN04yTzYyMDBBXzhncXpUU2stcA%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "미국 무역 관계자는 엔비디아 H200 AI 칩이 중국으로 배송된 경우가 '매우 적다'고 밝혔습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBZdWd2RUZkOHBLZ3lpeVdGMFZCT1Vpd2FiUXR6c0xWMGhUMkwxLUtVY1dSdnlJNGVKMVN2aTVpNlA4UHJNQUJQSGJiNTVsemVvZ0lEakxvOG1kU2tTeXptLW91Tm1GbmtlSjg2dWlOdkXSAXZBVV95cUxQWVdMZURKQTVEMER2bE8wTmtMczA0NzBDa3NjMGV4aUdRNVdoT1Z6QlA3cFoxYnlOak8ta282ZWU1NnZLYk9oT3lYNzlPYW8xZmh3eVE2aTRmTDFxZXByU3FueERPT0wzNDg4dGpMazA1U0RjVEJn?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMicEFVX3lxTFBZdWd2RUZkOHBLZ3lpeVdGMFZCT1Vpd2FiUXR6c0xWMGhUMkwxLUtVY1dSdnlJNGVKMVN2aTVpNlA4UHJNQUJQSGJiNTVsemVvZ0lEakxvOG1kU2tTeXptLW91Tm1GbmtlSjg2dWlOdkXSAXZBVV95cUxQWVdMZURKQTVEMER2bE8wTmtMczA0NzBDa3NjMGV4aUdRNVdoT1Z6QlA3cFoxYnlOak8ta282ZWU1NnZLYk9oT3lYNzlPYW8xZmh3eVE2aTRmTDFxZXByU3FueERPT0wzNDg4dGpMazA1U0RjVEJn%3Foc%3D5"
        },
        {
          "source": "CNBC",
          "title_ko": "엔비디아는 아직 미국이 승인한 중국 AI 칩을 판매하지 않았으며, 현지 AI 경쟁자들이 그 자리를 차지할 수 있다는 우려가 있습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNd2gwUFlrUXF3aEVNUVJPajNpdklUcTNTS09udGJBOWZ5NEJmanlaOXFhbDE5MzdPOFBGZnRMbWpuNndmcXFzNGNOR2ZMRENlNjl0NGpGU09NLTRPamNGZXFmWklCQ1Y1ZkhFaDNmUGJjS2lKYmhCZHgyYlN6WlZBZUhCUG1BYTBuRUhmdnBtNDlTU0NERnfSAZsBQVVfeXFMUEFWRlpaMTZWTVpxU1ZnZEtrLUhxNkk5ZUlyNWhuaW5aUkhHOUlKQjB0VHp1YkVUemxXSGVad1FkZlRBUTJnaV9pczJraVdadmJMSFpVNVhUZ3RybUluRUFLM3V2QkZoU1pMZVRaWFduWUMxa2lZemozOFBYNjJTS2twUkF1Y1NnczRmLUxtN0lPRGZkM0stR2JkekU?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMilgFBVV95cUxNd2gwUFlrUXF3aEVNUVJPajNpdklUcTNTS09udGJBOWZ5NEJmanlaOXFhbDE5MzdPOFBGZnRMbWpuNndmcXFzNGNOR2ZMRENlNjl0NGpGU09NLTRPamNGZXFmWklCQ1Y1ZkhFaDNmUGJjS2lKYmhCZHgyYlN6WlZBZUhCUG1BYTBuRUhmdnBtNDlTU0NERnfSAZsBQVVfeXFMUEFWRlpaMTZWTVpxU1ZnZEtrLUhxNkk5ZUlyNWhuaW5aUkhHOUlKQjB0VHp1YkVUemxXSGVad1FkZlRBUTJnaV9pczJraVdadmJMSFpVNVhUZ3RybUluRUFLM3V2QkZoU1pMZVRaWFduWUMxa2lZemozOFBYNjJTS2twUkF1Y1NnczRmLUxtN0lPRGZkM0stR2JkekU%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:46"
    },
    {
      "source": "Bloomberg",
      "title_ko": "구리 슬럼프, 칠레 재정 적자에 대한 Kast의 고삐를 시험하다",
      "title_en": "Copper Slump Tests Kast’s Push to Rein In Chile’s Fiscal Deficit",
      "summary_ko": "구리 슬럼프, 칠레 재정 적자에 대한 Kast의 고삐를 시험하다 Bloomberg.com. 미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다. Bloomberg뿐만 아니라 CNBC, Bloomberg 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPUFdvZnJHVjQtbUk5TkZjcHFJOC1leEtMUGg4RGxJNjU2dW12ZGlHVTBYNlN5ckU5Y2czeHNSMExIa2VOS0NmUDNUVHRvWFN4OTAxT24wemJVc01ZYkxncE9zckVIbmFsMTUyQzFnaGRvRS1wUXhWVnNGa0lwQVd1WXZfMzNyTlF2SjJCU25mRlZ1TjJ5U0psUnBCWi0yeThrZExscGVyM3RNSnVUSi14eWdOeVNLUQ?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxPUFdvZnJHVjQtbUk5TkZjcHFJOC1leEtMUGg4RGxJNjU2dW12ZGlHVTBYNlN5ckU5Y2czeHNSMExIa2VOS0NmUDNUVHRvWFN4OTAxT24wemJVc01ZYkxncE9zckVIbmFsMTUyQzFnaGRvRS1wUXhWVnNGa0lwQVd1WXZfMzNyTlF2SjJCU25mRlZ1TjJ5U0psUnBCWi0yeThrZExscGVyM3RNSnVUSi14eWdOeVNLUQ%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 23 Nov 2026 11:00:00 GMT",
      "related_articles": [
        {
          "source": "CNBC",
          "title_ko": "트럼프의 미국산 AI 칩 추진, TSMC 마진 타격",
          "original_url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNMDJ5dnNSUl9jR2o1dV9ZZ2loYmpULUd2bGJCeFFIYkl3dU1qZlpnVFJ1MGQxNmdZdTB2bTdkRnRHcjQxWUNmVEEtY1NZNl8yUldLc2ZYdU1TWlJGdVB5dzN0U1JsOWI0THBybUpvS0RWcnVHWEdDdy02cFFSS1V3bndn0gGHAUFVX3lxTE5EanA4cVIzWmQ1T0VRN3ExclZ4WU1KS0h6QnVPbWtzQ3UzeEM4cmVqRno2SE9DYVFYRmYyYUtRbjJyc1VBN2puZXA3R1l4dTV2eEZRdVhaOVlUR2Q4MHdMQ2Vhc0dHVEd3X0hzQzZmTjJpVjJvbHAyUGNPUWlTVkVYRm9qV1BXQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMiggFBVV95cUxNMDJ5dnNSUl9jR2o1dV9ZZ2loYmpULUd2bGJCeFFIYkl3dU1qZlpnVFJ1MGQxNmdZdTB2bTdkRnRHcjQxWUNmVEEtY1NZNl8yUldLc2ZYdU1TWlJGdVB5dzN0U1JsOWI0THBybUpvS0RWcnVHWEdDdy02cFFSS1V3bndn0gGHAUFVX3lxTE5EanA4cVIzWmQ1T0VRN3ExclZ4WU1KS0h6QnVPbWtzQ3UzeEM4cmVqRno2SE9DYVFYRmYyYUtRbjJyc1VBN2puZXA3R1l4dTV2eEZRdVhaOVlUR2Q4MHdMQ2Vhc0dHVEd3X0hzQzZmTjJpVjJvbHAyUGNPUWlTVkVYRm9qV1BXQQ%3Foc%3D5"
        },
        {
          "source": "Bloomberg",
          "title_ko": "스리랑카, 인플레이션 목표 달성을 위해 정책 금리 인상",
          "original_url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOckItWnlaZVZ0dFIzLUhzckdDd2dHSDBFOFVHeHRSN2M5Q0cxbHBWRktWOV9fZ29NVXp5NGxJQ2NIczdMNjQyS1ZUTWpNenZRb195RkI5SThlQzV1UFNuZG9iNlpwZ0FwNDBaNnVFVXI3ZktRaTRjaHh3bWF3Vi1TbkFMT29kMzN1SkxINzFTV0VTVU93MEFkek1najJwQUF4blRiZnR3cWtJQzVrekJXTENWTk4?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitAFBVV95cUxOckItWnlaZVZ0dFIzLUhzckdDd2dHSDBFOFVHeHRSN2M5Q0cxbHBWRktWOV9fZ29NVXp5NGxJQ2NIczdMNjQyS1ZUTWpNenZRb195RkI5SThlQzV1UFNuZG9iNlpwZ0FwNDBaNnVFVXI3ZktRaTRjaHh3bWF3Vi1TbkFMT29kMzN1SkxINzFTV0VTVU93MEFkek1najJwQUF4blRiZnR3cWtJQzVrekJXTENWTk4%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:51"
    },
    {
      "source": "Bloomberg",
      "title_ko": "Nvidia 이사회는 방금 자신의 부적절함을 확인했습니다.",
      "title_en": "The Nvidia Board Just Confirmed Its Own Irrelevance",
      "summary_ko": "Nvidia 이사회는 자신의 부적절함을 확인했습니다. Bloomberg.com. 글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다. Bloomberg뿐만 아니라 Reuters 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다.",
      "original_url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNRzdKQUczdGZtXzhoMGJrbjlNMnVyOTBPOWZLUUUtR2tDTWVETDFvVDdOV3JEYW96elRacjd4X0FGSFBVbEc5NGZZX29uS3hjdFdueWdxRlNCNFNPNzBCSXB0NEZjY3NXajJPZWR5Tld1anR3TDNjWlc1N0NvMUo5SVRjbmctMVpqRFFMaVk0NFhjMzhrY2FTLXd4Y1VuRkMwaXQ1enUzUDBzSUY4MmEyZnBqa01rYUU?oc=5",
      "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitwFBVV95cUxNRzdKQUczdGZtXzhoMGJrbjlNMnVyOTBPOWZLUUUtR2tDTWVETDFvVDdOV3JEYW96elRacjd4X0FGSFBVbEc5NGZZX29uS3hjdFdueWdxRlNCNFNPNzBCSXB0NEZjY3NXajJPZWR5Tld1anR3TDNjWlc1N0NvMUo5SVRjbmctMVpqRFFMaVk0NFhjMzhrY2FTLXd4Y1VuRkMwaXQ1enUzUDBzSUY4MmEyZnBqa01rYUU%3Foc%3D5",
      "category": "ai_hegemony",
      "section_no": 6,
      "section_title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
      "section_icon": "🤖",
      "importance_score": 50,
      "badge_label": "⭐ 주요 파도",
      "badge_class": "tier-wave",
      "pub_date": "Mon, 23 Nov 2026 17:22:26 GMT",
      "related_articles": [
        {
          "source": "Reuters",
          "title_ko": "엔비디아의 주가 하락으로 가치 평가에서 알파벳 아래로 떨어졌습니다.",
          "original_url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOR1lHWVFlSnZTcW9OVTZGU0lwdDdreE5TSm94Z0FTZDktRHRLOEU0LVBTTHpOZ1lYYmFCZ041UWUtTEh6VEFhczZFd2xlSjNLRlNNMHhDd2tFcDl2N1BIMndRY1VaN09HeHowT0hVblhkd1ZpUGxTakdwVFk4cjFWTzlTRnJQeWNGUW92YUxWUG9XR3BzM0hrZDdaWU5vUHJyMVdRcDktdWNMSUlkLS1Nek1SZjYxQQ?oc=5",
          "translated_url": "https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A//news.google.com/rss/articles/CBMitgFBVV95cUxOR1lHWVFlSnZTcW9OVTZGU0lwdDdreE5TSm94Z0FTZDktRHRLOEU0LVBTTHpOZ1lYYmFCZ041UWUtTEh6VEFhczZFd2xlSjNLRlNNMHhDd2tFcDl2N1BIMndRY1VaN09HeHowT0hVblhkd1ZpUGxTakdwVFk4cjFWTzlTRnJQeWNGUW92YUxWUG9XR3BzM0hrZDdaWU5vUHJyMVdRcDktdWNMSUlkLS1Nek1SZjYxQQ%3Foc%3D5"
        }
      ],
      "crawled_at": "2026-11-23 20:01:54"
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
