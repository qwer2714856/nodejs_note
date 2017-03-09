#nodejs 的学习文档  来之node权威指南
##模块
repl
可以在代码中，直接call出repl模式进行交互模式的调试
var repl = require('repl');
var c = repl.start('命令号前到符').context;
c.msg = 1;
c.ft = function(){

}
在开启的命令行可以直接对其访问

错误输出和标准输出
console.error()
console.log()
