
<template>
  <div class="fake-message" :class="{'fake-message-moveout': fadeout}" v-show="isVisible">
    <div class="fake-message-content fake-flex fake-middle" :style="{backgroundColor: backgroundColor}">
      <div class="fake-message-icon">
        <i :class="iconClass" style="color: #fff"></i>
      </div>
      <div class="fake-message-text">
        {{message}}
      </div>
      <div class="fake-message-close">
        <i class="el-icon-error" style="color: #fff" @click="handleClose"></i>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
const CLOSE_EMIT = 'close'
import visibleMixin from '@/mixins/visibleMixin'
  export default {
    name: 'FakeMessage',
    mixins: [visibleMixin],
    props: {
      type: {
        type: String,
        default: 'info'
      },
      message: {
        type: String,
        required: true,
      },
      showClose: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      iconClass() {
        return `iconfont icon-${this.type}`
      },
      backgroundColor() {
        let color
        switch (this.type) {
          case 'success': 
            color = '#336699';
            break;
          case 'warn': 
            color = '#FF6666';
            break;
          case 'info': 
            color = '#999999';
            break;
          default:
            break;
        }
        return color
      }
    },
    mounted() {
      this.show()
    },
    data() {
      return {
        duration: 3000,
        timer: '',
        fadeout: false,
        close: false
      }
    },
    methods: {
      show() {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.isVisible = true
        // 提前几秒渐变退出
        let fadeTimer = setTimeout(()=> {
          this.fadeout = true
          clearTimeout(fadeTimer)
        }, this.duration - 400)
        // 时间到 销毁组件 
        this.timer = setTimeout(()=> {
          this.hidden()
        }, this.duration)
      },
      hidden() {
        if(this.timer) clearTimeout(this.timer)
        // 手动移除和自动移除不一样
        if(this.close) {
          let d = setTimeout(()=> {
            this.remove()
            clearTimeout(d)
          }, 400)
        } else {
          this.remove()
        }     
      
      },
      handleClose(e) {
        this.$emit(CLOSE_EMIT, e)
        this.fadeout = true
        this.close = true
        this.hidden()
      },
    },
  }
</script>

<style lang="scss" scoped>
  .fake-message {
    position: absolute; 
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    left: 0;
    top: 20px;
    animation: move .4s forwards;
    &-moveout {
      animation: moveout .4s forwards;
    }
    &-content {
      width: 220px;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      padding: 0 12px;
      background: #fff;
      box-shadow: 0px 3px 4px rgba( 0, 0, 0, .5);
      border-radius: 5px;
    }
    &-icon {
      margin: 0 10px 0 0;
      i {
        font-size: 16px;
      }
    }
    &-text {
      flex: 1;
      text-align: center;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-close {
      margin: 0 6px;
      i {
        font-size: 16px;
      }
    }
  }
  @keyframes move {
    0% {
      transform: translate3d(0, -50%, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: .9;
    }
  }
  @keyframes moveout {
    from {
      transform: translate3d(0, 0, 0);
      opacity: .9;
    }
    to {
      transform: translate3d(0, -50%, 0);
      opacity: 0;
    }
  }
</style>
    
