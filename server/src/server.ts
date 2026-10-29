import app from "./app.js";

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => console.log("☘️ DB is connected"))
  .catch((err) => {
    console.error("DB connection failed:", err);
    process.exit(1);
  });

const PORT = process.env.PORT;

app.listen(PORT || 3001, () => {
  console.log(`🟢 Server is connected on: ${PORT} `);
});
