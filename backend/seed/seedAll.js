import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Employee from "../models/Employee.js";
import Project from "../models/Project.js";

export const seedAll = async () => {
  // ADMIN
  await User.create({
    name: "Admin",
    email: "admin@fintech.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "admin"
  });

  // HR
  await User.create({
    name: "HR Manager",
    email: "hr@fintech.com",
    password: bcrypt.hashSync("hr123", 10),
    role: "hr"
  });

  // 20 Employees
  const employees = [];
  for (let i = 1; i <= 20; i++) {
    employees.push({
      empId: `FT-EMP-${100 + i}`,
      name: `Employee ${i}`,
      email: `emp${i}@fintech.com`,
      designation: "Software Engineer",
      department: i % 2 === 0 ? "Engineering" : "QA",
      joiningDate: new Date(),
      salary: 40000 + i * 1000
    });
  }
  await Employee.insertMany(employees);

  // Projects
  await Project.insertMany([
    {
      title: "Fintech Loan Platform",
      client: "ABC Bank",
      techStack: ["React", "Node", "MongoDB"],
      status: "Ongoing"
    },
    {
      title: "HR Management System",
      client: "Internal",
      techStack: ["MERN"],
      status: "Completed"
    }
  ]);

  console.log("✅ SEED COMPLETED");
};
