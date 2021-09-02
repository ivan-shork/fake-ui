<!--
 * @Author: aven9527
 * @Date: 2021-09-01 20:48:04
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-01 23:08:43
 * @Description: layer浮层
-->
<template>
<transition name="el-fade-in-linear">
  <fake-popup v-show="isVisible" @clickMask="closeLayer">
      <template v-slot:content>
          <div class="fake-layer fake-flex column fake-middle"
               :class="[fadeout ? 'fake-layer-moveout' : 'fake-layer-movein']">
              <div class="fake-layer-content">
                  <div class="fake-layer-content-header">
                      <div v-if="headerImg" class="fake-header-img">
                          <img src="" alt="">
                      </div>
                      <div v-else class="fake-header-block">
                          <slot name="header"></slot>
                      </div>
                  </div>
                  <div class="fake-layer-content-body">
                      <slot name="content"></slot>
                  </div>
              </div>
              <div class="fake-layer-close">
                  <i class="el-icon-circle-close" @click="closeLayer"></i>
              </div>
          </div>
      </template>
  </fake-popup>
</transition>
</template>

<script>
import FakePopup from './popup'
import visibleMixin from '@/mixins/visibleMixin'
export default {
    name: 'FakeLayer',
    mixins: [visibleMixin],
    components: {
        FakePopup
    },
    props: {
        headerImg: {
            type: String,
            default: ''
        }
    },
    mounted() {
        
    },
    data() {
        return {
            fadeout: false
        }
    },
    methods: {
        closeLayer() {
            this.fadeout = true
            let d = setTimeout(()=> {
                this.hidden()
                clearTimeout(d)
            }, 200)
        },
        show() {
            // fadeout设为false 进来时可以渐变进来 movein
            this.fadeout = false
            this.isVisible = true
        }
    }
}
</script>

<style lang="scss" scoped>
@include fake-move;
    .fake-layer {
        position: relative;
        min-width: 20em;
        max-width: 60%;
        
        &-moveout {
            animation: moveout .4s forwards;
        }
        &-movein {
            animation: move .4s forwards;
        }
        &-content {
            width: 100%;
            overflow: hidden;
            background-color: #fff;
            border-radius: 7px;
            box-shadow: 0 5px 5px rgba(0, 0, 0, .4);
            &-header {
                width: 100%;
                box-sizing: border-box;
                .fake-header-img {
                    width: 100%;
                    height: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .fake-header-block {
                    padding: 12px;
                    box-sizing: border-box;
                    height: 45px;
                    border-bottom: 1px solid gainsboro;
                }
            }
            &-body {
                padding: 12px;
            }
            
        }
        &-close {
            width: 60px;
            margin: 20px auto 0;
            i {
                font-size: 25px;
                color: #fff;
            };
        }
    }
    
</style>