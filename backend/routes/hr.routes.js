import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Employee from '../models/Employee.js';
import Project from '../models/Project.js';
import Payroll from '../models/Payroll.js';
import Attendance from '../models/Attendance.js';
import LeaveRequest from '../models/LeaveRequest.js';

const router = express.Router();

// Middleware to verify HR/Founder access
const verifyHR = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const employee = await Employee.findById(decoded.id);
    if (!employee || (employee.role !== 'hr' && employee.role !== 'founder')) {
      return res.status(403).json({ error: 'Access denied' });
    }
    req.employee = employee;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// ============ EMPLOYEE MANAGEMENT ============
router.get('/employees', verifyHR, async (req, res) => {
  try {
    const employees = await Employee.find().select('-password');
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/employees', verifyHR, async (req, res) => {
  try {
    const { name, email, role, department, designation, salary, phone, skills, experience } = req.body;
    const employeeId = `EMP${Date.now().toString().slice(-6)}`;
    const password = bcrypt.hashSync(`Fintech@${employeeId}`, 10);
    
    const employee = new Employee({
      employeeId, name, email, password, role, department, designation,
      salary, phone, skills: skills?.split(','), experience, joiningDate: new Date()
    });
    await employee.save();
    res.status(201).json({ success: true, employeeId, defaultPassword: `Fintech@${employeeId}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/employees/:id', verifyHR, async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/employees/:id', verifyHR, async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ PROJECT MANAGEMENT ============
router.get('/projects', verifyHR, async (req, res) => {
  try {
    const projects = await Project.find().populate('team', 'name employeeId');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/projects', verifyHR, async (req, res) => {
  try {
    const projectId = `PRJ${Date.now().toString().slice(-6)}`;
    const project = new Project({ ...req.body, projectId });
    await project.save();
    res.status(201).json({ success: true, projectId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/projects/:id', verifyHR, async (req, res) => {
  try {
    await Project.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ PAYROLL MANAGEMENT ============
router.get('/payroll', verifyHR, async (req, res) => {
  try {
    const payroll = await Payroll.find().populate('employeeId', 'name employeeId salary');
    res.json(payroll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/payroll/process', verifyHR, async (req, res) => {
  try {
    const { month, year } = req.body;
    const employees = await Employee.find({ status: 'active' });
    
    for (const emp of employees) {
      const basicSalary = emp.salary || (emp.role === 'intern' ? 500000 : 800000);
      const hra = basicSalary * 0.4;
      const allowances = basicSalary * 0.2;
      const pf = basicSalary * 0.12;
      const tax = basicSalary > 500000 ? basicSalary * 0.1 : 0;
      const netSalary = basicSalary + hra + allowances - pf - tax;
      
      await Payroll.create({
        employeeId: emp._id, month, year,
        basicSalary, hra, allowances, deductions: pf + tax,
        netSalary, pf, tax, status: 'processed'
      });
    }
    res.json({ success: true, message: `Payroll processed for ${employees.length} employees` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ ATTENDANCE ============
router.post('/attendance/checkin', verifyHR, async (req, res) => {
  try {
    const { employeeId } = req.body;
    const today = new Date().toISOString().split('T')[0];
    
    let attendance = await Attendance.findOne({ employeeId, date: new Date(today) });
    if (!attendance) {
      attendance = new Attendance({ employeeId, date: new Date(today), checkIn: new Date() });
    } else {
      attendance.checkOut = new Date();
      const hours = (attendance.checkOut - attendance.checkIn) / 3600000;
      attendance.hoursWorked = hours;
    }
    await attendance.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ LEAVE REQUESTS ============
router.get('/leaves', verifyHR, async (req, res) => {
  try {
    const leaves = await LeaveRequest.find().populate('employeeId', 'name employeeId');
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/leaves/:id/approve', verifyHR, async (req, res) => {
  try {
    await LeaveRequest.findByIdAndUpdate(req.params.id, {
      status: 'approved', approvedBy: req.employee._id, approvedAt: new Date()
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ DASHBOARD STATS ============
router.get('/dashboard', verifyHR, async (req, res) => {
  try {
    const employees = await Employee.countDocuments();
    const activeProjects = await Project.countDocuments({ status: 'active' });
    const pendingLeaves = await LeaveRequest.countDocuments({ status: 'pending' });
    const monthlyPayroll = await Payroll.aggregate([
      { $match: { month: new Date().toLocaleString('default', { month: 'long' }), year: new Date().getFullYear() } },
      { $group: { _id: null, total: { $sum: '$netSalary' } } }
    ]);
    
    res.json({
      employees, activeProjects, pendingLeaves,
      monthlyPayrollTotal: monthlyPayroll[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
