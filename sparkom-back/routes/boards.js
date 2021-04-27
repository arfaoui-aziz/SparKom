var express = require("express");
var router = express.Router();
var boards = require("../models/boards");
var path = require("path");

router.get("/", function (req, res, next) {
    boards.find(function (err, data) {
    res.json(data);
  });
});

router.post("/add", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newgroup = {
    board_name: obj.board_name,
    is_public: obj.is_public,
  };
  boards.create(newgroup, function (err) {
    if (err) {
      res.render("/addgroup/");
    } else {
      res.redirect("/group");
    }
  });
});
module.exports = router;
