var app = require('../bin/www');
var nconf = require('../lib/config');
var appLog = require('../lib/log').appLog;
var request = require('supertest');

describe('Controller Tests:', function(){

    it('should calculate the fibonacci number', function(done){
        request(app)
            .get('/math/fibonacci/10')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err,res){
                if(err){ return done(err); }
                else{
                    done();
                }
            });
    });
});