const fs = require('fs')
var buf = new Buffer(1024);
fd=fs.readFileSync(process.argv[2],'UTF-8')
// console.log(fd);
const str = fd.toString();
var arr=str.split("\n")
console.log(arr.length-1)
// fs.readFile(fd, buf, 0, buf.length, 0, function(err, bytes){
//     if (err){
//        console.log(err);
//     }
// })
