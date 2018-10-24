var express = require('express');
var app = express();
var request = require('request');

//路由(默认数据)
app.get('/index', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var page = req.query.num
    
    yaowen()
    function yaowen() {
        request('https://api.guancha.cn/Appdata/NewsList?newstype=1&isline=0&size=20&type=1&id=homepage&page='+page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})

//路由2(时评路由)
app.get('/spg', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    // console.log(Page)
    shiping()
    function shiping() {
        request('https://api.guancha.cn/Appdata/newslist.json?id=homepage&newstype=2&page='+Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})

//路由(朋友圈)
app.get('/pyq', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    console.log(Page)
    shiping()
    function shiping() {
        request('https://api.guancha.cn/Appdata/newslist.json?id=homepage&newstype=3&page='+Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})

//路由（风闻 发布）
app.get('/fengwen', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    console.log(Page)
    fengwen()
    function fengwen() {
        request('https://app.guancha.cn/main/get-index-list?order=2&page_no='+Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})

//路由（风闻 专栏文章）
app.get('/fengwen2', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    console.log(999)
    fengwen()
    function fengwen() {
        request('https://app.guancha.cn/main/get-index-list?order=5&page_no='+Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})


//路由（风闻 回复）
app.get('/fengwen3', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    console.log(999)
    fengwen()
    function fengwen() {
        request('https://app.guancha.cn/main/get-index-list?order=1&page_no='+Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})




//监听端口
app.listen(3000);