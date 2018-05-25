/**
 * @file common
 * @author chenbo09
 */

'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, '..');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);

const extractCSS = new ExtractTextPlugin({
    filename: 'static/css/[name].[contenthash].css',
    disable: process.env.NODE_ENV !== 'production'
});

const extractLESS = new ExtractTextPlugin({
    filename: 'static/css/[name].[contenthash].css',
    disable: process.env.NODE_ENV !== 'production'
});


module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: resolvePath(ROOT_DIR, 'dist'),
        publicPath: '/',
        pathinfo: true,
        filename: 'static/js/[name].[hash:8].js',
        chunkFilename: 'static/js/[id].[chunkhash:8].js'
    },
    resolve: {
        // Allow absolute paths in imports, e.g. import Button from 'components/Button'
        // Keep in sync with .flowconfig and .eslintrc
        modules: ['node_modules', 'src']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|dist)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/img/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader',
                        options: {
                            relativeUrls: true,
                            paths: []
                        }
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'REACT APP',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor-manifest.json')
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        // extract css into its own file
        extractCSS,
        extractLESS
    ]
};
