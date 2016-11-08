// 引入express模块
import express from "express";

import Swig from "swig";

import path from 'path';

import { Main } from './router/book_router';

Swig.setDefaults({
	cache : false
});

// 实例化express
const app = express();

new Main(app);

// 搭建路由 app.get请求
app.get('/',(req,res)=>{
	res.render('index');
	/*books.getBookContent(option,(error,data)=>{
		res.send(data);
	});*/
})



// 'html'设置文件后缀的解释器	 
// Swig.renderFile 配置 render 输出的文件的解释器，编译
// 由app.get中的render决定,默认Swig.renderFile
app.engine('html',Swig.renderFile);
//设置 页面的后缀  配置 render 输出文件的默认后缀
app.set('view engine','html');
//设置 页面的 跟目录  配置 render 输出文件的 根目录
app.set('views',path.join(__dirname,'../views'));
// 把一个静态文件当做服务器
// 可以直接从浏览器请求这个文件
app.use(express.static(path.join(__dirname,'../output')));

app.listen(3000,function(){
	console.log('欢迎127.0.0.1:3000');
})
