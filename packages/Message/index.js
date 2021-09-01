/*
 * @Author: aven9527
 * @Date: 2021-08-30 15:18:30
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-01 11:21:25
 * @Description: file content
 */

import FakeMessage from './src/index.vue'
import create from '@/utils/create' 
const messageType = ['warn', 'info', 'success']
FakeMessage.install = function(Vue) {
  Vue.component(FakeMessage.name, FakeMessage)
  Vue.prototype.$message=create(FakeMessage,Vue) 
  messageType.forEach(type=> {
    Vue.prototype.$message[type] = create(FakeMessage, Vue, {
      type: type
    })
  })
}

export default FakeMessage

