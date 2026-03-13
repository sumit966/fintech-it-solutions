import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  client: String,
  year: String,
  description: String,
});

export default mongoose.model("Project", projectSchema);