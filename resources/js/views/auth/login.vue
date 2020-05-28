<template>
    <section class="section">
        <main class="container">
            <div class="columns is-centered">
                <div class="column is-5">
                    <div class="card">
                        <div class="card-content">
                            <h1 class="title">Login</h1>
                            <form @submit.prevent="submit" @keydown="form.onKeydown($event)">

                                <b-field label="Alamat Email"
                                    :type="{ 'is-danger': form.errors.has('email') }"
                                    :message="{ [ form.errors.get('email') ] : form.errors.has('email') }">
                                    <b-input v-model="form.email" type="email" placeholder="nama@contoh.com"/>
                                </b-field>

                                <b-field label="Kata Sandi"
                                    :type="{ 'is-danger': form.errors.has('password') }"
                                    :message="{ [ form.errors.get('password') ] : form.errors.has('password') }">
                                    <b-input v-model="form.password" type="password" password-reveal placeholder="******"/>
                                </b-field>

                                <b-field>
                                    <b-checkbox v-model="form.remember">Ingat saya</b-checkbox>
                                </b-field>

                                <b-field>
                                    <b-button native-type="submit" :loading="form.busy" type="is-primary" outlined class="is-fullwidth">Login</b-button>
                                </b-field>

                            </form>
                        </div>
                    </div>
                    <h5 class="has-text-centered mt-2">Belum menjadi anggota?<router-link :to="{name: 'register'}" class="is-muted"> Register Sekarang</router-link></h5>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import Form from 'vform'

export default {
    data: () => ({
        form: new Form({
            email: '',
            password: '',
            remember: false
        })
    }),

    methods: {

        submit() {
            axios.get('sanctum/csrf-cookie').finally(() => {
                this.form.post('api/login').then(res => {
                    
                })
            })
        }

    }
}
</script>