<template>
        <div>
            <app-home></app-home>
            <app-home2></app-home2>
            <div class="space"></div>
            <div class="bigbox">
                <ul>
                    <li v-for='(n,index) in total' :key='index' :class="{author:n.preview_n}" v-if='n.preview_n'>
                        <div class="box-left">
                            <a :href="'https://m.guancha.cn/'+n.mobile_url">
                                <img :src="n.author[0]['pic']" style="height:2.8125rem">
                            </a>
                        </div>
                        <div class="box-right">
                            <a :href="'https://m.guancha.cn/'+n.mobile_url">
                                <h3 v-text="n.title"></h3>
                            </a>
                            <a :href="'https://m.guancha.cn/'+n.mobile_url">
                                <h4 v-text="n.author[0]['name']"></h4>
                            </a>
                            <p v-text="n.author[0]['summary']"></p>
                            <div class="box-right-info">
                                <span class="commcount" v-text="n.comments"></span>
                                <a :href="n.special[0]['id']">
                                    <span class="topic" v-text="n.special[0]['name']"></span>
                                </a>
                            </div>
                        </div>
                    </li>

                </ul>
                <div class="loadMore" style="display: block;">
                  <a @click.prevent="shuju2">点击加载更多</a>
                </div>
            </div>
        </div>
        
    
</template>

<script>
import $ from "jquery";
import appHome2 from "../components/yw_component/Nav.vue";
import AppHome from "../components/yw_component/Xheader.vue";
export default {
  data: function() {
    return {
      num: 0,
      total: []
    };
  },
  methods: {
    shuju2: function() {
      var self = this;
      self.num++;
      $.ajax({
        url: "http://localhost:3000/spg",
        type: "GET",
        data: {
          num: this.num
        },
        success(data) {
          var data5 = JSON.parse(data);
          //   console.log(data);
          self.total = self.total.concat(data5.datas);
        }
      });
    }
  },
  mounted() {
    this.shuju2();
  },
  components: {
    appHome2,
    AppHome
  }
};
</script>

<style lang='scss' scoped>
* {
  margin: 0rem;
  padding: 0rem;
}
a {
  text-decoration: none;
  color: #ff4081;
}
.bigbox {
  margin-top: 5.625rem;
  background: #fff;
  ul {
    padding: 0rem 0.9375rem;
  }
  li {
    list-style: none;
    border-bottom: 1px solid #d7d7d7;
    padding: 0.625rem 0rem 0.4375rem 0rem;
    .box-left {
      width: 45px;
      float: left;
    }
    .box-right {
      overflow: hidden;
      padding-left: 0.9375rem;
      h3 {
        font-size: 1rem;
        color: #414141;
        margin: 0rem;
        padding: 0rem;
      }
      h4 {
        color: #bd0509;
        font-weight: normal;
        margin: 0.625rem 0rem 0.3125rem 0rem;
      }
      p {
        margin-bottom: 0.625rem;
        color: #9b9b9b;
      }
      .box-right-info {
        margin-top: 0rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .commcount {
          background: url(http://i.guancha.cn/icons/x_comment_16.png) no-repeat;
          background-size: 0.875rem auto;
          display: inline-block;
          padding-left: 1.125rem;
          color: #9b9b9b;
        }
        .topic {
          color: #bd0509;
        }
      }
    }
    .author {
      overflow: hidden;
    }
  }
}
.space {
  height: 2.5rem;
}
.loadMore {
  margin: 10px;
  a {
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #bd0509;
    background: #e5e5e5;
  }
}
</style>
