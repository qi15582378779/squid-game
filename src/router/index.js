import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'Main',
            component: () => import('../pages/main/index'),
            children: [],
        },
        {
            path: '*',
            redirect: '/',
        },
    ]
})
