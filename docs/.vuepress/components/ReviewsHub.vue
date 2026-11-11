<template>
  <div class="reviews-hub-page">
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
    <header class="reviews-hero">
      <div class="hero-container">
        <nav class="reviews-breadcrumb">
          <a href="/">首页</a>
          <span class="sep">/</span>
          <span class="current">机场评测</span>
        </nav>

        <div class="hero-badge-wrap">
          <span class="hero-badge">
            <span class="badge-dot"></span>
            推手实验室 · 2026 深度横评合集 · 真实测速与防封压测
          </span>
        </div>

        <h1 class="hero-title">2026 优质专线机场实测矩阵与评测合集</h1>
        <p class="hero-subtitle">
          全 IPLC / IEPL 内网专线底座 · 原生双 ISP 住宅出口 · 晚高峰零丢包实测，赋能海外自媒体推手与跨境出海业务
        </p>
      </div>
    </header>

    <!-- MAIN BODY -->
    <main class="reviews-main">
      <div class="main-container">
        <!-- FILTER TABS -->
        <div class="filter-tabs-bar">
          <button 
            v-for="tab in filterTabs" 
            :key="tab.id"
            class="filter-tab-btn"
            :class="{ active: currentTab === tab.id }"
            @click="currentTab = tab.id"
          >
            {{ tab.name }} ({{ getFilteredCount(tab.id) }})
          </button>
        </div>

        <!-- REVIEWS CARDS GRID -->
        <div class="reviews-grid">
          <div 
            v-for="item in filteredAirports" 
            :key="item.id"
            class="review-card"
            :class="{ 'featured-card': item.isTop }"
          >
            <!-- Card Header -->
            <div class="card-header">
              <div class="brand-group">
                <img :src="item.logo" :alt="item.name" class="brand-logo" />
                <div>
                  <div class="brand-title-row">
                    <h2 class="brand-name">{{ item.name }}</h2>
                    <span class="rank-tag">No.{{ item.rank }}</span>
                  </div>
                  <p class="brand-slogan">{{ item.tagline }}</p>
                </div>
              </div>

              <!-- Rating Badge -->
              <div class="rating-box">
                <div class="score-row">
                  <span class="score-num">{{ item.rating }}</span>
                  <span class="score-max">/ 10</span>
                </div>
                <div class="stars-row">
                  <span class="star-gold">★★★★★</span>
                </div>
                <span class="rec-label">{{ item.recommendLabel }}</span>
              </div>
            </div>

            <!-- Tags -->
            <div class="tags-row">
              <span v-for="tag in item.tags" :key="tag" class="pill-tag">{{ tag }}</span>
            </div>

            <!-- Key Specs Matrix -->
            <div class="specs-matrix">
              <div class="spec-cell">
                <span class="spec-title">线路类型</span>
                <span class="spec-val highlight">{{ item.lineType }}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-title">住宅出口</span>
                <span class="spec-val">{{ item.ispType }}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-title">起步资费</span>
                <span class="spec-val price">{{ item.price }}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-title">优惠福利</span>
                <span class="spec-val coupon">{{ item.discount }}</span>
              </div>
            </div>

            <!-- Testing Highlights List -->
            <ul class="test-points-list">
              <li v-for="point in item.highlights" :key="point">
                <span class="point-icon">✓</span>
                <span class="point-text" v-html="point"></span>
              </li>
            </ul>

            <!-- Region Coverage -->
            <div class="regions-row">
              <span class="reg-label">重点实测节点：</span>
              <span v-for="reg in item.regions" :key="reg" class="reg-badge">{{ reg }}</span>
            </div>

            <!-- Action Buttons -->
            <div class="card-actions">
              <a :href="item.reviewUrl" class="dodo-btn dodo-btn-outline">
                阅读深度评测报告 &rarr;
              </a>
              <a :href="item.officialUrl" target="_blank" rel="noopener noreferrer nofollow" class="dodo-btn dodo-btn-primary">
                直达官网选购 &nearr;
              </a>
            </div>
          </div>
        </div>

        <!-- COMPARISON MATRIX TABLE -->
        <section class="comparison-section">
          <div class="section-head">
            <span class="section-tag">COMPREHENSIVE MATRIX</span>
            <h2 class="section-title">2026 创作者专线机场核心实测参数横评表</h2>
            <p class="section-sub">基于推手实验室实测数据，横向对比 6 大服务商核心指标，方便快速对比选型</p>
          </div>

          <div class="table-responsive">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>服务商</th>
                  <th>综合评分</th>
                  <th>线路架构</th>
                  <th>出口纯净度</th>
                  <th>晚高峰延迟</th>
                  <th>起步周期资费</th>
                  <th>适合创作者场景</th>
                  <th>评测与官网</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in comparisonRows" :key="row.name">
                  <td class="col-name">
                    <img :src="row.logo" :alt="row.name" class="table-brand-logo" />
                    <strong>{{ row.name }}</strong>
                  </td>
                  <td class="col-rating">
                    <span class="table-score">{{ row.rating }}</span>
                    <span class="table-stars">★★★★★</span>
                  </td>
                  <td>{{ row.lineType }}</td>
                  <td><span class="badge-isp">{{ row.isp }}</span></td>
                  <td><span class="badge-ping">{{ row.ping }}</span></td>
                  <td class="col-price">{{ row.price }}</td>
                  <td class="col-fit">{{ row.fit }}</td>
                  <td class="col-links">
                    <a :href="row.reviewUrl" class="table-link-review">查看评测</a>
                    <span class="sep">|</span>
                    <a :href="row.officialUrl" target="_blank" rel="noopener noreferrer nofollow" class="table-link-official">官网直达</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SELECTION FAQ -->
        <section class="faq-section">
          <div class="section-head">
            <span class="section-tag">BUYING GUIDE</span>
            <h2 class="section-title">海外推手与创作者选型避坑常见问题</h2>
          </div>

          <div class="faq-grid">
            <div class="faq-card" v-for="(faq, fIdx) in faqs" :key="fIdx">
              <h3 class="faq-q">
                <span class="q-tag">Q</span>
                {{ faq.q }}
              </h3>
              <p class="faq-a" v-html="faq.a"></p>
            </div>
          </div>
        </section>

        <!-- BOTTOM CALLOUT BANNER -->
        <div class="bottom-cta-banner">
          <div class="cta-inner">
            <div class="cta-text">
              <h3>还没找到合适的专线方案？</h3>
              <p>查阅 2026 年度出海推荐综合总榜，或探索 80+ 出海实用工具库。专线服务商送测与商务合作请联系 Telegram: <strong>@wanfengzn7</strong></p>
            </div>
            <div class="cta-buttons">
              <a href="/article/clash-recommend-2026/" class="dodo-btn dodo-btn-white">查看综合推荐总榜 &rarr;</a>
              <a href="https://t.me/wanfengzn7" target="_blank" rel="noopener noreferrer nofollow" class="dodo-btn dodo-btn-outline-white">Telegram 商务合作 (@wanfengzn7) &nearr;</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const currentTab = ref('all')

