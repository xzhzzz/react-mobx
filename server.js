var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
var port = 8000;

app.use('/',require('connect-history-api-fallback')());

app.use(express.static('./'));
app.use(express.static('./build'));

if(process.env.NODE_ENV !== 'production'){

    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config.js');
    var webpackComplied = webpack(webpackConfig);
    var webpackDevMiddleware = require('webpack-dev-middleware');

    app.use(webpackDevMiddleware(webpackComplied,{
        publicPath:webpackConfig.output.publicPath,
        stats:{colors:true},
        lazy:false,
        hot:true,
        watchOptions:{
            aggregateTimeout:300,
            poll:true
        }
    }))

    var webpackHotMiddleware = require('webpack-hot-middleware');
    app.use(webpackHotMiddleware(webpackComplied));
}

app.use('/api/v1',proxy({target:'https://www.baidu.com',changeOrigin:true}))

var server = app.listen(port,function(){
    console.log('Listening at http://localhost:%s',port);
})