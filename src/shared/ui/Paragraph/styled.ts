import styled from "styled-components";

import { ParagraphProps } from "./types";

export const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${({ theme, size = "md" }) =>
    theme.typography.paragraph[size].fontSize};
  font-weight: ${({ theme, size = "md" }) =>
    theme.typography.paragraph[size].fontWeight};
`;
