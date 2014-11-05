var winston = require('winston');
var nconf = require('nconf');
var fs = require('fs');
var path = require("path");

function toLocalISOString() {
	var date = new Date();
    function pad(n) { return n < 10 ? '0' + n : n }
    function padMili(n) { if(n < 10) return '00'+n; else return (n < 100) ? '0'+n : n ;} 
    var localIsoString = date.getFullYear() + '-'
        + pad(date.getMonth() + 1) + '-'
        + pad(date.getDate()) + 'T'
        + pad(date.getHours()) + ':'
        + pad(date.getMinutes()) + ':'
        + pad(date.getSeconds()) + '.'
        + padMili(date.getMilliseconds());
    var offset = pad((date.getTimezoneOffset()/-60));
    if(date.getTimezoneOffset() == 0) localIsoString += 'Z'; else localIsoString += '+'+ offset;
    return localIsoString;
}

var logDir = path.dirname(nconf.get('log').application.file);
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

winston.loggers.add('application', {
	console: {silent: (process.env.NODE_ENV == 'production'), level: nconf.get('log').application.level},
    transports: [ new (winston.transports.DailyRotateFile)({filename: nconf.get('log').application.file, 
    														datePattern: '.yyyy-MM-dd', 
    														json : false,
    														timestamp: toLocalISOString,
    														level: nconf.get('log').application.level}) ]
});

module.exports.appLog = winston.loggers.get('application');