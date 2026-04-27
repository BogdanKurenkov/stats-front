import { z } from "zod";
import { createPasswordSchema, PasswordMessages } from "./password.schema";

export const createRegisterSchema = (messages: {
  nameRequired: string;
  nameMin: string;
  emailRequired: string;
  emailInvalid: string;
  password: PasswordMessages;
  confirmPasswordRequired: string;
  confirmPasswordMatch: string;
}) => {
  return z
    .object({
      name: z.string().min(1, messages.nameRequired).min(2, messages.nameMin),
      email: z
        .string()
        .min(1, messages.emailRequired)
        .email(messages.emailInvalid),
      password: createPasswordSchema(messages.password),
      confirmPassword: z.string().min(1, messages.confirmPasswordRequired),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: messages.confirmPasswordMatch,
      path: ["confirmPassword"],
    });
};

export type RegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>;