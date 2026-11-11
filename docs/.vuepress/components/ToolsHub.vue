<template>
  <div class="ipdodo-tools-page">
    <!-- Top Promo Ad Banner (IPdodo 横幅广告模式 - 神行加速专属福利) -->
    <a href="/go/shenxing/" target="_blank" rel="noopener noreferrer nofollow" class="top-ad-banner">
      <div class="ad-banner-inner">
        <div class="ad-left">
          <div class="ad-brand-logo">
            <img src="/images/airports/shenxing-logo.webp" alt="神行加速" class="ad-airport-logo" />
            <span class="ad-brand-text">神行加速</span>
          </div>
          <div class="ad-event-tag">
            <span class="event-glow-text">BGP 三线优化</span>
          </div>
        </div>

        <div class="ad-center-pill">
          <span class="pill-text">
            新加坡 ISP 住宅 IP · 新客优惠券 <span class="coupon-code">sx0077</span>，首单低至 <em>7 折</em>
          </span>
        </div>

        <div class="ad-right-action">
          <span class="ad-btn-black">立即抢购 &gt;</span>
        </div>
      </div>
    </a>

    <!-- HERO HEADER -->
    <header class="tools-hero">
      <div class="hero-container">
        <nav class="tools-breadcrumb">
          <a href="/">首页</a>
          <span class="sep">/</span>
          <span class="current">实用工具</span>
        </nav>

        <div class="hero-badge-wrap">
          <span class="hero-badge">
            <span class="badge-dot"></span>
            跨境生态导航 · 聚合 80+ 出海实用工具
          </span>
        </div>

        <h1 class="hero-title">出海跨境实用工具与生态伙伴</h1>
        <p class="hero-subtitle">
          精选指纹浏览器、社媒矩阵自动化、海外ERP、网络纯净度检测、云手机及多账号隔离工具，赋能跨境出海业务全链路增长
        </p>

        <!-- Search Bar -->
        <div class="hero-search-box">
          <div class="search-input-wrapper">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M20 20L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input 
              v-model="searchKeyword" 
              type="text" 
              placeholder="搜索出海工具、指纹浏览器、TikTok运营、IP检测或ERP..." 
              class="search-input"
            />
            <button v-if="searchKeyword" class="search-clear-btn" @click="searchKeyword = ''">×</button>
          </div>
          <div v-if="searchKeyword" class="search-stats">
            找到 <strong>{{ filteredTotalCount }}</strong> 个匹配工具
          </div>
        </div>
      </div>
    </header>

    <!-- MAIN BODY: SIDEBAR + CONTENT -->
    <div class="tools-main-container">
      <!-- MOBILE STICKY NAV -->
      <nav v-if="!searchKeyword" class="mobile-cat-nav">
        <button 
          v-for="(cat, idx) in categories" 
          :key="cat.navigate_id"
          class="mobile-cat-pill"
          :class="{ active: activeCategoryIdx === idx }"
          @click="scrollToCategory(idx)"
        >
          <span class="pill-icon">{{ cat.icon }}</span>
          <span class="pill-name">{{ cat.navigate_name }}</span>
        </button>
      </nav>

      <div class="tools-layout">
        <!-- DESKTOP STICKY SIDEBAR -->
        <aside v-if="!searchKeyword" class="tools-sidebar">
          <div class="sidebar-inner">
            <div class="sidebar-header">
              <span class="sidebar-title">工具全部分类</span>
              <span class="sidebar-badge">{{ totalToolsCount }} 款</span>
            </div>

            <ul class="sidebar-nav-list">
              <li 
                v-for="(cat, idx) in categories" 
                :key="cat.navigate_id"
                class="sidebar-nav-item"
                :class="{ active: activeCategoryIdx === idx }"
                @click="scrollToCategory(idx)"
              >
                <div class="nav-item-content">
                  <span class="nav-icon">{{ cat.icon }}</span>
                  <span class="nav-name">{{ cat.navigate_name }}</span>
                </div>
                <span class="nav-count">{{ getCategoryCount(cat) }}</span>
              </li>
            </ul>
          </div>
        </aside>

        <!-- CONTENT AREA -->
        <main class="tools-content-area" :class="{ 'full-width': searchKeyword }">
          <!-- SEARCH RESULTS VIEW -->
          <div v-if="searchKeyword" class="search-results-section">
            <div class="section-head">
              <h2 class="section-title">
                搜索结果: “{{ searchKeyword }}”
              </h2>
              <button class="reset-search-btn" @click="searchKeyword = ''">查看全部工具</button>
            </div>

            <div v-if="filteredCards.length > 0" class="tools-grid">
              <div 
                v-for="card in filteredCards" 
                :key="card.name" 
                class="tool-card"
                :class="{ 'featured-card': card.tag && (card.tag.includes('折') || card.tag.includes('免') || card.tag.includes('精选')) }"
              >
                <span v-if="card.tag" class="card-tag" :class="getTagClass(card.tag)">
                  {{ card.tag }}
                </span>

                <div class="card-top-row">
                  <div class="card-logo-wrap">
                    <img 
                      :src="card.local_logo" 
                      :alt="card.name" 
                      class="card-logo"
                      loading="lazy"
                      @error="handleImgError($event, card.name)"
                    />
                  </div>
                  <div class="card-title-wrap">
                    <h3 class="card-name" :title="card.name">{{ card.name }}</h3>
                    <span v-if="card.categoryName" class="card-cat-badge">{{ card.categoryName }}</span>
                  </div>
                </div>

                <p class="card-desc" :title="card.description">
                  {{ card.description }}
                </p>

                <div class="card-action-row">
                  <a 
                    :href="card.redirect_link" 
                    :target="card.type === 'internal' ? '_self' : '_blank'"
                    :rel="card.type === 'internal' ? '' : 'noopener noreferrer nofollow'"
                    class="card-link-btn"
                  >
                    <span>{{ card.type === 'internal' ? '查看站内实操' : '直达官网' }}</span>
                    <span class="btn-arrow">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <div v-else class="empty-search-state">
              <div class="empty-icon">🔍</div>
              <h3 class="empty-title">未找到相关工具</h3>
              <p class="empty-desc">换个关键词试试，或直接在左侧分类中浏览</p>
              <button class="dodo-btn dodo-btn-primary" @click="searchKeyword = ''">返回浏览全部</button>
            </div>
          </div>

          <!-- NORMAL CATEGORIZED VIEW -->
          <div v-else class="categories-container">
            <section 
              v-for="(cat, catIdx) in categories" 
              :id="'category-' + catIdx"
              :key="cat.navigate_id"
              class="category-group"
            >
              <span v-if="cat.navigate_name === '指纹浏览器'" id="category-fingerprint" class="category-anchor"></span>
              <div class="cat-group-header">
                <div class="cat-title-left">
                  <span class="cat-icon-lg">{{ cat.icon }}</span>
                  <h2 class="cat-title">{{ cat.navigate_name }}</h2>
                  <span class="cat-count-badge">{{ getCategoryCount(cat) }} 款</span>
                </div>
                <span v-if="cat.navigate_name === '专属推荐'" class="cat-featured-tag">官方严选 · 独家福利</span>
              </div>

              <!-- CARDS GRID -->
              <div 
                v-for="sub in cat.list" 
                :key="sub.column_id" 
                class="sub-column-block"
              >
                <div v-if="sub.column_name && sub.column_name !== '综合' && cat.list.length > 1" class="sub-col-title">
                  {{ sub.column_name }}
                </div>

                <div class="tools-grid" :class="{ 'vip-grid': cat.navigate_name === '专属推荐' }">
                  <div 
                    v-for="card in sub.card_list" 
                    :key="card.name"
                    class="tool-card"
                    :class="{ 'vip-card': cat.navigate_name === '专属推荐', 'featured-card': card.tag && (card.tag.includes('折') || card.tag.includes('免') || card.tag.includes('精选')) }"
                  >
                    <!-- Corner Tag Badge -->
                    <span v-if="card.tag" class="card-tag" :class="getTagClass(card.tag)">
                      {{ card.tag }}
                    </span>

                    <div class="card-top-row">
                      <div class="card-logo-wrap">
                        <img 
                          :src="card.local_logo" 
                          :alt="card.name" 
                          class="card-logo"
                          loading="lazy"
                          @error="handleImgError($event, card.name)"
                        />
                      </div>
                      <div class="card-title-wrap">
                        <h3 class="card-name" :title="card.name">{{ card.name }}</h3>
                        <span v-if="card.type === 'internal'" class="card-internal-badge">本站实测</span>
                      </div>
                    </div>

                    <p class="card-desc" :title="card.description">
                      {{ card.description }}
                    </p>

                    <div class="card-action-row">
                      <a 
                        :href="card.redirect_link" 
                        :target="card.type === 'internal' ? '_self' : '_blank'"
                        :rel="card.type === 'internal' ? '' : 'noopener noreferrer nofollow'"
                        class="card-link-btn"
                      >
                        <span>{{ card.type === 'internal' ? '查看站内实操' : '直达官网' }}</span>
                        <span class="btn-arrow">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <!-- BOTTOM CALLOUT BANNER -->
      <div class="partner-cta-card">
        <div class="cta-content">
          <span class="cta-tag">PARTNERSHIP</span>
          <h3 class="cta-title">成为推手 · PushLab 生态合作伙伴</h3>
          <p class="cta-desc">
            面向跨境 SaaS、指纹浏览器、跨境支付与营销工具，提供品牌收录、测评评级与定向精准用户导流，共赢全球跨境市场。
          </p>
        </div>
        <div class="cta-action">
          <a href="https://t.me/wanfengzn7" target="_blank" rel="noopener noreferrer nofollow" class="dodo-btn dodo-btn-white">Telegram 商务合作 (@wanfengzn7) &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import toolsRawData from '../data/tools.json'

