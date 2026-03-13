import express from "express";
import auth from "../middleware/auth.js";
import Job from "../models/Job.js";
import JobApplication from "../models/JobApplication.js";

const router = express.Router();

router.get("/jobs/all", auth(["admin"]), async (_, res) => {
  res.json(await Job.find());
});

router.get("/job-applications", auth(["admin"]), async (_, res) => {
  res.json(await JobApplication.find());
});

export default router;