import fs from 'node:fs'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '推手 · PushLab',
  description: '推手 · PushLab (pushts.com) - 海外社媒推手与创作者出海网络专精：高吞吐低抖动推流专线评测、Telegram +86解私聊防封指南、X蓝标认证与创作者分成提现网络隔离实操。',

  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/pushlab-logo.jpg' }],
    ['link', { rel: 'shortcut icon', href: '/pushlab-logo.jpg' }],
    ['meta', { name: 'theme-color', content: '#0BC36B' }],
    ['meta', { name: 'keywords', content: '推手, PushLab, 海外社媒, 创作者出海, 自媒体梯子, Telegram解私聊, X蓝标认证, YouTube推流, 机场推荐, IPLC专线' }],
    ['meta', { name: 'msvalidate.01', content: '8BEA8052606A0C15AACD9FF35D7E6180' }],
    ['meta', { name: 'google', content: 'notranslate' }],
    ['meta', { httpEquiv: 'Content-Language', content: 'zh-CN' }],
  ],

  extendsPage: (page: any) => {
    if (page.contentFilePath && fs.existsSync(page.contentFilePath)) {
      const stats = fs.statSync(page.contentFilePath)
      const mtime = page.frontmatter.dateModified
        ? new Date(page.frontmatter.dateModified).getTime()
        : Math.floor(stats.mtimeMs)
      page.data.git = {
        ...page.data.git,
        updatedTime: mtime,
      }
    }
  },

  bundler: viteBundler(),

  theme: plumeTheme({
    hostname: 'https://pushts.com',
    plugins: {
      sitemap: {
        hostname: 'https://pushts.com',
        modifyTimeGetter: (page: any) => {
          const time = page.frontmatter?.dateModified || page.frontmatter?.createTime
          if (time) {
            return new Date(time).toISOString()
          }
          return new Date().toISOString()
        },
      },
      seo: {
        hostname: 'https://pushts.com',
      },
      shiki: {
        langs: ['yaml', 'bash', 'json', 'typescript', 'javascript', 'html', 'css', 'markdown'],
      },
      markdownPower: {
        demo: true,
      },
    },
  }),
})

