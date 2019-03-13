import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import webpack from 'webpack'
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
 res.json(Mock.mock({apiData:[
                {   'img': ["images/node1.png","images/node2.png"],
                    'name':[
                        ['设备','电源状态', '连接状态', '开关状态', '开合次数', '工作时间'],
                        ['设备','电源状态', '连接状态','设备连接数量','上行速率(Kb/s)','下行速率(Kb/s)']
                    ],
                    'data': [
                        {'nodename':'HS1DS-E','status':'正常','line':'已连接','switch':'闭合',"openclose":1,'worktime':'2h'},
                        {'nodename':'HS2GW-E','status':'关闭','line':'未连接','num':'1','Upstream|20-50': 1,'Downtream|50-100': 1},
                        
                    ]
                }
            ],
            columns: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄 ',
                    key: 'age',
                    sortable: true
                },
                {
                    title : '出生日期  ',
                    key :'birthday',
                    sortable: true
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            data: [
                {
                    name: '小明',
                    age: '22',
                    birthday: '1997-04-02',
                    address: '江西省抚州市黎川县'
                },
                {
                    name: '宇成',
                    age: '24',
                    birthday: '1994-12-30',
                    address: '广东省云浮市'
                },
            ]
        }));
})
app.get('/api/data',function(req,res){
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
