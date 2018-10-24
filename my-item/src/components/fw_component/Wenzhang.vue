<template>
    <div class="fa_box">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <mu-container ref="container" class="demo-loadmore-content">
                    <mu-load-more  :loading="loading3" @load="load">
                        <!-- <mu-list>
                            <mu-list-item-title>{{text}} Item {{i}}</mu-list-item-title>
                        </mu-list> -->
                        <ul class="list1">
                            <li v-for='(n,m) in total' :key="m">
                                <!-- user-box -->
                                <div class="user-box user-info-box clearfix">
                                    <div class="user-avatar popup-user list-avatar" :user-id="n.user_id">
                                        <img :src="n.user_photo">
                                    </div>
                                    <div class="user-main list-user-main">
                                        <h4 class="clearfix">
                                            <a :href="'https://user.guancha.cn/user/personal-homepage?uid='+n.user_id" target="_blank" v-text='n.user_nick'></a>
                                            <p class="desc" v-text="n.user_description"></p>
                                        </h4>
                                        <!-- <span class="top">置顶</span> -->
                                        <span class="time" v-text='n.created_at'></span>
                                    </div>
                                </div>
                                <!-- ./ user-box -->
                                
                                <!-- list-item -->
                                <div class="list-item">
                                    <h4><a :href="'https://user.guancha.cn/main/content?id='+n.id+'&amp;s=fwzxfbbt'" target="_blank" v-text="n.title"></a></h4>
                                    <div class="item-info">
                                        <div class="item-pic">
                                            <a :href="'https://user.guancha.cn/main/content?id='+n.user_id+'&amp;s=fwzxfbbt'" target="_blank">
                                                <img class="xiaotu" :src="n.pic">
                                            </a>
                                        </div>                            
                                        <div class="item-content" v-text="n.summary"></div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <!-- ./ list-item -->
                                <!-- op-tools -->
                                <div class="op-tools">
                                    <ul class="clearfix">
                                        <li>
                                            <a href="javascript:;">
                                                点击<span></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a :href="'https://user.guancha.cn/main/content?id='+n.user_id+'&amp;s=fwzxfbbt'" class="comment" data-type="2" :data-id="n.id" target="_blank">评论 <span>3</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" :data-id="n.id" class="praise  ">赞 <span></span></a>
                                        </li>
                                        <li>
                                            <a :href="'https://user.guancha.cn/topic/attention-topic?follow-topic-id='+n.topics[0].topic_id" style="color:#ce3d3a;" target="_blank" class="topic_tag" v-text="n.topics[0].topic_name"></a>
                                        </li>
                                    </ul>
                                    <!-- <span class="time" v-text="n.pass_at"></span> -->
                                    <div class="clear"></div>
                                </div>
                                <div class="dibu"></div>
                            </li>
                        </ul>
                    </mu-load-more>
            </mu-container>
        </mu-paper>
    </div>
</template>

<script>
import $ from "jquery";
export default {
  data: function() {
    return {
      //页面渲染
      total: [],
      qita: 2,
      page: 0,
      num: 0,
      //下拉刷新
      loading3: false,
      text: "List"
    };
  },
  methods: {
    // 发起ajax，请求后端数据
    query(page) {
      if (page === 2 || this.qita === 2) {
        var self = this;
        self.num++;
        $.ajax({
          url: "http://localhost:3000/fengwen2",
          type: "GET",
          data: {
            num: this.num
          },
          success(data) {
            var data6 = JSON.parse(data);
            console.log(data6);
            self.total = self.total.concat(data6.data.items);
            // console.log(self.total)
          }
        });
      }
    },
    //下拉刷新
    load() {
      this.loading3 = true;
      console.log(this.page);
      setTimeout(() => {
        if (this.page === 2 || this.qita === 2) {
          console.log(this.page);
          var self = this;
          self.num++;
          $.ajax({
            url: "http://localhost:3000/fengwen2",
            type: "GET",
            data: {
              num: this.num
            },
            success(data) {
              var data6 = JSON.parse(data);
              console.log(data6);
              self.total = self.total.concat(data6.data.items);
              // console.log(self.total)
            }
          });
        }

        this.loading3 = false;
      }, 2000);
    }
  },

  mounted() {
    this.query(this.page);
    this.page = sessionStorage.getItem("index");
    console.log(this.page);
  }
};
</script>

<style lang='scss' scoped>
    //下拉刷新
.demo-loadmore-wrap {
    width: 100%;
}
.demo-loadmore-content {
    display: flex;
    justify-content: column;
    width:100%;
}
//公共样式
*{
    margin:0rem;
    padding:0rem;
}
li{
    list-style:none;
}
a{
    text-decoration: none;
}

//页面布局
.fa_box{
    .list1>li{
         display: flex;
         flex-direction:column; 
         padding-top:.9375rem;
         .user-box{
             display: flex;
             position: relative;
             h4{
                 display: flex;
             }
             .top{
                 position: absolute;
                 top:0rem;
                 right: 1.5rem;
                 float: right;
                font-size: 12px;
                padding: 0px 5px;
                border: 1px solid #ce3d3a;
                color: #ce3d3a;
                border-radius: 4px;
                font-style: normal;
                line-height: 20px;
             }
             .time{
                 font-size: 12px !important;
             }
         }      
        .list-avatar {
            width: 2rem !important;
            height: 2rem !important; 
            img{ 
                width: 2rem !important;
                height: 2rem !important;
                position: relative;
                top: .3125rem;
            }
        }
    }
}
.list-item {
    margin-top: 12px;
    h4{
        font-size: 16px;
        color: #343434;
        a{
            font-size: 16px;
            color: #343434;
        }
    }
}
.item-info {
    margin-top: 12px;
    .item-pic {
        margin-right: 10px !important;
        a{
            color: #343434;
            img{
                border-radius: 4px !important;
            }
        }
    }
}
.item-pic {
    margin-right: 10px !important;
    float:left;
    img{
        border-radius: 4px !important;
    }
}
.list-user-main {
    margin-left: .625rem !important;
    width:100%;
    a{
        font-size: 14px;
        color: #656565;
        padding-right:.625rem;
    }
    .desc{
        font-size: 12px;
        color: #999;
        font-weight: normal;
        max-width: 150px !important;
        overflow: hidden !important;
        height: 26px !important;
        text-overflow: ellipsis !important;
        word-break: keep-all !important;
        white-space: nowrap !important;
    }

}
.op-tools{
    margin-top: 12px;
    ul{
        display: flex;
        li{
            margin-right: 20px;
            font-size: 14px;
            padding:0rem .625rem;
            a{
                color: #343434;
            }
        }
    }
}
.dibu{
    height:.5rem;
    background:#F2F2F2;
    margin-top: 1.25rem;
}
.xiaotu{
    width:9.1875rem;
    // height:6.875rem;
}
</style>
