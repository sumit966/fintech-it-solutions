import express from "express";
import multer from "multer";
import JobApplication from "../models/JobApplication.js";
import { sendJobAlert } from "../utils/email.js";

const router = express.Router();

const upload = multer({ dest: "uploads/resumes" });

router.post("/apply", upload.single("resume"), async (req, res) => {
  const app = await JobApplication.create({
    ...req.body,
    resume: req.file?.path
  });

  await sendJobAlert({
    name: req.body.name,
    email: req.body.email,
    job: req.body.job_title
  });

  res.json({ success: true });
});

export default router;
