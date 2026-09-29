const FALLBACK_LOCALE = 'ru';
const LEGAL_KEYS = ['cookiePolicy', 'privacyPolicy', 'termsOfUse'] as const;

const importMessages = async (locale: string) => {
  const messages = await import(`../../../../public/locales/${locale}/common.json`);

  return { ...messages.default };
};

export const loadLegalMessages = async (locale = 'pt') => {
  const messages = await importMessages(locale);

  if (locale === FALLBACK_LOCALE) return messages;

  const fallback = await importMessages(FALLBACK_LOCALE);

  LEGAL_KEYS.forEach((key) => {
    if (!Array.isArray(messages[key]?.sections)) {
      messages[key] = fallback[key];
    }
  });

  return messages;
};