const filterTabs = [
  { id: 'all', name: '全部实测机场' },
  { id: 'enterprise', name: '企业高可用/大带宽' },
  { id: 'dual-isp', name: '原生双 ISP 防风控' },
  { id: 'budget', name: '性价比与按量包' }
]

const airports = [
  {
    id: 'shenxing',
    rank: 1,
    name: '神行加速',
    logo: '/images/airports/shenxing-logo.webp',
    tagline: '推手首选 · 全 IPLC 专线 · 4K 直播推流极低抖动',
    rating: '9.8',
    recommendLabel: '综合推荐第 1 名',
    isTop: true,
    categories: ['stream', 'dual-isp'],
    tags: ['推手首选', '全IPLC专线', '原生双ISP', 'TikTok 4K推流', '买断包'],
    lineType: '全链路 IPLC 商业内网专线',
    ispType: '新加坡 ISP 住宅出口 / 欺诈分优质',
    price: '券后 ¥13.92/月 (原价 ¥19.88/月起)',
    discount: '券后 7 折 · 年付 ¥96/60G (月均 ¥8)',
    highlights: [
      '<strong>4K 直播推流零丢包</strong>：OBS Studio 直播推流 CBR 码率波动低于 1.5%，无跳帧绿屏。',
      '<strong>新加坡 ISP 住宅出口</strong>：出口 IP 欺诈分优质，避免 TikTok 账号 0 播放与风控限流。',
      '<strong>超值年付特惠支持</strong>：年付仅 96 元 / 60G（折合每月仅 8 元），另有 99 元 100G 终身不限时应急包。'
    ],
    regions: ['美国', '中国香港', '新加坡', '日本', '英国', '东南亚'],
    reviewUrl: '/article/shenxing/',
    officialUrl: '/go/shenxing/'
  },
  {
    id: 'dalao',
    rank: 2,
    name: '大佬云',
    logo: '/images/airports/dalaoyun-logo.webp',
    tagline: '高可用 IEPL 容灾专线 · 99.9% 稳定 SLA 承诺',
    rating: '9.6',
    recommendLabel: '企业级专线力荐',
    isTop: false,
    categories: ['enterprise'],
    tags: ['企业级IEPL', '多入口BGP', '99.9%SLA', '终身不限时'],
    lineType: '多入口 BGP 隧道 + 全 IEPL 内网专线',
    ispType: '机房原生纯净出口 / BGP 路由调优',
    price: '¥15.00/月 起 (按量 ¥0.5/G 起)',
    discount: '限时特惠包专属福利',
    highlights: [
      '<strong>超强网络抗灾架构</strong>：全国多节点 BGP 接入与动态路由，晚高峰拥堵秒级无感切换。',
      '<strong>大吞吐持续稳定</strong>：单节点跑满千兆带宽，视频批量上传与素材同步速度飞快。',
      '<strong>全平台协议兼容</strong>：完美支持 Clash、Sing-box、Shadowrocket 与 Surge。'
    ],
    regions: ['中国香港', '日本', '新加坡', '美国', '韩国', '德国'],
    reviewUrl: '/article/dalao/',
    officialUrl: '/go/dalao/'
  },
  {
    id: 'yunjiexian',
    rank: 3,
    name: '云界线',
    logo: '/images/airports/yunjiexian-logo.webp',
    tagline: '性价比专线之王 · 单节点 2.5Gbps 超大带宽峰值',
    rating: '9.5',
    recommendLabel: '超高性价比首选',
    isTop: false,
    categories: ['stream', 'budget'],
    tags: ['性价比之王', '单节点2.5G', '全IPLC专线', '券后13.92元'],
    lineType: '全 IPLC 专线 (内网不过公网墙)',
    ispType: '原生 ISP 接入 / 解锁主流流媒体',
    price: '¥19.88/月 起 (券后仅 ¥13.92/月)',
    discount: '专属优惠券享限时 7 折',
    highlights: [
      '<strong>单节点 2.5Gbps 极致带宽</strong>：超高规格硬件配置，4K/8K 视频秒开无缓冲。',
      '<strong>轻云与凌云分层套餐</strong>：兼顾极低价格门槛与海量流量需求，个人创作者最爱。',
      '<strong>全解锁海外 AI 与社媒</strong>：完美支持 ChatGPT、Midjourney、TikTok 与 Claude 3.5。'
    ],
    regions: ['中国香港', '日本', '新加坡', '美国原生', '欧洲'],
    reviewUrl: '/article/yunjiexian/',
    officialUrl: '/go/yunjiexian/'
  },
  {
    id: 'shandianshu',
    rank: 4,
    name: '闪电鼠',
    logo: '/images/airports/shandianshu-logo.webp',
    tagline: '独享原生双 ISP 住宅出口 · 跨境多账号防风控利器',
    rating: '9.4',
    recommendLabel: '社媒防封推荐',
    isTop: false,
    categories: ['dual-isp', 'budget'],
    tags: ['原生双ISP', '防封抗关联', '全IPLC直连', '终身随心包'],
    lineType: '全线 IPLC 专线直连底座',
    ispType: '美国 AT&T / Verizon 原生双 ISP 住宅',
    price: '¥15.00/月 起 (终身随心包特惠)',
    discount: '新客专享充值优惠',
    highlights: [
      '<strong>真原生双 ISP 住宅属性</strong>：ScamAnalytics 与 IPQualityScore 认证纯白住宅属性。',
      '<strong>社媒运营防封禁矩阵</strong>：Telegram +86 账号解私聊、X 蓝标认证与创作者提现环境更安全。',
      '<strong>灵活终身随心包</strong>：无需月月续费，流量不过期，低频高要求用户的绝佳备选。'
    ],
    regions: ['美国住宅双ISP', '中国香港', '日本', '英国', '德国'],
    reviewUrl: '/article/shandianshu/',
    officialUrl: '/go/shandianshu/'
  },
  {
    id: 'liulian',
    rank: 5,
    name: '榴莲云',
    logo: '/images/airports/liulianyun-logo.webp',
    tagline: '全套餐不限在线设备数 · 跨境工作室与多机位推流神器',
    rating: '9.3',
    recommendLabel: '多设备团队优选',
    isTop: false,
    categories: ['enterprise', 'budget'],
    tags: ['不限设备数', '金枕年付¥96', '多机位直播', '高并发连接'],
    lineType: 'BGP 优质隧道 + 跨境专线优化',
    ispType: '商宽与原生住宅混合多出口',
    price: '¥15.00/月 起 (金枕年付低至 ¥96)',
    discount: '年付套餐性价比极高',
    highlights: [
      '<strong>彻底打破客户端数量限制</strong>：支持数十台手机、平板与推流电脑同时在线不踢号。',
      '<strong>金枕与猫山王多档资费</strong>：梯度资费设计科学，年付折算仅 8 元/月，成本极度可控。',
      '<strong>全平台一键快捷导入</strong>：提供各大客户端一键直连订阅，新手操作零门槛。'
    ],
    regions: ['中国香港', '台湾省', '日本', '新加坡', '美国', '韩国'],
    reviewUrl: '/article/liulian/',
    officialUrl: '/go/liulian/'
  },
  {
    id: 'huanqiuti',
    rank: 6,
    name: '环球梯',
    logo: '/images/airports/huanqiuti-logo.webp',
    tagline: '冷门小众区域节点丰富 · 8 档周期资费与 4 款按量包',
    rating: '9.1',
    recommendLabel: '小众出海必备',
    isTop: false,
    categories: ['budget'],
    tags: ['全球冷门节点', '8档周期资费', '4款按量包', '灵活选型'],
    lineType: '多专线 + 全球优质 BGP 节点',
    ispType: '全球各区域本地原生商宽/家宽',
    price: '¥15.00/月 起 (按量包低至 ¥20 起)',
    discount: '微享/悦享阶梯折扣',
    highlights: [
      '<strong>覆盖冷门小众出海国家</strong>：南美、东欧、东南亚等非主流节点齐全，外贸拓客必备。',
      '<strong>8 档精细周期资费</strong>：微享、悦享、尊享等多档位精准匹配不同月度流量消耗。',
      '<strong>透明设备数限制防坑</strong>：套餐说明清晰严谨，按需选购绝无隐形扣费。'
    ],
    regions: ['欧美全境', '东南亚', '南美阿根廷/巴西', '土耳其', '中国香港', '日本'],
    reviewUrl: '/article/huanqiuti/',
    officialUrl: '/go/huanqiuti/'
  }
]

