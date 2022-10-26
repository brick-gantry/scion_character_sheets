import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {path: '/', component: () => import('@/components/SheetList')},
    {path: '/:character', component: () => import('@/components/SheetView'), props: true}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})