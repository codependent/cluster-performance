var appLog = require('../log').appLog;

module.exports = function(app){
    /// catch 404 and forwarding to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    /// error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            appLog.error(err.stack);
            res.status(err.status || 500).send();
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        appLog.error(err.stack);
        res.status(err.status || 500).send();
    });

}
