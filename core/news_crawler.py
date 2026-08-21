"""
Global & Domestic Economy News Crawler with Park Jong-hoon's Framework, AI Hegemony,
and Smart Article Clustering (유사 기사 자동 통합 및 멀티 언론사 링크 제공).
"""

import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json
import os
import re
import time
from difflib import SequenceMatcher
from datetime import datetime
from typing import List, Dict, Any

from core.translator import translate_to_korean, get_google_translated_url, synthesize_macro_summary, clean_html

FEED_SOURCES = [
    # -------------------------------------------------------------
    # 2. 연준 정책 및 유동성 동향
    # -------------------------------------------------------------
    {
        "name": "Bloomberg (Fed/Rates)",
        "url": "https://news.google.com/rss/search?q=site:bloomberg.com+(%22Federal+Reserve%22+OR+FOMC+OR+%22interest+rates%22+OR+Powell)+when:3d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "fed_liquidity",
        "default_source": "Bloomberg",
        "lang": "en"
    },
    {
        "name": "Reuters (Monetary Policy)",
        "url": "https://news.google.com/rss/search?q=site:reuters.com+(%22Federal+Reserve%22+OR+FOMC+OR+%22interest+rate%22+OR+inflation)+when:3d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "fed_liquidity",
        "default_source": "Reuters",
        "lang": "en"
    },
    {
        "name": "WSJ (Central Banking)",
        "url": "https://news.google.com/rss/search?q=site:wsj.com+(Fed+OR+%22interest+rates%22+OR+Powell+OR+inflation)+when:3d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "fed_liquidity",
        "default_source": "Wall Street Journal",
        "lang": "en"
    },
    {
        "name": "CNBC (Fed & Economy)",
        "url": "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=20910258",
        "default_category": "fed_liquidity",
        "default_source": "CNBC",
        "lang": "en"
    },
    {
        "name": "Global Liquidity & QT",
        "url": "https://news.google.com/rss/search?q=(%22quantitative+tightening%22+OR+%22reverse+repo%22+OR+%22money+supply%22+OR+%22stablecoin%22+OR+%22TGA%22)+when:3d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "fed_liquidity",
        "default_source": "Global Macro",
        "lang": "en"
    },

    # -------------------------------------------------------------
    # 3. 미국 경제 관련 주요 뉴스 요약
    # -------------------------------------------------------------
    {
        "name": "Bloomberg (US Economy & Debt)",
        "url": "https://news.google.com/rss/search?q=site:bloomberg.com+(%22US+debt%22+OR+%22national+debt%22+OR+%22Treasury+yields%22+OR+%22fiscal+deficit%22+OR+Bessent)+when:3d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "us_economy",
        "default_source": "Bloomberg",
        "lang": "en"
    },
    {
        "name": "Reuters (US Economy & Treasuries)",
        "url": "https://news.google.com/rss/search?q=site:reuters.com+(%22US+debt%22+OR+%22Treasury+yields%22+OR+%22deficit%22+OR+%22GDP%22+OR+Bessent)+when:3d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "us_economy",
        "default_source": "Reuters",
        "lang": "en"
    },
    {
        "name": "WSJ (US Economy)",
        "url": "https://news.google.com/rss/search?q=site:wsj.com+(%22US+economy%22+OR+%22Treasury%22+OR+%22debt+ceiling%22+OR+tariffs)+when:3d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "us_economy",
        "default_source": "Wall Street Journal",
        "lang": "en"
    },
    {
        "name": "MarketWatch (Markets & Economy)",
        "url": "https://feeds.content.dowjones.io/public/rss/mw_marketpulse",
        "default_category": "us_economy",
        "default_source": "MarketWatch",
        "lang": "en"
    },

    # -------------------------------------------------------------
    # 4. 한국 외국인 투자자 수급 및 국내 증시 영향
    # -------------------------------------------------------------
    {
        "name": "Bloomberg/Reuters (Asia & Korea Markets)",
        "url": "https://news.google.com/rss/search?q=(site:bloomberg.com+OR+site:reuters.com)+(%22foreign+investors%22+AND+(%22Korea%22+OR+%22KOSPI%22+OR+%22semiconductors%22))+when:4d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "foreign_flows_korea",
        "default_source": "Global Finance",
        "lang": "en"
    },
    {
        "name": "구글 뉴스 (외국인 수급 & 코스피/환율)",
        "url": "https://news.google.com/rss/search?q=(%EC%99%B8%EA%B5%AD%EC%9D%B8+%EC%88%9C%EB%A7%A4%EC%88%98+OR+%EC%99%B8%EA%B5%AD%EC%9D%B8+%EC%88%98%EA%B8%89+OR+%EC%BD%94%EC%8A%A4%ED%94%BC+%EC%99%B8%EA%B5%AD%EC%9D%B8+OR+%ED%99%98%EC%9C%A8+%EC%A6%9D%EC%8B%9C)+when:2d&hl=ko&gl=KR&ceid=KR:ko",
        "default_category": "foreign_flows_korea",
        "default_source": "국내 경제지",
        "lang": "ko"
    },
    {
        "name": "연합인포맥스/한국경제 (외인 수급)",
        "url": "https://news.google.com/rss/search?q=(%22%EC%99%B8%EA%B5%AD%EC%9D%B8%22+AND+(%22%EC%BD%94%EC%8A%A4%ED%94%BC%22+OR+%22%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90%22+OR+%22%ED%99%98%EC%9C%A8%22))+when:2d&hl=ko&gl=KR&ceid=KR:ko",
        "default_category": "foreign_flows_korea",
        "default_source": "연합인포맥스",
        "lang": "ko"
    },

    # -------------------------------------------------------------
    # 5. 국내 경제 관련 주요 뉴스 요약
    # -------------------------------------------------------------
    {
        "name": "구글 뉴스 (한국은행/금통위/물가/수출)",
        "url": "https://news.google.com/rss/search?q=(%ED%95%9C%EA%B5%AD%EC%9D%80%ED%96%89+OR+%EA%B8%88%ED%86%B5%EC%9C%84+OR+%EA%B8%B0%EC%A4%80%EA%B8%88%EB%A6%AC+OR+%EB%B0%98%EB%8F%84%EC%B2%B4+%EC%88%98%EC%B6%9C+OR+%EA%B0%80%EA%B3%84%EB%B6%80%EC%B1%84+OR+%EC%86%8C%EB%B9%84%EC%9E%90%EB%AC%BC%EA%B0%80)+when:2d&hl=ko&gl=KR&ceid=KR:ko",
        "default_category": "korea_economy",
        "default_source": "국내 종합경제",
        "lang": "ko"
    },
    {
        "name": "국내 거시경제 심층 (한국경제/매일경제/연합)",
        "url": "https://news.google.com/rss/search?q=(%22%EA%B5%AD%EB%82%B4+%EA%B2%BD%EC%A0%9C%22+OR+%22%EC%88%98%EC%B6%9C%EC%9E%85%22+OR+%22%EA%B2%BD%EC%83%81%EC%88%98%EC%A7%80%22+OR+%22%EA%B2%BD%EA%B8%B0%EB%8F%99%ED%96%A5%22)+when:3d&hl=ko&gl=KR&ceid=KR:ko",
        "default_category": "korea_economy",
        "default_source": "한국경제",
        "lang": "ko"
    },

    # -------------------------------------------------------------
    # 6. AI 패권 전쟁 & 반도체·전력 인프라 동향 (AI Hegemony & Infra)
    # -------------------------------------------------------------
    {
        "name": "Bloomberg/Reuters (AI & Chips)",
        "url": "https://news.google.com/rss/search?q=(site:bloomberg.com+OR+site:reuters.com)+(%22artificial+intelligence%22+OR+NVIDIA+OR+TSMC+OR+HBM+OR+%22AI+chips%22+OR+DeepSeek)+when:3d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "ai_hegemony",
        "default_source": "Global Tech",
        "lang": "en"
    },
    {
        "name": "Google News (AI Power & Grid)",
        "url": "https://news.google.com/rss/search?q=(%22datacenter+power%22+OR+%22grid+infrastructure%22+OR+%22transformer+shortage%22+OR+%22nuclear+power+AI%22+OR+%22AI+capex%22)+when:3d&hl=en-US&gl=US&ceid=US:en",
        "default_category": "ai_hegemony",
        "default_source": "Power & Tech",
        "lang": "en"
    },
    {
        "name": "국내 AI 반도체 & 전력망 인프라",
        "url": "https://news.google.com/rss/search?q=(%22HBM%22+OR+%22AI+%EB%B0%98%EB%8F%84%EC%B2%B4%22+OR+%22%EC%A0%84%EB%A0%A5%EB%A7%9D%22+OR+%22%EB%B3%80%EC%95%95%EA%B8%B0%22+OR+%22%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%84%BC%ED%84%B0%22+OR+%22%EC%9B%90%EC%A0%84%22)+when:2d&hl=ko&gl=KR&ceid=KR:ko",
        "default_category": "ai_hegemony",
        "default_source": "국내 테크/인프라",
        "lang": "ko"
    }
]

