<template>
    <div>
        <div class="card">
            <div class="card-content">
                <h1 class="title">Register</h1>
                <form>

                    <b-field label="Nama Lengkap">
                        <b-input placeholder="tulis nama"/>
                    </b-field>

                    <b-field label="Alamat Email">
                        <b-input type="email" placeholder="nama@contoh.com"/>
                    </b-field>

                    <b-field label="Kata Sandi">
                        <b-input type="password" placeholder="******"/>
                    </b-field>

                    <b-field label="Konfirmasi Kata Sandi">
                        <b-input type="password" placeholder="******"/>
                    </b-field>

                    <b-field>
                        <b-button native-type="submit" type="is-primary" outlined class="is-fullwidth">Register</b-button>
                    </b-field>

                </form>
            </div>
        </div>
        <h5 class="has-text-centered mt-2"><router-link :to="{ name: 'login' }" class="is-muted"><span class="fa fa-caret-left"></span> Kembali ke Login</router-link></h5>
    </div>
</template>

<script>
export default {
    layout: 'auth'
}
</script>