import { DEFAULT_LOCALE } from "./i18n";

export const loadMessages = async (locale?: string) => {
  const targetLocale = locale || DEFAULT_LOCALE;
  const messages = await import(`@public/locales/${targetLocale}/common.json`);

  return messages.default;
};
