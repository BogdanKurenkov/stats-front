import { StyledTitle } from "./Title.styled";
import { TitleProps } from "./Title.types";

export default function Title({
  as,
  level = 'h1',
  children,
  ...rest
}: TitleProps) {
  const Component = as || level;

  return (
    <StyledTitle as={Component} level={level} {...rest}>
      {children}
    </StyledTitle>
  );
}