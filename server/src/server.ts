import { config } from "./config/index.js";
import app from "./app.js";
import mongoose from "mongoose";

mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("☘️ DB is connected"))
  .catch((err) => {
    console.error("DB connection failed:", err);
    process.exit(1);
  });

app.listen(config.PORT, () => {
  console.log(`🟢 Server running on port ${config.PORT} (${config.NODE_ENV})`);
});
