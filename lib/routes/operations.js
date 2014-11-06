var express = require('express');
var appLog = require('../log').appLog;
var algorithmsService = require('../services/algorithms');
var router = express.Router();

router.route('/fibonacci/:position')
    .get(function(req, res) {
        algorithmsService.fibonacci(req.param('position'),
            function(result){
                res.json(200,{result:result});
            });
    });

router.route('/fibonacciSync/:position')
    .get(function(req, res) {
        var result = algorithmsService.fibonacciSync(req.param('position'));
        res.json(200,{result:result});
    });

router.route('/fibonacciLoop/:position')
    .get(function(req, res) {
        var result = algorithmsService.fibonacciLoop(req.param('position'));
        res.json(200,{result:result});
    });

router.route('/timeout/:time')
    .get(function(req, res) {
        setTimeout(function(){
            appLog.debug("Timeout completed %d", process.pid);
            res.json(200,{result:process.pid});
        },req.param('time'));
    });

module.exports = router;