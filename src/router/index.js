import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login')
    },
    {
      path: '/home',
      redirect: '/home/index',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('@/views/home')
        }
      ]
    },
    {
      path: '/me',
      redirect: '/me/index',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Me',
          component: () => import('@/views/me')
        }
      ]
    },
    {
      path: '/index1',
      name: 'Index1',
      component: () => import('@/views')
    }
  ]
})
