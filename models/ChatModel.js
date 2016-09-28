var mongoose = require("mongoose");

var ChatSchema = new mongoose.Schema({
  sender: String,
  recipient: String
});

mongoose.model("Chat", ChatSchema);