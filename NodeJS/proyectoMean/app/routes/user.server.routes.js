var users = require("../../app/controllers/user.server.controllers.js");

module.exports = function(app){

  /*tambien es valido el codigo
  app.route("/users")
    .post(users.create)
    .get(users.list);
  */

  app.route("/users").post(users.create);
  
  app.route("/users").get(users.list);

  app.route("/users/:userId").get(users.read);

  app.route("/users/:userId").put(users.update);

  app.route("/users/:userId").delete(users.delete);

  app.param("userId",users.userByID);
};
