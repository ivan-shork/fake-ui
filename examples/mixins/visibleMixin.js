/*
 * @Author: aven9527
 * @Date: 2021-08-26 17:02:04
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-26 17:03:14
 * @Description: file content
 */
//组件挂载，显示隐藏
const EVENT_TOGGLE = 'toggle'
let visibleMixin = {
  model: {
    prop: 'visible',
    event: EVENT_TOGGLE
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      isVisible: false
    }
  },
  watch: {
    isVisible (newVal) {
      this.$emit(EVENT_TOGGLE, newVal)
    }
  },
  mounted () {
    //visible相关逻辑，一般用不到，除非组件上用到v-model属性
    this.$watch('visible', (newVal, oldVal) => {
      if (newVal) {
        this.show()
      } else if (oldVal) {
        this.hide()
      }
    }, {
      immediate: true
    })
  },
  methods: {
    show () {
      this.isVisible = true
      return this
    },
    hide () {
      this.isVisible = false
      return this
    }
  }
}
export default visibleMixin
