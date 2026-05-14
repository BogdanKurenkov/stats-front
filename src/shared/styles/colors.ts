export const colors = {
  orange: {
    primary: "#F97316",
    secondary: "#FB923C",
    dark: "#EA580C",
    light: "#FED7AA",
    vibrant: "#FF8A00",
    muted: "#F9731680",
  },

  dark: {
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
  },

  light: {
    black: {
      primary: "#FFFFFF",
      secondary: "#F8F9FA",
      light: "#E9ECEF",
      background: "#FFFFFF",
      overlay: "#0000000D",
    },
    gray: {
      100: "#212529",
      200: "#343A40",
      300: "#495057",
      400: "#6C757D",
      500: "#303337",
      600: "#303337",
      700: "#DEE2E6",
      800: "#E9ECEF",
      900: "#F8F9FA",
    },
    status: {
      success: "#28A745",
      error: "#DC3545",
      warning: "#FFC107",
      info: "#17A2B8",
    },
  },
} as const;

export type Colors = typeof colors;
