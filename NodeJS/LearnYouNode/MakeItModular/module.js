var fs = require("fs"),
  path = require("path");

module.exports = function(directory, extension,callback){
  fs.readdir(directory,function(err,list){
    if(err)
      callback(err,null);
    else{
      result = [];
      list.forEach(function(item){
        if(path.extname(item) === "." + extension){
          result.push(item);
        }
      });

      callback(null,result);
    }
  });
}
