// 创建组件实例
export default (component, Vue)=> {
    return (opts)=> {
        const ComInstructor = Vue.extend(component)
        // 创造挂载的元素
        const comEl = document.createElement('div')
        // 创造实例
        const comInstance = new ComInstructor()
        // 实例属性赋值
        opts!==undefined 
            && Object.keys(opts).length
            && (Object.keys(opts).forEach(key=> {
                comInstance[key] = opts[key]
            }))
        comInstance.$mount(comEl)
        document.body.appendChild(comInstance.$el)  
        return comInstance
    }
}