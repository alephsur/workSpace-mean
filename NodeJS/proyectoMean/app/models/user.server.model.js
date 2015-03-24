var mongoose = require("mongoose"),
  schema = mongoose.Schema;

var userSchema = new schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String
});

var User = mongoose.model("User",userSchema);
