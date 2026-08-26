import { forwardRef, useState } from 'react';

import type { CheckboxProps } from './Checkbox.types';

import {
  CheckboxContainer,
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  ErrorMessage,
} from './Checkbox.styled';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      className = '',
      disabled = false,
      checked: controlledChecked,
      defaultChecked,
      onChange,
      id,
      ...rest
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked || false);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;
    const hasError = !!error;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalChecked(e.target.checked);
      }
      onChange?.(e);
    };

    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <CheckboxContainer className={className}>
        <CheckboxWrapper htmlFor={checkboxId}>
          <HiddenCheckbox
            ref={ref}
            id={checkboxId}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            aria-invalid={hasError}
            {...rest}
          />
          <StyledCheckbox
            $checked={checked}
            $error={hasError}
            $disabled={disabled}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </StyledCheckbox>
          {label && (
            <Label $disabled={disabled} $error={hasError}>
              {label}
            </Label>
          )}
        </CheckboxWrapper>
        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
      </CheckboxContainer>
    );
  }
);

Checkbox.displayName = 'Checkbox';