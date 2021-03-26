const User = require("../models/user");
const bcrypt = require("bcryptjs");
//************** Create New User *******************/
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
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

//************** Login *******************/
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error();
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) throw new Error();
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send("Unable to login");
  }
};

//************** Logout  *******************/

const logout = async (req, res) => {
  try {
    //filtering to new array without current token
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send("Logged Out");
  } catch (e) {
    res.status(500).send();
  }
};

//*********** LogoutAll From All Connected Devices  *********************************/

const logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send("Logged Out From All Devices");
  } catch (e) {
    res.status(500).send();
  }
};

//****************************************/
module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
  logout,
  logoutAll,
};
