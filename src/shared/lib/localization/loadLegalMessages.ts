import fs from 'fs';
import path from 'path';

const FALLBACK_LOCALE = 'ru';
const LEGAL_KEYS = ['cookiePolicy', 'privacyPolicy', 'termsOfUse'] as const;

const readMessages = (locale: string) => {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'common.json');

  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

export const loadLegalMessages = (locale = 'pt') => {
  const messages = readMessages(locale);

  if (locale === FALLBACK_LOCALE) return messages;

  const fallback = readMessages(FALLBACK_LOCALE);

  LEGAL_KEYS.forEach((key) => {
    if (!Array.isArray(messages[key]?.sections)) {
      messages[key] = fallback[key];
    }
  });

  return messages;
};
