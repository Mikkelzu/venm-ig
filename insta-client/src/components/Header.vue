<template>
    <header class="header">
        <h3 class="title">GYM<span>BRO</span></h3>
        <div @click="logout">
            <i class="logout-btn icon fas fa-sign-out-alt"></i>
        </div>
    </header>
</template>
<script>
export default {
    methods: {
        logout() {
        this.$store.commit('logout')
        },   
    }    
}
</script>

<style lang="scss" scoped>
    .icon {
        font-size:26px;
        color: #35495e;

        &:hover {
            transition: 0.5s; 
            color: #42b883;
        }
    }
</style>