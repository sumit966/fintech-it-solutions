import express from "express";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Create uploads folder
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const upload = multer({ dest: uploadDir });

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

// All 12 Jobs Data
const jobs = [
  { _id: "1", title: "Senior Full Stack Developer", department: "Custom Software Development", location: "Remote (India)", type: "Full-time", salary: "?8-15 LPA", experience: "3-6 years", description: "Build enterprise-grade custom software solutions.", requirements: ["React", "Node.js", "MongoDB", "TypeScript"], skills: ["React", "Node.js", "MongoDB"], benefits: ["Remote work", "Health insurance"] },
  { _id: "2", title: "Backend Developer - ERP Systems", department: "Custom Software Development", location: "Remote (India)", type: "Full-time", salary: "?6-12 LPA", experience: "2-5 years", description: "Build powerful ERP and business automation systems.", requirements: ["Node.js", "PostgreSQL", "MongoDB"], skills: ["Node.js", "PostgreSQL", "MongoDB"], benefits: ["Remote work", "Flexible hours"] },
  { _id: "3", title: "React/Next.js Frontend Developer", department: "Web Development", location: "Remote (India)", type: "Full-time", salary: "?5-10 LPA", experience: "2-4 years", description: "Build responsive web applications.", requirements: ["React", "Next.js", "TypeScript"], skills: ["React", "Next.js", "TypeScript"], benefits: ["Remote work", "Latest MacBook"] },
  { _id: "4", title: "E-commerce Developer", department: "Web Development", location: "Remote (India)", type: "Full-time", salary: "?4-9 LPA", experience: "2-5 years", description: "Build Shopify and WooCommerce stores.", requirements: ["Shopify", "WooCommerce", "PHP"], skills: ["Shopify", "WooCommerce", "PHP"], benefits: ["Remote work", "Performance bonuses"] },
  { _id: "5", title: "React Native Mobile Developer", department: "Mobile Development", location: "Remote (India)", type: "Full-time", salary: "?6-12 LPA", experience: "2-5 years", description: "Build cross-platform mobile apps.", requirements: ["React Native", "Redux", "Firebase"], skills: ["React Native", "Redux", "Firebase"], benefits: ["Remote work", "App store support"] },
  { _id: "6", title: "Flutter Developer", department: "Mobile Development", location: "Remote (India)", type: "Full-time", salary: "?5-10 LPA", experience: "1-4 years", description: "Build cross-platform apps using Flutter.", requirements: ["Flutter", "Dart", "REST APIs"], skills: ["Flutter", "Dart", "REST APIs"], benefits: ["Remote work", "Flexible schedule"] },
  { _id: "7", title: "AI/ML Engineer", department: "AI Development", location: "Remote (India)", type: "Full-time", salary: "?10-18 LPA", experience: "2-5 years", description: "Build intelligent solutions using ML and LLMs.", requirements: ["Python", "TensorFlow", "OpenAI API"], skills: ["Python", "TensorFlow", "OpenAI API"], benefits: ["Cutting-edge AI work", "Research opportunities"] },
  { _id: "8", title: "AI Integration Specialist", department: "AI Development", location: "Remote (India)", type: "Full-time", salary: "?6-12 LPA", experience: "1-3 years", description: "Integrate AI APIs into applications.", requirements: ["JavaScript", "Python", "OpenAI API"], skills: ["JavaScript", "Python", "OpenAI API"], benefits: ["Learn latest AI tech", "Training budget"] },
  { _id: "9", title: "Senior UI/UX Designer", department: "UI/UX Design", location: "Remote (India)", type: "Full-time", salary: "?7-14 LPA", experience: "3-6 years", description: "Design user-centric interfaces.", requirements: ["Figma", "Adobe XD", "User Research"], skills: ["Figma", "Adobe XD", "User Research"], benefits: ["Creative freedom", "Latest design tools"] },
  { _id: "10", title: "QA Automation Engineer", department: "QA & Testing", location: "Remote (India)", type: "Full-time", salary: "?5-10 LPA", experience: "2-5 years", description: "Ensure software quality through automated testing.", requirements: ["Selenium", "Cypress", "JavaScript"], skills: ["Selenium", "Cypress", "JavaScript"], benefits: ["Remote work", "Growth to leadership"] },
  { _id: "11", title: "Frontend Development Intern", department: "Web Development", location: "Remote (India)", type: "Internship", salary: "?15,000-25,000/month", experience: "0-1 years", description: "Learn React and modern web development.", requirements: ["HTML", "CSS", "JavaScript"], skills: ["HTML", "CSS", "JavaScript"], benefits: ["Paid internship", "Mentorship"] },
  { _id: "12", title: "Backend Development Intern", department: "Custom Software Development", location: "Remote (India)", type: "Internship", salary: "?15,000-25,000/month", experience: "0-1 years", description: "Learn Node.js and MongoDB.", requirements: ["JavaScript", "Node.js basics"], skills: ["JavaScript", "Node.js"], benefits: ["Paid internship", "Real project experience"] }
];

// API Endpoints
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date() });
});

app.get("/api/careers/jobs", (req, res) => {
  res.json(jobs);
});

app.get("/api/careers/jobs/:id", (req, res) => {
  const job = jobs.find(j => j._id === req.params.id);
  job ? res.json(job) : res.status(404).json({ error: "Not found" });
});

// Contact form with email
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }
    
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'fintechitsolutions.info@gmail.com',
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    
    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Job application with email
app.post("/api/careers/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter, jobId, jobTitle } = req.body;
    
    if (!name || !email || !jobId) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Resume required" });
    }
    
    const job = jobs.find(j => j._id === jobId);
    const title = jobTitle || (job ? job.title : "Position");
    
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'fintechitsolutions.info@gmail.com',
      subject: `Job Application: ${title} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nExperience: ${experience || 'N/A'}\nCover Letter: ${coverLetter || 'N/A'}\nJob: ${title}\nJob ID: ${jobId}`,
      attachments: [{ filename: req.file.originalname, path: req.file.path }]
    });
    
    res.json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Application error:", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
