import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  job_title: String,
  experience: String,
  resume: String,
  status: { type: String, default: "APPLIED" }
}, { timestamps: true });

export default mongoose.model("JobApplication", jobApplicationSchema);