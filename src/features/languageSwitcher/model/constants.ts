export const LANGUAGES = [
  { value: "pt", label: "Português" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "ru", label: "Русский" },
] as const;

export type Locale = (typeof LANGUAGES)[number]["value"];
