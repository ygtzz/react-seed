import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './redux/store';
import 'static/css/site.css';

const history = syncHistoryWithStore(hashHistory, store);

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
	<Provider store={store}>
		<Router history={history}>
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