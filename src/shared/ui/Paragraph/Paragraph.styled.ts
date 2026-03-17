import styled from "styled-components";
import { ParagraphProps } from "./Paragraph.types";

export const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${({ theme, size = "md" }) =>
    theme.typography.paragraph[size].fontSize};
  font-weight: ${({ theme, size = "md" }) =>
    theme.typography.paragraph[size].fontWeight};
  color: ${({ theme }) => theme.colors.gray[200]};
`;
