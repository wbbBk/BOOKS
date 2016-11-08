import { Component } from 'react';

import crypto from 'crypto';

function md5(data){
	let buffer = require('buffer').Buffer;
	let buf = new Buffer(data);
	let str = buf.toString('binary');
	return 'md5_'+crypto.createHash('md5').update(str).digest('hex');
}
window.md5123 = md5;
class CataContent extends Component{
	constructor(){
		// 构造器自带的方法
		super();
		this.state = {}
	}
	getData(key){
		console.log(key)
		let { location } = this.props;
		let { query } = location;
		const that = this;
		console.log(query);
		$.get('/cata/content',query,function(result){
			alert(1);
			let data = {};
			data[key] = result.result.data
			that.setState(data);
		},'json');
	}
	/*componentDidMount(){
		let { location } = this.props;
		let { query } = location;
		//let { id } = query;
		const that = this;
		console.log(query)
		$.get('/cata/content',query,function(res){
			console.log(res);
			if(res['reason']=='success'){
				that.state = {
					list : res.result.data
				}
			}
		},'json');
	}*/
	/*render(){
		//console.log(location);
		return (
			<ul>
				{this.state.list.map((item,i)=>{
					return (<li key={`li-${i}`}>
						<p>{ item.catalog }</p>
						<p>{ item.bytime }</p>
						<img src={ item.img } />
					</li>)
				})}
			</ul>
		)
	}*/
	render(){
		let { location } = this.props;
		console.log(this.props)
		//获取的地址栏中传入过来的参数
		let { id } = location.query; // 地址上的 id 值
		let key = md5(id); //把 id 加密，md5 加密
		let list = this.state[key] || []; //根据加密有得到的 id 去获取数据
		if(list.length < 1){
			//通过 ajax 获取数据
			this.getData(key);
		}
		let html = (<ul>
			{
				list.map((item,i)=>{
					let li = (<li key={ `content-${i}` }>
						<img src={ item.img }/>
						<p>{ item.catalog }</p>
						<p>{ item.bytime }</p>
					</li>);
					return li;
				})
			}
		</ul>);
		return html;
	}
}

export { CataContent };