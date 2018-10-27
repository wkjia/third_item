<template>
    <div class="bigbox">
        <ul class="langmu">
          <!-- 在<router-link @mouseover="">上我们添加点击事件总是无效的，这是因为<router-link>在HTML5历史记录模式下，router-link将拦截点击事件，以便浏览器不会尝试重新加载页面。 -->
            <!-- <li @click='toggle(index)' class="title" v-for="(n,index) in arr" :key="index" v-text="n.title"></li> -->
            <router-link @click.native='toggle(index);fullscreen();chuancan(index)' 
            :class="{'active_tab':page===index}" :to='n.link' tag='li' c
            lass="title" v-for="(n,index) in arr" :key="index" v-text="n.title"

            ></router-link>
            <router-link to='hot'  class="title2" tag='li'>
                <select v-model="selected" @click="xiala(selected);query(selected);fullscreen()" >
                    <option   :selected='item.default' v-for="(item,num) in sort" :key='num' v-bind:value="item.value" v-text="item.time+'最热'"></option>
                </select>
            </router-link>
        </ul>
    </div>
</template>
<script>
import $ from "jquery";
import "muse-ui-loading/dist/muse-ui-loading.css"; // load css
import Vue from "vue";
import Loading from "muse-ui-loading";

Vue.use(Loading, {
  color: "rgba(244,67,54,6)",
  size: 70,
  text: "正在加载"
});

export default {
  data: function() {
    return {
      //下拉列表
      selected: 1,
      //加载指示器
      loading1: false,
      loading2: false,
      //页面渲染
      total:[],
      qita:1,
      page: 0,
      num:0,
      hot_num:'',
      arr: [
        {
          title: "我的关注",
          link: "guanzhu"
        },
        {
          title: "最新发布",
          link: "fabu"
        },
        {
          title: "专栏文章",
          link: "wenzhang"
        },
        {
          title: "最新回复",
          link: "huifu"
        }
      ],
      sort: [
        { time: "24小时",link:'hot', value:0},
        { time: "3天" ,link:'hot',default:'selected',value:1},
        { time: "7天",link:'hot', value:2},
        { time: "3个月",link:'hot', value:3}
      ]
    };
  },
  computed: {},
  methods: {
    //切换
    toggle(index) {
      this.page = index;
    },
    //加载数据指示器
    loading() {
      this.loading2 = true;
      // setTimeout(() => {
      //   this.loading2 = false;
      // }, 2000);
    },
    fullscreen() {
      const loading = this.$loading();
      setTimeout(() => {
        loading.close();
      }, 500);
    },
    //传递参数
    chuancan(index){
      sessionStorage.setItem('index',index)
    },
    xiala(value){
      // console.log(value)
      sessionStorage.setItem('value',value)
    },
    query(selected) {
        var self = this;
        self.num++;
        // console.log('hot')
        $.ajax({
          url: "http://localhost:3000/hot",
          type: "GET",
          data: {
            num: 1,
            page:selected
          },
          success(data) {
            var data6 = JSON.parse(data);
            sessionStorage.setItem('option',data)
            // console.log(data6);
            self.total = self.total.concat(data6.data.items);
            // console.log(self.total)
          }
        });

    },
    
  },
  
};
</script>

<style scoped lang='scss'>
.strong {
  font-weight: bold;
  text-align: center;
}

option {
  font-size: 1rem;
}

.active_tab {
  border-bottom: 0.125rem solid red;
}
.bigbox {
  background: #fff;
}
* {
  margin: 0rem;
  padding: 0rem;
}
li {
  list-style: none;
}
.langmu {
  display: flex;
  justify-content: space-between;
  padding: 0rem 0.625rem;
  border: 0.0625rem solid #ccc;
  li {
    margin-right: 5px;
    font-size: 14px;
    height: 2.5rem;
    line-height: 2.5rem;
  }
}
</style>
