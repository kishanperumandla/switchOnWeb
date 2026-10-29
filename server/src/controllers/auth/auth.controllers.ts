import type { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { User } from "../../models/user.model.js";

export const registerController = async function (req: Request, res: Response, next: NextFunction) {
  //   console.log(req.body);

  const data = await User.create(req.body);
  console.log(data);

  res.send("He he Successs 🟢");
  console.log("✅ User is created");
};
export const loginController = async function (req: Request, res: Response, next: NextFunction) {
  console.log("🟩 User is Logged in");
};
