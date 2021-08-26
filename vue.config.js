/*
 * @Author: aven9527
 * @Date: 2021-08-25 15:40:04
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-26 17:17:06
 * @Description: 配置文件
 */
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，packages 是我们新增的一个目录，默认是不被 webpack 处理的，所以需要添加配置对该目录的支持。
    chainWebpack: config => {
      config.module
        .rule('js')
        .include
          .add('/packages/')
          .end()
        .use('babel')
          .loader('babel-loader')
          .tap(options=> {

            return options
          })
      config.resolve.alias
        .set("@", resolve('examples'))
    }
  
}