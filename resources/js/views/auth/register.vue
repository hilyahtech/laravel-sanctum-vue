<template>
    <div>
        <div class="card">
            <div class="card-content">
                <h1 class="title">Register</h1>
                <form @submit.prevent="submit" @keydown="form.onKeydown($event)">

                    <b-field label="Nama Lengkap"
                        :type="{ 'is-danger': form.errors.has('name') }"
						:message="{ [ form.errors.get('name') ] : form.errors.has('name') }">
                        <b-input v-model="form.name" placeholder="tulis nama"/>
                    </b-field>

                    <b-field label="Alamat Email"
                        :type="{ 'is-danger': form.errors.has('email') }"
						:message="{ [ form.errors.get('email') ] : form.errors.has('email') }">
                        <b-input v-model="form.email" type="email" placeholder="nama@contoh.com"/>
                    </b-field>

					<b-field label="Kata Sandi"
						:type="{ 'is-danger': form.errors.has('password') }"
						:message="{ [ form.errors.get('password') ] : form.errors.has('password') }">
						<b-input v-model="form.password" type="password" placeholder="******" :minlength="8" password-reveal></b-input>
					</b-field>

					<b-field label="Konfirmasi Kata Sandi"
						:type="{ 'is-danger': form.errors.has('password_confirmation') }"
						:message="{ [ form.errors.get('password_confirmation') ] : form.errors.has('password_confirmation') }">
						<b-input v-model="form.password_confirmation" type="password" placeholder="******" :minlength="8" password-reveal></b-input>
					</b-field>

                    <b-field>
                        <b-button native-type="submit" :loading="form.busy" outlined class="is-primary is-fullwidth">Register</b-button>
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
			name: '',
			email: '',
			password: '',
			password_confirmation: ''
		}),
	}),

    methods: {
        submit() {
            
			// Register the user.
			const { data } = await this.form.post('/register')

			// Must verify email fist.
			if (data.status) {

				this.$buefy.snackbar.open(data.status)

				// Redirect home.
				this.$router.push({ path: 'login', query: { email: this.form.email } })

            }
            
        }
    }
}
</script>