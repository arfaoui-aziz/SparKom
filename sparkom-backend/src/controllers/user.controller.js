const User = require("../models/user");

//************** Create New User *******************/
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
};

//************** Display All Users *******************/
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = { createUser, getAllUsers };
