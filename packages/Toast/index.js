
import FakeToast from './src/index.vue'

FakeToast.install = function(Vue) {
  Vue.component(FakeToast.name, FakeToast)
}

export default FakeToast