const categories = ref(toolsRawData)
const searchKeyword = ref('')
const activeCategoryIdx = ref(0)

const totalToolsCount = computed(() => {
  let count = 0
  categories.value.forEach((cat: any) => {
    if (cat.list) {
      cat.list.forEach((sub: any) => {
        if (sub.card_list) count += sub.card_list.length
      })
    }
  })
  return count
})

function getCategoryCount(cat: any) {
  let count = 0
  if (cat.list) {
    cat.list.forEach((sub: any) => {
      if (sub.card_list) count += sub.card_list.length
    })
  }
  return count
}

const allCardsFlattened = computed(() => {
  const result: any[] = []
  categories.value.forEach((cat: any) => {
    if (cat.list) {
      cat.list.forEach((sub: any) => {
        if (sub.card_list) {
          sub.card_list.forEach((card: any) => {
            result.push({
              ...card,
              categoryName: cat.navigate_name
            })
          })
        }
      })
    }
  })
  return result
})

const filteredCards = computed(() => {
  const kw = searchKeyword.value.trim().toLowerCase()
  if (!kw) return []
  return allCardsFlattened.value.filter((c: any) => {
    return (
      (c.name && c.name.toLowerCase().includes(kw)) ||
      (c.description && c.description.toLowerCase().includes(kw)) ||
      (c.categoryName && c.categoryName.toLowerCase().includes(kw)) ||
      (c.tag && c.tag.toLowerCase().includes(kw))
    )
  })
})

