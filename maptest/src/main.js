import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'


Vue.prototype.axios = axios


Vue.use(ElementUI)
Vue.use(VCharts)
Vue.config.productionTip = false

window.router=router

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
