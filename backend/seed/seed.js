import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Job from "../models/Job.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected (Seeder)");

    // ===== USERS =====
    const users = [
      { email: "admin@fintech.com", password: "admin123", role: "admin" },
      { email: "hr@fintech.com", password: "hr123", role: "hr" }
    ];

    for (const u of users) {
      const exists = await User.findOne({ email: u.email });
      if (!exists) {
        await User.create({
          email: u.email,
          password: bcrypt.hashSync(u.password, 10),
          role: u.role
        });
        console.log(`✅ User created: ${u.email}`);
      } else {
        console.log(`ℹ️ User exists: ${u.email}`);
      }
    }

    // ===== JOBS =====
    const count = await Job.countDocuments();
    if (count === 0) {
      const jobs = [];
      for (let i = 1; i <= 50; i++) {
        jobs.push({
          title: `Software Engineer ${i}`,
          department: "Engineering",
          experience: "1–5 Years",
          skills: ["JavaScript", "React", "Node.js"],
          location: "India",
          salaryRange: "₹5–12 LPA",
          description: "Enterprise IT role",
          responsibilities: ["Development", "Testing", "Deployment"],
          requirements: ["Problem solving"]
        });
      }
      await Job.insertMany(jobs);
      console.log("✅ 50 Jobs inserted");
    } else {
      console.log("ℹ️ Jobs already exist");
    }

    process.exit();
  } catch (err) {
    console.error("❌ Seeder error:", err);
    process.exit(1);
  }
};

seed();
