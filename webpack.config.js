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
        home: './src/pages/home/home.jsx'    
    },
    output: {
        path: './dist',
        filename: '[name].js',
        chunkFilename: "[chunkhash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
			template: './src/pages/index/index.html',
            chunks: ['index'],
            inject: 'body',
            title: 'Index Page'
		}),
        new HtmlWebpackPlugin({
            filename: 'home.html',
			template: './src/pages/home/home.html',
            chunks:['home'],
            inject: 'body',
            title: 'Home Page'
		}),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV || 'dev')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename:'common.js',
            minChunks: 2
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new CopyWebpackPlugin([
            { from: 'src/static',to:'/static'},
            { from: 'node_modules/react/dist',to:'node_modules/react/dist'}
        ]),
        //clean folder
        // new CleanWebpackPlugin(['dist'], {
        //     verbose: true
        // }),
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
    eslint: {
        configFile: '.eslintrc'
    },
    module: {
        preLoaders: [
            //use eslint
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint'
            // }
        ],
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
        contentBase: './dist',
        hot: true,
        inline: true,
        progress: true
    }
};
