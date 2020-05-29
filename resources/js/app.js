require('./bootstrap');

import Vue from 'vue'
import Buefy from 'buefy'
import router from './router'
import store from '~/store'
import App from './components/App'

Vue.use(Buefy, {
    defaultIconPack: 'fas'
})

const $app = new Vue({
    ...App,
    store,
    router
})