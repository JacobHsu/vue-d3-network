import Vue from 'vue'
import Example from './example/App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Example),
}).$mount('#app')
