<template>
    <div class="box">
        <div class="header">
            <div class="logo">
                <div class="left">
                    <img src="../assets/icon1.png">
                </div>
                <div class="big">
                    <div class="right">
                        <a class="fengwen" href="http://user.guancha.cn?s=fwdhfw">风闻</a>
                    </div>
                    <div class="right2">
                        <a class="fatie" href="#">发帖</a>
                    </div>
                </div>
            </div>
            <ul class="sign">
                <li><a href="#" class="signIn">登录</a></li>|
                <li><a href="#" class="signout">注册</a></li>
            </ul>
        </div>
        <tab></tab>
        <div class="space2"></div>
        <div>
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
import Tab from '../components/fw_component/Tab.vue';
export default {
    data:function(){
        return {
           
        }
    },
    components:{
        Tab
    },
    methods:{
        
    }
    ,mounted(){
       
    }
};
</script>

<style lang='scss' scoped>
.space2{
    height:.625rem;
    width:100%;
    background:#F2F2F2;
}
.box{
    z-index: 10000;
}
* {
  margin: 0rem;
  padding: 0rem;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.header {
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  border-bottom: 0.0625rem solid #ccc;
  padding: 0rem 0.625rem;
  align-items: center;
  background: #fff;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 1.375rem;
  height: 1.375rem;
  margin-right: 0.625rem;
  margin-top: 0.3125rem;
}

.sign {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
}

.right .fengwen {
  color: #ce3d3a;
  font-size: 1.625rem;
}

.right2 .fatie {
  background: #ce3d3a;
  color: white;
  font-size: 0.875rem;
  border-radius: 1rem;
  padding: 0.125rem 0.3125rem;
  margin-left: 0.625rem;
}

.big {
  display: flex;
  align-items: center;
}

.sign .signIn {
  color: #343434;
  font-size: 1rem;
}

.sign .signout {
  border-radius: 16px;
  background-color: #ce3d3a;
  border: 1px solid #ce3d3a;
  padding: 6px 10px;
  color: #fff;
  font-size: 16px;
  font-family: "潞脷脤氓";
  border: 0px;
  outline: none;
  margin-right: 0.625rem;
}
</style>
