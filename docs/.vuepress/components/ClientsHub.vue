<template>
  <div class="clients-hub-page">
    <!-- Top Promo Ad Banner (神行加速专属福利) -->
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
    <header class="clients-hero">
      <div class="hero-container">
        <nav class="clients-breadcrumb">
          <a href="/">首页</a>
          <span class="sep">/</span>
          <span class="current">客户端教程</span>
        </nav>

        <div class="hero-badge-wrap">
          <span class="hero-badge">
            <span class="badge-dot"></span>
            推手指南 · 2026 全平台主流代理客户端配置手册 · 新手到进阶实战
          </span>
        </div>

        <h1 class="hero-title">全平台代理客户端保姆级配置教程合集</h1>
        <p class="hero-subtitle">
          覆盖 Windows、macOS、iOS、Android 全生态主流代理客户端 · 内核选型、TUN 虚拟网卡模式、规则分流与 OBS 直播推流防断流实操指南
        </p>

        <!-- TELEMETRY / STATS -->
        <div class="telemetry-bar">
          <div class="telemetry-item">
            <span class="tele-val text-green">全平台</span>
            <span class="tele-label">Windows / macOS / iOS / Android</span>
          </div>
          <div class="telemetry-sep"></div>
          <div class="telemetry-item">
            <span class="tele-val text-emerald">Mihomo</span>
            <span class="tele-label">Meta / Sing-box 主流核心兼容</span>
          </div>
          <div class="telemetry-sep"></div>
          <div class="telemetry-item">
            <span class="tele-val text-blue">TUN 网卡</span>
            <span class="tele-label">全局接管 & OBS 直播推流无缝分流</span>
          </div>
          <div class="telemetry-sep"></div>
          <div class="telemetry-item">
            <span class="tele-val text-purple">零泄露</span>
            <span class="tele-label">Fake-IP & 防 DNS 欺诈分风控</span>
          </div>
        </div>
      </div>
    </header>

    <!-- MAIN BODY -->
    <main class="clients-main">
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

        <!-- CLIENT CARDS GRID -->
        <div class="clients-grid">
          <div 
            v-for="item in filteredClients" 
            :key="item.id"
            class="client-item-card"
            :class="{ 'featured-client': item.id === 'clash-verge' || item.id === 'shadowrocket' }"
          >
            <!-- Card Header -->
            <div class="client-header">
              <div class="client-brand-group">
                <div class="client-icon-circle" :class="item.iconType">
                  <!-- Platform Icon SVGs -->
                  <svg v-if="item.iconType === 'pc'" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  <svg v-else-if="item.iconType === 'mac'" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 2a10 10 0 0 1 10 10"></path><circle cx="12" cy="12" r="6"></circle></svg>
                  <svg v-else-if="item.iconType === 'ios'" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  <svg v-else-if="item.iconType === 'star'" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <svg v-else viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <div>
                  <div class="client-title-row">
                    <h2 class="client-name">{{ item.name }}</h2>
                    <span class="client-badge-pill">{{ item.badge }}</span>
                  </div>
                  <p class="client-slogan">{{ item.tagline }}</p>
                </div>
              </div>

              <!-- Rating Badge -->
              <div class="client-rating-box">
                <div class="score-row">
                  <span class="score-num">{{ item.rating }}</span>
                  <span class="score-max">/ 10</span>
                </div>
                <div class="stars-row">
                  <span class="star-gold">★★★★★</span>
                </div>
                <span class="platform-indicator">{{ item.platform }}</span>
              </div>
            </div>

            <!-- Tags -->
            <div class="client-tags-row">
              <span v-for="tag in item.tags" :key="tag" class="pill-tag">{{ tag }}</span>
            </div>

            <!-- Description -->
            <p class="client-desc">{{ item.description }}</p>

            <!-- Specs Grid -->
            <div class="client-specs-grid">
              <div class="spec-cell">
                <span class="spec-label">适用操作系统</span>
                <span class="spec-val highlight">{{ item.specs.platform }}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">核心内核架构</span>
                <span class="spec-val">{{ item.specs.kernel }}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">TUN 虚拟网卡</span>
                <span class="spec-val tun">{{ item.specs.tunMode }}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-label">配置上手难度</span>
                <span class="spec-val diff">{{ item.specs.difficulty }}</span>
              </div>
            </div>

            <!-- Testing Highlights -->
            <ul class="client-highlights-list">
              <li v-for="(hl, idx) in item.highlights" :key="idx" class="highlight-point">
                <span class="check-icon">✓</span>
                <span class="point-text" v-html="hl"></span>
              </li>
            </ul>

            <!-- Action Footer -->
            <div class="client-card-footer">
              <a :href="item.tutorialLink" class="action-btn primary-btn">
                阅读保姆级教程 &rarr;
              </a>
              <a href="/article/clash-recommend-2026/" class="action-btn secondary-btn">
                获取适配节点专线 &rarr;
              </a>
            </div>
          </div>
        </div>

        <!-- CLIENT COMPARISON TABLE -->
        <section class="clients-table-section">
          <div class="table-header">
            <h2 class="table-title">全生态代理客户端选型与特性横向对比</h2>
            <p class="table-subtitle">针对不同操作系统与出海业务场景（日常刷推、OBS 4K 直播、矩阵防封），按需选用最优工具</p>
          </div>

          <div class="table-responsive-wrapper">
            <table class="clients-compare-table">
              <thead>
                <tr>
                  <th>客户端</th>
                  <th>支持系统</th>
                  <th>核心优势</th>
                  <th>TUN 网卡</th>
                  <th>OBS 直播推流</th>
                  <th>上手难度</th>
                  <th>保姆级教程</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in comparisonRows" :key="row.name">
                  <td class="col-name">
                    <strong>{{ row.name }}</strong>
                    <span v-if="row.tag" class="row-tag">{{ row.tag }}</span>
                  </td>
                  <td>{{ row.platforms }}</td>
                  <td>{{ row.strength }}</td>
                  <td><span class="badge-feature">{{ row.tun }}</span></td>
                  <td><span class="badge-success">{{ row.streaming }}</span></td>
                  <td>{{ row.difficulty }}</td>
                  <td>
                    <a :href="row.link" class="table-link">查阅配置 SOP &rarr;</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- FAQ SECTION -->
        <section class="clients-faq-section">
          <h2 class="faq-main-title">客户端日常配置常见问题与避坑指南</h2>
          <div class="faq-grid">
            <div class="faq-card">
              <h4 class="faq-q">Q: 为什么做 TikTok 运营、跨境直播或使用模拟器必须开启 TUN 模式？</h4>
              <p class="faq-a">传统的系统代理仅对支持代理协议的浏览器（如 Chrome）生效。而 OBS Studio 直播推流、安卓模拟器、Telegram 桌面客户端等应用很多不走系统代理。开启 TUN 模式会在系统内创建虚拟网卡，强制接管所有出海数据包，彻底消除流量直连导致的漏网或封号风险。</p>
            </div>
            <div class="faq-card">
              <h4 class="faq-q">Q: 客户端导入机场订阅链接后提示“下载配置失败”怎么解决？</h4>
              <p class="faq-a">常见原因包括：① 机场节点订阅链接需要先通过普通网络打开一次（部分机场防爬机制）；② 本地时间与标准北京时间不同步（相差超过 60 秒会导致握手失败）；③ 杀毒软件阻断了 Mihomo 内核联网，可在客户端设置中勾选允许防火墙放行。</p>
            </div>
            <div class="faq-card">
              <h4 class="faq-q">Q: 苹果 iOS 用户没有海外/美区 Apple ID 怎么下载客户端？</h4>
              <p class="faq-a">推荐首选安装【Nextin 星拓专属客户端】（免海外 ID，国内 TestFlight 直装）；若需使用 Shadowrocket 小火箭，可参考小火箭教程中提供的新手免绑定共享海外 ID 切换下载指南，下载完成后切回原 Apple ID 即可，不影响本地数据。</p>
            </div>
            <div class="faq-card">
              <h4 class="faq-q">Q: 开启代理后国内微信、淘宝、网银出现卡顿或 IP 异地异常？</h4>
              <p class="faq-a">这属于分流规则未正确设置。请查阅《Clash 规则分流进阶指南》，将分流模式切换为“Rule (规则分流)”，并确保国内流量走“DIRECT (直连)”，海外主流域名及 TikTok 走专线节点，即可实现国内海外无感秒开。</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentTab = ref('all')

