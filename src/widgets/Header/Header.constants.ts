import { ROUTES } from "@/shared";

export const MENU_ITEMS = [
  { href: ROUTES.HOME, label: "Главная" },
  { href: ROUTES.NEWS, label: "Новости" },
  { href: ROUTES.FORECASTS, label: "Прогнозы" },
  { href: ROUTES.RESULTS, label: "Результаты" },
  { href: ROUTES.BONUSES, label: "Бонусы" },
] as const;
