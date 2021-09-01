<!--
 * @Author: aven9527
 * @Date: 2021-08-31 14:59:18
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-31 16:33:38
 * @Description: file content
-->

<template>
  <div class="containr" v-show="visible">
    <p :style="{color: color}" @click="notifyMessage">message: {{message}}</p>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
let NOTIFY_EMIT = 'notify'
export default {
  name: 'Test',
  props: {
    message: {
      type: String,
      require: true
    },
    color: {
      type: String,
      default: '#333'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    notifyMessage() {
      console.log('通知消息:' +  this.message);
      this.$emit(NOTIFY_EMIT, '点击成功了！')
    },
    show() {
      this.visible = true
    },
    hidden() {
      this.visible = false
    },
    log() {
      console.log('barbarbar');
    }
  }
}
</script>

<style>

</style>