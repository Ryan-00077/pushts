import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

const site2SidebarItems = [
  {
    text: "机场推荐与深度评测",
    collapsed: false,
    items: [
      { text: "2026 翻墙机场实测推荐", link: "/article/clash-recommend-2026/" },
      { text: "机场深度评测合集", link: "/reviews/" },
      { text: "神行加速 (首选专线)", link: "/article/shenxing/" },
      { text: "大佬云 (IEPL高可用)", link: "/article/dalao/" },
      { text: "云界线 (性价比专线)", link: "/article/yunjiexian/" },
      { text: "闪电鼠 (原生双ISP)", link: "/article/shandianshu/" },
      { text: "榴莲云 (不限设备数)", link: "/article/liulian/" },
      { text: "环球梯 (小众冷门节点)", link: "/article/huanqiuti/" }
    ]
  },
  {
    text: "客户端保姆级教程",
    collapsed: false,
    items: [
      { text: "💻 客户端教程合集总览", link: "/clients/" },
      { text: "Clash Verge Rev 教程", link: "/article/clash-verge/" },
      { text: "Mihomo Party 教程", link: "/article/mihomo-party/" },
      { text: "Shadowrocket (小火箭)", link: "/article/shadowrocket/" },
      { text: "Nextin (星拓专属)", link: "/article/nextin/" },
      { text: "Clash 规则分流进阶", link: "/article/clash-rules-guide/" }
    ]
  },
  {
    text: "实用工具箱",
    collapsed: false,
    items: [
      { text: "🔥 出海实用工具生态库", link: "/tools/" },
      { text: "IP 纯净度与欺诈分检测", link: "/article/iptest/" },
      { text: "出海网络线路测速解析", link: "/article/network-analysis/" },
      { text: "VPS 与网络行业黑话", link: "/article/vpscant/" }
    ]
  },
  {
    text: "海外社媒与多媒体运营专区",
    collapsed: false,
    items: [
      { text: "📝 多媒体运营指南合集", link: "/essays/" },
      { text: "【直播】海外跨境直播网络专线解决方案", link: "/article/tiktok-shop-network/" },
      { text: "【支付】独立站海外收单破局与风控排查", link: "/article/paypal-stripe-risk/" },
      { text: "【社媒】Telegram +86 解私聊与双向限制", link: "/article/telegram-anti-ban/" },
      { text: "【社媒】X 蓝标认证与创作者分成提现", link: "/article/x-blue-verification/" },
      { text: "【社媒】YouTube 矩阵多账号防关联与防限流", link: "/article/creator-multi-account/" },
      { text: "【实战】从个人创作者到海外 MCN 架构思考", link: "/article/digital-nomad/" }
    ]
  }
]

export default (defineThemeConfig as any)({
  logo: '/pushlab-logo.jpg',
  profile: {
    avatar: '/pushlab-logo.jpg',
    name: '推手 · PushLab',
    description: 'pushts.com · 海外社媒推手与创作者出海网络专精',
    circle: true,
  },
  social: [
    {
      icon: {
        name: 'telegram',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/></svg>'
      },
      link: 'https://t.me/wanfengzn7',
      ariaLabel: 'Telegram 商务合作'
    }
  ],
  navbarSocialInclude: ['telegram'],
  navbar,
  notes,
  sidebar: {
    '/article/': site2SidebarItems,
    '/blog/': site2SidebarItems,
  },
  blog: {
    pagination: 15,
    postList: true,
    tags: true,
    archives: true,
    categories: true,
    link: '/blog/',
    tagsLink: '/blog/tags/',
    archivesLink: '/blog/archives/',
    categoriesLink: '/blog/categories/',
    categoriesTransform(categories: any) {
      return categories.filter((item: any) => item.name !== 'blog')
    },
  },
  lastUpdated: {
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'short',
    },
  },
  footer: {
    message: 'Copyright © 2026 推手 · PushLab · 商务合作 / 广告赞助: <a href="https://t.me/wanfengzn7" target="_blank" rel="noopener noreferrer nofollow">Telegram: @wanfengzn7</a>',
    copyright: '仅限自媒体出海矩阵、跨境电商合规运营与学术文献加速使用 · 严禁用于任何违法活动',
  },
})
