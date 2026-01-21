import express from "express";
import sqlite3 from "sqlite3";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();
const SECRET = "FINTECH_SECRET_KEY";

/* 🔥 ABSOLUTE DATABASE PATH (NO ERRORS GUARANTEED) */
const db = new sqlite3.Database(
  "D:/My website/FINTECH_IT_SOLUTIONS_FULL/backend/fintech.db",
  (err) => {
    if (err) {
      console.error("❌ AUTH DB ERROR:", err.message);
    } else {
      console.log("✅ Auth DB connected successfully");
    }
  }
);

/* ================= LOGIN ================= */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, user) => {
      if (err) {
        console.error("❌ SQL ERROR:", err.message);
        return res.status(500).json({ message: err.message });
      }

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res.status(401).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        SECRET,
        { expiresIn: "1d" }
      );

      res.json({
        token,
        role: user.role,
        email: user.email,
      });
    }
  );
});

export default router;
