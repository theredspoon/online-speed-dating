import Vue from 'vue';
import app from './appVue.js';
import VueRouter from 'vue-router';
import Login from './login.js'
// import signup from './signup/signup.vue';
// import signin from './signin/signin.vue';
// import video from './video/video.vue';



Vue.use(VueRouter)


var routes = [
    {
        path: '/',
        component: app
    },
    // {
    //     path: '/signin',
    //     component: siginin
    // },
    // {
    //     path: '/video',
    //     component: video
    // },
    // {
    //     path: '/signup',
    //     component: signup
    // }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('.app')
