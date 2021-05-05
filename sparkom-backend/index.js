const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./src/routes/user");
const postRoutes = require("./src/routes/post");
const topicRoutes = require("./src/routes/topic");
const questionRoutes = require("./src/routes/question");

// const expressJwt = require("express-jwt");

const app = express();

require("dotenv").config();

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

//server port
const port = process.env.PORT;

//connect to database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

connectToDatabase();

//use routes
app.use("/", userRoutes);
app.use("/", postRoutes);
app.use("/", topicRoutes);
app.use("/", questionRoutes);

//home page
app.get("/", function (req, res) {
  res.send("it's working");
});

//start server
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`server started at port ${port}`);
});


const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/live', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(3006)