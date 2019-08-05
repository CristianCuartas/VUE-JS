import Vue from 'vue'
import BaseHero from './components/BaseHero.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(BaseHero),
}).$mount('#app')
