import { createRouter, createWebHashHistory } from 'vue-router'

const MapIndex = () => import ('../views/map/Index.vue')
const AboutDemo = () => import ('../views/AboutDemo.vue')
const HomeDemo = () => import ('../views/HomeDemo.vue')

const routes = [
    {
        path: '/',
        name: 'map',
        component: MapIndex,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutDemo,
    },
    {
        path: '/home',
        name: 'home',
        component: HomeDemo,
    },
    {
        path: '/flood',
        name: 'flood',
        component: () => import('../views/scene/Flood.vue')
    },
    {
        path: '/graph',
        name: 'graph',
        component: () => import('../views/scene/Graph.vue')
    },
    {
        path: '/chat',
        name: 'chat',
        component: () => import('../views/scene/ChatWindow.vue')
    },
    {
        path: '/model',
        name: 'model',
        component: () => import('../views/scene/Model.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/4XX.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
