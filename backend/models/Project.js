import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  description: String,
  client: {
    name: String,
    company: String,
    email: String,
    phone: String
  },
  status: { type: String, enum: ['planning', 'active', 'review', 'completed', 'on_hold'], default: 'planning' },
  priority: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
  startDate: Date,
  endDate: Date,
  budget: Number,
  billedAmount: { type: Number, default: 0 },
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
  technologies: [String],
  tasks: [{
    title: String,
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' },
    hoursSpent: { type: Number, default: 0 },
    dueDate: Date,
    completedAt: Date
  }],
  vmInstances: [{
    name: String,
    type: { type: String, enum: ['development', 'staging', 'production'] },
    specs: { cpu: Number, ram: Number, storage: Number },
    status: { type: String, enum: ['running', 'stopped', 'provisioning'], default: 'stopped' },
    ipAddress: String,
    createdAt: Date
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Project', projectSchema);
