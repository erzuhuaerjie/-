import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BScroll from 'better-scroll'
import echarts from 'echarts'
import VueFullpage from 'vue-fullpage.js'
import animate from 'animate.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

 // 引入公用样式
import '@/assets/reset.css'

Vue.use(iView)
Vue.prototype.$echarts = echarts
Vue.use(VueAxios,axios)
Vue.use(ElementUI);
Vue.use(VueFullpage)
Vue.config.productionTip = false








/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

