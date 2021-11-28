import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    // 3s 跳轉到附近站牌
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 附近站牌
    path: '/stop',
    name: 'Stop',
    component: () => import('../views/StopInfo.vue')
  },
  {
    // 路線搜尋
    path: '/search',
    name: 'Search',
    component: () => import('../views/RoadSearch.vue')
  },
  {
    // 最新消息
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
