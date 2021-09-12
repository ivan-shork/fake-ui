<!--
 * @Author: aven9527
 * @Date: 2021-08-25 15:37:35
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-12 21:52:16
 * @Description: file content
-->
<template>
  <div id="app">
    <fake-dialog :visible.sync="dialogVisible"></fake-dialog>
    <fake-layer :visible.sync="layerVisible"></fake-layer>
    <fake-button text="打开dialog" dimensional @click="showDialog"/>
    <fake-button text="打开layer" dimensional @click="showLayer"/>
  </div>
</template>

<script>
import FakeDialog from '../packages/Dialog'
import FakeLayer from '../packages/common/layer'
export default {
  name: 'App',
  components: {
    FakeDialog,
    FakeLayer
  },
  mounted() {

  },
  data() {
    return {
      dialogVisible: false,
      layerVisible: false
    }
  },
  methods: {
    showLayer() {
      this.layerVisible = true
      console.log(this.layerVisible);
      
    },
    test3() {
      this.$message.warn({
        message: '哈垃圾哈哈',
        showClose: true
      })   
    },
    onClose() {
      console.log('关闭了');
      
    },
    showDialog() {
      this.dialogVisible = true
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
