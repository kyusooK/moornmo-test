
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import BasicCompanyManager from "./components/listers/BasicCompanyCards"
import BasicCompanyDetail from "./components/listers/BasicCompanyDetail"
import BasicRankManager from "./components/listers/BasicRankCards"
import BasicRankDetail from "./components/listers/BasicRankDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '/basics/companies',
                name: 'BasicCompanyManager',
                component: BasicCompanyManager
            },
            {
                path: '/basics/companies/:id',
                name: 'BasicCompanyDetail',
                component: BasicCompanyDetail
            },
            {
                path: '/basics/ranks',
                name: 'BasicRankManager',
                component: BasicRankManager
            },
            {
                path: '/basics/ranks/:id',
                name: 'BasicRankDetail',
                component: BasicRankDetail
            },



    ]
})
