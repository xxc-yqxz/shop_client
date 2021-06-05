import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import store from './store'

// import "swiper/css/swiper.css"; // 所有组件都能用上这个样式
import './plugins/swiper' //加载swipper的配置
import './mock/mockServer'


// 浏览器控制台不显示非生产环境打包的提示
Vue.config.productionTip = false

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)


new Vue({
  beforeCreate() {
    // 1) 创建或指定事件总线对象，保存到Vue的原型上
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router, //注册路由器=>所有组件都可以直接访问2个对象，$route和$router
  store
}).$mount('#app')

// const a = 123

