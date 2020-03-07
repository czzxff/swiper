import Vue from 'vue'
import Router from 'vue-router'
import Swiper from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'swiper',
      component: Swiper
    }
  ]
})
