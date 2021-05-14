const express = require("express");
const {
    getAllJobs,
    getJobById,
    createJob,
    updateJobById,
    deleteJob,
    uploadImg
} = require("../controllers/Job.controller");

const router = new express.Router();

router.post("/", uploadImg ,createJob);
router.get("/showJob", getAllJobs);
router.get("/showbyId/:id", getJobById);
router.patch("/updateJob/:id", updateJobById);
router.delete("/deleteJob/:id", deleteJob);

module.exports = router;