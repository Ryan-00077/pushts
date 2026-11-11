<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, withBase } from 'vuepress/client'

interface ProviderItem {
  id: number
  name: string
  desc: string
  logo: string
  link: string
  keyword: string
}

const route = useRoute()
const router = useRouter()

function navigate(link: string, e: MouseEvent) {
  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
    e.preventDefault()
    router.push(link)
  }
}

const providers: ProviderItem[] = [
  {
    id: 1,
    name: '神行加速',
    desc: '全IPLC专线 / 4K推流极低抖动首选',
    logo: '/images/airports/shenxing-logo.webp',
    link: '/article/shenxing/',
    keyword: 'shenxing',
  },
  {
    id: 2,
    name: '大佬云',
    desc: '全IEPL专线 / 99.9%高可用容灾保障',
    logo: '/images/airports/dalaoyun-logo.webp',
    link: '/article/dalao/',
    keyword: 'dalao',
  },
  {
    id: 3,
    name: '云界线',
    desc: '单节点2.5G超大带宽 / 专属7折特惠',
    logo: '/images/airports/yunjiexian-logo.webp',
    link: '/article/yunjiexian/',
    keyword: 'yunjiexian',
  },
  {
    id: 4,
    name: '闪电鼠',
    desc: '独享双ISP住宅出口 / 社媒防风控推荐',
    logo: '/images/airports/shandianshu-logo.webp',
    link: '/article/shandianshu/',
    keyword: 'shandianshu',
  },
  {
    id: 5,
    name: '榴莲云',
    desc: '不限制在线设备数 / 创作者多机位推流',
    logo: '/images/airports/liulianyun-logo.webp',
    link: '/article/liulian/',
    keyword: 'liulian',
  },
  {
    id: 6,
    name: '环球梯',
    desc: '全球多冷门区域 / 阶梯灵活按量包',
    logo: '/images/airports/huanqiuti-logo.webp',
    link: '/article/huanqiuti/',
    keyword: 'huanqiuti',
  },
]

const currentPath = computed(() => route.path)

function isActive(item: ProviderItem) {
  return currentPath.value.includes(item.link) || currentPath.value.includes(item.keyword)
}
</script>

<template>
  <div class="service-recommend-rail">
    <div class="rail-header">
      <span class="badge-featured">创作者专线精选</span>
      <span class="badge-ad">实测直达</span>
    </div>

    <h3 class="rail-title">社媒出海网络推荐</h3>

    <div class="rail-list">
      <a
        v-for="item in providers"
        :key="item.id"
        :href="withBase(item.link)"
        class="rail-item"
        :class="{ active: isActive(item) }"
        @click="navigate(item.link, $event)"
      >
        <span class="item-rank">{{ item.id }}</span>

        <div class="item-avatar">
          <img :src="withBase(item.logo)" :alt="item.name" loading="lazy" />
        </div>

        <div class="item-info">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-desc" :title="item.desc">{{ item.desc }}</span>
        </div>

        <span class="item-arrow">→</span>
      </a>
    </div>

    <div class="rail-footer">
      <p class="rail-disclaimer">
        创作者高码率直播与视频推流，建议优先选择抖动低于3ms且丢包率为0的IPLC内网专线。
      </p>
      <a
        :href="withBase('/article/clash-recommend-2026/')"
        class="rail-guide-link"
        :class="{ active: currentPath.includes('/article/clash-recommend-2026/') }"
        @click="navigate('/article/clash-recommend-2026/', $event)"
      >
        查看创作者选型横评指南 →
      </a>
    </div>
  </div>
</template>

<style scoped>
.service-recommend-rail {
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--vp-c-divider, #e2e8f0);
}

.rail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.badge-featured {
  font-size: 14px;
  font-weight: 800;
  color: #4f46e5;
  letter-spacing: 0.5px;
}

[data-theme='dark'] .badge-featured {
  color: #818cf8;
}

.badge-ad {
  font-size: 12px;
  color: #64748b;
  border: 1px solid rgba(100, 116, 139, 0.3);
  padding: 1px 6px;
  border-radius: 4px;
  line-height: 1.4;
}

.rail-title {
  margin: 4px 0 14px;
  padding: 0;
  font-size: 19px;
  font-weight: 800;
  color: var(--vp-c-text-1, #0f172a);
  line-height: 1.3;
}

.rail-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.rail-item {
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
}

.rail-item:hover {
  background-color: var(--vp-c-default-soft, rgba(79, 70, 229, 0.06));
  text-decoration: none;
}

[data-theme='dark'] .rail-item:hover {
  background-color: rgba(129, 140, 248, 0.08);
}

.rail-item.active {
  background-color: rgba(79, 70, 229, 0.1);
}

[data-theme='dark'] .rail-item.active {
  background-color: rgba(129, 140, 248, 0.15);
}

.item-rank {
  width: 22px;
  font-size: 16px;
  font-weight: 800;
  color: #4f46e5;
  text-align: center;
  margin-right: 8px;
  flex-shrink: 0;
}

[data-theme='dark'] .item-rank {
  color: #818cf8;
}

.item-avatar {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 12px;
  flex-shrink: 0;
  background-color: #f8fafc;
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}

[data-theme='dark'] .item-avatar {
  background-color: #1e293b;
  border-color: rgba(255, 255, 255, 0.1);
}

.item-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.item-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--vp-c-text-1, #1e293b);
  line-height: 1.3;
  margin-bottom: 2px;
}

.item-desc {
  font-size: 12px;
  color: var(--vp-c-text-2, #64748b);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-arrow {
  margin-left: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #4f46e5;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

[data-theme='dark'] .item-arrow {
  color: #818cf8;
}

.rail-item:hover .item-arrow {
  transform: translateX(4px);
}

.rail-footer {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed var(--vp-c-divider, rgba(0, 0, 0, 0.08));
}

.rail-disclaimer {
  margin: 0 0 10px 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--vp-c-text-3, #94a3b8);
}

.rail-guide-link {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #4f46e5;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: all 0.2s ease;
}

.rail-guide-link:hover {
  color: #4338ca;
}

[data-theme='dark'] .rail-guide-link {
  color: #818cf8;
}
</style>

