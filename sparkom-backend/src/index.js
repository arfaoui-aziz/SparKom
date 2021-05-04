const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const connectToDB = require("../config/db");
// Importe Routes
const userRouter = require("./routers/user.router");
const profileRouter = require("./routers/profile.router");
const postRouter = require("./routers/post.router");
const domainRouter = require("./routers/domain.router");
const skillRouter = require("./routers/skill.router");
const badgeRouter = require("./routers/badge.router");
const cvRouter = require("./routers/cv.router");
var groupRouter = require("./routers/group");
var eventRouter = require("./routers/event");

var postGrRouter  = require("./routers/postGr");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(express.json());


//* Connect to DB
connectToDB();

// Define Routes

app.use("/users", userRouter);
app.use("/profile/me", profileRouter);
app.use("/posts", postRouter);
app.use("/domains", domainRouter);
app.use("/skills", skillRouter);
app.use("/badges", badgeRouter);
app.use("/cv", cvRouter);
app.use("/group", groupRouter);
app.use("/event", eventRouter);
app.use("/", postGrRouter);

const PORT = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});