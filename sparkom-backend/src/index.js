const express = require("express");
const connectToDB = require("../config/db");

const app = express();
app.use(express.json());

//* Connect to DB
connectToDB();

// Importe Routes

// Define Routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});
