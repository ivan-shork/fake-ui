/*
 * @Author: aven9527
 * @Date: 2021-08-25 15:40:04
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-01 22:43:34
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
      // 全局mixin配置
      const oneOfsMap = config.module.rule('scss').oneOfs.store;
      oneOfsMap.forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            // 全局变量资源路径
            resources: './examples/styles/mixin.scss'
            // 也可以选择全局变量路径数组, 如果你有多个文件需要成为全局,就可以采用这种方法
            // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
          })
          .end()
      })
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