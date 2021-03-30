const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
  name: String,
  type: String,
  image: Buffer,
});

const Badge = mongoose.model("Badge", badgeSchema);

export default Badge;
