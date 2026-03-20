import styled from "styled-components";
import { ParagraphProps } from "./Paragraph.types";

export const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${({ theme, size = "md" }) =>
    theme.typography.paragraph[size].fontSize};
  font-weight: ${({ theme, size = "md" }) =>
    theme.typography.paragraph[size].fontWeight};
  color: ${({ theme }) => theme.colors.gray[200]};
  margin: 0;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ size = "md" }) => {
      switch (size) {
        case "lg":
          return "1rem";
        case "md":
          return "0.9375rem";
        case "sm":
          return "0.8125rem";
        default:
          return "0.9375rem";
      }
    }};
  }
`;
