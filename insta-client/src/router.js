import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Post from './views/Post.vue'
import Profile from './views/Profile.vue'
import EditProfile from './views/EditProfile.vue'
import Global from './views/Global.vue'
import FoundProfile from './views/FoundProfile.vue'
import store from './store'
import axios from 'axios'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          requiresAuth: false
        }
    },
    {
      path:'/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/newpost',
      name: 'post',
      component: Post,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: EditProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/global',
      name: 'global',
      component: Global,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/foundprofile/:id',
      name: 'found',
      component: FoundProfile,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.onReady(() => {
  store.commit('isAuthenticated')

  axios.get(store.state.api_url + 'post/getposts')
    .then(response => {
      store.commit('getFeed', response.data)
    })
    .catch(err => {
      if(err) throw err;
    })
})

router.beforeEach((to, from, next) => {
  store.commit('isAuthenticated');
  if (to.matched.some(record => record.meta.requiresAuth)) {

    console.log(to.fullPath)
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    if (localStorage.getItem('jwt') != null) {
      next({
        path: '/',
        params: { nextUrl: '/' }
      })
    } else {
      next()
    }
  }
})

export default router;