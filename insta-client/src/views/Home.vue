<template>
  <div class="view feed">

    <article class="post" v-for="post in feed" :key="post.id">

      <header class="post-user">
          
          <img class="profile-picture" src="https://place-hold.it/30" />
          <span>{{ post.display_name }}</span>
      </header>

      <section class="post-picture">
        <img :src="post.image" :alt="post.description" class="post-image"/>
      </section>

      <footer class="post-description">
        <p class="description">
          <strong>{{post.display_name}}</strong>: <span>{{post.description}}</span>
        </p>

        <p class="timestamp">{{ timestampToDate(post.timestamp) }}</p>
      </footer>

    </article>
  </div>
</template>

<script>
export default {
  computed: {
    feed() {
      return this.$store.state.feed;
    }
  },
  methods: {
    
    timestampToDate(timestamp) {
      timestamp = new Number(timestamp)
      let d = new Date(timestamp)
      let year = d.getFullYear();
      let month = d.getMonth() + 1;

      if(month < 10) {
        month = "0" + month
      }

      let day =  d.getDate();
      
      if(day < 10) {
        day = "0" + day
      }

      return day + '/' + month + '/' +year
    }
  }
}
</script>