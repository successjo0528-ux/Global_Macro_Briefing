/**
 * Global Macro Briefing - 6-Stage Sectional Application Logic
 * with Park Jong-hoon's Framework & Dedicated Keywords/Sources/Bookmarks Modals
 */

// State
let briefingData = null;
let searchQuery = '';
let bookmarkedArticles = [];

// DOM Elements
const tickerGrid = document.getElementById('tickerGrid');
const gridFed = document.getElementById('gridFed');
const gridUS = document.getElementById('gridUS');
const gridForeign = document.getElementById('gridForeign');
const gridKorea = document.getElementById('gridKorea');
const gridAI = document.getElementById('gridAI');

const countFed = document.getElementById('countFed');
const countUS = document.getElementById('countUS');
const countForeign = document.getElementById('countForeign');
const countKorea = document.getElementById('countKorea');
const countAI = document.getElementById('countAI');

const marketDateBadge = document.getElementById('marketDateBadge');
const lastUpdatedText = document.getElementById('lastUpdatedText');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const refreshBtn = document.getElementById('refreshBtn');
const navContainer = document.querySelector('.nav-container');

// 1. Keywords Modal Elements
const keywordsBtn = document.getElementById('keywordsBtn');
const keywordsModal = document.getElementById('keywordsModal');
const closeKeywordsModalBtn = document.getElementById('closeKeywordsModalBtn');
const cancelKeywordsModalBtn = document.getElementById('cancelKeywordsModalBtn');
const saveKeywordsBtn = document.getElementById('saveKeywordsBtn');
const resetKeywordsBtn = document.getElementById('resetKeywordsBtn');

const swellTagsContainer = document.getElementById('swellTags');
const impactTagsContainer = document.getElementById('impactTags');
const swellCountElem = document.getElementById('swellCount');
const impactCountElem = document.getElementById('impactCount');
const newSwellInput = document.getElementById('newSwellInput');
const newImpactInput = document.getElementById('newImpactInput');
const addSwellBtn = document.getElementById('addSwellBtn');
const addImpactBtn = document.getElementById('addImpactBtn');
const thresholdInput = document.getElementById('thresholdInput');

// 2. Sources Modal Elements
const sourcesBtn = document.getElementById('sourcesBtn');
const sourcesModal = document.getElementById('sourcesModal');
const closeSourcesModalBtn = document.getElementById('closeSourcesModalBtn');
const cancelSourcesModalBtn = document.getElementById('cancelSourcesModalBtn');
const saveSourcesBtn = document.getElementById('saveSourcesBtn');
const resetSourcesBtn = document.getElementById('resetSourcesBtn');

const sourcesListContainer = document.getElementById('sourcesList');
const sourcesCountElem = document.getElementById('sourcesCount');
const newSourceNameInput = document.getElementById('newSourceName');
const newSourceUrlInput = document.getElementById('newSourceUrl');
const addSourceBtn = document.getElementById('addSourceBtn');

// 3. Bookmarks Modal Elements
const bookmarksBtn = document.getElementById('bookmarksBtn');
const bookmarksModal = document.getElementById('bookmarksModal');
const closeBookmarksModalBtn = document.getElementById('closeBookmarksModalBtn');
const closeBookmarksFooterBtn = document.getElementById('closeBookmarksFooterBtn');
const bookmarkCounter = document.getElementById('bookmarkCounter');
const savedArticlesCount = document.getElementById('savedArticlesCount');
const bookmarksListContainer = document.getElementById('bookmarksList');
const copyAllBookmarksBtn = document.getElementById('copyAllBookmarksBtn');
const clearAllBookmarksBtn = document.getElementById('clearAllBookmarksBtn');

// Default Configs
const DEFAULT_KEYWORDS_CONFIG = {
  score_threshold: 20,
  swell_keywords: [
    "tga", "재무부 일반계정", "현금 잔고", "스콧 베센트", "베센트", "40조", "40 trillion",
    "국가부채", "national debt", "부채 한도", "debt ceiling", "스테이블코인", "stablecoin",
    "테더", "서클", "단기국채", "t-bills", "hbm", "엔비디아", "nvidia", "tsmc", "딥시크",
    "deepseek", "전력망", "power grid", "변압기", "transformer", "smr", "원전",
    "구리", "copper", "닥터 코퍼", "전력", "전력난", "전력 부족", "power shortage", "electricity",
    "희토류", "히토류", "rare earth", "rare earths", "핵심광물", "critical minerals",
    "그린란드", "greenland", "1500원", "1600원", "패권",
    "이란", "iran", "호르무즈", "hormuz", "strait of hormuz", "중동", "middle east",
    "우크라이나", "ukraine", "러시아 우크라이나", "russia ukraine", "지정학"
  ],
  impact_keywords: [
    "fomc", "금리 결정", "금리 인하", "금리 인상", "rate cut", "rate hike", "파월",
    "powell", "긴급", "shock", "쇼크", "surprise", "서프라이즈", "사상 최대", "record high",
    "경고", "warning", "폭등", "폭락", "crash", "surge", "순매도", "순매수", "외국인"
  ]
};