def load_sources_config():
    """Loads customized feed sources from sources.json."""
    config_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "sources.json")
    if os.path.exists(config_path):
        try:
            with open(config_path, "r", encoding="utf-8") as f:
                sources = json.load(f)
                enabled = [s for s in sources if s.get("enabled", True)]
                if enabled:
                    return enabled
        except Exception as e:
            print(f"[Warning] Failed to load sources.json: {e}")
    return FEED_SOURCES

SECTION_DEFINITIONS = {
    "fed_liquidity": {
        "section_no": 2,
        "title": "연준 정책 및 유동성 동향",
        "sub": "Fed Policy, Interest Rates, QT & Global Liquidity",
        "icon": "🏛️"
    },
    "us_economy": {
        "section_no": 3,
        "title": "미국 경제 관련 주요 뉴스 요약",
        "sub": "US Debt, Deficit, Treasury Issuance & Macro Economy",
        "icon": "🇺🇸"
    },
    "foreign_flows_korea": {
        "section_no": 4,
        "title": "한국 외국인 투자자 수급 및 국내 증시 영향",
        "sub": "Foreign Inflows, FX Impact & KOSPI Semiconductor Stocks",
        "icon": "🇰🇷"
    },
    "korea_economy": {
        "section_no": 5,
        "title": "국내 경제 관련 주요 뉴스 요약",
        "sub": "Bank of Korea, Exports, Domestic Inflation & Debt Trends",
        "icon": "📈"
    },
    "ai_hegemony": {
        "section_no": 6,
        "title": "AI 패권 전쟁 & 반도체·전력 인프라 동향",
        "sub": "AI Chips, HBM, Datacenter Power Grid, DeepSeek & US-China Rivalry",
        "icon": "🤖"
    }
}

