import { forwardRef, useId } from 'react';
import {
  InputContainer,
  InputLabel,
  StyledInput,
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

  const generatedId = useId();
  const inputId = id || generatedId;

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
        {...rest}
      />
    </InputContainer>
  );
});

Input.displayName = 'Input';