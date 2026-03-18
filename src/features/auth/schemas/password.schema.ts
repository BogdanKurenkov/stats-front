import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(6, "Пароль должен содержать минимум 6 символов")
  .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
  .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру");

export type PasswordSchema = z.infer<typeof passwordSchema>;
