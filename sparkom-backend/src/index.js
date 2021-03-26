const express = require("express");
const connectToDB = require("../config/db");
// Importe Routes
const userRouter = require("./routers/user.router");

const app = express();
app.use(express.json());

//* Connect to DB
connectToDB();

// Define Routes
app.use("/users", userRouter);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});