const filteredTotalCount = computed(() => filteredCards.value.length)

function getTagClass(tag: string) {
  if (tag.includes('折') || tag.includes('9')) return 'tag-discount'
  if (tag.includes('免') || tag.includes('试用')) return 'tag-free'
  if (tag.includes('精选') || tag.includes('实测')) return 'tag-featured'
  if (tag.includes('积分') || tag.includes('优惠')) return 'tag-credit'
  return 'tag-default'
}

function handleImgError(event: Event, name: string) {
  const target = event.target as HTMLImageElement
  // Replace with a simple SVG fallback
  const firstLetter = (name && name[0]) ? name[0].toUpperCase() : 'T'
  target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="%23E6FAF4"/><text x="50%" y="54%" font-size="28" font-family="sans-serif" font-weight="bold" fill="%230BC36B" dominant-baseline="middle" text-anchor="middle">${firstLetter}</text></svg>`
}

function scrollToCategory(idx: number, smooth: boolean = true) {
  activeCategoryIdx.value = idx
  const el = document.getElementById('category-' + idx)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' })
  }
}

// Scroll spy for sidebar & Hash/Query listener
let observer: IntersectionObserver | null = null

function handleHashOrQuery(smooth: boolean = true) {
  if (typeof window === 'undefined') return
  const hash = window.location.hash || ''
  const search = window.location.search || ''
  const params = new URLSearchParams(search)
  const catParam = params.get('cat')

  if (catParam === 'fingerprint' || catParam === '2' || hash === '#category-fingerprint' || hash.toLowerCase().includes('fingerprint') || hash === '#category-2') {
    scrollToCategory(2, smooth)
    return
  }
  if (catParam) {
    const idx = parseInt(catParam, 10)
    if (!isNaN(idx) && idx >= 0 && idx < categories.value.length) {
      scrollToCategory(idx, smooth)
      return
    }
  }
  if (hash.startsWith('#category-')) {
    const idx = parseInt(hash.replace('#category-', ''), 10)
    if (!isNaN(idx) && idx >= 0 && idx < categories.value.length) {
      scrollToCategory(idx, smooth)
    }
  }
}

onMounted(() => {
  // Check hash or ?cat query on page mount
  setTimeout(() => handleHashOrQuery(false), 150)
  setTimeout(() => handleHashOrQuery(true), 500)

  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => handleHashOrQuery(true))
  }

  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (id && id.startsWith('category-')) {
            const idx = parseInt(id.replace('category-', ''), 10)
            if (!isNaN(idx)) {
              activeCategoryIdx.value = idx
            }
          }
        }
      })
    }, {
      rootMargin: '-80px 0px -70% 0px',
      threshold: 0
    })

    categories.value.forEach((_, idx) => {
      const el = document.getElementById('category-' + idx)
      if (el && observer) observer.observe(el)
    })
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (typeof window !== 'undefined') {
    window.removeEventListener('hashchange', handleHash)
  }
})
</script>

<style scoped>
/* ========================================================
   IPDODO HIGH-TECH PARTNERS / TOOLS ECOSYSTEM STYLES
   ======================================================== */
.ipdodo-tools-page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #323443;
  background-color: #f8fafc;
  min-height: 100vh;
  padding-bottom: 80px;
}

/* --- Top Promo Ad Banner --- */
.top-ad-banner {
  display: block;
  text-decoration: none;
  background: linear-gradient(90deg, #d3f9ec 0%, #e2fbf7 25%, #ebfcff 50%, #daf9f0 75%, #cef8ea 100%);
  background-size: 200% 100%;
  border-bottom: 1px solid rgba(11, 195, 107, 0.25);
  box-shadow: 0 2px 10px rgba(11, 195, 107, 0.08);
  padding: 8px 24px;
  min-height: 50px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.top-ad-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  transform: skewX(-25deg);
  animation: shine-sweep 6s infinite ease-in-out;
}

@keyframes shine-sweep {
  0% { left: -100%; }
  25% { left: 150%; }
  100% { left: 150%; }
}

.top-ad-banner:hover {
  filter: brightness(1.02);
}

.ad-banner-inner {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.ad-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.ad-brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ad-airport-logo {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  object-fit: contain;
  vertical-align: middle;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.15));
}

.ad-brand-text {
  font-size: 19px;
  font-weight: 900;
  color: #065f46;
  letter-spacing: -0.5px;
}

.ad-event-tag {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 4px;
}

.event-glow-text {
  font-size: 19px;
  font-weight: 950;
  font-style: italic;
  color: #000000;
  letter-spacing: 0.5px;
  padding: 2px 6px 2px 10px;
  text-shadow: 
    -1px -1px 0 #00FFA3,
     1px -1px 0 #00FFA3,
    -1px  1px 0 #00FFA3,
     1px  1px 0 #00FFA3,
     0 0 3px rgba(0, 255, 163, 0.4);
  position: relative;
  display: inline-block;
  white-space: nowrap;
}

.ad-center-pill {
  background: rgba(115, 241, 211, 0.55);
  border: 1px solid rgba(11, 195, 107, 0.25);
  border-radius: 9999px;
  padding: 6px 24px;
  box-shadow: 0 1px 4px rgba(11, 195, 107, 0.08);
  flex-grow: 1;
  max-width: 660px;
  text-align: center;
}

.pill-text {
  font-size: 13.5px;
  color: #0f172a;
  font-weight: 600;
  white-space: nowrap;
}

.coupon-code {
  display: inline-block;
  background: #0f172a;
  color: #00FFA3;
  padding: 1px 7px;
  border-radius: 4px;
  font-weight: 850;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  margin: 0 3px;
  letter-spacing: 0.5px;
  border: 1px dashed rgba(0, 255, 163, 0.6);
  vertical-align: middle;
}

.pill-text em {
  font-style: italic;
  font-weight: 950;
  color: #00994f;
  font-size: 16.5px;
  margin: 0 2px;
}

.ad-right-action {
  flex-shrink: 0;
}

.ad-btn-black {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  color: #ffffff !important;
  font-size: 13px;
  font-weight: 800;
  padding: 6px 18px;
  border-radius: 6px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.top-ad-banner:hover .ad-btn-black {
  background: #1e293b;
  transform: scale(1.03);
}

/* --- Hero Header --- */
.tools-hero {
  background: linear-gradient(180deg, #d8faf0 0%, #ebfbf6 45%, #f8fafc 100%);
  padding: 48px 20px 40px;
  border-bottom: 1px solid rgba(11, 195, 107, 0.15);
}

.hero-container {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tools-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 16px;
}
.tools-breadcrumb a {
  color: #64748b;
  text-decoration: none;
}
.tools-breadcrumb a:hover {
  color: #0BC36B;
}
.tools-breadcrumb .sep {
  color: #cbd5e1;
}
.tools-breadcrumb .current {
  color: #0f172a;
  font-weight: 600;
}

.hero-badge-wrap {
  margin-bottom: 14px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(11, 195, 107, 0.12);
  color: #047857;
  padding: 5px 16px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid rgba(11, 195, 107, 0.25);
}
.badge-dot {
  width: 7px;
  height: 7px;
  background: #0BC36B;
  border-radius: 50%;
  animation: pulse-dot 2s infinite ease-in-out;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.hero-title {
  font-size: 38px;
  font-weight: 850;
  color: #0f172a;
  margin: 0 0 12px;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 16px;
  color: #475569;
  max-width: 780px;
  line-height: 1.6;
  margin: 0 0 28px;
}

.hero-search-box {
  width: 100%;
  max-width: 640px;
  position: relative;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 18px;
  width: 20px;
  height: 20px;
  color: #94a3b8;
  pointer-events: none;
}

.search-input {
  width: 100%;
  height: 52px;
  padding: 0 46px 0 50px;
  border: 2px solid rgba(11, 195, 107, 0.35);
  border-radius: 26px;
  background: #ffffff;
  font-size: 15px;
  color: #0f172a;
  outline: none;
  box-shadow: 0 4px 18px rgba(11, 195, 107, 0.1);
  transition: all 0.2s ease;
}

.search-input:focus {
  border-color: #0BC36B;
  box-shadow: 0 6px 24px rgba(11, 195, 107, 0.22);
}

.search-clear-btn {
  position: absolute;
  right: 16px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #475569;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-clear-btn:hover {
  background: #cbd5e1;
}

.search-stats {
  margin-top: 10px;
  font-size: 13.5px;
  color: #64748b;
}
.search-stats strong {
  color: #0BC36B;
}

/* --- Layout Container --- */
.tools-main-container {
  max-width: 1240px;
  margin: 32px auto 0;
  padding: 0 20px;
  box-sizing: border-box;
}

.tools-layout {
  display: flex;
  gap: 32px;
  align-items: flex-start;
}

/* --- Mobile Horizontal Category Nav --- */
.mobile-cat-nav {
  display: none;
  overflow-x: auto;
  white-space: nowrap;
  gap: 8px;
  padding: 10px 0 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
  -webkit-overflow-scrolling: touch;
}
.mobile-cat-nav::-webkit-scrollbar {
  display: none;
}

.mobile-cat-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}
.mobile-cat-pill.active {
  background: #0BC36B;
  color: #ffffff;
  border-color: #0BC36B;
  box-shadow: 0 4px 12px rgba(11, 195, 107, 0.3);
}

/* --- Desktop Sidebar --- */
.tools-sidebar {
  width: 250px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
}

.sidebar-inner {
  background: #ffffff;
  border-radius: 16px;
  padding: 18px 14px;
  border: 1px solid #eef2f6;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px 14px;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 8px;
}
.sidebar-title {
  font-size: 14px;
  font-weight: 800;
  color: #0f172a;
}
.sidebar-badge {
  font-size: 12px;
  color: #059669;
  background: #e6faf4;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 700;
}

.sidebar-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 3px;
  transition: all 0.18s ease;
  color: #475569;
  font-size: 14px;
  font-weight: 600;
}

.sidebar-nav-item:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.sidebar-nav-item.active {
  background: #e6faf4;
  color: #047857;
  font-weight: 750;
  box-shadow: inset 3px 0 0 #0BC36B;
}

.nav-item-content {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav-icon {
  font-size: 16px;
}
.nav-name {
  line-height: 1.2;
}

.nav-count {
  font-size: 12px;
  color: #94a3b8;
  font-weight: 600;
}
.sidebar-nav-item.active .nav-count {
  color: #059669;
}

/* --- Content Area --- */
.tools-content-area {
  flex-grow: 1;
  min-width: 0;
}
.tools-content-area.full-width {
  width: 100%;
}

.category-group {
  margin-bottom: 48px;
  scroll-margin-top: 90px;
  position: relative;
}

.category-anchor {
  display: block;
  position: absolute;
  top: -90px;
  visibility: hidden;
  height: 0;
  width: 0;
  pointer-events: none;
}

.cat-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #eef2f6;
}

.cat-title-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cat-icon-lg {
  font-size: 24px;
}

.cat-title {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.3px;
}

.cat-count-badge {
  font-size: 12px;
  font-weight: 700;
  color: #64748b;
  background: #f1f5f9;
  padding: 3px 10px;
  border-radius: 12px;
}

.cat-featured-tag {
  font-size: 12px;
  font-weight: 700;
  color: #047857;
  background: #d1fae5;
  padding: 4px 12px;
  border-radius: 9999px;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.sub-column-block {
  margin-bottom: 24px;
}

.sub-col-title {
  font-size: 15px;
  font-weight: 700;
  color: #475569;
  margin: 0 0 14px 4px;
}

/* --- Tools Grid & Cards --- */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.tools-grid.vip-grid {
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.tool-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #eef2f6;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 160px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;
}

.tool-card:hover {
  transform: translateY(-4px);
  border-color: #0BC36B;
  box-shadow: 0 12px 28px rgba(11, 195, 107, 0.12);
}

.tool-card.vip-card {
  border-color: rgba(11, 195, 107, 0.35);
  background: linear-gradient(180deg, #ffffff 0%, #f6fdfa 100%);
  box-shadow: 0 4px 16px rgba(11, 195, 107, 0.06);
}

.tool-card.vip-card:hover {
  border-color: #0BC36B;
  box-shadow: 0 14px 32px rgba(11, 195, 107, 0.18);
}

/* --- Card Badge --- */
.card-tag {
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 11px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 6px;
  letter-spacing: 0.2px;
}

.card-tag.tag-discount {
  background: #fee2e2;
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.card-tag.tag-free {
  background: #dcfce7;
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.card-tag.tag-featured {
  background: #e0e7ff;
  color: #4338ca;
  border: 1px solid rgba(99, 102, 241, 0.25);
}

.card-tag.tag-credit {
  background: #fef3c7;
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.card-tag.tag-default {
  background: #f1f5f9;
  color: #475569;
}

/* --- Card Content --- */
.card-top-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  padding-right: 50px;
}

.card-logo-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid #eef2f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.card-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title-wrap {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.card-name {
  font-size: 16px;
  font-weight: 750;
  color: #0f172a;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.2px;
}

.card-cat-badge, .card-internal-badge {
  font-size: 11px;
  margin-top: 2px;
  font-weight: 600;
  display: inline-block;
}

.card-cat-badge {
  color: #64748b;
}

.card-internal-badge {
  color: #059669;
}

.card-desc {
  font-size: 13px;
  color: #64748b;
  line-height: 1.55;
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 40px;
}

.card-action-row {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid #f8fafc;
}

.card-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #0BC36B;
  text-decoration: none;
  transition: all 0.2s ease;
}

.card-link-btn:hover {
  color: #059669;
  transform: translateX(3px);
}

.btn-arrow {
  font-size: 14px;
  transition: transform 0.2s ease;
}

.card-link-btn:hover .btn-arrow {
  transform: translateX(2px);
}

/* --- Search Results & Empty --- */
.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.section-title {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.reset-search-btn {
  background: none;
  border: 1px solid #cbd5e1;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  color: #475569;
  cursor: pointer;
  font-weight: 600;
}
.reset-search-btn:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.empty-search-state {
  text-align: center;
  padding: 60px 20px;
  background: #ffffff;
  border-radius: 16px;
  border: 1px dashed #cbd5e1;
}

.empty-icon {
  font-size: 42px;
  margin-bottom: 12px;
}
.empty-title {
  font-size: 18px;
  font-weight: 750;
  color: #0f172a;
  margin: 0 0 8px;
}
.empty-desc {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 20px;
}

/* --- Bottom CTA Card --- */
.partner-cta-card {
  margin-top: 60px;
  background: linear-gradient(135deg, #0BC36B 0%, #059669 100%);
  border-radius: 20px;
  padding: 36px 40px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  box-shadow: 0 16px 36px rgba(11, 195, 107, 0.25);
}

.cta-tag {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #d1fae5;
  display: inline-block;
  margin-bottom: 8px;
}

.cta-title {
  font-size: 24px;
  font-weight: 850;
  margin: 0 0 10px;
}

.cta-desc {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.6;
  margin: 0;
  max-width: 680px;
}

.cta-action {
  flex-shrink: 0;
}

.dodo-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 26px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 750;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.dodo-btn-white {
  background: #ffffff;
  color: #047857 !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}
.dodo-btn-white:hover {
  background: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.dodo-btn-primary {
  background: #0BC36B;
  color: #ffffff !important;
}
.dodo-btn-primary:hover {
  background: #059669;
}

/* --- Responsive Media Queries --- */
@media (max-width: 1100px) {
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .tools-grid.vip-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .tools-sidebar {
    display: none;
  }
  .mobile-cat-nav {
    display: flex;
  }
  .tools-layout {
    gap: 0;
  }
  .partner-cta-card {
    flex-direction: column;
    text-align: center;
    padding: 30px 24px;
  }
  .cta-desc {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 28px;
  }
  .hero-subtitle {
    font-size: 14px;
  }
  .tools-grid, .tools-grid.vip-grid {
    grid-template-columns: 1fr;
  }
  .tool-card {
    padding: 16px;
  }
}
</style>