const DEFAULT_SOURCES_CONFIG = [
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

let currentKeywordsConfig = JSON.parse(JSON.stringify(DEFAULT_KEYWORDS_CONFIG));
let currentSourcesConfig = JSON.parse(JSON.stringify(DEFAULT_SOURCES_CONFIG));

// SVG Sparkline Generator
function generateSparklineSVG(history, status) {
  if (!history || history.length < 2) return '';

  const min = Math.min(...history);
  const max = Math.max(...history);
  const range = max - min === 0 ? 1 : max - min;
  const width = 240;
  const height = 28;
  const padding = 2;

  const points = history.map((val, idx) => {
    const x = padding + (idx / (history.length - 1)) * (width - padding * 2);
    const y = height - padding - ((val - min) / range) * (height - padding * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  let strokeColor = '#64748b';
  if (status === 'up') strokeColor = '#dc2626';
  if (status === 'down') strokeColor = '#2563eb';

  return `
    <div class="sparkline-wrap">
      <svg class="sparkline-svg" viewBox="0 0 ${width} ${height}">
        <polyline
          fill="none"
          stroke="${strokeColor}"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="${points}"
        />
      </svg>
    </div>
  `;
}

// 1. Render Section 1: Financial Indicators (Grouped)
const GROUP_META = {
  macro: {
    title: "🌐 1-1. 글로벌 거시 & 유동성 핵심 지표",
    desc: "미국 단기국채, 10년물(신호등), 30년물, 달러인덱스, 달러/엔 환율, 금, 유가, 비트코인, TGA 잔고 (9종)"
  },
  us_market: {
    title: "🇺🇸 1-2. 미국 증시 & 반도체 / 변동성",
    desc: "S&P 500, 나스닥 100, 필라델피아 반도체, VIX 공포지수 (4종)"
  },
  korea_market: {
    title: "🇰🇷 1-3. 한국 증시 & 금융 지표 (외국인 수급)",
    desc: "원/달러 환율(신호등), 코스피, 코스닥, 국고채 3년물, 국고채 10년물, MSCI 한국 ETF (6종)"
  }
};

function renderSingleTickerCard(ind) {
  let statusClass = 'flat';
  let statusIcon = '─';
  let changeSign = '';

  if (ind.status === 'up') {
    statusClass = 'up';
    statusIcon = '▲';
    changeSign = '+';
  } else if (ind.status === 'down') {
    statusClass = 'down';
    statusIcon = '▼';
    changeSign = '';
  }

  const sparkline = generateSparklineSVG(ind.history, ind.status);
  const chartUrl = ind.chart_url || `https://finance.yahoo.com/quote/${encodeURIComponent(ind.symbol)}/`;

  let extraBadgeHTML = '';
  if (ind.fx_averages) {
    extraBadgeHTML = `
      <div class="fx-avg-row" title="박종훈 환전 기준선 (1년 평균: ${ind.fx_averages.avg_1y.toFixed(1)}원 / 3년 평균: ${ind.fx_averages.avg_3y.toFixed(1)}원)">
        <span class="avg-tag">1년 평균 <strong>${ind.fx_averages.avg_1y.toFixed(1)}원</strong></span>
        <span class="avg-tag">3년 평균 <strong>${ind.fx_averages.avg_3y.toFixed(1)}원</strong></span>
      </div>
    `;
  } else if (ind.yield_signal) {
    extraBadgeHTML = `
      <div class="fx-signal-badge level-${ind.yield_signal.level}" title="${ind.yield_signal.desc}">
        ${ind.yield_signal.tag}
      </div>
    `;
  }

  return `
    <a href="${chartUrl}" target="_blank" rel="noopener noreferrer" class="ticker-card" title="클릭 시 일봉·주봉·월봉·연봉 인터랙티브 상세 차트 열기">
      <div>
        <div class="ticker-top">
          <span class="ticker-name">${ind.name_ko}</span>
          <div class="ticker-symbol-wrap">
            <span class="ticker-symbol">${ind.symbol}</span>
            <span class="external-icon">↗</span>
          </div>
        </div>
        <div class="ticker-price-row">
          <span class="ticker-price">${ind.display_price}</span>
          <div class="price-change-col">
            <span class="period-tag">전일대비</span>
            <span class="change-pill ${statusClass}">
              ${statusIcon} ${changeSign}${ind.change_percent.toFixed(2)}%
            </span>
          </div>
        </div>
        ${extraBadgeHTML}
        <div class="sparkline-header">
          <span>최근 7일 추세</span>
          <span class="chart-link-hint">상세 차트 열기 ↗</span>
        </div>
        ${sparkline}
      </div>
      <div class="ticker-desc">${ind.description}</div>
    </a>
  `;
}

function renderIndicators(indicators) {
  if (!indicators || indicators.length === 0) {
    tickerGrid.innerHTML = '<div class="empty-state">표시할 지표 데이터가 없습니다.</div>';
    return;
  }

  const groups = ['macro', 'us_market', 'korea_market'];
  
  tickerGrid.innerHTML = groups.map(grpKey => {
    const groupItems = indicators.filter(ind => ind.group === grpKey || (!ind.group && grpKey === 'macro'));
    if (groupItems.length === 0) return '';

    const meta = GROUP_META[grpKey] || { title: grpKey, desc: '' };

    return `
      <div class="ticker-subgroup">
        <div class="subgroup-header">
          <h3 class="subgroup-title">${meta.title}</h3>
          <span class="subgroup-desc">${meta.desc}</span>
        </div>
        <div class="ticker-cards-grid">
          ${groupItems.map(renderSingleTickerCard).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Check if source or article is domestic Korean
function isDomesticKorean(item) {
  const src = (item.source || '').toLowerCase();
  const domesticKeywords = [
    '한국경제', '매일경제', '연합뉴스', '연합인포맥스', '조선비즈', '조선일보',
    '한국은행', '국내', '한경', '매경', '인포맥스', '뉴스핌', 'ls증권', '증권', '하이닉스', '삼성'
  ];
  if (domesticKeywords.some(k => src.includes(k))) return true;
  // If original URL is from .kr domain
  if ((item.original_url || '').includes('.kr') || (item.original_url || '').includes('co.kr')) return true;
  // If no English title exists or translated_url equals original_url
  if (!item.title_en || item.translated_url === item.original_url) return true;
  return false;
}

// Render News Card HTML
function createNewsCardHTML(item) {
  const isDirectKo = isDomesticKorean(item);
  const hasEnTitle = !isDirectKo && item.title_en && item.title_en !== item.title_ko;
  const badgeClass = item.badge_class || 'tier-check';
  const badgeLabel = item.badge_label || '📌 체크';

  const isBookmarked = bookmarkedArticles.some(b => b.original_url === item.original_url);

  // Related combined articles from other publishers (Collapsed by default)
  let relatedBoxHTML = '';
  if (item.related_articles && item.related_articles.length > 0) {
    relatedBoxHTML = `
      <div class="related-articles-box">
        <button class="related-toggle-btn" onclick="toggleRelatedArticles(this)" type="button">
          <div class="related-btn-left">
            <span class="related-icon">📰</span>
            <span class="related-btn-title">함께 묶인 타 언론사 보도</span>
            <span class="related-count-badge">+${item.related_articles.length}개 매체</span>
          </div>
          <span class="toggle-arrow">▾ 펼쳐보기</span>
        </button>
        <div class="related-items-list" style="display: none;">
          ${item.related_articles.map(rel => {
            const isRelKo = (rel.translated_url === rel.original_url) || isDomesticKorean(rel);
            const targetUrl = isRelKo ? rel.original_url : rel.translated_url;
            return `
              <div class="related-item-row">
                <span class="related-item-source">${rel.source}</span>
                <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="related-item-link" title="클릭 시 기사 열기">
                  ${rel.title_ko} <span style="font-size:0.7rem; color:var(--text-muted);">↗</span>
                </a>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  return `
    <article class="news-card">
      <div>
        <div class="news-meta">
          <div class="news-meta-left">
            <span class="importance-pill ${badgeClass}">${badgeLabel}</span>
            <span class="news-source-tag">${item.source} (대표)</span>
            <button class="card-bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${encodeURIComponent(item.original_url)}')" title="${isBookmarked ? '즐겨찾기에서 제거' : '즐겨찾기에 저장'}">
              ${isBookmarked ? '❤️ 즐겨찾기' : '🤍 즐겨찾기'}
            </button>
          </div>
          <span class="news-date-tag">${item.pub_date ? item.pub_date.slice(0, 16) : ''}</span>
        </div>
        <h3 class="news-title-ko">${item.title_ko}</h3>
        ${hasEnTitle ? `<p class="news-title-en">${item.title_en}</p>` : ''}
        <div class="news-summary-ko">
          💡 ${item.summary_ko}
        </div>
        ${relatedBoxHTML}
      </div>
      <div class="news-actions">
        ${isDirectKo ? `
          <a href="${item.original_url}" target="_blank" rel="noopener noreferrer" class="link-btn translated" title="원문 기사 바로가기">
            📰 ${item.source} 기사 원문 바로가기
          </a>
        ` : `
          <a href="${item.translated_url}" target="_blank" rel="noopener noreferrer" class="link-btn translated" title="클릭 즉시 한국어로 번역된 ${item.source} 원문 열기">
            🌐 ${item.source} 한글 번역본 보기
          </a>
          <a href="${item.original_url}" target="_blank" rel="noopener noreferrer" class="link-btn original" title="원문 기사 바로가기">
            🔗 ${item.source} 영문 원문 보기
          </a>
        `}
      </div>
    </article>
  `;
}

// Accordion Toggle for Related Articles
window.toggleRelatedArticles = function(btnElem) {
  const list = btnElem.nextElementSibling;
  if (!list) return;
  const isHidden = list.style.display === 'none' || !list.style.display;
  list.style.display = isHidden ? 'flex' : 'none';
  const arrow = btnElem.querySelector('.toggle-arrow');
  if (arrow) {
    arrow.textContent = isHidden ? '▴ 접기' : '▾ 펼쳐보기';
  }
};

// 2~6. Render News Sections (전수 노출)
function renderNewsSections() {
  if (!briefingData || !briefingData.news) return;

  const q = searchQuery.toLowerCase().trim();

  const filterFn = (item) => {
    if (!q) return true;
    return (
      (item.title_ko && item.title_ko.toLowerCase().includes(q)) ||
      (item.title_en && item.title_en.toLowerCase().includes(q)) ||
      (item.summary_ko && item.summary_ko.toLowerCase().includes(q)) ||
      (item.source && item.source.toLowerCase().includes(q))
    );
  };

  const listFed = briefingData.news.filter(n => n.category === 'fed_liquidity' && filterFn(n));
  const listUS = briefingData.news.filter(n => n.category === 'us_economy' && filterFn(n));
  const listForeign = briefingData.news.filter(n => n.category === 'foreign_flows_korea' && filterFn(n));
  const listKorea = briefingData.news.filter(n => n.category === 'korea_economy' && filterFn(n));
  const listAI = briefingData.news.filter(n => n.category === 'ai_hegemony' && filterFn(n));

  if (countFed) countFed.textContent = `${listFed.length}건`;
  if (countUS) countUS.textContent = `${listUS.length}건`;
  if (countForeign) countForeign.textContent = `${listForeign.length}건`;
  if (countKorea) countKorea.textContent = `${listKorea.length}건`;
  if (countAI) countAI.textContent = `${listAI.length}건`;

  gridFed.innerHTML = listFed.length ? listFed.map(createNewsCardHTML).join('') : '<div class="empty-state">해당 조건의 뉴스가 없습니다.</div>';
  gridUS.innerHTML = listUS.length ? listUS.map(createNewsCardHTML).join('') : '<div class="empty-state">해당 조건의 뉴스가 없습니다.</div>';
  gridForeign.innerHTML = listForeign.length ? listForeign.map(createNewsCardHTML).join('') : '<div class="empty-state">해당 조건의 뉴스가 없습니다.</div>';
  gridKorea.innerHTML = listKorea.length ? listKorea.map(createNewsCardHTML).join('') : '<div class="empty-state">해당 조건의 뉴스가 없습니다.</div>';
  if (gridAI) {
    gridAI.innerHTML = listAI.length ? listAI.map(createNewsCardHTML).join('') : '<div class="empty-state">해당 조건의 뉴스가 없습니다.</div>';
  }
}

// Apply Data
function applyData(data) {
  briefingData = data;
  if (briefingData.metadata) {
    marketDateBadge.textContent = briefingData.metadata.date_str || '오늘의 매크로 브리핑';
    lastUpdatedText.textContent = `${briefingData.metadata.updated_at} 갱신`;
  }
  renderIndicators(briefingData.indicators);
  renderNewsSections();
}

// Load Data
async function loadData() {
  if (window.__BRIEFING_DATA__) {
    applyData(window.__BRIEFING_DATA__);
  }

  try {
    const response = await fetch(`briefing_data.json?_t=${Date.now()}`);
    if (response.ok) {
      const freshData = await response.json();
      applyData(freshData);
    }
  } catch (err) {
    if (!window.__BRIEFING_DATA__) {
      console.error('Failed to load briefing data:', err);
      lastUpdatedText.textContent = '데이터 로드 실패';
    }
  }
}

// =========================================================================
// 1. KEYWORDS MANAGEMENT MODAL LOGIC (키워드 전용)
// =========================================================================
async function loadKeywordsConfig() {
  try {
    const res = await fetch('keywords.json?_t=' + Date.now());
    if (res.ok) {
      const data = await res.json();
      if (data && data.swell_keywords && data.impact_keywords) {
        currentKeywordsConfig = data;
        return;
      }
    }
  } catch (e) {}

  if (window.__KEYWORDS_CONFIG__ && window.__KEYWORDS_CONFIG__.swell_keywords) {
    currentKeywordsConfig = window.__KEYWORDS_CONFIG__;
    return;
  }

  const saved = localStorage.getItem('gmb_keywords_config');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.swell_keywords && parsed.swell_keywords.length > 0) {
        currentKeywordsConfig = parsed;
        return;
      }
    } catch (e) {}
  }

  currentKeywordsConfig = JSON.parse(JSON.stringify(DEFAULT_KEYWORDS_CONFIG));
}

function renderKeywordsTags() {
  if (!swellTagsContainer || !impactTagsContainer) return;

  swellTagsContainer.innerHTML = currentKeywordsConfig.swell_keywords.map((kw, idx) => `
    <span class="tag-chip">
      ${kw}
      <span class="delete-tag" onclick="deleteKeyword('swell', ${idx})">✕</span>
    </span>
  `).join('');
  if (swellCountElem) swellCountElem.textContent = `${currentKeywordsConfig.swell_keywords.length}개`;

  impactTagsContainer.innerHTML = currentKeywordsConfig.impact_keywords.map((kw, idx) => `
    <span class="tag-chip">
      ${kw}
      <span class="delete-tag" onclick="deleteKeyword('impact', ${idx})">✕</span>
    </span>
  `).join('');
  if (impactCountElem) impactCountElem.textContent = `${currentKeywordsConfig.impact_keywords.length}개`;

  if (thresholdInput) thresholdInput.value = currentKeywordsConfig.score_threshold || 20;
}

window.deleteKeyword = function(type, idx) {
  if (type === 'swell') {
    currentKeywordsConfig.swell_keywords.splice(idx, 1);
  } else if (type === 'impact') {
    currentKeywordsConfig.impact_keywords.splice(idx, 1);
  }
  renderKeywordsTags();
};

function addKeyword(type, val) {
  const cleanVal = val.trim();
  if (!cleanVal) return;

  if (type === 'swell') {
    if (!currentKeywordsConfig.swell_keywords.includes(cleanVal)) {
      currentKeywordsConfig.swell_keywords.push(cleanVal);
    }
    if (newSwellInput) newSwellInput.value = '';
  } else if (type === 'impact') {
    if (!currentKeywordsConfig.impact_keywords.includes(cleanVal)) {
      currentKeywordsConfig.impact_keywords.push(cleanVal);
    }
    if (newImpactInput) newImpactInput.value = '';
  }
  renderKeywordsTags();
}

function openKeywordsModal() {
  loadKeywordsConfig();
  renderKeywordsTags();
  keywordsModal.style.display = 'flex';
}

function closeKeywordsModal() {
  keywordsModal.style.display = 'none';
}

if (keywordsBtn) keywordsBtn.addEventListener('click', openKeywordsModal);
if (closeKeywordsModalBtn) closeKeywordsModalBtn.addEventListener('click', closeKeywordsModal);
if (cancelKeywordsModalBtn) cancelKeywordsModalBtn.addEventListener('click', closeKeywordsModal);

if (keywordsModal) {
  keywordsModal.addEventListener('click', (e) => {
    if (e.target === keywordsModal) closeKeywordsModal();
  });
}

if (addSwellBtn) addSwellBtn.addEventListener('click', () => addKeyword('swell', newSwellInput.value));
if (newSwellInput) {
  newSwellInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addKeyword('swell', newSwellInput.value);
    }
  });
}

if (addImpactBtn) addImpactBtn.addEventListener('click', () => addKeyword('impact', newImpactInput.value));
if (newImpactInput) {
  newImpactInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addKeyword('impact', newImpactInput.value);
    }
  });
}

if (resetKeywordsBtn) {
  resetKeywordsBtn.addEventListener('click', () => {
    if (confirm('키워드를 박종훈 소장의 초기 기본값으로 복원하시겠습니까?')) {
      currentKeywordsConfig = JSON.parse(JSON.stringify(DEFAULT_KEYWORDS_CONFIG));
      renderKeywordsTags();
    }
  });
}

if (saveKeywordsBtn) {
  saveKeywordsBtn.addEventListener('click', async () => {
    currentKeywordsConfig.score_threshold = parseInt(thresholdInput.value, 10) || 20;
    localStorage.setItem('gmb_keywords_config', JSON.stringify(currentKeywordsConfig));

    try {
      await fetch('/api/save_keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentKeywordsConfig)
      });
      alert('✅ 키워드 설정이 성공적으로 저장되었습니다!\n새 키워드가 다음 크롤링에 자동 반영됩니다.');
    } catch (e) {
      alert('✅ 키워드 설정이 브라우저에 저장되었습니다.');
    }

    closeKeywordsModal();
  });
}

// =========================================================================
// 2. SOURCES MANAGEMENT MODAL LOGIC (출처 전용)
// =========================================================================
async function loadSourcesConfig() {
  try {
    const res = await fetch('sources.json?_t=' + Date.now());
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        currentSourcesConfig = data;
        return;
      }
    }
  } catch (e) {}

  if (window.__SOURCES_CONFIG__ && Array.isArray(window.__SOURCES_CONFIG__)) {
    currentSourcesConfig = window.__SOURCES_CONFIG__;
    return;
  }

  const saved = localStorage.getItem('gmb_sources_config');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length >= 15) {
        currentSourcesConfig = parsed;
        return;
      }
    } catch (e) {}
  }

  currentSourcesConfig = JSON.parse(JSON.stringify(DEFAULT_SOURCES_CONFIG));
}

function renderSourcesList() {
  if (!sourcesListContainer) return;

  sourcesListContainer.innerHTML = currentSourcesConfig.map((src, idx) => {
    const isEnabled = src.enabled !== false;
    const websiteUrl = src.website || (src.url && src.url.startsWith('http') ? src.url : `https://${src.domain || src.url}`);
    const domainLabel = src.domain || (src.website ? src.website.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0] : '웹사이트');

    return `
      <div class="source-item-card">
        <div class="source-item-info">
          <div class="source-item-top">
            <span class="source-item-name">${src.name}</span>
            <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" class="source-web-link" title="공식 웹사이트 바로가기">
              ${domainLabel} ↗
            </a>
          </div>
          <span class="source-item-desc">${src.description || '글로벌 경제 및 금융 심층 보도'}</span>
        </div>
        <div class="source-item-actions">
          <button class="source-toggle-btn ${isEnabled ? 'enabled' : ''}" onclick="toggleSource(${idx})">
            ${isEnabled ? '✓ 수집 활성' : '✕ 수집 해제'}
          </button>
          <button class="source-delete-btn" onclick="deleteSource(${idx})" title="출처 삭제">🗑️</button>
        </div>
      </div>
    `;
  }).join('');

  if (sourcesCountElem) sourcesCountElem.textContent = `${currentSourcesConfig.length}개 매체`;
}

window.toggleSource = function(idx) {
  currentSourcesConfig[idx].enabled = !currentSourcesConfig[idx].enabled;
  renderSourcesList();
};

window.deleteSource = function(idx) {
  if (confirm(`'${currentSourcesConfig[idx].name}' 출처를 삭제하시겠습니까?`)) {
    currentSourcesConfig.splice(idx, 1);
    renderSourcesList();
  }
};

function addSource() {
  const name = newSourceNameInput.value.trim();
  const rawUrl = newSourceUrlInput.value.trim();

  if (!name || !rawUrl) {
    alert('언론사/기관명과 대표 홈페이지 주소를 모두 입력해주세요.');
    return;
  }

  let websiteUrl = rawUrl;
  if (!websiteUrl.startsWith('http://') && !websiteUrl.startsWith('https://')) {
    websiteUrl = 'https://' + websiteUrl;
  }
  const domain = websiteUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];

  currentSourcesConfig.push({
    id: `custom_${Date.now()}`,
    name: name,
    website: websiteUrl,
    domain: domain,
    description: `${name} 공식 홈페이지 기반 자동 경제 뉴스 수집`,
    enabled: true
  });

  newSourceNameInput.value = '';
  newSourceUrlInput.value = '';
  renderSourcesList();
}

function openSourcesModal() {
  loadSourcesConfig();
  renderSourcesList();
  sourcesModal.style.display = 'flex';
}

function closeSourcesModal() {
  sourcesModal.style.display = 'none';
}

if (addSourceBtn) addSourceBtn.addEventListener('click', addSource);
if (sourcesBtn) sourcesBtn.addEventListener('click', openSourcesModal);
if (closeSourcesModalBtn) closeSourcesModalBtn.addEventListener('click', closeSourcesModal);
if (cancelSourcesModalBtn) cancelSourcesModalBtn.addEventListener('click', closeSourcesModal);

if (sourcesModal) {
  sourcesModal.addEventListener('click', (e) => {
    if (e.target === sourcesModal) closeSourcesModal();
  });
}

if (resetSourcesBtn) {
  resetSourcesBtn.addEventListener('click', () => {
    if (confirm('출처 목록을 초기 기본값으로 복원하시겠습니까?')) {
      currentSourcesConfig = JSON.parse(JSON.stringify(DEFAULT_SOURCES_CONFIG));
      renderSourcesList();
    }
  });
}

if (saveSourcesBtn) {
  saveSourcesBtn.addEventListener('click', async () => {
    localStorage.setItem('gmb_sources_config', JSON.stringify(currentSourcesConfig));

    try {
      await fetch('/api/save_sources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentSourcesConfig)
      });
      alert('✅ 크롤링 출처 설정이 성공적으로 저장되었습니다!\n등록된 출처들로 기사를 수집합니다.');
    } catch (e) {
      alert('✅ 출처 설정이 브라우저에 저장되었습니다.');
    }

    closeSourcesModal();
  });
}

// =========================================================================
// 3. BOOKMARKS (SCRAP ARCHIVE) LOGIC (영구 기사 요약 보관함)
// =========================================================================
function loadBookmarks() {
  try {
    const saved = localStorage.getItem('gmb_bookmarked_articles');
    if (saved) {
      bookmarkedArticles = JSON.parse(saved);
    }
  } catch (e) {
    bookmarkedArticles = [];
  }
  updateBookmarkCounter();
}

function saveBookmarks() {
  localStorage.setItem('gmb_bookmarked_articles', JSON.stringify(bookmarkedArticles));
  updateBookmarkCounter();
}

function updateBookmarkCounter() {
  if (bookmarkCounter) {
    bookmarkCounter.textContent = bookmarkedArticles.length;
  }
  if (savedArticlesCount) {
    savedArticlesCount.textContent = bookmarkedArticles.length;
  }
}

window.toggleBookmark = function(encodedUrl) {
  const url = decodeURIComponent(encodedUrl);
  
  // Find article in briefingData
  let targetArticle = null;
  if (briefingData && briefingData.news) {
    targetArticle = briefingData.news.find(n => n.original_url === url);
  }

  const existingIdx = bookmarkedArticles.findIndex(b => b.original_url === url);

  if (existingIdx >= 0) {
    bookmarkedArticles.splice(existingIdx, 1);
  } else if (targetArticle) {
    const copy = JSON.parse(JSON.stringify(targetArticle));
    copy.saved_at = new Date().toLocaleString();
    bookmarkedArticles.unshift(copy);
  }

  saveBookmarks();
  renderNewsSections(); // Refresh button states on cards
  if (bookmarksModal && bookmarksModal.style.display === 'flex') {
    renderBookmarksList();
  }
};

function renderBookmarksList() {
  if (!bookmarksListContainer) return;

  if (bookmarkedArticles.length === 0) {
    bookmarksListContainer.innerHTML = `
      <div class="empty-state" style="padding: 2.5rem 1rem;">
        ❤️ 아직 즐겨찾기한 기사 요약이 없습니다.<br>
        <span style="font-size:0.8rem; color:var(--text-muted); margin-top:0.4rem; display:inline-block;">
          마음에 드는 기사 카드의 <strong>[🤍 즐겨찾기]</strong> 하트 버튼을 누르면 이곳에 영구 보관됩니다.
        </span>
      </div>
    `;
    return;
  }

  bookmarksListContainer.innerHTML = bookmarkedArticles.map((item, idx) => {
    const isDirectKo = isDomesticKorean(item);
    const badgeClass = item.badge_class || 'tier-check';
    const badgeLabel = item.badge_label || '📌 체크';

    return `
      <div class="bookmark-item-card">
        <div class="bookmark-item-top">
          <div class="bookmark-item-meta">
            <span class="importance-pill ${badgeClass}">${badgeLabel}</span>
            <span class="news-source-tag">${item.source}</span>
            <span class="bookmark-saved-date">⏱️ 저장: ${item.saved_at || '최근'}</span>
          </div>
          <button class="source-delete-btn" onclick="deleteBookmark(${idx})" title="즐겨찾기에서 제거">🗑️ 삭제</button>
        </div>
        <h4 class="bookmark-item-title">${item.title_ko}</h4>
        <div class="bookmark-item-summary">
          💡 ${item.summary_ko}
        </div>
        <div class="bookmark-item-actions">
          <div class="bookmark-links">
            ${isDirectKo ? `
              <a href="${item.original_url}" target="_blank" rel="noopener noreferrer" class="link-btn translated" style="padding:0.3rem 0.7rem; font-size:0.75rem;">
                📰 ${item.source} 원문 바로가기 ↗
              </a>
            ` : `
              <a href="${item.translated_url}" target="_blank" rel="noopener noreferrer" class="link-btn translated" style="padding:0.3rem 0.7rem; font-size:0.75rem;">
                🌐 한글 번역본 ↗
              </a>
              <a href="${item.original_url}" target="_blank" rel="noopener noreferrer" class="link-btn original" style="padding:0.3rem 0.7rem; font-size:0.75rem;">
                🔗 원문 ↗
              </a>
            `}
          </div>
          <div class="bookmark-quick-tools">
            <button class="action-btn" onclick="copySingleBookmark(${idx})" style="padding:0.3rem 0.7rem; font-size:0.75rem;" title="클립보드에 요약 복사">
              📋 요약 복사
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.deleteBookmark = function(idx) {
  bookmarkedArticles.splice(idx, 1);
  saveBookmarks();
  renderBookmarksList();
  renderNewsSections();
};

window.copySingleBookmark = function(idx) {
  const item = bookmarkedArticles[idx];
  if (!item) return;

  const text = `[글로벌 매크로 요약 즐겨찾기]\n📌 ${item.title_ko}\n출처: ${item.source}\n\n💡 핵심 요약:\n${item.summary_ko}\n\n🔗 원문 링크: ${item.original_url}`;
  navigator.clipboard.writeText(text).then(() => {
    alert('📋 선택한 기사 요약이 클립보드에 복사되었습니다!\n원하는 메모장이나 메신저에 붙여넣기(Ctrl+V)하세요.');
  }).catch(() => {
    alert('복사에 실패했습니다.');
  });
};

function copyAllBookmarks() {
  if (bookmarkedArticles.length === 0) {
    alert('즐겨찾기에 저장된 기사가 없습니다.');
    return;
  }

  let fullText = `═══════════════════════════════════════════\n`;
  fullText += `❤️ 글로벌 매크로 브리핑 - 나만의 즐겨찾기 모음\n`;
  fullText += `총 ${bookmarkedArticles.length}건 | 생성일: ${new Date().toLocaleString()}\n`;
  fullText += `═══════════════════════════════════════════\n\n`;

  bookmarkedArticles.forEach((item, idx) => {
    fullText += `[#${idx + 1}] ${item.title_ko} (${item.source})\n`;
    fullText += `💡 ${item.summary_ko}\n`;
    fullText += `🔗 링크: ${item.original_url}\n\n`;
    fullText += `───────────────────────────────────────────\n\n`;
  });

  navigator.clipboard.writeText(fullText).then(() => {
    alert(`📋 즐겨찾기한 ${bookmarkedArticles.length}개 전체 기사 요약이 클립보드에 복사되었습니다!`);
  }).catch(() => {
    alert('전체 복사에 실패했습니다.');
  });
}

function clearAllBookmarks() {
  if (bookmarkedArticles.length === 0) {
    alert('즐겨찾기 목록이 이미 비어있습니다.');
    return;
  }

  if (confirm(`즐겨찾기에 저장된 ${bookmarkedArticles.length}개의 기사를 모두 삭제하시겠습니까?`)) {
    bookmarkedArticles = [];
    saveBookmarks();
    renderBookmarksList();
    renderNewsSections();
  }
}

function openBookmarksModal() {
  loadBookmarks();
  renderBookmarksList();
  bookmarksModal.style.display = 'flex';
}

function closeBookmarksModal() {
  bookmarksModal.style.display = 'none';
}

if (bookmarksBtn) bookmarksBtn.addEventListener('click', openBookmarksModal);
if (closeBookmarksModalBtn) closeBookmarksModalBtn.addEventListener('click', closeBookmarksModal);
if (closeBookmarksFooterBtn) closeBookmarksFooterBtn.addEventListener('click', closeBookmarksModal);
if (copyAllBookmarksBtn) copyAllBookmarksBtn.addEventListener('click', copyAllBookmarks);
if (clearAllBookmarksBtn) clearAllBookmarksBtn.addEventListener('click', clearAllBookmarks);

if (bookmarksModal) {
  bookmarksModal.addEventListener('click', (e) => {
    if (e.target === bookmarksModal) closeBookmarksModal();
  });
}

// Navigation Bar Interaction
if (navContainer) {
  navContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-item');
    if (!btn) return;

    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const targetId = btn.dataset.target;
    if (targetId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

// Search
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
  renderNewsSections();
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.style.display = 'none';
  renderNewsSections();
});

refreshBtn.addEventListener('click', () => {
  loadData();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('gmb_theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '🌙';
  }
}

themeToggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  if (isDark) {
    document.body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('gmb_theme', 'light');
  } else {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('gmb_theme', 'dark');
  }
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadBookmarks();
  loadData();
  loadKeywordsConfig();
  loadSourcesConfig();
});
