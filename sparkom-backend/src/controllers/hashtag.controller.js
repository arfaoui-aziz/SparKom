const Hashtag = require("../models/hashtag");

const createHashtag = async (req, res) => {
  const hashtag = new Hashtag(req.body);
  try {
    await hashtag.save();
    res.status(201).send(hashtag);
  } catch (e) {
    res.status(400).send(e);
  }
};



const allHashtags = async (req, res) => {
  try {
    const hashtags = await Hashtag.find({});
    res.send(hashtags);
  } catch (e) {
    res.status(500).send(e);
  }
};



const deleteHashtag = async (req, res) => {
  try {
    const hashtag = await Hashtag.findByIdAndDelete(req.params.id);
    if (!hashtag) return res.status(404).send("Hashtag Not Found");
    res.send(" Hashtag deleted ");
  } catch (e) {
    res.status(500).send();
  }
};
module.exports = {
  createHashtag,
  allHashtags,
  deleteHashtag,
};
