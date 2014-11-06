var math = require('./operations');

module.exports = function(app){
    app.use('/operations', math);
}