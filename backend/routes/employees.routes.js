import express from "express";
import auth from "../middleware/auth.js";
import Employee from "../models/Employee.js";

const router = express.Router();

router.get("/", auth(["admin", "hr"]), async (_, res) => {
  res.json(await Employee.find());
});

router.post("/", auth(["admin"]), async (req, res) => {
  await Employee.create(req.body);
  res.json({ success: true });
});

export default router;
