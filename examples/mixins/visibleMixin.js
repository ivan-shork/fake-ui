/*
 * @Author: aven9527
 * @Date: 2021-08-26 17:02:04
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-12 22:21:09
 * @Description: visible
 */
//组件挂载，显示隐藏
const EVENT_TOGGLE = 'update:visible'
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
      // 自动去跟新父亲组件上model的值
      this.$emit(EVENT_TOGGLE, newVal)
    }
  },
  mounted () {
    //visible监听 且必须为immdiate 
    this.$watch('visible', (newVal) => {      
      if (newVal) {  
        console.log('aaaaa');
              
        this.show()        
      } else {        
        this.hidden()
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
    hidden () {      
      this.isVisible = false
      return this
    }
  }
}
export default visibleMixin
