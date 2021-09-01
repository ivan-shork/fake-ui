/*
 * @Author: aven9527
 * @Date: 2021-08-30 15:18:30
 * @LastEditors: aven9527
 * @LastEditTime: 2021-09-01 11:22:28
 * @Description: file content
 */
import assign from '../assign'
import {isFunction, isArray} from '../util'
// 创建组件实例
// firstOptions可以预先传props 挂载在vue实例data上的优先级最高
export default (component, Vue, firstOptions = {})=> {
    return (optsFn, renderFn)=> {
        // let data = extendData(opts)
        let componentInstance = createInstance(component, Vue, optsFn, renderFn, firstOptions)
        const parent = componentInstance.$parent
        const originRemove = componentInstance.remove
        const originShow = componentInstance.show
        const originHide = componentInstance.hidden
        // 销毁组件
        componentInstance.remove = function () {
        componentInstance.$removed = true
            originRemove && originRemove.call(this)
            parent.destroy()
        }
        componentInstance.show = function () {
            originShow && originShow.call(this, ...arguments)
            return this
        }
        componentInstance.hidden = function () {
            originHide && originHide.call(this, ...arguments)
            return this
        }
        return componentInstance
    }
}

const extendData = (opts, firstOptions)=> {
    const dataExp = ['class', 'style', 'on', 'props','attrs', 'domProps', 'nativeOn', 'directives', 'scopedSlots', 'slot', 'key', 'ref', 'refInFor']
    const eventExp = /^on(.+)/

    let data = {}
    let on = {}
    let props = {}

        Object.keys(opts).forEach(key=> {
            if(dataExp.includes(key)) {
                data[key] = opts[key]
            } else if(eventExp.test(key)) {
                // 匹配on后面的事件
                const eventName = key.match(eventExp)[1].toLowerCase()
                on[eventName] = opts[key]
            } else {
                props[key] = opts[key]
            }
        })

        // firstOptions可以预先传props 挂载在vue实例data上的优先级最高
        Object.keys(firstOptions).forEach(key=> {
            props[key] = firstOptions[key]
        })
    
        // data合并
        data.on = assign(on, data['on'])
        data.props = assign(props, data['props'])
    
        return data
    
    
}


const createInstance = (Component, Vue, optsFn, renderFn, firstOptions)=> {
    const instance = new Vue({
        render(h) {
            let children = renderFn && renderFn(h)
            // optsfn 可以是个对象也可以是个函数， 如果是函数的话可以利用 createElement函数， 如果是对象则直接返回去解析 
            // scopedslots属性实现作用域插槽
            let data = isFunction(optsFn) ? optsFn(h) : optsFn
            let renderData = extendData(data, firstOptions)

            if(!isArray(children)) {
                children = [children]
            }
            return h(Component, renderData, children || [])
        },
        methods: {
            init() {
                document.body.appendChild(this.$el)
            },
            // 销毁组件
            destroy() {
                this.$destroy()
                document.body.removeChild(this.$el)
            }
        }
    })

    // vue实例挂载 挂载在app的外层 不是在app里面
    instance.$mount()
    instance.init()
    // 组件实例 VueComponent
    const component = instance.$children[0]
    return component
}

