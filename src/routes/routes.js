import AppContainer from '../containers/appcontainer.vue';
// import ChartContainer from '../containers/chartcontainer.vue';

// const ChartContainer = resolve => {
//   require.ensure([],()=>{
//     resolve(require('../containers/chartcontainer.vue'));
//   });
// };

const routes = [{
    path: '/',
    component: AppContainer,
    children: [
        {
            path: '/chart',
            component: resolve => require(['../containers/chartcontainer.vue'], resolve)
        }, {
            path: '/ui',
            component: resolve => require(['../containers/uicontainer.vue'], resolve)
        },
        {
            path:'/table',
            component: resolve => require(['../components/table.vue'], resolve)
        },
        {
            path:'/selectbox',
            component: resolve => require(['../components/selectbox.vue'], resolve)
        },
        {
            path:'/project-admin',
            component:resolve =>require(['../containers/project-admin'],resolve)
        }
        // {
        //     path: '/map',
        //     component: MapContainer
        // }, {
        //     path: '/table',
        //     component: TableContainer
        // }, {
        //     path: '/ui',
        //     component: UiContainer
        // }
    ]
}];
export default routes;
