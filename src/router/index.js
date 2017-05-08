import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import business from '../components/bussiness_platform/bussiness_platform.vue'
import developing from '../components/developing/developing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/developing',
      name: 'developing',
      component: developing
    }
  ]
})
