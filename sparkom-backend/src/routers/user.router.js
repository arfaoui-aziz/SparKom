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
} = require("../controllers/user.controller");

const router = new express.Router();

router.post("/", createUser);
router.post("/login", login);

router.get("/", auth, getAllUsers);
router.patch("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.post("/logout", auth, logout);
router.post("/logoutall", auth, logoutAll);
module.exports = router;
