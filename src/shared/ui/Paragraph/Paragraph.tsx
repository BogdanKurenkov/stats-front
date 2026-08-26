import type { ParagraphProps } from "./Paragraph.types";

import { StyledParagraph } from "./Paragraph.styled";

export const Paragraph = ({
  as = 'p',
  size = 'md',
  children,
  ...rest
}: ParagraphProps) => {
  return (
    <StyledParagraph as={as} size={size} {...rest}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.displayName = 'Paragraph';