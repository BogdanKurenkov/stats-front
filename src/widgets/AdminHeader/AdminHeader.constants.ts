import { ROUTES } from "@/shared";

export const MENU_ITEMS = [
  { href: ROUTES.ADMIN_ROOT, label: "Админка" },
  { href: ROUTES.ADMIN_FORECASTS.ROOT, label: "Прогнозы" },
  { href: ROUTES.ADMIN_PARTNERS.ROOT, label: "Партнеры" },
] as const;
