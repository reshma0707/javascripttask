import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import deptView from '@/components/deptView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/deptView',
    name: 'home',
    component:deptView
  },
  {
    path: '/helloworld',
    name: 't',
    component:HelloWorld
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
