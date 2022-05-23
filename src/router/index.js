import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/grape',
    name: 'Grape',
    component: () => import('../views/Grape.vue')
  },
  {
    path: '/carrot',
    name: 'Carrot',
    component: () => import('../views/Carrot.vue')
  },
  {
    path: '/apple',
    name: 'Apple',
    component: () => import('../views/Apple.vue')
  },
  {
    path: '/leaf',
    name: 'Leaf',
    component: () => import('../views/Leaf.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
