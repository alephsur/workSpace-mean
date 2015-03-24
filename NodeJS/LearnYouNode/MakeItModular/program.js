var modulo = require("./module");

modulo(process.argv[2],process.argv[3],function(err,data){
  if(err)
    console.log(err);

  data.forEach(function(item){
    console.log(item);
  });
});
