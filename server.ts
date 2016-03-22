'use strict'
import * as express from "express";
import * as bodyParser from "body-parser";
import * as errorHandler from "errorhandler";
import * as methodOverride from "method-override";
import * as cookieParser from "cookie-parser";
import * as queryString from 'querystring';
import {config} from './env'

//webapp
import * as picker from './server/webapp/routes/picker'



var app = express();
app.use(errorHandler());
// Configuration
var env = config.NODE_ENV || 'development';
if (env === 'development') {
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var WebpackConfig = require('./webpack.dev.config');
    app.use(webpackDevMiddleware(webpack(WebpackConfig), {
        publicPath: '/demo/',
        stats: {
            colors: true
        }
    }));
    app.set('views',__dirname + '/server/views/dev');
}else{
    app.set('views',__dirname + '/public/demo');
}

app.set('view engine', 'html');
app.engine('.html', require('ejs').__express)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname+'/public'));

// Routes

app.get('/demo/picker',picker.index);
//错误处理
//app.get('/webapp/*',function(req,res){
//    res.writeHead(301,{
//        'Location':'/webapp/content/g0'
//    });
//    res.end();
//});


app.listen(config.PORT, function(){
    console.log("Demo Express server listening on port %d in %s mode", config.PORT, config.NODE_ENV || '');
});

export var App = app;