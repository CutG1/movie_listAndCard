import Vue from "vue"
import Router from "vue-router"

import home from '@/components/SitesHeader.vue'
import OpenMovie from '@/components/OpenMovie.vue'
import MovieList from '@/components/MovieList.vue'
Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'movie List',
        component: MovieList
    },
    {
        path : "/home",
        component : home,
        Name : "home"
    },
    {
        path: "/:id",
        component : OpenMovie,
        Name: "openMovie"
    }
]

const router = new Router({
    routes : routes,
    mode : "history"
})

export default router