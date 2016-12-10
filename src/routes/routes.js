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
    children: [{
            path: '/chart',
            component: resolve => require(['../containers/chartcontainer.vue'], resolve)
        }, {
            path: '/ui',
            component: resolve => require(['../containers/uicontainer.vue'], resolve)
        },
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
