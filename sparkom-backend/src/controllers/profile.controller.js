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

const updateProfile = async (req, res) => {
  const sentUpdates = Object.keys(req.body);
  const allowedUpdates = ["followers", "following", "bio", "occupation"];

  const isValidUpdate = sentUpdates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidUpdate) return res.status(404).send("eroor Invalid update");
  const my_id = req.user._id;
  try {
    const myProfile = await Profile.findOneAndUpdate(my_id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.send(myProfile);
  } catch (e) {
    return res.status(500).send();
  }
};

module.exports = { createProfile, getMyProfile, updateProfile };
