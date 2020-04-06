import Vue from 'vue'
import App from './App'

import {myRequest} from './util/api.js'

Vue.prototype.$myRequest = myRequest         // 将封装的 请求方法 挂载到全局使用

// 全局的 时间格式化
Vue.filter('dateFormat',(date)=>{
	const newDate = new Date(date)
	const year = newDate.getFullYear()
	const month = newDate.getMonth().toString().padStart(2,0)
	const day = newDate.getDay().toString().padStart(2,0)
	return year + '-' + month + '-' + day
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
