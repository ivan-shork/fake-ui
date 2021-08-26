<!--
 * @Author: aven9527
 * @Date: 2021-08-25 15:37:35
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-26 17:37:21
 * @Description: file content
-->
<template>
  <div id="app">
    <popup v-show="isVisible"></popup>
  </div>
</template>

<script>
import popup from '../packages/common/popup.vue'
import visibleMixin from '@/mixins/visibleMixin.js'

export default {
  name: 'App',
  mixins: [visibleMixin],
  components: {
    popup
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
