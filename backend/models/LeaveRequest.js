import mongoose from 'mongoose';

const leaveRequestSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  type: { type: String, enum: ['sick', 'casual', 'earned', 'unpaid', 'emergency'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  approvedAt: Date,
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('LeaveRequest', leaveRequestSchema);
