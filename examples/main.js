/*
 * @Author: aven9527
 * @Date: 2021-08-25 15:37:35
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-01 15:24:17
 * @Description: 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import FakeUI from '../packages/index'
import "./styles/common.scss"
import "./assets/iconfont/iconfont.css"
import {Icon} from 'element-ui'
import "element-ui/lib/theme-chalk/icon.css"
Vue.config.productionTip = false
Vue.use(Icon)
Vue.use(FakeUI.FakeButton)
Vue.use(FakeUI.FakeToast)
Vue.use(FakeUI.FakeMessage)
new Vue({
  render: h => h(App),
}).$mount('#app')
