<template>
    <div class="g_box">
        <div class="g_title">
            <span>没有更多数据了</span>
        </div>
        <div class="bottom">
            <div class="footer">
                <div class="wrapper clearfix">
                    <ul class="clearfix">
                        <li><a href="http://www.guancha.cn/about/ManuscriptDelivery.shtml" target="_blank">联系我们 </a></li>
                        <li><a href="http://www.guancha.cn/about/about.shtml" target="_blank">关于我们 </a></li>
                        <li><a href="http://www.guancha.cn/about/Copyright.shtml" target="_blank">版权声明 </a></li>
                        <li><a href="http://www.guancha.cn/about/TermsOfService.shtml" target="_blank">服务条款 </a></li>
                        <li><a href="http://www.guancha.cn/about/Advertise.shtml" target="_blank">刊登广告 </a></li>
                        <li><a href="http://weibo.com/newoutlook" target="_blank">联系微博</a></li>
                        <li><a href="http://www.guancha.cn/life/2012_09_05_74361.shtml" target="_blank">加入我们</a></li>
                        <li><a href="http://www.guancha.cn/about/sitemap.shtml" target="_blank">网站地图</a></li>
                        <li><a href="http://www.guancha.cn/broken-news/2017_03_28_400912_3.shtml" target="_blank">举报制度规范</a></li>
                        <li><a href="http://www.guancha.cn/life/2018_02_11_446706.shtml" target="_blank">《网站自律管理承诺书》</a></li>
                    </ul>
                    <p>
                        Copyright © 2018 观察者 All rights reserved。<br>沪ICP备10213822号  互联网新闻信息服务许可证：31220170001 &nbsp;&nbsp;违法及不良信息举报电话：021-62376571<br><br>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>


export default {
  
};
</script>

<style lang='scss' scoped>


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
html,
body {
  height: 100%;
  width: 100%;
}
body {
  background: #f2f2f2 !important;
}
.g_title {
  height: 3.125rem !important;
  background: white !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  font-weight: bold !important;
  font-size: 1rem !important;
  color: #625f66 !important;
}
.footer {
  background: #f2f2f2 !important;
  .wrapper {
    width: 100% !important;
    ul {
      padding-top: 2rem !important;
      display: flex;
      flex-wrap: wrap;
      li {
        margin-left: 1.25rem;
        a {
          font-size: 0.75rem;
          color: black;
        }
      }
    }
    p {
      display: flex;
      flex-direction: column;
      padding: 1.25rem !important;
      justify-content: center;
      margin-top: 0.625rem;
      text-align: center;
      font-size: 0.75rem;
      color: #656565;
    }
  }
}
</style>
