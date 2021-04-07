const Tag = require("../models/tag");

const createTag = async (req, res) => {
  const tag = new Tag(req.body);
  try {
    await tag.save();
    res.status(201).send(tag);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateTag = async (req, res) => {
  try {
    const tag = await Tag.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tag) return res.status(404).send("Inexisting Tag");
    return res.send(tag);
  } catch (e) {
    res.status(500).send();
  }
};

const allTags = async (req, res) => {
  try {
    const tags = await Tag.find({});
    res.send(tags);
  } catch (e) {
    res.status(500).send(e);
  }
};



const deleteTag = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    if (!tag) return res.status(404).send("Tag Not Found");
    res.send(" Tag deleted ");
  } catch (e) {
    res.status(500).send();
  }
};
module.exports = {
  createTag,
  updateTag,
  allTags,
  deleteTag,
};
