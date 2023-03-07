import { z } from "zod";

export const validationBookSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Title is required" }),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .min(1, { message: "Price is required" }),
});

export type ValidationBookSchema = z.infer<typeof validationBookSchema>;
