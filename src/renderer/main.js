import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/icons/iconfont.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.withCredentials = true;
    config.headers = {
      "Content-Type": "application/json"
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);
// 超时时间
axios.defaults.timeout = 50000;
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
