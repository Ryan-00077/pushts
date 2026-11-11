<template>
  <div class="essays-hub-page">
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
    <header class="essays-hero">
      <div class="hero-container">
        <nav class="essays-breadcrumb">
          <a href="/">首页</a>
          <span class="sep">/</span>
          <span class="current">多媒体运营指南</span>
        </nav>

        <div class="hero-badge-wrap">
          <span class="hero-badge">
            <span class="badge-dot"></span>
            推手实验室 · 2026 海外推手出海实操笔记 · 真实业务踩坑与实战 SOP
          </span>
        </div>

        <h1 class="hero-title">海外社媒推手与多媒体运营实战指南合集</h1>
        <p class="hero-subtitle">
          聚焦自媒体矩阵出海、TikTok 4K 跨境直播网络保障、海外收单防风控排查与数字游民环境搭建 · 拒绝理论空谈，输出一线落地操作手册
        </p>

        <!-- STATS BAR -->
        <div class="telemetry-bar">
          <div class="telemetry-item">
            <span class="tele-val text-green">100% 实战</span>
            <span class="tele-label">海外推手与出海创作者一线踩坑沉淀</span>
          </div>
          <div class="telemetry-sep"></div>
          <div class="telemetry-item">
            <span class="tele-val text-emerald">防封风控</span>
            <span class="tele-label">Telegram / X / TikTok / Stripe 深度调优</span>
          </div>
          <div class="telemetry-sep"></div>
          <div class="telemetry-item">
            <span class="tele-val text-blue">4K 推流</span>
            <span class="tele-label">OBS CBR 码率与高可用专线零丢包</span>
          </div>
          <div class="telemetry-sep"></div>
          <div class="telemetry-item">
            <span class="tele-val text-purple">环境隔离</span>
            <span class="tele-label">一机一号一静态住宅 IP 规范实操</span>
          </div>
        </div>
      </div>
    </header>

    <!-- MAIN BODY -->
    <main class="essays-main">
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

        <!-- ESSAYS CARDS GRID -->
        <div class="essays-grid">
          <article 
            v-for="article in filteredArticles" 
            :key="article.id"
            class="essay-card"
            :class="{ 'featured-essay': article.featured }"
          >
            <!-- Header Row -->
            <div class="essay-card-header">
              <div class="essay-category-tag" :class="article.category">
                {{ article.categoryName }}
              </div>
              <div class="essay-meta-right">
                <span class="read-time">{{ article.readTime }}</span>
                <span class="meta-dot">·</span>
                <span class="publish-date">{{ article.date }}</span>
              </div>
            </div>

            <!-- Title -->
            <h2 class="essay-title">
              <a :href="article.link">{{ article.title }}</a>
            </h2>

            <!-- Excerpt -->
            <p class="essay-excerpt">{{ article.excerpt }}</p>

            <!-- Key Takeaways (Bullets) -->
            <div class="essay-takeaways">
              <span class="takeaway-title">实操要点：</span>
              <ul class="takeaway-list">
                <li v-for="(point, idx) in article.takeaways" :key="idx" class="takeaway-item">
                  <span class="dot-green"></span>
                  <span v-html="point"></span>
                </li>
              </ul>
            </div>

            <!-- Tags & Action Footer -->
            <div class="essay-card-footer">
              <div class="essay-tags-row">
                <span v-for="tag in article.tags" :key="tag" class="tag-pill">{{ tag }}</span>
              </div>
              <a :href="article.link" class="read-btn">
                阅读全文 &rarr;
              </a>
            </div>
          </article>
        </div>

        <!-- CORE METHODOLOGY SECTION -->
        <section class="methodology-section">
          <div class="methodology-header">
            <h2 class="section-heading">推手实验室 · 2026 海外出海防封控三大核心铁律</h2>
            <p class="section-desc">无论是做海外社媒引流、独立站电商收单还是高码率跨境推流，底层逻辑始终围绕三个核心要素展开：</p>
          </div>

          <div class="pillars-grid">
            <div class="pillar-card">
              <div class="pillar-num">01</div>
              <h3 class="pillar-title">网络出口绝对纯净</h3>
              <p class="pillar-desc">
                使用正规运营商商业 IPLC 内网专线，搭配原生住宅双 ISP 出口。杜绝广播机房 IP 与万人骑共享节点，出口 IP 欺诈分低至 0-10 分，从源头消除平台风控标记。
              </p>
              <div class="pillar-badge">IP 欺诈分检测 · 静态住宅</div>
            </div>

            <div class="pillar-card">
              <div class="pillar-num">02</div>
              <h3 class="pillar-title">客户端精细规则分流</h3>
              <p class="pillar-desc">
                开启客户端 TUN 虚拟网卡模式，全面接管 OBS Studio 推流、模拟器与社媒客户端。配置 Fake-IP 彻底防止 DNS 泄露，国内应用直连，海外流量定向走最优专线。
              </p>
              <div class="pillar-badge">TUN 虚拟网卡 · 防 DNS 泄露</div>
            </div>

            <div class="pillar-card">
              <div class="pillar-num">03</div>
              <h3 class="pillar-title">业务环境严格物理隔离</h3>
              <p class="pillar-desc">
                遵循“一机一号一静态 IP”的矩阵运营准则。配合专业指纹浏览器隔离 Canvas、WebGL 与硬件特征，杜绝跨账号关联与封号连坐，保障资金与资产安全。
              </p>
              <div class="pillar-badge">指纹浏览器 · 资产防连坐</div>
            </div>
          </div>
        </section>

        <!-- BOTTOM TOOL RECOMMENDATION -->
        <div class="bottom-tools-banner">
          <div class="banner-content">
            <h3 class="banner-title">需要检测当前网络的纯净度与欺诈分？</h3>
            <p class="banner-desc">免费使用推手内置的 IP 纯净度检测工具与线路测速指南，一键排查 DNS 泄露与住宅属性。</p>
          </div>
          <div class="banner-actions">
            <a href="/article/iptest/" class="banner-btn primary">IP 纯净度实测 &rarr;</a>
            <a href="/tools/" class="banner-btn secondary">浏览出海工具库 (80+) &rarr;</a>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentTab = ref('all')

