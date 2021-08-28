<!--
 * @Author: aven9527
 * @Date: 2021-08-25 15:37:35
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-27 14:53:07
 * @Description: file content
-->
<template>
  <div id="app">
    <button @click="test">点击弹窗</button>
    <FakeToast text="加载中..." :time="2000" ref="toast" mask :opcity="1" />
    <button @click="test2">测试</button>
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
      this.$refs['toast'].show()
    },
    test2() {
      console.log(1111);
      
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
