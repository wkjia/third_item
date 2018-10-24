<template>
    <div id="bigbox">
        <ul>
            <li v-if="n.type=='滚动'" v-for="(n,index) in total" :key="index" :class="{headline:n.type=='滚动','big-pic':n.type=='要闻'}">
                <a :href="'https://m.guancha.cn/'+n.mobile_url">
                    <img class="long-img" :src="n.pic">
                    <h3 v-text='n.title'></h3>
                </a>
            </li>
        </ul>
        <ul id="list2">
            <li v-if="n.type!='滚动'" v-for="(n,index) in total" :key="index" :class="{headline:n.type=='滚动','big-pic':n.type=='要闻'}">
                
                <div class="box-left">
                    <a :href="'https://m.guancha.cn/'+n.mobile_url"><img :src="n.pic"></a>
                </div>
                <div class="box-right">
                    <a :href="n.mobile_url" style="display:block;height:3.75rem">
                        <h3 v-text='n.title'></h3>
                    </a>
                    <div class="box-right-info">
                        <span class="commcount"  v-text='n.comments'></span>
                        <a href=""><span class="topic" v-text="n.special[0]['name']"></span></a>
                    </div>
                </div>
            </li>
        </ul>
        <div class="loadMore" style="display: block;">
		      <a @click="shuju1" href="javascript:;">点击加载更多</a>
		    </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  data: function() {
    return {
      num: 0,
      total:[]
    };
  },
  methods: {
    shuju1: function() {
      var self = this;
      self.num++;
      $.ajax({
        url: "http://localhost:3000/index",
        type: "GET",
        data: {
          num: this.num
        },
        success(data) {
          var data1 = JSON.parse(data);
          // console.log(data1);
          self.total = self.total.concat( data1.datas);
        }
      });
    }
  },
  mounted() {
    this.shuju1();
  }
};
</script>

<style scoped lang='scss'>
li {
  list-style: none;
}
.space {
  height: 2.8125rem;
  width: 100%;
  background: #000;
}
ul {
  display: flex;
  flex-direction: column;
  padding: 0rem 0.9375rem;
  li {
    border-bottom: 0.0625rem solid #d7d7d7;
    padding-left: 5%;
    // padding: .625rem 0rem .4375rem 0rem;
  }
  .headline {
    padding-top: 0rem;
    // height: 5.25rem;
    h3 {
      background: url(http://i.guancha.cn/icons/x_ic_yaowen_title_32.png)
        no-repeat;
      background-size: 1rem 1rem;
      padding-left: 1.25rem;
    }
  }
  .long-img {
    width: 90%;
    height: 8.75rem;
    margin: 0.625rem 0rem;
  }
  h3 {
    font-size: 1rem;
    color: #414141;
  }
}
#bigbox {
  margin-top: 5.625rem;
}
#list2 {
  li {
    display: flex;
    h3 {
      font-size: 16px;
      color: #414141;
    }
  }
}
.box-left {
  padding: 0.625rem 0rem;
  // width:1.875rem;
  // flex:1;
}
.box-right {
  flex: 1/3;
  overflow: hidden;
  padding-left: 0.9375rem;
  // width:12.75rem;
  h3 {
    width: 100%;
  }
  .box-right-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.9375rem;
    .commcount {
      background: url(http://i.guancha.cn/icons/x_comment_16.png) no-repeat;
      background-size: 14px auto;
      display: inline-block;
      padding-left: 18px;
      vertical-align: center;
    }
    .topic {
      color: #bd0509;
    }
  }
}
.big-pic img {
  border-radius: 0.3125rem;
  width: 7.5rem;
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
