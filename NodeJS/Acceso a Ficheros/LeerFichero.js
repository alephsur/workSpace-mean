var fichero = require("fs");

fichero.readFile("C:\\Users\\portatil\\WorkSpace MEAN\\NodeJS\\Hello World\\hello.js",function(err,data){
  if(err){
    return console.log(err);
  }

  console.log(data);
});
