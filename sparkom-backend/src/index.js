const express = require("express");
const connectToDB = require("../config/db");

const app = express();
app.use(express.json());

//* Connect to DB
connectToDB();

// Importe Routes
const userRouter = require("./routers/user.router");
// Define Routes
app.use(userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});
