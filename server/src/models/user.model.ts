import mongoose from "mongoose";
import type { UserInput } from "../schemas/user.schema.js";

const mongooseUserSchema = new mongoose.Schema<UserInput>(
  {
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String,
    address: String,
  },
  { timestamps: true },
);

export const User = mongoose.model<UserInput>("User", mongooseUserSchema);
