export const LOGO_SIZES = {
  SMALL: 30,
  DEFAULT: 40,
  LARGE: 50,
} as const;

export type LogoSizeVariant = keyof typeof LOGO_SIZES;
