import AppContainer from '../containers/appcontainer.vue';
// import ChartContainer from '../containers/chartcontainer.vue';

const ChartContainer = resolve => {
  require.ensure([],()=>{
    resolve(require('../containers/chartcontainer.vue'));
  });
};
const UiContainer = resolve => {
  require.ensure([],()=>{
    resolve(require('../containers/uicontainer.vue'));
  });
};

const table = resolve => {
  require.ensure([],()=>{
    resolve(require('../components/table.vue'));
  })
}

const selectbox = resolve => {
  require.ensure([],()=>{
        resolve(require('../components/selectbox.vue'));
  })
}

const projectAdmin = resolve => {
  require.ensure([],()=>{
        resolve(require('../containers/project-admin'));
  })
}

const DialogContainer = resolve => {
  require.ensure([],()=>{
    resolve(require('../containers/dialogcontainer'));
  })
}

const routes = [{
    path: '/',
    component: AppContainer,
    children: [
        {
            path: '/chart',
            component: ChartContainer
        }, {
            path: '/ui',
            component: UiContainer
        },
        {
            path:'/table',
            component: table
        },
        {
            path:'/selectbox',
            component: selectbox
        },
        {
            path:'/project-admin',
            component:projectAdmin
        },
        {
            path:'/alert',
            component:DialogContainer
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
