const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'third_item_code';


    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        //增
        db.collection('sign_data').insertMany('sign_data',[{'用户名':'','手机号码':'','密码':''}],function (err, result) {
            // assert.equal(err, null);
            // assert.equal(3, result.result.n);
            // assert.equal(3, result.ops.length);
            console.log(result);
            // callback(result);
        });
        //关闭数据库
        client.close();
    });