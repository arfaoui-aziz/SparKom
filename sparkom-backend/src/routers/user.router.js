const express = require("express");

const { createUser, getAllUsers } = require("../controllers/user.controller");

const router = new express.Router();
router.get("/users", getAllUsers);
router.post("/users", createUser);

module.exports = router;
