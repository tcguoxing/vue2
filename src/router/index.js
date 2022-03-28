import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'loginPage', component: () => import('@/views/main/loginPage.vue'), props: { msg: 'welcome to homePage' } },
    { path: '/loginWelcome', name: 'loginWelcome', component: () => import('@/views/jumpPage/loginWelcomePage.vue'), },
    { path: '/register', name: 'register', component: () => import('@/views/jumpPage/registerPage.vue'), }
]

const router = new VueRouter({routes})

export default router
