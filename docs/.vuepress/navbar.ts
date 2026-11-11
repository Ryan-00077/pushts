import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '机场推荐', link: '/article/clash-recommend-2026/' },
  {
    text: '机场评测',
    items: [
      { text: '📊 机场深度评测合集', link: '/reviews/' },
      { text: '神行加速 (首选专线)', link: '/article/shenxing/' },
      { text: '大佬云 (IEPL高可用)', link: '/article/dalao/' },
      { text: '云界线 (性价比专线)', link: '/article/yunjiexian/' },
      { text: '闪电鼠 (原生双ISP)', link: '/article/shandianshu/' },
      { text: '榴莲云 (不限设备数)', link: '/article/liulian/' },
      { text: '环球梯 (小众冷门节点)', link: '/article/huanqiuti/' },
    ]
  },
  {
    text: '客户端教程',
    items: [
      { text: '💻 客户端教程合集总览', link: '/clients/' },
      { text: 'Clash Verge Rev 教程', link: '/article/clash-verge/' },
      { text: 'Mihomo Party 教程', link: '/article/mihomo-party/' },
      { text: 'Shadowrocket (小火箭)', link: '/article/shadowrocket/' },
      { text: 'Nextin (星拓专属)', link: '/article/nextin/' },
      { text: 'Clash 规则分流进阶', link: '/article/clash-rules-guide/' },
    ]
  },
  {
    text: '实用工具',
    items: [
      { text: '🔥 出海实用工具生态库 (80+ 工具收录)', link: '/tools/' },
      { text: '🔍 IP 纯净度与欺诈分检测实操', link: '/article/iptest/' },
      { text: '⚡ 出海网络线路测速解析指南', link: '/article/network-analysis/' },
      { text: '📖 VPS 与网络行业黑话速查字典', link: '/article/vpscant/' },
    ]
  },
  {
    text: '多媒体运营指南',
    items: [
      { text: '📝 多媒体运营指南合集', link: '/essays/' },
      { text: '【直播】海外跨境直播网络专线解决方案', link: '/article/tiktok-shop-network/' },
      { text: '【支付】独立站海外收单破局与风控排查', link: '/article/paypal-stripe-risk/' },
      { text: '【社媒】Telegram +86 解私聊与双向限制', link: '/article/telegram-anti-ban/' },
      { text: '【社媒】X 蓝标认证与创作者分成提现', link: '/article/x-blue-verification/' },
      { text: '【社媒】YouTube 矩阵多账号防关联与防限流', link: '/article/creator-multi-account/' },
      { text: '【实战】从个人创作者到海外 MCN 架构思考', link: '/article/digital-nomad/' },
    ]
  },
])

