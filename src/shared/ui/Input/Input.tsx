import { forwardRef, useId } from 'react';

import type { InputProps } from './Input.types';

import { DEFAULT_CLASSNAME, AUTOCOMPLETE } from './Input.constants';

import {
  InputContainer,
  InputLabel,
  StyledInput,
} from './Input.styled';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className = DEFAULT_CLASSNAME,
      disabled = false,
      id,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const hasError = !!error;

    return (
      <InputContainer className={className}>
        {label && (
          <InputLabel
            htmlFor={inputId}
            $hasError={hasError}
          >
            {label}
          </InputLabel>
        )}

        <StyledInput
          ref={ref}
          id={inputId}
          $hasError={hasError}
          disabled={disabled}
          aria-invalid={hasError}
          autoComplete={AUTOCOMPLETE}
          {...rest}
        />
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';