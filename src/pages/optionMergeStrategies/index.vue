<template>
    <div>
        {{msg}}
        {{message}}
    </div>
</template>

<script>
import mixinObj from './mixin'
    export default {
        mixins:[ mixinObj],
        data(){
            return {
                msg:"这是组件的msg"
            }
        },
        created(){
            console.log("这是组件的created")
        },
        pageVisible(){
            console.log("这是自定以混合钩子函数")
        }
        
    }
</script>

<style scoped>

</style>