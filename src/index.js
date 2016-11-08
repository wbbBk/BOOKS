import { createClass } from 'react';

import { render } from 'react-dom';

import { 
	Router, //路由组件
	Route,  //路由路径组件
	hashHistory,  //监听地址变化 主要监听 hash 变化
	IndexRoute
} from 'react-router';

import { Layout } from './Layout';
import { CataContent } from './page/catacontent';

const auto = createClass({
	render : function(){
		return <div>click</div>
	}
})

window.onload = function(){
	render (
		<Router history={ hashHistory }>
			<Route path='/' component={ Layout }>
				<IndexRoute component={ auto }/>
				<Route path='/cata/content/:id' component={ CataContent }/>
			</Route>
		</Router>,
		document.getElementById('list')
	)
}