var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2],function(err,list){

  /*list.forEach(function(item){
    if(path.extname(item)==="." + process.argv[3]){
      console.log(item);
    }
  });*/

  for(i=0;i<list.length;i++){
    if(process.argv[3][0] === "."){
      if(path.extname(list[i]) === process.argv[3]){
        console.log(list[i]);
      }
    }
    else{
      if(path.extname(list[i]) === "." + process.argv[3]){
        console.log(list[i]);
      }
    }
  }
});
