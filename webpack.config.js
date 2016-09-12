var webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {

    webpackConfig.resolve.modulesDirectories.push('src');
    webpackConfig.resolve.extensions.push('.es');
    // 返回 webpack 配置对象
    return webpackConfig;
};