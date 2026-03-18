import { forwardRef, useState } from 'react';
import {
  PasswordInputContainer,
  PasswordInputWrapper,
  StyledInput,
  ToggleButton,
  EyeIcon,
  EyeOffIcon,
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
        <label
          htmlFor={inputId}
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: error ? '#f44336' : '#D4D4D4',
          }}
        >
          {label}
        </label>
      )}

      <PasswordInputWrapper>
        <StyledInput
          ref={ref}
          id={inputId}
          type={showPassword ? 'text' : 'password'}
          $hasError={!!error}
          disabled={disabled}
          aria-invalid={!!error}
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