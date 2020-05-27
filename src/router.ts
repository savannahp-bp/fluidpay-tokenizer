import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: () => import('@/docs/pages/home.vue')
    },
    {
      path: '/methods',
      component: () => import('@/docs/pages/methods.vue')
    },
    {
      path: '/styles',
      component: () => import('@/docs/pages/styles.vue')
    },
    {
      path: '/sections',
      component: () => import('@/docs/pages/sections.vue')
    },
    {
      path: '/payments',
      component: () => import('@/docs/pages/payments.vue')
    },
    {
      path: '/playground',
      component: () => import('@/docs/pages/playground.vue')
    }
  ]
})
