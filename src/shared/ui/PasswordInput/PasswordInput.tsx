import { forwardRef, useState } from 'react';
import {
  PasswordInputContainer,
  PasswordInputWrapper,
  StyledInput,
  ToggleButton,
  EyeIcon,
  EyeOffIcon,
  PasswordLabel,
} from './PasswordInput.styled';
import { PasswordInputProps } from './PasswordInput.types';

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const {
    label,
    error,
    className = '',
    disabled = false,
    id,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const inputId = id || `password-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <PasswordInputContainer className={className}>
      {label && (
        <PasswordLabel
          htmlFor={inputId}
          $hasError={!!error}
        >
          {label}
        </PasswordLabel>
      )}

      <PasswordInputWrapper>
        <StyledInput
          ref={ref}
          id={inputId}
          type={showPassword ? 'text' : 'password'}
          $hasError={!!error}
          disabled={disabled}
          aria-invalid={!!error}
          autoComplete="new-password"
          {...rest}
        />

        <ToggleButton
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          disabled={disabled}
          aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </ToggleButton>
      </PasswordInputWrapper>
    </PasswordInputContainer>
  );
});

PasswordInput.displayName = 'PasswordInput';