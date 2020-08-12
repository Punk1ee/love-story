// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// global component
import SvgIcon from '@/components/SvgIcon'
import Vant from 'vant'
import 'vant/lib/index.less'

import '@/styles/index.less'
import '@/utils/authority'
import './mock'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.component('svg-icon', SvgIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
