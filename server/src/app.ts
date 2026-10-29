import express from "express";

import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth/registerUser.route.js";
config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/v1/auth", authRouter);

export default app;
