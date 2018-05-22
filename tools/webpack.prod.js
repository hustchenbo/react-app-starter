/**
 * @file prod
 * @author chenbo09
 */

'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    module: {
        // Make missing exports an error instead of warning
        strictExportPresence: false
    },

    // other-options
    // Don't attempt to continue if there are any errors.
    bail: true,

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new CleanWebpackPlugin('dist'),
        new BundleAnalyzerPlugin(
            {
                analyzerMode: 'server',
                analyzerHost: '127.0.0.1',
                analyzerPort: 8888,
                reportFilename: 'report.html',
                defaultSizes: 'parsed',
                openAnalyzer: true,
                generateStatsFile: true,
                statsFilename: 'stats.json',
                logLevel: 'info'
            }
        )
    ],

    stats: {
        // fallback value for stats options when an option is not defined (has precedence over local webpack defaults)
        all: undefined,
        // Add chunk information (setting this to `false` allows for a less verbose output)
        chunks: true
    }
});
