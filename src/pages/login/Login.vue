<template>
    <div>
        这是登录页面
    </div>
</template>

<script>
    export default {
        created(){
            this.fn()
        },
        methods:{
            fn(){
                console.log(this.$route)
            }
        }
    }
</script>

<style scoped>

</style>