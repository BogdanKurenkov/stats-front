import { forwardRef, useState } from 'react';
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
import { ToggleProps } from './Toggle.types';

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
  const {
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
          aria-invalid={!!error}
          {...rest}
        />
        <ToggleTrack
          $checked={checked}
          $disabled={disabled}
          $error={!!error}
          aria-hidden="true"
        />
        {(label || description) && (
          <LabelsContainer>
            {label && (
              <Label $disabled={disabled} $error={!!error}>
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
});

Toggle.displayName = 'Toggle';