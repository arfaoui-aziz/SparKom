const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  
});

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

module.exports = Hashtag;