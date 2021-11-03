import Vue from 'vue'
import App from './App.vue'
import { initOptionMergeStrategies,bind } from './pages/optionMergeStrategies/index'

// 自定义混合策略钩子
initOptionMergeStrategies()
const vm = new Vue({
    el:'#app',
    render: (h) => h(App)
})

// 触发某事件的时候触发钩子
bind(vm)