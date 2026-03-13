import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  department: String,
  location: String,
  experience: String,
  status: { type: String, default: "OPEN" }
});

export default mongoose.model("Job", jobSchema);