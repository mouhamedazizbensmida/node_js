const fs = require('fs')
fs.readFile(process.argv[2], function (err, data) {
    //this is the callBack function
       if (err) return console.error(err);
       const str = data.toString();
var arr=str.split("\n")
console.log(arr.length-1)
    });
