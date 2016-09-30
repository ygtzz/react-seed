import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Router,Route,IndexRoute,IndexRedirect,hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

class Home extends Component{
	render() {
		return (
				<p>FIS ReactJS 简书DEMO</p>
		);
	}
}

ReactDom.render(
		<Home />,
		document.getElementById('app')
);