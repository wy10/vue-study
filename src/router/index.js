import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
import Login from '../pages/login/Login.vue'

const routes = [
    { path: '/login', component: Login},
    { path: '/home', component: Home}
]

const router = new VueRouter({
    routes
})

export default router