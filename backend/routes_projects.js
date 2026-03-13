import express from "express";
import sqlite3 from "sqlite3";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();
const db = new sqlite3.Database("./fintech.db");

router.get("/", verifyToken, (req, res) => {
  db.all("SELECT * FROM projects", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

export default router;
