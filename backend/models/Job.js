import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, default: "Remote (India)" },
  type: { type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Internship'], default: 'Full-time' },
  experience: { type: String, required: true },
  salary: { type: String, required: true },
  
  // Job Details
  description: { type: String, required: true },
  responsibilities: [{ type: String }],
  requirements: [{ type: String }],
  benefits: [{ type: String }],
  skills: [{ type: String }],
  
  // Service/Industry mapping
  serviceCategory: { type: String }, // Custom Software, Web Dev, Mobile, AI, etc.
  industry: { type: String }, // Fintech, Healthcare, E-commerce, etc.
  
  // Status
  isActive: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  
  // Metadata
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Job', jobSchema);
