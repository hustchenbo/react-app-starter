/**
 * @file dll
 * @author chenbo09
 */

'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    // 要打包的模块的数组
    entry: {
        vendor: ['react', 'react-dom', 'react-redux', 'redux']
    },
    output: {
        path: path.join(__dirname, '../static/js'), // 打包后文件输出的位置
        filename: '[name].[hash:8].dll.js', // vendor.dll.js中暴露出的全局变量名。
        library: '[name]_library' // 与webpack.DllPlugin中的`name: '[name]_library',`保持一致。
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname
        })
    ]
};