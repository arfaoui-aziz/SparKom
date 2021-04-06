const express = require("express");
const auth = require("../middleware/auth");
const {
  createSkill,
  updateSkill,
  allSkills,
  skillsByDomain,
  deleteSkill,
} = require("../controllers/skill.controller");

const router = new express.Router();

router.post("/", auth, createSkill);
router.patch("/:id", auth, updateSkill);
router.get("/", allSkills);
router.get("/:id", skillsByDomain);
router.delete("/:id", deleteSkill);

module.exports = router;
