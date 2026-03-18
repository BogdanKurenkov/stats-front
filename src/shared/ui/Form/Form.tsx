import { forwardRef } from 'react';
import { StyledForm } from './Form.styled';
import { FormProps } from './Form.types';

export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const { children, onSubmit, ...rest } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <StyledForm ref={ref} onSubmit={handleSubmit} {...rest}>
      {children}
    </StyledForm>
  );
});

Form.displayName = 'Form';