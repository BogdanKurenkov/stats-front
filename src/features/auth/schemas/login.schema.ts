import { z } from "zod";
import { passwordSchema } from "./password.schema";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email обязателен")
    .email("Введите корректный email"),
  password: passwordSchema,
});

export type LoginFormData = z.infer<typeof loginSchema>;
