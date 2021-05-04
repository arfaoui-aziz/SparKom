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
// IMPORTE JOBS
const CompanyRouter = require("./routers/company.rounter");
const Jobtype = require("./routers/job_type.router");
const Postedon = require("./routers/posted_on.router");
const Job = require("./routers/job.router");
const Schedule = require("./routers/schedule.router");

const app = express();
app.use(cors());
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

// JOB  
app.use("/company", CompanyRouter);
app.use("/jobtype", Jobtype);
app.use("/postedon", Postedon);
app.use("/job", Job);
app.use("/Schedule",Schedule);
app.use('/public', express.static('./public'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});
