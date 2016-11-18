var express = require("express");

var app = express();

app.use(express.static("www"));

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

var cookieParser = require("cookie-parser");

var template = require("art-template");

var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/paimo");


mongoose.connection
.on("open",function(){
	console.log("数据库连接成功");
})
.on("error",function(){
	console.log("数据库连接失败");
});

var userSchema = mongoose.Schema({
	username:String,
	password:String,
	mail:String,
	tel:String,
	tiken:String
});
var User = mongoose.model("User",userSchema);



//注册接口
app.post("/regist",function(req,res){
	
	console.log(req.body)
	
	User.find({username:req.body.username})
	.count()
	.exec(function(err,data){
		if (data>0){
			res.send({err:1,msg:"该用户名已被占用"});
		}else{
			var u = new User({
				username:req.body.username,
				password:req.body.password,
				mail:String,
				tel:String,
				token:String
			});
			
			u.save(function(err){
				if(err){
					res.send({err:2,msg:"注册失败"});
				}else{
					res.send({err:0,msg:"注册成功"});
				}
			});
		}
	});
});


//随机生成token
//生成token的函数
	function makeToken () {
		var sourceStr = '1234567890qwertyuiopasdfghjklzxcvbnm';
		var token = '';
		for (var i = 0;i<10;i++) {
			token += sourceStr[Math.floor(Math.random()*37)]
		}
		return token
	}


//登录接口

app.post('/login',function (req,res) {
	User.find({username:req.body.username})
	.exec(function(err,data) {
		if (data) {
			if (data[0].password == req.body.password){
				var token = makeToken();
				data[0].token = token;
				data[0].save(function() {
					res.cookie('token',token);
					res.cookie("username",req.body.username)
					res.send({err:0,msg:'登录成功'})
				})
			}
			else{
				res.send({err:1,msg:'账号或密码错误'})
			}
		} 
		else{
			res.send({err:2,msg:"用户名不存在"})	
		}
	})
})




app.get("/",function (req,res) {
	
	res.rend("index");
	
})



app.listen(8080,function(){
	console.log("服务器已开启");
});