const filteredAirports = computed(() => {
  if (currentTab.value === 'all') return airports
  return airports.filter(a => a.categories.includes(currentTab.value))
})

function getFilteredCount(tabId: string) {
  if (tabId === 'all') return airports.length
  return airports.filter(a => a.categories.includes(tabId)).length
}

const comparisonRows = [
  {
    name: '神行加速',
    logo: '/images/airports/shenxing-logo.webp',
    rating: '9.8',
    lineType: '全 IPLC 专线',
    isp: '原生双 ISP 住宅',
    ping: '28ms (亚太)',
    price: '¥19.88/月 起',
    fit: 'TikTok 4K 直播推流、社媒防封首选',
    reviewUrl: '/article/shenxing/',
    officialUrl: '/go/shenxing/'
  },
  {
    name: '大佬云',
    logo: '/images/airports/dalaoyun-logo.webp',
    rating: '9.6',
    lineType: '全 IEPL 专线',
    isp: '纯净机房原生',
    ping: '32ms (亚太)',
    price: '¥15.00/月 起',
    fit: '企业级大吞吐、高可用容灾与素材同步',
    reviewUrl: '/article/dalao/',
    officialUrl: '/go/dalao/'
  },
  {
    name: '云界线',
    logo: '/images/airports/yunjiexian-logo.webp',
    rating: '9.5',
    lineType: '全 IPLC 专线',
    isp: '原生商宽/流媒体',
    ping: '30ms (亚太)',
    price: '¥13.92/月 起',
    fit: '个人创作者、单节点 2.5G 高性价比',
    reviewUrl: '/article/yunjiexian/',
    officialUrl: '/go/yunjiexian/'
  },
  {
    name: '闪电鼠',
    logo: '/images/airports/shandianshu-logo.webp',
    rating: '9.4',
    lineType: '全 IPLC 专线',
    isp: '真原生双 ISP 住宅',
    ping: '35ms (亚太)',
    price: '¥15.00/月 起',
    fit: 'Telegram 解封、X 蓝标、多账号隔离',
    reviewUrl: '/article/shandianshu/',
    officialUrl: '/go/shandianshu/'
  },
  {
    name: '榴莲云',
    logo: '/images/airports/liulianyun-logo.webp',
    rating: '9.3',
    lineType: 'BGP 专线优化',
    isp: '多区域混合商宽',
    ping: '38ms (亚太)',
    price: '¥8.00/月 (年付)',
    fit: '多机位直播、工作室不限设备数共享',
    reviewUrl: '/article/liulian/',
    officialUrl: '/go/liulian/'
  },
  {
    name: '环球梯',
    logo: '/images/airports/huanqiuti-logo.webp',
    rating: '9.1',
    lineType: 'BGP 跨境多专线',
    isp: '全球多冷门区域',
    ping: '42ms (亚太)',
    price: '¥15.00/月 起',
    fit: '全球小众冷门节点拓客、多档按量计费',
    reviewUrl: '/article/huanqiuti/',
    officialUrl: '/go/huanqiuti/'
  }
]

