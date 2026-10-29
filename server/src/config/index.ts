import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "qa", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(3000),
  MONGODB_URI: z.string().startsWith("mongodb", "MONGODB_URI must start with mongodb:// or mongodb+srv://"),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("❌ Invalid environment variables:");
  console.error(z.flattenError(result.error).fieldErrors);
  process.exit(1);
}

export const config = result.data;
