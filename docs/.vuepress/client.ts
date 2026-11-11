import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'
import ServiceRecommendRail from './components/ServiceRecommendRail.vue'
import HomeCreator from './components/HomeCreator.vue'
import ToolsHub from './components/ToolsHub.vue'
import ReviewsHub from './components/ReviewsHub.vue'
import ClientsHub from './components/ClientsHub.vue'
import EssaysHub from './components/EssaysHub.vue'
import './styles/index.css'

export default defineClientConfig({
  layouts: {
    Layout,
  },
  enhance({ app }) {
    app.component('ServiceRecommendRail', ServiceRecommendRail)
    app.component('HomeCreator', HomeCreator)
    app.component('ToolsHub', ToolsHub)
    app.component('ReviewsHub', ReviewsHub)
    app.component('ClientsHub', ClientsHub)
    app.component('EssaysHub', EssaysHub)
  },
})
