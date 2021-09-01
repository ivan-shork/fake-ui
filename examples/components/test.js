/*
 * @Author: aven9527
 * @Date: 2021-08-31 17:26:42
 * @LastEditors: aven9527
 * @LastEditTime: 2021-08-31 19:28:37
 * @Description: file content
 */

export default {
  functional: true,
  props: {
    data: {
      type: Array,
      default:()=> []
    }
  },
  render(h, context) {
    console.log(context);
    return h('ul', context.props.data.map(item=> {
      return h('li', item)
    }) )
  }
}