const faqs = [
  {
    q: '为什么海外直播推流与短视频运营必须使用 IPLC 专线？',
    a: '公网普通代理在晚高峰 20:00~24:00 期间会受到国际出口防火墙的严密 QOS 限速与干扰，丢包率往往激增至 15% 以上，导致 OBS 直播卡死掉帧。<strong>IPLC / IEPL 是点对点的企业级内网物理光纤直连</strong>，完全不经过公网 GFW，晚高峰丢包率恒定为 0.00%，是 4K 高码率推流的唯一工业级解决方案。'
  },
  {
    q: '原生双 ISP 住宅 IP 对海外社媒防封有什么决定性作用？',
    a: 'TikTok、Telegram、X (Twitter) 及 Instagram 等海外主流平台拥有严密的欺诈风控数据库（如 IPQualityScore、MaxMind）。普通数据中心机房 IP（Hosting）会被系统标记为机器人或爬虫，导致发帖 0 播放、账号被限流或私聊双向限制。<strong>原生双 ISP 住宅 IP 拥有与当地家庭宽带完全相同的信任权重</strong>，从根源上破解封号与限流隐患。'
  },
  {
    q: '多机位推流或小型外贸工作室，如何选购最划算？',
    a: '如果团队拥有超过 5 台手机或多台电脑同时在线推流，首选<strong>榴莲云</strong>（全套餐不限在线设备数），或搭配<strong>神行加速</strong>的 ¥99 终身不限时买断包作为主推流备用线路。如果是个人高频推流与轻度剪辑，<strong>云界线</strong>（券后 ¥13.92/月）与<strong>神行加速</strong>是综合性价比与体验的天花板。'
  },
  {
    q: '本站评测的所有机场是否支持 Clash Verge / Mihomo / 小火箭？',
    a: '全部完美支持。本站收录的 6 家主流服务商均提供标准的 Shadowsocks / Vless / Hysteria2 / Trojan 订阅链接，可无缝一键导入 Windows / macOS 上的 Clash Verge Rev、Mihomo Party，以及 iOS 上的 Shadowrocket（小火箭）与星拓专属客户端。'
  }
]
</script>

