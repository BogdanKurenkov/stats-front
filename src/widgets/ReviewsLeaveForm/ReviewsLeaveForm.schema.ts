import { z } from "zod";

export const reviewFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Имя должно содержать минимум 2 символа")
      .max(50, "Имя слишком длинное"),
    bookmaker: z.string().min(1, "Выберите букмекера"),
    rating: z
      .number()
      .min(1, "Поставьте оценку от 1 до 5")
      .max(5, "Максимум 5 звёзд"),
    text: z
      .string()
      .trim()
      .min(20, "Отзыв должен содержать минимум 20 символов")
      .max(1000, "Отзыв слишком длинный"),
    otherBookmaker: z.string().optional(),
  })
  .refine(
    (data) =>
      data.bookmaker !== "other" ||
      (data.otherBookmaker && data.otherBookmaker.trim().length >= 2),
    {
      message: "Укажите название букмекера",
      path: ["otherBookmaker"],
    },
  );
