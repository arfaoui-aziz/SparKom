const Profile = require("../models/profile");

const createProfile = async (req, res) => {
  try {
    const my_id = req.user._id;
    const profile = new Profile({ ...req.body, my_id });
    await profile.save();
    res.status(201).send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getMyProfile = async (req, res) => {
  try {
    const my_id = req.user._id;
    const myProfile = await Profile.findOne({ my_id });
    await myProfile.populate("my_id").execPopulate();
    res.send(myProfile);
  } catch (e) {
    res.status(500).send(e);
  }
};
module.exports = { createProfile, getMyProfile };
