import { defineNotesConfig } from 'vuepress-theme-plume'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: 'creator',
      link: '/notes/creator/',
      sidebar: [
        {
          text: '推流与网络优化',
          prefix: 'study',
          collapsed: false,
          items: [
            { text: '高码率视频推流与音画同步网络调优', link: 'streaming.md' },
            { text: '出海专线与公网线路推流实测差异', link: 'networkanalysis.md' },
          ],
        },
        {
          text: '账号安全与防封',
          prefix: 'security',
          collapsed: false,
          items: [
            { text: 'Telegram 客户端安全与防偷跑规范', link: 'telegram.md' },
          ],
        },
      ],
    },
  ],
})

