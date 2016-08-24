var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCss = new ExtractTextPlugin('style/[name].css');
var extractScss = new ExtractTextPlugin('style/[name].scss');

module.exports = {
    devtool: 'cheap-module-eval-source-map',//production use cheap-module-source-map
    entry: {
        index: './pages/index/index.jsx'
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx|es)$/, loader: "babel", exclude: /node_modules/},
            {test: /\.css$/, loader: extractCss.extract('style','css')},
            {test: /\.scss$/, loader: extractCss.extract('style','css!sass')},
            {test: /\.(jpg|png|gif)$/, loader: "url?limit=8192"},
            {test: /\.(eot|ttf|svg|woff|woff2)$/, loader: 'file' },
        ]
    },
    resolve:{
        modulesDirectories: [ "node_modules","pages", "widget","redux"],
        extensions:['','.jsx','.js','.json','.es','.css','.scss']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './pages/index/index.html'
		}),
        extractCss,
        extractScss
	]
};
