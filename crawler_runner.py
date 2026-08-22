"""
Main Crawler Runner for Global Macro Briefing.
Executes both market indicators collection and news translation pipeline,
then exports unified data to data/briefing_data.json and briefing_data.json.
"""

import os
import json
import time
from datetime import datetime, timezone, timedelta

from core.market_indicators import fetch_all_market_indicators
from core.news_crawler import crawl_and_process_news

# KST (Korea Standard Time, UTC+9)
KST = timezone(timedelta(hours=9))

def run_pipeline():
    now_kst = datetime.now(KST)
    print("=" * 60)
    print("  [Global Macro Briefing] Starting Morning Data Pipeline...")
    print(f"  Time (KST): {now_kst.strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    # 1. Fetch Market Indicators
    print("\n>>> [1/2] Fetching 8+ Major Macro Indicators from Yahoo Finance...")
    indicators = fetch_all_market_indicators()
    print(f"    Fetched {len(indicators)} indicators successfully.")
    for ind in indicators:
        status_symbol = "▲" if ind["status"] == "up" else ("▼" if ind["status"] == "down" else "─")
        print(f"    - {ind['name_ko']:<18}: {ind['display_price']:>12} ({status_symbol} {ind['change_percent']:+.2f}%)")

    # 2. Fetch & Translate News
    print("\n>>> [2/2] Fetching, Categorizing, and Translating Major Global News...")
    news_items = crawl_and_process_news(max_items_per_category=5)
    print(f"    Processed {len(news_items)} categorized news items successfully.")

    now = datetime.now(KST)
    weekday_kr = ["월", "화", "수", "목", "금", "토", "일"][now.weekday()]
    date_str = f"{now.year}년 {now.month:02d}월 {now.day:02d}일 ({weekday_kr})"

    # 3. Assemble Output Data
    output_data = {
        "metadata": {
            "title": "글로벌 매크로 & 경제 모닝 브리핑",
            "updated_at": now.strftime("%Y-%m-%d %H:%M:%S"),
            "date_str": date_str,
            "indicator_count": len(indicators),
            "news_count": len(news_items)
        },
        "indicators": indicators,
        "news": news_items
    }

    # 4. Save to files
    base_dir = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(base_dir, "data")
    os.makedirs(data_dir, exist_ok=True)

    paths_to_save = [
        os.path.join(data_dir, "briefing_data.json"),
        os.path.join(base_dir, "briefing_data.json")
    ]

    for p in paths_to_save:
        with open(p, "w", encoding="utf-8") as f:
            json.dump(output_data, f, ensure_ascii=False, indent=2)
        print(f"    Saved: {p}")

    # Also save data.js for direct file:/// double-click compatibility (Zero-CORS issue)
    keywords_cfg = {}
    kw_path = os.path.join(base_dir, "keywords.json")
    if os.path.exists(kw_path):
        with open(kw_path, "r", encoding="utf-8") as f:
            keywords_cfg = json.load(f)

    sources_cfg = []
    src_path = os.path.join(base_dir, "sources.json")
    if os.path.exists(src_path):
        with open(src_path, "r", encoding="utf-8") as f:
            sources_cfg = json.load(f)

    js_content = f"window.__BRIEFING_DATA__ = {json.dumps(output_data, ensure_ascii=False, indent=2)};\n"
    js_content += f"window.__KEYWORDS_CONFIG__ = {json.dumps(keywords_cfg, ensure_ascii=False, indent=2)};\n"
    js_content += f"window.__SOURCES_CONFIG__ = {json.dumps(sources_cfg, ensure_ascii=False, indent=2)};\n"

    for js_path in [os.path.join(data_dir, "data.js"), os.path.join(base_dir, "data.js")]:
        with open(js_path, "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"    Saved JS: {js_path}")

    print("\n" + "=" * 60)
    print("  [Done] Morning Briefing Data Pipeline completed successfully!")
    print("=" * 60)

if __name__ == "__main__":
    run_pipeline()
