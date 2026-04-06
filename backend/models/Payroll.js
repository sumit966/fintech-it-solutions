import mongoose from 'mongoose';

const payrollSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  month: { type: String, required: true },
  year: { type: Number, required: true },
  basicSalary: Number,
  hra: Number,
  allowances: Number,
  deductions: Number,
  netSalary: Number,
  bonus: { type: Number, default: 0 },
  pf: Number,
  tax: Number,
  status: { type: String, enum: ['pending', 'processed', 'paid'], default: 'pending' },
  paymentDate: Date,
  transactionId: String,
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Payroll', payrollSchema);
