/**
 * @file dev
 * @author chenbo09
 */

'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    entry: {
        // https://github.com/webpack-contrib/webpack-hot-middleware
        app: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/main.js']
    },
    module: {
        // Make missing exports an error instead of warning
        strictExportPresence: true
    },

    // other-options

    // Don't attempt to continue if there are any errors.
    bail: false,

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});