const filterTabs = [
  { id: 'all', name: '全部运营指南' },
  { id: 'social', name: '海外社媒推手' },
  { id: 'live', name: '跨境直播与网络' },
  { id: 'payment', name: '支付风控与收单' },
  { id: 'nomad', name: '数字游民与思维' }
]

const articlesList = [
  {
    id: 'tiktok-shop-network',
    title: '海外跨境直播网络专线解决方案：TikTok / YouTube 4K OBS 高清推流与零丢包防封指南',
    category: 'live',
    categoryName: '跨境直播网络',
    featured: true,
    readTime: '8 分钟精读',
    date: '2026/11/09',
    link: '/article/tiktok-shop-network/',
    excerpt: '详述跨境电商海外直播网络方案全链路：OBS Studio 参数调优、CBR 码率与关键帧设置、原生双 ISP 住宅 IP 独享部署与晚高峰防断流实操。',
    takeaways: [
      'OBS 4K 推流采用 CBR 恒定码率（15,000-18,000 Kbps），关键帧间隔固定设置为 2 秒。',
      '物理内网专线全天候保障点对点传输，晚高峰网络抖动（Jitter）控制在 2ms 极限以内。',
      '独享原生双 ISP 住宅出口欺诈分接近零，杜绝直播间被推流降权或新观众 0 观看异常。'
    ],
    tags: ['TikTok直播', 'OBS推流', '4K高清', '零丢包防断流', '原生住宅ISP']
  },
  {
    id: 'paypal-stripe-risk',
    title: '独立站海外收单破局：Stripe 180 天资金冻结排查、申诉模板与合规防风控全链路',
    category: 'payment',
    categoryName: '支付风控与收单',
    featured: true,
    readTime: '10 分钟精读',
    date: '2026/11/09',
    link: '/article/paypal-stripe-risk/',
    excerpt: '深度剖析独立站国际收单底层风控逻辑，详解 Stripe / PayPal 拒付率防线、官方 180 天限流解封英文申诉信模板与网络环境指纹隔离。',
    takeaways: [
      '严格控制拒付率（Dispute Rate）在 0.75% 警戒线以下，预警期第一时间发起全额退款。',
      '日常登录 Stripe / PayPal 后台必须固定静态住宅 IP，严禁多节点频繁变动触发异地风控。',
      '提供官方合规认可的 180 天资金冻结申诉英文模版与物流凭证补充规范，提高解封成功率。'
    ],
    tags: ['Stripe防封', 'PayPal申诉', '拒付率控制', '180天资金解冻', '独立站收单']
  },
  {
    id: 'telegram-anti-ban',
    title: 'Telegram +86 手机号解私聊限制、客户端防偷跑与账号防封实战指南',
    category: 'social',
    categoryName: '海外社媒运营',
    featured: false,
    readTime: '6 分钟精读',
    date: '2026/11/09',
    link: '/article/telegram-anti-ban/',
    excerpt: '针对国内 +86 手机号注册 Telegram 触发 Spam Info Bot 双向私聊限制的官方申诉 SOP，配合网络代理分流防止 IP 频繁跳跃导致账号封禁。',
    takeaways: [
      '利用官方 @SpamBot 机器人的标准合规英文申诉话术，最快 10 分钟即可自动解除限制。',
      '关闭 Telegram 客户端内 P2P 通话设置，杜绝通话过程向对端直接暴露真实国内 IP。',
      '使用固定区域原生专线节点常态化登录，杜绝一小时内跨国多 IP 漂移导致平台安全封锁。'
    ],
    tags: ['Telegram', '+86解私聊', '防偷跑流量', 'SpamBot申诉', '账号防封']
  },
  {
    id: 'x-blue-verification',
    title: 'X (Twitter) 蓝标订阅认证与创作者收益分成提现网络环境隔离实操',
    category: 'social',
    categoryName: '海外社媒运营',
    featured: false,
    readTime: '7 分钟精读',
    date: '2026/11/09',
    link: '/article/x-blue-verification/',
    excerpt: '详解 X 蓝标认证条件、Stripe 创作者收益结算绑定流程，以及利用原生住宅专线避免身份与异地风控核验失败的实操经验。',
    takeaways: [
      '蓝标认证提交前 30 天确保账号资料稳定，禁止高频修改个人简介、用户名与头像。',
      '创作者收益分成绑定 Stripe Express 账户时，必须确保当前代理 IP 与账户国家严格一致。',
      '部署独立指纹浏览器环境与硬件隔离，杜绝异地登录安全告警导致的结算权限冻结。'
    ],
    tags: ['X蓝标认证', '创作者分成', 'Stripe绑定', '环境隔离', '美区网络']
  },
  {
    id: 'creator-multi-account',
    title: 'YouTube 与 Instagram 多账号矩阵运营网络分流与防限流规范',
    category: 'social',
    categoryName: '海外社媒运营',
    featured: false,
    readTime: '8 分钟精读',
    date: '2026/11/09',
    link: '/article/creator-multi-account/',
    excerpt: '解析海外平台对于设备硬件指纹、Canvas 与出口 IP 拓扑的监控机制，建立“一机一号一静态 IP”的矩阵隔离标准作业程序。',
    takeaways: [
      '设备硬件指纹（Canvas / WebGL / Audio）与专用代理 IP 绑定，杜绝账号间交叉关联。',
      '多账号批量发布排期打散，行为拟人化，避免短时间内同 IP 突发高频接口调用。',
      '大带宽专线上行保证 4K 高码率视频极速上传，缩短视频在平台云端渲染转码等待时间。'
    ],
    tags: ['YouTube矩阵', 'Instagram防限流', '多账号防关联', '一机一号', '指纹浏览器']
  },
  {
    id: 'digital-nomad',
    title: '跨境远程办公与数字游民网络环境搭建心得',
    category: 'nomad',
    categoryName: '数字游民实战',
    featured: false,
    readTime: '6 分钟精读',
    date: '2026/11/09',
    link: '/article/digital-nomad/',
    excerpt: '数字游民与跨境远程办公网络环境搭建心得：分享多链路备份容灾、低延迟 Zoom / Google Meet 会议保障、团队协作安全性与全天候高可用网络实战方案。',
    takeaways: [
      '搭建“主力包月 IPLC + 备用终身不限时买断包”双容灾链路，彻底消除境外断网焦虑。',
      'Zoom / Teams 会议软件配置 UDP 优先转发规则，在跨国视频会议中杜绝音视频掉帧卡顿。',
      '建立远程桌面与云存储的端到端加密分流隧道，保障跨国团队代码与核心资产安全。'
    ],
    tags: ['数字游民', '远程办公', '网络容灾', '低延迟会议', '高可用基建']
  }
]

