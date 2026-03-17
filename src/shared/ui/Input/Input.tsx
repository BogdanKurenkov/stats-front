import { forwardRef } from 'react';
import {
  InputContainer,
  InputLabel,
  StyledInput,
  ErrorMessage
} from './Input.styled';
import { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    error,
    className = '',
    disabled = false,
    id,
    ...rest
  } = props;

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <InputContainer className={className}>
      {label && (
        <InputLabel
          htmlFor={inputId}
          $hasError={!!error}
        >
          {label}
        </InputLabel>
      )}

      <StyledInput
        ref={ref}
        id={inputId}
        $hasError={!!error}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      />

      {error && (
        <ErrorMessage id={`${inputId}-error`} role="alert">
          {error}
        </ErrorMessage>
      )}
    </InputContainer>
  );
});

Input.displayName = 'Input';