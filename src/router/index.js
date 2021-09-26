import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
import Login from '../pages/login/Login.vue'
import Other from '../pages/other/Other.vue'

const routes = [
    { path: '/login', component: Login, alias:'/b'},
    { path: '/home/:id', 
      components: {
        'default':Home,
        'a':Login
    },

    },
    { path: '/*', component: Other},
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router