import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Landing
  },
  {
    path: '/cuisine/:type',
    name: 'Cuisine',
    component: () => import('@/views/Cuisine')
  },
  {
    path: '/searched/:text',
    name: 'Searched',
    component: () => import('@/views/Searched')
  },
  {
    path: '/food/:name',
    name: 'Food',
    component: () => import('@/views/Food')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'is-activated'
})

export default router
