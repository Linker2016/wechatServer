var express = require('express');
var crypto = require("crypto");
var bodyParser = require('body-parser');
var app = express();
var sign = require('./signature');  //<span style="color:#cc6600;">请求页面的服务 必要的</span>
var WXCFG = {};
const upload = require('multer')({ dest: 'uploads/' });
const path = require('path');
var MULTIPARTY = require('multiparty');
var fs = require('fs');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('img'));
app.use(express.static('uploads'));
app.use(express.static('MP_verify_1ZWwRu5ocn8OrtUi.txt'));

//
//sign.sign("http://xatrm.iptrm.com/?from=singlemessage",function(data){
//	WXCFG = data;
//	WXCFG.status = 200;
//});
//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.sendFile( __dirname + "/" + "index.html" );
})


//  POST 请求
app.post('/gettickite', function (req, res) {
    console.log("获取用户票据");
    console.log(req.body.url);
    sign.sign(req.body.url,function(data){
        WXCFG = data;
        WXCFG.status = 200;
    });
    res.send(WXCFG);
})


//  文件上传POST 请求
app.post('/upload', upload.single('test-upload'), function(req, res){
        // 没有附带文件
    console.log(req);
    console.log(req.toString());
        if (!req) {
            res.json({ ok: false });
            return;
        }

    // 输出文件信息
    // 接收前台POST过来的base64
    var imgData = req.body.imgData;
    //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    var newUrl = 'uploads/' + new Date().getTime().toString()+'.jpg';
    fs.writeFile(newUrl, dataBuffer, function(err) {
        if (err) {
            res.json({ ok: false });
            console.log(err);
        } else {
            var url = "http://xatrm.iptrm.com/"+newUrl.replace("uploads/","");
            console.log(url);
            res.json({ url: url });
        }
    });

    // 重命名文件
    //let oldPath = path.join(__dirname, req.file.path);
    //var newName = new Date().getTime().toString()+'.'+req.file.originalname.split(".").pop();
    //let newPath = path.join(__dirname, 'uploads/' + newName);
    //fs.rename(oldPath, newPath, function(err){
    //    if (err) {
    //        res.json({ ok: false });
    //        console.log(err);
    //    } else {
    //        var url = "http://xatrm.iptrm.com/"+newName;
    //        console.log(url);
    //        res.json({ url: url });
    //    }
    //});
});

//  /MP_verify_1ZWwRu5ocn8OrtUi.txt 页面响应
app.get('/MP_verify_1ZWwRu5ocn8OrtUi.txt', function (req, res) {
    console.log("/MP_verify_1ZWwRu5ocn8OrtUi.txt 响应 请求");
    res.sendFile( __dirname + "/" + "MP_verify_1ZWwRu5ocn8OrtUi.txt" );
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

//  /tokenCheck 页面 GET 请求
app.get('/tokenCheck', function (req, res) {
    console.log("/tokenCheck GET 请求");
    var echostr, nonce, signature, timestamp;
    signature = req.query.signature;
    timestamp = req.query.timestamp;
    nonce = req.query.nonce;
    echostr = req.query.echostr;
    if(check(timestamp,nonce,signature,"asdasdasd")){
        return res.send(echostr);
    }else{
        return res.end();
    }
})

//  /tokenCheck 页面 POST 请求
app.post('/tokenCheck', function (req, res) {
    console.log("/tokenCheck POST 请求");
    var echostr, nonce, signature, timestamp;
    signature = req.query.signature;
    timestamp = req.query.timestamp;
    nonce = req.query.nonce;
    echostr = req.query.echostr;
    if(check(timestamp,nonce,signature,"asdasdasd")){
        return res.send(echostr);
    }else{
        return res.end();
    }
})

function check(timestamp, nonce, signature ,token) {
    var currSign, tmp;
    tmp = [token, timestamp, nonce].sort().join("");
    currSign = crypto.createHash("sha1").update(tmp).digest("hex");
    return currSign === signature;
};

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})


var server = app.listen(8088, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})