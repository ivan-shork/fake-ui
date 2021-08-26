<!--
 * @Author: aven9527
 * @Date: 2021-08-26 16:50:02
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-26 17:42:48
 * @Description: file content
-->
<template>
  <div class="fake-popup">
    <div class="fake-popup-content fake-flex fake-middle">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FakePopup',

}
</script>

<style lang="scss" scoped>
  .fake-popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .8);
    .fake-popup-content {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
</style>