import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import { ROUTES } from '@/shared/constants/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: ROUTES.SIGN_IN,
      name: 'sign-in',
      component: () => import('../pages/SignInPage.vue')
    },
    {
      path: ROUTES.SIGN_UP,
      name: 'sign-up',
      component: () => import('../pages/SignUpPage.vue')
    },
    {
      path: ROUTES.ORDER,
      name: 'sign-up',
      component: () => import('../pages/OrderPage.vue')
    }
  ]
})

export default router
