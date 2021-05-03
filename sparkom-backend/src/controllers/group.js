const Group = require("../models/group");
const event = require("../models/event");
const _ = require("lodash");


const JoinGroup = (req, res) => {
  Group.findByIdAndUpdate(
    req.body.groupId,
    { $push: { Members: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

const JoinEvent = (req, res) => {
  event.findByIdAndUpdate(
    req.body.eventId,
    { $push: { Participants: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

const LeaveGroup = (req, res) => {
  Group.findByIdAndUpdate(
    req.body.groupId,
    { $pull: { Members: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};
const LeaveEvent = (req, res) => {
  event.findByIdAndUpdate(
    req.body.eventId,
    { $pull: { Participants: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

module.exports = { LeaveGroup, JoinGroup, LeaveEvent,JoinEvent };
