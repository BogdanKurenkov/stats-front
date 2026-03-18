import { z } from "zod";

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
    password: z
      .string()
      .min(6, "Пароль должен быть не менее 6 символов")
      .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
      .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру"),
    confirmPassword: z.string().min(1, "Подтверждение пароля обязательно"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
