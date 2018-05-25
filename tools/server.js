/**
 * @file server
 * @author chenbo09
 */

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    contentBase: './dist',
    compress: true,
    port: 3000,
    hot: true,
    lazy: false,
    watchOptions: {
        poll: true
    }
}));


app.use(webpackHotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 1000
}));

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('The React app is listening on port 3000!\n');
});
