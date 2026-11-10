import { ROUTES } from "@/shared";

export const MENU_ITEMS = [
  { href: ROUTES.HOME, label: "Главная" },
  { href: ROUTES.FORECASTS, label: "Прогнозы" },
  { href: ROUTES.RESULTS, label: "Статистика" },
  { href: ROUTES.BROADCASTS, label: "Трансляции" },
  { href: ROUTES.PARTNERS, label: "Партнёры" },
  { href: ROUTES.ABOUT, label: "О нас" },
  { href: ROUTES.NEWS, label: "Блог" },
] as const;
