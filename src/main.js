import Vue from 'vue'
import App from './App.vue'
import router from './mrouter'
import store from './mstore'
import create from './utils/create'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

Vue.use(create);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
