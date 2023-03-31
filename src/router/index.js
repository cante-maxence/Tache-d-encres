import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import testView from '../views/testView.vue'
import quatreView from '../views/quatreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',
      component: testView
    },
    {
      path: "*",
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: quatreView,
    }
  ]
})

export default router
