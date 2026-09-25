import z from "zod";

export const oddSchema = z.object({
  label: z.string().min(1, "Название обязательно"),
  value: z.string().min(1, "Значение обязательно"),
});

export const forecastFormSchema = z.object({
  id: z.number(),
  sport: z.string().min(1, "Вид спорта обязателен"),
  date: z.string().min(1, "Дата обязательна"),
  time: z.string().min(1, "Время обязательно"),
  homeTeam: z.string().min(1, "Название команды обязательно"),
  awayTeam: z.string().min(1, "Название команды обязательно"),
  odds: z.array(oddSchema).min(1, "Добавьте хотя бы один коэффициент"),
  author: z.string().min(1, "Имя автора обязательно"),
  preview: z.string().min(1, "Текст прогноза обязателен"),
  timestamp: z.string().optional(),
});
