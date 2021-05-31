import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 浏览器控制台不显示非生产环境打包的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //注册路由器=>所有组件都可以直接访问2个对象，$route和$router
}).$mount('#app')

const a = 123