var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var member = new Schema({
    id_user:{
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  id_group:{
    type: Schema.Types.ObjectId,
    ref:'group' 
  }})