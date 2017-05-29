import Vue from 'vue'
import Router from 'vue-router'
import total from '@/page/total'
import contant from '@/page/contant'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/total',
            name: 'total',
            component: total
        },
        {
            path: '/',
            redirect:'total'
        },{
            path: '/contant',
            component:contant
        }
    ]
})