import Vue from 'vue'
import App from './App'
import store from './store'
import uuid from 'vue-uuid'

Vue.use(uuid)
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App) 
}).$mount('#app');