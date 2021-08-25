/*
 * @Author: aven9527
 * @Date: 2021-08-25 16:04:18
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-25 16:15:22
 * @Description: file content
 */

import FakeButton from './src/index'

FakeButton.install = function(Vue) {
  Vue.component(FakeButton.name, FakeButton)
}

export default FakeButton