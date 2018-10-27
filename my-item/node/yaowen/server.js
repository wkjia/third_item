var express = require('express');
var app = express();
var request = require('request');
//专门处理post请求
var bodyParser = require('body-parser');
//引入自定义模块
var mongodb = require('./mongodb_con.js')



//路由(默认数据) 通过request请求数据
app.get('/index', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var page = req.query.num

    yaowen()
    function yaowen() {
        request('https://api.guancha.cn/Appdata/NewsList?newstype=1&isline=0&size=20&type=1&id=homepage&page=' + page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})

//路由2(时评路由) 通过request请求数据
app.get('/spg', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    // console.log(Page)
    shiping()
    function shiping() {
        request('https://api.guancha.cn/Appdata/newslist.json?id=homepage&newstype=2&page=' + Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})

//路由(朋友圈) 通过request请求数据
app.get('/pyq', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    // console.log(Page)
    shiping()
    function shiping() {
        request('https://api.guancha.cn/Appdata/newslist.json?id=homepage&newstype=3&page=' + Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})

//路由（风闻 发布） 通过request请求数据
app.get('/fengwen', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    // console.log(Page)
    fengwen()
    function fengwen() {
        request('https://app.guancha.cn/main/get-index-list?order=2&page_no=' + Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})

//路由（风闻 专栏文章） 通过request请求数据
app.get('/fengwen2', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    // console.log(999)
    fengwen()
    function fengwen() {
        request('https://app.guancha.cn/main/get-index-list?order=5&page_no=' + Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})


//路由（风闻 回复） 通过request请求数据
app.get('/fengwen3', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var Page = req.query.num
    fengwen()
    function fengwen() {
        request('https://app.guancha.cn/main/get-index-list?order=1&page_no=' + Page, function (error, response, body) {
            // console.log(body)
            res.send(body)
        })
    }
})

//路由 （热点） 通过request请求数据
app.get('/hot', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var num = req.query.num;
    var page = req.query.page;
    fengwen()
    function fengwen() {
        console.log('page'+page)
        if (page == 0) {
            request('https://app.guancha.cn/main/get-index-list?order=3&page_no=' + num, function (error, response, body) {
                console.log('hot0')
                res.send(body)
            })
        };
        if (page == 1) {
            request('https://app.guancha.cn/main/get-index-list?order=6&page_no=' + num, function (error, response, body) {
                console.log('hot1')
                res.send(body)
            })
        };
        if (page == 2) {
            request('https://app.guancha.cn/main/get-index-list?order=7&page_no=' + num, function (error, response, body) {
                console.log('hot2')
                res.send(body)
            })
        };
        if (page == 3) {
            request('https://app.guancha.cn/main/get-index-list?order=8&page_no=' + num, function (error, response, body) {
                console.log('hot3')
                res.send(body)
            })
        };

    };
})

//注册登录

    //mongodb的路由  操作mongobd数据库（进行增删查改）
    //专门处理post请求的
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//路由（注册）
app.post('/register', function (req, res) {
	//跨域
    res.append("Access-Control-Allow-Origin", "*");
    var username = req.body.username;
    var number = req.body.number;
    var password = req.body.password;

    mongodb.select('sign_data',[{'username':username,'number':number}],function(docs){
        console.log(666)
        console.log(docs)
        console.log(docs.length)
        if(docs.length > 0){
            res.send('用户名已存在')
            return
        }
        if(docs.length == 0 ){
            mongodb.increase('sign_data',[{'username':username,'number':number,'password':password}],function(err, result){
                if (err) {
                    console.log('Error:' + err);
                   res. send('fail')
                    return;
                  }else {
                      console.log('hahaha')
                     res. send('successful')
                  }
                  
            })
        }
    })

})

//路由（登录）
app.post('/login', function (req, res) {
	//跨域
    res.append("Access-Control-Allow-Origin", "*");
    var username = req.body.username;
    var number = req.body.number;
    var password = req.body.password;

    mongodb.select('sign_data',[{'用户名':username,'手机号码':number,'密码':password}],function(result){
        if(result.username ==''){
            send('此用户不存在')
        }
        else if(result.number == ''){
            send('此手机号码未注册')
        };
        if(result.username !='' && result.number != ''){
            send('successful')
        }
    })

})



//监听端口
app.listen(3000);