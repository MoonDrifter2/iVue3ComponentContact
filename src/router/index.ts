import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

import Detail from '@/pages/Detail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{ // 路由规则
        name: 'zhuye',
        path: '/home',
        component: Home
    }, {
        name: 'dongtai',
        path: '/news',
        component: News,
        children: [{
            path: 'detail',
            component: Detail
        }]
    }, {
        name: 'guangyu',
        path: '/about',
        component: About
    }]
})

export default router