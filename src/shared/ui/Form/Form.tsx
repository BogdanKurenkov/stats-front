import { forwardRef, type SyntheticEvent } from 'react';

import type { FormProps } from './Form.types';

import { StyledForm } from './Form.styled';

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, onSubmit, ...rest }, ref) => {
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit?.(e);
    };

    return (
      <StyledForm ref={ref} onSubmit={handleSubmit} {...rest} autoComplete="off">
        {children}
      </StyledForm>
    );
  }
);

Form.displayName = 'Form';