<!--
 * @Author: aven9527
 * @Date: 2021-08-25 15:37:35
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-01 15:53:36
 * @Description: file content
-->
<template>
  <div id="app">
    <fake-button @click="test3">testMessage</fake-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted() {

  },
  methods: {
    test2() {
      
    },
    test3() {
      this.$message.warn({
        message: '哈垃圾哈哈',
        showClose: true
      })   
    },
    onClose() {
      console.log('关闭了');
      
    }
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
