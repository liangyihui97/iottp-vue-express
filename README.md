Vue公司的物联网用户平台
=========================================

基于VUE-Express的开发，首页通过前端路由能够跳转到教学部分。
在原版本基础之上，修改了的WebPack的相关配置文件。使得项目可以运行构建命令，编译VUE相关代码。
前端部分增加了VUE全家桶（VUE路由器，vuex）
后端表达部分增加有历史模式，支持前端路由。需要传统后端路由方式的话，请注释掉`服务器/ index.js`中`app.use（历史记录（））`
重新修改了文件夹结构。

#### 1.10版本
- 去掉了相关UI组件的配置，如果需要进行配置的话可以参考官方资料
  -  [iView]（https://www.iviewui.com/）
  -  [element-UI]（http://element-cn.eleme.io/#/zh-CN）
- 删除了不需要的包

叉源：[southerncross / VUE快车-DEV-样板（https://github.com/southerncross/vue-express-dev-boilerplate）

##关键词
- 物联网
- 教学
-  Vue（vue-router + vuex）
- 表达
-  Nodemon
-  Webpack
-  Npm


##文件目录

```
iottp-VUE快车
├──.babelrc
├──建造
│├──build.js
│├──check-versions.js
│├──dev-client.js
│├──utils.js
│├──vue-loader.conf.js
│├──webpack.base.conf.js
│├──webpack.dev.conf.js
│└──webpack.prod.conf.js
├──配置
│├──dev.env.js
│├──index.js
│└──prod.env.js
├──dist
│├──index.html
│└──静电
│├──cs
│├──图像
│├──img
│├──js
│└──Readme.md
├──.eslintrc
├──.gitignore
├──index.js
├──LICENSE
├──nodemon.json
├──package.json
├──package-lock.json
├──README.md
└──src
    ├──客户
    │├──App.vue
    │├──.App.vue.swp
    │├──组件
    │├──index.js
    │├──路由器
    │├──静电
    │├──商店
    │└──意见
    └──服务器
        ├──配置
        ├──道
        ├──index.js
        ├──型号
        ├──公众
        ├──路由器
        └──观点
```

##用法

1.安装依赖包

   `npm install`

2.运行开发环境

   `npm run dev或者npm start` 

3.构建前端代码

    `npm run build`
    
    生成后的代码会在根目录的DIST目录下。
    此时可专门写一个生产环境启动表达的脚本。

##参考资料

有些想法是从他们身上偷来的，真的很感激。

-  [Eslint指南]（http://eslint.org/docs/user-guide/getting-started）
-  [Express generator]（http://expressjs.com/en/starter/generator.html）
-  [Vue模板]（https://github.com/vuejs-templates/webpack）
-  [Nodemon doc]（https://github.com/remy/nodemon#nodemon）
-  [Babel register]（http://www.ruanyifeng.com/blog/2016/01/babel.html）
-  [webpack-dev-middleware-boilerplate]（https://github.com/madole/webpack-dev-middleware-boilerplate/tree/master/src）
-  [how-can-i-use-webpack-with-express]（http://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express）
-  [The-ultimate-webpack-setup]（http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup）
＃iottp-vue-express
