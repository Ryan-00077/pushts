<script setup lang="ts">
import { Layout as PlumeLayout } from 'vuepress-theme-plume/client'
import ServiceRecommendRail from '../components/ServiceRecommendRail.vue'
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter, usePageData } from 'vuepress/client'

const route = useRoute()
const router = useRouter()
const pageData = usePageData()

watchEffect(() => {
  if (typeof document !== 'undefined') {
    const currentTitle = pageData.value?.title
    if (currentTitle) {
      document.title = currentTitle.includes('推手') ? currentTitle : `${currentTitle} | 推手 · PushLab`
    } else {
      document.title = '2026年海外社媒与推手翻墙机场评测 | 推手 · PushLab'
    }

    // If visiting category "实用工具", seamlessly route to /tools/
    if (typeof window !== 'undefined' && route.path.includes('/blog/categories')) {
      const search = window.location.search
      if (search.includes('实用工具') || decodeURIComponent(search).includes('实用工具')) {
        router.replace('/tools/')
      }
    }
  }
})

const isArticlePage = computed(() => !route.path.startsWith('/notes/') && !route.path.startsWith('/tools/'))
</script>

<template>
  <div :class="{ 'is-article-sidebar': isArticlePage }">
    <PlumeLayout>
      <template #sidebar-nav-before>
        <ServiceRecommendRail v-if="isArticlePage" />
      </template>
    </PlumeLayout>
  </div>
</template>

