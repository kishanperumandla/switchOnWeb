import express from "express";

import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth/registerUser.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/v1/auth", authRouter);

export default app;
