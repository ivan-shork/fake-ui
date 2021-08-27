<!--
 * @Author: aven9527
 * @Date: 2021-08-25 18:39:37
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-27 14:52:53
 * @Description: button 组件
-->

<template>
<div class="fix">
  <button 
    class="fake-button"
    :disabled="disabled"
    :class="[
      'fake-button-' + type,
      'fake-button-' + size,
      {
        'is-round': round,
        ['is-3d-' + type]: dimensional && !plain,
        'is-plain': plain,
        'is-disable': disabled,
        'is-block': block,
        'is-circle': circle
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
      <div v-else>
        <span class="fake-button-text" >
          {{ text }}
        </span>
      </div>
    </div>
  </button> 
</div>
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
        default: true
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 3d
      dimensional: {
        type: Boolean,
        default: false
      },
      // 块级按钮
      block: {
        type: Boolean,
        default: false
      },
      // 圆形按钮
      circle: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
$info-color: #fff;
$success-color:#7CCD7C;
$danger-color: salmon;
$default-color: gainsbro;
$warning-color:#FFA500;

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
    overflow: hidden;
    transition: transform .2s, box-shadow .2s;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: black;
      transform: translate(-50%, -50%);
      border: inherit;
      border-color: #000;
      border-radius: inherit;
      top: 50%;
      left: 50%;
      opacity: 0;
    }

    &.is-disable::after {
      opacity: .3;
    }
    
    // 点击添加蒙层
    &:active::after {
      opacity: .2;
    }

      &-info {
        background-color: $info-color;
        color: #333;
        border-color: #8B8B83;
      }

      &-success {
        background-color: $success-color;
        color: white;
        border-color: #009966;
      }

      &-default {
        background-color: $default-color;
        color: black;
        border-color: $default-color;
      }

      &-danger {
        background-color: $danger-color;
        color: white;
        border-color: #EE0000;
      }
    
      &-warning {
        background-color: $warning-color;
        color: white;
        border-color: #663300;
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

  // 3d按钮点击特殊效果
  [class*='3d']:active {
        transform:perspective(300px) translateZ(0) scale(.9);
        box-shadow: none;
  }

  .is-disable {
    cursor: not-allowed;
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
  .is-3d-info {
    box-shadow:4px 4px 0 rgba($color: #8B8B83	, $alpha: .8), 0 8px 5px rgba(0, 0, 0, .3);
  }

  .is-3d-success {
    box-shadow:4px 4px 0 rgba($color: #009966	, $alpha: .8), 0 8px 5px rgba(0, 0, 0, .3);
  }

  .is-3d-danger {
    box-shadow:4px 4px 0 rgba($color: #EE0000	, $alpha: .8), 0 8px 5px rgba(0, 0, 0, .3);
  }

  .is-3d-default {
    box-shadow:3px 4px 0 rgba($color: black	, $alpha: .8), 0 8px 5px rgba(0, 0, 0, .3);
  }

  .is-3d-warning {
    box-shadow:4px 4px 0 rgba($color: #663300, $alpha: .8), 0 8px 5px rgba(0, 0, 0, .3);
  }

  .is-block {
    display: block;
    width: 100%;
  }

  .is-circle {
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

</style>
    
