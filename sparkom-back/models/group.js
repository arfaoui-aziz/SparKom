var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var group = new Schema({
  name:{
    type: String,
    required: true,
  },
  CreatedBy:{
    type: String
  },
  Topic: [
    {
      value: String,
      label: String,
     
    },
  ],
  description:{
    type: String,
    required: true,
  },
  IsPrivate:{
    type: String,
    required: true,
  },
  Image:{
    type: String,
    required: false,
  },
  Coins:{
    type: Number,
    default: "0",
  }
  ,
  Reports:{
    type: Number,
    default: "0",
  }
},{timestamps: true});

module.exports = mongoose.model("group", group);