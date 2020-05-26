require('./bootstrap');

import Vue from 'vue'
import Buefy from 'buefy'
import router from './router'
import App from './components/App'

Vue.use(Buefy)

const $app = new Vue({
    ...App,
    router
})