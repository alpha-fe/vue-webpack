import AppContainer from '../containers/appcontainer.vue';
import NotFound from '../containers/not-found.vue';
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
};

const selectbox = resolve => {
  require.ensure([],()=>{
        resolve(require('../components/form/select.vue'));
  })
};

const projectAdmin = resolve => {
  require.ensure([],()=>{
        resolve(require('../containers/project-admin'));
  })
};

const DialogContainer = resolve => {
  require.ensure([],()=>{
    resolve(require('../containers/dialogcontainer'));
  })
};


const Form = resolve => {
  require.ensure([],()=>{
    resolve(require('../containers/edit-position'));
  })
};

const MockApi = resolve => {
  require.ensure([],()=>{
    resolve(require('../containers/mockcontainer'));
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
            path:'/form',
            component:Form
        },
        {
            path:'/alert',
            component:DialogContainer
        },{
          path:'/mock',
          component:MockApi
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
