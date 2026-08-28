import z from "zod";

export const partnerFormSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Заголовок обязателен"),
  amount: z.string().min(1, "Сумма обязательна"),
  subtitle: z.string().min(1, "Подзаголовок обязателен"),
  bonusAmount: z.string().min(1, "Сумма бонуса обязательна"),
  minOdds: z.string().min(1, "Минимальный коэффициент обязателен"),
  wagering: z.string().min(1, "Вейджер обязателен"),
  buttonText: z.string().min(1, "Текст кнопки обязателен"),
  terms: z.string().min(1, "Условия обязательны"),
});
