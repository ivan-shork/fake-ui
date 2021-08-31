import assign from '../assign'
import {isFunction, isArray} from '../util'
// 创建组件实例
export default (component, Vue)=> {
    return (optsFn, renderFn)=> {
        // let data = extendData(opts)
        let componentInstance = createInstance(component, Vue, optsFn, renderFn)
        const parent = componentInstance.$parent
        const originRemove = componentInstance.remove
        const originShow = componentInstance.show
        const originHide = componentInstance.hidden
        // 销毁组件
        componentInstance.remove = function () {
        //业务逻辑中，如果手动调用了组件的remove方法，则在该组件上设置标志位
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

const extendData = (opts)=> {
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
    
        // data合并
        data.on = assign(on, data['on'])
        data.props = assign(props, data['props'])
    
        return data
    
    
}


const createInstance = (Component, Vue, optsFn, renderFn)=> {
    const instance = new Vue({
        render(h) {
            let children = renderFn && renderFn(h)
            // optsfn 可以是个对象也可以是个函数， 如果是函数的话可以利用 createElement函数， 如果是对象则直接返回去解析 
            // scopedslots属性实现作用域插槽
            let data = isFunction(optsFn) ? optsFn(h) : optsFn
            let renderData = extendData(data)

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
    // 组件实例
    const component = instance.$children[0]
    return component
}

