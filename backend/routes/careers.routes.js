import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

// Configure multer for file upload
const uploadDir = './uploads/resumes';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// Job application endpoint
router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter, jobId, jobTitle } = req.body;
    
    // Validate required fields
    if (!name || !email || !jobId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    if (!req.file) {
      return res.status(400).json({ error: 'Resume file is required' });
    }
    
    console.log('Application received:', { name, email, jobId });
    
    // Send email to HR
    await sendEmail({
      to: 'fintechitsolutions.info@gmail.com',
      subject: `New Job Application: ${jobTitle || 'Position'} from ${name}`,
      content: `
        <h2>New Job Application Received</h2>
        <p><strong>Position:</strong> ${jobTitle || 'Not specified'}</p>
        <p><strong>Job ID:</strong> ${jobId}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Experience:</strong> ${experience || 'Not provided'}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${coverLetter || 'No cover letter provided'}</p>
        <p><strong>Resume:</strong> <a href="http://localhost:5002/${req.file.path.replace(/\\/g, '/')}">Download Resume</a></p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path
        }
      ]
    });
    
    // Send confirmation email to applicant
    await sendEmail({
      to: email,
      subject: 'Application Received - Fintech IT Solutions',
      content: `
        <h2>Thank You for Your Application!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for applying for the position. We have received your application and our HR team will review it shortly.</p>
        <p>You will hear from us within 3-5 business days.</p>
        <p>Best regards,<br/>Fintech IT Solutions Team</p>
      `
    });
    
    res.json({ 
      success: true, 
      message: 'Application submitted successfully! We will contact you soon.' 
    });
    
  } catch (error) {
    console.error('Application error:', error);
    res.status(500).json({ error: 'Failed to submit application. Please try again.' });
  }
});

export default router;
