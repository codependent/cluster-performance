var Q = require('q');

function fibonacciLoop(n){
    var first_num = 0, second_num = 1, result;
    if (n <= 1) return n;
    while(n >= 2){
        result   = first_num + second_num;
        first_num  = second_num;
        second_num = result;
        n--;
    }
    return result;
}

function fibonacciSync(n){
    if (n <= 1) return n;
    else return fibonacciSync(n-1) + fibonacciSync(n-2);
}

function fibonacci(n, done) {
    if (n <= 1) {
        done(n);
    }else{
        setImmediate(function() {
            fibonacci(n-1, function(val1) {
                setImmediate(function() {
                    fibonacci(n-2, function(val2) {
                        done(val1+val2);
                    });
                });
            });
        });
    }
}

module.exports.fibonacci = fibonacci;
module.exports.fibonacciSync = fibonacciSync;
module.exports.fibonacciLoop = fibonacciLoop;