import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  checkIn: Date,
  checkOut: Date,
  status: { type: String, enum: ['present', 'absent', 'late', 'half_day', 'holiday', 'leave'], default: 'present' },
  hoursWorked: { type: Number, default: 0 },
  overtime: { type: Number, default: 0 },
  leaveType: { type: String, enum: ['sick', 'casual', 'earned', 'unpaid', null], default: null },
  notes: String
});

export default mongoose.model('Attendance', attendanceSchema);
