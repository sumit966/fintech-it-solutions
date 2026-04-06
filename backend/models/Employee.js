import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['founder', 'hr', 'employee', 'intern'], default: 'employee' },
  department: { type: String, enum: ['Engineering', 'HR', 'Sales', 'Marketing', 'Finance', 'Admin'] },
  designation: String,
  joiningDate: Date,
  salary: Number,
  bankAccount: String,
  panNumber: String,
  phone: String,
  address: String,
  emergencyContact: String,
  skills: [String],
  experience: Number,
  education: String,
  status: { type: String, enum: ['active', 'inactive', 'on_leave'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Employee', employeeSchema);
