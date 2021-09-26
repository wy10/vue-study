<template>
    <div>
        {{$route.query.id}}
        这是home页面
       <input v-model="msg"/>
        <!-- <router-view></router-view> -->
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