const filterTabs = [
  { id: 'all', name: '全部客户端教程' },
  { id: 'pc', name: 'Windows 电脑' },
  { id: 'ios', name: 'iOS 苹果端' },
  { id: 'mac', name: 'macOS 苹果电脑' },
  { id: 'rules', name: '进阶分流与策略组' }
]

const clientsList = [
  {
    id: 'clash-verge',
    name: 'Clash Verge Rev',
    platform: 'Windows / macOS / Linux',
    categories: ['pc', 'mac'],
    iconType: 'pc',
    badge: 'PC 电脑端首选推荐',
    tagline: '现代化全中文内核界面 · 极速上手与 OBS 推流利器',
    description: '采用现代化 Tauri/Electron 架构打造的新一代全平台主力客户端。全面支持一键订阅自动同步、智能节点延迟测速、原生 TUN 虚拟网卡接管以及 OBS 直播智能规则分流，是当前 PC 电脑端最稳定成熟的工具。',
    highlights: [
      '<strong>TUN 模式一键开启</strong>：接管全局应用及底层网络栈，无需繁琐设置系统代理，完美适配 OBS 与模拟器。',
      '<strong>内置高性能内核</strong>：集成最新 Mihomo (Clash.Meta) 内核，原生支持 Hysteria2、Vless、Trojan、Shadowsocks 全协议。',
      '<strong>规则策略组可视化</strong>：节点延迟自动测速排序，支持自动故障转移切换与国内域名智能分流绕过。'
    ],
    specs: {
      platform: 'Windows 10/11, macOS, Linux',
      kernel: 'Mihomo (Clash.Meta)',
      tunMode: '原生支持 (一键静默启动)',
      difficulty: '★☆☆☆☆ (新手极易上手)'
    },
    tags: ['Windows PC', 'macOS', 'TUN虚拟网卡', 'OBS推流适配', '全中文界面'],
    tutorialLink: '/article/clash-verge/',
    rating: '9.9'
  },
  {
    id: 'mihomo-party',
    name: 'Mihomo Party',
    platform: 'macOS / Windows',
    categories: ['mac', 'pc'],
    iconType: 'mac',
    badge: '极简美学 · 进阶利器',
    tagline: '极简暗黑美学 UI · 可视化路由拓扑图与多规则集在线合并',
    description: '专为极客与追求设计质感的创作者打造的现代客户端。拥有行业领先的节点路由拓扑图可视化界面，支持多订阅混合覆写、Sub-Store 订阅转换整合以及针对指纹浏览器的局部网络转发。',
    highlights: [
      '<strong>高颜值暗黑界面</strong>：优雅的卡片布局与极佳的动效体验，Mac 视网膜屏与高刷屏显示细腻。',
      '<strong>可视化路由拓扑</strong>：实时监控每个 App 的流量出海路径与连接握手时长，排查卡顿一目了然。',
      '<strong>内置覆写与脚本</strong>：支持 JavaScript 脚本扩展与远程规则集自动合并，适合多订阅组合使用。'
    ],
    specs: {
      platform: 'macOS (Apple Silicon/Intel), Windows',
      kernel: 'Mihomo Core (Alpha/Beta)',
      tunMode: '深度集成 (轻量低占用)',
      difficulty: '★★☆☆☆ (功能丰富进阶)'
    },
    tags: ['macOS 首选', 'Windows', '高颜值 UI', '路由拓扑可视化', '多订阅合并'],
    tutorialLink: '/article/mihomo-party/',
    rating: '9.8'
  },
  {
    id: 'shadowrocket',
    name: 'Shadowrocket (小火箭)',
    platform: 'iOS (iPhone / iPad)',
    categories: ['ios'],
    iconType: 'ios',
    badge: '苹果 iOS 必备装机利器',
    tagline: '经典轻量苹果出海工具 · 精准规则分流与极低耗电',
    description: 'iOS 平台上历史最悠久、装机量最高且稳定性极佳的代理工具。支持多协议订阅链接极速导入、按国家/延迟自动测速分组、精细化分流规则以及针对 TikTok 运营的双向代理分流策略。',
    highlights: [
      '<strong>低功耗后台运行</strong>：原生系统级网络拓展驱动，长时间后台待机耗电极低，发热控制优秀。',
      '<strong>规则精细化控制</strong>：支持按域名、IP-CIDR、GEOIP 自动分流，国内微信支付宝直连，海外秒开。',
      '<strong>场景与自动化集成</strong>：支持快捷指令自动化与按 Wi-Fi 自动切换代理策略，适合手机端日常使用。'
    ],
    specs: {
      platform: 'iOS 12.0+ (iPhone / iPad)',
      kernel: 'Shadowrocket 独立引擎',
      tunMode: '原生 Network Extension',
      difficulty: '★☆☆☆☆ (扫码一键配置)'
    },
    tags: ['iOS 苹果手机', 'iPad', '后台低耗电', 'TikTok双向分流', '扫码一键导入'],
    tutorialLink: '/article/shadowrocket/',
    rating: '9.9'
  },
  {
    id: 'nextin',
    name: 'Nextin (星拓专属客户端)',
    platform: 'iOS / macOS / Windows',
    categories: ['ios', 'pc', 'mac'],
    iconType: 'star',
    badge: '免海外 ID 极速上手',
    tagline: '国内 TestFlight 直装 · 新手零门槛专属利器',
    description: '无需繁琐注册海外 Apple ID 即可快速安装使用的专线专属客户端。面向新手出海创作者与团队批量部署设计，集成一键登录同步订阅、全自动最优线路测速与一键智能加速。',
    highlights: [
      '<strong>彻底免除海外 ID 门槛</strong>：直接通过 TestFlight 或专属通道安装，无需购买海外账号或转区。',
      '<strong>开箱即用零配置</strong>：账号登录即刻同步所有专线节点，省去复制订阅与分流规则配置步骤。',
      '<strong>针对社媒推流深度调优</strong>：内置 TikTok、X (Twitter)、YouTube 专属加速策略，防止账号限流。'
    ],
    specs: {
      platform: 'iOS, macOS, Windows',
      kernel: '自研轻量优化内核',
      tunMode: '全自动静默接管',
      difficulty: '☆☆☆☆☆ (零门槛一键)'
    },
    tags: ['免美区ID', 'TestFlight直装', '新手零门槛', '一键同步订阅', '短视频适配'],
    tutorialLink: '/article/nextin/',
    rating: '9.7'
  },
  {
    id: 'clash-rules',
    name: 'Clash 规则分流进阶指南',
    platform: '全平台通用',
    categories: ['rules', 'pc', 'mac', 'ios'],
    iconType: 'rules',
    badge: '高阶技术核心 SOP',
    tagline: '分流策略组调优 · 防 DNS 泄露与多节点负载均衡',
    description: '彻底解决“国内打不开、海外慢、DNS 泄露导致 TikTok 风控”的核心技术指南。深入剖析 GEOIP 过滤、DOMAIN-SUFFIX 域名级分流、Rule-Providers 规则集联动及 Fake-IP 最佳实践。',
    highlights: [
      '<strong>告别分流冲突与卡顿</strong>：国内常用 App（微信、淘宝、网银）100% 直连无感，海外流量精准出海。',
      '<strong>彻底杜绝 DNS 泄露</strong>：配置 Fake-IP 模式与防劫持公共 DNS，消除出口 IP 欺诈分风险隐患。',
      '<strong>多场景策略组实战</strong>：为 ChatGPT、TikTok 直播、海外流媒体量身定制专属节点策略组。'
    ],
    specs: {
      platform: '所有支持 Clash / Sing-box 的客户端',
      kernel: 'Clash / Mihomo / Sing-box',
      tunMode: '全内核通用规则集',
      difficulty: '★★★☆☆ (进阶系统指南)'
    },
    tags: ['进阶配置', '分流策略组', '防DNS泄露', 'Fake-IP调优', '全平台通用'],
    tutorialLink: '/article/clash-rules-guide/',
    rating: '9.8'
  }
]

