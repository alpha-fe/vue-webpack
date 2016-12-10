# vue-admin
```
│  index.html                                           // 项目HTML模板
│  package.json                                         // 依赖，脚手架
│  README.md                                            // 说明
│  webpack.config.js                                    // 配置文件
│
├─api                                                   // api本地Mock文件夹
│  └─homepage                                           // 当前页面
│          home.json                                    // 当前页面下的接口A
│
├─build                                                 // 项目build目录结构
│  │  index.html
│  │
│  └─static                                             // 静态资源文件
│      ├─css                                            // css文件
│      │      styles-e3b69025170ccc5f6545.css
│      │      styles-e3b69025170ccc5f6545.css.map
│      │
│      └─js                                             // JS文件
│              0-0-e3b69025170ccc5f6545.js
│              0-0-e3b69025170ccc5f6545.js.map
│              1-1-e3b69025170ccc5f6545.js
│              1-1-e3b69025170ccc5f6545.js.map
│              2-main-e3b69025170ccc5f6545.js
│              2-main-e3b69025170ccc5f6545.js.map
│
├─config                                                // 打包配置文件
│      common.js                                        // 通用文件
│      dev.js                                           // 开发环境配置文件
│      prod.js                                          // 上线环境配置文件
│
├─public                                                // 项目公用文件
│  ├─scripts                                            // 项目公共脚本文件
│  │      a.js
│  │
│  └─styles                                             // 项目公共样式文件
│      │  element.css
│      │
│      └─fonts                                          // 项目公共字体文件
│              element-icons.eot
│              element-icons.svg
│              element-icons.ttf
│              element-icons.woff
│
└─src                                                   // 项目开发环境目录
    │  index.js                                         // 项目开发入口文件
    │
    ├─containers                                        // 容器文件夹，主要存放路由容器，每一个容器对应一个pages/
    │      appcontainer.vue                             // 例：app主容器
    │      chartcontainer.vue                           // 例：报表容器
    │      uicontainer.vue
    │
    ├─pages                                             // 项目路由目标页面文件夹
    │  ├─chartpage                                      // 当前page对应：containers/chartcontainer.vue
    │  │      chartpage.vue
    │  │
    │  ├─uipage                                         // 当前page对应: containers/uicontainer.vue
    │  │      uipage.vue
    │  │
    │  ├─mainpage
    │  │      maincontent.vue
    │  │
    │  └─sliderbar
    │         sliderbar.vue
    │
    ├─routes                                            // 页面路由问价夹
    │      routes.js
    │
    └─utils                                             // 项目公用一些小工具文件夹
            util.js

```
