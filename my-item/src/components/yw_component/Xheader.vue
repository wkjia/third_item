<template>
    <div id="fix">
        <header data-v-33d98a02="" class="mu-appbar mu-primary-color mu-inverse  mu-elevation-4" style="width: 100%;">
            <div class="mu-appbar-left"><button data-v-33d98a02="" tabindex="0" type="button" class="mu-button mu-icon-button " >
                <div class="mu-button-wrapper">
                    <div class="mu-ripple-wrapper">
                        <a @click="qiehuan" :class="{toggle:!isShow}"></a>
                        <a @click="qiehuan" :class="{active:isShow}"></a>
                    </div>
                    
                </div></button>
            </div>
            <div class="mu-appbar-title">
                <i class="db"></i>
                <a href="#" class="news"><span class="dw">大报版</span></a>
                </div>
            <div class="mu-appbar-right"><button data-v-33d98a02="" tabindex="0" type="button" class="mu-button mu-flat-button " >
                <div class="mu-button-wrapper">
                    <div class="mu-ripple-wrapper">
                        <i class="username notLoggedInBtn"></i>
                    </div>
                </div>
                    </button>
            </div>
        </header>

           <transition name="bounce">
              <ul class="list" v-show="isShow">
                  <li v-for="(item,index) in nav" :key='index'>
                      <span v-for="(ele,i) in item.sort" :key="i" v-if="ele.name">
                          <router-link  :to='(ele.routers)'  :href="ele.routers" v-text="ele.name"></router-link>
                      </span>
                      <p>
                          <router-link  :to='(ele.router)' v-if="ele.names" v-for="(ele,i) in item.sort" :key="i" :href="ele.router" v-text="ele.names"></router-link>
                      </p>
                  </li>
              </ul>
          </transition>
<!--        
          <div class="top-menu">
              <div class="top-menu-list">
                <a  @click='yanse(e)' :class="{'w_active':page===e}" href="#" v-for='(i,e) in arr' :key="e" v-text="i.type"></a>
              </div>
          </div> -->
        
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      nav: [
        { sort: [{ name: "首页", routers: "/" }] },
        {
          sort: [
            { name: "政治", routers: "/politics" },
            { names: "教育", router: "/education" },
            { names: "法制", router: "/FaZhi" },
            { names: "社会", router: "/society" }
          ]
        },
        {
          sort: [
            { name: "国际", routers: "/america" },
            { names: "北美", router: "/america" },
            { names: "欧洲", router: "/europe" },
            { names: "亚非拉", router: "/Third-World" }
          ]
        },
        {
          sort: [
            { name: "军事", routers: "/military-affairs" },
            { names: "科技", router: "/Science" },
            { names: "工程", router: "/Project" }
          ]
        },
        {
          sort: [
            { name: "财经", routers: "/economy" },
            { names: "区域", router: "/local" },
            { names: "产业", router: "/Industry" },
            { names: "生活", router: "/life" }
          ]
        },
        {
          sort: [
            { name: "文化", routers: "/culture-history" },
            { names: "艺术", router: "/art" },
            { names: "体育", router: "/sports" },
            { names: "传媒", router: "/Media" },
            { names: "历史", router: "/history" }
          ]
        }
      ],
      isShow: false,
      word:false,
      page:0,
      arr: [{
					type: "要闻",
					badge: 8,
					isShowDot: true
				}, {
					type: "时评",
					badge: 0,
				}, {
					type: "朋友圈",
					badge: 0,
				}, {
					type: "风闻",
					badge: 0,
        },{
					type: "视频",
					badge: 0,
				},{
					type: "滚动",
					badge: 0,
				}
        ],
    };
  },
  methods: {
    qiehuan: function() {
      this.isShow = !this.isShow;
    },
    yanse:function(e){
       this.page = e
    }

  }
};
</script>


<style scoped lang="scss">
.w_active{
  color: #bd0509!important
}
.box{
  position: relative;
}
.bounce-enter-active {
  animation: scale 1s infinite;
}

.bounce-leave-active {
  animation: scale 1s reverse;
}

@keyframes scale {
  from {
    transform: translateY(-17.625rem);
  }
  to {
    transform: translateY(0rem);
  }
}

header {
  position: relative;
}
.material-icon {
  width: 1.875rem;
  height: 1.875rem;
}
.mu-appbar {
  height: 3.125rem;
}
.mu-primary-color {
  background: #bd0509;
}
.news {
  font-size: .875rem;
  line-height: 1.25rem;
  border: .0625rem solid #fff;
  padding: .125rem .5rem;
  border-radius: .3125rem;
  color: #fff;
}
.db {
  margin-top: .9375rem;
  margin-left: 2.1875rem;
  margin-right: .3125rem;
  display: block;
  float: left;
  width: 5.625rem;
  height: 1.75rem;
  background: #000;
  background: url("../../assets/logo2.png") no-repeat;
  background-size: 5.4375rem 1.75rem;
}
.username {
  display: inline-block;
  width: 3.125rem;
  height: 3.125rem;
  background: url("../../assets/headIco.png") no-repeat;
  background-position: 0rem .9375rem;
  background-size: 50%;
}
.toggle {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  width: 3.125rem;
  height: 3.125rem;
  background-image: url(../../assets/headIco.png);
  background-repeat: no-repeat;
  background-size: 50%;
  left: 0;
  background-position: center -3.5rem;
}

.active {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  width: 3.125rem;
  height: 3.125rem;
  background-image: url(../../assets/headIco.png);
  background-repeat: no-repeat;
  background-size: 50%;
  left: 0;
  background-position: center -14.5rem;
}

.list {
  margin: 0;
  padding: 0;
  font-size: .75rem;
  position: absolute;
  top: 5.5rem;
  left: 0rem;
  width: 100%;
  overflow: hidden;
  background: #fff;
  li {
    width: 100%;
    overflow: hidden;
    line-height: 1.5rem ;
    padding-top: .625rem;
    padding-bottom: .625rem;
    border-bottom: .0625rem solid #d8d8d8;
    span {
      float: left;
      width: 3.75rem;
      text-align: center;
      a {
        font-size: 1.125rem;
        color: #4a4a4a;
      }
    }
    p {
      float: left;
      width: calc(100% - 3.75rem);
      overflow: hidden;
      margin: 0rem;
      a {
        margin-right: .75rem;
        color: #bd0509;
        font-size: 1rem;
      }
    }
  }
}
.top-menu {
  background-color: #efefef;
  border-bottom: .0625rem solid #ccc;
  height: 2.5rem;
  overflow: hidden;
  .top-menu-list {
    display: flex;
    // flex-direction: column;
    padding-top: .3125rem;
    text-align: center;
    a {
      flex:1;
      display: inline-block;
      color: #333;
      font-size: 1.125rem;
    }
  }
}
#fix{
  position: fixed;
  top:0rem;
  left:0rem;
  right: 0rem;
}
</style>