const filteredClients = computed(() => {
  if (currentTab.value === 'all') return clientsList
  return clientsList.filter(item => item.categories.includes(currentTab.value))
})

const getFilteredCount = (tabId) => {
  if (tabId === 'all') return clientsList.length
  return clientsList.filter(item => item.categories.includes(tabId)).length
}

const comparisonRows = [
  {
    name: 'Clash Verge Rev',
    tag: '主力首选',
    platforms: 'Windows / macOS / Linux',
    strength: '全中文现代化界面，TUN 模式一键启动，OBS 推流无缝分流',
    tun: '原生支持 (一键启动)',
    streaming: '极佳 (零丢包稳定)',
    difficulty: '简单',
    link: '/article/clash-verge/'
  },
  {
    name: 'Mihomo Party',
    tag: '设计极客',
    platforms: 'macOS / Windows',
    strength: '高颜值暗黑 UI，实时路由拓扑监控，支持多订阅混合覆写',
    tun: '原生支持',
    streaming: '优秀',
    difficulty: '中等',
    link: '/article/mihomo-party/'
  },
  {
    name: 'Shadowrocket (小火箭)',
    tag: 'iOS 标杆',
    platforms: 'iOS (iPhone / iPad)',
    strength: '苹果端最稳定经典工具，后台耗电极低，精细化规则分流',
    tun: '原生 Network Extension',
    streaming: '优秀 (手机直播推流)',
    difficulty: '极简',
    link: '/article/shadowrocket/'
  },
  {
    name: 'Nextin (星拓专属)',
    tag: '新手免ID',
    platforms: 'iOS / macOS / Windows',
    strength: '免海外 Apple ID，国内 TestFlight 直装，一键登录同步订阅',
    tun: '自动托管',
    streaming: '良好',
    difficulty: '零门槛',
    link: '/article/nextin/'
  },
  {
    name: 'Clash 规则分流进阶',
    tag: '核心SOP',
    platforms: '全平台通用规则集',
    strength: '彻底消除国内海外分流冲突，杜绝 DNS 泄露，多策略组精细调度',
    tun: '规则级深度适配',
    streaming: '进阶调优必备',
    difficulty: '进阶',
    link: '/article/clash-rules-guide/'
  }
]
</script>

