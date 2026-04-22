import { z } from "zod";

import { passwordSchema } from "./password.schema";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "Имя обязательно")
      .min(2, "Имя должно содержать минимум 2 символа"),
    email: z
      .string()
      .min(1, "Email обязателен")
      .email("Введите корректный email"),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Подтверждение пароля обязательно"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
