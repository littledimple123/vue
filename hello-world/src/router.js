import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './components/test1/login'
import dingweiMap from './components/test1/dingweiMap'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/dingweiMap',
      name:'dingweiMap',
      component:dingweiMap
    }
  ]
})
