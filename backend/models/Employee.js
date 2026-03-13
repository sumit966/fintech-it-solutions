import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    empId: String,
    name: String,
    designation: String,
    department: String,
    email: String,
    joiningDate: Date,
    salary: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Employee", EmployeeSchema);
