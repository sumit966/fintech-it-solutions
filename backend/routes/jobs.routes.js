import express from "express";
import Job from "../models/Job.js";

const router = express.Router();


/* ================= GET ALL JOBS ================= */

router.get("/", async (req, res) => {

  try {

    const jobs = await Job.find().sort({ createdAt: -1 });

    res.json(jobs);

  } catch (err) {

    console.error("JOBS ERROR:", err);

    res.status(500).json({
      error: "Failed to load jobs"
    });

  }

});


/* ================= GET SINGLE JOB ================= */

router.get("/:id", async (req, res) => {

  try {

    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        error: "Job not found"
      });
    }

    res.json(job);

  } catch (err) {

    console.error("JOB ERROR:", err);

    res.status(500).json({
      error: "Failed to load job"
    });

  }

});


/* ================= CREATE JOB (ADMIN) ================= */

router.post("/", async (req, res) => {

  try {

    const { title, location, department, description } = req.body;

    const job = await Job.create({
      title,
      location,
      department,
      description
    });

    res.json(job);

  } catch (err) {

    console.error("CREATE JOB ERROR:", err);

    res.status(500).json({
      error: "Failed to create job"
    });

  }

});


export default router;