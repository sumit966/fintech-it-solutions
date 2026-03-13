import express from "express";
import multer from "multer";
import { applyJob } from "../controllers/applications.controller.js";

const router = express.Router();

const upload = multer({ dest: "uploads/resumes" });

router.post("/apply", upload.single("resume"), applyJob);

export default router;
