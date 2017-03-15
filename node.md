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


Buffer类
var buf = new Buffer(10);
buf.fill(255);
ff ff ff ff ff ff ff ff ff ff

buf.fill(256)
00 00 00 00 00 00 00 00 00 00 00这个结果是这么来的256转十六进制是100底层c ++会舍去前面大第二位的那位得到结果一定是00
