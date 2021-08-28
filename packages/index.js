/*
 * @Author: aven9527
 * @Date: 2021-08-25 16:14:11
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-25 16:19:57
 * @Description: 导出所有组件
 */

import FakeButton from "./Button";
import FakeToast from './Toast';

const components = [FakeButton, FakeToast]

const install = function(Vue) {
  // 判断是否安装
  if(install.instatlled) return
  components.forEach(component => {
    Vue.component(component.name, component)
  });
}

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  FakeButton,
  FakeToast
};
