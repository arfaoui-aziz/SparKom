var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var participant = new Schema({

  member_id:{
    type: Schema.Types.ObjectId,
    ref:'member' 
  },
  event_id:{
    type: Schema.Types.ObjectId,
    ref:'event' 
  },
},{timestamps: true});

module.exports = mongoose.model("participant", participant);