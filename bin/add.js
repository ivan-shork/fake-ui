/*
 * @Author: aven9527
 * @Date: 2021-08-25 17:00:30
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-25 18:38:21
 * @Description: 自动添加组件到结构目录中
 */

'use strict'
process.on('exit', (code)=> {
  switch (code) {
    case 0: 
      console.log('DONE SUCCESS !');
      break;
    case 1:
      console.log('ADD FAIL !');
      break;
    default:
      break;
  }
})

if(!process.argv[2]) {
  console.error('Please Enter your component name !')
  process.exit(1)
}

const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')

// ui库的前缀
const projectConf = require('../package.json')
const prefix = projectConf['prefix']
const PreFix = uppercamelcase(prefix)

// 驼峰命名 
const componentName = process.argv[2]
const ComponentName = uppercamelcase(componentName)

// 判断当前组件是否重名
const componentsList = require('../components.json')
if(ComponentName in componentsList) {
  console.warn('this component name is already exist, please change the name');
  process.exit(1)
}

// 添加组件到json文件中
const componentPath = `./packages/${ComponentName}/index.js`
componentsList[ComponentName] = componentPath
fileSave(path.join(__dirname, '../components.json'))
  .write(JSON.stringify(componentsList, null, '  '))
  .end('\n')


// 将component注入到目录中 1.创建vue模板 2.创建index.js
const componentFiles = [
  {
    filename: 'src/index.vue',
    content: `
<template>
  <div class="${prefix}-${componentName}-container">
    ${PreFix}-${ComponentName}
  </div>
</template>

<script>
  export default {
    name: '${PreFix}${ComponentName}'
  }
</script>

<style lang="scss" scoped>
  .${prefix}-${componentName}-container {
    
  }
</style>
    `
  },
  {
    filename: 'index.js',
    content: `
import ${PreFix}${ComponentName} from './src/index.vue'

${PreFix}${ComponentName}.install = function(Vue) {
  Vue.component(${PreFix}${ComponentName}.name, ${PreFix}${ComponentName})
}

export default ${PreFix}${ComponentName}
`
  }
]

componentFiles.forEach(file=> {
  fileSave(path.join(__dirname, `../packages/${ComponentName}/${file.filename}`))
    .write(file.content, 'utf-8')
    .end('\n')
})







