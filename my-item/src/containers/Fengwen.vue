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
                <li v-for='(item,numb) in options' :key="numb" @click="reset(numb)">
                    <a href="#" class="signIn" @click.prevent="show" v-text="item" :class="{signIn:numb==0,signout:numb==1}"></a>
                </li>
            </ul>
        </div>
        <tab></tab>
        <div class="space2"></div>
        <div>
            <router-view></router-view>
        </div>
        <!-- 注册登录页面 -->
            <!-- 半透明框 -->
        <div class="sign_zd" v-if='shows'>
        </div>
            <!--  -->
        <div class="bigbox_zd " v-if='shows'>
            <!-- 公共部分 -->
            <div class="close">
                <span class="closed" @click="show"></span>
            </div>
            <div class="option">
                <div v-for='(n,index) in options' 
                :key="index" v-text="n"  :class="{denglu:n=='登录',zhuce:n=='注册',
                active:page==index}" @click="toggle(index);suiji()">
                </div>
            </div>
            <div class="space"></div>
            <!--  -->
            <!-- 登录框 -->
            <div class="denglu_box" v-if='page==0'>
                <div class="reg_list">
                    <ul class="delu">
                        <li class="username">
                            <div class="number">
                                <span>+86</span>
                                <i class="arrow-down"></i>
                            </div>
                            <span></span>
                            <!-- <ul class="xia_list">
                            
                                <li style="font-size:16px; font-weight:bold; color : #333">
                                    常用国家或地区
                                </li>
                                <li data-code="86">
                                    中国 +86
                                </li>
                                <li data-code="886">
                                    中国台湾 +886
                                </li>
                                <li data-code="852">
                                    中国香港 +852
                                </li>
                                <li data-code="853">
                                    中国澳门 +853
                                </li>
                                <li data-code="1">
                                    美国 +1
                                </li>
                                <li data-code="7">
                                    俄罗斯 +7
                                </li>
                                <li data-code="1">
                                    加拿大 +1
                                </li>
                                <li data-code="61">
                                    澳大利亚 +61
                                </li>
                                <li data-code="81">
                                    日本 +81
                                </li>
                                <li data-code="65">
                                    新加坡 +65
                                </li>
                                <li data-code="44">
                                    英国 +44
                                </li>
                                <li data-code="49">
                                    德国 +49
                                </li>
                                <li data-code="60">
                                    马来西亚 +60
                                </li>
                                <li data-code="64">
                                    新西兰 +64
                                </li>
                                <li data-code="82">
                                    韩国 +82
                                </li>
                                <li data-code="33">
                                    法国 +33
                                </li>
                                <li data-code="66">
                                    泰国 +66
                                </li>
                                <li data-code="84">
                                    越南 +84
                                </li>
                                <li data-code="39">
                                    意大利 +39
                                </li>
                                <li data-code="63">
                                    菲律宾 +63
                                </li>
                                <li data-code="31">
                                    荷兰 +31
                                </li>
                                <li data-code="62">
                                    印度尼西亚 +62
                                </li>
                                <li data-code="855">
                                    柬埔寨 +855
                                </li>
                                <li data-code="34">
                                    西班牙 +34
                                </li>
                                <li data-code="46">
                                    瑞典 +46
                                </li>
                                <li data-code="41">
                                    瑞士 +41
                                </li>
                            </ul> -->
                            <input type="text" placeholder="请输入手机号" v-model="dl_number">
                        </li>
                        <li class="password">
                            <span></span>
                            <input type="text" placeholder="密码" v-model="dl_password">
                        </li>
                        <li class="last">
                            <span></span>
                            <input type="text" placeholder="验证码" v-model="dl_code">
                            <div class="reg" v-text="yzm" @click="suiji()">

                            </div>
                        </li>
                    </ul>
                </div>
                <div class="member-box">
                    <input type="checkbox" id="checboxMember" name="rememberMe" checked="checked"> 
                    <nobr><label for="checboxMember">一个月内自动登录</label></nobr>
                    <div></div>
                    <nobr><a class="forget-pwd" href="#">忘记密码</a></nobr>
                </div>
                <div class="login">
                    <button  class="login-btn">登录</button>
                </div>
                <div class="third-login-split">
                    <span>社交账号登录</span>
                    <hr>
                </div>
                <div class="third-login">
                    <a class="sina" href="http://user.guancha.cn/main/third-login?type=weibo"></a> 
                    <a class="weixin" href="http://user.guancha.cn/main/third-login?type=weixin" target="_blank"></a> 
                    <a class="qq" href="http://user.guancha.cn/main/third-login?type=qq"></a>
                </div>
            </div>
            <!--  -->
            <!-- 注册框 -->
            <div class="zhuce_box" v-if='page==1'>
                <ul>
                    <li class="usernick">
                        <span></span> 
                        <input id="txtUserNick" type="text" value="" placeholder="设置昵称" v-model='username' @blur="deal"> 
                        <label :class="{'login-error':true,visibility:name}" >
                            只能含有字母、数字下划线</label>
                    </li>
                    <li class="username">
                        <span></span>
                        <div class="telephone-code">
                            <span class="code" data-code="86">+86</span>
                            <i class="arrow-down"></i>
                        </div>
                        <input id="txtMobile" type="text" value=""
                         placeholder="输入手机号" v-model="number" @blur="deal" @focus='test' :class="{xianshi:xs}"> 
                        <label :class="{'login-error':true,visibility:ber}" >请输入正确的手机号码</label>
                    </li>
                    <li class="password">
                        <span></span>
                        <input id="txtPassword" type="password" value="" 
                        placeholder="设置密码(6-18位)" v-model="password" @blur="deal" @focus='test' :class="{xianshi:xs}"> 
                        <label :class="{'login-error':true,visibility:word}" >密码长度6-18位</label>
                    </li>
                    <li class="confirm-password">
                        <span></span>
                        <input id="txtConfirmPassword" type="password" value="" placeholder="确认密码" v-model="again_password" @blur="deal"> 
                        <label :class="{'login-error':true,visibility:a_word}" >密码不一致</label>
                    </li>
                    <li class="captcha">
                        <span></span>
                        <input id="txtPcCaptcha" type="text" placeholder="验证码" v-model="code" @blur="deal">
                        <label class="login-error"></label>
                         <div class="reg" @click="suiji()" v-text="yzm"></div>
                    </li>
                    <li class="mobile-captcha last">
                        <span></span>
                        <input id="txtCaptcha" type="text" placeholder="短信验证码">
                        <label class="login-error" :class="{'login-error':true,visibility:yz}" >
                            验证码错误</label>
                        <nobr><a href="#" class="get-code" data-is="true">获取短信验证码</a></nobr>
                    </li>
                </ul>
                <button  class="login-btn2" @click="zhuce">注册</button>
                <p class="register-message">
		            点击[注册]按钮，即表示您同意并愿意遵守观察者
                    <a href="http://www.guancha.cn/broken-news/2017_03_28_400912.shtml" target="_blank">
                        用户协议
                    </a>和
		            <a href="http://www.guancha.cn/broken-news/2017_03_28_400912_4.shtml" target="_blank">
                        隐私协议
                    </a>
	            </p>
            </div>
            <!--  -->
        </div>
        <!--  -->
    </div>
    
