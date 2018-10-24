<template>
    <div class="top-menu">
              <div class="top-menu-list">
                <a  @click='yanse(e)' :class="{'w_active':i.routes==transfrom}" href="javascript:void(0)" v-for='(i,e) in arr' :key="e" v-text="i.type"></a>
            </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      isShow: false,
      word: false,
      page: 0,
      router:this.$route.path,
      current_router:'',
      arr: [
        {
          type: "要闻",
          badge: 8,
          routes:'/'
        },
        {
          type: "时评",
          badge: 0,
          routes:'/shiping'
        },
        {
          type: "朋友圈",
          badge: 0,
          routes:'/pyq'

        },
        {
          type: "风闻",
          badge: 0,
          routes:'/fengwen'
        },
        {
          type: "视频",
          badge: 0,
          routes:'/shipin'
        },
        {
          type: "滚动",
          badge: 0,
          routes:'/gundong'
        }
      ]
    };
  },
  methods: {
    yanse: function(e) {
      this.page = e;
      // window.sessionStorage.setItem('e',e)
      // this.page = window.sessionStorage.getItem('e')
      // console.log(this.page)
      switch (e) {
        case 0:
          location.href = "#/";
          break;
        case 1:
          location.href = "#/shiping";
          break;
        case 2:
          location.href = "#/pyq";
          break;
        case 3:
          location.href = "#/fengwen";
          break;
        case 4:
          location.href = "#/shipin";
          break;
        case 5:
          location.href = "#/gundong";
          break;
      }
    }
  },
  computed:{
    transfrom:function(){
      return this.current_router=this.$route.path
    }
  }
 
};
</script>

<style lang='scss' scoped>
.w_active {
  color: #bd0509 !important;
}
.top-menu {
  background-color: #efefef;
  border-bottom: 0.0625rem solid #ccc;
  height: 2.5rem;
  overflow: hidden;
  .top-menu-list {
    display: flex;
    // flex-direction: column;
    padding-top: 0.3125rem;
    text-align: center;
    a {
      flex: 1;
      display: inline-block;
      color: #333;
      font-size: 1.125rem;
    }
  }
}
.top-menu{
  position: fixed;
  top:3.125rem;
  left: 0rem;
  right:0rem;
}
</style>
