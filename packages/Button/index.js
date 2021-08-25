
import FakeButton from './src/index.vue'

FakeButton.install = function(Vue) {
  Vue.component(FakeButton.name, FakeButton)
}

export default FakeButton

