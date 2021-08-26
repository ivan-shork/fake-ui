<!--
 * @Author: aven9527
 * @Date: 2021-08-26 16:22:33
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-26 16:29:48
 * @Description: toast弹窗提示
-->

<template>
  <div class="fake-toast">
    <div class="fake-toast-wrap">
      <div v-if="icon" class="fake-toast-icon"></div>
      <div class="fake-toast-text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
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
      } 
    }
  }
</script>

<style lang="scss" scoped>
  .fake-toast {
    padding: 10px 16px;

  }
</style>
    
