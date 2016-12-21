import AppContainer from '../containers/appcontainer.vue';
import NotFound from '../containers/not-found.vue';
// import ChartContainer from '../containers/chartcontainer.vue';

// const ChartContainer = resolve => {
//   require.ensure([],()=>{
//     resolve(require('../containers/chartcontainer.vue'));
//   });
// };

const routes = [

    {
        path: '/',
        component: AppContainer,
        children: [

            {
                path: '/chart',
                component: resolve => require(['../containers/chartcontainer.vue'], resolve)
            },
            {
                path: '/ui',
                component: resolve => require(['../containers/uicontainer.vue'], resolve)
            },
            {
                path:'/table',
                component: resolve => require(['../components/table.vue'], resolve)
            },
            {
                path:'/selectbox',
                component: resolve => require(['../components/form/el-select.vue'], resolve)
            },
            {
                path:'/form',
                component:resolve=>require(['../containers/edit-position'],resolve)
            },
            {
                path:'/project-admin',
                component:resolve =>require(['../containers/project-admin'],resolve)
            },
            {
                path:'*',
                component:NotFound
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
    }
];
export default routes;
