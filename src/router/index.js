import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/memes',
      name: 'meme',
      component: () => import('@/views/MemeView.vue')
    }]
})

export default router
