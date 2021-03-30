const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: Buffer,
});

const Domain = mongoose.model("Domain", domainSchema);

export default Domain;
