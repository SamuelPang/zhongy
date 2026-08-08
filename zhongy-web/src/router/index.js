import { createRouter, createWebHistory } from 'vue-router'
import { topics } from '../data/topics'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  ...Object.values(topics).map(topic => ({
    path: `/topic/${topic.id}`,
    name: topic.title,
    component: () => import(`@/views/topics/${topic.component}.vue`),
    meta: {
      topicId: topic.id,
      title: topic.title
    }
  })),
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
