export const LANGUAGES = [
  { value: "pt", label: "Português" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
] as const;

export type Locale = (typeof LANGUAGES)[number]["value"];
