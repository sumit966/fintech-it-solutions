import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || password !== "admin123") {
    return res.status(401).json({ error: "Invalid login" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token });
});


// HR Login
router.post('/hr-login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Employee.findOne({ email, role: { $in: ['hr', 'founder'] } });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
});\n\n
// Setup - Create first HR user (remove after first use)
router.post('/setup/first-hr', async (req, res) => {
  const existing = await Employee.findOne({ role: { $in: ['hr', 'founder'] } });
  if (existing) return res.status(400).json({ error: 'HR user already exists' });
  
  const hashedPassword = bcrypt.hashSync('Admin@123', 10);
  const employee = new Employee({
    employeeId: 'HR001',
    name: 'Super Admin',
    email: 'admin@fintechitsolutions.com',
    password: hashedPassword,
    role: 'founder',
    department: 'Admin',
    joiningDate: new Date()
  });
  await employee.save();
  res.json({ success: true, email: 'admin@fintechitsolutions.com', password: 'Admin@123' });
});\n\nexport default router;

