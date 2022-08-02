import {createRouter, createWebHistory} from "vue-router";
// import HomePage from '../components/HomePage.vue'

const routes = [
    {
        Path: '/',
        name: 'index',
        component: () => import('../views/HomePage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
