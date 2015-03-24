var connect = require("connect");

var app = connect();

var logger = function(req,res,next){
  console.log("esta es la function de logger");

  next();
};

var helloworld = function(req,res,next){
  res.setHeader("Content-Type","text/plain");
  res.end("hello world");
}

var goodbyworld= function(req,res,next){
  res.setHeader("Content-Type","text/plain");
  res.end("goodbye world");
}

app.use(logger);
app.use("/hello",helloworld);
app.use("/goodbye",goodbyworld);


app.listen(3000);
console.log("Servidor escuchando en el puerto 3000");
