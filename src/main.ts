import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
// import router from './mrouter'
// import store from './mstore'
import router from './router'
import store from './store'
import create from './utils/create'
import './test-ts'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();
Vue.prototype.$axios = axios

Vue.use(create);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
