var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boards = new Schema(
  {
    name:String,
    status:String,
    
 },
);


module.exports = mongoose.model("boards", boards);