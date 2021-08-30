import assign from '../assign'
// 创建组件实例
export default (component, Vue)=> {
    return (opts)=> {
        let data = extendData(opts)
        let componentInstance = createInstance(component, Vue, data)
        const parent = componentInstance.$parent
        const originRemove = componentInstance.remove
        const originShow = componentInstance.show
        const originHide = componentInstance.hide
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
        componentInstance.hide = function () {
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
            const eventName = key.match(eventExp)[1]
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

const createInstance = (Component, Vue, data)=> {
    const instance = new Vue({
        render(h) {
            return h(Component, data, [])
        },
        methods: {
            init() {
                document.body.appendChild(this.$el)
            },
            destroy() {
                this.$destroy()
                document.body.removeChild(this.$el)
            }
        }
    })

    instance.$mount()
    instance.init()
    const component = instance.$children[0]
    return component
}

