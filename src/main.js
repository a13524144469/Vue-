//入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入APP组件
import app from './App.vue'

//导入router
import router from './router.js'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
// import './lib/mui/css/icons-extra.css'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)





var vm = new Vue({
    el:"#app",
    data:{},
    methods:{},
    render:c=>c(app),
    router
})