import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
// import Trend from './widget/trend/trend';
// import Article from './widget/article/article';
import store from './redux/store';

const history = syncHistoryWithStore(hashHistory, store);

class App extends Component {
	render() {
		return (
			<div>
				{this.props.children || 'app'}
			</div>
		);
	}
}

ReactDom.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="/:type/:cate"
						getComponent={(location, callback) => {
						require.ensure([], require => {
							callback(null, require('./widget/trend/trend'))
						}, 'trend')
				} } />
				<Route path="/p/:id"
					   getComponent={(location, callback) => {
						require.ensure([], require => {
							callback(null, require('./widget/article/article'))
						}, 'article')
				} } />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);

location.hash = '/hot/now';