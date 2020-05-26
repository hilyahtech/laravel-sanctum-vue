import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior,
    routes
})

export default router

function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
}