//入口文件
//导入vue组件
import Vue from 'vue'   

//导入vue-router组件
import VueRouter from 'vue-router'
//把vue-router加载到vue里
Vue.use(VueRouter)

// 导入APP组件
import app from './App.vue'

//导入 router 路由模块
import router from './router.js'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入mui 扩展图标样式
import './lib/mui/css/icons-extra.css'


//导入mint-ui的header组件
import {Header,Swipe,SwipeItem } from 'mint-ui'
//把header组件加载到vue
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入vue-resource
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)



//创建vue实例对象 ,render指定组件模板渲染html ; router:router 挂载路由到实例vm对象上
var vm = new Vue({
    el:"#app",
    data:{},
    methods:{},
    render:c=>c(app), 
    router  
})