<style scoped>
/* ========================================================
   REVIEWS HUB PAGE - HIGH TECH IPDODO SAAS EMERALD STYLES
   ======================================================== */
.reviews-hub-page {
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
  border-bottom: 1px solid rgba(11, 195, 107, 0.25);
  box-shadow: 0 2px 8px rgba(11, 195, 107, 0.08);
  padding: 10px 0;
  transition: all 0.25s ease;
}
.top-ad-banner:hover {
  filter: brightness(1.02);
}
.ad-banner-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.ad-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.ad-brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.ad-airport-logo {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  object-fit: contain;
}
.ad-brand-text {
  font-size: 15px;
  font-weight: 800;
  color: #0d1e18;
}
.ad-event-tag {
  display: inline-flex;
  align-items: center;
}
.event-glow-text {
  font-size: 17px;
  font-weight: 900;
  font-style: italic;
  color: #0d1e18;
  letter-spacing: 0.8px;
  padding-left: 8px;
  text-shadow:
    -1px -1px 0 #00FFA3,
     1px -1px 0 #00FFA3,
    -1px  1px 0 #00FFA3,
     1px  1px 0 #00FFA3,
     0 0 3px rgba(0, 255, 163, 0.4);
}
.ad-center-pill {
  background: #a1f6df;
  border-radius: 9999px;
  padding: 4px 18px;
}
.pill-text {
  font-size: 13px;
  font-weight: 600;
  color: #064e3b;
}
.coupon-code {
  background: #064e3b;
  color: #a1f6df;
  padding: 1px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-weight: 700;
}
.pill-text em {
  color: #047857;
  font-style: normal;
  font-weight: 800;
}
.ad-right-action .ad-btn-black {
  background: #000;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.2s ease;
}
.top-ad-banner:hover .ad-btn-black {
  transform: translateX(2px);
  background: #111;
}

