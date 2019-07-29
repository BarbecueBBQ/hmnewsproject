import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import Vant from 'vant'

// import '@/styles/index.less'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'

Vue.use(Vant)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
