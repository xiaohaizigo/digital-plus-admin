import {createRouter, createWebHashHistory} from 'vue-router'
import {staticRouter} from './modules/staticRouter'

const router=createRouter({
    history:createWebHashHistory(),
    routes:staticRouter,
    strict:false
})
export default router
