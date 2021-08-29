
import FakeToast from './src/index.vue'
import create from '@/utils/create'
FakeToast.install = function(Vue) {
  Vue.component(FakeToast.name, FakeToast)
  Vue.prototype.$showToast = create(FakeToast, Vue)
}

export default FakeToast