<style scoped>
.clients-hub-page {
  min-height: 100vh;
  background-color: #f8fafc;
  color: #1e293b;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 80px;
}

/* TOP PROMO AD BANNER (Consistent with ReviewsHub) */
.top-ad-banner {
  display: block;
  background: linear-gradient(90deg, #d4f7e5 0%, #a7f3d0 50%, #d4f7e5 100%);
  border-bottom: 1px solid #6ee7b7;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}
.top-ad-banner:hover {
  background: linear-gradient(90deg, #a7f3d0 0%, #6ee7b7 50%, #a7f3d0 100%);
}
.ad-banner-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 13px;
}
.ad-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ad-brand-logo {
  display: flex;
  align-items: center;
  gap: 6px;
}
.ad-airport-logo {
  width: 22px;
  height: 22px;
  border-radius: 4px;
}
.ad-brand-text {
  font-weight: 700;
  color: #065f46;
}
.ad-event-tag {
  background: #022c22;
  padding: 2px 8px;
  border-radius: 4px;
}
.event-glow-text {
  color: #00ff87;
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-shadow: 0 0 6px rgba(0, 255, 135, 0.4);
}
.ad-center-pill {
  flex: 1;
  text-align: center;
}
.pill-text {
  color: #064e3b;
  font-weight: 500;
}
.pill-text em {
  font-style: normal;
  color: #059669;
  font-weight: 800;
}
.pill-text .coupon-code {
  background: #022c22;
  color: #00ff87;
  padding: 1px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-weight: 700;
}
.ad-btn-black {
  background: #064e3b;
  color: #fff;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 11px;
}

/* HERO HEADER */
.clients-hero {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 32px 0 28px;
}
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.clients-breadcrumb {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.clients-breadcrumb a {
  color: #059669;
  text-decoration: none;
}
.clients-breadcrumb .sep {
  color: #cbd5e1;
}
.clients-breadcrumb .current {
  color: #334155;
  font-weight: 500;
}
.hero-badge-wrap {
  margin-bottom: 12px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  color: #059669;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
}
.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
}
.hero-title {
  font-size: 32px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.5px;
  margin: 0 0 10px;
}
.hero-subtitle {
  font-size: 15px;
  color: #64748b;
  max-width: 860px;
  line-height: 1.6;
  margin: 0 0 24px;
}

/* TELEMETRY BAR */
.telemetry-bar {
  display: flex;
  align-items: center;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 24px;
  gap: 24px;
}
.telemetry-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.tele-val {
  font-size: 22px;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", monospace;
}
.text-green { color: #059669; }
.text-emerald { color: #0BC36B; }
.text-blue { color: #0284c7; }
.text-purple { color: #7c3aed; }
.tele-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}
.telemetry-sep {
  width: 1px;
  height: 36px;
  background: #e2e8f0;
}

/* MAIN */
.clients-main {
  padding: 32px 0;
}
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* FILTER TABS */
.filter-tabs-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}
.filter-tab-btn {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter-tab-btn:hover {
  border-color: #cbd5e1;
  background: #f1f5f9;
}
.filter-tab-btn.active {
  background: #0BC36B;
  border-color: #0BC36B;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(11, 195, 107, 0.25);
}

/* CLIENT CARDS GRID */
.clients-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 48px;
}
.client-item-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
}
.client-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: #cbd5e1;
}
.client-item-card.featured-client {
  border: 2px solid #0BC36B;
  position: relative;
}

/* CARD HEADER */
.client-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}
.client-brand-group {
  display: flex;
  align-items: center;
  gap: 16px;
}
.client-icon-circle {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.client-icon-circle.pc {
  background: #eff6ff;
  color: #2563eb;
}
.client-icon-circle.mac {
  background: #f5f3ff;
  color: #7c3aed;
}
.client-icon-circle.ios {
  background: #ecfdf5;
  color: #059669;
}
.client-icon-circle.star {
  background: #fffbeb;
  color: #d97706;
}
.client-icon-circle.rules {
  background: #fdf2f8;
  color: #db2777;
}

.client-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.client-name {
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}
.client-badge-pill {
  font-size: 11px;
  font-weight: 700;
  background: #e6faf4;
  color: #059669;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #a7f3d0;
}
.client-slogan {
  font-size: 13px;
  color: #64748b;
  margin: 4px 0 0;
}

.client-rating-box {
  text-align: right;
  flex-shrink: 0;
}
.score-row {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 2px;
}
.score-num {
  font-size: 20px;
  font-weight: 800;
  color: #059669;
}
.score-max {
  font-size: 11px;
  color: #94a3b8;
}
.stars-row {
  color: #f59e0b;
  font-size: 11px;
  letter-spacing: 1px;
}
.platform-indicator {
  display: block;
  font-size: 11px;
  color: #64748b;
  margin-top: 2px;
}

/* TAGS ROW */
.client-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}
.pill-tag {
  font-size: 11px;
  font-weight: 500;
  background: #f1f5f9;
  color: #475569;
  padding: 3px 8px;
  border-radius: 4px;
}

.client-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #475569;
  margin: 0 0 16px;
}

