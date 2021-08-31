
<template>
  <div class="fake-message" v-show="isVisible">
    <div class="fake-message-content fake-flex fake-items-center fake-justify-around" style="">
      <div class="fake-message-icon">
        <i :class="iconClass" :style="{color: iconColor}"></i>
      </div>
      <div class="fake-message-text">
        {{message}}
      </div>
      <div class="fake-message-close">
        <i class="el-icon-error" @click="handleClose"></i>
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
    },
    computed: {
      iconClass() {
        return `iconfont icon-${this.type}`
      },
      iconColor() {
        let color
        switch (this.type) {
          case 'success': 
            color = 'green';
            break;
          case 'warn': 
            color = 'yellow';
            break;
          case 'info': 
            color = 'gray';
            break;
          default:
            break;
        }
        return color
      }
    },
    data() {
      return {
        duration: 3000,
        timer: ''
      }
    },
    methods: {
      show() {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.isVisible = true
        this.timer = setTimeout(()=> {
          this.isVisible = false
          // this.$el.parentNode.removeChild(this.$el)
          clearTimeout(this.timer)
        }, this.duration)
      },
      handleClose(e) {
        this.$emit(CLOSE_EMIT, e)
        if(this.timer) clearTimeout(this.timer)
        // this.isVisible = false
        this.remove()
        console.log(this.$parent);
        
      },
    }
  }
</script>

<style lang="scss" scoped>
  .fake-message {
    position: absolute;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 20px;
    animation: move .4s forwards;
    &-content {
      width: 220px;
      height: 100%;
      padding: 0 12px;
      background: #fff;
      box-shadow: 0px 0px 4px rgba( 0, 0, 0, .5);
      border-radius: 5px;
    }
    &-icon {
      display: flex;
      margin: 0 10px;
      i {
        font-size: 22px;
      }
    }
    &-text {
      flex: 1;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-close {
      display: flex;
      margin: 0 6px;
      i {
        font-size: 22px;
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
      opacity: 1;
    }
  }
</style>
    
