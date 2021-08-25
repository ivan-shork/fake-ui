/*
 * @Author: aven9527
 * @Date: 2021-08-25 15:40:04
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-25 16:01:58
 * @Description: 配置文件
 */

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，默认 webpack 是只对 src 文件编译的， 这里需要改成支持对examples编译
    chainWebpack: config => {
      config.module
        .rule('js')
        .include
          .add('/packages')
          .end()
        .use('babel')
          .loader('babel-loader')
    }
  
}