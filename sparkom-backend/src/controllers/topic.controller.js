const Topic = require("../models/topic");

const createTopic = async (req, res) => {
  const topic = new Topic(req.body);
  try {
    await topic.save();
    res.status(201).send(topic);
  } catch (e) {
    res.status(400).send(e);
  }
};



const allTopics = async (req, res) => {
  try {
    const topics = await Topic.find({});
    res.send(topics);
  } catch (e) {
    res.status(500).send(e);
  }
};



const deleteTopic = async (req, res) => {
  try {
    const topic = await Topic.findByIdAndDelete(req.params.id);
    if (!topic) return res.status(404).send("Topic Not Found");
    res.send(" Topic deleted ");
  } catch (e) {
    res.status(500).send();
  }
};
module.exports = {
  createTopic,
  allTopics,
  deleteTopic,
};