</template>

<script>
// import bootstrap from 'bootstrap'//不添加，默认为接收文件为js文件格式
// import "node_modules/bootstrap/dist/css/bootstrap.css"

import Tab from "../components/fw_component/Tab.vue";
import $ from "jquery";
// import "../js/common.js";
export default {
  data: function() {
    return {
      options: ["登录", "注册"],
      page: 0,
      shows: false,
      arr: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "L",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      dd: "",
            //验证码
      yzm: "",
            //注册数据
      username: "",
      number: "",
      password: "",
      again_password: "",
      code: "",
            //登录数据
      dl_number: "",
      dl_password: "",
      dl_code: "",
            //注册结果
      zc_result:'',
      name:false,
      ber:false,
      word:false,
      a_word:false,
      yz:false,
      xs:false,
      wc:false,
            //登录结果
      dl_result:''
    };
  },
  components: {
    Tab
  },
  methods: {
    toggle: function(index) {
      this.page = index;
    },
    show: function() {
      this.shows = !this.shows;
      console.log(this.shows);
    },
    reset: function(numb) {
      if (numb === 0) {
        this.page = 0;
      }
      if (numb === 1) {
        this.page = 1;
      }
    },
    //随机数字
    randomNumber: function(min, max) {
      var res = parseInt(Math.random() * (max - min + 1)) + min; //0.999
      return res;
    },
    //随机颜色
    randomColor: function(num) {
      if (num === 16) {
        var str = "0123456789abcdef";
        var res = "#";

        for (var i = 0; i < 6; i++) {
          // 获取随机索引值
          var idx = parseInt(Math.random() * str.length);
          res += str.charAt(idx);
        }

        return res;
      }

      var r = parseInt(Math.random() * 256);
      var g = parseInt(Math.random() * 256);
      var b = parseInt(Math.random() * 256);

      return "rgb(" + r + "," + g + "," + b + ")"; //rgb(244,12,23)
    },
    //随机验证码
    suiji: function() {
      this.yzm = "";
      for (var i = 0; i <= 3; i++) {
        this.yzm += this.arr[this.randomNumber(0, 25)];
      }
      this.dd = this.randomColor(16);
    },
    test:function(){
        this.xs=true;
        this.name = false;
        this.ber = false;
        this.word=false;
        this.a_word =  false;
        this.yz = false;
    },
    //注册
    deal: function() {
        
      //验证数据格式
      // console.log(this.username)
      if(!/^[a-zA-Z0-9_]{1,}$/.test(this.username)){//数字、字母、下划线
          //  console.log('name') 
           this.name = true;
      }else{
          this.name=false
      }
      if(!/^1[3-9]\d{9}$/.test(this.number)){//手机号码格式
          this.ber = true;
      }else{
          this.ber=false
      }
      if(!/^[a-zA-Z0-9_/~!@#$%^&*;,.'"]{6,18}$/.test(this.password)){//密码格式
          this.word = true;
      }else{
          this.word=false
      }
      if(this.password != this.again_password){//密码格式
          this.a_word = true;
      }else{
         this.a_word =  false
      }
      if(this.code != this.yzm){//密码格式
          this.yz = true;
      }else{
          this.yz = false
          this.wc = true;
      }
        
    },
    //注册请求
    zhuce:function(){
        if(this.name==false && this.ber==false && 
        this.word==false && this.a_word==false && this.yz==false&&this.wc==true){
          $.ajax({
            url: "http://localhost:3000/register",
            type: "post",
            data: {
                username:this.username,
                number:this.number,
                password:this.password 
            },
            success(data) {
                console.log(data);
                if(data=='fail'){
                    this.zc_result = '喔！世界之门出现未知的BUG了，请稍后请重试一下吧'
                    alert(this.zc_result)
                }else if(data=='successful'){
                    this.zc_result = '世界之门已开启，踏上伟大的世界之旅吧'
                    alert(this.zc_result)
                    //注册成功之后，跳转页面
                }
            }
        });
      }
    }
  },
  mounted() {
    this.suiji();
  }
  //监听注册登录的数据
  // watch:{
  //     username:{
  //         deep: true,
  //         deal(){
  //             //监听用户名
  //         }
  //     }
  // }
};
</script>

<style lang='scss' scoped>

//数据格式错误提示
.visibility {
    opacity: 1!important;
    transform: translate(0rem, 0rem)!important;
    transition: all 0.25s ease-out 0s!important;
}
.login-error {
    color: #ce3d3a;
    position: absolute;
    right: .625rem;
    display: inline-block;
    background-color: #fff;
    top: .625rem;
    font-size: .75rem;
    opacity: 0;
    transform: translate(.625rem, 0rem);
}

//高亮
.active {
  border-bottom: 2px solid #ce3d3a;
  color: #ce3d3a;
}
// 登录
.sign_zd {
  display: flex;
  flex-direction: column;
  background-color: #000;
  opacity: 0.3;
  position: absolute;
  top: 0rem;
  left: 0rem;
  height: 100%;
  width: 100%;
}
.reg_list {
  padding: 0rem 2.5rem;
  .delu {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    .username > span {
      background-position: -294px -2px;
    }
    .password > span {
      background-position: -264px -2px;
    }
    .last > span {
      background-position: -279px -2px;
    }
    li {
      display: flex;
      width: 100%;
      padding: 0.3125rem 1.25rem 0.3125rem 2.125rem;
      border-bottom: 0.0625rem solid #ccc;
      align-items: center;
      position: relative;
      & > span {
        display: inline-block;
        position: absolute;
        top: 0.75rem;
        left: 0.625rem;
        width: 0.875rem;
        height: 1rem;
        background: url(../assets/icons.png) no-repeat;
      }
      input {
        width: 100%;
        height: 1.875rem;
        border: none;
        outline: none;
        font-size: 0.875rem;
      }
      .number {
        height: 1.1875rem;
        margin-right: 1.25rem;
        position: relative;
        .arrow-down {
          width: 0.875rem;
          display: inline-block;
          height: 0.4375rem;
          background: url(../assets/arrow-down.png) no-repeat 0rem 0rem;
          vertical-align: middle;
          margin-left: 0.3125rem;
        }
      }
      .reg {
        height: 1.875rem;
        width: 6.25rem;
        line-height: 1.875rem;
        font-size: 26px;
        text-align: center;
      }
    }
  }
}
.member-box {
  display: flex;
  margin: 1.25rem 2.5rem;
  align-items: center;
  height: 1.1875rem;
  div {
    height: 0.625rem;
    width: 100%;
  }
}
.login {
  margin: 0rem 2.5rem;
}
.login-btn {
  width: 100%;
  background-color: #ce3d3a;
  border-radius: 0.25rem;
  display: block;
  text-align: center;
  padding: 0.9375rem 0rem;
  font-size: 0.875rem;
  outline: none;
  border: none;
  color: white;
}
.third-login-split {
  position: relative;
  margin-top: 1.25rem;
  text-align: center;
  span {
    z-index: 200;
    display: inline-block;
    position: relative;
    padding: 0rem 1.25rem;
    background: #fff;
  }
  hr {
    height: 0.0625rem;
    border: none;
    border-top: 0.0625rem solid #ccc;
    position: absolute;
    top: 0.1875rem;
    width: 100%;
    margin-top: 0.375rem;
  }
}
.third-login {
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.25rem;
  a {
    width: 3.125rem;
    height: 3.125rem;
    background: #000;
    background: url(../assets/icons.png) no-repeat;
  }
  .sina {
    background-position: -0.0625rem -0.0625rem;
  }
  .weixin {
    background-position: -3.25rem -0.0625rem;
  }
  .qq {
    background-position: -6.4375rem -0.0625rem;
  }
}
.bigbox_zd {
  position: fixed;
  top: 15%;
  left: 0rem;
  width: 100%;
  background: #fff;
  border-radius: 0.625rem;
  .closed {
    display: block;
    width: 1rem;
    height: 1.0625rem;
    position: absolute;
    top: 0.625rem;
    right: 1.25rem;
    background: url(../assets/icons.png) no-repeat -20.25rem -0.0625rem;
    opacity: 0.6;
    transform: rotate(-90deg);
    transition: all 0.45s ease-out 0s;
  }
  .close {
    display: flex;
    width: 100%;
    height: 2.5rem;
    justify-content: flex-end;
    span {
      width: 1.0625rem;
      height: 1rem;
      margin: 0.5rem 0.625rem 0 0;
    }
  }
  .space {
    height: 0.5rem;
  }
  .option {
    box-sizing: content-box;
    display: flex;
    line-height: 1.25rem;
    font-size: 1.25rem;
    padding-bottom: 0.4375rem;
    justify-content: center;
    font-weight: bold;
    color: #656565;
    .denglu {
      margin-right: 1.125rem;
      padding-bottom: 0.3125rem;
      box-sizing: content-box;
    }
    .zhuce {
      margin-left: 1.125rem;
      padding-bottom: 0.3125rem;
      box-sizing: content-box;
    }
  }
}

.space2 {
  height: 0.625rem;
  width: 100%;
  background: #f2f2f2;
}
.box {
  position: relative;
}
* {
  margin: 0rem;
  padding: 0rem;
}
//注册
.zhuce_box {
  // padding:0rem 2.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: content-box;
  ul {
    margin: 0rem 2.5rem;
    border: 0.0625rem solid #ccc;
    box-sizing: content-box;
    margin-bottom: 1.25rem;
  }
  li {
    width: 100%;
    height: 2.6rem;
    display: flex;
    align-items: center;
    border-bottom: 0.0625rem solid #ccc;
    position: relative;
    padding: 0.3125rem 1.25rem 0.3125rem 2.125rem;
    & > span {
      display: inline-block;
      position: absolute;
      top: 0.75rem;
      left: 0.625rem;
      width: 0.875rem;
      height: 1rem;
      background: url(../assets/icons.png) no-repeat;
    }
    input {
      width: 100%;
      height: 1.875rem;
      border: none;
      outline: none;
      font-size: 0.875rem;
    }
    .get-code {
      position: absolute;
      top: 0.3125rem;
      right: 0.625rem;
      display: inline-block;
      padding: 0.3125rem 0.625rem;
      color: #ce3d3a;
      background-color: #f2f2f2;
      border-radius: 1rem;
    }
  }
  .captcha {
    display: flex;
    align-items: center;
    .space {
      width: 100%;
    }
    .reg {
      width: 6.25rem;
      height: 1.875rem;
      position: static;
      margin: 0rem;
      padding: 0rem;
      line-height: 1.875rem;
      font-size: 26px;
      text-align: center;
    }
  }
  .usernick > span {
    background-position: -19.3125rem -0.125rem;
  }
  .username > span {
    background-position: -18.375rem -0.125rem;
  }
  .password > span {
    background-position: -16.5rem -0.125rem;
  }
  .confirm-password > span {
    background-position: -15.5625rem -0.125rem;
  }
  .captcha > span {
    background-position: -17.4375rem -0.125rem;
  }
  .mobile-captcha > span {
    background-position: -17.4375rem -0.125rem;
  }

  .arrow-down {
    width: 0.875rem;
    display: inline-block;
    height: 0.4375rem;
    background: url(../assets/arrow-down.png) no-repeat 0rem 0rem;
    vertical-align: middle;
    margin-left: 0.3125rem;
  }

  .telephone-code {
    display: inline-block;
    margin-right: 1.25rem;
    cursor: pointer;
    position: relative;
  }
  .login-btn2 {
    background-color: #ce3d3a;
    border-radius: 0.25rem;
    padding: 0.9375rem 0rem;
    color: #fff;
    font-size: 0.875rem;
    outline: none;
    border: none;
    margin: 0rem 2.5rem;
  }
  .register-message {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    margin: 0rem 2.5rem;
    margin-top: 0.625rem;
    margin-bottom: 1.25rem;
    a {
      color: #343434;
    }
  }
}
// -------------------------------------------------------------
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
  margin-left: 0.125rem;
}
</style>
