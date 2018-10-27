const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'third_item_code';

//增
function increase(tablename, params,callback) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        //增
        db.collection(tablename).insertMany(params, function (err, result) {
            // assert.equal(err, null);
            // assert.equal(3, result.result.n);
            // assert.equal(3, result.ops.length);
            console.log(result);
            callback(err,result);
        });
        //关闭数据库
        client.close();
    });
}

//查
function select(tablename, params, callback) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        //查
        db.collection(tablename).find({'$or':params}).toArray(function (err, docs) {
            assert.equal(null, err);
            console.log("Found the following records");
            callback(docs)
        });
        //关闭数据库
        client.close();
    });
}

//改
function update(tablename, original, target, callback) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        //改
        db.collection(tablename).updateOne(original
            , { $set: target }, function (err, result) {
                console.log("Updated the document with the field a equal to 2");
                callback(result)
            });
        //关闭数据库
        client.close();
    });
}


//删
function remove(tablename,target, callback) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        //刪
        db.collection(tablename).deleteOne(target, function (err, result) {
            console.log("Removed the document with the field a equal to 3");
            callback(result)
        });
        //关闭数据库
        client.close();
    });
}

//导出方法
module.exports = {
    increase: increase,
    select:select,
    update:update,
    remove:remove

}


