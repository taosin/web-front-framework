import Vue from 'vue';
import Router from 'vue-router';
import {
    sync
} from 'vuex-router-sync';
import store from './vuex/store';
import App from './App.vue';
import filters from './filter';
import index from './views/index.vue';
import userinfo from './views/userinfo.vue';
import phone from './views/phone.vue';
import pc from './views/pc.vue';
window.Vue = Vue;
Vue.use(Router);
const router = new Router({
    hashbang: false,
    history: false,
    saveScrollPosition: true
});
window.router = router;

Object.keys(filters).forEach((k) => {
    Vue.filter(k, filters[k]);
});

Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
Vue.use(require('./ext/vue_ext.js'));

router.map({
    '/': {
        name: 'index',
        component: index
    },
    '/index':{
        name:'index',
        component:index,
        subRoutes:{
            '/':{
                component:index
            },
            '/userinfo':{
                component:userinfo
            },
            '/phone':{
                component:phone
            },
            '/pc':{
                component:pc
            }
        }
    }
});

// router.beforeEach(function(transition) {
//   transition.next()
// })
sync(store, router);
router.start(App, '#app');
