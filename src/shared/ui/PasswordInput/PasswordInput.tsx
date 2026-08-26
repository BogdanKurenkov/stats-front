import { forwardRef, useState } from 'react';

import type { PasswordInputProps } from './PasswordInput.types';

import {
  PasswordInputContainer,
  PasswordInputWrapper,
  StyledInput,
  ToggleButton,
  EyeIcon,
  EyeOffIcon,
  PasswordLabel,
} from './PasswordInput.styled';

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      label,
      error,
      className = '',
      disabled = false,
      id,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputId = id || `password-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    const handleTogglePassword = () => setShowPassword(!showPassword);

    return (
      <PasswordInputContainer className={className}>
        {label && (
          <PasswordLabel
            htmlFor={inputId}
            $hasError={hasError}
          >
            {label}
          </PasswordLabel>
        )}

        <PasswordInputWrapper>
          <StyledInput
            ref={ref}
            id={inputId}
            type={showPassword ? 'text' : 'password'}
            $hasError={hasError}
            disabled={disabled}
            aria-invalid={hasError}
            autoComplete="new-password"
            {...rest}
          />

          <ToggleButton
            type="button"
            onClick={handleTogglePassword}
            disabled={disabled}
            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </ToggleButton>
        </PasswordInputWrapper>
      </PasswordInputContainer>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';