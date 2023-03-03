import { z } from "zod";

export const validationLoginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(6, { message: "Password must be atleast 6 characters" }),
  submit:z.unknown()
});

export type ValidationLoginSchema = z.infer<typeof validationLoginSchema>;