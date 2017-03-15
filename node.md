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

存储表和读码表的一些改变示例utf8存中英混合“大小abcdd”内存里面其实这个xx xx xx（这是中文）英文（xx内存里面其实有个内存对其的问题所以这里显示的）字节其实是用了三字节对其存储的，因为用utf8读取的时候也是每次读取三个字节如果英文不用三字节对其就乱套了。

xx xx xx（大）
xx xx xx(小)
xx（a）内存里面是这么个存储的但是其实是
xx xx xx（其实这里是对其的）方便读取的时候一次读取三个字节不乱套 
