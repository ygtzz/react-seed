import React,{Component} from 'react';
import {PropTypes} from 'mobx-react';
import './category.css';

class Category extends Component{
	static propTypes = {
		type:React.PropTypes.string.isRequired,
		aCate:PropTypes.observableArray.isRequired
	};
	render() {
		const type = this.props.type;
		const aCate = this.props.aCate || [];
		const aCateHtml = aCate.map(function(c,index) {
			const sLiClass = c.active ? 'active' : '';
			const sHref = '/#' + type + '/' + c.id;
			return (
				<li key={'cate' + index} className={sLiClass}>
  					<a href={sHref} className="category">{ c.name }</a>
				</li>
			);
		});

		return (
			<ul className="unstyled clearfix sort-nav" id="list-container">
    			{aCateHtml}
			</ul>
		);
	}
}

export default Category;