var net = require("net");

var chat = net.createServer(),
  clientList = [];

chat.on("connection",function(client){
  client.write("Hi");
  client.name = client.remoteAddress + ":" + client.remotePort;
  clientList.push(client);

  client.on("data",function(data){
    var string = data.toString();
    for( var i=0;i<clientList.length;i++){
      if(clientList[i] != client){
        clientList[i].write(client.name + " says " + string);
      }
    }
  });

  client.on("end",function(){
    clientList.splice(clientList.indexOf(client),1);
  });

  client.on("error",function(e){
    console.log(e);
  });
});

chat.listen(9000);
console.log("Servidor Conectado en el puerto 9000");
