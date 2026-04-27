import { z } from "zod";

export interface PasswordMessages {
  min: string;
  uppercase: string;
  digit: string;
}

export const createPasswordSchema = (messages: PasswordMessages) => {
  return z
    .string()
    .min(6, messages.min)
    .regex(/[A-Z]/, messages.uppercase)
    .regex(/[0-9]/, messages.digit);
};

export type PasswordSchema = z.infer<ReturnType<typeof createPasswordSchema>>;