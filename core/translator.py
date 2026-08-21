"""
Translation & Synthesis module for Global Macro Briefing.
Translates English financial news headlines and generates rich, insightful,
multi-sentence macroeconomic summary reports.
"""

import re
import urllib.parse
import urllib.request
import json
import time
from typing import List, Dict, Any

FINANCIAL_GLOSSARY = {
    r'\bFed\b': '연준(Fed)',
    r'\bFederal Reserve\b': '미국 연방준비제도(연준)',
    r'\bFOMC\b': '연방공개시장위원회(FOMC)',
    r'\bPowell\b': '파월 의장',
    r'\bJerome Powell\b': '제롬 파월 연준 의장',
    r'\bTreasury\b': '미 국채/재무부',
    r'\bTreasuries\b': '미국 국채',
    r'\b10-year\b': '10년물',
    r'\b2-year\b': '2년물',
    r'\byields?\b': '수익률(금리)',
    r'\brate hike\b': '금리 인상',
    r'\brate cut\b': '금리 인하',
    r'\binterest rates?\b': '기준금리',
    r'\bQT\b': '양적긴축(QT)',
    r'\bQE\b': '양적완화(QE)',
    r'\bReverse Repo\b': '역레포(RRP)',
    r'\bLiquidity\b': '유동성',
    r'\bBalance Sheet\b': '대차대조표',
    r'\bNational Debt\b': '국가 부채',
    r'\bFiscal Deficit\b': '재정 적자',
    r'\bBond Auction\b': '국채 입찰',
    r'\bDebt Ceiling\b': '부채 한도',
    r'\bWall Street\b': '월가',
    r'\bS&P 500\b': 'S&P 500',
    r'\bNasdaq\b': '나스닥',
    r'\bForeign Investors?\b': '외국인 투자자',
    r'\bEmerging Markets?\b': '신흥국 시장',
    r'\bSemiconductors?\b': '반도체',
    r'\bPower Grid\b': '전력망',
    r'\bTransformer\b': '변압기',
    r'\bCopper\b': '구리',
}

def clean_html(raw_html: str) -> str:
    """Remove HTML tags and special entities from text."""
    if not raw_html:
        return ""
    clean = re.sub(r'<.*?>', ' ', raw_html)
    clean = clean.replace('&nbsp;', ' ').replace('\xa0', ' ')
    clean = clean.replace('&amp;', '&').replace('&quot;', '"').replace('&apos;', "'").replace('&lt;', '<').replace('&gt;', '>').replace('&#39;', "'")
    clean = re.sub(r'\s{2,}', ' ', clean)
    # Remove trailing publisher tags like "...  - Bloomberg"
    clean = re.sub(r'\s*-\s*[A-Za-z0-9가-힣\.\,\s]+$', '', clean)
    return clean.strip()

def apply_financial_glossary(text: str) -> str:
    """Applies standardized financial glossary translations."""
    for pattern, replacement in FINANCIAL_GLOSSARY.items():
        text = re.sub(pattern, replacement, text, flags=re.IGNORECASE)
    return text

def translate_to_korean(text: str, max_retries: int = 3) -> str:
    """
    Translates English text to Korean using free Google Translate endpoint.
    Includes retry logic and fallback.
    """
    if not text or not text.strip():
        return ""
    
    clean_text = clean_html(text).strip()
    if len(clean_text) == 0:
        return ""

    clean_text = apply_financial_glossary(clean_text)

    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=" + urllib.parse.quote(clean_text)
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=8) as response:
                result = json.loads(response.read().decode('utf-8'))
                translated_parts = [part[0] for part in result[0] if part[0]]
                translated_text = "".join(translated_parts).strip()
                if translated_text:
                    return translated_text
        except Exception:
            time.sleep(0.4 * (attempt + 1))
            continue
            
    return clean_text