DEFAULT_SWELL_KEYWORDS = [
    "tga", "재무부 일반계정", "현금 잔고", "스콧 베센트", "베센트", "40조", "40 trillion",
    "국가부채", "national debt", "부채 한도", "debt ceiling", "스테이블코인", "stablecoin",
    "테더", "서클", "단기국채", "t-bills", "hbm", "엔비디아", "nvidia", "tsmc", "딥시크",
    "deepseek", "전력망", "power grid", "변압기", "transformer", "smr", "원전",
    "구리", "copper", "닥터 코퍼", "전력", "전력난", "전력 부족", "power shortage", "electricity",
    "희토류", "히토류", "rare earth", "rare earths", "핵심광물", "critical minerals",
    "그린란드", "greenland", "1500원", "1600원", "패권",
    "이란", "iran", "호르무즈", "hormuz", "strait of hormuz", "중동", "middle east",
    "우크라이나", "ukraine", "러시아 우크라이나", "russia ukraine", "지정학"
]

DEFAULT_IMPACT_KEYWORDS = [
    "fomc", "금리 결정", "금리 인하", "금리 인상", "rate cut", "rate hike", "파월",
    "powell", "긴급", "shock", "쇼크", "surprise", "서프라이즈", "사상 최대", "record high",
    "경고", "warning", "폭등", "폭락", "crash", "surge", "순매도", "순매수", "외국인"
]

