import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from './components/common/toast/index.js'

Vue.use(toast)

Vue.use(VueLazyload,{
  loading:require('./assets/imgs/home/load.gif')
})

/* 解决移动端点击延迟300ms的问题 */
fastClick.attach(document.body)

Vue.config.productionTip = false

/* 事件总线 */
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
