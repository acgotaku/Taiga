import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from './i18n'

Vue.use(VueRouter)

const LANGS = ['en', 'zh']
const Home = () => import('@/pages/Home.vue')
const NotFound = () => import('@/pages/NotFound.vue')
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

routes.forEach(route => {
  route.path = '/:lang' + route.path
})

routes.push({ name: '404', path: '*', component: NotFound })

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  if (!LANGS.includes(lang)) {
    next({
      name: to.name,
      params: Object.assign(to.params, {
        lang: i18n.locale
      }),
      path: '/' + i18n.locale + to.path,
      replace: true,
      query: to.query
    })
  } else {
    i18n.locale = lang
    next()
  }
})

export default router
