import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import webpack from 'webpack'
//路由模块化
import router1 from './router/userprofile'
import router2 from './router/usermanage'
import api from './router/api'
var mongoose = require('mongoose')
var url = "mongodb://localhost:27017/test"
var mongoose = require('mongoose')
mongoose.connect(url, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('db connect success')
    }
})
//Mock.js生成随机数据
import Mock from 'mockjs'
//import fs from 'fs'
//import http from 'http'
import proxy from 'http-proxy-middleware'// 代理插件
import cors from 'cors'// 跨域插件
// 引入history模块
import history from 'connect-history-api-fallback'

// 正式环境时，下面两个模块不需要引入
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../build/webpack.dev.conf'

const app = express()
app.use(cors())
// 引入history模式让浏览器进行前端路由页面跳转,刷新时不会出错
app.use(history())

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

const compiler = webpack(config)
//webpack 中间件
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'views')))
app.get('/', function (req, res) {
  res.sendFile('./views/index.html')
})
app.get('/login', function (req, res) {
  res.sendFile('./views/login.html')
})

app.get('/api/data1',function(req,res){
 res.json(Mock.mock({
        "status": 200,
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    }));
})
app.use('/v2', proxy({
    target: 'https://api.douban.com',
    changeOrigin: true
}))
app.use('/api',api)
app.use('/users/profile', router1)
app.use('/users/manage', router2)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  console.log(err)
  res.send(err.message)
})

// 设置监听端口
const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => {
  console.info(`服务已经启动，监听端口${SERVER_PORT}`)
})

export default app
