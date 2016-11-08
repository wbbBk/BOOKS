import { Component , cloneElement} from 'react';

import { CataList } from './page/catalist';

class Layout extends Component{
	render(){
		const content = cloneElement(this.props.children);
		return (
			<div>
				<div className="catalist">
					<CataList/>
				</div>
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		)
	}
}

export { Layout }