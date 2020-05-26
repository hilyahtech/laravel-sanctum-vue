<template>
    <div id="app">
        <navbar/>
        <transition name="page" mode="out-in">
            <slot>
                <router-view />
            </slot>
        </transition>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
    el: '#app',

    components: {
        Navbar
    }
}
</script>