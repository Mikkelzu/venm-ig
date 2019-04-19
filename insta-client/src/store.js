import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/', //CHANGE TO HTTPS WHEN SSL
    isAuthenticated: false,
    feed: [],
  },
  mutations: {
    isAuthenticated(state) {
      if(localStorage.getItem('jwt') != null) state.isAuthenticated = true;
      else state.isAuthenticated = false;
    },
    login (state, token) {
      state.isAuthenticated = true;
      localStorage.setItem('jwt', token)
      router.push('/')
    },
    logout (state) {
      state.isAuthenticated = false;
      localStorage.removeItem('jwt')
      router.push('/login')
    },
    getFeed(state, feed) {
      state.feed = feed
    }
  }
})
