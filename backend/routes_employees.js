import express from "express";
import sqlite3 from "sqlite3";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();
const db = new sqlite3.Database("./fintech.db");
