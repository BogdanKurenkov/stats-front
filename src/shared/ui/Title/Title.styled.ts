import styled from "styled-components";

import { TitleProps } from "./Title.types";

export const StyledTitle = styled.h1<TitleProps>`
  line-height: 1.2;
  margin: 0;
  font-size: ${({ theme, as, level }) => {
    const tag = (as || level || "h1") as keyof typeof theme.typography.title;
    return theme.typography.title[tag].fontSize;
  }};
  font-weight: ${({ theme, as, level }) => {
    const tag = (as || level || "h1") as keyof typeof theme.typography.title;
    return theme.typography.title[tag].fontWeight;
  }};
  color: ${({ theme, color }) => {
    if (!color) return theme.colors.gray[100];

    const colorKeys = color.split(".");
    let value: unknown = theme.colors;

    for (const key of colorKeys) {
      if (value && typeof value === "object" && key in value) {
        value = (value as Record<string, unknown>)[key];
      } else {
        return color;
      }
    }

    return typeof value === "string" ? value : color;
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme, as, level }) => {
      const tag = (as || level || "h1") as keyof typeof theme.typography.title;
      const fontSize = theme.typography.title[tag].fontSize;

      switch (tag) {
        case "h1":
          return "2rem";
        case "h2":
          return "1.75rem";
        case "h3":
          return "1.5rem";
        case "h4":
          return "1.25rem";
        case "h5":
          return "1.125rem";
        case "h6":
          return "1rem";
        default:
          return fontSize;
      }
    }};
  }
`;
