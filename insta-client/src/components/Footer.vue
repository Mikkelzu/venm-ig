<template>
    <footer class="footer">
    
        <div @click="goto('/')">
            <i class="icon fas fa-home"></i>
        </div>
        <div @click="goto('/global')">
            <i class="icon fas fa-globe"></i>
        </div>
        <div @click="goto('/newpost')">
            <i class="icon fas fa-plus"></i>
        </div>
        <div @click="goto('/')"> <!-- todo add route -->
            <i class="icon fas fa-heart"></i>
        </div>
         <div @click="goto('/profile')">
            <i class="icon fas fa-user"></i>
        </div>
    </footer>
</template>

<script>

export default {
   
    methods: {
        goto(path) {
            this.$router.push(path)
        }
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
