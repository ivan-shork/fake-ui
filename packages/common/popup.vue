<!--
 * @Author: aven9527
 * @Date: 2021-08-26 16:50:02
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-01 22:53:15
 * @Description: file content
-->
<template>
  <div 
    class="fake-popup" 
    :style="{backgroundColor: popupBg, pointerEvents: pointEvents, zIndex: 999}">
    <div class="fake-popup-content fake-flex fake-middle" @click="maskClick">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
let MASK_EMIT = 'clickMask'
export default {
  name: 'FakePopup',
  props: {
    opcity: {
      type: Number,
      default: 0.3
    },
    allowClick: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    popupBg() {
      // 有蒙版透明度不设 0， 没有设 0
      return `rgba(0, 0, 0, ${this.opcity})`
    },
    pointEvents() {
      return this.allowClick ? 'none' : ''
    },
  },
  methods: {
    // 点击mask层触发事件
    maskClick(e) {
      if(e.target.className.includes('fake-popup-content')) {
        this.$emit(MASK_EMIT)   
      }      
    }
  }
}
</script>

<style lang="scss" scoped>
  .fake-popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .fake-popup-content {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
</style>