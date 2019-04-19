<template>
    <div class="register-page">
        <h3 class="title">GYM<span>BRO</span></h3>
        <h4 class="title">Register</h4>
        <main class="form-group">
            <input type="text" v-model="forename" placeholder="Forename">
            <input type="text" v-model="surname" placeholder="Surname">
            <input type="text" v-model="email" placeholder="Email" :class="(hasErrors) ? 'err' : ''"/>
            <input type="password" v-model="password" placeholder="Password" />

            <button class="sign-up-btn" @click="register">Sign up</button>

            <div class="error-msg" v-if="hasErrors">
                {{ error }}
            </div>
        </main>
        <footer>
            <p>
                Already have an account? <router-link class="link-a" to="/login">Log in here!</router-link>.
            </p>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'register',
    data() {
        return {
            forename: '',
            surname: '',
            email:'',
            password: '',
            hasErrors: false,
            error: ''
        }
    },
    methods: {
        register() {
            let api_url = this.$store.state.api_url;

            if(this.email == '' ||
                this.password == '' ||
                this.forename == '' ||
                this.surname == '') {
                    return alert('Please fill all fields')
                }

            this.$http.post(api_url + 'user/register', {
                forename: this.forename,
                surname: this.surname,
                email: this.email,
                password: this.password
            }).then(response => {

                if(response.data.auth) {
                    localStorage.setItem('jwt', response.data.token)
                    this.$router.push('/')
                } else {
                    this.error = response.data.msg;
                    this.hasErrors = true;
                }
            }).catch(err => {
                this.error = err
                this.hasErrors = true;
            })
        }
    }
}
</script>
