import { Component } from 'react';
import { Link } from 'react-router';
class CataList extends Component{
	constructor(){
		// 构造器自带的方法
		super();
		this.state = {
			list : []
		}
		
	}
	handleClick(e) {
    	console.log(this);
 	}
	componentDidMount(){
		const that = this;
		/*setTimeout(function(){
			that.setState({
				list : [
				{
					name : "java"
				},{
					name : "html"
				}
			]
			});
		},2000);*/
		$.get('/cata/list',{},function(res){
			//console.log(res);
			if(res['reason']=='success'){
				//console.log(res.result);
				that.setState({
					list : res.result
				})
			}
		},'json');
		
	}
	render(){
		//console.log(this.Constructor);
		//const list = [{name:'1'},{name:'2'}];
		let html = (<ul>
				{
					this.state.list.map((item,i)=>{
						let to={
							pathname:`/cata/content/${item.id}`,
							query : {
								id:item.id
							}
						}
						return (
							<li key={`li-${i}`} data-id={ item.id }>
								<Link to={to}>{ item.catalog }</Link>
							</li>
						)
					})
				}
			</ul>);
		return html;
	}
}

export { CataList };