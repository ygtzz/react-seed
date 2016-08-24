var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
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
            {test: /\.(jpg|png|gif)$/, loader: "url?limit=8192"}
        ]
    },
    resolve:{
        modulesDirectories: [ "node_modules","pages", "widget","redux"],
        extensions:['','.jsx','.js','.json','.es','.css','.scss']
    },
    externals:{
        'react': 'window.React'
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: './pages/index/index.html'
		}),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV || 'dev')
        }),
        extractCss,
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),        
		new webpack.HotModuleReplacementPlugin(),        
        new webpack.NoErrorsPlugin()
	]
};
