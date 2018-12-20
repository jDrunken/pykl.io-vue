import Vue from 'vue';
import Router from 'vue-router';
import VueScrollTo from 'vue-scrollto';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/'
        }
        // {
        // path: '/about',
        // name: 'about',
        // // route level code-splitting
        // // this generates a separate chunk (about.[hash].js) for this route
        // // which is lazy-loaded when the route is visited.
        // component: () => import([> webpackChunkName: "about" <] './views/About.vue'),
        // },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            VueScrollTo.scrollTo(to.hash, 700);
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
});

