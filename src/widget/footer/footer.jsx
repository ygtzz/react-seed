import React,{Component} from 'react';

require('./footer.css');

class Footer extends Component{
	render() {
		return (
			<div className="footer">
    			仅供学习webpack与reactjs使用，设计与内容版权归简书所有。
			</div>
		);
	}
}

export default Footer;