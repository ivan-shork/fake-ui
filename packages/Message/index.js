
import FakeMessage from './src/index.vue'
import create from '@/utils/create' 
FakeMessage.install = function(Vue) {
  Vue.component(FakeMessage.name, FakeMessage)
  Vue.prototype.$createFakeMessage=create(FakeMessage,Vue) 
}

export default FakeMessage

