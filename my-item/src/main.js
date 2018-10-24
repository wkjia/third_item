import Vue from 'vue'
import App from './App.vue'


//引入路由文件--------------------------------------------路由
import VueRouter from 'vue-router'

//引入主路由
import Yaowen from './containers/Yaowen.vue';
import Shiping from './containers/Shiping.vue';
import Pyq from './containers/Pyq.vue';
import Fengwen from './containers/Fengwen.vue';
import Shipin from './containers/Shipin.vue';
import Gundong from './containers/Gundong.vue';
import Test from './containers/test.vue'

//引入fengwen.vue的子路由
import guanzhu from './components/fw_component/Guanzhu.vue';
import fabu from './components/fw_component/Fabu.vue';
import wenzhang from './components/fw_component/Wenzhang.vue';
import huifu from './components/fw_component/Huifu.vue';
import hot from './components/fw_component/Hot.vue'


Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  { 
    path: '/',
     component: Yaowen,
  // children:[
    // {path:'/society',component:Test,name:'society'}
  // ]
},
  { path: '/shiping', component: Shiping },
  { path: '/pyq', component: Pyq },


  {
     path: '/fengwen',
      component: Fengwen,
      redirect:'/fengwen/guanzhu',
      children:[
        {path:'guanzhu',component:guanzhu,name:'guanzhu'},
        {path:'fabu',component:fabu,name:'fabu'},
        {path:'wenzhang',component:wenzhang,name:'wenzhang'},
        {path:'huifu',component:huifu,name:'huifu'},
        {path:'hot',component:hot,name:'hot'},
      ]

 },

  { path: '/shipin', component: Shipin },
  { path: '/gundong', component: Gundong },
  {path:'/society',component:Test}
]
const router = new VueRouter({
  routes // short for `routes: routes`
})


//引入muse-ui框架---------------------------------------muse-ui 框架
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);


//vuex用于组件之间的数据访问共用----------------------------------vuex
import Vuex from 'vuex';
Vue.use(Vuex)
//创建一个store
const store = new Vuex.Store({
  //状态，初始化数据
  state: {
    searchText: '',
    isShowGallery: false,
    galleryUrl: ''
  },
  //将数据写进Vue的内部
  mutations: {
    changeSearchText(state, data) {
      state.searchText = data;
    }
  },
  //接收从其他地方变更来的数据,调用变更函数方法
  actions: {
    setSearchText(context, data) {
      context.commit('changeSearchText', data)
    }
  },
  //获取state里面的数据信息
  getters:{
    
    getSearchText(state) {
      return state.searchText
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
