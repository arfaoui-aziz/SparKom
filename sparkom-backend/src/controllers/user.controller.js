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

//************** Update User *******************/
const updateUser = async (req, res) => {
  //! test on updated fields
  const insertedUpdates = Object.keys(req.body);
  const allowedUpdates = [
    "firstname",
    "lastname",
    "username",
    "password",
    "email",
    "phone",
    "date_of_birth",
    "gender",
  ];

  const isAllowed = insertedUpdates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isAllowed) return res.status(400).send("eroor Invalid update ! ");

  //! update if allowed
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).send("User not Found");

    insertedUpdates.forEach((updatedField) => {
      user[updatedField] = req.body[updatedField];
    });
    await user.save();
    res.send(user);
  } catch (e) {
    res.status.send(400);
  }
};

//************** Delete User *******************/

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    return !deletedUser
      ? res.status(404).send("User not Found")
      : res.send(`${deletedUser} is Deleted`);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = { createUser, getAllUsers, updateUser, deleteUser };