/* --- HERO SECTION --- */
.reviews-hero {
  background: radial-gradient(circle at 50% 0%, #e6faf4 0%, #f8fafc 70%);
  padding: 40px 24px 32px;
  text-align: center;
  border-bottom: 1px solid #eef2f6;
}
.hero-container {
  max-width: 900px;
  margin: 0 auto;
}
.reviews-breadcrumb {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 16px;
}
.reviews-breadcrumb a {
  color: #64748b;
  text-decoration: none;
}
.reviews-breadcrumb a:hover {
  color: #0BC36B;
}
.reviews-breadcrumb .sep {
  margin: 0 8px;
  color: #cbd5e1;
}
.reviews-breadcrumb .current {
  color: #0BC36B;
  font-weight: 600;
}
.hero-badge-wrap {
  margin-bottom: 16px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: #e6faf4;
  border: 1px solid rgba(11, 195, 107, 0.3);
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 700;
  color: #059669;
}
.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0BC36B;
  box-shadow: 0 0 8px #0BC36B;
}
.hero-title {
  font-size: 36px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.5px;
  margin-bottom: 14px;
  line-height: 1.3;
}
.hero-subtitle {
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  max-width: 740px;
  margin: 0 auto;
}

/* --- TELEMETRY BAR --- */
.telemetry-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 18px 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  flex-wrap: wrap;
  gap: 16px;
}
.telemetry-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.tele-val {
  font-size: 24px;
  font-weight: 900;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
}
.tele-val.text-green { color: #0BC36B; }
.tele-val.text-emerald { color: #059669; }
.tele-val.text-blue { color: #0284c7; }
.tele-val.text-purple { color: #7c3aed; }
.tele-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 600;
}
.telemetry-sep {
  width: 1px;
  height: 36px;
  background: #e2e8f0;
}

/* --- MAIN CONTAINER --- */
.reviews-main {
  padding: 40px 24px;
}
.main-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* --- FILTER TABS --- */
.filter-tabs-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 36px;
  flex-wrap: wrap;
}
.filter-tab-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 9999px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter-tab-btn:hover {
  color: #0BC36B;
  border-color: #0BC36B;
}
.filter-tab-btn.active {
  background: #0BC36B;
  color: #ffffff;
  border-color: #0BC36B;
  box-shadow: 0 4px 12px rgba(11, 195, 107, 0.3);
}

/* --- REVIEWS GRID & CARDS --- */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-bottom: 60px;
}
@media (max-width: 900px) {
  .reviews-grid {
    grid-template-columns: 1fr;
  }
}
.review-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  position: relative;
}
.review-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(11, 195, 107, 0.12);
  border-color: rgba(11, 195, 107, 0.4);
}
.review-card.featured-card {
  border: 2px solid #0BC36B;
  background: linear-gradient(180deg, #fafefe 0%, #ffffff 100%);
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;
}
.brand-group {
  display: flex;
  align-items: center;
  gap: 14px;
}
.brand-logo {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: contain;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 4px;
}
.brand-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.brand-name {
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}
.rank-tag {
  background: #0BC36B;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 6px;
}
.brand-slogan {
  font-size: 13px;
  color: #64748b;
  margin: 4px 0 0;
}

/* Rating Box */
.rating-box {
  text-align: right;
  background: #f8fafc;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}
.score-row {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 2px;
}
.score-num {
  font-size: 20px;
  font-weight: 900;
  color: #0BC36B;
}
.score-max {
  font-size: 12px;
  color: #94a3b8;
  font-weight: 600;
}
.stars-row {
  line-height: 1;
  margin: 2px 0;
}
.star-gold {
  color: #f59e0b;
  font-size: 12px;
}
.rec-label {
  font-size: 11px;
  color: #059669;
  font-weight: 700;
  display: block;
}

/* Tags Row */
.tags-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}
.pill-tag {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 6px;
  background: #f1f5f9;
  color: #475569;
}
.review-card.featured-card .pill-tag {
  background: #e6faf4;
  color: #059669;
}

/* Specs Matrix */
.specs-matrix {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  background: #f8fafc;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  margin-bottom: 18px;
}
.spec-cell {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.spec-title {
  font-size: 11px;
  color: #94a3b8;
  font-weight: 600;
}
.spec-val {
  font-size: 13px;
  font-weight: 700;
  color: #1e293b;
}
.spec-val.highlight {
  color: #0BC36B;
}
.spec-val.price {
  color: #0f172a;
}
.spec-val.coupon {
  color: #ea580c;
}

/* Test Points List */
.test-points-list {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
}
.test-points-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  line-height: 1.5;
  color: #334155;
}
.point-icon {
  color: #0BC36B;
  font-weight: 900;
  flex-shrink: 0;
}

/* Regions Row */
.regions-row {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  padding: 10px 0;
  border-top: 1px dashed #e2e8f0;
  margin-bottom: 20px;
}
.reg-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 600;
}
.reg-badge {
  font-size: 11px;
  color: #475569;
  background: #eef2f6;
  padding: 2px 8px;
  border-radius: 4px;
}

