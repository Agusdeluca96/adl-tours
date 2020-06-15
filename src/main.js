import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

// Import global styles
require("@/assets/css/main.min.css");

// Import Icon font
require("@/assets/css/icon-font.css");

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
