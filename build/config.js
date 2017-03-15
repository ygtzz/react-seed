var path = require('path');
var proxy = require('./proxy');

var sBase = './src/';
module.exports = {
    sBase: sBase,
    sDist: '/dist',
    sDest: './dist',
    entry: {
        index: sBase + 'pages/index/index.jsx',
        home: sBase + 'pages/home/home.jsx'
    },
    dev: {
        proxy: proxy,
        env: '',
        port: 8886,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
    },
    build: {
        env: '',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
    }
}