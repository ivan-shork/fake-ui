<!--
 * @Author: aven9527
 * @Date: 2021-08-25 18:39:37
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-25 19:03:17
 * @Description: button 组件
-->

<template>
  <button 
    class="fake-button"
    :disabled="disabled"
    :class="[
      'fake-button-' + type,
      'fake-button-' + size,
      {
        'is-round': round,
        ['is-3d-' + type]: shadow && !plain,
        'is-plain': plain
      }
    ]"
    @click="handleClick"

  >
    <slot v-if="$slots.default"></slot>
    <div v-else class="fake-button-content">
      <template v-if="loading">
        <div class="fake-button-loading">
          <span>*</span>
          <span class="fake-button-loading-text">
            {{ loadingText }}
          </span>
        </div>
      </template>
      <span class="fake-button-text" v-else>
        {{ text }}
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
      text: {
        type: String,
      },
      plain: {
        type: Boolean,
        default: false
      },
      // 按钮大小
      size: {
        type: String,
        default: 'medium'
      },
      // 圆角 
      round: {
        type: Boolean,
        default: false
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 3d
      shadow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
$default-color: #fff;
$success-color: #009966;
$danger-color: salmon;
$info-color: gainsbro;
$warning-color: #FF9933;

  .fake-button {
    position: relative;
    display: 'inline-block';
    box-sizing: border-box;
    margin: 0;
    text-align: center;
    transition: opacity .2s;
    vertical-align: bottom;
    border: 2px solid;
    cursor: pointer;
    // overflow: hidden;

    // border
    // &::before {
    //   content: "";
    //   width: 100%;
    //   height: 100%;
    //   border: 2px solid;
    //   border-color: inherit;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    // }

      &:active {
        transform: perspective(300px) translateZ(-30px);
        
      }

      &-default {
        background-color: $default-color;
        color: #333;
        border-color: #ebedf0;
      }

      &-success {
        background-color: $success-color;
        color: white;
        border-color: $success-color;
      }

      &-info {
        background-color: $info-color;
        color: black;
        border-color: $info-color;
      }

      &-danger {
        background-color: $danger-color;
        color: white;
        border-color: $danger-color;
      }
    
      &-warning {
        background-color: $warning-color;
        color: white;
        border-color: $warning-color;
      }

      &-small {
        padding: 2px 10px;
        font-size: 12px;
      }

      &-medium {
        padding: 5px 18px;
        font-size: 14px;
      }

      &-big {
        padding: 10px 26px;
        font-size: 16px;
      }
  }

  .is-round {
    border-radius: 7px;
  }

  .is-plain {
    background-color: $default-color;
    &.fake-button-success {
      color: $success-color
    }
    &.fake-button-warning {
      color: $warning-color;
    }
    &.fake-button-info {
      color: $info-color;
    }
    &.fake-button-danger {
      color: $danger-color;
    }

  }
  // 3d阴影 非朴素按钮才有效
  .is-3d-default {
    box-shadow:4px 4px 0 rgba($color: black	, $alpha: .4);
  }

  .is-3d-success {
    box-shadow:4px 4px 0 rgba($color: #336633	, $alpha: .8);
  }

  .is-3d-danger {
    box-shadow:4px 4px 0 rgba($color: red	, $alpha: .8);
  }

  .is-3d-info {
    box-shadow:4px 4px 0 rgba($color: black	, $alpha: .8);
  }

  .is-3d-warning {
    box-shadow:4px 4px 0 rgba($color: #663300, $alpha: .8);
  }
</style>
    
