var path = require('path');
var middlewares = require('./lib/middlewares');

module.exports = function(app){
	app.set('views', path.join(__dirname+'/lib', 'views'));
	app.set('view engine', 'jade');
	middlewares(app);
};