var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var extractCss = new ExtractTextPlugin('style/[name].css');

module.exports = {
    entry: {
        index: path.join(__dirname,'/src/pages/index/index.jsx')
    },
    output: {
        path: './dist',
        filename: '[name].js',
        chunkFilename: "[chunkhash].js"
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
        modulesDirectories: [ "node_modules","src","src/pages", "src/widget","src/redux"],
        extensions:['','.jsx','.js','.json','.es','.css','.scss']
    },
    externals:{
        'react': 'window.React',
        'jquery': 'window.jQuery'
    },
    devtool: 'cheap-module-eval-source-map',//production use cheap-module-source-map    
    devServer:{
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: './src/pages/index/index.html'
		}),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV || 'dev')
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new TransferWebpackPlugin([
            { from: 'src/static',to:'/static'},
            { from: 'node_modules/react/dist',to:'node_modules/react/dist'},                      
        ],path.join(__dirname, '/')),
        extractCss,        
        new webpack.ProvidePlugin({
            // Automtically detect jQuery and $ as free var in modules and inject the jquery library
            // This is required by many jquery plugins
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),        
		new webpack.HotModuleReplacementPlugin(),        
        new webpack.NoErrorsPlugin()
	]
};
