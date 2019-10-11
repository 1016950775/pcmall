import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/iview.js'

import {Anchor} from 'iview'
Vue.component('Anchor', Anchor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
