import Vue from 'vue'
import App from './App.vue'
import colorDirective from './components/directives/color'

import 'bootstrap/dist/css/bootstrap.css'

import router from './router'

Vue.config.productionTip = false
Vue.directive('color', colorDirective)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
