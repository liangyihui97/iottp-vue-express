var express = require('express')
var router = express.Router()
import Mock from 'mockjs'

router.route('/data').get((req, res) => {
 res.json(Mock.mock({apiData:[
                {   'img': [":4000/images/node1.png",":4000/images/node2.png"],
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

module.exports = router
