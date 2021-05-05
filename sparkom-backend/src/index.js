const express = require("express");
const cors = require("cors");
const connectToDB = require("../config/db");
// Importe Routes
const userRouter = require("./routers/user.router");
const profileRouter = require("./routers/profile.router");
const postRouter = require("./routers/post.router");
const domainRouter = require("./routers/domain.router");
const skillRouter = require("./routers/skill.router");
const badgeRouter = require("./routers/badge.router");
const cvRouter = require("./routers/cv.router");
var cardC = require("./Models/cards");
const nodemailer =require("nodemailer");
var boardRouter = require('./routers/boards');
var listRouter = require('./routers/lists');
var cardRouter = require('./routers/cards');
const bodyParser = require("body-parser");

const app = express();

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
  "551834373875-16htusu1d6srp6fsks6m5eadpgds82n0.apps.googleusercontent.com",
  "PvZ6Lrv6pdah8739Br2UpiDQ"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04r7LwM-CZxL4CgYIARAAGAQSNwF-L9IrC1H4YrmedReq47ehSaCCYPXdGe8_G0DQn2Yutor2Jl4yChYLRgsaHIqviLB-jwo9Hxg",
});
const calendar = google.calendar({ version: "v3", auth: oAuth2Client });




app.post("/showCalendar/:id", cors(), async (req, res) => {
  cardC.findById(req.params.id, function (err, data) {
    const obj = JSON.parse(JSON.stringify(data));
    if (obj != null) {
      const date = obj.Due_date;
      const datee = new Date(date);
      //datee.setDate(datee.getDay() + 2);

      const dateeF = new Date(date);
      

      //dateeF.setDate(dateeF.getDay() + 2);
      dateeF.setMinutes(dateeF.getMinutes() + 45);
      const event = {
        summary: obj.Card_name,
        location: "",
        description: obj.Description,
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

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

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

app.use('/boards', boardRouter);
app.use('/lists', listRouter);
app.use('/cards', cardRouter);

app.post("/send_mail",cors(), async (req, res) => {
  let {text2} = req.body
  let {mail} = req.body
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: mail,
    subject: "test email",
    html: `<div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    ">
    <h2>Here is your email!</h2>
    <p>${text2}</p>
    <p> All the best ,Sparkom</p>
    </div>`
  })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});
