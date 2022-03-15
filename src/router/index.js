import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'homePage', component: () => import('cs/subPage/homePage.vue'), props: { msg: 'welcome to homePage' } },
    { path: '/subOne', name: 'subOne', component: () => import('cs/subPage/subOne.vue'), props: { msg: 'welcome to subOne' } }
]

const router = new VueRouter({routes})

export default router