TIER1_PUBLISHERS = ["Bloomberg", "Reuters", "Wall Street Journal", "Financial Times", "MarketWatch", "연합인포맥스", "한국경제", "매일경제"]

def load_keywords_config():
    """Loads customized keywords configuration from keywords.json."""
    config_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "keywords.json")
    cfg = {
        "score_threshold": 20,
        "swell_keywords": DEFAULT_SWELL_KEYWORDS,
        "impact_keywords": DEFAULT_IMPACT_KEYWORDS
    }
    if os.path.exists(config_path):
        try:
            with open(config_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                cfg["score_threshold"] = data.get("score_threshold", 20)
                cfg["swell_keywords"] = data.get("swell_keywords", DEFAULT_SWELL_KEYWORDS)
                cfg["impact_keywords"] = data.get("impact_keywords", DEFAULT_IMPACT_KEYWORDS)
        except Exception as e:
            print(f"[Warning] Failed to load keywords.json: {e}")
    return cfg

KEYWORDS_CFG = load_keywords_config()

def calculate_importance_score(title: str, summary: str, publisher: str) -> (int, str, str):
    """Calculates Importance Score (0~100) based on Park Jong-hoon's Framework."""
    text = f"{title} {summary}".lower()
    score = 10

    for kw in KEYWORDS_CFG["swell_keywords"]:
        if kw.lower() in text:
            score += 25
            break

    for kw in KEYWORDS_CFG["impact_keywords"]:
        if kw.lower() in text:
            score += 20
            break

    for t1 in TIER1_PUBLISHERS:
        if t1.lower() in publisher.lower():
            score += 15
            break

    if score >= 60:
        badge_label = "🔥 특급 너울"
        badge_class = "tier-swell"
    elif score >= 40:
        badge_label = "⭐ 주요 파도"
        badge_class = "tier-wave"
    else:
        badge_label = "📌 체크"
        badge_class = "tier-check"

    return score, badge_label, badge_class

def are_articles_similar(art1: Dict[str, Any], art2: Dict[str, Any]) -> bool:
    """Checks if two articles are reporting on the same event/topic."""
    t1 = re.sub(r'[^a-zA-Z0-9가-힣\s]', ' ', art1["title_raw"]).lower()
    t2 = re.sub(r'[^a-zA-Z0-9가-힣\s]', ' ', art2["title_raw"]).lower()

    # 1. String similarity
    ratio = SequenceMatcher(None, t1, t2).ratio()
    if ratio >= 0.42:
        return True

    # 2. Distinctive Keyword Overlap
    words1 = set(w for w in t1.split() if len(w) >= 2)
    words2 = set(w for w in t2.split() if len(w) >= 2)
    common_words = words1.intersection(words2)

    # Core macro terms
    core_anchors = {"fomc", "powell", "파월", "금리", "inflation", "인플레이션", "tga", "bessent", "베센트",
                    "debt", "부채", "hbm", "nvidia", "엔비디아", "deepseek", "딥시크", "외국인", "코스피", "kospi",
                    "환율", "유가", "oil", "gold", "금값", "비트코인", "bitcoin", "전력망", "변압기", "희토류"}

    shared_core = common_words.intersection(core_anchors)
    if len(shared_core) >= 2 or (len(shared_core) >= 1 and len(common_words) >= 3):
        return True

    return False

def cluster_similar_articles(articles: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Clusters similar articles into single master cards with related articles attached.
    Ensures high news diversity without losing any source links!
    """
    clusters = []  # List of master article objects

    for art in articles:
        matched_cluster = None
        for c in clusters:
            if are_articles_similar(c, art):
                matched_cluster = c
                break

        if matched_cluster:
            # Add to cluster's related articles list (avoid duplicating exact source)
            if "related_raw" not in matched_cluster:
                matched_cluster["related_raw"] = []
            matched_cluster["related_raw"].append(art)
        else:
            art["related_raw"] = []
            clusters.append(art)

    return clusters

def is_korean_text(text: str) -> bool:
    """Checks if text contains Hangul characters."""
    return bool(re.search(r'[가-힣]', text))

def extract_source_name(title: str, item_elem: ET.Element, default_src: str) -> (str, str):
    """Extracts cleaner source name and clean title."""
    source_name = default_src

    src_elem = item_elem.find("source")
    if src_elem is not None and src_elem.text:
        source_name = src_elem.text.strip()
    else:
        match = re.search(r'\s*-\s*([A-Za-z0-9가-힣\s\.\,\'\&]+)$', title)
        if match:
            extracted = match.group(1).strip()
            if len(extracted) < 25:
                source_name = extracted

    clean_title = re.sub(r'\s*-\s*[A-Za-z0-9가-힣\s\.\,\'\&]+$', '', title).strip()

    source_lower = source_name.lower()
    if "bloomberg" in source_lower:
        source_name = "Bloomberg"
    elif "reuters" in source_lower:
        source_name = "Reuters"
    elif "wall street journal" in source_lower or "wsj" in source_lower:
        source_name = "Wall Street Journal"
    elif "financial times" in source_lower or "ft.com" in source_lower:
        source_name = "Financial Times"
    elif "cnbc" in source_lower:
        source_name = "CNBC"
    elif "marketwatch" in source_lower:
        source_name = "MarketWatch"
    elif "yahoo" in source_lower:
        source_name = "Yahoo Finance"
    elif "investing" in source_lower:
        source_name = "Investing.com"
    elif "인포맥스" in source_lower:
        source_name = "연합인포맥스"
    elif "한경" in source_lower or "한국경제" in source_lower:
        source_name = "한국경제"
    elif "매경" in source_lower or "매일경제" in source_lower:
        source_name = "매일경제"
    elif "연합뉴스" in source_lower:
        source_name = "연합뉴스"
    elif "조선일보" in source_lower:
        source_name = "조선일보"
    elif "뉴스핌" in source_lower:
        source_name = "뉴스핌"

    return clean_title, source_name

def determine_article_category(title: str, summary: str) -> str:
    """Dynamically categorizes news into one of the 5 news sections based on actual keywords."""
    text = f"{title} {summary}".lower()

    # 1. Section 6: AI Hegemony & Infra
    ai_keys = ["ai", "nvidia", "엔비디아", "tsmc", "hbm", "deepseek", "딥시크", "power grid", "전력망",
               "transformer", "변압기", "datacenter", "데이터센터", "copper", "구리", "smr", "원전",
               "semiconductor", "반도체", "하이닉스", "삼성전자", "hynix", "rare earth", "희토류"]
    if any(k in text for k in ai_keys):
        return "ai_hegemony"

    # 2. Section 4: Foreign Flows & KRW FX
    foreign_keys = ["외국인", "순매수", "순매도", "foreign investors", "kospi", "코스피", "kosdaq", "코스닥",
                    "환율", "원/달러", "달러/원", "원화", "달러선물", "usd/krw", "won"]
    if any(k in text for k in foreign_keys):
        return "foreign_flows_korea"

    # 3. Section 5: Korea Domestic Macro
    korea_keys = ["한국은행", "금통위", "기준금리", "이창용", "bok", "가계부채", "부동산", "수출입", "소비자물가", "경제성장률"]
    if any(k in text for k in korea_keys):
        return "korea_economy"

    # 4. Section 2: Fed & Global Central Banks
    fed_keys = ["연준", "fed", "federal reserve", "fomc", "파월", "powell", "qt", "양적긴축", "역레포",
                "rrp", "ecb", "boj", "일본은행", "유동성", "금리 인하", "금리 인상", "rate cut", "rate hike", "통화정책"]
    if any(k in text for k in fed_keys):
        return "fed_liquidity"

    # 5. Section 3: US Economy, Debt & Global Macro (Default for general global macro)
    return "us_economy"

def is_korean_content(text: str, category: str = "") -> bool:
    if any(k in text for k in (".kr", "한국", "한경", "매경", "연합", "조선", "인포맥스", "금통위", "하이닉스", "삼성전자")):
        return True
    return bool(re.search(r'[가-힣]', text))

def fetch_rss_feed(source_cfg: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Fetches and parses news from a media source by searching its official domain."""
    domain_raw = source_cfg.get("domain") or source_cfg.get("website") or source_cfg.get("url", "")
    domain_clean = domain_raw.replace("https://", "").replace("http://", "").replace("www.", "").split("/")[0].strip()

    if not domain_clean:
        return []

    is_kr = is_korean_content(source_cfg.get("name", "") + " " + domain_clean)
    locale_params = "hl=ko&gl=KR&ceid=KR:ko" if is_kr else "hl=en-US&gl=US&ceid=US:en"

    feed_url = f"https://news.google.com/rss/search?q=site:{domain_clean}+when:3d&{locale_params}"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    articles = []
    try:
        req = urllib.request.Request(feed_url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            content = resp.read()
            root = ET.fromstring(content)

            for item in root.findall(".//item"):
                raw_title = item.findtext("title", "").strip()
                link = item.findtext("link", "").strip()
                desc = item.findtext("description", "").strip()
                pub_date = item.findtext("pubDate", "").strip()

                if not raw_title or not link:
                    continue

                clean_title, publisher = extract_source_name(raw_title, item, source_cfg.get("name") or domain_clean)
                clean_desc = clean_html(desc)

                cat = determine_article_category(clean_title, clean_desc)
                sec_info = SECTION_DEFINITIONS[cat]

                articles.append({
                    "source": publisher,
                    "title_raw": clean_title,
                    "summary_raw": clean_desc[:260] + ("..." if len(clean_desc) > 260 else ""),
                    "original_url": link,
                    "category": cat,
                    "section_no": sec_info["section_no"],
                    "section_title": sec_info["title"],
                    "section_icon": sec_info["icon"],
                    "pub_date": pub_date
                })

    except Exception as e:
        print(f"[Warning] Failed to fetch feed for {source_cfg.get('id')}: {e}")

    return articles

def crawl_and_process_news(score_threshold: int = None, max_items_per_category: int = 15) -> List[Dict[str, Any]]:
    """
    Fetches news across all sources, scores importance, clusters similar articles,
    and displays ALL qualified topic clusters with multi-source links.
    """
    global KEYWORDS_CFG
    KEYWORDS_CFG = load_keywords_config()
    threshold = score_threshold if score_threshold is not None else KEYWORDS_CFG.get("score_threshold", 20)

    active_sources = load_sources_config()

    raw_articles = []
    seen_titles = set()

    for src in active_sources:
        items = fetch_rss_feed(src)
        for it in items:
            normalized_title = re.sub(r'[^a-zA-Z0-9가-힣]', '', it["title_raw"]).lower()
            if normalized_title in seen_titles or len(it["title_raw"]) < 6:
                continue
            seen_titles.add(normalized_title)
            raw_articles.append(it)
        time.sleep(0.06)

    # Score all raw articles
    scored_articles = []
    for art in raw_articles:
        score, badge_label, badge_class = calculate_importance_score(
            art["title_raw"], art["summary_raw"], art["source"]
        )
        if score >= threshold:
            scored_articles.append({
                **art,
                "importance_score": score,
                "badge_label": badge_label,
                "badge_class": badge_class
            })

    # Group by category and sort by score descending before clustering
    categorized = {cat: [] for cat in SECTION_DEFINITIONS.keys()}
    for art in scored_articles:
        cat = art["category"]
        categorized[cat].append(art)

    # Cluster within each category to eliminate redundancy while preserving related links
    final_clusters_by_cat = {}
    for cat, arts in categorized.items():
        arts.sort(key=lambda x: x["importance_score"], reverse=True)
        clustered = cluster_similar_articles(arts)
        final_clusters_by_cat[cat] = clustered[:max_items_per_category]

    total_clusters = sum(len(v) for v in final_clusters_by_cat.values())
    print(f"\nProcessing and translating {total_clusters} diverse topic clusters (유사 기사 통합 전수 노출)...")

    # Process & Translate Masters and their Related Articles
    final_news = []
    for cat, clusters in final_clusters_by_cat.items():
        for master in clusters:
            title_raw = master["title_raw"]
            summary_raw = master["summary_raw"]

            # Master translation
            if not is_korean_text(title_raw):
                title_ko = translate_to_korean(title_raw)
                title_en = title_raw
                raw_summary_ko = translate_to_korean(summary_raw) if summary_raw else ""
                translated_url = get_google_translated_url(master["original_url"])
            else:
                title_ko = title_raw
                title_en = ""
                raw_summary_ko = summary_raw
                translated_url = master["original_url"]

            # Process related articles in this cluster (top 4 distinct media)
            related_articles = []
            for rel in master.get("related_raw", [])[:4]:
                rel_title_raw = rel["title_raw"]
                if not is_korean_text(rel_title_raw):
                    rel_title_ko = translate_to_korean(rel_title_raw)
                    rel_trans_url = get_google_translated_url(rel["original_url"])
                else:
                    rel_title_ko = rel_title_raw
                    rel_trans_url = rel["original_url"]

                related_articles.append({
                    "source": rel["source"],
                    "title_ko": rel_title_ko,
                    "original_url": rel["original_url"],
                    "translated_url": rel_trans_url
                })
                time.sleep(0.03)

            # Generate Rich Macro Synthesis Summary
            summary_ko = synthesize_macro_summary(
                title_ko=title_ko,
                raw_summary_ko=raw_summary_ko,
                category=cat,
                publisher=master["source"],
                related_articles=related_articles
            )

            final_item = {
                "source": master["source"],
                "title_ko": title_ko,
                "title_en": title_en,
                "summary_ko": summary_ko,
                "original_url": master["original_url"],
                "translated_url": translated_url,
                "category": cat,
                "section_no": master["section_no"],
                "section_title": master["section_title"],
                "section_icon": master["section_icon"],
                "importance_score": master["importance_score"],
                "badge_label": master["badge_label"],
                "badge_class": master["badge_class"],
                "pub_date": master["pub_date"],
                "related_articles": related_articles,
                "crawled_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
            final_news.append(final_item)
            time.sleep(0.06)

    # Sort by section_no
    final_news.sort(key=lambda x: (x["section_no"], -x["importance_score"]))
    return final_news

if __name__ == "__main__":
    news = crawl_and_process_news()
    for n in news:
        rel_info = f" (+{len(n['related_articles'])}개 관련 보도)" if n.get("related_articles") else ""
        print(f"[{n['section_no']} {n['section_icon']}] [{n['badge_label']}] [{n['source']}] {n['title_ko']}{rel_info}")
