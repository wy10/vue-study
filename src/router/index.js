import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
// import Login from '../pages/login/Login.vue'
import Other from '../pages/other/Other.vue'

const routes = [
    // 这里是路由懒加载
    { path: '/login', component: () => import('../pages/login/Login.vue'), alias:'/b'},
    { path: '/home', component: Home,},
    { path: '/*', component: Other},
]

const router = new VueRouter({
    // mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition){
        console.log("x1")
        return { x: 100, y: 100 }
    }
})

router.beforeEach((to,from,next) => {
    console.log("xx11x")
    next()
})

// router.scrollBehavior((to, from, savedPosition) => {
//     // ...
//     return { x: 100, y: 100 }
// })

export default router