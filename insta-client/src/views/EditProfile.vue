<template>
    <section class="view">
        <div class="form-group">

            <h3 class="updated" v-if="success" :class="(success) ? 'show' : 'hide'">Profile updated!</h3>

            <span>PROFILE PICTURE UPLOAD</span> <br>
            <label for="forename">Forename</label>
            <input type="text" v-model="forename" placeholder="forename">

            <label for="surname">Surname</label>
            <input type="text" v-model="surname" placeholder="surname">

            <label for="email">Email</label>
            <input type="text" v-model="email" placeholder="email">

            <!--
                <label for="password">Password</label>
                <input type="password" v-model="password" placeholder="pass">
            -->

            <button @click="update">Update</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password:'',
            forename: '',
            surname:'',
            profile_picture: '',
            success: false,
            msg:''
        }
    },
    methods: {
        update() {
            
            let api_url = this.$store.state.api_url;

            this.$http.post(api_url + 'user/editprofile', {
                auth_token: localStorage.getItem('jwt'),
                forename: this.forename,
                surname: this.surname,
                image: this.profile_picture,
                email: this.email,
                //password: this.password
            }).then(response => {
                console.log(response)
                this.success = true
                this.msg = response.data.msg
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .form-group {
        input {
            width:50%;
        }
    }
    .show {
        display:block
    }
    .hide {
        display:none;
    }
    .updated {
        text-transform: uppercase;
        text-align: center;
        line-height:25px;
        color: #35495e;
        background-color: #42b883;
        border-radius: 6px;
        height:25px;
    }
</style>

