import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";

import authRoutes from "./routes_auth.js";

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = new sqlite3.Database("./fintech.db", (err) => {
  if (err) {
    console.error("❌ Database error:", err.message);
  } else {
    console.log("✅ Connected to SQLite database");
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("FINTECH IT SOLUTIONS Backend Running");
});

// ================= AUTH ROUTES =================
app.use("/api/auth", authRoutes);

// ================= EMPLOYEES =================
app.get("/api/employees", (req, res) => {
  db.all("SELECT * FROM employees", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ================= PROJECTS =================
app.get("/api/projects", (req, res) => {
  db.all("SELECT * FROM projects", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ================= PAYROLL =================
app.get("/api/payroll", (req, res) => {
  db.all("SELECT * FROM payroll", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ================= CONTACT =================
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  db.run(
    "INSERT INTO messages (name,email,phone,message) VALUES (?,?,?,?)",
    [name, email, phone, message],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ success: true });
    }
  );
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
