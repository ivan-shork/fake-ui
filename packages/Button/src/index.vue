<!--
 * @Author: aven9527
 * @Date: 2021-08-25 18:39:37
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-25 19:03:17
 * @Description: file content
-->

<template>
  <button 
    class="fake-button-container"
    :class="[
      'fake-btn-' + type,
      
    ]"
    @click="handleClick"

  >
    <slot v-if="$slots.default"></slot>
    <div v-else class="btn-content">
      <template v-if="loading">
        <div class="btn-loading-container">
          <span>*</span>
          <span class="btn-loading-text">
            {{ loadingText }}
          </span>
        </div>
      </template>
      <span class="btn-text" v-else>
        {{ btnText }}
      </span>
    </div>
  </button> 
</template>

<script>
  export default {
    name: 'FakeButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: 'loading'
      },
      btnText: {
        type: String,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fake-button-container {
    
    .fake-btn {

      &-default {
        background: ;  
      }
    }
  }
</style>
    