/* Action Buttons */
.card-actions {
  display: flex;
  gap: 12px;
}
.card-actions .dodo-btn {
  flex: 1;
  text-align: center;
  padding: 12px 14px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  white-space: nowrap;
}
.dodo-btn-primary {
  background: #0BC36B;
  color: #ffffff;
  border: 1px solid #0BC36B;
  box-shadow: 0 4px 12px rgba(11, 195, 107, 0.25);
}
.dodo-btn-primary:hover {
  background: #09a95d;
  border-color: #09a95d;
  color: #ffffff;
  transform: translateY(-1px);
}
.dodo-btn-outline {
  background: transparent;
  color: #0BC36B;
  border: 1px solid #0BC36B;
}
.dodo-btn-outline:hover {
  background: #e6faf4;
  color: #09a95d;
  border-color: #09a95d;
}

/* --- COMPARISON TABLE SECTION --- */
.comparison-section {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 36px 32px;
  margin-bottom: 60px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}
.section-head {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 32px;
}
.section-tag {
  font-size: 12px;
  font-weight: 800;
  color: #0BC36B;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
}
.section-title {
  font-size: 26px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
}
.section-sub {
  font-size: 14px;
  color: #64748b;
}
.table-responsive {
  overflow-x: auto;
}
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}
.comparison-table th {
  background: #f8fafc;
  padding: 14px 16px;
  font-weight: 700;
  color: #475569;
  border-bottom: 2px solid #e2e8f0;
  white-space: nowrap;
}
.comparison-table td {
  padding: 16px;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
  vertical-align: middle;
}
.comparison-table tr:hover td {
  background: #fbfdfe;
}
.col-name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  white-space: nowrap;
}
.table-brand-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: contain;
  background: #f1f5f9;
}
.table-score {
  font-size: 16px;
  font-weight: 800;
  color: #0BC36B;
  margin-right: 4px;
}
.table-stars {
  color: #f59e0b;
  font-size: 11px;
}
.badge-isp {
  background: #e6faf4;
  color: #059669;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.badge-ping {
  background: #f0fdf4;
  color: #16a34a;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  font-family: monospace;
}
.col-price {
  font-weight: 700;
  color: #0f172a;
  white-space: nowrap;
}
.col-fit {
  color: #64748b;
  font-size: 12px;
  line-height: 1.4;
  max-width: 220px;
}
.col-links {
  white-space: nowrap;
}
.table-link-review {
  color: #0BC36B;
  text-decoration: none;
  font-weight: 700;
}
.table-link-review:hover {
  text-decoration: underline;
}
.table-link-official {
  color: #0284c7;
  text-decoration: none;
  font-weight: 600;
}
.table-link-official:hover {
  text-decoration: underline;
}
.col-links .sep {
  margin: 0 6px;
  color: #cbd5e1;
}

