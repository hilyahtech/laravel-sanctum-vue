<template>
    <section class="section">
        <main class="container">
            <div class="columns is-centered">
                <div class="column is-5">
                    <div class="card">
                        <div class="card-content">
                            <h1 class="title">Login</h1>
                            <form>

                                <b-field label="Alamat Email">
                                    <b-input type="email" placeholder="nama@contoh.com"/>
                                </b-field>

                                <b-field label="Kata Sandi">
                                    <b-input type="password" placeholder="******"/>
                                </b-field>

                                <b-field>
                                    <b-checkbox>Ingat saya</b-checkbox>
                                </b-field>

                                <b-field>
                                    <b-button native-type="submit" type="is-primary" outlined class="is-fullwidth">Login</b-button>
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
export default {

}
</script>