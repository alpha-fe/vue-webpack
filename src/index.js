import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';





Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);





import routes from './routes/routes';
import '../public/styles/reset.css'
import '../public/styles/element.css';


var router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
});

new Vue({
    router: router
}).$mount('#app');
