const express = require('express');
const connectDB = require('../config/db');
var cors = require('cors');

// routes
const CompanyRouter = require("./routers/company.routers");
const Jobtype = require("./routers/job_type.routers");
const Postedon = require("./routers/posted_on.routers");
const Job = require("./routers/job.controller");
const Schedule = require("./routers/schedule.routers");
const app = express();
app.use(express.json());

// Connect Database
connectDB();

app.use("/company", CompanyRouter);
app.use("/jobtype", Jobtype);
app.use("/postedon", Postedon);
app.use("/job", Job);
app.use("/Schedule",Schedule);


const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});