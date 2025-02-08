import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/what-is-your-name',
      name: 'what-is-your-name',
      component: () => import('../views/NameView.vue'),
    },
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
      path: '/sign-for-us',
      name: 'sign-fr-us',
      component: () => import('../views/SignForUs.vue'),
    },
    {
      path: '/learn/allcategory',
      name: 'allcategory',
      component: () => import('../views/AllCategoryOfExpressionsView.vue'),
    },




    {
      path: '/learn/allcategory/alphabet',
      name: 'alphabet',
      component: () => import('../views/AllQuizs/QuizAlphabetView.vue'),
    },
    {
      path: '/learn/allcategory/presentation',
      name: 'presentation',
      component: () => import('../views/AllQuizs/QuizPresentationView.vue'),
    },
    {
      path: '/learn/allcategory/locutions',
      name: 'locutions',
      component: () => import('../views/AllQuizs/QuizLocutionsView.vue'),
    },




    {
      path: '/revise',
      name: 'revise',
      component: () => import('../views/ReviseView.vue'),
    },

  ],
})

export default router
