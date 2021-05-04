const Profile = require("../models/profile");
const User = require("../models/user");

// const createProfile = async (req, res) => {
//   try {
//     const my_id = req.user._id;
//     const profile = new Profile({ ...req.body, my_id });
//     await profile.save();
//     res.status(201).send(profile);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// };

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

const deleteMyProfile = async (req, res) => {
  try {
    const my_id = req.user._id;
    const myProfile = await Profile.findOne({ my_id });
    if (!myProfile) return res.status(404).send("You don't have a Profile");
    await myProfile.remove();
    res.send("Profile Deleted");
  } catch (e) {
    res.status(500).send();
  }
};

const updateProfile = async (req, res) => {
  const sentUpdates = Object.keys(req.body);
  const allowedUpdates = [
    "followers",
    "following",
    "bio",
    "occupation",
    "is_verified",
    "is_expert",
  ];

  const isValidUpdate = sentUpdates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidUpdate) return res.status(404).send("eroor Invalid update");
  const my_id = req.user._id;
  try {
    const myProfile = await Profile.findOne({ my_id });
    if (!myProfile) return res.status(404).send("You don't have a Profile");
    sentUpdates.forEach((updatedField) => {
      myProfile[updatedField] = req.body[updatedField];
    });
    await myProfile.save();
    return res.send(myProfile);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

//***************************** */
const followUser = async (req, res) => {
  const my_id = req.user._id;
  try {
    const myProfile = await Profile.findOne({ my_id });
    const userProfile = await Profile.findById(req.params.id);

    if (myProfile.following.indexOf(userProfile._id) === -1) {
      myProfile.following.push(userProfile._id);
      await myProfile.save();
      userProfile.followers.push(myProfile._id);
      await userProfile.save();
      return res.send(myProfile);
    }
    const Unfollow = myProfile.following.filter((userId) => {
      userId !== userProfile._id;
    });
    myProfile.following = Unfollow;
    await myProfile.save();
    const deleteFollower = userProfile.followers.filter((userId) => {
      userId !== myProfile._id;
    });
    userProfile.followers = deleteFollower;
    await userProfile.save();

    res.send(myProfile);
  } catch (e) {}
};

const getProfileByID = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findById(id);
    if (!profile) throw new Error("Inexisting Profile");
    await profile.populate("my_id").execPopulate();
    res.send(profile);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
//************** All My Followers *****************************/
const getFollowers = async (req, res) => {
  const my_id = req.user._id;
  let myFriends = [];
  try {
    const myProfile = await Profile.findOne({ my_id });
    for (let i = 0; i < myProfile.following.length; i++) {
      const profile = await Profile.findById(myProfile.following[i]);
      await profile.populate("my_id").execPopulate();
      myFriends.push(profile);
    }
    res.send(myFriends);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({}).populate("my_id").exec();
    //     const profiles = await Profile.aggregate([
    //       {
    //         $lookup: {
    //           from: User.collection.name,
    //           localField: "my_id",
    //           foreignField: "_id",
    //           as: "userArray",
    //         },
    //       },
    //       {
    //         $unwind: "$userArray",
    //       },
    // ,
    //     ]).exec();

    res.send(profiles);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  getMyProfile,
  updateProfile,
  deleteMyProfile,
  followUser,
  getProfileByID,
  getFollowers,
  getAllProfiles,
};
