<template>
    <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5">
                    <div class="card">
                        <div class="card-content">
                            <h1 class="title">Verifikasi Email</h1>
                            <template v-if="success">

                                <div class="alert alert-success" role="alert">
                                    {{ success }}
                                </div>

                                <router-link :to="{ name: 'login' }" class="button is-primary">Login</router-link>

                            </template>
                            <template v-else>

                                <div class="alert alert-danger" role="alert">
                                    {{ error || 'Gagal memverifikasi email.' }}
                                </div>

                                <router-link :to="{ name: 'verification.resend' }" class="small float-right">
                                    {{ 'Kami mengirimi Anda email dengan tautan verifikasi.' }}
                                </router-link>
                                
                            </template>
                        </div>
                    </div>
                    <h5 class="has-text-centered mt-2"><router-link :to="{ name: 'login' }" class="is-muted"><span class="fa fa-caret-left"></span> Kembali ke Login</router-link></h5>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const qs = (params) => Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

export default {

    data: () => ({
        error: '',
        success: ''
    }),

    async beforeRouteEnter (to, from, next) {
        try {
            const { data } = await axios.post(`/email/verify/${to.params.id}?${qs(to.query)}`)
            next(vm => { 
                vm.success = data.status
                vm.$buefy.snackbar.open(data.status)
            })
        } catch (e) {
            next(vm => {
                vm.error = e.response.data.status
                vm.$buefy.snackbar.open(vm.error)
            })
        }
    },

}
</script>