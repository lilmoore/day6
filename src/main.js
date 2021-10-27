import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

import store from './store.js'
import App from './components/App.vue'
import Students from './components/Students.vue' 
import Studentsinfo from './components/Studentsinfo.vue'


Vue.use(Vuex)

const routes = [
    { path: '/', component: Students},
    { path: '/student-info/:id', component: Studentsinfo, props:true}
]

const router = new VueRouter({

    routes
})

    Vue.use(VueAxios, axios)
    Vue.use(VueRouter)
    


new Vue({
    render: h => h(App),
    el: '#app',
    store,
    router
    
 })
 


