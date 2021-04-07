const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;