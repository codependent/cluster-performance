var math = require('./math');

module.exports = function(app){
    app.use('/math', math);
}