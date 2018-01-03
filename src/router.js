//导入vue-ruoter组件
import VueRouter from 'vue-router'


//引入tabbar切换时对应的主题内容组件
import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import shopcar from './components/tabbar/ShopcarContainer.vue'


//创建路由实例对象  
var router=new VueRouter({
    routes:[    //配置路由规则
       {path:'/', redirect:'/home'},
       {path:'/home',component:home},  //配置路由与对应模板
       {path:'/member',component:member},
       {path:'/search',component:search},
       {path:'/shopcar',component:shopcar}
    ],
    linkActiveClass:"mui-active" //替换点击高亮类名 route-link-active 换成mui自带的点击高亮
})


//es6  语法导出路由   
export default router