
import FakeDialog from './src/index.vue'
import create from '@/utils/create' 
FakeDialog.install = function(Vue) {
  Vue.component(FakeDialog.name, FakeDialog)
  Vue.prototype.$createFakeDialog=create(FakeDialog,Vue) 
}

export default FakeDialog