/* SPECS GRID */
.client-specs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  gap: 12px;
  margin-bottom: 16px;
}
.spec-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.spec-label {
  font-size: 11px;
  color: #64748b;
}
.spec-val {
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
}
.spec-val.highlight {
  color: #0284c7;
}
.spec-val.tun {
  color: #059669;
}
.spec-val.diff {
  color: #d97706;
}

/* HIGHLIGHTS */
.client-highlights-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.highlight-point {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  line-height: 1.5;
  color: #334155;
}
.check-icon {
  color: #0BC36B;
  font-weight: 800;
  flex-shrink: 0;
}

/* CARD FOOTER */
.client-card-footer {
  display: flex;
  gap: 12px;
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
}
.action-btn {
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.primary-btn {
  background: #0BC36B;
  color: #ffffff;
  flex: 1;
}
.primary-btn:hover {
  background: #09a75a;
  transform: translateY(-1px);
}
.secondary-btn {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #e2e8f0;
}
.secondary-btn:hover {
  background: #e2e8f0;
  color: #0f172a;
}

/* COMPARISON TABLE */
.clients-table-section {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 28px;
  margin-bottom: 48px;
}
.table-header {
  margin-bottom: 20px;
}
.table-title {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 6px;
}
.table-subtitle {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}
.table-responsive-wrapper {
  overflow-x: auto;
}
.clients-compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}
.clients-compare-table th {
  background: #f8fafc;
  color: #475569;
  font-weight: 700;
  padding: 12px 14px;
  border-bottom: 2px solid #e2e8f0;
  white-space: nowrap;
}
.clients-compare-table td {
  padding: 14px;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
  vertical-align: middle;
}
.clients-compare-table tr:hover td {
  background: #fafafa;
}
.col-name strong {
  display: block;
  color: #0f172a;
  font-size: 14px;
}
.row-tag {
  display: inline-block;
  background: #ecfdf5;
  color: #059669;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 3px;
  margin-top: 3px;
}
.badge-feature {
  background: #f0fdf4;
  color: #166534;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}
.badge-success {
  background: #eff6ff;
  color: #1e40af;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}
.table-link {
  color: #059669;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
}
.table-link:hover {
  text-decoration: underline;
}

/* FAQ SECTION */
.clients-faq-section {
  margin-top: 24px;
}
.faq-main-title {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 20px;
}
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.faq-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
}
.faq-q {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px;
}
.faq-a {
  font-size: 13px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .client-specs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .telemetry-bar {
    flex-wrap: wrap;
    gap: 16px;
  }
  .telemetry-sep {
    display: none;
  }
  .telemetry-item {
    flex: 1 1 40%;
  }
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .ad-center-pill {
    display: none;
  }
  .hero-title {
    font-size: 24px;
  }
  .client-header {
    flex-direction: column;
  }
  .client-rating-box {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .client-card-footer {
    flex-direction: column;
  }
}

/* DARK MODE */
html.dark .clients-hub-page {
  background-color: #0b0f19;
  color: #cbd5e1;
}
html.dark .clients-hero,
html.dark .client-item-card,
html.dark .clients-table-section,
html.dark .faq-card {
  background-color: #111827;
  border-color: #1f2937;
}
html.dark .hero-title,
html.dark .client-name,
html.dark .table-title,
html.dark .faq-main-title,
html.dark .faq-q,
html.dark .col-name strong {
  color: #f9fafb;
}
html.dark .telemetry-bar,
html.dark .client-specs-grid {
  background-color: #1f2937;
  border-color: #374151;
}
html.dark .spec-val {
  color: #e2e8f0;
}
html.dark .filter-tab-btn {
  background-color: #1f2937;
  border-color: #374151;
  color: #94a3b8;
}
html.dark .filter-tab-btn:hover {
  background-color: #374151;
  color: #fff;
}
html.dark .filter-tab-btn.active {
  background-color: #0BC36B;
  border-color: #0BC36B;
  color: #fff;
}
html.dark .client-highlights-list .highlight-point {
  color: #cbd5e1;
}
html.dark .secondary-btn {
  background-color: #1f2937;
  border-color: #374151;
  color: #e2e8f0;
}
html.dark .clients-compare-table th {
  background-color: #1f2937;
  color: #94a3b8;
  border-bottom-color: #374151;
}
html.dark .clients-compare-table td {
  border-bottom-color: #1f2937;
  color: #cbd5e1;
}
html.dark .clients-compare-table tr:hover td {
  background-color: #1a2234;
}
</style>

