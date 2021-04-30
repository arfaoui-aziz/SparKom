var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// import mongoDB
var mongoose = require("mongoose");
var config = require("./database/mongodb");

var groupRouter = require("./routes/group");
var eventRouter = require("./routes/event");
var boardsRouter = require("./routes/boards");
var userRoutes = require("./routes/user");
var postRoutes = require("./routes/post");
var topicRoutes = require("./routes/topic");
var app = express();
const bodyParser = require("body-parser");

require("dotenv").config();
// mongo config
mongoose.connect(
  config.mongo.uri,
  { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Connected to DB!!!"))
  .catch((err)=> console.log(err));

  var cors = require('cors');

  app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", postRoutes);
app.use("/", topicRoutes);

app.use("/", userRoutes);
app.use("/group", groupRouter);
app.use("/event", eventRouter);
app.use("/boards", boardsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
