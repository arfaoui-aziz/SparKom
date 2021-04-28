const express = require("express");
const auth = require("../middleware/auth");
const {
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
} = require("../controllers/user.controller");

const router = new express.Router();

router.post("/", createUser);
router.post("/login", login);

router.get("/", auth, getAllUsers);
router.patch("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.post("/logout", auth, logout);
router.post("/logoutall", auth, logoutAll);
router.post(
  "/me/avatar",
  auth,
  avatarUpload.single("avatar"),
  addAvatar,
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
router.get("/me/avatar", auth, MyAvatar);
router.delete("/me/avatar", auth, deleteAvatar);
router.get("/:id/avatar", displayAvatar);

module.exports = router;