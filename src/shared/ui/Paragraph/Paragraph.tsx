import { StyledParagraph } from "./Paragraph.styled";
import { ParagraphProps } from "./Paragraph.types";

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