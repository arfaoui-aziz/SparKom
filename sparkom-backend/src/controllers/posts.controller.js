const Posts = require("../models/posts");

const createPosts = async (req, res) => {
  const posts = new Posts(req.body);
  try {
    await posts.save();
    res.status(201).send(posts);
  } catch (e) {
    res.status(400).send(e);
  }
};



const allPostss = async (req, res) => {
  try {
    const postss = await Posts.find({});
    res.send(postss);
  } catch (e) {
    res.status(500).send(e);
  }
};


const updatePosts = async (req, res) => {
  try {
    const posts = await Posts.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!posts) return res.status(404).send("Inexisting Posts");
    return res.send(posts);
  } catch (e) {
    res.status(500).send();
  }
};

const deletePosts = async (req, res) => {
  try {
    const posts = await Question.findByIdAndDelete(req.params.id);
    if (!posts) return res.status(404).send("Posts Not Found");
    res.send(" Posts deleted ");
  } catch (e) {
    res.status(500).send();
  }
};
module.exports = {
  createPosts,
  updatePosts,
  allPostss,
  deletePosts,
};