/* --- FAQ SECTION --- */
.faq-section {
  margin-bottom: 60px;
}
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 800px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
.faq-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
}
.faq-q {
  font-size: 16px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.4;
}
.q-tag {
  background: #e6faf4;
  color: #0BC36B;
  font-size: 13px;
  font-weight: 900;
  padding: 2px 8px;
  border-radius: 6px;
  flex-shrink: 0;
}
.faq-a {
  font-size: 13px;
  line-height: 1.6;
  color: #475569;
  margin: 0;
}

/* --- BOTTOM CALLOUT BANNER --- */
.bottom-cta-banner {
  background: linear-gradient(135deg, #0d1e18 0%, #16382a 100%);
  border-radius: 20px;
  padding: 40px;
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(13, 30, 24, 0.2);
}
.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.cta-text h3 {
  font-size: 22px;
  font-weight: 800;
  margin: 0 0 8px;
  color: #ffffff;
}
.cta-text p {
  font-size: 14px;
  color: #a7f3d0;
  margin: 0;
}
.cta-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.dodo-btn-white {
  background: #ffffff;
  color: #0d1e18;
  font-weight: 800;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}
.dodo-btn-white:hover {
  background: #00FFA3;
  color: #0d1e18;
  transform: translateY(-2px);
}
.dodo-btn-outline-white {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}
.dodo-btn-outline-white:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}
</style>

