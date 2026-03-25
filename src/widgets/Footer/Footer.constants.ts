import { ROUTES } from "@/shared/config";

export const FOOTER_SECTIONS = [
  {
    title: "Навигация",
    links: [
      { href: ROUTES.HOME, label: "Главная" },
      { href: ROUTES.NEWS, label: "Новости" },
      { href: ROUTES.FORECASTS, label: "Прогнозы" },
      { href: ROUTES.RESULTS, label: "Результаты" },
      { href: ROUTES.BONUSES, label: "Бонусы" },
    ],
  },
  {
    title: "Правовая информация",
    links: [
      { href: ROUTES.PRIVACY_POLICY, label: "Политика конфиденциальности" },
      { href: ROUTES.COOKIE_POLICY, label: "Политика cookie" },
      { href: ROUTES.TERMS_OF_USE, label: "Пользовательское соглашение" },
    ],
  },
];
