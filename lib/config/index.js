var nconf = require('nconf');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
nconf.env().argv();
nconf
	.file(__dirname+'/env/'+nconf.get('NODE_ENV')+'.json')
	.defaults({
		'port': '3000'
	});
module.exports = nconf;