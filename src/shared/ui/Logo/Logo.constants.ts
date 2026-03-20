export const LOGO_SIZES = {
  SMALL: 30,
  DEFAULT: 50,
  LARGE: 80,
} as const;

export type LogoSizeVariant = keyof typeof LOGO_SIZES;
