var repl = require('repl');

var c = repl.start('ding.luchao:').context;
c.msg = 'test';
c.haha = function(){
    console.log('haha function');
}
