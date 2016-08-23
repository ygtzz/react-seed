var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './pages/index/index.jsx'
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, loader: "babel", exclude: /node_modules/},
            {test: /.css$/, loader: 'style!css'},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"}
        ]
    },
    resolve:{
        extensions:['','.js','.json','.es','jsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './pages/index/index.html'
		})
	]
};
