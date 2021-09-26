<template>
    <div>
        <div>
            <img src="./img/1.jpg" style="width:50px;height:50px;border-radius:50%" />
            <p>{{ msg }}</p>
            <router-link to="/home/1">Home</router-link>
            <router-link to="">other</router-link>
            <router-link to="/login">Login</router-link>
        </div>
        <div>
            <router-view></router-view>
            <router-view name="a"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name:'App',
        data() {
            return {
                msg: 'hello world1111'
            }
        },
    } 
</script>

