import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.prototype.$apiUrl = "https://crudcrud.com/api/86acc90293e94f89996f2b8b04e04d15/people/"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
