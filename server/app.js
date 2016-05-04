const path = require('path');
const express = require('express');
const app = express();
const compression = require('compression');

const ENV = process.env.NODE_ENV || 'development';
const isDev = ENV === 'development' ? true : false;
const STATIC = path.join(__dirname, '/../dist');

const jsonServer = require('json-server');

app.disable('x-powered-by');  //Disable per IRM
app.use(compression());
app.use(express.static(STATIC));

if(isDev){
    // TODO: Add --progress --colors --watch to webpack
    // webpack & hot module reloading
    const webpack = require('webpack');
    const webpackConfig = require('../webpack.config');
    const webpackCompiler = webpack(webpackConfig);
    const webpackDevMiddleware = require('webpack-dev-middleware')(webpackCompiler);
    const webpackHotMiddleware = require('webpack-hot-middleware')(webpackCompiler);
    app.use(webpackDevMiddleware);
    app.use(webpackHotMiddleware);
}

app.get('/', function root(req, res) {
    res.sendFile(path.join(STATIC, 'index.html'));
});

app.use(jsonServer.defaults());
app.use('/api/allinsurancedata', jsonServer.router('./mock/allinsurancedata.json'));

// handle errors, todo: send back page or route to error page
app.use(function handleErrors(err, req, res, next) {
    // req.log.error(err);
    res.status(err.status || 500);
    res.json({
        msg: err.message
    });
    next(err);
});

module.exports = app;
