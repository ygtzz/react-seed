import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';
import articleStore from './mobx/stores/articleStore';
import trendStore from './mobx/stores/trendStore';
import 'static/css/site.css';

const stores = {trendStore,articleStore};

class App extends Component {
	render() {
		return (
			<div>
				{this.props.default}
			</div>
		);
	}
}

ReactDom.render(
	<Provider {...stores}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
			   <IndexRedirect to="/notes/all" />
			   <Route path="p/:id"
					   getComponent={(location, callback) => {
						require.ensure([], require => {
							callback(null, require('./widget/article/article'))
						}, 'article')
				} } />
				<Route path=":type/:cate"
						getComponent={(location, callback) => {
						require.ensure([], require => {
							callback(null, require('./widget/trend/trend'))
						}, 'trend')
				} } />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);