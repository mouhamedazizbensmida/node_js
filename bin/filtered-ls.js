var fs = require('fs');
var path = require("path");

fs.readdir(process.argv[2],(err, list)=>{
for(var i=0;i<list.length;i++){
    var p = process.argv[2]+"/"+list[i];
    var r=path.extname(p);
    if(r===("." + process.argv[3])){
        console.log(list[i]);
    }
}

});