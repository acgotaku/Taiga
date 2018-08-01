import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('@/pages/Home.vue')
const NotFound = () => import('@/pages/NotFound.vue')
const HelloWorld = () => import('@/components/HelloWorld.vue')

let routes = [
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

const redirectRoutes = routes.map(route => {
  return { path: route.path, redirect: { name: route.name } }
})

routes.forEach(route => {
  route.path = '/:lang' + route.path
})

routes = routes.concat(redirectRoutes)

routes.push({ name: '404', path: '*', component: NotFound })

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
