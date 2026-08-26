import type { TitleProps } from "./Title.types";

import { StyledTitle } from "./Title.styled";

export const Title = ({
  as,
  level = 'h1',
  children,
  ...rest
}: TitleProps) => {
  const Component = as || level;

  return (
    <StyledTitle as={Component} level={level} {...rest}>
      {children}
    </StyledTitle>
  );
};

Title.displayName = 'Title';