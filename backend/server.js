import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import multer from 'multer';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

// Import routes
import authRoutes from './routes/auth.routes.js';
import jobsRoutes from './routes/jobs.routes.js';
import adminRoutes from './routes/admin.routes.js';
import projectsRoutes from './routes/projects.routes.js';
import chatRoute from './routes/chat.js';

// Import models
import Job from './models/Job.js';

// Email function
const sendEmail = async ({ to, subject, text, html }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
  
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject,
    text: text || '',
    html: html || text
  });
};

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('? MongoDB Connected');
  } catch (error) {
    console.error('? MongoDB Error:', error);
    process.exit(1);
  }
};

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));

// File upload setup
const uploadDir = './uploads/resumes';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({
  storage: multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname.replace(/\s/g, '-'));
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files allowed'));
    }
  }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/careers/jobs', jobsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/chat', chatRoute);

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    
    await sendEmail({
      to: 'fintechitsolutions.info@gmail.com',
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Job application endpoint
app.post('/api/careers/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter, jobId, jobTitle } = req.body;
    
    console.log('Application received:', { name, email, jobId });
    
    if (!name || !email || !jobId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    if (!req.file) {
      return res.status(400).json({ error: 'Resume file required' });
    }
    
    // Find job title if not provided
    let jobTitleText = jobTitle;
    if (!jobTitleText) {
      try {
        const job = await Job.findById(jobId);
        if (job) jobTitleText = job.title;
      } catch(e) {}
    }
    
    // Send email to HR
    await sendEmail({
      to: 'fintechitsolutions.info@gmail.com',
      subject: `Job Application: ${jobTitleText || 'Position'} from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Experience: ${experience || 'Not provided'}
Cover Letter: ${coverLetter || 'Not provided'}
Job ID: ${jobId}
      `
    });
    
    // Send confirmation to applicant
    await sendEmail({
      to: email,
      subject: 'Application Received - Fintech IT Solutions',
      text: `Thank you for applying for ${jobTitleText || 'the position'}. We will review your application and get back to you soon.`
    });
    
    console.log('Application submitted successfully');
    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Application error:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API OK', time: new Date() });
});

app.get('/', (req, res) => {
  res.send('Fintech IT Solutions Backend Running');
});

// Start server
app.listen(PORT, () => {
  console.log(`?? Server running on http://localhost:${PORT}`);
});
