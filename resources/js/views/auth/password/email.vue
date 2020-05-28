<template>
    <div>
        <div class="card">
            <div class="card-content">
                <h1 class="title">Reset Kata Sandi</h1>
                <form @submit.prevent="submit" @keydown="form.onKeydown($event)">

                    <b-field label="Alamat Email"
                        :type="{ 'is-danger': form.errors.has('email') }"
                        :message="{ [ form.errors.get('email') ] : form.errors.has('email') }">
                        <b-input type="email" placeholder="nama@contoh.com"></b-input>
                    </b-field>

                    <b-field>
                        <b-button native-type="submit" type="is-primary" outlined class="is-fullwidth">Reset Kata Sandi</b-button>
                    </b-field>

                </form>
            </div>
        </div>
        <h5 class="has-text-centered mt-2"><router-link :to="{ name: 'login' }" class="is-muted"><span class="fa fa-caret-left"></span> Kembali ke Login</router-link></h5>
    </div>
</template>

<script>
import Form from 'vform'

export default {
    layout: 'auth',
    middleware: 'guest',

    data: () => ({
        form: new Form({
            email: ''
        })
    }),

    methods: {
        submit() {

        }
    }

}
</script>