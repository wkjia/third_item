<template>
    <div>
        <app-home></app-home>
        <app-home2></app-home2>
        <div class="space"></div>
        <div class="bigbox">
            <div class="index-fengwen-title">
                <a href="https://user.guancha.cn/?s=s=wapsyfwsqckqb">风闻社区</a>
                <a href="https://user.guancha.cn/?s=s=wapsyfwsqckqb">查看全部>></a>
            </div>
            <div :class="{'index-fengwen-box':true,active:index==2}" v-for="(n,index) in user" :key="index">
                <div class="user">
                    <div class="user_img">
                        <a :href="'https://user.guancha.cn/user/personal-homepage?uid='+n.user_id+'&amp;s=wapsyfwsqnx'">
                            <img :src="n.user_photo" >
                        </a>
                    </div>
                    <div class="user_name">
                        <a :href="'https://user.guancha.cn/user/personal-homepage?uid='+n.user_id+'&amp;s=wapsyfwsqnc'" v-text="n.user_nick"></a><br>
                        <span v-text="n.user_description"></span>
                    </div>
                </div>
                <div class="index-fengwen-post">
                    <a :href="'https://user.guancha.cn/main/content?id='+n.post_id+'&amp;s=wapsyfwsqbt'" v-text="n.title"></a><br>
                    <span v-text="n.desc"></span>
                </div>
                <div class="index-fengwen-comment">评论
                    <a :href="'https://user.guancha.cn/main/content?id='+n.post_id+'&amp;s=wapsyfwsqpl'" class="comment" v-text="n.comment_num"></a>赞
                    <a :href="'https://user.guancha.cn/main/content?id='+n.post_id+'&amp;s=wapsyfwsqzan'" class="zan" v-text="n.praise_num"></a>
                </div>
            </div>
            <ul>
                <li class="big-pic" v-for="(item,index) in total" :key = "index">
                    <div class="box-left">
                        <a :href="'https://m.guancha.cn'+item.mobile_url">
                            <img :src="item.pic">
                        </a>
                    </div>
                    <div class="box-right">
                        <a :href="'https://m.guancha.cn'+item.mobile_url" style="display:block;height:3.75rem">
                            <h3 v-text="item.title"></h3>
                        </a>
                        <div class="box-right-info">
                            <span class="commcount" v-text="item.comments"></span>
                            <a :href="'https://m.guancha.cn'+item.special[0]['id']">
                                <span class="topic" v-text="item.special[0]['name']"></span>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="loadMore" style="display: block;">
                  <a @click.prevent="shuju3">点击加载更多</a>
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
      total: [],
      user: []
    };
  },
  methods: {
    shuju3: function() {
      var self = this;
      self.num++;
      $.ajax({
        url: "http://localhost:3000/pyq",
        type: "GET",
        data: {
          num: this.num
        },
        success(data) {
          var data3 = JSON.parse(data);
          // console.log(data);
          self.total = self.total.concat(data3.datas);
          self.user = self.user.concat(data3.feng);
        }
      });
    }
  },
  mounted() {
    this.shuju3();
  },
  components: {
    appHome2,
    AppHome
  }
};
</script>

<style scoped lang='scss'>
*{
    margin:0rem;
    padding:0rem;
}
li {
  list-style: none;
}
li {
  display: flex;
  border-bottom: .0625rem solid #d7d7d7;
  padding: 0.625rem .9375rem 0.4375rem .9375rem;
  .box-left {
    width: 7.5rem;
    img {
      border-radius: 0.3125rem;
      width: 7.5rem;
    }
  }
  .box-right{
      padding-left:.625rem;
      width:100%;
      h3{
        font-size: 1remx;
        color: #414141;
      }
      .box-right-info{
          width:100%;
          display: flex;
          justify-content: space-between;
      }
      .topic {
        color: #bd0509;
    }
    .commcount {
        vertical-align:bottom;
        background: url(http://i.guancha.cn/icons/x_comment_16.png) no-repeat;
        background-size: .875rem auto;
        display: inline-block;
        padding-left: 1.125rem;
        color: #9b9b9b;
    }
  }
}
.active {
  border-bottom: 0.0625rem solid #bd0509 !important;
}
.index-fengwen-comment {
  a {
    color: #999999;
  }
}
.index-fengwen-post {
  a {
    font-size: 1.125rem;
    font-weight: bold;
    color: #333333;
    font-size: 1.125rem;
  }

  span {
    font-size: 1rem;
    font-weight: normal;
    color: #656565;
    margin-top: 0.5rem;
  }
}
.index-fengwen-box {
  margin: 0rem 0.75rem;
  border-bottom: 0.0625rem solid #ccc;
  padding-bottom: 0.625rem;
}
.space {
  height: 2.5rem;
}
.bigbox {
  z-index: -1000;
  margin-top: 5.625rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  .index-fengwen-title {
    display: flex;
    margin: 0rem 1.125rem 0rem 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #bd0509;
    justify-content: space-between;
    a {
      height: 1.5625rem;
      color: #bd0509;
      font-size: 1rem;
    }
  }
}
.user {
  display: flex;
  margin: 0.625rem 0;
  min-height: 2.8125rem;
  .user_img {
    width: 2.8125rem;

    img {
      width: 2.8125rem;
      height: 2.8125rem;
      border-radius: 50%;
      vertical-align: text-top;
    }
  }
  .user_name {
    padding-left: 0.625rem;
    font-size: 1rem;
    a {
      color: black;
    }
    span {
      display: block;
      font-size: 1rem;
      color: #999999;
    }
  }
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
