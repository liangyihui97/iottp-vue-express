import Vue from 'vue'
var _bus = new Vue()  // 创建一个事件总线
var num = 0
axios.interceptors.request.use(function (config) {  //在请求发出之前进行一些操作
    num++
    _bus.$emit('showloading')
    return config
  }

axios.interceptors.response.use(response => {        // 接受请求后num--，判断请求所有请求是否完成
    num--
    if (num <= 0) {
      _bus.$emit('closeLoading')      
    } else {
      _bus.$emit('showloading')      
    }
  })
export var bus = _bus   //暴露事件总线