const filteredArticles = computed(() => {
  if (currentTab.value === 'all') return articlesList
  return articlesList.filter(item => item.category === currentTab.value)
})

const getFilteredCount = (tabId) => {
  if (tabId === 'all') return articlesList.length
  return articlesList.filter(item => item.category === tabId).length
}
</script>

<style scoped>
.essays-hub-page {
  min-height: 100vh;
  background-color: #f8fafc;
  color: #1e293b;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 80px;
}

/* TOP PROMO AD BANNER */
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
.essays-hero {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 32px 0 28px;
}
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.essays-breadcrumb {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.essays-breadcrumb a {
  color: #059669;
  text-decoration: none;
}
.essays-breadcrumb .sep {
  color: #cbd5e1;
}
.essays-breadcrumb .current {
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

/* STATS BAR */
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
.essays-main {
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

/* ESSAYS GRID */
.essays-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 48px;
}
.essay-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 24px 28px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
}
.essay-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: #cbd5e1;
}
.essay-card.featured-essay {
  border-left: 4px solid #0BC36B;
}

/* CARD HEADER */
.essay-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.essay-category-tag {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 4px;
}
.essay-category-tag.social {
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
}
.essay-category-tag.live {
  background: #ecfdf5;
  color: #047857;
  border: 1px solid #a7f3d0;
}
.essay-category-tag.payment {
  background: #fdf2f8;
  color: #be185d;
  border: 1px solid #fbcfe8;
}
.essay-category-tag.nomad {
  background: #f5f3ff;
  color: #6d28d9;
  border: 1px solid #ddd6fe;
}

