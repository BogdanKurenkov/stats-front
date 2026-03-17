import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      error: string;
      warning: string;
      background?: string;
      text?: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  }
}
