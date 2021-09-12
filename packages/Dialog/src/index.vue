<!--
 * @Author: aven9527
 * @Date: 2021-09-12 18:12:09
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-12 22:45:03
 * @Description: file content
-->

<template>
  <fake-layer v-show="isVisible">
    <template v-slot:header>
      <div class="fake-dialog-title">
        <h5 :style="{color: titleBg}">{{title}}</h5>
        <span v-if="titleTip" :style="{color: titleTipBg}" class="title-tip">{{titleTip}}</span>
      </div>
    </template>
  </fake-layer>
</template>

<script>
import FakeLayer from '../../common/layer.vue'
import visibleMixin from '@/mixins/visibleMixin'

  export default {
    name: 'FakeDialog',
    mixins: [visibleMixin],
    components: {
      FakeLayer
    },
    props: {
      title: {
        type: String,
        default: '标题'
      },
      titleTip: {
        type: String,
        default: '',
        required: false
      },
      titleBg: {
        type: String,
        default: '#333',
        required: false
      },
      titleTipBg: {
        type: String,
        default: 'red',
        required: false
      }
    },
    methods: {
      closeLayer() {
        this.hidden()
      }
    },
  }
</script>

<style lang="scss" scoped>
  .fake-dialog-header {
    .title-tip {
      font-size: 13px;
      margin-top: 8px
    }
  }
</style>
    
