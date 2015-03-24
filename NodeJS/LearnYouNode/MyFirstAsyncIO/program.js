var fs = require("fs");

fs.readFile(process.argv[2], function(err,buffer){
  if(err){
    console.log(err);
  }

  var string = buffer.toString();
  var array = string.split("\n");
  console.log(array.length-1);
});
