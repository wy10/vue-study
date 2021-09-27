<template>
    <div style="height:10px;width:30px">
        {{$route.query.id}}
        这是home页面
       <input v-model="msg"/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:""
            }
        },
        created(){
            this.fn()
        },
        methods:{
            fn(){
                console.log(this.$router,this.$route)
            }
        }
        
    }
</script>

<style scoped>

</style>