.essay-meta-right {
  font-size: 12px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 6px;
}
.meta-dot {
  color: #cbd5e1;
}

.essay-title {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.4;
  margin: 0 0 10px;
}
.essay-title a {
  color: #0f172a;
  text-decoration: none;
  transition: color 0.2s ease;
}
.essay-title a:hover {
  color: #059669;
}

.essay-excerpt {
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 16px;
}

/* TAKEAWAYS */
.essay-takeaways {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 14px 16px;
  margin-bottom: 18px;
}
.takeaway-title {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 6px;
}
.takeaway-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.takeaway-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: #334155;
  line-height: 1.5;
}
.dot-green {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0BC36B;
  flex-shrink: 0;
  margin-top: 6px;
}

/* FOOTER */
.essay-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f1f5f9;
  padding-top: 14px;
  gap: 16px;
}
.essay-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag-pill {
  font-size: 11px;
  color: #64748b;
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 4px;
}
.read-btn {
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  color: #059669;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
}
.read-btn:hover {
  color: #047857;
  transform: translateX(2px);
}

/* METHODOLOGY SECTION */
.methodology-section {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 32px;
  margin-bottom: 40px;
}
.methodology-header {
  margin-bottom: 24px;
}
.section-heading {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 8px;
}
.section-desc {
  font-size: 14px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.pillar-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.pillar-num {
  font-size: 24px;
  font-weight: 900;
  color: #0BC36B;
  font-family: monospace;
  margin-bottom: 8px;
}
.pillar-title {
  font-size: 16px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 8px;
}
.pillar-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 16px;
  flex: 1;
}
.pillar-badge {
  font-size: 11px;
  font-weight: 600;
  color: #059669;
  background: #ecfdf5;
  padding: 3px 8px;
  border-radius: 4px;
  align-self: flex-start;
  border: 1px solid #a7f3d0;
}

/* BOTTOM BANNER */
.bottom-tools-banner {
  background: linear-gradient(135deg, #064e3b 0%, #022c22 100%);
  border-radius: 14px;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: #ffffff;
}
.banner-title {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 6px;
}
.banner-desc {
  font-size: 13px;
  color: #a7f3d0;
  margin: 0;
  line-height: 1.5;
}
.banner-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}
.banner-btn {
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;
}
.banner-btn.primary {
  background: #00ff87;
  color: #022c22;
}
.banner-btn.primary:hover {
  background: #34d399;
}
.banner-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.banner-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .pillars-grid {
    grid-template-columns: 1fr;
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
  .bottom-tools-banner {
    flex-direction: column;
    text-align: center;
  }
  .banner-actions {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .ad-center-pill {
    display: none;
  }
  .hero-title {
    font-size: 24px;
  }
  .essay-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .essay-card-footer {
    flex-direction: column;
    align-items: flex-start;
  }
  .read-btn {
    align-self: flex-end;
  }
}

/* DARK MODE */
html.dark .essays-hub-page {
  background-color: #0b0f19;
  color: #cbd5e1;
}
html.dark .essays-hero,
html.dark .essay-card,
html.dark .methodology-section {
  background-color: #111827;
  border-color: #1f2937;
}
html.dark .hero-title,
html.dark .essay-title a,
html.dark .section-heading,
html.dark .pillar-title,
html.dark .takeaway-title {
  color: #f9fafb;
}
html.dark .telemetry-bar,
html.dark .essay-takeaways,
html.dark .pillar-card {
  background-color: #1f2937;
  border-color: #374151;
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
html.dark .takeaway-item,
html.dark .pillar-desc {
  color: #cbd5e1;
}
html.dark .tag-pill {
  background-color: #1f2937;
  color: #94a3b8;
}
</style>

