import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/pages/Home.vue')
const HelloWorld = () => import('@/components/HelloWorld.vue')

const routes = [
  {
    name: 'helloWorld',
    path: '/',
    component: HelloWorld
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
