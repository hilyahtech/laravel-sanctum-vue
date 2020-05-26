<template>
    <b-navbar
        wrapper-class="container"
        shadow>

        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/'}">
                Laravel Sanctum Vue
            </b-navbar-item>
        </template>

        <template slot="start">
            <b-navbar-item class="is-tab" href="https://github.com/hilyahtech/laravel-sanctum-vue" target="_blank">
                Github
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item class="is-tab" tag="router-link" :to="{ name: 'login'}">
                Login
            </b-navbar-item>
            <b-navbar-item class="is-tab" tag="router-link" :to="{ name: 'register'}">
                Register
            </b-navbar-item>
        </template>

    </b-navbar>
</template>

<script>
export default {

}
</script>