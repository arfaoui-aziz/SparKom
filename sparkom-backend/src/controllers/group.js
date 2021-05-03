const Group = require("../models/group");
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

module.exports = { LeaveGroup, JoinGroup };
