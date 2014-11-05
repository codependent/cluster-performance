var express = require('express');
var favicon = require('static-favicon');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var errorHandling = require('./error-handling');
var nconf = require('../config');
var routes = require('../routes');

module.exports= function(app){
    app.use(favicon());
    if(nconf.get('NODE_ENV') == 'development'){
    	app.use(logger('dev'));
    }
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname+'/../', 'public')));
    routes(app);
    errorHandling(app);
}