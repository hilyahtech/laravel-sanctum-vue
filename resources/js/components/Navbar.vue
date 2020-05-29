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

            <b-navbar-dropdown
                v-if="auth_user"
                :label="auth_user.name"
                right
                hoverable>

                <a class="navbar-item" @click.prevent="logout">
                    <div class="is-inline-flex">
                        Keluar
                    </div>
                </a>

            </b-navbar-dropdown>

            <template v-else>

                <b-navbar-item class="is-tab" tag="router-link" :to="{ name: 'login'}">
                    Login
                </b-navbar-item>

                <b-navbar-item class="is-tab" tag="router-link" :to="{ name: 'register'}">
                    Register
                </b-navbar-item>

            </template>
        </template>

    </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
    computed: mapGetters({
        auth_user: 'auth/user'
    }),

    methods: {
        async logout () {
            // Log out the user.
            await this.$store.dispatch('auth/logout')

            // Redirect to login.
            this.$router.push({ name: 'login' })
        }

    }

}
</script>