def synthesize_macro_summary(title_ko: str, raw_summary_ko: str, category: str, publisher: str, related_articles: List[Dict[str, Any]] = None) -> str:
    """
    Synthesizes a rich, multi-sentence macroeconomic summary explaining:
    1. Core fact / development
    2. Macroeconomic background & impact (Fed, Liquidity, Debt, FX, AI Infra, Commodities)
    3. Market takeaway & multi-source context
    """
    clean_raw = clean_html(raw_summary_ko).strip() if raw_summary_ko else ""
    
    # 1. Fact Sentence
    if clean_raw and len(clean_raw) > 25 and clean_raw.lower() not in title_ko.lower():
        fact_sentence = clean_raw if clean_raw.endswith((".", "다", "음")) else f"{clean_raw}."
    else:
        fact_sentence = f"{title_ko} 관련 핵심 동향이 발표되었습니다."

    # 2. Contextual Macro Impact Sentence based on Category & Keywords
    title_lower = title_ko.lower()
    impact_sentence = ""

    if any(k in title_lower for k in ["tga", "베센트", "재무부", "현금", "40조", "부채", "적자", "국채"]):
        impact_sentence = "미 재무부의 TGA 현금 잔고 방출과 40조 달러 국가부채 조달(QRA) 사이클에 따른 국채 기간 프리미엄 및 글로벌 달러 유동성 환경에 직접적인 영향을 미칠 수 있습니다."
    elif any(k in title_lower for k in ["fomc", "파월", "금리", "인하", "인상", "연준", "fed", "물가", "cpi", "pce"]):
        impact_sentence = "연준(Fed)의 기준금리 경로 및 인플레이션 둔화 속도와 직결되는 사안으로, 향후 글로벌 채권 금리 안정과 주식 밸류에이션 부담 완화 여부에 핵심 변수로 작용합니다."
    elif any(k in title_lower for k in ["이란", "호르무즈", "중동", "우크라이나", "러시아", "유가", "원유"]):
        impact_sentence = "중동 및 동유럽 지정학적 긴장 고조에 따른 국제 유가·원자재 공급망 충격과 인플레이션 재점화 가능성에 유의할 필요가 있습니다."
    elif any(k in title_lower for k in ["ai", "hbm", "엔비디아", "전력", "전력망", "변압기", "구리", "원전", "희토류"]):
        impact_sentence = "빅테크 AI 데이터센터 확장 사이클과 HBM 반도체 수요, 그리고 전력망·변압기·구리 등 핵심 인프라 및 원자재 공급 병목 현상과 밀접하게 연계된 이슈입니다."
    elif any(k in title_lower for k in ["외국인", "환율", "코스피", "원화", "달러", "수급"]):
        impact_sentence = "외국인 투자자의 국내 증시(코스피/반도체 대형주) 순매수 유입 및 원/달러 환율 1년·3년 평균선 회복 여부를 가늠하는 핵심 대외 지표입니다."
    elif category == "fed_liquidity":
        impact_sentence = "중앙은행 통화정책 기조 및 글로벌 잉여 유동성 흐름의 변화를 나타내는 주요 매크로 시그널입니다."
    elif category == "us_economy":
        impact_sentence = "미국 실물 경제의 성장세와 재정 부담, 고용 및 소비 지표의 건전성을 평가하는 주요 거시 변수입니다."
    elif category == "foreign_flows_korea":
        impact_sentence = "국내 금융시장에 대한 외국인 자본 유출입 및 환율 안정성에 영향을 주는 주요 요인입니다."
    elif category == "korea_economy":
        impact_sentence = "한국은행의 금리 결정 및 국내 수출입 펀더멘털, 가계부채와 부동산 경기에 미치는 파급 효과를 주목할 필요가 있습니다."
    elif category == "ai_hegemony":
        impact_sentence = "글로벌 AI 패권 경쟁 및 기술 인프라 공급망의 장기 구조적 변화(너울)를 반영하는 핵심 트렌드입니다."
    else:
        impact_sentence = "글로벌 거시경제 및 금융시장 전반의 투자 심리에 영향을 미칠 수 있는 중요 이벤트입니다."

    # 3. Multi-Source or Takeaway Sentence
    source_context = ""
    if related_articles and len(related_articles) > 0:
        other_sources = list(set([r["source"] for r in related_articles if r.get("source")]))
        if other_sources:
            source_context = f"{publisher}뿐만 아니라 {', '.join(other_sources[:2])} 등 주요 외신에서도 시장 파급력을 집중 분석하고 있습니다."
    
    if not source_context:
        source_context = f"{publisher}에 따르면 시장 참여자들의 기대치 변화와 향후 정책 발표 일정에 관심이 집중되고 있습니다."

    # Combine into rich 3-sentence summary
    return f"{fact_sentence} {impact_sentence} {source_context}"

def get_google_translated_url(original_url: str) -> str:
    """Returns Google Translate web proxy URL that opens the full article in Korean."""
    if not original_url:
        return ""
    return f"https://translate.google.com/translate?sl=auto&tl=ko&u={urllib.parse.quote(original_url)}"
