import Vue from 'vue'

export function initOptionMergeStrategies(){
    const optionMergeStrategies = Vue.config.optionMergeStrategies
    // 定义pageVisible 钩子函数的合并策略 和beforeCreate 相同
    optionMergeStrategies.pageVisible = optionMergeStrategies.beforeCreate
}

// 将事件变化绑定到根节点上
export function bind(vm){
    window.addEventListener('click',()=>{
        excutePageVisible(vm)
    })
}

// 递归执行页面的钩子函数
function excutePageVisible(vm){
    // 定义pageVisible 钩子函数在$option中
    const lifeCycles = vm.$options.pageVisible
    // 这里使用数组的原因是 他等同于 beforeCreate 钩子函数，
    // 钩子函数在$option中以数组的形式存在，mixin执行之后，钩子函数也会合并到这个数组中
    console.log(vm.$options.created)
    if(lifeCycles && lifeCycles.length){
        lifeCycles.forEach(fn => fn.call(vm))
    }
    if(vm.$children && vm.$children.length){
        vm.$children.forEach(item => {
            excutePageVisible(item)
        } )
    }
}