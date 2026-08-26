import { forwardRef } from 'react';

import { ButtonProps } from './Button.types';

import { StyledButton } from './Button.styled';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      type = 'button',
      ...rest
    },
    ref
  ) => {
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
  }
);

Button.displayName = 'Button';