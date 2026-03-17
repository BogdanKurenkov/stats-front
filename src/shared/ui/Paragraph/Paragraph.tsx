import { StyledParagraph } from "./styled";
import { ParagraphProps } from "./types";

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