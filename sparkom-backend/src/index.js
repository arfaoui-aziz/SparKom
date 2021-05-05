const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const createError = require("http-errors");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const connectToDB = require("../config/db");
var eventC = require("./models/event");
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
var postGrRouter = require("./routers/postGr");
const bodyParser = require("body-parser");
const app = express();

const { OAuth2 } = google.auth;
const oAuth2Client = new OAuth2(
  "581217601925-mgs9i86bs0a9npm3qiqec7rj0udefv2l.apps.googleusercontent.com",
  "tQIJv67X1-pyGbxr7XqrvTXg"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04Vc37SV850JkCgYIARAAGAQSNwF-L9IrDhS54zV5zJpD1HK3Ojwbdu8OLiXYl5oru5-MlL6UULbTenwPneIH_Y5K6YpR5dZHl5c",
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });



// Create a dummy event for temp uses in our calendar

app.post("/showCalendar/:id", cors(), async (req, res) => {
  eventC.findById(req.params.id, function (err, data) {
    const obj = JSON.parse(JSON.stringify(data));
    if (obj != null) {
      const date = obj.Date;
      const datee = new Date(date);
      //datee.setDate(datee.getDay() + 2);

      const dateeF = new Date(date);
      

      //dateeF.setDate(dateeF.getDay() + 2);
      dateeF.setMinutes(dateeF.getMinutes() + 45);
      const event = {
        summary: obj.name,
        location: obj.adresse,
        description: obj.description,
        colorId: 1,
        start: {
          dateTime: datee,
          timeZone: "America/Denver",
        },
        end: {
          dateTime: dateeF,
          timeZone: "America/Denver",
        },
      };
      calendar.freebusy.query(
        {
          resource: {
            timeMin: datee,
            timeMax: dateeF,
            timeZone: "America/Denver",
            items: [{ id: "primary" }],
          },
        },
        (err, res) => {
          // Check for errors in our query and log them if they exist.
          if (err) return console.error("Free Busy Query Error: ", err);

          // Create an array of all events on our calendar during that time.
          const eventArr = res.data.calendars.primary.busy;

          // Check if event array is empty which means we are not busy

          // If we are not busy create a new calendar event.
          return calendar.events.insert(
            { calendarId: "primary", resource: event },

            (err) => {
              // Check for errors and log them if they exist.
              if (err)
                return console.error("Error Creating Calender Event:", err);
              // Else log that the event was created.
              return console.log("Calendar event successfully created.");
            }
          );
        }
      );
    }
  });
});

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
