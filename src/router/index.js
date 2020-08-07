import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/sc-home-page/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
