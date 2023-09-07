
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import Manager from "./components/ui/Grid"
import Manager from "./components/ui/Grid"
import CompanyManager from "./components/ui/CompanyGrid"
import RankManager from "./components/ui/RankGrid"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/',
                name: 'Manager',
                component: Manager
            },
            {
                path: '/',
                name: 'Manager',
                component: Manager
            },
            {
                path: '/companies',
                name: 'CompanyManager',
                component: CompanyManager
            },
            {
                path: '/ranks',
                name: 'RankManager',
                component: RankManager
            },



    ]
})
