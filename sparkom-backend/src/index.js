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

const nodemailer =require("nodemailer");
var boardRouter = require('./routers/boards');
var listRouter = require('./routers/lists');
var cardRouter = require('./routers/cards');
const bodyParser = require("body-parser");

const app = express();
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
