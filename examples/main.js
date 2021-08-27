/*
 * @Author: aven9527
 * @Date: 2021-08-25 15:37:35
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-27 13:03:36
 * @Description: 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import FakeUI from '../packages/index.js'
import "./styles/common.scss"
Vue.config.productionTip = false
Vue.use(FakeUI)



new Vue({
  render: h => h(App),
}).$mount('#app')
