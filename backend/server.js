import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import multer from "multer";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

// Import routes
import authRoutes from './routes/auth.routes.js';
import jobsRoutes from './routes/jobs.routes.js';
import adminRoutes from './routes/admin.routes.js';
import projectsRoutes from './routes/projects.routes.js';
import chatRoute from './routes/chat.js';

// Import models
import Job from './models/Job.js';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// File upload setup
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({ dest: uploadDir });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/careers/jobs', jobsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/chat', chatRoute);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', time: new Date() });
});

// Contact endpoint with email
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields required' });
    }

    console.log('Contact received:', { name, email, message });

    // Send email if credentials exist
    if (process.env.MAIL_USER && process.env.MAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: 'fintechitsolutions.info@gmail.com',
        subject: `New Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      });
    }

    res.json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Job application endpoint
app.post('/api/careers/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter, jobId, jobTitle } = req.body;

    if (!name || !email || !jobId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Resume required' });
    }

    console.log('Application received:', { name, email, jobId, jobTitle });

    // Send email if credentials exist
    if (process.env.MAIL_USER && process.env.MAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: 'fintechitsolutions.info@gmail.com',
        subject: `Job Application: ${jobTitle || 'Position'} from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Experience: ${experience || 'Not provided'}
Cover Letter: ${coverLetter || 'Not provided'}
Job ID: ${jobId}
        `
      });
    }

    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (err) {
    console.error('Application error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Fintech IT Solutions Backend Running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
