import { z } from "zod";
import { createPasswordSchema, PasswordMessages } from "./password.schema";

export const createLoginSchema = (messages: {
  emailRequired: string;
  emailInvalid: string;
  password: PasswordMessages;
}) => {
  return z.object({
    email: z
      .string()
      .min(1, messages.emailRequired)
      .email(messages.emailInvalid),
    password: createPasswordSchema(messages.password),
  });
};

export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;