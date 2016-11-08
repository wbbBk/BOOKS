"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _swig = require("swig");

var _swig2 = _interopRequireDefault(_swig);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _book_router = require("./router/book_router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入express模块
_swig2.default.setDefaults({
	cache: false
});

// 实例化express
var app = (0, _express2.default)();

new _book_router.Main(app);

// 搭建路由 app.get请求
app.get('/', function (req, res) {
	res.render('index');
	/*books.getBookContent(option,(error,data)=>{
 	res.send(data);
 });*/
});

// 'html'设置文件后缀的解释器	 
// Swig.renderFile 配置 render 输出的文件的解释器，编译
// 由app.get中的render决定,默认Swig.renderFile
app.engine('html', _swig2.default.renderFile);
//设置 页面的后缀  配置 render 输出文件的默认后缀
app.set('view engine', 'html');
//设置 页面的 跟目录  配置 render 输出文件的 根目录
app.set('views', _path2.default.join(__dirname, '../views'));
// 把一个静态文件当做服务器
// 可以直接从浏览器请求这个文件
app.use(_express2.default.static(_path2.default.join(__dirname, '../output')));

app.listen(3000, function () {
	console.log('欢迎127.0.0.1:3000');
});