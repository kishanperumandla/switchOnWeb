import z from "zod";

export const userSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last Name is Required"),
  mobileNumber: z.string().regex(/^\+?\d{10,15}$/, "Enter a valid mobile number"),
  email: z.email("Enter a valid email").toLowerCase(),
  address: z.string().trim().min(1, "Address is required"),
});

export type UserInput = z.infer<typeof userSchema>;
