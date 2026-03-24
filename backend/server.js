import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Create uploads folder if it doesn't exist
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({ dest: uploadDir });

// Sample jobs data
const jobs = [
  {
    _id: "1",
    title: "Frontend Developer",
    department: "Web Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?8-15 LPA",
    experience: "2-5 years",
    description: "Looking for a React developer to build modern web applications.",
    requirements: ["React", "JavaScript", "Tailwind CSS"],
    skills: ["React", "JavaScript", "CSS"],
    benefits: ["Remote work", "Flexible hours"]
  },
  {
    _id: "2",
    title: "Backend Developer",
    department: "Custom Software",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?8-15 LPA",
    experience: "2-5 years",
    description: "Looking for a Node.js developer to build APIs.",
    requirements: ["Node.js", "Express", "MongoDB"],
    skills: ["Node.js", "Express", "MongoDB"],
    benefits: ["Remote work", "Flexible hours"]
  }
];

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date() });
});

// Get all jobs
app.get("/api/careers/jobs", (req, res) => {
  res.json(jobs);
});

// Get single job
app.get("/api/careers/jobs/:id", (req, res) => {
  const job = jobs.find(j => j._id === req.params.id);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ error: "Job not found" });
  }
});

// Contact form
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact:", { name, email, message });
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }
  
  res.json({ success: true, message: "Message sent successfully" });
});

// Job application
app.post("/api/careers/apply", upload.single("resume"), (req, res) => {
  const { name, email, phone, experience, coverLetter, jobId, jobTitle } = req.body;
  console.log("Application:", { name, email, jobId, jobTitle });
  
  if (!name || !email || !jobId) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  if (!req.file) {
    return res.status(400).json({ error: "Resume required" });
  }
  
  res.json({ success: true, message: "Application submitted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
