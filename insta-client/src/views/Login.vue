<template>
    <div class="login-page">

        <h3 class="title">GYM<span>BRO</span></h3>
        <h4 class="title">Log in</h4>
        <main class="form-group">
            <input type="text" v-model="email" placeholder="Email" :class="(emailError) ? 'err' : ''" />
            <input type="password" v-model="password" placeholder="Password" :class="(passwordError) ? 'err' : ''" />

            <button class="login-btn" @click="login">Log in</button>

            <div class="error-msg" v-if="hasErrors">
                {{ error }}
            </div>
        </main>
        <footer>
            <p>
                Don't have an account? <router-link class="link-a" to="/register">Sign up here!</router-link>.
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email:'',
            password: '',
            hasErrors: false,
            error: '',
            emailError: false,
            passwordError: false
        }
    },
    methods: {
        login() {
            let api_url = this.$store.state.api_url;

            if(this.email == '' || this.password == '') return alert('Please fill all fields')

            this.$http.post(api_url + 'user/login', {
                email: this.email,
                password: this.password
            }).then(response => {

                if(response.data.auth) {

                    this.$store.commit('login', response.data.token)

                  
                } else {
                    if(response.data.emailError) {
                        this.emailError = true
                    } else {
                        this.emailError = false
                    }

                    if(response.data.passwordError){
                        this.passwordError = true
                    } else {
                        this.passwordError = false    
                    }

                    this.error = response.data.msg
                    this.hasErrors= true
                }          
            }).catch(err => {
                console.log("Error ", err)
            })
        }
    }
}
</script>

