Vue的物联网用户平台
=========================================

基于vue-express开发，首页通过前端路由能够跳转到教学部分。
在原版本基础之上，修改了webpack的相关配置文件。使得项目可以运行build命令，编译vue相关代码。
前端部分增加了vue全家桶（vue-router，vuex）
后端express部分增加有history模式，支持前端路由。需要传统后端路由方式的话，请注释掉`server/index.js`中`app.use(history())`
重新修改了文件夹结构。

#### 1.10 版本
- 去掉了相关UI组件的配置，如果需要进行配置的话可以参考官方资料
  - [iView](https://www.iviewui.com/)
  - [element-UI](http://element-cn.eleme.io/#/zh-CN)
- 删除了不需要的package

fork源：[southerncross/vue-express-dev-boilerplate](https://github.com/southerncross/vue-express-dev-boilerplate)

## 关键词
- 物联网
- 教学
- Vue (vue-router + vuex)
- Express
- Nodemon
- Webpack
- Npm


## 文件目录

```
iottp-vue-express
├── .babelrc
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist
│   ├── index.html
│   └── static
│       ├── css
│       ├── images
│       ├── img
│       ├── js
│       └── Readme.md
├── .eslintrc
├── .gitignore
├── index.js
├── LICENSE
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── client
    │   ├── App.vue
    │   ├── .App.vue.swp
    │   ├── components
    │   ├── index.js
    │   ├── router
    │   ├── static
    │   ├── store
    │   └── views
    └── server
        ├── config
        ├── dao
        ├── index.js
        ├── model
        ├── public
        ├── router
        └── views
```

## 用法

1. 安装依赖包

   `npm install`

2. 运行开发环境

   `npm run dev 或者 npm start` 

3. build前端代码

    `npm run build`
    
    生成后的代码会在根目录的dist目录下。
    此时可专门写一个生产环境启动express的脚本。

## 参考资料

Some ideas are stolen from them, really appreciated.

- [Eslint guide](http://eslint.org/docs/user-guide/getting-started)
- [Express generator](http://expressjs.com/en/starter/generator.html)
- [Vue template](https://github.com/vuejs-templates/webpack)
- [Nodemon doc](https://github.com/remy/nodemon#nodemon)
- [Babel register](http://www.ruanyifeng.com/blog/2016/01/babel.html)
- [webpack-dev-middleware-boilerplate](https://github.com/madole/webpack-dev-middleware-boilerplate/tree/master/src)
- [how-can-i-use-webpack-with-express](http://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express)
- [The-ultimate-webpack-setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)
# iottp-vue-express
