import { StyledParagraph } from "./Paragraph.styled";
import { ParagraphProps } from "./Paragraph.types";

export default function Paragraph({
  as = 'p',
  size = 'md',
  children,
  ...rest
}: ParagraphProps) {
  return (
    <StyledParagraph as={as} size={size} {...rest}>
      {children}
    </StyledParagraph>
  );
}