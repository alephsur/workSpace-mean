var connect = require("connect");
var app = connect();

var helloworld = function(req,res,next){
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello World');
};

app.use(helloworld);

app.listen(3000);

console.log("Servidor arrancado en el puerto 3000");
