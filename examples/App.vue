<!--
 * @Author: aven9527
 * @Date: 2021-08-25 15:37:35
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-27 14:53:07
 * @Description: file content
-->
<template>
  <div id="app">
    <FakeButton text="提交" type="danger" size="medium" dimensional style="margin-bottom: 20px" block />
    <FakeButton text="提交" type="info" size="medium"  style="margin-bottom: 20px" circle />
    <FakeButton text="提交" type="success" size="medium" dimensional style="margin-bottom: 20px" disabled />
    <FakeButton text="提交" type="warning" size="medium" dimensional style="margin-bottom: 20px" />
    <FakeButton text="提交" size="medium"   />
  </div>
</template>

<script>
import visibleMixin from '@/mixins/visibleMixin.js'

export default {
  name: 'App',
  mixins: [visibleMixin],
  components: {
  },
  mounted() {
    this.isVisible = true
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
