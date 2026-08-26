import { forwardRef, useState } from 'react';

import type { ToggleProps } from './Toggle.types';

import {
  ToggleContainer,
  ToggleWrapper,
  HiddenToggle,
  ToggleTrack,
  LabelsContainer,
  Label,
  Description,
  ErrorMessage,
} from './Toggle.styled';

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      description,
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

    const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <ToggleContainer className={className}>
        <ToggleWrapper htmlFor={toggleId}>
          <HiddenToggle
            ref={ref}
            id={toggleId}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            aria-invalid={hasError}
            {...rest}
          />
          <ToggleTrack
            $checked={checked}
            $disabled={disabled}
            $error={hasError}
            aria-hidden="true"
          />
          {(label || description) && (
            <LabelsContainer>
              {label && (
                <Label $disabled={disabled} $error={hasError}>
                  {label}
                </Label>
              )}
              {description && (
                <Description $disabled={disabled}>
                  {description}
                </Description>
              )}
            </LabelsContainer>
          )}
        </ToggleWrapper>
        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
      </ToggleContainer>
    );
  }
);

Toggle.displayName = 'Toggle';