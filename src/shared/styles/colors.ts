export const colors = {
  orange: {
    primary: "#F97316",
    secondary: "#FB923C",
    dark: "#EA580C",
    light: "#FED7AA",
    vibrant: "#FF8A00",
    muted: "#F9731680",
  },

  black: {
    primary: "#0A0A0A",
    secondary: "#1A1A1A",
    light: "#2D2D2D",
    background: "#000000",
    overlay: "#000000CC",
  },

  gray: {
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },

  status: {
    success: "#00C851",
    error: "#F44336",
    warning: "#FFBB33",
    info: "#33B5E5",
  },
} as const;

export type Colors = typeof colors;
