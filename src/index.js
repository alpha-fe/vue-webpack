import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';


Vue.use(VueRouter);
Vue.use(ElementUI);


import routes from './routes/routes';



var router = new VueRouter({
    routes,
    // mode: 'history',
    linkActiveClass: 'active'
});

new Vue({
    router: router
}).$mount('#app');
