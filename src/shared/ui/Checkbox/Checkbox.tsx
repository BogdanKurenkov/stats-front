import { forwardRef, useState } from 'react';
import {
  CheckboxContainer,
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  ErrorMessage,
} from './Checkbox.styled';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    label,
    error,
    className = '',
    disabled = false,
    checked: controlledChecked,
    defaultChecked,
    onChange,
    id,
    ...rest
  } = props;

  const [internalChecked, setInternalChecked] = useState(defaultChecked || false);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

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
          aria-invalid={!!error}
          {...rest}
        />
        <StyledCheckbox
          $checked={checked}
          $error={!!error}
          $disabled={disabled}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </StyledCheckbox>
        {label && (
          <Label $disabled={disabled} $error={!!error}>
            {label}
          </Label>
        )}
      </CheckboxWrapper>
      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
    </CheckboxContainer>
  );
});

Checkbox.displayName = 'Checkbox';