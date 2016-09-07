var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var extractCss = new ExtractTextPlugin('style/[name].css');

module.exports = {
    entry: {
        index: './src/pages/index/index.jsx',
        home: './src/pages/home/home.jsx',
        antd: './src/pages/antd/antd.jsx'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        chunkFilename: "[name].js"
        //publicPath: 'http://localhost:8080'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
			template: './src/pages/index/index.html',
            chunks: ['index','react'],
            inject: 'body',
            title: 'Index Page'
		}),
        new HtmlWebpackPlugin({
            filename: 'home.html',
			template: './src/pages/home/home.html',
            chunks:['home','react'],
            inject: 'body',
            title: 'Home Page'
		}),
        new HtmlWebpackPlugin({
            filename: 'antd.html',
			template: './src/pages/antd/antd.html',
            chunks:['antd','react'],
            inject: 'body',
            title: 'Antd Page'
		}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'antd.chunk',
            chunks: ['home','antd'],
            minChunks: 2            
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react.chunk',
            chunks: ['index','home','antd'],
            minChunks: 2            
        }),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV || 'dev')
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new CopyWebpackPlugin([
            { from: 'src/static', to: 'static' },
        ]),
        new CleanWebpackPlugin(['dist'], {
            verbose: true
        }),
        extractCss,        
        new webpack.ProvidePlugin({
            // Automtically detect jQuery and $ as free var in modules and inject the jquery library,This is required by many jquery plugins
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),        
		new webpack.HotModuleReplacementPlugin(),        
        new webpack.NoErrorsPlugin()
	],
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
    // externals:{
    //     'react': 'window.React',
    //     'jquery': 'window.jQuery'
    // },
    devtool: 'cheap-module-eval-source-map',//production use cheap-module-source-map    
    devServer:{
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
};
