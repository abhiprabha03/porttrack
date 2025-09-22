// src/models/User.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  name: { type: String, required: true },
  program: String,
  srn: String,
  mobile: String,
});

export default mongoose.models.User || mongoose.model("User", userSchema);