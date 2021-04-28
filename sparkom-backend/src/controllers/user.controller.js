const User = require("../models/user");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const sharp = require("sharp");
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

//! Setting up multer
const avatarUpload = multer({
  limits: {
    fileSize: 1_000_000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      cb(new Error("File must be a Valid Image Type"));
    }

    cb(undefined, true);
  },
});
//*********** Upload & Update Avatar *********************************/

const addAvatar = async (req, res) => {
  try {
    //!req.file.buffer   to get the Binary of the Uploaded file

    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    //? req.user.avatar = req.file.buffer;
    req.user.avatar = buffer;
    await req.user.save();
    res.status(200).send("Image Uploaded");
  } catch (e) {
    res.status(500).send();
  }
};
//*************** Display users Avatar ****************************/
const displayAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) {
      throw new Error("You don't have an avatar");
    }

    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (e) {
    res.status(404).send(e);
  }
};
//*************** Display My Avatar ****************************/

const MyAvatar = async (req, res) => {
  try {
    if (!req.user.avatar) {
      throw new Error("You don't have an avatar");
    }
    res.set("Content-Type", "image/png");
    res.send(req.user.avatar);
  } catch (e) {
    res.status(404).send(e);
  }
};
//*************** Delete users Avatar ****************************/
const deleteAvatar = async (req, res) => {
  req.user.avatar = undefined;
  try {
    await req.user.save();
    res.status(200).send("Avatar Deleted");
  } catch (e) {
    res.status(400).send(e);
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
  avatarUpload,
  addAvatar,
  displayAvatar,
  MyAvatar,
  deleteAvatar,
};