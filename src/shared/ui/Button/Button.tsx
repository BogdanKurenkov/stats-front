import { forwardRef } from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    ...rest
  } = props;

  return (
    <StyledButton
      ref={ref}
      $variant={variant}
      $size={size}
      type={type}
      {...rest}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';