import { Mail, Send, Phone, MapPin } from "lucide-react";

import { ROUTES } from "@/shared/config";

export const FOOTER_SECTIONS = [
  {
    title: "Разделы",
    links: [
      { href: ROUTES.HOME, label: "Главная" },
      { href: ROUTES.FORECASTS, label: "Прогнозы" },
      { href: ROUTES.RESULTS, label: "Статистика" },
      { href: ROUTES.BROADCASTS, label: "Трансляции" },
      { href: ROUTES.PARTNERS, label: "Партнёры" },
      { href: ROUTES.ABOUT, label: "О нас" },
      { href: ROUTES.NEWS, label: "Блог" },
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

export const FOOTER_CONTACTS = [
  {
    icon: Mail,
    label: "support@footballstats.com",
    href: "mailto:support@footballstats.com",
  },
  {
    icon: Send,
    label: "@footballstats",
    href: "https://t.me/footballstats",
  },
  {
    icon: Phone,
    label: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
  },
  {
    icon: MapPin,
    label: "Москва, ул. Пример, 1",
    href: null,
  },
] as const;
