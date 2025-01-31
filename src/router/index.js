import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/LearnView.vue'),
    },
    {
      path: '/learn/allcategory',
      name: 'allcategory',
      component: () => import('../views/AllCategoryOfExpressionsView.vue'),
    },
    {
      path: '/learn/allcategory/alphabet',
      name: 'alphabet',
      component: () => import('../views/QuizAlphabetView.vue'),
    },
    {
      path: '/learn/allcategory/presentation',
      name: 'presentation',
      component: () => import('../views/QuizPresentationView.vue'),
    },
    {
      path: '/revise',
      name: 'revise',
      component: () => import('../views/ReviseView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },

    
  ],
})

export default router
