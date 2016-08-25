import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Router,Route,IndexRoute,IndexRedirect,hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import Trend from 'trend/trend';
import Article from 'article/article';
import store from 'store';

const history = syncHistoryWithStore(hashHistory,store);

class App extends Component{
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

ReactDom.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="/p/:id" component={Article}/>
				<Route path="/:type/:cate" component={Trend}/>
			</Route>
		</Router>
  	</Provider>,
  	document.getElementById('app')
);

location.hash = '/hot/now';