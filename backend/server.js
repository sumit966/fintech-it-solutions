/* ================= ENV ================= */

import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

/* ================= CORE ================= */

import express from "express";
import cors from "cors";
import fs from "fs";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";

/* ================= DB ================= */

import connectDB from "./config/db.js";

/* ================= ROUTES ================= */

import authRoutes from "./routes/auth.routes.js";
import jobsRoutes from "./routes/jobs.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
import chatRoute from "./routes/chat.js"; // ✅ AI CHAT ROUTE

/* ================= MODELS ================= */

import JobApplication from "./models/JobApplication.js";
import Job from "./models/Job.js";

/* ================= EMAIL ================= */

import { sendEmail } from "./utils/email.js";

/* ================= INIT ================= */

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

/* ================= MIDDLEWARE ================= */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

/* ================= FILE UPLOAD ================= */

const resumeDir = "./uploads/resumes";

if (!fs.existsSync(resumeDir)) {
  fs.mkdirSync(resumeDir, { recursive: true });
}

const upload = multer({
  storage: multer.diskStorage({
    destination: resumeDir,
    filename: (_, file, cb) => {
      const clean = file.originalname.replace(/\s+/g, "-");
      cb(null, Date.now() + "-" + clean);
    },
  }),

  limits: { fileSize: 5 * 1024 * 1024 },

  fileFilter: (_, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF resumes allowed"));
    }
  }
});

/* ================= ROUTES ================= */

app.use("/api/auth", authRoutes);
app.use("/api/careers/jobs", jobsRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/admin", adminRoutes);

/* ================= AI CHAT ROUTE ================= */

app.use("/api/chat", chatRoute);

/* ================= APPLY JOB ================= */

app.post("/api/careers/apply", upload.single("resume"), async (req, res) => {

  try {

    const { name, email, phone, experience, jobId } = req.body;

    if (!name || !email || !jobId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Resume file required" });
    }

    /* FIND JOB */

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    /* SAVE APPLICATION */

    const application = await JobApplication.create({
      name,
      email,
      phone,
      experience,
      jobId,
      resume: req.file.path
    });

    /* EMAIL TO CANDIDATE */

    await sendEmail({
      to: email,
      subject: "Application Received – FINTECH IT SOLUTIONS",
      content: `
      <h2>Application Received</h2>

      <p>Dear ${name},</p>

      <p>Thank you for applying for the position of 
      <strong>${job.title}</strong>.</p>

      <p>Our HR team will review your application and contact you soon.</p>
      `
    });

    /* EMAIL TO HR */

    await sendEmail({
      to: "fintechitsolutions.info@gmail.com",
      subject: "New Job Application Received",
      content: `
      <h2>New Candidate Applied</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Experience:</strong> ${experience}</p>
      <p><strong>Role Applied:</strong> ${job.title}</p>

      <p><b>Resume Download:</b></p>
      <a href="http://localhost:${PORT}/${req.file.path}" target="_blank">
      Download Resume
      </a>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path
        }
      ]
    });

    res.json({ success: true });

  } catch (err) {

    console.error("APPLY ERROR:", err);

    res.status(500).json({
      error: "Application failed"
    });

  }

});

/* ================= CONTACT ================= */

app.post("/api/contact", async (req, res) => {

  try {

    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    await sendEmail({
      to: "fintechitsolutions.info@gmail.com",
      subject: "Website Contact Message",
      content: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.json({ success: true });

  } catch (err) {

    console.error("CONTACT ERROR:", err);

    res.status(500).json({ error: "Failed to send message" });

  }

});

/* ================= HEALTH CHECK ================= */

app.get("/api/health", (req, res) => {
  res.json({
    status: "API OK",
    time: new Date()
  });
});

/* ================= ROOT ================= */

app.get("/", (req, res) => {
  res.send("FINTECH IT SOLUTIONS Backend Running");
});

/* ================= START ================= */

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});