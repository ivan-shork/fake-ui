<!--
 * @Author: aven9527
 * @Date: 2021-08-26 16:22:33
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-26 16:29:48
 * @Description: toast弹窗提示
-->

<template>
<fake-popup v-show="isVisible" :allowClick="allowClick" :opcity="bgOpcity">
  <template v-slot:content>
    <div class="fake-toast">
      <div class="fake-toast-content">
        <div v-if="icon" class="fake-toast-icon"></div>
        <div class="fake-toast-text">
          {{ toastText }}
        </div>
      </div>
    </div>
  </template>
</fake-popup>
</template>

<script>
import fakePopup from '../../common/popup'
import visibleMixin from '@/mixins/visibleMixin'
  export default {
    name: 'FakeToast',
    props: {
      text: {
        type: String,
        require: true
      },
      icon: {
        type: String,
        require: false
      },
      time: {
        type: Number,
        default: 3000
      },
      // 遮罩层是否显示
      mask: {
        type: Boolean,
        default: false
      },
      opcity: {
        type: Number,
        default: 0.3,
      }
    },
    components: {
      fakePopup
    },
    mixins: [visibleMixin],
    data() {
      return {
        toastTimer: '',  
        toastText: '',
        toastTime: '',
        // 允许点击
        allowClick: '',
        bgOpcity: 0,
      }
    },
    mounted() {
      this.toastText = this.text
      this.toastTime = this.time
      // 有蒙版不能点击
      this.allowClick = this.mask ? false : true
      this.bgOpcity = this.mask ? this.opcity : 0
      
    },
    methods: {
      show(txt = '', toastTime = 0) {
        this.toastTimer && clearTimeout(this.toastTimer)
        // 可以传递额外的参数来覆盖属性上的值 优先级最高
        txt && (this.toastText = txt)
        toastTime && (this.toastTime = toastTime)        
        this.isVisible = true

        this.toastTime && (this.toastTimer = setTimeout(()=> {          
          this.hide()
        }, this.toastTime))

      },
      hide() {
        // 清空定时器
        this.toastTimer = null
        this.isVisible = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fake-toast {
    // 一般在父容器上做相对定位
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
      max-width: 70%;
      padding: .5em 1em;
      border: 1px solid gainsboro;
      border-radius: 7px;
      background: gray;
      color: white;
      animation: move .4s forwards;
    }
  }


  @keyframes move {
    0% {
      opacity: 0;
      transform: translate3d(0, -0.6em, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
    
