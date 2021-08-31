<!--
 * @Author: aven9527
 * @Date: 2021-08-25 15:37:35
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-27 14:53:07
 * @Description: file content
-->
<template>
  <div id="app">
    <fake-button @click="test3"></fake-button>
    <button @click="test">测试</button>
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
    test() {
      this.message = this.$createFakeMessage({
        message: '哈哈哈',
        type: 'success',
        onClose: ()=> {
          console.log('弹窗已关闭');
        },
      })
      this.message.show()
    },
    test2() {
      
    },
    test3() {
      console.log(this.$parent);
      
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
