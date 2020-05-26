import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = createRouter()

export default router

function createRouter() {
    const router = new Router({
        scrollBehavior,
        mode: 'history',
        linkActiveClass: 'is-active',
        linkExactActiveClass: 'is-active',
        routes
    })

    return router
}

function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }

    if (to.hash) {
        return { selector: to.hash }
    }

    const [component] = router.getMatchedComponents({ ...to }).slice(-1)

    if (component && component.scrollToTop === false) {
        return {}
    }

    return { x: 0, y: 0 }
}